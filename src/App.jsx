import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar';
import TasksPage from './pages/TasksPage'
import PomodorePage from './pages/PomodorePage';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<TasksPage />} />
        <Route path="pomodore" element={<PomodorePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
