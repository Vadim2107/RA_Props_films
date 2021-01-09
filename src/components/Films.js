import React from 'react';
import Film from './Film';

export default function Films({list}) {

  const films = list.map(film => <Film key={film.id} info={film} />);
  return (
    <div className="container">
      {films}
    </div>
  );
}
