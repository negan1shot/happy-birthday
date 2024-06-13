window.onload = function(event) {
    setInterval(function () {
        let offsetUTC = +12,
        lD = new Date();
        document.querySelector("[data-time]").innerHTML = lD.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});
    },1000);
};
