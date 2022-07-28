import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import FileSearch from './screens/FileSearch/FileSearch';
import LandingPage from './screens/LandingPage/LandingPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<LandingPage />}/>
          <Route exact path='/fileSearch' element={<FileSearch />}/>
          {/* <Route exact path='/' element={}/> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
