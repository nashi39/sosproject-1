import React, { useState } from 'react';
import './onair.css';
import MainStory from './mainstory';
import Movie from './movie';
import Spinoff1 from './spinoff1';
import Spinoff2 from './spinoff2';
import Spinoff3 from './spinoff3';

// タイトル画像のデータ
const titleImages = [
    { id: 1, path: './material/onair/Title/1.png', component: MainStory },
    { id: 2, path: './material/onair/Title/2.png', component: Movie },
    { id: 3, path: './material/onair/Title/3.png', component: Spinoff1 },
    { id: 4, path: './material/onair/Title/4.png', component: Spinoff2 },
    { id: 5, path: './material/onair/Title/5.png', component: Spinoff3 },
];


const OnAirPage = () => {
    const [selectedTitle, setSelectedTitle] = useState(titleImages[0]);

    return (
        <div className="onair-page fade-in">
            <aside className="title-sidebar fade-in-left">
                <div className="title-button-track">
                    {titleImages.map((title) => (
                        <button
                            key={title.id}
                            className={`title-button ${selectedTitle.id === title.id ? 'active' : ''}`}
                            onClick={() => setSelectedTitle(title)}
                        >
                            <img src={title.path} alt={`Title ${title.id}`} />
                        </button>
                    ))}
                </div>
            </aside>

            <h1 className="page-title">ON AIR</h1>
            <p className="page-subtitle">放送エピソード一覧</p>

            <div className="page-intro-container fade-up">
                <div className="page-intro-title-image">
                    <img src={selectedTitle.path} alt="涼宮ハルヒの憂鬱" className="selected-title-logo" />
                </div>
            </div>

            <selectedTitle.component />
        </div>
    );
};

export default OnAirPage;
