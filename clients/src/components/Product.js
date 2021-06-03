import React from 'react';
import styled from 'styled-components';
import Image from '../uploads/image 1.png';

const ProductCard = styled.div`
  height: 446px;
  background: #f4f5f7;
`;

const Frame = styled.div`
  height: 301px;
  position: relative;
`;

const ProductCardBody = styled.div`
  padding: 15px;
`;

const ProductPrice = styled.span`
  font-size: 20px;
  color: #3a3a3a;
  font-weight: 600;
`;

const Tag = styled.span`
  width: 48px;
  height: 48px;
  border-radius: 100%;
  background: #e97171;
  position: absolute;
  color: #ffffff;
  top: 24px;
  right: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
`;

const ProductTitle = styled.h5`
  font-size: 24px;
  color: #3a3a3a;
  font-weight: 600;
`;

const ProductDescription = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #898989;
`;

const Product = () => {
  return (
    <div className="col-3">
      <ProductCard>
        <Frame>
          <img src={Image} alt="" style={{ width: `100%`, height: `100%` }} />
          <Tag>30%</Tag>
        </Frame>
        <ProductCardBody>
          <ProductTitle>Syltherine</ProductTitle>
          <ProductDescription>Stylish cafe chair</ProductDescription>
          <ProductPrice># 2,500,000</ProductPrice>
        </ProductCardBody>
      </ProductCard>
    </div>
  );
};

export default Product;
