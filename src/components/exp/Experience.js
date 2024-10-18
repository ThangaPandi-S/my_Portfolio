import React from 'react'
import './Experience.css'
import { Element } from 'react-scroll'
import { ExpBox } from './ExpBox'


export const Experience = () => {
  return (
    <Element className="experienceContainer"   id="exp">
        <h1 className='expHead'>Experience</h1>
        <div className='experience__box'>
            <ExpBox number="10+" title="clients"/>
            <ExpBox number="60+" title="Projects" style={{backgroundColor:"var(--span)"}}/>
            <ExpBox number="6+" title="courses"/>
            <ExpBox number="200+" title="hours of Learning"/>
        </div>
    </Element>
  )
}
