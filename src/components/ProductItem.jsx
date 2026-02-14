import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

// ProductItem component receives single product as prop
function ProductItem({ product }) {
  // Create dispatch function to send actions to Redux store
  const dispatch = useDispatch();

  // Function to handle Add to Cart button click
  const handleAddToCart = () => {
    // Dispatch addToCart action with full product object
    dispatch(addToCart(product));
  };

  return (
    // Main product card container
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden p-4 flex flex-col h-full">
      {/* Link to Product Details Page */}
      <Link
        to={`/product/${product.id}`}
        className="flex flex-col items-center flex-grow"
      >
        <div className="w-full flex justify-center">
          <img
            src={product.thumbnail}
            alt={product.title}
            loading="lazy" // Lazy loading for performance
            className="h-32 sm:h-36 md:h-40 object-contain mb-4"
          />
        </div>

        {/* Product title */}
        <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 text-center line-clamp-2">
          {product.title}
        </h3>
      </Link>

      {/* Product Price */}
      <p className="text-blue-600 font-bold text-base sm:text-lg mt-2 text-center">
        ₹ {product.price}
      </p>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 active:scale-95 transition duration-200"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductItem;
