# FredBoatのドキュメントへようこそ！
FredBoatは、Discordサーバーに高品質の音楽を配信する無料のDiscord音楽ボットです!

FredBoatはあなたのDiscordサーバーに簡単に設定なしに追加できます！


## Botの設定っ
FredBoatは簡単に利用できるように作られています！ 自分のアカウントで[このリンク](https://goo.gl/cFs5M9)を使えば簡単にFredBoatをあなたのサーバーで使用できます。 `サーバー管理`の権限が必要なので気を付けてくださいね。

# ミュージックコマンドs

| コマンド                    | 説明                                                                   | 使用例とエイリアス                             |
|----------------------------|-----------------------------------------------------------------------|---------------------------------------------|
| ;;play ***url***           | 渡されたURLの曲を再生します。サポートされているリンクは以下を参照               | ;;p https://www.youtube.com/watch?v=dQw4w9WgXcQ |
| ;;play ***words***         | YoutubeとSoundCloudを探します                                           | ;;p Never Gonna Give You Up                 |
| ;;queue                    | 登録された曲を確認します                                                  | ;;q                                         |
| ;;nowplaying               | 今再生している曲の内容を表示します                                          | ;;np                                        |
| ;;skip                     | キューから今の曲を削除します。`;;help skip`で複数曲スキップする方法を確認できます                                    | ;;s     |
| ;;voteskip                 | 投票スキップをします。50%の投票でスキップされます。                           | ;;v                                         |
| ;;stop                     | プレイヤーをストップして、キューを**全削除**します。モデレーター専用！           | ;;st                                        |
| ;;pause                    | 一時停止します。                                                         | ;;pause                                     |
| ;;resume                   | 再開します。                                                            | ;;resume                                    |
| ;;join                     | FredBoatを今いるボイスチャンネルに参加させます。                             | ;;j                                         |
| ;;leave                    | FredBoatを今いるボイスチャンネルから抜けさせます。                           | ;;lv                                        |
| ;;repeat                   | リピートモードを変更します。コマンドを走らせると詳細を確認できます               | ;;rep all                                   |
| ;;shuffle                  | シャッフルモードを有効/無効にできます                                       | ;;sh                                        |
| ;;reshuffle                | キューを再シャッフルします。                                               | ;;resh                                      |
| ;;fwd ***time***           | トラックを渡された時間分進めます。                                          | ;;fwd 2:30                                  |
| ;;rew ***time***           | トラックを渡された時間分戻します。                                          | ;;rew 30                                    |
| ;;seek ***time***          | トラックを渡された時間にします。                                           | ;;seek 2:45:00                              |
| ;;restart                  | 今のトラックを再スタートします。                                           | ;;restart                                   |
| ;;history                  | 再生されたトラックのヒストリを表示します                                     | ;;h                                         |
| ;;export                   | 今のキューをhastebinにコピーします                                        | ;;ex                                        |
| ;;volume                   | ボリュームをセットします([FredBoatPatron](/docs/donate)オンリー！)          | ;;vol 150                                   |
| ;;help ***command***       | コマンドのヘルプを使い方を表示します                                        | ;;help skip                                 |


FredBoatはアメリカでブロックされた曲は再生できません(著作権の問題)

## プレイリストに曲を追加する。
プレイリストに曲を追加するのは簡単です。 ;;playコマンドを使って追加してください。例:
```
;;play https://www.youtube.com/watch?v=dQw4w9WgXcQ
;;play rick roll
```
URLを直接指定することもできますし、FredBoatがYouTube検索もしてくれます。例:

```
Please select a track with the ';;play 1-5' command:
1: Rick Astley - Never Gonna Give You Up (03:33)
2: YOUTUBERS REACT TO RICKROLL (Ep. #5) (09:20)
3: I Rick Roll My Entire Chemistry Class! (05:55)
4: The New Rick Roll! (04:26)
5: Melania Trump's RNC RICKROLL (00:19)
```

`;;play <番号>`で指定ができます。または`;;1`で1番目のトラックを選択、`;;3`で3番目のトラックを選択,`;;4 1 3`と指定することで複数選択もできます。

**サポートされているサイト:**

* YouTube

* SoundCloud

* Bandcamp

* Twitch

* Vimeo

* Mixer

* [Wastebin](https://wastebin.party) リンクのリスト

* Spotifyプレイリスト (YouTube & SoundCloudからロードされます。 [FredBoatPatron](/docs/donate)オンリー！)

もしほかのサイトの案があるなら教えてくださいね！

## Join FredBoat Hangout!
FredBoatHangoutに招待します。何も気にしないで気軽に意見質問してくださいね！[参加する](https://discord.gg/cgPFW4q)

## サポート
[FAQ](https://fredboat.com/docs/faq)を読んでから質問などをしてください。

[Discord server](https://discord.gg/cgPFW4q)に参加するか、または[@DiscordFredBoat](https://twitter.com/DiscordFredBoat)にツイートしてください。

## 規約
Fre\_dがホストする(セルフホスト以外)ボットについては(非常に小さい!)[利用規約](https://fredboat.com/docs/terms)に同意する必要があります。

2017年4月25日有効。

## Credits
FredBoatはFre\_d(Frederikam)とGitHubの支援によって開発されました。

[Java profiler](https://www.ej-technologies.com/products/jprofiler/overview.html)を提供してくれたEJ Technologiesに感謝。

[![JProfiler](https://www.ej-technologies.com/images/product_banners/jprofiler_large.png)](https://www.ej-technologies.com/products/jprofiler/overview.html)

FredBoat logo By Sturm - jdkemt\#0216.

翻訳: Chromaryu
