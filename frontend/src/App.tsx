import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import MonthPage from './pages/MonthPage/MonthPage';
import { Day, Month } from './helpers/enums';
import DayPage from './pages/DayPage/DayPage';
import WeekPage from './pages/WeekPage/WeekPage';
import {
  daysInMonth,
  formatDateToString,
  getDatesInWeek,
  getDifferenceBetweenDates,
} from './helpers/functions';
import Modal from './components/Modal/Modal';
import EventForm from './components/EventForm/EventForm';
import { FaLocationDot } from 'react-icons/fa6';
import { LuCalendarClock } from 'react-icons/lu';

function App() {
  const [isHidden, setIsHidden] = useState(true);
  const [view, setView] = useState('month');
  const [day, setDay] = useState(new Date());
  const [month, setMonth] = useState(-1);
  const [year, setYear] = useState(-1);
  const [events, setEvents] = useState<Event[]>([]);
  const [event, setEvent] = useState();

  useEffect(() => {
    const currentDate = new Date();
    setMonth(currentDate.getMonth());
    setYear(currentDate.getFullYear());
  }, []);

  const handleDecrement = () => {
    if (view === 'day') {
      if (day.getDate() === 1) {
        let previousMonth = day.getMonth() - 1;
        if (previousMonth < 0) {
          const previousYear = day.getFullYear() - 1;
          previousMonth = 11;
          const previousDay = daysInMonth(previousMonth + 1, previousYear);
          const previousDate = new Date(
            previousYear,
            previousMonth,
            previousDay
          );
          setDay(previousDate);
          return;
        } else {
          const previousDay = daysInMonth(previousMonth + 1, day.getFullYear());
          const previousDate = new Date(
            day.getFullYear(),
            previousMonth,
            previousDay
          );
          setDay(previousDate);
          return;
        }
      }
      const previousDate = new Date(
        day.getFullYear(),
        day.getMonth(),
        day.getDate() - 1
      );
      setDay(previousDate);
    }
    if (view === 'week') {
      const previousWeekDate = new Date(
        day.setDate(day.getDate() - day.getDay() - 7)
      );
      setDay(previousWeekDate);
      return;
    }
    if (view === 'month') {
      if (month === 0) {
        setYear(year - 1);
        setMonth(11);
        return;
      }
      setMonth(month - 1);
    }
  };

  const handleIncrement = () => {
    if (view === 'day') {
      if (
        day.getDate() === daysInMonth(day.getMonth() + 1, day.getFullYear())
      ) {
        if (day.getMonth() === 11) {
          const nextDate = new Date(day.getFullYear() + 1, 0, 1);
          setDay(nextDate);
        }
        const nextDate = new Date(day.getFullYear(), day.getMonth() + 1, 1);
        setDay(nextDate);
      }
      const nextDate = new Date(
        day.getFullYear(),
        day.getMonth(),
        day.getDate() + 1
      );
      setDay(nextDate);
    }
    if (view === 'week') {
      const nextWeekDate = new Date(
        day.setDate(day.getDate() - day.getDay() + 7)
      );
      setDay(nextWeekDate);
      return;
    }
    if (view === 'month') {
      if (month === 11) {
        setYear(year + 1);
        setMonth(0);
        return;
      }
      setMonth(month + 1);
    }
  };

  const switchToDayView = () => {
    setView('day');
    const currentDate = new Date();
    setDay(currentDate);
  };

  const switchToWeekView = () => {
    setView('week');
    const currentDate = new Date();
    setDay(currentDate);
  };

  const switchToMonthView = () => {
    setView('month');
    const currentDate = new Date();
    setMonth(currentDate.getMonth());
    setYear(currentDate.getFullYear());
  };

  const getNavBarLabel = (view: string): string => {
    if (view === 'day') {
      return `${Object.values(Day)[day.getDay()]} ${day.getDate()} ${
        Object.values(Month)[day.getMonth()]
      } ${day.getFullYear()}`;
    }
    if (view === 'week') {
      const datesInWeek = getDatesInWeek(day);
      return `${formatDateToString(datesInWeek[0])} - ${formatDateToString(
        datesInWeek[datesInWeek.length - 1]
      )}`;
    }
    if (view === 'month') {
      return `${Object.values(Month)[month]} ${year}`;
    }
    return 'NavBar label could not be generated';
  };

  const formSubmit = (data: Event) => {
    setEvents([...events, data]);
  };

  const updateModalBody = (bodyContent: string) => {
    if (bodyContent === 'event' && event) {
      const today = new Date();

      return (
        <>
          <div className="flex gap-6">
            <span className="flex items-center gap-2">
              <FaLocationDot />
              <p>{event.location}</p>
            </span>
            <span className="flex items-center gap-2">
              <LuCalendarClock />
              <p>
                {getDifferenceBetweenDates(event.startDate, today)} days left
              </p>
            </span>
          </div>
          <p>
            {event.startDate.toLocaleString()} -{' '}
            {event.endDate.toLocaleString()}
          </p>
        </>
      );
    }
    if (bodyContent === 'form') {
      return <EventForm formSubmit={formSubmit} />;
    }
  };

  useEffect(() => {
    if (event) {
      console.log('triggered');
      updateModalBody('event');
      return;
    }
    updateModalBody('form');
  }, [event]);

  useEffect(() => {
    if (isHidden && event) {
      setEvent(null);
    }
  }, [isHidden]);

  return (
    <>
      <BrowserRouter>
        <NavBar
          label={getNavBarLabel(view)}
          handleDecrement={handleDecrement}
          handleIncrement={handleIncrement}
          switchToDayView={switchToDayView}
          switchToWeekView={switchToWeekView}
          switchToMonthView={switchToMonthView}
        />
        <Routes>
          <Route
            path="/day"
            element={
              <DayPage
                day={day}
                setIsHidden={setIsHidden}
                events={events}
                setEvent={setEvent}
              />
            }
          />
          <Route
            path="/week"
            element={
              <WeekPage
                day={day}
                setIsHidden={setIsHidden}
                events={events}
                setEvent={setEvent}
              />
            }
          />
          <Route
            path={`/month`}
            element={
              <MonthPage
                month={month}
                year={year}
                setIsHidden={setIsHidden}
                events={events}
                setEvent={setEvent}
              />
            }
          />
          {/* <Route
            path="*"
            element={
              <MonthPage month={month} year={year} setIsHidden={setIsHidden} />
            }
          /> */}
        </Routes>
        <Modal
          heading={event ? event.name : 'Create an event'}
          isHidden={isHidden}
          setIsHidden={setIsHidden}
          handleSubmit={() => console.log('Submit button clicked!')}
        >
          {!event ? updateModalBody('form') : updateModalBody('event')}
        </Modal>
      </BrowserRouter>
    </>
  );
}

export default App;
