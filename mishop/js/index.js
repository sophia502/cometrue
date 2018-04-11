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
// console.log(oChart);
oChart.onmouseover = function () {
    clearInterval(timer);
};
oChart.onmouseout = function () {
    timer =setInterval(function () {
        oNextBtn.onclick();
    },2000);
};
function changeImg() {
    for (var j=0;j<aLi.length;j++){
        aLi[j].className = '';
        aImg[j].className = '';
    }
    aLi[nowIndex].className = "selected";
    aImg[nowIndex].className = 'selected';
}
//小米闪购
var oUl1 = document.getElementById("shan");
var oLeft = document.getElementById("left");
var oRight = document.getElementById("right");
var speed = 5;
oUl1.innerHTML += oUl1.innerHTML;
oUl1.style.width = oUl1.offsetWidth * 2 + "px";
setInterval(function(){
    oUl1.style.left = oUl1.offsetLeft - speed + "px";
    if(-oUl1.offsetLeft >= oUl1.offsetWidth / 2){
        oUl1.style.left = 0;
    }
    if(oUl1.offsetLeft > 0){
        oUl1.style.left = -oUl1.offsetWidth / 2 + "px";
    }
}, 50);

oLeft.onclick = oRight.onclick = function(){
    oLeft.className = "";
    oRight.className = "";
    if(this === oLeft){
        speed = 5;
    }else{
        speed = -5;
    }
    this.className = 'select-span';
};
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
//内容点击滚动
var oBookUl = document.getElementsByClassName('book-ul')[0];
var aBookLi = oBookUl.getElementsByTagName('li');
var oPagerUl = document.getElementsByClassName('xm-pagers')[0];
var aPagerLi =oPagerUl.getElementsByTagName('li');
var aBL = document.getElementsByClassName('book-l')[0];
var aBR = document.getElementsByClassName('book-r')[0];
var numOne = 0;
    for(var a=0 ;a<aPagerLi.length ;a++){
        aPagerLi[a].index = a ;
        aPagerLi[a].onclick = function () {
            numOne = this.index;
            runContents(this.index);

        }
    }
// console.log(aPagerLi);
function runContents(inumOne) {

    for(var j=0 ; j<aPagerLi.length ;j++){
        console.log(j);
        aPagerLi[j].className = 'pager';
    }
     aPagerLi[inumOne].className = 'pager pager-active';
    animate(oBookUl,{left:-inumOne * 296});
}
aBR.onclick = function () {
    numOne++;
    if(numOne <=2 ){
        animate(oBookUl,{left:-numOne * 296});
    }
    if(numOne >=2 ){
        numOne =2;
    }
    runContents(numOne);
};
aBL.onclick = function () {
    numOne--;
    if(numOne >= 0){
        animate(oBookUl,{left:-numOne * 296});
    }
    if(numOne <= 0){
        numOne = 0;
    }
    runContents(numOne);
};