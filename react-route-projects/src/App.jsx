import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "*",
    element: <h1>404 Not Found</h1>,
  },
  {
    path: "/dashboard/*",
    element: <h1>404 Not Found</h1>,
  },
  {
    path: "/about/*",
    element: <h1>404 Not Found</h1>,
  },
  {
    path: "/home/*",
    element: <h1>404 Not Found</h1>,
  },
  {
    path: "/projects",
    element: <h1>Projects Page</h1>,
  },
  {
    path: "/projects/*",
    element: <h1>Projects Page</h1>,
  },
]);
function App() {
  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}
export default App;
