import React, { useState } from 'react';
import './character.css';

const characters = [
    {
        id: 'haruhi',
        name: '涼宮 ハルヒ',
        role: '団長',
        image: '/material/charcter/haruhi.png',
        description: '県立北高校1年5組。SOS団団長。唯我独尊、傍若無人、猪突猛進。「東中出身、涼宮ハルヒ。ただの人間には興味ありません。この中に宇宙人、未来人、異世界人、超能力者がいたら、あたしのところに来なさい。以上。」'
    },
    {
        id: 'kyon',
        name: 'キョン',
        role: '団員その1',
        image: '/material/charcter/kyonn.png',
        description: '県立北高校1年5組。SOS団の唯一の良心でありツッコミ役。ハルヒに振り回される毎日を送っているが、なんだかんだで付き合いが良い。'
    },
    {
        id: 'yuki',
        name: '長門 有希',
        role: '団員その2',
        image: '/material/charcter/yuki.png',
        description: '無口な読書家。その正体は情報統合思念体によって造られた対有機生命体コンタクト用ヒューマノイド・インターフェース。'
    },
    {
        id: 'mikuru',
        name: '朝比奈 みくる',
        role: '団員その3',
        image: '/material/charcter/mikuru.png',
        description: '書道部から拉致されてきた上級生。SOS団のマスコット的存在兼メイド兼お茶汲み係。実は未来人。'
    },
    {
        id: 'koizumi',
        name: '古泉 一樹',
        role: '団員その4',
        image: '/material/charcter/koizumi.png',
        description: '「機関」に所属する超能力者。ハルヒの精神状態を安定させるために転校してきた。いつも微笑みを絶やさない。'
    },
    {
        id: 'asakura',
        name: '朝倉 涼子',
        image: '/material/charcter/asakura.png',
        description: 'クラスの委員長で、一見すると優等生で常識人。しかし、その正体は情報統合思念体によって造られた対有機生命体コンタクト用ヒューマノイド・インターフェース。'
    },
    {
        id: 'kunikida',
        name: '国木田',
        image: '/material/charcter/kunikida.png',
        description: '県立北高校1年5組。キョンのクラスメイトの男子高校生。キョンとは同じ中学校出身。大人しそうな見た目に反して毒舌キャラであり、作中でキョンに突っ込みを入れるかなり珍しい人物でもある。'
    },
    {
        id: 'tani',
        name: '谷口',
        image: '/material/charcter/taniguti.png',
        description: '県立北高校1年5組。キョンのクラスメイトの男子高校生で、かなりの女好き。ハルヒと同じ中学校出身で、彼女の奇行は当時から知っていた。'
    },
    {
        id: 'tsuruya',
        name: '鶴屋',
        image: '/material/charcter/turuya.png',
        description: 'みくるのクラスメイトの女子高校生。いつも豪快に笑っており、竹を割ったような性格をしている。なお、実家はお金持ちであり、山を所有している。'
    },
    {
        id: 'kyon-sister',
        name: 'キョンの妹',
        image: '/material/charcter/kyonnsis.png',
        description: 'キョンの小学5年生の妹で、兄のことを「キョンくん」と呼ぶ。人懐っこい性格をしており、誰とでも仲良くできる。'
    }
];

const CharacterPage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % characters.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + characters.length) % characters.length);
    };

    const currentCharacter = characters[currentIndex];

    return (
        <div className="character-page">
            <h1 className="page-title">CHARACTERS</h1>
            <p className="page-subtitle">登場人物紹介</p>

            <div className="carousel-container">
                {/* 左ボタン */}
                <button className="nav-button prev-button" onClick={handlePrev}>
                    &lt;
                </button>

                {/* キャラクター表示エリア */}
                <div className="character-section active">
                    <div className="character-image-container">
                        <img
                            src={currentCharacter.image}
                            alt={currentCharacter.name}
                            className="character-image-detail"
                            key={currentCharacter.id}
                        />
                    </div>
                    <div className="character-info">
                        <h2 className="character-name-detail">{currentCharacter.name}</h2>
                        <p className="character-role-detail">{currentCharacter.role}</p>
                        <p className="character-description">{currentCharacter.description}</p>

                        {/* インジケーター（何番目か） */}
                        <div className="carousel-indicators">
                            {characters.map((_, index) => (
                                <span
                                    key={index}
                                    className={`dot ${index === currentIndex ? 'active' : ''}`}
                                    onClick={() => setCurrentIndex(index)}
                                ></span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 右ボタン */}
                <button className="nav-button next-button" onClick={handleNext}>
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default CharacterPage;
