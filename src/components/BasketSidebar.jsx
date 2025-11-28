import { BsPatchCheck } from "react-icons/bs";
import { FaHashtag } from "react-icons/fa";
import { TbChecklist } from "react-icons/tb";
import styles from "./BasketSidebar.module.css";

function BasketSidebar({ state, clickHandler }) {
  return (
    <div className={styles.sidebar}>
      <div className={styles.row}>
        <div className={styles.left}>
          <TbChecklist />
          <p>Total:</p>
        </div>
        <span>{state.total}$</span>
      </div>

      <div className={styles.row}>
        <div className={styles.left}>
          <FaHashtag />
          <p>Quantity:</p>
        </div>
        <span>{state.itemCounter}</span>
      </div>

      <div className={styles.row}>
        <div className={styles.left}>
          <BsPatchCheck />
          <p>Status:</p>
        </div>
        <span>{state.checkout ? "Completed" : "Pending..."}</span>
      </div>

      <button onClick={() => clickHandler("CHECKOUT")}>Checkout</button>
    </div>
  );
}

export default BasketSidebar;
