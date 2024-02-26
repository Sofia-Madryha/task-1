import classNames from "classnames";

const Button = ({ children, className, onClick }) => {
    const buttonClasses = classNames('custom-button', className);
  return (
    <button className={buttonClasses} onClick={onClick} type="button">
      {children}
    </button>
  );
};

export default Button;
