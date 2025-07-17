import "./button.css"

interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: ()=>void
}

export default function Button({children , className='btn-primary', onClick}: ButtonProps) {
    return (
        <button className={`btn ${className}`} onClick={onClick}>
            {children}
        </button>
    );
}