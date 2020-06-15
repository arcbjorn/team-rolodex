import React from 'react';

import './card.styles.css'

export const Card = (props) => {
  const { person } = props;

  return (
    <div className="card-container">
      <img alt="person" src={`https://robohash.org/${person.id}?set=set1&size=180x180`} />
      <h2>{person.name}</h2>
      <a
        href={person.website}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button type="button">Learn more</button>
      </a>
    </div>
  )
}
