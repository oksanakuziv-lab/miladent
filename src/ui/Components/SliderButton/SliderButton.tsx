import React from 'react';
import cn from 'classnames';

type SliderButtonProps = {
  disabled?: boolean;
  icon: React.ReactNode;
  onClick?: () => void;
  className?: string;
  ref: React.Ref<HTMLButtonElement> | null;
};

export const SliderButton: React.FC<SliderButtonProps> = ({
  disabled = false,
  icon,
  onClick,
  className,
  ref,
}) => {
  return (
    <button
      type="button"
      ref={ref}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        'flex items-center justify-center w-6 h-8 hover:scale-110',
        'text-white-400 bg-white hover:text-red ',
        className,
      )}
    >
      {icon}
    </button>
  );
};
