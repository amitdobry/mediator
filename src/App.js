import React from 'react';
import { render } from "react-dom";
import './App.css';
import MyComponent2 from '../src/components1/component2';
import MyComponent3 from '../src/components1/component3';
import {Header} from '../src/components1/Header';
import {Home} from '../src/components1/Home';



// import '../public/css/mystyle.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Header />
        <Home />
        <MyComponent2 />
        <MyComponent3 />

        }

        <a href="C:\Users\user\Desktop\papooo\Mediator papoo page 2.html" class="hover3 center">proceed and Meet Smart Eliezer Papo.</a>

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
    </div>
  );
}

export default App;

