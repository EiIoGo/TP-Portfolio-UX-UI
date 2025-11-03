'use client'

export default function HomePage() {
  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <button
        onClick={() => window.location.href = '/eial'}
        className="mr-4 px-4 py-2 bg-teal-600 text-white"
      >
        Eial
      </button>
      <button
        onClick={() => window.location.href = '/miriam'}
        className="px-4 py-2 bg-teal-600 text-white"
      >
        Miriam
      </button>
    </div>
  )
}
