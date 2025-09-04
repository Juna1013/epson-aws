# AWS Assistant - Project Structure

セイコーエプソン インターン成果発表プロジェクトのファイル構成

## ディレクトリ構造

```
epson-aws/
├── README.md                   # プロジェクト概要とセットアップ
├── PROJECT_STRUCTURE.md        # このファイル
├── 
├── docs/                       # Webページファイル
│   ├── index.html              # メインページ（記事一覧）
│   ├── s3.html                 # サーバーレス解説ページ  
│   ├── s3-merits.html          # S3メリット・デメリット詳細
│   └── epson-proposals.html    # EPSON運用提案・デモページ
│
├── assets/                     # 静的リソース
│   ├── css/
│   │   └── main.css           # 共通CSS（Zenn風スタイル、ダークモード）
│   ├── js/
│   │   ├── theme.js           # テーマ切り替え機能
│   │   └── demo.js            # 製品選定デモ機能
│   └── images/                # 画像ファイル（将来的に使用）
│
├── components/                 # 再利用可能コンポーネント
│   ├── header.html            # 共通ヘッダーテンプレート
│   └── footer.html            # 共通フッターテンプレート
│
└── data/                      # データファイル
    ├── content/               # コンテンツデータ
    │   ├── serverless-content.txt    # サーバーレス関連コンテンツ
    │   └── proposals-content.txt     # 運用提案関連コンテンツ
    └── products/              # 製品データ
        └── demo-products.json # デモ用製品データベース
```

## ファイル説明

### HTMLページ（/docs/）
- **index.html**: メインランディングページ、記事カード一覧
- **s3.html**: サーバーレス技術の基礎解説
- **s3-merits.html**: S3の詳細なメリット・デメリット分析
- **epson-proposals.html**: エプソン社内での具体的運用提案とインタラクティブデモ

### 共通アセット（/assets/）
- **main.css**: 全ページ共通のスタイル定義（Zenn風デザイン、ダークモード対応）
- **theme.js**: ライト・ダークモード切り替え機能
- **demo.js**: 製品選定チャットボットのデモ機能

### コンポーネント（/components/）
- **header.html**: 全ページ共通ヘッダーのテンプレート
- **footer.html**: 全ページ共通フッターのテンプレート

### データファイル（/data/）
- **content/**: 記事コンテンツの元データ
- **products/**: デモ用製品データベース

## 技術仕様

### フロントエンド
- **HTML5** + **CSS3** + **Vanilla JavaScript**
- **Tailwind CSS**: CDN経由で読み込み
- **Font Awesome**: アイコン表示
- **Inter Font**: Google Fonts経由で読み込み

### 機能
- レスポンシブデザイン（モバイル・デスクトップ対応）
- ダークモード切り替え（システム設定連携）
- インタラクティブデモ（製品選定チャットボット）
- Zenn風の技術ブログデザイン

### ブラウザ対応
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 保守性の向上

1. **CSS/JS分離**: 共通スタイルとスクリプトを外部ファイル化
2. **コンポーネント化**: ヘッダー・フッターをテンプレート化
3. **データ分離**: コンテンツデータを構造化してファイル分離
4. **命名規則**: 明確でわかりやすいファイル・ディレクトリ名
5. **ドキュメント**: 構造とファイル用途を明文化

## 今後の拡張

- `/assets/images/`: 画像ファイル用ディレクトリ（将来使用）
- `/data/api/`: API連携用の設定ファイル（将来使用）
- `/tests/`: テストファイル用ディレクトリ（将来使用）