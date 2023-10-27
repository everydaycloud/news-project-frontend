import ArticleVotes from './ArticleVotes';
import { parseISO } from 'date-fns';
import { format } from 'date-fns-tz'

const SingleArtCard = ({ article }) => {

  function fixDateDisplay(timestamp) {
    const parsedDate = parseISO(timestamp)
    const pattern = 'd.M.yyyy HH:mm'
    const ukTimeZone = 'Europe/London';
    const output = format(parsedDate, pattern, { timeZone: ukTimeZone })
    return output
  }

  if (article.length === 0) return <></>

  return (
    <section className ='single-art-card' id={article[0].article_id}>
      <img className='single-art-img'
        src={article[0].article_img_url}
        alt={`${article[0].topic} related picture`}
      />
      <section className='article-details'>
      <div className='art-title'><h2>{article[0].title}</h2></div>
      <p >🖋️ Author {article[0].author}</p>
      <p >📆 Published {fixDateDisplay(article[0].created_at)} </p>
      <p > 💬 {article[0].comment_count} comments </p>
      <ArticleVotes article_id={article[0].article_id}/>
      </section>
      <p>{article[0].body}</p>
    </section>
  );
};

export default SingleArtCard;
