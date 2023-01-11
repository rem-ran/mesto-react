import { useEffect, useState } from "react";

// импортируем контекст пользователя
import { CurrentUserContext } from "../context/CurrentUserContext";

// импортируем компоненты
import Footer from "./Footer";
import Main from "./Main";
import Header from "./Header";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import PopupWithConfirmation from "./PopupWithConfirmation";
import api from "../utils/api";

function App() {
  //переменная состояния попапа обновления данных пользователя
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);

  //переменная состояния попапа обновления аватара
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  //переменная состояния попапа добавления новой карточки
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);

  //переменная состояния попапа подтверждения
  const [isConfirmationPopupOpen, setIsConfirmationPopupOpen] = useState(false);

  //переменные состояния попапа с увеличенной картинки карточки
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  //переменная состояния информации пользователя
  const [currentUser, setCurrentUser] = useState({});

  //переменная состояния начального массива карточек
  const [cards, setCards] = useState([]);

  //переменные состояния текста кнопок попапов
  const [userSubmitBtnTxt, setUserSubmitBtnTxt] = useState("Сохранить");
  const [avatarSubmitBtnTxt, setAvatarSubmitBtnTxt] = useState("Сохранить");
  const [cardSubmitBtnTxt, setCardSubmitBtnTxt] = useState("Создать");
  const [cardDeleteBtnTxt, setCardDeleteBtnTxt] = useState("Да");

  const [cardToDelete, setCardToDelete] = useState({});

  //отправляем запрос на сервер и рендерим данные о пользователе
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
    setIsConfirmationPopupOpen(false);
  };

  //отправляем запроса к API для рендеринга начального списка карточек при загрузке страницы
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

  //метод запроса к API для добавления и снятия лайка с карточки
  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    if (!isLiked) {
      api
        .putLike(card._id)

        .then((newCard) => {
          setCards((state) =>
            state.map((c) => (c._id === card._id ? newCard : c))
          );
        })

        .catch((error) => {
          console.log(`Ошибка при добавлении лайка: ${error}`);
        });
    } else {
      api
        .removeLike(card._id)

        .then((newCard) => {
          setCards((state) =>
            state.map((c) => (c._id === card._id ? newCard : c))
          );
        })

        .catch((error) => {
          console.log(`Ошибка при снятии лайка: ${error}`);
        });
    }
  }

  //метод обработки открытия попапа с подтверждением удаления карточки
  function handleConfirmDeleteCardPopup(cardId) {
    setIsConfirmationPopupOpen(true);
    setCardToDelete(cardId);
  }

  //метод запроса к API для удаления карточки
  function handleCardDelete(card) {
    setCardDeleteBtnTxt("Удаление...");
    api
      .deleteCard(card._id)

      .then(() => {
        setCards((state) => state.filter((c) => c._id != card._id));
      })

      .then(() => setIsConfirmationPopupOpen(false))

      .catch((error) => {
        console.log(`Ошибка при удалении карточки: ${error}`);
      })
      .finally(() => {
        setCardDeleteBtnTxt("Да");
      });
  }

  //метод запроса к API для обновления информации пользователя
  function handleUpdateUser(userInfo) {
    setUserSubmitBtnTxt("Сохранение...");
    api
      .updateServerUserInfo(userInfo)

      .then((res) => {
        setCurrentUser(res);
      })

      .then(() => closeAllPopups())

      .catch((error) => {
        console.log(`Ошибка при обновлении данных пользователя: ${error}`);
      })
      .finally(() => {
        setUserSubmitBtnTxt("Сохранить");
      });
  }

  //метод запроса к API для обновления аватарки пользователя
  function handleUpdateAvatar(userAvatar) {
    setAvatarSubmitBtnTxt("Сохранение...");
    api
      .updateServerUserAvatar(userAvatar)

      .then((res) => setCurrentUser(res))

      .then(() => closeAllPopups())

      .catch((error) => {
        console.log(`Ошибка при обновлении аватара: ${error}`);
      })
      .finally(() => {
        setAvatarSubmitBtnTxt("Сохранить");
      });
  }

  //метод запроса к API для добавления новой карточки
  function handleAddPlace({ name, link }) {
    setCardSubmitBtnTxt("Создание...");
    api
      .addNewCard({ name, link })

      .then((newCard) => {
        setCards([newCard, ...cards]);
      })

      .then(() => closeAllPopups())

      .catch((error) => {
        console.log(`Ошибка при добавлении карточки: ${error}`);
      })
      .finally(() => {
        setCardSubmitBtnTxt("Создать");
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
          onCardDelete={handleConfirmDeleteCardPopup}
          cards={cards}
        />

        <Footer />

        {/* попап обновления данных пользователя */}
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
          buttonText={userSubmitBtnTxt}
        />

        {/* попап добавления новой карточки */}
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlace}
          buttonText={cardSubmitBtnTxt}
        />

        {/* попап обновления аватарки пользователя */}
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
          buttonText={avatarSubmitBtnTxt}
        />

        {/* попап с подтверждением удаления карточки */}
        <PopupWithConfirmation
          isOpen={isConfirmationPopupOpen}
          onClose={closeAllPopups}
          onSubmit={handleCardDelete}
          cardToDelete={cardToDelete}
          buttonText={cardDeleteBtnTxt}
        />

        {/* попап увеличенной картинки карточки */}
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
