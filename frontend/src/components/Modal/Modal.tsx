import { FaXmark } from 'react-icons/fa6';
import Button from '../Button/Button';

type Nullable<T> = T | undefined | null;

interface ModalProps {
  isHidden: boolean;
  setIsHidden: (isHidden: boolean) => void;
  children: any;
  handleSubmit: () => void;
  displayFooter?: Nullable<boolean>;
  heading: string;
}

const Modal = ({
  isHidden,
  setIsHidden,
  children,
  handleSubmit,
  displayFooter = false,
  heading,
}: ModalProps) => {
  return (
    <>
      <div
        className={`w-full h-full fixed backdrop-brightness-50 backdrop-blur-sm ${
          isHidden && 'hidden'
        }`}
      ></div>
      <div
        className={`flex w-full h-full fixed justify-center items-center ${
          isHidden && 'hidden'
        }`}
      >
        <div className="flex flex-col justify-between min-w-96 min-h-60 bg-zinc-950 rounded-lg px-4 py-4 shadow-xl">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <h2 className="text-xl font-bold">{heading}</h2>
              <button onClick={() => setIsHidden(true)}>
                <FaXmark />
              </button>
            </div>
            <div className="flex flex-col flex-grow">{children}</div>
          </div>
          {displayFooter && (
            <div className="flex justify-end gap-3 mt-6">
              <Button handleClick={() => setIsHidden(true)} label="Cancel" />
              <Button
                handleClick={handleSubmit}
                label="Primary"
                type="primary"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Modal;
