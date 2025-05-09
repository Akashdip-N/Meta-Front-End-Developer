import './App.css';
import Buttons from './ButtonCode.js';
import Profile from './Profile.js';

function App() {
  return (
    <div className="App">
      <Profile />
      <Buttons className="Btn1" name="First Button"/>

      <Buttons name="Second Button"/>


      <Buttons name="Third Button"/>
    </div>
  )
}

export default App;
