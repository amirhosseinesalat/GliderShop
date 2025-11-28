import BasketCard from "../components/BasketCard";
import { useCart } from "../context/CartContext";
function CheckoutPage() {
  const [state, dispatch] = useCart();
  const clickHandler = (type, payload) => dispatch({ type, payload });

  return (
    <div>
      {state.selectedItems.map((p) => (
        <BasketCard id={p.id} data={p} clickHandler={clickHandler} />
      ))}
    </div>
  );
}

export default CheckoutPage;
