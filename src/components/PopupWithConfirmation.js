import PopupWithForm from './PopupWithForm';
import useForm from '../hooks/useForm';

//Исходник
// function PopupWithConfirmation({ isOpen, onClose, onLoading, onSubmit, card }) {
//   function handleSubmit(evt) {
//     evt.preventDefault();
//     onSubmit(card);
//   }
//   return (
//     <PopupWithForm
//       className="popup_confirmation"
//       isOpen={isOpen}
//       title="Вы уверены?"
//       onClose={onClose}
//       name="delete-form"
//       buttontext={onLoading ? 'Удаление...' : 'Да'}
//       onSubmit={handleSubmit}
//     />
//   );
// }

function PopupWithConfirmation({ isOpen, onClose, onLoading, onSubmit, card }) {
  const { isFormValid } = useForm();
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
      isFormValid={!isFormValid}
    />
  );
}
export default PopupWithConfirmation;
