import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import {
  addNewProduct,
  selectError,
  selectProductStatus,
} from './productsSlice';

function AddNewProduct({}) {
  const { register, handleSubmit, watch, errors } = useForm();
  const dispatch = useDispatch();
  const productStatus = useSelector(selectProductStatus);
  const error = useSelector(selectError);
  const onSubmit = (data) => {
    dispatch(addNewProduct(data));
  };

  if (productStatus === 'failed') {
  }

  return (
    <>
      <div className="container border">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="exampleInputTitle1" className="form-label">
              Title
            </label>
            <input
              type="title"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="titleHelp"
              ref={register}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Quantity
            </label>
            <input
              type="quantity"
              className="form-control"
              id="title"
              name="quantity"
              aria-describedby="titleHelp"
              ref={register}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPrice1" className="form-label">
              Price
            </label>
            <input
              type="price"
              className="form-control"
              id="exampleInputPrice1"
              name="price"
              ref={register}
            />
          </div>
          {productStatus === 'loading' ? (
            <button type="submit" className="btn btn-primary">
              Adding...
            </button>
          ) : productStatus === 'succeeded' ? (
            <button type="submit" className="btn btn-primary">
              Added
            </button>
          ) : productStatus === 'failed' ? (
            <button type="submit" className="btn btn-primary">
              Failed
            </button>
          ) : (
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          )}
        </form>
      </div>
    </>
  );
}

export default AddNewProduct;
