import React, { useState } from 'react';

const episodes = [
    { id: 1, title: 'Episode 1-13', subtitle: 'さっきもう食べたでしょ　ほか', synopsis: 'そのいちっ さっきもう食べたでしょ／そのにっ じゃんけんするわよ／そのさんっ 不思議な生き物ねー／そのよんっ 私もマナーモード機能が…／そのごっ めがっさ似合ってると思わないっかなー／そのろくっ 短冊をつるすわよ／そのななっ なんでよけたん／そのはちっ お弁当にする?それとも私? ／そのきゅうっ しょうがない子だ…／そのじゅうっ いもをやくわよ! ／そのじゅういちっ あ、名前ちゃんと書いてた／そのじゅうにっ すまんが人間の言葉は分からんのだわ／そのじゅうさんっ 『そり』ってたのしいねっ', image: '/material/onair/Spinoff2/1_13.jpg' }
];

const Spinoff2 = () => {
    const [selectedEpisode, setSelectedEpisode] = useState(episodes[0]);

    return (
        <div className="title-content-animation">
            <div className="page-intro-container fade-up">
                <div className="page-intro-synopsis">
                    <p>スモークチーズ大好きなちっちゃな女の子｢ちゅるやさん｣がにょろーんな感じでSOS団メンバーと繰り広げるシュールな日常芝居</p>
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
