// ==UserScript==
// @name         NY Times CN Print
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://cn.nytimes.com/*
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

    console.log('added style');

GM_addStyle ( `
@media only print {

header.title-bar, .article-header header small, .setting-bar, .article-ribbon, .article-footer,
#subscribe_mobile_cont,
nav.nav-footer,
.download,
.copy-footer,
.author-info-container,
.article-span-photo,
.article-inline-photo {
display: none !important;
}

.article-header {
border-top: none !important;
}

    .col-lg-6 {
        max-width: 50% !important;
    }
.article-body .article-paragraph {
  font-size: 0.8em !important;
  margin: 0 0 5px 0 !important;
  line-height: 1.35em !important;
  color: #000 !important;
}
.article-dual-body-item {
  margin: 10px 0 0 0 !important;
}

a {
    color: #000 !important;
    text-decoration: none !important;
}
}
` );

    // Your code here...
})();
