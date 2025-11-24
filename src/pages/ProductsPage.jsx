import { useProducts } from "../context/ProductContext";
import styles from "./ProductsPage.module.css";
import Card from "../components/Card";
import Loader from "../components/Loader";
import SearchBox from "../components/SearchBox";
import { useEffect, useState } from "react";

import {
  filterProducts,
  getInitialQuery,
  searchProducts,
} from "../helpers/helper";
import { useSearchParams } from "react-router-dom";
import SideBar from "../components/SideBar";
function ProductsPage() {
  const products = useProducts();
  const [displayed, setDisplayed] = useState([]);
  const [query, setQuery] = useState({});
  const [search, setSearch] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    setDisplayed(products);

    const initial = getInitialQuery(searchParams);
    setQuery(initial);
    setSearch(initial.search);
  }, [products]);

  useEffect(() => {
      if (!query) return;
    setSearchParams(query);
    setSearch(query.search || "");

    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);

    setDisplayed(finalProducts);
  }, [query]);

  return (
    <>
      <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />
      <div className={styles.container}>
        <div className={styles.products}>
          {!displayed.length && <Loader />}
          {displayed.map((p) => (
            <Card key={p.id} data={p} />
          ))}
        </div>
        <SideBar setQuery={setQuery} />
      </div>
    </>
  );
}

export default ProductsPage;
