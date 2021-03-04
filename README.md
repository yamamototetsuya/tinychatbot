# 簡易チャットボット

## 設置

index.html、tinybot.js、database.js を、任意のウェブサーバー上に置き、index.html に対応するURLにアクセスします。

anchorme.js も同ディレクトリに置くと、URLがリンクの形に自動で変形されます。 http://alexcorvi.github.io/anchorme.js/ を使わせていただきました。

## データ

database.js を編集して、会話の内容をつくります。

default\_comments が、マッチするキーワードがない場合のデフォルト返答です。ランダムにどれかを返します。

normalize\_db が、語彙統制のためのものです。リストの一番左端が正規の用語で、つづくのがそれのバリエーションです。

response\_db が、マッチするキーワードに対応する返答文集です。#init は起動時のメッセージです。カンマ区切りは、and条件のマッチを表します。マッチのチェックは、一番下のものから行います。これによって、「天気」を「天気,予報」の上に書けます。このほうが並び順が直観的になるんじゃないかと思いました。

# ライセンス

The MIT License (MIT)
Copyright (c) 2022 Yamamoto Tetsuya
https://opensource.org/licenses/mit-license.php


