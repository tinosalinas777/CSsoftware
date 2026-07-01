import { siteConfig } from '../siteConfig.js'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>© {new Date().getFullYear()} {siteConfig.brand} — Desarrollado por Cristian Salinas</p>
        <p>build --target=android,desktop,web</p>
      </div>
    </footer>
  )
}
