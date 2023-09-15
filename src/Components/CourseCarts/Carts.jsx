import PropTypes from "prop-types";
import Cart from "../CourseCart/Cart";

const Carts = ({ carts, totalCreditHours }) => {
  let totalCredits = 0;
  for (const cart of carts) {
    totalCredits += cart.credit;
  }
  const remainingCreditHours = 20 - totalCredits;

  return (
    <div>
      <div className="mt-6 p-4">
        <h1 className="text-xl font-bold text-[#2F80ED]">
          Credit Hour Remaining {remainingCreditHours} hr
        </h1>
      </div>
      <hr className=" w-[264px] mx-auto" />
      <div className=" w-[312px] bg-white rounded-xl shadow-lg  p-6">
        <h1 className=" text-xl font-bold">Course Name</h1>

        {carts.map((cart, index) => (
          <Cart key={cart.id} cart={cart} index={index}></Cart>
        ))}
        <hr className=" w-[264px] mx-auto mt-6" />
        <div>
          <p className=" text-base font-medium text-[#1C1B1B99] mt-4">
            Total Credit Hour : {totalCreditHours}
          </p>
        </div>
      </div>
    </div>
  );
};

Carts.propTypes = {
  carts: PropTypes.array.isRequired,
  totalCreditHours: PropTypes.number.isRequired,
};

export default Carts;
