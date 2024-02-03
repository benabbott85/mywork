
import React from "react";
import Mod from '../assets/modps.jpg'
// import Loop from './loop'

function Hover (){
    return(
      <div className="testhover overlay-card d-block position-relative d-flex align-items-center justify-content-center" style={{ backgroundImage: `url(${Mod})`,  backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center center', display:'block' }}>
<a className="overlay opacity-0 d-flex justify-content-center align-items-center text-center text-white" href="https://modprop.info/" target='_blank' rel="noreferrer">dnsnkkn</a>
      </div>
    )
}


export default Hover