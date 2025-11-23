import './Portada.css'
import CVIcon from '../../components/CVIcon'

function Portada() {
  const scrollToQuienSoy = () => {
    const target = document.getElementById('quien-soy')
    if (!target) return

    const targetPosition = target.offsetTop
    const start = window.scrollY
    const distance = targetPosition - start
    const duration = 1000
    const startTime = performance.now()

    const easeInOutCubic = (t) => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
    }

    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easeProgress = easeInOutCubic(progress)

      window.scrollTo(0, start + distance * easeProgress)

      if (progress < 1) {
        requestAnimationFrame(animateScroll)
      }
    }

    requestAnimationFrame(animateScroll)
  }

  return (
    <header className="portada">
      <div className="logo">
        <img src="/logo.png"/>
      </div>
      <h1 className="nombre">Matías Grynfeld</h1>
      <p className="lema">Observar, Analizar, e Innovar</p>
      <div className="iconos">
        <a href="#" className="icono">
          <img src="/icons/githubIcon.png"/>
        </a>
        <a href="#" className="icono">
          <img src="/icons/linkedinIcon.png"/>
        </a>
        <CVIcon size={80} />
      </div>
      <button className="boton-empezar" onClick={scrollToQuienSoy}>Empezar</button>
    </header>
  )
}

export default Portada
