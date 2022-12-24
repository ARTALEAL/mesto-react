import React from 'react';
import Card from './Card';

function Main(props) {
  return (
    <main className="main">
      <section className="profile">
        <img
          className="profile__image"
          src={props.userAvatar}
          alt="Фотография профиля"
        />
        <button
          className="profile__avatar-btn"
          onClick={props.onEditAvatar}
        ></button>
        <div className="profile__info-container">
          <div className="profile__info">
            <h1 className="profile__name">{props.userName}</h1>
            <button
              className="button profile__button-edit"
              type="button"
              aria-label="редактирование профиля"
              onClick={props.onEditProfile}
            ></button>
            <p className="profile__description">{props.userDescription}</p>
          </div>
          <button
            className="button profile__button-add"
            type="button"
            aria-label="добавить"
            onClick={props.onAddPlace}
          ></button>
        </div>
      </section>
      <section className="elements" aria-label="Секция с карточками">
        {props.cards.map((card) => (
          <Card key={card.cardId} card={card} onCardClick={props.onCardClick} />
        ))}
      </section>
    </main>
  );
}

export default Main;
