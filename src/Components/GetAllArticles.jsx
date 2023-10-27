import { useState, useEffect } from "react";
import ArticleCard from "./HomeArticleCard";
import {FetchAllArticles} from '../api'
import ArticlesByTopic from "./ArticlesByTopic";


 const GetAllArticles = () => {
    const [allArticles, setAllArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        FetchAllArticles()
            .then((result) => {
                    setAllArticles(result.allArticles);
                    setIsLoading(false)
             })
            .catch((error)=>{
                setError(`The following error has occurred: ${error.message}. Functionality may be restricted.`);
                setIsLoading(false)
            })
    }, []);

    if (isLoading) return <p>Loading...</p>;

    return (
        <>
        <section className="articles-list">
            <p>{error}</p>
            <h2>All Articles</h2>
            <ArticlesByTopic/>
            <ul>
            {allArticles.map((article) => {
                return <li key={article.article_id} className="article-card"><ArticleCard article={article} />
                </li>
})}
            </ul>
        </section>
        </>
    );
}

export default GetAllArticles;
