import './App.css'  // importa o css global do projeto
import Evento from './components/Eventos' // importa o componente 'Evento' que está em components
import Form from './components/Form' // importa todo o componente de 'Form' que está em components, fazendo um formulário de cadastro

function App() { //cria a função app

  const nome = 'Carlos' // cria a const nome e atribui um valor a ele

  return (
    <div className="App"> {/*criando uma class para a div, para conseguir mexer com ela no css*/}
      <h1>Testando eventos</h1>
      <Evento numero="1" /> {/*puxando a função evento atribuindo um número dentro dele*/}
      <Evento numero="2" />
      <Form /> {/*puxando a função From que faz um "cadastro" do usuário*/}
    </div>
  );
}

export default App; //exportação da function para a função App aparecer e funcionar na tela do user