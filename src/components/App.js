import { useState } from 'react';

import '../index.css';

import Footer from './Footer';
import Main from './Main';
import Header from './Header';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';



function App() {

  let [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(isEditProfilePopupOpen = true);
  }


  let [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(isEditAvatarPopupOpen = true);
  }


  let [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(isAddPlacePopupOpen = true);
  }


  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(isEditAvatarPopupOpen = false);
    setIsAddPlacePopupOpen(isAddPlacePopupOpen = false);
    setIsEditProfilePopupOpen(isEditProfilePopupOpen = false);
  }



  return (
    <div className="page__content"> 
      <Header />
      <Main 
        onEditProfile={handleEditProfileClick} 
        onAddPlace={handleAddPlaceClick} 
        onEditAvatar={handleEditAvatarClick}
      />
      <Footer />
      
      <PopupWithForm 
        name="user" 
        title="Редактировать профиль" 
        buttonText="Сохранить" 
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className="popup__input popup__input_type_username"
          id="username"
          type="text"
          minLength="2"
          maxLength="40"
          name="name"
          placeholder="Имя"
          required
        />
        <span className="username-error popup__error"></span>
        <input
          className="popup__input popup__input_type_profession"
          id="user-job"
          type="text"
          minLength="2"
          maxLength="200"
          name="about"
          placeholder="О Себе"
          required
        />
        <span className="user-job-error popup__error"></span>
      </PopupWithForm>

      <PopupWithForm 
        name="card" 
        title="Новое место" 
        buttonText="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
      
        <input
          className="popup__input popup__input_type_card-name"
          id="card-name"
          type="text"
          minLength="2"
          maxLength="30"
          name="name"
          placeholder="Название"
          required
        />
        <span className="card-name-error popup__error"></span>
        <input
          className="popup__input popup__input_type_card-link"
          id="img-link"
          type="url"
          name="link"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="img-link-error popup__error"></span>
      </PopupWithForm>

      <PopupWithForm 
        name="avatar" 
        title="Обновить аватар" 
        buttonText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className="popup__input popup__input_type_avatar-link"
          id="avatar-link"
          type="url"
          name="avatar"
          placeholder="Ссылка на аватарку"
          required
        />
        <span className="avatar-link-error popup__error"></span>
      </PopupWithForm>

      <PopupWithForm 
        name="card-submit" 
        title="Вы уверены?" 
        buttonText="Да"
        onClose={closeAllPopups} 
      />
      <ImagePopup />
      
    </div>
    
  );
}

export default App;
