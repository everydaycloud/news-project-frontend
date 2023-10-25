import { useState, useEffect } from "react";
import CommentCard from "./CommentCard";
import AddNewComment from "./AddNewComment";
import { GetCommentsByArticleId } from "../api";

const CommentsByArticleId = ({ article_id }) => {
  const [comments, setComments] = useState(null);
  const [newComment, setNewComment] = useState(false);

  useEffect(() => {
    if (newComment) {
      GetCommentsByArticleId(article_id)
        .then((result) => {
          setComments(result.commentsById);
        })
        .catch((error) => {
          console.error("Error fetching comments:", error);
          setComments(null);
        });
    } else {
        GetCommentsByArticleId(article_id)
        .then((result) => {
          setComments(result.commentsById);
        })
        .catch((error) => {
          console.error("Error fetching comments:", error);
          setComments(null);
        });
    }
  }, [newComment]);

  if (comments === null) return <p>No comments</p>;
  return (
    <>
      <CommentCard comments={comments} />
      <AddNewComment
        article_id={article_id}
        setNewComment={setNewComment}
        newComment={newComment}
      />
    </>
  );
};

export default CommentsByArticleId;
