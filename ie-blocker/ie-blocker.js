/*!
 * browser blocker v0.1.0
 * (c) 2015 Chris Pan
 * Released under the MIT License.
 */
window.onload = function () {
    var bbContainer,
        browserIcons,
        scriptPath,
        browserName;

    bbContainer = document.getElementById('ib-container');

    // the path to the image cannot be relative in a filter. Have to use javascript to get the absolute path.
    browserIcons = bbContainer.getElementsByTagName('i');
    for (var i = 0; i < document.scripts.length; i++) {
        if (scriptPath = document.scripts[i].src.match(/(.*)ie-blocker\.js/)[1]) {
            break;
        }
    }
    for (var i = 0; i < browserIcons.length; i++) {
        if (browserName = browserIcons[i].className.match(/ib-ua-(\w+)/)[1]) {
            browserIcons[i].style['filter'] = 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' +
            scriptPath + 'img/' + browserName + '.png")';
        }
    }

    bbContainer.style.display = 'block';
};
