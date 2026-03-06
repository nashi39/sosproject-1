
import './App.css'
import HamburgerMenu from './components/HamburgerMenu';
import CharacterPage from './page/character';
import StoryPage from './page/story';
import EventPage from './page/event';
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
      </div>

    </>
  )
}

export default App
