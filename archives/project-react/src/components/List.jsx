import Item from './Item'

function List(){
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Mustang" ano_lancamento={1980}/>
                <Item marca="Ford" ano_lancamento={1980}/>
                <Item marca="Chevrolet"/>
                <Item />
            </ul>
        </>
    )
}

export default List