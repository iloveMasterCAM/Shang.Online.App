// var keyboard=document.getElementById("myKeyboard");//获取键盘列表
// var btnGroup=keyboard.children;//获取键盘的按钮
// var currentCount=0;//记录输入的位置
// var inputs=document.getElementById('inputGroup').children;//获取输入密码的输入框
// var sureBtn=document.getElementById("sureBtn");//获取下一步或确定按钮
// for (var i = 0;i<btnGroup.length;i++) {
// 	btnGroup[i].onclick=function (argument) {
// 		//删除按钮的删除功能
// 		if (argument.target.id==deleteImage&&currentCount>0) {
// 			currentCount--;
// 			inputs[currentCount].value="";
// 			sureBtn.style.backgroundColor="#e3e3e3";
// 			sureBtn.style.color="#b8b4b4";
// 		}
// 		// 除了空的按钮
// 		else if (argument.target.id==nullLi) {;}
// 		// 输入数字并在input框显示
// 		else{
// 			if(currentCount<inputs.length){
// 				var btnValue=argument.target.innerText;
// 				inputs[currentCount].value=btnValue;
// 				currentCount++;
// 				if (currentCount==inputs.length) {
// 					sureBtn.style.backgroundColor="#30a1f9";
// 					sureBtn.style.color="#fff";
// 				}
// 				else{
// 					sureBtn.style.backgroundColor="#e3e3e3";
// 					sureBtn.style.color="#b8b4b4";
// 				}
// 			}
// 		}
// 		//已输入六个数字
// 		if (currentCount>=inputs.length) {
// 			sureBtn.onclick=function (argument) {
// 				for (var j=0;j<inputs.length;j++) {
// 					console.log(inputs[j].value);
// 				}
// 			}

// 		}
// 	}
// }
function myKeyboard(keyboardId,inputGroupId,btnId){
	var six=false;
	var sureBtn=btnId||null;//获取下一步或确定按钮
	var btnGroup=keyboardId.children;//获取键盘的按钮
	var currentCount=0;//记录输入的位置
	var inputs=inputGroupId.children;//获取输入密码的输入框
	console.log(inputs);
	for (var i = 0;i<btnGroup.length;i++) {
		btnGroup[i].onclick=function (argument) {
			//删除按钮的删除功能
			if (argument.target.id=="deleteImage"&&currentCount>0) {
				currentCount--;
				inputs[currentCount].value="";
				six = false;
			}
			// 除了空的按钮
			else if (argument.target.id==nullLi) {;}
			// 输入数字并在input框显示
			else{
				if(currentCount<inputs.length){
				    var btnValue = argument.target.innerText;
				    if (btnValue != '' && btnValue != null) {
				        inputs[currentCount].value = btnValue;
				        currentCount++;
				        if (currentCount == inputs.length) {
				            six = true;
				        }
				        else {
				            six = false;
				        }
				    }
				}
			}
			//已输入六个数字
			if (six==true) {
				if (sureBtn==null) {
					for (var j=0;j<inputs.length;j++) {
					    console.log(inputs[j].value);
					}
				}
				else{
				    sureBtn.style.backgroundColor = "#26c6e3";
				    sureBtn.style.color = "#fff";
                    //点击下一步验证支付密码
					sureBtn.onclick = function (argument) {
					    var pwdstr = '';
						for (var j=0;j<inputs.length;j++) {
						    pwdstr = pwdstr + inputs[j].value;
						}

						api.showProgress({
						    style: 'default',
						    animationType: 'fade',
						    title: '验证中...',
						    text: '',
						    modal: false
						});
						post(dburl.account.verifysafepwd_members, { values: { pwd: pwdstr } }, function (r) {
						    if (r.S) {
						        api.sendEvent({
						            name: "safepwd_success",
						            extra: pwdstr
						        });
						        api.hideProgress();
						        //关闭
						        api.closeFrame({
						            name: 'safepwd-input',
						            url: 'widget://html/safepwd/input.html'
						        });
						    } else {

						        api.hideProgress();
						        $aui.alert({ content: r.M, buttons: ['确定'], title: "商加在线提示" }, function (ret) { });;
						    }
						});
					}
				}
			}
			if(six==false&&sureBtn!=null){
				sureBtn.style.backgroundColor="#e3e3e3";
				sureBtn.style.color = "#b8b4b4";
				sureBtn.onclick = function () {
                    //do nothing
				};
			}

		}
	}
}
