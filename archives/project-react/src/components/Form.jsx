import {useState} from 'react'
import styles from './Form.module.css'

function Form(){

    function cadastrarUser(e){
        e.preventDefault() 
        console.log(`Usuário ${name} foi cadastrado com a senha: ${passowrd}`)
    }

    const [mensagem, setMensagem] = useState("")
    const [name, setName] = useState("")
    const [passowrd, setPassword] = useState("")

    function exibirUser(e){
        e.preventDefault()
        setMensagem(`Olá ${name}, sua senha é ${passowrd}`)
    }

    return (
        <div className={styles.containerCadastro}>
            <h1>Meu cadastro:</h1>
            <form onSubmit={exibirUser}>
                <div className={styles.formsCadastro}>
                    <div className={styles.conjuntoInput}>
                        <label htmlFor="name">Nome:</label>
                        <input type="text" name="name" id="name" placeholder="Digite seu nome" onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className={styles.conjuntoInput}>
                        <label htmlFor="password">Senha:</label>
                        <input type="text" name="password" id="password" placeholder="Digite sua senha" onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div>
                        <button type="submit">Cadastrar</button>
                    </div>
                </div>
                {mensagem && <p className={styles.mensagem}>{mensagem}</p>}
            </form>
        </div>
    )
}

export default Form