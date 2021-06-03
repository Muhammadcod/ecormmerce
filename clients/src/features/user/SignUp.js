import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { signUpUser } from './UsersSlice';

const SignupWrapper = styled.div`
  height: 100vh;
`;

const SignupContent = styled.div`
  height: 100%;
`;

const GraffitiCol = styled.div``;

const SignupCol = styled.div`
  display: flex;
  padding: 150px 60px;
  align-items: start;
`;
const Input = styled.input`
  width: 357px;
  height: 63px;
`;

const SignUpButton = styled.button`
  width: 357px;
  height: 70px;
  background: #24246f;
  color: #ffffff;
`;

const SignUp = () => {
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log('submit', data);

    dispatch(signUpUser(data));
  };
  return (
    <>
      <SignupWrapper className="container-fluid">
        <SignupContent className="row">
          <GraffitiCol className="col-sm-3 border">Graffiti</GraffitiCol>
          <SignupCol className="col-sm border">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label htmlFor="exampleInputName1" className="form-label">
                  Name
                </label>
                <Input
                  type="name"
                  className="form-control form-control-lg"
                  id="exampleInputName1"
                  aria-describedby="nameHelp"
                  ref={register({ required: true })}
                  name="name"
                  placeholder="name"
                />
              </div>
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
              <SignUpButton type="submit" className="btn ">
                Sign Up
              </SignUpButton>
            </form>
          </SignupCol>
        </SignupContent>
      </SignupWrapper>
    </>
  );
};

export default SignUp;
