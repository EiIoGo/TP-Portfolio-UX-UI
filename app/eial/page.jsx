'use client';
import { useState, useEffect, useRef } from 'react';

const TICARDE_FRAMES = [
  '/images/eial/ticarde-frames/ticarde-frame-01.png',
  '/images/eial/ticarde-frames/ticarde-frame-02.png',
  '/images/eial/ticarde-frames/ticarde-frame-03.png',
  '/images/eial/ticarde-frames/ticarde-frame-04.png',
  '/images/eial/ticarde-frames/ticarde-frame-05.png',
  '/images/eial/ticarde-frames/ticarde-frame-06.png',
  '/images/eial/ticarde-frames/ticarde-frame-07.png',
  '/images/eial/ticarde-frames/ticarde-frame-08.png',
  '/images/eial/ticarde-frames/ticarde-frame-09.png',
  '/images/eial/ticarde-frames/ticarde-frame-10.png'
];

const TICARDE_FRAME_INTERVAL = 120;

export default function EialHomePage() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [buzzConActive, setBuzzConActive] = useState(false);
  const [ticardeFrameIndex, setTicardeFrameIndex] = useState(0);
  const buzzConRef = useRef(null);
  const buzzConTriggerRef = useRef(null);


  useEffect(() => {
    if (!loading) return;

    const duration = 1000;
    const tick = 50;
    const startTime = Date.now();

    const intervalId = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(intervalId);
          return 100;
        }

        const elapsed = Date.now() - startTime;
        const remainingTime = Math.max(duration - elapsed, 0);
        const remainingProgress = Math.max(100 - prev, 0);

        const ticksLeft = Math.max(Math.ceil(remainingTime / tick), 1);
        const maxIncrement = Math.max((remainingProgress / ticksLeft) * 1.6, 2);
        const minIncrement = Math.max(maxIncrement / 3, 0.5);
        const randomIncrement = minIncrement + Math.random() * (maxIncrement - minIncrement);
        const nextProgress = Math.min(prev + randomIncrement, 100);

        if (nextProgress >= 100 || elapsed >= duration) {
          clearInterval(intervalId);
          setTimeout(() => setLoading(false), 400);
          return 100;
        }

        return nextProgress;
      });
    }, tick);

    return () => clearInterval(intervalId);
  }, [loading]);

  useEffect(() => {
    if (loading) return;

    const node = buzzConTriggerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBuzzConActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -80% 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [loading]);

  useEffect(() => {
    if (loading || TICARDE_FRAMES.length === 0) return;

    const intervalId = setInterval(() => {
      setTicardeFrameIndex(prev => (prev + 1) % TICARDE_FRAMES.length);
    }, TICARDE_FRAME_INTERVAL);

    return () => clearInterval(intervalId);
  }, [loading]);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center" style={{ backgroundColor: '#184349' }}>
        <div className="relative inline-block">
          <img 
            src="/images/eial/loading-background.png" 
            alt="loading screen" 
            className="max-w-full max-h-screen"
          />
          
          <div
            className="absolute"
            style={{
              width: '62%',
              height: '6.5%',
              left: '19%',
              top: '46%'
            }}
          >
            <div className="relative h-full w-full overflow-hidden rounded-sm">
              <div 
                className="h-full transition-all duration-300 ease-out"
                style={{ 
                  width: `${progress}%`,
                  height: '100%',
                  background: 'linear-gradient(90deg, #4DD4E8 0%, #3BA5C8 100%)',
                  boxShadow: '0 0 8px rgba(77, 212, 232, 0.5)',
                  borderRadius: '6px'
                }}
              />
            </div>

            <img
              src="/images/eial/loading-border.png"
              alt="loading border"
              className="pointer-events-none absolute inset-0 w-full h-full"
              style={{
                transform: `translate(0%, 11%) scale(1.09, 2.5)`,
                transformOrigin: 'center',
                zIndex: 5
              }}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[43.2rem] shadow-2xl p-6 pt-0" style={{ backgroundColor: '#061E20', transform: 'scale(1.39)', transformOrigin: 'top center' }}>
      <section className="relative -m-6 mb-0">
        <div className="relative w-full">
          <img src="/images/eial/homebg.png" alt="background" className="w-full h-auto"/>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="text-white text-center leading-none mb-2" style={{ fontFamily: 'Fascinate Inline', fontSize: '40px' }}> EIAL IONATAN GOLDMAN </h1>
            <p className="text-white text-center" style={{ fontFamily: 'Fira Code', fontSize: '23px' }}>Estudiante de desarrollador de software</p>
          </div>
        </div>
      </section>

      <section className="relative -m-6" aria-label="intro pregunta">
        <div className="relative w-full">
          <img
            src="/images/eial/hero-insert-bg.png"
            alt="fondo degradado"
            className="w-full h-auto block"
          />
          <img
            src="/images/eial/hero-insert-text.png"
            alt="Are you ready?"
            className="absolute top-1/2 left-1/2 are-you-ready-text"
            style={{ maxHeight: '150px', objectFit: 'contain', filter: 'drop-shadow(0 0 6px rgba(255,255,255,0.5))' }}
          />
        </div>
      </section>

      <section className="relative mt-8">
        <div className="flex justify-between items-center">
          <h1 className="text-5xl ml-8 font-mono" style={{ fontFamily: 'Fira Code' }}>acerca_de_mi</h1>
        </div>
        <img src="/images/eial/cursor.png" alt="cursor" className="absolute -top-24 right-2 w-64 h-64" />
        <div className="mt-2 font-mono">
          <div className="text-5xl" style={{ fontFamily: 'Inria Serif' }}>= &#123;</div>
          <div className="grid grid-cols-2 ml-12 my-2">
            <div>
              <div className="text-xl whitespace-pre-line relative leading-tight" style={{ fontFamily: 'Fira Code' }}>
                Apasionado por los<br/>
                <span style={{ color: '#C89534' }}>videojuegos</span> y por<br/>
                codear mundos<br/>
                desde cero.
              </div>

              <div className="text-xl whitespace-pre-line relative leading-tight mt-6 ml-32 -mr-2" style={{ fontFamily: 'Fira Code' }}>
                Mi <span style={{ color: '#569CCA' }}>main function()</span><br/>
                combina creatividad,<br/>
                organización y unas<br/>
                cuantas líneas de<br/>
                <span style={{ color: '#506A2F' }}>debugging</span>.
                <div className="absolute bottom-0 -left-32">
                  <img src="/images/eial/laptop.png" alt="laptop" className="w-32 h-32 object-contain" />
                </div>
              </div>

              <div className="text-xl whitespace-pre-line relative leading-tight mt-4 -mr-8" style={{ fontFamily: 'Fira Code' }}>
                He liderado varios proyectos donde<br/>
                aprendí a coordinar <span style={{ color: '#35FF66' }}>equipos</span>,<br/>
                gestionar tiempos y mantener la<br/>
                motivación del grupo siempre activa<br/>
                —como un <span style={{ color: '#C586C0' }}>while</span>(<span style={{ color: '#DCDCAA' }}>creatividad</span> <span style={{ color: '#CE9172' }}>&gt;</span> <span style={{ color: '#B5CEA8' }}>0</span>) que<br/>
                nunca se detiene.
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-6 -left-32">
                <img src="/images/eial/terminal.png" alt="terminal" className="w-32 h-32 object-contain" />
              </div>
              <div className="mt-16 ml-8">
                <div className="w-48 h-56 bg-gray-700 flex items-center justify-center overflow-hidden">
                  <img src="/images/eial/photo.png" alt="foto" className="object-cover w-full h-full" />
                </div>
              </div>
            </div>
          </div>
          <div className="text-5xl ml-12" style={{ fontFamily: 'Inria Serif' }}>&#125;</div>
        </div>
      </section>
      
      <section className="relative mt-16">
        <h1 className="text-5xl ml-8 font-mono" style={{ fontFamily: 'Fira Code' }}>educacion</h1>
        <img src="/images/eial/dinosaur.png" alt="dinosaur" className="absolute right-40 -top-28 w-48 h-48" />
        <div className="mt-2 font-mono">
          <div className="text-5xl" style={{ fontFamily: 'Inria Serif' }}>= &#123;</div>
          <div className="text-2xl ml-36 my-2 whitespace-pre-line relative leading-none" style={{ fontFamily: 'Fira Code' }}>
            <span style={{ color: '#35FF66', fontFamily: 'Fira Code' }}>
              <span style={{ color: '#CE9172' }}>"</span>2021<span style={{ color: '#FFFFFF' }}>-</span>2025<span style={{ color: '#CE9172' }}>"</span><span style={{ color: '#FFFFFF' }}>:</span> <span style={{ color: '#CE9172' }}>"</span>ORT Argentina <span style={{ color: '#FFFFFF' }}>-</span> Técnico en<br/>
              Programación<span style={{ color: '#CE9172' }}>"</span>,<br/>
              <br/>
              <span style={{ color: '#CE9172' }}>"</span>2024<span style={{ color: '#CE9172' }}>"</span><span style={{ color: '#FFFFFF' }}>:</span> <span style={{ color: '#CE9172' }}>"</span>University of Cambridge <span style={{ color: '#FFFFFF' }}>-</span> First<br/>
              Certificate (B2)<span style={{ color: '#CE9172' }}>"</span>,<br/>
              <br/>
              <span style={{ color: '#CE9172' }}>"</span>2026<span style={{ color: '#FFFFFF' }}>-</span>actualidad<span style={{ color: '#CE9172' }}>"</span><span style={{ color: '#FFFFFF' }}>:</span> <span style={{ color: '#CE9172' }}>"</span>UNSAM <span style={{ color: '#FFFFFF' }}>-</span> Licenciatura en<br/>
              Tecnología<span style={{ color: '#CE9172' }}>"</span>
            </span>
          </div>
          <div className="text-5xl ml-12" style={{ fontFamily: 'Inria Serif' }}>&#125;</div>
        </div>
        <img src="/images/eial/ort.png" alt="ort" className="absolute left-6 top-28 h-12" />
        <img src="/images/eial/unsam.png" alt="unsam" className="absolute left-2 top-64 h-12" />
        <img src="/images/eial/cambridge.png" alt="cambridge" className="absolute left-0 top-40 h-24" />
      </section>

      <section className="relative mt-28">
        <h1 className="text-5xl ml-8 font-mono" style={{ fontFamily: 'Fira Code' }}>habilidades</h1>
          <div className="text-5xl" style={{ fontFamily: 'Inria Serif' }}>= &#123;</div>
        <div className="mt-3">
          <div className="flex justify-center gap-6 mb-3">
            {["HTML","JavaScript","Python","C++"].map((s) => {
              const isShort = s.length <= 3;
              return <span key={s} className={`py-1 text-black text-xl ${isShort ? 'px-4' : 'px-2'}`} style={{ backgroundColor: '#35FF66', border: '2px solid #164A26', fontFamily: 'Fredoka' }}>{s}</span>;
            })}
          </div>
          <div className="flex justify-center gap-10">
            {["SQL","CSS","C#"].map((s) => {
              const isShort = s.length <= 3;
              return <span key={s} className={`py-1 text-black text-xl ${isShort ? 'px-6' : 'px-4'}`} style={{ backgroundColor: '#35FF66', border: '2px solid #164A26', fontFamily: 'Fredoka' }}>{s}</span>;
            })}
          </div>
        </div>
        <div className="text-5xl ml-12" style={{ fontFamily: 'Inria Serif' }}>&#125;</div>
        <img src="/images/eial/vscode.png" alt="vscode" className="absolute right-32 top-0 w-20 h-20" />
        <img src="/images/eial/github.png" alt="github" className="absolute right-0 top-20 w-20 h-20" />
        <img src="/images/eial/unity.png" alt="unity" className="absolute right-16 top-52 w-20 h-20" />
      </section>

      <section className="relative mt-16" ref={buzzConTriggerRef}>
        <h1 className="text-5xl ml-8 font-mono" style={{ fontFamily: 'Fira Code' }}>experiencia</h1>
        <div className="mt-2 font-mono relative">
          <div className="text-5xl" style={{ fontFamily: 'Inria Serif' }}>= &#123;</div>
          <div className="text-xl ml-20 my-2 relative leading-tight" style={{ fontFamily: 'Fira Code', color: '#35FF66' }}>
            <div className="whitespace-pre-line">
              <span style={{ color: '#C586C0' }}>2023</span><span style={{ color: '#FFFFFF' }}>:</span> <span style={{ color: '#FFFFFF' }}>{'{'}</span> "proyecto"<span style={{ color: '#FFFFFF' }}>:</span><br/>
              <span style={{ color: '#CE9172' }}>&quot;BuzzAdmin&quot;</span><span style={{ color: '#FFFFFF' }}>,</span> "herramientas"<span style={{ color: '#FFFFFF' }}>:</span><br />
              <span style={{ color: '#FFFFFF' }}>{'['}</span><span style={{ color: '#CE9172' }}>&quot;GitHub&quot;</span><span style={{ color: '#FFFFFF' }}>,</span> <span style={{ color: '#CE9172' }}>&quot;VS Code&quot;</span><span style={{ color: '#FFFFFF' }}>{']'}</span><span style={{ color: '#FFFFFF' }}>,</span><br/>
              "rol"<span style={{ color: '#FFFFFF' }}>:</span> <span style={{ color: '#CE9172' }}>&quot;Back-End&quot;</span> <span style={{ color: '#FFFFFF' }}>{'}'}</span><span style={{ color: '#FFFFFF' }}>,</span>
            </div>
            <div className="whitespace-pre-line mt-6 md:ml-56 ml-16">
              <span style={{ color: '#C586C0' }}>2024</span><span style={{ color: '#FFFFFF' }}>:</span> <span style={{ color: '#FFFFFF' }}>{'{'}</span> "proyecto"<span style={{ color: '#FFFFFF' }}>:</span><br/>
              <span style={{ color: '#CE9172' }}>&quot;Ticarde&quot;</span><span style={{ color: '#FFFFFF' }}>,</span> "herramientas"<span style={{ color: '#FFFFFF' }}>:</span><br/>
              <span style={{ color: '#FFFFFF' }}>{'['}</span><span style={{ color: '#CE9172' }}>&quot;VS Code&quot;</span><span style={{ color: '#FFFFFF' }}>,</span> <span style={{ color: '#CE9172' }}>&quot;Unity&quot;</span><span style={{ color: '#FFFFFF' }}>,</span><br/>
              <span style={{ color: '#CE9172' }}>&quot;GitHub&quot;</span><span style={{ color: '#FFFFFF' }}>{']'}</span><span style={{ color: '#FFFFFF' }}>,</span> "rol"<span style={{ color: '#FFFFFF' }}>:</span><br/>
              <span style={{ color: '#CE9172' }}>&quot;Desarrollador de videojuegos<br/>
               3D&quot;</span>
              <span style={{ color: '#FFFFFF' }}>{'}'}</span><span style={{ color: '#FFFFFF' }}>,</span>
            </div>
            <div className="whitespace-pre-line mt-6">
              <span style={{ color: '#C586C0' }}>2025</span><span style={{ color: '#FFFFFF' }}>:</span> <span style={{ color: '#FFFFFF' }}>{'{'}</span> "proyecto"<span style={{ color: '#FFFFFF' }}>:</span><br/>
              <span style={{ color: '#CE9172' }}>&quot;BuzzCon&quot;</span><span style={{ color: '#FFFFFF' }}>,</span><br/>
              "herramientas"<span style={{ color: '#FFFFFF' }}>:</span><br/>
              <span style={{ color: '#FFFFFF' }}>{'['}</span><span style={{ color: '#CE9172' }}>&quot;GitHub&quot;</span><span style={{ color: '#FFFFFF' }}>,</span> <span style={{ color: '#CE9172' }}>&quot;VS Code&quot;</span><span style={{ color: '#FFFFFF' }}>{']'}</span><span style={{ color: '#FFFFFF' }}>,</span><br/>
              "rol"<span style={{ color: '#FFFFFF' }}>:</span> <span style={{ color: '#CE9172' }}>&quot;Back-End&quot;</span> <span style={{ color: '#FFFFFF' }}>{'}'}</span>
            </div>
          </div>
          <div className="text-5xl ml-12" style={{ fontFamily: 'Inria Serif' }}>&#125;</div>
          <img src="/images/eial/buzzadmin.png" alt="abeja BuzzAdmin" className="absolute top-8 right-40 w-24 h-24 buzzadmin-tilt" />
          <img
            src={TICARDE_FRAMES[ticardeFrameIndex]}
            alt="logo Ticarde animado"
            className="absolute left-24 top-48 w-32 h-32"
          />
          <img
            src="/images/eial/buzzcon.png"
            alt="abeja BuzzCon"
            ref={buzzConRef}
            className={`absolute right-40 bottom-16 w-28 h-28 ${buzzConActive ? 'buzzcon-fly-in' : 'buzzcon-prep'}`}
          />
        </div>
      </section>

      <section className="relative mt-20">
        <h1 className="text-5xl ml-8 font-mono" style={{ fontFamily: 'Fira Code' }}>informacion_contacto</h1>
        <div className="mt-2 font-mono">
          <div className="text-5xl" style={{ fontFamily: 'Inria Serif' }}>= &#123;</div>
          <div className="text-xl ml-20 my-2 whitespace-pre-line relative leading-none" style={{ fontFamily: 'Fira Code' }}>
            <span style={{ color: '#35FF66', fontFamily: 'Fira Code' }}>
              <span style={{ color: '#FFFFFF' }}>"</span>telefono<span style={{ color: '#FFFFFF' }}>":</span> <span style={{ color: '#FFFFFF' }}>"</span>+54 9 11 5668 - 5143<span style={{ color: '#FFFFFF' }}>"</span><span style={{ color: '#FFFFFF' }}>,</span><br/>
              <span style={{ color: '#FFFFFF' }}>"</span>mail<span style={{ color: '#FFFFFF' }}>":</span> <span style={{ color: '#FFFFFF' }}>"</span>eialgoldman@gmail.com<span style={{ color: '#FFFFFF' }}>"</span><span style={{ color: '#FFFFFF' }}>,</span><br/>
              <span style={{ color: '#FFFFFF' }}>"</span>ubicacion<span style={{ color: '#FFFFFF' }}>":</span> <span style={{ color: '#FFFFFF' }}>"</span>Ciudad Autónoma de Buenos Aires<span style={{ color: '#FFFFFF' }}>"</span><span style={{ color: '#FFFFFF' }}>,</span><br/>
              <span style={{ color: '#FFFFFF' }}>"</span>linkedin<span style={{ color: '#FFFFFF' }}>":</span> <span style={{ color: '#FFFFFF' }}>"</span><a href="about:blank" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Eial Goldman</a><span style={{ color: '#FFFFFF' }}>"</span>
            </span>
          </div>
          <div className="text-5xl ml-12" style={{ fontFamily: 'Inria Serif' }}>&#125;</div>
        </div>
      </section>

    </div>
  )
}
