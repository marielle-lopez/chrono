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
    <div className="flex justify-between items-center mb-6">
      <div className="flex w-1/3">
        {/* <img
          className="h-6"
          src="./src/assets/logo/logo-lg.png"
          alt="Chrono logo"
        /> */}
        <img
          className="h-6"
          src="./src/assets/logo/logo-thumbnail.png"
          alt="Chrono thumbnail logo"
        />
      </div>
      <div className="flex justify-center items-center w-1/3 gap-2">
        <Button handleClick={handleDecrement}>
          <FaChevronLeft className="h-3" />
        </Button>
        <p className="flex text-center items-center">{label}</p>
        <Button handleClick={handleIncrement}>
          <FaChevronRight className="h-3" />
        </Button>
      </div>
      <div className="flex justify-end w-1/3 gap-2">
        <NavLink
          to="/day"
          className={({ isActive }) =>
            isActive
              ? 'bg-lime-400 text-black text-sm px-1.5 rounded-md'
              : 'text-sm'
          }
          onClick={switchToDayView}
        >
          Day
        </NavLink>
        <NavLink
          to="/week"
          className={({ isActive }) =>
            isActive
              ? 'bg-lime-400 text-black text-sm px-1.5 rounded-md'
              : 'text-sm'
          }
          onClick={switchToWeekView}
        >
          Week
        </NavLink>
        <NavLink
          to="/month"
          className={({ isActive }) =>
            isActive
              ? 'bg-lime-400 text-black text-sm px-1.5 rounded-md'
              : 'text-sm'
          }
          onClick={switchToMonthView}
        >
          Month
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
