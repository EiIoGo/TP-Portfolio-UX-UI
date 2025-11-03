import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="w-full bg-[#B8955C] py-6 px-8">
      <div className="max-w-3xl mx-auto flex flex-col gap-4">
        {}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
            <Image
              src="/images/miriam/footer/whatsapp.png"
              alt="WhatsApp"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
          <span className="text-white font-inria-serif text-2xl">
            11 2174-1613
          </span>
        </div>

        {}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
            <Image
              src="/images/miriam/footer/at.png"
              alt="Email"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
          <span className="text-white font-inria-serif text-2xl">
            miriamschulk@gmail.com
          </span>
        </div>

        {}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
            <Image
              src="/images/miriam/footer/location.png"
              alt="Location"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
          <span className="text-white font-inria-serif text-2xl">
            Ciudad Autónoma de Buenos Aires
          </span>
        </div>
      </div>
    </footer>
  )
}
