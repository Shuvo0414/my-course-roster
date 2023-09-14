import "./App.css";
import Blogs from "./Components/CourseBlogs.jsx/Blogs";
import Carts from "./Components/CourseCart/Carts";
import Header from "./Components/Header/Header";

function App() {
  return (
    <>
      <Header></Header>
      <main className=" container mx-auto px-8 md:px-10 lg:px-24 p-5 my-10 flex gap-8 border border-red-500">
        <Blogs></Blogs>
        <Carts></Carts>
      </main>
    </>
  );
}

export default App;
