import { useState } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = useState();

  const [link, setLink] = useState();

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
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
      buttonText="Создать"
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
