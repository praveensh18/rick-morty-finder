import './Button.css';

type ButtonProps = {
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
};
const Button: React.FC<ButtonProps> = ({
  onClick,
  className = '',
  children,
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`btn ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
