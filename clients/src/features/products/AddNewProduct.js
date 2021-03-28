import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { addNewProduct } from './productsSlice';
// import PropTypes from 'prop-types';

/*AddNewProduct.propTypes = {

};*/

function AddNewProduct({}) {
  const dispatch = useDispatch();
  // const seletor =use

  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    dispatch(addNewProduct(data));
  };

  console.log(watch('example')); // watch input value by passing the name of it

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

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default AddNewProduct;
