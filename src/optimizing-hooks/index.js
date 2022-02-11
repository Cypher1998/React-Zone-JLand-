import React, { useState, useEffect, useCallback, useMemo } from 'react';
import defaultImage from '../assets/default-image.jpeg';
import { useFetch } from '../Custom Hooks/2-useFetch';

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
// const url = 'https://course-api.com/javascript-store-products';
const url = './assets/file.json';

// every time props or state changes, component re-renders
const expensiveFunction = (data) => {
  console.log('called function');
  return (
    data.reduce((total, person) => {
      if (person.price >= total) {
        total = person.price;
      }
      return total;
    }, 0) / 100
  );
};

const Index = () => {
  // const getPerson = async () => {
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   console.log(data);
  // };
  // const { products } = useFetch(url);
  // useEffect(() => {
  //   getPerson();
  // }, []);
  const { products } = useFetch(url);
  // console.log(products);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);

  const addToCart = useCallback(() => {
    // setCart((prevState) => {
    //   return prevState + 1;
    // });
    setCart(cart + 1);
  }, [cart]);

  const mostExpensive = useMemo(() => expensiveFunction(products), [products]);

  return (
    <>
      <h1>Count : {count}</h1>
      <button className="btn" onClick={() => setCount(count + 1)}>
        click me
      </button>
      <h2 style={{ marginTop: '3rem' }}>cart: {cart}</h2>
      <h3>most expensive: ${mostExpensive}</h3>
      <BigList products={products} addToCart={addToCart} />
    </>
  );
};

const BigList = React.memo(({ products, addToCart }) => {
  useEffect(() => {
    console.log('big list called');
  });
  return (
    <section className="products">
      {products.map((product) => {
        return (
          <SingleProduct
            key={product.id}
            {...product}
            addToCart={addToCart}
          ></SingleProduct>
        );
      })}
    </section>
  );
});

const SingleProduct = ({ name, price, image, addToCart }) => {
  useEffect(() => {
    console.count('single list called');
  });
  // let { name, price } = fields;
  price = price / 100;
  // const image = fields.image[0].url;

  return (
    <article className="product">
      <img src={image.url} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
      <button className="btn" onClick={addToCart}>
        add to cart
      </button>
    </article>
  );
};

SingleProduct.defaultProps = {
  name: 'default name',
  price: 450,
  image: { url: defaultImage },
};

export default Index;
