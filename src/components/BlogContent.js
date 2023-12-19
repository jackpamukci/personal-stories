import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom"


const BlogContent = ({ article }) => {
  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  return (

    <div className="blogPost">
      <div className="blogLogist">
        <h1>{article.title}</h1>
        <p>{new Date(article.pubdate).toLocaleDateString('en-US', options)}</p>
      </div>
      <hr/>
      <div className="blogContent" dangerouslySetInnerHTML={{ __html: article.content }} />
      <hr/>
      <div className="blogClose">
        <p>Check out the  <a href={article.link} target="_blank" >original post</a> on Medium!</p>
      </div>
    </div>

      
  );
};

export default BlogContent;