import { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

//компонент попапа с формой обновления аватарки пользователя
function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, buttonText }) {
  const avatarRef = useRef();

  //метод обработки изменения состояния инпута аватара пользователя
  function handleAvatarChange() {
    return avatarRef.current.value;
  }

  //метод обрабоки подтверждения формы попапа обновления аватара пользователя
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
      buttonText={buttonText}
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
