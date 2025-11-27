export default function EialHomePage() {
  return (
    <div className="w-full max-w-2xl rounded-2xl shadow-2xl p-6" style={{ backgroundColor: '#061E20' }}>
      {/* Hero Section with Background Image */}
      <section className="relative -m-6 mb-0">
        <div className="relative w-full">
          <img src="/images/eial/homebg.png" alt="background" className="w-full h-auto rounded-t-2xl"/>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="text-white text-center leading-none mb-2" style={{ fontFamily: 'Fascinate Inline', fontSize: '40px' }}> EIAL IONATAN GOLDMAN </h1>
            <p className="text-white text-center" style={{ fontFamily: 'Fira Code', fontSize: '23px' }}>Estudiante de desarrollador de software</p>
          </div>
        </div>
      </section>

      {/* About / Title */}
      <section className="relative mt-8">
        <div className="flex justify-between items-center">
          <h1 className="text-5xl ml-8 font-mono" style={{ fontFamily: 'Fira Code' }}>acerca_de_mi</h1>
        </div>
        <img src="/images/eial/cursor.png" alt="cursor" className="absolute -top-24 right-2 w-64 h-64" />
        <div className="mt-2 font-mono">
          <div className="text-5xl" style={{ fontFamily: 'Inria Serif' }}>= &#123;</div>
          <div className="text-base ml-20 my-2 whitespace-pre-line relative leading-none" style={{ fontFamily: 'Fira Code' }}>
            Apasionado por los videojuegos y por codear<br/>
            mundos desde cero.<br/>
            <br/>
            Mi <span style={{ color: '#569CCA' }}>main function()</span> combina creatividad, organización<br/>
            y unas cuantas líneas de <span style={{ color: '#506A2F' }}>debugging</span>.<br/>
            <br/>
            Amo programar videojuegos, diseñar mecánicas y<br/>
            ver cómo una simple variable puede cambiar toda<br/>
            una experiencia.<br/>
            <br/>
            He liderado varios proyectos donde aprendí a<br/>
            coordinar equipos, gestionar tiempos y mantener la<br/>
            motivación del grupo siempre activa —como un <span style={{ color: '#C586C0' }}>while</span><br/>
            (<span style={{ color: '#DCDCAA' }}>creatividad</span> <span style={{ color: '#CE9172' }}>&gt;</span> <span style={{ color: '#B5CEA8' }}>0</span>) que nunca se detiene.
            <img src="/images/eial/terminal.png" alt="terminal" className="absolute -right-6 top-12 w-40 h-40" />
          </div>
          <div className="text-5xl ml-12" style={{ fontFamily: 'Inria Serif' }}>&#125;</div>
        </div>
      </section>

      {/* Photo + laptop icon */}
      <section className="relative flex items-center">
        <div className="w-50 h-40 bg-teal-800 flex items-center justify-center overflow-hidden ml-20 mt-6">
          <img src="/images/eial/photo.png" alt="photo" className="object-cover w-full h-full" />
        </div>
        <img src="/images/eial/laptop.png" alt="laptop" className="absolute -top-8 right-28 w-50 h-40" />
      </section>
      
      {/* Education */}
      <section className="relative mt-16">
        <h1 className="text-5xl ml-8 font-mono" style={{ fontFamily: 'Fira Code' }}>educacion</h1>
        <img src="/images/eial/dinosaur.png" alt="dinosaur" className="absolute right-40 -top-28 w-48 h-48" />
        <div className="mt-2 font-mono">
          <div className="text-5xl" style={{ fontFamily: 'Inria Serif' }}>= &#123;</div>
          <div className="text-2xl ml-20 my-2 whitespace-pre-line relative leading-none" style={{ fontFamily: 'Fira Code' }}>
            <span style={{ color: '#35FF66', fontFamily: 'Fira Code' }}>
              <span style={{ color: '#CE9172' }}>"</span>2021<span style={{ color: '#FFFFFF' }}>-</span>2025<span style={{ color: '#CE9172' }}>"</span><span style={{ color: '#FFFFFF' }}>:</span> <span style={{ color: '#CE9172' }}>"</span>ORT Argentina <span style={{ color: '#FFFFFF' }}>-</span> Técnico en<br/>
              Programación<span style={{ color: '#CE9172' }}>"</span>,<br/>
              <span style={{ color: '#CE9172' }}>"</span>2026<span style={{ color: '#FFFFFF' }}>-</span>actualidad<span style={{ color: '#CE9172' }}>"</span><span style={{ color: '#FFFFFF' }}>:</span> <span style={{ color: '#CE9172' }}>"</span>UNSAM <span style={{ color: '#FFFFFF' }}>-</span> Licenciatura en<br/>
              Tecnología<span style={{ color: '#CE9172' }}>"</span>
            </span>
          </div>
          <div className="text-5xl ml-12" style={{ fontFamily: 'Inria Serif' }}>&#125;</div>
        </div>
        <img src="/images/eial/ort.png" alt="ort" className="absolute left-24 top-60 h-24" />
        <img src="/images/eial/unsam.png" alt="unsam" className="absolute right-28 top-60 h-24" />
      </section>

      {/* Skills */}
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

      {/* Experience (simple) */}
      <section className="relative mt-16">
        <h1 className="text-5xl ml-8 font-mono" style={{ fontFamily: 'Fira Code' }}>experiencia</h1>
        <div className="mt-2 font-mono relative">
          <div className="text-5xl" style={{ fontFamily: 'Inria Serif' }}>= &#123;</div>
          <div className="text-xl ml-20 my-2 relative leading-tight" style={{ fontFamily: 'Fira Code', color: '#35FF66' }}>
            <div className="whitespace-pre-line">
              {'\u00A0\u00A0\u00A0\u00A0'}<span style={{ color: '#C586C0' }}>2023</span><span style={{ color: '#FFFFFF' }}>:</span> <span style={{ color: '#FFFFFF' }}>{'{'}</span> "proyecto"<span style={{ color: '#FFFFFF' }}>:</span><br/>
              <span style={{ color: '#CE9172' }}>&quot;BuzzAdmin&quot;</span><span style={{ color: '#FFFFFF' }}>,</span> "herramientas"<span style={{ color: '#FFFFFF' }}>:</span>
              <br />
              <span style={{ color: '#FFFFFF' }}>{'['}</span><span style={{ color: '#CE9172' }}>&quot;GitHub&quot;</span><span style={{ color: '#FFFFFF' }}>,</span> <span style={{ color: '#CE9172' }}>&quot;VS Code&quot;</span><span style={{ color: '#FFFFFF' }}>{']'}</span><span style={{ color: '#FFFFFF' }}>,<br/>
                </span> "rol"<span style={{ color: '#FFFFFF' }}>:</span> <span style={{ color: '#CE9172' }}>&quot;Back-End&quot;</span> <span style={{ color: '#FFFFFF' }}>{'}'}</span><span style={{ color: '#FFFFFF' }}>,</span>
            </div>
            <div className="whitespace-pre-line mt-6 md:ml-56 ml-16">
              {'\u00A0\u00A0\u00A0\u00A0'}<span style={{ color: '#C586C0' }}>2024</span><span style={{ color: '#FFFFFF' }}>:</span> <span style={{ color: '#FFFFFF' }}>{'{'}</span> "proyecto"<span style={{ color: '#FFFFFF' }}>:</span> <span style={{ color: '#CE9172' }}>&quot;Ticarde&quot;</span><span style={{ color: '#FFFFFF' }}>,</span> "herramientas"<span style={{ color: '#FFFFFF' }}>:</span>
              <br />
              <span style={{ color: '#FFFFFF' }}>{'['}</span><span style={{ color: '#CE9172' }}>&quot;VS Code&quot;</span><span style={{ color: '#FFFFFF' }}>,</span> <span style={{ color: '#CE9172' }}>&quot;Unity&quot;</span><span style={{ color: '#FFFFFF' }}>,</span> <span style={{ color: '#CE9172' }}>&quot;GitHub&quot;</span><span style={{ color: '#FFFFFF' }}>{']'}</span><span style={{ color: '#FFFFFF' }}>,</span> "rol"<span style={{ color: '#FFFFFF' }}>:</span> <span style={{ color: '#CE9172' }}>&quot;Desarrollador de videojuegos 3D&quot;</span>
              <br />
              <span style={{ color: '#FFFFFF' }}>{'}'}</span><span style={{ color: '#FFFFFF' }}>,</span>
            </div>
            <div className="whitespace-pre-line mt-6">
              {'\u00A0\u00A0\u00A0\u00A0'}<span style={{ color: '#C586C0' }}>2025</span><span style={{ color: '#FFFFFF' }}>:</span> <span style={{ color: '#FFFFFF' }}>{'{'}</span> "proyecto"<span style={{ color: '#FFFFFF' }}>:</span> <span style={{ color: '#CE9172' }}>&quot;BuzzCon&quot;</span><span style={{ color: '#FFFFFF' }}>,</span> "herramientas"<span style={{ color: '#FFFFFF' }}>:</span>
              <br />
              <span style={{ color: '#FFFFFF' }}>{'['}</span><span style={{ color: '#CE9172' }}>&quot;GitHub&quot;</span><span style={{ color: '#FFFFFF' }}>,</span> <span style={{ color: '#CE9172' }}>&quot;VS Code&quot;</span><span style={{ color: '#FFFFFF' }}>{']'}</span><span style={{ color: '#FFFFFF' }}>,</span> "rol"<span style={{ color: '#FFFFFF' }}>:</span> <span style={{ color: '#CE9172' }}>&quot;Back-End&quot;</span> <span style={{ color: '#FFFFFF' }}>{'}'}</span>
            </div>
          </div>
          <div className="text-5xl ml-12" style={{ fontFamily: 'Inria Serif' }}>&#125;</div>
          <img src="/images/eial/buzzadmin.png" alt="abeja BuzzAdmin" className="absolute -top-4 right-10 w-24 h-24" />
          <img src="/images/eial/ticarde.png" alt="logo Ticarde" className="absolute left-24 top-32 w-32 h-32" />
          <img src="/images/eial/buzzcon.png" alt="abeja BuzzCon" className="absolute right-4 bottom-0 w-28 h-28" />
        </div>
      </section>

      {/* Contact & icons row */}
      <section className="relative mt-20">
        <h1 className="text-5xl ml-8 font-mono" style={{ fontFamily: 'Fira Code' }}>informacion_contacto</h1>
        <div className="mt-2 font-mono">
          <div className="text-5xl" style={{ fontFamily: 'Inria Serif' }}>= &#123;</div>
          <div className="text-xl ml-20 my-2 whitespace-pre-line relative leading-none" style={{ fontFamily: 'Fira Code' }}>
            <span style={{ color: '#35FF66', fontFamily: 'Fira Code' }}>
              <span style={{ color: '#FFFFFF' }}>"</span>telefono<span style={{ color: '#FFFFFF' }}>":</span> <span style={{ color: '#FFFFFF' }}>"</span>+54 9 11 5668 - 5143<span style={{ color: '#FFFFFF' }}>"</span><span style={{ color: '#FFFFFF' }}>,</span><br/>
              <span style={{ color: '#FFFFFF' }}>"</span>mail<span style={{ color: '#FFFFFF' }}>":</span> <span style={{ color: '#FFFFFF' }}>"</span>eialgoldman@gmail.com<span style={{ color: '#FFFFFF' }}>"</span><span style={{ color: '#FFFFFF' }}>,</span><br/>
              <span style={{ color: '#FFFFFF' }}>"</span>ubicacion<span style={{ color: '#FFFFFF' }}>":</span> <span style={{ color: '#FFFFFF' }}>"</span>Ciudad Autónoma de Buenos Aires<span style={{ color: '#FFFFFF' }}>"</span>
            </span>
          </div>
          <div className="text-5xl ml-12" style={{ fontFamily: 'Inria Serif' }}>&#125;</div>
        </div>
      </section>

    </div>
  )
}
