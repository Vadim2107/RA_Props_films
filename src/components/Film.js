import React from 'react';
import Preview from './Preview';
import Tag from './Tag';
import Favorite from './Favorite';
import Share from './Share';
import Stars from './Stars';
import MoreLink from './MoreLink';

export default function Film({info}) {
  return (
    <div className="card u-clearfix">

      <div className="card-media">
        <img src={info.poster} alt="Title of the film" className="card-media-img" />
        <Preview />
        <Tag title={info.type} color={info.color} />
      </div>

      <div className="card-body">
        <h2 className="card-body-heading">{info.title}</h2>
        <div className="card-body-options">
          <Favorite isChecked={info.isFavorite} />
          <Share />
        </div>
        <Stars count={info.stars} />        
        <a href="#/" className="card-button card-button-cta">
          Купить {info.price}₽
        </a>
        <a href="#/" className="card-button card-button-link">
          Подробнее
          <MoreLink />
        </a>
      </div>
    </div>
  );
}
