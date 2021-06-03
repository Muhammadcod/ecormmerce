import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CartContainer from '../cart/CartContainer';
import { useDispatch } from 'react-redux';
import { addCartItem } from '../cart/CartsSlice';
// import { selectCartItems } from '../cart/CartsSlice';

const Frame = styled.div`
  border: 1px solid black;
  padding: 12px;
  height: 360px;
`;

const ProductCard = styled.div`
  height: auto;
`;

const ProductCardBody = styled.div`
  padding: 15px 0;
  display: flex;
`;

const ProductPrice = styled.span``;
const CartButton = styled.button`
  width: 100%;
  height: 50px;
  background: #000;
  color: #fff;
  text-align: center;
  padding-top: 2px;
  padding-left: 1px;
`;

const ProductTitle = styled.p`
  font-size: 14px;
  margin: 0;
`;

const Product = ({ product }) => {
  const [show, setShow] = useState(false);
  const { title, price, _id, selectedQuantity } = product;
  let customerId = '606f89b2d1e9290124e80100';
  let customerName = 'Adebayo Mohammed Olusiji';
  const quantity = 1;
  const item = {
    customerId,
    customerName,
    name: title,
    selectedQuantity: quantity,
    price,
    productId: _id,
  };
  console.log(item.selectedQuantity);
  const dispatch = useDispatch();
  // const cartStatus = useSelector(selectCartStatus);
  // const cartItems = useSelector(selectCartItems);

  const handleAddToCart = () => {
    dispatch(addCartItem(item)).then((response) => {
      setShow(true);
    });
  };

  return (
    <>
      <div className="col-sm-3">
        <ProductCard>
          <Frame>image</Frame>
          <ProductCardBody>
            <div>
              <ProductTitle>
                {title.length > 25 ? title.substring(0, 24) + '...' : title}
              </ProductTitle>
              <ProductPrice>
                {new Intl.NumberFormat('en-NG', {
                  style: 'currency',
                  currency: 'NGN',
                  maximumFractionDigits: 2,
                }).format(price)}
              </ProductPrice>
            </div>
          </ProductCardBody>
          <CartButton onClick={handleAddToCart}>Add To Cart</CartButton>
        </ProductCard>
      </div>
      <CartContainer
        show={show}
        customerId={customerId}
        // cartItem={cartItem}
        onClose={() => setShow(false)}
      />
    </>
  );
};

Product.propTypes = {
  product: PropTypes.object,
  title: PropTypes.string,
  price: PropTypes.number,
};

export default Product;
