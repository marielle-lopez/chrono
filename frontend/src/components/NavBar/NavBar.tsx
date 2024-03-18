import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import Button from '../Button/Button';
import { NavLink } from 'react-router-dom';

interface NavBarProps {
  label: string;
  handleDecrement: () => void;
  handleIncrement: () => void;
  switchToDayView: () => void;
  switchToWeekView: () => void;
  switchToMonthView: () => void;
}

const NavBar = ({
  label,
  handleDecrement,
  handleIncrement,
  switchToDayView,
  switchToWeekView,
  switchToMonthView,
}: NavBarProps) => {
  return (
    <div className="flex justify-between bg-stone-900">
      <div className="flex">
        <Button handleClick={handleDecrement}>
          <FaChevronLeft />
        </Button>
        {label}
        <Button handleClick={handleIncrement}>
          <FaChevronRight />
        </Button>
      </div>
      <div>
        <NavLink to="/day">
          <Button label="Day" handleClick={switchToDayView} />
        </NavLink>
        <NavLink to="/week">
          <Button label="Week" handleClick={switchToWeekView} />
        </NavLink>
        <NavLink to="/month">
          <Button label="Month" handleClick={switchToMonthView} />
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
