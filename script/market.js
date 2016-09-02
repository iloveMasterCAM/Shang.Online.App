/**
 * Created by Administrator on 2016/4/25 0025.
 */
function checkInt(o){
    theV=isNaN(parseInt(o.value))?0:parseInt(o.value);
    if(theV!=o.value){o.value=theV;}
    sum.value=count.value*price.value;
}
function checkP(o){
    theV=isNaN(parseFloat(o.value))?0:parseFloat(o.value);
    theV=parseInt(theV*100)/100;
    if(theV!=o.value){
        theV=(theV*100).toString();
        theV=theV.substring(0,theV.length-2)+"."+theV.substring(theV.length-2,theV.length);
        o.value=theV;
    }
    sum.value=count.value*price.value;
}