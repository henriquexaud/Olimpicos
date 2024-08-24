import React from 'react';

interface MenuSearchProps {
  placeHolder: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  className?: string;
}

const MenuSearch: React.FC<MenuSearchProps> = ({ placeHolder, onClick/* , icon */ }) => {
  return (
    <div onClick={onClick} className={`menu-search-container`}>
      <input type="text" placeholder={placeHolder} className="menu-search-field" />
      {/* {icon && <span className="menu-button-icon">{icon}</span>} */}
    </div>
  );
}

export default MenuSearch;