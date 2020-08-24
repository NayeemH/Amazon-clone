import React from 'react';
import './Product.css';

function Product({ id, title, image, price, rating }) {
  return (
    <div className='product'>
      <p>{title}</p>
      <p className='Product__price'>
        <small>TK</small>
        <strong>{price}</strong>
      </p>
      <div className='product__rating'>
        {Array(rating)
          .fill()
          .map((_) => (
            <p>⭐</p>
          ))}
      </div>
      <img src={image}></img>
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
