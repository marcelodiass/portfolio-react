import styles from './Home.module.css'

function Home() {

    const profilePicUrl = 'src/assets/ProfilePic.webp'

    const handleContact = () => {
      const section = document.getElementById('contato')
      section.scrollIntoView({ behavior: 'smooth'})
    }

  return (
    <div className={styles.home} id='home'>
        <div className={styles.saudacoes}>
            <h3>Olá! Me chamo Marcelo,</h3>
            <h1>Desenvolvedor <br/>Full Stack</h1>
            <h3 className={styles.contato} onClick={handleContact}>Me Contate</h3>
        </div>
        <img className={styles.imagemHome} src={profilePicUrl}/>
    </div>
  )
}

export default Home