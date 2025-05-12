import React from 'react'

interface HeaderProps { 
    username: string;
}



const Header: React.FC<HeaderProps> = ({ username }) => {

    return(
        <header className="landing-header">
            <h1>Welcome {username}!</h1>
            <p>Checkout Our Recent News</p>
            <p>Read More</p>
        </header>

    )
}

export default Header