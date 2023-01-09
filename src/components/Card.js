import React, { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card({ card, onCardClick }) {
  const currentUser = useContext(CurrentUserContext);

  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = card.owner._id === currentUser._id;

  // Далее в разметке используем переменную для условного рендеринга
  {
    isOwn && <button className="button_del" onClick={handleDeleteClick} />;
  }

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = card.likes.some((i) => i._id === currentUser._id);

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = `element__like-button ${
    isLiked && 'element__like-button_active'
  }`;

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
