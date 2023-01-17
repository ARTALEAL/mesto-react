import PopupWithForm from './PopupWithForm';
function PopupWithConfirmation({ isOpen, onClose, onLoading, onSubmit, card }) {
  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmit(card);
  }
  return (
    <PopupWithForm
      className="popup_confirmation"
      isOpen={isOpen}
      title="Вы уверены?"
      onClose={onClose}
      name="delete-form"
      buttontext={onLoading ? 'Удаление...' : 'Да'}
      onSubmit={handleSubmit}
    />
  );
}
export default PopupWithConfirmation;
