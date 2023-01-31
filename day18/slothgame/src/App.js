
import './App.css';
import { Slotgame } from './component/Slotgame';

function App() {
  return (
    <>
    <div className="App">
     <h1>🎰 welcome to slot game 🎰 </h1> 
    </div>
    <div className='slot'>
<Slotgame x={'😄'} y={'🕥'} z={'😄'}/>
<Slotgame x={'😄'} y={'🥪'} z={'😄'}/>
<Slotgame x={'💋'} y={'💋'} z={'💋'}/>
    </div>
    </>
  );
}

export default App;
