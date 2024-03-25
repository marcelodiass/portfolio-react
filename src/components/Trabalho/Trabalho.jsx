import Projeto from "../Projeto/Projeto";
import SectionTitle from "../SectionTitle/SectionTitle";
import styles from "./Trabalho.module.css";
import { Projetos } from "./TrabalhoProjetos";

function Trabalho() {
  const renderProjetos = Projetos.map((projeto) => (
    <Projeto key={projeto.id} {...projeto} />
  ));

  return (
    <div id="trabalho">
      <SectionTitle titulo="trabalho" />
      <div className={styles.trabalho}>
        <p className={styles.trabalhoTexto}>
          Como dito antes, eu trabalho principalmente com a stack <b>MERN</b>,
          porém abaixo estão todos projetos em que trabalhei (não somente da
          stack <b>MERN</b>) e também todas as tecnologias utilizadas.{" "}
          <i><b>PS: Passe o mouse por cima para saber mais.</b></i>
        </p>
      </div>
      <div className={styles.projetos}>
        {renderProjetos}
      </div>
    </div>
  );
}

export default Trabalho;
