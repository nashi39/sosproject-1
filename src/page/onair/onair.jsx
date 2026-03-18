import React, { useState } from 'react';
import './onair.css';

// 各話のデータを個別に定義
const episodes = [
    { id: 1, title: '第1話', subtitle: '涼宮ハルヒの憂鬱 I', synopsis: '静かで平凡な高校生活を送ろうとするキョン。憂鬱で不機嫌な電波少女ハルヒ。詰まるところそんな二人がバッタリ出会い、疾風のようにSOS団なるものを結成。んん!これは一体どうなることやら!?すごくアレな展開になること間違いなし!?', image: '/material/onair/MainStory/1.jpg' },
    { id: 2, title: '第2話', subtitle: '涼宮ハルヒの憂鬱 II', synopsis: 'ずんずん大暴走を始めたハルヒ。みくるをダシにして今度はパソコン強奪!やれやれ顔のキョンを尻目にハレンチな格好でビラ配りまで……。類を見ない異常行動に呆れたキョンだが、ひっそり読書をしていた有希に呼び出され、ただごとではない告白を受ける事に……!', image: '/material/onair/MainStory/2.jpg' },
    { id: 3, title: '第3話', subtitle: '涼宮ハルヒの憂鬱 III', synopsis: '夜のリビングで有希がカミングアウト。宇宙人だったとは……!みくるはなんと未来人だと暴露。あろうことか五人目の団員・古泉までがりりしい笑みで自分は超能力者だと告げる。まぁそれだけではなく、三人とも語ったのが、世界の鍵を握っているのはハルヒであると。んむむ……戸惑うばかりである。', image: '/material/onair/MainStory/3.jpg' },
    { id: 4, title: '第4話', subtitle: '涼宮ハルヒの憂鬱 IV', synopsis: 'のっぴきならない事態に陥ったキョン。ウソ!?朝倉がキョンの命を狙ってきたぞ!理解不能のキョンの危機を長門が救う。よもや……これは夢か、幻か……?奇しくも朝比奈さん大人バージョンまで登場。しぶい顔で眼前の事実を見つめるキョンだった。', image: '/material/onair/MainStory/4.jpg' },
    { id: 5, title: '第5話', subtitle: '涼宮ハルヒの憂鬱 V', synopsis: 'ロストした朝倉を探すハルヒ達。手掛かりナシ。にべもなく帰るハルヒ。ふと自分の過去を語る。キョンが家に着くと待っていたのは古泉。なんと閉鎖空間へキョンを案内したのだ。', image: '/material/onair/MainStory/5.jpg' },
    { id: 6, title: '第6話', subtitle: '涼宮ハルヒの憂鬱 VI', synopsis: 'さらに機嫌が悪くなっていくハルヒ。いつものように床に就いたキョンだが、いきなり目覚めるとそこは閉鎖空間!事件です!だってハルヒと二人っきりですよ!よりにもよって神人まで暴れ出す!ピンチ!うぬ!果たして現実に戻れるのだろうか!?', image: '/material/onair/MainStory/6.jpg' },
    { id: 7, title: '第7話', subtitle: '涼宮ハルヒの退屈', synopsis: 'だぁーっ!いきなり野球大会にのぞむこととなったSOS団。にっちもさっちもないハルヒのノックに堪え、んでもって大会当日、強敵を相手にげんきくらいしか取り柄のないSOS団は大苦戦。ん?突然長門が持ったバットが火を噴いて、にんげん技ではない大逆転で大勝利!苦笑いである。', image: '/material/onair/MainStory/7.jpg' },
    { id: 8, title: '第8話', subtitle: '笹の葉ラプソディ', synopsis: '七夕の季節。涼宮ハルヒ率いる｢SOS団｣が何もしない訳がない。案の定、ハルヒ団長は、どこからか笹の葉を持ってきて早速飾り付けをすることに。ハルヒが下校し、他のメンバーも帰るかと思いきや、朝比奈みくるが、キョンを呼び止めた。どうやら一緒に行って欲しいところがあるらしい。', image: '/material/onair/MainStory/8.jpg' },
    { id: 9, title: '第9話', subtitle: 'ミステリックサイン', synopsis: 'ゆゆしき事に、SOS団に悩み相談者が来た!嬉しくてしょうがないハルヒ。聞くと、事件か?コンピ研部長が行方不明だという。んん!ならば現場へ急行、部長宅を捜索。見つからないと思ってたらいきなり異空間へ!来襲したのは巨大なカマドウマ!一応退治したが、正体はなんと……。事件の謎の多さに訝しげなキョンだった。', image: '/material/onair/MainStory/9.jpg' },
    { id: 10, title: '第10話', subtitle: '孤島症候群(前編)', synopsis: 'この夏は無人島で合宿よ!と張り切るハルヒ。ノーも言えずSOS団は古泉の親戚の館へ。なんか怪奇な事件を期待してるっぽいハルヒを海水浴や島の探検でごまかすキョン。二日目はあいにくの雨で室内でゲーム大会。うさん臭い事もないまま三日目、館の主が血まみれで倒れているのを発見するのだった!', image: '/material/onair/MainStory/10.jpg' },
    { id: 11, title: '第11話', subtitle: '孤島症候群(後編)', synopsis: 'ん?、そうそう!無人島で殺人事件の続き!威勢の良かったハルヒも消沈気味。精一杯捜査し、推理を展開する。核心はどこだ?キョンも迷うその時、いもうとちゃんの活躍?もあって事件は解決へ.じつは……!', image: '/material/onair/MainStory/11.jpg' },
    { id: 12, title: '第12話', subtitle: 'エンドレスエイト(1)', synopsis: '夏休みも立秋を過ぎ、早くも残り約2週間となったある日、夏の高校野球甲子園大会も準々決勝あたりまで来ている時に、突然、涼宮ハルヒから電話がかかってきた。残り少ない高校一年の夏休みを皆で大いに楽しもうということらしい。早速、いつもの駅前に勢揃いするSOS団の面々。', image: '/material/onair/MainStory/12.jpg' },
    { id: 13, title: '第13話', subtitle: 'エンドレスエイト(2)', synopsis: 'どうやら、世界がループしているらしい。9月1日以降の世界がごっそりとなくなっていて、ひたすら8月17日から8月31日までをグルグルと周遊しているということが朝比奈みくるの言動からはっきりする。そうした状況に納得のいく古泉、未来に帰れず泣きじゃくるみくる、無言で俯く長門、そして納得のいかないキョン。なぜこうなってしまったのか!?', image: '/material/onair/MainStory/13.jpg' },
    { id: 14, title: '第14話', subtitle: 'エンドレスエイト(3)', synopsis: '夏で夏休みだった。夏休みと言えば高校野球に、プールに、セミ取りに・・・。いろいろ楽しいイベントが待っている。楽しいイベントが・・・。待っているしやってくるのだが・・・。あまり喜べなかった。いくら楽しいイベントも、こう何度も何度も繰り返すと・・・。', image: '/material/onair/MainStory/14.jpg' },
    { id: 15, title: '第15話', subtitle: 'エンドレスエイト(4)', synopsis: 'ひたすら繰り返す涼宮ハルヒ主催のイベントに、ウンザリ気味のキョンたち。だが、どうしたらこのイベントから抜け出せるのか、その術が分からないでいた。なすがままのキョンたち。そうこうしているうちに、また、同じ日々を繰り返して行く!?', image: '/material/onair/MainStory/15.jpg' },
    { id: 16, title: '第16話', subtitle: 'エンドレスエイト(5)', synopsis: '｢何かがおかしい｣この台詞を言うのももう何回目か・・・。いや、初めてのはずなんだが、そんな感じがしない・・・。キョンは高校野球の中継を観ながら、アンニュイな気分になっていた。その時鳴るハルヒからの電話。ハルヒからかかってくることも何となく分かっていた気がするキョンであった', image: '/material/onair/MainStory/16.jpg' },
    { id: 17, title: '第17話', subtitle: 'エンドレスエイト(6)', synopsis: '古泉の話によると、キョンたちはもう、15000回以上、同じ2週間を送っているという。いまいち、実感が持てないキョン達だったが、長門だけは、はっきりと実感していた。長門自身、自分の役目は｢ハルヒの観測｣。そのため、永遠と繰り返すループから抜け出すには、キョン自身が何とかしなくてはならない。', image: '/material/onair/MainStory/17.jpg' },
    { id: 18, title: '第18話', subtitle: 'エンドレスエイト(7)', synopsis: '｢キョンくんでんわー｣。キョンの妹がキョンに呼びかける。怠惰な表情で電話に出るキョン。電話に出る前からハルヒからだとすでに理解しているキョン。話の内容もすでに分かっている、気がした・・・。｢デジャヴュ｣の続く毎日。古泉の｢我々は同じ夏休みを永遠と繰り返しているのです｣という発言に驚きつつも、何もできない自分に溜息をつくキョンだった。', image: '/material/onair/MainStory/18.jpg' },
    { id: 19, title: '第19話', subtitle: 'エンドレスエイト(8)', synopsis: 'また、同じ毎日を繰り返すのか・・・。もううんざりなキョンたち。今日もいつもの喫茶店でSOS団最後のミーティング.そそくさと席を立つハルヒ。今回もこのままハルヒを帰してしまうのか!?いや、帰す訳にはいかない。これ以上はもうごめんだ!、そう意を決したキョンはハルヒに大きな声で叫んだ!', image: '/material/onair/MainStory/19.jpg' },
    { id: 20, title: '第20話', subtitle: '涼宮ハルヒの溜息 I', synopsis: '長かった、夏休みも終わり、体育祭、文化祭の季節を向かえた。もちろん、ハルヒがただ黙って見過ごす訳がない。体育祭では、SOS団でクラブ別のリレーに出場。圧倒的じゃないか、という勝利を手にし、景気よくそのままお次は文化祭へと突入していく。', image: '/material/onair/MainStory/20.jpg' },
    { id: 21, title: '第21話', subtitle: '涼宮ハルヒの溜息 II', synopsis: '文化祭でハルヒが提案したのは｢映画｣上映だった。映画の中身は内緒。ハルヒの頭の中にしか、ストーリーがないって訳だ。着々とその準備に取りかかるハルヒだったが、どうも様子がおかしい。それもそのはず。主人公は｢未来からやって来た戦うウエイトレス=朝比奈ミクル｣なんだから。', image: '/material/onair/MainStory/21.jpg' },
    { id: 22, title: '第22話', subtitle: '涼宮ハルヒの溜息 III', synopsis: '｢朝比奈ミクルの冒険｣という自主制作映画に没頭中のハルヒ。勢い余って、神社の神主にはモデルガンをブッ放すわ、みくるには目からビームを出せ、という無茶苦茶な命令は出すわ、でキョンたちは振り回されっぱなし。果たして映画は無事、クランクアップするのだろうか・・・。', image: '/material/onair/MainStory/22.jpg' },
    { id: 23, title: '第23話', subtitle: '涼宮ハルヒの溜息 IV', synopsis: 'ハルヒの映画作りはまだまだ続く。それどころかどんどんエスカレート。みくるを汚い池に落とし、古泉とキスするようにいい、挙げ句の果てにみくるに｢甘酒｣飲ませて酔わせ、最後にはみくるの頭をメガホンでポンポンたたく。そんな光景に我慢ができる訳がない。本気で怒ったキョンはとうとうハルヒに手を上げてしまう!?', image: '/material/onair/MainStory/23.jpg' },
    { id: 24, title: '第24話', subtitle: '涼宮ハルヒの溜息 V', synopsis: '無事、映画制作もクライマックスを向かえた。ここまでの道中いろいろな事件が起きた。ハルヒとキョンのマジ喧嘩もそうだったが、猫がしゃべったり古泉の正体が垣間みれたり。何にせよ、映画は｢フィクション｣であるということをハルヒにも自覚させることができたから何とか世界もいつもの世界に戻った訳で・・・。', image: '/material/onair/MainStory/24.jpg' },
    { id: 25, title: '第25話', subtitle: '朝比奈ミクルの冒険 Episode 00', synopsis: '｢血わき肉踊る超大作!｣｢夢のようなひととき!｣…という誇大広告であおってはみるが、誰も期待していないだろうこの映画.なんとか上映することができたのだが、最初の一分で観客が置いてけぼりになるのは言うまでもない…。監督はあの涼宮ハルヒだからな!そうそう、この映画はフィクションであることを強く言っておこう!', image: '/material/onair/MainStory/25.jpg' },
    { id: 26, title: '第26話', subtitle: 'ライブアライブ', synopsis: 'ハルヒが監督した超スペクタクルマジカルラブロマンス映画は、なんとか上映に漕ぎ着けることができた。｢よくやったぞ、俺｣と褒めてくれるのは自分しかいない現実を確認し、疲れ気味に校内をぶらついて、たまたま体育館を覗いてみたのだが…。眠気が一気に吹っ飛んだ。壇上にあのハルヒが現れたのである!｢今度は一体何をしようってんだ!?｣という不安をよそに、長門の超絶ギターソロが始まった。ハルヒの熱唱に体育館は異常な盛り上がりを見せる…。', image: '/material/onair/MainStory/26.jpg' },
    { id: 27, title: '第27話', subtitle: '射手座の日', synopsis: '文化祭が何とか無事に終わり、ようやく部室でのまったりとした時間を取り戻したかに思えたのだが、いきなり入り口のドアを叩きあける集団があった。あのコンピ研である。自分達が開発したゲームで我がSOS団と勝負がしたいらしい。どうやらコンピ研が勝負に勝てば、以前ハルヒが話をつけたと思いながら無理矢理奪いとったパソコンを返すというのが条件なのだが…。ということで、ハルヒ司令官のもと、1週間後に勝負を控えたオンライン宇宙戦闘シュミレーション｢ザ・デイ・オブ・なんとか｣の特訓が始まったのである。決戦当日…。', image: '/material/onair/MainStory/27.jpg' },
    { id: 28, title: '第28話', subtitle: 'サムデイ イン ザ レイン', synopsis: '秋のごたごたがようやく納まったかと思えば、季節はすでに12月。｢今年ってもう終わりなのか!｣と人並みに驚きたいところだが、しかしまぁ、半年以上アイツと付き合わせられれば、非日常的な出来事も、普通に受け入れられるようになっていた…。慣れとは恐ろしいものだ…。で,今回の団長命令とやらは、ハルヒによって自主制作映画のスポンサーに仕立て上げられた商店街の電気屋から、ストーブを譲り受けて来るというものだ。ハルヒにしてはまともな用件なのが気にはなるが、部室にいても寒いので、俺は行くことにした。…にしても、…オレがいない間、アイツはいったい何をしているんだ?', image: '/material/onair/MainStory/28.jpg' }
];

const OnAirPage = () => {
    const [selectedEpisode, setSelectedEpisode] = useState(episodes[0]);

    return (
        <div className="onair-page fade-in">
            <h1 className="page-title">ON AIR</h1>
            <p className="page-subtitle">放送エピソード一覧</p>

            <div className="page-intro-container fade-up">
                <div className="page-intro-title-image">
                    <img src="/material/onair/Title/1.png" alt="涼宮ハルヒの憂鬱" />
                </div>
                <div className="page-intro-synopsis">
                    <p>エキセントリックな女子高生・涼宮ハルヒが結成した謎の部活動「SOS団（世界を大いに盛り上げるための涼宮ハルヒの団）」。</p>
                    <p>彼女に巻き込まれたキョンと、実は宇宙人・未来人・超能力者である団員たちが繰り広げる、非日常系学園ストーリー。</p>
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

export default OnAirPage;
