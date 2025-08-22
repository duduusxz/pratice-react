import Button from './evento/Button'

function Evento(){ //recebe uma prop chamada número

    function meuEvento(){
        console.log(`Ativando evento com props`) //quando o botão for clicado chamará essa função
    }

    function eventoDois(){
        console.log("Ativando outro evento")
    }

    return (
        <div>
            <p>Clique para acionar o evento</p>
            <Button event={meuEvento} texto="primeiro evento"/> {/*cria um evento no botão que chama a function e atribui o texto do botão*/}
            <Button event={eventoDois} texto="segundo evento"/>
        </div>
    )
}

export default Evento