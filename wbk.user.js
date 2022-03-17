// ==UserScript==
// @name         AdBlockBlock Wiesbadener Kurier
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Remove annoying ad block banner
// @author       frohrka
// @match        https://*.wiesbadener-kurier.de/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=wiesbadener-kurier.de
// @grant        none
// ==/UserScript==


function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

function hideById(id) {
    document.getElementById(id).style.display = "none";
}

(function () {
    'use strict';

    docReady(function () {
        document.body.className = document.body.className.replace("adDefendBodyNoScroll", "");
        hideById("adDefendBG");
        hideById("adDefendWrapper");
    });

})();
