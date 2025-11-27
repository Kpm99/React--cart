import { FaCartPlus } from "react-icons/fa";
import { useGlobalContext } from "./Context";
const Navbar = () => {
  const { state } = useGlobalContext();
  let num = 0;

  const calculateTotal = () => {
    state.map((i) => {
      num = num + i.amount;
    });
  };
  console.log("updated state", state);
  calculateTotal();
  return (
    <nav>
      <div className="nav-center">
        <h4>useReducer</h4>
        <div className="nav-container">
          <FaCartPlus className="cart-icon" />
          <div className="amount-container">
            <p className="total-amount">{num}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
