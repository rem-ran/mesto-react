import { useState } from "react";
import PopupWithForm from "./PopupWithForm";

//компонент попапа с формой добавления новой карточки
function AddPlacePopup({ isOpen, onClose, onAddPlace, buttonText }) {
  //переменная состояния названия карточки
  const [name, setName] = useState();

  //переменная состояния ссылки изображения карточки
  const [link, setLink] = useState();

  //метод обработки изменения переменной состояния названия карточки
  function handleNameChange(e) {
    setName(e.target.value);
  }

  //метод обработки изменения переменной ссылки изображения карточки
  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  //метод обрабоки подтверждения формы попапа добавления карточки
  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      name,
      link,
    });

    setName("");
    setLink("");
  }

  return (
    <PopupWithForm
      name="card"
      title="Новое место"
      buttonText={buttonText}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        className="popup__input popup__input_type_card-name"
        id="card-name"
        type="text"
        minLength="2"
        maxLength="30"
        name="name"
        placeholder="Название"
        value={name || ""}
        onChange={handleNameChange}
        required
      />

      <span className="card-name-error popup__error"></span>

      <input
        className="popup__input popup__input_type_card-link"
        id="img-link"
        type="url"
        name="link"
        placeholder="Ссылка на картинку"
        value={link || ""}
        onChange={handleLinkChange}
        required
      />

      <span className="img-link-error popup__error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
