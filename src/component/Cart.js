import { useDispatch, useSelector } from "react-redux";
import { Shimmer } from "./Shimmer";
import MenuInfoCart from "./MenuInfoCart";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const clearItems = () => {
    if (cartItems.length == 0) {
      alert("No item left to remove");
    }
    dispatch(clearCart());
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-red-500 text-center my-5">
        Total Items in Cart - {cartItems.length}{" "}
      </h1>
      <button
        className="bg-red-400 text-lg absolute right-6 top-32 p-2 px-5 rounded-full transition ease-in-out hover:bg-red-600 duration-500
      "
        onClick={() => clearItems()}
      >
        clear cart
      </button>

      <div className="flex flex-wrap p-10 justify-between gap-5">
        {cartItems.map((item) => {
          return <MenuInfoCart {...item} key={item.id} />;
        })}
      </div>
    </>
  );
};

export default Cart;
