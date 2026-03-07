import React from 'react';
import './event.css';

const events = [
    {
        id: 1,
        year: '2007',
        title: '涼宮ハルヒの激奏',
        description: '2007年3月18日に開催された、TVアニメ『涼宮ハルヒの憂鬱』のライブイベント。SOS団主催のイベント。後半はライブパートとなっており、アニメ主題歌やキャラクターソングが多数披露された。ライブで披露された楽曲は基本的に生歌であり、特に『ライブアライブ』(2006年版アニメ第12話)で演奏された「God knows...」「Lost my music」の２曲は生演奏によるステージとなった',
        image: '/material/event/2007.jpg'
    },
    {
        id: 2,
        year: '2009',
        title: '涼宮ハルヒの弦奏',
        description: '2009年4月29日に開催。東京フィルハーモニー交響楽団によるフルオーケストラコンサート。SOS団主催のクラシックコンサート形式のイベント。Philip Chu指揮による東京フィルハーモニー交響楽団の演奏を主として行われた。また、後日ライブ録音によるCDもランティスから発売されている。基本的にBGM劇伴曲が多いが平野綾と茅原実里によるキャラクターソングや主題歌も歌われた。',
        image: '/material/event/2009.jpg'
    },
    {
        id: 3,
        year: '2012',
        title: 'ライブイベント 2012',
        description: '作品の熱狂は衰えず、数多くのファンが集結した2012年のメモリアルイベント。',
        image: '/material/event/2012.jpg'
    },
    {
        id: 4,
        year: '2014',
        title: '北高祭 2014',
        description: '2014年6月に開催。作品の舞台である「北高」の文化祭をモチーフにしたファンイベント。',
        image: '/material/event/201406.jpg'
    },
    {
        id: 5,
        year: '2016',
        title: '10周年記念イベント',
        description: 'アニメ放送開始から10周年を記念して開催。これまでの歴史を振り返る展示やトークが行われた。',
        image: '/material/event/2016.jpg'
    },
    {
        id: 6,
        year: '2018',
        title: '特別上映会 2018',
        description: '2018年に開催された劇場版およびセレクトエピソードの上映イベント。',
        image: '/material/event/2018.jpg'
    },
    {
        id: 7,
        year: '2020',
        title: '七夕の奇跡 2020',
        description: '2020年7月7日、作中でも重要な意味を持つ七夕に合わせたオンライン・オフライン同時開催イベント。',
        image: '/material/event/20200707.jpg'
    },
    {
        id: 8,
        year: '2020',
        title: '消失記念祭',
        description: '2020年12月19日、『涼宮ハルヒの消失』の舞台となった日付に合わせた特別イベント。',
        image: '/material/event/20201219.jpg'
    },
    {
        id: 9,
        year: '2024',
        title: 'SOS団 2024 再始動',
        description: '2024年、新たなプロジェクトやコラボレーションが発表され、ファンの熱気が再燃。',
        image: '/material/event/2024.jpg'
    },
    {
        id: 10,
        year: '2026',
        title: '涼宮ハルヒの凱旋',
        description: '2026年、待望の大型イベントが開催予定。未来へと続くSOS団の物語。',
        image: '/material/event/2026.jpg'
    }
];

const EventPage = () => {
    return (
        <div className="event-page">
            <h1 className="page-title">EVENTS</h1>
            <p className="page-subtitle">SOS団の活動記録</p>

            <div className="events-container">
                {[...events].reverse().map((event) => (
                    <section className="event-item" key={event.id}>
                        <div className="event-content">
                            <span className="event-year">{event.year}</span>
                            <h2 className="event-title">{event.title}</h2>
                            <p className="event-description">{event.description}</p>
                        </div>
                        <div className="event-image-wrapper">
                            <img src={event.image} alt={event.title} className="event-image" />
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
};

export default EventPage;
