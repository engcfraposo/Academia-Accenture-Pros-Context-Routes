import React from 'react';

function ComponentFilho(props) {
  return <div>
      <p>{props.data}</p>
      <div>{props.footer}</div>
  </div>;
}

export default ComponentFilho;