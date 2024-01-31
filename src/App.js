import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './main/main';
import Candidats from './candidats/candidats';
import Questions from './questions/questions';

function App() {
  return (
    <div className="App min-h-[100vh]">
      <Routes>
        <Route path='/' element={<Main></Main>}></Route>
        <Route path='candidats' element={<Candidats></Candidats>}></Route>
        <Route path='questions' element={<Questions></Questions>}></Route>
      </Routes>
    </div>
  );
}

export default App;
