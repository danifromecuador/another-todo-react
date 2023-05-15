import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar';
import TasksPage from './pages/TasksPage'
import Pomodore from './pages/Pomodore';


const App = () => {
  console.log(TasksPage);
  return (
    <BrowserRouter>
      <Navbar />      
      <Routes>
        <Route path="/" element={<TasksPage />} />
        <Route path="pomodore" element={<Pomodore />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
