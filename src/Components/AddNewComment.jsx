import { useState, useEffect } from "react";
import React from "react";
// import { useUserContext } from "./UserContext";

const AddNewComment = ({setComments, article_id }) => {

  const [commentBody, setCommentBody] = useState("");
//   const { user } = useUserContext();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

//   console.log(user, 'user');

  const handleSubmit = (event) => {
    event.preventDefault();
}

const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      body: commentBody,
    //   username: `${user.username}`,
    }),
  };

    useEffect(() => {
      setIsLoading(true);
      fetch(
        `https://newsapp-api-project.onrender.com/api/articles/${article_id}/comments`,
        requestOptions
      )
        .then((response) => {
          response.json();
        })
        .then(({ item }) => {
          console.log(item);
          setComments((currComments) => {
            console.log(currComments, "currComments");
            return [...currComments, item];
          });
          setCommentBody("");
          setError(null);
          setIsLoading(false);
          setError(null);
          setIsLoading(false);
        })
        .catch((err) => {
            setError(err);
            setIsLoading(false);
          });
    }, [commentBody]);

    console.log(commentBody, "comm body");

    if (isLoading) return <p>Your comment is being added...</p>;
    if (error) return <p>{error.msg}</p>;

    return (
        <>
        {user? (
        <form className="add-comment-form" onSubmit={handleSubmit}>
          <input
            id="comment-body"
            type="text"
            placeholder="type your comment here"
            value={commentBody}
            onChange={(event) => {
              setCommentBody(event.target.value);
            }}
          />
          {/* <p>{user.username}</p> */}
          <button>Add Comment</button>
        </form>
        ): (
            <p>Log in to comment</p>
        )}
        </>
    );
  };

export default AddNewComment;
