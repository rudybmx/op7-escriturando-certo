import React from 'react';
import { PlayCircle, Info } from 'lucide-react';
import { Course } from '../types';
import { Logo } from './Logo';

interface CourseCardProps {
  course: Course;
  onClick: (course: Course) => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, onClick }) => {
  return (
    <div 
      className="relative group min-w-[280px] h-[160px] md:min-w-[320px] md:h-[180px] rounded-lg overflow-hidden cursor-pointer transition-all duration-500 hover:z-20 hover:scale-110 hover:shadow-[0_0_30px_rgba(245,166,35,0.35)] bg-[#16171E] ring-0 hover:ring-2 hover:ring-[#F5A623]/50 border border-white/5 hover:border-transparent"
      onClick={() => onClick(course)}
    >
      <div className="absolute inset-0">
        <img 
          src={course.thumbnail} 
          alt={course.title} 
          className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300"
        />
        {/* Cover Overlay - Dark gradient with warm amber undertones */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0E12] via-[#0D0E12]/60 to-[#0D0E12]/20 mix-blend-multiply opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F5A623]/20 via-transparent to-transparent" />
        
        {/* Cover Content */}
        <div className="absolute inset-0 flex flex-col p-4 z-10 transition-opacity duration-300 group-hover:opacity-0">
          <Logo className="h-5 drop-shadow-md" variant="dark" showAcademyBadge={false} />
          <div className="mt-auto mb-1">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#F5A623] font-bold">Treinamento</span>
            <h4 className="text-xl md:text-2xl font-extrabold text-white leading-none tracking-tight drop-shadow-lg">
              {course.coverText || course.title}
            </h4>
          </div>
        </div>
      </div>
      
      {/* Progress Bar (if started) */}
      {course.progress > 0 && course.progress < 100 && (
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-800 z-10">
          <div 
            className="h-full bg-gradient-to-r from-[#F5A623] to-[#FBBE4B]" 
            style={{ width: `${course.progress}%` }}
          />
        </div>
      )}

      {/* New Badge */}
      {course.isNew && (
        <span className="absolute top-2 right-2 bg-gradient-to-r from-[#F5A623] to-[#D98208] text-neutral-950 text-[10px] font-black px-2.5 py-0.5 rounded shadow-lg z-10 animate-pulse-slow transform hover:scale-105 transition-all duration-300 border border-amber-300/40">
          NOVO
        </span>
      )}

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 backdrop-blur-[2px]">
        <div className="flex justify-between items-start transform translate-y-[-10px] group-hover:translate-y-0 transition-transform duration-300">
           <h3 className="text-white font-semibold text-sm drop-shadow-md line-clamp-2">{course.title}</h3>
        </div>
        
        <div className="transform translate-y-[10px] group-hover:translate-y-0 transition-transform duration-300 delay-75">
          <div className="flex items-center gap-3 mb-2">
            <button className="bg-white text-neutral-950 rounded-full p-1 hover:bg-[#F5A623] hover:text-neutral-950 transition-all duration-300 hover:scale-110 shadow-lg">
              <PlayCircle size={24} fill="currentColor" className="text-inherit" />
            </button>
            <button className="border border-gray-400 rounded-full p-1.5 hover:border-[#F5A623] text-white hover:text-[#F5A623] transition-colors duration-300 hover:bg-white/10">
              <Info size={16} />
            </button>
          </div>
          <div className="flex items-center gap-2 text-[10px] text-gray-300 font-medium">
             <span className="text-[#F5A623] font-bold">98% Relevante</span>
             <span>{course.duration}</span>
             <span className="border border-[#F5A623]/40 px-1 rounded text-[#F5A623]">HD</span>
          </div>
          <p className="text-xs text-gray-400 mt-1">
            {course.category}
          </p>
        </div>
      </div>
    </div>
  );
};