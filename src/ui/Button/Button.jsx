import classNames from "classnames";

const Button = ({ children, className }) => {
    const buttonClasses = classNames('custom-button', className);
  return (
    <button className={buttonClasses} type="button">
      {children}
    </button>
  );
};

export default Button;
