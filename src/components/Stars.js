import React from 'react';
import Star from './Star';
// import shortId from 'shortid';

// const initStar = (items) => items.map((value) => ({
//   id: shortId.generate(),
//   value,
// }));

export default function Stars(props) {
  const { count } = props;    
    if (count > 0 && count <= 5) {    
      return (        
        <ul className="card-body-stars u-clearfix">
          {/* <li key={shortId.generate()}><Star count={count} /></li> */}
          <Star count={count} />
        </ul>
      )
    }

  return null;
  // return (
  //   <div></div>
  // )  
}

Stars.defaultProps = {
  count: 0,
}
