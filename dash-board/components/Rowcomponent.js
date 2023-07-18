import React from 'react'
import Sidebar from '../components/Sidebar.js'
import Profile from '../components/Profile.js'
import Board from '../components/Board.js'

const Rowcomponent = () => {
  return (
    <>
    <div className='flex'>
    <Sidebar />
    <Profile />
    <Board />
    </div>
    </>
  )
}

export default Rowcomponent