import { useEffect, useState } from 'react';
import './ScamPopup.css';

function ScamPopup({ popup, index }) {
  const [visible, setVisible] = useState(false);
  const badges = ['限定', '警告', '無料'];
  const badge = badges[index % badges.length];

  useEffect(() => {
    setTimeout(() => setVisible(true), 10);
  }, []);

  return (
    <div
      className={`scam-popup ${visible ? 'visible' : ''} popup-style-${index % 3}`}
      style={{
        top: popup.top,
        left: popup.left,
        width: `${popup.width}px`,
        minHeight: `${popup.height}px`,
        backgroundColor: popup.color,
        animationDelay: `${popup.id * 0.01}s`,
        zIndex: popup.zIndex || 1500,
        ['--popup-rotation']: `${popup.rotation || 0}deg`,
      }}
    >
      <div className="scam-popup-header">
        <span className="scam-popup-title">{popup.title}</span>
        <button className="scam-popup-close">×</button>
      </div>
      <div className="scam-popup-badge">{badge}</div>
      <div className="scam-popup-body">
        <div className="scam-popup-icon">{popup.icon}</div>
        <p className="scam-popup-message">{popup.msg}</p>
        <div className="scam-popup-actions">
          <button className="scam-popup-btn primary">今すぐクリック！</button>
          <button className="scam-popup-btn secondary">詳細を見る</button>
        </div>
        {popup.urgent && (
          <div className="scam-popup-urgent">
            ⚡ 限定オファー - 残り{Math.floor(Math.random() * 10)}分！
          </div>
        )}
      </div>
    </div>
  );
}

export default ScamPopup;
