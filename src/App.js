import React from 'react'
import './App.css';
import './index.css';

function App() {

  function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  

  function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }

  function getGreeting(user) {
    if (user) {
      return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
  }

  const user = {
    firstName: 'Yasin',
    lastName: 'Mohammadi'
  };

  return (
    <div className="App">
      <header className="App-header">
        <Welcome name="Yasin" />
        <h1>
          {getGreeting(user)}
        </h1>
      </header>
    </div>
  );
}

export default App;
