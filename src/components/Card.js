function Card({ card, onCardClick }) {
  function handleCardClick() {
    onCardClick(card);
  }

  return (
    <div className="element" key={card.cardId}>
      <button className="element__delete-button" type="button"></button>
      <img
        className="element__picture"
        src={card.cardImg}
        alt={card.cardName}
        onClick={handleCardClick}
      />
      <div className="element__description">
        <h2 className="element__title">{card.cardName}</h2>
        <div className="element__like-number">
          <button className="element__like-button" type="button"></button>
          <span className="element__like-container">
            {card.cardLikes.length}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
