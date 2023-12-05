import "../App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./navbar";
import Home from "../Pages/Home";
import Signup from "../Pages/signUP";
import Signin from "../Pages/signin";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        { index: true, element: <Home /> }, // The default route when no child route matches
        { path: "/signup", element: <Signup /> },
        { path: "/login", element: <Signin /> },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
