import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-gold/10 bg-charcoal text-[#f8f7f4]">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm space-y-4">
          <h3 className="font-serif text-2xl text-gold">A Casa Turca Acabamentos</h3>
          <p className="text-sm leading-relaxed text-[#f8f7f4]/80">
            Atelier de acabamentos de luxo com curadoria turca, tecnologia de ponta e atenção artesanal em cada detalhe.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 text-sm md:grid-cols-3">
          <div>
            <h4 className="mb-3 font-serif text-lg text-gold">Contactos</h4>
            <p className="text-[#f8f7f4]/70">Luanda, Angola</p>
            <p className="text-[#f8f7f4]/70">+244 923 000 000</p>
            <p className="text-[#f8f7f4]/70">luxo@acasaturca.com</p>
          </div>
          <div>
            <h4 className="mb-3 font-serif text-lg text-gold">Explorar</h4>
            <ul className="space-y-2 text-[#f8f7f4]/70">
              <li>
                <Link href="/portfolio" className="transition hover:text-gold">
                  Portefólio
                </Link>
              </li>
              <li>
                <Link href="/designer-ia" className="transition hover:text-gold">
                  Designer IA
                </Link>
              </li>
              <li>
                <Link href="/ferramenta-ia" className="transition hover:text-gold">
                  Ferramenta IA
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-serif text-lg text-gold">Horário</h4>
            <p className="text-[#f8f7f4]/70">Seg - Sex: 09h - 18h</p>
            <p className="text-[#f8f7f4]/70">Sáb: 10h - 14h</p>
          </div>
        </div>
      </div>
      <div className="border-t border-gold/20 bg-charcoal/80 py-4 text-center text-xs text-[#f8f7f4]/60">
        © {new Date().getFullYear()} A Casa Turca Acabamentos. Todos os direitos reservados.
      </div>
    </footer>
  );
}
