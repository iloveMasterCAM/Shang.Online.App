
    function getElem(element){
       return document.getElementById(element);
    }

    function getClassList(classname,num){
       var list=document.getElementsByClassName(classname);
       return num===undefined?list:list.item(num);
    }