import React from 'react'
import "./Contact.css"
import { Element } from 'react-scroll'

import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export const Contact = () => {
  return (
    <Element id='contact' className='contact'>
        <h1>Contact</h1>
        <div className='contact__container'>
            <p>Email : <span>pandithanga792@gmail.com</span></p>
            <p>Github UserName : <span> @gaming_thanga</span></p>
            <div className='contact__icon'>
            <a href='https://www.instagram.com/gaming_thanga_/'>
                <InstagramIcon/>
            </a>
            <a href='https://www.linkedin.com/in/thanga-pandi-s-975040301/'>
                <LinkedInIcon/>
            </a>
            <a href='https://github.com/ThangaPandi-S'>
               <GitHubIcon/>
            </a>
            </div>
        </div>

    </Element>
  )
}
