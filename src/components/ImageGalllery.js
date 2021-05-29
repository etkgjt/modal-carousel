import { Col, Row, Carousel } from "antd";
import styled from "styled-components";
import React from "react";
const ContentWrapper = styled.div`
  height: 500px;
  width: 80vw;
  overflow: hidden;
`;
const ImgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  cursor: pointer;

  background-image: url(${({ image }) => (image.url ? image.url : "")});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  border-top-left-radius: ${({ radiusTopLeft }) =>
    radiusTopLeft ? "50px" : 0};
  border-bottom-left-radius: ${({ radiusBottomLeft }) =>
    radiusBottomLeft ? "50px" : 0};
  border-top-right-radius: ${({ radiusTopRight }) =>
    radiusTopRight ? "50px" : 0};
  border-bottom-right-radius: ${({ radiusBottomRight }) =>
    radiusBottomRight ? "50px" : 0};

  border-top: ${({ borderTop }) => (borderTop ? "1px solid #fff" : 0)};
  border-bottom: ${({ borderBottom }) => (borderBottom ? "1px solid #fff" : 0)};
  border-left: ${({ borderLeft }) => (borderLeft ? "1px solid #fff" : 0)};
  border-right: ${({ borderRight }) => (borderRight ? "1px solid #fff" : 0)};
`;
const FlexRow = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;
const FlexColumn = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const FlexRow1 = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

const BlackLayer = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    color: #fff;
    font-size: 50px;
  }
`;

const Flex1 = styled.div`
  flex: 1;
  overflow: hidden;
`;
const ImageGallery = ({ imageList = [], onImageClick = () => {} }) => {
  return (
    <ContentWrapper>
      {imageList.length ? (
        imageList.length > 4 ? (
          <Layout5 imageList={imageList} onImageClick={onImageClick} />
        ) : imageList.length > 3 ? (
          <Layout4 imageList={imageList} onImageClick={onImageClick} />
        ) : imageList.length > 2 ? (
          <Layout3 imageList={imageList} onImageClick={onImageClick} />
        ) : imageList.length > 1 ? (
          <Layout2 imageList={imageList} onImageClick={onImageClick} />
        ) : imageList.length > 0 ? (
          <Layout1 imageList={imageList} onImageClick={onImageClick} />
        ) : null
      ) : null}
    </ContentWrapper>
  );
};

const Layout1 = ({ imageList = [], onImageClick = () => {} }) => (
  <ImgContainer
    radiusTopLeft
    radiusBottomLeft
    radiusTopRight
    radiusBottomRight
    image={imageList[0]}
    onClick={() => onImageClick(imageList[0])}
  />
);
const Layout2 = ({ imageList = [], onImageClick = () => {} }) => (
  <FlexRow>
    <FlexRow1>
      <ImgContainer
        image={imageList[0]}
        radiusTopLeft
        radiusBottomLeft
        borderRight
        onClick={() => onImageClick(imageList[0])}
      />
    </FlexRow1>
    <FlexRow1>
      <ImgContainer
        image={imageList[1]}
        radiusTopRight
        radiusBottomRight
        borderLeft
        onClick={() => onImageClick(imageList[1])}
      />
    </FlexRow1>
  </FlexRow>
);
const Layout3 = ({ imageList = [], onImageClick = () => {} }) => (
  <FlexRow>
    <Flex1>
      <ImgContainer
        image={imageList[0]}
        radiusTopLeft
        radiusBottomLeft
        borderRight
        onClick={() => onImageClick(imageList[0])}
      />
    </Flex1>
    <Flex1>
      <FlexColumn>
        <Flex1>
          <ImgContainer
            image={imageList[1]}
            radiusTopRight
            borderLeft
            borderBottom
            onClick={() => onImageClick(imageList[1])}
          />
        </Flex1>
        <Flex1>
          <ImgContainer
            image={imageList[2]}
            radiusBottomRight
            borderLeft
            borderTop
            onClick={() => onImageClick(imageList[2])}
          />
        </Flex1>
      </FlexColumn>
    </Flex1>
  </FlexRow>
);
const Layout4 = ({ imageList = [], onImageClick = () => {} }) => (
  <FlexRow>
    <Flex1>
      <FlexColumn>
        <Flex1>
          <ImgContainer
            image={imageList[0]}
            radiusTopLeft
            borderBottom
            borderRight
            onClick={() => onImageClick(imageList[0])}
          />
        </Flex1>
        <Flex1>
          <ImgContainer
            image={imageList[1]}
            radiusBottomLeft
            borderTop
            borderRight
            onClick={() => onImageClick(imageList[1])}
          />
        </Flex1>
      </FlexColumn>
    </Flex1>
    <Flex1>
      <FlexColumn>
        <Flex1>
          <ImgContainer
            image={imageList[2]}
            radiusTopRight
            borderBottom
            borderLeft
            onClick={() => onImageClick(imageList[2])}
          />
        </Flex1>
        <Flex1>
          <ImgContainer
            image={imageList[3]}
            radiusBottomRight
            borderTop
            borderLeft
            onClick={() => onImageClick(imageList[3])}
          />
        </Flex1>
      </FlexColumn>
    </Flex1>
  </FlexRow>
);
const Layout5 = ({ imageList = [], onImageClick = () => {} }) => {
  return (
    <FlexRow>
      <Flex1>
        <ImgContainer
          image={imageList[0]}
          radiusTopLeft
          radiusBottomLeft
          borderRight
          onClick={() => onImageClick(imageList[0])}
        />
      </Flex1>
      <Flex1>
        <FlexColumn>
          <Flex1>
            <FlexRow>
              <Flex1>
                <ImgContainer
                  image={imageList[1]}
                  borderLeft
                  borderRight
                  borderBottom
                  onClick={() => onImageClick(imageList[1])}
                />
              </Flex1>
              <Flex1>
                <ImgContainer
                  image={imageList[2]}
                  radiusTopRight
                  borderLeft
                  borderBottom
                  onClick={() => onImageClick(imageList[2])}
                />
              </Flex1>
            </FlexRow>
          </Flex1>
          <Flex1>
            <FlexRow>
              <Flex1>
                <ImgContainer
                  image={imageList[3]}
                  borderLeft
                  borderTop
                  borderRight
                  onClick={() => onImageClick(imageList[3])}
                />
              </Flex1>
              <Flex1>
                <ImgContainer
                  image={imageList[4]}
                  radiusBottomRight
                  borderLeft
                  borderTop
                  onClick={() => onImageClick(imageList[4])}
                >
                  {imageList.length > 5 ? (
                    <BlackLayer>
                      <h1>+{imageList.length - 5}</h1>
                    </BlackLayer>
                  ) : null}
                </ImgContainer>
              </Flex1>
            </FlexRow>
          </Flex1>
        </FlexColumn>
      </Flex1>
    </FlexRow>
  );
};
export default ImageGallery;
