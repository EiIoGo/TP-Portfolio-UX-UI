import Footer from '../components/Footer'

export default function FooterPreviewPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 bg-gray-100 flex items-center justify-center">
        <p className="text-gray-600 text-xl">Vista previa del Footer</p>
      </div>
      <Footer />
    </div>
  )
}
