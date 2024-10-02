// // // // // // // // // // // // function BG()
// // // // // // // // // // // // {
// // // // // // // // // // // //   return 
// // // // // // // // // // // //    <img
// // // // // // // // // // // //   src="https://static.vecteezy.com/system/resources/previews/029/895/795/non_2x/image-of-cozy-ambience-of-cafe-free-photo.jpg"
// // // // // // // // // // // //   alt="Cozy cafe ambiance"
// // // // // // // // // // // //   style={{ width: '100%', height: '580px',filter: 'brightness(70%) blur(0.8px)' }}
// // // // // // // // // // // // />
// // // // // // // // // // // // }
// // // // // // // // // // // // export default BG;




"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import imgBg from '../tv.png';
const BootstrapCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    { src: "https://images.unsplash.com/photo-1592861956120-e524fc739696?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlJTIwZWF0aW5nfGVufDB8fDB8fHww", alt: 'Slide 1' },
    { src: 'https://img.freepik.com/premium-photo/fast-food-restaurant-with-vintage-sign-retro-decor_124507-140125.jpg', alt: 'Slide 2' },
    { src: 'https://img.freepik.com/premium-photo/retro-style-french-fries-with-vintage-vibe-best-fast-food-french-fries-picture-photography_1020697-131461.jpg', alt: 'Slide 3' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [activeIndex]);

  const handlePrev = () => {
    const newIndex = (activeIndex - 1 + images.length) % images.length;
    setActiveIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = (activeIndex + 1) % images.length;
    setActiveIndex(newIndex);
  };

  return (
    <>
      <div style={{ position: "relative",width: "100%", height: "1000px" ,backgroundColor:"gray" }} >
        
        {/* Overlay TV Image */}
        <div style={{ position: "relative" }}>
          <img
            src="https://static.vecteezy.com/system/resources/previews/021/644/254/original/retro-lines-background-colorful-60s-and-70s-circular-stripes-style-illustration-design-vector.jpg"
            alt="TV Frame"
            style={{ width: "90%", height: "800px", marginTop: "-30px", marginLeft: "70px" }}
          />

          {/* TV Screen Area */}
          <div
            className="tv-screen"
            style={{
              position: "absolute",
              top: "4%", // Adjust to position inside TV frame
              left: "21%", // Adjust to position inside TV frame
              width: "54%", // Adjust width to fit TV screen
              height: "55%", // Adjust height to fit TV screen
              overflow: "hidden",
              borderRadius: "120px", // Adjusted for cleaner screen
              marginLeft: "40px",
              display: 'flex',
              border:"10px",
              justifyContent: 'center',
              alignItems: 'center',
              filter: 'brightness(100%) blur(0.7px)',
             zIndex:"0"
            }}
          >
            <div id="carouselExample" className="carousel slide" data-bs-ride="carousel" style={{ width: '100%', height: '100%' }}>
              <div className="carousel-inner" style={{ width: '100%', height: '100%' }}>
                {images.map((image, index) => (
                  <div key={index} className={`carousel-item ${index === activeIndex ? 'active' : ''}`} style={{ width: '100%', height: '100%' }}>
                    <Image 
                      src={image.src} 
                      className="d-block w-100" 
                      alt={image.alt} 
                      layout="fill" // 
                      objectFit="cover"
                      style={{ width: '100%', height: '100%' }} 
                    />
                  </div>
                ))}
              </div>

              {/* Carousel Controls */}
              <button className="carousel-control-prev" type="button" onClick={handlePrev}>
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" onClick={handleNext}>
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BootstrapCarousel;

// "use client";

// import { useState, useEffect } from 'react';
// import Image from 'next/image';

// const BootstrapCarousel = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const images = [
//     { src: "https://images.unsplash.com/photo-1592861956120-e524fc739696?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlJTIwZWF0aW5nfGVufDB8fDB8fHww", alt: 'Slide 1' },
//     { src: 'https://img.freepik.com/premium-photo/fast-food-restaurant-with-vintage-sign-retro-decor_124507-140125.jpg', alt: 'Slide 2' },
//     { src: 'https://img.freepik.com/premium-photo/retro-style-french-fries-with-vintage-vibe-best-fast-food-french-fries-picture-photography_1020697-131461.jpg', alt: 'Slide 3' },
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       handleNext();
//     }, 3000); // Change slide every 3 seconds

//     return () => clearInterval(interval);
//   }, [activeIndex]);

//   const handlePrev = () => {
//     const newIndex = (activeIndex - 1 + images.length) % images.length;
//     setActiveIndex(newIndex);
//   };

//   const handleNext = () => {
//     const newIndex = (activeIndex + 1) % images.length;
//     setActiveIndex(newIndex);
//   };

//   return (
//     <>
//       <div style={{ position: "relative", width: "100%", height: "1000px", backgroundColor: "#404040", display: "flex", justifyContent: "flex-start", alignItems: "center",marginTop:"-30px" }}>
        
//         {/* Overlay TV Image */}
//         <div style={{ position: "relative", marginLeft: "-30px" ,marginTop:"-240px"
//         }}> {/* Adjust marginLeft for spacing */}
//           <img
//             src="https://i.pinimg.com/736x/6b/b5/de/6bb5ded65b3b5e6652a08cd5d7288ea3.jpg" // Your original TV frame image
//             alt="TV Frame"
//             style={{ width: "90%", height: "700px" }}
//           />

//           {/* TV Screen Area */}
//           <div
//             className="tv-screen"
//             style={{
//               position: "absolute",
//               top: "4%", // Adjust to position inside TV frame
//               left: "17%", // Adjust to position inside TV frame
//               width: "48%", // Adjust width to fit TV screen
//               height: "55%", // Adjust height to fit TV screen
//               overflow: "hidden",
//               borderRadius: "120px", // Adjusted for cleaner screen
//               display: 'flex',
//               justifyContent: 'center',
//               alignItems: 'center',
//               filter: 'brightness(100%) blur(0.7px)',
//               zIndex: "0"
//             }}
//           >
//             <div id="carouselExample" className="carousel slide" data-bs-ride="carousel" style={{ width: '100%', height: '100%' }}>
//               <div className="carousel-inner" style={{ width: '100%', height: '100%' }}>
//                 {images.map((image, index) => (
//                   <div key={index} className={`carousel-item ${index === activeIndex ? 'active' : ''}`} style={{ width: '100%', height: '100%' }}>
//                     <Image 
//                       src={image.src} 
//                       className="d-block w-100" 
//                       alt={image.alt} 
//                       layout="fill" // Ensures the image fills the entire container
//                       objectFit="cover" // Ensures that images maintain aspect ratio and fit inside the container
//                       style={{ width: '100%', height: '100%' }} 
//                     />
//                   </div>
//                 ))}
//               </div>

//               {/* Carousel Controls */}
//               <button className="carousel-control-prev" type="button" onClick={handlePrev}>
//                 <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                 <span className="visually-hidden">Previous</span>
//               </button>
//               <button className="carousel-control-next" type="button" onClick={handleNext}>
//                 <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                 <span className="visually-hidden">Next</span>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Optional Space on the Right */}
//         <div style={{ flex: 1 }} >Hello</div> {/* This div takes the remaining space on the right */}
//       </div>
//     </>
//   );
// };

// export default BootstrapCarousel;
