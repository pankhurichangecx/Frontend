// import React from "react";
// import Slider from "react-slick";

// // import img1 from "../images/img1.webp";
// // import img2 from "../images/img2.webp";
// // import img3 from "../images/img3.webp";
// // import img4 from "../images/img4.webp";
// // import img5 from "../images/img5.webp";
// // import img6 from "../images/img6.webp";
// // import img7 from "../images/img7.webp";

// const ImageCarousel = () => {
//     // Array of image URLs
//     const images = [
//         "https://assets.bonkerscorner.com/uploads/2022/11/11125551/Bonkerscorner_black_pique_shirt01-1024x1536.jpg",
//         "https://assets.bonkerscorner.com/uploads/2022/11/12112635/Bonkerscorner_-blue_sweatshirt04-1024x1536.jpg",
//         "https://assets.bonkerscorner.com/uploads/2022/11/10172951/Bonkerscorner_mint_sweatshirt05-1024x1536.jpg",
//         "https://assets.bonkerscorner.com/uploads/2022/11/10170031/Bonkerscorner_baby_pink_sweatshirt09-1024x1536.jpg",
//         "https://assets.bonkerscorner.com/uploads/2023/11/12102436/Bonkerscorner_-cream_sweatshirt03-1024x1536.jpg",
//         "https://assets.bonkerscorner.com/uploads/2022/10/03140423/Bonkerscorner_Red_doubled_coloured_signature_sweatshirt_04-1024x1536.jpg"
//       // Add more image URLs as needed
//     ];
  
//     // Slider settings
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//     };
  
//     return (
//       <Slider {...settings}>
//         {images.map((image, index) => (
//           <div key={index}>
//             <img src={image} />
//           </div>
//         ))}
//       </Slider>
//     );
//   };
  
//   export default ImageCarousel;

import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}




