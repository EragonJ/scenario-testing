import React from 'react'
import Team from './team'
import './teams.css'

export default ({ info }) => {
  return (
    <>
      <h1>Teams</h1>
      <div className={'teams'}>
        {info.map((teamInfo, index) => {
          return <Team key={index} info={teamInfo}/>
        })}
      </div>
    </>
  )
}