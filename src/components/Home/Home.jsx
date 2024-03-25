import styles from './Home.module.css'

function Home() {

    const profilePicUrl = 'src/assets/ProfilePic.webp'

  return (
    <div className={styles.home} id='home'>
        <div className={styles.saudacoes}>
            <h3>Olá! Me chamo Marcelo,</h3>
            <h1>Desenvolvedor <br/>Full Stack</h1>
            <h3 className={styles.contato}>Me Contate</h3>
        </div>
        <img className={styles.imagemHome} src={profilePicUrl}/>
    </div>
  )
}

export default Home