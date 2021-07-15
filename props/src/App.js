
import ComponentPai from './components/ComponentPai'
import './App.css';

function App(props) {
  return (
    <div>
      <h1>Olá {props.name}!</h1>
      <ComponentPai 
        terceira={"Essa props será renderizada no ComponentPai.js"} 
        quarta={props.segunda}
      />
    </div>
  );
}

export default App;
