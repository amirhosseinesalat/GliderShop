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
export const createQueryObject = (currentQuery, newQuery) => {
  if (newQuery.category === "all") {
    const { category, ...rest } = currentQuery;
    return rest;
  }
  if (newQuery.category === "") {
    const { search, ...rest } = currentQuery;
    return rest;
  }
  return {
    ...currentQuery,
    ...newQuery,
  };
};
