import React, { useState } from 'react';
import styled from 'styled-components';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Image1 from '../uploads/1528 1.png';

const ControlWrapper = styled.div`
  //border: 1px solid black;
  display: flex;
  justify-content: end;
  padding-right: 108px;
`;

const Control = styled.div`
  border: 1px solid black;
  width: 613px;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
`;

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 2.2 },
};

const items = [
  <div
    className="item border pr-2"
    data-value="1"
    style={{ width: `100%`, height: `100%` }}
  >
    <img src={Image1} alt="name" style={{ width: `100%`, height: `100%` }} />
  </div>,
  <div
    className="item border pr-2"
    data-value="2"
    style={{ width: `100%`, height: `100%` }}
  >
    <img src={Image1} alt="name" style={{ width: `100%`, height: `100%` }} />
  </div>,
  <div
    className="item border pr-2"
    data-value="3"
    style={{ width: `100%`, height: `100%` }}
  >
    <img src={Image1} alt="name" style={{ width: `100%`, height: `100%` }} />
  </div>,
  <div
    className="item border pr-2"
    data-value="3"
    style={{ width: `100%`, height: `100%` }}
  >
    <img src={Image1} alt="name" style={{ width: `100%`, height: `100%` }} />
  </div>,
];

const thumbItems = (items, [setThumbIndex, setThumbAnimation]) => {
  return items.map((item, i) => (
    <div
      className="thumb"
      onClick={() => (setThumbIndex(i), setThumbAnimation(true))}
    >
      {item}
    </div>
  ));
};
const Carousel = () => {
  const [mainIndex, setMainIndex] = useState(0);
  const [mainAnimation, setMainAnimation] = useState(false);
  const [thumbIndex, setThumbIndex] = useState(0);
  const [thumbAnimation, setThumbAnimation] = useState(false);
  const [thumbs] = useState(
    thumbItems(items, [setThumbIndex, setThumbAnimation])
  );

  const slideNext = () => {
    if (!thumbAnimation && thumbIndex < thumbs.length - 1) {
      setThumbAnimation(true);
      setThumbIndex(thumbIndex + 1);
    }
  };

  const slidePrev = () => {
    if (!thumbAnimation && thumbIndex > 0) {
      setThumbAnimation(true);
      setThumbIndex(thumbIndex - 1);
    }
  };
  return (
    <>
      <ControlWrapper>
        <Control>
          <span>A</span>
          <span>
            <div className="btn-prev" onClick={slidePrev}>
              &lang;
            </div>
            <div className="btn-next" onClick={slideNext}>
              &rang;
            </div>
          </span>
        </Control>
      </ControlWrapper>

      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        disableButtonsControls={true}
        disableDotsControls={true}
        controlsStrategy="alternate"
      />
    </>
  );
};

export default Carousel;
