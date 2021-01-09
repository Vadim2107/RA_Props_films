import React from 'react';
import Star from './Star';

export default function Stars(props) {
  const { count } = props;    
    if (count > 0 && count <= 5) {    
      return (        
        <ul className="card-body-stars u-clearfix">          
          <Star count={count} />
        </ul>
      )
    }

  return null;  
}
