import { useState, useEffect } from "react";
import CommentCard from "./CommentCard";
import AddNewComment from "./AddNewComment";
import { GetCommentsByArticleId } from "../api";
import { parseISO } from 'date-fns';
import { format } from 'date-fns-tz'

const CommentsByArticleId = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState(false);
  const [optimisticComment, setOptimisticComment] = useState([])
  const [error, setError] = useState(null)
  const [changeComment, setChangeComment] = useState(false)

  function fixDateDisplay(timestamp) {
    const parsedDate = parseISO(timestamp)
    const pattern = 'd.M.yyyy HH:mm'
    const ukTimeZone = 'Europe/London';
    const output = format(parsedDate, pattern, { timeZone: ukTimeZone })
    return output
  }


  useEffect(() => {
    if (newComment) {
      GetCommentsByArticleId(article_id)
        .then((result) => {
          setComments(result.commentsById);
          setOptimisticComment([])
          setError(null)
        })
        .catch((error) => {
          console.error("Error fetching comments:", error);
          setError(`The following error has occurred: ${error.message}. Functionality may be restricted.`)
          setOptimisticComment([])
        });
    } else {
        GetCommentsByArticleId(article_id)
        .then((result) => {
          setComments(result.commentsById);
          setOptimisticComment([])
          setError(null)
          setChangeComment(false)
        })
        .catch((error) => {
          console.error("Error fetching comments:", error);
          setError(`The following error has occurred: ${error.message}. Functionality may be restricted.`)
          setChangeComment(false)
        });
    }
  }, [newComment, changeComment]);

  if (!error && comments.length < 1) return <p>No comments</p>;
  return (
    <>
    <p>{error}</p>
    <AddNewComment
        article_id={article_id}
        setNewComment={setNewComment}
        newComment={newComment}
        setOptimisticComment={setOptimisticComment}
      />
      <ul>
        {optimisticComment.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <p>{comment.body}</p>
              <p>By {comment.author}</p>
              <p>Votes {comment.votes}</p>
              <p>Added {fixDateDisplay(comment.created_at)}</p>
            </li>
          );
        })}
      </ul>
      <CommentCard comments={comments} setChangeComment={setChangeComment} />
    </>
  );
};

export default CommentsByArticleId;
