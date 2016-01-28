/*!
 * browser blocker v0.1.0
 * (c) 2015 Chris Pan
 * Released under the MIT License.
 */
window.onload = function () {
    var ibContainer;
    var browserIcons;
    var scriptPath;
    var browserName;
    var imgPath;

    ibContainer = document.getElementById('ib-container');

    // the path to the image cannot be relative in a filter. Have to use javascript to get the absolute path.
    browserIcons = ibContainer.getElementsByTagName('i');
    
    for (var i = 0; i < document.scripts.length; i++) {

        if (match = document.scripts[i].src.match(/(.*)ie-blocker\.js/)) {
            scriptPath = match[1];
            imgPath = scriptPath + (document.scripts[i].getAttribute('img-path') || 'img/');
            console.log(imgPath);
            break;
        }
    }
    
    for (var i = 0; i < browserIcons.length; i++) {
        if (browserName = browserIcons[i].className.match(/ib-ua-(\w+)/)[1]) {
            browserIcons[i].style['filter'] = 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' +
            imgPath + browserName + '.png")';
        }
    }

    ibContainer.style.display = 'block';
};
