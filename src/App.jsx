import './css/general.css'
import Portada from './secciones/Portada/Portada'
import Principal from './secciones/Principal/Principal'
import Contacto from './secciones/Contacto/Contacto'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <>
      <Portada />
      <Principal />
      <Contacto />
      <ScrollToTop />
    </>
  )
}

export default App
