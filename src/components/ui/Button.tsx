import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  disabled,
  ...props 
}) => {
  const baseClasses = 'rounded-md font-medium transition-all duration-300 flex items-center justify-center transform';
  
  const variantClasses = {
    primary: `bg-[#227DFF] hover:bg-[#1a6cd9] text-white shadow-lg shadow-[#227DFF]/20 hover:shadow-[#227DFF]/30 
      ${!disabled && 'hover:translate-y-[-2px] active:translate-y-0'}
      ${disabled && 'opacity-70 cursor-not-allowed'}`,
    secondary: `bg-white/10 hover:bg-white/15 text-white backdrop-blur-sm border border-white/10 
      ${!disabled && 'hover:translate-y-[-2px] active:translate-y-0'}
      ${disabled && 'opacity-70 cursor-not-allowed'}`,
    outline: `bg-transparent border border-[#227DFF] text-[#227DFF] hover:bg-[#227DFF]/10 
      ${!disabled && 'hover:translate-y-[-2px] active:translate-y-0'}
      ${disabled && 'opacity-70 cursor-not-allowed'}`,
  };
  
  const sizeClasses = {
    sm: 'text-sm py-2 px-4',
    md: 'text-base py-2.5 px-5',
    lg: 'text-lg py-3 px-6',
  };
  
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;