window.addEventListener("load", () => {
    var d = new Date();
    document.getElementById("copyright").innerText = '\xA9 ' +  d.getFullYear().toString() + " ruqayyah muse. all rights reserved";

    document.getElementById("linkedin").onclick = function () {
        window.open("https://linkedin.com/in/rmuse/");
    };
    
    document.getElementById("github").onclick = function () {
        window.open("https://github.com/rukky022");
    };

    document.getElementById("email").onclick = function () {
        var link = "mailto:ruqayyahmuse@gmail.com?subject="+encodeURIComponent("Portfolio Inquiry: ") + "";
        window.location.href = link;
    };
    
    document.getElementById("email").style.marginTop = '5vh';
})