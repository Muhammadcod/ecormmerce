import React from 'react';
import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import CartItem from './CartItem';
import { fetchUserCartItems, selectAllItems } from './CartsSlice';
import { useDispatch, useSelector } from 'react-redux';

const ModalView = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const ModalContent = styled.div`
  width: 500px;
  height: 100%;
  background-color: #fff;
`;

const CartContainer = (props) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectAllItems);
  // const cartStatus = useSelector(selectCartStatus);
  const { customerId } = props;

  React.useEffect(() => {
    dispatch(fetchUserCartItems(customerId));
  }, [customerId]);

  if (!props.show) {
    return null;
  }

  return ReactDOM.createPortal(
    <>
      <ModalView onClick={props.onClose}>
        <ModalContent
          onClick={(event) => event.stopPropagation()}
          aria-hidden="true"
        >
          <div className="modal-header">
            <h5 className="modal-title">cart</h5>
          </div>
          <div className="modal-body ">
            {cartItems.length > -1 ? (
              <div>
                {cartItems.map((item) => (
                  <CartItem key={item._id} item={item} />
                ))}
                <div className="cart-total-cost">Total cost: #</div>
              </div>
            ) : (
              <div>Your cart is empty</div>
            )}
          </div>
          <div className="modal-footer">...</div>
          <button onClick={props.onClose}>close</button>
        </ModalContent>
      </ModalView>
    </>,
    document.getElementById('root')
  );
};

/*CartContainer.propTypes = {
  show: PropTypes.bool,
  dispatch: PropTypes.func,
};*/

export default withRouter(CartContainer);
