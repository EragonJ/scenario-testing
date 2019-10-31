import React from 'react'
import {
  Card,
  Elevation
} from "@blueprintjs/core"
import './user.css'

export default (props) => {
  const {
    info
  } = props

  return (
    <div className={'user'}>
      <a href="#">
        <Card interactive={true} elevation={Elevation.TWO}>
          <img className="avatar" src={info.avatar} alt="Avatar"></img>
          <h3>{info.name}</h3>
        </Card>
      </a>
    </div>
  )
}