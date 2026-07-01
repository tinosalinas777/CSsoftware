import { useEffect, useRef, useState } from 'react'

const ICONS = {
  android: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="platform-icon">
      <path d="M6 9v6M18 9v6M8 8h8v9a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V8Z" />
      <path d="M9 8c0-2 1.5-4 3-4s3 2 3 4" />
      <path d="M10 4.5 9 3M14 4.5l1-1.5" />
      <path d="M10.5 20v1.5M13.5 20v1.5" />
    </svg>
  ),
  desktop: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="platform-icon">
      <rect x="3" y="4" width="18" height="12" rx="1.5" />
      <path d="M9 20h6M12 16v4" />
    </svg>
  ),
  web: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="platform-icon">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 3.8 6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-6-3.8-9s1.3-6.4 3.8-9Z" />
    </svg>
  ),
}

const SERVICES = [
  {
    key: 'android',
    tag: 'Plataforma / Android',
    title: 'Apps Android',
    desc: 'Aplicaciones móviles nativas o híbridas, desde el prototipo hasta la publicación en Google Play.',
    stack: ['Kotlin', 'Java', 'Jetpack Compose', 'Firebase'],
    ideal: 'Negocios que necesitan una app propia para sus clientes o su equipo.',
  },
  {
    key: 'desktop',
    tag: 'Plataforma / Escritorio',
    title: 'Apps de escritorio',
    desc: 'Software de gestión y herramientas internas para Windows, pensadas para el día a día de tu operación.',
    stack: ['Java', 'C#', 'Electron', 'SQL Server'],
    ideal: 'Empresas que necesitan un sistema propio de gestión, stock o facturación.',
  },
  {
    key: 'web',
    tag: 'Plataforma / Web',
    title: 'Sitios y sistemas web',
    desc: 'Desde landing pages hasta paneles y sistemas a medida, rápidos, responsivos y fáciles de mantener.',
    stack: ['React', 'Node.js', 'Next.js', 'PostgreSQL'],
    ideal: 'Emprendimientos y empresas que quieren presencia online o un sistema propio.',
  },
]

export default function Services() {
  const [visible, setVisible] = useState(() => SERVICES.map(() => false))
  const cardRefs = useRef([])

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      setVisible(SERVICES.map(() => true))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index)
            setVisible((prev) => {
              if (prev[index]) return prev
              const next = [...prev]
              next[index] = true
              return next
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )

    cardRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="servicios">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Servicios</span>
          <h2>Un mismo proyecto, para cada plataforma que tu negocio necesita</h2>
          <p>
            Trabajo de punta a punta en cada plataforma: relevamiento, diseño, desarrollo,
            pruebas y entrega. Elegí una o combiná varias según lo que necesite tu proyecto.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <article
              className={`spec-card${visible[i] ? ' is-visible' : ''}`}
              key={s.key}
              data-index={i}
              ref={(el) => (cardRefs.current[i] = el)}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {ICONS[s.key]}
              <span className="spec-tag">{s.tag}</span>
              <h3>{s.title}</h3>
              <p className="desc">{s.desc}</p>
              <div className="stack-chips">
                {s.stack.map((item) => (
                  <span className="chip" key={item}>{item}</span>
                ))}
              </div>
              <p className="ideal"><strong>Ideal para:</strong> {s.ideal}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
