import React, { useState } from 'react'; 
import Dropdown from './DropDown'; 
import CheckBox from './CheckBox';
import './form.css'  

function HelpForm() {   
  // State to handle dropdown value changes   
  const [issueType, setIssueType] = useState('');    
  
  // Options for the issue type dropdown   
  const issueOptions = [     
    { value: '', label: '-- Select Issue Type --' },     
    { value: 'workplace', label: 'Workplace Concern' },     
    { value: 'benefits', label: 'Benefits Question' },     
    { value: 'payroll', label: 'Payroll Issue' },     
    { value: 'harassment', label: 'Harassment or Discrimination' },     
    { value: 'other', label: 'Other' }   
  ];    
  
  // Handler for dropdown changes   
  const handleIssueTypeChange = (value: string) => {     
    setIssueType(value);   
  };    

  // Handler for checkbox changes
  const handleCheckboxChange = (checked: boolean) => {
    console.log('Anonymous checkbox changed:', checked);
  };
  
  return (     
    <div>         
      <div className='help-form-container'>             
        <h2>Report an Issue to HR</h2>
        <div className='info-box'>
          Use this form to report workplace issues such as harassment, violence, substance abuse, or other concerns. All reports are confidential and will be handled by the HR department.
        </div>
          <div className='anonymous-box'>
            <div className='anonymous-box'>
              <CheckBox 
                label="I would like to remain anonymous (note: this may limit our ability to follow up)"
                checked={false}
                onChange={handleCheckboxChange} 
              />
            </div>
          </div>             
        <form>                 
          <div className='form-row'>
            <div className='form-group'>                     
              <label htmlFor="name">Name:</label>                     
              <input type="text" id="name" name="name" required />                 
            </div>                 
            <div className='form-group'>                     
              <label htmlFor="email">Email:</label>                     
              <input type="email" id="email" name="email" required />                 
            </div>
          </div>                 
          <div className='form-group'>                     
            <label htmlFor="phone">Phone Number:</label>                     
            <input type="tel" id="phone" name="phone" required />                 
          </div>                 
          <div className='form-group'>                     
            <label htmlFor="issueType">Issue Type:</label>                     
            <Dropdown                        
              options={issueOptions}                        
              onChange={handleIssueTypeChange}                      
            />                 
          </div>                 
          <div className='form-group'>                     
            <label htmlFor="description">Description of the Issue:</label>                     
            <textarea id="description" name="description" required></textarea>                 
          </div>                   
          <div className="button-container">
            <button type="submit">Submit Report</button>
          </div>             
        </form>         
      </div>     
    </div>   
  ); 
}  

export default HelpForm;