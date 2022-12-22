
function Main({ onEditProfile, onAddPlace, onEditAvatar}) {
  return (
    <main>

    {/* секция профиля */}
    <section className="profile">
      <div className="profile__image-text">
        <img
          className="profile__image"
          src="#"
          alt="аватарка"
          name="avatar"              
        />
        {/* кнопка редактирования аватарки профиля */}
        <button 
        className="profile__image-edit-btn" 
        aria-label="Edit" 
        type="button"
        onClick={onEditAvatar}
        ></button>
        <div className="profile__text-box">
          <div className="profile__name-edit-box">
            <h1 className="profile__name">Жак-Ив Кусто</h1>
            {/* кнопка редактирования имени и профессии профиля */}
            <button 
            className="profile__edit-btn" 
            aria-label="Edit" 
            type="button"
            onClick={onEditProfile}
            ></button>
          </div>
          <p className="profile__profession">Исследователь океана</p>
        </div>
      </div>
      {/* кнопка добавления */}
      <button 
      className="profile__add-btn" 
      aria-label="Add" 
      type="button"
      onClick={onAddPlace}
      ></button>
    </section>
    {/* секция с карточками-картинками и лайком */}
    <section className="cards">
      <ul className="cards__container"></ul>
    </section>

  </main>
  )
}

export default Main;