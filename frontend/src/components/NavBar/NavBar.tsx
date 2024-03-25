import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import Button from '../Button/Button';
import { NavLink } from 'react-router-dom';

interface NavBarProps {
  label: string;
  setFilter: (filter: string) => void;
  handleDecrement: () => void;
  handleIncrement: () => void;
  switchToDayView: () => void;
  switchToWeekView: () => void;
  switchToMonthView: () => void;
}

const NavBar = ({
  label,
  setFilter,
  handleDecrement,
  handleIncrement,
  switchToDayView,
  switchToWeekView,
  switchToMonthView,
}: NavBarProps) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <div className="flex gap-4">
        <img
          className="h-6"
          src="./src/assets/logo/logo-thumbnail.png"
          alt="Chrono thumbnail logo"
        />
        <div className="flex justify-center items-center gap-2">
          <Button handleClick={handleDecrement}>
            <FaChevronLeft className="h-3" />
          </Button>
          <p className="flex text-center items-center">{label}</p>
          <Button handleClick={handleIncrement}>
            <FaChevronRight className="h-3" />
          </Button>
        </div>
      </div>

      <div className="flex flex-grow justify-end items-center gap-4">
        <select
          className="bg-stone-900 border border-stone-800 rounded-md"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Personal">Personal</option>
          <option value="University">University</option>
          <option value="Work">Work</option>
        </select>
        <div className="flex gap-2">
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
    </div>
  );
};

export default NavBar;
