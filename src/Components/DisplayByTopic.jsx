import { useState, useEffect } from "react"
import ArticleCard from "./HomeArticleCard"
import { FetchArticlesByTopic } from "../api"
import { useParams } from 'react-router-dom';


const DisplayByTopic = () =>{
    const [allArticlesByTopic, setAllArticlesByTopic] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const { topic } = useParams();

    useEffect(()=>{
        if (topic){
            setIsLoading(true)
            FetchArticlesByTopic(topic)
            .then((result)=>{
                setAllArticlesByTopic(result.allArticles)
                setIsLoading(false)
            })
            .catch((error)=>{
                setError(`The following error has occurred: ${error.message}. Functionality may be restricted.`);
                setIsLoading(false)
            })
        }
    },[topic])

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>
    return (
        <>
        <ul>
            {allArticlesByTopic.map((article) => {
                return <li key={article.article_id} className="article-card"><ArticleCard article={article} />
                </li>
})}
            </ul>
        </>
    )
}

export default DisplayByTopic