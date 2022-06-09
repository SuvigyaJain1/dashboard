import React, { ReactElement } from 'react'
import '../../styles/Card.scss'

export default function Card ({ className, children} : 
                              { className:string; children: React.ReactNode }) : ReactElement {
  return (
    <div className={'Card '+ className }>
      {children}
    </div>
  )
}
