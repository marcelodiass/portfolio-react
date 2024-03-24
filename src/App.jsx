import './App.css'
import SectionTitle from './components/SectionTitle/SectionTitle.jsx'
import Home from './components/Home/Home.jsx'
import NavBar from './components/NavBar/NavBar.jsx'

function App() {

  return (
    <>
      <NavBar/>
      <Home/>
      <SectionTitle titulo='sobre'/>
    </>
  )
}

export default App
