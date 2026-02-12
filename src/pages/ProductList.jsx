import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductItem from "../components/ProductItem";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(15);

  const search = useSelector((state) => state.cart.search);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 15);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.slice(0, visibleCount).map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < filteredProducts.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleLoadMore}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-300"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductList;
