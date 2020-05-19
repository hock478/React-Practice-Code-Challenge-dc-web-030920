import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {


  //Sushi list is properly received from the server
constructor(){
  super() 
  this.state = { //1- the intial state is set on constructor
    sushis: [],
    firstFour: [], // 1.5- this is need to be an empty array so u wont get an error
    index: 4,
    platesArr: [],
    budget: 100,
    message: "You have 100 dollars remaining"
  }
}


componentDidMount(){ // 2- need to setState 
  fetch(API)
  .then(resp => resp.json())
  .then(data => {
   
    this.setState({
      sushis: data, 
      firstFour: data.slice(0, 4)  // 3- here we want to render the first four // [{},{},{},{}]
      
    }) 
  })

}

handleClickMorebtn = () => {
    this.setState({
          index: this.state.index + 4,
          firstFour: this.state.sushis.slice(this.state.index, this.state.index + 4)
    })

    console.log("First Four Arr", this.state.firstFour)

}

addPlate = (sushi) => {
  if(sushi.price > this.state.budget){
    this.setState({message: "No money left, you have " + this.state.budget + " dollars left"})
  }else{
    this.setState({
      platesArr: this.state.platesArr.concat(sushi),
      budget: this.state.budget - sushi.price,
      message: "You have " + (this.state.budget - sushi.price) + " remaining"
      //we have to put this here cuz we wanna substract the sushi that lives here from the budget
    })
  }
  
  // subtracts sushi price from budget
}




  render() {
    
    return (
      <div className="app">
        <SushiContainer firstFourSushi={this.state.firstFour} moreSushi={this.handleClickMorebtn} addPlate={this.addPlate} budget={this.state.budget}/> 
        <Table platesArr={this.state.platesArr} budget={this.state.budget} message={this.state.message}/>
      </div>
    );
  }
}

export default App;