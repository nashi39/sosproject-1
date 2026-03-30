import React, { useState } from 'react';

const episodes = [
    { id: 1, title: '劇場版', subtitle: '涼宮ハルヒの消失', synopsis: 'クリスマスが間近に迫ったある冬の日。学校に向かったキョンはいつもの日常と違うことに気づく。後ろの席にいるはずのハルヒがいない……。さらに驚くべき事に、その席に座っていたのは、(『憂鬱』にて)キョンを殺そうとして長門に消滅させられたはずの朝倉だった！', image: './material/onair/movie/animeMovie.jpg' }
];

const Movie = () => {
    const [selectedEpisode, setSelectedEpisode] = useState(episodes[0]);

    return (
        <div className="title-content-animation">
            <div className="page-intro-container fade-up">
                <div className="page-intro-synopsis">
                    <p>谷川流のライトノベル『涼宮ハルヒ』シリーズを原作とするアニメ映画。</p>
                    <p>『涼宮ハルヒの憂鬱』の続編にして、シリーズ屈指の人気エピソードが描かれる。</p>
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

export default Movie;
