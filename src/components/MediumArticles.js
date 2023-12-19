import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import MediumCard from "./MediumCard";
import Loader from 'react-loader-spinner';


const { parse } = require('rss-to-json')


const MediumArticles = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

  
    useEffect(() => {
      fetch("/api/medium")
        .then(res => res.text())
        // .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
        .then(data => {
          console.log(data);
          // setArticles(data.items);
          setIsLoading(false);
        });
    }, []);
  
    return (
      // <Row>
      //   {articles.map((article, index) => (
      //        <Col key={index} lg="4" md="4" className="mb-3">
      //            <MediumCard article={article} />
      //        </Col>
      //   ))}
      // </Row>
      <div className="blog-post-grid">
        <div className="collection-list" role="list">
        {isLoading ? <div>...</div> : 
           articles.map((article, index) => (
            <div className="blog-post-item" role="listitem">
              <a href={`/blogpage/${index}`} class="big-link">
                <MediumCard article={article}/>
              </a>
            </div>
            
          ))}


          
      </div>
    </div>
    );
  };
  
  export default MediumArticles;