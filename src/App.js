import './App.css';
import {useEffect} from "react";

function App() {
    useEffect(() => {
        tg.ready();
    }, [])

  return (
    <div className="App">
            My Work
    </div>
  );
}

export default App;
