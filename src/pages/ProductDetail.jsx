import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Product not found");
        return res.json();
      })
      .then(setProduct)
      .catch(() => setError("Unable to fetch product details"));
  }, [id]);

  if (error)
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p className="text-red-500 font-medium">{error}</p>
      </div>
    );

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
