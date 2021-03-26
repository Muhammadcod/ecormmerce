import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Frame = styled.div`
  border: 1px solid blue;
  border-radius: 15px;
  padding: 12px;
  // width: 130px;
  height: 200px;
  margin: 5px;
`;
const Price = styled.span``;

const Product = ({ product }) => {
  const { title, price, _id } = product;
  return (
    <>
      <div className="col-sm p-4">
        <div className="p-2 border">
          <Frame>image</Frame>
          <div className="card-body">
            <p className="card-title item__name">{title}</p>
            <Price>
              {new Intl.NumberFormat('en-NG', {
                style: 'currency',
                currency: 'NGN',
                maximumFractionDigits: 2,
              }).format(price)}
            </Price>
          </div>
        </div>
      </div>
    </>
  );
};

Product.propTypes = {
  product: PropTypes.object,
  title: PropTypes.string,
  price: PropTypes.number,
};

export default Product;
