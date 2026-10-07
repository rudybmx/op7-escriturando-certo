import React from 'react';
import { Play, Info } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { SectionRow } from '../components/SectionRow';
import { Button } from '../components/Button';
import { Logo } from '../components/Logo';
import { COURSES, FEATURED_COURSE } from '../constants';
import { Category, Course } from '../types';

interface DashboardProps {
  onCourseSelect: (course: Course) => void;
  onLogout: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onCourseSelect, onLogout }) => {
  
  // Group courses by category for rows
  const getCoursesByCategory = (cat: Category) => COURSES.filter(c => c.category === cat);
  
  // Simulated "My List" - just reusing some courses
  const myList = COURSES.slice(0, 3);

  return (
    <div className="bg-[#0D0E12] min-h-screen pb-20 overflow-x-hidden">
      <Navbar onLogout={onLogout} />

      {/* Hero Section */}
      <div className="relative h-[85vh] w-full">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={FEATURED_COURSE.thumbnail} 
            alt="Hero" 
            className="w-full h-full object-cover"
          />
          {/* Gradients to blend image into background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D0E12] via-[#0D0E12]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0E12] via-[#0D0E12]/20 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 w-full p-4 md:p-12 pb-32 md:pb-48 z-10 flex flex-col justify-end h-full max-w-3xl">
          <span className="inline-block bg-gradient-to-r from-[#F5A623] to-[#D98208] text-neutral-950 text-xs font-black px-3.5 py-1 rounded shadow-lg mb-4 w-max uppercase tracking-wider border border-amber-300/40">
             Em Destaque
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-xl leading-tight">
            {FEATURED_COURSE.title}
          </h1>
          <p className="text-base md:text-lg text-gray-200 mb-8 drop-shadow-md line-clamp-3">
            {FEATURED_COURSE.description}
          </p>
          
          <div className="flex items-center gap-4">
            <Button 
              onClick={() => onCourseSelect(FEATURED_COURSE)} 
              className="bg-[#F5A623] text-neutral-950 hover:bg-[#FBBE4B] font-extrabold border-none px-8 py-3 text-lg shadow-xl shadow-amber-500/20"
              icon={<Play fill="currentColor" size={24} />}
            >
              Assistir
            </Button>
            <Button 
              variant="glass"
              className="px-8 py-3 text-lg"
              icon={<Info size={24} />}
            >
              Mais Informações
            </Button>
          </div>
        </div>
      </div>

      {/* Content Rows - Pull up over the hero slightly */}
      <div className="relative z-20 -mt-20 md:-mt-32 pl-4 md:pl-0 space-y-4">
        
        <SectionRow 
          title="Minha Lista" 
          courses={myList} 
          onCourseClick={onCourseSelect} 
        />

        <SectionRow 
          title="Onboarding do Franqueado" 
          courses={getCoursesByCategory(Category.ONBOARDING)} 
          onCourseClick={onCourseSelect} 
        />

        <SectionRow 
          title="Marketing & Performance" 
          courses={getCoursesByCategory(Category.MARKETING)} 
          onCourseClick={onCourseSelect} 
        />

        <SectionRow 
          title="Vendas & Prospecção" 
          courses={getCoursesByCategory(Category.VENDAS)} 
          onCourseClick={onCourseSelect} 
        />

        <SectionRow 
          title="Tecnologia & IA" 
          courses={getCoursesByCategory(Category.TECH)} 
          onCourseClick={onCourseSelect} 
        />

      </div>
      
      {/* Footer */}
      <div className="mt-20 px-12 py-10 flex flex-col items-center text-center text-gray-400 text-sm border-t border-[#282A36]">
        <div className="mb-6 opacity-90 hover:opacity-100 transition-opacity">
           <Logo className="h-9" variant="dark" />
        </div>
        <p className="mb-2 text-gray-400">© 2024 Escriturando Certo. Todos os direitos reservados.</p>
        <p className="text-gray-500 text-xs">Portal exclusivo para franqueados • Treinamento, métodos e alta performance.</p>
      </div>
    </div>
  );
};