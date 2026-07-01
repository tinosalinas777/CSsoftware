import { whatsappLink, emailLink, siteConfig } from '../siteConfig.js'

export default function Contact() {
  return (
    <section id="contacto" className="contact-section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Contacto</span>
          <h2>¿Tenés un proyecto en mente? Hablemos.</h2>
          <p>
            Contame de qué se trata tu idea y en cuánto tiempo la necesitás. Te respondo
            personalmente para armar juntos el mejor camino.
          </p>
        </div>

        <div className="contact-grid">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="contact-card">
            <span className="tag">WhatsApp</span>
            <span className="value">{siteConfig.whatsappDisplay}</span>
            <span className="btn btn-outline-light" style={{ width: 'fit-content' }}>
              Escribir ahora
            </span>
          </a>

          <a href={emailLink} className="contact-card">
            <span className="tag">Email</span>
            <span className="value" style={{ fontSize: 18, wordBreak: 'break-all' }}>
              {siteConfig.email}
            </span>
            <span className="btn btn-outline-light" style={{ width: 'fit-content' }}>
              Enviar email
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
