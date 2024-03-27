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
import { LuCalendarClock } from 'react-icons/lu';
import {
  createEvent,
  getAllEvents,
  deleteEventById,
  updateEventById,
} from './services/event';
import EditEventForm from './components/EditEventForm/EditEventForm';
import { getAllLabels, getLabelById } from './services/label';

function App() {
  const [isHidden, setIsHidden] = useState(true);
  const [view, setView] = useState('month');
  const [day, setDay] = useState(new Date());
  const [month, setMonth] = useState(-1);
  const [year, setYear] = useState(-1);
  const [labels, setLabels] = useState<Label[]>([]);
  const [events, setEvents] = useState<Event[]>([]);
  const [event, setEvent] = useState<Event>();
  const [filter, setFilter] = useState(0);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);

  useEffect(() => {
    getAllLabels()
      .then((res) => setLabels(res))
      .catch((e) => console.warn(e.message));
  }, []);

  useEffect(() => {
    getAllEvents()
      .then((res) => setEvents(res))
      .catch((e) => console.warn(e.message));
  }, []);

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
      const initialDate = formatDateToString(datesInWeek[0])
        .split(' ')
        .slice(1)
        .join(' ');
      const endDate = formatDateToString(datesInWeek[datesInWeek.length - 1])
        .split(' ')
        .slice(1)
        .join(' ');
      return `${initialDate} - ${endDate}`;
    }
    if (view === 'month') {
      return `${Object.values(Month)[month]} ${year}`;
    }
    return 'NavBar label could not be generated';
  };

  const formSubmit = (data: object) => {
    createEvent(data)
      .then((res) => {
        setIsHidden(true);
        setEvents([...events, res]);
      })
      .catch((e) => console.warn(e.message));
  };

  const handleDelete = (id: number) => {
    deleteEventById(id)
      .then(() => getAllEvents())
      .then((res) => {
        setEvents(res);
        setIsHidden(true);
      })
      .catch((e) => console.warn(e.message));
  };

  // TODO: make handleUpdate() dry; need to pass event.id, not depend on state
  const handleUpdate = (data: object) => {
    {
      event &&
        updateEventById(event.id, data)
          .then(() => getAllEvents())
          .then((res) => {
            setEvents(res);
            setIsHidden(true);
          })
          .catch((e) => console.warn(e.message));
    }
  };

  const updateModalBody = (bodyContent: string) => {
    if (bodyContent === 'event' && event) {
      const today = new Date();
      const daysDifference = getDifferenceBetweenDates(event.startedAt, today);

      return (
        <>
          <div className="flex flex-col gap-6">
            <span className="flex items-center gap-3">
              <LuCalendarClock />
              <p className="text-sm">
                {daysDifference === 0 && 'Today'}
                {daysDifference < 0 && `${daysDifference * -1} days ago`}
                {daysDifference > 0 && `${daysDifference} days left`}
              </p>
            </span>
            <EditEventForm
              labels={labels}
              setIsHidden={setIsHidden}
              handleUpdate={handleUpdate}
              event={event}
              handleDelete={handleDelete}
            />
          </div>
        </>
      );
    }
    if (bodyContent === 'form') {
      return (
        <EventForm
          labels={labels}
          formSubmit={formSubmit}
          setIsHidden={setIsHidden}
        />
      );
    }
  };

  useEffect(() => {
    if (event) {
      updateModalBody('event');
      return;
    }
    updateModalBody('form');
  }, [event]);

  useEffect(() => {
    if (isHidden && event) {
      setEvent();
    }
  }, [isHidden]);

  useEffect(() => {
    if (filter === 0) {
      setFilteredEvents([...events]);
      return;
    }
    getLabelById(filter)
      .then((res) => {
        setFilteredEvents(res.events);
      })
      .catch((e) => console.warn(e.message));
  }, [filter, events]);

  return (
    <>
      <BrowserRouter>
        <div className="bg-zinc-950 p-4">
          <img
            className="h-8 w-8 object-contain"
            src="./src/assets/logo/logo-thumbnail.png"
            alt="Chrono thumbnail logo"
          />
        </div>
        <div className="flex flex-col flex-grow mt-5 mb-5 ml-8 mr-8">
          <NavBar
            label={getNavBarLabel(view)}
            setFilter={setFilter}
            labels={labels}
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
                  events={filteredEvents}
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
                  events={filteredEvents}
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
                  events={filteredEvents}
                  setEvent={setEvent}
                />
              }
            />
            <Route
              path="*"
              element={
                <MonthPage
                  month={month}
                  year={year}
                  setIsHidden={setIsHidden}
                  events={filteredEvents}
                  setEvent={setEvent}
                />
              }
            />
          </Routes>
        </div>
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
