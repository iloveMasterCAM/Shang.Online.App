/**
 * 导航栏的消失和出现
 */
var titleBar=document.getElementById("titleBar");
var swi1=document.getElementById("swi1");
window.onscroll=function () {
    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop||window.pageYOffset;
    var swiTop=document.getElementById("titleBar").offsetHeight;
    var title=document.getElementById("title");
    var menu=document.getElementById("menu");
    var swiTop2=document.getElementById("swi2").offsetHeight;
    if (scrollTop>=swiTop) {
        swi1.style.background="transparent";
        titleBar.style.backgroundColor="rgba(231,76,60,1)";
        title.style.color="rgba(255,255,255,1)";
        //tab选择按钮固定
        if(scrollTop>=swiTop2-swiTop){
           menu.style.position="fixed";
            menu.style.top="45px";
            menu.style.width="100%";
            menu.style.zIndex="10";
        }
    }
    else {
        swi1.style.background="url('../../image/talk/head_bg.png') no-repeat";
        swi1.style.backgroundSize="100%";
        titleBar.style.backgroundColor="rgba(231,76,60,0)";
       title.style.color="rgba(255,255,255,0)";
        menu.style.position="relative";
        menu.style.top="0";
    }
}


