const STEPS = [
  {
    n: '01',
    title: 'Consulta inicial',
    text: 'Charlamos sobre tu idea o problema, sin costo. Definimos el alcance real del proyecto.',
  },
  {
    n: '02',
    title: 'Propuesta y presupuesto',
    text: 'Te paso una propuesta clara: qué se hace, en qué plataforma, tiempos y costo cerrado.',
  },
  {
    n: '03',
    title: 'Desarrollo iterativo',
    text: 'Trabajo en etapas y te muestro avances, para que puedas ajustar el rumbo a tiempo.',
  },
  {
    n: '04',
    title: 'Entrega y soporte',
    text: 'Publicación o entrega final, con acompañamiento posterior si aparece algún ajuste.',
  },
]

export default function Process() {
  return (
    <section id="proceso" className="process-section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Cómo trabajo</span>
          <h2>Un proceso simple, de la idea al software funcionando</h2>
        </div>

        <div className="process-list">
          {STEPS.map((step) => (
            <div className="process-item" key={step.n}>
              <span className="process-num">{step.n}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
