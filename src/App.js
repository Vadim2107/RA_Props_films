import React from 'react';
import Films from './components/Films';
import './App.css';
import superman from './img/superman.jpg';
import loneRunner from './img/lone-runner.jpg';
import batman from './img/batman.jpg';
// import Stars from './components/Stars';

function App() {
  const films = [{
    id: 'film-01',
    poster: superman,
    title: 'Супермен',
    stars: 4,
    price: 1299,
    type: 'Экшн',
    color: 'orange',
    isFavorite: true
  }, {
    id: 'film-02',
    poster: loneRunner,
    title: 'Одинокий странник',
    stars: 3,
    price: 899,
    type: 'Вестерн',
    color: 'brown',
    isFavorite: false
  }, {
    id: 'film-03',
    poster: batman,
    title: 'Бэтмен',
    stars: 5,
    price: 1499,
    type: 'Экшн',
    color: 'orange',
    isFavorite: false
  }];

  return (    
    <Films list={films} />
  );
}

// function App () {
//   return (
//     <Stars count={2} />
//   );
// }

export default App;
