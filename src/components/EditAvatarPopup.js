import PopupWithForm from "./PopupWithForm";
import { useRef, useState } from "react";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const [avatar, setAvatar] = useState();

  const avatarRef = useRef();

  function handleAvatarChange() {
    setAvatar(avatarRef.current.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar,
    });
  }
  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      buttonText="Сохранить"
      onSubmit={handleSubmit}
      isOpen={isOpen}
      onClose={onClose}
    >
      <input
        className="popup__input popup__input_type_avatar-link"
        id="avatar-link"
        type="url"
        name="avatar"
        placeholder="Ссылка на аватарку"
        value={""}
        onChange={handleAvatarChange}
        required
        ref={avatarRef}
      />
      <span className="avatar-link-error popup__error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
