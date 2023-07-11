import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom"


const MediumCard = ({ article }) => {
  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  return (
    // <Card className="mb-3" style={{ width: "20%" }}>
    //   <Image src={article.thumbnail} alt={article.title} fluid />
    //   <Card.Body>
    //     <Card.Title>{article.title}</Card.Title>
    //     <Card.Subtitle className="text-muted">
    //       {new Date(article.pubDate).toLocaleDateString()}
    //     </Card.Subtitle>
    //     <a href={article.link} variant="primary" target="_blank">
    //       Read More
    //     </a>
    //   </Card.Body>
    // </Card>
    <div className="big-card">
      <a href={article.link} className="big-link">
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