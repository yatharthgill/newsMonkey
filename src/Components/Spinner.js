import React, { Component } from 'react'
import loading from './Spinner@1.25x-1.0s-200px-200px.gif'
export class Spinner extends Component {
  render() {
    return (
      <div className='text-center my-3'>
        <img src={loading} alt='loading' height={50}/>
      </div>
    )
  }
}

export default Spinner
