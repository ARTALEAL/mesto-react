import { useRef, useState } from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, onLoading }) {
  const [input, setInput] = useState('');
  const avatarRef = useRef();

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
    setInput('');
  }

  return (
    <PopupWithForm
      className="popup_avatar"
      isOpen={isOpen}
      title="Обновить аватар"
      onClose={onClose}
      name="edit-avatar"
      buttontext={onLoading ? 'Сохранение...' : 'Сохранить'}
      onSubmit={handleSubmit}
    >
      <input
        type="url"
        className="popup__input"
        name="avatar"
        id="input-popup-avatar"
        value={input}
        placeholder="Ссылка на аватар"
        required
        ref={avatarRef}
        onChange={handleChange}
      />
      <span className="input-popup-avatar-error popup__error-message"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
