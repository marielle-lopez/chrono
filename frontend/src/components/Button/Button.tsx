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
      {handleClick && type !== 'submit' && (
        <button
          className={`py-2 px-2 h-fit rounded-md ${
            label !== null ? 'px-3' : 'px-1'
          } 
          ${type === 'danger' && 'bg-red-700'} 
          ${type === 'primary' && 'bg-lime-400 border-none text-black'} 
          ${type === 'secondary' && 'bg-zinc-800'}
          ${!type && 'bg-zinc-950'}`}
          onClick={handleClick}
        >
          {children && children}
          {label && label}
          {icon && <img src={icon.src} alt={icon.alt} />}
        </button>
      )}
      {type === 'submit' && handleClick && (
        <button
          className={`py-2 px-1 h-fit rounded-md bg-lime-400 text-black ${
            label && 'px-3'
          }`}
          type="submit"
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
