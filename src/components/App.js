import { useState } from 'react';

//импортируем стили
import '../index.css';

// импортируем компоненты
import Footer from './Footer';
import Main from './Main';
import Header from './Header';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';



function App() {

  //переменная состояния попапа обновления данных пользователя
  let [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);

  //метод обработки открытия попапа обновления данных пользователя
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(isEditProfilePopupOpen = true);
  }


//переменная состояния попапа обновления аватара
  let [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  //метод обработки открытия попапа обновления аватара
  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(isEditAvatarPopupOpen = true);
  }


  //переменная состояния попапа добавления новой карточки
  let [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);

  //метод обработки открытия попапа добавления новой карточки
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(isAddPlacePopupOpen = true);
  }


  //переменные состояния попапа с увеличенной картинки карточки
  let [isCardOpen, setIsCardOpen] = useState(false);

  let [selectedCard, setSelectedCard] = useState({})

  //метод обработки открытия попапа с увеличенной картинки
  const handleCardClick  = ({name, link}) => {
    setIsCardOpen(isCardOpen = true);
    setSelectedCard({name, link});
  }


  //метод обработки закрытия всех попапов
  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(isEditAvatarPopupOpen = false);
    setIsAddPlacePopupOpen(isAddPlacePopupOpen = false);
    setIsEditProfilePopupOpen(isEditProfilePopupOpen = false);
    setIsCardOpen(isCardOpen = false);
  }



  return (

    <div className="page__content"> 
    
      <Header />

      <Main 
        onEditProfile={handleEditProfileClick} 
        onAddPlace={handleAddPlaceClick} 
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
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
        <span className="username-error popup__error">
        </span>
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
        <span className="user-job-error popup__error">
        </span>
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
        <span className="card-name-error popup__error">
        </span>
        <input
          className="popup__input popup__input_type_card-link"
          id="img-link"
          type="url"
          name="link"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="img-link-error popup__error">
        </span>
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
        <span className="avatar-link-error popup__error">
        </span>
      </PopupWithForm>

      <PopupWithForm 
        name="card-submit" 
        title="Вы уверены?" 
        buttonText="Да"
        onClose={closeAllPopups} 
      />

      <ImagePopup 
        card={selectedCard} 
        isOpen={isCardOpen} 
        onClose={closeAllPopups} 
      />
      
    </div>

  );
}

export default App;
