import CartItem from "./CartItem";
import cartItems from "./data";
import { useGlobalContext } from "./Context";
const CartContainer = () => {
  const { state, dispatch } = useGlobalContext();
  const cartArray = [...state];
  let totVal = 0;
  const calculateTotal = () => {
    cartArray.map((i) => {
      totVal = totVal + i.amount * Math.ceil(parseFloat(i.price));
    });
  };
  console.log("updated state", state);
  calculateTotal();

  if (cartArray.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {cartArray.map((cartItem) => {
          return <CartItem key={cartItem.id} {...cartItem} />;
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div>
          <h5 className="cart-total">
            total <span>${totVal}</span>
          </h5>
        </div>
        <button
          className="btn btn-hipster"
          onClick={() => {
            dispatch({ type: "CLEAR" });
          }}
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
