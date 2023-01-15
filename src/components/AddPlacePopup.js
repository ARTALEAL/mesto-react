import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  // Стейт, в котором содержится значение инпута
  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');

  // Обработчик изменения инпута обновляет стейт
  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeLink(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // // Передаём значения управляемых компонентов во внешний обработчик
    onAddPlace({
      name: name,
      link: link,
    });
    setName('');
    setLink('');
  }
  return (
    <PopupWithForm
      className="add-card"
      isOpen={isOpen}
      title="Новое место"
      onClose={onClose}
      name="add-card"
      buttontext="Создать"
      onSubmit={handleSubmit}
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
        onChange={handleChangeName}
        value={name || ''}
      />
      <span className="popup__error-message card-name-error"></span>
      <input
        type="url"
        name="link"
        className="popup__input popup__input_image_url"
        placeholder="Ссылка на картинку"
        id="link"
        required
        onChange={handleChangeLink}
        value={link || ''}
      />
      <span className="popup__error-message link-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
