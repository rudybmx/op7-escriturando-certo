import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CourseCard } from './CourseCard';
import { Course } from '../types';

interface SectionRowProps {
  title: string;
  courses: Course[];
  onCourseClick: (course: Course) => void;
}

export const SectionRow: React.FC<SectionRowProps> = ({ title, courses, onCourseClick }) => {
  const rowRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (rowRef.current) {
      const { clientWidth } = rowRef.current;
      const scrollAmount = clientWidth * 0.8;
      rowRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="mb-8 md:mb-12 relative group/row px-4 md:px-12">
      <h2 className="text-xl md:text-2xl font-bold text-white mb-4 pl-1 hover:text-[#F5A623] transition-colors cursor-pointer inline-flex items-center gap-2">
        {title}
        <span className="text-xs text-[#F5A623] opacity-0 group-hover/row:opacity-100 transition-opacity font-bold mt-1">Ver tudo &gt;</span>
      </h2>
      
      <div className="relative group">
        <button 
          onClick={() => scroll('left')}
          className="absolute left-0 top-0 bottom-0 z-30 w-12 bg-black/60 hover:bg-[#F5A623]/80 hover:text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-r text-white"
        >
          <ChevronLeft size={32} />
        </button>

        <div 
          ref={rowRef}
          className="flex gap-4 overflow-x-auto hide-scrollbar pb-4 pt-4 px-2 -ml-2 snap-x"
        >
          {courses.map((course) => (
            <div key={course.id} className="snap-start">
              <CourseCard course={course} onClick={onCourseClick} />
            </div>
          ))}
        </div>

        <button 
          onClick={() => scroll('right')}
          className="absolute right-0 top-0 bottom-0 z-30 w-12 bg-black/60 hover:bg-[#F5A623]/80 hover:text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-l text-white"
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </div>
  );
};