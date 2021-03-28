import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import {
  fetchProducts,
  selectAllProducts,
  selectProductStatus,
  selectError,
} from './productsSlice';
import Product from './Product';

const ProductContainer = (props) => {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  const productStatus = useSelector(selectProductStatus);
  const error = useSelector(selectError);

  useEffect(() => {
    if (productStatus === 'idle') {
      dispatch(fetchProducts());
    }
  }, [productStatus, dispatch]);

  let content;

  if (productStatus === 'loading') {
    content = <div className="loader">Loading...</div>;
  } else if (productStatus === 'succeeded') {
    // Sort posts in reverse chronological order by datetime string
    const orderedProducts = products
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));

    content = orderedProducts.map((product) => (
      <Product key={product.id} product={product} />
    ));
  } else if (productStatus === 'failed') {
    content = <div>{error}</div>;
  }

  return <>{content}</>;
};

/*ProductContainer.propTypes = {

};*/

export default ProductContainer;
