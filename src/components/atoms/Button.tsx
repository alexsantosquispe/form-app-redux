import type { ReactNode } from 'react';
import cn from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface ButtonProps {
  label?: string;
  type?: 'button' | 'submit';
  icon?: ReactNode;
  onClick?: () => void;
  isDisabled?: boolean;
  className?: string;
  ariaLabel?: string;
}

export const Button = ({
  label,
  type = 'button',
  onClick,
  icon = null,
  isDisabled = false,
  className = '',
  ariaLabel
}: ButtonProps) => {
  return (
    <button
      role="button"
      aria-disabled={isDisabled}
      aria-label={ariaLabel}
      className={twMerge(
        'dark:hover:bg-white/80font-medium flex h-[2.75rem] cursor-pointer items-center justify-center gap-1 rounded bg-black px-4 text-sm text-white shadow-xs transition-colors duration-150 ease-in-out hover:bg-black/80',
        cn({
          'cursor-not-allowed bg-black/65 dark:bg-white/25': isDisabled
        }),
        className
      )}
      disabled={isDisabled}
      type={type}
      onClick={onClick}
    >
      {icon && <span className="size-4">{icon}</span>}
      {label && label}
    </button>
  );
};
