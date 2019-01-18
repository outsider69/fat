/*
 FAT v0.6.4
 Copyright 2019 Nextapps GmbH
 Author: Thomas Wilkerling
 Released under the Apache 2.0 Licence
 https://github.com/nextapps-de/fat
*/
'use strict';(function(D,A,x){var p;(p=x.define)&&p.amd?p([],function(){return A}):(p=x.modules)?p[D.toLowerCase()]=A:"object"===typeof exports?module.exports=A:x[D]=A})("Fat",function(){function D(a,b,c,d,e,g,f,h,m,W,y,l,q,p,E,t,k,r,n){this.c=a;this.s=a.C;this.style=b;this.I=b.replace(/([A-Z])/g,"-$1").toLowerCase();this.b=d;this.f=e;this.j=d;this.B=g;this.h=f;this.duration=h;this.g=m;this.ease=P(m);this.time=0;this.o=W;this.m=y;this.H=c;this.a=l;this.G=r?"%"===g||-1!==b.indexOf("A"):"px"!==g;r&&
(this.i=r,this.A=n);t&&(this.transform=t)}function A(a,b,c){var d=c||-1,e;if("#"===a[0])if(a=a.toLowerCase(),4===a.length){c=w[(e=a[1])+e];var g=w[(e=a[2])+e];var f=w[(e=a[3])+e]}else c=w[a[1]+a[2]],g=w[a[3]+a[4]],f=w[a[5]+a[6]];else e=L(a,"(",")").split(","),c=parseInt(e[0],10),g=parseInt(e[1],10),f=parseInt(e[2],10),3<e.length&&(d=v(e[3])),-1!==a.indexOf("hsl")&&(0===g?g=f=a=f:(a=.5>f?f*(1+g):f+g-f*g,e=2*f-a,g=x(e,a,c+1/3),f=x(e,a,c),a=x(e,a,c-1/3)),c=255*g+.5>>0,g=255*f+.5>>0,f=255*a+.5>>0);a=
{};a[b+"R"]=c;a[b+"G"]=g;a[b+"B"]=f;-1!==d&&(a[b+"A"]=d);return a}function x(a,b,c){0>c?c+=1:1<c&&--c;return c<1/6?a+6*(b-a)*c:.5>c?b:c<2/3?a+(b-a)*(2/3-c)*6:a}function p(){this.id=++X;this.stack=[];this.w=Y.bind(this);this.exec=this.v=0;this.l=[]}function P(a){if(J(a))if(a){var b;if(!(b=Q[a])){if(b=M[a]||(M[a]=O.apply(O,Z[a]))){for(var c=new (Int16Array||Array)(z),d=0;d<z;d++)c[d]=1E4*b(d/z)+.5>>0;b=c}else b=[];b=Q[a]=b}a=b}else a=[];else a=null;return a}function Y(a){var b=this.stack.length,c=this.l.length;
if(b||c){this.exec=requestAnimationFrame(this.w);var d=!1;if(b)for(var e=0;e<b;e++){var g=this.stack[e];g&&(d=!0,g.M(this,a)||(this.stack[e]=null))}if(c)for(b=0;b<c;b++)if(e=this.l[b])d=!0,e(a)||(this.l[b]=null);this.v=a;d||this.destroy()}}function J(a){return"string"===typeof a}function H(a){return"undefined"===typeof a}function R(a,b,c){b=v(b);"+"===c?b=a+b:"-"===c?b=a-b:"*"===c?b*=a:"/"===c?b=a/b:"!"===c&&(b=a===b?0:b);return b}function N(a,b,c){if("custom"===b)return c||0;var d=a.C||(a.C=a.style);
return(c=H(c)?d[b]:c)?c:(a.D||(a.D=getComputedStyle(a)))[b]}function S(a,b,c,d){if("none"===b)return b=a.substring(0,a.length-1),c[a]="scale"===b?1:0,d&&(d[d.length]=b),c;-1!==b.indexOf("matrix")&&(b=L(b,"(",")").split(","),b=a+"("+(parseFloat(b[aa[a]])||"")+")");a=b.replace(/, /g,",").split(" ");b={};for(var e=0,g=0;g<a.length;g++){var f=a[g],h=L(f,"(");if(h){f=L(f,"(",")").split(",");var m=f.length;2<m&&(h=h.replace("3d",""),c[h+"Z"]=f[2]);1<m?(c[h+"X"]=f[0],c[h+"Y"]=f[1]):(c[h]=f[0],h=h.substring(0,
h.length-1));b[h]||(d&&(d[e++]=h),b[h]=1)}}return c}function ba(a,b,c){var d=a.u;if(d)var e=a.F;else a.u=d={},a.F=e=[];if(!d||H(d[b]))a=c||N(a,T||"transform"),S(b,a,d,e);return d[b]}function ca(a,b,c,d){var e="_"+d,g=a[e];g||(c=c||N(a,d),a[e]=g=A(c,d,1));return g[b]}function L(a,b,c){var d=a.indexOf(b);return-1!==d?c?a.substring(d+b.length,a.indexOf(c)):a.substring(0,d):""}function K(a,b,c,d){d?a.setProperty(b,c,"important"):a.setProperty(b,c)}var z=Math.max(screen.width,screen.height),Q={},M={},
q=function(){var a=getComputedStyle(document.body);if(H(a.transform))for(var b=["webkit","moz","ms","o"],c=0,d;c<b.length;c++){if(!H(a[(d=b[c])+"Transform"]))return d}else return""}(),T=q&&q+"Transform",da=q&&"-"+T.replace(/([A-Z])/g,"-$1").toLowerCase(),v=parseFloat,X=0,Z={easeIn:[.55,.085,.68,.53],easeOut:[.25,.46,.45,.94],easeInOut:[.455,.03,.515,.955],cubicIn:[.55,.055,.675,.19],cubicOut:[.215,.61,.355,1],cubicInOut:[.645,.045,.355,1],quartIn:[.895,.03,.685,.22],quartOut:[.165,.84,.44,1],quartInOut:[.77,
0,.175,1],quintIn:[.755,.05,.855,.06],quintOut:[.23,1,.32,1],quintInOut:[.86,0,.07,1],expoIn:[.95,.05,.795,.035],expoOut:[.19,1,.22,1],expoInOut:[1,0,0,1],circIn:[.6,.04,.98,.335],circOut:[.075,.82,.165,1],circInOut:[.785,.135,.15,.86],sineIn:[.47,0,.745,.715],sineOut:[.39,.575,.565,1],sineInOut:[.445,.05,.55,.95],backIn:[.6,-.28,.735,.045],backOut:[.175,.885,.32,1.275],backInOut:[.68,-.55,.265,1.55],snap:[.1,1,.1,1]},O=function(){function a(a,c,d,e){this.a=a;this.i=c;this.b=d;this.j=e}a.prototype.c=
function(a,c){return 1-3*c+3*a};a.prototype.f=function(a,c){return 3*c-6*a};a.prototype.g=function(a){return 3*a};a.prototype.h=function(a,c,d){return((this.c(c,d)*a+this.f(c,d))*a+this.g(c))*a};a.prototype.m=function(a,c,d){return 3*this.c(c,d)*a*a+2*this.f(c,d)*a+this.g(c)};a.prototype.o=function(a){for(var b=a,d=0;4>d;++d){var e=this.m(b,this.a,this.b);if(0===e)break;b-=(this.h(b,this.a,this.b)-a)/e}return b};a.prototype.s=function(a){return 0===a||1===a||this.a===this.i&&this.b===this.j?a:this.h(this.o(a),
this.i,this.j)};return function(b,c,d,e){b=new a(b,c,d,e);return b.s.bind(b)}}();q=D.prototype;q.animate=function(a,b){var c=this.b===this.f||!1,d=this.c;a=this.time+=a-(b||a);b=a>=this.duration;if(!c)if(b)var e=this.f;else this.ease?e=this.ease.length?(this.f-this.b)*this.ease[z/this.duration*a+.5>>0]/1E4:(this.f-this.b)*a/this.duration:e=1===this.g.length?this.g(a/this.duration):this.g(a,this.b,this.f,this.duration),e=this.b+e,e=this.G?(e*z+.5>>0)/z:e+.5>>0;var g=this.style;c||this.j===e||(this.j=
e,this.transform?d.u[g]=e+this.B:this.i?d["_"+this.A][g]=e:(e+=this.B,"custom"!==g&&this.N(e)));g===this.transform?e=this.J():g===this.i&&(e=this.O(this.A));this.m&&this.m.call(d,b?1:a/this.duration,e);b&&(this.time=-1,this.o&&this.o.call(d))};q.M=function(a,b){if(-1===this.time)this.c[this.H]=null;else{var c=b-a.v;if(this.a)if("view"===this.a)if(c=this.c.getBoundingClientRect(),0<=c.top&&c.bottom<=window.innerHeight)this.a=0;else return!0;else{if(0<(this.a-=c))return!0;this.a=0}this.animate(b,a.v);
return!0}};q.N=function(a){K(this.s,this.I,a,this.h)};var U=function(a){function b(b,d){a[b]=-d;a[b+"R"]=d;a[b+"G"]=d;a[b+"B"]=d;a[b+"A"]=d}b("color",1);b("backgroundColor",2);b("borderColor",3);return a}({}),V=function(a){function b(b,d){a[b]=d;a[b+"X"]=d;a[b+"Y"]=d;a[b+"Z"]=d;a[b+"3d"]=d}b("translate",1);b("scale",2);b("rotate",3);b("skew",4);return a}({}),aa={scaleX:0,skewY:1,skewX:2,scaleY:3,translateX:4,translateY:5};var w={};var F=Array(255);for(var l=0;256>l;l++){var G=l.toString(16);G.length%
2&&(G="0"+G);w[G]=l;F[l]=G}q.J=function(){for(var a=this.c.u,b=this.s,c=this.c.F,d="",e=0,g=c.length;e<g;e++){var f=c[e],h="scale"===f?1:0,m=a[f+"X"],l=a[f+"Y"],y=a[f+"Z"];if(m||l||y)"rotate"===f&&(m&&(d+=f+"X("+(m||h)+") "),l&&(d+=f+"Y("+(l||h)+") ")),y&&v(y)!==h?d="rotate"===f?d+(f+"Z("+(y||h)+") "):d+(f+"3d("+(m||h)+","+(l||h)+","+y+") "):"rotate"!==f&&(d+=f+"("+(m||h)+","+(l||h)+") ")}K(b,da||"transform",d,this.h);return a};q.O=function(a){var b=this.c["_"+a],c=this.s,d=a.replace("C","-c"),e=
b[a+"R"]||0,g=b[a+"G"]||0,f=b[a+"B"]||0;a=b[a+"A"];"%"===this.B&&(e=2.55*e+.5>>0,g=2.55*g+.5>>0,f=2.55*f+.5>>0,a&&(a/=100));K(c,d,1===a||H(a)?"#"+F[e]+F[g]+F[f]:"rgba("+e+","+g+","+f+","+a+")",this.h);return b};l=p.prototype;l.L=function(a,b,c,d,e,g,f,h,m,l,y,q,p,A,E){var t=""+(p?ba:A?ca:N)(a,b,d,E);"auto"===t&&(t="0");d=v(t);if(J(e)){var k=e;e="="===e[1]?R(d,k=e.substring(2),e[0]):v(e);g||(g=k.substring((""+e).length))}g||(g=t.substring((""+d).length)||"");b=new D(a,b,c,d,e,g,f,h,m,l,y,q,!1,!1,!1,
p,void 0,A,E);this.stack[this.stack.length]=b;a[c]=b};l.animate=function(a,b,c,d){if(a&&b){c?"function"===typeof c&&(d=c,c={}):c={};J(a)?a=document.querySelectorAll(a):a.length||(a=[a]);var e=c.delay,g=c.duration||400,f=c.ease;if(f){var h;if(J(f)){if(h=L(f,"bezier(",")")){h=h.replace(/ /g,"");var m=h.split(",")}}else f.constructor===Array&&(h=f.join(","),m=f);h&&(M[h]||(M[h]=O.apply(O,m)),f=h)}h=f||"";m=Object.keys(b);f=m.length;d=d||c.callback||!1;var l=c.step,y=c.force;c=c.init;for(var p,q,x,E,
t=f;0<t--;){var k=m[t];if("transform"===k){p=S(k,b[k],{});k=Object.keys(p);for(var r=0;r<k.length;r++){var n=k[r];m[f++]=n;b[n]=p[n]}p=k[k.length-1]}else if(!p&&V[k])p=k;else if(r=U[k]){if(0>r){n=b[k];"object"===typeof n&&(n=n.to);var B=A(n,k);m[f++]=n=k+"R";b[n]=B[n];m[f++]=n=k+"G";b[n]=B[n];m[f++]=n=k+"B";b[n]=B[n];H(B=B[n=k+"A"])?k+="B":(m[f++]=n,b[n]=B,k=n);r*=-1}q||1!==r?x||2!==r?E||3!==r||(E=k):x=k:q=k}}for(t=0;t<f;t++){var w=B=n=r=void 0,v=m[t],u=b[v],z=void 0,D=void 0;"object"===typeof u&&
(e=u.delay||e,g=u.duration||g,h=u.ease||h,z=u.from,D=u.unit,u=u.to);if("transform"!==v){k=V[v]&&p;var C=U[v];if(C){if(0>C)continue;1===C?(r=q,w="color"):2===C?(n=x,w="backgroundColor"):3===C&&(B=E,w="borderColor")}u.constructor===Array&&(z=u[0],D=u[2],u=u[1]);C=t===f-1;for(var G="_fat_"+v+this.id,F=0,N=a.length;F<N;F++){var I=a[F];c&&0===t&&(I.D=null,p?I.u=null:q?I.S=null:x?I.P=null:E&&(I.R=null));var K=!c&&I[G];K?K.K(z,u,y,g,h,C&&d,C&&l,e,k,r||n||B,w):this.L(I,v,G,z,u,D,y,g,h,C&&d,C&&l,e,k,r||n||
B,w)}}}this.exec||(this.exec=requestAnimationFrame(this.w))}return this};l.destroy=function(){this.exec&&(this.exec=0,this.stack=[],this.v=0,this.l=[]);return this};l.create=function(a){return new p(a)};l.paint=function(a){this.l[this.l.length]=a;this.exec||(this.exec=requestAnimationFrame(this.w))};l.ease=M;l.transform=function(a,b,c,d){J(b)&&(b={transform:b});return this.animate(a,b,c,d)};q.K=function(a,b,c,d,e,g,f,h,m,l,p){H(a)?a=this.j:a=v(a);J(b)&&(b="="===b[1]?R(a,b.substring(2),b[0]):v(b));
this.b=a;this.f=b;this.duration=d;this.time=0;this.h=c;this.g!==e&&(this.ease=P(e),this.g=e);this.o=g;this.m=f;this.a=h;m&&(this.transform=m);l&&(this.i=l,this.A=p)};return new p}(),this);
