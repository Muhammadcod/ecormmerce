import React from 'react';
import styled from 'styled-components';

const Button = ({ children, color, width }) => {
  const CustomButton = styled.button`
    height: 50px;
    width: ${(props) => props.width || '100%'};
    background: ${(props) => props.color || '#ffffff'};
    color: ${(props) => (props.color ? 'white' : '#E89F71')};
    border: ${(props) => (props.color ? '' : '1px solid #E89F71')};
  `;

  return (
    <>
      <CustomButton color={color} width={width}>
        {children}
      </CustomButton>
    </>
  );
};

export default Button;
