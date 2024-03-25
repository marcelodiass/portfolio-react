import Projeto from "../Projeto/Projeto";
import SectionTitle from "../SectionTitle/SectionTitle";
import styles from "./Trabalho.module.css";
import { ApiVideos, ExpensesTracker, ToDoList } from "./TrabalhoProjetos";

function Trabalho() {
  
    

  return (
    <div id="trabalho">
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
          tecnologias={ExpensesTracker.tecnologias}
          nomeProjeto={ExpensesTracker.nomeProjeto}
          link={ExpensesTracker.link}
          image={ExpensesTracker.image}
        />
        <Projeto
          tecnologias={ToDoList.tecnologias}
          nomeProjeto={ToDoList.nomeProjeto}
          link={ToDoList.link}
          image={ToDoList.image}
        />
        <Projeto
          tecnologias={ApiVideos.tecnologias}
          nomeProjeto={ApiVideos.nomeProjeto}
          link={ApiVideos.link}
          image={ApiVideos.image}
        />
      </div>
    </div>
  );
}

export default Trabalho;
