import React, { useState } from 'react';
import './music.css';

const musicData = [
  {
    id: 1,
    title: 'ハレ晴レユカイ',
    artist: '涼宮ハルヒ、長門有希、朝比奈みくる',
    description: '『涼宮ハルヒの憂鬱』エンディングテーマ。社会現象を巻き起こしたダンスナンバーで、SOS団3人の息の合った歌唱が特徴。',
    image: './material/music/1.jpg'
  },
  {
    id: 2,
    title: '冒険でしょでしょ？',
    artist: '涼宮ハルヒ (CV. 平野綾)',
    description: '『涼宮ハルヒの憂鬱』オープニングテーマ。物語の始まりを予感させる、エネルギッシュでワクワクする楽曲。',
    image: './material/music/2.jpg'
  },
  {
    id: 3,
    title: 'Super Driver',
    artist: '涼宮ハルヒ (CV. 平野綾)',
    description: '2期オープニングテーマ。疾走感のあるロックナンバーで、ライブでも非常に盛り上がる人気曲です。',
    image: './material/music/3.jpg'
  },
  {
    id: 4,
    title: '止マレ！',
    artist: '涼宮ハルヒ (CV. 平野綾)',
    description: '2期エンディングテーマ。1期とは異なるテイストながら、高い人気を誇ります。',
    image: './material/music/4.jpg'
  },
  {
    id: 5,
    title: 'God knows...',
    artist: '涼宮ハルヒ (CV. 平野綾)',
    description: '『涼宮ハルヒの憂鬱』第12話「ライブアライブ」劇中歌。文化祭のステージで演奏された、疾走感あふれるロックナンバー。',
    image: './material/music/5.jpg'
  },
  {
    id: 6,
    title: '雪、無音、窓辺にて。',
    artist: '長門有希 (CV. 茅原実里)',
    description: '長門有希のキャラクターソング。静謐でいて奥深いメロディが、彼女のキャラクター性を完璧に表現している名曲。',
    image: './material/music/6.jpg'
  },
  {
    id: 7,
    title: '優しい忘却',
    artist: '長門有希 (CV. 茅原実里)',
    description: '映画『涼宮ハルヒの消失』の主題歌。茅原実里が歌う、作品の切ない読後感を象徴するバラードです。',
    image: './material/music/7.jpg'
  }
];

const Music = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const rotateTo = (index) => {
    setActiveIndex(index);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + musicData.length) % musicData.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % musicData.length);
  };

  const totalItems = musicData.length;
  // 横に長い楕円にするため、X方向とY方向で異なる半径を設定
  const radiusX = 600;
  const radiusY = 350;

  return (
    <div className="music-page">
      <div className="music-container">
        <h1 className="page-title">MUSIC INTRODUCTION</h1>
        <p className="page-subtitle">楽曲紹介</p>

        <div className="carousel-wrapper">
          <div className="circular-carousel">
            {musicData.map((item, index) => {
              // activeIndexが一番上（270度方向）になるように調整
              const angleStep = (2 * Math.PI) / totalItems;
              const angle = (index - activeIndex) * angleStep - Math.PI / 2;

              const x = Math.cos(angle) * radiusX;
              const y = Math.sin(angle) * radiusY;

              const isActive = index === activeIndex;
              const scale = isActive ? 1.5 : 0.8;
              const opacity = isActive ? 1 : 0.6;
              const zIndex = isActive ? 10 : 1;

              return (
                <div
                  key={item.id}
                  className={`music-item ${isActive ? 'active' : ''}`}
                  style={{
                    transform: `translate(${x}px, ${y}px) scale(${scale})`,
                    opacity: opacity,
                    zIndex: zIndex,
                    cursor: 'default' // ぼたん主体のため
                  }}
                >
                  <div className="image-frame">
                    <img src={item.image} alt={item.title} />
                  </div>
                </div>
              );
            })}

            {/* 紹介文とナビゲーションボタンを中心の円に配置 */}
            <div className="music-info-panel">
              <button className="nav-btn prev" onClick={handlePrev} aria-label="Previous">
                <span className="arrow-icon"></span>
              </button>

              <div className="info-content">
                <h2 className="song-title">{musicData[activeIndex].title}</h2>
                <p className="artist-name">{musicData[activeIndex].artist}</p>
                <div className="divider"></div>
                <p className="description">{musicData[activeIndex].description}</p>
              </div>

              <button className="nav-btn next" onClick={handleNext} aria-label="Next">
                <span className="arrow-icon"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Music;
