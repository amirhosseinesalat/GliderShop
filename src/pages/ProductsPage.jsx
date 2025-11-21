import { useProducts } from "../context/ProductContext";
import styles from "./ProductsPage.module.css";
import Card from "../components/Card";
import Loader from "../components/Loader";
import { ImSearch } from "react-icons/im";
import { useEffect, useState } from "react";
import { FaListUl } from "react-icons/fa";
function ProductsPage() {
  const products = useProducts();
  const [displayed, setDisplayed] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    setDisplayed(products);
  }, [products]);
  const searchHandler = () => {
    console.log(search);
  };
  const categoryHandler = (e) => {
    const { tagName } = e.target;
    const category = e.target.innerText.toLowerCase();
    if (tagName !== "LI") return;
  };
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value.toLocaleLowerCase().trim())}
        />
        <button onClick={searchHandler}>
          <ImSearch />
        </button>
      </div>
      <div className={styles.container}>
        <div className={styles.products}>
          {!displayed.length && <Loader />}
          {displayed.map((p) => (
            <Card key={p.id} data={p} />
          ))}
        </div>
        <div>
          <div>
            <FaListUl />
            <p>Categories</p>
          </div>
          <ul onClick={categoryHandler}>
            <li>All</li>
            <li>Electronics</li>
            <li>Jewelery</li>
            <li>Men's clothing</li>
            <li>Women's clothing</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ProductsPage;
