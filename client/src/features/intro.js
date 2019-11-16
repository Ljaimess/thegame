import React from 'react';
import { Link } from "react-router-dom";
const Intro = () => {
   return (<div>
       <div className="title_img">
       <img src="../../public/tiles/title_img.png" width="500" height="1000" className="title_img_holder"/>
       </div>
       <Link className="link" to="/space">START GAME</Link>
   </div> );
}
export default Intro;