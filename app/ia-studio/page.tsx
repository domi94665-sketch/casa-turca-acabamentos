'use client';

import { useState } from 'react';
import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import Button from '@/components/Button';
import { Upload, Zap, ArrowRight } from 'lucide-react';

export default function IAStudioPage() {
  const [isDragging, setIsDragging] = useState(false);
  const [image, setImage] = useState<string | null>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files && files[0]) {
      handleImageSelect(files[0]);
    }
  };

  const handleImageSelect = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setImage(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleImageSelect(e.target.files[0]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f1115] via-[#050608] to-[#0b0d10]">
      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-20 px-6 md:pt-32 md:pb-32">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#1CA7A1]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#1CA7A1]/3 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <div className="space-y-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37] mb-4">
                Tecnologia IA
              </p>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-6">
                IA Studio
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl">
                Carregue uma foto do seu espaço e deixe a inteligência artificial gerar sugestões de design com acabamentos premium em segundos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upload Section */}
      <section className="relative py-24 px-6">
        <div className="mx-auto max-w-4xl">
          {!image ? (
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`relative p-12 rounded-2xl border-2 border-dashed transition-all duration-300 cursor-pointer ${
                isDragging
                  ? 'border-[#1CA7A1] bg-[#1CA7A1]/10'
                  : 'border-[#1CA7A1]/30 bg-gradient-to-br from-[#1CA7A1]/5 to-transparent hover:border-[#1CA7A1]/50'
              }`}
            >
              <input
                type="file"
                accept="image/*"
                onChange={handleInputChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
              <div className="text-center">
                <div className="inline-block p-4 rounded-full bg-[#1CA7A1]/20 mb-4">
                  <Upload size={32} className="text-[#1CA7A1]" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">
                  Carregue uma imagem do seu espaço
                </h3>
                <p className="text-gray-400 mb-4">
                  Arraste e solte uma foto ou clique para selecionar
                </p>
                <p className="text-xs text-gray-500">
                  Formatos aceitos: JPG, PNG, WebP (máx 10MB)
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="relative rounded-2xl overflow-hidden border border-[#1CA7A1]/30">
                <img src={image} alt="Espaço carregado" className="w-full h-auto" />
                <button
                  onClick={() => setImage(null)}
                  className="absolute top-4 right-4 px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-full text-sm transition"
                >
                  Trocar Imagem
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-white mb-3">
                    Estilo Preferido
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg bg-[#0f1115] border border-[#1CA7A1]/20 text-white focus:border-[#1CA7A1] focus:outline-none transition">
                    <option>Moderno Luxo</option>
                    <option>Clássico Elegante</option>
                    <option>Minimalista Premium</option>
                    <option>Contemporâneo</option>
                    <option>Vintage Refinado</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white mb-3">
                    Paleta de Cores
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg bg-[#0f1115] border border-[#1CA7A1]/20 text-white focus:border-[#1CA7A1] focus:outline-none transition">
                    <option>Cores Quentes</option>
                    <option>Cores Frias</option>
                    <option>Tons Neutros</option>
                    <option>Cores Vibrantes</option>
                    <option>Monocromático</option>
                  </select>
                </div>
              </div>

              <button
                onClick={() => {
                  alert('Em desenvolvimento! Integração com IA em breve.');
                }}
                className="w-full px-8 py-4 bg-[#1CA7A1] hover:bg-[#1CA7A1]/90 text-white font-semibold rounded-lg transition duration-300 shadow-lg shadow-[#1CA7A1]/20 hover:shadow-xl hover:shadow-[#1CA7A1]/30 flex items-center justify-center gap-2"
              >
                <Zap size={20} />
                Gerar Sugestões com IA
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Features */}
      <section className="relative py-24 px-6 bg-gradient-to-r from-[#0f1115] via-[#1CA7A1]/5 to-[#050608]">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            subtitle="Recursos"
            title="O que o IA Studio oferece"
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Upload Rápido',
                desc: 'Carregue sua foto em segundos. Processo simples e intuitivo.',
                icon: '⚡',
              },
              {
                title: 'Sugestões em Tempo Real',
                desc: 'Visualize múltiplas opções de design geradas por IA em instantes.',
                icon: '🤖',
              },
              {
                title: 'Múltiplos Estilos',
                desc: 'Explore diferentes estilos: Moderno, Clássico, Minimalista e mais.',
                icon: '🎨',
              },
              {
                title: 'Paletas Personalizadas',
                desc: 'Escolha cores que combinam com sua personalidade e espaço.',
                icon: '🎭',
              },
              {
                title: 'Salve Inspirações',
                desc: 'Guarde seus designs favoritos para referência futura.',
                icon: '💾',
              },
              {
                title: 'Compartilhe Facilmente',
                desc: 'Envie suas inspirações para nossos designers executarem.',
                icon: '📤',
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="p-8 rounded-xl border border-[#1CA7A1]/20 hover:border-[#1CA7A1]/50 bg-gradient-to-br from-[#1CA7A1]/5 to-transparent hover:from-[#1CA7A1]/10 transition duration-300"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="relative py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeader subtitle="Processo" title="Como Funciona" centered />

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Upload', desc: 'Carregue uma foto do seu espaço' },
              { step: '2', title: 'Escolha', desc: 'Selecione estilo e paleta de cores' },
              { step: '3', title: 'Gere', desc: 'IA cria múltiplas sugestões' },
              { step: '4', title: 'Implemente', desc: 'Contratar designer para executar' },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#1CA7A1] to-[#D4AF37] flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Próximo Passo */}
      <section className="relative py-20 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Gostou da Sugestão?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Contrate nossos designers para transformar sua visualização em realidade.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/servicos"
              className="px-8 py-4 bg-[#1CA7A1] hover:bg-[#1CA7A1]/90 text-white font-semibold rounded-full transition duration-300 shadow-lg shadow-[#1CA7A1]/20 hover:shadow-xl hover:shadow-[#1CA7A1]/30 inline-flex items-center gap-2"
            >
              Explorar Serviços <ArrowRight size={18} />
            </Link>
            <Link
              href="/contacto"
              className="px-8 py-4 border border-[#1CA7A1] text-[#1CA7A1] hover:bg-[#1CA7A1]/10 font-semibold rounded-full transition duration-300 inline-flex items-center gap-2"
            >
              Agendar Consulta
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
