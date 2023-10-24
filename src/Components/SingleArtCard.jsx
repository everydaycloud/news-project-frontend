import ArticleVotes from './ArticleVotes';

const SingleArtCard = ({ article }) => {

  return (
    <section id={article[0].article_id}>
      <img
        src={article[0].article_img_url}
        alt={`${article[0].topic} related picture`}
      />
      <h2>{article[0].title}</h2>
      <p>Author {article[0].author}</p>
      <p>Date published {article[0].created_at}</p>
      <p>{article[0].comment_count} comments</p>
      <ArticleVotes article_id={article[0].article_id}/>
      <p>{article[0].body}</p>
    </section>
  );
};

export default SingleArtCard;
