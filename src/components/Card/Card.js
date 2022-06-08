import React from 'react'
import '../../styles/Card.scss'

export default function Card (props) {
  return (
    <div className={'Card '+ props.className }>
      {props.children}
    </div>
  )
}
