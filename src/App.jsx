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
  const [totaPrice, setTotalPrice] = useState(0);

  // handle btn
  const handleToAddCart = (blog) => {
    const isCourseIteamInCart = carts.find((cart) => cart.id === blog.id);

    // display a toast message if the course is already in the cart
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
        // check if there are no active toasts before updating the total price
        if (!toast.isActive("true")) {
          setTotalPrice(totaPrice + blog.price);
        }
        // display a toast message if there are don't have enough credit hours
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
      // display a toast message when the maximum credit hours are reached
      toast(
        "You have used all your remaining credit hours. Now your remaining hour is(0)",
        {
          position: "top-center",
          style: {
            width: "450px",
          },
        }
      );
    }
  }, [totalCreditHours]);
  return (
    <>
      <Header></Header>
      <main className=" container mx-auto px-8 md:px-10 lg:px-24 p-5 my-10 flex flex-col lg:flex-row gap-8 ">
        {/* render the Blogs component and pass in the handleToAddCart prop */}
        <Blogs handleToAddCart={handleToAddCart}></Blogs>

        {/* Render the Carts component  */}
        <Carts
          carts={carts}
          totalCreditHours={totalCreditHours}
          totaPrice={totaPrice}
        ></Carts>

        {/* ToastContainer component for displaying notifications  */}
        <ToastContainer></ToastContainer>
      </main>
    </>
  );
}

export default App;
