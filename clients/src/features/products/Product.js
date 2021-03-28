import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CartContainer from '../cart/CartContainer';

const Frame = styled.div`
  border: 1px solid black;
  border-radius: 15px;
  padding: 12px;
  height: 250px;
  margin: 5px;
`;

const ProductCard = styled.div`
  border-radius: 15px;
  padding: 15px;
  border: 1px solid black;
`;

const ProductCardBody = styled.div`
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProductPrice = styled.span``;
const CartIcon = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  text-align: center;
  padding-top: 2px;
  padding-left: 1px;
  background-color: yellow;
`;
const ProductTitle = styled.p`
  font-size: 14px;
  margin: 0;
`;

const Product = ({ product }) => {
  const [show, setShow] = useState(false);
  const { title, price, _id } = product;

  const click = () => {
    setShow(true);
  };
  return (
    <>
      <div className="col-sm p-4">
        <ProductCard>
          <Frame>image</Frame>
          <ProductCardBody>
            <div>
              <ProductTitle>{title}</ProductTitle>
              <ProductPrice>
                {new Intl.NumberFormat('en-NG', {
                  style: 'currency',
                  currency: 'NGN',
                  maximumFractionDigits: 2,
                }).format(price)}
              </ProductPrice>
            </div>
            <CartIcon onClick={click}>A</CartIcon>
          </ProductCardBody>
        </ProductCard>
      </div>
      <CartContainer show={show} onClose={() => setShow(false)} />
    </>
  );
};

Product.propTypes = {
  product: PropTypes.object,
  title: PropTypes.string,
  price: PropTypes.number,
};

export default Product;
