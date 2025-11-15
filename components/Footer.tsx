import Link from 'next/link';

const footerLinks = [
  {
    heading: 'Marca',
    items: [
      { label: 'Sobre a Casa Turca', href: '/sobre' },
      { label: 'Serviços premium', href: '/servicos' },
      { label: 'Portefólio', href: '/portfolio' },
    ],
  },
  {
    heading: 'Experiência',
    items: [
      { label: 'IA Studio', href: '/ia-studio' },
      { label: 'Programa para parceiros', href: '/parceiros' },
      { label: 'Contacto', href: '/contacto' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-midnight/95 text-white/70">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-[1.2fr,1fr]">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-teal to-gold text-sm font-semibold text-midnight shadow-lg">
                CT
              </span>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.26em] text-white/80">Casa Turca</p>
                <p className="text-[11px] uppercase tracking-[0.24em] text-white/40">Acabamentos &amp; Design</p>
              </div>
            </div>
            <p className="max-w-md text-sm text-white/60">
              Transformamos o seu espaço em um design de luxo, sem stress. Projetos completos com móveis sob medida,
              tecnologia de IA e gestão chave na mão para clientes exigentes em Luanda e nas principais cidades de Angola.
            </p>
            <div className="grid gap-3 text-[11px] uppercase tracking-[0.24em] text-white/50 sm:grid-cols-2">
              <div>
                <p className="text-white/40">Morada</p>
                <p className="text-white/70">Av. Mortala Mohamed, Luanda</p>
              </div>
              <div>
                <p className="text-white/40">Contacto</p>
                <p className="text-white/70">+244 946 654 528</p>
              </div>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {footerLinks.map((column) => (
              <div key={column.heading} className="space-y-3">
                <h4 className="text-sm font-semibold uppercase tracking-[0.26em] text-white/50">{column.heading}</h4>
                <ul className="space-y-2 text-[13px] text-white/70">
                  {column.items.map((item) => (
                    <li key={item.href}>
                      <Link className="transition hover:text-white" href={item.href}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 bg-black/60 py-4">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 text-[11px] text-white/45 md:flex-row">
          <p>© {new Date().getFullYear()} Casa Turca Acabamentos. Todos os direitos reservados.</p>
          <p>Luanda • Projetos premium para residências, escritórios e lojas.</p>
        </div>
      </div>
    </footer>
  );
}
