import React, { useState } from 'react';
import { Menu, Search, Settings, HelpCircle, User } from 'lucide-react';
import './navbar.css';
import feamLogo from '../images/feam_aero_logo.webp';

interface NavbarProps {
  username: string;
}

const Navbar: React.FC<NavbarProps> = ({ username }) => {
  const [searchValue, setSearchValue] = useState<string>('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <nav className="navbar">
      {/* Left side - Burger icon, Logo, SharePoint text */}
      <div className="navbar-left">
        <button className="burger-button">
          <Menu size={24} />
        </button>
        
        {/* Logo placeholder - you'll insert your actual logo here */}
        <div className="logo-placeholder">
          {/* Replace with your actual logo */}
          <img src={feamLogo} alt="FEAM Aero Logo" className="logo" />
        </div>
        
        <span className="brand-text">SharePoint</span>
      </div>
      
      {/* Middle - Search bar */}
      <div className="search-container">
        <div className="search-wrapper">
          <div className="search-icon">
            <Search size={16} />
          </div>
          <input
            type="text"
            className="search-input"
            placeholder="Search..."
            value={searchValue}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      
      {/* Right side - Settings, Question mark, Username, Profile icon */}
      <div className="navbar-right">
        <button className="icon-button">
          <Settings size={20} />
        </button>
        
        <button className="icon-button">
          <HelpCircle size={20} />
        </button>
        
        <span className="username">{username}</span>
        
        <div className="profile-icon">
          <User size={20} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;