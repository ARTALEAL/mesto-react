function PopupWithForm(props) {
  return (
    <div
      className={`popup popup_${props.name} 
      ${props.isOpen ? 'popup_opened' : ''}`}
    >
      <div className="popup__container">
        <h2 className="popup__title">{props.title}</h2>
        <form
          method="post"
          className="popup__form"
          name={`${props.name}`}
          noValidate
        >
          {props.children}
        </form>
        <button className="button popup__close-button" type="button">
          Закрыть
        </button>
      </div>
    </div>
  );
}

export default PopupWithForm;
