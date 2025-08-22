import Item from './Item' //importa a função item criado em outro JSX

function List(){
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Mustang" ano_lancamento={1980}/> {/*dá valores para as props definidas no outro arquivo*/}
                <Item marca="Ford" ano_lancamento={1980}/>
                <Item marca="Chevrolet"/>
                <Item />
            </ul>
        </>
    )
}

export default List