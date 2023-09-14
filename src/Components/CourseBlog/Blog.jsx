import PropTypes from "prop-types";

const Blog = ({ blog, handleToAddCart }) => {
  const { image, title, course_details, price, credit } = blog;
  //   console.log(blog);
  return (
    <div className="  bg-white rounded-xl shadow-lg">
      <div className=" w-[312px] p-4">
        <img src={image} alt="" />
        <h1 className=" text-lg font-semibold mt-4"> {title}</h1>
        <p className=" text-sm font-normal text-[#1C1B1B99]">
          {course_details}
        </p>
        <div className=" flex justify-between items-center">
          <p className=" text-base font-medium text-[#1C1B1B99] mt-4">
            <span>$ Price:</span> {price}
          </p>
          <span className=" text-sm font-medium text-[#1C1B1B99]">
            Credit: {credit}hr
          </span>
        </div>
        <button
          onClick={() => handleToAddCart(blog)}
          className=" mt-6 w-[280px] py-2 rounded-lg bg-[#2F80ED] text-white"
        >
          Select
        </button>
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleToAddCart: PropTypes.func.isRequired,
};

export default Blog;
