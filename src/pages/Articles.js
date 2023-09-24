import { useEffect, useState } from "react";
import data from "./mockarticles.json"
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Article from "./Article";
function Articles() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    setArticles(data);
  }, [articles])
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', padding: '3rem', paddingLeft: '5.5rem' }}>
      {
        articles.map(article => {
          return (
            <Link to={`/article/${articles.indexOf(article) + 1}`} style={{textDecoration: 'none'}} state={article}>
              <Card expand="lg" bg='dark' style={{ width: '25rem', color: 'white', marginRight: '2rem', marginBottom: '2rem', marginTop: '2rem' }}>
                <Card.Img style={{ height: '18rem' }} src={article.imageUrl} />
                <Card.Title variant='light' style={{ padding: '1rem' }} key={articles.indexOf(article) + 1}>{article.title}</Card.Title>
              </Card>
            </Link>
          )
        })
      }
    </div>
  );
}

export default Articles;