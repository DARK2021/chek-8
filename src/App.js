import React from 'react';
import './App.css';
import Sarra from './Sarra';
import Sarras from './Sarra.jpg';
import Daniel from './Daniel.jpg';
import Harold from './Harold.jpg';
class App extends React.Component {

state ={
  name:"Sarra",
  image:Sarras,
  descreption:"Salut Sarra"
}
  render(){



  return (
    <div className="App">
      <button onClick={()=>{this.setState({name :"Sarra",image:Sarras,descreption : "salut sarra"})}}>Sarra</button>
      <button onClick={()=>{this.setState({name :"Harold",image:Harold,descreption : "salut Harold"})}}>Harold</button>
      <button onClick={()=>{this.setState({name :"Daniel",image:Daniel,descreption : "salut Daniel"})}}>Daniel</button> 
      <Sarra name={this.state.name} Img={this.state.image} desc={this.state.descreption}/>
    </div>
  );
  }
}

export default App;
