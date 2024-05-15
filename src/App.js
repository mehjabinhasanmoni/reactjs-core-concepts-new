import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <Person name="Rubel" nayika="Mowsumi"></Person>
     <Person name="BappaRaz"></Person>
     <Person></Person>
     <h5 style={{backgroundColor:'red',color:'#fff',padding:'20px', margin:'20px'}}> New Component : YAY</h5>
     <Friend name="Rajib"></Friend>
    </div>
  );
}


function Person(props){
  console.log(props);
  return ( <> 
    <div className='person'> 
      <h1>Sakib AL Hasan with {props.name}</h1>
      <p>Profession : Crecketer</p>
      <p>Nayika : {props.nayika}</p>
    </div>
  </>
  )
}


function Friend(props){
  console.log(props)
  return (
    <div className='friend'>
      <h3>Name : Aayat</h3>
      <p>Profession : Baby</p>
      <p>Friends Name : {props.name}</p>
    </div>
  )
}


export default App;
