import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { selectUserStatus, signUpUser } from './UsersSlice';
import { fetchProducts, selectProductStatus } from '../products/productsSlice';

const SignUp = (props) => {
  const [addRequestStatus, setAddRequestStatus] = useState('idle');
  const {
    register,
    handleSubmit,
    watch,
    reset,
    errors,
    formState: { isSubmitSuccessful },
  } = useForm();

  const dispatch = useDispatch();
  const userStatus = useSelector(selectUserStatus);

  const onSubmit = (data) => {
    dispatch(signUpUser(data));
  };

  return (
    <div>
      <div className="container d-flex justify-content-center">
        <div className="signup-form text-center">
          <h5 className="login__text">
            Create an account and <br /> discover the benefits
          </h5>
          <p className="small px-2 mb-5">
            Lorem Ipsum is simply dummy text of the printing <br /> and
            typesetting industry.
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <input
                type="firstname"
                className="form-control form-control__custom"
                id="exampleInputFirstname1"
                ref={register({ required: true })}
                name="firstName"
                placeholder="firstname"
              />
            </div>
            {errors.exampleRequired && <span>This field is required</span>}

            <div className="form-group">
              <input
                type="lastname"
                className="form-control form-control__custom"
                id="exampleInputLastname1"
                ref={register({ required: true })}
                name="lastName"
                placeholder="lastname"
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                className="form-control form-control__custom"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                ref={register({ required: true })}
                name="email"
                placeholder="email"
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                className="form-control form-control__custom small"
                id="exampleInputPassword1"
                ref={register({ required: true })}
                name="password"
                placeholder="password"
              />
            </div>

            <div className="form-group form-check  mb-5">
              <input
                type="checkbox"
                className="form-check-input form-control__custom"
                id="exampleCheck1"
              />
              <label
                className="form-check-label small text-left"
                htmlFor="exampleCheck1"
              >
                I agree to the Google Terms of Service and Privacy Policy
              </label>
            </div>
            <button type="submit" className="btn border btn__submit">
              Sign up
            </button>
          </form>
          <small className="form-text text-muted">
            Are you already a member?
          </small>
        </div>
      </div>
    </div>
  );
};

SignUp.propTypes = {};

export default SignUp;
