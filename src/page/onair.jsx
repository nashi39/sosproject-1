import React, { useState } from 'react';
import './onair.css';

// Generating placeholder data for 28 episodes
const episodes = Array.from({ length: 28 }, (_, i) => ({
    id: i + 1,
    title: `第${i + 1}話`,
    sysnopsis: `これは第${i + 1}話のあらすじです。SOS団の日常と非日常が入り交じる、涼宮ハルヒの憂鬱のエピソードをお楽しみください。宇宙人や未来人、超能力者との不思議な出来事が次々と起こります。`,
    image: `/material/onair/${i + 1}.jpg`
}));

const OnAirPage = () => {
    const [selectedEpisode, setSelectedEpisode] = useState(episodes[0]);

    return (
        <div className="onair-page fade-in">
            <h1 className="page-title">ON AIR</h1>
            <p className="page-subtitle">放送エピソード一覧</p>

            <div className="top-thumbnail-nav">
                <div className="thumbnail-track">
                    {episodes.map((ep) => (
                        <div 
                            key={ep.id} 
                            className={`thumbnail-wrapper ${selectedEpisode.id === ep.id ? 'active' : ''}`}
                            onClick={() => setSelectedEpisode(ep)}
                        >
                            <div className="thumbnail-item">
                                <img src={ep.image} alt={ep.title} />
                            </div>
                            <div className="thumbnail-label">{ep.id}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="episode-detail-container">
                <div className="episode-image-wrapper">
                    <img key={`img-${selectedEpisode.id}`} src={selectedEpisode.image} alt={selectedEpisode.title} className="episode-large-image fade-up" />
                </div>
                <div key={`info-${selectedEpisode.id}`} className="episode-info fade-up delay-1">
                    <h2 className="episode-title">{selectedEpisode.title}</h2>
                    <p className="episode-synopsis">{selectedEpisode.sysnopsis}</p>
                </div>
            </div>
        </div>
    );
};

export default OnAirPage;
