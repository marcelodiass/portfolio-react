import { useState } from "react";
import styles from "../Contato/Contato.module.css";
import emailjs from "@emailjs/browser";

const ContatoForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);


  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
        serviceId,
        templateId,
        e.target,
        publicKey
      )
      .then(
        () => {
          setStateMessage("Mensagem Enviada!");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000);
        },
        () => {
          setStateMessage("Erro ao enviar a mensagem, tente novamente!");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        }
      );

    // Clears the form after sending the email
    e.target.reset();
  };
  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={sendEmail}>
        <div className={styles.formGroup}>
          <label htmlFor="nome">Nome / Empresa</label>
          <input
            required=""
            name="user_name"
            id="nome"
            type="text"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            required=""
            name="user_email"
            id="email"
            type="text"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="textarea">Como posso ajudar?</label>
          <textarea
            required=""
            cols="50"
            rows="10"
            id="textarea"
            name="message"
          ></textarea>
        </div>
        <input type="submit" className={styles.formSubmitButton} disabled={isSubmitting} value="Enviar"/>
        {stateMessage && <p className={styles.stateMessage}>{stateMessage}</p>}
      </form>
    </div>
  );
};
export default ContatoForm;