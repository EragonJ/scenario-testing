import React from 'react'
import './body.css';

export default ({children}) => {
  return (
    <div className={'body'}>
      {children}
    </div>
  )
}