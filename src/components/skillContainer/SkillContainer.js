import './SkillContainer.css';
import Designer from '../../images/Designer (8).jpeg'
import {LinearProgress} from '@mui/material'

import React from 'react'
import { Element } from 'react-scroll';
export const SkillContainer = () => {
  return (
    <Element className='sillContainer' id='skills'>
        <div className='skilContainer__image'>
    <img src={Designer} alt='img'/>
        </div>
        <div className='skillContainer__text'>
        <h2>SkillSet</h2>
        <div className='skillContainer__skillset'>
          <h5>html, css ~ bootstrap, tailwindcss</h5>
          <div className='skillContainer__slider skillContainer__slider-3'>
          <LinearProgress variant='determinate' value={90}/>
        </div>
        </div>
        <div className='skillContainer__skillset'>
          <h5>React</h5>
          <div className='skillContainer__slider skillContainer__slider-1'>
          <LinearProgress variant='determinate' value={90}/>
          </div>
          </div>

        <div className='skillContainer__skillset'>
          <h5>typescript, next.js</h5>
          <div className='skillContainer__slider skillContainer__slider-4'>
          <LinearProgress variant='determinate' value={75}/>
        </div>
        </div>
        <div className='skillContainer__skillset'>
          <h5>javascript</h5>
          <div className='skillContainer__slider skillContainer__slider-6'>
          <LinearProgress variant='determinate' value={85}/>
        </div>
        </div>

        <div className='skillContainer__skillset'>
          <h5>Java</h5>
          <div className='skillContainer__slider skillContainer__slider-2'>
          <LinearProgress variant='determinate' value={75}/>
        </div>
        </div>
        <div className='skillContainer__skillset'>
          <h5>python</h5>
          <div className='skillContainer__slider skillContainer__slider-2'>
          <LinearProgress variant='determinate' value={60}/>
        </div>
        </div>

        <div className='skillContainer__skillset'>
          <h5>firebase, google cloud, github</h5>
          <div className='skillContainer__slider skillContainer__slider-5'>
          <LinearProgress variant='determinate' value={75}/>
        </div>
        </div>

        </div>
    </Element>
  )
}
