import { useState } from "react";
import { useSelector } from "react-redux";
import ProductItem from "../components/ProductItem";
import useFetchProducts from "../hooks/useFetchProducts";

function ProductList() {
  const { products, loading, error } = useFetchProducts();
  const [visibleCount, setVisibleCount] = useState(15);

  const search = useSelector((state) => state.cart.search);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 15);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.slice(0, visibleCount).map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>

      {visibleCount < filteredProducts.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleLoadMore}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductList;
