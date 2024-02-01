import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './main/main';

function App() {
  return (
    <div className="App min-h-[100vh]">
      <Routes>
        <Route path='/' element={<Main></Main>}></Route>
      </Routes>
    </div>
  );
}

export default App;
