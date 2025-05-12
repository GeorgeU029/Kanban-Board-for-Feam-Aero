import React, { useState } from 'react';
import './form.css'


interface DropdownProps {
    options: Array<{value: string; label: string}>;
    onChange: (value: string) => void;
}

function Dropdown({options, onChange}: DropdownProps) {
    const [value, setValue] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setValue(event.target.value);
        onChange(event.target.value);
    };
    
    return (
        <select value={value} onChange={handleChange}>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}

export default Dropdown;