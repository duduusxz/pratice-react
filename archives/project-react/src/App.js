import './App.css';
import OlaMundo from './components/OlaMundo';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {

  const nome = 'Carlos'

  return (
    <div className="App">
      <OlaMundo />
      <SayMyName nome='Dom Pedro' />
      <SayMyName nome={nome} />
      <Pessoa nome='Miguel' idade='22' profissao='programador' foto='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSMfPVWnPAr3h5M9quC_q8wGg8WbonDm_ljUrcDE-BJKBBg3evm1p8LEA8Z8_PouhDtvdaeimGWUz1vxVo1n0P7x1JPCAqp9524vMtEm39J'/>
    </div>
  );
}

export default App;
