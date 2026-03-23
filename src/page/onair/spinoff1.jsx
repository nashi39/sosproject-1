import React, { useState } from 'react';

const episodes = [
    { id: 1, title: 'Episode 1-6', subtitle: '体は鶴でも心は鷹さっ　ほか', synopsis: '第1話 体は鶴でも心は鷹さっ ／第2話 ん?長門オンリー? ／第3話 あの犬の名前は何でしょう?／第4話 キョンくん、長門さんが、長門さんが・・・／第5話 ドッチボールで勝負しよう!／第6話 エッチなのは感心しませんっ!', image: '/material/onair/Spinoff1/1_6.jpg' },
    { id: 2, title: 'Episode 7-13', subtitle: 'ドキっ、若干、女の子多めの運動会　ほか', synopsis: '第7話 ドキっ、若干、女の子多めの運動会／第8話 豆でも喰うか…／第9話 登場人物は全員メイドです! ／第10話 傘、すげー／第11話 じゃあ、みくるちゃん。さっそく服を脱いでちょうだい! ／第12話 男もただもらうだけじゃなくてなんかこう努力しなさい! ／第13話 そうだ。ハロウィンをしよう!', image: '/material/onair/Spinoff1/7_13.jpg' },
    { id: 3, title: 'Episode 14-19', subtitle: '主人公がしちゃいけない顔になっているわよ　ほか', synopsis: '第14話 主人公がしちゃいけない顔になっているわよ／第15話 風船、すげー／第16話 まっわーれっ! ／第17話 そういうお前はとーさんだっ! ／第18話 キョンくん、キョンくん。こんなん見つけたー／第19話 みんな、今日はクリスマスパーティをするわよ!', image: '/material/onair/Spinoff1/14_19.jpg' },
    { id: 4, title: 'Episode 20-25', subtitle: 'キミドリさーーんっ!　ほか', synopsis: '第20話 キミドリさーーんっ! ／第21話 ヒゲ仮面ーーんっ! ／第22話 これを着てもらえれば分かる／第23話 自称、オレの笑いは伝染する／第24話 あのころの私はそれはもう使命感に燃えていました／第25話 PCゲーム?『涼宮ハルヒちゃんの憂鬱』', image: '/material/onair/Spinoff1/20_25.jpg' }
];

const Spinoff1 = () => {
    const [selectedEpisode, setSelectedEpisode] = useState(episodes[0]);

    return (
        <div className="title-content-animation">
            <div className="page-intro-container fade-up">
                <div className="page-intro-synopsis">
                    <p>暴走団長のハルヒにちょっとオタクになった長門、よりキュートで萌えっこキャラのみくる、そしてよりクールさが際立つ古泉に、ツッコミ担当のキョン。</p>
                    <p>SOS団+αで贈る4コマとショートストーリーで展開するまったく新しいハルヒワールド。</p>
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

export default Spinoff1;
