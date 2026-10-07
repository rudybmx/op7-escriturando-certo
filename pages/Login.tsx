import React, { useState } from 'react';
import { Logo } from '../components/Logo';
import { Button } from '../components/Button';

interface LoginProps {
  onLogin: () => void;
}

export const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      onLogin();
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#0D0E12]">
      {/* Visual Side (Hidden on Mobile) */}
      <div className="hidden md:flex w-1/2 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80')] bg-cover bg-center relative items-center justify-center overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0E12]/95 via-[#16171E]/85 to-[#0D0E12]/70 backdrop-blur-[2px] transition-all duration-1000 group-hover:backdrop-blur-sm"></div>
        
        {/* Animated Golden Background Elements */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#F5A623] rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#D98208] rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>

        <div className="relative z-10 p-12 text-white max-w-lg animate-fade-in">
           <span className="inline-block px-3 py-1 rounded bg-[#F5A623]/20 text-[#F5A623] border border-[#F5A623]/40 text-xs font-black tracking-wider uppercase mb-6">
             Academy Oficial
           </span>
           <h1 className="text-5xl font-extrabold mb-6 leading-tight drop-shadow-lg">
             Eleve o padrão da sua franquia.
           </h1>
           <p className="text-lg text-gray-300 mb-8 drop-shadow-md leading-relaxed">
             Acesse treinamentos oficiais, rotinas fiscais, playbooks e estratégias de alta performance na rede Escriturando Certo.
           </p>
           <div className="flex gap-4">
             <div className="bg-[#16171E]/80 p-4 rounded-lg backdrop-blur border border-white/10 hover:border-[#F5A623]/40 transform transition hover:scale-105 cursor-default">
               <span className="block text-2xl font-black text-[#F5A623]">100+</span>
               <span className="text-sm text-gray-400">Aulas Práticas</span>
             </div>
             <div className="bg-[#16171E]/80 p-4 rounded-lg backdrop-blur border border-white/10 hover:border-[#F5A623]/40 transform transition hover:scale-105 cursor-default">
               <span className="block text-2xl font-black text-[#F5A623]">24/7</span>
               <span className="text-sm text-gray-400">Acesso Exclusivo</span>
             </div>
           </div>
        </div>
      </div>

      {/* Login Form Side */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-[#0D0E12]">
        <div className="w-full max-w-md space-y-8 animate-slide-up">
          <div className="text-center md:text-left">
            <div className="flex justify-center md:justify-start mb-6 transform transition hover:scale-105 duration-500">
              <Logo className="h-12 w-auto" variant="dark" />
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Portal do Franqueado</h2>
            <p className="mt-2 text-sm text-gray-400">
              Entre com suas credenciais oficiais Escriturando Certo.
            </p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="group">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 group-focus-within:text-[#F5A623] transition-colors">
                  Email Corporativo
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full px-3 py-3 bg-[#16171E] border border-[#282A36] placeholder-gray-500 text-white rounded focus:outline-none focus:ring-2 focus:ring-[#F5A623] focus:border-transparent transition-all duration-300 hover:border-[#383A48]"
                  placeholder="seu.nome@escriturandocerto.com.br"
                />
              </div>
              <div className="group">
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 group-focus-within:text-[#F5A623] transition-colors">
                  Senha
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full px-3 py-3 bg-[#16171E] border border-[#282A36] placeholder-gray-500 text-white rounded focus:outline-none focus:ring-2 focus:ring-[#F5A623] focus:border-transparent transition-all duration-300 hover:border-[#383A48]"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-[#F5A623] focus:ring-[#F5A623] border-gray-600 rounded bg-[#16171E] cursor-pointer"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-400 cursor-pointer hover:text-gray-300">
                  Lembrar acesso
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-[#F5A623] hover:text-[#FBBE4B] transition-colors">
                  Esqueceu a senha?
                </a>
              </div>
            </div>

            <div>
              <Button type="submit" className="w-full py-3.5 text-lg">
                Entrar no Portal
              </Button>
            </div>
            
             <div className="p-3 bg-[#F5A623]/10 border border-[#F5A623]/30 rounded text-center transform hover:scale-[1.01] transition-transform duration-300">
                <p className="text-xs text-amber-200">
                  <span className="font-bold text-[#F5A623]">Modo Demonstração:</span> Utilize qualquer e-mail e senha para navegar.
                </p>
             </div>
          </form>
          
          <div className="mt-6 text-center">
             <p className="text-xs text-gray-500 hover:text-gray-400 transition-colors cursor-pointer">
               Problemas com acesso? Contate o suporte em suporte@escriturandocerto.com.br
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};