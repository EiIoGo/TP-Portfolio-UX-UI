import Image from 'next/image'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

export default function ExperiencePage() {
  return (
    <div className="relative w-full min-h-screen flex flex-col overflow-y-auto hide-scrollbar">
      <NavBar activePage="experience" />
      <div className="relative flex-1 flex items-center justify-end pl-4 pr-10 md:pl-10 md:pr-28 lg:pl-16 lg:pr-40 py-16">
        <div className="absolute inset-0 z-0">
          <Image src="/images/miriam/background.png" alt="Background" fill className="object-cover" priority />
        </div>
        <div
          className="relative z-10 w-full max-w-6xl mt-24 ml-48"
          style={{ fontFamily: "'Inria Serif', serif" }}
        >
          <div className="flex flex-col md:flex-row">
            <div className="relative w-[220px] h-[540px] mr-8">
              <Image src="/images/miriam/experience/timeline.png" alt="Línea de tiempo vertical" width={140} height={540} className="h-full w-auto mx-auto" priority />
              <span className="absolute top-0 -left-2 -translate-x-1/2 text-white text-3xl font-bold tracking-wide">2022</span>
              <span className="absolute top-1/2 -translate-y-1/2 -left-2 -translate-x-1/2 text-white text-3xl font-bold tracking-wide">2025</span>
              <span className="absolute bottom-0 -left-2 -translate-x-1/2 text-white text-3xl font-bold tracking-wide">2026</span>
              <Image src="/images/miriam/experience/minu.png" alt="Logo MiNU" width={170} height={120} className="absolute -left-32 top-20 object-contain" />
              <Image src="/images/miriam/experience/bami.png" alt="Logo Bami Marc Chagall" width={170} height={120} className="absolute -left-28 bottom-16 object-contain" />
            </div>

            <div className="flex flex-col gap-24 text-white w-full md:-ml-12 lg:-ml-16">
              <div className="grid md:grid-cols-[2fr_auto_1fr] items-center gap-8">
                <p className="text-2xl md:text-3xl leading-snug text-center font-semibold uppercase">
                  DELEGADA DESTACADA<br/>EN MODELOS DE ONU
                </p>
                <div className="flex flex-col items-center gap-3">
                  <Image src="/images/miriam/experience/pigeon.png" alt="Paloma" width={180} height={150} className="object-contain" priority />
                  <Image src="/images/miriam/experience/top%20arrow.png" alt="Flecha hacia la organización" width={180} height={40} className="object-contain -translate-y-20" />
                </div>
                <p className="text-xl md:text-2xl leading-snug text-center">MiNU Asociacion<br/>Civil</p>
              </div>

              <div className="grid md:grid-cols-[1fr_auto_1fr] items-center gap-8">
                <p className="text-2xl md:text-3xl leading-snug text-center font-semibold uppercase">
                  EDUCADORA NO<br/>FORMAL
                </p>
                <div className="flex flex-col items-center gap-3">
                  <Image src="/images/miriam/experience/jewish.png" alt="Manos sosteniendo símbolo" width={160} height={150} className="object-contain -translate-y-12" />
                  <Image src="/images/miriam/experience/bottom%20arrow.png" alt="Flecha hacia la institución" width={190} height={40} className="object-contain -translate-y-16" />
                </div>
                <p className="text-xl md:text-2xl leading-snug text-center">Institucion Bami<br/>Marc Chagall</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
