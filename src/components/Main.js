import React from 'react';
import avatar from '../images/profile-image.png';

function Main({ onEditAvatar, onEditProfile, onAddPlace }) {
  return (
    <main className="main">
      <section className="profile">
        <img className="profile__image" src={avatar} alt="Фотография профиля" />
        <button className="profile__avatar-btn" onClick={onEditAvatar}></button>
        <div className="profile__info-container">
          <div className="profile__info">
            <h1 className="profile__name">Жак-Ив Кусто</h1>
            <button
              className="button profile__button-edit"
              type="button"
              aria-label="редактирование профиля"
              onClick={onEditProfile}
            ></button>
            <p className="profile__description">Исследователь океана</p>
          </div>
          <button
            className="button profile__button-add"
            type="button"
            aria-label="добавить"
            onClick={onAddPlace}
          ></button>
        </div>
      </section>
      <section className="elements" aria-label="Секция с карточками"></section>

      {/* POPUP add card */}

      {/* <div className="popup popup_add-card">
        <div className="popup__container">
          <h2 className="popup__title">Новое место</h2>
          <form
            method="post"
            className="popup__form popup__form_add-place"
            name="card"
            novalidate
          >
            <input
              type="text"
              name="name"
              className="popup__input popup__input_place_name"
              placeholder="Название"
              id="card-name"
              minlength="2"
              maxlength="30"
              required
            />
            <span className="popup__error-message card-name-error"></span>
            <input
              type="url"
              name="link"
              className="popup__input popup__input_image_url"
              placeholder="Ссылка на картинку"
              id="link"
              required
            />
            <span className="popup__error-message link-error"></span>
            <button
              className="button popup__submit-button popup__submit-button_disabled"
              type="submit"
            >
              Создать
            </button>
          </form>
          <button className="button popup__close-button" type="button">
            Закрыть
          </button>
        </div>
      </div> */}

      {/* POPUP popup_gallery */}

      {/* <div className="popup popup_gallery">
        <div className="popup__preview">
          <figure className="popup__figure">
            <img className="popup__image" src="#" alt="Фотография" />
            <figcaption className="popup__figcaption"></figcaption>
          </figure>
          <button className="button popup__close-button" type="button">
            Закрыть
          </button>
        </div>
      </div> */}

      {/* POPUP confirmation */}

      {/* <div className="popup popup_confirmation">
        <div className="popup__container">
          <form id="form_remove" className="popup__form">
            <h2 className="popup__title">Вы уверены?</h2>
            <button type="submit" className="popup__submit-button">
              Да
            </button>
          </form>
          <button className="button popup__close-button" type="button">
            Закрыть
          </button>
        </div>
      </div> */}

      {/* PopUP avatar */}

      {/* <div className="popup popup_avatar">
        <div className="popup__container">
          <h2 className="popup__title">Обновить аватар</h2>
          <form
            id="form-avatar"
            className="popup__form"
            novalidate
            name="avatar"
          >
            <input
              type="url"
              className="popup__input"
              name="avatar"
              id="input-popup-avatar"
              value=""
              placeholder="Ссылка на аватар"
              required
            />
            <span className="input-popup-avatar-error popup__error-message"></span>
            <button
              type="submit"
              className="popup__submit-button"
              id="newAvatar"
            >
              Сохранить
            </button>
          </form>
          <button
            type="button"
            className="popup__close-button"
            id="closeAvatar"
          ></button>
        </div>
      </div> */}
    </main>
  );
}

export default Main;
