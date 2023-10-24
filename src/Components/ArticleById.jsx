import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SingleArtCard from './SingleArtCard';
import CommentsByArticleId from './ArtComments';

const ArticleById = () => {
  const [article, setArticle] = useState(null);
  const {article_id} = useParams();

  useEffect(()=>{
    fetch(`https://newsapp-api-project.onrender.com/api/articles/${article_id}`)
    .then((response)=>{
        return response.json()
    })
    .then((result)=>{
        setArticle([result.articleById])
    })
    .catch((error) => {
        console.error("Error fetching article:", error);
        setArticle(null);
      });
  }, [article_id])

 if (article === null) return <p>Article not found</p>
  return (
    <section>
      <SingleArtCard article={article}/>
      <h3>Comments</h3>
      <CommentsByArticleId article_id={article_id}/>
    </section>
  );
};

export default ArticleById;
