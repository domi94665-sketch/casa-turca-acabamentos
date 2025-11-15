import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-[#1CA7A1]/10 bg-gradient-to-b from-[#0b0d10] to-[#050608] text-gray-300">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#1CA7A1] to-[#D4AF37] flex items-center justify-center font-bold text-white">
                CT
              </div>
              <div>
                <p className="font-bold text-white">Casa Turca</p>
                <p className="text-xs text-[#1CA7A1]">Premium Acabamentos</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Transformamos espaços em design de luxo, sem stress. Acabamentos premium, design inteligente, gestão total.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Navegação</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/sobre" className="text-gray-400 hover:text-[#1CA7A1] transition duration-300">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-gray-400 hover:text-[#1CA7A1] transition duration-300">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-400 hover:text-[#1CA7A1] transition duration-300">
                  Portfólio
                </Link>
              </li>
              <li>
                <Link href="/ia-studio" className="text-gray-400 hover:text-[#1CA7A1] transition duration-300">
                  IA Studio
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-white mb-4">Recursos</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/parceiros" className="text-gray-400 hover:text-[#1CA7A1] transition duration-300">
                  Parceiros
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-400 hover:text-[#1CA7A1] transition duration-300">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contacto</h4>
            <div className="space-y-3 text-sm">
              <a href="tel:+244923000000" className="flex items-center gap-2 text-gray-400 hover:text-[#1CA7A1] transition duration-300">
                <Phone size={16} />
                +244 923 000 000
              </a>
              <a href="mailto:contacto@casaturca.ao" className="flex items-center gap-2 text-gray-400 hover:text-[#1CA7A1] transition duration-300">
                <Mail size={16} />
                contacto@casaturca.ao
              </a>
              <div className="flex items-start gap-2 text-gray-400">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>Luanda, Angola</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#1CA7A1]/10 py-8">
          <p className="text-center text-xs text-gray-500">
            © {new Date().getFullYear()} Casa Turca Acabamentos. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
