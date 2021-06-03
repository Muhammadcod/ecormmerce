import React from 'react';
import styled from 'styled-components';

const CartItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

const ItemTitle = styled.div`
  font-size: 12px;
`;

const ItemDetails = styled.div`
  display: flex;
  // width: 50%;
`;

const Input = styled.input`
  width: 357px;
  height: 63px;
`;
const CartItem = ({ item }) => {
  const { name, price, selectedQuantity } = item;

  return (
    <>
      <CartItemWrapper className="border mb-3">
        <div className="item--profile">
          <ItemTitle>
            {name.length > 25 ? name.substring(0, 24) + '...' : name}
          </ItemTitle>
        </div>
        <ItemDetails>
          <div className="mx-2">Qty: {selectedQuantity}</div>

          <div className="cart--item-price mx-2">
            {price * selectedQuantity}
          </div>
          <div className="delete mx-2">D</div>
        </ItemDetails>
      </CartItemWrapper>
    </>
  );
};

CartItem.propTypes = {};

export default CartItem;
