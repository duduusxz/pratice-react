import styles from './Frase.module.css' //importa o css da frase

function Frase(){
    return(
        <div className={styles.fraseContainer}> {/*criado para teste do css*/}
            <p className={styles.fraseContent}>Este é um componente de uma frase</p>
        </div>
    )
}

export default Frase