import Image from 'next/image'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

export default function EducationPage() {
  return (
    <div className="relative w-full min-h-screen flex flex-col overflow-y-auto hide-scrollbar">
      <NavBar activePage="education" />
      <div className="relative flex-1 flex items-center justify-center px-4 md:px-10 lg:px-16 py-16">
        <div className="absolute inset-0 z-0">
          <Image src="/images/miriam/background.png" alt="Background" fill className="object-cover" priority />
        </div>
        <div className="relative z-10 w-full max-w-6xl mt-24 md:mt-32">
          <div className="relative w-full">
            <Image
              src="/images/miriam/education/timeline.png"
              alt="Línea de tiempo educativa"
              width={1600}
              height={420}
              className="w-full h-auto"
              priority
            />
            <div className="absolute inset-0 pointer-events-none text-white text-xl md:text-3xl font-bold tracking-wide -mt-12" style={{ fontFamily: "'Inria Serif', serif" }}>
              <span className="absolute -ml-[2%]">2023</span>
              <span className="absolute ml-[23%]">2024</span>
              <span className="absolute ml-[56%]">2025</span>
              <span className="absolute ml-[64%]">2026</span>
              <span className="absolute ml-[90%]">Actualidad</span>
            </div>
          </div>

          <div className="relative mt-[-60px] md:mt-[-80px] px-6 md:px-16 pt-20 pb-12 text-white" style={{ fontFamily: "'Inria Serif', serif" }}>
            <div className="flex">
              <div className="flex flex-col items-center text-center ml-2 -mt-8">
                <Image src="/images/miriam/education/books.png" alt="Libros" width={150} height={150} className="object-contain -mt-28 mb-4 drop-shadow-xl" />
                <p className="text-2xl font-bold tracking-wide -mt-4">UNIVERSITY OF<br/>CAMBRIDGE</p>
                <p className="text-base md:text-xl mt-3 leading-tight">First and Advanced<br/>Certificate</p>
                <Image src="/images/miriam/education/cambridge.png" alt="Escudo Universidad de Cambridge" width={180} height={180} className="object-contain mt-6" />
              </div>

              <div className="flex flex-col items-center text-center ml-20 -mt-3">
                <Image src="/images/miriam/education/hat.png" alt="Birrete" width={180} height={180} className="object-contain -mt-28 mb-4 drop-shadow-xl" />
                <p className="text-2xl font-bold tracking-wide -mt-16">SECUNDARIA ORT ARGENTINA</p>
                <p className="text-base md:text-xl mt-3 leading-tight">Bachiller en Tecnología<br/>de la Información y las<br/>Comunicaciones</p>
                <Image src="/images/miriam/education/ort.png" alt="Logo ORT" width={170} height={90} className="object-contain mt-6" />
              </div>

              <div className="flex flex-col items-center text-center ml-24">
                <Image src="/images/miriam/education/parthenon.png" alt="Parthenon" width={200} height={140} className="object-contain -mt-28 mb-4 drop-shadow-xl" />
                <p className="text-2xl font-bold tracking-wide">UNIVERSIDAD DE BUENOS<br/>AIRES</p>
                <p className="text-base md:text-xl mt-3 leading-tight">Facultad de Derecho</p>
                <Image src="/images/miriam/education/uba.png" alt="Logo Facultad de Derecho UBA" width={150} height={150} className="object-contain mt-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
