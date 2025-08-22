import PropTypes from 'prop-types' //não utilizado mais

function Item({marca = 'não mencionada', ano_lancamento = 0}){ //cria função que define 2 props, caso não forem preenchidas, será substituida pelos valores pré definidos
    return (
        <>
            <li>{marca} - {ano_lancamento}</li> {/*"retorna" os valores das props*/}
        </>
    )
}

export default Item