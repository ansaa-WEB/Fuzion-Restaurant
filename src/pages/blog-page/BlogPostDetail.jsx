import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './BlogPostDetail.css';

const allBlogPosts = [
 {
    id: 1,
    title: 'The Art of Slow-Cooking Authentic Biryani',
    category: 'Traditional Recipes',
    date: 'August 6, 2026',
    excerpt: 'Discover the heritage and intricate spice blends that give our signature biryani its legendary rich flavor and aroma.',
    images: [
      'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80&w=600'
    ],
    introduction: 'Authentic biryani is not just a dish; it is a grand celebration of heritage, patience, and royal spice craft. Originating from the royal kitchens of the subcontinent, the secret lies in the meticulous balancing of aromatic basmati rice, tender succulent meat, and rich ghee-infused gravies.',
    ingredients: [
      'Long-grain aged Basmati rice (soaked for 30 minutes)',
      'Choice of meat (tender mutton or marinated chicken)',
      'Pure Desi Ghee and saffron-infused warm milk',
      'Hand-pounded whole spices (cardamom, cloves, star anise, cinnamon)',
      'Fresh mint, coriander, and caramelized golden onions (birista)'
    ],
    steps: [
      'Marinate the meat overnight with thick yogurt, ginger-garlic paste, raw papaya, and our proprietary spice mix.',
      'Boil the aged basmati rice with whole spices until it is precisely 70% cooked (semi-done).',
      'Layer the marinated meat at the bottom of a heavy-bottomed handi, followed by the fragrant rice layers.',
      'Seal the handi tightly with dough (dum technique) and cook on slow wood-fire heat for 45 minutes to let the flavors lock in.'
    ],
    chefTip: 'Never rush the Dum process. Opening the lid too early releases the trapped aromatic steam that gives the rice its signature texture.'
  },
  {
    id: 2,
    title: 'Crafting the Ultimate Juicy Burger at Home',
    category: 'Kitchen Secrets',
    date: 'August 9, 2026',
    excerpt: 'Learn how meat fat ratios, secret sauces, and toasted brioche buns combine to make the perfect burger experience.',
    images: [
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=600'
    ],
    introduction: 'A great burger is an art of balance—combining a succulent, juicy patty with fresh crisp toppings and a soft, toasted bun. Our signature guide brings professional burger-making secrets straight to your home kitchen.',
    ingredients: [
      'Fresh ground beef or chicken patties (80/20 meat-to-fat ratio)',
      'Soft brioche or sesame burger buns',
      'Melted cheddar or American cheese slices',
      'Crisp iceberg lettuce and ripe tomato slices',
      'Secret house special burger sauce or smoky mayo'
    ],
    steps: [
      'Season your meat patties generously with salt and black pepper just before cooking.',
      'Sear the patties on a hot cast-iron skillet for 3-4 minutes per side to lock in juices.',
      'Place a cheese slice on top during the last minute of cooking to let it melt perfectly.',
      'Toast your buttered brioche buns until golden brown and assemble with fresh veggies and secret sauce.'
    ],
    chefTip: 'Never press down on your burger patties while cooking with a spatula; it squeezes out all the delicious natural juices and makes the meat dry.'
  },
  {
    id: 3,
    title: 'Fine Dining Etiquette & The Perfect Ambiance',
    category: 'Dining Experience',
    date: 'August 1, 2026',
    excerpt: 'Why lighting, soothing background melodies, and elegant table setups elevate a simple meal into an unforgettable evening.',
    images: [
      '/images/img_1517248135467-4c7edcad34c4.jpg',
      '/images/img_1550966871-3ed3cdb5ed0c.jpg',
      '/images/img_1578474846511-04ba529f0b88.jpg'
    ],
    introduction: 'A truly memorable dining experience goes beyond exceptional food. It engages all five senses, creating a symphony of lighting, sound, texture, and aroma.',
    ingredients: [
      'Warm ambient lighting to set a relaxed, intimate tone',
      'Subtle instrumental background melodies',
      'Immaculately polished cutlery and crisp linen setups',
      'Attentive, seamless hospitality service'
    ],
    steps: [
      'Step into an environment curated for peace and luxury away from city hustle.',
      'Allow our greeting hosts to guide you to your customized reserved seating.',
      'Experience courses paced thoughtfully to allow conversation and appreciation of flavors.'
    ],
    chefTip: 'Take a moment to inhale the aroma of your dish before the first bite; olfactory senses heighten taste perception by up to 80%.'
  },
  {
    id: 4,
    title: 'The Secret to Crispy & Juicy Seekh Kebabs',
    category: 'Traditional Recipes',
    date: 'July 28, 2026',
    excerpt: 'Learn how proper meat mincing and charcoal grilling give our seekh kebabs their distinct melt-in-mouth texture.',
    images: [
      '/images/Chicken Seekh Kebabs.jpg',
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800'
    ],
    introduction: 'Achieving the ideal balance of a charred, smoky exterior and an ultra-juicy interior is the ultimate test of a master griller.',
    ingredients: [
      'Finely minced lamb or chicken with optimal fat content',
      'Raw papaya paste as a natural tenderizer',
      'Fresh green chilies, cilantro, and roasted cumin powder',
      'Charcoal piece for live smoke infusion (Dungar method)'
    ],
    steps: [
      'Mince the meat twice to ensure a smooth, uniform texture that binds well around skewers.',
      'Mix in fats, herbs, and spices, then let the mixture rest in a chiller for 2 hours.',
      'Mould the mix evenly onto flat iron skewers using wet hands.',
      'Grill over roaring hot charcoal embers, rotating continuously until evenly charred.'
    ],
    chefTip: 'Never skip fat in your mince; lean meat alone will make the kebabs dry and tough on the grill.'
  },
  {
    id: 5,
    title: 'Refreshing Summer Mocktails & Special Drinks',
    category: 'Beverages',
    date: 'July 22, 2026',
    excerpt: 'Explore our exotic range of mint lemonades, mango smoothies, and cold brews designed to beat the summer heat.',
    images: [
      'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&q=80&w=800'
    ],
    introduction: 'Beat the seasonal heat with handcrafted elixirs designed to refresh your palate and invigorate your senses.',
    ingredients: [
      'Fresh mint leaves',
      'Alphonso mango puree',
      'Sparkling soda water',
      'Crushed ice and citrus slices'
    ],
    steps: [
      'Muddle fresh mint leaves with lime juice and organic cane sugar syrup.',
      'Add crushed ice to the brim to ensure maximum chill retention.',
      'Top with premium fruit purees or sparkling water and garnish with fresh herbs.'
    ],
    chefTip: 'Always slap fresh mint leaves gently between your palms before adding them to release their essential aromatic oils.'
  },
  {
    id: 6,
    title: 'Indulging in Royal Desserts: From Tiramisu to Gulab Jamun',
    category: 'Chef Special',
    date: 'July 15, 2026',
    excerpt: 'A sweet journey exploring how we blend classic Italian desserts with rich traditional South Asian sweets.',
    images: [
      '/images/From Tiramisu to Gulab Jamun blog 1.jpg',
      '/images/From Tiramisu to Gulab Jamun blog 2.jpg',
      '/images/From Tiramisu to Gulab Jamun blog 3.jpg'
    ],
    introduction: 'Dessert is the grand finale of any exceptional dining experience. We bridge cultures by offering both comforting local favorites and global delights.',
    ingredients: [
      'Khoya (reduced milk solids) and paneer for soft gulab jamuns',
      'Cardamom-infused sugar syrup with rose water',
      'Mascarpone cheese, espresso, and ladyfingers for tiramisu',
      'Dusted high-grade cocoa powder'
    ],
    steps: [
      'Knead the milk solids smoothly without cracks to ensure flawless jamun balls.',
      'Fry slowly on medium-low ghee until golden brown, then soak in warm sugar syrup.',
      'Layer espresso-soaked ladyfingers with whipped mascarpone cream for our signature fusion tiramisu.'
    ],
    chefTip: 'Ensure your sugar syrup is warm, not boiling hot, when dropping in freshly fried gulab jamun to avoid a hard core.'
  }
];

export default function BlogPostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = allBlogPosts.find(p => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="blog-not-found">
        <h2>Article not found!</h2>
        <button onClick={() => navigate('/blog')} className="blog-back-btn">
          Back to Blog
        </button>
      </div>
    );
  }

  return (
    <div className="blog-detail-page">
      <div className="blog-detail-wrapper">
        
        {/* Back Button */}
        <button onClick={() => navigate('/blog')} className="blog-back-btn">
          ← Back to Blog
        </button>

        {/* Category & Date */}
        <div className="blog-detail-meta">
          <span className="blog-detail-category">{post.category}</span>
          <span className="blog-detail-date">{post.date}</span>
        </div>

        {/* Title */}
        <h1 className="blog-detail-title">{post.title}</h1>

        {/* Excerpt / Subtitle */}
        <p className="blog-detail-excerpt">"{post.excerpt}"</p>

        {/* Main Hero Image */}
        <div className="blog-detail-hero-img">
          <img src={post.images[0]} alt={post.title} />
        </div>

        {/* Introduction */}
        <div className="blog-detail-intro">
          <p>{post.introduction}</p>
        </div>

        {/* Ingredients Section */}
        {post.ingredients && (
          <div className="blog-ingredients-box">
            <h3>Key Highlights & Ingredients</h3>
            <ul>
              {post.ingredients.map((ing, idx) => (
                <li key={idx}>{ing}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Sub Images Gallery */}
        <div className="blog-detail-sub-gallery">
          <div className="blog-sub-img-card">
            <img src={post.images[1]} alt="Detail 1" />
          </div>
          <div className="blog-sub-img-card">
            <img src={post.images[2]} alt="Detail 2" />
          </div>
        </div>

        {/* Step-by-Step Instructions */}
        {post.steps && (
          <div className="blog-steps-container">
            <h3>Step-by-Step Preparation</h3>
            <div className="blog-steps-list">
              {post.steps.map((step, idx) => (
                <div className="blog-step-item" key={idx}>
                  <span className="blog-step-number">{idx + 1}</span>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Chef Secret Tip Box */}
        {post.chefTip && (
          <div className="blog-chef-tip-box">
            <h4>Chef's Secret Tip 👨‍🍳</h4>
            <p>"{post.chefTip}"</p>
          </div>
        )}

      </div>
    </div>
  );
}