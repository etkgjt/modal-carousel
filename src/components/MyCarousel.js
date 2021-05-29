import { Carousel } from "antd";
import React, { useRef, useEffect } from "react";
import styled from "styled-components";

import LeftIcon from "../assets/left.svg";
import RightIcon from "../assets/right.svg";
import MyModal from "./MyModal";

const Container = styled.div`
  width: 100vw;
  height: 100%;
  position: relative;
  background-color: rgba(0, 0, 0, 0.7);

  z-index: 99999;
  .ant-carousel {
    height: 100%;
  }
`;
const StyledCarousel = styled(Carousel)`
  height: 100%;
  .slick-list {
    height: 100%;
    padding-top: 50px;
    padding-bottom: 50px;

    .slick-track {
      height: 100%;
      .slick-slide {
        max-height: 100%;
        width: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
      }
    }
  }
  .slick-dots {
    display: none !important;
  }
`;
const ImageContainer = styled.img`
  width: auto;
  height: 100%;
`;
const NextButton = styled.div`
  position: absolute;
  right: 20px;
  top: calc(50% - 50px);
  width: 70px;
  height: 100px;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
  cursor: pointer;
  z-index: 999999999;
`;
const PrevButotn = styled.div`
  position: absolute;
  left: 20px;
  top: calc(50% - 50px);
  width: 70px;
  height: 100px;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
  cursor: pointer;
  z-index: 999999999;
`;
const Icon = styled.img`
  width: 50px;
  height: 50px;
`;
const MyCarousel = ({ defaultItem = null, imgList = [] }) => {
  const ref = useRef();
  useEffect(() => {
    console.log("Default item ", defaultItem);
    if (defaultItem) {
      let idx = imgList?.findIndex((v) => v.id === defaultItem.id);
      ref.current.goTo(idx);
      console.log("Ref current ne", ref, "index ne", idx);
    }
  });
  return (
    <Container>
      <StyledCarousel ref={ref}>
        {imgList?.map((v, index) => (
          <ImageContainer src={v?.url} key={`${v?.url}-${index}`} />
        ))}
      </StyledCarousel>
      <NextButton
        onClick={() => {
          ref.current.next();
        }}
      >
        <Icon src={RightIcon} />
      </NextButton>
      <PrevButotn
        onClick={() => {
          ref.current.prev();
        }}
      >
        <Icon src={LeftIcon} />
      </PrevButotn>
      <h1
        style={{
          color: "white",
          position: "absolute",
          top: 30,
          right: 30,
          cursor: "pointer",
        }}
        onClick={() => MyModal.hide()}
      >
        Close
      </h1>
    </Container>
  );
};
export default MyCarousel;
