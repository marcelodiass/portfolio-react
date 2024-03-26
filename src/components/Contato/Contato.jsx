import ContatoForm from "../ContatoForm/ContatoForm.jsx";
import SectionTitle from "../SectionTitle/SectionTitle";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import styles from "./Contato.module.css";

function Contato() {
  
  return (
    <div id="contato" className={styles.contatoContainer}>
      <SectionTitle titulo="me contate" />

      <p className={styles.contatoTexto}>
        Gostaria muito de saber suas <b>ideias</b> e <b>projetos</b> e como
        posso ajudar neles, por favor, me envie uma mensagem abaixo!
      </p>

      <ContatoForm />
      <p className={styles.contatoTexto}>
        Ou se preferir: <br />
        <b>marcelodias.desenvolvedor@gmail</b> <br />
        <div className={styles.icons}>
          <FaLinkedin
            className={styles.iconContato}
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/marcelohespanholdias/",
                "_blank",
                "noopener"
              )
            }
          />
          <FaGithub
            className={styles.iconContato}
            onClick={() =>
              window.open(
                "https://github.com/marcelodiass",
                "_blank",
                "noopener"
              )
            }
          />
        </div>
      </p>
    </div>
  );
}

export default Contato;
