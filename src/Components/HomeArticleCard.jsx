import {Link} from "react-router-dom"
import { parseISO } from 'date-fns';
import { format } from 'date-fns-tz'

const ArticleCard = ({ article }) => {

  function fixDateDisplay(timestamp) {
    const parsedDate = parseISO(timestamp)
    const pattern = 'd.M.yyyy'
    const ukTimeZone = 'Europe/London';
    const output = format(parsedDate, pattern, { timeZone: ukTimeZone })
    return output
  }

  return (
    <>
      <section className="article-card">
        <Link to={`/articles/${article.article_id}`}>
        <img className="art-card-image"
          src={article.article_img_url}
          alt={`${article.topic} related picture`}
        />
        <div className='art-title'><h2>{article.title}</h2></div>
        <section className="short-art-details">
        <p>Author {article.author}</p>
        <p>{fixDateDisplay(article.created_at)}</p>
        <p>{article.comment_count} comments</p>
        </section>
        </Link>
      </section>
    </>
  );
};

export default ArticleCard;
