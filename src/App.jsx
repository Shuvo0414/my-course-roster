import { useState } from "react";
import "./App.css";
import Blogs from "./Components/CourseBlogs.jsx/Blogs";

import Header from "./Components/Header/Header";
import Carts from "./Components/CourseCarts/Carts";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [carts, setCarts] = useState([]);

  // handle btn
  const handleToAddCart = (blog) => {
    const isCourseIteamInCart = carts.find((cart) => cart.id === blog.id);
    if (isCourseIteamInCart) {
      toast("Course already added to cart!", {
        position: "top-center",
        style: {
          width: "450px",
        },
      });
    } else {
      const newCarts = [...carts, blog];
      setCarts(newCarts);
    }
  };
  return (
    <>
      <Header></Header>
      <main className=" container mx-auto px-8 md:px-10 lg:px-24 p-5 my-10 flex gap-8 border border-red-500">
        <Blogs handleToAddCart={handleToAddCart}></Blogs>
        <Carts carts={carts}></Carts>
        <ToastContainer></ToastContainer>
      </main>
    </>
  );
}

export default App;
