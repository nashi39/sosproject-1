
import React, { useState } from 'react';
import './HamburgerMenu.css';

const HamburgerMenu = ({ onNavigate }) => {
    const [isOpen, setIsOpen] = useState(false);

    // メニュー項目を配列で管理（後で追加しやすいように）
    const menuItems = [
        { id: 1, label: 'TOP', page: 'home' },
        { id: 2, label: 'STORY', page: 'story' },
        { id: 3, label: 'CHARACTER', page: 'character' },
        { id: 4, label: 'CONTACT', page: 'contact' },

        // ここに新しい項目を追加するだけ
    ];

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="hamburger-container">
            {/* ハンバーガーアイコン */}
            <div className={`hamburger-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            {/* メニューリスト */}
            <nav className={`menu-nav ${isOpen ? 'open' : ''}`}>
                <ul>
                    {menuItems.map((item) => (
                        <li key={item.id}>
                            <a
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setIsOpen(false);
                                    if (item.page) onNavigate(item.page);
                                }}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* 背景クリックで閉じるためのオーバーレイ */}
            {isOpen && <div className="menu-overlay" onClick={() => setIsOpen(false)}></div>}
        </div>
    );
};

export default HamburgerMenu;
