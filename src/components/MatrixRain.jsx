import { useEffect, useRef } from 'react'

// Caracteres usados en la lluvia: mezcla de binario, hex y símbolos técnicos.
// Se mantiene deliberadamente austera (sin katakana ni glifos decorativos)
// para que acompañe sin volverse un efecto de pantalla completa.
const CHARS = '01{}[]<>/=+-#*ANDROIDWEBCS'.split('')

export default function MatrixRain() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let width, height, columns, drops
    const fontSize = 15

    function setup() {
      width = canvas.offsetWidth
      height = canvas.offsetHeight
      canvas.width = width
      canvas.height = height
      columns = Math.floor(width / fontSize)
      drops = new Array(columns).fill(0).map(() => Math.random() * -40)
    }

    setup()

    if (reduced) {
      // Estado estático y muy tenue: un puñado de caracteres fijos, sin animación.
      ctx.font = `${fontSize}px ${'IBM Plex Mono, monospace'}`
      ctx.fillStyle = 'rgba(57, 255, 106, 0.25)'
      for (let i = 0; i < columns; i += 3) {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)]
        ctx.fillText(char, i * fontSize, (Math.random() * height))
      }
      return
    }

    let frame
    function draw() {
      ctx.fillStyle = 'rgba(6, 10, 7, 0.18)'
      ctx.fillRect(0, 0, width, height)
      ctx.font = `${fontSize}px 'IBM Plex Mono', monospace`

      for (let i = 0; i < drops.length; i++) {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)]
        const x = i * fontSize
        const y = drops[i] * fontSize

        ctx.fillStyle = 'rgba(57, 255, 106, 0.55)'
        ctx.fillText(char, x, y)

        if (y > height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i] += 0.35
      }
      frame = requestAnimationFrame(draw)
    }
    frame = requestAnimationFrame(draw)

    function handleResize() { setup() }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="hero-rain" aria-hidden="true" />
}
