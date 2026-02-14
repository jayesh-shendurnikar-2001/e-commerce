import { useEffect, useState } from "react";

// Import hook to get route parameter (product id)
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

function ProductDetail() {
  // Get product id from URL (example: /product/5)
  const { id } = useParams();

  // Redux dispatch function
  const dispatch = useDispatch();

  // Local state to store fetched product data
  const [product, setProduct] = useState(null);

  // Local state to store error message
  const [error, setError] = useState(null);

  // Fetch product details when component mounts or id changes
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        // If response not OK, throw error
        if (!res.ok) throw new Error("Product not found");
        return res.json();
      })
      // Save product data into state
      .then(setProduct)
      .catch(() => setError("Unable to fetch product details"));
  }, [id]); // Dependency array ensures refetch if id changes

  // If there is an error, show error message
  if (error)
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p className="text-red-500 font-medium">{error}</p>
      </div>
    );

  // If product is still loading, show spinner
  if (!product)
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={product.thumbnail}
            alt={product.title}
            loading="lazy"
            className="w-72 sm:w-80 md:w-full object-contain rounded-xl shadow-lg"
          />
        </div>

        {/* Details Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
            {product.title}
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            {product.description}
          </p>

          <h3 className="mt-6 text-xl sm:text-2xl font-bold text-blue-600">
            ₹ {product.price}
          </h3>

          <button
            onClick={() => dispatch(addToCart(product))}
            className="mt-6 w-full sm:w-auto bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 active:scale-95 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
