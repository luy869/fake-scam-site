import { useState, useEffect } from 'react'
import './TopPage.css'
import Card from '../components/Card'
import HackingEffect from '../components/HackingEffect'

function TopPage() {
  // sessionStorageを確認して、すでに見たことがあるかチェック
  const hasSeenEffect = sessionStorage.getItem('hasSeenHackingEffect')
  const [showMainContent, setShowMainContent] = useState(!!hasSeenEffect)

  const handleEffectComplete = () => {
    sessionStorage.setItem('hasSeenHackingEffect', 'true')
    setShowMainContent(true)
  }

  if (!showMainContent) {
    return <HackingEffect onComplete={handleEffectComplete} />
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
        <p>実際の被害に遭わないために、知識を身につけましょう。</p>
      </header>

      {/* メインコンテンツ */}
      <main>
        <section className="links-section">
          <h2>コンテンツ一覧</h2>
          
          <div className="card-container">
            {/* WordPressへのリンク (重要: aタグを使う) */}
            <Card 
              title="セキュリティブログ"
              description="最新の脅威と対策について学ぶ"
              link="/wordpress/"
              linkText="記事を読む"
              isExternal={true}
            />

            {/* シミュレーション1: メール詐欺 */}
            <Card 
              title="ポップアップ詐欺"
              description="身に覚えのない当選。あなたならどうする？"
              link="/c0a24220"
              linkText="体験する"
            />

            {/* シミュレーション2: 偽サイト */}
            <Card 
              title="突然の"
              description="本物そっくりの偽サイトを見破れますか？"
              link="/c0b23142"
              linkText="体験する"
              isExternal={true}
            />

            {/* シミュレーション3: サポート詐欺 */}
            <Card 
              title="サポート詐欺"
              description="突然の警告画面！その時どう動く？"
              link="/c0a24036"
              linkText="体験する"
              isExternal={true}
            />

            <Card 
              title="ワンクリック詐欺"
              description="閉じられない警告画面に注意！"
              link="/c0a24124"
              linkText="体験する"
              isExternal={true}
            />
            
            {/* 必要に応じて増やしてください */}
          </div>
        </section>
      </main>

      {/* フッター */}
      <footer>
        <p>© 2025 東京工科大学 プロジェクト演習 - チーム13</p>
        <button 
          onClick={() => {
            sessionStorage.removeItem('hasSeenHackingEffect')
            window.location.reload()
          }}
          style={{
            marginTop: '10px',
            background: 'transparent',
            border: '1px solid #666',
            color: '#666',
            padding: '5px 10px',
            cursor: 'pointer',
            fontSize: '0.8rem'
          }}
        >
          オープニング演出をもう一度見る
        </button>
      </footer>
    </div>
  )
}

export default TopPage
