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
    console.log('clicked');
    setIsEditProfilePopupOpen(true);
  };

  const openAddPlaceClick = () => {
    console.log('clicked');
    setIsAddPlacePopupOpen(true);
  };

  const openEditAvatarClick = () => {
    console.log('clicked');
    setIsEditAvatarPopupOpen(true);
  };

  return (
    <div className="App">
      <body className="page">
        <Header />
        <Main
          onEditAvatar={openEditAvatarClick}
          onEditProfile={openEditProfileClick}
          onAddPlace={openAddPlaceClick}
        />
        <Footer />

        {/* POPUP profile */}
        <PopupWithForm
          name="name"
          className="profile-edit"
          isOpen={isEditProfilePopupOpen}
        >
          <input
            type="text"
            name="name"
            className="popup__input popup__input_data_name"
            placeholder="Имя"
            id="input-popup-title"
            value="Жак-Ив Кусто"
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
            value="Исследователь океана"
            minLength="2"
            maxLength="200"
            required
          />
          <span className="popup__error-message input-popup-subtitle-error"></span>
          <button className="button popup__submit-button" type="submit">
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
      </body>
    </div>
  );
}

export default App;
