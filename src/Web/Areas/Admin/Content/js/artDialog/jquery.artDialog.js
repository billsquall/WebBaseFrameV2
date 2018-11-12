﻿/*!
 * artDialog 4.1.7
 * Date: 2013-03-03 08:04
 * http://code.google.com/p/artdialog/
 * (c) 2009-2012 TangBin, http://www.planeArt.cn
 *
 * This is licensed under the GNU LGPL, version 2.1 or later.
 * For details, see: http://creativecommons.org/licenses/LGPL/2.1/
 */
(function(n,t,i){var c;n.noop=n.noop||function(){};var s,h,l,a,v=0,u=n(t),e=n(document),p=n("html"),w=document.documentElement,f=t.VBArray&&!t.XMLHttpRequest,y="createTouch"in document&&!("onmousemove"in w)||/(iPhone|iPad|iPod)/i.test(navigator.userAgent),o="artDialog"+ +new Date,r=function(t,u,f){var h,l,e,c;t=t||{};(typeof t=="string"||t.nodeType===1)&&(t={content:t,fixed:!y});l=r.defaults;e=t.follow=this.nodeType===1&&this||t.follow;for(c in l)t[c]===i&&(t[c]=l[c]);return(n.each({ok:"yesFn",cancel:"noFn",close:"closeFn",init:"initFn",okVal:"yesText",cancelVal:"noText"},function(n,r){t[n]=t[n]!==i?t[n]:t[r]}),typeof e=="string"&&(e=n(e)[0]),t.id=e&&e[o+"follow"]||t.id||o+v,h=r.list[t.id],e&&h)?h.follow(e).zIndex().focus():h?h.zIndex().focus():(y&&(t.fixed=!1),n.isArray(t.button)||(t.button=t.button?[t.button]:[]),u!==i&&(t.ok=u),f!==i&&(t.cancel=f),t.ok&&t.button.push({name:t.okVal,callback:t.ok,focus:!0}),t.cancel&&t.button.push({name:t.cancelVal,callback:t.cancel}),r.defaults.zIndex=t.zIndex,v++,r.list[t.id]=s?s._init(t):new r.fn._init(t))};r.fn=r.prototype={version:"4.1.7",closed:!0,_init:function(n){var i=this,r,u=n.icon,e=u&&(f?{png:"icons/"+u+".png"}:{backgroundImage:"url('"+n.path+"/skins/icons/loading.gif')"});return i.closed=!1,i.config=n,i.DOM=r=i.DOM||i._getDOM(),r.wrap.addClass(n.skin),r.close[n.cancel===!1?"hide":"show"](),r.icon[0].style.display=u?"":"none",r.iconBg.css(e||{background:"none"}),r.se.css("cursor",n.resize?"se-resize":"auto"),r.title.css("cursor",n.drag?"move":"auto"),r.content.css("padding",n.padding),i[n.show?"show":"hide"](!0),i.button(n.button).title(n.title).content(n.content,!0).size(n.width,n.height).time(n.time),n.follow?i.follow(n.follow):i.position(n.left,n.top),i.zIndex().focus(),n.lock&&i.lock(),i._addEvent(),i._ie6PngFix(),s=null,n.init&&n.init.call(i,t),i},content:function(n){var u,f,e,v,t=this,y=t.DOM,r=y.wrap[0],o=r.offsetWidth,s=r.offsetHeight,h=parseInt(r.style.left),c=parseInt(r.style.top),p=r.style.width,l=y.content,a=l[0];return(t._elemBack&&t._elemBack(),r.style.width="auto",n===i)?a:(typeof n=="string"?l.html(n):n&&n.nodeType===1&&(v=n.style.display,u=n.previousSibling,f=n.nextSibling,e=n.parentNode,t._elemBack=function(){u&&u.parentNode?u.parentNode.insertBefore(n,u.nextSibling):f&&f.parentNode?f.parentNode.insertBefore(n,f):e&&e.appendChild(n);n.style.display=v;t._elemBack=null},l.html(""),a.appendChild(n),n.style.display="block"),arguments[1]||(t.config.follow?t.follow(t.config.follow):(o=r.offsetWidth-o,s=r.offsetHeight-s,h=h-o/2,c=c-s/2,r.style.left=Math.max(h,0)+"px",r.style.top=Math.max(c,0)+"px"),p&&p!=="auto"&&(r.style.width=r.offsetWidth+"px"),t._autoPositionType()),t._ie6SelectFix(),t._runScript(a),t)},title:function(n){var r=this.DOM,u=r.wrap,t=r.title,f="aui_state_noTitle";return n===i?t[0]:(n===!1?(t.hide().html(""),u.addClass(f)):(t.show().html(n||""),u.removeClass(f)),this)},position:function(n,t){var r=this,p=r.config,s=r.DOM.wrap[0],h=f?!1:p.fixed,c=f&&r.config.fixed,l=e.scrollLeft(),a=e.scrollTop(),v=h?0:l,y=h?0:a,w=u.width(),b=u.height(),k=s.offsetWidth,d=s.offsetHeight,o=s.style;return(n||n===0)&&(r._left=n.toString().indexOf("%")!==-1?n:null,n=r._toNumber(n,w-k),typeof n=="number"?(n=c?n+=l:n+v,o.left=Math.max(n,v)+"px"):typeof n=="string"&&(o.left=n)),(t||t===0)&&(r._top=t.toString().indexOf("%")!==-1?t:null,t=r._toNumber(t,b-d),typeof t=="number"?(t=c?t+=a:t+y,o.top=Math.max(t,y)+"px"):typeof t=="string"&&(o.top=t)),n!==i&&t!==i&&(r._follow=null,r._autoPositionType()),r},size:function(n,t){var o,s,h,c,i=this,v=i.config,l=i.DOM,r=l.wrap,e=l.main,a=r[0].style,f=e[0].style;return n&&(i._width=n.toString().indexOf("%")!==-1?n:null,o=u.width()-r[0].offsetWidth+e[0].offsetWidth,h=i._toNumber(n,o),n=h,typeof n=="number"?(a.width="auto",f.width=Math.max(i.config.minWidth,n)+"px",a.width=r[0].offsetWidth+"px"):typeof n=="string"&&(f.width=n,n==="auto"&&r.css("width","auto"))),t&&(i._height=t.toString().indexOf("%")!==-1?t:null,s=u.height()-r[0].offsetHeight+e[0].offsetHeight,c=i._toNumber(t,s),t=c,typeof t=="number"?f.height=Math.max(i.config.minHeight,t)+"px":typeof t=="string"&&(f.height=t)),i._ie6SelectFix(),i},follow:function(t){var v,i=this,b=i.config;if((typeof t=="string"||t&&t.nodeType===1)&&(v=n(t),t=v[0]),!t||!t.offsetWidth&&!t.offsetHeight)return i.position(i._left,i._top);var k=o+"follow",ut=u.width(),ft=u.height(),d=e.scrollLeft(),g=e.scrollTop(),s=v.offset(),nt=t.offsetWidth,et=t.offsetHeight,h=f?!1:b.fixed,c=h?s.left-d:s.left,y=h?s.top-g:s.top,p=i.DOM.wrap[0],tt=p.style,l=p.offsetWidth,w=p.offsetHeight,r=c-(l-nt)/2,a=y+et,it=h?0:d,rt=h?0:g;return r=r<it?c:r+l>ut&&c-l>it?c-l+nt:r,a=a+w>ft+rt&&y-w>rt?y-w:a,tt.left=r+"px",tt.top=a+"px",i._follow&&i._follow.removeAttribute(k),i._follow=t,t[k]=b.id,i._autoPositionType(),i},button:function(){var t=this,u=arguments,c=t.DOM,f=c.buttons,e=f[0],s="aui_state_highlight",r=t._listeners=t._listeners||{},h=n.isArray(u[0])?u[0]:[].slice.call(u);return u[0]===i?e:(n.each(h,function(i,u){var f=u.name,c=!r[f],h=c?document.createElement("button"):r[f].elem;r[f]||(r[f]={});u.callback&&(r[f].callback=u.callback);u.className&&(h.className=u.className);u.focus&&(t._focus&&t._focus.removeClass(s),t._focus=n(h).addClass(s),t.focus());h.setAttribute("type","button");h[o+"callback"]=f;h.disabled=!!u.disabled;c&&(h.innerHTML=f,r[f].elem=h,e.appendChild(h))}),f[0].style.display=h.length?"":"none",t._ie6SelectFix(),t)},show:function(){return this.DOM.wrap.show(),!arguments[0]&&this._lockMaskWrap&&this._lockMaskWrap.show(),this},hide:function(){return this.DOM.wrap.hide(),!arguments[0]&&this._lockMaskWrap&&this._lockMaskWrap.hide(),this},close:function(){var u;if(this.closed)return this;var n=this,i=n.DOM,f=i.wrap,c=r.list,e=n.config.close,h=n.config.follow;if(n.time(),typeof e=="function"&&e.call(n,t)===!1)return n;n.unlock();n._elemBack&&n._elemBack();f[0].className=f[0].style.cssText="";i.title.html("");i.content.html("");i.buttons.html("");r.focus===n&&(r.focus=null);h&&h.removeAttribute(o+"follow");delete c[n.config.id];n._removeEvent();n.hide(!0)._setAbsolute();for(u in n)n.hasOwnProperty(u)&&u!=="DOM"&&delete n[u];return s?f.remove():s=n,n},time:function(n){var t=this,r=t.config.cancelVal,i=t._timer;return i&&clearTimeout(i),n&&(t._timer=setTimeout(function(){t._click(r)},1e3*n)),t},focus:function(){try{if(this.config.focus){var n=this._focus&&this._focus[0]||this.DOM.close[0];n&&n.focus()}}catch(t){}return this},zIndex:function(){var n=this,f=n.DOM,t=f.wrap,i=r.focus,u=r.defaults.zIndex++;return t.css("zIndex",u),n._lockMask&&n._lockMask.css("zIndex",u-1),i&&i.DOM.wrap.removeClass("aui_state_focus"),r.focus=n,t.addClass("aui_state_focus"),n},lock:function(){if(this._lock)return this;var t=this,h=r.defaults.zIndex-1,c=t.DOM.wrap,u=t.config,l=e.width(),a=e.height(),s=t._lockMaskWrap||n(document.body.appendChild(document.createElement("div"))),i=t._lockMask||n(s[0].appendChild(document.createElement("div"))),o="(document).documentElement",v=y?"width:"+l+"px;height:"+a+"px":"width:100%;height:100%",p=f?"position:absolute;left:expression("+o+".scrollLeft);top:expression("+o+".scrollTop);width:expression("+o+".clientWidth);height:expression("+o+".clientHeight)":"";return t.zIndex(),c.addClass("aui_state_lock"),s[0].style.cssText=v+";position:fixed;z-index:"+h+";top:0;left:0;overflow:hidden;"+p,i[0].style.cssText="height:100%;background:"+u.background+";filter:alpha(opacity=0);opacity:0",f&&i.html('<iframe src="about:blank" style="width:100%;height:100%;position:absolute;top:0;left:0;z-index:-1;filter:alpha(opacity=0)"><\/iframe>'),i.stop(),i.bind("click",function(){t._reset()}).bind("dblclick",function(){}),u.duration===0?i.css({opacity:u.opacity}):i.animate({opacity:u.opacity},u.duration),t._lockMaskWrap=s,t._lockMask=i,t._lock=!0,t},unlock:function(){var n=this,r=n._lockMaskWrap,u=n._lockMask,t,i;return n._lock?(t=r[0].style,i=function(){f&&(t.removeExpression("width"),t.removeExpression("height"),t.removeExpression("left"),t.removeExpression("top"));t.cssText="display:none";s&&r.remove()},u.stop().unbind(),n.DOM.wrap.removeClass("aui_state_lock"),n.config.duration?u.animate({opacity:0},n.config.duration,i):i(),n._lock=!1,n):n},_getDOM:function(){var t=document.createElement("div"),e=document.body;t.style.cssText="position:absolute;left:0;top:0";t.innerHTML=r._templates;e.insertBefore(t,e.firstChild);for(var u,i=0,o={wrap:n(t)},f=t.getElementsByTagName("*"),s=f.length;i<s;i++)u=f[i].className.split("aui_")[1],u&&(o[u]=n(f[i]));return o},_toNumber:function(n,t){if(!n&&n!==0||typeof n=="number")return n;var i=n.length-1;return n.lastIndexOf("px")===i?n=parseInt(n):n.lastIndexOf("%")===i&&(n=parseInt(t*n.split("%")[0]/100)),n},_ie6PngFix:f?function(){for(var n=0,t,i,f,u,o=r.defaults.path+"/skins/",e=this.DOM.wrap[0].getElementsByTagName("*");n<e.length;n++)t=e[n],i=t.currentStyle.png,i&&(f=o+i,u=t.runtimeStyle,u.backgroundImage="none",u.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+f+"',sizingMethod='crop')")}:n.noop,_ie6SelectFix:f?function(){var r=this.DOM.wrap,u=r[0],f=o+"iframeMask",n=r[f],t=u.offsetWidth,i=u.offsetHeight;t=t+"px";i=i+"px";n?(n.style.width=t,n.style.height=i):(n=u.appendChild(document.createElement("iframe")),r[f]=n,n.src="about:blank",n.style.cssText="position:absolute;z-index:-1;left:0;top:0;filter:alpha(opacity=0);width:"+t+";height:"+i)}:n.noop,_runScript:function(n){for(var u,i=0,f=0,r=n.getElementsByTagName("script"),e=r.length,t=[];i<e;i++)r[i].type==="text/dialog"&&(t[f]=r[i].innerHTML,f++);t.length&&(t=t.join(""),u=new Function(t),u.call(this))},_autoPositionType:function(){this[this.config.fixed?"_setFixed":"_setAbsolute"]()},_setFixed:function(){return f&&n(function(){var t="backgroundAttachment";p.css(t)!=="fixed"&&n("body").css(t)!=="fixed"&&p.css({zoom:1,backgroundImage:"url(about:blank)",backgroundAttachment:"fixed"})}),function(){var n=this.DOM.wrap,t=n[0].style;if(f){var r=parseInt(n.css("left")),u=parseInt(n.css("top")),o=e.scrollLeft(),s=e.scrollTop(),i="(document.documentElement)";this._setAbsolute();t.setExpression("left","eval("+i+".scrollLeft + "+(r-o)+') + "px"');t.setExpression("top","eval("+i+".scrollTop + "+(u-s)+') + "px"')}else t.position="fixed"}}(),_setAbsolute:function(){var n=this.DOM.wrap[0].style;f&&(n.removeExpression("left"),n.removeExpression("top"));n.position="absolute"},_click:function(n){var i=this,r=i._listeners[n]&&i._listeners[n].callback;return typeof r!="function"||r.call(i,t)!==!1?i.close():i},_reset:function(n){var i,t=this,h=t._winSize||u.width()*u.height(),r=t._follow,f=t._width,e=t._height,o=t._left,s=t._top;n&&(i=t._winSize=u.width()*u.height(),h===i)||((f||e)&&t.size(f,e),r?t.follow(r):(o||s)&&t.position(o,s))},_addEvent:function(){var i,n=this,f=n.config,e="CollectGarbage"in t,r=n.DOM;n._winResize=function(){i&&clearTimeout(i);i=setTimeout(function(){n._reset(e)},40)};u.bind("resize",n._winResize);r.wrap.bind("click",function(t){var i=t.target,u;if(i.disabled)return!1;if(i===r.close[0])return n._click(f.cancelVal),!1;u=i[o+"callback"];u&&n._click(u);n._ie6SelectFix()}).bind("mousedown",function(){n.zIndex()})},_removeEvent:function(){var n=this,t=n.DOM;t.wrap.unbind();u.unbind("resize",n._winResize)}};r.fn._init.prototype=r.fn;n.fn.dialog=n.fn.artDialog=function(){var n=arguments;return this[this.live?"live":"bind"]("click",function(){return r.apply(this,n),!1}),this};r.focus=null;r.get=function(n){return n===i?r.list:r.list[n]};r.list={};e.bind("keydown",function(n){var i=n.target,u=i.nodeName,t=r.focus,f=n.keyCode;t&&t.config.esc&&!/^INPUT|TEXTAREA$/.test(u)&&f===27&&t._click(t.config.cancelVal)});a=t._artDialog_path||function(n,t,i){for(t in n)n[t].src&&n[t].src.indexOf("artDialog")!==-1&&(i=n[t]);return h=i||n[n.length-1],i=h.src.replace(/\\/g,"/"),i.lastIndexOf("/")<0?".":i.substring(0,i.lastIndexOf("/"))}(document.getElementsByTagName("script"));l=h.src.split("skin=")[1];l&&(c=document.createElement("link"),c.rel="stylesheet",c.href=a+"/skins/"+l+".css?"+r.fn.version,h.parentNode.insertBefore(c,h));u.bind("load",function(){setTimeout(function(){v||r({left:"-9999em",time:9,fixed:!1,lock:!1,focus:!1})},150)});try{document.execCommand("BackgroundImageCache",!1,!0)}catch(b){}r._templates='<div class="aui_outer"><table class="aui_border"><tbody><tr><td class="aui_nw"><\/td><td class="aui_n"><\/td><td class="aui_ne"><\/td><\/tr><tr><td class="aui_w"><\/td><td class="aui_c"><div class="aui_inner"><table class="aui_dialog"><tbody><tr><td colspan="2" class="aui_header"><div class="aui_titleBar"><div class="aui_title"><\/div><a class="aui_close" href="javascript:/*artDialog*/;">×<\/a><\/div><\/td><\/tr><tr><td class="aui_icon"><div class="aui_iconBg"><\/div><\/td><td class="aui_main"><div class="aui_content"><\/div><\/td><\/tr><tr><td colspan="2" class="aui_footer"><div class="aui_buttons"><\/div><\/td><\/tr><\/tbody><\/table><\/div><\/td><td class="aui_e"><\/td><\/tr><tr><td class="aui_sw"><\/td><td class="aui_s"><\/td><td class="aui_se"><\/td><\/tr><\/tbody><\/table><\/div>';r.defaults={content:'<div class="aui_loading"><span>loading..<\/span><\/div>',title:"消息",button:null,ok:null,cancel:null,init:null,close:null,okVal:"确定",cancelVal:"取消",width:"auto",height:"auto",minWidth:96,minHeight:32,padding:"20px 25px",skin:"",icon:null,time:null,esc:!0,focus:!0,show:!0,follow:null,path:a,lock:!1,background:"#000",opacity:.7,duration:300,fixed:!1,left:"50%",top:"38.2%",zIndex:1987,resize:!0,drag:!0};t.artDialog=n.dialog=n.artDialog=r})(this.art||this.jQuery&&(this.art=jQuery),this),function(n){var t,e,r=n(window),i=n(document),u=document.documentElement,f=!("minWidth"in u.style),o="onlosecapture"in u,s="setCapture"in u;artDialog.dragEvent=function(){var n=this,t=function(t){var i=n[t];n[t]=function(){return i.apply(n,arguments)}};t("start");t("move");t("end")};artDialog.dragEvent.prototype={onstart:n.noop,start:function(n){i.bind("mousemove",this.move).bind("mouseup",this.end);this._sClientX=n.clientX;this._sClientY=n.clientY;this.onstart(n.clientX,n.clientY);return!1},onmove:n.noop,move:function(n){this._mClientX=n.clientX;this._mClientY=n.clientY;this.onmove(n.clientX-this._sClientX,n.clientY-this._sClientY);return!1},onend:n.noop,end:function(n){i.unbind("mousemove",this.move).unbind("mouseup",this.end);this.onend(n.clientX,n.clientY);return!1}};e=function(n){var h,y,p,w,b,a,e=artDialog.focus,c=e.DOM,u=c.wrap,l=c.title,v=c.main,k="getSelection"in window?function(){window.getSelection().removeAllRanges()}:function(){try{document.selection.empty()}catch(n){}};t.onstart=function(){a?(y=v[0].offsetWidth,p=v[0].offsetHeight):(w=u[0].offsetLeft,b=u[0].offsetTop);i.bind("dblclick",t.end);!f&&o?l.bind("losecapture",t.end):r.bind("blur",t.end);s&&l[0].setCapture();u.addClass("aui_state_drag");e.focus()};t.onmove=function(n,t){if(a){var r=u[0].style,i=v[0].style,f=n+y,o=t+p;r.width="auto";i.width=Math.max(0,f)+"px";r.width=u[0].offsetWidth+"px";i.height=Math.max(0,o)+"px"}else{var i=u[0].style,s=Math.max(h.minX,Math.min(h.maxX,n+w)),c=Math.max(h.minY,Math.min(h.maxY,t+b));i.left=s+"px";i.top=c+"px"}k();e._ie6SelectFix()};t.onend=function(){i.unbind("dblclick",t.end);!f&&o?l.unbind("losecapture",t.end):r.unbind("blur",t.end);s&&l[0].releaseCapture();f&&!e.closed&&e._autoPositionType();u.removeClass("aui_state_drag")};a=n.target===c.se[0]?!0:!1;h=function(){var t,n=e.DOM.wrap[0],u=n.style.position==="fixed",s=n.offsetWidth,h=n.offsetHeight,c=r.width(),l=r.height(),f=u?0:i.scrollLeft(),o=u?0:i.scrollTop(),a=c-s+f;return t=l-h+o,{minX:f,minY:o,maxX:a,maxY:t}}();t.start(n)};i.bind("mousedown",function(n){var i=artDialog.focus;if(i){var r=n.target,u=i.config,f=i.DOM;if(u.drag!==!1&&r===f.title[0]||u.resize!==!1&&r===f.se[0])return t=t||new artDialog.dragEvent,e(n),!1}})}(this.art||this.jQuery&&(this.art=jQuery))