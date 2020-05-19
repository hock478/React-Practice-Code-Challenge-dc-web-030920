import React, { Component } from 'react'

class Sushi extends Component {

  constructor(props){
    super(props)
    this.state = {
      beenEaten: false
    }
  }
  handleClickOnSushi = () => {
    // console.log("I've been clicked", event.target) 
    //change the state of the beenEaten to be true, which will remove the sushi image from the DOM
    this.setState({
      beenEaten: true
    })
  }
  
  render(){

    return (
    <div className="sushi">
      <div className="plate"  >
        { 
          /* Tell me if this sushi has been eaten! */ 
          this.state.beenEaten?
            null
          :
            <img src={this.props.sushi.img_url } width="100%" onClick={() => {this.handleClickOnSushi(); this.props.addPlate(this.props.sushi)}} />
        }
      </div>
      <h4 className="sushi-details">
        {this.props.sushi.name} - ${this.props.sushi.price}
      </h4>
    </div>
  )
      }
}

export default Sushi