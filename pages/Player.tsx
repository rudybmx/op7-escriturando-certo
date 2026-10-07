import React from 'react';
import { ArrowLeft, Download, FileText, Share2, ThumbsUp, PlayCircle } from 'lucide-react';
import { Course } from '../types';
import { MATERIALS } from '../constants';
import { Logo } from '../components/Logo';

interface PlayerProps {
  course: Course;
  onBack: () => void;
}

export const Player: React.FC<PlayerProps> = ({ course, onBack }) => {
  return (
    <div className="min-h-screen bg-[#0D0E12] pt-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-[#F5A623] mb-6 transition-colors font-medium text-sm"
        >
          <ArrowLeft size={18} />
          Voltar para Início
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Video Player Placeholder */}
            <div className="aspect-video w-full bg-black rounded-xl overflow-hidden shadow-2xl relative group border border-white/10">
              <div className="absolute inset-0">
                <img 
                  src={course.thumbnail} 
                  alt="Video Placeholder" 
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0E12] via-[#0D0E12]/60 to-[#0D0E12]/20 mix-blend-multiply opacity-85" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#F5A623]/25 to-transparent" />
                
                <div className="absolute inset-0 flex flex-col p-8 z-10">
                  <Logo className="h-8 md:h-11 w-fit drop-shadow-xl" variant="dark" />
                  <div className="mt-auto mb-6">
                    <span className="text-sm uppercase tracking-[0.2em] text-[#F5A623] font-bold">Curso Oficial</span>
                    <h4 className="text-4xl md:text-6xl font-extrabold text-white leading-none tracking-tight drop-shadow-xl mt-2 max-w-3xl">
                      {course.coverText || course.title}
                    </h4>
                  </div>
                </div>
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-20 h-20 bg-[#F5A623] rounded-full flex items-center justify-center shadow-[0_0_35px_rgba(245,166,35,0.65)] cursor-pointer hover:scale-110 hover:bg-[#FBBE4B] transition-transform">
                  <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[22px] border-l-neutral-950 border-b-[12px] border-b-transparent ml-2"></div>
                </div>
              </div>
              
              {/* Fake player controls bar */}
              <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-black to-transparent px-4 flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                 <div className="w-full h-1.5 bg-gray-700 rounded-full cursor-pointer relative">
                    <div className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-[#F5A623] to-[#FBBE4B] rounded-full"></div>
                 </div>
              </div>
            </div>

            <div>
              <div className="flex items-start justify-between">
                <div>
                   <h1 className="text-3xl font-bold text-white mb-2">{course.title}</h1>
                   <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                     <span className="text-[#F5A623] font-bold">98% Match</span>
                     <span>{course.duration}</span>
                     <span className="border border-[#F5A623]/30 px-1.5 py-0.5 rounded text-xs text-[#F5A623]">HD</span>
                     <span>{course.category}</span>
                   </div>
                </div>
                <div className="flex gap-3">
                   <button className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-[#F5A623] transition">
                      <ThumbsUp size={20} />
                   </button>
                   <button className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-[#F5A623] transition">
                      <Share2 size={20} />
                   </button>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed text-lg">
                {course.description}
              </p>
            </div>
          </div>

          {/* Sidebar: Materials & Modules */}
          <div className="space-y-6">
             {/* Progress Card */}
             <div className="bg-[#16171E] p-6 rounded-xl border border-[#282A36]">
                <h3 className="text-white font-semibold mb-4">Seu Progresso</h3>
                <div className="w-full h-2.5 bg-gray-800 rounded-full mb-2">
                  <div className="h-full bg-gradient-to-r from-[#F5A623] to-[#D98208] rounded-full shadow-sm" style={{ width: '35%' }}></div>
                </div>
                <p className="text-right text-xs text-[#F5A623] font-semibold">35% Concluído</p>
             </div>

             {/* Materials Download */}
             <div className="bg-[#16171E] p-6 rounded-xl border border-[#282A36]">
                <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <Download size={18} className="text-[#F5A623]" />
                  Materiais de Apoio
                </h3>
                <div className="space-y-3">
                  {MATERIALS.map((mat) => (
                    <div key={mat.id} className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-[#20222B] hover:border-[#F5A623]/30 border border-transparent transition-all cursor-pointer group">
                      <div className="flex items-center gap-3">
                        <FileText size={20} className="text-gray-400 group-hover:text-[#F5A623] transition-colors" />
                        <div>
                          <p className="text-sm font-medium text-gray-200 group-hover:text-white">{mat.title}</p>
                          <p className="text-xs text-gray-500">{mat.type} • {mat.size}</p>
                        </div>
                      </div>
                      <Download size={16} className="text-gray-500 group-hover:text-[#F5A623] transition-colors" />
                    </div>
                  ))}
                </div>
             </div>

             {/* Next Up/Related */}
             <div className="bg-[#16171E] p-6 rounded-xl border border-[#282A36]">
                <h3 className="text-white font-semibold mb-4">A seguir</h3>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                     <div key={i} className="flex gap-3 cursor-pointer group opacity-80 hover:opacity-100 transition-opacity">
                        <div className="w-24 h-14 bg-gray-800 rounded-md overflow-hidden relative flex-shrink-0 border border-white/5 group-hover:border-[#F5A623]/40 transition-colors">
                           <img src={`https://picsum.photos/seed/rel${i}/200/120`} className="w-full h-full object-cover" />
                           <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors">
                              <PlayCircle size={18} className="text-white group-hover:text-[#F5A623] transition-colors" />
                           </div>
                        </div>
                        <div>
                           <h4 className="text-sm text-gray-200 leading-tight mb-1 group-hover:text-[#F5A623] transition-colors font-medium">Módulo {i + 1}: Estratégias Avançadas</h4>
                           <span className="text-xs text-gray-500">12 min</span>
                        </div>
                     </div>
                  ))}
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};