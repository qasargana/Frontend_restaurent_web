// import React, { useState } from 'react';
// import './Intro.css'
//  import { BsFillPlayFill, BsPauseFill, BsPlayBtn, BsPlayFill } from 'react-icons/bs';
// // import main from '../../assets/video/meal.mp4';
//  import assets from '../../assets/meal.mp4';
// // import pic from '../../assets/'
// const Intro = () => {
//   useState[playVedio , setPlayVedio]= React.useState(flase);
// const vidRef = React.useRef();
// const handlevedio = () =>{
//   setplayVedio((prevPlayVedio) => !prevPlayVedio);
//  if(playVedio){
//   vidRef.current.pause();
//  }
//  else{
//   vidRef.current.play();
//  }
// }
//   return (
//     <div className='app__vedio'>
      
//       <video width="100%" height="" ref={vidRef} autoPlay loop controls>
//         <source src={assets} controls autoPlayinfinite type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//        <div className="app__vedio-overlay flex__center">
//          <div className="app__vedio-overlay_circle flex__center"
//          onClick={handlevedio}>
//           {playvedio ?
//           (<BsPauseFill/>):<BsFillPlayFill/>}
//          </div>
//        </div>
//     </div>
//   );
// }

// export default Intro;
