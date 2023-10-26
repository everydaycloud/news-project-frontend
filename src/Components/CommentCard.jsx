import { parseISO } from 'date-fns';
import { format } from 'date-fns-tz'

const CommentCard = ({ comments }) => {


  function fixDateDisplay(timestamp) {
    const parsedDate = parseISO(timestamp)
    const pattern = 'd.M.yyyy HH:mm'
    const ukTimeZone = 'Europe/London';
    const output = format(parsedDate, pattern, { timeZone: ukTimeZone })
    return output
  }
  
  if (comments.msg) return <p>Be the first to comment!</p>
  return (
    <>
      <ul>
        {comments.map((comment) => {
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
    </>
  );
};

export default CommentCard;
