import { Link, useRouteError } from "react-router-dom";

function NotFound() {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 text-center">
      
      <h1 className="text-7xl sm:text-8xl font-extrabold text-emerald-500">
        404
      </h1>

      <h2 className="mt-4 text-2xl sm:text-3xl font-semibold text-gray-800">
        Page Not Found
      </h2>

      <p className="mt-4 text-gray-600 max-w-md">
        {error?.statusText || 
          "The page you are looking for does not exist."}
      </p>

      <Link to="/">
        <button className="mt-6 bg-emerald-500 text-white px-6 py-3 rounded-lg hover:bg-emerald-600 active:scale-95 transition">
          Go Back Home
        </button>
      </Link>

    </div>
  );
}

export default NotFound;
