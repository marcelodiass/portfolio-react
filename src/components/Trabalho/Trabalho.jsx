import Projeto from "../Projeto/Projeto";
import SectionTitle from "../SectionTitle/SectionTitle";
import styles from "./Trabalho.module.css";

function Trabalho() {
  const projetoExpensesTracker = {
    nomeProjeto: "Expenses Tracker",
    tecnologias: ["MERN", "react", "seila"],
    image: '',
    link: 'https://github.com/marcelodiass/expenses-tracker'
  };

  return (
    <>
      <SectionTitle titulo="trabalho" />
      <div className={styles.trabalho}>
        <p className={styles.trabalhoTexto}>
          Como dito antes, eu trabalho principalmente com a stack <b>MERN</b>,
          porém abaixo estão todos projetos em que trabalhei (não somente da
          stack <b>MERN</b>) e também todas as tecnologias utilizadas.
        </p>
      </div>

      <div className={styles.projetos}>
        <Projeto
          tecnologias={projetoExpensesTracker.tecnologias}
          nomeProjeto={projetoExpensesTracker.nomeProjeto}
          link={projetoExpensesTracker.link}
        />
      </div>
    </>
  );
}

export default Trabalho;
