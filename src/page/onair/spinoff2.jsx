import React, { useState } from 'react';

const episodes = [
    { id: 1, title: 'Episode 1-13', subtitle: 'にょろーん ちゅるやさん', synopsis: 'スモークチーズが大好きな「ちゅるやさん」が繰り広げる、不思議な脱力系ショートアニメ。', image: '/material/onair/Spinoff2/1_13.jpg' }
];

const Spinoff2 = () => {
    const [selectedEpisode, setSelectedEpisode] = useState(episodes[0]);

    return (
        <div className="title-content-animation">
            <div className="page-intro-container fade-up">
                <div className="page-intro-synopsis">
                    <p>『涼宮ハルヒの憂鬱』のキャラクター（鶴屋さん）をモデルにした4コマ漫画を原作とするショートアニメ。</p>
                    <p>シュールな世界観と独特のテンポが魅力の作品。</p>
                </div>
            </div>

            <div className="top-thumbnail-nav">
                <div className="thumbnail-track">
                    {episodes.map((ep) => (
                        <div
                            key={ep.id}
                            className={`thumbnail-wrapper ${selectedEpisode.id === ep.id ? 'active' : ''}`}
                            onClick={() => setSelectedEpisode(ep)}
                        >
                            <div className="thumbnail-item">
                                <img src={ep.image} alt={ep.subtitle} />
                            </div>
                            <div className="thumbnail-label">{ep.id}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="episode-detail-container">
                <div className="episode-image-wrapper">
                    <img key={`img-${selectedEpisode.id}`} src={selectedEpisode.image} alt={selectedEpisode.subtitle} className="episode-large-image fade-up" />
                </div>
                <div key={`info-${selectedEpisode.id}`} className="episode-info fade-up delay-1">
                    <div className="episode-title-frame">
                        <span className="episode-number">{selectedEpisode.title}</span>
                        <h2 className="episode-subtitle">{selectedEpisode.subtitle}</h2>
                    </div>
                    <p className="episode-synopsis">{selectedEpisode.synopsis}</p>
                </div>
            </div>
        </div>
    );
};

export default Spinoff2;
