import { useContext, useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../context/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState();

  const [description, setDescription] = useState();

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="user"
      title="Редактировать профиль"
      buttonText="Сохранить"
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
