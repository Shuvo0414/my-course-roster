import { useEffect, useState } from "react";
import Blog from "../CourseBlog/Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("course.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="">
      <h1>blogs {blogs.length}</h1>
      <div className=" grid grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog}></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
