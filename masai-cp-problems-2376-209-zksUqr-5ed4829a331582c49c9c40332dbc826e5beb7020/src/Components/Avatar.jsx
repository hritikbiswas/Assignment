//enter code here
// Avatar should accept caption and image  as props
// do default export

import React from 'react';

function Avatar(props) {
  return (
    <div>
      {props.cap()} 
      {props.img()} 
    </div>
  );
}

export default Avatar;
