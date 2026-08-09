const fs = require('fs');
const path = require('path');
const https = require('https');
const crypto = require('crypto');

const srcDir = path.join(__dirname, 'src');
const publicImagesDir = path.join(__dirname, 'public', 'images');

if (!fs.existsSync(publicImagesDir)) {
  fs.mkdirSync(publicImagesDir, { recursive: true });
}

const regex = /https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9\-]+\?[^"'\s)\\]+/g;

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      if (file.endsWith('.jsx') || file.endsWith('.css') || file.endsWith('.js')) {
        arrayOfFiles.push(path.join(dirPath, file));
      }
    }
  });

  return arrayOfFiles;
}

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      // Handle redirects if needed, but unsplash usually redirects. Let's add simple redirect support.
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        https.get(res.headers.location, (res2) => {
          if (res2.statusCode === 200) {
            res2.pipe(fs.createWriteStream(filepath))
               .on('error', reject)
               .once('close', () => resolve(filepath));
          } else {
            res2.resume();
            reject(new Error(`Redirect Request Failed With a Status Code: ${res2.statusCode}`));
          }
        }).on('error', reject);
      } else if (res.statusCode === 200) {
        res.pipe(fs.createWriteStream(filepath))
           .on('error', reject)
           .once('close', () => resolve(filepath));
      } else {
        res.resume();
        reject(new Error(`Request Failed With a Status Code: ${res.statusCode}`));
      }
    }).on('error', reject);
  });
};

async function processFiles() {
  const files = getAllFiles(srcDir);
  const downloadedUrls = new Map();

  for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');
    // Using a more robust replace loop since regex might have multiple matches on same line
    const matches = content.match(regex);

    if (matches && matches.length > 0) {
      console.log(`Processing file: ${file} - Found ${matches.length} matches`);
      let updatedContent = content;

      for (const match of matches) {
        const photoIdMatch = match.match(/photo-([a-zA-Z0-9\-]+)/);
        if (!photoIdMatch) continue;
        
        const photoId = photoIdMatch[1];
        const filename = `img_${photoId}.jpg`;
        const localPath = `/images/${filename}`;
        const savePath = path.join(publicImagesDir, filename);

        if (!downloadedUrls.has(match)) {
          if (!fs.existsSync(savePath)) {
            console.log(`Downloading ${match} -> ${filename}`);
            try {
              await downloadImage(match, savePath);
              console.log(`Downloaded ${filename}`);
            } catch (err) {
              console.error(`Failed to download ${match}: ${err.message}`);
              continue;
            }
          }
          downloadedUrls.set(match, localPath);
        }

        updatedContent = updatedContent.split(match).join(downloadedUrls.get(match));
      }

      if (updatedContent !== content) {
        fs.writeFileSync(file, updatedContent, 'utf8');
        console.log(`Updated URLs in ${file}`);
      }
    }
  }
  console.log('Finished processing all files.');
}

processFiles().catch(console.error);
