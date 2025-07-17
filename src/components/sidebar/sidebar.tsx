import { useSidebar } from "@/store/use-sidebar";
import { ShoppingCart, X } from "lucide-react";
import "./sidebar.css";
import { useProducts } from "@/store/use-products";

export default function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useSidebar();
  const { products, removeProduct, cleanProducts,decreaseQuantity, increaseQuantity } = useProducts();


  const total = products.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0
  );

  const handleClean = ()=>{
    cleanProducts()
  }



  return (
    <>
      {/* Backdrop */}
      <div className={`sidebar-backdrop ${isSidebarOpen ? "active" : ""}`} />

      {/* Sidebar */}
      <aside className={`side-bar ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h2>Your Cart</h2>
          <button
            className="close-button"
            onClick={closeSidebar}
            aria-label="Close cart"
          >
            <X />
          </button>
        </div>

        <div className="sidebar-content">
          {products.length > 0 ? (
            <>
              <div className="cart-items">
                {products.map((item) => (
                  <div key={item.id} className="cart-item">
                    <div className="item-image">
                      <img src={item.img} alt={item.name} />
                    </div>
                    <div className="item-details">
                      <h3>{item.name}</h3>
                      <div className="item-controls">
                        <div className="quantity-controls">
                          <button className="quantity-btn" onClick={()=> decreaseQuantity(item.id)}>-</button>
                          <span className="quantity">{item.quantity}</span>
                          <button className="quantity-btn" onClick={()=> increaseQuantity(item.id)}>+</button>
                        </div>
                        <span className="price">
                          ${Number(parseFloat(item.price as string) * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                    <button className="remove-item" aria-label="Remove item" onClick={() => removeProduct(item.id)}>
                      <X/>
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
                  <button className="btn btn-outline" onClick={handleClean}>Remove all</button>
                  <button className="btn btn-primary">Checkout</button>
                </div>
              </div>
            </>
          ) : (
            <div className="empty-cart">
              <div className="empty-icon">
                <ShoppingCart size={36} />
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
