import { useState, useEffect } from "react";
import ArticleCard from "./HomeArticleCard";


 const GetAllArticles = ({allArticles, setAllArticles}) => {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch(`https://newsapp-api-project.onrender.com/api/articles`)
            .then((response) => { 
                return response.json()})
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
