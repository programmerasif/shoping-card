import actionTypes from "../Redux/shopping/actionTypes";

export const productQuentyChecker = (store) => (next) => (action) => {
  const { shopping } = store.getState();
  const products = shopping.products;
  const selectedId = action.payload.id;
  const isSelected = products.find((product) => product.id === selectedId);
  const isAddToCart = action.type === actionTypes.ADD_TO_CART;
  const isQtyDecrease = action.type === actionTypes.QTY_DECREASE;
  const isQtyIncrease = action.type === actionTypes.QTY_INCREASE;

  if (isSelected.stockLimit === 0 && isAddToCart) return;
  if (isSelected.stockLimit === 0 && isQtyIncrease) return;

  if (isSelected && isAddToCart) isSelected.stockLimit--;
  if (isSelected && isQtyIncrease) isSelected.stockLimit--;

  if (isSelected && isQtyDecrease) isSelected.stockLimit++;

  next(action);
};
