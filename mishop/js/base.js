var oBtn = document.getElementById('go-top');
oBtn.onclick = function(){
    var iScrollTop = document.documentElement.scrollTop ||document.body.scrollTop;
    var timer = setInterval(function () {
        window.scrollTo(0,iScrollTop*=0.6);
        if (iScrollTop<=1){
            clearInterval(timer);
        }
    },100);
};