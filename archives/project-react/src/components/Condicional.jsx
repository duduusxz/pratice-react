import { useState } from "react"

function Condicional(){

    const [email, setEmail] = useState('') //armazena o valor que foi digitado no input
    const [userEmail, setUserEmail] = useState('') //guarda o email quando a pessoa clica no botão
    const [mensagem, setMensagem] = useState('') //armazena mensagens que srão usadas depois

    function enviarEmail(e){
        e.preventDefault()

        if(!email){ //se nada for digitado no campo que seta o email, então ele garante que o setUserEmail fique vazio, e exibe um texto na mensagem
            setMensagem("Nada foi inserido no campo")
            setUserEmail('')
        } else { //senão, ele limpa e não exibe nada na mensagem, e armazena o email no setUserEmail
            setUserEmail(email)
            setMensagem('')
        }
    }

    function excluirEmail(e){ //ao clicar no button ele limpa o setUserEmail e aplica o texto na mensagem
        setUserEmail('')
        setMensagem('Seu email foi excluído')
    }
    

    return (
        <div>
            <h2>Faça seu cadastro</h2>
            <form>
                <input type="email" placeholder="Digite seu email" onChange={(e) => setEmail(e.target.value)}/>
                <button type="submit" onClick={enviarEmail}>Enviar Email</button>
                {userEmail && (
                        <div>
                            <p>O email do usuário é {userEmail}</p>
                            <button onClick={excluirEmail}>Limpar email</button>
                        </div>
                    )
                }

                {mensagem && <p>{mensagem}</p>}

                {/*Neste bloco acima ele verifica se tem algo escrito no campo de email, se tiver ele carrega o email e um botão, que se clicado, limpa a mensagem do email e exibe a mensagem de exclusão. Caso não tenha nada no input, entra a condição na função enviarEmail*/}
            </form>
        </div>
    )
}

export default Condicional