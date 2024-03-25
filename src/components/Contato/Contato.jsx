import ContatoForm from "../ContatoForm/ContatoForm.jsx";
import SectionTitle from "../SectionTitle/SectionTitle";
import styles from "./Contato.module.css";

function Contato() {

  return (
    <div id="contato" className={styles.contatoContainer}>
      <SectionTitle titulo="me contate" />


      <p className={styles.contatoTexto}>
        Gostaria muito de saber suas <b>ideias</b> e <b>projetos</b> e como
        posso ajudar neles, por favor, me envie uma mensagem abaixo!
      </p>
      
      <ContatoForm/>
      <p className={styles.contatoTexto}>
        Ou se preferir, me mande um email: <br/>
        <b>
          marcelodias.desenvolvedor@gmail
        </b>
      </p>
    </div>
  );
}

export default Contato;
