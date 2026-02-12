import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../features/cart/cartSlice";
import { selectCartItems, selectCartTotal } from "../features/cart/cartSelectors";
import { useState } from "react";

function Checkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

  const [ordered, setOrdered] = useState(false);

  const placeOrder = (e) => {
    e.preventDefault();
    setOrdered(true);
    dispatch(clearCart());

 
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-6 md:p-10">
        
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Checkout
        </h2>

        {ordered && (
          <p className="mb-6 text-green-600 font-semibold text-center">
            ✅ Order placed successfully!
          </p>
        )}

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Left: Form */}
          <form onSubmit={placeOrder} className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-700">
              Shipping Details
            </h3>

            <input
              required
              placeholder="Full Name"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />

            <input
              required
              placeholder="Address"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />

            <input
              required
              placeholder="Phone Number"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />

            <button
              type="submit"
              className="w-full bg-emerald-500 text-white py-3 rounded-lg hover:bg-emerald-600 active:scale-95 transition"
            >
              Place Order
            </button>
          </form>

          {/* Right: Order Summary */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-inner">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Order Summary
            </h3>

            <div className="space-y-2 max-h-48 overflow-y-auto">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between text-gray-600"
                >
                  <span>
                    {item.title} × {item.quantity}
                  </span>
                  <span>
                    ₹ {item.price * item.quantity}
                  </span>
                </div>
              ))}
            </div>

            <hr className="my-4" />

            <div className="flex justify-between text-lg font-bold text-gray-800">
              <span>Total</span>
              <span>₹ {total}</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Checkout;
