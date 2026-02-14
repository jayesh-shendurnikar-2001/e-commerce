import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import {
  selectCartItems,
  selectCartTotal,
} from "../features/cart/cartSelectors";

function Cart() {
  // Get all cart items from Redux store
  const items = useSelector(selectCartItems);

  // Get total cart price from Redux store
  const total = useSelector(selectCartTotal);

    // If cart is empty, show empty message
  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold text-gray-700">
          Your cart is empty 🛒
        </h2>

          {/* Button to go back to shopping page */}
        <Link
          to="/"
          className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

   // If cart has items
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        Your Cart
      </h2>

      {/* Cart Items */}
      <div className="space-y-4">
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      {/* Total Section */}
      <div className="mt-8 bg-white shadow-md rounded-xl p-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        
        <h3 className="text-xl font-semibold text-gray-800">
          Total: ₹ {total}
        </h3>

        <Link to="/checkout">
          <button className="w-full sm:w-auto bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
            Checkout
          </button>
        </Link>

      </div>
    </div>
  );
}

export default Cart;
