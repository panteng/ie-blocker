# IE-Blocker

A lightweight modal component, which 'politely' suggests your users to stop using outdated IE browsers.

![Screenshot](https://raw.githubusercontent.com/panteng/ie-blocker/master/screenshot.png)



## Demos

Please use **IE 6-9** to visit the following links:

[Live Preview - English Version](https://panteng.github.io/ie-blocker/demos/demo.en.html)

[实时预览 - 中文版](https://panteng.github.io/ie-blocker/demos/demo.zhCN.html)

You will see a modal dialog which asks you to update your browser. This is exactly what IE-Blocker does.



## Installation

### Install through npm or Bower

    // With npm
    npm install ie-blocker --save

    // With Bower
    bower install ie-blocker --save



## Usage

Include **ie-blocker.css** and **ie-blocker.en.js** in the `<head>` tag. And wrap them into conditional comments for IE:

    <!--[if lte IE 8]>
    <link rel="stylesheet" href="ie-blocker/ie-blocker.css">
    <script src="ie-blocker/ie-blocker.en.js"></script>
    <![endif]-->



## Options

 - img-path:

    IE-Blocker uses images to display browsers icons. These images are placed under the **img** folder within the same directory of **ie-blocker.en.js**.
    But you can change it if you want:

        <!--[if lte IE 8]>
        <link rel="stylesheet" href="ie-blocker/ie-blocker.css">
        <script src="ie-blocker/ie-blocker.en.js" img-path="../images/browser_icons/"></script>
        <![endif]-->

    The path in option `img-path` is relative to **ie-blocker.en.js**. And please don't forget the '/' in the end of the path.



## License

MIT
