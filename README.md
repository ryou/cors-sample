# CORSをする場合に必要な対策


ドメイン間通信を行う際に、必要なヘッダーとかを忘れがちなのでサンプルとかまとめておく。

## プロジェクトの実行方法

```
# 追加のヘッダーなし
npm run start:no-headers-added

# Access-Control-Allow-Originヘッダーのみ指定
npm run start:allow-origin-no-option-header

# 上記に加えOptionsメソッドを実装し、Access-Control-Allow-Methodsを指定
npm run start:with-option-header

# 更にAccess-Control-Allow-Credentialsを指定
npm run start:with-cookie
```

上記コマンドを実行すると

+ バックエンド：`http://localhost:9000`
+ フロントエンド：`http://localhost:9090`

でアクセス出来る。


## 大きく２パターン

### シンプルリクエスト

+ `Content-Type`ヘッダーが`multipart/form-data`もしくは`text/plain`
+ メソッドが`GET`もしくは`POST`

他にもパターンはあるが、基本的には上記の場合は、

+ HTTPレスポンスの`Access-Control-Allow-Origin`ヘッダーに許可するドメインを指定

だけをすればいい

### プリフライトリクエストが飛ぶパターン

シンプルリクエストじゃない場合、プリフライトリクエストとして先に`OPTIONS`メソッドによるリクエストが自動的に飛び、そのレスポンスを見て適切な`Access-Control-`ヘッダーが指定されている場合に目的のリクエストが飛ばされる。

例えばRESTfulなAPIを構築して、フロントエンドから`PUT`や`DELETE`といったリクエストをする必要がある場合は、`OPTIONS`リクエストに対し`Access-Control-Allow-Methods: PUT,DELETE`を返せばリクエストが正常に処理される。

## クッキーが必要な場合

APIを使用する際の認証にセッションログイン方式を採用する場合、クッキーの送信が必要となるが、その場合は`Access-Control-Allow-Origin`にワイルドカードの`*`は使用できないので注意。


## 参考

[オリジン間リソース共有 (CORS) | MDN](https://developer.mozilla.org/ja/docs/Web/HTTP/CORS)
