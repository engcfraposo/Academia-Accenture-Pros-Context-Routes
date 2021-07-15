import { useState } from 'react'
import ComponentFilho from './components/ComponentFilho';
import './App.css';

function App() {
  const [ estadoPai, setEstadoPai] = useState("não clickado")
  const [ estadoFilho, setEstadoFilho] = useState("não clickado")
  const handleClick = () => {
    setEstadoFilho("clickado")
  }
  return (
    <div>
      <ComponentFilho setEstadoPai={setEstadoPai} estadoFilho={estadoFilho} />
      <h1>botão no componente filho {estadoPai}</h1>
      <button onClick={handleClick}>Clique Aqui para alterar o componente filho</button>
    </div>
  );
}

export default App;
