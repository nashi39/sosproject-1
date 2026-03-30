import React from 'react';
import './event.css';

const events = [
    {
        id: 1,
        year: '2007',
        title: '涼宮ハルヒの激奏',
        description: '2007年3月18日に開催された、TVアニメ『涼宮ハルヒの憂鬱』のライブイベント。SOS団主催のイベント。後半はライブパートとなっており、アニメ主題歌やキャラクターソングが多数披露された。ライブで披露された楽曲は基本的に生歌であり、特に『ライブアライブ』(2006年版アニメ第12話)で演奏された「God knows...」「Lost my music」の２曲は生演奏によるステージとなった',
        image: './material/event/2007.jpg'
    },
    {
        id: 2,
        year: '2009',
        title: '涼宮ハルヒの弦奏',
        description: '2009年4月29日に開催。東京フィルハーモニー交響楽団によるフルオーケストラコンサート。SOS団主催のクラシックコンサート形式のイベント。Philip Chu指揮による東京フィルハーモニー交響楽団の演奏を主として行われた。また、後日ライブ録音によるCDもランティスから発売されている。基本的にBGM劇伴曲が多いが平野綾と茅原実里によるキャラクターソングや主題歌も歌われた。',
        image: './material/event/2009.jpg'
    },
    {
        id: 3,
        year: '2012',
        title: 'ハルヒサマーフェス2012',
        description: '2012年8月25日・26日の2日間にわたり、兵庫県西宮市・夙川学院中学校高等学校の増谷記念館を会場として開催された、涼宮ハルヒシリーズをテーマにしたファン主導の総合イベントです。作品の舞台となった西宮を中心に、ファン・研究者・地域が協力して作り上げた「聖地型イベント」として大きな注目を集めた。',
        image: './material/event/2012.jpg'
    },
    {
        id: 4,
        year: '2014',
        title: 'Haruhi Hunting',
        description: '2014年に展開された大規模な参加型キャンペーンで、日本全国に散りばめられた“707枚のカケラ（イラスト）”を集めて、新規描き下ろしムービーを完成させるという、ARG（代替現実ゲーム）的な試みとして話題となった。',
        image: './material/event/201406.jpg'
    },
    {
        id: 5,
        year: '2016',
        title: '涼宮ハルヒの獄音',
        description: '2016年7月9日に立川シネマシティと塚口サンサン劇場で開催された、テレビアニメ『涼宮ハルヒの憂鬱』第1期シリーズの劇場上映イベントであり、テレビアニメ『涼宮ハルヒの憂鬱』放送開始10周年を記念して開催された第1期シリーズ一気見極上音響上映会。テレビアニメ『涼宮ハルヒの憂鬱』第1期14話を劇場独自の音響システムを使用し、音響面が強化されて行われた"極音上映"。立川シネマシティではキャスト登壇によるトークショーも行われた。またニコニコ生放送にてイベントの模様が配信された。',
        image: './material/event/2016.jpg'
    },
    {
        id: 6,
        year: '2018',
        title: 'エンドレスエイト88時間生放送〜およそ1/9077長門有希体験〜',
        description: '2018年8月28日〜31日にかけてニコニコ生放送で実施された、アニメ『涼宮ハルヒの憂鬱』の名物エピソード「エンドレスエイト」をテーマにした狂気と執念の特別企画です。視聴者が“長門有希の体験した終わらない夏”をわずかに追体験できるよう設計された、シリーズ史上でも異彩を放つイベントである。',
        image: './material/event/2018.jpg'
    },
    {
        id: 7,
        year: '2020',
        title: '「涼宮ハルヒの憂鬱 笹の葉ラプソディ」展',
        description: '2020年7月7日、ニメ第2期の象徴的エピソード「笹の葉ラプソディ」をテーマに、七夕の季節に合わせて開催される展示イベントです。作品の“七夕”というモチーフを軸に、エピソードの背景・設定・名シーンを多角的に振り返る構成で、ファンにとっては物語の核心に触れ直す場として高い人気を集めています。',
        image: './material/event/20200707.jpg'
    },
    {
        id: 8,
        year: '2020',
        title: '涼宮ハルヒの探訪',
        description: '「涼宮ハルヒの探訪」は、2020年12月19日にところざわサクラタウン（ジャパンパビリオンA）で開催された、キャストと制作陣の“記憶”を辿るトークイベントです。作品の舞台を巡る“聖地巡礼”とは異なり、作品制作の裏側・当時の空気・キャラクターへの想いを、出演者自身の言葉で振り返る“心の探訪”をテーマにした企画。',
        image: './material/event/20201219.jpg'
    },
    {
        id: 9,
        year: '2024',
        title: '涼宮ハルヒの弦奏Revival',
        description: '2024年1月20日に川口リリアホールで開催された、原作20周年記念のフルオーケストラ・クラシックコンサートです。2009年に行われ“伝説”と語られた初代「涼宮ハルヒの弦奏」から約15年を経ての復活であり、シリーズの歴史を象徴する大規模イベントとして大きな注目を集めた。',
        image: './material/event/2024.jpg'
    },
    {
        id: 10,
        year: '2026',
        title: '涼宮ハルヒの御礼',
        description: '2026年2月6日から全国で2週間限定で行われている、TVアニメ放送20周年記念プロジェクト「涼宮ハルヒの御礼」の第1弾イベントです。2010年公開の名作映画を、16年ぶりに劇場で体験できる特別企画として大きな注目を集めている。',
        image: './material/event/2026.jpg'
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
