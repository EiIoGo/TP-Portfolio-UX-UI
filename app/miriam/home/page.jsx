import Image from 'next/image'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

export default function MiriamHomePage() {
  return (
    <div className="relative w-full h-screen overflow-y-auto hide-scrollbar">
      <NavBar activePage={"home"}/>
      <div className="fixed inset-0 z-0">
        <Image src="/images/miriam/background.png" alt="Background" fill className="object-cover" priority />
      </div>
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-end px-8 pb-0">
        <h1 className="text-6xl font-inria-serif font-bold text-white tracking-wider mb-2 text-center transform -translate-y-32">MIRIAM IAEL SCHULKLAPPER</h1>
        <p className="text-xl font-inria-serif text-yellow-600 mb-8 text-center transform -translate-y-32">ESTUDIANTE DE ABOGACIA (UBA)</p>
        <div className="relative w-full flex items-end justify-center mb-0 transform -translate-y-20">
          <div className="hidden md:block absolute bottom-0 left-0 w-44 h-44">
            <Image src="/images/miriam/book.png" alt="Book" fill className="object-contain object-bottom" />
          </div>
          <div className="relative w-64 h-80 flex-shrink-0 mb-0">
            <Image src="/images/miriam/photo.png" alt="Miriam Iael Schulklapper" fill className="object-contain object-bottom" priority />
          </div>
          <div className="hidden md:block absolute bottom-0 right-0 w-44 h-44">
            <Image src="/images/miriam/statue.png" alt="Statue" fill className="object-contain object-bottom" />
          </div>
        </div>
      </div>
      <div className="relative z-20 -mt-16">
        <Footer/>
      </div>
    </div>
  )
}
