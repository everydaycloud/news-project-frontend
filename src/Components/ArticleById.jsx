import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SingleArtCard from './SingleArtCard';
import CommentsByArticleId from './ArtComments';
import React from "react";
import { useUserContext } from "./UserContext";
import {GetArticleById} from '../api'

const ArticleById = () => {
  const [article, setArticle] = useState([]);
  const {article_id} = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { user } = useUserContext();

  useEffect(() => {
    setIsLoading(true);
    GetArticleById(article_id)
      .then((result) => {
        setArticle([result.articleById]);
        setIsLoading(false);
        setError(null);
      })
      .catch((error) => {
        console.error("Error fetching article:", error);
        setError(`The following error has occurred: ${error.message}. Functionality may be restricted.`)
        setIsLoading(false);
      });
  }, [article_id, user]);

  if (error) return <p>{error}</p>
  if (isLoading) return <p>Loading...</p>;
  if (!error && article === null) return <p>Article not found</p>
  return (
    <>
    <section className='single-article'>
      <SingleArtCard article={article}/>
      <h3>Comments</h3>
      <CommentsByArticleId article_id={article_id}/>
    </section>
    </>
  );
};

export default ArticleById;
