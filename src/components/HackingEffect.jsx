import { useState, useEffect } from 'react';

function HackingEffect({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress < 100) {
      const timer = setTimeout(() => {
        const increment = 0.3 * Math.floor(Math.random() * 5) + 1; 
        setProgress(prev => Math.min(prev + increment, 100));
      }, 100);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        onComplete();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [progress, onComplete]);

  return (
    <div className="hacking-container">
      <div className="hacking-content">
        <h1 className="warning-text">WARNING: SYSTEM COMPROMISED</h1>
        
        <div style={{ 
          color: '#ffd700',
          fontSize: '1rem', /* 少し小さく */
          fontWeight: 'bold',
          fontFamily: 'monospace',
          border: '2px solid #ffd700',
          padding: '5px 15px', /* パディング削減 */
          backgroundColor: 'rgba(20, 20, 0, 0.9)',
          display: 'inline-block',
          marginBottom: '1rem', /* マージン削減 */
          boxShadow: '0 0 10px rgba(255, 215, 0, 0.3)'
        }}>
          ⚠ [demo]: これはシミュレーションです。実際の被害はありません。
        </div>

        <p className="hacking-message">あなたのPCはウイルスに感染しています...</p>
        <div className="progress-bar-container">
          <div 
            className="progress-bar-fill" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="percentage">{Math.floor(progress * 1000) / 1000}% COMPLETE</p>
        <div className="terminal-text">
          <p>&gt; Accessing root directory...</p>
          <p>&gt; Bypassing firewalls...</p>
          <p>&gt; Extracting personal data...</p>
          {progress > 50 && <p>&gt; Uploading to remote server...</p>}
          {progress > 80 && <p>&gt; Encrypting local files...</p>}
        </div>
      </div>
    </div>
  );
}

export default HackingEffect;
