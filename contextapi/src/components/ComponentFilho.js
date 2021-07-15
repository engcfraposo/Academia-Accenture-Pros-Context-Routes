import React from 'react';
import { useToogle } from '../context/ToogleProvider';

// import { Container } from './styles';

function ComponentFilho() {
  const {estadoFilho, handleClickFilho} = useToogle()
  
  return (
      <div>
      <h1>Componente Filho</h1>
      <button onClick={handleClickFilho}>Clique Aqui</button>
      {estadoFilho && <p>clicado</p>}
      </div>
  );
}

export default ComponentFilho;