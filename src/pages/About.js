import React from 'react';
import '../App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Front from '../components/Front';

import about from '../images/aboutme.PNG'

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
              <div class="paragraph-text-black">
              I'm a full-stack developer and data analyst/engineer with a love for business and sports topics. Currently I am a Data Engineering intern for Bank of Montreal, where I work on retail and enterprise data for stress testing models, and I will be working with Bank of America in the summer as a Software Engineering intern. I also work with the Men's and Women's Soccer team at UNC Charlotte as a Sports Analytics intern. I plan to graduate from UNC Charlotte with a B.S. in Computer Science in Winter 2024.
              </div>
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
