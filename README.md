### 简介
目前：这是一个**命令行**显示自指定**基金**信息的项目，需要先配置想查看的股票、基金代码，然后通过爬虫抓取基金信息并在命令行中显示。

目标：显示基金和股票信息，只求简洁。

背景：上班不想掏手机和电脑打开基金股票页面，想看的时候想敲个命令直接显示**今日估值、涨跌百分比、昨日估值、昨日涨跌百分比**，伪装上班状态（逃

![效果预览][1]

### 用到的东西
主要使用：Request + Cheerio + Colors

### 使用方法
#### 步骤1
``` bash
git clone https://github.com/LonHon/cmd-asset.git
cd cmd-asset
npm install
```
#### 步骤2
编辑setting.js，格式如下：
``` javascript
    // ...
    funds: [
      {
        code: '002939' // 基金代码
      },
      {
        code: '260108'
      }
    ]
    // ...
```

#### 步骤3
``` bash
node index.js
```

### 最后
TODO：
* [ ] 1. 添加股票查看功能


  [1]: https://i.loli.net/2020/01/03/iGcFa2m9fPbpL8X.jpg