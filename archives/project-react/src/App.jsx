import './App.css'
import Condicional from './components/Condicional';

function App() { //cria a função app

  const nome = 'Carlos' // cria a const nome e atribui um valor a ele

  return (
    <div className="App"> {/*criando uma class para a div, para conseguir mexer com ela no css*/}
      <h1>Renderização por Condições</h1>
      <Condicional />
    </div>
  );
}

export default App; //exportação da function para a função App aparecer e funcionar na tela do user