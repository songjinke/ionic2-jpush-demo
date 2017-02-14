# Ionic2 jPush Demo
基于最新版本ionic2（目前支持到ionic 2.0.1/ionic-native 2.4.1），集成极光推送，做了两个常用示例：

1. 获取Registration ID。
2. App接收到推送通知后跳转到特定页面。

## 注意事项
由于jPush是集成到ionic-native，需要用此项目的node_modules/ionic-native/dist替换你的ionic2项目对应目录的内容。
注意查看你ionic2项目中package.json里的ionic-native版本，在此项目的git commits中找对应的版本。

## 参考
- Ionic官方文档：[http://ionicframework.com/docs/](http://ionicframework.com/docs/)
- Ionic Native Github: [https://github.com/driftyco/ionic-native](https://github.com/driftyco/ionic-native)
- Ionic Changelog: [https://github.com/driftyco/ionic/blob/master/CHANGELOG.md](https://github.com/driftyco/ionic/blob/master/CHANGELOG.md)
- jPush PhoneGap/Cordova Plugin: [https://github.com/jpush/jpush-phonegap-plugin](https://github.com/jpush/jpush-phonegap-plugin)