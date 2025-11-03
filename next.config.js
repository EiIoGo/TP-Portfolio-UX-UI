/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Para exportar como sitio estático si lo necesitas
  images: {
    unoptimized: true, // Necesario si usas output: 'export'
  },
}

module.exports = nextConfig
