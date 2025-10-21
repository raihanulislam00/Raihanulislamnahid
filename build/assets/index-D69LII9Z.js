import{j as p,H as ie,I as ce,L as le,N as fe,J as de,O as ue,P as me,G as pe,Q as he}from"./index-CV9gm9WU.js";import{d as Nt,b as I,m as A}from"./vendor-Yx_UOoE5.js";import"./icons-LMnbE_OP.js";function ye(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function ge(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var be=function(){function t(r){var a=this;this._insertTag=function(n){var o;a.tags.length===0?a.insertionPoint?o=a.insertionPoint.nextSibling:a.prepend?o=a.container.firstChild:o=a.before:o=a.tags[a.tags.length-1].nextSibling,a.container.insertBefore(n,o),a.tags.push(n)},this.isSpeedy=r.speedy===void 0?!0:r.speedy,this.tags=[],this.ctr=0,this.nonce=r.nonce,this.key=r.key,this.container=r.container,this.prepend=r.prepend,this.insertionPoint=r.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(a){a.forEach(this._insertTag)},e.insert=function(a){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(ge(this));var n=this.tags[this.tags.length-1];if(this.isSpeedy){var o=ye(n);try{o.insertRule(a,o.cssRules.length)}catch{}}else n.appendChild(document.createTextNode(a));this.ctr++},e.flush=function(){this.tags.forEach(function(a){var n;return(n=a.parentNode)==null?void 0:n.removeChild(a)}),this.tags=[],this.ctr=0},t}(),_="-ms-",at="-moz-",S="-webkit-",Yt="comm",bt="rule",xt="decl",xe="@import",Lt="@keyframes",ve="@layer",we=Math.abs,nt=String.fromCharCode,Se=Object.assign;function $e(t,e){return T(t,0)^45?(((e<<2^T(t,0))<<2^T(t,1))<<2^T(t,2))<<2^T(t,3):0}function Xt(t){return t.trim()}function Ne(t,e){return(t=e.exec(t))?t[0]:t}function $(t,e,r){return t.replace(e,r)}function mt(t,e){return t.indexOf(e)}function T(t,e){return t.charCodeAt(e)|0}function B(t,e,r){return t.slice(e,r)}function F(t){return t.length}function vt(t){return t.length}function J(t,e){return e.push(t),t}function je(t,e){return t.map(e).join("")}var ot=1,D=1,Vt=0,M=0,k=0,G="";function st(t,e,r,a,n,o,s){return{value:t,root:e,parent:r,type:a,props:n,children:o,line:ot,column:D,length:s,return:""}}function q(t,e){return Se(st("",null,null,"",null,null,0),t,{length:-t.length},e)}function Ce(){return k}function Ie(){return k=M>0?T(G,--M):0,D--,k===10&&(D=1,ot--),k}function z(){return k=M<Vt?T(G,M++):0,D++,k===10&&(D=1,ot++),k}function L(){return T(G,M)}function tt(){return M}function Z(t,e){return B(G,t,e)}function W(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Dt(t){return ot=D=1,Vt=F(G=t),M=0,[]}function Gt(t){return G="",t}function et(t){return Xt(Z(M-1,pt(t===91?t+2:t===40?t+1:t)))}function Oe(t){for(;(k=L())&&k<33;)z();return W(t)>2||W(k)>3?"":" "}function Re(t,e){for(;--e&&z()&&!(k<48||k>102||k>57&&k<65||k>70&&k<97););return Z(t,tt()+(e<6&&L()==32&&z()==32))}function pt(t){for(;z();)switch(k){case t:return M;case 34:case 39:t!==34&&t!==39&&pt(k);break;case 40:t===41&&pt(t);break;case 92:z();break}return M}function ke(t,e){for(;z()&&t+k!==57;)if(t+k===84&&L()===47)break;return"/*"+Z(e,M-1)+"*"+nt(t===47?t:z())}function Ee(t){for(;!W(L());)z();return Z(t,M)}function Pe(t){return Gt(rt("",null,null,null,[""],t=Dt(t),0,[0],t))}function rt(t,e,r,a,n,o,s,d,c){for(var m=0,h=0,y=s,w=0,C=0,g=0,u=1,l=1,v=1,b=0,x="",P=n,f=o,R=a,O=x;l;)switch(g=b,b=z()){case 40:if(g!=108&&T(O,y-1)==58){mt(O+=$(et(b),"&","&\f"),"&\f")!=-1&&(v=-1);break}case 34:case 39:case 91:O+=et(b);break;case 9:case 10:case 13:case 32:O+=Oe(g);break;case 92:O+=Re(tt()-1,7);continue;case 47:switch(L()){case 42:case 47:J(Ae(ke(z(),tt()),e,r),c);break;default:O+="/"}break;case 123*u:d[m++]=F(O)*v;case 125*u:case 59:case 0:switch(b){case 0:case 125:l=0;case 59+h:v==-1&&(O=$(O,/\f/g,"")),C>0&&F(O)-y&&J(C>32?Ct(O+";",a,r,y-1):Ct($(O," ","")+";",a,r,y-2),c);break;case 59:O+=";";default:if(J(R=jt(O,e,r,m,h,n,d,x,P=[],f=[],y),o),b===123)if(h===0)rt(O,e,R,R,P,o,y,d,f);else switch(w===99&&T(O,3)===110?100:w){case 100:case 108:case 109:case 115:rt(t,R,R,a&&J(jt(t,R,R,0,0,n,d,x,n,P=[],y),f),n,f,y,d,a?P:f);break;default:rt(O,R,R,R,[""],f,0,d,f)}}m=h=C=0,u=v=1,x=O="",y=s;break;case 58:y=1+F(O),C=g;default:if(u<1){if(b==123)--u;else if(b==125&&u++==0&&Ie()==125)continue}switch(O+=nt(b),b*u){case 38:v=h>0?1:(O+="\f",-1);break;case 44:d[m++]=(F(O)-1)*v,v=1;break;case 64:L()===45&&(O+=et(z())),w=L(),h=y=F(x=O+=Ee(tt())),b++;break;case 45:g===45&&F(O)==2&&(u=0)}}return o}function jt(t,e,r,a,n,o,s,d,c,m,h){for(var y=n-1,w=n===0?o:[""],C=vt(w),g=0,u=0,l=0;g<a;++g)for(var v=0,b=B(t,y+1,y=we(u=s[g])),x=t;v<C;++v)(x=Xt(u>0?w[v]+" "+b:$(b,/&\f/g,w[v])))&&(c[l++]=x);return st(t,e,r,n===0?bt:d,c,m,h)}function Ae(t,e,r){return st(t,e,r,Yt,nt(Ce()),B(t,2,-2),0)}function Ct(t,e,r,a){return st(t,e,r,xt,B(t,0,a),B(t,a+1,-1),a)}function V(t,e){for(var r="",a=vt(t),n=0;n<a;n++)r+=e(t[n],n,t,e)||"";return r}function Te(t,e,r,a){switch(t.type){case ve:if(t.children.length)break;case xe:case xt:return t.return=t.return||t.value;case Yt:return"";case Lt:return t.return=t.value+"{"+V(t.children,a)+"}";case bt:t.value=t.props.join(",")}return F(r=V(t.children,a))?t.return=t.value+"{"+r+"}":""}function _e(t){var e=vt(t);return function(r,a,n,o){for(var s="",d=0;d<e;d++)s+=t[d](r,a,n,o)||"";return s}}function Me(t){return function(e){e.root||(e=e.return)&&t(e)}}function ze(t){var e=Object.create(null);return function(r){return e[r]===void 0&&(e[r]=t(r)),e[r]}}var Fe=function(e,r,a){for(var n=0,o=0;n=o,o=L(),n===38&&o===12&&(r[a]=1),!W(o);)z();return Z(e,M)},Ye=function(e,r){var a=-1,n=44;do switch(W(n)){case 0:n===38&&L()===12&&(r[a]=1),e[a]+=Fe(M-1,r,a);break;case 2:e[a]+=et(n);break;case 4:if(n===44){e[++a]=L()===58?"&\f":"",r[a]=e[a].length;break}default:e[a]+=nt(n)}while(n=z());return e},Le=function(e,r){return Gt(Ye(Dt(e),r))},It=new WeakMap,Xe=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var r=e.value,a=e.parent,n=e.column===a.column&&e.line===a.line;a.type!=="rule";)if(a=a.parent,!a)return;if(!(e.props.length===1&&r.charCodeAt(0)!==58&&!It.get(a))&&!n){It.set(e,!0);for(var o=[],s=Le(r,o),d=a.props,c=0,m=0;c<s.length;c++)for(var h=0;h<d.length;h++,m++)e.props[m]=o[c]?s[c].replace(/&\f/g,d[h]):d[h]+" "+s[c]}}},Ve=function(e){if(e.type==="decl"){var r=e.value;r.charCodeAt(0)===108&&r.charCodeAt(2)===98&&(e.return="",e.value="")}};function qt(t,e){switch($e(t,e)){case 5103:return S+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return S+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return S+t+at+t+_+t+t;case 6828:case 4268:return S+t+_+t+t;case 6165:return S+t+_+"flex-"+t+t;case 5187:return S+t+$(t,/(\w+).+(:[^]+)/,S+"box-$1$2"+_+"flex-$1$2")+t;case 5443:return S+t+_+"flex-item-"+$(t,/flex-|-self/,"")+t;case 4675:return S+t+_+"flex-line-pack"+$(t,/align-content|flex-|-self/,"")+t;case 5548:return S+t+_+$(t,"shrink","negative")+t;case 5292:return S+t+_+$(t,"basis","preferred-size")+t;case 6060:return S+"box-"+$(t,"-grow","")+S+t+_+$(t,"grow","positive")+t;case 4554:return S+$(t,/([^-])(transform)/g,"$1"+S+"$2")+t;case 6187:return $($($(t,/(zoom-|grab)/,S+"$1"),/(image-set)/,S+"$1"),t,"")+t;case 5495:case 3959:return $(t,/(image-set\([^]*)/,S+"$1$`$1");case 4968:return $($(t,/(.+:)(flex-)?(.*)/,S+"box-pack:$3"+_+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+S+t+t;case 4095:case 3583:case 4068:case 2532:return $(t,/(.+)-inline(.+)/,S+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(F(t)-1-e>6)switch(T(t,e+1)){case 109:if(T(t,e+4)!==45)break;case 102:return $(t,/(.+:)(.+)-([^]+)/,"$1"+S+"$2-$3$1"+at+(T(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~mt(t,"stretch")?qt($(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(T(t,e+1)!==115)break;case 6444:switch(T(t,F(t)-3-(~mt(t,"!important")&&10))){case 107:return $(t,":",":"+S)+t;case 101:return $(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+S+(T(t,14)===45?"inline-":"")+"box$3$1"+S+"$2$3$1"+_+"$2box$3")+t}break;case 5936:switch(T(t,e+11)){case 114:return S+t+_+$(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return S+t+_+$(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return S+t+_+$(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return S+t+_+t+t}return t}var De=function(e,r,a,n){if(e.length>-1&&!e.return)switch(e.type){case xt:e.return=qt(e.value,e.length);break;case Lt:return V([q(e,{value:$(e.value,"@","@"+S)})],n);case bt:if(e.length)return je(e.props,function(o){switch(Ne(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return V([q(e,{props:[$(o,/:(read-\w+)/,":"+at+"$1")]})],n);case"::placeholder":return V([q(e,{props:[$(o,/:(plac\w+)/,":"+S+"input-$1")]}),q(e,{props:[$(o,/:(plac\w+)/,":"+at+"$1")]}),q(e,{props:[$(o,/:(plac\w+)/,_+"input-$1")]})],n)}return""})}},Ge=[De],qe=function(e){var r=e.key;if(r==="css"){var a=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(a,function(u){var l=u.getAttribute("data-emotion");l.indexOf(" ")!==-1&&(document.head.appendChild(u),u.setAttribute("data-s",""))})}var n=e.stylisPlugins||Ge,o={},s,d=[];s=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+r+' "]'),function(u){for(var l=u.getAttribute("data-emotion").split(" "),v=1;v<l.length;v++)o[l[v]]=!0;d.push(u)});var c,m=[Xe,Ve];{var h,y=[Te,Me(function(u){h.insert(u)})],w=_e(m.concat(n,y)),C=function(l){return V(Pe(l),w)};c=function(l,v,b,x){h=b,C(l?l+"{"+v.styles+"}":v.styles),x&&(g.inserted[v.name]=!0)}}var g={key:r,sheet:new be({key:r,container:s,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:o,registered:{},insert:c};return g.sheet.hydrate(d),g},ct={exports:{}},N={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ot;function Be(){if(Ot)return N;Ot=1;var t=typeof Symbol=="function"&&Symbol.for,e=t?Symbol.for("react.element"):60103,r=t?Symbol.for("react.portal"):60106,a=t?Symbol.for("react.fragment"):60107,n=t?Symbol.for("react.strict_mode"):60108,o=t?Symbol.for("react.profiler"):60114,s=t?Symbol.for("react.provider"):60109,d=t?Symbol.for("react.context"):60110,c=t?Symbol.for("react.async_mode"):60111,m=t?Symbol.for("react.concurrent_mode"):60111,h=t?Symbol.for("react.forward_ref"):60112,y=t?Symbol.for("react.suspense"):60113,w=t?Symbol.for("react.suspense_list"):60120,C=t?Symbol.for("react.memo"):60115,g=t?Symbol.for("react.lazy"):60116,u=t?Symbol.for("react.block"):60121,l=t?Symbol.for("react.fundamental"):60117,v=t?Symbol.for("react.responder"):60118,b=t?Symbol.for("react.scope"):60119;function x(f){if(typeof f=="object"&&f!==null){var R=f.$$typeof;switch(R){case e:switch(f=f.type,f){case c:case m:case a:case o:case n:case y:return f;default:switch(f=f&&f.$$typeof,f){case d:case h:case g:case C:case s:return f;default:return R}}case r:return R}}}function P(f){return x(f)===m}return N.AsyncMode=c,N.ConcurrentMode=m,N.ContextConsumer=d,N.ContextProvider=s,N.Element=e,N.ForwardRef=h,N.Fragment=a,N.Lazy=g,N.Memo=C,N.Portal=r,N.Profiler=o,N.StrictMode=n,N.Suspense=y,N.isAsyncMode=function(f){return P(f)||x(f)===c},N.isConcurrentMode=P,N.isContextConsumer=function(f){return x(f)===d},N.isContextProvider=function(f){return x(f)===s},N.isElement=function(f){return typeof f=="object"&&f!==null&&f.$$typeof===e},N.isForwardRef=function(f){return x(f)===h},N.isFragment=function(f){return x(f)===a},N.isLazy=function(f){return x(f)===g},N.isMemo=function(f){return x(f)===C},N.isPortal=function(f){return x(f)===r},N.isProfiler=function(f){return x(f)===o},N.isStrictMode=function(f){return x(f)===n},N.isSuspense=function(f){return x(f)===y},N.isValidElementType=function(f){return typeof f=="string"||typeof f=="function"||f===a||f===m||f===o||f===n||f===y||f===w||typeof f=="object"&&f!==null&&(f.$$typeof===g||f.$$typeof===C||f.$$typeof===s||f.$$typeof===d||f.$$typeof===h||f.$$typeof===l||f.$$typeof===v||f.$$typeof===b||f.$$typeof===u)},N.typeOf=x,N}var Rt;function We(){return Rt||(Rt=1,ct.exports=Be()),ct.exports}var lt,kt;function He(){if(kt)return lt;kt=1;var t=We(),e={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},n={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},o={};o[t.ForwardRef]=a,o[t.Memo]=n;function s(g){return t.isMemo(g)?n:o[g.$$typeof]||e}var d=Object.defineProperty,c=Object.getOwnPropertyNames,m=Object.getOwnPropertySymbols,h=Object.getOwnPropertyDescriptor,y=Object.getPrototypeOf,w=Object.prototype;function C(g,u,l){if(typeof u!="string"){if(w){var v=y(u);v&&v!==w&&C(g,v,l)}var b=c(u);m&&(b=b.concat(m(u)));for(var x=s(g),P=s(u),f=0;f<b.length;++f){var R=b[f];if(!r[R]&&!(l&&l[R])&&!(P&&P[R])&&!(x&&x[R])){var O=h(u,R);try{d(g,R,O)}catch{}}}}return g}return lt=C,lt}He();var Ue=!0;function Bt(t,e,r){var a="";return r.split(" ").forEach(function(n){t[n]!==void 0?e.push(t[n]+";"):n&&(a+=n+" ")}),a}var wt=function(e,r,a){var n=e.key+"-"+r.name;(a===!1||Ue===!1)&&e.registered[n]===void 0&&(e.registered[n]=r.styles)},Wt=function(e,r,a){wt(e,r,a);var n=e.key+"-"+r.name;if(e.inserted[r.name]===void 0){var o=r;do e.insert(r===o?"."+n:"",o,e.sheet,!0),o=o.next;while(o!==void 0)}};function Ze(t){for(var e=0,r,a=0,n=t.length;n>=4;++a,n-=4)r=t.charCodeAt(a)&255|(t.charCodeAt(++a)&255)<<8|(t.charCodeAt(++a)&255)<<16|(t.charCodeAt(++a)&255)<<24,r=(r&65535)*1540483477+((r>>>16)*59797<<16),r^=r>>>24,e=(r&65535)*1540483477+((r>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(n){case 3:e^=(t.charCodeAt(a+2)&255)<<16;case 2:e^=(t.charCodeAt(a+1)&255)<<8;case 1:e^=t.charCodeAt(a)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var Je={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ke=/[A-Z]|^ms/g,Qe=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Ht=function(e){return e.charCodeAt(1)===45},Et=function(e){return e!=null&&typeof e!="boolean"},ft=ze(function(t){return Ht(t)?t:t.replace(Ke,"-$&").toLowerCase()}),Pt=function(e,r){switch(e){case"animation":case"animationName":if(typeof r=="string")return r.replace(Qe,function(a,n,o){return Y={name:n,styles:o,next:Y},n})}return Je[e]!==1&&!Ht(e)&&typeof r=="number"&&r!==0?r+"px":r};function H(t,e,r){if(r==null)return"";var a=r;if(a.__emotion_styles!==void 0)return a;switch(typeof r){case"boolean":return"";case"object":{var n=r;if(n.anim===1)return Y={name:n.name,styles:n.styles,next:Y},n.name;var o=r;if(o.styles!==void 0){var s=o.next;if(s!==void 0)for(;s!==void 0;)Y={name:s.name,styles:s.styles,next:Y},s=s.next;var d=o.styles+";";return d}return tr(t,e,r)}case"function":{if(t!==void 0){var c=Y,m=r(t);return Y=c,H(t,e,m)}break}}var h=r;if(e==null)return h;var y=e[h];return y!==void 0?y:h}function tr(t,e,r){var a="";if(Array.isArray(r))for(var n=0;n<r.length;n++)a+=H(t,e,r[n])+";";else for(var o in r){var s=r[o];if(typeof s!="object"){var d=s;e!=null&&e[d]!==void 0?a+=o+"{"+e[d]+"}":Et(d)&&(a+=ft(o)+":"+Pt(o,d)+";")}else if(Array.isArray(s)&&typeof s[0]=="string"&&(e==null||e[s[0]]===void 0))for(var c=0;c<s.length;c++)Et(s[c])&&(a+=ft(o)+":"+Pt(o,s[c])+";");else{var m=H(t,e,s);switch(o){case"animation":case"animationName":{a+=ft(o)+":"+m+";";break}default:a+=o+"{"+m+"}"}}}return a}var At=/label:\s*([^\s;{]+)\s*(;|$)/g,Y;function St(t,e,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var a=!0,n="";Y=void 0;var o=t[0];if(o==null||o.raw===void 0)a=!1,n+=H(r,e,o);else{var s=o;n+=s[0]}for(var d=1;d<t.length;d++)if(n+=H(r,e,t[d]),a){var c=o;n+=c[d]}At.lastIndex=0;for(var m="",h;(h=At.exec(n))!==null;)m+="-"+h[1];var y=Ze(n)+m;return{name:y,styles:n,next:Y}}var er=function(e){return e()},rr=Nt.useInsertionEffect?Nt.useInsertionEffect:!1,Ut=rr||er,Zt=I.createContext(typeof HTMLElement<"u"?qe({key:"css"}):null);Zt.Provider;var Jt=function(e){return I.forwardRef(function(r,a){var n=I.useContext(Zt);return e(r,n,a)})},Kt=I.createContext({}),it={}.hasOwnProperty,ht="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Qt=function(e,r){var a={};for(var n in r)it.call(r,n)&&(a[n]=r[n]);return a[ht]=e,a},ar=function(e){var r=e.cache,a=e.serialized,n=e.isStringTag;return wt(r,a,n),Ut(function(){return Wt(r,a,n)}),null},nr=Jt(function(t,e,r){var a=t.css;typeof a=="string"&&e.registered[a]!==void 0&&(a=e.registered[a]);var n=t[ht],o=[a],s="";typeof t.className=="string"?s=Bt(e.registered,o,t.className):t.className!=null&&(s=t.className+" ");var d=St(o,void 0,I.useContext(Kt));s+=e.key+"-"+d.name;var c={};for(var m in t)it.call(t,m)&&m!=="css"&&m!==ht&&(c[m]=t[m]);return c.className=s,r&&(c.ref=r),I.createElement(I.Fragment,null,I.createElement(ar,{cache:e,serialized:d,isStringTag:typeof n=="string"}),I.createElement(n,c))}),te=nr,or=p.Fragment,E=function(e,r,a){return it.call(r,"css")?p.jsx(te,Qt(e,r),a):p.jsx(e,r,a)},Tt=function(e,r){var a=arguments;if(r==null||!it.call(r,"css"))return I.createElement.apply(void 0,a);var n=a.length,o=new Array(n);o[0]=te,o[1]=Qt(e,r);for(var s=2;s<n;s++)o[s]=a[s];return I.createElement.apply(null,o)};(function(t){var e;e||(e=t.JSX||(t.JSX={}))})(Tt||(Tt={}));function ee(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return St(e)}function i(){var t=ee.apply(void 0,arguments),e="animation-"+t.name;return{name:e,styles:"@keyframes "+e+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}var sr=function t(e){for(var r=e.length,a=0,n="";a<r;a++){var o=e[a];if(o!=null){var s=void 0;switch(typeof o){case"boolean":break;case"object":{if(Array.isArray(o))s=t(o);else{s="";for(var d in o)o[d]&&d&&(s&&(s+=" "),s+=d)}break}default:s=o}s&&(n&&(n+=" "),n+=s)}}return n};function ir(t,e,r){var a=[],n=Bt(t,a,r);return a.length<2?r:n+e(a)}var cr=function(e){var r=e.cache,a=e.serializedArr;return Ut(function(){for(var n=0;n<a.length;n++)Wt(r,a[n],!1)}),null},dt=Jt(function(t,e){var r=[],a=function(){for(var c=arguments.length,m=new Array(c),h=0;h<c;h++)m[h]=arguments[h];var y=St(m,e.registered);return r.push(y),wt(e,y,!1),e.key+"-"+y.name},n=function(){for(var c=arguments.length,m=new Array(c),h=0;h<c;h++)m[h]=arguments[h];return ir(e.registered,a,sr(m))},o={css:a,cx:n,theme:I.useContext(Kt)},s=t.children(o);return I.createElement(I.Fragment,null,I.createElement(cr,{cache:e,serializedArr:r}),s)}),lr=Object.defineProperty,fr=(t,e,r)=>e in t?lr(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,K=(t,e,r)=>fr(t,typeof e!="symbol"?e+"":e,r),yt=new Map,Q=new WeakMap,_t=0,dr=void 0;function ur(t){return t?(Q.has(t)||(_t+=1,Q.set(t,_t.toString())),Q.get(t)):"0"}function mr(t){return Object.keys(t).sort().filter(e=>t[e]!==void 0).map(e=>`${e}_${e==="root"?ur(t.root):t[e]}`).toString()}function pr(t){const e=mr(t);let r=yt.get(e);if(!r){const a=new Map;let n;const o=new IntersectionObserver(s=>{s.forEach(d=>{var c;const m=d.isIntersecting&&n.some(h=>d.intersectionRatio>=h);t.trackVisibility&&typeof d.isVisible>"u"&&(d.isVisible=m),(c=a.get(d.target))==null||c.forEach(h=>{h(m,d)})})},t);n=o.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),r={id:e,observer:o,elements:a},yt.set(e,r)}return r}function re(t,e,r={},a=dr){if(typeof window.IntersectionObserver>"u"&&a!==void 0){const c=t.getBoundingClientRect();return e(a,{isIntersecting:a,target:t,intersectionRatio:typeof r.threshold=="number"?r.threshold:0,time:0,boundingClientRect:c,intersectionRect:c,rootBounds:c}),()=>{}}const{id:n,observer:o,elements:s}=pr(r),d=s.get(t)||[];return s.has(t)||s.set(t,d),d.push(e),o.observe(t),function(){d.splice(d.indexOf(e),1),d.length===0&&(s.delete(t),o.unobserve(t)),s.size===0&&(o.disconnect(),yt.delete(n))}}function hr(t){return typeof t.children!="function"}var Mt=class extends I.Component{constructor(t){super(t),K(this,"node",null),K(this,"_unobserveCb",null),K(this,"handleNode",e=>{this.node&&(this.unobserve(),!e&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=e||null,this.observeNode()}),K(this,"handleChange",(e,r)=>{e&&this.props.triggerOnce&&this.unobserve(),hr(this.props)||this.setState({inView:e,entry:r}),this.props.onChange&&this.props.onChange(e,r)}),this.state={inView:!!t.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(t){(t.rootMargin!==this.props.rootMargin||t.root!==this.props.root||t.threshold!==this.props.threshold||t.skip!==this.props.skip||t.trackVisibility!==this.props.trackVisibility||t.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:t,root:e,rootMargin:r,trackVisibility:a,delay:n,fallbackInView:o}=this.props;this._unobserveCb=re(this.node,this.handleChange,{threshold:t,root:e,rootMargin:r,trackVisibility:a,delay:n},o)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:t}=this.props;if(typeof t=="function"){const{inView:C,entry:g}=this.state;return t({inView:C,entry:g,ref:this.handleNode})}const{as:e,triggerOnce:r,threshold:a,root:n,rootMargin:o,onChange:s,skip:d,trackVisibility:c,delay:m,initialInView:h,fallbackInView:y,...w}=this.props;return I.createElement(e||"div",{ref:this.handleNode,...w},t)}};function ae({threshold:t,delay:e,trackVisibility:r,rootMargin:a,root:n,triggerOnce:o,skip:s,initialInView:d,fallbackInView:c,onChange:m}={}){var h;const[y,w]=I.useState(null),C=I.useRef(m),[g,u]=I.useState({inView:!!d,entry:void 0});C.current=m,I.useEffect(()=>{if(s||!y)return;let x;return x=re(y,(P,f)=>{u({inView:P,entry:f}),C.current&&C.current(P,f),f.isIntersecting&&o&&x&&(x(),x=void 0)},{root:n,rootMargin:a,threshold:t,trackVisibility:r,delay:e},c),()=>{x&&x()}},[Array.isArray(t)?t.toString():t,y,n,a,o,s,r,c,e]);const l=(h=g.entry)==null?void 0:h.target,v=I.useRef(void 0);!y&&l&&!o&&!s&&v.current!==l&&(v.current=l,u({inView:!!d,entry:void 0}));const b=[w,g.inView,g.entry];return b.ref=b[0],b.inView=b[1],b.entry=b[2],b}var ut={exports:{}},j={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zt;function yr(){if(zt)return j;zt=1;var t=Symbol.for("react.element"),e=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),n=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),s=Symbol.for("react.context"),d=Symbol.for("react.server_context"),c=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.suspense_list"),y=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),C=Symbol.for("react.offscreen"),g;g=Symbol.for("react.module.reference");function u(l){if(typeof l=="object"&&l!==null){var v=l.$$typeof;switch(v){case t:switch(l=l.type,l){case r:case n:case a:case m:case h:return l;default:switch(l=l&&l.$$typeof,l){case d:case s:case c:case w:case y:case o:return l;default:return v}}case e:return v}}}return j.ContextConsumer=s,j.ContextProvider=o,j.Element=t,j.ForwardRef=c,j.Fragment=r,j.Lazy=w,j.Memo=y,j.Portal=e,j.Profiler=n,j.StrictMode=a,j.Suspense=m,j.SuspenseList=h,j.isAsyncMode=function(){return!1},j.isConcurrentMode=function(){return!1},j.isContextConsumer=function(l){return u(l)===s},j.isContextProvider=function(l){return u(l)===o},j.isElement=function(l){return typeof l=="object"&&l!==null&&l.$$typeof===t},j.isForwardRef=function(l){return u(l)===c},j.isFragment=function(l){return u(l)===r},j.isLazy=function(l){return u(l)===w},j.isMemo=function(l){return u(l)===y},j.isPortal=function(l){return u(l)===e},j.isProfiler=function(l){return u(l)===n},j.isStrictMode=function(l){return u(l)===a},j.isSuspense=function(l){return u(l)===m},j.isSuspenseList=function(l){return u(l)===h},j.isValidElementType=function(l){return typeof l=="string"||typeof l=="function"||l===r||l===n||l===a||l===m||l===h||l===C||typeof l=="object"&&l!==null&&(l.$$typeof===w||l.$$typeof===y||l.$$typeof===o||l.$$typeof===s||l.$$typeof===c||l.$$typeof===g||l.getModuleId!==void 0)},j.typeOf=u,j}var Ft;function gr(){return Ft||(Ft=1,ut.exports=yr()),ut.exports}var br=gr();i`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;i`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;i`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`;i`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`;i`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`;i`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;i`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;i`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;i`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;i`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`;i`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;i`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;i`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;const xr=i`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,vr=i`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,wr=i`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Sr=i`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,$r=i`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,$t=i`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Nr=i`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,jr=i`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Cr=i`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ir=i`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Or=i`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Rr=i`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,kr=i`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function Er({duration:t=1e3,delay:e=0,timingFunction:r="ease",keyframes:a=$t,iterationCount:n=1}){return ee`
    animation-duration: ${t}ms;
    animation-timing-function: ${r};
    animation-delay: ${e}ms;
    animation-name: ${a};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${n};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function Pr(t){return t==null}function Ar(t){return typeof t=="string"||typeof t=="number"||typeof t=="boolean"}function ne(t,e){return r=>r?t():e()}function U(t){return ne(t,()=>null)}function gt(t){return U(()=>({opacity:0}))(t)}const oe=t=>{const{cascade:e=!1,damping:r=.5,delay:a=0,duration:n=1e3,fraction:o=0,keyframes:s=$t,triggerOnce:d=!1,className:c,style:m,childClassName:h,childStyle:y,children:w,onVisibilityChange:C}=t,g=I.useMemo(()=>Er({keyframes:s,duration:n}),[n,s]);return Pr(w)?null:Ar(w)?E(_r,{...t,animationStyles:g,children:String(w)}):br.isFragment(w)?E(se,{...t,animationStyles:g}):E(or,{children:I.Children.map(w,(u,l)=>{if(!I.isValidElement(u))return null;const v=a+(e?l*n*r:0);switch(u.type){case"ol":case"ul":return E(dt,{children:({cx:b})=>E(u.type,{...u.props,className:b(c,u.props.className),style:Object.assign({},m,u.props.style),children:E(oe,{...t,children:u.props.children})})});case"li":return E(Mt,{threshold:o,triggerOnce:d,onChange:C,children:({inView:b,ref:x})=>E(dt,{children:({cx:P})=>E(u.type,{...u.props,ref:x,className:P(h,u.props.className),css:U(()=>g)(b),style:Object.assign({},y,u.props.style,gt(!b),{animationDelay:v+"ms"})})})});default:return E(Mt,{threshold:o,triggerOnce:d,onChange:C,children:({inView:b,ref:x})=>E("div",{ref:x,className:c,css:U(()=>g)(b),style:Object.assign({},m,gt(!b),{animationDelay:v+"ms"}),children:E(dt,{children:({cx:P})=>E(u.type,{...u.props,className:P(h,u.props.className),style:Object.assign({},y,u.props.style)})})})})}})})},Tr={display:"inline-block",whiteSpace:"pre"},_r=t=>{const{animationStyles:e,cascade:r=!1,damping:a=.5,delay:n=0,duration:o=1e3,fraction:s=0,triggerOnce:d=!1,className:c,style:m,children:h,onVisibilityChange:y}=t,{ref:w,inView:C}=ae({triggerOnce:d,threshold:s,onChange:y});return ne(()=>E("div",{ref:w,className:c,style:Object.assign({},m,Tr),children:h.split("").map((g,u)=>E("span",{css:U(()=>e)(C),style:{animationDelay:n+u*o*a+"ms"},children:g},u))}),()=>E(se,{...t,children:h}))(r)},se=t=>{const{animationStyles:e,fraction:r=0,triggerOnce:a=!1,className:n,style:o,children:s,onVisibilityChange:d}=t,{ref:c,inView:m}=ae({triggerOnce:a,threshold:r,onChange:d});return E("div",{ref:c,className:n,css:U(()=>e)(m),style:Object.assign({},o,gt(!m)),children:s})};i`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;i`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;i`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;i`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;i`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;i`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`;i`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`;i`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;i`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;i`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;const Mr=i`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,zr=i`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,Fr=i`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,Yr=i`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,Lr=i`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,Xr=i`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,Vr=i`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,Dr=i`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,Gr=i`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,qr=i`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,Br=i`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,Wr=i`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,Hr=i`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function Ur(t,e,r){switch(r){case"bottom-left":return e?zr:vr;case"bottom-right":return e?Fr:wr;case"down":return t?e?Lr:$r:e?Yr:Sr;case"left":return t?e?Vr:Nr:e?Xr:$t;case"right":return t?e?Gr:Cr:e?Dr:jr;case"top-left":return e?qr:Ir;case"top-right":return e?Br:Or;case"up":return t?e?Hr:kr:e?Wr:Rr;default:return e?Mr:xr}}const Zr=t=>{const{big:e=!1,direction:r,reverse:a=!1,...n}=t,o=I.useMemo(()=>Ur(e,a,r),[e,r,a]);return E(oe,{keyframes:o,...n})};i`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`;i`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;i`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;i`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;i`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;i`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;i`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;i`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;i`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;i`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;i`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;i`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;i`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;i`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;i`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;i`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;i`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;i`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;i`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;i`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;i`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;i`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;i`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;i`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`;i`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`;i`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`;i`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;i`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;i`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;i`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;i`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;i`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;i`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`;i`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;i`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`;i`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`;i`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;const X={email:"raihanulislamnahid22@gmail.com",phone:"+880 1827491977",location:"Dhaka, Bangladesh",description:"I'm always open to new opportunities and collaborations. Feel free to reach out if you'd like to discuss a project or just want to connect!"},Jr=[{id:1,icon:ie,name:"GitHub",url:"https://github.com/raihanulislam00",color:"hover:text-gray-300",gradient:"from-gray-600 to-gray-300",description:"Check out my open source projects",bgGlow:"shadow-gray-500/20"},{id:2,icon:ce,name:"LinkedIn",url:"https://www.linkedin.com/in/raihanulislam00/",color:"hover:text-blue-400",gradient:"from-blue-600 to-blue-400",description:"Connect with me professionally",bgGlow:"shadow-blue-500/20"},{id:3,icon:le,name:"Twitter",url:"https://twitter.com/Roll__Num__44",color:"hover:text-blue-500",gradient:"from-blue-500 to-cyan-400",description:"Follow me for tech updates",bgGlow:"shadow-cyan-500/20"},{id:4,icon:fe,name:"Facebook",url:"https://www.facebook.com/raihanulislam00",color:"hover:text-blue-600",gradient:"from-blue-600 to-indigo-400",description:"Connect with me socially",bgGlow:"shadow-blue-500/20"},{id:5,icon:de,name:"Instagram",url:"https://www.instagram.com/raihanulislam00",color:"hover:text-pink-500",gradient:"from-pink-600 to-purple-400",description:"Follow my creative journey",bgGlow:"shadow-pink-500/20"}],Kr=[{id:"name",label:"Your Name",type:"text",placeholder:"What should I call you? ✨",icon:"�",required:!0,pattern:"^[A-Za-z ]{2,50}$",errorMessage:"Please enter a valid name (2-50 characters)",gradient:"from-cyan-400 via-blue-500 to-indigo-500",glow:"shadow-cyan-500/30",hoverGradient:"from-cyan-300 via-blue-400 to-indigo-400",focusGlow:"shadow-cyan-500/50",animation:"pulse"},{id:"email",label:"Your Email",type:"email",placeholder:"Let's stay connected! 📧",icon:"✨",required:!0,pattern:"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",errorMessage:"Please enter a valid email address",gradient:"from-blue-400 via-indigo-500 to-purple-500",glow:"shadow-blue-500/30",hoverGradient:"from-blue-300 via-indigo-400 to-purple-400",focusGlow:"shadow-blue-500/50",animation:"bounce"},{id:"subject",label:"Subject",type:"text",placeholder:"What's on your mind? 💭",icon:"🌟",required:!0,minLength:5,maxLength:100,errorMessage:"Subject should be between 5 and 100 characters",gradient:"from-purple-400 via-pink-500 to-rose-500",glow:"shadow-purple-500/30",hoverGradient:"from-purple-300 via-pink-400 to-rose-400",focusGlow:"shadow-purple-500/50",animation:"float"}],aa=()=>{const[t,e]=I.useState({name:"",email:"",subject:"",message:""}),[r,a]=I.useState(!1),[n,o]=I.useState(null),s=c=>{e({...t,[c.target.name]:c.target.value})},d=async c=>{c.preventDefault(),a(!0);try{await new Promise(m=>setTimeout(m,2e3)),o("success"),e({name:"",email:"",subject:"",message:""})}catch{o("error")}finally{a(!1),setTimeout(()=>o(null),5e3)}};return p.jsxs("div",{className:"min-h-screen py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden",children:[p.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",children:[p.jsx("div",{className:"absolute top-20 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"}),p.jsx("div",{className:"absolute bottom-20 right-16 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"}),p.jsx("div",{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/3 rounded-full blur-3xl"})]}),p.jsxs("div",{className:"container px-4 mx-auto relative z-10",children:[p.jsxs(A.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"mb-16 text-center",children:[p.jsxs(A.h2,{className:"mb-6 text-5xl md:text-6xl font-bold relative inline-block",children:[p.jsx(A.span,{className:"bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent",animate:{backgroundPosition:["0% 50%","100% 50%","0% 50%"]},transition:{duration:5,repeat:1/0},style:{backgroundSize:"200% 100%"},children:"Get In Touch"}),p.jsx(A.div,{className:"absolute -inset-4 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 blur-2xl -z-10",animate:{opacity:[.5,.8,.5]},transition:{duration:3,repeat:1/0}})]}),p.jsx("p",{className:"max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed",children:X.description})]}),p.jsxs("div",{className:"grid max-w-6xl grid-cols-1 gap-12 mx-auto lg:grid-cols-2",children:[p.jsx("div",{className:"space-y-8",children:p.jsxs(Zr,{cascade:!0,triggerOnce:!0,children:[p.jsxs(A.div,{whileHover:{y:-5},className:"p-8 space-y-6 bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-3xl border-2 border-gray-700/50 shadow-2xl hover:border-cyan-400/30 transition-all duration-300",children:[p.jsxs(A.div,{whileHover:{x:5},className:"flex items-center gap-5 p-4 rounded-2xl bg-gray-800/50 hover:bg-gray-800/70 transition-all duration-300",children:[p.jsx("div",{className:"flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-cyan-600/20 border-2 border-cyan-400/30",children:p.jsx(ue,{className:"w-8 h-8 text-cyan-400"})}),p.jsxs("div",{children:[p.jsx("h3",{className:"font-semibold text-white text-lg mb-1",children:"Email"}),p.jsx("a",{href:`mailto:${X.email}`,className:"text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-base",children:X.email})]})]}),p.jsxs(A.div,{whileHover:{x:5},className:"flex items-center gap-5 p-4 rounded-2xl bg-gray-800/50 hover:bg-gray-800/70 transition-all duration-300",children:[p.jsx("div",{className:"flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400/20 to-green-600/20 border-2 border-green-400/30",children:p.jsx(me,{className:"w-8 h-8 text-green-400"})}),p.jsxs("div",{children:[p.jsx("h3",{className:"font-semibold text-white text-lg mb-1",children:"Phone"}),p.jsx("a",{href:`tel:${X.phone}`,className:"text-gray-300 hover:text-green-400 transition-colors duration-300 text-base",children:X.phone})]})]}),p.jsxs(A.div,{whileHover:{x:5},className:"flex items-center gap-5 p-4 rounded-2xl bg-gray-800/50 hover:bg-gray-800/70 transition-all duration-300",children:[p.jsx("div",{className:"flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-400/20 to-purple-600/20 border-2 border-purple-400/30",children:p.jsx(pe,{className:"w-8 h-8 text-purple-400"})}),p.jsxs("div",{children:[p.jsx("h3",{className:"font-semibold text-white text-lg mb-1",children:"Location"}),p.jsx("p",{className:"text-gray-300 text-base",children:X.location})]})]})]}),p.jsxs(A.div,{whileHover:{y:-5},className:"p-8 bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-3xl border-2 border-gray-700/50 shadow-2xl hover:border-cyan-400/30 transition-all duration-300",children:[p.jsx("h3",{className:"mb-6 font-bold text-white text-xl",children:"Connect With Me"}),p.jsx("div",{className:"flex flex-wrap gap-4",children:Jr.map(c=>{const m=c.icon;return p.jsxs(A.a,{href:c.url,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.15,y:-5},whileTap:{scale:.95},className:`relative w-14 h-14 rounded-2xl bg-gray-800/60 hover:bg-gray-700/80 flex items-center justify-center text-gray-400 ${c.color} transition-all duration-300 border-2 border-gray-700/50 hover:border-cyan-400/50 group`,children:[p.jsx(m,{className:"w-6 h-6 relative z-10"}),p.jsx("div",{className:"absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/0 to-blue-400/0 group-hover:from-cyan-400/20 group-hover:to-blue-400/20 transition-all duration-300"})]},c.id)})})]})]})}),p.jsxs(A.div,{initial:{opacity:0,x:20},whileInView:{opacity:1,x:0},viewport:{once:!0},className:"relative p-8 bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-3xl border-2 border-gray-700/50 shadow-2xl",children:[p.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl"}),p.jsx("div",{className:"absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"}),p.jsxs("form",{onSubmit:d,className:"relative z-10 space-y-6",children:[Kr.map(c=>p.jsxs(A.div,{whileHover:{scale:1.01},className:"relative",children:[p.jsxs("label",{htmlFor:c.id,className:"block mb-3 font-semibold text-white text-base",children:[c.label," ",c.icon]}),p.jsx("input",{type:c.type,id:c.id,name:c.id,value:t[c.id],onChange:s,placeholder:c.placeholder,required:!0,className:"w-full px-5 py-4 text-white placeholder-gray-400 transition-all duration-300 rounded-2xl outline-none bg-gray-800/60 focus:bg-gray-800/80 border-2 border-gray-700/50 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 backdrop-blur-sm"})]},c.id)),p.jsxs(A.div,{whileHover:{scale:1.01},className:"relative",children:[p.jsx("label",{htmlFor:"message",className:"block mb-3 font-semibold text-white text-base",children:"Your Message 💭"}),p.jsx("textarea",{id:"message",name:"message",value:t.message,onChange:s,placeholder:"Write your message here...",required:!0,rows:6,className:"w-full px-5 py-4 text-white placeholder-gray-400 transition-all duration-300 rounded-2xl outline-none resize-none bg-gray-800/60 focus:bg-gray-800/80 border-2 border-gray-700/50 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 backdrop-blur-sm"})]}),p.jsxs(A.button,{type:"submit",disabled:r,whileHover:{scale:1.02,y:-2},whileTap:{scale:.98},className:`relative w-full py-5 rounded-2xl flex items-center justify-center gap-3 text-white font-bold text-lg transition-all duration-300 overflow-hidden ${r?"bg-gray-600 cursor-not-allowed":"bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 hover:shadow-2xl hover:shadow-cyan-500/30"}`,children:[!r&&p.jsx(A.div,{className:"absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100",animate:{x:["-100%","100%"]},transition:{duration:2,repeat:1/0,ease:"linear"}}),r?p.jsxs("div",{className:"flex items-center gap-3",children:[p.jsx("div",{className:"w-6 h-6 border-3 rounded-full border-white/30 border-t-white animate-spin"}),p.jsx("span",{children:"Sending..."})]}):p.jsxs(p.Fragment,{children:[p.jsx("span",{className:"relative z-10",children:"Send Message"}),p.jsx(A.div,{animate:{x:[0,5,0]},transition:{duration:1.5,repeat:1/0},className:"relative z-10",children:p.jsx(he,{className:"w-6 h-6"})})]})]}),n&&p.jsx(A.div,{initial:{opacity:0,y:10,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-10,scale:.95},className:`p-5 rounded-2xl text-center font-semibold text-base border-2 ${n==="success"?"bg-green-500/15 text-green-400 border-green-500/30":"bg-red-500/15 text-red-400 border-red-500/30"}`,children:n==="success"?"✅ Message sent successfully! I will get back to you soon.":"❌ Oops! Something went wrong. Please try again."})]})]})]})]})]})};export{aa as default};
