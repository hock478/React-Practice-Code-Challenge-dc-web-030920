import React from 'react'

const MoreButton = (props) => {
  
// this props.moreSushi is coming from app to sushiContainer then to here

    return <button onClick={props.moreSushi}>
            More sushi!
          </button>
}

export default MoreButton