import { useEffect, useState } from "react";

/*
  Custom Hook: useFetchProducts
  -----------------------------
  Fetches product list from API
  Used inside ProductList component
*/

const useFetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    fetch("https://dummyjson.com/products?limit=100")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        return res.json();
      })
      .then((data) => {
        if (isMounted) {
          setProducts(data.products);
        }
      })
      .catch(() => {
        if (isMounted) {
          setError("Unable to load products. Please try again later.");
        }
      })
      .finally(() => {
        if (isMounted) {
          setLoading(false);
        }
      });

    // Cleanup function
    return () => {
      isMounted = false;
    };
  }, []);

  return { products, loading, error };
};

export default useFetchProducts;
