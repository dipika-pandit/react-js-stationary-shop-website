import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import { Router ,Routes ,Link,Route } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Services from './component/Services';
import Contact from './component/Contact';





function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/contact' element={<Contact/>}/>
        </Routes>
        
        <About/>
        <Services/>
        <Contact/>
    </div>
  );
}

export default App;
