/**
 * Created by Administrator on 2016/4/11 0011.
 */
/*选项卡*/
var tabs=function(){
    function tag(name,elem){
        return (elem||document).getElementsByTagName(name);
    }
    function tag2(name,elem){
        return (elem||document).getElementsByClassName(name);
    }
    //获得相应ID的元素
    function id(name){
        return document.getElementById(name);
    }
    function first(elem){
        elem=elem.firstChild;
        return elem && elem.nodeType == 1? elem:next(elem);
    }
    function next(elem){
        do{
            elem=elem.nextSibling;
        }while(
        elem&&elem.nodeType!=1
            );
        return elem;
    }
    return {
        set:function(elemId,tabId){
            var elem=tag("span",id(elemId));
            var tabs=tag2("tag",id(tabId));
            var listNum=elem.length;
            var tabNum=tabs.length;
            for(var i=0;i<listNum;i++){
                elem[i].onclick=(function(i){
                    return function(){
                        for(var j=0;j<tabNum;j++){
                            if(i==j){
                                tabs[j].style.display="block";
                                // alert(elem[j]);
                                elem[j].className="active";

                            }
                            else{
                                tabs[j].style.display="none";
                                elem[j].className="";
                            }
                        }
                    }
                })(i)
            }
        }
    }
}();