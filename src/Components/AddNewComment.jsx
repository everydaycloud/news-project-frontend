import { useState, useEffect } from "react";
import React from "react";
import { useUserContext } from "./UserContext";
import { PostNewComment } from "../api";

const AddNewComment = ({
    article_id,
    setNewComment,
    newComment,
    setOptimisticComment
  }) => {
    const [commentBody, setCommentBody] = useState("");
    const { user } = useUserContext();
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [startAdding, setStartAdding] = useState(false);
    const [commentAdded, setCommentAdded] = useState('')
  

    const handleSubmit = (event) => {
        event.preventDefault();
        setStartAdding(true);
        setNewComment(!newComment);
      };

  useEffect(() => {
    if (startAdding) {
      setIsLoading(true);
      PostNewComment(article_id, {body: `${commentBody}`, username: user.username })
        .then((result) => {
          setOptimisticComment(result.newComment)
          setIsLoading(false)
          setCommentBody("")
          setCommentAdded(`Your comment has been posted.`)
        })
        .catch((err) => {
          setError(err);
          setIsLoading(false);
        });
    }
  }, [startAdding, article_id]);


  if (isLoading) return <p>Your comment is being added...</p>;
  if (error) return <p>{error.msg}</p>;

  return (
    <>
      {user ? (
        <>
        <p>{commentAdded}</p>
        <form className="add-comment-form" onSubmit={handleSubmit}>
          <input
            aria-required
            required
            id="comment-body"
            type="text"
            placeholder="type your comment here"
            value={commentBody}
            onChange={(event) => {
              setCommentBody(event.target.value);
            }}
          />
          <p id="commenter">Username {user.username}</p>
          <button id="add-comment-button" >Add Comment</button>
        </form>
        </>
      ) : (
        <p>Log in to comment</p>
      )}
    </>
  );
};

export default AddNewComment;
