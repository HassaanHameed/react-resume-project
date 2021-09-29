import React from "react";
import InfiniteCarousel from "react-leaf-carousel";
import Container from "@mui/material/Container";
const CarouselAnimation = () => {
  return (
    <>
      <InfiniteCarousel
        breakpoints={[
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
        ]}
        dots={true}
        showSides={false}
        sidesOpacity={0}
        slidesSpacing={0}
        sideSize={0}
        slidesToScroll={2}
        slidesToShow={2}
        // autoCycle={true}
        cycleInterval={1000}
        scrollOnDevice={true}
      >
        <div>
          <img
            style={{ width: "200px", height: "200px" }}
            alt="asdasd"
            src="https://source.unsplash.com/500x500/?web,computer"
          />
        </div>
        <div>
          <img
            style={{ width: "200px", height: "200px" }}
            alt="asdasd"
            src="https://source.unsplash.com/500x500/?web,computer"
          />
        </div>
      </InfiniteCarousel>
    </>
  );
};

export default CarouselAnimation;
