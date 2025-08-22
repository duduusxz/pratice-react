function Pessoa({nome, idade, profissao, foto}){ //cria função com várias props
    return <div>
        <img src={foto} alt={nome} />
        <h2>Nome: {nome} </h2>
        <p>Idade: {idade} </p>
        <p>Profissão: {profissao} </p>
    </div>
}

export default Pessoa