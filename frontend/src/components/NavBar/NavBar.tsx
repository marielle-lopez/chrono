import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import Button from '../Button/Button';
import { NavLink } from 'react-router-dom';

interface NavBarProps {
  label: string;
  labels: Label[];
  setFilter: (filter: number) => void;
  handleDecrement: () => void;
  handleIncrement: () => void;
  switchToDayView: () => void;
  switchToWeekView: () => void;
  switchToMonthView: () => void;
}

const NavBar = ({
  label,
  labels,
  setFilter,
  handleDecrement,
  handleIncrement,
  switchToDayView,
  switchToWeekView,
  switchToMonthView,
}: NavBarProps) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <div className="flex">
        <div className="flex justify-center items-center gap-2">
          <Button handleClick={handleDecrement}>
            <FaChevronLeft className="h-3" />
          </Button>
          <Button handleClick={handleIncrement}>
            <FaChevronRight className="h-3" />
          </Button>
          <p className="flex items-center">{label}</p>
        </div>
      </div>

      <div className="flex flex-grow justify-end items-center gap-4">
        <select
          className="bg-stone-900 border border-stone-800 rounded-md"
          onChange={(e) => {
            setFilter(parseInt(e.target.value));
          }}
        >
          <option value={0}>All</option>
          {labels.map((label) => (
            <option className="capitalize" key={label.id} value={label.id}>
              {label.name}
            </option>
          ))}
        </select>
        <div className="flex items-center gap-2 px-1 py-1 border border-zinc-900 rounded-lg">
          <NavLink
            to="/day"
            className={({ isActive }) =>
              isActive
                ? 'bg-zinc-800  text-sm px-2 py-1 rounded-md'
                : 'text-sm px-2 py-1'
            }
            onClick={switchToDayView}
          >
            Day
          </NavLink>
          <NavLink
            to="/week"
            className={({ isActive }) =>
              isActive
                ? 'bg-zinc-800 text-sm px-2 py-1 rounded-md'
                : 'text-sm px-2 py-1'
            }
            onClick={switchToWeekView}
          >
            Week
          </NavLink>
          <NavLink
            to="/month"
            className={({ isActive }) =>
              isActive
                ? 'bg-zinc-800 text-sm px-2 py-1 rounded-md'
                : 'text-sm px-2 py-1'
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
