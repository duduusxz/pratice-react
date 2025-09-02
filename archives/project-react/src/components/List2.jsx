function OutraLista({nomes}){

    return(
        <>
            <h3>Lista de Nomes:</h3>
            
            {nomes.length > 0 ? (
                nomes.map((nome, index) => (
                    <p key={index}>{nome}</p>
                ))) : (
                    <p>Não existe nomes na sua lista</p>
                )}
        </>
    )
}

export default OutraLista