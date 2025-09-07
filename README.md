# epson-aws

AWS サービスを活用したセイコーエプソン業務効率化提案サイト

<p align="center">
  <a href="https://skillicons.dev"><img src="https://skillicons.dev/icons?i=html,css,js,tailwind,aws,github" /></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/AWS-S3%2BLambda%2BAPI_Gateway-orange" alt="AWS Services" />
  <img src="https://img.shields.io/badge/Frontend-Static_HTML-blue" alt="Frontend" />
  <img src="https://img.shields.io/badge/Theme-Dark_Mode-brightgreen" alt="Dark Mode" />
</p>

## 📖 概要

このプロジェクトは、AWS のサーバーレス技術（特に S3、Lambda、API Gateway）を活用して、製造業における業務効率化と品質向上を実現するための提案サイトです。射出成型精度分析、製品選定アプリ、印刷機色分析など、具体的な業務活用例を紹介しています。

## 🎯 目的

- S3 を中心とした AWS サービスの業務利用方法を理解する
- サーバーレス技術による製造業 DX 推進の可能性を探る
- 実際の業務に即した具体的な活用例を提案する

## 🏗️ プロジェクト構造

```bash
epson-aws/
├── assets/                 # 静的資源
│   ├── css/                # スタイルシート
│   └── js/                 # JavaScript ファイル
├── pages/                  # HTML ページ
│   ├── analysis/           # 分析関連ページ
│   ├── guides/             # ガイドページ
│   └── proposals/          # 提案ページ
├── templates/              # テンプレート
│   └── partials/           # 部分テンプレート
├── data/                   # データファイル
└── docs/                   # ドキュメント
```

## 🚀 はじめ方

### 必要な環境

- モダンな Web ブラウザ
- ローカル Web サーバー（推奨）

### ローカル環境での実行

1. リポジトリをクローン

```bash
git clone https://github.com/[username]/epson-aws.git
cd epson-aws
```

2. ローカルサーバーを起動

```bash
# Python を使用する場合
python -m http.server 8000

# Node.js を使用する場合
npx serve .
```

3. ブラウザで `http://localhost:8000` にアクセス

## 📄 主要コンテンツ

### [サーバーレスとは？](pages/guides/serverless-intro.html)

- サーバーレス技術の基本概念
- オンプレミス、仮想サーバーとの比較
- 管理不要で開発に集中できるメリット

### [S3 のメリット・デメリット](pages/analysis/s3-merits.html)

- S3 の主要な利点と制約
- EC2 との詳細比較
- デメリットの補完方法

### [EPSON 社内での運用提案](pages/proposals/epson-proposals.html)

- 射出成型精度分析システム
- 製品選定支援アプリ
- 印刷機色分析ツール
- 社内日程管理システム

## 🛠️ 技術スタック

- **フロントエンド**: HTML5, CSS3, JavaScript
- **スタイリング**: Tailwind CSS
- **アイコン**: Font Awesome
- **フォント**: Inter
- **テーマ**: ダークモード対応

## 🌟 主な機能

- **レスポンシブデザイン**: モバイル・デスクトップ対応
- **ダークモード**: テーマ切り替え機能
- **インタラクティブ UI**: ホバーエフェクトとアニメーション
- **SEO 対応**: メタタグとセマンティック HTML

## 📊 AWS サービス活用例

### Amazon S3

- 静的コンテンツの配信
- 大量データの保存・分析
- セキュリティ制御とアクセス管理

### AWS Lambda

- イベント駆動型の自動処理
- データ整形・分析処理
- 異常検知とアラート

### API Gateway

- セキュアな API エンドポイント
- リクエストのルーティング
- 認証・認可機能

## 🔧 開発

### ファイル構成

- `pages/index.html`: メインランディングページ
- `assets/css/main.css`: カスタムスタイル
- `assets/js/theme.js`: テーマ切り替え機能
- `templates/partials/`: 共通コンポーネント

## 🚀 本番環境

### 静的サイトホスティング

このサイトは静的 HTML/CSS/JS で構成されているため、以下のサービスで簡単にデプロイできます：

- **AWS S3** + CloudFront
- **GitHub Pages**
- **Netlify**
- **Vercel**

## 🤝 コントリビューション

1. フォークを作成
2. フィーチャーブランチを作成 (`git checkout -b feature/amazing-feature`)
3. コミット (`git commit -m 'Add some amazing feature'`)
4. プッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

## 📄 ライセンス

このプロジェクトは MIT ライセンスの下で公開されています。詳細は [LICENSE](LICENSE) ファイルを参照してください。

## 👥 作成者

- **インターン生** - セイコーエプソン株式会社
- **期間**: 2025年9月1日〜5日

## 🔗 関連リンク

- [AWS Documentation](https://docs.aws.amazon.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Font Awesome](https://fontawesome.com/)
