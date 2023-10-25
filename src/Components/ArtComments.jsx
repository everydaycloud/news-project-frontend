import { useState, useEffect } from 'react';
import CommentCard from './CommentCard';
import AddNewComment from './AddNewComment';

const CommentsByArticleId = ({article_id}) => {
    const [comments, setComments] = useState(null);
  
    useEffect(()=>{
      fetch(`https://newsapp-api-project.onrender.com/api/articles/${article_id}/comments`)
      .then((response)=>{
          return response.json()
      })
      .then((result)=>{
          setComments(result.commentsById)
      })
      .catch((error) => {
          console.error("Error fetching comments:", error);
          setComments(null);
        });
    }, [article_id, comments])

    if (comments === null) return <p>No comments</p>
    return (
       <>
        <CommentCard comments={comments}/>
        {/* <AddNewComment setComments={setComments} article_id={article_id}/> */}
        </>
    )
}

export default CommentsByArticleId