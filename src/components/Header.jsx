import { useState } from 'react'
import { whatsappLink, siteConfig } from '../siteConfig.js'

const links = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#proceso', label: 'Proceso' },
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#portfolio', label: 'Portfolio' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className={`site-header${open ? ' menu-open' : ''}`}>
      <div className="container">
        <a href="#top" className="logo" onClick={() => setOpen(false)}>
          <span className="logo-mark">CS_</span>
          {siteConfig.brand}
        </a>

        <nav className="nav-links">
          {links.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </nav>

        <div className="header-actions">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Escribime
          </a>
          <button
            className="nav-toggle"
            aria-label="Abrir menú"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
