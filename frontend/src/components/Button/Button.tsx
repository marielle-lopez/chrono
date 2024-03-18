type Nullable<T> = T | undefined | null;

interface ButtonProps {
  children?: Nullable<any>;
  label?: Nullable<string>;
  icon?: Nullable<Image>;
  handleClick: () => any;
}

const Button = ({
  children = null,
  label = null,
  icon = null,
  handleClick,
}: ButtonProps) => {
  return (
    <button
      className="border border-stone-700 rounded-md bg-stone-800"
      onClick={handleClick}
    >
      {children && children}
      {label && label}
      {icon && <img src={icon.src} alt={icon.alt} />}
    </button>
  );
};

export default Button;
