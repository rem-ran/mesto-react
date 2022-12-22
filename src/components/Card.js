
function Card({ name, link, likes, _id }) {

  return (
    <li className="card" id={_id}>
      <img 
        className="card__image" 
        src={link} 
        alt={name} 
      />
      <button 
        className="card__delete-btn" 
        aria-label="Delete" 
        type="button">            
      </button>
      <div className="card__text-box">
        <h2 className="card__heading">
          {name}
        </h2>
        <div className="card__like-box">
          <button 
            className="card__like-btn" 
            aria-label="Like" 
            type="button">
          </button>
          <span className="card__like-counter">
            {likes.length}
          </span>
        </div>
      </div>
    </li>

  )
}

export default Card;