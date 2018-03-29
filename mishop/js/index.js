var oChart = document.getElementById('chart');
var aImg = oChart.getElementsByTagName('img');
var aLi = oChart.getElementsByTagName('li');
var oPreBtn = document.getElementById('ib1');
var oNextBtn = document.getElementById('ib2');
var oBtn = document.getElementById('go-top');
var nowIndex = 0;

//轮播图
for (var i=0;i<aLi.length;i++){
    aLi[i].index = i;
    aLi[i].onmouseover = function () {
        nowIndex = this.index;
        changeImg();
    }
};
oNextBtn.onclick = oPreBtn.onclick = function () {
    if(this==oPreBtn){
        nowIndex--;
        if(nowIndex == -1){
            nowIndex = aLi.length-1;
        }
    }else{
        nowIndex++;
        if(nowIndex == aLi.length){
            nowIndex = 0;
        }
    }
    changeImg();
};
var timer = setInterval(function () {
    oNextBtn.onclick();
},1000);
console.log(oChart);
oChart.onmouseover = function () {
    clearInterval(timer);
};
oChart.onmouseout = function () {
    timer =setInterval(function () {
        oNextBtn.onclick();
    },1000);
};
function changeImg() {
    for (var j=0;j<aLi.length;j++){
        aLi[j].className = '';
        aImg[j].className = '';
    }
    aLi[nowIndex].className = "selected";
    aImg[nowIndex].className = 'selected';
}

//回到顶部
oBtn.onclick = function(){
    var iScrollTop = document.documentElement.scrollTop ||document.body.scrollTop;
    var timer = setInterval(function () {
        window.scrollTo(0,iScrollTop*=0.6);
        if (iScrollTop<=1){
            clearInterval(timer);
        }
    },100);
};
oBtn.onmousedown = function (e) {
    console.log(11);
    e=e||window.event;
    var disX=e.clientX-oBtn.offsetLeft;
    var disY=e.clientY-oBtn.offsetTop;
    document.onmousemove = function (e) {
        console.log(22);
        var iLeft = e.clientX-disX;
        var iTop = e.clientY-disY;
        oBtn.style.left = iLeft + "px";
        oBtn.style.top = iTop + "px";
    };
    oBtn.onmouseup = function () {
        console.log(33);
        document.onmousemove = null;
    };
};
