# SFgenAI-Front

本リポジトリはSFgenAIのフロントエンドのリポジトリである。

## 改訂履歴

| 日付         | 改訂者 | 改訂内容 |
|------------|-----|------|
| 2025/04/28 | 今村  | 新規作成 |

## 開発環境

主な開発環境の種類とバージョンは以下のとおりである。

* Mac
  * Sonoma 4.6.1 (M1)
* Python
  * 3.11.12
* Docker
  * Docker version 20.10.17, build 100c701
* IntelliJ IDEA (エディタ)
  * Build #IC-251.23774.435, built on April 15, 2025
* Google Chrome (Webブラウザ)
  * 135.0.7049.115（Official Build） （arm64）

## 環境構築手順

### 1. Docker Desktopのインストール

Docker Desktopをインストールする。

Windowsの場合：https://docs.docker.jp/desktop/install/windows-install.html

Macの場合：https://docs.docker.jp/desktop/install/mac-install.html  

インストール後、以下のコマンドを実行して正常にインストールされたかを確認する。

```
$ docker -v
Docker version 20.10.17, build 100c701
```

```
$ docer-compose -v
Docker Compose version v2.10.2
```

### 2. Gitクライアントのインストール

以下のURLからそれぞれのOSに沿ったForkのインストーラーをダウンロードする。

* https://git-fork.com/

※Gitクライアントについて、Forkを指定しているがSourceTreeなどでも可。  
(自分の使いやすいものでOK)

### 3. ソースコードのClone

Forkの左のメニューにある「Repository」右クリックして、「Clone...」を選択する。
「URL」に「`git@github.com:SFgenAI-dev2504/front.git`」を記載し、適宜「Location」にクローン場所を記載する。
「Clone」ボタンをクリックする。

「Location」に指定した場所のソースコードがコピーされる。

### 4. Webアプリの起動

以下のコマンドを実行する。

```docker
$ docker-compose up --build
```

http://127.0.0.1:5000 にWebブラウザでアクセスするとWebアプリの画面が表示される。

### その他

Dockerコンテナの中でコマンドを実行したい場合は、以下のコマンドを実行する。

```
$ docker-compose exec web bash
```

以下のようにコンテナ内に入ることができる。

```
root@23d7d825aafb:/app#
```

例えば、Pythonやライブラリの一覧を見たい時などはコンテナ内で以下を実行する。

```
$ python --version
Python 3.11.12
```

```
$ pip list
Package                Version
---------------------- -------
blinker                1.9.0
click                  8.1.8
Flask                  2.3.3
Flask-SQLAlchemy       3.1.1
greenlet               3.2.1
itsdangerous           2.2.0
Jinja2                 3.1.6
MarkupSafe             3.0.2
mysql-connector-python 8.3.0
pip                    24.0
setuptools             65.5.1
SQLAlchemy             2.0.40
typing_extensions      4.13.2
Werkzeug               3.1.3
wheel                  0.45.1
```

### トラブルシューティング

トラブルシューティングを記載する。

#### docker-compose up --build で「Error response from daemon: Ports are not available ... address already in use」が発生する

Macで以下のようなエラーが発生した場合、ControlCeという機能(Monterey以降実装された機能)が5000番ポートで起動されている可能性がある。

```
Error response from daemon: Ports are not available: exposing port TCP 0.0.0.0:5000 -> 0.0.0.0:0: listen tcp 0.0.0.0:5000: bind: address already in use
```

その場合は、Macの設定からAirPlayレシーバーの機能をオフにする。

参考：https://qiita.com/rune187/items/3f92baec61458e4e5949
