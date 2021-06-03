import React from 'react';
import styled from 'styled-components';
import Group from '../uploads/Grouptic.svg';
import Trophy from '../uploads/trophy 1.svg';
import Shipping from '../uploads/shipping.svg';
import Support from '../uploads/customer-support.svg';

const FeatureWrapper = styled.section`
  margin-top: 85px;
  margin-bottom: 85px;
  height: 85px;
`;

const FeatTile = styled.section`
  display: flex;
  align-items: center;
`;

const FeatWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FeatContent = styled.span`
  display: flex;
  flex-direction: column;
`;

const FeatIcon = styled.span`
  padding-right: 15px;
`;

const FeatDescription = styled.p`
  font-weight: 500;
  font-size: 14px;
  color: #898989;
`;

const FeatTitle = styled.h6`
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  color: #3a3a3a;
`;

const Feature = () => {
  return (
    <>
      <FeatureWrapper className="container">
        <div className="row g-3" style={{ height: `100%` }}>
          <FeatTile className="col">
            <FeatWrapper>
              <FeatIcon>
                <img src={Trophy} alt="icon" />
              </FeatIcon>
              <FeatContent>
                <FeatTitle>High Quality</FeatTitle>
                <FeatDescription style={{ marginBottom: `0` }}>
                  Crafted from top materials
                </FeatDescription>
              </FeatContent>
            </FeatWrapper>
          </FeatTile>
          <FeatTile className="col">
            <FeatWrapper>
              <FeatIcon>
                <img src={Group} alt="icon" />
              </FeatIcon>
              <FeatContent>
                <FeatTitle>Warranty Protection</FeatTitle>
                <FeatDescription style={{ marginBottom: `0` }}>
                  Over 2 years
                </FeatDescription>
              </FeatContent>
            </FeatWrapper>
          </FeatTile>
          <FeatTile className="col">
            <FeatWrapper>
              <FeatIcon>
                <img src={Shipping} alt="icon" />
              </FeatIcon>
              <FeatContent>
                <FeatTitle>Free Shipping</FeatTitle>
                <FeatDescription style={{ marginBottom: `0` }}>
                  Order over 150 $
                </FeatDescription>
              </FeatContent>
            </FeatWrapper>
          </FeatTile>
          <FeatTile className="col">
            <FeatWrapper>
              <FeatIcon>
                <img src={Support} alt="icon" />
              </FeatIcon>
              <FeatContent>
                <FeatTitle>24 / 7 Support</FeatTitle>
                <FeatDescription style={{ marginBottom: `0` }}>
                  Dedicated support
                </FeatDescription>
              </FeatContent>
            </FeatWrapper>
          </FeatTile>
        </div>
      </FeatureWrapper>
    </>
  );
};

export default Feature;
