import React from 'react';
import Product from './Product';
import './Home.css';

function Home() {
  return (
    <div className='home'>
      <img
        className='home__images'
        src='https://images.unsplash.com/photo-1480944657103-7fed22359e1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80'
      ></img>
      {/* product id, title ,price,rating,image */}
      <div className='home__row'>
        <Product
          id='32443243242'
          title='At a Glance Apple iPhone XS and iPhone XS Max feature 5.8 and 6.5-inch display sizes'
          price={1000}
          rating={5}
          image='https://i.gadgets360cdn.com/products/large/1536782676_635_iphone_xs_max.jpg'
        />
        {/* product */}
        <Product
          id='32443243242'
          title='At a Glance Apple iPhone XS and iPhone XS Max feature 5.8 and 6.5-inch display sizes'
          price={1000}
          rating={5}
          image='https://i.gadgets360cdn.com/products/large/1536782676_635_iphone_xs_max.jpg'
        />
        {/* product */}
        <Product
          id='32443243242'
          title='At a Glance Apple iPhone XS and iPhone XS Max feature 5.8 and 6.5-inch display sizes'
          price={1000}
          rating={5}
          image='https://i.gadgets360cdn.com/products/large/1536782676_635_iphone_xs_max.jpg'
        />
        {/* product */}
      </div>

      <div className='home__row'>
        <Product
          id='32443243242'
          title='At a Glance Apple iPhone XS and iPhone XS Max feature 5.8 and 6.5-inch display sizes'
          price={1000}
          rating={5}
          image='https://i.gadgets360cdn.com/products/large/1536782676_635_iphone_xs_max.jpg'
        />
        {/* product */}
        <Product
          id='32443243242'
          title='At a Glance Apple iPhone XS and iPhone XS Max feature 5.8 and 6.5-inch display sizes'
          price={1000}
          rating={5}
          image='https://i.gadgets360cdn.com/products/large/1536782676_635_iphone_xs_max.jpg'
        />
        {/* product */}
        <Product
          id='32443243242'
          title='At a Glance Apple iPhone XS and iPhone XS Max feature 5.8 and 6.5-inch display sizes'
          price={1000}
          rating={5}
          image='https://i.gadgets360cdn.com/products/large/1536782676_635_iphone_xs_max.jpg'
        />
        {/* product */}
      </div>
      <div className='home__row'>
        <Product
          id='32443243242'
          title='At a Glance Apple iPhone XS and iPhone XS Max feature 5.8 and 6.5-inch display sizes'
          price={1000}
          rating={5}
          image='https://i.gadgets360cdn.com/products/large/1536782676_635_iphone_xs_max.jpg'
        />
        {/* product */}
        <Product
          id='32443243242'
          title='At a Glance Apple iPhone XS and iPhone XS Max feature 5.8 and 6.5-inch display sizes'
          price={1000}
          rating={5}
          image='https://i.gadgets360cdn.com/products/large/1536782676_635_iphone_xs_max.jpg'
        />
        {/* product */}
        <Product
          id='32443243242'
          title='At a Glance Apple iPhone XS and iPhone XS Max feature 5.8 and 6.5-inch display sizes'
          price={1000}
          rating={5}
          image='https://i.gadgets360cdn.com/products/large/1536782676_635_iphone_xs_max.jpg'
        />
        {/* product */}
      </div>
      <div className='home__row'>
        <Product
          id='32443243242'
          title='At a Glance Apple iPhone XS and iPhone XS Max feature 5.8 and 6.5-inch display sizes'
          price={1000}
          rating={5}
          image='https://i.gadgets360cdn.com/products/large/1536782676_635_iphone_xs_max.jpg'
        />
        {/* product */}
        <Product
          id='32443243242'
          title='At a Glance Apple iPhone XS and iPhone XS Max feature 5.8 and 6.5-inch display sizes'
          price={1000}
          rating={5}
          image='https://i.gadgets360cdn.com/products/large/1536782676_635_iphone_xs_max.jpg'
        />
        {/* product */}
        <Product
          id='32443243242'
          title='At a Glance Apple iPhone XS and iPhone XS Max feature 5.8 and 6.5-inch display sizes'
          price={1000}
          rating={5}
          image='https://i.gadgets360cdn.com/products/large/1536782676_635_iphone_xs_max.jpg'
        />
        {/* product */}
      </div>
    </div>
  );
}

export default Home;
