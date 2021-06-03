import React from 'react';
import styled from 'styled-components';
import Product from './Product';
import Button from './Button';

const Wrapper = styled.section`
  min-height: 460px;
  margin-bottom: 40px;
`;

const ProductsWrapper = styled.div``;

const Title = styled.h3`
  text-align: center;
  font-size: 40px;
  margin-bottom: 32px;
`;

const Products = () => {
  return (
    <Wrapper>
      <Title>Our Products</Title>
      <ProductsWrapper className="container">
        <div className="row g-3">
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
        <div className="d-flex justify-content-center mt-5">
          <Button width="245px">Show More</Button>
        </div>
      </ProductsWrapper>
    </Wrapper>
  );
};

export default Products;
