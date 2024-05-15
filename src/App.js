import logo from './logo.svg';
import './App.css';

const singers = [
  {name: 'DR.Mahfuz', job: 'Singer' },
  {name: 'Eva Rahman', job: 'Singer' },
  {name: 'Agun', job: 'Singer' },
  {name: 'Shuvro Dev', job: 'Singer' },
]

function App() {
  const nayoks = ['Rubel', 'BappaRaz','Kuber', 'Manna'];
  return (
    <div className="App">
      { 
        nayoks.map(nayok => <li>{nayok}</li>)
      }
      {/* {
        nayoks.map(nayok => <Person name={nayok}></Person>)
      } */}

      {
        singers.map(singer => <Person name={singer.name}></Person>)
      }

     {/* <Person name="Rubel" nayika="Mowsumi"></Person>
     <Person name="BappaRaz"></Person>
     <Person></Person> */}
     <h5 style={{backgroundColor:'red',color:'#fff',padding:'20px', margin:'20px'}}> New Component : YAY</h5>
     <Friend name="Rajib"></Friend>
    </div>
  );
}


function Person(props){
  console.log(props);
  return ( <> 
    <div className='person'> 
      <h1>{props.name}</h1>
      <p>{props.nayika}</p>
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
