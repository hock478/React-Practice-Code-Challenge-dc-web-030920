import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component{
  render(){
   // console.log("first meal", this.props.firstFourSushi) // 4- this is functional component we do not use this.props it s not a class component 
  return (
    <Fragment>
      <div className="belt">
        {
          /* 
             Render Sushi components here! // we getting an array here we cant render an array so we need to map
          */
        }
{/* 5- we iterate throught the array so we use it in the child  */}

        {/* if you dont have an id and u have to use the index
        {this.props.firstFourSushi.map((sushi, index) => <Sushi sushi={sushi} key={index}/>)}  */}

        {this.props.firstFourSushi.map(sushi => <Sushi sushi={sushi} key={sushi.id} addPlate={this.props.addPlate} budget={this.props.budget}/>)}  

        <MoreButton moreSushi={this.props.moreSushi}/>
      </div>
    </Fragment>
  )}
}
 
export default SushiContainer
