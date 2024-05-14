import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <Person></Person>
     <Person></Person>
     <Person></Person>
     <Person></Person>
     <h5 style={{backgroundColor:'red',color:'#fff',padding:'20px', margin:'20px'}}> New Component : YAY</h5>
     <Friend></Friend>
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


function Friend(){
  return (
    <div className='friend'>
      <h3>Name : Aayat</h3>
      <p>Profession : Baby</p>
    </div>
  )
}


export default App;
