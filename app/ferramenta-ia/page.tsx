import IAUploadForm from '@/components/IAUploadForm';

export default function FerramentaIAPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-12 px-6 py-24">
      <div className="space-y-6 text-center text-charcoal">
        <p className="text-xs uppercase tracking-[0.4em] text-gold">Laboratório criativo</p>
        <h1 className="font-serif text-5xl">Ferramenta IA Casa Turca</h1>
        <p className="mx-auto max-w-2xl text-base text-charcoal/70">
          Faça o upload dos seus moodboards, plantas ou referências e prepararemos visualizações assistidas por inteligência artificial para acelerar decisões de materiais e acabamentos.
        </p>
      </div>
      <IAUploadForm />
    </div>
  );
}
