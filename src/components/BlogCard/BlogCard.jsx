import React from 'react';

const BlogCard = ({ post, onReadMore }) => {
  return (
    <div className="blog-card">
      {/* Card Header Content */}
      <div className="blog-card-content">
        <div className="blog-header-row">
          <span className="blog-date">{post.date}</span>
          <span className="blog-category-badge">{post.category}</span>
        </div>
        <h3 className="blog-title">{post.title}</h3>
        <p className="blog-excerpt">{post.excerpt}</p>
      </div>

      {/* Magazine Style Layout: 1 Big Main Image + 2 Side-by-Side Sub Images */}
      <div className="blog-magazine-gallery">
        <div className="blog-main-img-box">
          <img src={post.images[0]} alt={`${post.title} Main`} />
        </div>
        <div className="blog-sub-imgs-row">
          <div className="blog-sub-img-box">
            <img src={post.images[1]} alt={`${post.title} 2`} />
          </div>
          <div className="blog-sub-img-box">
            <img src={post.images[2]} alt={`${post.title} 3`} />
          </div>
        </div>
      </div>

      <div className="blog-footer-action">
        <button 
          className="blog-read-btn" 
          onClick={onReadMore}
        >
          Read Full Article →
        </button>
      </div>
    </div>
  );
};

export default BlogCard;