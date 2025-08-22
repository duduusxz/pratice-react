import Frase from './Frase' //importa o componente frase

function OlaMundo(){
    return(
        <div>
            <h1>Primeiro componente criado</h1>
            <Frase/> {/*usa a function criada no outro arquivo*/}
        </div>
    )
}

export default OlaMundo