import './App.css';
import OlaMundo from './components/OlaMundo';

function App() {

  const name = 'Eduardo'
  const newName = name.toUpperCase()

  function sum(a, b){
    return a + b
  }

  const url = 'https://static.vecteezy.com/ti/fotos-gratis/t2/41436456-ai-gerado-cinematografico-imagem-do-uma-leao-dentro-uma-natureza-panorama-foto.jpg/150'

  return (
    <div className="App">
      <h1>Olá, este é meu projeto React</h1>
      <p>Olá, {newName}</p>
      <p>Soma: {sum(1, 2)}</p>
      <img src={url} alt="leao" />
      <img src={url} alt="imagem" />
      <OlaMundo />
    </div>
  );
}

function Aplicativo(){
  return(
    <div>
      <h1>Olá</h1>
    </div>
  )
}

export default App;
