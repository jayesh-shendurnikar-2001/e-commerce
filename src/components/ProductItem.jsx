import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

function ProductItem({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.thumbnail}
          alt={product.title}
          loading="lazy"
        />
        <h3>{product.title}</h3>
      </Link>

      <p>₹ {product.price}</p>

      <button onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductItem;
