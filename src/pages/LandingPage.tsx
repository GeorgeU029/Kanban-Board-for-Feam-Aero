import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import './pageStyles/landingPage.css';
import Sidebar from '../components/Sidebar';
import MainContainer1 from '../components/MainContainer1';
import DepartmentContainer from '../components/DepartmentContainer';
import itLogo from '../images/itLogo.png';
import hrLogo from '../images/hr_Logo.png';
import techOpsLogo from '../images/tech_ops_Logo.png';
import procurementLogo from '../images/procurement_Logo.png';
import financeLogo from '../images/finance_Logo.png';

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
        {/* Horizontal layout with Sidebar on the left and content on the right */}
        <div className="sidebar-header-row">
          <div className="sidebar-container">
            <Sidebar />
          </div>
          
          <div className="header-container">
            <Header username={username} />
            
            <MainContainer1 title="Departments">
              <DepartmentContainer
                imagePath={itLogo}
                alt="IT Department"
                departmentName="IT"
                departmentDescription="Access technical support and software requests."
              />
              <DepartmentContainer
                imagePath={hrLogo}
                alt="HR Department"
                departmentName="HR"
                departmentDescription="Step-by-step guide for authorization acknowledgment."
              />
              <DepartmentContainer
                imagePath={techOpsLogo}
                alt="Tech Ops Department"
                departmentName="Tech Ops"
                departmentDescription="Manage workflows, projects, and operational resources."
              />
              <DepartmentContainer
                imagePath={procurementLogo}
                alt="Procurement Department"
                departmentName="Procurement"
                departmentDescription="Access purchasing tools, vendor management, and supply chain."
              />
              <DepartmentContainer
                imagePath={financeLogo}
                alt="Finance Department"
                departmentName="Finance"
                departmentDescription="View financial reports, budgeting tools, and accounting resources"
              />
            </MainContainer1>
            
            {/* Second container with better structure */}
            <MainContainer1 title="Quick Links">
              <DepartmentContainer
                departmentName="Employee Portal"
                departmentDescription="Access your employee dashboard and tools."
              />
              <DepartmentContainer
                departmentName="Training"
                departmentDescription="View required and optional training courses."
              />
              <DepartmentContainer
                departmentName="Documents"
                departmentDescription="Access important company documents and forms."
              />
            </MainContainer1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;