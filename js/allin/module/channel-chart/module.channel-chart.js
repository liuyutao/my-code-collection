/**
 * 功能描述：
 * 使用方法: module.channelChart(Obj) 
 * 				必需参数:selector :指定位置
 * 							refId 资源id
 * 							customerId 当前人id
 * 							type 资源类型
 *  			            praiseNum collectNum followNum 三个值
 *  
 * 注意事件：
 * 引入来源：  作用：
 *
 * Created by QiaoLiang on 2015-3-23
 */


module.channelChart = function(Obj){
    var defaults = {
        container:"",   // 容器
        useSortFlag:3,       //  排行榜病例--1，文库--2，视频---3
        pageIndex:0,
        pageSize:10
    };

    var options = $.extend(defaults, Obj);
	var controller = {

        config : {

        },


        path : {
          main:"/call/video/jsonLeaderBoardlist/"
        },
        template : {
            item: function (kv) {
                var cls = kv.index>1 ? "jl_list_num_hui":'jl_list_num_red';
            return  '<li>'+
                    '    <div class="'+ cls +'">'+ (kv.index+1) +'</div>'+
                    '    <div class="jl_list_text"><a href="">'+ kv.cms_video.videoName +'</a></div>'+
                    '    <div class="clear"></div>'+
                    '    <div class="sishu">'+ kv.cms_video.playNum +'</div>'+
                    '</li>';
            }
        },

        init : function(Obj){
            var t = this;
            t.loadData();
            t.bindTab();
        },
        loadData: function () {
            var t = this;
            // 本周
            $.ajax({
                url:"/call/video/jsonLeaderBoardlist/",
                data:{paramJson: $.toJSON({
                    pageIndex:options.pageIndex,
                    pageSize:options.pageSize,
                    useSortFlag:options.useSortFlag,
                    videoDataListFlag:1
                })},
                type:"POST",
                success: function (data) {
                    var list = data.responseObject.responseData.data_list;
                    if(data && data.responseObject &&  data.responseObject.responseData && data.responseObject.responseData.data_list && data.responseObject.responseData.data_list.length>0)   {
                        var list = data.responseObject.responseData.data_list;
                        $(options.container).find(".week").html(t.render(list));
                    }else{
                        $(options.container).find(".week").html("暂无数据");
                    }
                }
            });
            // 本月
            $.ajax({
                url:"/call/video/jsonLeaderBoardlist/",
                data:{paramJson: $.toJSON({
                    pageIndex:options.pageIndex,
                    pageSize:options.pageSize,
                    useSortFlag:options.useSortFlag,
                    videoDataListFlag:2
                })},
                type:"POST",
                success: function (data) {
                    if(data && data.responseObject &&  data.responseObject.responseData && data.responseObject.responseData.data_list && data.responseObject.responseData.data_list.length>0)   {
                        var list = data.responseObject.responseData.data_list;
                        $(options.container).find(".month").html(t.render(list));
                    }else{
                        $(options.container).find(".month").html("暂无数据");
                    }

                }
            });
        },
        bindTab: function () {
            var t = this;
            $(options.container).find(".ll_mourth_text").on("click", function () {
                $(".ll_week_text").removeClass("on");
                $(this).addClass("on");
                $(options.container).find(".week").hide();
                $(options.container).find(".month").show();
            });
            $(options.container).find(".ll_week_text").on("click", function () {
                $(".ll_mourth_text").removeClass("on");
                $(this).addClass("on");
                $(options.container).find(".month").show();
                $(options.container).find(".week").hide();
            })
        },
        render: function (data) {
            var t = this;
            var html = "";
            for (var i = 0; i < data.length; i++) {
                var obj = data[i];

                html+= t.template.item($.extend(obj,{index:i}));
            }
            return html;
        }

	};

	controller.init(Obj);

}
