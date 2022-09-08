import React, { Component } from 'react'
import Spinner from './Spinner.gif';

export default class spinner extends Component {
  render() {
    return (
      <div className='text-center my-5'>
        <img src={Spinner} alt="loading"/>
      </div>
    )
  }
}
