import React, { useState } from 'react';
import './music.css';

const musicData = [
  {
    id: 1,
    title: 'God knows...',
    artist: '涼宮ハルヒ (CV. 平野綾)',
    description: '『涼宮ハルヒの憂鬱』第12話「ライブアライブ」劇中歌。文化祭のステージで演奏された、疾走感あふれるロックナンバー。',
    image: '/material/music/1.jpg'
  },
  {
    id: 2,
    title: 'Lost my music',
    artist: '涼宮ハルヒ (CV. 平野綾)',
    description: '『涼宮ハルヒの憂鬱』第12話「ライブアライブ」劇中歌。同じく文化祭のステージで披露された楽曲で、切なさと力強さが同居する。',
    image: '/material/music/2.jpg'
  },
  {
    id: 3,
    title: '恋のミクル伝説',
    artist: '朝比奈みくる (CV. 後藤邑子)',
    description: '『朝比奈みくるの冒険 Episode 00』主題歌。みくるの愛らしい歌声と独特の世界観が魅力の電波ソング。',
    image: '/material/music/3.jpg'
  },
  {
    id: 4,
    title: 'ハレ晴レユカイ',
    artist: '涼宮ハルヒ、長門有希、朝比奈みくる',
    description: '『涼宮ハルヒの憂鬱』エンディングテーマ。社会現象を巻き起こしたダンスナンバーで、SOS団3人の息の合った歌唱が特徴。',
    image: '/material/music/4.jpg'
  },
  {
    id: 5,
    title: '冒険でしょでしょ？',
    artist: '涼宮ハルヒ (CV. 平野綾)',
    description: '『涼宮ハルヒの憂鬱』オープニングテーマ。物語の始まりを予感させる、エネルギッシュでワクワクする楽曲。',
    image: '/material/music/5.jpg'
  },
  {
    id: 6,
    title: '雪、無音、窓辺にて。',
    artist: '長門有希 (CV. 茅原実里)',
    description: '長門有希のキャラクターソング。静謐でいて奥深いメロディが、彼女のキャラクター性を完璧に表現している名曲。',
    image: '/material/music/6.jpg'
  },
  {
    id: 7,
    title: 'まっがーれ↓スペクタクル',
    artist: '古泉一樹 (CV. 小野大輔)',
    description: '古泉一樹のキャラクターソング。爽やかさと胡散臭さが絶妙なバランスで混ざり合った、ノリの良い一曲。',
    image: '/material/music/7.jpg'
  }
];

const Music = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const rotateTo = (index) => {
    setActiveIndex(index);
  };

  const totalItems = musicData.length;
  const radius = 380; // ユーザーの希望により円を大きくする

  return (
    <div className="music-page">
      <div className="music-container">
        <h1 className="page-title">MUSIC INTRODUCTION</h1>

        <div className="carousel-wrapper">
          <div className="circular-carousel">
            {musicData.map((item, index) => {
              // activeIndexが一番上（0度/270度）になるように調整
              // インデックスの差分を角度（ラジアン）に変換
              const angleStep = (2 * Math.PI) / totalItems;
              const angle = (index - activeIndex) * angleStep - Math.PI / 2;

              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

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
                  }}
                  onClick={() => rotateTo(index)}
                >
                  <div className="image-frame">
                    <img src={item.image} alt={item.title} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="music-info-panel">
          <div className="info-content">
            <h2 className="song-title">{musicData[activeIndex].title}</h2>
            <p className="artist-name">{musicData[activeIndex].artist}</p>
            <div className="divider"></div>
            <p className="description">{musicData[activeIndex].description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Music;
