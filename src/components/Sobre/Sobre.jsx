import Experience from "../Experience/Experience.jsx";
import SectionTitle from "../SectionTitle/SectionTitle.jsx";
import styles from "./Sobre.module.css";

function Sobre() {
  const frontend = ["React", "Next.js", "Tailwindcss", "HTML & CSS & JS"];
  const backend = ["Node.js", "Express.js", "Python", "Flask", "Java"];
  const bd = ["MySQL", "SQL Oracle", "MongoDB", "PostgreSQL"];
  const devops = ["Git & Github", "Azure", "Docker"];
  const informatica = ["Pacote Office", "Windows", "Linux"];
  const ias = ["LLMs (ChatGPT, etc)", "Machine Learning"];

  return (
    <>
      <SectionTitle titulo="sobre" />

      <div className={styles.sobre}>
        <p className={styles.sobreTexto}>
          Olá, me chamo Marcelo, tenho 19 anos, moro em São Paulo e sou um{" "}
          <b>Desenvolvedor Full Stack</b>, faço{" "}
          <b>Análise e Desenvolvimento de Sistemas</b> na FIAP, e atualmente
          estou no 3º semestre. Estudo programação há 2 anos, e estou procurando
          a minha primeira oportunidade na área. Desenvolvo na stack <b>MERN</b>{" "}
          (MongoDB, Express, React, Node.js) principalmente, porém sempre estou
          aberto a aprender novas tecnologias e stacks, também possuo
          conhecimento e experiência com Java, Python e Inteligência Artificial.
        </p>
      </div>

      <div className={styles.experiencias}>
        <Experience
          nome="Front End"
          tempo="2 Anos de Experiência"
          tecnologias={frontend}
        />
        <Experience
          nome="Back End"
          tempo="1 Ano de Experiência"
          tecnologias={backend}
        />
        <Experience
          nome="Banco de Dados"
          tempo="1 Ano de Experiência"
          tecnologias={bd}
        />
        <Experience
          nome="Cloud & DevOps"
          tempo="2 Anos de Experiência"
          tecnologias={devops}
        />
        <Experience
          nome="Inteligência Artificial"
          tempo="1 Ano de Experiência"
          tecnologias={ias}
        />
        <Experience
          nome="Informática e Sistemas"
          tempo="11 Anos de Experiência"
          tecnologias={informatica}
        />

      </div>
    </>
  );
}

export default Sobre;
