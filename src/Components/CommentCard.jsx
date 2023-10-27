import { parseISO } from 'date-fns';
import { format } from 'date-fns-tz'
import React, { useEffect, useState } from 'react';
import { useUserContext } from './UserContext';
import DeleteComment from './DeleteComment';


const CommentCard = ({ comments, setChangeComment }) => {

  const { user } = useUserContext();
  const [isDeleted, setIsDeleted] = useState(false)

  function fixDateDisplay(timestamp) {
    const parsedDate = parseISO(timestamp)
    const pattern = 'd.M.yyyy HH:mm'
    const ukTimeZone = 'Europe/London';
    const output = format(parsedDate, pattern, { timeZone: ukTimeZone })
    return output
  }
  
  useEffect(()=>{
    setChangeComment(true)
  },[isDeleted])


  if (comments.msg) return <p>Be the first to comment!</p>

  return (
    <>
    {user ?(
    <ul>
      {comments.map((comment) => (
        <li key={comment.comment_id}>
          <p>{comment.body}</p>
          <p>By {comment.author}</p>
          <p>Votes {comment.votes}</p>
          <p>Added {fixDateDisplay(comment.created_at)}</p>
          {user.username === comment.author && (
            <DeleteComment comment_id={comment.comment_id} setIsDeleted={setIsDeleted}/>
          )}
        </li>
      ))}
    </ul>) :
    (<ul>
      {comments.map((comment) => (
        <li key={comment.comment_id}>
          <p>{comment.body}</p>
          <p>By {comment.author}</p>
          <p>Votes {comment.votes}</p>
          <p>Added {fixDateDisplay(comment.created_at)}</p>
        </li>
      ))}
    </ul>)}
    </>
  );
};

export default CommentCard;
