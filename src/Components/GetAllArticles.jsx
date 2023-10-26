import { useState, useEffect } from "react";
import ArticleCard from "./HomeArticleCard";
import {FetchAllArticles} from '../api'


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
            <p>{error}</p>
            <ul>
            {allArticles.map((article) => {
                return <li key={article.article_id} className="article-card"><ArticleCard article={article} />
                </li>
})}
            </ul>
        </>
    );
}

export default GetAllArticles;
