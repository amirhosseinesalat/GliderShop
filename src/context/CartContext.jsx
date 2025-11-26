import { createContext, useContext, useReducer } from "react";
import { sumProducts } from "../helpers/helper";
const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  total: 0,
  checkout: false,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
      }
      return {
        selectedItems: [...state.selectedItems],
        ...sumProducts(state.selectedItems),
        checkout: false,
      };
    default:
      throw new Error("Invalid action");
  }
};
const cartContext = createContext();
function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <cartContext.Provider value={{ state, dispatch }}>
      {children}
    </cartContext.Provider>
  );
}
const useCart = () => {
  const { state, dispatch } = useContext(cartContext);
  return [state, dispatch];
};

export default CartProvider;
export { useCart };
