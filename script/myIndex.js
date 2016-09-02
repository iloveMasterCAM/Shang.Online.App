var titleBar=document.getElementById("titleBar");
window.onscroll=function () {
	var scrollTop=document.documentElement.scrollTop||document.body.scrollTop||window.pageYOffset;
	var swiperTop=document.getElementById("swiper1").offsetHeight;
	if (scrollTop<2) {
		titleBar.style.background="-moz-linear-gradient(top, rgba(0,0,0,.4) 0%, rgba(0,0,0,0) 100%)";
		titleBar.style.background="-webkit-linear-gradient(top, rgba(0,0,0,.4) 0%, rgba(0,0,0,0) 100%)";
		titleBar.style.background="-o-linear-gradient(top, rgba(0,0,0,.4) 0%, rgba(0,0,0,0) 100%)";
		titleBar.style.background="-ms-linear-gradient(top, rgba(0,0,0,.4) 0%, rgba(0,0,0,0) 100%)";
		titleBar.style.background="linear-gradient(top, rgba(0,0,0,.4) 0%, rgba(0,0,0,0) 100%)";
	}
	//颜色逐渐变红2016.04.29修改
	else if (scrollTop<swiperTop) {
		var opasity=scrollTop/swiperTop;
		console.log(opasity);
		titleBar.style.background="rgba(226,50,53,"+opasity+")";
	}
	else{
		titleBar.style.background="#E23235";
	}
}