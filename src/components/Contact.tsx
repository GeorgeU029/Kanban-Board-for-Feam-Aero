import React from 'react'
import emailLogo from '../images/emailLogo.png'
import micLogo from '../images/mic.png'

interface ContactProps {
    email: string;
    phone: string;
    extension: string;
}

const Contact: React.FC<ContactProps> = ({
    email,
    phone,
    extension
    })=> {
  return (
    <div className='contact-container-outter'>
        <div>
            <h2> Contact </h2>
        </div>
        <div className='contact-container-inner'>
            <div className='contact-item'>
                <div className='icon-text-row'>
                    <img src={emailLogo} alt="Email Logo" className='contact-icon' />
                    <div className='contact-text'>
                        <h3>Email: </h3>
                        <p>{email}</p>
                    </div>
                </div>
            </div>
            <div className='contact-item'>
                <div className='icon-text-row'>
                    <img src={micLogo} alt="Phone Logo" className='contact-icon' />
                    <div className='contact-text'>
                        <h3>Phone: </h3>
                        <p>{phone} Ext: {extension}</p> 
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact