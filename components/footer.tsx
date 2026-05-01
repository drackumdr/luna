import Link from "next/link"

export function Footer() {
  const specialties = [
    { label: "Quistes Ganglionares", href: "#especialidades" },
    { label: "Dedo en Gatillo", href: "#especialidades" },
    { label: "Artritis Reumatoide", href: "#especialidades" },
    { label: "Cirugía Mínimamente Invasiva", href: "#especialidades" },
  ]

  return (
    <footer className="bg-[#111111] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div>
              <p className="font-serif font-bold text-[#B11F2A] text-lg">
                DR. VALENTÍN LUNA
              </p>
              <p className="text-[#B8B8B8] text-xs tracking-[3px]">
                CIRUGÍA DE MANO
              </p>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Especialista en cirugía de mano y muñeca en Chihuahua, Chihuahua.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#B11F2A] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#B11F2A] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Specialties */}
          <div>
            <h3 className="font-semibold text-white mb-4">Especialidades</h3>
            <ul className="space-y-2">
              {specialties.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contacto</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>Star Médica · Consultorio 1010</li>
              <li>Chihuahua, Chihuahua</li>
              <li>
                <a href="tel:6144252100" className="hover:text-white transition-colors">
                  614 425 2100
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-colors text-sm">
                  Aviso de privacidad
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-colors text-sm">
                  Términos y condiciones
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-colors text-sm">
                  Política de cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-white/50 text-sm text-center">
            © 2025 Dr. Valentín Luna Domínguez · Cirugía de Mano. Todos los derechos reservados.
            Cédula Profesional: 6442626.
          </p>
        </div>
      </div>
    </footer>
  )
}
