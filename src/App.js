import logo from './logo.svg';
import './App.css';
import EmployeeList from './components/EmployeeList.js';
import EmployeeAdd from './components/EmployeeAdd.js';

function App() {
  return (
    <div ClassName="App">
          <EmployeeAdd/>

      <EmployeeList/>
    </div>
  )
}

//function App() {
//  return (
//    <div className="App">
//      <header className="App-header">
//        <img src={logo} className="App-logo" alt="logo" />
//        <p>
//          Edit <code>src/App.js</code> and save to reload.
//        </p>
//        <a
//          className="App-link"
//          href="https://reactjs.org"
//          target="_blank"
//          rel="noopener noreferrer"
//        >
//          Learn React
//        </a>
//      </header>
//    </div>
//  );
//}

export default App;
