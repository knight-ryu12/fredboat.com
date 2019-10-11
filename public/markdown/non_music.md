# ミュージック以外のコマンド

`;;help command`でこれらのコマンドの詳細情報を知ることができます。

## 設定系
これらのコマンドは以下のページでもっと詳細に解説されています。 [Configuration](/docs/configuration)、[Permissions](/docs/permissions)

| コマンド                    | 説明                                                           | 例用法                               |
|----------------------------|-----------------------------------------------------------------------|---------------------------------------------|
| ;;config                   | このギルドの設定を表示または変更する。                                      | ;;config auto_resume true                   |
| ;;language                 | いま設定できる言語を表示したりギルドに設定したりする。                         | ;;lang en_PT                                |
| ;;modules                  | モジュールを有効または無効にする。                                          | ;;modules enable Moderation                 |
| ;;prefix                   | プレフィックスをギルドに設定する。                                          | ;;prefix !                                  |
| ;;admin                    | FredBoat ADMINユーザーランクの設定                                        | ;;admin list                                |
| ;;dj                       | FredBoat DJユーザーランクの設定                                           | ;;dj list                                   |
| ;;user                     | FredBoat USERユーザーランクの設定                                         | ;;user list                                 |


## モデレーション
これらのコマンドはユーザーの名前やニックネーム、ID、またはディスクリミネータを指定することができます。

| コマンド                    | 説明                                                           | 例用法                               |
|----------------------------|-----------------------------------------------------------------------|---------------------------------------------|
| ;;hardban ***@ユーザー***      | バンと1日のメッセージの削除を行う              | ;;hardban @Frederikam                       |
| ;;kick ***@ユーザー***         | ユーザーをキックする                                          | ;;kick @ObeIisk                             |
| ;;softban ***@ユーザー***      | ユーザーを"ソフトバン"(キック+メッセージ削除)する | ;;softban @Ternunda Hunter          |


## ユーティリティ

| コマンド                    | 説明                                                           | 例用法                               |
|----------------------------|-----------------------------------------------------------------------|---------------------------------------------|
| ;;avatar ***@username***   | ユーザーのアバターを表示                                         | ;;ava @Frederikam                           |
| ;;brainfuck ***code***     | [Brainfuck](https://en.wikipedia.org/wiki/Brainfuck)コードを実行    | ;;brainfuck ,.+.+. a                        |
| ;;mal ***search term***    | [MyAnimeList](https://myanimelist.net/)を検索  | ;;mal re:zero                               |
| ;;math                     | シンプルな計算を実行                                           | ;;math add 42 69                            |
| ;;serverinfo               | ギルドの情報を出力             | ;;serverinfo                                |
| ;;userinfo OR ;;userinfo ***@username*** | 自分についての情報を出力するか指定したユーザーについての情報を表示 | ;;userinfo OR ;;userinfo @FredBoat♪♪#7284 |
| ;;weather ***location***   | 指定した場所の天気を表示                                  | ;;weather San Francisco                     |


## お楽しみ
重要なコマンドだけがここにリストされています。`;;commands Fun`を実行するとすべてのコマンドを見ることができます。

| コマンド                    | 説明                                                           | 例用法                               |
|----------------------------|-----------------------------------------------------------------------|---------------------------------------------|
| ;;dance                    | 1分間ダンスします                                                   | ;;dance                                     |
| ;;joke ***@username***     | ジョークを一発。(英語だけど。)                                             | ;;joke @Weiss Schnee                        |
| ;;riot ***text***          | ([例]](https://fred.moe/qxB.png))                   | ;;riot Hello, world                         |
| ;;say ***text***           | 入れたものをエコー                                         | ;;say Hi dad.                               |
| ;;magic ***text***         | 魔法を撃ちます。                                                        | ;;magic Avada Kedavra                       |
| ;;catgirl                  | 猫耳少女！                                                       | ;;neko                                      |
| ;;facedesk                 | 机に突っ伏してる画像を出力                                           | ;;facedesk                                  |
| ;;hug ***@username***      | ハグ。                                                         | ;;hug @Shredder121                          |
| ;;pat ***@username***      | なでなで・・・                                                         | ;;pat @Real KC                              |
| ;;roll                     | 床をロールします                                                          | ;;roll                                      |
| ;;wombat                   | wombatを出力                                                        | ;;wombat                                    |


## 情報系

FredBoatについて知るか、デバッグのために使えます。

| Command                    | Description                                                           | Example usage                               |
|----------------------------|-----------------------------------------------------------------------|---------------------------------------------|
| ;;commands                 | いまあるコマンドをリストで出力します。                                              | ;;commands                                  |
| ;;debug                    | ギルドのデバッグ情報を表示します。                              | ;;debug                                     |
| ;;fuzzy ***term***         | ユーザーのあいまい検索をします。                             | ;;fuzzy roblox fan                          |
| ;;getid                    | いまいるテキストチャンネルとボイスチャンネルのIDを表示します。           | ;;getid                                     |
| ;;git                      | いま実行されているFredBoatのgitメタデータを表示します。   | ;;git                                       |
| ;;help OR ;;help ***command*** | このBotについてのヘルプか指定したコマンドのヘルプを表示します。                | ;;help OR ;;help play                       |
| ;;invite                   | FredBoatギルドへの招待リンクを表示します。                                      | ;;invite                                    |
| ;;music                    | ミュージック系のコマンドヘルプを表示します。                         | ;;music                                     |
| ;;ping                     | Discordサーバーにpingを送る。                                           | ;;ping                                      |
| ;;shards                   | FredBoatのシャード状態を表示します。                           | ;;shards                                    |
| ;;stats                    | FredBoatの状態を表示します。                                  | ;;stats                                     |
| ;;version                  | JDA(Java/Kotlin用Discordライブラリ)のバージョンを表示します。        | ;;version                                   |
| ;;github                   | Fre_dさんのGitHubプロフィールを表示                                | ;;github                                    |
| ;;repo                     | FredBoatのgithubリポシトリへのリンクを表示                          | ;;repo                                      |
