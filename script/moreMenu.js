// 好友详细资料页更多按钮
var menuBtn=document.getElementById("menuBtn");
var menuList=document.getElementById("menuList");
menuList.style.display="none";// 初始化为不显示
menuBtn.onclick=function () {
	if (menuList.style.display=="none") {
		menuList.style.display="block"
	} else {
		menuList.style.display="none"
	}
}
// 好友详细资料页加入黑名单按钮
var blacklistBtn=document.getElementById("blacklistBtn");
var blacklistDialog=document.getElementById("blacklistDialog");
var blacklistMark=document.getElementById("blacklistMark");
blacklistDialog.style.display="none";// 初始化为不显示
blacklistMark.style.display="none";// 初始化为不显示
blacklistBtn.onclick=function () {
	blacklistDialog.style.display="block";
	blacklistMark.style.display="block";
	menuList.style.display="none";
}
function cancel() {
	blacklistDialog.style.display="none";
	blacklistMark.style.display="none";
	console.log("取消加入黑名单");
}
function confirm() {
	blacklistDialog.style.display="none";
	blacklistMark.style.display="none";
	console.log("确认加入黑名单");
}
