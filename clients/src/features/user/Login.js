import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginUser } from './UsersSlice';

const LogInWrapper = styled.div`
  height: 100vh;
`;

const LogInContent = styled.div`
  height: 100%;
`;

const GraffitiCol = styled.div``;

const LogInCol = styled.div`
  display: flex;
  padding: 150px 60px;
  background-color: #f6f5fc;
  align-items: start;
`;
const Input = styled.input`
  width: 357px;
  height: 63px;
`;

const LogInButton = styled.button`
  width: 357px;
  height: 70px;
  background: #24246f;
  color: #ffffff;
`;

const Login = () => {
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(loginUser(data));
  };
  return (
    <>
      <LogInWrapper className="container-fluid">
        <LogInContent className="row">
          <GraffitiCol className="col-sm-3 border">
            One of three columns
          </GraffitiCol>
          <LogInCol className="col-sm border">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email
                </label>
                <Input
                  type="email"
                  className="form-control form-control-lg"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  ref={register({ required: true })}
                  name="email"
                  placeholder="email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <Input
                  type="password"
                  className="form-control form-control-lg"
                  id="exampleInputPassword1"
                  ref={register({ required: true })}
                  name="password"
                  placeholder="password"
                />
              </div>
              <LogInButton type="submit" className="btn ">
                Log In
              </LogInButton>
            </form>
          </LogInCol>
        </LogInContent>
      </LogInWrapper>
    </>
  );
};

export default Login;
