// Import ProductList component to display all products
import ProductList from "./ProductList";

function Home() {
  return (
    // Main section of Home page
    <section>

      {/* Page Heading */}
      <h2 className="text-center text-2xl mt-1.5">
        Products
      </h2>

      {/* Display list of all products */}
      <ProductList />

    </section>
  );
}

// Export Home component
export default Home;
