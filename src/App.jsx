import { useEffect, useState } from "react";
import "./App.css";
import Blogs from "./Components/CourseBlogs.jsx/Blogs";

import Header from "./Components/Header/Header";
import Carts from "./Components/CourseCarts/Carts";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [carts, setCarts] = useState([]);
  const [totalCreditHours, setTotalCreditHours] = useState(0);

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
      if (
        totalCreditHours + blog.credit >= 0 &&
        totalCreditHours + blog.credit <= 20
      ) {
        const newCarts = [...carts, blog];
        setCarts(newCarts);
        setTotalCreditHours(totalCreditHours + blog.credit);
      } else {
        toast("You don't have enough credit hours to add this course.", {
          position: "top-center",
          style: {
            width: "450px",
          },
        });
      }
    }
  };
  useEffect(() => {
    if (totalCreditHours === 20) {
      toast("You have reached the maximum credit hours (20)!", {
        position: "top-center",
        style: {
          width: "450px",
        },
      });
    }
  }, [totalCreditHours]);
  return (
    <>
      <Header></Header>
      <main className=" container mx-auto px-8 md:px-10 lg:px-24 p-5 my-10 flex gap-8 border border-red-500">
        <Blogs handleToAddCart={handleToAddCart}></Blogs>
        <Carts carts={carts} totalCreditHours={totalCreditHours}></Carts>
        <ToastContainer></ToastContainer>
      </main>
    </>
  );
}

export default App;
