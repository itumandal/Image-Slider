import React, { useEffect, useState } from "react";
import "./Imagecarousel.css";
import { images } from "./Mycard.js";

function Imagecarousel() {
  const [current, setCurrent] = useState(0);
  //   let box = document.querySelector(".product-container");

  useEffect(() => {
    console.log(current);
  }, [current]);

  const handlepressPrev = () => {
    // let width = box.clientWidth;
    // box.scrollLeft = box.scrollLeft - width;
    // console.log(width);

    setCurrent(current - 1);
  };

  const handlepressNext = () => {
    // let width = box.clientWidth;
    // box.scrollLeft = box.scrollLeft + width;
    // console.log(width);
    setCurrent(current + 1);
  };
  return (
    <div className="product-carousel">
      <h2>Image Carousel</h2>
      <div className="slider">
        <button
          className="pre-btn"
          onClick={handlepressPrev}
          disabled={current === 0}
        >
          <p>&lt;</p>
        </button>
        <button
          className="next-btn"
          onClick={handlepressNext}
          disabled={current === images.length - 1}
        >
          <p>&gt;</p>
        </button>
        {images.map(
          (image, index) =>
            current === index && (
              <div key={image} className="slide">
                <img src={image} alt="images" />
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default Imagecarousel;
