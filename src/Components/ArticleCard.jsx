import {Link} from "react-router-dom"

const ArticleCard = ({ article }) => {
  return (
    <>
      <section className="article-card">
        <Link to={`/articles/${article.article_id}`}>
        <img
          src={article.article_img_url}
          alt={`${article.topic} related picture`}
        />
        <h2>{article.title}</h2>
        <p>Author {article.author}</p>
        <p>Date published {article.created_at}</p>
        <p>{article.comment_count} comments</p>
        </Link>
      </section>
    </>
  );
};

export default ArticleCard;
