import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import Xidmetler from './Pages/Xidmetler';
import Qiymetler from './Pages/Qiymetler';
function App() {
  return (
    <div className="App">
      <Routes>
      <Route
          path="*"
          element={<MainPage/>}
        />
        <Route path='/xidmetler' element={<Xidmetler/>}/>
        <Route path='qiymetler' element={<Qiymetler/>}/>
        <Route path='haqqimizda'/>
        </Routes>
    </div>
  );
}

export default App;
