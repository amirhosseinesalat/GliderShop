import { Link } from "react-router-dom";
import styles from "./PageNotFound.module.css";

function PageNotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.animationBox}>
        <svg viewBox="0 0 300 200" className={styles.svg}>
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            fontSize="90"
            fill="#fe5d42"
            dy=".3em"
            className={styles.textShadow}
          >
            404
          </text>
        </svg>
      </div>

      <h2>Page Not Found</h2>
      <p>The page you're looking for doesn't exist or was moved.</p>

      <Link to="/products" className={styles.backBtn}>
        Go Back to Shop
      </Link>
    </div>
  );
}

export default PageNotFound;
