import { useEffect, useState } from "react";

/*
  Custom Hook: useFetchProducts
  -----------------------------
  Fetches product list from API
*/

const useFetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch("https://dummyjson.com/products?limit=100", {
      signal: controller.signal,
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data.products);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setError("Unable to load products. Please try again later.");
        }
      })
      .finally(() => {
        setLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return { products, loading, error };
};

export default useFetchProducts;
