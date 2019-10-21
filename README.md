# IE-Blocker

A lightweight modal for asking website visitors to stop using outdated IE browsers.

![Screenshot](https://raw.githubusercontent.com/panteng/ie-blocker/master/screenshot.png)



## Demos

Please use **IE 6-9** to visit the following links:

[Live Preview - English Version](https://panteng.github.io/ie-blocker/demos/demo.en.html)

[实时预览 - 中文版](https://panteng.github.io/ie-blocker/demos/demo.zhCN.html)

You will see a modal dialog which asks you to switch to a modern browser.

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

    By default, browser icon images are placed under the **img** folder within the same directory of **ie-blocker.en.js**.
    You can change the path by adding the `img-path` attribute:

        <!--[if lte IE 8]>
        <link rel="stylesheet" href="ie-blocker/ie-blocker.css">
        <script src="ie-blocker/ie-blocker.en.js" img-path="../your_custom_path/"></script>
        <![endif]-->

    The value of option `img-path` is a relative path to the **ie-blocker.en.js** file. Don't forget the '/' at the end.



## License

MIT
