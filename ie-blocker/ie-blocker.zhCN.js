(function () {
    var ibContainer;
    var html;
    var browserIcons;
    var scriptPath;
    var imgPath;
    var browserName;
    
    ibContainer = document.createElement('div');
    ibContainer.setAttribute('id', 'ib-container');

    html += "<div class=\"ib-modal\">";
    html += "    <div class=\"ib-header\">";
    html += "        <h1>您的浏览器需要更新<\/h1>";
    html += "        <p>为了保证页面的正常显示并保护您的个人信息，";
    html += "            <br><strong>请使用以下新版浏览器<\/strong>";
    html += "        <\/p>";
    html += "    <\/div>";
    html += "    <ul class=\"ib-browsers\">";
    html += "        <li>";
    html += "            <a href=\"http:\/\/www.google.cn\/chrome\/browser\/desktop\/index.html\">";
    html += "                <i class=\"ib-browser-icon ib-ua-chrome\"><\/i>";
    html += "                <div class=\"ib-browser-name\">Chrome<\/div>";
    html += "                <div class=\"ib-browser-description\">谷歌全新推出的高速浏览器<\/div>";
    html += "            <\/a>";
    html += "        <\/li>";
    html += "        <li>";
    html += "            <a href=\"http:\/\/www.firefox.com.cn\">";
    html += "                <i class=\"ib-browser-icon ib-ua-firefox\"><\/i>";
    html += "                <div class=\"ib-browser-name\">Firefox<\/div>";
    html += "                <div class=\"ib-browser-description\">Firefox注重您的信息安全<\/div>";
    html += "            <\/a>";
    html += "        <\/li>";
    html += "        <li>";
    html += "            <a href=\"https:\/\/www.apple.com\/cn\/safari\">";
    html += "                <i class=\"ib-browser-icon ib-ua-safari\"><\/i>";
    html += "                <div class=\"ib-browser-name\">Safari<\/div>";
    html += "                <div class=\"ib-browser-description\">Safari是苹果公司充满创新设计的产品，可用于Mac<\/div>";
    html += "            <\/a>";
    html += "        <\/li>";
    html += "        <li>";
    html += "            <a href=\"http:\/\/www.opera.com\/zh-cn\">";
    html += "                <i class=\"ib-browser-icon ib-ua-opera\"><\/i>";
    html += "                <div class=\"ib-browser-name\">Opera<\/div>";
    html += "                <div class=\"ib-browser-description\">地球上最快的浏览器<\/div>";
    html += "            <\/a>";
    html += "        <\/li>";
    html += "        <li>";
    html += "            <a href=\"http:\/\/windows.microsoft.com\/zh-cn\/internet-explorer\/download-ie\">";
    html += "                <i class=\"ib-browser-icon ib-ua-ie11\"><\/i>";
    html += "                <div class=\"ib-browser-name\">IE 11<\/div>";
    html += "                <div class=\"ib-browser-description\">来自微软的免费浏览器，全新特性助您保护个人隐私<\/div>";
    html += "            <\/a>";
    html += "        <\/li>";
    html += "    <\/ul>";
    html += "    <div class=\"ib-footer\">";
    html += "        <a class=\"ib-try\" href=\"http:\/\/www.google.com\/chrome\/browser\/desktop\/index.html\">试试Chrome<\/a>";
    html += "    <\/div>";
    html += "<\/div>";
    html += "<div class=\"ib-mask\"><\/div>";

    ibContainer.innerHTML = html;

    // the path to the image cannot be relative in a filter. Have to use javascript to get the absolute path.
    browserIcons = ibContainer.getElementsByTagName('i');

    for (var i = 0; i < document.scripts.length; i++) {
        if (match = document.scripts[i].src.match(/(.*)ie-blocker.zhCN\.js/)) {
            scriptPath = match[1];
            imgPath = scriptPath + (document.scripts[i].getAttribute('img-path') || 'img/');
            break;
        }
    }

    for (var i = 0; i < browserIcons.length; i++) {
        if (browserName = browserIcons[i].className.match(/ib-ua-(\w+)/)[1]) {
            browserIcons[i].style['filter'] = 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' +
                imgPath + browserName + '.png")';
        }
    }

    window.onload = function () {
        document.body.appendChild(ibContainer);
        ibContainer.style.display = 'block';
    };
})();
