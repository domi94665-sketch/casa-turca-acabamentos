'use client';

import { useState, type ChangeEvent, useEffect } from 'react';
import { FiUploadCloud, FiLoader } from 'react-icons/fi';

interface DesignResult {
  id: string;
  imageUrl: string;
}

export default function IAUploadForm() {
  const [fileName, setFileName] = useState<string | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<'idle' | 'uploading' | 'processing' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [designResults, setDesignResults] = useState<DesignResult[]>([]);
  const [leadId, setLeadId] = useState<string>('');

  useEffect(() => {
    // Get lead ID from session
    const id = sessionStorage.getItem('leadId');
    if (id) setLeadId(id);
  }, []);

  const handleFile = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (!selectedFile) return;

    // Validate file size (max 25MB)
    if (selectedFile.size > 25 * 1024 * 1024) {
      setErrorMsg('Ficheiro muito grande. Máximo 25MB.');
      return;
    }

    setFile(selectedFile);
    setFileName(selectedFile.name);
    setErrorMsg('');

    // Create preview for images
    if (selectedFile.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreview(e.target?.result as string);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setPreview(null);
    }
  };

  const handleSubmit = async () => {
    if (!file || !leadId) {
      setErrorMsg('Ficheiro ou ID de lead inválido.');
      return;
    }

    setStatus('uploading');
    setErrorMsg('');

    try {
      // Step 1: Upload file to Supabase Storage (or similar)
      const formData = new FormData();
      formData.append('file', file);
      formData.append('leadId', leadId);

      // TODO: Implement actual file upload to Supabase storage
      // For now, we'll simulate the upload
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Step 2: Process with Replicate AI
      setStatus('processing');
      const imageUrl = preview || 'https://via.placeholder.com/512'; // Use preview or placeholder

      const processResponse = await fetch('/api/designer-ia/process', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          imageUrl,
          style: 'Luxury Modern',
        }),
      });

      if (!processResponse.ok) {
        throw new Error('Failed to process image');
      }

      const { output } = await processResponse.json();

      // Step 3: Notify sales team
      await fetch('/api/designer-ia/notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          leadId,
          imageUrl,
          designOutput: output,
        }),
      });

      // Add result to display
      setDesignResults((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          imageUrl: typeof output === 'string' ? output : (output?.[0] || imageUrl),
        },
      ]);

      setStatus('success');
      setFile(null);
      setFileName(null);
      setPreview(null);

      // Reset form after 3 seconds
      setTimeout(() => {
        setStatus('idle');
        setDesignResults([]);
      }, 3000);
    } catch (err) {
      console.error('Upload error:', err);
      setErrorMsg(err instanceof Error ? err.message : 'Erro ao processar. Tente novamente.');
      setStatus('error');
    }
  };

  return (
    <div className="space-y-8">
      <div className="rounded-3xl border border-dashed border-gold/40 bg-white/60 p-10 text-center shadow-2xl">
        <label
          htmlFor="project-upload"
          className="flex cursor-pointer flex-col items-center justify-center gap-4 rounded-2xl border border-gold/30 bg-[#f8f7f4]/70 px-10 py-14 text-charcoal transition hover:-translate-y-1 hover:border-gold hover:shadow-xl disabled:opacity-50"
        >
          {status === 'processing' ? (
            <FiLoader className="h-10 w-10 animate-spin text-gold" />
          ) : (
            <FiUploadCloud className="h-10 w-10 text-gold" />
          )}
          <div>
            <p className="font-serif text-2xl">
              {status === 'processing' ? 'A processar design…' : 'Carregar moodboard ou planta'}
            </p>
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
            disabled={status !== 'idle'}
          />
        </label>
        {fileName && (
          <p className="mt-6 text-sm text-turquoise">
            Ficheiro selecionado: {fileName}
          </p>
        )}
        {errorMsg && <p className="mt-6 text-sm text-red-600">{errorMsg}</p>}
      </div>

      {preview && (
        <div className="rounded-3xl border border-gold/30 bg-white p-6 shadow-xl">
          <p className="mb-4 text-sm font-semibold text-charcoal">Pré-visualização:</p>
          <img
            src={preview}
            alt="Preview"
            className="mx-auto max-h-64 rounded-lg object-cover"
          />
        </div>
      )}

      {file && status === 'idle' && (
        <button
          onClick={handleSubmit}
          className="w-full rounded-full border border-gold bg-gold px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-charcoal shadow-xl transition hover:-translate-y-0.5 hover:shadow-2xl disabled:opacity-50"
        >
          Gerar Design com IA
        </button>
      )}

      {status === 'success' && designResults.length > 0 && (
        <div className="space-y-6 rounded-3xl border border-green-500/30 bg-green-50 p-8 shadow-xl">
          <p className="text-center font-semibold text-green-700">✓ Design gerado com sucesso!</p>
          <div className="grid gap-4 md:grid-cols-2">
            {designResults.map((result) => (
              <img
                key={result.id}
                src={result.imageUrl}
                alt="Design gerado"
                className="rounded-lg object-cover shadow-lg"
              />
            ))}
          </div>
          <p className="text-sm text-charcoal/70">
            A nossa equipa de vendas foi notificada e entrará em contacto em breve com propostas personalizadas.
          </p>
        </div>
      )}

      <div className="rounded-3xl border border-gold/20 bg-charcoal text-[#f8f7f4]/80 p-8 text-left shadow-xl">
        <h3 className="font-serif text-2xl text-gold">Como irá funcionar</h3>
        <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm">
          <li>Carregue os elementos do seu projeto.</li>
          <li>A IA processa a imagem com os nossos acabamentos de luxo.</li>
          <li>Receba renders personalizados com visualizações de design.</li>
          <li>A nossa equipa de vendas apresenta propostas customizadas.</li>
        </ol>
      </div>
    </div>
  );
}
 
