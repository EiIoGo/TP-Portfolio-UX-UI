export default function NavBar({ activePage }) {
  const pages = [
    { id: 'home', label: 'Inicio', href: '/miriam/home' },
    { id: 'about', label: 'Acerca de', href: '/miriam/about' },
    { id: 'education', label: 'Educacion', href: '/miriam/education' },
    { id: 'skills', label: 'Habilidades', href: '/miriam/skills' },
    { id: 'experience', label: 'Experiencia', href: '/miriam/experience' }
  ]

  return (
    <nav className="relative z-20 w-full bg-[#B8955C] py-6 px-8">
      <ul className="flex justify-center items-center gap-8 md:gap-16 text-white font-inria-serif">
        {pages.map((page) => (
          <li key={page.id}><a href={page.href} className={`text-xl ${activePage === page.id ? 'text-black' : ''}`}>{page.label}</a></li>
        ))}
      </ul>
    </nav>
  )
}
