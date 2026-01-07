import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ScamPopup from '../components/ScamPopup';
import './PopupScam.css';

function PopupScam() {
  const [timeLeft, setTimeLeft] = useState(300); // 5分
  const [showEducation, setShowEducation] = useState(false);
  const [popups, setPopups] = useState([]);
  const [showBSOD, setShowBSOD] = useState(false);
  const [clicked, setClicked] = useState(false);
  const timeoutsRef = useRef([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // アンマウント時にタイマーとフラッシュを後片付け
    return () => {
      timeoutsRef.current.forEach((id) => clearTimeout(id));
      document.querySelector('.popup-scam-container')?.classList.remove('flashing');
    };
  }, []);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `0${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const getRandomPosition = () => ({
    top: Math.random() * 85 + 5 + 'vh',
    left: Math.random() * 90 + 3 + 'vw',
  });

  const getRandomSize = () => ({
    width: Math.random() * 150 + 200,
    height: Math.random() * 80 + 120,
  });

  const getRandomRotation = () => ({
    rotation: Math.random() * 4 - 2, // 静的にわずかだけ傾ける
    zIndex: 1500 + Math.floor(Math.random() * 500),
  });

  const popupMessages = [
    { title: '警告', icon: '⚠️', msg: '個人情報の入力が必要です', color: '#ff9800', urgent: true },
    { title: 'おめでとう！', icon: '🎁', msg: 'iPhone 15 Pro Max当選！', color: '#4caf50', urgent: true },
    { title: '急いで！', icon: '⏰', msg: 'このオファーはあと30秒で終了！', color: '#f44336', urgent: true },
    { title: '支払い確認', icon: '💳', msg: '配送手数料500円をお支払いください', color: '#9c27b0', urgent: false },
    { title: 'SMS認証', icon: '📱', msg: '認証コードを送信しました', color: '#2196f3', urgent: false },
    { title: 'セキュリティ警告', icon: '🔒', msg: 'アカウントが乗っ取られています！', color: '#ff5722', urgent: true },
    { title: 'ジャックポット！', icon: '🎰', msg: '1,000,000円当選！クリックして受け取る', color: '#ffc107', urgent: true },
    { title: 'ウイルス検出', icon: '🚨', msg: '3つのウイルスが検出されました', color: '#e91e63', urgent: true },
    { title: '現金プレゼント', icon: '💰', msg: '50万円があなたを待っています', color: '#00bcd4', urgent: true },
    { title: 'メール確認', icon: '📧', msg: 'アカウントを24時間以内に確認', color: '#673ab7', urgent: false },
    { title: '限定オファー', icon: '🎯', msg: '今だけ95%OFF！在庫残りわずか', color: '#ff6f00', urgent: true },
    { title: '重要な通知', icon: '🔔', msg: '5件の未読メッセージがあります', color: '#f50057', urgent: false },
    { title: 'VIP招待', icon: '💎', msg: 'プレミアム会員に無料招待', color: '#3f51b5', urgent: false },
    { title: '特別セール', icon: '🎪', msg: 'ブランド品が99%OFF！今すぐ', color: '#ff4081', urgent: true },
    { title: 'システム更新', icon: '📲', msg: '重要な更新があります', color: '#00897b', urgent: false },
    { title: 'Amazon', icon: '📦', msg: '配達に失敗しました。再配達を', color: '#ff9900', urgent: true },
    { title: '銀行からの連絡', icon: '🏦', msg: '口座が一時停止されました', color: '#1976d2', urgent: true },
    { title: 'プレゼント', icon: '🎁', msg: 'MacBook Proが当たりました！', color: '#4caf50', urgent: true },
    { title: 'Google', icon: '🔍', msg: 'あなたは1000人目の訪問者です', color: '#4285f4', urgent: true },
    { title: '緊急', icon: '🆘', msg: 'すぐに行動してください！', color: '#d32f2f', urgent: true },
  ];

  const handleClickPrize = () => {
    if (clicked) return;
    setClicked(true);

    let popupId = 0;
    let currentDelay = 150; // 初期間隔（ミリ秒）
    
    const addPopup = () => {
      const randomMsg = popupMessages[Math.floor(Math.random() * popupMessages.length)];
      popupId++;
      
      setPopups(prev => [...prev, {
        ...randomMsg,
        ...getRandomPosition(),
        ...getRandomSize(),
        ...getRandomRotation(),
        id: popupId,
      }]);
      
      // 50個のポップアップを生成したら停止
      if (popupId >= 50) {
        return;
      }
      
      // 速度を徐々に上げる（間隔を短くする）
      currentDelay = Math.max(20, currentDelay * 0.85);
      
      const timeoutId = setTimeout(addPopup, currentDelay);
      timeoutsRef.current.push(timeoutId);
    };
    
    // 最初のポップアップを開始
    addPopup();

    // 3秒後から背景をフラッシュさせる
    timeoutsRef.current.push(setTimeout(() => {
      document.querySelector('.popup-scam-container')?.classList.add('flashing');
    }, 3000));

    // ブルースクリーン表示
    timeoutsRef.current.push(setTimeout(() => {
      setShowBSOD(true);
      document.querySelector('.popup-scam-container')?.classList.remove('flashing');
    }, 4000));

    // 教育画面へ
    timeoutsRef.current.push(setTimeout(() => {
      setShowEducation(true);
    }, 9000)); // BSODを約5秒見せる
  };

  // ブルースクリーン
  if (showBSOD && !showEducation) {
    return (
      <div className="bsod-screen">
        <div className="bsod-content">
          <h1>:(</h1>
          <p>問題が発生したため、PCを再起動する必要があります。</p>
          <p>エラー情報を収集しています...</p>
          <div className="bsod-progress">0% 完了</div>
          <div className="bsod-error">CRITICAL_PROCESS_DIED</div>
        </div>
      </div>
    );
  }

  // 教育画面
  if (showEducation) {
    return (
      <div className="education-overlay">
        <div className="education-content">
          <h1>⚠️ これは「当選詐欺」の手口です</h1>
          <p>突然「当選しました」と表示し、個人情報やクレジットカード番号を入力させたり、送料を請求したりする詐欺です。</p>
          <ul className="education-list">
            <li>心当たりのない抽選は無視しましょう</li>
            <li>残り時間で焦らせ、判断力を鈍らせます</li>
            <li>クリックすると怪しいサイトが表示されたり、ウイルス感染を装ったりします</li>
            <li>URLを確認し、怪しいサイトでは情報を入力しないでください</li>
            <li>本物のエラーと偽のエラーを見分けましょう</li>
          </ul>
          <br />
          <Link to="/" className="back-link">
            トップページに戻る
          </Link>
        </div>
      </div>
    );
  }

  // 詐欺画面
  return (
    <div className="popup-scam-container">
      {/* 背景の偽サイト */}
      <div className="fake-site-bg">
        <div className="fake-header">
          <div>FreeMovieTube</div>
          <div>ログイン | 登録</div>
        </div>
        <h1>最新の大ヒット映画を無料で視聴！</h1>
        <div className="video-placeholder">
          ▶ 再生ボタンをクリック
        </div>
        <p>説明: このサイトは完全に無料です。登録不要で楽しめます。</p>
      </div>

      {/* 詐欺ポップアップ */}
      <div className="popup-overlay">
        <div className="popup-window">
          <div className="popup-header">
            🎉 おめでとうございます！ 🎉
          </div>
          <div className="popup-body">
            <h2>あなたは当選しました！</h2>
            <div className="prize-img">📱</div>
            <p>本日のラッキービジターに選ばれました！<br />最新のスマートフォンを受け取る権利があります。</p>
            <p>残り時間: <span className="timer">
              {formatTime(timeLeft)}
            </span></p>
            <div className="timer-bar">
              <div
                className="timer-bar-fill"
                style={{ width: `${Math.max(0, Math.min(100, (timeLeft / 300) * 100))}%` }}
              />
            </div>
            <button
              onClick={handleClickPrize}
              className="scam-btn"
              disabled={clicked}
            >
              賞品を受け取る &gt;&gt;
            </button>
          </div>
        </div>
      </div>

      {/* 段階的に表示されるポップアップ群 */}
      {popups.map((popup, index) => (
        <ScamPopup key={popup.id} popup={popup} index={index} />
      ))}
    </div>
  );
}

export default PopupScam;
