import React, { useState } from 'react';
import Map from './components/Map';
import './App.css'; // Importa o CSS para ajustar o layout
import MenuSearch from './components/MenuSearch';
import MenuButton from './components/MenuButton';
import { FaMapMarkerAlt, FaSearchLocation } from 'react-icons/fa';
import { FaBars, FaCalendarDay, FaFilter, FaMap, FaStore, FaXmark, FaAngleRight } from 'react-icons/fa6';
import { MdAddLocationAlt } from "react-icons/md";
import LocationForm from './components/LocationForm'; // Importa o componente de formulário

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [secondarySidebarOpen, setSecondarySidebarOpen] = useState(false);
  const [secondaryPage, setSecondaryPage] = useState('');

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    setSecondarySidebarOpen(false);
  };

  const handleButtonClick = (secondary_page: string) => {
    if(secondarySidebarOpen && secondaryPage !== secondary_page) {
      setSecondaryPage(secondary_page);
    } else {
      setSecondaryPage(secondary_page);
      setSecondarySidebarOpen(!secondarySidebarOpen);
    }
  }

  const handleCloseSecondary = () => {
    setSecondarySidebarOpen(false);
  }

  return (
    <div className="container">
      <div className="header">
        <h3>Olímpicos</h3>
        <div className="button-container">
          <button onClick={toggleSidebar}>
            {sidebarOpen ? <FaXmark /> : <FaBars />}
          </button>
        </div>
      </div>
      <div className="main">
        <Map />
        <div id="secondary-nav-bar" className={secondarySidebarOpen ? 'open' : ''}>
          <div className='secondary-header'>
            <span className="secondary-title">{secondaryPage}</span>
            <div className="button-container-secondary">
              <button className='button-secondary' onClick={handleCloseSecondary}>
                <FaAngleRight />
              </button>
            </div>
          </div>
          {secondaryPage === "Novo Local" && <LocationForm onClose={handleCloseSecondary} />}
        </div>
        <div id="nav-bar" className={sidebarOpen ? 'open' : ''}>
          <MenuSearch placeHolder="Pesquisar" icon={<FaSearchLocation />}/>
          <MenuButton label="Mapa" onClick={() => setSecondarySidebarOpen(false)} icon={<FaMap />}/>
          <MenuButton label="Novo local" onClick={() => handleButtonClick("Novo Local")} icon={<MdAddLocationAlt />}/>
          <MenuButton label="Filtros" onClick={() => handleButtonClick("Filtros")} icon={<FaFilter />} />
          {/* <MenuButton label="Perfil" onClick={handleButtonClick} icon={<FaUser />}/> */}
          <MenuButton label="Lojas" onClick={() => handleButtonClick("Lojas")} icon={<FaStore />}/>
          {/* <MenuButton label="Histórico" onClick={handleButtonClick} icon={<FaHistory />}/> */}
          <MenuButton label="Eventos" onClick={() => handleButtonClick("Eventos")} icon={<FaCalendarDay  />}/>
        </div>
      </div>
    </div>
  );
};

export default App;
