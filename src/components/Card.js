import { useContext } from "react";
import { CurrentUserContext } from "../context/CurrentUserContext";

//компонент карточки
function Card({
  name,
  link,
  likes,
  _id,
  owner,
  onCardClick,
  onCardLike,
  onCardDelete,
}) {
  const currentUser = useContext(CurrentUserContext);

  const isLiked = likes.some((owner) => owner._id === currentUser._id);

  const cardLikeButtonClassName = `card__like-btn ${
    isLiked && "card__like-btn_active"
  }`;

  const isOwn = owner._id === currentUser._id;

  //метод обработки открытия попапа с увеличенной картинкой
  const handleClick = () => {
    onCardClick({ name, link });
  };

  const handleLikeClick = () => {
    onCardLike({ likes, _id });
  };

  const handleDeleteClick = () => {
    onCardDelete({ _id });
  };

  return (
    <li className="card" id={_id}>
      <img
        className="card__image"
        src={link}
        alt={name}
        onClick={handleClick}
      />
      {isOwn && (
        <button
          className="card__delete-btn"
          aria-label="Delete"
          type="button"
          onClick={handleDeleteClick}
        ></button>
      )}

      <div className="card__text-box">
        <h2 className="card__heading">{name}</h2>
        <div className="card__like-box">
          <button
            className={cardLikeButtonClassName}
            aria-label="Like"
            type="button"
            onClick={handleLikeClick}
          ></button>
          <span className="card__like-counter">{likes.length}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;
