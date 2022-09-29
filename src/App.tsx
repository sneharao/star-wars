import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DetailsPage from './detailPage/Detail';
import Home from './homePage/Home';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/detail' element={<DetailsPage/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </div >
  );
}

export default App;
