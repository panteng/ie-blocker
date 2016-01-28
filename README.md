# IE-Blocker
Block outdated Internet Explorer from your website and display a friendly message of upgrading to modern browsers.

![Screenshot][1]

## Live Preview

Please visit the websites below **with IE 6-9**. 

[English Version][2]

[中文版本][3]

## Install

### Install Manually
Simply download the latest version of IE-Blocker from [this page][4]. Unzip the file and place the **ie-blocker** folder into your projects.

### Install Using Bower or Npm
Optionally, you can install IE-Blocker with Bower or Npm:

    // With Bower
    bower install ie-blocker
    
    // With Npm
    npm install ie-blocker

## Usage

 1. Include **ie-blocker.css** and **ie-blocker.js** inside the `<head>` tag. Use conditional comments to make these codes only work in old version IE.

        <!--[if lte IE 8]>
        <link rel="stylesheet" href="ie-blocker/ie-blocker.css">
        <script src="ie-blocker/ie-blocker.js"></script>
        <![endif]-->

 2. Place the following html code before the closing `<body>` tag. You can find the full code in **template.html**. Use conditional comments to make these codes only work in old version IE.

        <!--[if lte IE 8]>
        <div id="ib-container">
            <div class="ib-modal">
                ...
            </div>
            <div class="ib-mask"></div>
        </div>
        <![endif]-->
    
 3. That's it.

## Options

 - img-path:
IE-Blocker uses some images to display browser icons. By default, IE-Blocker will look for these images in the **img** folder which locates at the same path of **ie-blocker.js**.
So if you want to place these images somewhere else, you need to add an attribute **img-path** to **script** tag. For example:

        <!--[if lte IE 8]>
        <link rel="stylesheet" href="ie-blocker/ie-blocker.css">
        <script src="ie-blocker/ie-blocker.js" img-path="../images/browser_icons/"></script>
        <![endif]-->
Remember the **img-path** is relative to **ie-blocker.js**, not to the html file.
Do not forget the '/' at the end.

## License
[MIT][5]


  [1]: https://raw.githubusercontent.com/panteng/ie-blocker/master/screenshot.png
  [2]: http://panteng.me/demos/ie-blocker/demo.html
  [3]: http://panteng.me/demos/ie-blocker/demo.zhCN.html
  [4]: https://github.com/panteng/ie-blocker/releases
  [5]: http://opensource.org/licenses/mit-license.html
