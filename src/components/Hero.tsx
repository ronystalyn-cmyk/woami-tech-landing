import React from 'react';
import { ArrowRight, Search, Briefcase } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1672581437674-3186b17b405a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdXJwbGUlMjBmdXR1cmlzdGljJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjQyNjQ5NDN8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Futuristic tech background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-purple-950/80 to-slate-950"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <div className="mb-6">
            <h1 className="text-white mb-4">
              WOAMI <span className="text-purple-400">TECH</span>
            </h1>
            <p className="text-slate-200 text-2xl md:text-3xl">
              Conectando servicios técnicos con clientes de forma inmediata
            </p>
          </div>

          {/* Subheading */}
          <p className="text-slate-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            Servicios verificados, precios claros y soporte digital en un solo lugar
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg shadow-purple-500/30 flex items-center justify-center gap-2">
              <Search className="w-5 h-5" />
              Necesito un técnico
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-slate-800/50 border-2 border-purple-500/50 text-white rounded-lg hover:bg-slate-800 hover:border-purple-400 transition-all flex items-center justify-center gap-2">
              <Briefcase className="w-5 h-5" />
              Quiero ofrecer mis servicios
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-purple-400 text-4xl mb-2">500+</div>
              <div className="text-slate-300">Técnicos Verificados</div>
            </div>
            <div className="text-center">
              <div className="text-purple-400 text-4xl mb-2">10k+</div>
              <div className="text-slate-300">Servicios Completados</div>
            </div>
            <div className="text-center">
              <div className="text-purple-400 text-4xl mb-2">4.8★</div>
              <div className="text-slate-300">Calificación Promedio</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent"></div>
    </section>
  );
}
