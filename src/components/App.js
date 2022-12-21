import '../index.css';

import Footer from './Footer';
import Main from './Main';
import Header from './Header';

function App() {
  return (
    <div className="page__content"> 
      <Header />
      <Main />
      <Footer />


      {/* секция попапа с редактированием данных пользователя */}
      <section className="popup popup_type_user form">
        <div className="popup__container popup__container_type_user">
          <h2 className="popup__heading popup__heading_type_user">
            Редактировать профиль
          </h2>
          <form
            className="popup__form popup__form_type_user"
            method="get"
            name="user-data"
            noValidate
          >
            <input
              className="popup__input popup__input_type_username"
              id="username"
              type="text"
              minLength="2"
              maxLength="40"
              name="name"
              placeholder="Имя"
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
              required
            />
            <span className="user-job-error popup__error"></span>
            {/* кнопка сохранения данных */}
            <button
              className="popup__save-btn popup__save-btn_type_user"
              type="submit"
            >
              Сохранить
            </button>
          </form>
          {/* кнопка закрытия попапа без сохранения данных */}
          <button
            className="popup__close-btn popup__close-btn_type_user"
            type="button"
            aria-label="Close"
          ></button>
        </div>
      </section>

      {/* секция попапа с добавлением карточки */}
      <section className="popup popup_type_card form">
        <div className="popup__container popup__container_type_card">
          <h2 className="popup__heading popup__heading_type_card">Новое место</h2>
          <form
            className="popup__form popup__form_type_card"
            method="get"
            name="card-data"
            noValidate
          >
            <input
              className="popup__input popup__input_type_card-name"
              id="card-name"
              type="text"
              minLength="2"
              maxLength="30"
              name="name"
              placeholder="Название"
              required
            />
            <span className="card-name-error popup__error"></span>
            <input
              className="popup__input popup__input_type_card-link"
              id="img-link"
              type="url"
              name="link"
              placeholder="Ссылка на картинку"
              required
            />
            <span className="img-link-error popup__error"></span>
            {/* кнопка добавления карточки */}
            <button
              className="popup__save-btn popup__save-btn_type_card"
              type="submit"
            >
              Создать
            </button>
          </form>
          {/* кнопка закрытия попапа без добавления карточки */}
          <button
            className="popup__close-btn popup__close-btn_type_card"
            aria-label="Close"
            type="button"
          ></button>
        </div>
      </section>

      {/* секция попапа с увеличенной картинкой */}
      <section className="popup image-zoom">
        <figure className="image-zoom__container">
          <img 
          className="image-zoom__image" 
          src="#" 
          alt="#" />
          <button
            className="popup__close-btn image-zoom__close-btn"
            aria-label="Close"
            type="button"
          ></button>
          <figcaption className="image-zoom__caption"></figcaption>
        </figure>
      </section>

      {/* секция попапа с редактированием аватарки профиля */}
      <section className="popup popup_type_avatar form">
        <div className="popup__container popup__container_type_avatar">
          <h2 className="popup__heading popup__heading_type_avatar">Обновить аватар</h2>
          <form
            className="popup__form popup__form_type_avatar"
            method="get"
            name="avatar-data"
            noValidate
          >
            <input
              className="popup__input popup__input_type_avatar-link"
              id="avatar-link"
              type="url"
              name="avatar"
              placeholder="Ссылка на аватарку"
              required
            />
            <span className="avatar-link-error popup__error"></span>
            {/* кнопка добавления аватарки */}
            <button
              className="popup__save-btn popup__save-btn_type_avatar"
              type="submit"
            >
              Сохранить
            </button>
          </form>
          {/* кнопка закрытия попапа без обновления аватарки */}
          <button
            className="popup__close-btn popup__close-btn_type_avatar"
            aria-label="Close"
            type="button"
          ></button>
        </div>
      </section>

      {/* секция попапа с подтверждением добавления карточки */}
      <section className="popup popup_type_card-submit">
        <div className="popup__container popup__container_type_card-submit">
          <h2 className="popup__heading popup__heading_type_card-submit">Вы уверены?</h2>
            {/* кнопка подтверждения добавления карточки */}
          <form
            className="popup__form popup__form_type_card-submit"
            method="get"
            name="card-submit"
            noValidate
          >
            <button
              className="popup__save-btn popup__save-btn_type_card-submit"
              type="submit"
            >
              Да
            </button>
          </form>
          {/* кнопка закрытия попапа без подтверждения добавления карточки */}
          <button
            className="popup__close-btn popup__close-btn_type_avatar"
            aria-label="Close"
            type="button"
          >
        </button>
        </div>
      </section>

      {/* образец карточки */}
      <template className="card-template">
        <li className="card" id="#">
          <img 
          className="card__image" 
          src="#" 
          alt="#" />
          <button 
          className="card__delete-btn" 
          aria-label="Delete" 
          type="button"></button>
          <div className="card__text-box">
            <h2 className="card__heading"></h2>
            <div className="card__like-box">
              <button 
              className="card__like-btn" 
              aria-label="Like" 
              type="button">
              </button>
              <span className="card__like-counter"></span>
            </div>
          </div>
        </li>
      </template>
      
    </div>
  );
}

export default App;
