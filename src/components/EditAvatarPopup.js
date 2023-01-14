import { useRef } from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      className="popup_avatar"
      isOpen={isOpen}
      title="Обновить аватар"
      onClose={onClose}
      name="edit-avatar"
      buttontext="Сохранить"
      onSubmit={handleSubmit}
    >
      <input
        type="url"
        className="popup__input"
        name="avatar"
        id="input-popup-avatar"
        defaultValue=""
        placeholder="Ссылка на аватар"
        required
        ref={avatarRef}
      />
      <span className="input-popup-avatar-error popup__error-message"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
