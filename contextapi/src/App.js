import './App.css';
import { useToogle } from './context/ToogleProvider';
import ComponentFilho from './components/ComponentFilho';

function App() {
  const {estadoPai, handleClickPai} = useToogle()
  return (
    <>
      <div>
      <h1>Componente Pai</h1>
      <button onClick={handleClickPai}>Clique aqui</button>
      {estadoPai?<p>clicado</p>:<></>}
      </div>
      <ComponentFilho />
    </>
  );
}

export default App;
