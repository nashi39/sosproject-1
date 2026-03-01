import React from 'react';
import './story.css';

const StoryPage = () => {
    return (
        <div className="story-page-wrapper">
            <h1 className="story-title">STORY</h1>
            <p className="story-subtitle">あらすじ</p>

            <div className="story-content-container">
                {/* 印象的なキャッチコピー部分 */}
                <div className="story-catchphrase">
                    「ただの人間には興味ありません。<br />
                    この中に宇宙人、未来人、異世界人、超能力者がいたら、あたしのところに来なさい。以上。」
                </div>

                {/* セクション1：画像左、テキスト右 */}
                <div className="story-section">
                    <div className="story-image">
                        <img src="/material/storyPhoto/page2.jpg" alt="涼宮ハルヒ" />
                    </div>
                    <div className="story-text-box">
                        <p>
                            宇宙人などの存在をいつしか信じなくなっていた平凡な男子・キョンは県立北高校に入学する。<br />
                            キョンが所属するクラスでも一人ずつ自己紹介が行われ、<br />
                            キョンの後ろに座る美少女・涼宮ハルヒの番になると彼女はいきなり<br />
                            「ただの人間には興味ありません。この中に宇宙人、未来人、異世界人、超能力者がいたら、あたしのところに来なさい。以上。」<br />
                            と突飛な自己紹介をする。<br />
                            言葉通り彼女は人間には興味がないらしく、クラスメイトとの交流も断っていたことから孤立していた。<br />
                            そんな中、好奇心を抱いたキョンはハルヒに話しかけ、彼女もキョンとだけは会話をするようになる。<br />
                            ハルヒは自分の求める日常を得られないことに不満を抱えていたが、キョンのとある発言をきっかけに新しい部活を作ることを思いつく。<br />
                            ハルヒはキョンを引き摺り込んで文芸部部室を占領し、唯一の文芸部員であった長門有希や萌え担当として上級生の朝比奈みくるを仲間にして「世界を大いに盛り上げるための涼宮ハルヒの団」、略して「SOS団」を立ち上げる。<br />
                            さらに5月という中途半端な時期に転校してきたとの理由で古泉一樹も仲間に加えていった。
                        </p>
                    </div>
                </div>

                {/* セクション2：テキスト左、画像右（またはCSSで順番反転） */}
                <div className="story-section reverse">
                    <div className="story-text-box">
                        <p>
                            しかし、新たに加わった3人は実はハルヒが待ち望んでいた宇宙人、未来人、超能力者であり、キョンは彼らからそれぞれ正体を明かされる。<br />
                            彼ら曰く、日常に不満を抱き非日常を望んでいるハルヒ本人が超常現象を起こしているのだが、<br />
                            ハルヒ自身にその自覚はなく、彼らはそれぞれが属する組織からハルヒを観察するために地球に派遣された存在であり、<br />
                            ハルヒを除く団員たちは彼女に振り回される日常を送りながらもその裏で超常現象を起こさせないために動いていくこととなる
                        </p>
                    </div>
                    <div className="story-image">
                        <img src="/material/storyPhoto/page1.jpg" alt="SOS団" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StoryPage;
