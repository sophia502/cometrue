//封装函数
//防止污染全局
(function () {
//    ie6 兼容getElementsByClassName()
    function getEleByClassName(clsName,context) {//context表示从哪取来的。clsName表示传进来的参数。
        var oClass = [];
        // if(!context){ //context没传参数返回undefined !context为真
        //     var ele = document.getElementsByTagName("*");
        // }else{
        //     var ele = context.getElementsByTagName("*");
        // }
        var parentEle = context||document;
        var ele = parentEle.getElementsByTagName("*");
        for (var i=0;i<ele.length;i++){
            var arr=ele[i].className.split(" ");
            for(var j=0;j<arr.length;j++){
                if (arr[j] == clsName){
                    oClass.push(ele[i]);
                }
            }
        }
        return oClass;
    }
    getEleByClassName();

});