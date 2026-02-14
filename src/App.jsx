// Import Outlet to render child routes
import { Outlet } from "react-router-dom";

// Import Header component (common layout for all pages)
import Header from "./components/Header";

function App() {
  return (
    <>
      {/* Header will be visible on all pages */}
      <Header />

      <main>
        {/* 
          Outlet renders the matched child route component.
        */}
        <Outlet />
      </main>
    </>
  );
}

export default App;
