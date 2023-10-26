import { useState, useEffect } from "react"
import { GetAllTopics } from '../api'
import TopicDropdown from "./ArticlesByTopic/TopicDropdown"
import DisplayByTopic from "./ArticlesByTopic/DisplayByTopic"


const ArticlesByTopic = () => {

    const [topics, setTopics] =useState([])
    const [chosenTopic, setChosenTopic] = useState('')
    const [error, setError] = useState(null);

    useEffect(()=> {
        GetAllTopics()
        .then((result) => {
            setTopics(result.allTopics);
          })
          .catch((error) => {
            console.error("Error fetching topics:", error);
            setError(`The following error has occurred: ${error.message}. Functionality may be restricted.`)
            setTopics([]);
          });
    }, [])

    if (topics.length === 0) return <p>Searching by topic is not available right now</p>;
    return (
        <>
        <p>{error}</p>
        <TopicDropdown topics={topics} setChosenTopic={setChosenTopic} chosenTopic={chosenTopic}/>
        <DisplayByTopic/>
        </>
    )
}

export default ArticlesByTopic