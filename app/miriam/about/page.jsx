import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

export default function AboutMiriamPage() {
  return (
    <div className="relative w-full min-h-screen flex flex-col overflow-y-auto hide-scrollbar">
      <NavBar activePage="about" />
      <div className="relative flex-1 flex items-center justify-center px-4 md:px-10 lg:px-16 py-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/miriam/about/background.png" alt="Background" fill className="object-cover" priority />
        </div>
        <div className="hidden md:block absolute left-0 bottom-0 w-32 lg:w-40">
          <Image src="/images/miriam/about/pillar.png" alt="Pilar decorativo izquierdo" width={160} height={600} className="object-contain object-bottom" />
        </div>
        <div className="hidden md:block absolute right-0 bottom-0 w-32 lg:w-40">
          <Image src="/images/miriam/about/pillar.png" alt="Pilar decorativo derecho" width={160} height={600} className="object-contain object-bottom" />
        </div>

        <div className="relative z-10 w-full max-w-6xl flex flex-col gap-0">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)] items-start">
            <div className="text-black font-inria-serif text-center lg:text-left">
              <p className="text-2xl leading-relaxed tracking-wide font-bold">
                Soy estudiante de último año de secundaria y<br/>
                aspirante a especializarme en Derecho<br/>
                Internacional. Me considero una persona<br/>
                responsable, creativa y con sólidas habilidades de<br/>
                liderazgo y oratoria. Disfruto trabajar en equipo y<br/>
                generar buenos vínculos interpersonales, ya que<br/>
                creo que la colaboración es clave para lograr<br/>
                cualquier objetivo.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end -mt-20">
              <Image
                src="/images/miriam/about/scale.png"
                alt="Balanza, mazo y libros"
                width={440}
                height={440}
                className="object-contain drop-shadow-xl self-start"
                priority
              />
            </div>
          </div>

          <p className="text-2xl leading-relaxed tracking-wide font-bold text-black font-inria-serif text-center lg:text-left -mt-4 mb-6 lg:mb-10">
            Tengo un gran interés por las relaciones internacionales, la justicia global y<br/>
            la resolución pacífica de conflictos. Busco seguir formándome en esta área y<br/>
            aportar mi visión crítica, mi compromiso y mi entusiasmo por aprender al<br/>
            mundo del derecho y las relaciones entre naciones.
          </p>

          <div className="flex justify-center mt-2 md:mt-4">
            <Link
              href="https://www.linkedin.com/in/miriam-schulklapper/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button
                className="px-12 py-3 text-3xl lg:text-4xl font-inria-serif border-2"
                style={{
                  backgroundColor: '#000E1D',
                  color: '#C2943C',
                  borderColor: '#C2943C',
                  letterSpacing: '0.05em',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.35)',
                  WebkitTextStrokeWidth: '1px',
                  WebkitTextStrokeColor: '#000000'
                }}
              >
                Conoce mas de mi
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
