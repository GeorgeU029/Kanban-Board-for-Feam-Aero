import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import './pageStyles/landingPage.css';

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
            <Header username={username} />
          <div className="component-section">
            {/* Your component goes here - for example:
            <YourFirstComponent /> */}
          </div>
          
          {/* Insert your second component here */}
          <div className="component-section">
            {/* Your component goes here - for example:
            <YourSecondComponent /> */}
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