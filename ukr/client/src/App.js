import logo from './logo.svg';
import './App.css';
import Listings from './components/lists/lists'
import Creating from './components/lists/create';
import City from './components/lists/city';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Listings />
      <Creating/>
      <City/>
    </div>
  );
}

export default App;
