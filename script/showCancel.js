var inputs=document.getElementsByTagName('input');
for (var i = inputs.length - 1; i >= 0; i--) {
	
	inputs[i].oninput=function(argument) {
		// body...
		var cancelBtn=argument.target.nextSibling.nextSibling;
		var str = argument.target.value;

		if (cancelBtn.tagName == "I") {
		    if (str == "") {
		        cancelBtn.style.display = "none";
		    } else {
		        cancelBtn.style.display = "table-cell";
		    }
		}
	}
	inputs[i].onfocus=function function_name(argument) {
		var cancelBtn=argument.target.nextSibling.nextSibling;
		var str = argument.target.value;

		if (cancelBtn.tagName == "I") {
		    if (str == "") {
		        cancelBtn.style.display = "none";
		    } else {
		        cancelBtn.style.display = "table-cell";
		    }
		}
	}
	inputs[i].onblur=function (argument) {
	    var cancelBtn = argument.target.nextSibling.nextSibling; 
		var str = argument.target.value;

		//判断是验证码按钮还是删除图标
		if (cancelBtn.tagName == "I") {
		    cancelBtn.addEventListener("click", function () {
		        argument.target.value = "";
		        cancelBtn.style.display = "none";
		    });
            setTimeout(function () { cancelBtn.style.display = "none"; }, 0.1);
		}
	}
}