var Log = {};

Log.urlList={
    createBrowse:"/call/log/customer/browse/createBrowse/",	// 创建浏览记录
    updateLeave:"/call/log/customer/browse/updateLeave/"	// 更新浏览记录－离开页面时间
};
Log.logId="";
Log.isClose=false;
Log.execute=function (funcName, paramJson) {
    var t = Log;
    var url = t.urlList[funcName];
    var responseData = null;
    var param = {};
    if (paramJson && paramJson != "") {
        param.paramJson = $.toJSON(paramJson);
    } else {
        //param.paramJson= "{}";
    }
    $.ajax({
        type: 'POST',
        url: url,
        data: param,
        dataType: "json",
        async:(paramJson.async==true) ?true:false,
        timeout: 10000,
        success: function callback(rep) {
            if (rep && rep.responseObject) {
                responseData = rep.responseObject;
            } else {
                responseData = rep;
            }
            Log.logId=responseData.responsePk
        },
        error: function () {
        }
    });

    return responseData;
}
/**
 * 浏览记录
 * browseType:1-主页，2-视频应用页,3-文库应用页,4-视频内容页,5-文库内容页,6-个人主页,7-个人首页,8个人资料页
 */
Log.createBrowse=function(browseType,opDesc){
    var t=Log;
    var broseUrl=window.location.href;
    var param={browseUrl:broseUrl,browseType:browseType,opDesc:opDesc};
    t.execute("createBrowse",param);
}

/**
 * 离开页面记录
 */
Log.updateLeave=function(){
    if(Log.logId && Log.logId!=""){
        var param={id:Log.logId,async:false};
        Log.execute("updateLeave",param);
        Log.logId="";
    }
}

window.onbeforeunload=function(evt){
    Log.updateLeave();
}