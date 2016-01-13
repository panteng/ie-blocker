# Browser Blocker
Block outdated Internet Explorer from your website and display a friendly message of upgrading to modern browsers.

![Screenshot][2]

## Usage

 1. Place the **ie-blocker** folder in your project.
 2. Include **ie-blocker.css** and **ie-blocker.js** inside the `<head>` tag. Use conditional comments to make ie-blocker only work in old version IE.

        <!--[if lte IE 8]>
        <link rel="stylesheet" href="ie-blocker/ie-blocker.css">
        <script src="ie-blocker/ie-blocker.js"></script>
        <![endif]-->
 3. Place the following html code before the closing `<body>` tag. You can find the full code in **dialog.html**. It is recommended to use conditional comments to make it only work in old version IE.

        <!--[if lte IE 8]>
        <div id="ib-container">
            <div class="ib-modal">
                ...
            </div>
            <div class="ib-mask"></div>
        </div>
        <![endif]-->

## License
[MIT][3]
  [1]: http://browsehappy.com/
  [2]: https://raw.githubusercontent.com/panteng/ie-blocker/master/screenshot.png
  [3]: http://opensource.org/licenses/mit-license.html
