import '../App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Front from '../components/Front';
import { useState, useEffect, React } from 'react';

import { useParams } from 'react-router-dom';
import BlogContent from '../components/BlogContent';
import { wait } from '@testing-library/user-event/dist/utils';
import Loader from '../components/Loader';


const BlogPage = () => {
    const { postId } = useParams();

    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40readingthepitch")
        .then(res => res.json())
        .then(data => {
            setArticles(data['items']);
            setIsLoading(false);
        } );
    }, []);

    let article = articles[postId]

    console.log(article)
    
  return (
    <div class='body-2'>
        
        <Header name={'JaCk'}/>
        <div className="App-header">
              
           {isLoading ? <h3>...</h3> : 
           <BlogContent article={article}/>}   
        </div>
        <Footer />   
    </div>
  );
}


export default BlogPage;
