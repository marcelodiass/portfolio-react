import { FaGithub } from "react-icons/fa";
import styles from "./NavBar.module.css";

function NavBar() {
  const handleClickGit = () => window.open(
    "https://github.com/marcelodiass",
    "_blank",
    "noopener"
  )

  const handleSection = (name) => {
    const section = document.getElementById(name);
    section.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <nav className={styles.nav}>
        <h3 className={styles.navNome}>
          <span>Marcelo</span>Dias
        </h3>
        <ul className={styles.optNav}>
          <li onClick={() => handleSection("home")}>Home</li>
          <li onClick={() => handleSection("sobre")}>Sobre</li>
          <li onClick={() => handleSection("trabalho")}>Trabalho</li>
        </ul>
        <FaGithub
          className={styles.iconGithub}
          onClick={handleClickGit}
        />
      </nav>
    </>
  );
}

export default NavBar;
