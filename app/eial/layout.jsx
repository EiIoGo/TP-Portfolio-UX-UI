export default function EialLayout({ children }) {
  return (
    <div className="relative min-h-screen">
      <div
        className="fixed inset-0 -z-10"
        aria-hidden="true"
        style={{ backgroundColor: '#184349' }}
      />
      <div className="min-h-screen flex items-center justify-center p-6">
        {children}
      </div>
    </div>
  )
}