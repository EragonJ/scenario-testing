import React from 'react'
import User from './user'
import './users.css'

export default ({ info }) => {
  return (
    <>
      <h1>Users</h1>
      <div className={'users'}>
        {info.map((userInfo, index) => {
          return <User key={index} info={userInfo}/>
        })}
      </div>
    </>
  )
}