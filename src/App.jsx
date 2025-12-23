import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [progress, setProgress] = useState(0)
  const [showMainContent, setShowMainContent] = useState(false)

  useEffect(() => {
    if (progress < 100) {
      const timer = setTimeout(() => {
        // ランダムな増分で進捗を進める
        const increment = Math.floor(Math.random() * 5) + 1
        setProgress(prev => Math.min(prev + increment, 100))
      }, 100)
      return () => clearTimeout(timer)
    } else {
      // 100%になったら少し待ってからメインコンテンツを表示
      const timer = setTimeout(() => {
        setShowMainContent(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [progress])

  if (!showMainContent) {
    return (
      <div className="hacking-container">
        <div className="hacking-content">
          <h1 className="warning-text">WARNING: SYSTEM COMPROMISED</h1>
          <p className="hacking-message">あなたのPCはウイルスに感染しています...</p>
          <div className="progress-bar-container">
            <div 
              className="progress-bar-fill" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="percentage">{progress}% COMPLETE</p>
          <div className="terminal-text">
            <p>&gt; Accessing root directory...</p>
            <p>&gt; Bypassing firewalls...</p>
            <p>&gt; Extracting personal data...</p>
            {progress > 50 && <p>&gt; Uploading to remote server...</p>}
            {progress > 80 && <p>&gt; Encrypting local files...</p>}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container safe-mode">
      {/* ヘッダー部分 */}
      <header>
        <div className="alert-banner">
          ⚠️ これはセキュリティ啓発のためのシミュレーションです ⚠️
        </div>
        <h1>サイバーセキュリティ啓発ポータル</h1>
        <p>先ほどの画面は、ウイルス感染時の挙動を模したシミュレーションです。</p>
        <p>実際の被害に遭わないために、正しい知識を身につけましょう。</p>
      </header>

      {/* メインコンテンツ */}
      <main>
        <section className="links-section">
          <h2>コンテンツ一覧</h2>
          
          <div className="card-container">
            {/* WordPressへのリンク (重要: aタグを使う) */}
            <div className="card">
              <h3>セキュリティブログ</h3>
              <p>最新の脅威と対策について学ぶ</p>
              <a href="/wordpress/" className="btn">記事を読む</a>
            </div>

            {/* シミュレーション1: メール詐欺 */}
            <div className="card">
              <h3>メール詐欺体験</h3>
              <p>怪しいメールのリンクをクリックするとどうなる？</p>
              <a href="/c0a24220" className="btn">体験する</a>
            </div>

            {/* シミュレーション2: 偽サイト */}
            <div className="card">
              <h3>偽ログイン画面</h3>
              <p>本物そっくりの偽サイトを見破れますか？</p>
              <a href="/c0b99001/login/" className="btn">体験する</a>
            </div>

            {/* シミュレーション3: サポート詐欺 */}
            <div className="card">
              <h3>サポート詐欺</h3>
              <p>突然の警告画面！その時どう動く？</p>
              <a href="/c0b99001/support/" className="btn">体験する</a>
            </div>

            <div className="card">
              <h3>ウイルス対策クイズ</h3>
              <p>あなたのセキュリティ知識をチェック</p>
              <a href="/e0b99002/" className="btn">クイズに挑戦</a>
            </div>
            
            {/* 必要に応じて増やしてください */}
          </div>
        </section>
      </main>

      {/* フッター */}
      <footer>
        <p>© 2025 東京工科大学 プロジェクト演習 - セキュリティ啓発チーム</p>
      </footer>
    </div>
  )
}

export default App