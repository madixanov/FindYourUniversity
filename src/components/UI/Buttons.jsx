const Button = ({ onClick, className, children}) => {
  return (
    <button onClick={onClick} className={`base-button ${className}`}>
      {children}
    </button>
  );
};

export default Button;