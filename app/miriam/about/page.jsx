import Image from 'next/image'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

export default function AboutMiriamPage() {
  return (
    <div className="relative w-full min-h-screen flex flex-col overflow-y-auto hide-scrollbar">
      <NavBar activePage="about" />
      <div className="relative flex-1 flex items-center justify-center px-8 py-16">
        <div className="absolute inset-0 z-0">
          <Image src="/images/miriam/background.png" alt="Background" fill className="object-cover" priority />
        </div>
        <div className="hidden lg:block absolute left-0 bottom-0 w-40 h-auto">
          <Image src="/images/miriam/about/pillar.png" alt="Pillar" width={160} height={600} className="object-contain object-bottom" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="text-white font-inria-serif space-y-6">
            <p className="text-xl leading-relaxed">
              Soy estudiante de último año de secundaria y aspirante a<br/>
              especializarme en Derecho Internacional. Me considero una<br/>
              persona responsable, creativa y con sólidas habilidades de<br/>
              liderazgo y oratoria. Disfruto trabajar en equipo y generar buenos<br/>
              vínculos interpersonales, ya que creo que la colaboración es clave<br/>
              para lograr cualquier objetivo.<br/>
              Tengo un gran interés por las relaciones internacionales, la<br/>
              justicia global y la resolución pacífica de conflictos. Busco seguir<br/>
              formándome en esta área y aportar mi visión crítica, mi<br/>
              compromiso y mi entusiasmo por aprender al mundo del derecho<br/>
              y las relaciones entre naciones.</p>
          </div>
          <div className="mt-12">
            <button className="bg-[#B8955C] text-black font-inria-serif text-xl px-8 py-3 border-2 border-white">Conoce mas de mi</button>
          </div>
        </div>
        <div className="hidden lg:block absolute right-0 bottom-0 w-40 h-auto">
          <Image src="/images/miriam/about/pillar.png" alt="Pillar" width={160} height={600} className="object-contain object-bottom" />
        </div>
      </div>
      <Footer />
    </div>
  )
}
