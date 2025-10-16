import React from "react";

export type ButtonVariant = "primary" | "secondary";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant: ButtonVariant;
    children: React.ReactNode;
}

const buttonClassMap: Record<ButtonVariant, string> = {
    primary:
        "font-display px-3 py-1 border-4 border-ega-yellow bg-ega-black text-ega-yellow tracking-widest text-xs sm:text-base transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-ega-white pixel-shadow-yellow hover:bg-ega-yellow hover:text-ega-black hover:pixel-shadow-yellow-hover active:bg-ega-dark-gray active:text-ega-yellow active:pixel-shadow-yellow-active",
    secondary:
        "font-display px-3 py-1 border-4 border-ega-cyan bg-ega-black text-ega-cyan tracking-widest text-xs sm:text-base transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-ega-white pixel-shadow-cyan hover:bg-ega-cyan hover:text-ega-black hover:pixel-shadow-cyan-hover active:bg-ega-dark-gray active:text-ega-cyan active:pixel-shadow-cyan-active",
};

export function Button({ variant, children, className = "", ...rest }: ButtonProps) {
    return (
        <button
            className={`${buttonClassMap[variant]} ${className}`.trim()}
            {...rest}
        >
            {children}
        </button>
    );
}

export default Button;
