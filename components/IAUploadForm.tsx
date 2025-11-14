'use client';

import { useState, type ChangeEvent } from 'react';
import { FiUploadCloud } from 'react-icons/fi';

export default function IAUploadForm() {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setFileName(file.name);
    console.info('Preparar chamada à API Replicate com', file.name);
  };

  return (
    <div className="space-y-8">
      <div className="rounded-3xl border border-dashed border-gold/40 bg-white/60 p-10 text-center shadow-2xl">
        <label
          htmlFor="project-upload"
          className="flex cursor-pointer flex-col items-center justify-center gap-4 rounded-2xl border border-gold/30 bg-[#f8f7f4]/70 px-10 py-14 text-charcoal transition hover:-translate-y-1 hover:border-gold hover:shadow-xl"
        >
          <FiUploadCloud className="h-10 w-10 text-gold" />
          <div>
            <p className="font-serif text-2xl">Carregar moodboard ou planta</p>
            <p className="mt-2 text-sm text-charcoal/70">
              Arraste e largue ou clique para carregar ficheiros .jpg, .png, .pdf (máx. 25MB)
            </p>
          </div>
          <input
            id="project-upload"
            type="file"
            accept="image/*,application/pdf"
            className="hidden"
            onChange={handleFile}
          />
        </label>
        {fileName && <p className="mt-6 text-sm text-turquoise">Ficheiro pronto: {fileName}</p>}
      </div>
      <div className="rounded-3xl border border-gold/20 bg-charcoal text-[#f8f7f4]/80 p-8 text-left shadow-xl">
        <h3 className="font-serif text-2xl text-gold">Como irá funcionar</h3>
        <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm">
          <li>Carregue os elementos do seu projeto.</li>
          <li>Selecione a ambiência e materiais (em breve).</li>
          <li>Receba renders gerados com inteligência artificial.</li>
        </ol>
      </div>
    </div>
  );
}
