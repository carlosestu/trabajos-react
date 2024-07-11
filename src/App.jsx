import { useState, useContext} from 'react'
import './App.css'
import Clock from './components/Clock';
import { LanguageContext } from './LanguageContext';
function App() {
  const [ language, setLanguage ] = useState("default");

  const updateLanguage = (event) => {
      setLanguage(event.target.value);
      console.log(event.target.value);
}
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
    <div>
  <select onChange={updateLanguage}>
  <option value="default">Choose language here</option>
  <option value="en">English</option>
  <option value="es">Spanish</option>
  <option value="it">Italian</option>
  </select>
    <Clock/>
    </div>
    </LanguageContext.Provider>
  )
}

export default App
