# IE-Blocker

> 再见了~IE！

IE-Blocker帮助你通知用户他们的浏览器已经过时，并阻止用户继续访问网站。

![Screenshot][1]

## 适用场景

如果你的网站不支持IE6-9，那么使用旧版IE的用户访问你的网站时会看到一个布局错乱、功能失效的网站。IE-Blocker正式为了避免这种尴尬而生。

使用IE-Blocker的网站不允许旧版IE用户访问网站内容，取而代之的是，用户会看到一个友好又精美的提示框，告知他们为何无法继续访问网站，并引导他们下载使用最新的浏览器。

## 实时预览

请使用 **IE 6-9** 浏览器访问下面的链接。

[Live Preview - English Version][http://panteng.me/demos/ie-blocker/demo.en.html]

[实时预览 - 中文版][http://panteng.me/demos/ie-blocker/demo.zhcn.html]


## 安装方法

### 手动安装
你可以直接从**[Release][4]**页面下载最新版本的IE-Blocker。将下载好的文件解压，并将其中名为ie-blocker的文件夹放到你的项目中。

### 使用Bower或NPM安装
你还可以使用最喜欢的包管理器进行安装，在控制台中运行：

    // With Bower
    bower install ie-blocker --save
    
    // With Npm
    npm install ie-blocker --save

## 使用方法

在`<head>`标签中引入 **ie-blocker.css** 和 **ie-blocker.zhCN.js（或ie-blocker.en.js）**。使用IE特有的条件注释，以保证IE-Blocker只在旧版IE中被加载（IE的版本范围可根据需要自定义）。例如：

        <!--[if lte IE 8]>
        <link rel="stylesheet" href="ie-blocker/ie-blocker.css">
        <script src="ie-blocker/ie-blocker.zhCN.js"></script>
        <![endif]-->


## 配置项

 - img-path:
    IE-Blocker使用图片来展示浏览器图标。默认情况下，IE-Blocker会在ie-blocker.zhCN.js（或ie-blocker.en.js）所在的目录中寻找名为**img**的文件夹。

    如果你想把这些图片放到其他路径下，你需要在引入IE-Blocker的script元素上增加名为**img-path**的属性。例如：

        <!--[if lte IE 8]>
        <link rel="stylesheet" href="ie-blocker/ie-blocker.css">
        <script src="ie-blocker/ie-blocker.zhCN.js" img-path="../images/browser_icons/"></script>
        <![endif]-->
    
    注意 **img-path** 中指定的路径是相对于 **ie-blocker.zhCN.js（或ie-blocker.en.js)**的，而不是相对于当前HTML文件的。

    不要忘记末尾的斜杠'/'。

## License
MIT

  [1]: https://raw.githubusercontent.com/panteng/ie-blocker/master/screenshot.png
  [4]: https://github.com/panteng/ie-blocker/releases
