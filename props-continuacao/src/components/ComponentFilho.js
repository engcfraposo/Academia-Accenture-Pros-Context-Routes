import React from 'react';

function ComponentFilho(props) {
    const handleClick = () => {
      props.setEstadoPai("clickado")
    }
    return (
      <div>
        <h1>botão no componente Pai {props.estadoFilho}</h1>
        <button onClick={handleClick}>Clique aqui para alterar o componente pai</button>
      </div>
    );
}

export default ComponentFilho;