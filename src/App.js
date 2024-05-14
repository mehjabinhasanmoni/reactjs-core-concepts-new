import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <Person></Person>
     <Person></Person>
     <Person></Person>
     <Person></Person>
    </div>
  );
}


function Person(){
  return ( <> 
    <div className='person'> 
      <h1>Sakib AL Hasan</h1>
      <p>Profession : Crecketer</p>
    </div>
  </>
  )
}


export default App;
