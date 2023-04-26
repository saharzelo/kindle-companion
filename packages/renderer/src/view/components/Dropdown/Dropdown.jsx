import './Dropdown.css';
import { useState } from 'react';

const Dropdown = ({ title, options, onClick }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(isOpen => !isOpen);
    };

    return (
        <div className="dropdown-container">
            <button className="dropdown-toggle" onClick={toggleDropdown}>
                {title}
            </button>
            {isOpen &&
                <div className="dropdown-content">
                    {options.length < 1 && <a> Empty</a>}
                    {options.map((option, index) => (
                        <a key={index} onClick={() => onClick(option)}>
                            {option}
                        </a>
                    ))}
                </div>}

        </div>
    );
};

export default Dropdown;
