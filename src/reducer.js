export const initialState = {
  basket: [
    {
      id: '12902390',
      title:
        'Apple iPad Pro 12.9 (2018) tablet. Announced Oct 2018. Features 12.9″ IPS LCD display, Apple A12X Bionic chipset, 9720 mAh battery, 1024 GB storage',
      price: 80999,
      rating: 4,
      image:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-wifi-spacegray-202003_FMT_WHH?wid=1945&hei=2000&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1583553704156',
    },
    {
      id: '12902390',
      title:
        'Apple iPad Pro 12.9 (2018) tablet. Announced Oct 2018. Features 12.9″ IPS LCD display, Apple A12X Bionic chipset, 9720 mAh battery, 1024 GB storage',
      price: 80999,
      rating: 4,
      image:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-wifi-spacegray-202003_FMT_WHH?wid=1945&hei=2000&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1583553704156',
    },
  ],
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
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        //item exits in basket....remove itt..
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product(id:${action.id}) as its not having an id`
        );
      }

      return { ...state, basket: newBasket };
      break;
    default:
      return state;
  }
};

export default reducer;
