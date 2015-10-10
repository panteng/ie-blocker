# browser-blocker
Block outdated Internet Explorer from your website and display a friendly message of upgrading to modern browsers.

![Screenshot][2]

## Usage

 1. Place the **browser-blocker** folder in your project.
 2. Include **browser-blocker.css** and **browser-blocker.js** inside the `<head>` tag. Use conditional comments to make sure browser-blocker only works in old version IE.
 
        <!--[if lte IE 8]>
        <link rel="stylesheet" href="browser-blocker/browser-blocker.css">
        <script src="browser-blocker/browser-blocker.js"></script>
        <![endif]-->
 3. Place the following html code before the closing `<body>` tag. You can find the full code in **dialog.html**. Do not forget to use conditional comments to make it only work in old version IE.

        <!--[if lte IE 8]>
        <div id="bb-container">
            <div class="bb-modal">
                ...
            </div>
            <div class="bb-mask"></div>
        </div>
        <![endif]-->

## License
[MIT][3]
  [1]: http://browsehappy.com/
  [2]: https://raw.githubusercontent.com/panteng/browser-blocker/master/screenshot.png
  [3]: http://opensource.org/licenses/mit-license.html
