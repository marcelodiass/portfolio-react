import styles from './SectionTitle.module.css'
import PropTypes from 'prop-types'

function SectionTitle(props) {
  return (
    <div className={styles.section}>
        <h2 className={styles.titulo}>{props.titulo}</h2>
        <hr/>
    </div>
  )
}

SectionTitle.propTypes = {
  titulo: PropTypes.string,
}

export default SectionTitle