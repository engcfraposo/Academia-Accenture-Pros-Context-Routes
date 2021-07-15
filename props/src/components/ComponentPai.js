import React from 'react';
import ComponentFilho from './ComponentFilho';

function ComponentPai(props) {
  return <div>
            <h2>{props.terceira}</h2>
            <ComponentFilho 
                quinta={"Essa props será renderizada no ComponentFilho.js"} 
                sexta={props.quarta}
            />
        </div>;
}

export default ComponentPai;