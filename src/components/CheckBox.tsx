import React, {useState} from 'react';
import type { ChangeEvent } from 'react';
import './form.css';

interface CheckBoxProps {
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

const CheckBox: React.FC<CheckBoxProps> = ({ 
  label, 
  checked = false, 
  onChange 
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newChecked = event.target.checked;
    setIsChecked(newChecked);
    if (onChange) {
      onChange(newChecked);
    }
  };

  return (
    <label style={{
      display: 'flex',
      alignItems: 'center', // Changed back to center for vertical alignment
      gap: '8px',           
      whiteSpace: 'normal', // Allow text to wrap
      flexWrap: 'wrap',    
      lineHeight: '1.4',    
      fontSize: '14px',
      width: '100%'         
    }}>
      <input 
        type="checkbox" 
        checked={isChecked} 
        onChange={handleCheckboxChange}
        style={{
          margin: '0',
          padding: '0',
          height: 'auto',
          width: '15px',
          position: 'relative', // Add position
          top: '-1px',          // Slight adjustment upward
          flexShrink: 0         // Prevent shrinking
        }}
      />
      <span style={{ 
        position: 'relative',   // Match position 
        top: '0',               // No adjustment needed
      }}>
        {label}
      </span>
    </label>
  );
};

export default CheckBox;