type Nullable<T> = T | undefined | null;

interface ButtonProps {
  children?: Nullable<any>;
  type?: Nullable<string>;
  label?: Nullable<string>;
  icon?: Nullable<Image>;
  handleClick?: Nullable<() => any>;
}

const Button = ({
  children = null,
  type = null,
  label = null,
  icon = null,
  handleClick = null,
}: ButtonProps) => {
  return (
    <>
      {handleClick ? (
        <button
          className={`py-2 px-2 h-fit rounded-md ${
            label !== null ? 'px-3' : 'px-1'
          } ${
            type === 'primary'
              ? 'bg-lime-400 border-none text-black'
              : 'bg-zinc-950'
          }`}
          onClick={handleClick}
        >
          {children && children}
          {label && label}
          {icon && <img src={icon.src} alt={icon.alt} />}
        </button>
      ) : (
        <button
          className={`py-1 h-fit border border-stone-700 rounded-md ${
            label !== null ? 'px-3' : 'px-1'
          } ${
            type === 'primary'
              ? 'bg-lime-400 border-none text-black'
              : 'bg-stone-800'
          }`}
        >
          {children && children}
          {label && label}
          {icon && <img src={icon.src} alt={icon.alt} />}
        </button>
      )}
    </>
  );
};

export default Button;
