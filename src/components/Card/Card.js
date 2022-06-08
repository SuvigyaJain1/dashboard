import React from 'react'
import './Card.scss'

export default function Card (props) {
  return (
    <div className={'Card '+ props.className }>
      {props.children}
    </div>
  )
}
