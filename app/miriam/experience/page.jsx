import Image from 'next/image'

export default function ExperiencePage() {
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
            <a href="/miriam/skills" className="text-xl">
              Habilidades
            </a>
          </li>
          <li>
            <a href="/miriam/experience" className="text-xl text-black">
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
        <div className="relative z-10 w-full max-w-6xl mt-40">
          {}
          <div className="relative mb-8">
            {}
            <div className="absolute -top-36 left-44 z-20">
              <Image
                src="/images/miriam/experience/pigeon.png"
                alt="Pigeon"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>

            {}
            <div className="absolute -top-44 right-44 z-20">
              <Image
                src="/images/miriam/experience/jewish.png"
                alt="Jewish Symbol"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>

            {}
            <div className="flex items-center justify-between gap-8 mt-8">
              {}
              <div className="flex-1 relative">
                <Image
                  src="/images/miriam/experience/line.png"
                  alt="Timeline"
                  width={600}
                  height={50}
                  className="w-full h-auto"
                />
                <span className="absolute top-1/2 -translate-y-10 -mt-5 text-white font-inria-serif text-2xl md:text-4xl" style={{ left: '-0.8ch' }}>
                  2022
                </span>
              </div>

              {}
              <div className="flex-1 relative">
                <Image
                  src="/images/miriam/experience/line.png"
                  alt="Timeline"
                  width={600}
                  height={50}
                  className="w-full h-auto"
                />
                <span className="absolute top-1/2 -translate-y-10 -mt-5 text-white font-inria-serif text-xl md:text-3xl" style={{ left: '-5.5ch' }}>
                  2025
                </span>
                <span className="absolute top-1/2 -translate-y-10 -mt-5 text-white font-inria-serif text-xl md:text-3xl" style={{ left: '-0.5ch' }}>
                  2025
                </span>
                <span className="absolute top-1/2 -translate-y-10 -mt-5 text-white font-inria-serif text-2xl md:text-4xl" style={{ right: '-1.5ch' }}>
                  2026
                </span>
              </div>
            </div>
          </div>

          {}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-2">
            {}
            <div className="text-center">
              <h2 className="text-white font-inria-serif text-4xl mb-4">
                DELEGADA DESTACADA EN<br />MODELOS DE ONU
              </h2>
              <p className="text-white font-inria-serif text-2xl md:text-4xl mb-6">
                MiNU Asociacion Civil
              </p>
              <div className="flex justify-center -mt-16">
                <Image
                  src="/images/miriam/experience/minu.png"
                  alt="MINU Logo"
                  width={300}
                  height={300}
                  className="object-contain"
                />
              </div>
            </div>

            {}
            <div className="text-center">
              <h2 className="text-white font-inria-serif text-4xl mb-4">
                EDUCADORA NO FORMAL
              </h2>
              <p className="text-white font-inria-serif text-2xl md:text-4xl mb-6">
                Institucion Bami Marc<br />Chagall
              </p>
              <div className="flex justify-center mt-8">
                <Image
                  src="/images/miriam/experience/bami.png"
                  alt="Bami Logo"
                  width={300}
                  height={300}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
