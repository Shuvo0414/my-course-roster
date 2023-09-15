import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Blog from "../CourseBlog/Blog";

const Blogs = ({ handleToAddCart }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    // fetch course blogs
    fetch("course.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <Blog
            key={blog.id}
            blog={blog}
            handleToAddCart={handleToAddCart}
          ></Blog>
        ))}
      </div>
    </div>
  );
};

Blogs.propTypes = {
  handleToAddCart: PropTypes.func.isRequired,
};
export default Blogs;
