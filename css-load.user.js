// ==UserScript==
// @name         Custome style loader
// @namespace    https://github.com/RobertTheNerd/tampermonkey-scripts/
// @description  Allows custom styles to be applied to a website
// @version      0.1.003
// @description  try to take over the world!
// @author       RobertTheNerd
// @homepage     https://github.com/RobertTheNerd/tampermonkey-scripts/
// @homepageURL  https://github.com/RobertTheNerd/tampermonkey-scripts/
// @downloadURL  https://github.com/RobertTheNerd/tampermonkey-scripts/raw/master/css-loader.user.js
// @updateURL    https://github.com/RobertTheNerd/tampermonkey-scripts/raw/master/css-loader.user.js
// @supportURL   https://github.com/RobertTheNerd/tampermonkey-scripts/issues
// @include      https://cn.nytimes.com/*
// @include      https://www.wsj.com/*
// @grant        none
// ==/UserScript==


function GM_addStyle (cssStr) {
    var D               = document;
    var newNode         = D.createElement ('style');
    newNode.textContent = cssStr;

    var targ    = D.getElementsByTagName ('head')[0] || D.body || D.documentElement;
    targ.appendChild (newNode);
}

(function() {
    'use strict';

    const domain = window.location.hostname;
    
    const href = 'https://raw.githubusercontent.com/RobertTheNerd/tampermonkey-scripts/master/css/' + domain + '.css';
    fetch(href)
    .then(response => response.text())
    .then(GM_addStyle);
})();
