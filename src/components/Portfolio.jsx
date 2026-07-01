import { whatsappLink } from '../siteConfig.js'

export default function Portfolio() {
  return (
    <section id="portfolio" className="process-section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Portfolio</span>
          <h2>Los primeros proyectos están en camino</h2>
        </div>

        <div className="portfolio-panel">
          <span className="stamp">En construcción</span>
          <h3>Todavía no publiqué casos, pero puedo mostrarte cómo trabajo</h3>
          <p>
            Estoy sumando mis primeros proyectos como CS Software a esta sección.
            Mientras tanto, escribime y te cuento en detalle ejemplos de trabajos
            similares al que estás pensando.
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Contame tu proyecto
          </a>
        </div>
      </div>
    </section>
  )
}
