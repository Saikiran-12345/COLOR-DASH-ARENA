import React from 'react';
export interface ProgressBarProps {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'ghost' | 'outline';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  ariaLabel?: string;
  tabIndex?: number;
}
/**
 * ProgressBar Component
 */
export const ProgressBar: React.FC<ProgressBarProps> = (props) => {
  const {
    id, className = '', style, children, onClick, disabled = false,
    variant = 'primary', size = 'md', ariaLabel, tabIndex
  } = props;

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary': return 'bg-primary text-white border-primary';
      case 'secondary': return 'bg-gray-600 text-white border-gray-600';
      case 'danger': return 'bg-danger text-white border-danger';
      case 'success': return 'bg-success text-white border-success';
      case 'warning': return 'bg-warning text-white border-warning';
      case 'ghost': return 'bg-transparent hover:bg-gray-100 text-gray-800 border-transparent';
      case 'outline': return 'bg-transparent border-primary text-primary hover:bg-primary hover:text-white';
      default: return 'bg-primary text-white border-primary';
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'xs': return 'p-1 text-xs';
      case 'sm': return 'p-2 text-sm';
      case 'md': return 'p-3 text-md';
      case 'lg': return 'p-4 text-lg';
      case 'xl': return 'p-5 text-xl';
      default: return 'p-3 text-md';
    }
  };

  const baseStyles = 'rounded transition flex items-center justify-center cursor-pointer select-none font-bold border';
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 shadow';
  const combinedClassName = `${baseStyles} ${getVariantStyles()} ${getSizeStyles()} ${disabledStyles} ${className}`.trim();

  return (
    <div 
      id={id}
      className={combinedClassName}
      style={style}
      onClick={!disabled ? onClick : undefined}
      role="button"
      aria-disabled={disabled}
      aria-label={ariaLabel}
      tabIndex={disabled ? -1 : (tabIndex ?? 0)}
      onKeyDown={(e) => {
        if (!disabled && onClick && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onClick(e as any);
        }
      }}
    >
      {children}
    </div>
  );
};
