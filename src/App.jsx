import styles from './App.module.css'
import Contato from './components/Contato/Contato.jsx'
import Home from './components/Home/Home.jsx'
import NavBar from './components/NavBar/NavBar.jsx'
import Sobre from './components/Sobre/Sobre.jsx'
import Trabalho from './components/Trabalho/Trabalho.jsx'

function App() {

  return (
    <>
      <NavBar/>
      <Home/>
      <Sobre/>
      <Trabalho/>
      <Contato/>
      <p className={styles.copyright}>© Copyright 2024</p>
    </>
  )
}

export default App
