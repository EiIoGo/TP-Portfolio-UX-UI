import './globals.css'

export const metadata = {
  title: 'Portfolio',
  description: 'Portfolio personal',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Fascinate+Inline&family=Farro:wght@300;400;500;700&family=Fredoka:wght@300;400;500;600;700&family=Inria+Serif:wght@300;400;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
