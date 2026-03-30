import React, { useState } from 'react';

const episodes = [
    { id: 1, title: '第1話', subtitle: '大切な場所', synopsis: '北高校文芸部に所属する長門有希は、同部所属のキョンに秘めた想いを抱いている内気な性格の女の子。親友・朝倉涼子の助けを借りて、キョンに自分の想いを伝えるため文芸部でクリスマスパーティを企画する。', image: './material/onair/Spinoff3/1.jpg' },
    { id: 2, title: '第2話', subtitle: 'もろびとこぞりて', synopsis: '北高校文芸部に所属する長門有希は、同部所属のキョンに秘めた想いを抱いていた。有希は文芸部の部室でクリスマスパーティを開催。念願のターキーを食べてみんなが盛り上がるなか、1人部室を抜け出して…。', image: './material/onair/Spinoff3/2.jpg' },
    { id: 3, title: '第3話', subtitle: '涼宮ハルヒ!!', synopsis: '北高校文芸部に所属する長門有希は、同部所属のキョンに秘めた想いを抱いていた。クリスマスの翌日、涼宮ハルヒと名乗る謎の少女が有希とキョンの前に現れた。2人は大胆不敵な彼女に翻弄されてしまう。', image: './material/onair/Spinoff3/3.jpg' },
    { id: 4, title: '第4話', subtitle: 'Be my Valentine', synopsis: '北高校文芸部に所属する長門有希は、同部所属のキョンに秘めた想いを抱いていた。バレンタインデーが近づき落ち着かない面々。放課後、部活を休みにして有希は涼子と一緒に手作りチョコを作る。', image: './material/onair/Spinoff3/4.jpg' },
    { id: 5, title: '第5話', subtitle: ' 彼女の憂鬱', synopsis: '北高校文芸部に所属する長門有希は、同部所属のキョンに秘めた想いを抱いていた。有希は、部室でハルヒがキョンにチョコを渡しているのを目撃してしまい、その場から走り去る。涼子とハルヒは慌てて後を追う。', image: './material/onair/Spinoff3/5.jpg' },
    { id: 6, title: '第6話', subtitle: 'Over the Obento', synopsis: '北高校文芸部に所属する長門有希は、同部所属のキョンに秘めた想いを抱いていた。桜が舞う季節となり、進級してクラスが一緒になった有希、キョン、涼子。ある昼下がり、部室で2人きりになった有希とキョンは…。', image: './material/onair/Spinoff3/6.jpg' },
    { id: 7, title: '第7話', subtitle: 'ねがいごと', synopsis: '北高校文芸部に所属する長門有希は、同部所属のキョンに秘めた想いを抱いていた。ハルヒの提案で、文芸部はゴールデンウイークに温泉へ合宿に行くことになった。有希は電車の座席を決めるくじ引きに緊張する。', image: './material/onair/Spinoff3/7.jpg' },
    { id: 8, title: '第8話', subtitle: '涼宮ハルヒの謀', synopsis: '合宿にやってきた長門有希たち北高校文芸部。旅館に到着し、温泉、卓球、カラオケで盛り上がり、美味しい料理に舌鼓を打つ。深夜になると、有希とキョンはお見合い風呂の仕掛けに胸を高鳴らせる。', image: './material/onair/Spinoff3/8.jpg' },
    { id: 9, title: '第9話', subtitle: 'その手を…', synopsis: '北高校文芸部の長門有希は、同部のキョンに秘めた想いを抱いていた。真夜中のトランプ大会で盛り上がり、ハルヒと涼子は疲れて眠ってしまう。一方、有希とキョンは鶴屋さんの勧めで、丘の上の展望台に星を見に行く。', image: './material/onair/Spinoff3/9.jpg' },
    { id: 10, title: '第10話', subtitle: 'サムデイ イン ザ レイン', synopsis: '北高校文芸部に所属する長門有希は、同部所属のキョンに秘めた想いを抱いていた。ある雨の日、有希は下校中に交通事故に遭いそうになる。軽いすり傷だけで済んだのだが、様子が変だ。涼子は不審に思い…。', image: './material/onair/Spinoff3/10.jpg' },
    { id: 11, title: '第11話', subtitle: '長門有希ちゃんの消失I', synopsis: '北高校文芸部に所属する長門有希は、同部所属のキョンに秘めた想いを抱いていた。事故がきっかけで、有希は別の人格に入れ替わってしまった。それでも涼子とキョンは有希をいつもと変わらず見守ることにする。', image: './material/onair/Spinoff3/11.jpg' },
    { id: 12, title: '第12話', subtitle: '長門有希ちゃんの消失II', synopsis: '北高校文芸部に所属する長門有希は、同部所属のキョンに秘めた想いを抱いていた。テスト勉強のため、キョンは有希と一緒に図書館に行くことになった。本に囲まれて嬉しい有希だが、自分の感情の変化に悩む。', image: './material/onair/Spinoff3/12.jpg' },
    { id: 13, title: '第13話', subtitle: '長門有希ちゃんの消失III', synopsis: '長門有希は、北高校文芸部に所属する女の子。眠りから覚めるたびに有希は、曖昧だった前の自分の記憶が鮮明になっていった。今の有希は自分が失われてしまう前に残りの時間を大切に過ごそうと決意するが…。', image: './material/onair/Spinoff3/13.jpg' },
    { id: 14, title: '第14話', subtitle: '彼女の戸惑い', synopsis: '北高校文芸部の長門有希は、同部所属のキョンに秘めた想いを抱いていた。梅雨が明け、テストも終わり、文芸部にはいつもの日常と活気あるハルヒが戻ってきた。そのハルヒが突然、七夕を盛大にやると言いだす。', image: './material/onair/Spinoff3/14.jpg' },
    { id: 15, title: '第15話', subtitle: '彼の迷い', synopsis: '長門有希は、北高校文芸部に所属する女の子。いつも通りハルヒが中心となり、文芸部の夏休みの活動計画が持ち上がり、最初に海水浴に行くことになった。女子の水着姿も眩しく、みんなは海で大はしゃぎする。', image: './material/onair/Spinoff3/15.jpg' },
    { id: 16, title: '第16話', subtitle: '花火', synopsis: '北高校文芸部に所属する長門有希は、同部所属のキョンに秘めた想いを抱いていた。夏休みも終盤に差しかかる。文芸部のみんなは散々遊んでいた。有希に対する想いがもやもやしたままのキョンは夏祭りの最中に…。', image: './material/onair/Spinoff3/16.jpg' },
];

const Spinoff3 = () => {
    const [selectedEpisode, setSelectedEpisode] = useState(episodes[0]);

    return (
        <div className="title-content-animation">
            <div className="page-intro-container fade-up">
                <div className="page-intro-synopsis">
                    <p>「涼宮ハルヒ」シリーズのリビルド作品が、5年の時を経て、ついにアニメ化！</p>
                    <p>長門有希はちょっと内気な普通の女の子。キョンに自分の想いを伝えるため文芸部でクリスマスパーティを企画するのだが…。</p>
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
