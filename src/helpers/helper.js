export const shortenText = (text) => {
  return text.split(" ").slice(0, 3).join(" ");
};

export const shortened = (text) => {
  return text.split(" ").slice(0, 3).join(" ").toLowerCase();
};

export const searchProducts = (products, search) => {
  if (!search || !search.trim()) return products;

  const q = search.toLowerCase();

  return products.filter((p) => shortened(p.title).includes(q));
};

export const filterProducts = (products, category) => {
  if (!category || category === "all") return products;

  return products.filter(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  );
};
export const createQueryObject = (currentQuery = {}, newQuery) => {
  if (newQuery.category === "all") {
    const { category, ...rest } = currentQuery;
    return rest;
  }

  return {
    ...currentQuery,
    ...newQuery,
  };
};

export const getInitialQuery = (searchParams) => {
  const category = searchParams.get("category");
  const search = searchParams.get("search");

  return {
    category: category ?? "",
    search: search ?? "",
  };
};
export const sumProducts = (products) => {
  const itemCounter = products.reduce((acc, cur) => acc + cur.quantity, 0);
  const total = products
    .reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
    .toFixed(2);
  return { itemCounter, total };
};
export const productQuantity = (state, id) => {
  const index = state.selectedItems.findIndex((item) => item.id === id);
  if (index === -1) {
    return 0;
  } else {
    return state.selectedItems[index].quantity;
  }
};
