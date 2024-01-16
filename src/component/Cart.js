import { useSelector } from "react-redux";
import { Shimmer } from "./Shimmer";
import MenuInfoCart from "./MenuInfoCart";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <>
      <h1 className="text-3xl font-bold text-red-500 text-center my-5">
        Total Items in Cart - {cartItems.length}
      </h1>
      <div className="flex flex-wrap p-10 justify-between">
        {cartItems.map((item) => {
          return <MenuInfoCart {...item} key={item.id} />;
        })}
      </div>
    </>
  );
};

export default Cart;
