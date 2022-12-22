import { useState, useEffect } from 'react';

import api from "../utils/api.js";

import Card from './Card.js';


function Main({ onEditProfile, onAddPlace, onEditAvatar}) {

  let [userName, setUserName] = useState("");
  let [userDescription , setUserDescription ] = useState("");
  let [userAvatar, setUserAvatar] = useState("");
  let [cards, setCards] = useState([]);


  useEffect(() => {

    api.getServerUserInfo()

    .then(({name, about, avatar}) => {
      setUserName(name);
      setUserDescription(about);
      setUserAvatar(avatar);
    })

    .catch((error) => {
      console.log(`Ошибка при начальной загрузки информации с сервера: ${error}`);
    })

  })

  useEffect(() => {

    api.getAllCards()
    .then((cards) => {
      setCards(cards)
    })

    .catch((error) => {
      console.log(`Ошибка при начальной загрузки информации cards с сервера: ${error}`);
    })

  }, [])


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
        <Card key={card._id} {...card} />
        ))}
      </ul>
    </section>

  </main>
  )
}

export default Main;