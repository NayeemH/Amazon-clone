import React from 'react';
import { useStateValue } from './StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className='checkout'>
      <img
        className='checkout__ad'
        src='https://www.designcontest.com/blog/wp-content/uploads/2015/07/banner-ad-fail-11.jpg'
      ></img>
      {basket?.length === 0 ? (
        <div>
          <h2>Your Shopping Basket Is Empty</h2>
          <p>
            You have no items in your basket.To bus one or more items, click
            "Add to basket" next to the item
          </p>
        </div>
      ) : (
        <div>
          <h2 className='checkout__title'>Your Shopping Basket</h2>
          {/* list of all the cjheckout products */}
          {basket?.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Checkout;
