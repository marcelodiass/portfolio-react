import SectionTitle from "../SectionTitle/SectionTitle"
import styles from './Contato.module.css'


function Contato() {
  return (
    <div id="contato" className={styles.contatoContainer}>
        <SectionTitle titulo="me contate"/>
        <div className={styles.formContainer}>
            <form className={styles.form}>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Company Email</label>
                    <input required="" name="email" id="email" type="text"/>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="textarea">How Can We Help You?</label>
                    <textarea required="" cols="50" rows="10" id="textarea" name="textarea"></textarea>
                </div>
                <button type="submit" className={styles.formSubmitButton}>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contato