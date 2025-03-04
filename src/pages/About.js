import React from 'react';
import '../App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Front from '../components/Front';

import about from '../images/asdf.png'

import github from '../images/github.svg'
import email from '../images/email.svg'
import linkedin from '../images/linkedin.svg'



const About = () => {
  return (
    <div className="App">
      
        <Header name={'JaCk'}/>
        <div className="App-header">
          
          <div className='aboutMe'>

            <div className="aboutVis">
              <img className='aboutImage' alt="aboutImage" loading='lazy' src={about}/>
            </div>

            <div className="aboutInfo">
              <div class="paragraph-text">
              I'm a  data scientist with a love for business and sports topics. I graduated with a B.S. in Computer Science with a concentration in Data Science from the University of North Carolina at Charlotte. I've had the opportunity to work in a variety of roles across my internships, including as a data scientist for an Major League Soccer consultancy firm and a data engineer for two separate banks.               </div>
            </div>

          <div>

            <div class='mx-auto mt-10 w-75 border-b-2 border-black'/>

              <div class="something">
                <div class="aboutWho">
                  <img class="inline h-3" alt="inline" src={github}/>
                  <a class="aboutLinks" target="blank" href="https://github.com/jackpamukci">jackpamukci</a>
                </div>
                <div class="aboutWho">
                  <img class="inline h-3" alt="inline" src={email}/>
                  <a class="aboutLinks" target="blank" href="/#">jackpamukci824@gmail.com</a>
                </div>
                <div class="aboutWho">
                  <img class="inline h-3" alt="inline" src={linkedin}/>
                  <a class="aboutLinks" target="blank" href="https://www.linkedin.com/in/jackpamukci/">jpamukci</a>
                </div>
                <div class="aboutWho">
                  <img class="inline h-3" alt="inline" src="https://uploads-ssl.webflow.com/62ae10f6bb3c552ac1412e5d/62b4b78803e60a8f4a48f3f6_Twitter%20Logo%20-%20Black.png"/>
                  <a class="aboutLinks" target="blank" href="https://twitter.com/jackpamukci24/">jackpamukci824</a>
                </div>
              </div>
          </div>

          

          </div>
           
        </div>
        <Footer/>      
    </div>
  );
}

export default About;
