import GatedForm from '@/components/GatedForm';

export default function DesignerIAPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#d4af37,transparent_60%)] opacity-30" aria-hidden />
      <div className="relative mx-auto flex max-w-5xl flex-col gap-12 px-6 py-24 text-center md:text-left">
        <div className="space-y-6 text-charcoal">
          <p className="text-xs uppercase tracking-[0.4em] text-gold">Acesso exclusivo</p>
          <h1 className="font-serif text-5xl leading-tight">Liberte o Designer IA da Casa Turca</h1>
          <p className="text-base text-charcoal/70 md:text-lg">
            Validamos cada contacto para garantir que a tecnologia proprietária chega a clientes e parceiros alinhados com o nosso padrão de luxo. Preencha o formulário e a nossa concierge digital fará a ativação.
          </p>
        </div>
        <div className="mx-auto w-full max-w-2xl md:mx-0">
          <GatedForm />
        </div>
      </div>
    </div>
  );
}
