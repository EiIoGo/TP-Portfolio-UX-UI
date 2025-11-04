import Image from 'next/image'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

export default function EducationPage() {
  return (
    <div className="relative w-full min-h-screen flex flex-col overflow-y-auto hide-scrollbar">
      <NavBar activePage="education" />
      <div className="relative flex-1 flex items-center justify-center px-8 py-16">
        <div className="absolute inset-0 z-0">
          <Image src="/images/miriam/background.png" alt="Background" fill className="object-cover" priority />
        </div>
        <div className="relative z-10 w-full max-w-6xl mt-40">
          <div className="relative mb-8">
            <div className="absolute -top-44 left-32 z-20">
              <Image src="/images/miriam/education/hat.png" alt="Graduation Hat" width={300} height={300} className="object-contain" />
            </div>
            <div className="absolute -top-28 right-32 z-20">
              <Image src="/images/miriam/education/parthenon.png" alt="Parthenon" width={280} height={140} className="object-contain" />
            </div>
            <div className="flex items-center justify-between gap-8 mt-8">
              <div className="flex-1 relative">
                <Image src="/images/miriam/education/line.png" alt="Timeline" width={600} height={50} className="w-full h-auto" />
                <span className="absolute top-1/2 -translate-y-10 -mt-5 text-white font-inria-serif text-2xl md:text-4xl" style={{ left: '-0.8ch' }}>2021</span>
              </div>
              <div className="flex-1 relative">
                <Image src="/images/miriam/education/line.png" alt="Timeline" width={600} height={50} className="w-full h-auto" />
                <span className="absolute top-1/2 -translate-y-10 -mt-5 text-white font-inria-serif text-xl md:text-3xl" style={{ left: '-5.5ch' }}>2025</span>
                <span className="absolute top-1/2 -translate-y-10 -mt-5 text-white font-inria-serif text-xl md:text-3xl" style={{ left: '-0.5ch' }}>2026</span>
                <span className="absolute top-1/2 -translate-y-10 -mt-5 text-white font-inria-serif text-2xl md:text-4xl" style={{ right: '-4.2ch' }}>Actualidad</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-2">
            <div className="text-center">
              <h2 className="text-white font-inria-serif text-4xl mb-4">SECUNDARIA ORT ARGENTINA</h2>
              <p className="text-white font-inria-serif text-xl md:text-3xl mb-6">Bachiller en Tecnología<br/>de la Información y las<br/>Comunicaciones</p>
              <div className="flex justify-center mt-8">
                <Image src="/images/miriam/education/ort.png" alt="ORT Argentina Logo" width={320} height={140} className="object-contain" />
              </div>
            </div>
            <div className="text-center">
              <h2 className="text-white font-inria-serif text-4xl mb-4">UNIVERSIDAD DE BUENOS AIRES</h2>
              <p className="text-white font-inria-serif text-3xl mb-4">Facultad de Derecho</p>
              <div className="flex justify-center mt-8">
                <Image src="/images/miriam/education/uba.png" alt="UBA Derecho Logo" width={240} height={240} className="object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
