var filterVip={setFilter:function(obj,type){var tagObj=$(obj).closest("li.tag-list").find("a > span");if(type=="A")if($(obj).data("tag-no")==="CITY"){var checkedArr=[];$(".seoul-inner li").each(function(idx,item){var chkItemNo=$(item).children("input").data("item-no");var chkVal=$(item).children("input[data-item-no="+chkItemNo+"]");if($(chkVal).is(":checked"))checkedArr.push(item)});if(checkedArr.length===0)addFilter(obj);else if(checkedArr.length===1&&$(obj).data("itemNo")!==10){var count=Number($(tagObj).text());
$(tagObj).text(count+1)}else if($(obj).data("itemNo")!==10){$(".filter-area").find("span[data-item-no=10]").remove();addFilter(obj)}}else if($(obj).data("tag-no")==="DTRT"){$(".filter-area").find("span[data-item-no=10]").remove();addFilter(obj)}else addFilter(obj);else if(type=="D")if($(obj).data("tag-no")==="CITY"){var checkedArr=[];$(".seoul-inner li").each(function(idx,item){var chkItemNo=$(item).children("input").data("item-no");var chkVal=$(item).children("input[data-item-no="+chkItemNo+"]");
if($(chkVal).is(":checked"))checkedArr.push(item)});if($(obj).data("item-no")===10&&checkedArr.length===0){var count=Number($(tagObj).text());$(tagObj).text(count-1);$(".filter-area").find("span[data-item-no=10]").remove()}else if($(obj).data("item-no")===10&&checkedArr.length!==0){$(".filter-area").find("span[data-item-no="+$(obj).data("item-no")+"]").remove();$(".filter-area").find("span[data-item-no=10]").remove()}else{$(".filter-area").find("span[data-item-no="+$(obj).data("item-no")+"]").remove();
var count=Number($(tagObj).text());$(tagObj).text(count-1)}}else if($(obj).data("tag-no")==="DTRT"){var checkedArr=[];$(".seoul-inner li").each(function(idx,item){var chkItemNo=$(item).children("input").data("item-no");var chkVal=$(item).children("input[data-item-no="+chkItemNo+"]");if($(chkVal).is(":checked"))checkedArr.push(item)});if(checkedArr.length===0){$(".filter-area").find("span[data-item-no="+$(obj).data("item-no")+"]").remove();var unSel=$("li.tag-list .chk-form input[data-item-no=10]");
var count=Number($(tagObj).text());$(tagObj).text(count-1);addFilter(unSel)}else{var itemObj=$(".filter-area").find("span[data-item-no="+$(obj).data("item-no")+"]");var count=Number($(tagObj).text());$(".filter-area").find("span[data-item-no=10]").remove();$(".filter-area").find(itemObj).remove();$(tagObj).text(count-1)}}else{var itemObj=$(".filter-area").find("span[data-item-no="+$(obj).data("item-no")+"]");var count=Number($(tagObj).text());$(".filter-area").find("span[data-item-no=10]").remove();
$(itemObj).remove();$(tagObj).text(count-1)}filterVip.reloadFilterInsights()},delFilter:function(tagNo,itemNo){var tagObj=$("li.tag-list[data-tag-no="+tagNo+"]").find("a > span");var itemObj=$(".filter-area").find("span[data-item-no="+itemNo+"]");$(".filter-area").find(itemObj).remove();if(tagNo==="CITY")if(itemNo==="10"){$(".seoul > label").removeClass("active");$(".seoul-inner").slideUp("fast");var checkObj=$("li.tag-list .chk-form input[data-item-no="+itemNo+"]");$(checkObj).prop("checked",false);
var checkObjTxt=$(checkObj).closest("li.tag-list").find("a > span");var count=Number($(checkObjTxt).text());$(checkObjTxt).text(count-1)}else{var checkObj=$("li.tag-list .chk-form input[data-item-no="+itemNo+"]");$(checkObj).prop("checked",false);var checkObjTxt=$(checkObj).closest("li.tag-list").find("a > span");var count=Number($(checkObjTxt).text());$(checkObjTxt).text(count-1)}else if(tagNo==="DTRT"){var checkedArr=[];var checkObj=$("li.tag-list .chk-form input[data-item-no="+itemNo+"]");$(checkObj).prop("checked",
false);$(".seoul-inner li").each(function(idx,item){var chkItemNo=$(item).children("input").data("item-no");var chkVal=$(item).children("input[data-item-no="+chkItemNo+"]");if($(chkVal).is(":checked"))checkedArr.push(item)});if(checkedArr.length===0){var unSel=$("li.tag-list .chk-form input[data-item-no=10]");var checkObjTxt=$(checkObj).closest("li.tag-list").find("a > span");var count=Number($(checkObjTxt).text());$(checkObjTxt).text(count-1);addFilter(unSel)}else if(checkedArr.length===1){$(".filter-area").find("span[data-item-no=10]").remove();
var checkObjTxt=$(checkObj).closest("li.tag-list").find("a > span");var count=Number($(checkObjTxt).text());$(checkObjTxt).text(count-1)}else{$(".filter-area").find("span[data-item-no=10]").remove();var checkObjTxt=$(checkObj).closest("li.tag-list").find("a > span");var count=Number($(checkObjTxt).text());$(checkObjTxt).text(count-1)}}else{var checkObj=$("li.tag-list .chk-form input[data-item-no="+itemNo+"]");$(checkObj).prop("checked",false);var checkObjTxt=$(checkObj).closest("li.tag-list").find("a > span");
var count=Number($(checkObjTxt).text());$(checkObjTxt).text(count-1)}filterVip.reloadFilterInsights()},resetFilter:function(){$(".filter-area").html("");$("li.tag-list").find("a > span").text("0");$("li.tag-list .chk-form input:checkbox").prop("checked",false);$(".seoul > label").removeClass("active");$(".seoul-inner").slideUp("fast");filterVip.reloadFilterInsights()},reloadFilterInsights:function(){var filterPrdt="",filterArea1="",filterArea2="",filterArea3="";var length=$(".filter-area span").length;
if(length>0)$(".btnInit").show();else{$(".btnInit").hide();if($("li.tag-list .chk-form input[data-item-no=10]").is(":checked"))filterArea3=10}$(".filter-area span").each(function(index,item){var grpCd=$(this).data("tag-no");if(grpCd=="SP_PRD_GB"){filterPrdt+=$(this).data("item-no");if(index!=$(".filter-area span").length-1)filterPrdt+=","}else if(grpCd=="CITY")if($(this).data("itemNo")===10){filterArea3+=$(this).data("item-no");if(index!=$(".filter-area span").length-1)filterArea3+=","}else{filterArea1+=
$(this).data("item-no");if(index!=$(".filter-area span").length-1)filterArea1+=","}else if(grpCd=="DTRT"){filterArea2+=$(this).data("item-no");if(index!=$(".filter-area span").length-1)filterArea2+=","}});$("#filterPrdt").val(filterPrdt);$("#filterArea1").val(filterArea1);$("#filterArea2").val(filterArea2);$("#filterArea3").val(filterArea3);$("#page").val(1);loadList()}};
function addFilter(obj){var winw=$(window).width();var filter="";if(winw<801){filter+='<div class="item">';filter+='<span class="txt" data-tag-no="'+$(obj).data("tag-no")+'" data-item-no="'+$(obj).data("item-no")+'">'+$(obj).attr("title");filter+='<button type="button" onclick="filterVip.delFilter(\''+$(obj).data("tag-no")+"', '"+$(obj).data("item-no")+'\');" class="btn-delete">삭제</button></span>';filter+="</div>"}else{filter+='<span class="txt" data-tag-no="'+$(obj).data("tag-no")+'" data-item-no="'+
$(obj).data("item-no")+'">'+$(obj).attr("title");filter+='<button type="button" onclick="filterVip.delFilter(\''+$(obj).data("tag-no")+"', '"+$(obj).data("item-no")+"');\">삭제</button></span>"}$(".filter-area").append(filter);var tagObj=$(obj).closest("li.tag-list").find("a > span");var count=Number($(tagObj).text());var checkedArr=[];$(".seoul-inner li").each(function(idx,item){var chkItemNo=$(item).children("input").data("item-no");var chkVal=$(item).children("input[data-item-no="+chkItemNo+"]");
if($(chkVal).is(":checked"))checkedArr.push(item)});if(checkedArr.length==0)$(tagObj).text(count+1);else if(checkedArr.length==1)$(tagObj).text(count);else $(tagObj).text(count+1)}
$(document).ready(function(){$(".list-filter .btn-filter").on("click",function(e){$(this).parent().find(".list-box").slideUp();if(!$(this).parent().hasClass("active")){$(this).parent().addClass("active");if(!$(this).next().is(":visible")){$(this).next().slideDown();$(this).parent().addClass("open")}}else{$(this).parent().removeClass("active");$(this).parent().find(".list-box").slideUp()}});if($(window).width()>800){$(".list-filter > li").eq(0).find(".btn-filter").click();$(".list-filter > li").eq(1).find(".btn-filter").click()}else $(".list-filter > li").eq(0).find(".btn-filter").click();
$(".seoul > label").on("click",function(e){$(this).parent().find(".seoul-inner").slideUp("fast");if(!$(this).hasClass("active")){$(this).addClass("active");if(!$(this).next().is(":visible")){$(this).next().slideDown("fast");$(this).addClass("open")}}else{$(this).removeClass("active");$(this).parent().find(".seoul-inner").slideUp("fast")}});$("li.tag-list .chk-form input").click(function(){if($(this).is(":checked"))filterVip.setFilter($(this),"A");else filterVip.setFilter($(this),"D")})});