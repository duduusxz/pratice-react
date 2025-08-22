function Evento({numero}){ //recebe uma prop chamada número

    function meuEvento(){
        console.log(`Fui clicado ${numero}`) //quando o botão for clicado chamará essa função
    }

    return (
        <div>
            <p>Clique para acionar o evento</p>
            <button onClick={meuEvento}>Aqui!</button> {/*cria um evento dentro de um botão*/}
        </div>
    )
}

export default Evento