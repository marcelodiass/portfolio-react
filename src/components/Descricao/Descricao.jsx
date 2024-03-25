import styles from './Descricao.module.css'

function Descricao(props) {
  return (
    <div className={styles.sobre}>
        {props.descricao}
    </div>
  )
}

export default Descricao