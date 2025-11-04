export default function EialLayout({ children }) {
  return (
    <div style={{ backgroundColor: '#184349', minHeight: '100vh' }} className="overflow-y-auto hide-scrollbar">
      <div className="min-h-screen flex items-center justify-center p-6">
        {children}
      </div>
    </div>
  )
}