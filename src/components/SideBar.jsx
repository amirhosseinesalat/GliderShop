import { FaListUl } from "react-icons/fa";
import { createQueryObject } from "../helpers/helper";
import styles from "./SideBar.module.css";
import { categories } from "../constants/list";
function SideBar({ query, setQuery }) {
  const categoryHandler = (e) => {
    const { tagName } = e.target;
    const category = e.target.innerText.toLowerCase();
    if (tagName !== "LI") return;
    setQuery((query) => createQueryObject(query, { category }));
  };
  return (
    <div className={styles.sidebar}>
      <div>
        <FaListUl />
        <p>Categories</p>
      </div>
      <ul onClick={categoryHandler}>
        {categories.map((category) => (
          <li
            key={category.id}
            className={
              category.type.toLowerCase() === query.category
                ? styles.selected
                : null
            }
          >
            {category.type}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
