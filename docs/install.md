# インストール

## 事前準備

作業に必要なツールのインストールをします

### webstorm をインストール(有料)

- https://www.jetbrains.com/webstorm/
- ダウンロードへ行き ダウンロードしてください
- intel 版と apple-silicon 版があるので注意
- インストール
- インストールして開くとライセンスを聞かれるので buy license をクリック
- 個人用を選んでライセンスを購入してください
- トライアルもある（一ヶ月無料）のでとりあえずこちらでも OK

### webstorm の設定をする

- Preferences を選択

![設定](./images/setting1.png '画像タイトル')

- plugin を選択
- marketplace を選択
- 検索窓で Japanese Language Pack を入力
- Japanese Language Pack をインストール
- 再起動

###プロジェクトを作る

- new project で選択してプロジェクトを作成する

### brew をインストール

- https://brew.sh/index_ja へ行きインストール用のスクリプトをコピーしてくる
- webstorm のターミナルを開く
- 先ほどコピーしたスクリプトを貼り付けて実行する
- 問題がでた＆分からない時は mac brew install で検索

### git のインストール

- まずは git が入っているか確認 `git --version` をターミナルに貼り付け実行
- バージョンが出てこなければ以下を実行
- `brew install git` をターミナルに貼り付け実行
- 問題がでた＆分からない時は mac git で検索

### nodenv をインストール

- `brew install nodenv` をターミナルに貼り付け実行
- インストールされたら`vi ~/.zshrc`を打ち実行
- ターミナルがファイルの編集画面になります
- i キーを押す
- そうすると insert モードになる
- `eval "$(nodenv init -)"`を打ち
- esc キーで insert モードから抜ける
- `:wq` と打って実行
- `source ~/.zshrc`を打って実行
- 問題がでた＆分からない時は nodenv mac brew

### コードを clone(ダウンロードする)

- ターミナルを開いて
- `git clone https://github.com/ikedahideharu/nextjs-starterkit.git` を実行
- 終わったら以下のコマンドでディレクトリを移動する
- `cd my-app`
- 以下のコマンドでこのプロジェクトの node バージョンを確認
- `cat .node-version`
- 以下のコマンドで自分の node バージョンを確認する
- `node -v`
- node バージョンが合っていれば OK

### モジュールをインストール

- `npm ci`を打ち実行
- インストールが終わったら`npm run dev`を打ち実行
- これで開発サーバーが立ち上がる
- ブラウザで http://localhost:3000 にアクセスするとページが確認できるはずです
- 開発サーバーは `control + c` で停止できます

### マイクロ CMS に登録する

- `cp ./docs/.envExample ./.env` コマンドで.env ファイルを作ります
- https://app.microcms.io/signupでアカウント登録してください
- 登録できたらブログのテンプレートを選びます（出来上がるまで少し時間がかかる）
- API プレビューへ

  ![設定](./images/setting2.png '画像タイトル')

- プレビュー画面で API キーをコピーして.env の API_KEY に貼り付けます（.env 意外に絶対書かないでください）
- プレビュー画面で サービスドメインをコピーして.env の SERVICE_DOMAIN に貼り付けます（.env 意外に絶対書かないでください）
- プレビュー画面で エンドポイントをコピーして.env の BLOG_ENDPOINT に貼り付けます（.env 意外に絶対書かないでください）
- 画像の値をいれても動きません必ずご自身のものでやってください

![設定](./images/setting3.png '画像タイトル')

- `npm run dev`で起動させましょう
- 
