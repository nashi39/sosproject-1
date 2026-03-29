import React from 'react';
import './sns.css';

const snsLinks = [
  {
    id: 1,
    title: '涼宮ハルヒの消失 公式サイト',
    url: 'https://www.kyotoanimation.co.jp/works/haruhiM/',
    image: '/material/sns/1.jpg'
  },
  {
    id: 2,
    title: '涼宮ハルヒの憂鬱 15周年記念特設サイト',
    url: 'https://haruhitv-anniversary.com/index.html',
    image: '/material/sns/2.jpg'
  },
  {
    id: 3,
    title: '涼宮ハルヒちゃんの憂鬱・にょろーんちゅるやさん',
    url: 'https://www.haruhi.tv/haruchuru/',
    image: '/material/sns/3.jpg'
  },
  {
    id: 4,
    title: '長門有希ちゃんの消失',
    url: 'https://yukichan-anime.com/index.html',
    image: '/material/sns/4.jpg'
  },
  {
    id: 5,
    title: '角川スニーカー文庫 涼宮ハルヒシリーズ 特設サイト',
    url: 'https://sneakerbunko.jp/haruhi/?ref=banner',
    image: '/material/sns/5.jpg'
  }
];

const Sns = () => {
  return (
    <div className="sns-page">
      <div className="sns-overlay"></div>
      <div className="sns-container">
        <header className="sns-header">
          <h1 className="page-title">SOS団 関連サイト</h1>
          <p className="page-subtitle">SOS BRIGADE RELATED LINKS</p>
          <div className="header-line"></div>
        </header>

        <div className="link-grid">
          {snsLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link-card"
            >
              <div className="card-image-wrapper">
                <img src={link.image} alt={link.title} className="card-image" />
                <div className="hover-overlay">
                  <span className="visit-text">VISIT SITE</span>
                </div>
              </div>
              <div className="card-info">
                <h2 className="link-title">{link.title}</h2>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sns;
