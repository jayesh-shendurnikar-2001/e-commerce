import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

function ProductItem({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden p-4 flex flex-col h-full">
      
      <Link 
        to={`/product/${product.id}`} 
        className="flex flex-col items-center flex-grow"
      >
        <div className="w-full flex justify-center">
          <img
            src={product.thumbnail}
            alt={product.title}
            loading="lazy"
            className="h-32 sm:h-36 md:h-40 object-contain mb-4"
          />
        </div>

        <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 text-center line-clamp-2">
          {product.title}
        </h3>
      </Link>

      <p className="text-blue-600 font-bold text-base sm:text-lg mt-2 text-center">
        ₹ {product.price}
      </p>

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
