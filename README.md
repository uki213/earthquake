# $.earthquake.js

DOM変更検知プラグイン $.earthquake.js

## 概要

$.earthquake.jsはDOMの変化を検知しイベントとして発行することができるjQueryプラグインです。

## 必要とするもの

* [jQuery](https://jquery.com/)

## 使用法

    <script type="text/javascript" src="$.earthquake.js"></script>
[ダウンロードして](https://github.com/uki213/earthquake)scriptタグで読み込ませます。

    $(targetDom).earthquake();
監視対象のDOMに対して実行します。監視対象のDOMが変更された場合は「earthquake」と言イベントを発行します。

    $(targetDom).earthquake({
        eventName: 'originalEventName'
    };);
オプションを設定することにより、好きなイベント名を設定することも可能です。  

カスタムバリデーションが設定されていても、title要素のエラー文言のほうが優先されます。

## 注意事項
プラグインの特性上、永久ループが起きやすくなります。  
ご利用は計画的に。

## LICENCE

[MIT License](http://opensource.org/licenses/mit-license.php)

## DEMO

[http://uki213.github.io/earthquake/](http://uki213.github.io/earthquake/)
