import React, { useState } from 'react';

const episodes = [
    { id: 1, title: 'Episode 1-6', subtitle: '涼宮ハルヒちゃんの憂鬱 I', synopsis: 'スピンオフ作品。SDキャラたちが繰り広げる、本編とは一味違うシュールでギャグ満載の日常。', image: '/material/onair/Spinoff1/1_6.jpg' },
    { id: 2, title: 'Episode 7-13', subtitle: '涼宮ハルヒちゃんの憂鬱 II', synopsis: 'さらに加速するハルヒちゃんの暴走。SOS団の面々もすっかりこのノリに慣れてしまったようだ。', image: '/material/onair/Spinoff1/7_13.jpg' },
    { id: 3, title: 'Episode 14-19', subtitle: '涼宮ハルヒちゃんの憂鬱 III', synopsis: '不思議な出来事は日常茶飯事。キョンのツッコミも冴えわたる。', image: '/material/onair/Spinoff1/14_19.jpg' },
    { id: 4, title: 'Episode 20-25', subtitle: '涼宮ハルヒちゃんの憂鬱 IV', synopsis: '終わりなき戦い（？）の果てに何が待っているのか。最後まで目が離せない！', image: '/material/onair/Spinoff1/20_25.jpg' }
];

const Spinoff1 = () => {
    const [selectedEpisode, setSelectedEpisode] = useState(episodes[0]);

    return (
        <div className="title-content-animation">
            <div className="page-intro-container fade-up">
                <div className="page-intro-synopsis">
                    <p>『涼宮ハルヒの憂鬱』の公式パロディスピンオフ作品。</p>
                    <p>Webアニメとして配信された、ユーモア溢れるショートストーリー集。</p>
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

export default Spinoff1;
