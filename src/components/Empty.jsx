import styles from "./Empty.module.css";

function Empty() {
  return (
    <div className={styles.emptyWrapper}>
      <div className={styles.cartAnimation}>
        <svg
          width="160"
          height="160"
          viewBox="0 0 24 24"
          fill="none"
          className={styles.svgIcon}
        >
          <path
            d="M7 6H21L19 14H8L6 4H3"
            stroke="#fe5d42"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="9" cy="18" r="2" stroke="#fe5d42" strokeWidth="2" />
          <circle cx="17" cy="18" r="2" stroke="#fe5d42" strokeWidth="2" />
        </svg>
      </div>

      <h2>Your cart is empty</h2>
      <p>Add items to your cart to see them here</p>
    </div>
  );
}

export default Empty;
