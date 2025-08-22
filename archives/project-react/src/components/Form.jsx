import {useState} from 'react' //importa o hook useState do react
import styles from './Form.module.css' //importa o css do form

function Form(){

    function cadastrarUser(e){ //função para cadastrar o user com evento
        e.preventDefault() //impede o reload da página no navegador
        console.log(`Usuário ${name} foi cadastrado com a senha: ${passowrd}`) //mensagem exibida no console ao receber o ato do evento
    }

    const [mensagem, setMensagem] = useState("") //cria constante que armazena o valor inserido no input com o useState
    const [name, setName] = useState("")
    const [passowrd, setPassword] = useState("")

    function exibirUser(e){ //função para exibir mensagem na tela do user
        e.preventDefault() //impede o reload da página no navegador
        setMensagem(`Olá ${name}, sua senha é ${passowrd} e email é ${`email`}`) //mensagem exibida na tela ao receber o ato do evento
    }

    return (
        <div className={styles.containerCadastro}>
            <h1>Meu cadastro:</h1>
            <form onSubmit={exibirUser}>
                <div className={styles.formsCadastro}>
                    <div className={styles.conjuntoInput}>
                        <label htmlFor="name">Nome:</label>
                        <input type="text" name="name" id="name" placeholder="Digite seu nome" onChange={(e) => setName(e.target.value)}/> {/*usa o onChange para receber o valor do input e mandar para o "mensagem"*/}
                    </div>
                    <div className={styles.conjuntoInput}>
                        <label htmlFor="password">Senha:</label>
                        <input type="text" name="password" id="password" placeholder="Digite sua senha" onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div>
                        <button type="submit">Cadastrar</button>
                    </div>
                </div>
                {mensagem && <p className={styles.mensagem}>{mensagem}</p>} {/*faz exibir a mensagem na tela do user no navegador*/}
            </form>
        </div>
    )
}

export default Form
