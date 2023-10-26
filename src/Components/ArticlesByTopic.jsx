import { useState, useEffect } from "react"
import { GetAllTopics } from '../api'
import TopicDropdown from "./ArticlesByTopic/TopicDropdown"
import DisplayByTopic from "./ArticlesByTopic/DisplayByTopic"

const ArticlesByTopic = () => {

    const [topics, setTopics] =useState(null)
    const [chosenTopic, setChosenTopic] = useState(null)

    useEffect(()=> {
        GetAllTopics()
        .then((result) => {
            console.log(result);
            setTopics(result.ArticlesByTopic);
          })
          .catch((error) => {
            console.error("Error fetching topics:", error);
            setTopics(null);
          });
    }, [])

    if (topics === null) return <p>Searching by topic is not available right now</p>;
    return (
        <>
        <TopicDropdown topics={topics} setChosenTopic={setChosenTopic} chosenTopic={chosenTopic}/>
        <DisplayByTopic/>
        </>
    )
}

export default ArticlesByTopic