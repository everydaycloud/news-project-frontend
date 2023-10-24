import { useState, useEffect } from "react"
import React from 'react';
import { useUserContext } from './UserContext';


const ArticleVotes = ({article_id}) =>{
    
    const [counterUp, setCounterUp] = useState(0)
    const [counterDown, setCounterDown] = useState(0)
    const { user } = useUserContext();
    const [changeVoteNumber, setChangeVoteNumber] = useState(0)
    const [isLoading, setIsLoading] = useState(false);
    const [votes, setVotes] = useState(0)
    const [error, setError] = useState(null);
    const [addingVote, setAddingVote] = useState(false)

const handleClickUp = (event) =>{
    event.preventDefault()
    setCounterUp(counterUp === 0 ? +1 : 0)
    setChangeVoteNumber(counterUp === 0 ? 1 : 0)
}

const handleClickDown = (event) =>{
    event.preventDefault()
    setCounterDown(counterDown === 0 ? 1 : 0)
    setChangeVoteNumber(counterDown === 0 ? -1 : 0)
}

useEffect(()=> {
    setIsLoading(true);
    fetch(`https://newsapp-api-project.onrender.com/api/articles/${article_id}`)
    .then((response)=>{
        return response.json()
    })
    .then((result)=>{
        setVotes(result.articleById.votes)
    })
    .finally(() => {
        setIsLoading(false);
        setError(null);
    })
    .catch((error) => {
        console.error("Error fetching votes:", error);
        setError(error);
        setIsLoading(false);
        setVotes(null);
      });
}, [])

const requestOptions = {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(
        {"inc_votes": changeVoteNumber}
    ),
  };

useEffect(()=> {
    setAddingVote(true);
    fetch(`https://newsapp-api-project.onrender.com/api/articles/${article_id}`, 
    requestOptions
    )
    .then((response)=>{
        return response.json()
    })
    .then((result)=>{
        setVotes(result.updatedArticle[0].votes)
        setError(null);
        setAddingVote(false);
    })
    .catch((err) => {
        setError(err);
        setIsLoading(false);
        setAddingVote(false);
      });
}, [changeVoteNumber])

if (isLoading) return <p>Loading...</p>;
if (addingVote) return <p>Your vote is being added</p>
if (error) return <p>{error.msg}</p>;
if (votes === null) return <p>Votes can't be loaded</p>

    return (
    <>
    <p>{votes} votes</p> 
    { user ? (
        <>
    <button onClick={handleClickUp}>❤️</button>
    <button onClick={handleClickDown}>👎</button>
    </>
    ): (
        <p>Log in to vote</p>
    )}
    </>)
}

export default ArticleVotes;