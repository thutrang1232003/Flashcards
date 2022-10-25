import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Menubar from './components/Menubar';
// import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menubar />
        <img src={logo} className="logo" alt="logo" />
        <p>
          This is a place where you feel more comfortable to study Finnish!
        </p>
        <Button />
      
        {/*<a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>*/}
      </header>
     <body>

     </body>
    </div>
  );
}

export default App;
