import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SingleArtCard from './SingleArtCard';
import CommentsByArticleId from './ArtComments';

const ArticleById = () => {
  const [article, setArticle] = useState(null);
  const {article_id} = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(()=>{
    setIsLoading(true);
    fetch(`https://newsapp-api-project.onrender.com/api/articles/${article_id}`)
    .then((response)=>{
        return response.json()
    })
    .then((result)=>{
        setArticle([result.articleById])
    })
    .finally(() => {
        setIsLoading(false);
        setError(null);
    })
    .catch((error) => {
        console.error("Error fetching article:", error);
        setError(error);
        setIsLoading(false);
        setArticle(null);
      });
  }, [article_id])

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.msg}</p>;
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
