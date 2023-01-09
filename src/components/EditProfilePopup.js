import { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../context/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

//компонент попапа с формой изменения данных пользователя
function EditProfilePopup({ isOpen, onClose, onUpdateUser, buttonText }) {
  const currentUser = useContext(CurrentUserContext);

  //переменная состояния имени пользователя
  const [name, setName] = useState();

  //переменная состояния профессии пользователя
  const [description, setDescription] = useState();

  //метод обработки изменения переменной состояния имени пользователя
  function handleNameChange(e) {
    setName(e.target.value);
  }

  //метод обработки изменения переменной состояния профессии пользователя
  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  //метод отображения значения импутов при первичном рендеринге попапа
  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  //метод обрабоки подтверждения формы попапа обновления иноформации пользователя
  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="user"
      title="Редактировать профиль"
      buttonText={buttonText}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        className="popup__input popup__input_type_username"
        id="username"
        type="text"
        minLength="2"
        maxLength="40"
        name="name"
        placeholder="Имя"
        value={name || ""}
        onChange={handleNameChange}
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
        value={description || ""}
        onChange={handleDescriptionChange}
        required
      />

      <span className="user-job-error popup__error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
