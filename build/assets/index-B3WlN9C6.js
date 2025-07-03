import{R as Nt,r as I,j as h,m as B}from"./index-DEyf8Tx8.js";import{t as ie,u as ce,x as fe,y as le,v as de,z as ue,A as me,s as pe,B as he}from"./index.esm-Dsw9cA9F.js";function ye(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function ge(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var be=function(){function t(r){var a=this;this._insertTag=function(n){var s;a.tags.length===0?a.insertionPoint?s=a.insertionPoint.nextSibling:a.prepend?s=a.container.firstChild:s=a.before:s=a.tags[a.tags.length-1].nextSibling,a.container.insertBefore(n,s),a.tags.push(n)},this.isSpeedy=r.speedy===void 0?!0:r.speedy,this.tags=[],this.ctr=0,this.nonce=r.nonce,this.key=r.key,this.container=r.container,this.prepend=r.prepend,this.insertionPoint=r.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(a){a.forEach(this._insertTag)},e.insert=function(a){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(ge(this));var n=this.tags[this.tags.length-1];if(this.isSpeedy){var s=ye(n);try{s.insertRule(a,s.cssRules.length)}catch{}}else n.appendChild(document.createTextNode(a));this.ctr++},e.flush=function(){this.tags.forEach(function(a){var n;return(n=a.parentNode)==null?void 0:n.removeChild(a)}),this.tags=[],this.ctr=0},t}(),A="-ms-",at="-moz-",S="-webkit-",Yt="comm",bt="rule",xt="decl",xe="@import",Lt="@keyframes",ve="@layer",we=Math.abs,nt=String.fromCharCode,Se=Object.assign;function $e(t,e){return T(t,0)^45?(((e<<2^T(t,0))<<2^T(t,1))<<2^T(t,2))<<2^T(t,3):0}function Xt(t){return t.trim()}function Ne(t,e){return(t=e.exec(t))?t[0]:t}function $(t,e,r){return t.replace(e,r)}function mt(t,e){return t.indexOf(e)}function T(t,e){return t.charCodeAt(e)|0}function q(t,e,r){return t.slice(e,r)}function F(t){return t.length}function vt(t){return t.length}function K(t,e){return e.push(t),t}function Ce(t,e){return t.map(e).join("")}var st=1,V=1,Vt=0,_=0,E=0,D="";function ot(t,e,r,a,n,s,o){return{value:t,root:e,parent:r,type:a,props:n,children:s,line:st,column:V,length:o,return:""}}function W(t,e){return Se(ot("",null,null,"",null,null,0),t,{length:-t.length},e)}function je(){return E}function Ie(){return E=_>0?T(D,--_):0,V--,E===10&&(V=1,st--),E}function M(){return E=_<Vt?T(D,_++):0,V++,E===10&&(V=1,st++),E}function Y(){return T(D,_)}function tt(){return _}function J(t,e){return q(D,t,e)}function G(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Dt(t){return st=V=1,Vt=F(D=t),_=0,[]}function Bt(t){return D="",t}function et(t){return Xt(J(_-1,pt(t===91?t+2:t===40?t+1:t)))}function Oe(t){for(;(E=Y())&&E<33;)M();return G(t)>2||G(E)>3?"":" "}function Re(t,e){for(;--e&&M()&&!(E<48||E>102||E>57&&E<65||E>70&&E<97););return J(t,tt()+(e<6&&Y()==32&&M()==32))}function pt(t){for(;M();)switch(E){case t:return _;case 34:case 39:t!==34&&t!==39&&pt(E);break;case 40:t===41&&pt(t);break;case 92:M();break}return _}function Ee(t,e){for(;M()&&t+E!==57;)if(t+E===84&&Y()===47)break;return"/*"+J(e,_-1)+"*"+nt(t===47?t:M())}function ke(t){for(;!G(Y());)M();return J(t,_)}function Pe(t){return Bt(rt("",null,null,null,[""],t=Dt(t),0,[0],t))}function rt(t,e,r,a,n,s,o,d,c){for(var m=0,p=0,y=o,w=0,j=0,g=0,u=1,f=1,v=1,b=0,x="",P=n,l=s,R=a,O=x;f;)switch(g=b,b=M()){case 40:if(g!=108&&T(O,y-1)==58){mt(O+=$(et(b),"&","&\f"),"&\f")!=-1&&(v=-1);break}case 34:case 39:case 91:O+=et(b);break;case 9:case 10:case 13:case 32:O+=Oe(g);break;case 92:O+=Re(tt()-1,7);continue;case 47:switch(Y()){case 42:case 47:K(Te(Ee(M(),tt()),e,r),c);break;default:O+="/"}break;case 123*u:d[m++]=F(O)*v;case 125*u:case 59:case 0:switch(b){case 0:case 125:f=0;case 59+p:v==-1&&(O=$(O,/\f/g,"")),j>0&&F(O)-y&&K(j>32?jt(O+";",a,r,y-1):jt($(O," ","")+";",a,r,y-2),c);break;case 59:O+=";";default:if(K(R=Ct(O,e,r,m,p,n,d,x,P=[],l=[],y),s),b===123)if(p===0)rt(O,e,R,R,P,s,y,d,l);else switch(w===99&&T(O,3)===110?100:w){case 100:case 108:case 109:case 115:rt(t,R,R,a&&K(Ct(t,R,R,0,0,n,d,x,n,P=[],y),l),n,l,y,d,a?P:l);break;default:rt(O,R,R,R,[""],l,0,d,l)}}m=p=j=0,u=v=1,x=O="",y=o;break;case 58:y=1+F(O),j=g;default:if(u<1){if(b==123)--u;else if(b==125&&u++==0&&Ie()==125)continue}switch(O+=nt(b),b*u){case 38:v=p>0?1:(O+="\f",-1);break;case 44:d[m++]=(F(O)-1)*v,v=1;break;case 64:Y()===45&&(O+=et(M())),w=Y(),p=y=F(x=O+=ke(tt())),b++;break;case 45:g===45&&F(O)==2&&(u=0)}}return s}function Ct(t,e,r,a,n,s,o,d,c,m,p){for(var y=n-1,w=n===0?s:[""],j=vt(w),g=0,u=0,f=0;g<a;++g)for(var v=0,b=q(t,y+1,y=we(u=o[g])),x=t;v<j;++v)(x=Xt(u>0?w[v]+" "+b:$(b,/&\f/g,w[v])))&&(c[f++]=x);return ot(t,e,r,n===0?bt:d,c,m,p)}function Te(t,e,r){return ot(t,e,r,Yt,nt(je()),q(t,2,-2),0)}function jt(t,e,r,a){return ot(t,e,r,xt,q(t,0,a),q(t,a+1,-1),a)}function X(t,e){for(var r="",a=vt(t),n=0;n<a;n++)r+=e(t[n],n,t,e)||"";return r}function Ae(t,e,r,a){switch(t.type){case ve:if(t.children.length)break;case xe:case xt:return t.return=t.return||t.value;case Yt:return"";case Lt:return t.return=t.value+"{"+X(t.children,a)+"}";case bt:t.value=t.props.join(",")}return F(r=X(t.children,a))?t.return=t.value+"{"+r+"}":""}function _e(t){var e=vt(t);return function(r,a,n,s){for(var o="",d=0;d<e;d++)o+=t[d](r,a,n,s)||"";return o}}function Me(t){return function(e){e.root||(e=e.return)&&t(e)}}function Fe(t){var e=Object.create(null);return function(r){return e[r]===void 0&&(e[r]=t(r)),e[r]}}var ze=function(e,r,a){for(var n=0,s=0;n=s,s=Y(),n===38&&s===12&&(r[a]=1),!G(s);)M();return J(e,_)},Ye=function(e,r){var a=-1,n=44;do switch(G(n)){case 0:n===38&&Y()===12&&(r[a]=1),e[a]+=ze(_-1,r,a);break;case 2:e[a]+=et(n);break;case 4:if(n===44){e[++a]=Y()===58?"&\f":"",r[a]=e[a].length;break}default:e[a]+=nt(n)}while(n=M());return e},Le=function(e,r){return Bt(Ye(Dt(e),r))},It=new WeakMap,Xe=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var r=e.value,a=e.parent,n=e.column===a.column&&e.line===a.line;a.type!=="rule";)if(a=a.parent,!a)return;if(!(e.props.length===1&&r.charCodeAt(0)!==58&&!It.get(a))&&!n){It.set(e,!0);for(var s=[],o=Le(r,s),d=a.props,c=0,m=0;c<o.length;c++)for(var p=0;p<d.length;p++,m++)e.props[m]=s[c]?o[c].replace(/&\f/g,d[p]):d[p]+" "+o[c]}}},Ve=function(e){if(e.type==="decl"){var r=e.value;r.charCodeAt(0)===108&&r.charCodeAt(2)===98&&(e.return="",e.value="")}};function Wt(t,e){switch($e(t,e)){case 5103:return S+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return S+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return S+t+at+t+A+t+t;case 6828:case 4268:return S+t+A+t+t;case 6165:return S+t+A+"flex-"+t+t;case 5187:return S+t+$(t,/(\w+).+(:[^]+)/,S+"box-$1$2"+A+"flex-$1$2")+t;case 5443:return S+t+A+"flex-item-"+$(t,/flex-|-self/,"")+t;case 4675:return S+t+A+"flex-line-pack"+$(t,/align-content|flex-|-self/,"")+t;case 5548:return S+t+A+$(t,"shrink","negative")+t;case 5292:return S+t+A+$(t,"basis","preferred-size")+t;case 6060:return S+"box-"+$(t,"-grow","")+S+t+A+$(t,"grow","positive")+t;case 4554:return S+$(t,/([^-])(transform)/g,"$1"+S+"$2")+t;case 6187:return $($($(t,/(zoom-|grab)/,S+"$1"),/(image-set)/,S+"$1"),t,"")+t;case 5495:case 3959:return $(t,/(image-set\([^]*)/,S+"$1$`$1");case 4968:return $($(t,/(.+:)(flex-)?(.*)/,S+"box-pack:$3"+A+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+S+t+t;case 4095:case 3583:case 4068:case 2532:return $(t,/(.+)-inline(.+)/,S+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(F(t)-1-e>6)switch(T(t,e+1)){case 109:if(T(t,e+4)!==45)break;case 102:return $(t,/(.+:)(.+)-([^]+)/,"$1"+S+"$2-$3$1"+at+(T(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~mt(t,"stretch")?Wt($(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(T(t,e+1)!==115)break;case 6444:switch(T(t,F(t)-3-(~mt(t,"!important")&&10))){case 107:return $(t,":",":"+S)+t;case 101:return $(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+S+(T(t,14)===45?"inline-":"")+"box$3$1"+S+"$2$3$1"+A+"$2box$3")+t}break;case 5936:switch(T(t,e+11)){case 114:return S+t+A+$(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return S+t+A+$(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return S+t+A+$(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return S+t+A+t+t}return t}var De=function(e,r,a,n){if(e.length>-1&&!e.return)switch(e.type){case xt:e.return=Wt(e.value,e.length);break;case Lt:return X([W(e,{value:$(e.value,"@","@"+S)})],n);case bt:if(e.length)return Ce(e.props,function(s){switch(Ne(s,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return X([W(e,{props:[$(s,/:(read-\w+)/,":"+at+"$1")]})],n);case"::placeholder":return X([W(e,{props:[$(s,/:(plac\w+)/,":"+S+"input-$1")]}),W(e,{props:[$(s,/:(plac\w+)/,":"+at+"$1")]}),W(e,{props:[$(s,/:(plac\w+)/,A+"input-$1")]})],n)}return""})}},Be=[De],We=function(e){var r=e.key;if(r==="css"){var a=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(a,function(u){var f=u.getAttribute("data-emotion");f.indexOf(" ")!==-1&&(document.head.appendChild(u),u.setAttribute("data-s",""))})}var n=e.stylisPlugins||Be,s={},o,d=[];o=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+r+' "]'),function(u){for(var f=u.getAttribute("data-emotion").split(" "),v=1;v<f.length;v++)s[f[v]]=!0;d.push(u)});var c,m=[Xe,Ve];{var p,y=[Ae,Me(function(u){p.insert(u)})],w=_e(m.concat(n,y)),j=function(f){return X(Pe(f),w)};c=function(f,v,b,x){p=b,j(f?f+"{"+v.styles+"}":v.styles),x&&(g.inserted[v.name]=!0)}}var g={key:r,sheet:new be({key:r,container:o,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:s,registered:{},insert:c};return g.sheet.hydrate(d),g},ct={exports:{}},N={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ot;function qe(){if(Ot)return N;Ot=1;var t=typeof Symbol=="function"&&Symbol.for,e=t?Symbol.for("react.element"):60103,r=t?Symbol.for("react.portal"):60106,a=t?Symbol.for("react.fragment"):60107,n=t?Symbol.for("react.strict_mode"):60108,s=t?Symbol.for("react.profiler"):60114,o=t?Symbol.for("react.provider"):60109,d=t?Symbol.for("react.context"):60110,c=t?Symbol.for("react.async_mode"):60111,m=t?Symbol.for("react.concurrent_mode"):60111,p=t?Symbol.for("react.forward_ref"):60112,y=t?Symbol.for("react.suspense"):60113,w=t?Symbol.for("react.suspense_list"):60120,j=t?Symbol.for("react.memo"):60115,g=t?Symbol.for("react.lazy"):60116,u=t?Symbol.for("react.block"):60121,f=t?Symbol.for("react.fundamental"):60117,v=t?Symbol.for("react.responder"):60118,b=t?Symbol.for("react.scope"):60119;function x(l){if(typeof l=="object"&&l!==null){var R=l.$$typeof;switch(R){case e:switch(l=l.type,l){case c:case m:case a:case s:case n:case y:return l;default:switch(l=l&&l.$$typeof,l){case d:case p:case g:case j:case o:return l;default:return R}}case r:return R}}}function P(l){return x(l)===m}return N.AsyncMode=c,N.ConcurrentMode=m,N.ContextConsumer=d,N.ContextProvider=o,N.Element=e,N.ForwardRef=p,N.Fragment=a,N.Lazy=g,N.Memo=j,N.Portal=r,N.Profiler=s,N.StrictMode=n,N.Suspense=y,N.isAsyncMode=function(l){return P(l)||x(l)===c},N.isConcurrentMode=P,N.isContextConsumer=function(l){return x(l)===d},N.isContextProvider=function(l){return x(l)===o},N.isElement=function(l){return typeof l=="object"&&l!==null&&l.$$typeof===e},N.isForwardRef=function(l){return x(l)===p},N.isFragment=function(l){return x(l)===a},N.isLazy=function(l){return x(l)===g},N.isMemo=function(l){return x(l)===j},N.isPortal=function(l){return x(l)===r},N.isProfiler=function(l){return x(l)===s},N.isStrictMode=function(l){return x(l)===n},N.isSuspense=function(l){return x(l)===y},N.isValidElementType=function(l){return typeof l=="string"||typeof l=="function"||l===a||l===m||l===s||l===n||l===y||l===w||typeof l=="object"&&l!==null&&(l.$$typeof===g||l.$$typeof===j||l.$$typeof===o||l.$$typeof===d||l.$$typeof===p||l.$$typeof===f||l.$$typeof===v||l.$$typeof===b||l.$$typeof===u)},N.typeOf=x,N}var Rt;function Ge(){return Rt||(Rt=1,ct.exports=qe()),ct.exports}var ft,Et;function He(){if(Et)return ft;Et=1;var t=Ge(),e={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},n={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};s[t.ForwardRef]=a,s[t.Memo]=n;function o(g){return t.isMemo(g)?n:s[g.$$typeof]||e}var d=Object.defineProperty,c=Object.getOwnPropertyNames,m=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,y=Object.getPrototypeOf,w=Object.prototype;function j(g,u,f){if(typeof u!="string"){if(w){var v=y(u);v&&v!==w&&j(g,v,f)}var b=c(u);m&&(b=b.concat(m(u)));for(var x=o(g),P=o(u),l=0;l<b.length;++l){var R=b[l];if(!r[R]&&!(f&&f[R])&&!(P&&P[R])&&!(x&&x[R])){var O=p(u,R);try{d(g,R,O)}catch{}}}}return g}return ft=j,ft}He();var Ue=!0;function qt(t,e,r){var a="";return r.split(" ").forEach(function(n){t[n]!==void 0?e.push(t[n]+";"):n&&(a+=n+" ")}),a}var wt=function(e,r,a){var n=e.key+"-"+r.name;(a===!1||Ue===!1)&&e.registered[n]===void 0&&(e.registered[n]=r.styles)},Gt=function(e,r,a){wt(e,r,a);var n=e.key+"-"+r.name;if(e.inserted[r.name]===void 0){var s=r;do e.insert(r===s?"."+n:"",s,e.sheet,!0),s=s.next;while(s!==void 0)}};function Je(t){for(var e=0,r,a=0,n=t.length;n>=4;++a,n-=4)r=t.charCodeAt(a)&255|(t.charCodeAt(++a)&255)<<8|(t.charCodeAt(++a)&255)<<16|(t.charCodeAt(++a)&255)<<24,r=(r&65535)*1540483477+((r>>>16)*59797<<16),r^=r>>>24,e=(r&65535)*1540483477+((r>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(n){case 3:e^=(t.charCodeAt(a+2)&255)<<16;case 2:e^=(t.charCodeAt(a+1)&255)<<8;case 1:e^=t.charCodeAt(a)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var Ke={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ze=/[A-Z]|^ms/g,Qe=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Ht=function(e){return e.charCodeAt(1)===45},kt=function(e){return e!=null&&typeof e!="boolean"},lt=Fe(function(t){return Ht(t)?t:t.replace(Ze,"-$&").toLowerCase()}),Pt=function(e,r){switch(e){case"animation":case"animationName":if(typeof r=="string")return r.replace(Qe,function(a,n,s){return z={name:n,styles:s,next:z},n})}return Ke[e]!==1&&!Ht(e)&&typeof r=="number"&&r!==0?r+"px":r};function H(t,e,r){if(r==null)return"";var a=r;if(a.__emotion_styles!==void 0)return a;switch(typeof r){case"boolean":return"";case"object":{var n=r;if(n.anim===1)return z={name:n.name,styles:n.styles,next:z},n.name;var s=r;if(s.styles!==void 0){var o=s.next;if(o!==void 0)for(;o!==void 0;)z={name:o.name,styles:o.styles,next:z},o=o.next;var d=s.styles+";";return d}return tr(t,e,r)}case"function":{if(t!==void 0){var c=z,m=r(t);return z=c,H(t,e,m)}break}}var p=r;if(e==null)return p;var y=e[p];return y!==void 0?y:p}function tr(t,e,r){var a="";if(Array.isArray(r))for(var n=0;n<r.length;n++)a+=H(t,e,r[n])+";";else for(var s in r){var o=r[s];if(typeof o!="object"){var d=o;e!=null&&e[d]!==void 0?a+=s+"{"+e[d]+"}":kt(d)&&(a+=lt(s)+":"+Pt(s,d)+";")}else if(Array.isArray(o)&&typeof o[0]=="string"&&(e==null||e[o[0]]===void 0))for(var c=0;c<o.length;c++)kt(o[c])&&(a+=lt(s)+":"+Pt(s,o[c])+";");else{var m=H(t,e,o);switch(s){case"animation":case"animationName":{a+=lt(s)+":"+m+";";break}default:a+=s+"{"+m+"}"}}}return a}var Tt=/label:\s*([^\s;{]+)\s*(;|$)/g,z;function St(t,e,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var a=!0,n="";z=void 0;var s=t[0];if(s==null||s.raw===void 0)a=!1,n+=H(r,e,s);else{var o=s;n+=o[0]}for(var d=1;d<t.length;d++)if(n+=H(r,e,t[d]),a){var c=s;n+=c[d]}Tt.lastIndex=0;for(var m="",p;(p=Tt.exec(n))!==null;)m+="-"+p[1];var y=Je(n)+m;return{name:y,styles:n,next:z}}var er=function(e){return e()},rr=Nt.useInsertionEffect?Nt.useInsertionEffect:!1,Ut=rr||er,Jt=I.createContext(typeof HTMLElement<"u"?We({key:"css"}):null);Jt.Provider;var Kt=function(e){return I.forwardRef(function(r,a){var n=I.useContext(Jt);return e(r,n,a)})},Zt=I.createContext({}),it={}.hasOwnProperty,ht="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Qt=function(e,r){var a={};for(var n in r)it.call(r,n)&&(a[n]=r[n]);return a[ht]=e,a},ar=function(e){var r=e.cache,a=e.serialized,n=e.isStringTag;return wt(r,a,n),Ut(function(){return Gt(r,a,n)}),null},nr=Kt(function(t,e,r){var a=t.css;typeof a=="string"&&e.registered[a]!==void 0&&(a=e.registered[a]);var n=t[ht],s=[a],o="";typeof t.className=="string"?o=qt(e.registered,s,t.className):t.className!=null&&(o=t.className+" ");var d=St(s,void 0,I.useContext(Zt));o+=e.key+"-"+d.name;var c={};for(var m in t)it.call(t,m)&&m!=="css"&&m!==ht&&(c[m]=t[m]);return c.className=o,r&&(c.ref=r),I.createElement(I.Fragment,null,I.createElement(ar,{cache:e,serialized:d,isStringTag:typeof n=="string"}),I.createElement(n,c))}),te=nr,sr=h.Fragment,k=function(e,r,a){return it.call(r,"css")?h.jsx(te,Qt(e,r),a):h.jsx(e,r,a)},At=function(e,r){var a=arguments;if(r==null||!it.call(r,"css"))return I.createElement.apply(void 0,a);var n=a.length,s=new Array(n);s[0]=te,s[1]=Qt(e,r);for(var o=2;o<n;o++)s[o]=a[o];return I.createElement.apply(null,s)};(function(t){var e;e||(e=t.JSX||(t.JSX={}))})(At||(At={}));function ee(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return St(e)}function i(){var t=ee.apply(void 0,arguments),e="animation-"+t.name;return{name:e,styles:"@keyframes "+e+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}var or=function t(e){for(var r=e.length,a=0,n="";a<r;a++){var s=e[a];if(s!=null){var o=void 0;switch(typeof s){case"boolean":break;case"object":{if(Array.isArray(s))o=t(s);else{o="";for(var d in s)s[d]&&d&&(o&&(o+=" "),o+=d)}break}default:o=s}o&&(n&&(n+=" "),n+=o)}}return n};function ir(t,e,r){var a=[],n=qt(t,a,r);return a.length<2?r:n+e(a)}var cr=function(e){var r=e.cache,a=e.serializedArr;return Ut(function(){for(var n=0;n<a.length;n++)Gt(r,a[n],!1)}),null},dt=Kt(function(t,e){var r=[],a=function(){for(var c=arguments.length,m=new Array(c),p=0;p<c;p++)m[p]=arguments[p];var y=St(m,e.registered);return r.push(y),wt(e,y,!1),e.key+"-"+y.name},n=function(){for(var c=arguments.length,m=new Array(c),p=0;p<c;p++)m[p]=arguments[p];return ir(e.registered,a,or(m))},s={css:a,cx:n,theme:I.useContext(Zt)},o=t.children(s);return I.createElement(I.Fragment,null,I.createElement(cr,{cache:e,serializedArr:r}),o)}),fr=Object.defineProperty,lr=(t,e,r)=>e in t?fr(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Z=(t,e,r)=>lr(t,typeof e!="symbol"?e+"":e,r),yt=new Map,Q=new WeakMap,_t=0,dr=void 0;function ur(t){return t?(Q.has(t)||(_t+=1,Q.set(t,_t.toString())),Q.get(t)):"0"}function mr(t){return Object.keys(t).sort().filter(e=>t[e]!==void 0).map(e=>`${e}_${e==="root"?ur(t.root):t[e]}`).toString()}function pr(t){const e=mr(t);let r=yt.get(e);if(!r){const a=new Map;let n;const s=new IntersectionObserver(o=>{o.forEach(d=>{var c;const m=d.isIntersecting&&n.some(p=>d.intersectionRatio>=p);t.trackVisibility&&typeof d.isVisible>"u"&&(d.isVisible=m),(c=a.get(d.target))==null||c.forEach(p=>{p(m,d)})})},t);n=s.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),r={id:e,observer:s,elements:a},yt.set(e,r)}return r}function re(t,e,r={},a=dr){if(typeof window.IntersectionObserver>"u"&&a!==void 0){const c=t.getBoundingClientRect();return e(a,{isIntersecting:a,target:t,intersectionRatio:typeof r.threshold=="number"?r.threshold:0,time:0,boundingClientRect:c,intersectionRect:c,rootBounds:c}),()=>{}}const{id:n,observer:s,elements:o}=pr(r),d=o.get(t)||[];return o.has(t)||o.set(t,d),d.push(e),s.observe(t),function(){d.splice(d.indexOf(e),1),d.length===0&&(o.delete(t),s.unobserve(t)),o.size===0&&(s.disconnect(),yt.delete(n))}}function hr(t){return typeof t.children!="function"}var Mt=class extends I.Component{constructor(t){super(t),Z(this,"node",null),Z(this,"_unobserveCb",null),Z(this,"handleNode",e=>{this.node&&(this.unobserve(),!e&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=e||null,this.observeNode()}),Z(this,"handleChange",(e,r)=>{e&&this.props.triggerOnce&&this.unobserve(),hr(this.props)||this.setState({inView:e,entry:r}),this.props.onChange&&this.props.onChange(e,r)}),this.state={inView:!!t.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(t){(t.rootMargin!==this.props.rootMargin||t.root!==this.props.root||t.threshold!==this.props.threshold||t.skip!==this.props.skip||t.trackVisibility!==this.props.trackVisibility||t.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:t,root:e,rootMargin:r,trackVisibility:a,delay:n,fallbackInView:s}=this.props;this._unobserveCb=re(this.node,this.handleChange,{threshold:t,root:e,rootMargin:r,trackVisibility:a,delay:n},s)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:t}=this.props;if(typeof t=="function"){const{inView:j,entry:g}=this.state;return t({inView:j,entry:g,ref:this.handleNode})}const{as:e,triggerOnce:r,threshold:a,root:n,rootMargin:s,onChange:o,skip:d,trackVisibility:c,delay:m,initialInView:p,fallbackInView:y,...w}=this.props;return I.createElement(e||"div",{ref:this.handleNode,...w},t)}};function ae({threshold:t,delay:e,trackVisibility:r,rootMargin:a,root:n,triggerOnce:s,skip:o,initialInView:d,fallbackInView:c,onChange:m}={}){var p;const[y,w]=I.useState(null),j=I.useRef(m),[g,u]=I.useState({inView:!!d,entry:void 0});j.current=m,I.useEffect(()=>{if(o||!y)return;let x;return x=re(y,(P,l)=>{u({inView:P,entry:l}),j.current&&j.current(P,l),l.isIntersecting&&s&&x&&(x(),x=void 0)},{root:n,rootMargin:a,threshold:t,trackVisibility:r,delay:e},c),()=>{x&&x()}},[Array.isArray(t)?t.toString():t,y,n,a,s,o,r,c,e]);const f=(p=g.entry)==null?void 0:p.target,v=I.useRef(void 0);!y&&f&&!s&&!o&&v.current!==f&&(v.current=f,u({inView:!!d,entry:void 0}));const b=[w,g.inView,g.entry];return b.ref=b[0],b.inView=b[1],b.entry=b[2],b}var ut={exports:{}},C={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ft;function yr(){if(Ft)return C;Ft=1;var t=Symbol.for("react.element"),e=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),n=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),o=Symbol.for("react.context"),d=Symbol.for("react.server_context"),c=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),y=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),j=Symbol.for("react.offscreen"),g;g=Symbol.for("react.module.reference");function u(f){if(typeof f=="object"&&f!==null){var v=f.$$typeof;switch(v){case t:switch(f=f.type,f){case r:case n:case a:case m:case p:return f;default:switch(f=f&&f.$$typeof,f){case d:case o:case c:case w:case y:case s:return f;default:return v}}case e:return v}}}return C.ContextConsumer=o,C.ContextProvider=s,C.Element=t,C.ForwardRef=c,C.Fragment=r,C.Lazy=w,C.Memo=y,C.Portal=e,C.Profiler=n,C.StrictMode=a,C.Suspense=m,C.SuspenseList=p,C.isAsyncMode=function(){return!1},C.isConcurrentMode=function(){return!1},C.isContextConsumer=function(f){return u(f)===o},C.isContextProvider=function(f){return u(f)===s},C.isElement=function(f){return typeof f=="object"&&f!==null&&f.$$typeof===t},C.isForwardRef=function(f){return u(f)===c},C.isFragment=function(f){return u(f)===r},C.isLazy=function(f){return u(f)===w},C.isMemo=function(f){return u(f)===y},C.isPortal=function(f){return u(f)===e},C.isProfiler=function(f){return u(f)===n},C.isStrictMode=function(f){return u(f)===a},C.isSuspense=function(f){return u(f)===m},C.isSuspenseList=function(f){return u(f)===p},C.isValidElementType=function(f){return typeof f=="string"||typeof f=="function"||f===r||f===n||f===a||f===m||f===p||f===j||typeof f=="object"&&f!==null&&(f.$$typeof===w||f.$$typeof===y||f.$$typeof===s||f.$$typeof===o||f.$$typeof===c||f.$$typeof===g||f.getModuleId!==void 0)},C.typeOf=u,C}var zt;function gr(){return zt||(zt=1,ut.exports=yr()),ut.exports}var br=gr();i`
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
`,Cr=i`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,jr=i`
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
`,Er=i`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function kr({duration:t=1e3,delay:e=0,timingFunction:r="ease",keyframes:a=$t,iterationCount:n=1}){return ee`
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
  `}function Pr(t){return t==null}function Tr(t){return typeof t=="string"||typeof t=="number"||typeof t=="boolean"}function ne(t,e){return r=>r?t():e()}function U(t){return ne(t,()=>null)}function gt(t){return U(()=>({opacity:0}))(t)}const se=t=>{const{cascade:e=!1,damping:r=.5,delay:a=0,duration:n=1e3,fraction:s=0,keyframes:o=$t,triggerOnce:d=!1,className:c,style:m,childClassName:p,childStyle:y,children:w,onVisibilityChange:j}=t,g=I.useMemo(()=>kr({keyframes:o,duration:n}),[n,o]);return Pr(w)?null:Tr(w)?k(_r,{...t,animationStyles:g,children:String(w)}):br.isFragment(w)?k(oe,{...t,animationStyles:g}):k(sr,{children:I.Children.map(w,(u,f)=>{if(!I.isValidElement(u))return null;const v=a+(e?f*n*r:0);switch(u.type){case"ol":case"ul":return k(dt,{children:({cx:b})=>k(u.type,{...u.props,className:b(c,u.props.className),style:Object.assign({},m,u.props.style),children:k(se,{...t,children:u.props.children})})});case"li":return k(Mt,{threshold:s,triggerOnce:d,onChange:j,children:({inView:b,ref:x})=>k(dt,{children:({cx:P})=>k(u.type,{...u.props,ref:x,className:P(p,u.props.className),css:U(()=>g)(b),style:Object.assign({},y,u.props.style,gt(!b),{animationDelay:v+"ms"})})})});default:return k(Mt,{threshold:s,triggerOnce:d,onChange:j,children:({inView:b,ref:x})=>k("div",{ref:x,className:c,css:U(()=>g)(b),style:Object.assign({},m,gt(!b),{animationDelay:v+"ms"}),children:k(dt,{children:({cx:P})=>k(u.type,{...u.props,className:P(p,u.props.className),style:Object.assign({},y,u.props.style)})})})})}})})},Ar={display:"inline-block",whiteSpace:"pre"},_r=t=>{const{animationStyles:e,cascade:r=!1,damping:a=.5,delay:n=0,duration:s=1e3,fraction:o=0,triggerOnce:d=!1,className:c,style:m,children:p,onVisibilityChange:y}=t,{ref:w,inView:j}=ae({triggerOnce:d,threshold:o,onChange:y});return ne(()=>k("div",{ref:w,className:c,style:Object.assign({},m,Ar),children:p.split("").map((g,u)=>k("span",{css:U(()=>e)(j),style:{animationDelay:n+u*s*a+"ms"},children:g},u))}),()=>k(oe,{...t,children:p}))(r)},oe=t=>{const{animationStyles:e,fraction:r=0,triggerOnce:a=!1,className:n,style:s,children:o,onVisibilityChange:d}=t,{ref:c,inView:m}=ae({triggerOnce:a,threshold:r,onChange:d});return k("div",{ref:c,className:n,css:U(()=>e)(m),style:Object.assign({},s,gt(!m)),children:o})};i`
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
`,Fr=i`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,zr=i`
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
`,Br=i`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,Wr=i`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,qr=i`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,Gr=i`
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
`;function Ur(t,e,r){switch(r){case"bottom-left":return e?Fr:vr;case"bottom-right":return e?zr:wr;case"down":return t?e?Lr:$r:e?Yr:Sr;case"left":return t?e?Vr:Nr:e?Xr:$t;case"right":return t?e?Br:jr:e?Dr:Cr;case"top-left":return e?Wr:Ir;case"top-right":return e?qr:Or;case"up":return t?e?Hr:Er:e?Gr:Rr;default:return e?Mr:xr}}const Jr=t=>{const{big:e=!1,direction:r,reverse:a=!1,...n}=t,s=I.useMemo(()=>Ur(e,a,r),[e,r,a]);return k(se,{keyframes:s,...n})};i`
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
`;const L={email:"raihanulislamnahid22@gmail.com",phone:"+880 1827491977",location:"Dhaka, Bangladesh",description:"I'm always open to new opportunities and collaborations. Feel free to reach out if you'd like to discuss a project or just want to connect!"},Kr=[{id:1,icon:ie,name:"GitHub",url:"https://github.com/raihanulislam00",color:"hover:text-gray-300"},{id:2,icon:ce,name:"LinkedIn",url:"https://www.linkedin.com/in/raihanulislam00/",color:"hover:text-blue-400"},{id:3,icon:fe,name:"Twitter",url:"https://twitter.com/Roll__Num__44",color:"hover:text-blue-500"},{id:4,icon:le,name:"Facebook",url:"https://www.facebook.com/raihanulislam00",color:"hover:text-blue-600"},{id:5,icon:de,name:"Instagram",url:"https://www.instagram.com/raihanulislam00",color:"hover:text-pink-500"}],Zr=[{id:"name",label:"Your Name",type:"text",placeholder:"Please write your name",icon:"👤"},{id:"email",label:"Your Email",type:"email",placeholder:"x@example.com",icon:"✉️"},{id:"subject",label:"Subject",type:"text",placeholder:"How can I help you?",icon:"📝"}],ra=()=>{const[t,e]=I.useState({name:"",email:"",subject:"",message:""}),[r,a]=I.useState(!1),[n,s]=I.useState(null),o=c=>{e({...t,[c.target.name]:c.target.value})},d=async c=>{c.preventDefault(),a(!0);try{await new Promise(m=>setTimeout(m,2e3)),s("success"),e({name:"",email:"",subject:"",message:""})}catch{s("error")}finally{a(!1),setTimeout(()=>s(null),5e3)}};return h.jsx("div",{className:"min-h-screen py-20 bg-gradient-to-b from-gray-900 to-black",children:h.jsxs("div",{className:"container px-4 mx-auto",children:[h.jsxs(B.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"mb-16 text-center",children:[h.jsx("h2",{className:"mb-4 text-4xl font-bold text-white md:text-5xl",children:"Get In Touch"}),h.jsx("p",{className:"max-w-2xl mx-auto text-lg text-gray-400",children:L.description})]}),h.jsxs("div",{className:"grid max-w-6xl grid-cols-1 gap-12 mx-auto lg:grid-cols-2",children:[h.jsx("div",{className:"space-y-8",children:h.jsxs(Jr,{cascade:!0,triggerOnce:!0,children:[h.jsxs("div",{className:"p-8 space-y-6 bg-gray-800/50 backdrop-blur-sm rounded-xl",children:[h.jsxs("div",{className:"flex items-center gap-4",children:[h.jsx("div",{className:"flex items-center justify-center w-12 h-12 rounded-full bg-cyan-400/10",children:h.jsx(ue,{className:"w-6 h-6 text-cyan-400"})}),h.jsxs("div",{children:[h.jsx("h3",{className:"font-medium text-white",children:"Email"}),h.jsx("a",{href:`mailto:${L.email}`,className:"text-gray-400 transition-colors hover:text-cyan-400",children:L.email})]})]}),h.jsxs("div",{className:"flex items-center gap-4",children:[h.jsx("div",{className:"flex items-center justify-center w-12 h-12 rounded-full bg-cyan-400/10",children:h.jsx(me,{className:"w-6 h-6 text-cyan-400"})}),h.jsxs("div",{children:[h.jsx("h3",{className:"font-medium text-white",children:"Phone"}),h.jsx("a",{href:`tel:${L.phone}`,className:"text-gray-400 transition-colors hover:text-cyan-400",children:L.phone})]})]}),h.jsxs("div",{className:"flex items-center gap-4",children:[h.jsx("div",{className:"flex items-center justify-center w-12 h-12 rounded-full bg-cyan-400/10",children:h.jsx(pe,{className:"w-6 h-6 text-cyan-400"})}),h.jsxs("div",{children:[h.jsx("h3",{className:"font-medium text-white",children:"Location"}),h.jsx("p",{className:"text-gray-400",children:L.location})]})]})]}),h.jsxs("div",{className:"p-8 bg-gray-800/50 backdrop-blur-sm rounded-xl",children:[h.jsx("h3",{className:"mb-6 font-medium text-white",children:"Connect With Me"}),h.jsx("div",{className:"flex flex-wrap gap-4",children:Kr.map(c=>{const m=c.icon;return h.jsx(B.a,{href:c.url,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.1},whileTap:{scale:.9},className:`w-12 h-12 rounded-full bg-gray-700/50 flex items-center justify-center text-gray-400 ${c.color} transition-colors`,children:h.jsx(m,{className:"w-5 h-5"})},c.id)})})]})]})}),h.jsx(B.div,{initial:{opacity:0,x:20},whileInView:{opacity:1,x:0},viewport:{once:!0},className:"p-8 bg-gray-800/50 backdrop-blur-sm rounded-xl",children:h.jsxs("form",{onSubmit:d,className:"space-y-6",children:[Zr.map(c=>h.jsxs("div",{children:[h.jsxs("label",{htmlFor:c.id,className:"block mb-2 font-medium text-white",children:[c.label," ",c.icon]}),h.jsx("input",{type:c.type,id:c.id,name:c.id,value:t[c.id],onChange:o,placeholder:c.placeholder,required:!0,className:"w-full px-4 py-3 text-white placeholder-gray-400 transition-all rounded-lg outline-none bg-gray-700/50 focus:ring-2 focus:ring-cyan-400/50"})]},c.id)),h.jsxs("div",{children:[h.jsx("label",{htmlFor:"message",className:"block mb-2 font-medium text-white",children:"Your Message 💭"}),h.jsx("textarea",{id:"message",name:"message",value:t.message,onChange:o,placeholder:"Write your message here...",required:!0,rows:6,className:"w-full px-4 py-3 text-white placeholder-gray-400 transition-all rounded-lg outline-none resize-none bg-gray-700/50 focus:ring-2 focus:ring-cyan-400/50"})]}),h.jsx(B.button,{type:"submit",disabled:r,whileHover:{scale:1.02},whileTap:{scale:.98},className:`w-full py-4 rounded-lg flex items-center justify-center gap-2 text-white font-medium transition-all ${r?"bg-gray-600 cursor-not-allowed":"bg-gradient-to-r from-cyan-500 to-blue-500 hover:shadow-lg hover:shadow-cyan-500/25"}`,children:r?h.jsx("div",{className:"w-6 h-6 border-2 rounded-full border-white/30 border-t-white animate-spin"}):h.jsxs(h.Fragment,{children:["Send Message",h.jsx(he,{className:"w-5 h-5"})]})}),n&&h.jsx(B.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},className:`p-4 rounded-lg text-center ${n==="success"?"bg-green-500/10 text-green-400":"bg-red-500/10 text-red-400"}`,children:n==="success"?"Message sent successfully! I will get back to you soon.":"Oops! Something went wrong. Please try again."})]})})]})]})})};export{ra as default};
//# sourceMappingURL=index-B3WlN9C6.js.map
