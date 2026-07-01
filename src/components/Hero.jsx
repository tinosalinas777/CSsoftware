import { useEffect, useRef, useState } from "react";
import { whatsappLink } from "../siteConfig.js";
import MatrixRain from "./MatrixRain.jsx";

const BUILD_STEPS = [
  { prompt: "$", txt: "cs-software build --target=android", ok: "✓ compilado" },
  { prompt: "$", txt: "cs-software build --target=desktop", ok: "✓ compilado" },
  { prompt: "$", txt: "cs-software build --target=web", ok: "✓ compilado" },
  { prompt: ">", txt: "listo para producción", ok: "" },
];

function BuildPanel() {
  const [visibleCount, setVisibleCount] = useState(0);
  const reducedMotion = useRef(
    typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    if (reducedMotion.current) {
      setVisibleCount(BUILD_STEPS.length);
      return;
    }
    if (visibleCount >= BUILD_STEPS.length) return;
    const t = setTimeout(
      () => setVisibleCount((v) => v + 1),
      visibleCount === 0 ? 400 : 550,
    );
    return () => clearTimeout(t);
  }, [visibleCount]);

  return (
    <div
      className="build-panel"
      role="img"
      aria-label="Panel de compilación mostrando la app lista para Android, escritorio y web"
    >
      <div className="build-panel-bar">
        <span />
        <span />
        <span />
        <span className="label"></span>
      </div>
      <div className="build-panel-body">
        {BUILD_STEPS.slice(0, visibleCount).map((step, i) => (
          <div className="build-line" key={i} style={{ animationDelay: "0s" }}>
            <span className="prompt">{step.prompt}</span>
            <span className="txt">{step.txt}</span>
            {step.ok && <span className="ok">{step.ok}</span>}
          </div>
        ))}
        {visibleCount >= BUILD_STEPS.length && (
          <span className="build-cursor" />
        )}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="hero">
      <img
        src="/fondo.png"
        alt=""
        className="hero-bg-image"
        aria-hidden="true"
      />
      <div className="hero-bg-overlay" aria-hidden="true" />
      <MatrixRain />
      <div className="container">
        <div className="hero-copy">
          <span className="eyebrow">Desarrollo freelance de software</span>
          <h1>
            Una idea, compilada para <span className="highlight">Android</span>,{" "}
            <span className="highlight">escritorio</span> y{" "}
            <span className="highlight">web</span>.
          </h1>
          <p className="lede">
            Soy Cristian Salinas, desarrollador freelance. Diseño, programo y
            entrego aplicaciones a medida sin intermediarios: un solo
            interlocutor, del primer boceto al deploy final.
          </p>
          <div className="hero-actions">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Hablemos por WhatsApp
            </a>
            <a href="#servicios" className="btn btn-outline">
              Ver servicios
            </a>
          </div>
          <div className="hero-meta">
            <div className="hero-meta-item">
              <strong>3</strong>
              plataformas: android, desktop y web
            </div>
            <div className="hero-meta-item">
              <strong>1:1</strong>
              trato directo con quien programa
            </div>
            <div className="hero-meta-item">
              <strong>100%</strong>a medida, sin plantillas genéricas
            </div>
          </div>
        </div>

        <BuildPanel />
      </div>
    </section>
  );
}
