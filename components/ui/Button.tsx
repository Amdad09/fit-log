import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
}

const Button = ({ children, className,type='button', ...rest  }: ButtonProps) => {
    return (
        <button type={type}
            className={`px-4 py-2 rounded-lg border cursor-pointer inline-flex hover:scale-105 duration-200 transition-transform active:scale-95 font-bold text-sm bg-primary text-slate-900 disabled:cursor-not-allowed ${className}`}
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;
