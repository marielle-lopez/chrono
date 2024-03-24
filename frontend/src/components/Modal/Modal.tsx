import { FaXmark } from 'react-icons/fa6';
import Button from '../Button/Button';

interface ModalProps {
  isHidden: boolean;
  setIsHidden: (isHidden: boolean) => void;
  children: any;
}

const Modal = ({ isHidden, setIsHidden, children }: ModalProps) => {
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
        <div className="flex flex-col justify-between min-w-96 min-h-60 bg-black rounded-lg px-4 py-4 shadow-xl">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <h2 className="text-xl font-bold">Modal Heading</h2>
              <button onClick={() => setIsHidden(true)}>
                <FaXmark />
              </button>
            </div>
            <div className="flex flex-grow">{children}</div>
          </div>
          <div className="flex justify-end gap-3 mt-6">
            <Button handleClick={() => setIsHidden(true)} label="Cancel" />
            <Button
              handleClick={() =>
                console.log('Primary button clicked in Modal component')
              }
              label="Primary"
              type="primary"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
