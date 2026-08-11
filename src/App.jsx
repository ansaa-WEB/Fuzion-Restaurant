import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { CartProvider, useCart } from './context/CartContext';
import Navbar from './components/nav-bar/Navbar';
import Footer from './components/footer/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/home-page/homepage';
import MenuPage from './pages/menu-page/menupage';
import Chefspage from './pages/chefs-page/chefspage';
import AboutPage from './pages/about-page/aboutpage';
import GalleryPage from './pages/gallery-page/gallerypage';
import Testimonials from './pages/testimonials-page/testimonials';
import BlogPage from './pages/blog-page/blogpage';
import FaqPage from './pages/faq-page/faqpage';
import ContactPage from './pages/contact-page/contactpage';
import Reservation from './pages/reservation/reservation';
import LoginPage from './pages/login-page/loginpage';
import BlogPostDetail from './pages/blog-page/BlogPostDetail';
import Cart from './pages/cart/cart';
import './App.css';

// Page slide & fade transition wrapper component
const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      style={{ width: '100%' }}
    >
      {children}
    </motion.div>
  );
};

// Smart wrapper component to handle context variants and pass props safely to Cart
const CartRoute = () => {
  const cartData = useCart() || {};
  
  const items = cartData.cartItems || cartData.cart || cartData.items || [];
  const updateQty = cartData.updateQuantity || cartData.incrementQuantity || cartData.changeQuantity;
  const remove = cartData.removeFromCart || cartData.deleteItem;
  const clear = cartData.clearCart || cartData.emptyCart;

  return (
    <Cart 
      cartItems={items} 
      updateQuantity={updateQty} 
      removeFromCart={remove} 
      clearCart={clear} 
    />
  );
};

// Animated Routes component to handle location changes
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
        <Route path="/home" element={<PageWrapper><HomePage /></PageWrapper>} />
        <Route path="/menu" element={<PageWrapper><MenuPage /></PageWrapper>} />
        <Route path="/chefs" element={<PageWrapper><Chefspage /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><AboutPage /></PageWrapper>} />
        <Route path="/gallery" element={<PageWrapper><GalleryPage /></PageWrapper>} />
        <Route path="/testimonials" element={<PageWrapper><Testimonials /></PageWrapper>} />
        <Route path="/blog" element={<PageWrapper><BlogPage /></PageWrapper>} />
        <Route path="/faq" element={<PageWrapper><FaqPage /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><ContactPage /></PageWrapper>} />
        <Route path="/reservation" element={<PageWrapper><Reservation /></PageWrapper>} />
        <Route path="/auth" element={<PageWrapper><LoginPage /></PageWrapper>} />
        <Route path="/blog/:id" element={<PageWrapper><BlogPostDetail /></PageWrapper>} />
        <Route path="/cart" element={<PageWrapper><CartRoute /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <CartProvider>
        <ScrollToTop />
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </CartProvider>
    </Router>
  );
}