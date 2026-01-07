# Team Top Page

このリポジトリは、Vite + React を使用したチームのトップページプロジェクトです。

## 概要
- **フレームワーク**: React 19.2.0
- **ビルドツール**: Vite 7.2.4
- **ルーティング**: React Router DOM 7.11.0
- **目的**: チームのトップページとポップアップ広告機能の実装

## 前提条件
- Node.js (推奨: 16以上)
- npm または yarn

## セットアップ

### 依存関係のインストール
```bash
npm install
```

### 開発サーバの起動
```bash
npm run dev
```

### ビルド
```bash
npm run build
```

### ビルドのプレビュー
```bash
npm run preview
```

### Lint
```bash
npm run lint
```

## プロジェクト構成

```
team-top-page/
├── public/              # 静的ファイル
├── src/
│   ├── main.jsx        # エントリーポイント
│   ├── index.css       # グローバルスタイル
│   ├── assets/         # 画像などのアセット
│   ├── components/     # 再利用可能なコンポーネント
│   │   ├── Card.jsx
│   │   ├── HackingEffect.jsx
│   │   ├── ScamPopup.jsx      # ポップアップ広告コンポーネント
│   │   └── ScamPopup.css
│   └── pages/          # ページコンポーネント
│       ├── TopPage.jsx        # メインのトップページ
│       ├── TopPage.css
│       ├── PopupScam.jsx      # ポップアップのデモページ
│       └── PopupScam.css
├── index.html
├── vite.config.js
└── package.json
```

## 主な機能

### トップページ (`TopPage.jsx`)
- チームメンバーの情報表示
- カードコンポーネントを使用したレイアウト
- ハッキングエフェクトの実装

### ポップアップ広告 (`ScamPopup.jsx`)
- 条件に基づいて表示されるポップアップコンポーネント
- 閉じるボタン付き
- アクセシビリティを考慮した実装
