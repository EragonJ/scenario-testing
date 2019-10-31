import React from 'react'
import {
  Card,
  Elevation
} from "@blueprintjs/core"
import './team.css'

export default (props) => {
  const {
    info
  } = props

  return (
    <div className={'team'}>
      <a href="#">
        <img className="avatar" src={info.avatar} alt="Avatar"></img>
        <h3>{info.name}</h3>
      </a>
    </div>
  )
}