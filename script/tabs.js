/**
 *两个tab的切换
 */
var tab1=document.getElementById("tab1");
var tab2=document.getElementById("tab2");
var tab1_con=document.getElementById("tab1_con");
var tab2_con=document.getElementById("tab2_con");
function SelectTab1(obj) {
    tab1_con.style.display="block";
    tab2_con.style.display="none";
    //alert(elem[j]);

    obj.firstChild.className="selected";
    tab2.firstChild.className="";
}
function SelectTab2(obj){
    tab1_con.style.display="none";
    tab2_con.style.display="block";
    //alert(elem[j]);
    tab1.firstChild.className="";
    obj.firstChild.className="selected";
}