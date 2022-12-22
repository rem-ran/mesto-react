//компонент попапа с формой
function PopupWithForm({ children, title, name, buttonText, isOpen, onClose }) {

  return (

    <section className={`popup form popup_type_${name} ${isOpen ? 'popup_opened' : ''}`  }>

      <div className={`popup__container popup__container_${name}`}>
        <h2 className={`popup__heading popup__heading_type_${name}`}>
        {title}
        </h2>

        <form
          className={`popup__form popup__form_type_${name}`}
          method="get"
          name={name}
          noValidate
        >
          {children}

            {/* кнопка сохранения данных */}
          <button
            className={`popup__save-btn popup__save-btn_type_${name}`}
            type="submit"
            >{buttonText}
          </button>

        </form>

        {/* кнопка закрытия попапа без сохранения данных */}
        <button
          className={`popup__close-btn popup__close-btn_type_${name}`}
          type="button"
          aria-label="Close"
          onClick={onClose}
        ></button>

      </div>

    </section>

  )
}

export default PopupWithForm;