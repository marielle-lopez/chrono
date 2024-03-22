import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import MonthPage from './pages/MonthPage/MonthPage';
import { Month } from './helpers/enums';
import DayPage from './pages/DayPage/DayPage';
import WeekPage from './pages/WeekPage/WeekPage';
import { daysInMonth } from './helpers/functions';
import Modal from './components/Modal/Modal';

function App() {
  const [isHidden, setIsHidden] = useState(true);
  const [view, setView] = useState('month');
  const [day, setDay] = useState(new Date());
  const [month, setMonth] = useState(-1);
  const [year, setYear] = useState(-1);

  useEffect(() => {
    const currentDate = new Date();
    setMonth(currentDate.getMonth());
    setYear(currentDate.getFullYear());
  }, []);

  const handleDecrement = () => {
    console.log('Decrement');
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
    console.log('Increment');
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
    console.log('Day view');
    setView('day');
    const currentDate = new Date();
    setDay(currentDate);
  };

  const switchToWeekView = () => {
    console.log('Week view');
    setView('week');
    const currentDate = new Date();
    setDay(currentDate);
  };

  const switchToMonthView = () => {
    console.log('Month view');
    setView('month');
    const currentDate = new Date();
    setMonth(currentDate.getMonth());
    setYear(currentDate.getFullYear());
  };

  console.log(day);

  return (
    <>
      <BrowserRouter>
        <button onClick={() => setIsHidden(false)}>Show Modal</button>
        <Modal isHidden={isHidden} setIsHidden={setIsHidden} />
        <NavBar
          label={`${Object.values(Month)[month]} ${year}`}
          handleDecrement={handleDecrement}
          handleIncrement={handleIncrement}
          switchToDayView={switchToDayView}
          switchToWeekView={switchToWeekView}
          switchToMonthView={switchToMonthView}
        />
        <Routes>
          <Route path="/day" element={<DayPage day={day} />} />
          <Route path="/week" element={<WeekPage day={day} />} />
          <Route
            path={`/month/:year/:month`}
            element={<MonthPage month={month} year={year} />}
          />
          <Route path="*" element={<MonthPage month={month} year={year} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
