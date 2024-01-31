import './App.css';
import Header from './components/header';
import { Route, Routes } from 'react-router-dom';
import Main from './main/main';
import { useEffect, useState } from 'react';
import Candidats from './candidats/candidats';

function App() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false)

  useEffect(() => {
    document.addEventListener("scroll", (event) => {
      let lastKnownScrollPosition = window.scrollY;
      setIsHeaderVisible(lastKnownScrollPosition > 500)
    });
  })

  return (
    <div className="App min-h-[100vh]">
      <Routes>
        <Route path='/' element={<Main></Main>}></Route>
        <Route path='candidats' element={<Candidats></Candidats>}></Route>
      </Routes>
    </div>
  );
}

export default App;
