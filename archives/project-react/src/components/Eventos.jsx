function Evento({numero}){

    function meuEvento(){
        console.log(`Fui clicado ${numero}`)
    }

    return (
        <div>
            <p>Clique para acionar o evento</p>
            <button onClick={meuEvento}>Aqui!</button>
        </div>
    )
}

export default Evento