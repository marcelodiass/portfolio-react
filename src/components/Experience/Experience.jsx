import PropTypes from "prop-types";
import styles from "./Experience.module.css";

function Experience(props) {
  const listItems = props.tecnologias.map((item) => {
    return <li key={item.id}>{item}</li>;
  });

  return (
    <div className={styles.flipCard}>
      <div className={styles.flipCardInner}>
        <div className={styles.flipCardFront}>
          <p className={styles.title}>{props.nome}</p>
          <p>{props.tempo}</p>
        </div>
        <div className={styles.flipCardBack}>
          <p className={styles.title}>Tecnologias</p>
          <ul>{listItems}</ul>
        </div>
      </div>
    </div>
  );
}

Experience.propTypes = {
  nome: PropTypes.string,
  tempo: PropTypes.string,
  tecnologias: PropTypes.array,
};

Experience.defaultProps = {
  nome: "Categoria",
  tempo: "",
  tecnologias: []
}

export default Experience;
