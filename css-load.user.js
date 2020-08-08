// ==UserScript==
// @name         Custome style loader
// @namespace    https://github.com/RobertTheNerd/tampermonkey-scripts/
// @description  Allows custom styles to be applied to a website
// @version      0.1
// @description  try to take over the world!
// @author       RobertTheNerd
// @homepage     https://github.com/RobertTheNerd/tampermonkey-scripts/
// @homepageURL  https://github.com/RobertTheNerd/tampermonkey-scripts/
// @downloadURL  https://github.com/RobertTheNerd/tampermonkey-scripts/raw/master/css-loader.user.js
// @updateURL    https://github.com/RobertTheNerd/tampermonkey-scripts/raw/master/css-loader.user.js
// @supportURL   https://github.com/RobertTheNerd/tampermonkey-scripts/issues
// @include      https://cn.nytimes.com/*
// @grant        none
// ==/UserScript==


(function() {
    'use strict';


    const domain = window.location.hostname;

    var cssId = domain + '-custom-style'; // you could encode the css path itself to generate id..
    if (!document.getElementById(cssId))
    {
        var head = document.getElementsByTagName('head')[0];
        var link = document.createElement('link');
        link.id = cssId;
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = 'https://raw.githubusercontent.com/RobertTheNerd/tampermonkey-scripts/master/css/' + domain + '.css';
        head.appendChild(link);
        console.log('Custom style added: ' + link.href);
    }
})();
