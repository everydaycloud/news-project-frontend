

const CommentCard = ({comments}) => {
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
        </>)
}

export default CommentCard