const SKILLS = [
  'Kotlin', 'Java', 'C#', 'React', 'Node.js', 'SQL', 'Firebase', 'Electron',
]

export default function About() {
  return (
    <section id="sobre-mi">
      <div className="container">
        <div className="about-avatar">
          <span className="initials">CS</span>
        </div>

        <div className="about-copy">
          <span className="eyebrow">Sobre mí</span>
          <h2 style={{ marginTop: 14, fontSize: 'clamp(26px, 3.4vw, 34px)' }}>
            Cristian Salinas, desarrollador freelance
          </h2>
          <p style={{ marginTop: 22 }}>
            Trabajo de forma independiente desarrollando software a medida para pequeñas
            y medianas empresas y emprendedores. Al no depender de una agencia grande,
            podés hablar directamente conmigo en cada etapa del proyecto: sin
            intermediarios, sin vueltas.
          </p>
          <p>
            Me especializo en llevar una misma idea a distintas plataformas —una app
            Android, un sistema de escritorio, un sitio web— eligiendo en cada caso la
            tecnología que mejor resuelve el problema, no la que más me convenga vender.
          </p>
          <p>
            Si tu proyecto necesita algo puntual o un sistema completo, podemos charlarlo
            sin compromiso.
          </p>

          <div className="about-skills">
            {SKILLS.map((skill) => (
              <span className="chip" key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
