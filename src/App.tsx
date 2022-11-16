import React from "react";
import MyPage from "./component/MyPage";
import logo from "./logo.svg";

function App() {
  const user = {
    name: "Mike",
  };

  return (
    <div className="App">
      <MyPage user={user} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
    </div>
  );
}

export default App;
