import React from 'react'
import './style.css'

interface MainContainer1Props {
  title?: string;
  children: React.ReactNode;
}

const MainContainer1: React.FC<MainContainer1Props> = ({children,title}) => {
  return (
    <div className='outer-container'>
      <div className='main-container-1'>
        <h1 className="container-title">{title}</h1>
        <div className="departments-container">
          {children}
        </div>
      </div>
    </div>
  )
}

export default MainContainer1