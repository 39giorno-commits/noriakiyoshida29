# 吉田法央 公式サイト

Astro + Tailwind CSSで構築した静的ブランドサイトです。文章は `src/content/pages/home.md`、画像は `public/images/` で管理します。

## ローカル起動

```bash
npm install
npm run dev
```

## 本番ビルド

```bash
npm run build
npm run preview
```

## 主な編集箇所

- 全文章・URL: `src/content/pages/home.md`
- メイン写真: `public/images/yoshida-hero.jpg`
- OGP画像: `public/images/ogp.svg`（公開前に1200×630の写真入りPNGへ差し替え推奨）
- 色・全体スタイル: `src/styles/global.css`
- セクション構造: `src/pages/index.astro`

## GoogleフォームとSNS

`home.md` の `support.url` と `social` のURLを実際のリンクへ差し替えてください。

## Vercel

1. このフォルダをGitHubの新規リポジトリへpushします。
2. Vercelで `Add New > Project` からリポジトリをImportします。
3. Framework PresetはAstroとして自動認識されます。Build Commandは `npm run build`、Output Directoryは `dist` です。
4. デプロイ完了後、Vercelの `Settings > Domains` に `yoshidanoriaki.com` と `www.yoshidanoriaki.com` を追加します。
5. Vercel画面に表示されるDNSレコードを、お名前.com Naviの「ネームサーバー/DNS > ドメインのDNS設定」で登録します。値はVercel画面に出た最新値をそのまま使ってください。
6. `www` またはルートドメインのどちらかをPrimaryにし、もう一方をリダイレクト設定します。
7. DNS反映後、VercelがSSL証明書を自動発行します。

## 公開前チェック

- GoogleフォームURL、SNS URL、連絡先の確定
- 原稿の事実確認
- 使用写真の権利・掲載許諾
- OGP画像のPNG化
- LighthouseでPerformance / Accessibility / Best Practices / SEOを確認
