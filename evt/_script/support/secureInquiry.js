var uploadFile={file:function(callback){uploadFile.callBack=callback;uploadFile.fileForm("file")},fileForm:function(type){$("#fileUploadForm").remove();var html=[];html.push('<form name="fileUploadForm" id="fileUploadForm" method="post" enctype="multipart/form-data">');html.push('\t<div style="display:none;">');html.push('\t\t<input type="file" name="uploadFile" id="secureUploadFile" />');html.push('\t\t<input type="hidden" name="uploadType" value="'+type+'">');html.push("\t</div>");html.push("</form>");
$("body").append(html.join(""));$("#secureUploadFile").click()},afterFileSelect:function(file,exCode){var html="";if(file.exCode!=null&&file.exCode!=""){var exMsg=file.exMsg;if(file.exMsg=="제한된 용량을 초과하였습니다.")exMsg="파일은 최대 10MB까지 첨부 가능합니다.";var alertData1={title:"",content:exMsg,callback:"",btnText:"확인"};commonAlert(alertData1);openLayer("commonAlert");return}if($(".addfile-list").children("li").length>=1){var alertData2={title:"",content:"파일은 1개만 첨부 가능합니다.",callback:"",btnText:"확인"};commonAlert(alertData2);
openLayer("commonAlert");return}$("#phyPath").val(file.file.filePath);$("#phyName").val(file.file.fileName);html+="<li><span>"+file.file.fileName+'</span><button type="button" class="ico-del-s" onclick="fileRemove();"><input type="hidden" name="fileSize" value="'+file.file.fileSize+'"><span class="blind">첨부파일 삭제</span></button></li>';$(".addfile-list").append(html)}};
var emailInquiry={validateFocus:null,setError:function name(id,isTerm){if(emailInquiry.validateFocus==null)emailInquiry.validateFocus=id;if(isTerm)$("#"+id).addClass("error");else $("#"+id).parents(".inp-box").addClass("error")},validateName:function(){var eqrrNm=$("input[name=eqrrNm]").val();if(eqrrNm)if(!valid.name.test(eqrrNm))emailInquiry.setError($("input[name=eqrrNm]").attr("id"))},validateNameKey:function(){var eqrrNm=$("input[name=eqrrNm]").val();eqrrNm=eqrrNm.replace(/[^a-zA-Zㄱ-힣\u119E\u11A2\s]/g,
"").replace(/\s+/g," ");var totalByte=0;var macLen=50;var len;for(var i=0;i<eqrrNm.length;i++){var oneChar=escape(eqrrNm.charAt(i));if(oneChar.length===1)totalByte++;else if(oneChar.indexOf("%u")!=-1)totalByte+=2;else if(oneChar.indexOf("%")!=-1)totalByte++;if(totalByte<=macLen)len=i+1}$("input[name=eqrrNm]").val(eqrrNm.substring(0,len));$("input[name=eqrrNm]").focus()},validateTtlKey:function(){var eqrrTtl=$("input[name=ttl]").val();eqrrTtl=eqrrTtl.replace(/[^a-zA-Zㄱ-힣\u119E\u11A2\s]/g,"").replace(/\s+/g,
" ");var totalByte=0;var macLen=100;var len;for(var i=0;i<eqrrTtl.length;i++){var oneChar=escape(eqrrTtl.charAt(i));if(oneChar.length===1)totalByte++;else if(oneChar.indexOf("%u")!=-1)totalByte+=2;else if(oneChar.indexOf("%")!=-1)totalByte++;if(totalByte<=macLen)len=i+1}$("input[name=ttl]").val(eqrrTtl.substring(0,len));$("input[name=ttl]").focus()},validateRadio:function(){sendEmailSecureInquiry()},validateEmail:function(){var eqrrEmail=$("input[name=eqrrEmail]").val();if(eqrrEmail)if(!valid.email.test(eqrrEmail))emailInquiry.setError($("input[name=eqrrEmail]").attr("id"))},
validateMobile:function(){var eqrrMobile=$("input[name=eqrrMobile]").val();if(eqrrMobile)if(!valid.mobile.test(eqrrMobile))emailInquiry.setError($("input[name=eqrrMobile]").attr("id"))},validateIquTtl:function(){var ttl=$("input[name=ttl]").val();if(ttl==="")emailInquiry.setError($("input[name=ttl]").attr("id"))},validateIquContent:function(){var content=$("#ctt").val();if(content==="")emailInquiry.setError($("#ctt").attr("id"));else $("input[name=content]").val(content)},eamilInquiryInsert:function(){emailInquiry.validateFocus=
null;$(".error").removeClass("error");emailInquiry.validateIquTtl();emailInquiry.validateIquContent();emailInquiry.validateEmail();emailInquiry.validateMobile();emailInquiry.validateName();$("input[name=rcvYns]").each(function(){if($(this).parents(".terms-wrap").find("input:checkbox").is(":checked"))$(this).val("Y");else $(this).val("N")});if(emailInquiry.validateFocus!=null)$("#"+emailInquiry.validateFocus).focus();else if($("#eqrrNm").val()||$("#eqrrMobile").val()||$("#eqrrEmail").val())emailInquiry.validateRadio();
else sendEmailSecureInquiry()}};function sendEmailSecureInquiry(){$(".closePop").trigger("click");var sendData=$("#secureInquiryForm").serializeJson();$.extend(sendData,{content:$("#ctt").val(),stId:$("#stId").val()});var options={url:$("#stContextPath").val()+"xhr/sendEmailSecureInquiry/",data:sendData,done:function(result){var alertData={title:"",content:"보안신고접수가 완료되었습니다.",callback:"secureInquiryFinish",btnText:"확인"};commonAlert(alertData);openLayer("commonAlert")}};ajax.call(options)}
$(document).ready(function(){$("input:text[numberOnly]").on("keyup",function(){$(this).val($(this).val().replace(/[^0-9]/g,""))});var inquiryContent;$(document).on("keyup input","#ctt",function(){inquiryContent=$(this).val();$(".txt-count").html("<em class='strong'>"+inquiryContent.length+"</em>"+" / 2,000자");if($(this).val().length>$(this).attr("maxlength"))$(this).val($(this).val().slice(0,$(this).attr("maxlength")))})});
$(document).on("change","#secureUploadFile",function(){waiting.start();$("#fileUploadForm").ajaxSubmit({url:$("#stContextPath").val()+"xhr/common/fileUploadResult",dataType:"json",success:function(result){$("#fileUploadForm").remove();waiting.stop();uploadFile.callBack(result)},error:function(xhr,status,error){waiting.stop()}})});
function secureInquiryPop(){$("#termsNos1").val("");$("#menuCds1").val("");$("#termsNos2").val("");$("#menuCds2").val("");$(".terms1").empty();$(".terms2").empty();$("input[name=phyPath]").val("");$("input[name=phyName]").val("");var options={url:$("#stContextPath").val()+"xhr/getSecureInquiryTerms/",data:{stId:$("#stId").val(),useYn:"Y"},done:function(result){if(result.getTerms1!=null){$("#termsNos1").val(result.getTerms1.termsNo);$("#menuCds1").val(result.getTerms1.termsMenuCd);$(".terms1").append(result.getTerms1.content)}if(result.getTerms2!=
null){$("#termsNos2").val(result.getTerms2.termsNo);$("#menuCds2").val(result.getTerms2.termsMenuCd);$(".terms2").append(result.getTerms2.content)}}};ajax.call(options);$(".addfile-list").children("li").remove();$(".inp-box").removeClass("error");$(".txt-count").html("<em class='strong'>"+0+"</em>"+" / 2,000자");$("#secureInquiryForm").each(function(){this.reset()});$("#popupSecureInquiryOpenBtn").trigger("click")}
function secureInquiryFinish(){$("#popupSecureInquiryFinishOpenBtn").trigger("click")}function fileRemove(){$("input[name=phyPath]").val("");$("input[name=phyName]").val("");$(".addfile-list").children("li").eq(0).remove()};
