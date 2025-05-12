import React, { useState } from 'react'
import homeIcon from '../images/home_icon.png';
import resourceIcon from '../images/resource_icon.png';
import employeeIcon from '../images/employee_tools_icon.png';
import planeIcon from '../images/plane_icon.png';
import partnerIcon from '../images/partner_icon.png';
import toolsIcon from '../images/tools_icon.png';
import trainingIcon from '../images/training_icon.png';
import regulatoryIcon from '../images/regulatory_icon.png';
import linkIcon from '../images/link_icon.png';
import './sidebar.css'

interface SidebarItem {
    id: string;
    label: string;
    link?: string;
}

interface SidebarCategory {
    id: string;
    name: string;
    iconPath?: string; 
    items: SidebarItem[];
}

// Home section item (outside the dropdown categories)
interface HomeItem {
    id: string;
    label: string;
    iconPath?: string; 
    link: string;
}

const homeItem: HomeItem = {
    id: 'home',
    label: 'Home',
    iconPath: homeIcon,
    link: '/'
};

const sidebarData: SidebarCategory[] = [
    {
        id: 'Resources',
        name: 'Resources',
        iconPath: resourceIcon, 
        items: [
            { id: 'company-manuals', label: 'Company Manuals', link: '/company-policies' },
            { id: 'technical-documents', label: 'Technical Documents', link: '/employee-handbook' },
            { id: 'wo-numbers', label: 'WO Numbers', link: '/hr-forms' },
        ],
    },
    {
        id: 'Employee Tools',
        name: 'Employee Tools',
        iconPath: employeeIcon, 
        items: [
            { id: 'workday-portal', label: 'Workday Portal', link: '/company-policies' },
            { id: '401k-portal', label: '401K Portal', link: '/employee-handbook' },
            { id: 'paylocity', label: 'Paylocity', link: '/hr-forms' },
            { id: 'tickets-at-work', label: 'Tickets at Work', link: '/hr-forms' },
        ],
    },
    {
        id: 'Aviation Resources',
        name: 'Aviation Resources',
        iconPath: linkIcon, 
        items: [
            { id: 'atlas-air-manuals', label: 'Atlas Air E-Manuals', link: '/company-policies' },
            { id: 'faa-portal', label: 'FAA Portal', link: '/employee-handbook' },
            { id: 'flight-standards', label: 'Flight Standards', link: '/hr-forms' },
            { id: 'easa-portal', label: 'EASA Portal', link: '/hr-forms' },
        ],
    },
    {
        id: 'Partner Access',
        name: 'Partner Access',
        iconPath: partnerIcon, 
        items: [
            { id: 'cargolux-portal', label: 'CARGOLUX Portal', link: '/company-policies' },
            { id: 'etihad-portal', label: 'Etihad Portal', link: '/employee-handbook' },
            { id: 'norergian-portal', label: 'Norergian Portal', link: '/hr-forms' },
            { id: 'china-airlines', label: 'China Airlines', link: '/hr-forms' },
        ],
    },
    {
        id: 'Tools & Resources',
        name: 'Tools & Resources',
        iconPath: toolsIcon, 
        items: [
            { id: 'feam-auth', label: 'FEAM Auth System', link: '/company-policies' },
            { id: 'safety-vouchers', label: 'Safety Vouchers', link: '/employee-handbook' },
            { id: 'dropbox', label: 'DropBox', link: '/hr-forms' },
            { id: 'technical-library', label: 'Technical Library', link: '/hr-forms' },
        ],
    },
    {
        id: 'Training & Documentation',
        name: 'Training & Documentation',
        iconPath: trainingIcon,
        items: [
            { id: 'atlas-air-manuals-2', label: 'Atlas Air E-Manuals', link: '/company-policies' },
            { id: 'aviation-learning', label: 'Aviation Learning', link: '/employee-handbook' },
        ],
    },
    {
        id: 'Regulatory & Compliance',
        name: 'Regulatory & Compliance',
        iconPath: regulatoryIcon, 
        items: [
            { id: 'faa-home', label: 'FAA Home Page', link: '/company-policies' },
            { id: 'ecfr', label: 'Electronic Code of Federal Regulations', link: '/employee-handbook' },
            { id: 'arsa', label: 'ARSA', link: '/employee-handbook' },
        ],
    },
];

const Sidebar: React.FC = () => {
    const [expandedCategories, setExpandedCategories] = useState<{ [key: string]: boolean }>({});
    const [selectedItem, setSelectedItem] = useState<string | null>(null);
    const [selectedHome, setSelectedHome] = useState<boolean>(false);

    const toggleCategory = (categoryId: string) => {
        setExpandedCategories((prev) => ({
            ...prev,
            [categoryId]: !prev[categoryId],
        }));
    };

    const handleItemClick = (categoryId: string, itemId: string, itemLabel: string) => {
        setSelectedItem(itemLabel);
        setSelectedHome(false);
        
        // Auto-expand the category that contains the selected item
        setExpandedCategories(prev => ({
            ...prev,
            [categoryId]: true
        }));
        
        console.log(`Selected ${itemId} from category ${categoryId}`);
    };

    const handleHomeClick = () => {
        setSelectedHome(true);
        setSelectedItem(null);
        console.log('Selected Home');
    };

    return (
        <div className='sidebar-container'>
            <div className='sidebar'>

                {/* Home section */}
                <div className='home-section'>
                    <div 
                        className={`home-item ${selectedHome ? 'selected' : ''}`}
                        onClick={handleHomeClick}
                    >
                        {homeItem.iconPath && (
                            <img 
                                src={homeItem.iconPath} 
                                alt="Home" 
                                className='item-icon'
                            />
                        )}
                        <span className='home-label'>{homeItem.label}</span>
                    </div>
                </div>
                
                <div className='divider'></div>

                <div className='category-list'>
                    {sidebarData.map((category) => {
                        // Only check if the category is expanded
                        const isExpanded = expandedCategories[category.id];
                        
                        return (
                            <div 
                                key={category.id} 
                                className='category'
                            >
                                <div 
                                    className={`category-header ${isExpanded ? 'expanded' : ''}`}
                                    onClick={() => toggleCategory(category.id)}
                                >
                                    <div className='category-title'>
                                        {category.iconPath && (
                                            <img 
                                                src={category.iconPath} 
                                                alt={category.name} 
                                                className='category-icon'
                                            />
                                        )}
                                        <span className='category-name'>{category.name}</span>
                                    </div>
                                    <span className={`arrow ${isExpanded ? 'down' : ''}`}></span>
                                </div>
                                {isExpanded && (
                                    <div className='category-items'>
                                        {category.items.map((item) => (
                                            <div
                                                key={item.id}
                                                className={`category-item ${selectedItem === item.label ? 'selected' : ''}`}
                                                onClick={() => handleItemClick(category.id, item.id, item.label)}
                                            >
                                                {item.label}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;