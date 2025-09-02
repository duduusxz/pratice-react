import './App.css'
import OutraLista from './components/List2';

function App() { //cria a função app

  const itensNomes = ['Solon', 'Gustavo', 'Eduardo', 'Kevin', 'Miguel', 'João', 'Ângelo']

  return (
    <div className="App"> {/*criando uma class para a div, para conseguir mexer com ela no css*/}
      <h1>Renderização de Listas</h1>
      <OutraLista nomes={itensNomes} />
      <OutraLista nomes={[]} />
    </div>
  )
}

export default App; //exportação da function para a função App aparecer e funcionar na tela do user