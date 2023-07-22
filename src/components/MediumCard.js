import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom"


const MediumCard = ({ article }) => {
  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  return (

    <div className="big-card">
      <a className="big-link">
        <div className="little-card">
          <div class="blog-title">{article.title}</div>
          <div class="blog-date">{new Date(article.pubDate).toLocaleDateString('en-US', options)}</div>
          <div class="blog-desc">{article.description.substring(article.description.indexOf("<blockquote>"), article.description.indexOf("</blockquote>")).replace(/<[^>]+>/g, "")}</div>
        </div>
      </a>
    </div>
  );
};

export default MediumCard;