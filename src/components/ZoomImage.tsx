import React, { useState } from 'react';

const ImageZoom = ({ src }) => {
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleWheel = (event) => {
    event.preventDefault();
    const newZoomLevel = zoomLevel + event.deltaY * -0.01;
    setZoomLevel(Math.min(Math.max(0.5, newZoomLevel), 3));
  };

  return (
    <div className="inline-block overflow-hidden w-400 h-300" onWheel={handleWheel}>
      <img src="./../images/img1.webp" alt="Zoomable Image" style={{ transform: `scale(${zoomLevel})` }} />
      <br/>
    </div>
  );
};

export default ImageZoom;


// import React from 'react';
// import ReactImageMagnify from 'react-image-magnify';

// function App() {
//   const catUrl = './images/z.png';

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <div id="imageMgnifier" className="w-96 h-96">
//         <ReactImageMagnify
//           smallImage={{
//             alt: 'Wristwatch by Ted Baker London',
//             isFluidWidth: true,
//             src: catUrl,
//           }}
//           largeImage={{
//             src: catUrl,
//             width: 1200,
//             height: 2000,
//           }}
//           isHintEnabled={true}
//           isZoomEnabled={true}
//         />
//       </div>
//     </div>
//   );
// }

// export default App;
