import { useEffect, useState } from "react";

// импортируем компоненты
import Footer from "./Footer";
import Main from "./Main";
import Header from "./Header";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import { CurrentUserContext } from "../context/CurrentUserContext";
import api from "../utils/api";

function App() {
  //переменная состояния попапа обновления данных пользователя
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);

  //переменная состояния попапа обновления аватара
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  //переменная состояния попапа добавления новой карточки
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);

  //переменные состояния попапа с увеличенной картинки карточки
  const [isCardOpen, setIsCardOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState({});

  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    api
      .getServerUserInfo()

      .then((userData) => {
        setCurrentUser(userData);
      })

      .catch((error) => {
        console.log(
          `Ошибка при начальной загрузки информации пользователя с сервера: ${error}`
        );
      });
  }, []);

  //метод обработки открытия попапа обновления данных пользователя
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  //метод обработки открытия попапа обновления аватара
  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  //метод обработки открытия попапа добавления новой карточки
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  //метод обработки открытия попапа с увеличенной картинки
  const handleCardClick = (initialData) => {
    setIsCardOpen(true);
    setSelectedCard(initialData);
  };

  //метод обработки закрытия всех попапов
  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsCardOpen(false);
  };

  //переменная состояния начального массива карточек
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getAllCards()

      .then((cards) => {
        setCards(cards);
      })

      .catch((error) => {
        console.log(
          `Ошибка при начальной загрузки карточек с сервера: ${error}`
        );
      });
  }, []);

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    if (!isLiked) {
      api.putLike(card._id).then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      });
    } else {
      api.removeLike(card._id).then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      });
    }
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id).then(() => {
      setCards((state) => state.filter((c) => c._id != card._id));
    });
  }

  return (
    <div className="page__content">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />

        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          cards={cards}
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

        <ImagePopup
          card={selectedCard}
          isOpen={isCardOpen}
          onClose={closeAllPopups}
        />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
