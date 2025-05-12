import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import './pageStyles/landingPage.css';
import Sidebar from '../components/Sidebar';

interface LandingPageProps {
  username: string;
}

const LandingPage: React.FC<LandingPageProps> = ({ username }) => {
  return (
    <div className="landing-container">
      {/* Navbar component */}
      <Navbar username={username} />
      
      {/* Main content container */}
      <div className="landing-content">
        
        {/* This is where you'll insert your own components */}
        <div className="components-container">
          {/* Horizontal layout with Sidebar on the left and Header on the right */}
          <div className="sidebar-header-row">
            <div className="sidebar-container">
              <Sidebar />
            </div>
            
            <div className="header-container">
              <Header username={username} />
            </div>
          </div>
          
          {/* Insert your third component here */}
          <div className="component-section">
            {/* Your component goes here - for example:
            <YourThirdComponent /> */}
          </div>
          
          {/* Add more component sections as needed */}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;