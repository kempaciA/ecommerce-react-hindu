import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "swiper/css";

// bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

// fonts and icons
import "././assets/css/icofont.min.css";
import "././assets/css/animate.css";
import "././assets/css/style.min.css";

import Home from "./home/Home.jsx";
import Blog from "./Blog/Blog.jsx";
import Shop from "./shop/Shop.jsx";


import SingleProduct from "./shop/SingleProduct.jsx";
import CartPage from "./shop/CartPage.jsx";
import SingleBlog from "./Blog/SingleBlog.jsx";



import About from "./About/About.jsx";
import Contact from "./Contact/Contact.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/blog", element: <Blog /> },
      {path: "/blog/:id", element: <SingleBlog /> },
      {path: "/shop", element: <Shop />},
      {path: "shop/:id", element: <SingleProduct />},
      {path: "/cart-page", element: <CartPage />},
      {path: "/about", element: <About />},
      {path: "/contact", element: <Contact />}
    ],
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
