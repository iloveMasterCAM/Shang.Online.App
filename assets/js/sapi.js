var dburl = {
    home: {

    },
    task: {
        list_shangtasks: "task/list_shangtasks",//活动列表
        equitys: "task/equitys",//用户可用分红权
        setconsumes: "task/setconsumes",//设置消耗品
        setaward: "task/setaward",//设置奖品
        awardlog: "task/awardlog",//获奖日志
        consumes: "task/consumes",//任务需要的消耗品
        awardlog: "task/awardlog",//中奖记录，向用户发送信息，写入数据库
        zorzeylog: "task/zorzeylog",//0元抢记录
        justsigncheck: "task/justsigncheck",//当日是否签到
        sign:"task/sign"//签到
    },
    store: {
        list_shopshopstore: "store/list_shopshopstore",//商品列表
        detail_shopshopstore: "store/detail_shopshopstore",//商品详情
        addstore_org_equity_shop: "store/addstore_org_equity_shop",//商铺入驻
        detail_organizes: "store/detail_organizes",//企业详情
        moreshop: "store/moreshop",//查询信息
        order: "store/order",//订单信息
        ifaddstore_organize: "store/ifaddstore_organize",//判断是否已拥有企业或已经申请过
        shopequity: "store/shopequity",//商户分红权信息
        shopdividends: "store/shopdividends",//商户分红信息
        recshop: "store/recshop",//首页推荐
        getlocation: "store/getlocation",//获取店铺坐标
        addtocart: "store/addtocart",//添加商品至购物车
        showshoppingcart: "store/showshoppingcart",//展示购物车
        delshoppingcart: "store/delshoppingcart",//删除购物车记录
        getuserinfo: "store/getuserinfo",//获取用户地址
        prefershop: "store/prefershop",//优选商铺（按创建时间排序）
        orgtoshop:"store/orgtoshop",//根据企业ID找到对应店铺
    },
    equity: {
        droll_dividends: "equity/droll_dividends",//起始页滚动通知
        show_equities: "equity/show_equities",//分红权市场
        list_equitydividends: "equity/list_equitydividends",//股权分红列表
        u_equitys: "equity/u_equitys",//用户分红权
        udrecord_dividends: "equity/udrecord_dividends",//用户具体分红记录
        udetail_equities: "equity/udetail_equities",//用户持有分红权详情
        u_ed:"equity/u_ed"//用户总分红及分红权种类
    },
    account: {
        login_members: "account/login_members",//登录
        issafepwd: "account/issafepwd",//判断用户是否已设置支付密码
        verifysafepwd_members: "account/verifysafepwd_members",//验证支付密码
        bankuserinfo:"account/bankuserinfo",//用户信息
        addbank: "account/addbank",//添加银行卡
        addali:"account/addali",//添加支付宝
        safety: "account/safety",//绑卡短信验证
        remainder: "account/remainder",//用户余额
        setbankdefault: "account/setbankdefault",//设置默认账户
        bank_del: "account/bank_del",//解除绑定银行卡
        nh_u: "account/nh_u",//获取用户姓名头像
        myfollow: "account/myfollow",//用户已关注店铺
        cancelfollow: "account/cancelfollow",//取消关注
        safepasswordmembers: "account/safepasswordmembers", //查询安全密码状态
        changgesafepasswordmembers: "account/changgesafepasswordmembers"//修改安全密码

    },
    order: { //订单生成
        dividendsrank: "order/dividendsrank",
        createproduct: "order/createproduct",
        sharerank: "order/sharerank",
        asset: "order/asset",
        mybuy: "order/mybuy",//查看购物记录
        createmainorder:"order/createmainorder",//生成购物车订单
    },
    money: {
        userassets_monybags: "money/userassets_monybags",//我的资产
        list_memberbanks: "money/list_memberbanks",//银行卡列表
        conrecharge_logtrades: "money/conrecharge_logtrades",//充值订单
        quickpay: "money/quickpay",//快捷支付
        orderstate_logtrades: "money/orderstate_logtrades",//订单状态
        withdraw: "money/withdraw",//提现
        balancerecord: "money/balancerecord",//余额明细列表
        balancedetail:"money/balancedetail"//余额明细详细
    },
    info: {
        loginnamemembers: "info/loginnamemembers",//忘记密码修改密码
        savehead_members: "info/savehead_members",//保存图片
        userinfo_members: "info/userinfo_members",//个人信息
        createmembers: "info/createmembers",//注册
        verification: "info/verification",//验证验证吗
        verificode: "info/verificode",  //发送验证码
        changemembers: "info/changemembers",//编辑个人资料
        changemembersloginpassword: "info/changemembersloginpassword",//个人密码修改密码
        dividendsrank_dividends: "info/dividendsrank_dividends",//分红榜排行
        sharerank_logtrade: "info/sharerank_logtrade",//分销榜排行
        banklist: "info/banklist",//银行列表
        updatecertiy: "info/updatecertiy",//身份中认证图片
        phonemember: "info/phonemember",
        sharerank_logtrade: "info/sharerank_logtrade",//分销榜排行
        banklist:"info/banklist"//银行列表
    },
    message: {
        list_messages: "message/list_messages",//发现
        detail_messages: "message/detail_messages",//说说详细
        release_messages: "message/release_messages",//评论、发布
        mymessages: "message/mymessages"//个人信息提示
    },
    market: {
        list_markets: "market/list_markets",//分红权交易列表
        detail_markets: "market/detail_markets",//交易详情
        sell_markets: "market/sell_markets",//出售分红权
        createorder: "market/createorder",//生成分红权交易订单
        mymarket: "market/mymarket",//我的交易市场列表
        mysold: "market/mysold",//我的出售记录
        findlist:"market/findlist"//发现交易
    },
    pay: { //交易
        order: "pay/order",
        wx: "pay/Weixin",
        banlace: "pay/banlace",
        orderstate: "pay/orderstate",
        quickpay: "pay/quickpay",
        bound: "pay/bound"
    },
}

function getUrl(dburl) {

    //return "http://192.168.0.149:6789/" + dburl;
    return "http://app.linjiacn.com/" + dburl;
}
//div 滚动加载更多
(function ($) {
    $.fn.onScrollEnd = function (c) {
        $(this).scroll(function () {
            var _this = $(this);
            var top = _this.scrollTop();
            var h = _this[0].scrollHeight;
            var vh = _this.height();
            if (vh + top + 5 >= h) {
                c();
            }
        });
    }
})(jQuery)
function openWin(name, url, data) {
    api.openWin({
        name: name,
        url: url,
        pageParam: { data: data },
        softInputMode: true,
        reload: true,
        slidBackEnabled: true,
        bounces: false
    });
}
function closeWin(name) {
    if (name)
        api.closeWin({ name: name });
    else
        api.closeWin();
}
//验证安全密码
//参数:验证成功后回调的方法
//验证不成功直接提示密码错误
function vierfiSafePassword(wheight, callback) {
    var fh = 335;
    var top = wheight - fh;
    api.openFrame({
        name: 'safepassword_frm',
        url: 'widget://html/util/safepassword_frm.html', vScrollBarEnabled: false,
        bounces: false,
        rect: {
            x: 0,
            y: top + 60,
            w: 'auto',
            h: fh,
        }
    });
    //监听密码是否验证成功
    api.addEventListener({
        name: 'safepwd_success'
    }, function (ret, err) {
        callback();
        api.removeEventListener({
            name: 'safepwd_success'
        });
    });

}
//app2.0验证支付密码
//callback验证成功后回调方法
function verifySafepwd(callback) {
    api.addEventListener({
        name: 'safepwd_success'
    }, function (ret, err) {
        callback();
        api.removeEventListener({
            name: 'safepwd_success'
        });
    });
            
    api.openFrame({
        name: 'safepwd-input',
        url: 'widget://html/safepwd/input.html',
        vScrollBarEnabled: false,
        bounces: false,
        rect: {
            x: 0,
            y: 45,
            w: 'auto',
            h: 'auto'
        }
    });
}

//打开快捷支付银行列表
function quickPaycard(callback) {
  
    openWin("quickpay", "widget://html/util/quickpay.html", {});
    
    api.addEventListener({
        name: 'quickpay_cared_seleced_success'
    }, function (ret, err) {
        callback(ret.value);
        api.removeEventListener({
            name: 'quickpay_cared_seleced_success'
        });
    });
}
//taskid:任务ID,callback 支付完成后的回调
function payTask(taskid, callback) {
    api.openWin({
        name: 'paytask',
        url: 'widget://html/task/paytask.html', vScrollBarEnabled: false,
        bounces: false,
        pageParam: { data: taskid },
        rect: {
            x: 0,
            y: 0,
            w: 'auto',
            h: "auto"
        }
    });
    //监听是否消费成功
    api.addEventListener({
        name: 'task_set_consumes_success'
    }, function (ret, err) {
        callback();
        api.removeEventListener({
            name: 'task_set_consumes_success'
        });
    });
}
//通过api.AJAX获取数据
function post(dburl, data, callback) {
    var url = getUrl(dburl);
    var token = localStorage["token"];
    var headers = { token: token };
    api.ajax({
        url: url,
        method: 'post',
        timeout: 30,
        dataType: 'json',
        returnAll: false,
        data: data,
        cache: false,
        headers: headers
    }, function (ret, err) {
        if (ret) {
            try {
                if (ret.D == 0 && !ret.S) {
                    $aui.alert({ content: ret.M, buttons: ['确定'], title: "商加在线提示" }, function (ret) {
                        api.hideProgress();
                        openWin('mine-login', "widget://html/mine/login.html");
                    });
                }
                else {
                    callback(ret);
                }
            } catch (e) {
                //api.alert({ msg: e.message });
            }
        } else {
            api.toast({ msg: "错误:" + JSON.stringify(err) });
            //api.alert({
            //    msg: ('错误信息：' + JSON.stringify(err))
            //});
        }
    });
}

function HTMLDecode(text) {
    var temp = document.createElement("div");
    temp.innerHTML = text;
    var output = temp.innerText || temp.textContent;
    temp = null;
    return output;
}

/*
 * AUI JAVASCRIPT PLUGIN
 * 自定义弹出层
 * v 0.0.1
 * Copyright (c) 2015 auicss.com @流浪男  QQ：343757327  群：344869952
 */
(function (window) {
    var aui = {};
    aui.isElement = function (obj) {
        return !!(obj && obj.nodeType == 1);
    };
    aui.alert = function (opts, callback) {
        var title = '提示消息',
            content = '消息内容',
            radius = 0,
            buttons = ['确定', '关闭'],
            titleColor = '#333',
            contColor = '#333',
            btnColor = '#007aff';
        var _setting = function () {
            title = opts.title ? opts.title : title;
            content = opts.content ? opts.content : content;
            radius = opts.radius ? opts.radius : radius;
            buttons = opts.buttons ? opts.buttons : buttons;
            titleColor = opts.titleColor ? opts.titleColor : titleColor;
            contColor = opts.contColor ? opts.contColor : contColor;
            btnColor = opts.btnColor ? opts.btnColor : btnColor;
        }
        var _init = function () {
            if (api.winName == 'root' && !api.frameName) {
                frmUrl = 'html/aui_alert_frm.html';
            } else {
                frmUrl = '../aui_alert_frm.html';
            }
            api.openFrame({
                name: 'aui_alert_frm',
                url: frmUrl,
                rect: {
                    x: 0,
                    y: 0,
                    w: 'auto',
                    h: 'auto'
                },
                pageParam: {
                    title: title,
                    content: content,
                    radius: radius,
                    buttons: buttons,
                    titleColor: titleColor,
                    contColor: contColor,
                    btnColor: btnColor
                },
                bounces: false,
                vScrollBarEnabled: false,
                hScrollBarEnabled: false
            })
            api.addEventListener({
                name: 'auiAlertEvent'
            }, function (ret) {
                if (ret) {

                    callback('' + ret.value.buttonIndex + '');
                    /*setTimeout(function(){
                        callback(''+ret.value.buttonIndex+'');
                    },150)*/
                }
            });
        }
        _setting();
        _init();

    }
    window.$aui = aui;

})(window);


