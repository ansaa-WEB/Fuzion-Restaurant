import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTrash, FaPlus, FaMinus, FaTag, FaCheckCircle, FaTimes } from 'react-icons/fa';
import './cart.css';

const Cart = ({ cartItems = [], updateQuantity, removeFromCart, clearCart }) => {
  const [promoCode, setPromoCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [appliedPromoName, setAppliedPromoName] = useState('');
  const [promoMessage, setPromoMessage] = useState('');
  const [promoStatus, setPromoStatus] = useState('');

  // Checkout Modal States
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    address: '',
    instructions: ''
  });

  // Safe Calculations
  const itemsList = Array.isArray(cartItems) ? cartItems : [];
  const totalQuantity = itemsList.reduce((acc, item) => acc + (item.quantity || 0), 0);
  const subtotal = itemsList.reduce((acc, item) => acc + ((item.price || 0) * (item.quantity || 0)), 0);

  const packagingCharges = 50;
  const deliveryCharges = 150;

  const originalTotalBeforeDiscount = subtotal + packagingCharges + deliveryCharges;

  const finalTotal = Math.max(0, originalTotalBeforeDiscount - appliedDiscount);

  const handleApplyPromo = () => {
    if (promoCode.trim().toUpperCase() === 'FUZION10') {
      const discount = subtotal * 0.10; // 10% discount on subtotal
      setAppliedDiscount(discount);
      setAppliedPromoName('FUZION10');
      setPromoMessage('Promo applied successfully! (10% OFF)');
      setPromoStatus('success');
    } else {
      setPromoMessage('Invalid promo code.');
      setPromoStatus('error');
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    setOrderPlaced(true);
    if (typeof clearCart === 'function') {
      setTimeout(() => {
        clearCart();
      }, 500);
    }
  };

  const closeModal = () => {
    setIsCheckoutOpen(false);
    setOrderPlaced(false);
    setFormData({ fullName: '', phone: '', address: '', instructions: '' });
  };

  if (itemsList.length === 0 && !orderPlaced) {
    return (
      <div className="cart-page-container">
        <div className="empty-cart-container">
          <div className="empty-cart-icon">🛒</div>
          <h3>Your Cart is Empty</h3>
          <p>You haven't added any delicious dishes to your cart yet. Explore our menu and satisfy your cravings!</p>
          <Link to="/menu" className="explore-menu-btn">Explore Menu</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page-container">
      <div className="cart-header-title">
        <h2>Your Delicious Basket</h2>
        <p>Check your selected dishes and proceed to checkout</p>
      </div>

      <div className="cart-layout-grid">
        {/* Left Side: Cart Items List */}
        <div className="cart-items-list">
          {itemsList.map((item) => (
            <div className="cart-item-card" key={item.id}>
              <div className="cart-item-top">
                <div className="cart-item-img-box">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="cart-item-info">
                  <h4>{item.name}</h4>
                  <span className="cart-item-unit-price">Rs. {item.price} each</span>
                </div>
              </div>

              <div className="cart-item-controls-area">
                <div className="quantity-controls">
                  <button className="qty-btn" onClick={() => updateQuantity && updateQuantity(item.id, item.quantity - 1)}>
                    <FaMinus size={10} />
                  </button>
                  <span className="item-quantity">{item.quantity}</span>
                  <button className="qty-btn" onClick={() => updateQuantity && updateQuantity(item.id, item.quantity + 1)}>
                    <FaPlus size={10} />
                  </button>
                </div>

                <div className="cart-item-subtotal">
                  Rs. {item.price * item.quantity}
                </div>

                <button className="remove-item-btn" onClick={() => removeFromCart && removeFromCart(item.id)} title="Remove Item">
                  <FaTrash size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side: Order Summary Box */}
        <div className="cart-summary-card">
          <h3>Order Summary</h3>
          
          <div className="summary-details">
            <div className="summary-row">
              <span>Total Items</span>
              <span>{totalQuantity}</span>
            </div>

            <div className="summary-divider"></div>

            <div className="summary-row">
              <span>Subtotal</span>
              <span>Rs. {subtotal}</span>
            </div>
            <div className="summary-row">
              <span>Packaging Charges</span>
              <span>Rs. {packagingCharges}</span>
            </div>
            <div className="summary-row">
              <span>Delivery Charges</span>
              <span>Rs. {deliveryCharges}</span>
            </div>

            {/* Before / After Promo Code Pricing display */}
            {appliedDiscount > 0 ? (
              <>
                <div className="summary-row">
                  <span>Original Total</span>
                  <span style={{ textDecoration: 'line-through', color: '#888' }}>
                    Rs. {originalTotalBeforeDiscount}
                  </span>
                </div>
                <div className="summary-row discount-row">
                  <span>Discount ({appliedPromoName})</span>
                  <span>- Rs. {Math.round(appliedDiscount)}</span>
                </div>
              </>
            ) : null}
          </div>

          {/* Promo Code Input Section */}
          <div className="promo-box">
            <div className="promo-input-wrapper">
              <FaTag className="promo-icon" />
              <input 
                type="text" 
                placeholder="Enter promo code (e.g. FUZION10)" 
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
              />
              <button className="apply-promo-btn" onClick={handleApplyPromo}>Apply</button>
            </div>
            {promoMessage && (
              <p className={`promo-msg ${promoStatus}`}>{promoMessage}</p>
            )}
          </div>

          <div className="summary-total-row">
            <span>Total Payable</span>
            <span>Rs. {Math.round(finalTotal)}</span>
          </div>

          <button className="checkout-btn" onClick={() => setIsCheckoutOpen(true)}>
            Proceed to Checkout
          </button>

          <Link to="/menu" className="continue-shopping-link">← Continue Shopping</Link>
        </div>
      </div>

      {/* Checkout Modal */}
      {isCheckoutOpen && (
        <div className="checkout-modal-overlay">
          <div className="checkout-modal-content">
            <button className="close-modal-btn" onClick={closeModal}>
              <FaTimes size={20} />
            </button>

            {orderPlaced ? (
              <div className="order-success-box">
                <FaCheckCircle className="success-icon" />
                <h3>Order Placed Successfully!</h3>
                <p>Thank you for your order, <strong>{formData.fullName}</strong>. Your food is being prepared and will be delivered shortly.</p>
                <button className="checkout-btn" onClick={closeModal} style={{ marginTop: '20px' }}>
                  Back to Menu
                </button>
              </div>
            ) : (
              <form onSubmit={handleCheckoutSubmit} className="checkout-form">
                <h3>Secure Checkout</h3>
                <p className="modal-subtitle">Please enter your details to complete the order.</p>

                <div className="form-group">
                  <label>Full Name *</label>
                  <input 
                    type="text" 
                    name="fullName" 
                    required 
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label>Phone Number *</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    required 
                    placeholder="e.g. 03001234567"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label>Delivery Address *</label>
                  <textarea 
                    name="address" 
                    required 
                    rows="3"
                    placeholder="Enter complete street address, area, city"
                    value={formData.address}
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                <div className="form-group">
                  <label>Special Instructions (Optional)</label>
                  <input 
                    type="text" 
                    name="instructions" 
                    placeholder="e.g. Less spicy, ring the bell"
                    value={formData.instructions}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="modal-total-display">
                  <span>Total Payable:</span>
                  <span className="modal-price">Rs. {Math.round(finalTotal)}</span>
                </div>

                <button type="submit" className="checkout-btn">
                  Confirm Order
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;