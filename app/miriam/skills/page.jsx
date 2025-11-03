import Image from 'next/image'

export default function SkillsPage() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden flex flex-col">
      {}
      <nav className="relative z-20 w-full bg-[#B8955C] py-6 px-8">
        <ul className="flex justify-center items-center gap-8 md:gap-16 text-white font-inria-serif">
          <li>
            <a href="/miriam" className="text-xl">
              Inicio
            </a>
          </li>
          <li>
            <a href="/miriam/about" className="text-xl">
              Acerca de
            </a>
          </li>
          <li>
            <a href="/miriam/education" className="text-xl">
              Educacion
            </a>
          </li>
          <li>
            <a href="/miriam/skills" className="text-xl text-black">
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

      {}
      <div className="relative flex-1 flex items-center justify-center px-8 py-16">
        {}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/miriam/background.png"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {}
        <div className="relative z-10 w-full max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {}
            <div className="flex flex-col items-center text-center mt-6">
              <div className="mb-6">
                <Image
                  src="/images/miriam/skills/speaker.png"
                  alt="Oratoria"
                  width={180}
                  height={180}
                  className="object-contain"
                />
              </div>
              <h3 className="text-white font-inria-serif text-3xl">
                ORATORIA
              </h3>
            </div>

            {}
            <div className="flex flex-col items-center text-center">
              <div className="mb-6">
                <Image
                  src="/images/miriam/skills/lightbulb.png"
                  alt="Resolución de Problemas"
                  width={180}
                  height={180}
                  className="object-contain"
                />
              </div>
              <h3 className="text-white font-inria-serif text-3xl">
                RESOLUCIÓN<br />DE PROBLEMAS
              </h3>
            </div>

            {}
            <div className="flex flex-col items-center text-center mt-20">
              <div className="mb-6">
                <Image
                  src="/images/miriam/skills/checkmark.png"
                  alt="Organización"
                  width={150}
                  height={150}
                  className="object-contain"
                />
              </div>
              <h3 className="text-white font-inria-serif text-3xl">
                ORGANIZACIÓN
              </h3>
            </div>

            {}
            <div className="flex flex-col items-center text-center">
              <div className="mb-6">
                <Image
                  src="/images/miriam/skills/thinking.png"
                  alt="Pensamiento Crítico"
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>
              <h3 className="text-white font-inria-serif text-3xl">
                PENSAMIENTO<br />CRITICO
              </h3>
            </div>

            {}
            <div className="flex flex-col items-center text-center">
              <div className="mb-6">
                <Image
                  src="/images/miriam/skills/handshake.png"
                  alt="Negociación"
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>
              <h3 className="text-white font-inria-serif text-3xl">
                NEGOCIACIÓN
              </h3>
            </div>

            {}
            <div className="flex flex-col items-center text-center">
              <div className="mb-6">
                <Image
                  src="/images/miriam/skills/language.png"
                  alt="Facilidad con Idiomas"
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>
              <h3 className="text-white font-inria-serif text-3xl">
                FACILIDAD CON<br />IDIOMAS
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
