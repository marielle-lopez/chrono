type Nullable<T> = T | undefined | null;

interface ButtonProps {
  children?: Nullable<any>;
  type?: Nullable<string>;
  label?: Nullable<string>;
  icon?: Nullable<Image>;
  handleClick: () => any;
}

const Button = ({
  children = null,
  type = null,
  label = null,
  icon = null,
  handleClick,
}: ButtonProps) => {
  return (
    <button
      className={`py-1 h-fit border border-stone-700 rounded-md ${
        label !== null ? 'px-3' : 'px-1'
      } ${
        type === 'primary'
          ? 'bg-lime-400 border-none text-black'
          : 'bg-stone-800'
      }`}
      onClick={handleClick}
    >
      {children && children}
      {label && label}
      {icon && <img src={icon.src} alt={icon.alt} />}
    </button>
  );
};

export default Button;
