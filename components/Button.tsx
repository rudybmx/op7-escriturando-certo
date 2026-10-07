import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'glass';
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  icon,
  ...props 
}) => {
  // Added active:scale-95 for click feedback and updated transitions
  const baseStyles = "flex items-center justify-center gap-2 px-6 py-2 rounded font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    // High-contrast golden gradient with refined amber shadow
    primary: "bg-gradient-to-r from-[#F5A623] to-[#D98208] text-neutral-950 font-bold shadow-lg shadow-amber-500/20 border border-amber-400/50 hover:shadow-amber-500/40 hover:brightness-110",
    secondary: "bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/20 hover:border-amber-400/50",
    glass: "bg-neutral-800/60 hover:bg-neutral-800/90 text-white backdrop-blur-md border border-neutral-700/60 hover:border-amber-400/40"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {icon && <span className="w-5 h-5 transition-transform group-hover:rotate-12">{icon}</span>}
      {children}
    </button>
  );
};