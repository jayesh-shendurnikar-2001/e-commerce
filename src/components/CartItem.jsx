import { useDispatch } from "react-redux";
// Import cart actions from cartSlice
import {
  increaseQty,
  decreaseQty,
  removeFromCart,
} from "../features/cart/cartSlice";

// CartItem component receives single cart item as prop
function CartItem({ item }) {

    // dispatch function to send actions to Redux
  const dispatch = useDispatch();

  return (
    <div className="bg-white shadow-md rounded-xl p-4 flex flex-col sm:flex-row items-center gap-4">
      
      {/* Product Image */}
      <img
        src={item.thumbnail}
        alt={item.title}
        loading="lazy"
        className="w-24 h-24 object-contain"
      />

      {/* Product Details */}
      <div className="flex-1 w-full text-center sm:text-left">
        <h3 className="text-lg font-semibold text-gray-800">
          {item.title}
        </h3>

        <p className="text-blue-600 font-bold mt-1">
          ₹ {item.price}
        </p>

        {/* Quantity Controls */}
        <div className="flex items-center justify-center sm:justify-start gap-3 mt-3">
          
          <button
            onClick={() => dispatch(decreaseQty(item.id))}
            className="w-8 h-8 bg-gray-200 rounded-full hover:bg-gray-300 transition"
          >
            -
          </button>

          <span className="font-medium text-lg">
            {item.quantity}
          </span>

          <button
            onClick={() => dispatch(increaseQty(item.id))}
            className="w-8 h-8 bg-gray-200 rounded-full hover:bg-gray-300 transition"
          >
            +
          </button>

        </div>

        {/* Remove Button */}
        <button
          onClick={() => dispatch(removeFromCart(item.id))}
          className="mt-3 text-red-500 hover:text-red-700 text-sm font-medium"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;
