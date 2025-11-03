import Image from 'next/image'

export default function AboutMiriamPage() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden flex flex-col">
      <nav className="relative z-20 w-full bg-[#B8955C] py-6 px-8">
        <ul className="flex justify-center items-center gap-16 text-white font-inria-serif">
          <li>
            <a href="/miriam" className="text-xl">
              Inicio
            </a>
          </li>
          <li>
            <a href="/miriam/about" className="text-xl text-black">
              Acerca de
            </a>
          </li>
          <li>
            <a href="/miriam/education" className="text-xl">
              Educacion
            </a>
          </li>
          <li>
            <a href="/miriam/skills" className="text-xl">
              Habilidades
            </a>
          </li>
          <li>
            <a href="/miriam/experience" className="text-xl">
              Experiencia
            </a>
          </li>
        </ul>
      </nav>

      <div className="relative flex-1 flex items-center justify-center px-8 py-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/miriam/background.png"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="hidden lg:block absolute left-0 bottom-0 w-40 h-auto">
          <Image
            src="/images/miriam/about/pillar.png"
            alt="Pillar"
            width={160}
            height={600}
            className="object-contain object-bottom"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="text-white font-inria-serif space-y-6">
            <p className="text-xl leading-relaxed">
              Soy estudiante de último año de secundaria y aspirante a especializarme en Derecho Internacional. Me considero una persona responsable, creativa y con sólidas habilidades de liderazgo y oratoria. Disfruto trabajar en equipo y generar buenos vínculos interpersonales, ya que creo que la colaboración es clave para lograr cualquier objetivo.
            </p>
            
            <p className="text-xl leading-relaxed pt-4">
              Tengo un gran interés por las relaciones internacionales, la justicia global y la resolución pacífica de conflictos. Busco seguir formándome en esta área y aportar mi visión crítica, mi compromiso y mi entusiasmo por aprender al mundo del derecho y las relaciones entre naciones.
            </p>
          </div>

          <div className="mt-12">
            <button className="bg-[#B8955C] text-black font-inria-serif text-xl px-8 py-3 border-2 border-white">
              Conoce mas de mi
            </button>
          </div>
        </div>

        <div className="hidden lg:block absolute right-0 bottom-0 w-40 h-auto">
          <Image
            src="/images/miriam/about/pillar.png"
            alt="Pillar"
            width={160}
            height={600}
            className="object-contain object-bottom"
          />
        </div>
      </div>
    </div>
  )
}
