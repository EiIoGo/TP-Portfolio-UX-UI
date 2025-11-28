import Image from 'next/image'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

export default function SkillsPage() {
  return (
    <div className="relative w-full min-h-screen flex flex-col overflow-y-auto hide-scrollbar">
      <NavBar activePage="skills" />
      <div className="relative flex-1 flex items-center justify-center px-8 py-16 pb-32">
        <div className="absolute inset-0 z-0">
          <Image src="/images/miriam/background.png" alt="Background" fill className="object-cover" priority />
        </div>
        <div className="relative z-10 w-full max-w-6xl mt-12">
          <div className="relative w-full h-[780px] pb-80" style={{ fontFamily: "'Inria Serif', serif" }}>
            <Image
              src="/images/miriam/skills/arrow%20left.png"
              alt="Flecha decorativa izquierda"
              width={240}
              height={240}
              className="absolute -top-20 left-4 object-contain"
              priority
            />
            <Image
              src="/images/miriam/skills/arrow%20right.png"
              alt="Flecha decorativa derecha"
              width={240}
              height={240}
              className="absolute -bottom-8 -right-8 object-contain"
              priority
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/images/miriam/skills/brain.png"
                alt="Ilustración de un cerebro"
                width={420}
                height={420}
                className="object-contain drop-shadow-[0_15px_35px_rgba(0,0,0,0.45)]"
                priority
              />
            </div>

            <div className="skill-orbit-item" style={{ '--orbit-angle': '150deg', '--orbit-radius': '340px', '--orbit-duration': '36s' }}>
              <div className="flex flex-col items-center text-center text-white">
                <Image src="/images/miriam/skills/speaker.png" alt="Oratoria" width={150} height={150} className="object-contain mb-3" />
                <p className="text-2xl tracking-wide">ORATORIA</p>
              </div>
            </div>

            <div className="skill-orbit-item" style={{ '--orbit-angle': '95deg', '--orbit-radius': '360px', '--orbit-duration': '36s' }}>
              <div className="flex flex-col items-center text-center text-white">
                <Image src="/images/miriam/skills/hands.png" alt="Negociación" width={170} height={170} className="object-contain mb-3" />
                <p className="text-2xl tracking-wide">NEGOCIACIÓN</p>
              </div>
            </div>

            <div className="skill-orbit-item" style={{ '--orbit-angle': '30deg', '--orbit-radius': '345px', '--orbit-duration': '36s' }}>
              <div className="flex flex-col items-center text-center text-white">
                <Image src="/images/miriam/skills/papers.png" alt="Organización" width={160} height={160} className="object-contain mb-3" />
                <p className="text-2xl tracking-wide">ORGANIZACIÓN</p>
              </div>
            </div>

            <div className="skill-orbit-item" style={{ '--orbit-angle': '210deg', '--orbit-radius': '320px', '--orbit-duration': '36s' }}>
              <div className="flex flex-col items-center text-center text-white">
                <Image src="/images/miriam/skills/think.png" alt="Pensamiento crítico" width={140} height={140} className="object-contain mb-3" />
                <p className="text-2xl tracking-wide">PENSAMIENTO<br />CRITICO</p>
              </div>
            </div>

            <div className="skill-orbit-item" style={{ '--orbit-angle': '300deg', '--orbit-radius': '340px', '--orbit-duration': '36s' }}>
              <div className="flex flex-col items-center text-center text-white">
                <Image src="/images/miriam/skills/teamwork.png" alt="Trabajo en equipo" width={170} height={170} className="object-contain mb-3" />
                <p className="text-2xl tracking-wide">TRABAJO EN<br />EQUIPO</p>
              </div>
            </div>

            <div className="skill-orbit-item" style={{ '--orbit-angle': '250deg', '--orbit-radius': '360px', '--orbit-duration': '36s' }}>
              <div className="flex flex-col items-center text-center text-white">
                <Image src="/images/miriam/skills/lightbulb.png" alt="Resolución de problemas" width={150} height={150} className="object-contain mb-3" />
                <p className="text-2xl tracking-wide">RESOLUCIÓN DE<br />PROBLEMAS</p>
              </div>
            </div>

            <div className="skill-orbit-item" style={{ '--orbit-angle': '340deg', '--orbit-radius': '360px', '--orbit-duration': '36s' }}>
              <div className="flex flex-col items-center text-center text-white">
                <Image src="/images/miriam/skills/language.png" alt="Facilidad con idiomas" width={150} height={150} className="object-contain mb-3" />
                <p className="text-2xl tracking-wide">FACILIDAD CON<br />IDIOMAS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
