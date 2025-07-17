import { useStore } from "@/store/use-store";
import { ShoppingCart, X } from "lucide-react";
import "./sidebar.css";

const cartItems = [
  {
    id: 1,
    name: "Caramel Macchiato",
    price: 4.95,
    quantity: 2,
    image: "/cup.jpg"
  },
  {
    id: 2,
    name: "Vanilla Latte",
    price: 4.25,
    quantity: 1,
    image: "/mug.jpg"
  }
];

export default function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useStore();

  // Close sidebar when clicking outside


  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <>
      {/* Backdrop */}
      <div className={`sidebar-backdrop ${isSidebarOpen ? "active" : ""}`} />
      
      {/* Sidebar */}
      <aside className={`side-bar ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h2>Your Cart</h2>
          <button className="close-button" onClick={closeSidebar} aria-label="Close cart">
            <X/>
          </button>
        </div>

        <div className="sidebar-content">
          {cartItems.length > 0 ? (
            <>
              <div className="cart-items">
                {cartItems.map((item) => (
                  <div key={item.id} className="cart-item">
                    <div className="item-image">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="item-details">
                      <h3>{item.name}</h3>
                      <div className="item-controls">
                        <div className="quantity-controls">
                          <button className="quantity-btn">-</button>
                          <span className="quantity">{item.quantity}</span>
                          <button className="quantity-btn">+</button>
                        </div>
                        <span className="price">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                    <button className="remove-item" aria-label="Remove item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                ))}
              </div>

              <div className="sidebar-footer">
                <div className="total-section">
                  <div className="total-row">
                    <span>Subtotal:</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <div className="total-row">
                    <span>Tax:</span>
                    <span>${(total * 0.08).toFixed(2)}</span>
                  </div>
                  <div className="total-row total">
                    <span>Total:</span>
                    <span>${(total * 1.08).toFixed(2)}</span>
                  </div>
                </div>
                
                <div className="cart-actions">
                  <button className="btn btn-outline">View Cart</button>
                  <button className="btn btn-primary">Checkout</button>
                </div>
              </div>
            </>
          ) : (
            <div className="empty-cart">
              <div className="empty-icon">
                <ShoppingCart size={36}/>
              </div>
              <h3>Your cart is empty</h3>
              <p>Add some delicious Starbucks beverages to get started!</p>
              <button className="btn btn-primary" onClick={closeSidebar}>
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
