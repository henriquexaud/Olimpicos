import React from 'react';

interface MenuButtonProps {
  label: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  className?: string;
}

const MenuButton: React.FC<MenuButtonProps> = ({ label, onClick, icon, className }) => {
  return (
    <button onClick={onClick} className={`menu-button ${className}`}>
      {icon && <span className="menu-button-icon">{icon}</span>}
      <span className="menu-button-label">{label}</span>
    </button>
  );
}

export default MenuButton;