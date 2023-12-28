
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import { Aboutus } from './Aboutus';
import { Achivments } from './Components/Achivments';
import { ContactUs } from './Components/Contactus';



function App() {
  return (
 
      <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home} exact/>
        <Route path='/aboutus' Component={Aboutus} exact/>
        <Route path='/achivments' Component={Achivments} exact/>
        <Route path='/contactus' Component={ContactUs} exact/>
      </Routes>
      </BrowserRouter>
      
      </div>
  
  );
}

export default App;
