import actionTypes from "./actionTypes";
import initialState from "./defaultState";

const reducer = (state = initialState, action) => {
  const isExisting = state.carts.find((cart) => cart.id === action.payload.id);

  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      if (state.carts.length === 0) {
        state.carts.push(action.payload);
        state.totalItem = 1;
        state.totalPrice = parseInt(action.payload.price.replace(",", ""));
      } else {
        if (isExisting) {
          state.carts = state.carts.map((cart, index) => {
            if (cart.id === action.payload.id) {
              state.carts[index].itemQty++;
              state.totalItem++;
              state.totalPrice =
                state.totalPrice +
                parseInt(state.carts[index].price.replace(",", ""));
            }
            return { ...cart };
          });
        }

        if (!isExisting) {
          state.carts.push(action.payload);
          state.totalItem++;
          state.totalPrice =
            state.totalPrice + parseInt(action.payload.price.replace(",", ""));
        }
      }

      return { ...state };
    case actionTypes.REMOVE_TO_CART:
      return state;
    case actionTypes.QTY_INCREASE:
      state.carts.map((cart, index) => {
        if (cart.id === action.payload.id && state.carts[index].itemQty) {
          state.carts[index].itemQty++;
          state.totalItem++;
          state.totalPrice =
            state.totalPrice +
            parseInt(state.carts[index].price.replace(",", ""));
        }

        return { ...cart };
      });
      return { ...state };
    case actionTypes.QTY_DECREASE:
      state.carts.map((cart, index) => {
        if (cart.id === action.payload.id && state.carts[index].itemQty) {
          state.carts[index].itemQty--;
          state.totalItem--;
          state.totalPrice =
            state.totalPrice -
            parseInt(state.carts[index].price.replace(",", ""));
        }
        if (cart.id === action.payload.id && state.carts[index].itemQty === 0)
          state.carts.splice(index, 1);

        return { ...cart };
      });
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
