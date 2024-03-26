import styles from "./Projeto.module.css"
import PropTypes from "prop-types"

function Projeto(props) {
    const renderDesc = props.tecnologias.map((item) => {
        return <li key={item.id}>{item}</li>
    })

    const link = props.link

    const handleClick = () => {
        window.open(link, '_blank', 'noopener')
    }

  return (
    <div className={styles.projetoContainer}>
      <section className={styles.card} onClick={handleClick}>
        <img src={props.image} alt="Project Image"/>
        <div className={styles.cardContent}>
          <p className={styles.cardTitle}>{props.nomeProjeto}</p>
          <ul className={styles.cardDescription}>
              {renderDesc}
          </ul>
        </div>
      </section>
      <p className={styles.cardTitle}>{props.nomeProjeto}</p>
    </div>
  );
}

Projeto.propTypes = {
    tecnologias: PropTypes.array,
    nomeProjeto: PropTypes.string,
    image: PropTypes.string,
    link: PropTypes.string
}

Projeto.defaultProps = {
    nomeProjeto: 'Projeto',
}

export default Projeto;
