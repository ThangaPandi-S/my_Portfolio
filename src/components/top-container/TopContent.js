import React from 'react'
import "./TopContainer.css"
import {Link} from 'react-scroll';
import Thanga_Pandi_CV from "../../Thanga_Pandi_CV.pdf";

export const TopContent = () => {

  const handleDownload = ()=>{
    const link = document.createElement("a");
    link.href = Thanga_Pandi_CV;
    link.setAttribute('download','Thanga_Pandi_CV.pdf');
    document.body.appendChild(link);
    link.click();
     document.body.removeChild(link);
  }
  return (
    <div className='topContent'>
        <div className='topContent__container'>
            <h1>Thanga <span> Pandi . S</span></h1>
            <p>A professional Web developer </p>


            <button className='topContent__container__download-btn' onClick={handleDownload}> Download CV</button>


            <Link to="projects" smooth={true} duration={500} > <button className='topContent__container__Works-btn'>My Works</button></Link>
        </div>

    </div>
  )
}
