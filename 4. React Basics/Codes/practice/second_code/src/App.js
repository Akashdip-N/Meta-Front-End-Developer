import logo from './logo.svg';
import './App.css';

const bool = true;

function Fun(props) {
    return (
        <h2>
            toggleBoolean prop is:
            {props.toggleBoolean.toString()}
        </h2>
    );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <p>This is the first react app!</p>
        </p>

        <div>
            <h1>Boolean Prop Example</h1>
            <Fun toggleBoolean={bool} />
        </div>
      </header>
    </div>
  );
}

export default App;
