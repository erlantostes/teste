function abrirJanela(e,t,o,a){var i,r;""==a&&(a=0),i=screen.height/2-t/2,r=screen.width/2-e/2,window.open(o,"","toolbar=0,location=0,directories=0,status=0,menubar=0,resizable=1,scrollbars=1,width="+e+",height="+t+",left="+r+",top="+i)}function validateFormModal(){$(".telefone",".ui-dialog").mask("(99) 9999-9999? / 9999-9999"),$(".formulario",".ui-dialog").validate({rules:{nome:"required",email:{required:!0,email:!0},telefone:"required",mensagem:"required",captcha:{required:!0,remote:enderecoSite+"check.php"}},messages:{nome:"Favor informar o Nome!",email:{required:"Favor informar um E-mail v�lido!",email:"Favor informar um E-mail v�lido!"},telefone:"Favor informar o Telefone!",mensagem:"Favor informar a Mensagem!",captcha:{required:"Informe o c&oacute;digo!",remote:"C&oacute;digo inv&aacute;lido!"}}})}!function(e){function t(e){e=e.replace(/left|top/g,"0px"),e=e.replace(/right|bottom/g,"100%"),e=e.replace(/([0-9\.]+)(\s|\)|$)/g,"$1px$2");var t=e.match(/(-?[0-9\.]+)(px|\%|em|pt)\s(-?[0-9\.]+)(px|\%|em|pt)/);return[parseFloat(t[1],10),t[2],parseFloat(t[3],10),t[4]]}if(!document.defaultView||!document.defaultView.getComputedStyle){var o=e.curCSS;e.curCSS=function(e,t,a){if("background-position"===t&&(t="backgroundPosition"),"backgroundPosition"!==t||!e.currentStyle||e.currentStyle[t])return o.apply(this,arguments);var i=e.style;return!a&&i&&i[t]?i[t]:o(e,"backgroundPositionX",a)+" "+o(e,"backgroundPositionY",a)}}var a=e.fn.animate;e.fn.animate=function(e){return"background-position"in e&&(e.backgroundPosition=e["background-position"],delete e["background-position"]),"backgroundPosition"in e&&(e.backgroundPosition="("+e.backgroundPosition),a.apply(this,arguments)},e.fx.step.backgroundPosition=function(o){if(!o.bgPosReady){var a=e.curCSS(o.elem,"backgroundPosition");a||(a="0px 0px"),a=t(a),o.start=[a[0],a[2]];var i=t(o.end);o.end=[i[0],i[2]],o.unit=[i[1],i[3]],o.bgPosReady=!0}var r=[];r[0]=(o.end[0]-o.start[0])*o.pos+o.start[0]+o.unit[0],r[1]=(o.end[1]-o.start[1])*o.pos+o.start[1]+o.unit[1],o.elem.style.backgroundPosition=r[0]+" "+r[1]}}(jQuery),$(function(){$('a[href=""]').click(function(){return!1}),$("a.linkExterno").each(function(){$(this).attr("target","_blank")});var e=new Array;$("input[type=text],textarea").each(function(){e[$(this).attr("name")]=$(this).attr("value")}),$("input[type=text],textarea").focus(function(){$(this).attr("value")==e[$(this).attr("name")]&&$(this).val("")}),$("input[type=text],textarea").blur(function(){""==$(this).attr("value")&&$(this).val(e[$(this).attr("name")])}),$(".telefone").mask("(99) 9999-9999? / 9999-9999"),$(".formulario").validate({rules:{nome:"required",email:{required:!0,email:!0},telefone:"required",mensagem:"required",captcha:{required:!0,remote:enderecoSite+"check.php"}},messages:{nome:"Favor informar o Nome!",email:{required:"Favor informar um E-mail v�lido!",email:"Favor informar um E-mail v�lido!"},telefone:"Favor informar o Telefone!",mensagem:"Favor informar a Mensagem!",captcha:{required:"Informe o c&oacute;digo!",remote:"C&oacute;digo inv&aacute;lido!"}}}),$(".lightbox").each(function(){$("a",$(this)).lightBox({fixedNavigation:!1,txtImage:"Imagens",txtOf:"de"})}),$("a.modal").click(function(){if($(document).width()>480){var e=document.createElement("div"),t=$(this);return e.title=t.attr("title"),e=$(e),e.attr("id","modal"+t.attr("href")).css("max-height",$(window).height()-150),$.ajax({url:t.attr("href"),async:!1,data:"modal=true",cache:!1,contentType:"application/json; charset=utf-8",success:function(t){e.append(t)},error:function(t){e.append(t)}}),e.dialog({modal:!0,resizable:!1,width:800,closeText:"Fechar",show:"clip",position:["center",30],open:function(){$("body").css("overflow","hidden"),$(".ui-widget-overlay").css("width",$(window).width()+"px"),"object"==typeof _gat&&_gaq.push(["_trackPageview","/"+t.attr("href")]);var o=!0,a=!0;$.browser.msie&&"8.0"==$.browser.version&&(a=!1),$(window).unbind("resize").resize(function(){e.css("max-height",$(window).height()-150),o&&a&&(e.parent().css({left:"50%","margin-left":"-400px",width:"801px"}),$(".ui-widget-overlay").css({width:"100%"}),o=!1),a=!0}),validateFormModal(),$("#fix").hide()},close:function(){$(".ui-widget-overlay").not("#ui-lightbox-overlay")[0]||$("body").css("overflow","auto"),e.dialog("destroy"),e.remove(),$(window).unbind("resize"),$("#fix").show()},buttons:{Fechar:function(){e.dialog("close")}}}),!1}})});