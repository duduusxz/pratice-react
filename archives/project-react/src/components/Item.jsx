import PropTypes from 'prop-types'

function Item({marca = 'não mencionada', ano_lancamento = 0}){
    return (
        <>
            <li>{marca} - {ano_lancamento}</li>
        </>
    )
}

export default Item