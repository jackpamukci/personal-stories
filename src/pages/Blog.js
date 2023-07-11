import React from 'react';
import '../App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Front from '../components/Front';
import MediumArticles from '../components/MediumArticles';


const Resume = () => {
  return (
    <div className="App">
      
        <Header name={'JaCk'}/>
        <div className='blogHolder'>
          <MediumArticles/>
        </div>
        <Footer/>      
    </div>
  );
}

export default Resume;
