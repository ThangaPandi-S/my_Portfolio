import React from 'react'
import { Element } from 'react-scroll'
import './ProjectContainer.css'
import { Project1 } from './Project1'
import study from '../../images/coffeShop.png';
import pronar from '../../images/ECommerce.png';
import premier from '../../images/Book Selling.png';
import jess from '../../images/Musical.png';
import promptly from '../../images/promptly.png'
import coolfix from '../../images/coolfix.png';
import ecom from '../../images/ecom.png'

export const ProjectContainer = () => {

    const projects = [
        {
            img: study,
            title: "Cofee Shop page",
            desc:"This Coffee Shop Website is a beautifully designed platform that offers users an immersive and modern browsing experience. It showcases your coffee offerings with elegant visuals, intuitive navigation, and a warm, inviting theme that reflects the cozy ambiance of a coffee shop.  ",
            link: "https://balaji-cafe-fest-60028485469.development.catalystserverless.in/app/index.html"
        },
        {
            img: pronar,
            title: "ECommerce Webpage",
            desc:"Thastra, The e-commerce website, offers a sleek and user-friendly shopping experience designed to captivate customers with its modern design and seamless functionality. The homepage showcases trending products, curated collections, and exclusive deals in a visually appealing format. Thastra integrates features such as product search, filtering options, and customer reviews to enhance the shopping experience ",
            link: "https://thastra-60028485469.development.catalystserverless.in/app/index.html"
        },
        {
            img: premier,
            title: "Book Selling page",
            desc:"This book-selling page is a well-organized platform that allows customers to easily browse and purchase a wide selection of books. With categories like fiction, non-fiction, bestsellers, and new arrivals, the page offers intuitive navigation, detailed product descriptions, and customer reviews. Each book listing includes high-quality cover images, pricing, and availability. The search and filtering options make finding specific titles simple, while a secure checkout ensures a smooth purchasing experience. Designed for book lovers, this page blends convenience with a passion for reading ",
            link: "https://book-man-60028485469.development.catalystserverless.in/app/index.html"
        },
        {
            img: jess,
            title: "Musical Company",
            desc:"This musical company page offers an engaging platform for exploring a wide range of musical instruments, accessories, and services. With sections dedicated to various instruments like guitars, pianos, and drums, as well as audio equipment and professional sound systems, the page provides detailed product descriptions, images, and customer reviews. Easy navigation and filtering options help users quickly find specific items or browse through categories. Featuring secure checkout and support for custom orders, this page is tailored for both casual musicians and professionals seeking high-quality music gear and services.",
            link: "https://thastra-musical-info-com-60028485469.development.catalystserverless.in/app/index.html"
        },
        {
            img: promptly,
            title: "promptly AI",
            desc:"This Promptly AI website serves as an advanced conversational platform designed to provide AI-driven assistance, similar to Gemini AI. It offers users the ability to interact with an intelligent, conversational AI for a variety of tasks, including answering questions, generating creative content, and providing helpful insights. The website features a clean, user-friendly interface where visitors can input prompts and receive responses in real-time. With seamless functionality, high-speed processing, and powerful natural language understanding, this AI platform delivers a personalized and interactive experience. Promptly AI blends cutting-edge technology with intuitive design, making it an essential tool for users seeking fast and accurate AI solutions. ",
            link: "https://promptly-ai-gpt.web.app/"
        },
        {
            img: ecom,
            title: "agribay",
            desc:"the progress components accept a value in the range 0 - 100. This simplifies things for screen-reader users, where these are the default min / max values. Sometimes, however, you migh ",
            link: "http://ecommerce-thasthra.s3-website.eu-north-1.amazonaws.com"
        }
    ];
  return (
   <Element className='ProjectContainer' id='projects'>
    <p className='projectContainer__headline'>Here are some projects which i done for makes lives of people easy</p>
    <div className='projectContainer__projects'>
    {
        projects.map((project,index)=>{
            return (
                <Project1 key={index} img={project.img} title={project.title} desc={project.desc} link={project.link}/>
            )
        })
    }
    </div>

   </Element>
  )
}
