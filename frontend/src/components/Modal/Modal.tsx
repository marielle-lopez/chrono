import { FaXmark } from 'react-icons/fa6';

const Modal = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <h2>Modal Heading</h2>
        <button>
          <FaXmark />
        </button>
      </div>
      <div>
        <p>Modal Body</p>
      </div>
      <div className="flex justify-end gap-4">
        <button>Cancel button</button>
        <button>Submit button</button>
      </div>
    </div>
  );
};

export default Modal;
