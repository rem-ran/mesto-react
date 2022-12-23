import { useState, useEffect } from "react";

//импортируем компоненты
import api from "../utils/api.js";
import Card from "./Card.js";

//компонент начальной страницы
function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  //переменная состояния имени пользователя
  const [userName, setUserName] = useState("");

  //переменная состояния профессии пользователя
  const [userDescription, setUserDescription] = useState("");

  //переменная состояния аватарки пользователя
  const [userAvatar, setUserAvatar] = useState("");

  //переменная состояния начального массива карточек
  const [cards, setCards] = useState([]);

  //Запрос к API за информацией о пользователе и массиве карточек
  useEffect(() => {
    api
      .getDataForInitialLoading()

      .then(([{ name, about, avatar }, cards]) => {
        setUserName(name);
        setUserDescription(about);
        setUserAvatar(avatar);
        setCards(cards);
      })

      .catch((error) => {
        console.log(
          `Ошибка при начальной загрузки информации с сервера: ${error}`
        );
      });
  }, []);

  return (
    <main>
      {/* секция профиля */}
      <section className="profile">
        <div className="profile__image-text">
          <img
            className="profile__image"
            src={userAvatar}
            alt="аватарка"
            name="avatar"
          />
          {/* кнопка редактирования аватарки профиля */}
          <button
            className="profile__image-edit-btn"
            aria-label="Edit"
            type="button"
            onClick={onEditAvatar}
          ></button>
          <div className="profile__text-box">
            <div className="profile__name-edit-box">
              <h1 className="profile__name">{userName}</h1>
              {/* кнопка редактирования имени и профессии профиля */}
              <button
                className="profile__edit-btn"
                aria-label="Edit"
                type="button"
                onClick={onEditProfile}
              ></button>
            </div>
            <p className="profile__profession">{userDescription}</p>
          </div>
        </div>
        {/* кнопка добавления */}
        <button
          className="profile__add-btn"
          aria-label="Add"
          type="button"
          onClick={onAddPlace}
        ></button>
      </section>

      {/* секция с карточками-картинками и лайком */}
      <section className="cards">
        <ul className="cards__container">
          {cards.map((card) => (
            <Card key={card._id} onCardClick={onCardClick} {...card} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
