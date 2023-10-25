import { useState, useEffect } from "react";
import ArticleCard from "./HomeArticleCard";
import {FetchAllArticles} from '../api'


 const GetAllArticles = ({allArticles, setAllArticles}) => {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        FetchAllArticles()
            .then((result) => {
                    setAllArticles(result.allArticles);
             } )
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    if (isLoading) return <p>Loading...</p>;

    return (
        <>
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
