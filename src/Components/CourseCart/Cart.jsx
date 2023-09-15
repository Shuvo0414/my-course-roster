import Proptypes from "prop-types";

const Cart = ({ cart, index }) => {
  const { title } = cart;
  return (
    <div>
      <h3 className=" mt-5 font-normal text-base text-[#1C1B1B99]">
        {index + 1}. {title}
      </h3>
    </div>
  );
};

Cart.propTypes = {
  cart: Proptypes.object.isRequired,
  index: Proptypes.number.isRequired,
};

export default Cart;
