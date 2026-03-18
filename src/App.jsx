
import './App.css'
import HamburgerMenu from './components/HamburgerMenu';
import CharacterPage from './page/character';
import StoryPage from './page/story';
import EventPage from './page/event';
import OnAirPage from './page/onair/onair';
import { useState } from 'react';


function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  return (
    <>

      <video
        className="background-video"
        src="/material/backMovie/main.mp4"
        autoPlay
        loop
        muted
        playsInline
      />


      <div className="top-button" onClick={() => handleNavigate('home')}>
        <img src="/material/logo/TopButton.png" alt="Home" />
      </div>

      <HamburgerMenu onNavigate={handleNavigate} />

      <div className="content">
        {currentPage === 'home' && (
          <div className="logo">
            <img src="/material/logo/soslogo.png" alt="" />
          </div>
        )}
        {currentPage === 'character' && (
          <CharacterPage />
        )}
        {currentPage === 'story' && (
          <StoryPage />
        )}
        {currentPage === 'event' && (
          <EventPage />
        )}
        {currentPage === 'onair' && (
          <OnAirPage />
        )}
      </div>

    </>
  )
}

export default App
