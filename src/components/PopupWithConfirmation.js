import PopupWithForm from "./PopupWithForm";

//компонент попапа с формой подтверждения удаления карточки
function PopupWithConfirmation({
  isOpen,
  onClose,
  onSubmit,
  cardToDelete,
  buttonText,
}) {
  //метод обрабоки подтверждения формы попапа подтверждения удаления карточки
  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(cardToDelete);
  };

  return (
    <PopupWithForm
      name="card-submit"
      title="Вы уверены?"
      buttonText={buttonText}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    />
  );
}

export default PopupWithConfirmation;
