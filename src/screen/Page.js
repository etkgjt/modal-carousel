import styled from "styled-components";
import React from "react";

import ImageGallery from "../components/ImageGalllery";
import MyCarousel from "../components/MyCarousel";
import MyModal from "../components/MyModal";
const MockImageList = [
  {
    id: 1,
    url: "https://bayleaf.s3.ap-southeast-1.amazonaws.com/property-images/fa7d4c8e-692e-4cc7-bf85-0fcad740b16c/2b271aa2-779e-4bb3-b9dc-0a730084fc22-46325561_1975119655915194_6045991570992267264_n.jpg",
  },
  {
    id: 2,
    url: "https://bayleaf.s3.ap-southeast-1.amazonaws.com/property-images/fa7d4c8e-692e-4cc7-bf85-0fcad740b16c/9861462e-15a6-4f32-bb93-2c288d34b671-46458005_1975119645915195_8097466976051396608_n.jpg",
  },
  {
    id: 3,
    url: "https://bayleaf.s3.ap-southeast-1.amazonaws.com/property-images/fa7d4c8e-692e-4cc7-bf85-0fcad740b16c/43c8cb0d-512a-4ec6-b420-cca16fe47850-46317252_1975119639248529_4678269741071073280_n.jpg",
  },
  {
    id: 4,
    url: "https://bayleaf.s3.ap-southeast-1.amazonaws.com/property-images/fa7d4c8e-692e-4cc7-bf85-0fcad740b16c/b87bb88f-21e5-4ba7-9aa3-3d62d6f67578-46493246_1975119552581871_785623293091643392_n.jpg",
  },
  {
    id: 5,
    url: "https://bayleaf.s3.ap-southeast-1.amazonaws.com/property-images/fa7d4c8e-692e-4cc7-bf85-0fcad740b16c/a2ee0a06-9137-497b-b45f-61055cfb096f-46283515_1975119529248540_8693543608499830784_n.jpg",
  },
];

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const arrImg = [];
const Page = () => {
  const _handleImageClick = (image) => {
    console.log("Image click", image);
    MyModal.show(() => {},
    <MyCarousel imgList={MockImageList} defaultItem={image} />);
  };

  return (
    <Container>
      <ImageGallery
        imageList={MockImageList}
        onImageClick={_handleImageClick}
      />
    </Container>
  );
};

export default Page;
