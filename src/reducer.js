export const initialState = {
  basket: [],
  user: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'ADD_TO_BASKET':
      //logic for ading item to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
      break;
    case 'REMOVE_FROM_BASKET':
      //logic for Removing item from basket
      return { state };
      break;
    default:
      return state;
  }
};

export default reducer;
