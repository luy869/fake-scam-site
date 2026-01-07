import { Link } from 'react-router-dom';

function Card({ title, description, link, linkText = "体験する", isExternal = false }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      {isExternal ? (
        <a href={link} className="btn">{linkText}</a>
      ) : (
        <Link to={link} className="btn">{linkText}</Link>
      )}
    </div>
  );
}

export default Card;
