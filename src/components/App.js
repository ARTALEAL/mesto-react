import React, { useState } from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import { api } from '../utils/Api';
import ImagePopup from './ImagePopup';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isOpenCardPopup, setIsOpenCardPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  //Api states
  const [userAvatar, setUserAvatar] = useState('');
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [cards, setCards] = useState([]);

  const [currentUser, setCurrentUser] = useState({});

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([user, cards]) => {
        setUserName(user.name);
        setUserDescription(user.about);
        setUserAvatar(user.avatar);
        setCurrentUser(user);
        // setCards(
        //   cards.map((card) => ({
        //     cardId: card._id,
        //     cardName: card.name,
        //     cardImg: card.link,
        //     cardLikes: card.likes,
        //     cardOwner: card.owner._id,
        //   }))
        // );
        setCards([...cards]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const openEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const openAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const openEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleCardClick = (card) => {
    setIsOpenCardPopupOpen(true);
    setSelectedCard(card);
  };

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }

  function handleCardDelete(card) {
    const cardId = card._id;
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((cards) => cards.filter((card) => card._id !== cardId));
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }

  const closeAllPopups = (evt) => {
    if (
      evt.target.classList.contains('popup_opened') ||
      evt.target.classList.contains('popup__close-button')
    ) {
      setIsEditProfilePopupOpen(false);
      setIsAddPlacePopupOpen(false);
      setIsEditAvatarPopupOpen(false);
      setIsOpenCardPopupOpen(false);
    }
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <div className="page">
          <Header />
          <Main
            onEditAvatar={openEditAvatarClick}
            onEditProfile={openEditProfileClick}
            onAddPlace={openAddPlaceClick}
            userAvatar={userAvatar}
            userName={userName}
            userDescription={userDescription}
            cards={cards}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
          <Footer />

          {/* POPUP profile */}
          <PopupWithForm
            className="profile-edit"
            isOpen={isEditProfilePopupOpen}
            title="Редактировать профиль"
            onClose={closeAllPopups}
            name="profile"
            buttontext="Сохранить"
          >
            <input
              type="text"
              name="name"
              className="popup__input popup__input_data_name"
              placeholder="Имя"
              id="input-popup-title"
              defaultValue={userName}
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
              defaultValue={userDescription}
              minLength="2"
              maxLength="200"
              required
            />
            <span className="popup__error-message input-popup-subtitle-error"></span>
          </PopupWithForm>

          {/* PopUP addCard */}

          <PopupWithForm
            className="add-card"
            isOpen={isAddPlacePopupOpen}
            title="Новое место"
            onClose={closeAllPopups}
            name="add-card"
            buttontext="Создать"
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
          </PopupWithForm>

          {/* PopUP edit Avatar */}

          <PopupWithForm
            className="popup_avatar"
            isOpen={isEditAvatarPopupOpen}
            title="Обновить аватар"
            onClose={closeAllPopups}
            name="edit-avatar"
            buttontext="Сохранить"
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
          </PopupWithForm>
          <ImagePopup
            isOpen={isOpenCardPopup}
            card={selectedCard}
            onClose={closeAllPopups}
          ></ImagePopup>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
