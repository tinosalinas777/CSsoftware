// Datos centrales del sitio. Si en algún momento cambiás el número,
// el email o el nombre, editá solo acá y se actualiza en todo el sitio.
export const siteConfig = {
  brand: 'CS Software',
  whatsappNumber: '5491127227613', // formato internacional sin '+' ni espacios
  whatsappDisplay: '+54 9 11 2722-7613',
  email: 'salinascristianc137@gmail.com',
  whatsappMessage: 'Hola! Vi tu página y quiero contarte sobre mi proyecto.',
}

export const whatsappLink = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`
export const emailLink = `mailto:${siteConfig.email}`
