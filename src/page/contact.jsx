import React from 'react';
import './contact.css';

const ContactPage = () => {
    return (
        <div className="contact-page-wrapper">
            <h1 className="contact-title">CONTACT</h1>
            <p className="contact-subtitle">お問い合わせ</p>

            <div className="contact-container">
                <div className="contact-glass-card">
                    <form className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">NAME</label>
                            <input type="text" id="name" placeholder="お名前" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">EMAIL</label>
                            <input type="email" id="email" placeholder="メールアドレス" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">MESSAGE</label>
                            <textarea id="message" rows="5" placeholder="お問い合わせ内容"></textarea>
                        </div>
                        <button type="submit" className="submit-button">SEND MESSAGE</button>
                    </form>

                    <div className="contact-info">
                        <h3>SOS団 団員募集中</h3>
                        <p>宇宙人、未来人、異世界人、超能力者、またはそれらに興味のある方はこちらから。</p>
                        <div className="info-item">
                            <span className="label">LOCATION:</span>
                            <span className="value">県立北高校 文芸部部室</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
