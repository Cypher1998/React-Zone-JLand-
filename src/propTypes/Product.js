import PropTypes from 'prop-types';
import defaultImage from '../assets/default-image.jpeg';
// import defaultImage

const Product = ({ image, name, price, title }) => {
  const url = image && image.url;
  return (
    <article className="product">
      {/* <h4>sngle product</h4> */}
      {/* {image ? (
        <img
          src={image.url}
          alt=""
          style={{ width: '300px', borderRadius: '5px' }}
        />
      ) : (
        <img
          src={defaultImage}
          alt=""
          style={{ width: '300px', borderRadius: '5px' }}
        />
      )} */}
      <img
        src={url || defaultImage}
        alt=""
        style={{ width: '300px', borderRadius: '5px' }}
      />
      <h3>{name || 'default name'}</h3>
      <h4>{title || 'default title'}</h4>
      <p>${price || 800}</p>
    </article>
  );
};

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

// Product.defaultProps = {
//   image: { url: defaultImage },
//   name: 'default name',
//   price: 700,
//   title: 'default title',
// };

export default Product;
