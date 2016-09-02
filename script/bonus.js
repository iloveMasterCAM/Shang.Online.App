/**
 * Created by Administrator on 2016/4/23 0023.
 */

/*tab列表上移，到指定位置固定*/
window.onscroll=function () {
    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop||window.pageYOffset;
    var swiTop=document.getElementById("img").offsetHeight;//计算图片滑动部分的高度
    var menu=document.getElementById("tab_menu");//获得tab列表
    if (scrollTop>=swiTop) {
        //tab选择按钮固定
        menu.style.position="fixed";
        menu.style.top="45px";
        menu.style.width="100%";
    }
    else {
        menu.style.position="relative";
        menu.style.top="0";
    }
};

