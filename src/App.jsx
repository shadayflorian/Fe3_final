//import React, { useContext } from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home"
import Contact from "./Routes/Contact"
import Favs from "./Routes/Favs"
import Detail from "./Routes/Detail"
import {Routes, Route} from 'react-router-dom'
import { ThemeContextProvider } from './context/GlobalContext';

function App() {
 // const { theme, setTheme } = useContext(ThemeContext);

 /* const handleThemeChange = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }*/

  return (
    <ThemeContextProvider>
     <div className='app'> 
       
       <Navbar/>
          <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/favorites" element={<Favs/>}/>
          <Route path="/detail/:id" element={<Detail/>}/>
          </Routes>

          <Footer/>
        
      </div>
    </ThemeContextProvider>
      
  );
}

export default App;
