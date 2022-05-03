# 開発の進め方

## 初めに

### このリポジトリは next.js を使用しています

- [next.js ドキュメント](https://nextjs.org)
- [日本語ドキュメント](https://nextjs-ja-translation-docs.vercel.app)

### next.js は react を使ったフレームワークです

- [react](https://ja.reactjs.org/)

## ディレクトリの説明

基本 src/ 配下で作業します

ルートディレクトリ（src が置かれている階層）に置かれてる物は各種設定など

### src の説明

- hooks
  - ここは全体で使うような hooks(状態制御関数)を置く場所
- lib
  - 便利な関数を置く場所用途ごとに別れている
- pages
  - ルーティングの階層 このディレクトリやファイルが URL のパス部分になります
- parts
  - サイトに表示されるパーツを置くところ
- style
  - スタイリングに関する物全般を置くところ
- types

  - サイト全体に関係する型を置くところ

## パーツを作ろう

簡単な送信ボタンを作って見ようかと思います

### 作る前に名前を考えよう

ボタンを作るので単純に Button と付けてはいけません 具体的な名前にしましょう

翻訳サイトなどで翻訳します

- https://translate.google.co.jp/?hl=ja
- https://www.deepl.com/ja/translator

今回は送信ボタンなので SubmitButton とします

さあ早速作って行きたいのですがファイル＆ディレクトリ名の書き方には御作法があります

`命名 ケース` `命名規則 プログラミング`などでググって見ましょう

google タイム

なんとなく分かりました？






parts 配下に SubmitButton ディレクトリを作りましょう

## ビジュアルリグレッションテスト

- ビジュアルリグレッションテストをやりたい方向け（やらなくてもいい）
- アカウント登録
- https://www.chromatic.com/
- github 連携
- https://www.chromatic.com/docs/github-actions
