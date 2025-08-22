import { useState } from "react"

function Button(props){ //cria um props

    const [retorno, setRetorno] = useState("")  // cria constante com o useState

    function Retorno(e){ //cria dunção com evento para dar return da tela
        e.preventDefault() //imped reload da página
        setRetorno(`Você clicou no botão`)
    }

    return (
        <div>
            <form onSubmit={Retorno}>
                <button onChange={(e) => setRetorno(e.target.value)} onClick={props.event}>{props.texto}</button> {/*atribui o onClick para o botão com o "props.event"*/}
                {retorno && <p>{retorno}</p>} {/*Fazendo sistema para carregar a mensagem na tela do usuário para treino pessoal*/}
            </form>
            
        </div>
        
    )
}

export default Button