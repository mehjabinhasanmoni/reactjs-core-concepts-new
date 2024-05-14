import logo from './logo.svg';
import './App.css';


const number = 555;

const singer = {name : 'Dr. Mahfuz', job : 'Singer'}

const singer2 = { name : 'Eva Rahman', job : 'Singer'}

const singerStyle = {
  color : 'purple',
  backgroundColor : '#FFFFFF',
  padding: '10px',

}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <h1> JSX </h1>

       <div className="container">
          <h3> Hello Dude, React how are you??</h3>
       </div>

       <div className="music">
        <p style={singerStyle}> Name : {number}</p>
        <p style={{
  color : 'purple',
  backgroundColor : 'yellow',
  padding: '10px',

}}> Singer Name : {singer.name} is a {singer.job} </p>
       </div> Siger Name : {singer2.name} ,  {singer2.job}
         
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
