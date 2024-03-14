import React from 'react'
import Manager_Layout from '../manager_layout/Manager_Layout'
import './manager_home.css'

const Manager_home = () => {
  return (
    <Manager_Layout>
      <div className='box'>
        <h1>Work In process</h1>
            <span className='display'>
              <div className='maininside'>
              <div className='inside'>
                <h4>Tester</h4>
                <h6>Name</h6>
              </div>
              <div className='inside'>
                <h4>Client</h4>
                <h6>Name</h6>
              </div>
              <div className='inside'>
                <h4>Work status</h4>
                <h6>work in progress</h6>
              </div>
              <div className='inside'>
                <button className='block'>Testing Blocked</button>
              </div>
              <div className='inside'>
              <button className='complete'>Testing Completed</button>
              <h6>info</h6>
              </div>
              </div>
            </span>
            <span className='display'>hi</span>
            <span className='display'>hi</span>
            <span className='display'>hi</span>
            <span className='display'>hi</span>
      </div>
    </Manager_Layout>
  )
}

export default Manager_home