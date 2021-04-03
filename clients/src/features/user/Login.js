import React from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { loginUser } from './UsersSlice';

function Login(props) {
  const { register, handleSubmit, watch, errors } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(loginUser(data));
  };
  console.log(watch('example'));

  return (
    <div>
      <div className=" container d-flex justify-content-center">
        <div className="login-form text-center">
          <h5 className="login__text">Log in</h5>
          <p className="small px-2 mb-5">
            Lorem Ipsum is simply dummy text of the printing <br /> and
            typesetting industry.
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <input
                type="email"
                className="form-control form-control__custom"
                id="exampleInputEmail1"
                ref={register({ required: true })}
                aria-describedby="emailHelp"
                name="email"
                placeholder="email"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control form-control__custom"
                id="exampleInputPassword1"
                ref={register({ required: true })}
                name="password"
                placeholder="password"
              />
            </div>
            {errors.exampleRequired && <span>This field is required</span>}
            <button type="submit" className="btn btn__submit">
              Sign in
            </button>
          </form>
          <small className="form-text text-muted">
            Not a member yet?
            <a href="/">Sign up</a>
          </small>
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {
  signIn: PropTypes.func,
};

export default Login;
