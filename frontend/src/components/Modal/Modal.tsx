import { FaXmark } from 'react-icons/fa6';

interface ModalProps {
  isHidden: boolean;
  setIsHidden: (isHidden: boolean) => void;
}

const Modal = ({ isHidden, setIsHidden }: ModalProps) => {
  return (
    <>
      <div
        className={`w-full h-full fixed backdrop-blur-sm ${
          isHidden && 'hidden'
        }`}
      ></div>
      <div
        className={`flex w-full h-full fixed justify-center items-center ${
          isHidden && 'hidden'
        }`}
      >
        <div className="flex flex-col bg-black rounded-md px-3 py-2">
          <div className="flex justify-between">
            <h2>Modal Heading</h2>
            <button onClick={() => setIsHidden(true)}>
              <FaXmark />
            </button>
          </div>
          <div>
            <p>Modal Body</p>
          </div>
          <div className="flex justify-end gap-4">
            <button onClick={() => setIsHidden(true)}>Cancel button</button>
            <button
              onClick={() =>
                console.log('Submit button clicked in Modal component')
              }
            >
              Submit button
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
