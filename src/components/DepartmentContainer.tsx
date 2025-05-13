import React from 'react'
import './style.css'

/* This is the department container for it, hr, etc... */

interface DepartmentContainerProps 
{
  imagePath?: string;
  alt?: string;
  departmentName?: string;
  departmentDescription?: string;
}

const DepartmentContainer: React.FC<DepartmentContainerProps> = ({
  imagePath,
  alt = 'Department Image',
  departmentName,
  departmentDescription,
}) => {
  return (
    <div className='mainbox'>
      <div className='imagebox'>
        <img src={imagePath} alt={alt} className='department-image' />
      </div>
      <div className='textbox'>
        <h2 className='department-name'>{departmentName}</h2>
        <p className='department-description'>{departmentDescription}</p>
      </div>
    </div>      
  )
}

export default DepartmentContainer