import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
}

const Button = ({
    children,
    className,
    disabled,
    type = 'button',
    ...rest
}: ButtonProps) => {
    return (
        <button
            type={type}
            className={`
        inline-flex items-center justify-center
        rounded-lg border px-4 py-2
        font-bold text-sm
        bg-primary text-slate-900
        transition-all duration-200
        hover:-translate-y-0.5
        hover:bg-lime-300
        active:translate-y-0
        active:scale-[0.98]
        cursor-pointer

        disabled:cursor-not-allowed
        disabled:opacity-50
        disabled:hover:translate-y-0
        disabled:hover:bg-primary
        disabled:active:scale-100

        ${className}
    `}
        disabled={disabled}
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;
