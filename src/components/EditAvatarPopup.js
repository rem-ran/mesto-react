import PopupWithForm from "./PopupWithForm";
import { useRef } from "react";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = useRef();

  function handleAvatarChange() {
    return avatarRef.current.value;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
    avatarRef.current.value = "";
  };

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
        value={undefined}
        onChange={handleAvatarChange}
        required
        ref={avatarRef}
      />
      <span className="avatar-link-error popup__error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
