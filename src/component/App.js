import "../App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./navbar";
import Home from "../Pages/Home";
import Signup from "../Pages/signUP";
import Signin from "../Pages/signin";
import NewsDetails from "./newsdetails";
import Favorite from "../Pages/favorite";
import { useEffect, useState } from "react";


function App() {
  const [news, setNews] = useState([]);
  const [fav, setFav] = useState([]);

  const getData = async () => {
    try {
      // const response = await axios(
      //   "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=c4015268c4eb4683a491909ba85aad43"
      // );
      // //console.log(response.data.articles);
      // setNews(response.data.articles);
      const response = await fetch(
        "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=c4015268c4eb4683a491909ba85aad43"
      );
      //console.log(response);
      const data = await response.json();
      console.log(data);
      setNews(data.articles);
    } catch (err) {
      console.log(" error in geting data", err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handlefav = (data) => {
    console.log(data);
    setFav((prevFav) => [...prevFav, data]);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        { index: true, element: <Home news={news} /> }, // The default route when no child route matches
        { path: "/signup", element: <Signup /> },
        { path: "/login", element: <Signin /> },
        { path: "/favorite", element: <Favorite favorites={fav} /> },
        {
          path: "/newsdetails/:id",
          element: <NewsDetails news={news} onhandlefav={handlefav} />,
        },
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
