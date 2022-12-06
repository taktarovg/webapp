import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./components/Hooks/useTelegram";

function App() {
    const {onToggleButton, tg} = useTelegram();
    useEffect(() => {
        tg.ready();
    }, [])

  return (
    <div className="App">
            <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
