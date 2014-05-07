var PathTracker = (function () {

    var cookieName = "pathTracker";
    
    if (window.JSON === "undefined") {
        return;
    } else {
        addPath();   
    }
    
    // add the path that a user has visited to the cookie
    function addPath() {
        var cookie = getCookie();
        var path = window.location.pathname;
        
        if (cookie === "") {
            setCookie(path);
        } else {
            setCookie(cookie + ',' + path);
        }
    }
    
    // return the pathtracker cookie string
    function getCookie() {
        var needle = cookieName + "=",
            cookiePieces = document.cookie.split(';'),
            crumb = "";
        
        for (var i=0; i < cookiePieces.length; i++) {
            crumb = cookiePieces[i].trim();
            if (crumb.indexOf(needle) === 0) {
                return crumb.substring(needle.length, crumb.length);
            }
        }
        return "";
    }
    
    // Set a string to the pathfinder cookie that will expire at end of session
    function setCookie(value) {
        document.cookie = cookieName + "=" + value + "; ";
    }
    
    // Immediately expire the cookie
    this.destroy = function() {
        document.cookie = cookieName + '=;-1';
    }

    this.getHistory = function() {
        console.log("hellow");
    }
    
    return this;
})();