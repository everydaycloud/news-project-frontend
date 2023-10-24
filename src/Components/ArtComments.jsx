import { useState, useEffect } from 'react';

const CommentsByArticleId = ({article_id}) => {
    const [comments, setComments] = useState(null);
  
    useEffect(()=>{
      fetch(`https://newsapp-api-project.onrender.com/api/articles/${article_id}/comments`)
      .then((response)=>{
        console.log(response)
          return response.json()
      })
      .then((result)=>{
        console.log(result.commentsById);
          setComments(result.commentsById)
      })
      .catch((error) => {
          console.error("Error fetching comments:", error);
          setComments(null);
        });
    }, [article_id])

    if (comments === null) return <p>No comments</p>
    return (
        <>
        <ul>
            {comments.map((comment)=>{
                return <li key={comment.comment_id}> 
                <p>{comment.body}</p>
                <p>By {comment.author}</p>
                <p>Votes {comment.votes}</p>
                <p>Added {comment.created_at}</p>
                </li>
            })}
        </ul>
        </>
    )
}

export default CommentsByArticleId