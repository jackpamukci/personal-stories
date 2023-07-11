import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import MediumCard from "./MediumCard";


const MediumArticles = () => {
    const [articles, setArticles] = useState([]);
  
    useEffect(() => {
      fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@marin11amf11")
        .then(res => res.json())
        .then(data => setArticles(data.items));
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
          {articles.map((article, index) => (
            <div className="blog-post-item" role="listitem">
              <MediumCard article={article}/>
            </div>
          ))}
      </div>
    </div>
    );
  };
  
  export default MediumArticles;