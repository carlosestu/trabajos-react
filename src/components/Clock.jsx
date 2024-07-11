import { useState, useEffect, useContext} from 'react'
import { LanguageContext } from '../LanguageContext';

    
function Clock() {
    const [time, setTime] = useState(new Date().toLocaleString());
    const { language } = useContext(LanguageContext);
    const getCurrentTimeMessage = () => {
        switch (language) {
          case 'es':
            return 'Hora actual';
          case 'it':
            return 'Ora attuale';
          case 'en':
            return 'Current time';
            case 'default':
                default:
                    return '';
        }
    }
  useEffect(() => {
    const actualizarHora = setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 1000);
    return () => clearInterval(actualizarHora);
  }, [time]);
      return <div>
      <h1>{getCurrentTimeMessage()}</h1>
      <h2 id="tiempo">{time}</h2>
      </div>;
}

export default Clock;