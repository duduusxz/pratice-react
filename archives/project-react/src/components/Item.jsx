import PropTypes from 'prop-types'

function Item({marca, ano_lancamento}){
    return (
        <>
            <li>{marca} - {ano_lancamento}</li>
            <p>Teste</p>
        </>
    )
}

Item.propTypes = {
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number,
}

Item.defaultProps = {
    
}

export default Item