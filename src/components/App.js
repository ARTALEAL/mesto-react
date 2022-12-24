import React, { useState } from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  const openEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const openAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const openEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const closeAllPopups = (evt) => {
    if (
      evt.target.classList.contains('popup_opened') ||
      evt.target.classList.contains('popup__close-button')
    ) {
      setIsEditProfilePopupOpen(false);
      setIsAddPlacePopupOpen(false);
      setIsEditAvatarPopupOpen(false);
    }
  };

  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main
          onEditAvatar={openEditAvatarClick}
          onEditProfile={openEditProfileClick}
          onAddPlace={openAddPlaceClick}
        />
        <Footer />

        {/* POPUP profile */}
        <PopupWithForm
          className="profile-edit"
          isOpen={isEditProfilePopupOpen}
          title="Редактировать профиль"
          onClose={closeAllPopups}
        >
          <input
            type="text"
            name="name"
            className="popup__input popup__input_data_name"
            placeholder="Имя"
            id="input-popup-title"
            defaultValue="Жак-Ив Кусто"
            minLength="2"
            maxLength="40"
            required
          />
          <span className="popup__error-message input-popup-title-error"></span>
          <input
            type="text"
            name="about"
            className="popup__input popup__input_data_job"
            placeholder="Вид деятельности"
            id="input-popup-subtitle"
            defaultValue="Исследователь океана"
            minLength="2"
            maxLength="200"
            required
          />
          <span className="popup__error-message input-popup-subtitle-error"></span>
          <button className="button popup__submit-button" type="submit">
            Сохранить
          </button>
        </PopupWithForm>

        {/* PopUP addCard */}

        <PopupWithForm
          className="add-card"
          isOpen={isAddPlacePopupOpen}
          title="Новое место"
          onClose={closeAllPopups}
        >
          <input
            type="text"
            name="name"
            className="popup__input popup__input_place_name"
            placeholder="Название"
            id="card-name"
            minLength="2"
            maxLength="30"
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
        </PopupWithForm>

        {/* PopUP edit Avatar */}

        <PopupWithForm
          className="popup_avatar"
          isOpen={isEditAvatarPopupOpen}
          title="Обновить аватар"
          onClose={closeAllPopups}
        >
          <input
            type="url"
            className="popup__input"
            name="avatar"
            id="input-popup-avatar"
            defaultValue=""
            placeholder="Ссылка на аватар"
            required
          />
          <span className="input-popup-avatar-error popup__error-message"></span>
          <button type="submit" className="popup__submit-button" id="newAvatar">
            Сохранить
          </button>
        </PopupWithForm>

        <template id="card">
          <div className="element">
            <button className="element__delete-button" type="button"></button>
            <img
              className="element__picture"
              src="images/places/karachaevsk.png"
              alt="Карачаевск-Черкесск"
            />
            <div className="element__description">
              <h2 className="element__title">
                Карачаево-Черкесская Республика
              </h2>
              <div className="element__like-number">
                <button className="element__like-button" type="button"></button>
                <span className="element__like-container"></span>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  );
}

export default App;
