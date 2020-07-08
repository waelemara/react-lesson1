import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './Components/HomePage';

/// this is a component
/// Name: App
/// Parameter is nothing
/// return a HTML to show on the UI

function App() {

  return (
    <div className="App">
      <table border="1">
        <tr>
          <td><HomePage /></td>
        </tr>
      </table>
    </div>
  );
}

export default App;
