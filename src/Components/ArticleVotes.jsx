import { useState, useEffect } from "react"
import React from 'react';
import { useUserContext } from './UserContext';
import {GetVotesByArticleId, GetUpdatedVotesByArticleId} from '../api'


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
    setVotes((currVotes)=> currVotes + 1)
    setCounterUp(counterUp === 0 ? +1 : 0)
    setChangeVoteNumber(counterUp === 0 ? 1 : 0)
}

const handleClickDown = (event) =>{
    event.preventDefault()
    setVotes((currVotes)=> currVotes - 1)
    setCounterDown(counterDown === 0 ? 1 : 0)
    setChangeVoteNumber(counterDown === 0 ? -1 : 0)
}

useEffect(()=> {
    setIsLoading(true);
    GetVotesByArticleId(article_id)
    .then((result)=>{
        setVotes(result.articleById.votes)
    })
    .finally(() => {
        setIsLoading(false);
        setError(null);
    })
    .catch((error) => {
        console.error("Error fetching votes:", error);
        setError(`The following error has occurred: ${error.message}. Functionality may be restricted.`);
        setIsLoading(false);
        setVotes(null);
      });
}, [])

const requestOptions = {"inc_votes": changeVoteNumber}

useEffect(()=> {
    setAddingVote(true);
    GetUpdatedVotesByArticleId(article_id, requestOptions)
    .then((result)=>{
        setVotes(result.updatedArticle[0].votes)
        setError(null);
        setAddingVote(false);
    })
    .catch((error) => {
        setError(`The following error has occurred: ${error.message}. Functionality may be restricted.`);
        setIsLoading(false);
        setAddingVote(false);
      });
}, [changeVoteNumber])

if (isLoading) return <p>Loading...</p>;
if (addingVote) return <p>Your vote is being added</p>
if (votes === null) return <p>Votes can't be loaded</p>

    return (
    <>
    <p>{error}</p>
    <p>{votes} votes</p> 
    { user ? (
        <>
    <button onClick={handleClickUp} aria-label="upvote-button">❤️</button>
    <button onClick={handleClickDown} aria-label="downvote-button">👎</button>
    </>
    ): (
        <p>Log in to vote</p>
    )}
    </>)
}

export default ArticleVotes;