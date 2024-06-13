window.onload = function(event) {
    setInterval(function () {

        document.querySelectorAll('[data-time]').forEach(function(div) {
            lD = new Date();
            div.innerHTML = lD.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});
        });



    },1000);
};
