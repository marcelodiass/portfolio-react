import { FaGithub } from "react-icons/fa";
import styles from './NavBar.module.css'

function NavBar() {
  return (
    <>
        <nav className={styles.nav}>
            <h3 className={styles.navNome}>
                <span>Marcelo</span>Dias
            </h3>
            <ul className={styles.optNav}>
                <li>Home</li>
                <li>Sobre</li>
                <li>Trabalho</li>
            </ul>
            <FaGithub className={styles.iconGithub}/>
        </nav>
    </>
  );
}

export default NavBar