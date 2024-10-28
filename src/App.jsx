import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Book from './dynamic-search/BookComponent';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {

  const [isDarkTheme , setDarkTheme]  = useState(() => localStorage.getItem("theme") == 'dark');
  const changeTheme = () => {
    setDarkTheme(!isDarkTheme);
  }

  useEffect(() => {
    const theme = isDarkTheme ? "dark" : "light"
    localStorage.setItem("theme" , theme);
    document.documentElement.className = theme
  } , [isDarkTheme])
  return (
    <> 
    <div className={`h-screen ${isDarkTheme ? 'bg-black text-white' : "bg-white text-black"}`}></div>
    <h3>hello</h3>
    <button>Change</button>
    </>
  )
}

export default App;
