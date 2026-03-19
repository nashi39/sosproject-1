import React, { useState } from 'react';

const episodes = Array.from({ length: 16 }, (_, i) => ({
    id: i + 1,
    title: `第${i + 1}話`,
    subtitle: `長門有希ちゃんの消失 ${i + 1}`,
    synopsis: '「この世界」の長門有希は、文芸部に所属する普通の、ちょっと内気な女の子。親友の越中、隣に住むキョンと一緒に過ごす、ありふれたけれど大切な毎日。',
    image: `/material/onair/Spinoff3/${i + 1}.jpg`
}));

const Spinoff3 = () => {
    const [selectedEpisode, setSelectedEpisode] = useState(episodes[0]);

    return (
        <div className="title-content-animation">
            <div className="page-intro-container fade-up">
                <div className="page-intro-synopsis">
                    <p>『涼宮ハルヒ』シリーズ公式スピンオフ作品。</p>
                    <p>本編の舞台設定を基にした、長門有希を主人公とするもうひとつの並行世界ストーリー。</p>
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

export default Spinoff3;
