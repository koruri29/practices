# TS API Design Practice - Posts API

TypeScript + Express を用いた小規模API設計演習。

## Purpose

以下の理解を目的とする。

- REST API設計
- request / response DTO分離
- controller / service / repository の責務分離
- 業務操作（publish）とCRUDの分離
- pagination設計
- PATCH設計

---

## Endpoints

### GET /api/posts

記事一覧取得。

### GET /api/posts/:id

記事詳細取得。

存在しない場合：

- 404 Not Found

### POST /api/posts

記事作成。

作成時：

- status = "draft"
- publishedAt = null

### POST /api/posts/:id/publish

記事公開。

公開時：

- status = "published"
- publishedAt = now()

すでに公開済みの場合：

- 409 Conflict

存在しない場合：

- 404 Not Found

---

## Architecture

```txt
controller
  ↓
service
  ↓
repository
````

### controller

* HTTP request / response を扱う

### service

* 業務ロジック
* DTO変換
* 状態遷移制御

### repository

* データ取得・更新
* インメモリDB操作

---

## Current Implementation

* インメモリDB
* DTO分離
* publish API
* ErrorResponse
* layered architecture

---

## TODO

* PATCH /api/posts/:id
* pagination実装
* request validation
* 共通エラーハンドリング
* テスト
* persistence（DB化）
