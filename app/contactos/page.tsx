import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-16 px-6 py-20">
      <div className="grid gap-12 md:grid-cols-[1.2fr,1fr] md:items-start">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-gold">Vamos conversar</p>
          <h1 className="font-serif text-5xl text-charcoal">Contactos Casa Turca</h1>
          <p className="text-base text-charcoal/70">
            Agende uma visita ao nosso showroom em Luanda ou solicite uma reunião virtual. Estamos prontos para desenhar experiências de luxo personalizadas.
          </p>
          <div className="rounded-3xl border border-gold/20 bg-white/80 p-6 shadow-lg">
            <h2 className="font-serif text-2xl text-charcoal">Dados da empresa</h2>
            <ul className="mt-4 space-y-3 text-sm text-charcoal/70">
              <li><strong className="text-charcoal">Endereço:</strong> Rua das Acácias, Bairro Talatona, Luanda</li>
              <li><strong className="text-charcoal">Telefone:</strong> +244 923 000 000</li>
              <li><strong className="text-charcoal">Email:</strong> luxo@acasaturca.com</li>
              <li><strong className="text-charcoal">Horário:</strong> Seg-Sex 09h-18h · Sáb 10h-14h</li>
            </ul>
          </div>
        </div>
        <ContactForm />
      </div>
      <div className="overflow-hidden rounded-3xl border border-gold/20 shadow-xl">
        <iframe
          title="Localização A Casa Turca Acabamentos"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.881258061476!2d13.236962775855289!3d-8.911781290231755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f29cc068e45d%3A0x9b1ad8eaf5beb0d0!2sTalatona%2C%20Luanda!5e0!3m2!1spt-PT!2sao!4v1712850000000!5m2!1spt-PT!2sao"
          className="h-96 w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
