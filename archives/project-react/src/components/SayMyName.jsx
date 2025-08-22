function SayMyName(props){ //cria uma função com uma props que será definida no return

    return (
        <div>
            <p>Fala aí {props.nome}, suave?</p>
        </div>
    )
}

export default SayMyName