"use strict";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,e,o){return e&&_defineProperties(t.prototype,e),o&&_defineProperties(t,o),t}window.SVG3DTagCloud=function(n,t){var m={entries:[],width:480,height:480,radius:"70%",radiusMin:75,bgDraw:!0,bgColor:"#000",opacityOver:1,opacityOut:.05,opacitySpeed:6,fov:800,speed:2,fontFamily:"Arial, sans-serif",fontSize:"15",fontColor:"#fff",fontWeight:"normal",fontStyle:"normal",fontStretch:"normal",fontToUpperCase:!1,tooltipFontFamily:"Arial, sans-serif",tooltipFontSize:"15",tooltipFontColor:"#fff",tooltipFontWeight:"normal",tooltipFontStyle:"normal",tooltipFontStretch:"normal",tooltipFontToUpperCase:!1,tooltipTextAnchor:"left",tooltipDiffX:0,tooltipDiffY:10};if(void 0!==t)for(var e in t)t.hasOwnProperty(e)&&m.hasOwnProperty(e)&&(m[e]=t[e]);if(!m.entries.length)return!1;var v,f,p,d,y,r,g=[],h=!0,b={x:0,y:0},u={x:0,y:0,z:0},x={x:0,y:0},A={sx:0,cx:0,sy:0,cy:0},w=Math.PI/180,C="http://www.w3.org/2000/svg";function o(){var t=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,e=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,o=t,i=e;i=0<m.width.toString().indexOf("%")||0<m.height.toString().indexOf("%")?(o=Math.round(n.offsetWidth/100*parseInt(m.width)),Math.round(o/100*parseInt(m.height))):(o=parseInt(m.width),parseInt(m.height)),t<=o&&(o=t),e<=i&&(i=e),d={x:o/2,y:i/2},x.x=m.speed/d.x,x.y=m.speed/d.y,(p=i<=o?i/100*parseInt(m.radius):o/100*parseInt(m.radius))<1&&(p=1),(f=p/2)<m.radiusMin&&(f=m.radiusMin,p=2*f),y.setAttribute("width",o),y.setAttribute("height",i),m.bgDraw&&(r.setAttribute("width",o),r.setAttribute("height",i)),function(t){for(var e=0,o=g.length;e<o;e++)i=g[e],n=t,r=i.vectorPosition.x-u.x,a=i.vectorPosition.y-u.y,s=i.vectorPosition.z-u.z,l=Math.sqrt(r*r+a*a+s*s),i.vectorPosition.x/=l,i.vectorPosition.y/=l,i.vectorPosition.z/=l,i.vectorPosition.x*=n,i.vectorPosition.y*=n,i.vectorPosition.z*=n;var i,n,r,a,s,l}(f)}function i(t){for(var e=0,o=g.length;e<o;e++){var i=g[e];if(i.element.getAttribute("x")===t.getAttribute("x")&&i.element.getAttribute("y")===t.getAttribute("y"))return i}}function a(){requestAnimFrame(a),function(){var t=x.x*b.x-m.speed,e=m.speed-x.y*b.y,o=t*w,i=e*w;A.sx=Math.sin(o),A.cx=Math.cos(o),A.sy=Math.sin(i),A.cy=Math.cos(i);for(var n=0,r=g.length;n<r;n++){var a=g[n];if(h){var s=a.vectorPosition.x,l=a.vectorPosition.y*A.sy+a.vectorPosition.z*A.cy;a.vectorPosition.x=s*A.cx+l*A.sx,a.vectorPosition.y=a.vectorPosition.y*A.cy+a.vectorPosition.z*-A.sy,a.vectorPosition.z=s*-A.sx+l*A.cx}var u,c=m.fov/(m.fov+a.vectorPosition.z);a.vector2D.x=a.vectorPosition.x*c+d.x,a.vector2D.y=a.vectorPosition.y*c+d.y,a.diffX&&a.diffY&&(a.vector2D.x-=a.diffX,a.vector2D.y-=a.diffY),a.element.setAttribute("x",a.vector2D.x),a.element.setAttribute("y",a.vector2D.y),h?(u=(f-a.vectorPosition.z)/p)<m.opacityOut&&(u=m.opacityOut):(u=parseFloat(a.element.getAttribute("opacity")),a.mouseOver?u+=(m.opacityOver-u)/m.opacitySpeed:u+=(m.opacityOut-u)/m.opacitySpeed),a.element.setAttribute("opacity",u)}g=g.sort(function(t,e){return e.vectorPosition.z-t.vectorPosition.z})}()}function S(t){h=!1;var e,o=i(t.target);!function(t){for(var e=0,o=g.length;e<o;e++){var i=g[e];i.index===t.index?i.mouseOver=!0:i.mouseOver=!1}}(o),o.tooltip&&(e=o).tooltip&&(v.setAttribute("x",e.vector2D.x-m.tooltipDiffX),v.setAttribute("y",e.vector2D.y-m.tooltipDiffY),v.textContent=m.tooltipFontToUpperCase?e.tooltipLabel.toUpperCase():e.tooltipLabel,v.setAttribute("opacity",1))}function P(t){h=!0;var e=i(t.target);e.tooltip&&v.setAttribute("opacity",0)}function s(t){var e,o;e=t,o=y.getBoundingClientRect(),b={x:e.clientX-o.left,y:e.clientY-o.top}}function l(t){o()}window.requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)},(y=document.createElementNS(C,"svg")).addEventListener("mousemove",s),n.appendChild(y),m.bgDraw&&((r=document.createElementNS(C,"rect")).setAttribute("x",0),r.setAttribute("y",0),r.setAttribute("fill",m.bgColor),y.appendChild(r)),function(){for(var t=!1,e=1,o=m.entries.length+1;e<o;e++){var i=Math.acos(2*e/o-1),n=Math.sqrt(o*Math.PI)*i,r=Math.cos(n)*Math.sin(i),a=Math.sin(n)*Math.sin(i),s=Math.cos(i),l=(u=e-1,c=m.entries[e-1],f=r,p=a,d=s,h=void 0,h={},void 0!==c.label?(h.element=document.createElementNS(C,"text"),h.element.setAttribute("x",0),h.element.setAttribute("y",0),h.element.setAttribute("fill",m.fontColor),h.element.setAttribute("font-family",m.fontFamily),h.element.setAttribute("font-size",m.fontSize),h.element.setAttribute("font-weight",m.fontWeight),h.element.setAttribute("font-style",m.fontStyle),h.element.setAttribute("font-stretch",m.fontStretch),h.element.setAttribute("text-anchor","middle"),h.element.textContent=m.fontToUpperCase?c.label.toUpperCase():c.label):void 0!==c.image&&(h.element=document.createElementNS(C,"image"),h.element.setAttribute("x",0),h.element.setAttribute("y",0),h.element.setAttribute("width",c.width),h.element.setAttribute("height",c.height),h.element.setAttribute("id","image_"+u),h.element.setAttributeNS("http://www.w3.org/1999/xlink","href",c.image),h.diffX=c.width/2,h.diffY=c.height/2),h.link=document.createElementNS(C,"a"),h.link.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",c.url),h.link.setAttribute("target",c.target),h.link.addEventListener("mouseover",S,!0),h.link.addEventListener("mouseout",P,!0),h.link.appendChild(h.element),void 0!==c.tooltip?(h.tooltip=!0,h.tooltipLabel=m.tooltipFontToUpperCase?c.tooltip.toUpperCase():c.tooltip):h.tooltip=!1,h.index=u,h.mouseOver=!1,h.vectorPosition={x:f,y:p,z:d},h.vector2D={x:0,y:0},y.appendChild(h.link),h);g.push(l),void 0!==m.entries[e-1].tooltip&&(t=!0)}var u,c,f,p,d,h;t&&((v=document.createElementNS(C,"text")).setAttribute("x",0),v.setAttribute("y",0),v.setAttribute("fill",m.tooltipFontColor),v.setAttribute("font-family",m.tooltipFontFamily),v.setAttribute("font-size",m.tooltipFontSize),v.setAttribute("font-weight",m.tooltipFontWeight),v.setAttribute("font-style",m.tooltipFontStyle),v.setAttribute("font-stretch",m.tooltipFontStretch),v.setAttribute("text-anchor",m.tooltipTextAnchor),v.textContent="",y.appendChild(v))}(),o(),a(),window.addEventListener("resize",l)},"undefined"!=typeof jQuery&&function(i){i.fn.svg3DTagCloud=function(e){var o=arguments;return this.each(function(){if(i.data(this,"plugin_SVG3DTagCloud")){var t=i.data(this,"plugin_SVG3DTagCloud");t[e]?t[e].apply(this,Array.prototype.slice.call(o,1)):i.error("Method "+e+" does not exist on jQuery.svg3DTagCloud")}else i.data(this,"plugin_SVG3DTagCloud",new SVG3DTagCloud(this,e))})}}(jQuery),window.SVG3DTagCloud=function(n,t){function e(){var t=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,e=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,o=t,i=e;i=0<y.width.toString().indexOf("%")||0<y.height.toString().indexOf("%")?(o=Math.round(n.offsetWidth/100*parseInt(y.width)),Math.round(o/100*parseInt(y.height))):(o=parseInt(y.width),parseInt(y.height)),t<=o&&(o=t),e<=i&&(i=e),d={x:o/2,y:i/2},w.x=y.speed/d.x,w.y=y.speed/d.y,(p=i<=o?i/100*parseInt(y.radius):o/100*parseInt(y.radius))<1&&(p=1),(f=p/2)<y.radiusMin&&(f=y.radiusMin,p=2*f),b.setAttribute("width",o),b.setAttribute("height",i),y.bgDraw&&(l.setAttribute("width",o),l.setAttribute("height",i)),function(t){for(var e=0,o=x.length;e<o;e++)i=x[e],n=t,r=i.vectorPosition.x-u.x,a=i.vectorPosition.y-u.y,s=i.vectorPosition.z-u.z,l=Math.sqrt(r*r+a*a+s*s),i.vectorPosition.x/=l,i.vectorPosition.y/=l,i.vectorPosition.z/=l,i.vectorPosition.x*=n,i.vectorPosition.y*=n,i.vectorPosition.z*=n;var i,n,r,a,s,l}(f)}function i(t){for(var e=0,o=x.length;e<o;e++){var i=x[e];if(i.element.getAttribute("x")===t.getAttribute("x")&&i.element.getAttribute("y")===t.getAttribute("y"))return i}}function o(){requestAnimFrame(o),function(){var t=w.x*A.x-y.speed,e=y.speed-w.y*A.y,o=t*S,i=e*S;C.sx=Math.sin(o),C.cx=Math.cos(o),C.sy=Math.sin(i),C.cy=Math.cos(i);for(var n=0,r=x.length;n<r;n++){var a=x[n];if(h){var s=a.vectorPosition.x,l=a.vectorPosition.y*C.sy+a.vectorPosition.z*C.cy;a.vectorPosition.x=s*C.cx+l*C.sx,a.vectorPosition.y=a.vectorPosition.y*C.cy+a.vectorPosition.z*-C.sy,a.vectorPosition.z=s*-C.sx+l*C.cx}var u,c=y.fov/(y.fov+a.vectorPosition.z);a.vector2D.x=a.vectorPosition.x*c+d.x,a.vector2D.y=a.vectorPosition.y*c+d.y,a.diffX&&a.diffY&&(a.vector2D.x-=a.diffX,a.vector2D.y-=a.diffY),a.element.setAttribute("x",a.vector2D.x),a.element.setAttribute("y",a.vector2D.y),h?(u=(f-a.vectorPosition.z)/p)<y.opacityOut&&(u=y.opacityOut):(u=parseFloat(a.element.getAttribute("opacity")),u+=a.mouseOver?(y.opacityOver-u)/y.opacitySpeed:(y.opacityOut-u)/y.opacitySpeed),a.element.setAttribute("opacity",u)}x=x.sort(function(t,e){return e.vectorPosition.z-t.vectorPosition.z})}()}function m(t){h=!1;var e,o=i(t.target);(function(t){for(var e=0,o=x.length;e<o;e++){var i=x[e];i.index===t.index?i.mouseOver=!0:i.mouseOver=!1}})(o),o.tooltip&&(e=o).tooltip&&(g.setAttribute("x",e.vector2D.x-y.tooltipDiffX),g.setAttribute("y",e.vector2D.y-y.tooltipDiffY),g.textContent=y.tooltipFontToUpperCase?e.tooltipLabel.toUpperCase():e.tooltipLabel,g.setAttribute("opacity",1))}function v(t){h=!0;var e=i(t.target);e.tooltip&&g.setAttribute("opacity",0)}function r(t){var e,o;e=t,o=b.getBoundingClientRect(),A={x:e.clientX-o.left,y:e.clientY-o.top}}function a(t){e()}var y={entries:[],width:480,height:480,radius:"70%",radiusMin:75,bgDraw:!0,bgColor:"#000",opacityOver:1,opacityOut:.05,opacitySpeed:6,fov:800,speed:2,fontFamily:"Arial, sans-serif",fontSize:"15",fontColor:"#fff",fontWeight:"normal",fontStyle:"normal",fontStretch:"normal",fontToUpperCase:!1,tooltipFontFamily:"Arial, sans-serif",tooltipFontSize:"15",tooltipFontColor:"#fff",tooltipFontWeight:"normal",tooltipFontStyle:"normal",tooltipFontStretch:"normal",tooltipFontToUpperCase:!1,tooltipTextAnchor:"left",tooltipDiffX:0,tooltipDiffY:10};if(void 0!==t)for(var s in t)t.hasOwnProperty(s)&&y.hasOwnProperty(s)&&(y[s]=t[s]);if(!y.entries.length)return!1;var g,f,p,d,b,l,x=[],h=!0,A={x:0,y:0},u={x:0,y:0,z:0},w={x:0,y:0},C={sx:0,cx:0,sy:0,cy:0},S=Math.PI/180,P="http://www.w3.org/2000/svg";window.requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)},(b=document.createElementNS(P,"svg")).addEventListener("mousemove",r),n.appendChild(b),y.bgDraw&&((l=document.createElementNS(P,"rect")).setAttribute("x",0),l.setAttribute("y",0),l.setAttribute("fill",y.bgColor),b.appendChild(l)),function(){for(var t=!1,e=1,o=y.entries.length+1;e<o;e++){var i=Math.acos(2*e/o-1),n=Math.sqrt(o*Math.PI)*i,r=Math.cos(n)*Math.sin(i),a=Math.sin(n)*Math.sin(i),s=Math.cos(i),l=(u=e-1,c=y.entries[e-1],f=r,p=a,d=s,h=void 0,h={},void 0!==c.label?(h.element=document.createElementNS(P,"text"),h.element.setAttribute("x",0),h.element.setAttribute("y",0),h.element.setAttribute("fill",y.fontColor),h.element.setAttribute("font-family",y.fontFamily),h.element.setAttribute("font-size",y.fontSize),h.element.setAttribute("font-weight",y.fontWeight),h.element.setAttribute("font-style",y.fontStyle),h.element.setAttribute("font-stretch",y.fontStretch),h.element.setAttribute("text-anchor","middle"),h.element.textContent=y.fontToUpperCase?c.label.toUpperCase():c.label):void 0!==c.image&&(h.element=document.createElementNS(P,"image"),h.element.setAttribute("x",0),h.element.setAttribute("y",0),h.element.setAttribute("width",c.width),h.element.setAttribute("height",c.height),h.element.setAttribute("id","image_"+u),h.element.setAttributeNS("http://www.w3.org/1999/xlink","href",c.image),h.diffX=c.width/2,h.diffY=c.height/2),h.link=document.createElementNS(P,"a"),h.link.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",c.url),h.link.setAttribute("target",c.target),h.link.addEventListener("mouseover",m,!0),h.link.addEventListener("mouseout",v,!0),h.link.appendChild(h.element),void 0!==c.tooltip?(h.tooltip=!0,h.tooltipLabel=y.tooltipFontToUpperCase?c.tooltip.toUpperCase():c.tooltip):h.tooltip=!1,h.index=u,h.mouseOver=!1,h.vectorPosition={x:f,y:p,z:d},h.vector2D={x:0,y:0},b.appendChild(h.link),h);x.push(l),void 0!==y.entries[e-1].tooltip&&(t=!0)}var u,c,f,p,d,h;t&&((g=document.createElementNS(P,"text")).setAttribute("x",0),g.setAttribute("y",0),g.setAttribute("fill",y.tooltipFontColor),g.setAttribute("font-family",y.tooltipFontFamily),g.setAttribute("font-size",y.tooltipFontSize),g.setAttribute("font-weight",y.tooltipFontWeight),g.setAttribute("font-style",y.tooltipFontStyle),g.setAttribute("font-stretch",y.tooltipFontStretch),g.setAttribute("text-anchor",y.tooltipTextAnchor),g.textContent="",b.appendChild(g))}(),e(),o(),window.addEventListener("resize",a)},"undefined"!=typeof jQuery&&function(i){i.fn.svg3DTagCloud=function(e){var o=arguments;return this.each(function(){if(i.data(this,"plugin_SVG3DTagCloud")){var t=i.data(this,"plugin_SVG3DTagCloud");t[e]?t[e].apply(this,Array.prototype.slice.call(o,1)):i.error("Method "+e+" does not exist on jQuery.svg3DTagCloud")}else i.data(this,"plugin_SVG3DTagCloud",new SVG3DTagCloud(this,e))})}}(jQuery),$(document).ready(function(){var t={entries:[{label:"данные",url:"#data",target:"_top"},{label:"технологи",url:"#technology",target:"_top"},{label:"энвайромент",url:"#environment",target:"_top"},{label:"обучение",url:"#training",target:"_top"},{label:"сопровождение",url:"#accompaniment",target:"_top"},{label:"новости",url:"#news",target:"_top"},{label:"комьюнити",url:"#community",target:"_top"}],width:280,height:280,radius:"65%",radiusMin:75,bgDraw:!0,bgColor:"#ffffff00",opacityOver:1,opacityOut:.05,opacitySpeed:2,fov:800,speed:.8,fontFamily:"Oswald, Arial, sans-serif",fontSize:"14",fontColor:"#fff",fontWeight:"normal",fontStyle:"normal",fontStretch:"normal",fontToUpperCase:!0,tooltipFontFamily:"Oswald, Arial, sans-serif",tooltipFontSize:"11",tooltipFontColor:"#fff",tooltipFontWeight:"normal",tooltipFontStyle:"normal",tooltipFontStretch:"normal",tooltipFontToUpperCase:!1,tooltipTextAnchor:"left",tooltipDiffX:0,tooltipDiffY:10};$("#holder").svg3DTagCloud(t)});var refs={days:document.querySelector('span[data-value="days"]'),hours:document.querySelector('span[data-value="hours"]'),mins:document.querySelector('span[data-value="mins"]'),secs:document.querySelector('span[data-value="secs"]')},CountdownTimer=function(){function o(t,e){_classCallCheck(this,o),this.selector=t,this.targetDate=new Date(e)}return _createClass(o,[{key:"start",value:function(){var t=this,e=Date.now(),o=this.targetDate-e;updateDate(o),this.selector=setInterval(function(){e=Date.now(),updateDate(o=t.targetDate-e)},1e3)}}]),o}();function updateDate(t){var e=pad(Math.floor(t/864e5)),o=pad(Math.floor(t%864e5/36e5)),i=pad(Math.floor(t%36e5/6e4)),n=pad(Math.floor(t%6e4/1e3));refs.days.textContent=e,refs.hours.textContent=o,refs.mins.textContent=i,refs.secs.textContent=n}function pad(t){return String(t).padStart(2,"0")}var newTimer=new CountdownTimer(1,"September 30, 2020");newTimer.start();