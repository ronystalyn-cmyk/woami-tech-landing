import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import logo from 'figma:asset/dd0d48e0993e9188ed52fd19a13cd60960f8ea71.png';

export function Footer() {
  return (
    <footer id="contacto" className="bg-slate-950 border-t border-purple-500/20 pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="WOAMI TECH" className="w-10 h-10 object-contain" />
              <span className="text-white text-2xl tracking-tight">
                WOAMI <span className="text-purple-400">TECH</span>
              </span>
            </div>
            <p className="text-slate-400 mb-6">
              Conectando servicios técnicos con clientes de forma inmediata y confiable.
            </p>
            {/* Social Media */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 hover:bg-purple-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 hover:bg-purple-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 hover:bg-purple-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Enlaces rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#inicio" className="text-slate-400 hover:text-purple-400 transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="text-slate-400 hover:text-purple-400 transition-colors">
                  Cómo funciona
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-slate-400 hover:text-purple-400 transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#tecnicos" className="text-slate-400 hover:text-purple-400 transition-colors">
                  Para técnicos
                </a>
              </li>
              <li>
                <a href="#faq" className="text-slate-400 hover:text-purple-400 transition-colors">
                  Preguntas frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors">
                  Términos y condiciones
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors">
                  Política de privacidad
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors">
                  Política de garantía
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors">
                  Derecho de retracto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-slate-400">Email</div>
                  <a href="mailto:info@woamitech.com" className="text-white hover:text-purple-400 transition-colors">
                    info@woamitech.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-slate-400">Teléfono</div>
                  <a href="tel:+50312345678" className="text-white hover:text-purple-400 transition-colors">
                    +503 1234-5678
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-slate-400">Ubicación</div>
                  <div className="text-white">San Salvador, El Salvador</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-400 text-sm text-center md:text-left">
              © 2024 WOAMI TECH SAS DE CV. Todos los derechos reservados.
            </div>
            <div className="text-slate-400 text-sm text-center md:text-right">
              NIT: 0623-260825-109-0 NCR: 369547-1
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
