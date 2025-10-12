# 📝 メモアプリ (Express + React + TypeScript)

## 📖 概要
シンプルなメモを追加・削除できるサンプルアプリです。  
バックエンドは **Express (TypeScript)**、フロントエンドは **React (Vite + TypeScript)** で構成されています。

![アプリのスクリーンショット](./docs/images/screenshot.png)

---

## 🧩 構成

```
memo-app/
├── backend/ # Express API
│ ├── src/
│ │ ├── index.ts # エントリポイント
│ │ ├── routes/
│ │ │ └── notes.ts # メモAPIルート
│ │ └── types/
│ │ └── note.ts # 型定義
│ ├── package.json
│ └── tsconfig.json
│
└── frontend/ # React + Vite フロントエンド
  ├── src/
  │ ├── App.tsx
  │ ├── App.css
  │ └── main.tsx
  ├── index.html
  ├── vite.config.ts
  └── package.json
```


---

## ⚙️ 使用技術

| 分類 | 技術 |
|------|------|
| 言語 | TypeScript |
| サーバー | Express.js |
| フロントエンド | React (Vite) |
| 通信 | Fetch API |
| ツール | Postman（APIテスト） |

---

## 🚀 機能

- メモ一覧取得（GET `/api/notes`）
- メモ追加（POST `/api/notes`）
- メモ削除（DELETE `/api/notes/:id`）
- シンプルなUIで操作可能（React）

---

## 🧭 セットアップ手順

### ① サーバー (Express API)

```bash
cd backend
npm install
npm run dev
cd frontend
npm install
npm run dev
```
