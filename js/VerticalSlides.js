$(function () {
    "use strict";
    try {
        eval("var foo = (x)=>x+1");
    } catch (e) {
        document.getElementById("browser-check").style.display = "block";
    }
});

