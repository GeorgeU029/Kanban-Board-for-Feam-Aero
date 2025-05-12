import React from 'react'
import './header.css'

interface HeaderProps { 
    username: string;
}

const Header: React.FC<HeaderProps> = ({ username }) => {
    return(
        <header className="landing-header">
            <h1 className='intro'>Welcome {username}!</h1>
            <p className='news-info'>Checkout Our Recent News</p>
            <p className='button-read-more'>Read More</p>
        </header>
    )
}

export default Header