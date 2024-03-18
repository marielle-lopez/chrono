import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import MonthPage from './pages/MonthPage/MonthPage';
import { Month } from './helpers/enums';

function App() {
  const [view, setView] = useState('month');
  const [month, setMonth] = useState(-1);
  const [year, setYear] = useState(-1);

  useEffect(() => {
    const currentDate = new Date();
    setMonth(currentDate.getMonth());
    setYear(currentDate.getFullYear());
  }, []);

  const handleDecrement = () => {
    console.log('Decrement');
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
  };

  const switchToWeekView = () => {
    console.log('Week view');
    setView('week');
  };

  const switchToMonthView = () => {
    console.log('Month view');
    setView('month');
    const currentDate = new Date();
    setMonth(currentDate.getMonth());
    setYear(currentDate.getFullYear());
  };

  console.log(month, year);
  console.log(Object.values(Month));

  return (
    <>
      <BrowserRouter>
        <NavBar
          label={`${Object.values(Month)[month]} ${year}`}
          handleDecrement={handleDecrement}
          handleIncrement={handleIncrement}
          switchToDayView={switchToDayView}
          switchToWeekView={switchToWeekView}
          switchToMonthView={switchToMonthView}
        />
        <Routes>
          <Route path="/day" element={<h1>Day view doesn't exist yet!</h1>} />
          <Route path="/week" element={<h1>Week view doesn't exist yet!</h1>} />
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
