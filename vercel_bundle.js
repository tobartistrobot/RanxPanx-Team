(function(){
const e=document.createElement("link").relList;
if(e&&e.supports&&e.supports("modulepreload"))return;
for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);
new MutationObserver(i=>{
for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}
).observe(document,{
childList:!0,subtree:!0}
);
function n(i){
const s={
}
;
return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}
function r(i){
if(i.ep)return;
i.ep=!0;
const s=n(i);
fetch(i.href,s)}
}
)();
const AT="modulepreload",CT=function(t){
return"/"+t}
,_0={
}
,Js=function(e,n,r){
if(!n||n.length===0)return e();
const i=document.getElementsByTagName("link");
return Promise.all(n.map(s=>{
if(s=CT(s),s in _0)return;
_0[s]=!0;
const o=s.endsWith(".css"),l=o?'[rel="stylesheet"]':"";
if(!!r)for(let d=i.length-1;
d>=0;
d--){
const m=i[d];
if(m.href===s&&(!o||m.rel==="stylesheet"))return}
else if(document.querySelector(`link[href="${
s}
"]${
l}
`))return;
const u=document.createElement("link");
if(u.rel=o?"stylesheet":AT,o||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),o)return new Promise((d,m)=>{
u.addEventListener("load",d),u.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${
s}
`)))}
)}
)).then(()=>e()).catch(s=>{
const o=new Event("vite:preloadError",{
cancelable:!0}
);
if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s}
)}
;
function F_(t){
return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}
var B_={
exports:{
}
}
,Pd={
}
,U_={
exports:{
}
}
,be={
}
;
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ll=Symbol.for("react.element"),kT=Symbol.for("react.portal"),RT=Symbol.for("react.fragment"),NT=Symbol.for("react.strict_mode"),PT=Symbol.for("react.profiler"),DT=Symbol.for("react.provider"),OT=Symbol.for("react.context"),VT=Symbol.for("react.forward_ref"),MT=Symbol.for("react.suspense"),LT=Symbol.for("react.memo"),jT=Symbol.for("react.lazy"),w0=Symbol.iterator;
function FT(t){
return t===null||typeof t!="object"?null:(t=w0&&t[w0]||t["@@iterator"],typeof t=="function"?t:null)}
var $_={
isMounted:function(){
return!1}
,enqueueForceUpdate:function(){
}
,enqueueReplaceState:function(){
}
,enqueueSetState:function(){
}
}
,z_=Object.assign,q_={
}
;
function Ko(t,e,n){
this.props=t,this.context=e,this.refs=q_,this.updater=n||$_}
Ko.prototype.isReactComponent={
}
;
Ko.prototype.setState=function(t,e){
if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
this.updater.enqueueSetState(this,t,e,"setState")}
;
Ko.prototype.forceUpdate=function(t){
this.updater.enqueueForceUpdate(this,t,"forceUpdate")}
;
function G_(){
}
G_.prototype=Ko.prototype;
function cm(t,e,n){
this.props=t,this.context=e,this.refs=q_,this.updater=n||$_}
var um=cm.prototype=new G_;
um.constructor=cm;
z_(um,Ko.prototype);
um.isPureReactComponent=!0;
var x0=Array.isArray,W_=Object.prototype.hasOwnProperty,dm={
current:null}
,H_={
key:!0,ref:!0,__self:!0,__source:!0}
;
function K_(t,e,n){
var r,i={
}
,s=null,o=null;
if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)W_.call(e,r)&&!H_.hasOwnProperty(r)&&(i[r]=e[r]);
var l=arguments.length-2;
if(l===1)i.children=n;
else if(1<l){
for(var c=Array(l),u=0;
u<l;
u++)c[u]=arguments[u+2];
i.children=c}
if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);
return{
$$typeof:Ll,type:t,key:s,ref:o,props:i,_owner:dm.current}
}
function BT(t,e){
return{
$$typeof:Ll,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}
}
function hm(t){
return typeof t=="object"&&t!==null&&t.$$typeof===Ll}
function UT(t){
var e={
"=":"=0",":":"=2"}
;
return"$"+t.replace(/[=:]/g,function(n){
return e[n]}
)}
var b0=/\/+/g;
function Dh(t,e){
return typeof t=="object"&&t!==null&&t.key!=null?UT(""+t.key):e.toString(36)}
function pu(t,e,n,r,i){
var s=typeof t;
(s==="undefined"||s==="boolean")&&(t=null);
var o=!1;
if(t===null)o=!0;
else switch(s){
case"string":case"number":o=!0;
break;
case"object":switch(t.$$typeof){
case Ll:case kT:o=!0}
}
if(o)return o=t,i=i(o),t=r===""?"."+Dh(o,0):r,x0(i)?(n="",t!=null&&(n=t.replace(b0,"$&/")+"/"),pu(i,e,n,"",function(u){
return u}
)):i!=null&&(hm(i)&&(i=BT(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(b0,"$&/")+"/")+t)),e.push(i)),1;
if(o=0,r=r===""?".":r+":",x0(t))for(var l=0;
l<t.length;
l++){
s=t[l];
var c=r+Dh(s,l);
o+=pu(s,e,n,c,i)}
else if(c=FT(t),typeof c=="function")for(t=c.call(t),l=0;
!(s=t.next()).done;
)s=s.value,c=r+Dh(s,l++),o+=pu(s,e,n,c,i);
else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {
"+Object.keys(t).join(", ")+"}
":e)+"). If you meant to render a collection of children, use an array instead.");
return o}
function Mc(t,e,n){
if(t==null)return t;
var r=[],i=0;
return pu(t,r,"","",function(s){
return e.call(n,s,i++)}
),r}
function $T(t){
if(t._status===-1){
var e=t._result;
e=e(),e.then(function(n){
(t._status===0||t._status===-1)&&(t._status=1,t._result=n)}
,function(n){
(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}
),t._status===-1&&(t._status=0,t._result=e)}
if(t._status===1)return t._result.default;
throw t._result}
var on={
current:null}
,mu={
transition:null}
,zT={
ReactCurrentDispatcher:on,ReactCurrentBatchConfig:mu,ReactCurrentOwner:dm}
;
function Q_(){
throw Error("act(...) is not supported in production builds of React.")}
be.Children={
map:Mc,forEach:function(t,e,n){
Mc(t,function(){
e.apply(this,arguments)}
,n)}
,count:function(t){
var e=0;
return Mc(t,function(){
e++}
),e}
,toArray:function(t){
return Mc(t,function(e){
return e}
)||[]}
,only:function(t){
if(!hm(t))throw Error("React.Children.only expected to receive a single React element child.");
return t}
}
;
be.Component=Ko;
be.Fragment=RT;
be.Profiler=PT;
be.PureComponent=cm;
be.StrictMode=NT;
be.Suspense=MT;
be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zT;
be.act=Q_;
be.cloneElement=function(t,e,n){
if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");
var r=z_({
}
,t.props),i=t.key,s=t.ref,o=t._owner;
if(e!=null){
if(e.ref!==void 0&&(s=e.ref,o=dm.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;
for(c in e)W_.call(e,c)&&!H_.hasOwnProperty(c)&&(r[c]=e[c]===void 0&&l!==void 0?l[c]:e[c])}
var c=arguments.length-2;
if(c===1)r.children=n;
else if(1<c){
l=Array(c);
for(var u=0;
u<c;
u++)l[u]=arguments[u+2];
r.children=l}
return{
$$typeof:Ll,type:t.type,key:i,ref:s,props:r,_owner:o}
}
;
be.createContext=function(t){
return t={
$$typeof:OT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}
,t.Provider={
$$typeof:DT,_context:t}
,t.Consumer=t}
;
be.createElement=K_;
be.createFactory=function(t){
var e=K_.bind(null,t);
return e.type=t,e}
;
be.createRef=function(){
return{
current:null}
}
;
be.forwardRef=function(t){
return{
$$typeof:VT,render:t}
}
;
be.isValidElement=hm;
be.lazy=function(t){
return{
$$typeof:jT,_payload:{
_status:-1,_result:t}
,_init:$T}
}
;
be.memo=function(t,e){
return{
$$typeof:LT,type:t,compare:e===void 0?null:e}
}
;
be.startTransition=function(t){
var e=mu.transition;
mu.transition={
}
;
try{
t()}
finally{
mu.transition=e}
}
;
be.unstable_act=Q_;
be.useCallback=function(t,e){
return on.current.useCallback(t,e)}
;
be.useContext=function(t){
return on.current.useContext(t)}
;
be.useDebugValue=function(){
}
;
be.useDeferredValue=function(t){
return on.current.useDeferredValue(t)}
;
be.useEffect=function(t,e){
return on.current.useEffect(t,e)}
;
be.useId=function(){
return on.current.useId()}
;
be.useImperativeHandle=function(t,e,n){
return on.current.useImperativeHandle(t,e,n)}
;
be.useInsertionEffect=function(t,e){
return on.current.useInsertionEffect(t,e)}
;
be.useLayoutEffect=function(t,e){
return on.current.useLayoutEffect(t,e)}
;
be.useMemo=function(t,e){
return on.current.useMemo(t,e)}
;
be.useReducer=function(t,e,n){
return on.current.useReducer(t,e,n)}
;
be.useRef=function(t){
return on.current.useRef(t)}
;
be.useState=function(t){
return on.current.useState(t)}
;
be.useSyncExternalStore=function(t,e,n){
return on.current.useSyncExternalStore(t,e,n)}
;
be.useTransition=function(){
return on.current.useTransition()}
;
be.version="18.3.1";
U_.exports=be;
var B=U_.exports;
const dt=F_(B);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qT=B,GT=Symbol.for("react.element"),WT=Symbol.for("react.fragment"),HT=Object.prototype.hasOwnProperty,KT=qT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,QT={
key:!0,ref:!0,__self:!0,__source:!0}
;
function Y_(t,e,n){
var r,i={
}
,s=null,o=null;
n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);
for(r in e)HT.call(e,r)&&!QT.hasOwnProperty(r)&&(i[r]=e[r]);
if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);
return{
$$typeof:GT,type:t,key:s,ref:o,props:i,_owner:KT.current}
}
Pd.Fragment=WT;
Pd.jsx=Y_;
Pd.jsxs=Y_;
B_.exports=Pd;
var p=B_.exports,X_={
exports:{
}
}
,Sn={
}
,J_={
exports:{
}
}
,Z_={
}
;
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){
function e(J,ae){
var ue=J.length;
J.push(ae);
e:for(;
0<ue;
){
var Le=ue-1>>>1,pe=J[Le];
if(0<i(pe,ae))J[Le]=ae,J[ue]=pe,ue=Le;
else break e}
}
function n(J){
return J.length===0?null:J[0]}
function r(J){
if(J.length===0)return null;
var ae=J[0],ue=J.pop();
if(ue!==ae){
J[0]=ue;
e:for(var Le=0,pe=J.length,Ee=pe>>>1;
Le<Ee;
){
var kt=2*(Le+1)-1,Bt=J[kt],ht=kt+1,Ut=J[ht];
if(0>i(Bt,ue))ht<pe&&0>i(Ut,Bt)?(J[Le]=Ut,J[ht]=ue,Le=ht):(J[Le]=Bt,J[kt]=ue,Le=kt);
else if(ht<pe&&0>i(Ut,ue))J[Le]=Ut,J[ht]=ue,Le=ht;
else break e}
}
return ae}
function i(J,ae){
var ue=J.sortIndex-ae.sortIndex;
return ue!==0?ue:J.id-ae.id}
if(typeof performance=="object"&&typeof performance.now=="function"){
var s=performance;
t.unstable_now=function(){
return s.now()}
}
else{
var o=Date,l=o.now();
t.unstable_now=function(){
return o.now()-l}
}
var c=[],u=[],d=1,m=null,g=3,_=!1,w=!1,N=!1,O=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;
typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);
function k(J){
for(var ae=n(u);
ae!==null;
){
if(ae.callback===null)r(u);
else if(ae.startTime<=J)r(u),ae.sortIndex=ae.expirationTime,e(c,ae);
else break;
ae=n(u)}
}
function M(J){
if(N=!1,k(J),!w)if(n(c)!==null)w=!0,nr(G);
else{
var ae=n(u);
ae!==null&&Ft(M,ae.startTime-J)}
}
function G(J,ae){
w=!1,N&&(N=!1,I(b),b=-1),_=!0;
var ue=g;
try{
for(k(ae),m=n(c);
m!==null&&(!(m.expirationTime>ae)||J&&!V());
){
var Le=m.callback;
if(typeof Le=="function"){
m.callback=null,g=m.priorityLevel;
var pe=Le(m.expirationTime<=ae);
ae=t.unstable_now(),typeof pe=="function"?m.callback=pe:m===n(c)&&r(c),k(ae)}
else r(c);
m=n(c)}
if(m!==null)var Ee=!0;
else{
var kt=n(u);
kt!==null&&Ft(M,kt.startTime-ae),Ee=!1}
return Ee}
finally{
m=null,g=ue,_=!1}
}
var q=!1,S=null,b=-1,A=5,C=-1;
function V(){
return!(t.unstable_now()-C<A)}
function L(){
if(S!==null){
var J=t.unstable_now();
C=J;
var ae=!0;
try{
ae=S(!0,J)}
finally{
ae?R():(q=!1,S=null)}
}
else q=!1}
var R;
if(typeof E=="function")R=function(){
E(L)}
;
else if(typeof MessageChannel<"u"){
var We=new MessageChannel,lt=We.port2;
We.port1.onmessage=L,R=function(){
lt.postMessage(null)}
}
else R=function(){
O(L,0)}
;
function nr(J){
S=J,q||(q=!0,R())}
function Ft(J,ae){
b=O(function(){
J(t.unstable_now())}
,ae)}
t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(J){
J.callback=null}
,t.unstable_continueExecution=function(){
w||_||(w=!0,nr(G))}
,t.unstable_forceFrameRate=function(J){
0>J||125<J?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<J?Math.floor(1e3/J):5}
,t.unstable_getCurrentPriorityLevel=function(){
return g}
,t.unstable_getFirstCallbackNode=function(){
return n(c)}
,t.unstable_next=function(J){
switch(g){
case 1:case 2:case 3:var ae=3;
break;
default:ae=g}
var ue=g;
g=ae;
try{
return J()}
finally{
g=ue}
}
,t.unstable_pauseExecution=function(){
}
,t.unstable_requestPaint=function(){
}
,t.unstable_runWithPriority=function(J,ae){
switch(J){
case 1:case 2:case 3:case 4:case 5:break;
default:J=3}
var ue=g;
g=J;
try{
return ae()}
finally{
g=ue}
}
,t.unstable_scheduleCallback=function(J,ae,ue){
var Le=t.unstable_now();
switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?Le+ue:Le):ue=Le,J){
case 1:var pe=-1;
break;
case 2:pe=250;
break;
case 5:pe=1073741823;
break;
case 4:pe=1e4;
break;
default:pe=5e3}
return pe=ue+pe,J={
id:d++,callback:ae,priorityLevel:J,startTime:ue,expirationTime:pe,sortIndex:-1}
,ue>Le?(J.sortIndex=ue,e(u,J),n(c)===null&&J===n(u)&&(N?(I(b),b=-1):N=!0,Ft(M,ue-Le))):(J.sortIndex=pe,e(c,J),w||_||(w=!0,nr(G))),J}
,t.unstable_shouldYield=V,t.unstable_wrapCallback=function(J){
var ae=g;
return function(){
var ue=g;
g=ae;
try{
return J.apply(this,arguments)}
finally{
g=ue}
}
}
}
)(Z_);
J_.exports=Z_;
var YT=J_.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var XT=B,In=YT;
function Y(t){
for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;
n<arguments.length;
n++)e+="&args[]="+encodeURIComponent(arguments[n]);
return"Minified React error #"+t+";
 visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var ew=new Set,sl={
}
;
function Vs(t,e){
ko(t,e),ko(t+"Capture",e)}
function ko(t,e){
for(sl[t]=e,t=0;
t<e.length;
t++)ew.add(e[t])}
var Ur=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Lf=Object.prototype.hasOwnProperty,JT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E0={
}
,T0={
}
;
function ZT(t){
return Lf.call(T0,t)?!0:Lf.call(E0,t)?!1:JT.test(t)?T0[t]=!0:(E0[t]=!0,!1)}
function eI(t,e,n,r){
if(n!==null&&n.type===0)return!1;
switch(typeof e){
case"function":case"symbol":return!0;
case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");
default:return!1}
}
function tI(t,e,n,r){
if(e===null||typeof e>"u"||eI(t,e,n,r))return!0;
if(r)return!1;
if(n!==null)switch(n.type){
case 3:return!e;
case 4:return e===!1;
case 5:return isNaN(e);
case 6:return isNaN(e)||1>e}
return!1}
function an(t,e,n,r,i,s,o){
this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}
var Lt={
}
;
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){
Lt[t]=new an(t,0,!1,t,null,!1,!1)}
);
[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){
var e=t[0];
Lt[e]=new an(e,1,!1,t[1],null,!1,!1)}
);
["contentEditable","draggable","spellCheck","value"].forEach(function(t){
Lt[t]=new an(t,2,!1,t.toLowerCase(),null,!1,!1)}
);
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){
Lt[t]=new an(t,2,!1,t,null,!1,!1)}
);
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){
Lt[t]=new an(t,3,!1,t.toLowerCase(),null,!1,!1)}
);
["checked","multiple","muted","selected"].forEach(function(t){
Lt[t]=new an(t,3,!0,t,null,!1,!1)}
);
["capture","download"].forEach(function(t){
Lt[t]=new an(t,4,!1,t,null,!1,!1)}
);
["cols","rows","size","span"].forEach(function(t){
Lt[t]=new an(t,6,!1,t,null,!1,!1)}
);
["rowSpan","start"].forEach(function(t){
Lt[t]=new an(t,5,!1,t.toLowerCase(),null,!1,!1)}
);
var fm=/[\-:]([a-z])/g;
function pm(t){
return t[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){
var e=t.replace(fm,pm);
Lt[e]=new an(e,1,!1,t,null,!1,!1)}
);
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){
var e=t.replace(fm,pm);
Lt[e]=new an(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}
);
["xml:base","xml:lang","xml:space"].forEach(function(t){
var e=t.replace(fm,pm);
Lt[e]=new an(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}
);
["tabIndex","crossOrigin"].forEach(function(t){
Lt[t]=new an(t,1,!1,t.toLowerCase(),null,!1,!1)}
);
Lt.xlinkHref=new an("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src","href","action","formAction"].forEach(function(t){
Lt[t]=new an(t,1,!1,t.toLowerCase(),null,!0,!0)}
);
function mm(t,e,n,r){
var i=Lt.hasOwnProperty(e)?Lt[e]:null;
(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(tI(e,n,i,r)&&(n=null),r||i===null?ZT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}
var Xr=XT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Lc=Symbol.for("react.element"),so=Symbol.for("react.portal"),oo=Symbol.for("react.fragment"),gm=Symbol.for("react.strict_mode"),jf=Symbol.for("react.profiler"),tw=Symbol.for("react.provider"),nw=Symbol.for("react.context"),ym=Symbol.for("react.forward_ref"),Ff=Symbol.for("react.suspense"),Bf=Symbol.for("react.suspense_list"),vm=Symbol.for("react.memo"),fi=Symbol.for("react.lazy"),rw=Symbol.for("react.offscreen"),I0=Symbol.iterator;
function Ea(t){
return t===null||typeof t!="object"?null:(t=I0&&t[I0]||t["@@iterator"],typeof t=="function"?t:null)}
var st=Object.assign,Oh;
function Va(t){
if(Oh===void 0)try{
throw Error()}
catch(n){
var e=n.stack.trim().match(/\n( *(at )?)/);
Oh=e&&e[1]||""}
return`
`+Oh+t}
var Vh=!1;
function Mh(t,e){
if(!t||Vh)return"";
Vh=!0;
var n=Error.prepareStackTrace;
Error.prepareStackTrace=void 0;
try{
if(e)if(e=function(){
throw Error()}
,Object.defineProperty(e.prototype,"props",{
set:function(){
throw Error()}
}
),typeof Reflect=="object"&&Reflect.construct){
try{
Reflect.construct(e,[])}
catch(u){
var r=u}
Reflect.construct(t,[],e)}
else{
try{
e.call()}
catch(u){
r=u}
t.call(e.prototype)}
else{
try{
throw Error()}
catch(u){
r=u}
t()}
}
catch(u){
if(u&&r&&typeof u.stack=="string"){
for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;
1<=o&&0<=l&&i[o]!==s[l];
)l--;
for(;
1<=o&&0<=l;
o--,l--)if(i[o]!==s[l]){
if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){
var c=`
`+i[o].replace(" at new "," at ");
return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}
while(1<=o&&0<=l);
break}
}
}
finally{
Vh=!1,Error.prepareStackTrace=n}
return(t=t?t.displayName||t.name:"")?Va(t):""}
function nI(t){
switch(t.tag){
case 5:return Va(t.type);
case 16:return Va("Lazy");
case 13:return Va("Suspense");
case 19:return Va("SuspenseList");
case 0:case 2:case 15:return t=Mh(t.type,!1),t;
case 11:return t=Mh(t.type.render,!1),t;
case 1:return t=Mh(t.type,!0),t;
default:return""}
}
function Uf(t){
if(t==null)return null;
if(typeof t=="function")return t.displayName||t.name||null;
if(typeof t=="string")return t;
switch(t){
case oo:return"Fragment";
case so:return"Portal";
case jf:return"Profiler";
case gm:return"StrictMode";
case Ff:return"Suspense";
case Bf:return"SuspenseList"}
if(typeof t=="object")switch(t.$$typeof){
case nw:return(t.displayName||"Context")+".Consumer";
case tw:return(t._context.displayName||"Context")+".Provider";
case ym:var e=t.render;
return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;
case vm:return e=t.displayName||null,e!==null?e:Uf(t.type)||"Memo";
case fi:e=t._payload,t=t._init;
try{
return Uf(t(e))}
catch{
}
}
return null}
function rI(t){
var e=t.type;
switch(t.tag){
case 24:return"Cache";
case 9:return(e.displayName||"Context")+".Consumer";
case 10:return(e._context.displayName||"Context")+".Provider";
case 18:return"DehydratedFragment";
case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");
case 7:return"Fragment";
case 5:return e;
case 4:return"Portal";
case 3:return"Root";
case 6:return"Text";
case 16:return Uf(e);
case 8:return e===gm?"StrictMode":"Mode";
case 22:return"Offscreen";
case 12:return"Profiler";
case 21:return"Scope";
case 13:return"Suspense";
case 19:return"SuspenseList";
case 25:return"TracingMarker";
case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;
if(typeof e=="string")return e}
return null}
function Bi(t){
switch(typeof t){
case"boolean":case"number":case"string":case"undefined":return t;
case"object":return t;
default:return""}
}
function iw(t){
var e=t.type;
return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}
function iI(t){
var e=iw(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];
if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){
var i=n.get,s=n.set;
return Object.defineProperty(t,e,{
configurable:!0,get:function(){
return i.call(this)}
,set:function(o){
r=""+o,s.call(this,o)}
}
),Object.defineProperty(t,e,{
enumerable:n.enumerable}
),{
getValue:function(){
return r}
,setValue:function(o){
r=""+o}
,stopTracking:function(){
t._valueTracker=null,delete t[e]}
}
}
}
function jc(t){
t._valueTracker||(t._valueTracker=iI(t))}
function sw(t){
if(!t)return!1;
var e=t._valueTracker;
if(!e)return!0;
var n=e.getValue(),r="";
return t&&(r=iw(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}
function Mu(t){
if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;
try{
return t.activeElement||t.body}
catch{
return t.body}
}
function $f(t,e){
var n=e.checked;
return st({
}
,e,{
defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked}
)}
function S0(t,e){
var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;
n=Bi(e.value!=null?e.value:n),t._wrapperState={
initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}
}
function ow(t,e){
e=e.checked,e!=null&&mm(t,"checked",e,!1)}
function zf(t,e){
ow(t,e);
var n=Bi(e.value),r=e.type;
if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);
else if(r==="submit"||r==="reset"){
t.removeAttribute("value");
return}
e.hasOwnProperty("value")?qf(t,e.type,n):e.hasOwnProperty("defaultValue")&&qf(t,e.type,Bi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}
function A0(t,e,n){
if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){
var r=e.type;
if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;
e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}
n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}
function qf(t,e,n){
(e!=="number"||Mu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}
var Ma=Array.isArray;
function _o(t,e,n,r){
if(t=t.options,e){
e={
}
;
for(var i=0;
i<n.length;
i++)e["$"+n[i]]=!0;
for(n=0;
n<t.length;
n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}
else{
for(n=""+Bi(n),e=null,i=0;
i<t.length;
i++){
if(t[i].value===n){
t[i].selected=!0,r&&(t[i].defaultSelected=!0);
return}
e!==null||t[i].disabled||(e=t[i])}
e!==null&&(e.selected=!0)}
}
function Gf(t,e){
if(e.dangerouslySetInnerHTML!=null)throw Error(Y(91));
return st({
}
,e,{
value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue}
)}
function C0(t,e){
var n=e.value;
if(n==null){
if(n=e.children,e=e.defaultValue,n!=null){
if(e!=null)throw Error(Y(92));
if(Ma(n)){
if(1<n.length)throw Error(Y(93));
n=n[0]}
e=n}
e==null&&(e=""),n=e}
t._wrapperState={
initialValue:Bi(n)}
}
function aw(t,e){
var n=Bi(e.value),r=Bi(e.defaultValue);
n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}
function k0(t){
var e=t.textContent;
e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}
function lw(t){
switch(t){
case"svg":return"http://www.w3.org/2000/svg";
case"math":return"http://www.w3.org/1998/Math/MathML";
default:return"http://www.w3.org/1999/xhtml"}
}
function Wf(t,e){
return t==null||t==="http://www.w3.org/1999/xhtml"?lw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}
var Fc,cw=function(t){
return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){
MSApp.execUnsafeLocalFunction(function(){
return t(e,n,r,i)}
)}
:t}
(function(t,e){
if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;
else{
for(Fc=Fc||document.createElement("div"),Fc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Fc.firstChild;
t.firstChild;
)t.removeChild(t.firstChild);
for(;
e.firstChild;
)t.appendChild(e.firstChild)}
}
);
function ol(t,e){
if(e){
var n=t.firstChild;
if(n&&n===t.lastChild&&n.nodeType===3){
n.nodeValue=e;
return}
}
t.textContent=e}
var za={
animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0}
,sI=["Webkit","ms","Moz","O"];
Object.keys(za).forEach(function(t){
sI.forEach(function(e){
e=e+t.charAt(0).toUpperCase()+t.substring(1),za[e]=za[t]}
)}
);
function uw(t,e,n){
return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||za.hasOwnProperty(t)&&za[t]?(""+e).trim():e+"px"}
function dw(t,e){
t=t.style;
for(var n in e)if(e.hasOwnProperty(n)){
var r=n.indexOf("--")===0,i=uw(n,e[n],r);
n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}
}
var oI=st({
menuitem:!0}
,{
area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}
);
function Hf(t,e){
if(e){
if(oI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Y(137,t));
if(e.dangerouslySetInnerHTML!=null){
if(e.children!=null)throw Error(Y(60));
if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Y(61))}
if(e.style!=null&&typeof e.style!="object")throw Error(Y(62))}
}
function Kf(t,e){
if(t.indexOf("-")===-1)return typeof e.is=="string";
switch(t){
case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;
default:return!0}
}
var Qf=null;
function _m(t){
return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}
var Yf=null,wo=null,xo=null;
function R0(t){
if(t=Bl(t)){
if(typeof Yf!="function")throw Error(Y(280));
var e=t.stateNode;
e&&(e=Ld(e),Yf(t.stateNode,t.type,e))}
}
function hw(t){
wo?xo?xo.push(t):xo=[t]:wo=t}
function fw(){
if(wo){
var t=wo,e=xo;
if(xo=wo=null,R0(t),e)for(t=0;
t<e.length;
t++)R0(e[t])}
}
function pw(t,e){
return t(e)}
function mw(){
}
var Lh=!1;
function gw(t,e,n){
if(Lh)return t(e,n);
Lh=!0;
try{
return pw(t,e,n)}
finally{
Lh=!1,(wo!==null||xo!==null)&&(mw(),fw())}
}
function al(t,e){
var n=t.stateNode;
if(n===null)return null;
var r=Ld(n);
if(r===null)return null;
n=r[e];
e:switch(e){
case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;
break e;
default:t=!1}
if(t)return null;
if(n&&typeof n!="function")throw Error(Y(231,e,typeof n));
return n}
var Xf=!1;
if(Ur)try{
var Ta={
}
;
Object.defineProperty(Ta,"passive",{
get:function(){
Xf=!0}
}
),window.addEventListener("test",Ta,Ta),window.removeEventListener("test",Ta,Ta)}
catch{
Xf=!1}
function aI(t,e,n,r,i,s,o,l,c){
var u=Array.prototype.slice.call(arguments,3);
try{
e.apply(n,u)}
catch(d){
this.onError(d)}
}
var qa=!1,Lu=null,ju=!1,Jf=null,lI={
onError:function(t){
qa=!0,Lu=t}
}
;
function cI(t,e,n,r,i,s,o,l,c){
qa=!1,Lu=null,aI.apply(lI,arguments)}
function uI(t,e,n,r,i,s,o,l,c){
if(cI.apply(this,arguments),qa){
if(qa){
var u=Lu;
qa=!1,Lu=null}
else throw Error(Y(198));
ju||(ju=!0,Jf=u)}
}
function Ms(t){
var e=t,n=t;
if(t.alternate)for(;
e.return;
)e=e.return;
else{
t=e;
do e=t,e.flags&4098&&(n=e.return),t=e.return;
while(t)}
return e.tag===3?n:null}
function yw(t){
if(t.tag===13){
var e=t.memoizedState;
if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}
return null}
function N0(t){
if(Ms(t)!==t)throw Error(Y(188))}
function dI(t){
var e=t.alternate;
if(!e){
if(e=Ms(t),e===null)throw Error(Y(188));
return e!==t?null:t}
for(var n=t,r=e;
;
){
var i=n.return;
if(i===null)break;
var s=i.alternate;
if(s===null){
if(r=i.return,r!==null){
n=r;
continue}
break}
if(i.child===s.child){
for(s=i.child;
s;
){
if(s===n)return N0(i),t;
if(s===r)return N0(i),e;
s=s.sibling}
throw Error(Y(188))}
if(n.return!==r.return)n=i,r=s;
else{
for(var o=!1,l=i.child;
l;
){
if(l===n){
o=!0,n=i,r=s;
break}
if(l===r){
o=!0,r=i,n=s;
break}
l=l.sibling}
if(!o){
for(l=s.child;
l;
){
if(l===n){
o=!0,n=s,r=i;
break}
if(l===r){
o=!0,r=s,n=i;
break}
l=l.sibling}
if(!o)throw Error(Y(189))}
}
if(n.alternate!==r)throw Error(Y(190))}
if(n.tag!==3)throw Error(Y(188));
return n.stateNode.current===n?t:e}
function vw(t){
return t=dI(t),t!==null?_w(t):null}
function _w(t){
if(t.tag===5||t.tag===6)return t;
for(t=t.child;
t!==null;
){
var e=_w(t);
if(e!==null)return e;
t=t.sibling}
return null}
var ww=In.unstable_scheduleCallback,P0=In.unstable_cancelCallback,hI=In.unstable_shouldYield,fI=In.unstable_requestPaint,ut=In.unstable_now,pI=In.unstable_getCurrentPriorityLevel,wm=In.unstable_ImmediatePriority,xw=In.unstable_UserBlockingPriority,Fu=In.unstable_NormalPriority,mI=In.unstable_LowPriority,bw=In.unstable_IdlePriority,Dd=null,pr=null;
function gI(t){
if(pr&&typeof pr.onCommitFiberRoot=="function")try{
pr.onCommitFiberRoot(Dd,t,void 0,(t.current.flags&128)===128)}
catch{
}
}
var Jn=Math.clz32?Math.clz32:_I,yI=Math.log,vI=Math.LN2;
function _I(t){
return t>>>=0,t===0?32:31-(yI(t)/vI|0)|0}
var Bc=64,Uc=4194304;
function La(t){
switch(t&-t){
case 1:return 1;
case 2:return 2;
case 4:return 4;
case 8:return 8;
case 16:return 16;
case 32:return 32;
case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;
case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;
case 134217728:return 134217728;
case 268435456:return 268435456;
case 536870912:return 536870912;
case 1073741824:return 1073741824;
default:return t}
}
function Bu(t,e){
var n=t.pendingLanes;
if(n===0)return 0;
var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;
if(o!==0){
var l=o&~i;
l!==0?r=La(l):(s&=o,s!==0&&(r=La(s)))}
else o=n&~i,o!==0?r=La(o):s!==0&&(r=La(s));
if(r===0)return 0;
if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;
if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;
0<e;
)n=31-Jn(e),i=1<<n,r|=t[n],e&=~i;
return r}
function wI(t,e){
switch(t){
case 1:case 2:case 4:return e+250;
case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;
case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;
case 134217728:case 268435456:case 536870912:case 1073741824:return-1;
default:return-1}
}
function xI(t,e){
for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;
0<s;
){
var o=31-Jn(s),l=1<<o,c=i[o];
c===-1?(!(l&n)||l&r)&&(i[o]=wI(l,e)):c<=e&&(t.expiredLanes|=l),s&=~l}
}
function Zf(t){
return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}
function Ew(){
var t=Bc;
return Bc<<=1,!(Bc&4194240)&&(Bc=64),t}
function jh(t){
for(var e=[],n=0;
31>n;
n++)e.push(t);
return e}
function jl(t,e,n){
t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Jn(e),t[e]=n}
function bI(t,e){
var n=t.pendingLanes&~e;
t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;
var r=t.eventTimes;
for(t=t.expirationTimes;
0<n;
){
var i=31-Jn(n),s=1<<i;
e[i]=0,r[i]=-1,t[i]=-1,n&=~s}
}
function xm(t,e){
var n=t.entangledLanes|=e;
for(t=t.entanglements;
n;
){
var r=31-Jn(n),i=1<<r;
i&e|t[r]&e&&(t[r]|=e),n&=~i}
}
var Be=0;
function Tw(t){
return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}
var Iw,bm,Sw,Aw,Cw,ep=!1,$c=[],Ti=null,Ii=null,Si=null,ll=new Map,cl=new Map,mi=[],EI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function D0(t,e){
switch(t){
case"focusin":case"focusout":Ti=null;
break;
case"dragenter":case"dragleave":Ii=null;
break;
case"mouseover":case"mouseout":Si=null;
break;
case"pointerover":case"pointerout":ll.delete(e.pointerId);
break;
case"gotpointercapture":case"lostpointercapture":cl.delete(e.pointerId)}
}
function Ia(t,e,n,r,i,s){
return t===null||t.nativeEvent!==s?(t={
blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]}
,e!==null&&(e=Bl(e),e!==null&&bm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}
function TI(t,e,n,r,i){
switch(e){
case"focusin":return Ti=Ia(Ti,t,e,n,r,i),!0;
case"dragenter":return Ii=Ia(Ii,t,e,n,r,i),!0;
case"mouseover":return Si=Ia(Si,t,e,n,r,i),!0;
case"pointerover":var s=i.pointerId;
return ll.set(s,Ia(ll.get(s)||null,t,e,n,r,i)),!0;
case"gotpointercapture":return s=i.pointerId,cl.set(s,Ia(cl.get(s)||null,t,e,n,r,i)),!0}
return!1}
function kw(t){
var e=ys(t.target);
if(e!==null){
var n=Ms(e);
if(n!==null){
if(e=n.tag,e===13){
if(e=yw(n),e!==null){
t.blockedOn=e,Cw(t.priority,function(){
Sw(n)}
);
return}
}
else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){
t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;
return}
}
}
t.blockedOn=null}
function gu(t){
if(t.blockedOn!==null)return!1;
for(var e=t.targetContainers;
0<e.length;
){
var n=tp(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);
if(n===null){
n=t.nativeEvent;
var r=new n.constructor(n.type,n);
Qf=r,n.target.dispatchEvent(r),Qf=null}
else return e=Bl(n),e!==null&&bm(e),t.blockedOn=n,!1;
e.shift()}
return!0}
function O0(t,e,n){
gu(t)&&n.delete(e)}
function II(){
ep=!1,Ti!==null&&gu(Ti)&&(Ti=null),Ii!==null&&gu(Ii)&&(Ii=null),Si!==null&&gu(Si)&&(Si=null),ll.forEach(O0),cl.forEach(O0)}
function Sa(t,e){
t.blockedOn===e&&(t.blockedOn=null,ep||(ep=!0,In.unstable_scheduleCallback(In.unstable_NormalPriority,II)))}
function ul(t){
function e(i){
return Sa(i,t)}
if(0<$c.length){
Sa($c[0],t);
for(var n=1;
n<$c.length;
n++){
var r=$c[n];
r.blockedOn===t&&(r.blockedOn=null)}
}
for(Ti!==null&&Sa(Ti,t),Ii!==null&&Sa(Ii,t),Si!==null&&Sa(Si,t),ll.forEach(e),cl.forEach(e),n=0;
n<mi.length;
n++)r=mi[n],r.blockedOn===t&&(r.blockedOn=null);
for(;
0<mi.length&&(n=mi[0],n.blockedOn===null);
)kw(n),n.blockedOn===null&&mi.shift()}
var bo=Xr.ReactCurrentBatchConfig,Uu=!0;
function SI(t,e,n,r){
var i=Be,s=bo.transition;
bo.transition=null;
try{
Be=1,Em(t,e,n,r)}
finally{
Be=i,bo.transition=s}
}
function AI(t,e,n,r){
var i=Be,s=bo.transition;
bo.transition=null;
try{
Be=4,Em(t,e,n,r)}
finally{
Be=i,bo.transition=s}
}
function Em(t,e,n,r){
if(Uu){
var i=tp(t,e,n,r);
if(i===null)Kh(t,e,r,$u,n),D0(t,r);
else if(TI(i,t,e,n,r))r.stopPropagation();
else if(D0(t,r),e&4&&-1<EI.indexOf(t)){
for(;
i!==null;
){
var s=Bl(i);
if(s!==null&&Iw(s),s=tp(t,e,n,r),s===null&&Kh(t,e,r,$u,n),s===i)break;
i=s}
i!==null&&r.stopPropagation()}
else Kh(t,e,r,null,n)}
}
var $u=null;
function tp(t,e,n,r){
if($u=null,t=_m(r),t=ys(t),t!==null)if(e=Ms(t),e===null)t=null;
else if(n=e.tag,n===13){
if(t=yw(e),t!==null)return t;
t=null}
else if(n===3){
if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;
t=null}
else e!==t&&(t=null);
return $u=t,null}
function Rw(t){
switch(t){
case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;
case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;
case"message":switch(pI()){
case wm:return 1;
case xw:return 4;
case Fu:case mI:return 16;
case bw:return 536870912;
default:return 16}
default:return 16}
}
var xi=null,Tm=null,yu=null;
function Nw(){
if(yu)return yu;
var t,e=Tm,n=e.length,r,i="value"in xi?xi.value:xi.textContent,s=i.length;
for(t=0;
t<n&&e[t]===i[t];
t++);
var o=n-t;
for(r=1;
r<=o&&e[n-r]===i[s-r];
r++);
return yu=i.slice(t,1<r?1-r:void 0)}
function vu(t){
var e=t.keyCode;
return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}
function zc(){
return!0}
function V0(){
return!1}
function An(t){
function e(n,r,i,s,o){
this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;
for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);
return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?zc:V0,this.isPropagationStopped=V0,this}
return st(e.prototype,{
preventDefault:function(){
this.defaultPrevented=!0;
var n=this.nativeEvent;
n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=zc)}
,stopPropagation:function(){
var n=this.nativeEvent;
n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=zc)}
,persist:function(){
}
,isPersistent:zc}
),e}
var Qo={
eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){
return t.timeStamp||Date.now()}
,defaultPrevented:0,isTrusted:0}
,Im=An(Qo),Fl=st({
}
,Qo,{
view:0,detail:0}
),CI=An(Fl),Fh,Bh,Aa,Od=st({
}
,Fl,{
screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sm,button:0,buttons:0,relatedTarget:function(t){
return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget}
,movementX:function(t){
return"movementX"in t?t.movementX:(t!==Aa&&(Aa&&t.type==="mousemove"?(Fh=t.screenX-Aa.screenX,Bh=t.screenY-Aa.screenY):Bh=Fh=0,Aa=t),Fh)}
,movementY:function(t){
return"movementY"in t?t.movementY:Bh}
}
),M0=An(Od),kI=st({
}
,Od,{
dataTransfer:0}
),RI=An(kI),NI=st({
}
,Fl,{
relatedTarget:0}
),Uh=An(NI),PI=st({
}
,Qo,{
animationName:0,elapsedTime:0,pseudoElement:0}
),DI=An(PI),OI=st({
}
,Qo,{
clipboardData:function(t){
return"clipboardData"in t?t.clipboardData:window.clipboardData}
}
),VI=An(OI),MI=st({
}
,Qo,{
data:0}
),L0=An(MI),LI={
Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"}
,jI={
8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"}
,FI={
Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"}
;
function BI(t){
var e=this.nativeEvent;
return e.getModifierState?e.getModifierState(t):(t=FI[t])?!!e[t]:!1}
function Sm(){
return BI}
var UI=st({
}
,Fl,{
key:function(t){
if(t.key){
var e=LI[t.key]||t.key;
if(e!=="Unidentified")return e}
return t.type==="keypress"?(t=vu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?jI[t.keyCode]||"Unidentified":""}
,code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sm,charCode:function(t){
return t.type==="keypress"?vu(t):0}
,keyCode:function(t){
return t.type==="keydown"||t.type==="keyup"?t.keyCode:0}
,which:function(t){
return t.type==="keypress"?vu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}
}
),$I=An(UI),zI=st({
}
,Od,{
pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}
),j0=An(zI),qI=st({
}
,Fl,{
touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sm}
),GI=An(qI),WI=st({
}
,Qo,{
propertyName:0,elapsedTime:0,pseudoElement:0}
),HI=An(WI),KI=st({
}
,Od,{
deltaX:function(t){
return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0}
,deltaY:function(t){
return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0}
,deltaZ:0,deltaMode:0}
),QI=An(KI),YI=[9,13,27,32],Am=Ur&&"CompositionEvent"in window,Ga=null;
Ur&&"documentMode"in document&&(Ga=document.documentMode);
var XI=Ur&&"TextEvent"in window&&!Ga,Pw=Ur&&(!Am||Ga&&8<Ga&&11>=Ga),F0=String.fromCharCode(32),B0=!1;
function Dw(t,e){
switch(t){
case"keyup":return YI.indexOf(e.keyCode)!==-1;
case"keydown":return e.keyCode!==229;
case"keypress":case"mousedown":case"focusout":return!0;
default:return!1}
}
function Ow(t){
return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}
var ao=!1;
function JI(t,e){
switch(t){
case"compositionend":return Ow(e);
case"keypress":return e.which!==32?null:(B0=!0,F0);
case"textInput":return t=e.data,t===F0&&B0?null:t;
default:return null}
}
function ZI(t,e){
if(ao)return t==="compositionend"||!Am&&Dw(t,e)?(t=Nw(),yu=Tm=xi=null,ao=!1,t):null;
switch(t){
case"paste":return null;
case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){
if(e.char&&1<e.char.length)return e.char;
if(e.which)return String.fromCharCode(e.which)}
return null;
case"compositionend":return Pw&&e.locale!=="ko"?null:e.data;
default:return null}
}
var eS={
color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0}
;
function U0(t){
var e=t&&t.nodeName&&t.nodeName.toLowerCase();
return e==="input"?!!eS[t.type]:e==="textarea"}
function Vw(t,e,n,r){
hw(r),e=zu(e,"onChange"),0<e.length&&(n=new Im("onChange","change",null,n,r),t.push({
event:n,listeners:e}
))}
var Wa=null,dl=null;
function tS(t){
Ww(t,0)}
function Vd(t){
var e=uo(t);
if(sw(e))return t}
function nS(t,e){
if(t==="change")return e}
var Mw=!1;
if(Ur){
var $h;
if(Ur){
var zh="oninput"in document;
if(!zh){
var $0=document.createElement("div");
$0.setAttribute("oninput","return;
"),zh=typeof $0.oninput=="function"}
$h=zh}
else $h=!1;
Mw=$h&&(!document.documentMode||9<document.documentMode)}
function z0(){
Wa&&(Wa.detachEvent("onpropertychange",Lw),dl=Wa=null)}
function Lw(t){
if(t.propertyName==="value"&&Vd(dl)){
var e=[];
Vw(e,dl,t,_m(t)),gw(tS,e)}
}
function rS(t,e,n){
t==="focusin"?(z0(),Wa=e,dl=n,Wa.attachEvent("onpropertychange",Lw)):t==="focusout"&&z0()}
function iS(t){
if(t==="selectionchange"||t==="keyup"||t==="keydown")return Vd(dl)}
function sS(t,e){
if(t==="click")return Vd(e)}
function oS(t,e){
if(t==="input"||t==="change")return Vd(e)}
function aS(t,e){
return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}
var er=typeof Object.is=="function"?Object.is:aS;
function hl(t,e){
if(er(t,e))return!0;
if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;
var n=Object.keys(t),r=Object.keys(e);
if(n.length!==r.length)return!1;
for(r=0;
r<n.length;
r++){
var i=n[r];
if(!Lf.call(e,i)||!er(t[i],e[i]))return!1}
return!0}
function q0(t){
for(;
t&&t.firstChild;
)t=t.firstChild;
return t}
function G0(t,e){
var n=q0(t);
t=0;
for(var r;
n;
){
if(n.nodeType===3){
if(r=t+n.textContent.length,t<=e&&r>=e)return{
node:n,offset:e-t}
;
t=r}
e:{
for(;
n;
){
if(n.nextSibling){
n=n.nextSibling;
break e}
n=n.parentNode}
n=void 0}
n=q0(n)}
}
function jw(t,e){
return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?jw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}
function Fw(){
for(var t=window,e=Mu();
e instanceof t.HTMLIFrameElement;
){
try{
var n=typeof e.contentWindow.location.href=="string"}
catch{
n=!1}
if(n)t=e.contentWindow;
else break;
e=Mu(t.document)}
return e}
function Cm(t){
var e=t&&t.nodeName&&t.nodeName.toLowerCase();
return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}
function lS(t){
var e=Fw(),n=t.focusedElem,r=t.selectionRange;
if(e!==n&&n&&n.ownerDocument&&jw(n.ownerDocument.documentElement,n)){
if(r!==null&&Cm(n)){
if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);
else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){
t=t.getSelection();
var i=n.textContent.length,s=Math.min(r.start,i);
r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=G0(n,s);
var o=G0(n,r);
i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}
}
for(e=[],t=n;
t=t.parentNode;
)t.nodeType===1&&e.push({
element:t,left:t.scrollLeft,top:t.scrollTop}
);
for(typeof n.focus=="function"&&n.focus(),n=0;
n<e.length;
n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}
}
var cS=Ur&&"documentMode"in document&&11>=document.documentMode,lo=null,np=null,Ha=null,rp=!1;
function W0(t,e,n){
var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;
rp||lo==null||lo!==Mu(r)||(r=lo,"selectionStart"in r&&Cm(r)?r={
start:r.selectionStart,end:r.selectionEnd}
:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={
anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}
),Ha&&hl(Ha,r)||(Ha=r,r=zu(np,"onSelect"),0<r.length&&(e=new Im("onSelect","select",null,e,n),t.push({
event:e,listeners:r}
),e.target=lo)))}
function qc(t,e){
var n={
}
;
return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}
var co={
animationend:qc("Animation","AnimationEnd"),animationiteration:qc("Animation","AnimationIteration"),animationstart:qc("Animation","AnimationStart"),transitionend:qc("Transition","TransitionEnd")}
,qh={
}
,Bw={
}
;
Ur&&(Bw=document.createElement("div").style,"AnimationEvent"in window||(delete co.animationend.animation,delete co.animationiteration.animation,delete co.animationstart.animation),"TransitionEvent"in window||delete co.transitionend.transition);
function Md(t){
if(qh[t])return qh[t];
if(!co[t])return t;
var e=co[t],n;
for(n in e)if(e.hasOwnProperty(n)&&n in Bw)return qh[t]=e[n];
return t}
var Uw=Md("animationend"),$w=Md("animationiteration"),zw=Md("animationstart"),qw=Md("transitionend"),Gw=new Map,H0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Hi(t,e){
Gw.set(t,e),Vs(e,[t])}
for(var Gh=0;
Gh<H0.length;
Gh++){
var Wh=H0[Gh],uS=Wh.toLowerCase(),dS=Wh[0].toUpperCase()+Wh.slice(1);
Hi(uS,"on"+dS)}
Hi(Uw,"onAnimationEnd");
Hi($w,"onAnimationIteration");
Hi(zw,"onAnimationStart");
Hi("dblclick","onDoubleClick");
Hi("focusin","onFocus");
Hi("focusout","onBlur");
Hi(qw,"onTransitionEnd");
ko("onMouseEnter",["mouseout","mouseover"]);
ko("onMouseLeave",["mouseout","mouseover"]);
ko("onPointerEnter",["pointerout","pointerover"]);
ko("onPointerLeave",["pointerout","pointerover"]);
Vs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));
Vs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Vs("onBeforeInput",["compositionend","keypress","textInput","paste"]);
Vs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));
Vs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));
Vs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var ja="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hS=new Set("cancel close invalid load scroll toggle".split(" ").concat(ja));
function K0(t,e,n){
var r=t.type||"unknown-event";
t.currentTarget=n,uI(r,e,void 0,t),t.currentTarget=null}
function Ww(t,e){
e=(e&4)!==0;
for(var n=0;
n<t.length;
n++){
var r=t[n],i=r.event;
r=r.listeners;
e:{
var s=void 0;
if(e)for(var o=r.length-1;
0<=o;
o--){
var l=r[o],c=l.instance,u=l.currentTarget;
if(l=l.listener,c!==s&&i.isPropagationStopped())break e;
K0(i,l,u),s=c}
else for(o=0;
o<r.length;
o++){
if(l=r[o],c=l.instance,u=l.currentTarget,l=l.listener,c!==s&&i.isPropagationStopped())break e;
K0(i,l,u),s=c}
}
}
if(ju)throw t=Jf,ju=!1,Jf=null,t}
function Qe(t,e){
var n=e[lp];
n===void 0&&(n=e[lp]=new Set);
var r=t+"__bubble";
n.has(r)||(Hw(e,t,2,!1),n.add(r))}
function Hh(t,e,n){
var r=0;
e&&(r|=4),Hw(n,t,r,e)}
var Gc="_reactListening"+Math.random().toString(36).slice(2);
function fl(t){
if(!t[Gc]){
t[Gc]=!0,ew.forEach(function(n){
n!=="selectionchange"&&(hS.has(n)||Hh(n,!1,t),Hh(n,!0,t))}
);
var e=t.nodeType===9?t:t.ownerDocument;
e===null||e[Gc]||(e[Gc]=!0,Hh("selectionchange",!1,e))}
}
function Hw(t,e,n,r){
switch(Rw(e)){
case 1:var i=SI;
break;
case 4:i=AI;
break;
default:i=Em}
n=i.bind(null,e,n,t),i=void 0,!Xf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{
capture:!0,passive:i}
):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{
passive:i}
):t.addEventListener(e,n,!1)}
function Kh(t,e,n,r,i){
var s=r;
if(!(e&1)&&!(e&2)&&r!==null)e:for(;
;
){
if(r===null)return;
var o=r.tag;
if(o===3||o===4){
var l=r.stateNode.containerInfo;
if(l===i||l.nodeType===8&&l.parentNode===i)break;
if(o===4)for(o=r.return;
o!==null;
){
var c=o.tag;
if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;
o=o.return}
for(;
l!==null;
){
if(o=ys(l),o===null)return;
if(c=o.tag,c===5||c===6){
r=s=o;
continue e}
l=l.parentNode}
}
r=r.return}
gw(function(){
var u=s,d=_m(n),m=[];
e:{
var g=Gw.get(t);
if(g!==void 0){
var _=Im,w=t;
switch(t){
case"keypress":if(vu(n)===0)break e;
case"keydown":case"keyup":_=$I;
break;
case"focusin":w="focus",_=Uh;
break;
case"focusout":w="blur",_=Uh;
break;
case"beforeblur":case"afterblur":_=Uh;
break;
case"click":if(n.button===2)break e;
case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=M0;
break;
case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=RI;
break;
case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=GI;
break;
case Uw:case $w:case zw:_=DI;
break;
case qw:_=HI;
break;
case"scroll":_=CI;
break;
case"wheel":_=QI;
break;
case"copy":case"cut":case"paste":_=VI;
break;
case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=j0}
var N=(e&4)!==0,O=!N&&t==="scroll",I=N?g!==null?g+"Capture":null:g;
N=[];
for(var E=u,k;
E!==null;
){
k=E;
var M=k.stateNode;
if(k.tag===5&&M!==null&&(k=M,I!==null&&(M=al(E,I),M!=null&&N.push(pl(E,M,k)))),O)break;
E=E.return}
0<N.length&&(g=new _(g,w,null,n,d),m.push({
event:g,listeners:N}
))}
}
if(!(e&7)){
e:{
if(g=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",g&&n!==Qf&&(w=n.relatedTarget||n.fromElement)&&(ys(w)||w[$r]))break e;
if((_||g)&&(g=d.window===d?d:(g=d.ownerDocument)?g.defaultView||g.parentWindow:window,_?(w=n.relatedTarget||n.toElement,_=u,w=w?ys(w):null,w!==null&&(O=Ms(w),w!==O||w.tag!==5&&w.tag!==6)&&(w=null)):(_=null,w=u),_!==w)){
if(N=M0,M="onMouseLeave",I="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(N=j0,M="onPointerLeave",I="onPointerEnter",E="pointer"),O=_==null?g:uo(_),k=w==null?g:uo(w),g=new N(M,E+"leave",_,n,d),g.target=O,g.relatedTarget=k,M=null,ys(d)===u&&(N=new N(I,E+"enter",w,n,d),N.target=k,N.relatedTarget=O,M=N),O=M,_&&w)t:{
for(N=_,I=w,E=0,k=N;
k;
k=Zs(k))E++;
for(k=0,M=I;
M;
M=Zs(M))k++;
for(;
0<E-k;
)N=Zs(N),E--;
for(;
0<k-E;
)I=Zs(I),k--;
for(;
E--;
){
if(N===I||I!==null&&N===I.alternate)break t;
N=Zs(N),I=Zs(I)}
N=null}
else N=null;
_!==null&&Q0(m,g,_,N,!1),w!==null&&O!==null&&Q0(m,O,w,N,!0)}
}
e:{
if(g=u?uo(u):window,_=g.nodeName&&g.nodeName.toLowerCase(),_==="select"||_==="input"&&g.type==="file")var G=nS;
else if(U0(g))if(Mw)G=oS;
else{
G=iS;
var q=rS}
else(_=g.nodeName)&&_.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(G=sS);
if(G&&(G=G(t,u))){
Vw(m,G,n,d);
break e}
q&&q(t,g,u),t==="focusout"&&(q=g._wrapperState)&&q.controlled&&g.type==="number"&&qf(g,"number",g.value)}
switch(q=u?uo(u):window,t){
case"focusin":(U0(q)||q.contentEditable==="true")&&(lo=q,np=u,Ha=null);
break;
case"focusout":Ha=np=lo=null;
break;
case"mousedown":rp=!0;
break;
case"contextmenu":case"mouseup":case"dragend":rp=!1,W0(m,n,d);
break;
case"selectionchange":if(cS)break;
case"keydown":case"keyup":W0(m,n,d)}
var S;
if(Am)e:{
switch(t){
case"compositionstart":var b="onCompositionStart";
break e;
case"compositionend":b="onCompositionEnd";
break e;
case"compositionupdate":b="onCompositionUpdate";
break e}
b=void 0}
else ao?Dw(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");
b&&(Pw&&n.locale!=="ko"&&(ao||b!=="onCompositionStart"?b==="onCompositionEnd"&&ao&&(S=Nw()):(xi=d,Tm="value"in xi?xi.value:xi.textContent,ao=!0)),q=zu(u,b),0<q.length&&(b=new L0(b,t,null,n,d),m.push({
event:b,listeners:q}
),S?b.data=S:(S=Ow(n),S!==null&&(b.data=S)))),(S=XI?JI(t,n):ZI(t,n))&&(u=zu(u,"onBeforeInput"),0<u.length&&(d=new L0("onBeforeInput","beforeinput",null,n,d),m.push({
event:d,listeners:u}
),d.data=S))}
Ww(m,e)}
)}
function pl(t,e,n){
return{
instance:t,listener:e,currentTarget:n}
}
function zu(t,e){
for(var n=e+"Capture",r=[];
t!==null;
){
var i=t,s=i.stateNode;
i.tag===5&&s!==null&&(i=s,s=al(t,n),s!=null&&r.unshift(pl(t,s,i)),s=al(t,e),s!=null&&r.push(pl(t,s,i))),t=t.return}
return r}
function Zs(t){
if(t===null)return null;
do t=t.return;
while(t&&t.tag!==5);
return t||null}
function Q0(t,e,n,r,i){
for(var s=e._reactName,o=[];
n!==null&&n!==r;
){
var l=n,c=l.alternate,u=l.stateNode;
if(c!==null&&c===r)break;
l.tag===5&&u!==null&&(l=u,i?(c=al(n,s),c!=null&&o.unshift(pl(n,c,l))):i||(c=al(n,s),c!=null&&o.push(pl(n,c,l)))),n=n.return}
o.length!==0&&t.push({
event:e,listeners:o}
)}
var fS=/\r\n?/g,pS=/\u0000|\uFFFD/g;
function Y0(t){
return(typeof t=="string"?t:""+t).replace(fS,`
`).replace(pS,"")}
function Wc(t,e,n){
if(e=Y0(e),Y0(t)!==e&&n)throw Error(Y(425))}
function qu(){
}
var ip=null,sp=null;
function op(t,e){
return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}
var ap=typeof setTimeout=="function"?setTimeout:void 0,mS=typeof clearTimeout=="function"?clearTimeout:void 0,X0=typeof Promise=="function"?Promise:void 0,gS=typeof queueMicrotask=="function"?queueMicrotask:typeof X0<"u"?function(t){
return X0.resolve(null).then(t).catch(yS)}
:ap;
function yS(t){
setTimeout(function(){
throw t}
)}
function Qh(t,e){
var n=e,r=0;
do{
var i=n.nextSibling;
if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){
if(r===0){
t.removeChild(i),ul(e);
return}
r--}
else n!=="$"&&n!=="$?"&&n!=="$!"||r++;
n=i}
while(n);
ul(e)}
function Ai(t){
for(;
t!=null;
t=t.nextSibling){
var e=t.nodeType;
if(e===1||e===3)break;
if(e===8){
if(e=t.data,e==="$"||e==="$!"||e==="$?")break;
if(e==="/$")return null}
}
return t}
function J0(t){
t=t.previousSibling;
for(var e=0;
t;
){
if(t.nodeType===8){
var n=t.data;
if(n==="$"||n==="$!"||n==="$?"){
if(e===0)return t;
e--}
else n==="/$"&&e++}
t=t.previousSibling}
return null}
var Yo=Math.random().toString(36).slice(2),fr="__reactFiber$"+Yo,ml="__reactProps$"+Yo,$r="__reactContainer$"+Yo,lp="__reactEvents$"+Yo,vS="__reactListeners$"+Yo,_S="__reactHandles$"+Yo;
function ys(t){
var e=t[fr];
if(e)return e;
for(var n=t.parentNode;
n;
){
if(e=n[$r]||n[fr]){
if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=J0(t);
t!==null;
){
if(n=t[fr])return n;
t=J0(t)}
return e}
t=n,n=t.parentNode}
return null}
function Bl(t){
return t=t[fr]||t[$r],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}
function uo(t){
if(t.tag===5||t.tag===6)return t.stateNode;
throw Error(Y(33))}
function Ld(t){
return t[ml]||null}
var cp=[],ho=-1;
function Ki(t){
return{
current:t}
}
function Xe(t){
0>ho||(t.current=cp[ho],cp[ho]=null,ho--)}
function He(t,e){
ho++,cp[ho]=t.current,t.current=e}
var Ui={
}
,Xt=Ki(Ui),hn=Ki(!1),Ts=Ui;
function Ro(t,e){
var n=t.type.contextTypes;
if(!n)return Ui;
var r=t.stateNode;
if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;
var i={
}
,s;
for(s in n)i[s]=e[s];
return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}
function fn(t){
return t=t.childContextTypes,t!=null}
function Gu(){
Xe(hn),Xe(Xt)}
function Z0(t,e,n){
if(Xt.current!==Ui)throw Error(Y(168));
He(Xt,e),He(hn,n)}
function Kw(t,e,n){
var r=t.stateNode;
if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;
r=r.getChildContext();
for(var i in r)if(!(i in e))throw Error(Y(108,rI(t)||"Unknown",i));
return st({
}
,n,r)}
function Wu(t){
return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ui,Ts=Xt.current,He(Xt,t),He(hn,hn.current),!0}
function ey(t,e,n){
var r=t.stateNode;
if(!r)throw Error(Y(169));
n?(t=Kw(t,e,Ts),r.__reactInternalMemoizedMergedChildContext=t,Xe(hn),Xe(Xt),He(Xt,t)):Xe(hn),He(hn,n)}
var Dr=null,jd=!1,Yh=!1;
function Qw(t){
Dr===null?Dr=[t]:Dr.push(t)}
function wS(t){
jd=!0,Qw(t)}
function Qi(){
if(!Yh&&Dr!==null){
Yh=!0;
var t=0,e=Be;
try{
var n=Dr;
for(Be=1;
t<n.length;
t++){
var r=n[t];
do r=r(!0);
while(r!==null)}
Dr=null,jd=!1}
catch(i){
throw Dr!==null&&(Dr=Dr.slice(t+1)),ww(wm,Qi),i}
finally{
Be=e,Yh=!1}
}
return null}
var fo=[],po=0,Hu=null,Ku=0,Dn=[],On=0,Is=null,Or=1,Vr="";
function fs(t,e){
fo[po++]=Ku,fo[po++]=Hu,Hu=t,Ku=e}
function Yw(t,e,n){
Dn[On++]=Or,Dn[On++]=Vr,Dn[On++]=Is,Is=t;
var r=Or;
t=Vr;
var i=32-Jn(r)-1;
r&=~(1<<i),n+=1;
var s=32-Jn(e)+i;
if(30<s){
var o=i-i%5;
s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Or=1<<32-Jn(e)+i|n<<i|r,Vr=s+t}
else Or=1<<s|n<<i|r,Vr=t}
function km(t){
t.return!==null&&(fs(t,1),Yw(t,1,0))}
function Rm(t){
for(;
t===Hu;
)Hu=fo[--po],fo[po]=null,Ku=fo[--po],fo[po]=null;
for(;
t===Is;
)Is=Dn[--On],Dn[On]=null,Vr=Dn[--On],Dn[On]=null,Or=Dn[--On],Dn[On]=null}
var xn=null,vn=null,Ze=!1,Yn=null;
function Xw(t,e){
var n=Vn(5,null,null,0);
n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}
function ty(t,e){
switch(t.tag){
case 5:var n=t.type;
return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,xn=t,vn=Ai(e.firstChild),!0):!1;
case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,xn=t,vn=null,!0):!1;
case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Is!==null?{
id:Or,overflow:Vr}
:null,t.memoizedState={
dehydrated:e,treeContext:n,retryLane:1073741824}
,n=Vn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,xn=t,vn=null,!0):!1;
default:return!1}
}
function up(t){
return(t.mode&1)!==0&&(t.flags&128)===0}
function dp(t){
if(Ze){
var e=vn;
if(e){
var n=e;
if(!ty(t,e)){
if(up(t))throw Error(Y(418));
e=Ai(n.nextSibling);
var r=xn;
e&&ty(t,e)?Xw(r,n):(t.flags=t.flags&-4097|2,Ze=!1,xn=t)}
}
else{
if(up(t))throw Error(Y(418));
t.flags=t.flags&-4097|2,Ze=!1,xn=t}
}
}
function ny(t){
for(t=t.return;
t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;
)t=t.return;
xn=t}
function Hc(t){
if(t!==xn)return!1;
if(!Ze)return ny(t),Ze=!0,!1;
var e;
if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!op(t.type,t.memoizedProps)),e&&(e=vn)){
if(up(t))throw Jw(),Error(Y(418));
for(;
e;
)Xw(t,e),e=Ai(e.nextSibling)}
if(ny(t),t.tag===13){
if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(Y(317));
e:{
for(t=t.nextSibling,e=0;
t;
){
if(t.nodeType===8){
var n=t.data;
if(n==="/$"){
if(e===0){
vn=Ai(t.nextSibling);
break e}
e--}
else n!=="$"&&n!=="$!"&&n!=="$?"||e++}
t=t.nextSibling}
vn=null}
}
else vn=xn?Ai(t.stateNode.nextSibling):null;
return!0}
function Jw(){
for(var t=vn;
t;
)t=Ai(t.nextSibling)}
function No(){
vn=xn=null,Ze=!1}
function Nm(t){
Yn===null?Yn=[t]:Yn.push(t)}
var xS=Xr.ReactCurrentBatchConfig;
function Ca(t,e,n){
if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){
if(n._owner){
if(n=n._owner,n){
if(n.tag!==1)throw Error(Y(309));
var r=n.stateNode}
if(!r)throw Error(Y(147,t));
var i=r,s=""+t;
return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){
var l=i.refs;
o===null?delete l[s]:l[s]=o}
,e._stringRef=s,e)}
if(typeof t!="string")throw Error(Y(284));
if(!n._owner)throw Error(Y(290,t))}
return t}
function Kc(t,e){
throw t=Object.prototype.toString.call(e),Error(Y(31,t==="[object Object]"?"object with keys {
"+Object.keys(e).join(", ")+"}
":t))}
function ry(t){
var e=t._init;
return e(t._payload)}
function Zw(t){
function e(I,E){
if(t){
var k=I.deletions;
k===null?(I.deletions=[E],I.flags|=16):k.push(E)}
}
function n(I,E){
if(!t)return null;
for(;
E!==null;
)e(I,E),E=E.sibling;
return null}
function r(I,E){
for(I=new Map;
E!==null;
)E.key!==null?I.set(E.key,E):I.set(E.index,E),E=E.sibling;
return I}
function i(I,E){
return I=Ni(I,E),I.index=0,I.sibling=null,I}
function s(I,E,k){
return I.index=k,t?(k=I.alternate,k!==null?(k=k.index,k<E?(I.flags|=2,E):k):(I.flags|=2,E)):(I.flags|=1048576,E)}
function o(I){
return t&&I.alternate===null&&(I.flags|=2),I}
function l(I,E,k,M){
return E===null||E.tag!==6?(E=rf(k,I.mode,M),E.return=I,E):(E=i(E,k),E.return=I,E)}
function c(I,E,k,M){
var G=k.type;
return G===oo?d(I,E,k.props.children,M,k.key):E!==null&&(E.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===fi&&ry(G)===E.type)?(M=i(E,k.props),M.ref=Ca(I,E,k),M.return=I,M):(M=Iu(k.type,k.key,k.props,null,I.mode,M),M.ref=Ca(I,E,k),M.return=I,M)}
function u(I,E,k,M){
return E===null||E.tag!==4||E.stateNode.containerInfo!==k.containerInfo||E.stateNode.implementation!==k.implementation?(E=sf(k,I.mode,M),E.return=I,E):(E=i(E,k.children||[]),E.return=I,E)}
function d(I,E,k,M,G){
return E===null||E.tag!==7?(E=bs(k,I.mode,M,G),E.return=I,E):(E=i(E,k),E.return=I,E)}
function m(I,E,k){
if(typeof E=="string"&&E!==""||typeof E=="number")return E=rf(""+E,I.mode,k),E.return=I,E;
if(typeof E=="object"&&E!==null){
switch(E.$$typeof){
case Lc:return k=Iu(E.type,E.key,E.props,null,I.mode,k),k.ref=Ca(I,null,E),k.return=I,k;
case so:return E=sf(E,I.mode,k),E.return=I,E;
case fi:var M=E._init;
return m(I,M(E._payload),k)}
if(Ma(E)||Ea(E))return E=bs(E,I.mode,k,null),E.return=I,E;
Kc(I,E)}
return null}
function g(I,E,k,M){
var G=E!==null?E.key:null;
if(typeof k=="string"&&k!==""||typeof k=="number")return G!==null?null:l(I,E,""+k,M);
if(typeof k=="object"&&k!==null){
switch(k.$$typeof){
case Lc:return k.key===G?c(I,E,k,M):null;
case so:return k.key===G?u(I,E,k,M):null;
case fi:return G=k._init,g(I,E,G(k._payload),M)}
if(Ma(k)||Ea(k))return G!==null?null:d(I,E,k,M,null);
Kc(I,k)}
return null}
function _(I,E,k,M,G){
if(typeof M=="string"&&M!==""||typeof M=="number")return I=I.get(k)||null,l(E,I,""+M,G);
if(typeof M=="object"&&M!==null){
switch(M.$$typeof){
case Lc:return I=I.get(M.key===null?k:M.key)||null,c(E,I,M,G);
case so:return I=I.get(M.key===null?k:M.key)||null,u(E,I,M,G);
case fi:var q=M._init;
return _(I,E,k,q(M._payload),G)}
if(Ma(M)||Ea(M))return I=I.get(k)||null,d(E,I,M,G,null);
Kc(E,M)}
return null}
function w(I,E,k,M){
for(var G=null,q=null,S=E,b=E=0,A=null;
S!==null&&b<k.length;
b++){
S.index>b?(A=S,S=null):A=S.sibling;
var C=g(I,S,k[b],M);
if(C===null){
S===null&&(S=A);
break}
t&&S&&C.alternate===null&&e(I,S),E=s(C,E,b),q===null?G=C:q.sibling=C,q=C,S=A}
if(b===k.length)return n(I,S),Ze&&fs(I,b),G;
if(S===null){
for(;
b<k.length;
b++)S=m(I,k[b],M),S!==null&&(E=s(S,E,b),q===null?G=S:q.sibling=S,q=S);
return Ze&&fs(I,b),G}
for(S=r(I,S);
b<k.length;
b++)A=_(S,I,b,k[b],M),A!==null&&(t&&A.alternate!==null&&S.delete(A.key===null?b:A.key),E=s(A,E,b),q===null?G=A:q.sibling=A,q=A);
return t&&S.forEach(function(V){
return e(I,V)}
),Ze&&fs(I,b),G}
function N(I,E,k,M){
var G=Ea(k);
if(typeof G!="function")throw Error(Y(150));
if(k=G.call(k),k==null)throw Error(Y(151));
for(var q=G=null,S=E,b=E=0,A=null,C=k.next();
S!==null&&!C.done;
b++,C=k.next()){
S.index>b?(A=S,S=null):A=S.sibling;
var V=g(I,S,C.value,M);
if(V===null){
S===null&&(S=A);
break}
t&&S&&V.alternate===null&&e(I,S),E=s(V,E,b),q===null?G=V:q.sibling=V,q=V,S=A}
if(C.done)return n(I,S),Ze&&fs(I,b),G;
if(S===null){
for(;
!C.done;
b++,C=k.next())C=m(I,C.value,M),C!==null&&(E=s(C,E,b),q===null?G=C:q.sibling=C,q=C);
return Ze&&fs(I,b),G}
for(S=r(I,S);
!C.done;
b++,C=k.next())C=_(S,I,b,C.value,M),C!==null&&(t&&C.alternate!==null&&S.delete(C.key===null?b:C.key),E=s(C,E,b),q===null?G=C:q.sibling=C,q=C);
return t&&S.forEach(function(L){
return e(I,L)}
),Ze&&fs(I,b),G}
function O(I,E,k,M){
if(typeof k=="object"&&k!==null&&k.type===oo&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){
switch(k.$$typeof){
case Lc:e:{
for(var G=k.key,q=E;
q!==null;
){
if(q.key===G){
if(G=k.type,G===oo){
if(q.tag===7){
n(I,q.sibling),E=i(q,k.props.children),E.return=I,I=E;
break e}
}
else if(q.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===fi&&ry(G)===q.type){
n(I,q.sibling),E=i(q,k.props),E.ref=Ca(I,q,k),E.return=I,I=E;
break e}
n(I,q);
break}
else e(I,q);
q=q.sibling}
k.type===oo?(E=bs(k.props.children,I.mode,M,k.key),E.return=I,I=E):(M=Iu(k.type,k.key,k.props,null,I.mode,M),M.ref=Ca(I,E,k),M.return=I,I=M)}
return o(I);
case so:e:{
for(q=k.key;
E!==null;
){
if(E.key===q)if(E.tag===4&&E.stateNode.containerInfo===k.containerInfo&&E.stateNode.implementation===k.implementation){
n(I,E.sibling),E=i(E,k.children||[]),E.return=I,I=E;
break e}
else{
n(I,E);
break}
else e(I,E);
E=E.sibling}
E=sf(k,I.mode,M),E.return=I,I=E}
return o(I);
case fi:return q=k._init,O(I,E,q(k._payload),M)}
if(Ma(k))return w(I,E,k,M);
if(Ea(k))return N(I,E,k,M);
Kc(I,k)}
return typeof k=="string"&&k!==""||typeof k=="number"?(k=""+k,E!==null&&E.tag===6?(n(I,E.sibling),E=i(E,k),E.return=I,I=E):(n(I,E),E=rf(k,I.mode,M),E.return=I,I=E),o(I)):n(I,E)}
return O}
var Po=Zw(!0),ex=Zw(!1),Qu=Ki(null),Yu=null,mo=null,Pm=null;
function Dm(){
Pm=mo=Yu=null}
function Om(t){
var e=Qu.current;
Xe(Qu),t._currentValue=e}
function hp(t,e,n){
for(;
t!==null;
){
var r=t.alternate;
if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;
t=t.return}
}
function Eo(t,e){
Yu=t,Pm=mo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(dn=!0),t.firstContext=null)}
function Fn(t){
var e=t._currentValue;
if(Pm!==t)if(t={
context:t,memoizedValue:e,next:null}
,mo===null){
if(Yu===null)throw Error(Y(308));
mo=t,Yu.dependencies={
lanes:0,firstContext:t}
}
else mo=mo.next=t;
return e}
var vs=null;
function Vm(t){
vs===null?vs=[t]:vs.push(t)}
function tx(t,e,n,r){
var i=e.interleaved;
return i===null?(n.next=n,Vm(e)):(n.next=i.next,i.next=n),e.interleaved=n,zr(t,r)}
function zr(t,e){
t.lanes|=e;
var n=t.alternate;
for(n!==null&&(n.lanes|=e),n=t,t=t.return;
t!==null;
)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;
return n.tag===3?n.stateNode:null}
var pi=!1;
function Mm(t){
t.updateQueue={
baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{
pending:null,interleaved:null,lanes:0}
,effects:null}
}
function nx(t,e){
t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={
baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects}
)}
function Br(t,e){
return{
eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}
}
function Ci(t,e,n){
var r=t.updateQueue;
if(r===null)return null;
if(r=r.shared,Re&2){
var i=r.pending;
return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,zr(t,n)}
return i=r.interleaved,i===null?(e.next=e,Vm(r)):(e.next=i.next,i.next=e),r.interleaved=e,zr(t,n)}
function _u(t,e,n){
if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){
var r=e.lanes;
r&=t.pendingLanes,n|=r,e.lanes=n,xm(t,n)}
}
function iy(t,e){
var n=t.updateQueue,r=t.alternate;
if(r!==null&&(r=r.updateQueue,n===r)){
var i=null,s=null;
if(n=n.firstBaseUpdate,n!==null){
do{
var o={
eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null}
;
s===null?i=s=o:s=s.next=o,n=n.next}
while(n!==null);
s===null?i=s=e:s=s.next=e}
else i=s=e;
n={
baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects}
,t.updateQueue=n;
return}
t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}
function Xu(t,e,n,r){
var i=t.updateQueue;
pi=!1;
var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;
if(l!==null){
i.shared.pending=null;
var c=l,u=c.next;
c.next=null,o===null?s=u:o.next=u,o=c;
var d=t.alternate;
d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=c))}
if(s!==null){
var m=i.baseState;
o=0,d=u=c=null,l=s;
do{
var g=l.lane,_=l.eventTime;
if((r&g)===g){
d!==null&&(d=d.next={
eventTime:_,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null}
);
e:{
var w=t,N=l;
switch(g=e,_=n,N.tag){
case 1:if(w=N.payload,typeof w=="function"){
m=w.call(_,m,g);
break e}
m=w;
break e;
case 3:w.flags=w.flags&-65537|128;
case 0:if(w=N.payload,g=typeof w=="function"?w.call(_,m,g):w,g==null)break e;
m=st({
}
,m,g);
break e;
case 2:pi=!0}
}
l.callback!==null&&l.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}
else _={
eventTime:_,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null}
,d===null?(u=d=_,c=m):d=d.next=_,o|=g;
if(l=l.next,l===null){
if(l=i.shared.pending,l===null)break;
g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}
}
while(1);
if(d===null&&(c=m),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){
i=e;
do o|=i.lane,i=i.next;
while(i!==e)}
else s===null&&(i.shared.lanes=0);
As|=o,t.lanes=o,t.memoizedState=m}
}
function sy(t,e,n){
if(t=e.effects,e.effects=null,t!==null)for(e=0;
e<t.length;
e++){
var r=t[e],i=r.callback;
if(i!==null){
if(r.callback=null,r=n,typeof i!="function")throw Error(Y(191,i));
i.call(r)}
}
}
var Ul={
}
,mr=Ki(Ul),gl=Ki(Ul),yl=Ki(Ul);
function _s(t){
if(t===Ul)throw Error(Y(174));
return t}
function Lm(t,e){
switch(He(yl,e),He(gl,t),He(mr,Ul),t=e.nodeType,t){
case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Wf(null,"");
break;
default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Wf(e,t)}
Xe(mr),He(mr,e)}
function Do(){
Xe(mr),Xe(gl),Xe(yl)}
function rx(t){
_s(yl.current);
var e=_s(mr.current),n=Wf(e,t.type);
e!==n&&(He(gl,t),He(mr,n))}
function jm(t){
gl.current===t&&(Xe(mr),Xe(gl))}
var rt=Ki(0);
function Ju(t){
for(var e=t;
e!==null;
){
if(e.tag===13){
var n=e.memoizedState;
if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}
else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){
if(e.flags&128)return e}
else if(e.child!==null){
e.child.return=e,e=e.child;
continue}
if(e===t)break;
for(;
e.sibling===null;
){
if(e.return===null||e.return===t)return null;
e=e.return}
e.sibling.return=e.return,e=e.sibling}
return null}
var Xh=[];
function Fm(){
for(var t=0;
t<Xh.length;
t++)Xh[t]._workInProgressVersionPrimary=null;
Xh.length=0}
var wu=Xr.ReactCurrentDispatcher,Jh=Xr.ReactCurrentBatchConfig,Ss=0,it=null,vt=null,It=null,Zu=!1,Ka=!1,vl=0,bS=0;
function Gt(){
throw Error(Y(321))}
function Bm(t,e){
if(e===null)return!1;
for(var n=0;
n<e.length&&n<t.length;
n++)if(!er(t[n],e[n]))return!1;
return!0}
function Um(t,e,n,r,i,s){
if(Ss=s,it=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,wu.current=t===null||t.memoizedState===null?SS:AS,t=n(r,i),Ka){
s=0;
do{
if(Ka=!1,vl=0,25<=s)throw Error(Y(301));
s+=1,It=vt=null,e.updateQueue=null,wu.current=CS,t=n(r,i)}
while(Ka)}
if(wu.current=ed,e=vt!==null&&vt.next!==null,Ss=0,It=vt=it=null,Zu=!1,e)throw Error(Y(300));
return t}
function $m(){
var t=vl!==0;
return vl=0,t}
function hr(){
var t={
memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null}
;
return It===null?it.memoizedState=It=t:It=It.next=t,It}
function Bn(){
if(vt===null){
var t=it.alternate;
t=t!==null?t.memoizedState:null}
else t=vt.next;
var e=It===null?it.memoizedState:It.next;
if(e!==null)It=e,vt=t;
else{
if(t===null)throw Error(Y(310));
vt=t,t={
memoizedState:vt.memoizedState,baseState:vt.baseState,baseQueue:vt.baseQueue,queue:vt.queue,next:null}
,It===null?it.memoizedState=It=t:It=It.next=t}
return It}
function _l(t,e){
return typeof e=="function"?e(t):e}
function Zh(t){
var e=Bn(),n=e.queue;
if(n===null)throw Error(Y(311));
n.lastRenderedReducer=t;
var r=vt,i=r.baseQueue,s=n.pending;
if(s!==null){
if(i!==null){
var o=i.next;
i.next=s.next,s.next=o}
r.baseQueue=i=s,n.pending=null}
if(i!==null){
s=i.next,r=r.baseState;
var l=o=null,c=null,u=s;
do{
var d=u.lane;
if((Ss&d)===d)c!==null&&(c=c.next={
lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}
),r=u.hasEagerState?u.eagerState:t(r,u.action);
else{
var m={
lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}
;
c===null?(l=c=m,o=r):c=c.next=m,it.lanes|=d,As|=d}
u=u.next}
while(u!==null&&u!==s);
c===null?o=r:c.next=l,er(r,e.memoizedState)||(dn=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=c,n.lastRenderedState=r}
if(t=n.interleaved,t!==null){
i=t;
do s=i.lane,it.lanes|=s,As|=s,i=i.next;
while(i!==t)}
else i===null&&(n.lanes=0);
return[e.memoizedState,n.dispatch]}
function ef(t){
var e=Bn(),n=e.queue;
if(n===null)throw Error(Y(311));
n.lastRenderedReducer=t;
var r=n.dispatch,i=n.pending,s=e.memoizedState;
if(i!==null){
n.pending=null;
var o=i=i.next;
do s=t(s,o.action),o=o.next;
while(o!==i);
er(s,e.memoizedState)||(dn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}
return[s,r]}
function ix(){
}
function sx(t,e){
var n=it,r=Bn(),i=e(),s=!er(r.memoizedState,i);
if(s&&(r.memoizedState=i,dn=!0),r=r.queue,zm(lx.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||It!==null&&It.memoizedState.tag&1){
if(n.flags|=2048,wl(9,ax.bind(null,n,r,i,e),void 0,null),St===null)throw Error(Y(349));
Ss&30||ox(n,e,i)}
return i}
function ox(t,e,n){
t.flags|=16384,t={
getSnapshot:e,value:n}
,e=it.updateQueue,e===null?(e={
lastEffect:null,stores:null}
,it.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}
function ax(t,e,n,r){
e.value=n,e.getSnapshot=r,cx(e)&&ux(t)}
function lx(t,e,n){
return n(function(){
cx(e)&&ux(t)}
)}
function cx(t){
var e=t.getSnapshot;
t=t.value;
try{
var n=e();
return!er(t,n)}
catch{
return!0}
}
function ux(t){
var e=zr(t,1);
e!==null&&Zn(e,t,1,-1)}
function oy(t){
var e=hr();
return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={
pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_l,lastRenderedState:t}
,e.queue=t,t=t.dispatch=IS.bind(null,it,t),[e.memoizedState,t]}
function wl(t,e,n,r){
return t={
tag:t,create:e,destroy:n,deps:r,next:null}
,e=it.updateQueue,e===null?(e={
lastEffect:null,stores:null}
,it.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}
function dx(){
return Bn().memoizedState}
function xu(t,e,n,r){
var i=hr();
it.flags|=t,i.memoizedState=wl(1|e,n,void 0,r===void 0?null:r)}
function Fd(t,e,n,r){
var i=Bn();
r=r===void 0?null:r;
var s=void 0;
if(vt!==null){
var o=vt.memoizedState;
if(s=o.destroy,r!==null&&Bm(r,o.deps)){
i.memoizedState=wl(e,n,s,r);
return}
}
it.flags|=t,i.memoizedState=wl(1|e,n,s,r)}
function ay(t,e){
return xu(8390656,8,t,e)}
function zm(t,e){
return Fd(2048,8,t,e)}
function hx(t,e){
return Fd(4,2,t,e)}
function fx(t,e){
return Fd(4,4,t,e)}
function px(t,e){
if(typeof e=="function")return t=t(),e(t),function(){
e(null)}
;
if(e!=null)return t=t(),e.current=t,function(){
e.current=null}
}
function mx(t,e,n){
return n=n!=null?n.concat([t]):null,Fd(4,4,px.bind(null,e,t),n)}
function qm(){
}
function gx(t,e){
var n=Bn();
e=e===void 0?null:e;
var r=n.memoizedState;
return r!==null&&e!==null&&Bm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}
function yx(t,e){
var n=Bn();
e=e===void 0?null:e;
var r=n.memoizedState;
return r!==null&&e!==null&&Bm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}
function vx(t,e,n){
return Ss&21?(er(n,e)||(n=Ew(),it.lanes|=n,As|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,dn=!0),t.memoizedState=n)}
function ES(t,e){
var n=Be;
Be=n!==0&&4>n?n:4,t(!0);
var r=Jh.transition;
Jh.transition={
}
;
try{
t(!1),e()}
finally{
Be=n,Jh.transition=r}
}
function _x(){
return Bn().memoizedState}
function TS(t,e,n){
var r=Ri(t);
if(n={
lane:r,action:n,hasEagerState:!1,eagerState:null,next:null}
,wx(t))xx(e,n);
else if(n=tx(t,e,n,r),n!==null){
var i=nn();
Zn(n,t,r,i),bx(n,e,r)}
}
function IS(t,e,n){
var r=Ri(t),i={
lane:r,action:n,hasEagerState:!1,eagerState:null,next:null}
;
if(wx(t))xx(e,i);
else{
var s=t.alternate;
if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{
var o=e.lastRenderedState,l=s(o,n);
if(i.hasEagerState=!0,i.eagerState=l,er(l,o)){
var c=e.interleaved;
c===null?(i.next=i,Vm(e)):(i.next=c.next,c.next=i),e.interleaved=i;
return}
}
catch{
}
finally{
}
n=tx(t,e,i,r),n!==null&&(i=nn(),Zn(n,t,r,i),bx(n,e,r))}
}
function wx(t){
var e=t.alternate;
return t===it||e!==null&&e===it}
function xx(t,e){
Ka=Zu=!0;
var n=t.pending;
n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}
function bx(t,e,n){
if(n&4194240){
var r=e.lanes;
r&=t.pendingLanes,n|=r,e.lanes=n,xm(t,n)}
}
var ed={
readContext:Fn,useCallback:Gt,useContext:Gt,useEffect:Gt,useImperativeHandle:Gt,useInsertionEffect:Gt,useLayoutEffect:Gt,useMemo:Gt,useReducer:Gt,useRef:Gt,useState:Gt,useDebugValue:Gt,useDeferredValue:Gt,useTransition:Gt,useMutableSource:Gt,useSyncExternalStore:Gt,useId:Gt,unstable_isNewReconciler:!1}
,SS={
readContext:Fn,useCallback:function(t,e){
return hr().memoizedState=[t,e===void 0?null:e],t}
,useContext:Fn,useEffect:ay,useImperativeHandle:function(t,e,n){
return n=n!=null?n.concat([t]):null,xu(4194308,4,px.bind(null,e,t),n)}
,useLayoutEffect:function(t,e){
return xu(4194308,4,t,e)}
,useInsertionEffect:function(t,e){
return xu(4,2,t,e)}
,useMemo:function(t,e){
var n=hr();
return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t}
,useReducer:function(t,e,n){
var r=hr();
return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={
pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e}
,r.queue=t,t=t.dispatch=TS.bind(null,it,t),[r.memoizedState,t]}
,useRef:function(t){
var e=hr();
return t={
current:t}
,e.memoizedState=t}
,useState:oy,useDebugValue:qm,useDeferredValue:function(t){
return hr().memoizedState=t}
,useTransition:function(){
var t=oy(!1),e=t[0];
return t=ES.bind(null,t[1]),hr().memoizedState=t,[e,t]}
,useMutableSource:function(){
}
,useSyncExternalStore:function(t,e,n){
var r=it,i=hr();
if(Ze){
if(n===void 0)throw Error(Y(407));
n=n()}
else{
if(n=e(),St===null)throw Error(Y(349));
Ss&30||ox(r,e,n)}
i.memoizedState=n;
var s={
value:n,getSnapshot:e}
;
return i.queue=s,ay(lx.bind(null,r,s,t),[t]),r.flags|=2048,wl(9,ax.bind(null,r,s,n,e),void 0,null),n}
,useId:function(){
var t=hr(),e=St.identifierPrefix;
if(Ze){
var n=Vr,r=Or;
n=(r&~(1<<32-Jn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=vl++,0<n&&(e+="H"+n.toString(32)),e+=":"}
else n=bS++,e=":"+e+"r"+n.toString(32)+":";
return t.memoizedState=e}
,unstable_isNewReconciler:!1}
,AS={
readContext:Fn,useCallback:gx,useContext:Fn,useEffect:zm,useImperativeHandle:mx,useInsertionEffect:hx,useLayoutEffect:fx,useMemo:yx,useReducer:Zh,useRef:dx,useState:function(){
return Zh(_l)}
,useDebugValue:qm,useDeferredValue:function(t){
var e=Bn();
return vx(e,vt.memoizedState,t)}
,useTransition:function(){
var t=Zh(_l)[0],e=Bn().memoizedState;
return[t,e]}
,useMutableSource:ix,useSyncExternalStore:sx,useId:_x,unstable_isNewReconciler:!1}
,CS={
readContext:Fn,useCallback:gx,useContext:Fn,useEffect:zm,useImperativeHandle:mx,useInsertionEffect:hx,useLayoutEffect:fx,useMemo:yx,useReducer:ef,useRef:dx,useState:function(){
return ef(_l)}
,useDebugValue:qm,useDeferredValue:function(t){
var e=Bn();
return vt===null?e.memoizedState=t:vx(e,vt.memoizedState,t)}
,useTransition:function(){
var t=ef(_l)[0],e=Bn().memoizedState;
return[t,e]}
,useMutableSource:ix,useSyncExternalStore:sx,useId:_x,unstable_isNewReconciler:!1}
;
function Kn(t,e){
if(t&&t.defaultProps){
e=st({
}
,e),t=t.defaultProps;
for(var n in t)e[n]===void 0&&(e[n]=t[n]);
return e}
return e}
function fp(t,e,n,r){
e=t.memoizedState,n=n(r,e),n=n==null?e:st({
}
,e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}
var Bd={
isMounted:function(t){
return(t=t._reactInternals)?Ms(t)===t:!1}
,enqueueSetState:function(t,e,n){
t=t._reactInternals;
var r=nn(),i=Ri(t),s=Br(r,i);
s.payload=e,n!=null&&(s.callback=n),e=Ci(t,s,i),e!==null&&(Zn(e,t,i,r),_u(e,t,i))}
,enqueueReplaceState:function(t,e,n){
t=t._reactInternals;
var r=nn(),i=Ri(t),s=Br(r,i);
s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ci(t,s,i),e!==null&&(Zn(e,t,i,r),_u(e,t,i))}
,enqueueForceUpdate:function(t,e){
t=t._reactInternals;
var n=nn(),r=Ri(t),i=Br(n,r);
i.tag=2,e!=null&&(i.callback=e),e=Ci(t,i,r),e!==null&&(Zn(e,t,r,n),_u(e,t,r))}
}
;
function ly(t,e,n,r,i,s,o){
return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!hl(n,r)||!hl(i,s):!0}
function Ex(t,e,n){
var r=!1,i=Ui,s=e.contextType;
return typeof s=="object"&&s!==null?s=Fn(s):(i=fn(e)?Ts:Xt.current,r=e.contextTypes,s=(r=r!=null)?Ro(t,i):Ui),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Bd,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}
function cy(t,e,n,r){
t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Bd.enqueueReplaceState(e,e.state,null)}
function pp(t,e,n,r){
var i=t.stateNode;
i.props=n,i.state=t.memoizedState,i.refs={
}
,Mm(t);
var s=e.contextType;
typeof s=="object"&&s!==null?i.context=Fn(s):(s=fn(e)?Ts:Xt.current,i.context=Ro(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(fp(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Bd.enqueueReplaceState(i,i.state,null),Xu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}
function Oo(t,e){
try{
var n="",r=e;
do n+=nI(r),r=r.return;
while(r);
var i=n}
catch(s){
i=`
Error generating stack: `+s.message+`
`+s.stack}
return{
value:t,source:e,stack:i,digest:null}
}
function tf(t,e,n){
return{
value:t,source:null,stack:n??null,digest:e??null}
}
function mp(t,e){
try{
console.error(e.value)}
catch(n){
setTimeout(function(){
throw n}
)}
}
var kS=typeof WeakMap=="function"?WeakMap:Map;
function Tx(t,e,n){
n=Br(-1,n),n.tag=3,n.payload={
element:null}
;
var r=e.value;
return n.callback=function(){
nd||(nd=!0,Ip=r),mp(t,e)}
,n}
function Ix(t,e,n){
n=Br(-1,n),n.tag=3;
var r=t.type.getDerivedStateFromError;
if(typeof r=="function"){
var i=e.value;
n.payload=function(){
return r(i)}
,n.callback=function(){
mp(t,e)}
}
var s=t.stateNode;
return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){
mp(t,e),typeof r!="function"&&(ki===null?ki=new Set([this]):ki.add(this));
var o=e.stack;
this.componentDidCatch(e.value,{
componentStack:o!==null?o:""}
)}
),n}
function uy(t,e,n){
var r=t.pingCache;
if(r===null){
r=t.pingCache=new kS;
var i=new Set;
r.set(e,i)}
else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));
i.has(n)||(i.add(n),t=zS.bind(null,t,e,n),e.then(t,t))}
function dy(t){
do{
var e;
if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;
t=t.return}
while(t!==null);
return null}
function hy(t,e,n,r,i){
return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Br(-1,1),e.tag=2,Ci(n,e,1))),n.lanes|=1),t)}
var RS=Xr.ReactCurrentOwner,dn=!1;
function tn(t,e,n,r){
e.child=t===null?ex(e,null,n,r):Po(e,t.child,n,r)}
function fy(t,e,n,r,i){
n=n.render;
var s=e.ref;
return Eo(e,i),r=Um(t,e,n,r,s,i),n=$m(),t!==null&&!dn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,qr(t,e,i)):(Ze&&n&&km(e),e.flags|=1,tn(t,e,r,i),e.child)}
function py(t,e,n,r,i){
if(t===null){
var s=n.type;
return typeof s=="function"&&!Jm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Sx(t,e,s,r,i)):(t=Iu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}
if(s=t.child,!(t.lanes&i)){
var o=s.memoizedProps;
if(n=n.compare,n=n!==null?n:hl,n(o,r)&&t.ref===e.ref)return qr(t,e,i)}
return e.flags|=1,t=Ni(s,r),t.ref=e.ref,t.return=e,e.child=t}
function Sx(t,e,n,r,i){
if(t!==null){
var s=t.memoizedProps;
if(hl(s,r)&&t.ref===e.ref)if(dn=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(dn=!0);
else return e.lanes=t.lanes,qr(t,e,i)}
return gp(t,e,n,r,i)}
function Ax(t,e,n){
var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;
if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={
baseLanes:0,cachePool:null,transitions:null}
,He(yo,yn),yn|=n;
else{
if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={
baseLanes:t,cachePool:null,transitions:null}
,e.updateQueue=null,He(yo,yn),yn|=t,null;
e.memoizedState={
baseLanes:0,cachePool:null,transitions:null}
,r=s!==null?s.baseLanes:n,He(yo,yn),yn|=r}
else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,He(yo,yn),yn|=r;
return tn(t,e,i,n),e.child}
function Cx(t,e){
var n=e.ref;
(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}
function gp(t,e,n,r,i){
var s=fn(n)?Ts:Xt.current;
return s=Ro(e,s),Eo(e,i),n=Um(t,e,n,r,s,i),r=$m(),t!==null&&!dn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,qr(t,e,i)):(Ze&&r&&km(e),e.flags|=1,tn(t,e,n,i),e.child)}
function my(t,e,n,r,i){
if(fn(n)){
var s=!0;
Wu(e)}
else s=!1;
if(Eo(e,i),e.stateNode===null)bu(t,e),Ex(e,n,r),pp(e,n,r,i),r=!0;
else if(t===null){
var o=e.stateNode,l=e.memoizedProps;
o.props=l;
var c=o.context,u=n.contextType;
typeof u=="object"&&u!==null?u=Fn(u):(u=fn(n)?Ts:Xt.current,u=Ro(e,u));
var d=n.getDerivedStateFromProps,m=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";
m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||c!==u)&&cy(e,o,r,u),pi=!1;
var g=e.memoizedState;
o.state=g,Xu(e,r,o,i),c=e.memoizedState,l!==r||g!==c||hn.current||pi?(typeof d=="function"&&(fp(e,n,d,r),c=e.memoizedState),(l=pi||ly(e,n,l,r,g,c,u))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=c),o.props=r,o.state=c,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}
else{
o=e.stateNode,nx(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:Kn(e.type,l),o.props=u,m=e.pendingProps,g=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=Fn(c):(c=fn(n)?Ts:Xt.current,c=Ro(e,c));
var _=n.getDerivedStateFromProps;
(d=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||g!==c)&&cy(e,o,r,c),pi=!1,g=e.memoizedState,o.state=g,Xu(e,r,o,i);
var w=e.memoizedState;
l!==m||g!==w||hn.current||pi?(typeof _=="function"&&(fp(e,n,_,r),w=e.memoizedState),(u=pi||ly(e,n,u,r,g,w,c)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,c)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=w),o.props=r,o.state=w,o.context=c,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}
return yp(t,e,n,r,s,i)}
function yp(t,e,n,r,i,s){
Cx(t,e);
var o=(e.flags&128)!==0;
if(!r&&!o)return i&&ey(e,n,!1),qr(t,e,s);
r=e.stateNode,RS.current=e;
var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();
return e.flags|=1,t!==null&&o?(e.child=Po(e,t.child,null,s),e.child=Po(e,null,l,s)):tn(t,e,l,s),e.memoizedState=r.state,i&&ey(e,n,!0),e.child}
function kx(t){
var e=t.stateNode;
e.pendingContext?Z0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Z0(t,e.context,!1),Lm(t,e.containerInfo)}
function gy(t,e,n,r,i){
return No(),Nm(i),e.flags|=256,tn(t,e,n,r),e.child}
var vp={
dehydrated:null,treeContext:null,retryLane:0}
;
function _p(t){
return{
baseLanes:t,cachePool:null,transitions:null}
}
function Rx(t,e,n){
var r=e.pendingProps,i=rt.current,s=!1,o=(e.flags&128)!==0,l;
if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),He(rt,i&1),t===null)return dp(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={
mode:"hidden",children:o}
,!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=zd(o,r,0,null),t=bs(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=_p(n),e.memoizedState=vp,t):Gm(e,o));
if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return NS(t,e,o,r,l,i,n);
if(s){
s=r.fallback,o=e.mode,i=t.child,l=i.sibling;
var c={
mode:"hidden",children:r.children}
;
return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=c,e.deletions=null):(r=Ni(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Ni(l,s):(s=bs(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?_p(n):{
baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions}
,s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=vp,r}
return s=t.child,t=s.sibling,r=Ni(s,{
mode:"visible",children:r.children}
),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}
function Gm(t,e){
return e=zd({
mode:"visible",children:e}
,t.mode,0,null),e.return=t,t.child=e}
function Qc(t,e,n,r){
return r!==null&&Nm(r),Po(e,t.child,null,n),t=Gm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}
function NS(t,e,n,r,i,s,o){
if(n)return e.flags&256?(e.flags&=-257,r=tf(Error(Y(422))),Qc(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=zd({
mode:"visible",children:r.children}
,i,0,null),s=bs(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Po(e,t.child,null,o),e.child.memoizedState=_p(o),e.memoizedState=vp,s);
if(!(e.mode&1))return Qc(t,e,o,null);
if(i.data==="$!"){
if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;
return r=l,s=Error(Y(419)),r=tf(s,r,void 0),Qc(t,e,o,r)}
if(l=(o&t.childLanes)!==0,dn||l){
if(r=St,r!==null){
switch(o&-o){
case 4:i=2;
break;
case 16:i=8;
break;
case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;
break;
case 536870912:i=268435456;
break;
default:i=0}
i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,zr(t,i),Zn(r,t,i,-1))}
return Xm(),r=tf(Error(Y(421))),Qc(t,e,o,r)}
return i.data==="$?"?(e.flags|=128,e.child=t.child,e=qS.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,vn=Ai(i.nextSibling),xn=e,Ze=!0,Yn=null,t!==null&&(Dn[On++]=Or,Dn[On++]=Vr,Dn[On++]=Is,Or=t.id,Vr=t.overflow,Is=e),e=Gm(e,r.children),e.flags|=4096,e)}
function yy(t,e,n){
t.lanes|=e;
var r=t.alternate;
r!==null&&(r.lanes|=e),hp(t.return,e,n)}
function nf(t,e,n,r,i){
var s=t.memoizedState;
s===null?t.memoizedState={
isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}
:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}
function Nx(t,e,n){
var r=e.pendingProps,i=r.revealOrder,s=r.tail;
if(tn(t,e,r.children,n),r=rt.current,r&2)r=r&1|2,e.flags|=128;
else{
if(t!==null&&t.flags&128)e:for(t=e.child;
t!==null;
){
if(t.tag===13)t.memoizedState!==null&&yy(t,n,e);
else if(t.tag===19)yy(t,n,e);
else if(t.child!==null){
t.child.return=t,t=t.child;
continue}
if(t===e)break e;
for(;
t.sibling===null;
){
if(t.return===null||t.return===e)break e;
t=t.return}
t.sibling.return=t.return,t=t.sibling}
r&=1}
if(He(rt,r),!(e.mode&1))e.memoizedState=null;
else switch(i){
case"forwards":for(n=e.child,i=null;
n!==null;
)t=n.alternate,t!==null&&Ju(t)===null&&(i=n),n=n.sibling;
n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),nf(e,!1,i,n,s);
break;
case"backwards":for(n=null,i=e.child,e.child=null;
i!==null;
){
if(t=i.alternate,t!==null&&Ju(t)===null){
e.child=i;
break}
t=i.sibling,i.sibling=n,n=i,i=t}
nf(e,!0,n,null,s);
break;
case"together":nf(e,!1,null,null,void 0);
break;
default:e.memoizedState=null}
return e.child}
function bu(t,e){
!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}
function qr(t,e,n){
if(t!==null&&(e.dependencies=t.dependencies),As|=e.lanes,!(n&e.childLanes))return null;
if(t!==null&&e.child!==t.child)throw Error(Y(153));
if(e.child!==null){
for(t=e.child,n=Ni(t,t.pendingProps),e.child=n,n.return=e;
t.sibling!==null;
)t=t.sibling,n=n.sibling=Ni(t,t.pendingProps),n.return=e;
n.sibling=null}
return e.child}
function PS(t,e,n){
switch(e.tag){
case 3:kx(e),No();
break;
case 5:rx(e);
break;
case 1:fn(e.type)&&Wu(e);
break;
case 4:Lm(e,e.stateNode.containerInfo);
break;
case 10:var r=e.type._context,i=e.memoizedProps.value;
He(Qu,r._currentValue),r._currentValue=i;
break;
case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(He(rt,rt.current&1),e.flags|=128,null):n&e.child.childLanes?Rx(t,e,n):(He(rt,rt.current&1),t=qr(t,e,n),t!==null?t.sibling:null);
He(rt,rt.current&1);
break;
case 19:if(r=(n&e.childLanes)!==0,t.flags&128){
if(r)return Nx(t,e,n);
e.flags|=128}
if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),He(rt,rt.current),r)break;
return null;
case 22:case 23:return e.lanes=0,Ax(t,e,n)}
return qr(t,e,n)}
var Px,wp,Dx,Ox;
Px=function(t,e){
for(var n=e.child;
n!==null;
){
if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);
else if(n.tag!==4&&n.child!==null){
n.child.return=n,n=n.child;
continue}
if(n===e)break;
for(;
n.sibling===null;
){
if(n.return===null||n.return===e)return;
n=n.return}
n.sibling.return=n.return,n=n.sibling}
}
;
wp=function(){
}
;
Dx=function(t,e,n,r){
var i=t.memoizedProps;
if(i!==r){
t=e.stateNode,_s(mr.current);
var s=null;
switch(n){
case"input":i=$f(t,i),r=$f(t,r),s=[];
break;
case"select":i=st({
}
,i,{
value:void 0}
),r=st({
}
,r,{
value:void 0}
),s=[];
break;
case"textarea":i=Gf(t,i),r=Gf(t,r),s=[];
break;
default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=qu)}
Hf(n,r);
var o;
n=null;
for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){
var l=i[u];
for(o in l)l.hasOwnProperty(o)&&(n||(n={
}
),n[o]="")}
else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(sl.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));
for(u in r){
var c=r[u];
if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){
for(o in l)!l.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={
}
),n[o]="");
for(o in c)c.hasOwnProperty(o)&&l[o]!==c[o]&&(n||(n={
}
),n[o]=c[o])}
else n||(s||(s=[]),s.push(u,n)),n=c;
else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(sl.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Qe("scroll",t),s||l===c||(s=[])):(s=s||[]).push(u,c))}
n&&(s=s||[]).push("style",n);
var u=s;
(e.updateQueue=u)&&(e.flags|=4)}
}
;
Ox=function(t,e,n,r){
n!==r&&(e.flags|=4)}
;
function ka(t,e){
if(!Ze)switch(t.tailMode){
case"hidden":e=t.tail;
for(var n=null;
e!==null;
)e.alternate!==null&&(n=e),e=e.sibling;
n===null?t.tail=null:n.sibling=null;
break;
case"collapsed":n=t.tail;
for(var r=null;
n!==null;
)n.alternate!==null&&(r=n),n=n.sibling;
r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}
}
function Wt(t){
var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;
if(e)for(var i=t.child;
i!==null;
)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;
else for(i=t.child;
i!==null;
)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;
return t.subtreeFlags|=r,t.childLanes=n,e}
function DS(t,e,n){
var r=e.pendingProps;
switch(Rm(e),e.tag){
case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Wt(e),null;
case 1:return fn(e.type)&&Gu(),Wt(e),null;
case 3:return r=e.stateNode,Do(),Xe(hn),Xe(Xt),Fm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Hc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Yn!==null&&(Cp(Yn),Yn=null))),wp(t,e),Wt(e),null;
case 5:jm(e);
var i=_s(yl.current);
if(n=e.type,t!==null&&e.stateNode!=null)Dx(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);
else{
if(!r){
if(e.stateNode===null)throw Error(Y(166));
return Wt(e),null}
if(t=_s(mr.current),Hc(e)){
r=e.stateNode,n=e.type;
var s=e.memoizedProps;
switch(r[fr]=e,r[ml]=s,t=(e.mode&1)!==0,n){
case"dialog":Qe("cancel",r),Qe("close",r);
break;
case"iframe":case"object":case"embed":Qe("load",r);
break;
case"video":case"audio":for(i=0;
i<ja.length;
i++)Qe(ja[i],r);
break;
case"source":Qe("error",r);
break;
case"img":case"image":case"link":Qe("error",r),Qe("load",r);
break;
case"details":Qe("toggle",r);
break;
case"input":S0(r,s),Qe("invalid",r);
break;
case"select":r._wrapperState={
wasMultiple:!!s.multiple}
,Qe("invalid",r);
break;
case"textarea":C0(r,s),Qe("invalid",r)}
Hf(n,s),i=null;
for(var o in s)if(s.hasOwnProperty(o)){
var l=s[o];
o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Wc(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Wc(r.textContent,l,t),i=["children",""+l]):sl.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Qe("scroll",r)}
switch(n){
case"input":jc(r),A0(r,s,!0);
break;
case"textarea":jc(r),k0(r);
break;
case"select":case"option":break;
default:typeof s.onClick=="function"&&(r.onclick=qu)}
r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}
else{
o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=lw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{
is:r.is}
):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[fr]=e,t[ml]=r,Px(t,e,!1,!1),e.stateNode=t;
e:{
switch(o=Kf(n,r),n){
case"dialog":Qe("cancel",t),Qe("close",t),i=r;
break;
case"iframe":case"object":case"embed":Qe("load",t),i=r;
break;
case"video":case"audio":for(i=0;
i<ja.length;
i++)Qe(ja[i],t);
i=r;
break;
case"source":Qe("error",t),i=r;
break;
case"img":case"image":case"link":Qe("error",t),Qe("load",t),i=r;
break;
case"details":Qe("toggle",t),i=r;
break;
case"input":S0(t,r),i=$f(t,r),Qe("invalid",t);
break;
case"option":i=r;
break;
case"select":t._wrapperState={
wasMultiple:!!r.multiple}
,i=st({
}
,r,{
value:void 0}
),Qe("invalid",t);
break;
case"textarea":C0(t,r),i=Gf(t,r),Qe("invalid",t);
break;
default:i=r}
Hf(n,i),l=i;
for(s in l)if(l.hasOwnProperty(s)){
var c=l[s];
s==="style"?dw(t,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&cw(t,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&ol(t,c):typeof c=="number"&&ol(t,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(sl.hasOwnProperty(s)?c!=null&&s==="onScroll"&&Qe("scroll",t):c!=null&&mm(t,s,c,o))}
switch(n){
case"input":jc(t),A0(t,r,!1);
break;
case"textarea":jc(t),k0(t);
break;
case"option":r.value!=null&&t.setAttribute("value",""+Bi(r.value));
break;
case"select":t.multiple=!!r.multiple,s=r.value,s!=null?_o(t,!!r.multiple,s,!1):r.defaultValue!=null&&_o(t,!!r.multiple,r.defaultValue,!0);
break;
default:typeof i.onClick=="function"&&(t.onclick=qu)}
switch(n){
case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;
break e;
case"img":r=!0;
break e;
default:r=!1}
}
r&&(e.flags|=4)}
e.ref!==null&&(e.flags|=512,e.flags|=2097152)}
return Wt(e),null;
case 6:if(t&&e.stateNode!=null)Ox(t,e,t.memoizedProps,r);
else{
if(typeof r!="string"&&e.stateNode===null)throw Error(Y(166));
if(n=_s(yl.current),_s(mr.current),Hc(e)){
if(r=e.stateNode,n=e.memoizedProps,r[fr]=e,(s=r.nodeValue!==n)&&(t=xn,t!==null))switch(t.tag){
case 3:Wc(r.nodeValue,n,(t.mode&1)!==0);
break;
case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Wc(r.nodeValue,n,(t.mode&1)!==0)}
s&&(e.flags|=4)}
else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[fr]=e,e.stateNode=r}
return Wt(e),null;
case 13:if(Xe(rt),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){
if(Ze&&vn!==null&&e.mode&1&&!(e.flags&128))Jw(),No(),e.flags|=98560,s=!1;
else if(s=Hc(e),r!==null&&r.dehydrated!==null){
if(t===null){
if(!s)throw Error(Y(318));
if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Y(317));
s[fr]=e}
else No(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;
Wt(e),s=!1}
else Yn!==null&&(Cp(Yn),Yn=null),s=!0;
if(!s)return e.flags&65536?e:null}
return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||rt.current&1?_t===0&&(_t=3):Xm())),e.updateQueue!==null&&(e.flags|=4),Wt(e),null);
case 4:return Do(),wp(t,e),t===null&&fl(e.stateNode.containerInfo),Wt(e),null;
case 10:return Om(e.type._context),Wt(e),null;
case 17:return fn(e.type)&&Gu(),Wt(e),null;
case 19:if(Xe(rt),s=e.memoizedState,s===null)return Wt(e),null;
if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ka(s,!1);
else{
if(_t!==0||t!==null&&t.flags&128)for(t=e.child;
t!==null;
){
if(o=Ju(t),o!==null){
for(e.flags|=128,ka(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;
n!==null;
)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{
lanes:t.lanes,firstContext:t.firstContext}
),n=n.sibling;
return He(rt,rt.current&1|2),e.child}
t=t.sibling}
s.tail!==null&&ut()>Vo&&(e.flags|=128,r=!0,ka(s,!1),e.lanes=4194304)}
else{
if(!r)if(t=Ju(o),t!==null){
if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ka(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ze)return Wt(e),null}
else 2*ut()-s.renderingStartTime>Vo&&n!==1073741824&&(e.flags|=128,r=!0,ka(s,!1),e.lanes=4194304);
s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}
return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ut(),e.sibling=null,n=rt.current,He(rt,r?n&1|2:n&1),e):(Wt(e),null);
case 22:case 23:return Ym(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?yn&1073741824&&(Wt(e),e.subtreeFlags&6&&(e.flags|=8192)):Wt(e),null;
case 24:return null;
case 25:return null}
throw Error(Y(156,e.tag))}
function OS(t,e){
switch(Rm(e),e.tag){
case 1:return fn(e.type)&&Gu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;
case 3:return Do(),Xe(hn),Xe(Xt),Fm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;
case 5:return jm(e),null;
case 13:if(Xe(rt),t=e.memoizedState,t!==null&&t.dehydrated!==null){
if(e.alternate===null)throw Error(Y(340));
No()}
return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;
case 19:return Xe(rt),null;
case 4:return Do(),null;
case 10:return Om(e.type._context),null;
case 22:case 23:return Ym(),null;
case 24:return null;
default:return null}
}
var Yc=!1,Qt=!1,VS=typeof WeakSet=="function"?WeakSet:Set,te=null;
function go(t,e){
var n=t.ref;
if(n!==null)if(typeof n=="function")try{
n(null)}
catch(r){
at(t,e,r)}
else n.current=null}
function xp(t,e,n){
try{
n()}
catch(r){
at(t,e,r)}
}
var vy=!1;
function MS(t,e){
if(ip=Uu,t=Fw(),Cm(t)){
if("selectionStart"in t)var n={
start:t.selectionStart,end:t.selectionEnd}
;
else e:{
n=(n=t.ownerDocument)&&n.defaultView||window;
var r=n.getSelection&&n.getSelection();
if(r&&r.rangeCount!==0){
n=r.anchorNode;
var i=r.anchorOffset,s=r.focusNode;
r=r.focusOffset;
try{
n.nodeType,s.nodeType}
catch{
n=null;
break e}
var o=0,l=-1,c=-1,u=0,d=0,m=t,g=null;
t:for(;
;
){
for(var _;
m!==n||i!==0&&m.nodeType!==3||(l=o+i),m!==s||r!==0&&m.nodeType!==3||(c=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(_=m.firstChild)!==null;
)g=m,m=_;
for(;
;
){
if(m===t)break t;
if(g===n&&++u===i&&(l=o),g===s&&++d===r&&(c=o),(_=m.nextSibling)!==null)break;
m=g,g=m.parentNode}
m=_}
n=l===-1||c===-1?null:{
start:l,end:c}
}
else n=null}
n=n||{
start:0,end:0}
}
else n=null;
for(sp={
focusedElem:t,selectionRange:n}
,Uu=!1,te=e;
te!==null;
)if(e=te,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,te=t;
else for(;
te!==null;
){
e=te;
try{
var w=e.alternate;
if(e.flags&1024)switch(e.tag){
case 0:case 11:case 15:break;
case 1:if(w!==null){
var N=w.memoizedProps,O=w.memoizedState,I=e.stateNode,E=I.getSnapshotBeforeUpdate(e.elementType===e.type?N:Kn(e.type,N),O);
I.__reactInternalSnapshotBeforeUpdate=E}
break;
case 3:var k=e.stateNode.containerInfo;
k.nodeType===1?k.textContent="":k.nodeType===9&&k.documentElement&&k.removeChild(k.documentElement);
break;
case 5:case 6:case 4:case 17:break;
default:throw Error(Y(163))}
}
catch(M){
at(e,e.return,M)}
if(t=e.sibling,t!==null){
t.return=e.return,te=t;
break}
te=e.return}
return w=vy,vy=!1,w}
function Qa(t,e,n){
var r=e.updateQueue;
if(r=r!==null?r.lastEffect:null,r!==null){
var i=r=r.next;
do{
if((i.tag&t)===t){
var s=i.destroy;
i.destroy=void 0,s!==void 0&&xp(e,n,s)}
i=i.next}
while(i!==r)}
}
function Ud(t,e){
if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){
var n=e=e.next;
do{
if((n.tag&t)===t){
var r=n.create;
n.destroy=r()}
n=n.next}
while(n!==e)}
}
function bp(t){
var e=t.ref;
if(e!==null){
var n=t.stateNode;
switch(t.tag){
case 5:t=n;
break;
default:t=n}
typeof e=="function"?e(t):e.current=t}
}
function Vx(t){
var e=t.alternate;
e!==null&&(t.alternate=null,Vx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[fr],delete e[ml],delete e[lp],delete e[vS],delete e[_S])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}
function Mx(t){
return t.tag===5||t.tag===3||t.tag===4}
function _y(t){
e:for(;
;
){
for(;
t.sibling===null;
){
if(t.return===null||Mx(t.return))return null;
t=t.return}
for(t.sibling.return=t.return,t=t.sibling;
t.tag!==5&&t.tag!==6&&t.tag!==18;
){
if(t.flags&2||t.child===null||t.tag===4)continue e;
t.child.return=t,t=t.child}
if(!(t.flags&2))return t.stateNode}
}
function Ep(t,e,n){
var r=t.tag;
if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=qu));
else if(r!==4&&(t=t.child,t!==null))for(Ep(t,e,n),t=t.sibling;
t!==null;
)Ep(t,e,n),t=t.sibling}
function Tp(t,e,n){
var r=t.tag;
if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);
else if(r!==4&&(t=t.child,t!==null))for(Tp(t,e,n),t=t.sibling;
t!==null;
)Tp(t,e,n),t=t.sibling}
var Nt=null,Qn=!1;
function di(t,e,n){
for(n=n.child;
n!==null;
)Lx(t,e,n),n=n.sibling}
function Lx(t,e,n){
if(pr&&typeof pr.onCommitFiberUnmount=="function")try{
pr.onCommitFiberUnmount(Dd,n)}
catch{
}
switch(n.tag){
case 5:Qt||go(n,e);
case 6:var r=Nt,i=Qn;
Nt=null,di(t,e,n),Nt=r,Qn=i,Nt!==null&&(Qn?(t=Nt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Nt.removeChild(n.stateNode));
break;
case 18:Nt!==null&&(Qn?(t=Nt,n=n.stateNode,t.nodeType===8?Qh(t.parentNode,n):t.nodeType===1&&Qh(t,n),ul(t)):Qh(Nt,n.stateNode));
break;
case 4:r=Nt,i=Qn,Nt=n.stateNode.containerInfo,Qn=!0,di(t,e,n),Nt=r,Qn=i;
break;
case 0:case 11:case 14:case 15:if(!Qt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){
i=r=r.next;
do{
var s=i,o=s.destroy;
s=s.tag,o!==void 0&&(s&2||s&4)&&xp(n,e,o),i=i.next}
while(i!==r)}
di(t,e,n);
break;
case 1:if(!Qt&&(go(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{
r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}
catch(l){
at(n,e,l)}
di(t,e,n);
break;
case 21:di(t,e,n);
break;
case 22:n.mode&1?(Qt=(r=Qt)||n.memoizedState!==null,di(t,e,n),Qt=r):di(t,e,n);
break;
default:di(t,e,n)}
}
function wy(t){
var e=t.updateQueue;
if(e!==null){
t.updateQueue=null;
var n=t.stateNode;
n===null&&(n=t.stateNode=new VS),e.forEach(function(r){
var i=GS.bind(null,t,r);
n.has(r)||(n.add(r),r.then(i,i))}
)}
}
function Hn(t,e){
var n=e.deletions;
if(n!==null)for(var r=0;
r<n.length;
r++){
var i=n[r];
try{
var s=t,o=e,l=o;
e:for(;
l!==null;
){
switch(l.tag){
case 5:Nt=l.stateNode,Qn=!1;
break e;
case 3:Nt=l.stateNode.containerInfo,Qn=!0;
break e;
case 4:Nt=l.stateNode.containerInfo,Qn=!0;
break e}
l=l.return}
if(Nt===null)throw Error(Y(160));
Lx(s,o,i),Nt=null,Qn=!1;
var c=i.alternate;
c!==null&&(c.return=null),i.return=null}
catch(u){
at(i,e,u)}
}
if(e.subtreeFlags&12854)for(e=e.child;
e!==null;
)jx(e,t),e=e.sibling}
function jx(t,e){
var n=t.alternate,r=t.flags;
switch(t.tag){
case 0:case 11:case 14:case 15:if(Hn(e,t),cr(t),r&4){
try{
Qa(3,t,t.return),Ud(3,t)}
catch(N){
at(t,t.return,N)}
try{
Qa(5,t,t.return)}
catch(N){
at(t,t.return,N)}
}
break;
case 1:Hn(e,t),cr(t),r&512&&n!==null&&go(n,n.return);
break;
case 5:if(Hn(e,t),cr(t),r&512&&n!==null&&go(n,n.return),t.flags&32){
var i=t.stateNode;
try{
ol(i,"")}
catch(N){
at(t,t.return,N)}
}
if(r&4&&(i=t.stateNode,i!=null)){
var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,c=t.updateQueue;
if(t.updateQueue=null,c!==null)try{
l==="input"&&s.type==="radio"&&s.name!=null&&ow(i,s),Kf(l,o);
var u=Kf(l,s);
for(o=0;
o<c.length;
o+=2){
var d=c[o],m=c[o+1];
d==="style"?dw(i,m):d==="dangerouslySetInnerHTML"?cw(i,m):d==="children"?ol(i,m):mm(i,d,m,u)}
switch(l){
case"input":zf(i,s);
break;
case"textarea":aw(i,s);
break;
case"select":var g=i._wrapperState.wasMultiple;
i._wrapperState.wasMultiple=!!s.multiple;
var _=s.value;
_!=null?_o(i,!!s.multiple,_,!1):g!==!!s.multiple&&(s.defaultValue!=null?_o(i,!!s.multiple,s.defaultValue,!0):_o(i,!!s.multiple,s.multiple?[]:"",!1))}
i[ml]=s}
catch(N){
at(t,t.return,N)}
}
break;
case 6:if(Hn(e,t),cr(t),r&4){
if(t.stateNode===null)throw Error(Y(162));
i=t.stateNode,s=t.memoizedProps;
try{
i.nodeValue=s}
catch(N){
at(t,t.return,N)}
}
break;
case 3:if(Hn(e,t),cr(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{
ul(e.containerInfo)}
catch(N){
at(t,t.return,N)}
break;
case 4:Hn(e,t),cr(t);
break;
case 13:Hn(e,t),cr(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Km=ut())),r&4&&wy(t);
break;
case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Qt=(u=Qt)||d,Hn(e,t),Qt=u):Hn(e,t),cr(t),r&8192){
if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(te=t,d=t.child;
d!==null;
){
for(m=te=d;
te!==null;
){
switch(g=te,_=g.child,g.tag){
case 0:case 11:case 14:case 15:Qa(4,g,g.return);
break;
case 1:go(g,g.return);
var w=g.stateNode;
if(typeof w.componentWillUnmount=="function"){
r=g,n=g.return;
try{
e=r,w.props=e.memoizedProps,w.state=e.memoizedState,w.componentWillUnmount()}
catch(N){
at(r,n,N)}
}
break;
case 5:go(g,g.return);
break;
case 22:if(g.memoizedState!==null){
by(m);
continue}
}
_!==null?(_.return=g,te=_):by(m)}
d=d.sibling}
e:for(d=null,m=t;
;
){
if(m.tag===5){
if(d===null){
d=m;
try{
i=m.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,c=m.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=uw("display",o))}
catch(N){
at(t,t.return,N)}
}
}
else if(m.tag===6){
if(d===null)try{
m.stateNode.nodeValue=u?"":m.memoizedProps}
catch(N){
at(t,t.return,N)}
}
else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){
m.child.return=m,m=m.child;
continue}
if(m===t)break e;
for(;
m.sibling===null;
){
if(m.return===null||m.return===t)break e;
d===m&&(d=null),m=m.return}
d===m&&(d=null),m.sibling.return=m.return,m=m.sibling}
}
break;
case 19:Hn(e,t),cr(t),r&4&&wy(t);
break;
case 21:break;
default:Hn(e,t),cr(t)}
}
function cr(t){
var e=t.flags;
if(e&2){
try{
e:{
for(var n=t.return;
n!==null;
){
if(Mx(n)){
var r=n;
break e}
n=n.return}
throw Error(Y(160))}
switch(r.tag){
case 5:var i=r.stateNode;
r.flags&32&&(ol(i,""),r.flags&=-33);
var s=_y(t);
Tp(t,s,i);
break;
case 3:case 4:var o=r.stateNode.containerInfo,l=_y(t);
Ep(t,l,o);
break;
default:throw Error(Y(161))}
}
catch(c){
at(t,t.return,c)}
t.flags&=-3}
e&4096&&(t.flags&=-4097)}
function LS(t,e,n){
te=t,Fx(t)}
function Fx(t,e,n){
for(var r=(t.mode&1)!==0;
te!==null;
){
var i=te,s=i.child;
if(i.tag===22&&r){
var o=i.memoizedState!==null||Yc;
if(!o){
var l=i.alternate,c=l!==null&&l.memoizedState!==null||Qt;
l=Yc;
var u=Qt;
if(Yc=o,(Qt=c)&&!u)for(te=i;
te!==null;
)o=te,c=o.child,o.tag===22&&o.memoizedState!==null?Ey(i):c!==null?(c.return=o,te=c):Ey(i);
for(;
s!==null;
)te=s,Fx(s),s=s.sibling;
te=i,Yc=l,Qt=u}
xy(t)}
else i.subtreeFlags&8772&&s!==null?(s.return=i,te=s):xy(t)}
}
function xy(t){
for(;
te!==null;
){
var e=te;
if(e.flags&8772){
var n=e.alternate;
try{
if(e.flags&8772)switch(e.tag){
case 0:case 11:case 15:Qt||Ud(5,e);
break;
case 1:var r=e.stateNode;
if(e.flags&4&&!Qt)if(n===null)r.componentDidMount();
else{
var i=e.elementType===e.type?n.memoizedProps:Kn(e.type,n.memoizedProps);
r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}
var s=e.updateQueue;
s!==null&&sy(e,s,r);
break;
case 3:var o=e.updateQueue;
if(o!==null){
if(n=null,e.child!==null)switch(e.child.tag){
case 5:n=e.child.stateNode;
break;
case 1:n=e.child.stateNode}
sy(e,o,n)}
break;
case 5:var l=e.stateNode;
if(n===null&&e.flags&4){
n=l;
var c=e.memoizedProps;
switch(e.type){
case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();
break;
case"img":c.src&&(n.src=c.src)}
}
break;
case 6:break;
case 4:break;
case 12:break;
case 13:if(e.memoizedState===null){
var u=e.alternate;
if(u!==null){
var d=u.memoizedState;
if(d!==null){
var m=d.dehydrated;
m!==null&&ul(m)}
}
}
break;
case 19:case 17:case 21:case 22:case 23:case 25:break;
default:throw Error(Y(163))}
Qt||e.flags&512&&bp(e)}
catch(g){
at(e,e.return,g)}
}
if(e===t){
te=null;
break}
if(n=e.sibling,n!==null){
n.return=e.return,te=n;
break}
te=e.return}
}
function by(t){
for(;
te!==null;
){
var e=te;
if(e===t){
te=null;
break}
var n=e.sibling;
if(n!==null){
n.return=e.return,te=n;
break}
te=e.return}
}
function Ey(t){
for(;
te!==null;
){
var e=te;
try{
switch(e.tag){
case 0:case 11:case 15:var n=e.return;
try{
Ud(4,e)}
catch(c){
at(e,n,c)}
break;
case 1:var r=e.stateNode;
if(typeof r.componentDidMount=="function"){
var i=e.return;
try{
r.componentDidMount()}
catch(c){
at(e,i,c)}
}
var s=e.return;
try{
bp(e)}
catch(c){
at(e,s,c)}
break;
case 5:var o=e.return;
try{
bp(e)}
catch(c){
at(e,o,c)}
}
}
catch(c){
at(e,e.return,c)}
if(e===t){
te=null;
break}
var l=e.sibling;
if(l!==null){
l.return=e.return,te=l;
break}
te=e.return}
}
var jS=Math.ceil,td=Xr.ReactCurrentDispatcher,Wm=Xr.ReactCurrentOwner,Ln=Xr.ReactCurrentBatchConfig,Re=0,St=null,gt=null,Vt=0,yn=0,yo=Ki(0),_t=0,xl=null,As=0,$d=0,Hm=0,Ya=null,cn=null,Km=0,Vo=1/0,Pr=null,nd=!1,Ip=null,ki=null,Xc=!1,bi=null,rd=0,Xa=0,Sp=null,Eu=-1,Tu=0;
function nn(){
return Re&6?ut():Eu!==-1?Eu:Eu=ut()}
function Ri(t){
return t.mode&1?Re&2&&Vt!==0?Vt&-Vt:xS.transition!==null?(Tu===0&&(Tu=Ew()),Tu):(t=Be,t!==0||(t=window.event,t=t===void 0?16:Rw(t.type)),t):1}
function Zn(t,e,n,r){
if(50<Xa)throw Xa=0,Sp=null,Error(Y(185));
jl(t,n,r),(!(Re&2)||t!==St)&&(t===St&&(!(Re&2)&&($d|=n),_t===4&&gi(t,Vt)),pn(t,r),n===1&&Re===0&&!(e.mode&1)&&(Vo=ut()+500,jd&&Qi()))}
function pn(t,e){
var n=t.callbackNode;
xI(t,e);
var r=Bu(t,t===St?Vt:0);
if(r===0)n!==null&&P0(n),t.callbackNode=null,t.callbackPriority=0;
else if(e=r&-r,t.callbackPriority!==e){
if(n!=null&&P0(n),e===1)t.tag===0?wS(Ty.bind(null,t)):Qw(Ty.bind(null,t)),gS(function(){
!(Re&6)&&Qi()}
),n=null;
else{
switch(Tw(r)){
case 1:n=wm;
break;
case 4:n=xw;
break;
case 16:n=Fu;
break;
case 536870912:n=bw;
break;
default:n=Fu}
n=Hx(n,Bx.bind(null,t))}
t.callbackPriority=e,t.callbackNode=n}
}
function Bx(t,e){
if(Eu=-1,Tu=0,Re&6)throw Error(Y(327));
var n=t.callbackNode;
if(To()&&t.callbackNode!==n)return null;
var r=Bu(t,t===St?Vt:0);
if(r===0)return null;
if(r&30||r&t.expiredLanes||e)e=id(t,r);
else{
e=r;
var i=Re;
Re|=2;
var s=$x();
(St!==t||Vt!==e)&&(Pr=null,Vo=ut()+500,xs(t,e));
do try{
US();
break}
catch(l){
Ux(t,l)}
while(1);
Dm(),td.current=s,Re=i,gt!==null?e=0:(St=null,Vt=0,e=_t)}
if(e!==0){
if(e===2&&(i=Zf(t),i!==0&&(r=i,e=Ap(t,i))),e===1)throw n=xl,xs(t,0),gi(t,r),pn(t,ut()),n;
if(e===6)gi(t,r);
else{
if(i=t.current.alternate,!(r&30)&&!FS(i)&&(e=id(t,r),e===2&&(s=Zf(t),s!==0&&(r=s,e=Ap(t,s))),e===1))throw n=xl,xs(t,0),gi(t,r),pn(t,ut()),n;
switch(t.finishedWork=i,t.finishedLanes=r,e){
case 0:case 1:throw Error(Y(345));
case 2:ps(t,cn,Pr);
break;
case 3:if(gi(t,r),(r&130023424)===r&&(e=Km+500-ut(),10<e)){
if(Bu(t,0)!==0)break;
if(i=t.suspendedLanes,(i&r)!==r){
nn(),t.pingedLanes|=t.suspendedLanes&i;
break}
t.timeoutHandle=ap(ps.bind(null,t,cn,Pr),e);
break}
ps(t,cn,Pr);
break;
case 4:if(gi(t,r),(r&4194240)===r)break;
for(e=t.eventTimes,i=-1;
0<r;
){
var o=31-Jn(r);
s=1<<o,o=e[o],o>i&&(i=o),r&=~s}
if(r=i,r=ut()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*jS(r/1960))-r,10<r){
t.timeoutHandle=ap(ps.bind(null,t,cn,Pr),r);
break}
ps(t,cn,Pr);
break;
case 5:ps(t,cn,Pr);
break;
default:throw Error(Y(329))}
}
}
return pn(t,ut()),t.callbackNode===n?Bx.bind(null,t):null}
function Ap(t,e){
var n=Ya;
return t.current.memoizedState.isDehydrated&&(xs(t,e).flags|=256),t=id(t,e),t!==2&&(e=cn,cn=n,e!==null&&Cp(e)),t}
function Cp(t){
cn===null?cn=t:cn.push.apply(cn,t)}
function FS(t){
for(var e=t;
;
){
if(e.flags&16384){
var n=e.updateQueue;
if(n!==null&&(n=n.stores,n!==null))for(var r=0;
r<n.length;
r++){
var i=n[r],s=i.getSnapshot;
i=i.value;
try{
if(!er(s(),i))return!1}
catch{
return!1}
}
}
if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;
else{
if(e===t)break;
for(;
e.sibling===null;
){
if(e.return===null||e.return===t)return!0;
e=e.return}
e.sibling.return=e.return,e=e.sibling}
}
return!0}
function gi(t,e){
for(e&=~Hm,e&=~$d,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;
0<e;
){
var n=31-Jn(e),r=1<<n;
t[n]=-1,e&=~r}
}
function Ty(t){
if(Re&6)throw Error(Y(327));
To();
var e=Bu(t,0);
if(!(e&1))return pn(t,ut()),null;
var n=id(t,e);
if(t.tag!==0&&n===2){
var r=Zf(t);
r!==0&&(e=r,n=Ap(t,r))}
if(n===1)throw n=xl,xs(t,0),gi(t,e),pn(t,ut()),n;
if(n===6)throw Error(Y(345));
return t.finishedWork=t.current.alternate,t.finishedLanes=e,ps(t,cn,Pr),pn(t,ut()),null}
function Qm(t,e){
var n=Re;
Re|=1;
try{
return t(e)}
finally{
Re=n,Re===0&&(Vo=ut()+500,jd&&Qi())}
}
function Cs(t){
bi!==null&&bi.tag===0&&!(Re&6)&&To();
var e=Re;
Re|=1;
var n=Ln.transition,r=Be;
try{
if(Ln.transition=null,Be=1,t)return t()}
finally{
Be=r,Ln.transition=n,Re=e,!(Re&6)&&Qi()}
}
function Ym(){
yn=yo.current,Xe(yo)}
function xs(t,e){
t.finishedWork=null,t.finishedLanes=0;
var n=t.timeoutHandle;
if(n!==-1&&(t.timeoutHandle=-1,mS(n)),gt!==null)for(n=gt.return;
n!==null;
){
var r=n;
switch(Rm(r),r.tag){
case 1:r=r.type.childContextTypes,r!=null&&Gu();
break;
case 3:Do(),Xe(hn),Xe(Xt),Fm();
break;
case 5:jm(r);
break;
case 4:Do();
break;
case 13:Xe(rt);
break;
case 19:Xe(rt);
break;
case 10:Om(r.type._context);
break;
case 22:case 23:Ym()}
n=n.return}
if(St=t,gt=t=Ni(t.current,null),Vt=yn=e,_t=0,xl=null,Hm=$d=As=0,cn=Ya=null,vs!==null){
for(e=0;
e<vs.length;
e++)if(n=vs[e],r=n.interleaved,r!==null){
n.interleaved=null;
var i=r.next,s=n.pending;
if(s!==null){
var o=s.next;
s.next=i,r.next=o}
n.pending=r}
vs=null}
return t}
function Ux(t,e){
do{
var n=gt;
try{
if(Dm(),wu.current=ed,Zu){
for(var r=it.memoizedState;
r!==null;
){
var i=r.queue;
i!==null&&(i.pending=null),r=r.next}
Zu=!1}
if(Ss=0,It=vt=it=null,Ka=!1,vl=0,Wm.current=null,n===null||n.return===null){
_t=1,xl=e,gt=null;
break}
e:{
var s=t,o=n.return,l=n,c=e;
if(e=Vt,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){
var u=c,d=l,m=d.tag;
if(!(d.mode&1)&&(m===0||m===11||m===15)){
var g=d.alternate;
g?(d.updateQueue=g.updateQueue,d.memoizedState=g.memoizedState,d.lanes=g.lanes):(d.updateQueue=null,d.memoizedState=null)}
var _=dy(o);
if(_!==null){
_.flags&=-257,hy(_,o,l,s,e),_.mode&1&&uy(s,u,e),e=_,c=u;
var w=e.updateQueue;
if(w===null){
var N=new Set;
N.add(c),e.updateQueue=N}
else w.add(c);
break e}
else{
if(!(e&1)){
uy(s,u,e),Xm();
break e}
c=Error(Y(426))}
}
else if(Ze&&l.mode&1){
var O=dy(o);
if(O!==null){
!(O.flags&65536)&&(O.flags|=256),hy(O,o,l,s,e),Nm(Oo(c,l));
break e}
}
s=c=Oo(c,l),_t!==4&&(_t=2),Ya===null?Ya=[s]:Ya.push(s),s=o;
do{
switch(s.tag){
case 3:s.flags|=65536,e&=-e,s.lanes|=e;
var I=Tx(s,c,e);
iy(s,I);
break e;
case 1:l=c;
var E=s.type,k=s.stateNode;
if(!(s.flags&128)&&(typeof E.getDerivedStateFromError=="function"||k!==null&&typeof k.componentDidCatch=="function"&&(ki===null||!ki.has(k)))){
s.flags|=65536,e&=-e,s.lanes|=e;
var M=Ix(s,l,e);
iy(s,M);
break e}
}
s=s.return}
while(s!==null)}
qx(n)}
catch(G){
e=G,gt===n&&n!==null&&(gt=n=n.return);
continue}
break}
while(1)}
function $x(){
var t=td.current;
return td.current=ed,t===null?ed:t}
function Xm(){
(_t===0||_t===3||_t===2)&&(_t=4),St===null||!(As&268435455)&&!($d&268435455)||gi(St,Vt)}
function id(t,e){
var n=Re;
Re|=2;
var r=$x();
(St!==t||Vt!==e)&&(Pr=null,xs(t,e));
do try{
BS();
break}
catch(i){
Ux(t,i)}
while(1);
if(Dm(),Re=n,td.current=r,gt!==null)throw Error(Y(261));
return St=null,Vt=0,_t}
function BS(){
for(;
gt!==null;
)zx(gt)}
function US(){
for(;
gt!==null&&!hI();
)zx(gt)}
function zx(t){
var e=Wx(t.alternate,t,yn);
t.memoizedProps=t.pendingProps,e===null?qx(t):gt=e,Wm.current=null}
function qx(t){
var e=t;
do{
var n=e.alternate;
if(t=e.return,e.flags&32768){
if(n=OS(n,e),n!==null){
n.flags&=32767,gt=n;
return}
if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;
else{
_t=6,gt=null;
return}
}
else if(n=DS(n,e,yn),n!==null){
gt=n;
return}
if(e=e.sibling,e!==null){
gt=e;
return}
gt=e=t}
while(e!==null);
_t===0&&(_t=5)}
function ps(t,e,n){
var r=Be,i=Ln.transition;
try{
Ln.transition=null,Be=1,$S(t,e,n,r)}
finally{
Ln.transition=i,Be=r}
return null}
function $S(t,e,n,r){
do To();
while(bi!==null);
if(Re&6)throw Error(Y(327));
n=t.finishedWork;
var i=t.finishedLanes;
if(n===null)return null;
if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(Y(177));
t.callbackNode=null,t.callbackPriority=0;
var s=n.lanes|n.childLanes;
if(bI(t,s),t===St&&(gt=St=null,Vt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Xc||(Xc=!0,Hx(Fu,function(){
return To(),null}
)),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){
s=Ln.transition,Ln.transition=null;
var o=Be;
Be=1;
var l=Re;
Re|=4,Wm.current=null,MS(t,n),jx(n,t),lS(sp),Uu=!!ip,sp=ip=null,t.current=n,LS(n),fI(),Re=l,Be=o,Ln.transition=s}
else t.current=n;
if(Xc&&(Xc=!1,bi=t,rd=i),s=t.pendingLanes,s===0&&(ki=null),gI(n.stateNode),pn(t,ut()),e!==null)for(r=t.onRecoverableError,n=0;
n<e.length;
n++)i=e[n],r(i.value,{
componentStack:i.stack,digest:i.digest}
);
if(nd)throw nd=!1,t=Ip,Ip=null,t;
return rd&1&&t.tag!==0&&To(),s=t.pendingLanes,s&1?t===Sp?Xa++:(Xa=0,Sp=t):Xa=0,Qi(),null}
function To(){
if(bi!==null){
var t=Tw(rd),e=Ln.transition,n=Be;
try{
if(Ln.transition=null,Be=16>t?16:t,bi===null)var r=!1;
else{
if(t=bi,bi=null,rd=0,Re&6)throw Error(Y(331));
var i=Re;
for(Re|=4,te=t.current;
te!==null;
){
var s=te,o=s.child;
if(te.flags&16){
var l=s.deletions;
if(l!==null){
for(var c=0;
c<l.length;
c++){
var u=l[c];
for(te=u;
te!==null;
){
var d=te;
switch(d.tag){
case 0:case 11:case 15:Qa(8,d,s)}
var m=d.child;
if(m!==null)m.return=d,te=m;
else for(;
te!==null;
){
d=te;
var g=d.sibling,_=d.return;
if(Vx(d),d===u){
te=null;
break}
if(g!==null){
g.return=_,te=g;
break}
te=_}
}
}
var w=s.alternate;
if(w!==null){
var N=w.child;
if(N!==null){
w.child=null;
do{
var O=N.sibling;
N.sibling=null,N=O}
while(N!==null)}
}
te=s}
}
if(s.subtreeFlags&2064&&o!==null)o.return=s,te=o;
else e:for(;
te!==null;
){
if(s=te,s.flags&2048)switch(s.tag){
case 0:case 11:case 15:Qa(9,s,s.return)}
var I=s.sibling;
if(I!==null){
I.return=s.return,te=I;
break e}
te=s.return}
}
var E=t.current;
for(te=E;
te!==null;
){
o=te;
var k=o.child;
if(o.subtreeFlags&2064&&k!==null)k.return=o,te=k;
else e:for(o=E;
te!==null;
){
if(l=te,l.flags&2048)try{
switch(l.tag){
case 0:case 11:case 15:Ud(9,l)}
}
catch(G){
at(l,l.return,G)}
if(l===o){
te=null;
break e}
var M=l.sibling;
if(M!==null){
M.return=l.return,te=M;
break e}
te=l.return}
}
if(Re=i,Qi(),pr&&typeof pr.onPostCommitFiberRoot=="function")try{
pr.onPostCommitFiberRoot(Dd,t)}
catch{
}
r=!0}
return r}
finally{
Be=n,Ln.transition=e}
}
return!1}
function Iy(t,e,n){
e=Oo(n,e),e=Tx(t,e,1),t=Ci(t,e,1),e=nn(),t!==null&&(jl(t,1,e),pn(t,e))}
function at(t,e,n){
if(t.tag===3)Iy(t,t,n);
else for(;
e!==null;
){
if(e.tag===3){
Iy(e,t,n);
break}
else if(e.tag===1){
var r=e.stateNode;
if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ki===null||!ki.has(r))){
t=Oo(n,t),t=Ix(e,t,1),e=Ci(e,t,1),t=nn(),e!==null&&(jl(e,1,t),pn(e,t));
break}
}
e=e.return}
}
function zS(t,e,n){
var r=t.pingCache;
r!==null&&r.delete(e),e=nn(),t.pingedLanes|=t.suspendedLanes&n,St===t&&(Vt&n)===n&&(_t===4||_t===3&&(Vt&130023424)===Vt&&500>ut()-Km?xs(t,0):Hm|=n),pn(t,e)}
function Gx(t,e){
e===0&&(t.mode&1?(e=Uc,Uc<<=1,!(Uc&130023424)&&(Uc=4194304)):e=1);
var n=nn();
t=zr(t,e),t!==null&&(jl(t,e,n),pn(t,n))}
function qS(t){
var e=t.memoizedState,n=0;
e!==null&&(n=e.retryLane),Gx(t,n)}
function GS(t,e){
var n=0;
switch(t.tag){
case 13:var r=t.stateNode,i=t.memoizedState;
i!==null&&(n=i.retryLane);
break;
case 19:r=t.stateNode;
break;
default:throw Error(Y(314))}
r!==null&&r.delete(e),Gx(t,n)}
var Wx;
Wx=function(t,e,n){
if(t!==null)if(t.memoizedProps!==e.pendingProps||hn.current)dn=!0;
else{
if(!(t.lanes&n)&&!(e.flags&128))return dn=!1,PS(t,e,n);
dn=!!(t.flags&131072)}
else dn=!1,Ze&&e.flags&1048576&&Yw(e,Ku,e.index);
switch(e.lanes=0,e.tag){
case 2:var r=e.type;
bu(t,e),t=e.pendingProps;
var i=Ro(e,Xt.current);
Eo(e,n),i=Um(null,e,r,t,i,n);
var s=$m();
return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,fn(r)?(s=!0,Wu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Mm(e),i.updater=Bd,e.stateNode=i,i._reactInternals=e,pp(e,r,t,n),e=yp(null,e,r,!0,s,n)):(e.tag=0,Ze&&s&&km(e),tn(null,e,i,n),e=e.child),e;
case 16:r=e.elementType;
e:{
switch(bu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=HS(r),t=Kn(r,t),i){
case 0:e=gp(null,e,r,t,n);
break e;
case 1:e=my(null,e,r,t,n);
break e;
case 11:e=fy(null,e,r,t,n);
break e;
case 14:e=py(null,e,r,Kn(r.type,t),n);
break e}
throw Error(Y(306,r,""))}
return e;
case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kn(r,i),gp(t,e,r,i,n);
case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kn(r,i),my(t,e,r,i,n);
case 3:e:{
if(kx(e),t===null)throw Error(Y(387));
r=e.pendingProps,s=e.memoizedState,i=s.element,nx(t,e),Xu(e,r,null,n);
var o=e.memoizedState;
if(r=o.element,s.isDehydrated)if(s={
element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions}
,e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){
i=Oo(Error(Y(423)),e),e=gy(t,e,r,n,i);
break e}
else if(r!==i){
i=Oo(Error(Y(424)),e),e=gy(t,e,r,n,i);
break e}
else for(vn=Ai(e.stateNode.containerInfo.firstChild),xn=e,Ze=!0,Yn=null,n=ex(e,null,r,n),e.child=n;
n;
)n.flags=n.flags&-3|4096,n=n.sibling;
else{
if(No(),r===i){
e=qr(t,e,n);
break e}
tn(t,e,r,n)}
e=e.child}
return e;
case 5:return rx(e),t===null&&dp(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,op(r,i)?o=null:s!==null&&op(r,s)&&(e.flags|=32),Cx(t,e),tn(t,e,o,n),e.child;
case 6:return t===null&&dp(e),null;
case 13:return Rx(t,e,n);
case 4:return Lm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Po(e,null,r,n):tn(t,e,r,n),e.child;
case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kn(r,i),fy(t,e,r,i,n);
case 7:return tn(t,e,e.pendingProps,n),e.child;
case 8:return tn(t,e,e.pendingProps.children,n),e.child;
case 12:return tn(t,e,e.pendingProps.children,n),e.child;
case 10:e:{
if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,He(Qu,r._currentValue),r._currentValue=o,s!==null)if(er(s.value,o)){
if(s.children===i.children&&!hn.current){
e=qr(t,e,n);
break e}
}
else for(s=e.child,s!==null&&(s.return=e);
s!==null;
){
var l=s.dependencies;
if(l!==null){
o=s.child;
for(var c=l.firstContext;
c!==null;
){
if(c.context===r){
if(s.tag===1){
c=Br(-1,n&-n),c.tag=2;
var u=s.updateQueue;
if(u!==null){
u=u.shared;
var d=u.pending;
d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}
}
s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),hp(s.return,n,e),l.lanes|=n;
break}
c=c.next}
}
else if(s.tag===10)o=s.type===e.type?null:s.child;
else if(s.tag===18){
if(o=s.return,o===null)throw Error(Y(341));
o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),hp(o,n,e),o=s.sibling}
else o=s.child;
if(o!==null)o.return=s;
else for(o=s;
o!==null;
){
if(o===e){
o=null;
break}
if(s=o.sibling,s!==null){
s.return=o.return,o=s;
break}
o=o.return}
s=o}
tn(t,e,i.children,n),e=e.child}
return e;
case 9:return i=e.type,r=e.pendingProps.children,Eo(e,n),i=Fn(i),r=r(i),e.flags|=1,tn(t,e,r,n),e.child;
case 14:return r=e.type,i=Kn(r,e.pendingProps),i=Kn(r.type,i),py(t,e,r,i,n);
case 15:return Sx(t,e,e.type,e.pendingProps,n);
case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kn(r,i),bu(t,e),e.tag=1,fn(r)?(t=!0,Wu(e)):t=!1,Eo(e,n),Ex(e,r,i),pp(e,r,i,n),yp(null,e,r,!0,t,n);
case 19:return Nx(t,e,n);
case 22:return Ax(t,e,n)}
throw Error(Y(156,e.tag))}
;
function Hx(t,e){
return ww(t,e)}
function WS(t,e,n,r){
this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}
function Vn(t,e,n,r){
return new WS(t,e,n,r)}
function Jm(t){
return t=t.prototype,!(!t||!t.isReactComponent)}
function HS(t){
if(typeof t=="function")return Jm(t)?1:0;
if(t!=null){
if(t=t.$$typeof,t===ym)return 11;
if(t===vm)return 14}
return 2}
function Ni(t,e){
var n=t.alternate;
return n===null?(n=Vn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{
lanes:e.lanes,firstContext:e.firstContext}
,n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}
function Iu(t,e,n,r,i,s){
var o=2;
if(r=t,typeof t=="function")Jm(t)&&(o=1);
else if(typeof t=="string")o=5;
else e:switch(t){
case oo:return bs(n.children,i,s,e);
case gm:o=8,i|=8;
break;
case jf:return t=Vn(12,n,e,i|2),t.elementType=jf,t.lanes=s,t;
case Ff:return t=Vn(13,n,e,i),t.elementType=Ff,t.lanes=s,t;
case Bf:return t=Vn(19,n,e,i),t.elementType=Bf,t.lanes=s,t;
case rw:return zd(n,i,s,e);
default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){
case tw:o=10;
break e;
case nw:o=9;
break e;
case ym:o=11;
break e;
case vm:o=14;
break e;
case fi:o=16,r=null;
break e}
throw Error(Y(130,t==null?t:typeof t,""))}
return e=Vn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}
function bs(t,e,n,r){
return t=Vn(7,t,r,e),t.lanes=n,t}
function zd(t,e,n,r){
return t=Vn(22,t,r,e),t.elementType=rw,t.lanes=n,t.stateNode={
isHidden:!1}
,t}
function rf(t,e,n){
return t=Vn(6,t,null,e),t.lanes=n,t}
function sf(t,e,n){
return e=Vn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={
containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation}
,e}
function KS(t,e,n,r,i){
this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=jh(0),this.expirationTimes=jh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}
function Zm(t,e,n,r,i,s,o,l,c){
return t=new KS(t,e,n,l,c),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Vn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={
element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null}
,Mm(s),t}
function QS(t,e,n){
var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;
return{
$$typeof:so,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}
}
function Kx(t){
if(!t)return Ui;
t=t._reactInternals;
e:{
if(Ms(t)!==t||t.tag!==1)throw Error(Y(170));
var e=t;
do{
switch(e.tag){
case 3:e=e.stateNode.context;
break e;
case 1:if(fn(e.type)){
e=e.stateNode.__reactInternalMemoizedMergedChildContext;
break e}
}
e=e.return}
while(e!==null);
throw Error(Y(171))}
if(t.tag===1){
var n=t.type;
if(fn(n))return Kw(t,n,e)}
return e}
function Qx(t,e,n,r,i,s,o,l,c){
return t=Zm(n,r,!0,t,i,s,o,l,c),t.context=Kx(null),n=t.current,r=nn(),i=Ri(n),s=Br(r,i),s.callback=e??null,Ci(n,s,i),t.current.lanes=i,jl(t,i,r),pn(t,r),t}
function qd(t,e,n,r){
var i=e.current,s=nn(),o=Ri(i);
return n=Kx(n),e.context===null?e.context=n:e.pendingContext=n,e=Br(s,o),e.payload={
element:t}
,r=r===void 0?null:r,r!==null&&(e.callback=r),t=Ci(i,e,o),t!==null&&(Zn(t,i,o,s),_u(t,i,o)),o}
function sd(t){
if(t=t.current,!t.child)return null;
switch(t.child.tag){
case 5:return t.child.stateNode;
default:return t.child.stateNode}
}
function Sy(t,e){
if(t=t.memoizedState,t!==null&&t.dehydrated!==null){
var n=t.retryLane;
t.retryLane=n!==0&&n<e?n:e}
}
function eg(t,e){
Sy(t,e),(t=t.alternate)&&Sy(t,e)}
function YS(){
return null}
var Yx=typeof reportError=="function"?reportError:function(t){
console.error(t)}
;
function tg(t){
this._internalRoot=t}
Gd.prototype.render=tg.prototype.render=function(t){
var e=this._internalRoot;
if(e===null)throw Error(Y(409));
qd(t,e,null,null)}
;
Gd.prototype.unmount=tg.prototype.unmount=function(){
var t=this._internalRoot;
if(t!==null){
this._internalRoot=null;
var e=t.containerInfo;
Cs(function(){
qd(null,t,null,null)}
),e[$r]=null}
}
;
function Gd(t){
this._internalRoot=t}
Gd.prototype.unstable_scheduleHydration=function(t){
if(t){
var e=Aw();
t={
blockedOn:null,target:t,priority:e}
;
for(var n=0;
n<mi.length&&e!==0&&e<mi[n].priority;
n++);
mi.splice(n,0,t),n===0&&kw(t)}
}
;
function ng(t){
return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}
function Wd(t){
return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}
function Ay(){
}
function XS(t,e,n,r,i){
if(i){
if(typeof r=="function"){
var s=r;
r=function(){
var u=sd(o);
s.call(u)}
}
var o=Qx(e,r,t,0,null,!1,!1,"",Ay);
return t._reactRootContainer=o,t[$r]=o.current,fl(t.nodeType===8?t.parentNode:t),Cs(),o}
for(;
i=t.lastChild;
)t.removeChild(i);
if(typeof r=="function"){
var l=r;
r=function(){
var u=sd(c);
l.call(u)}
}
var c=Zm(t,0,!1,null,null,!1,!1,"",Ay);
return t._reactRootContainer=c,t[$r]=c.current,fl(t.nodeType===8?t.parentNode:t),Cs(function(){
qd(e,c,n,r)}
),c}
function Hd(t,e,n,r,i){
var s=n._reactRootContainer;
if(s){
var o=s;
if(typeof i=="function"){
var l=i;
i=function(){
var c=sd(o);
l.call(c)}
}
qd(e,o,t,i)}
else o=XS(n,e,t,i,r);
return sd(o)}
Iw=function(t){
switch(t.tag){
case 3:var e=t.stateNode;
if(e.current.memoizedState.isDehydrated){
var n=La(e.pendingLanes);
n!==0&&(xm(e,n|1),pn(e,ut()),!(Re&6)&&(Vo=ut()+500,Qi()))}
break;
case 13:Cs(function(){
var r=zr(t,1);
if(r!==null){
var i=nn();
Zn(r,t,1,i)}
}
),eg(t,1)}
}
;
bm=function(t){
if(t.tag===13){
var e=zr(t,134217728);
if(e!==null){
var n=nn();
Zn(e,t,134217728,n)}
eg(t,134217728)}
}
;
Sw=function(t){
if(t.tag===13){
var e=Ri(t),n=zr(t,e);
if(n!==null){
var r=nn();
Zn(n,t,e,r)}
eg(t,e)}
}
;
Aw=function(){
return Be}
;
Cw=function(t,e){
var n=Be;
try{
return Be=t,e()}
finally{
Be=n}
}
;
Yf=function(t,e,n){
switch(e){
case"input":if(zf(t,n),e=n.name,n.type==="radio"&&e!=null){
for(n=t;
n.parentNode;
)n=n.parentNode;
for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;
e<n.length;
e++){
var r=n[e];
if(r!==t&&r.form===t.form){
var i=Ld(r);
if(!i)throw Error(Y(90));
sw(r),zf(r,i)}
}
}
break;
case"textarea":aw(t,n);
break;
case"select":e=n.value,e!=null&&_o(t,!!n.multiple,e,!1)}
}
;
pw=Qm;
mw=Cs;
var JS={
usingClientEntryPoint:!1,Events:[Bl,uo,Ld,hw,fw,Qm]}
,Ra={
findFiberByHostInstance:ys,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"}
,ZS={
bundleType:Ra.bundleType,version:Ra.version,rendererPackageName:Ra.rendererPackageName,rendererConfig:Ra.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){
return t=vw(t),t===null?null:t.stateNode}
,findFiberByHostInstance:Ra.findFiberByHostInstance||YS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"}
;
if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){
var Jc=__REACT_DEVTOOLS_GLOBAL_HOOK__;
if(!Jc.isDisabled&&Jc.supportsFiber)try{
Dd=Jc.inject(ZS),pr=Jc}
catch{
}
}
Sn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=JS;
Sn.createPortal=function(t,e){
var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;
if(!ng(e))throw Error(Y(200));
return QS(t,e,null,n)}
;
Sn.createRoot=function(t,e){
if(!ng(t))throw Error(Y(299));
var n=!1,r="",i=Yx;
return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Zm(t,1,!1,null,null,n,!1,r,i),t[$r]=e.current,fl(t.nodeType===8?t.parentNode:t),new tg(e)}
;
Sn.findDOMNode=function(t){
if(t==null)return null;
if(t.nodeType===1)return t;
var e=t._reactInternals;
if(e===void 0)throw typeof t.render=="function"?Error(Y(188)):(t=Object.keys(t).join(","),Error(Y(268,t)));
return t=vw(e),t=t===null?null:t.stateNode,t}
;
Sn.flushSync=function(t){
return Cs(t)}
;
Sn.hydrate=function(t,e,n){
if(!Wd(e))throw Error(Y(200));
return Hd(null,t,e,!0,n)}
;
Sn.hydrateRoot=function(t,e,n){
if(!ng(t))throw Error(Y(405));
var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Yx;
if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Qx(e,null,t,1,n??null,i,!1,s,o),t[$r]=e.current,fl(t),r)for(t=0;
t<r.length;
t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);
return new Gd(e)}
;
Sn.render=function(t,e,n){
if(!Wd(e))throw Error(Y(200));
return Hd(null,t,e,!1,n)}
;
Sn.unmountComponentAtNode=function(t){
if(!Wd(t))throw Error(Y(40));
return t._reactRootContainer?(Cs(function(){
Hd(null,null,t,!1,function(){
t._reactRootContainer=null,t[$r]=null}
)}
),!0):!1}
;
Sn.unstable_batchedUpdates=Qm;
Sn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){
if(!Wd(n))throw Error(Y(200));
if(t==null||t._reactInternals===void 0)throw Error(Y(38));
return Hd(t,e,n,!1,r)}
;
Sn.version="18.3.1-next-f1338f8080-20240426";
function Xx(){
if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{
__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Xx)}
catch(t){
console.error(t)}
}
Xx(),X_.exports=Sn;
var Mo=X_.exports;
const eA=F_(Mo);
var Jx,Cy=Mo;
Jx=Cy.createRoot,Cy.hydrateRoot;
var tA={
xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}
;
const nA=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),xe=(t,e)=>{
const n=B.forwardRef(({
color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,children:l,...c}
,u)=>B.createElement("svg",{
ref:u,...tA,width:i,height:i,stroke:r,strokeWidth:o?Number(s)*24/Number(i):s,className:`lucide lucide-${
nA(t)}
`,...c}
,[...e.map(([d,m])=>B.createElement(d,m)),...(Array.isArray(l)?l:[l])||[]]));
return n.displayName=`${
t}
`,n}
,rA=xe("Activity",[["path",{
d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}
]]),Zc=xe("Award",[["circle",{
cx:"12",cy:"8",r:"6",key:"1vp47v"}
],["path",{
d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}
]]),ky=xe("BarChart3",[["path",{
d:"M3 3v18h18",key:"1s2lah"}
],["path",{
d:"M18 17V9",key:"2bz60n"}
],["path",{
d:"M13 17V5",key:"1frdt8"}
],["path",{
d:"M8 17v-3",key:"17ska0"}
]]),iA=xe("Briefcase",[["rect",{
width:"20",height:"14",x:"2",y:"7",rx:"2",ry:"2",key:"eto64e"}
],["path",{
d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"zwj3tp"}
]]),sA=xe("Calendar",[["rect",{
width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}
],["line",{
x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}
],["line",{
x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}
],["line",{
x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}
]]),kp=xe("CheckCircle2",[["path",{
d:"M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z",key:"14v8dr"}
],["path",{
d:"m9 12 2 2 4-4",key:"dzmm74"}
]]),oA=xe("CheckSquare",[["polyline",{
points:"9 11 12 14 22 4",key:"19ybtz"}
],["path",{
d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",key:"1jnkn4"}
]]),aA=xe("Check",[["polyline",{
points:"20 6 9 17 4 12",key:"10jjfj"}
]]),lA=xe("ChevronDown",[["path",{
d:"m6 9 6 6 6-6",key:"qrunsl"}
]]),cA=xe("ChevronRight",[["path",{
d:"m9 18 6-6-6-6",key:"mthhwq"}
]]),Ry=xe("Clock",[["circle",{
cx:"12",cy:"12",r:"10",key:"1mglay"}
],["polyline",{
points:"12 6 12 12 16 14",key:"68esgv"}
]]),uA=xe("Coffee",[["path",{
d:"M17 8h1a4 4 0 1 1 0 8h-1",key:"jx4kbh"}
],["path",{
d:"M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z",key:"1bxrl0"}
],["line",{
x1:"6",x2:"6",y1:"2",y2:"4",key:"1cr9l3"}
],["line",{
x1:"10",x2:"10",y1:"2",y2:"4",key:"170wym"}
],["line",{
x1:"14",x2:"14",y1:"2",y2:"4",key:"1c5f70"}
]]),of=xe("Crosshair",[["circle",{
cx:"12",cy:"12",r:"10",key:"1mglay"}
],["line",{
x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}
],["line",{
x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}
],["line",{
x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}
],["line",{
x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}
]]),cs=xe("Flame",[["path",{
d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}
]]),af=xe("Gift",[["rect",{
x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}
],["path",{
d:"M12 8v13",key:"1c76mn"}
],["path",{
d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}
],["path",{
d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}
]]),Ny=xe("GripVertical",[["circle",{
cx:"9",cy:"12",r:"1",key:"1vctgf"}
],["circle",{
cx:"9",cy:"5",r:"1",key:"hp0tcf"}
],["circle",{
cx:"9",cy:"19",r:"1",key:"fkjjf6"}
],["circle",{
cx:"15",cy:"12",r:"1",key:"1tmaij"}
],["circle",{
cx:"15",cy:"5",r:"1",key:"19l28e"}
],["circle",{
cx:"15",cy:"19",r:"1",key:"f4zoj3"}
]]),lf=xe("HeartHandshake",[["path",{
d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}
],["path",{
d:"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66",key:"12sd6o"}
],["path",{
d:"m18 15-2-2",key:"60u0ii"}
],["path",{
d:"m15 18-2-2",key:"6p76be"}
]]),dA=xe("History",[["path",{
d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}
],["path",{
d:"M3 3v5h5",key:"1xhq8a"}
],["path",{
d:"M12 7v5l4 2",key:"1fdv2h"}
]]),hA=xe("Moon",[["path",{
d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}
]]),fA=xe("Pause",[["rect",{
width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}
],["rect",{
width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}
]]),eu=xe("Pen",[["path",{
d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}
]]),pA=xe("Play",[["polygon",{
points:"5 3 19 12 5 21 5 3",key:"191637"}
]]),us=xe("Plus",[["path",{
d:"M5 12h14",key:"1ays0h"}
],["path",{
d:"M12 5v14",key:"s699le"}
]]),mA=xe("Settings",[["path",{
d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}
],["circle",{
cx:"12",cy:"12",r:"3",key:"1v7zrd"}
]]),Py=xe("Shield",[["path",{
d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}
]]),gA=xe("ShoppingCart",[["circle",{
cx:"8",cy:"21",r:"1",key:"jimo8o"}
],["circle",{
cx:"19",cy:"21",r:"1",key:"13723u"}
],["path",{
d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}
]]),Zx=xe("Sparkles",[["path",{
d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}
],["path",{
d:"M5 3v4",key:"bklmnn"}
],["path",{
d:"M19 17v4",key:"iiml17"}
],["path",{
d:"M3 5h4",key:"nem4j1"}
],["path",{
d:"M17 19h4",key:"lbex7p"}
]]),yA=xe("Square",[["rect",{
width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}
]]),vA=xe("Star",[["polygon",{
points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}
]]),cf=xe("Store",[["path",{
d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7",key:"ztvudi"}
],["path",{
d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}
],["path",{
d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4",key:"2ebpfo"}
],["path",{
d:"M2 7h20",key:"1fcdvo"}
],["path",{
d:"M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7",key:"jon5kx"}
]]),_A=xe("Sun",[["circle",{
cx:"12",cy:"12",r:"4",key:"4exip2"}
],["path",{
d:"M12 2v2",key:"tus03m"}
],["path",{
d:"M12 20v2",key:"1lh1kg"}
],["path",{
d:"m4.93 4.93 1.41 1.41",key:"149t6j"}
],["path",{
d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}
],["path",{
d:"M2 12h2",key:"1t8f8n"}
],["path",{
d:"M20 12h2",key:"1q8mjw"}
],["path",{
d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}
],["path",{
d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}
]]),Dy=xe("Swords",[["polyline",{
points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5",key:"1hfsw2"}
],["line",{
x1:"13",x2:"19",y1:"19",y2:"13",key:"1vrmhu"}
],["line",{
x1:"16",x2:"20",y1:"16",y2:"20",key:"1bron3"}
],["line",{
x1:"19",x2:"21",y1:"21",y2:"19",key:"13pww6"}
],["polyline",{
points:"14.5 6.5 18 3 21 3 21 6 17.5 9.5",key:"hbey2j"}
],["line",{
x1:"5",x2:"9",y1:"14",y2:"18",key:"1hf58s"}
],["line",{
x1:"7",x2:"4",y1:"17",y2:"20",key:"pidxm4"}
],["line",{
x1:"3",x2:"5",y1:"19",y2:"21",key:"1pehsh"}
]]),wA=xe("Tag",[["path",{
d:"M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z",key:"14b2ls"}
],["path",{
d:"M7 7h.01",key:"7u93v4"}
]]),tu=xe("Target",[["circle",{
cx:"12",cy:"12",r:"10",key:"1mglay"}
],["circle",{
cx:"12",cy:"12",r:"6",key:"1vlfrh"}
],["circle",{
cx:"12",cy:"12",r:"2",key:"1c9p78"}
]]),nu=xe("Trash2",[["path",{
d:"M3 6h18",key:"d0wm0j"}
],["path",{
d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}
],["path",{
d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}
],["line",{
x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}
],["line",{
x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}
]]),Oy=xe("TrendingUp",[["polyline",{
points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}
],["polyline",{
points:"16 7 22 7 22 13",key:"kwv8wd"}
]]),Vy=xe("WifiOff",[["line",{
x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}
],["path",{
d:"M8.5 16.5a5 5 0 0 1 7 0",key:"sej527"}
],["path",{
d:"M2 8.82a15 15 0 0 1 4.17-2.65",key:"11utq1"}
],["path",{
d:"M10.66 5c4.01-.36 8.14.9 11.34 3.76",key:"hxefdu"}
],["path",{
d:"M16.85 11.25a10 10 0 0 1 2.22 1.68",key:"q734kn"}
],["path",{
d:"M5 13a10 10 0 0 1 5.24-2.76",key:"piq4yl"}
],["line",{
x1:"12",x2:"12.01",y1:"20",y2:"20",key:"of4bc4"}
]]),ds=xe("X",[["path",{
d:"M18 6 6 18",key:"1bl5f8"}
],["path",{
d:"m6 6 12 12",key:"d8bk6v"}
]]),ru=xe("Zap",[["polygon",{
points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}
]]);
function en(t){
return`Minified Redux error #${
t}
;
 visit https://redux.js.org/Errors?code=${
t}
 for the full message or use the non-minified dev environment for full errors. `}
var xA=(()=>typeof Symbol=="function"&&Symbol.observable||"@@observable")(),My=xA,uf=()=>Math.random().toString(36).substring(7).split("").join("."),bA={
INIT:`@@redux/INIT${
uf()}
`,REPLACE:`@@redux/REPLACE${
uf()}
`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${
uf()}
`}
,Ly=bA;
function EA(t){
if(typeof t!="object"||t===null)return!1;
let e=t;
for(;
Object.getPrototypeOf(e)!==null;
)e=Object.getPrototypeOf(e);
return Object.getPrototypeOf(t)===e||Object.getPrototypeOf(t)===null}
function e1(t,e,n){
if(typeof t!="function")throw new Error(en(2));
if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(en(0));
if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){
if(typeof n!="function")throw new Error(en(1));
return n(e1)(t,e)}
let r=t,i=e,s=new Map,o=s,l=0,c=!1;
function u(){
o===s&&(o=new Map,s.forEach((O,I)=>{
o.set(I,O)}
))}
function d(){
if(c)throw new Error(en(3));
return i}
function m(O){
if(typeof O!="function")throw new Error(en(4));
if(c)throw new Error(en(5));
let I=!0;
u();
const E=l++;
return o.set(E,O),function(){
if(I){
if(c)throw new Error(en(6));
I=!1,u(),o.delete(E),s=null}
}
}
function g(O){
if(!EA(O))throw new Error(en(7));
if(typeof O.type>"u")throw new Error(en(8));
if(typeof O.type!="string")throw new Error(en(17));
if(c)throw new Error(en(9));
try{
c=!0,i=r(i,O)}
finally{
c=!1}
return(s=o).forEach(E=>{
E()}
),O}
function _(O){
if(typeof O!="function")throw new Error(en(10));
r=O,g({
type:Ly.REPLACE}
)}
function w(){
const O=m;
return{
subscribe(I){
if(typeof I!="object"||I===null)throw new Error(en(11));
function E(){
const M=I;
M.next&&M.next(d())}
return E(),{
unsubscribe:O(E)}
}
,[My](){
return this}
}
}
return g({
type:Ly.INIT}
),{
dispatch:g,subscribe:m,getState:d,replaceReducer:_,[My]:w}
}
function jy(t,e){
return function(...n){
return e(t.apply(this,n))}
}
function Fy(t,e){
if(typeof t=="function")return jy(t,e);
if(typeof t!="object"||t===null)throw new Error(en(16));
const n={
}
;
for(const r in t){
const i=t[r];
typeof i=="function"&&(n[r]=jy(i,e))}
return n}
function t1(...t){
return t.length===0?e=>e:t.length===1?t[0]:t.reduce((e,n)=>(...r)=>e(n(...r)))}
function TA(...t){
return e=>(n,r)=>{
const i=e(n,r);
let s=()=>{
throw new Error(en(15))}
;
const o={
getState:i.getState,dispatch:(c,...u)=>s(c,...u)}
,l=t.map(c=>c(o));
return s=t1(...l)(i.dispatch),{
...i,dispatch:s}
}
}
var IA={
}
;
/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $l=B;
function SA(t,e){
return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}
var AA=typeof Object.is=="function"?Object.is:SA,CA=$l.useSyncExternalStore,kA=$l.useRef,RA=$l.useEffect,NA=$l.useMemo,PA=$l.useDebugValue;
IA.useSyncExternalStoreWithSelector=function(t,e,n,r,i){
var s=kA(null);
if(s.current===null){
var o={
hasValue:!1,value:null}
;
s.current=o}
else o=s.current;
s=NA(function(){
function c(_){
if(!u){
if(u=!0,d=_,_=r(_),i!==void 0&&o.hasValue){
var w=o.value;
if(i(w,_))return m=w}
return m=_}
if(w=m,AA(d,_))return w;
var N=r(_);
return i!==void 0&&i(w,N)?(d=_,w):(d=_,m=N)}
var u=!1,d,m,g=n===void 0?null:n;
return[function(){
return c(e())}
,g===null?void 0:function(){
return c(g())}
]}
,[e,n,r,i]);
var l=CA(t,s[0],s[1]);
return RA(function(){
o.hasValue=!0,o.value=l}
,[l]),PA(l),l}
;
var DA=B.version.startsWith("19"),OA=Symbol.for(DA?"react.transitional.element":"react.element"),VA=Symbol.for("react.portal"),MA=Symbol.for("react.fragment"),LA=Symbol.for("react.strict_mode"),jA=Symbol.for("react.profiler"),FA=Symbol.for("react.consumer"),BA=Symbol.for("react.context"),n1=Symbol.for("react.forward_ref"),UA=Symbol.for("react.suspense"),$A=Symbol.for("react.suspense_list"),rg=Symbol.for("react.memo"),zA=Symbol.for("react.lazy"),qA=n1,GA=rg;
function WA(t){
if(typeof t=="object"&&t!==null){
const{
$$typeof:e}
=t;
switch(e){
case OA:switch(t=t.type,t){
case MA:case jA:case LA:case UA:case $A:return t;
default:switch(t=t&&t.$$typeof,t){
case BA:case n1:case zA:case rg:return t;
case FA:return t;
default:return e}
}
case VA:return e}
}
}
function HA(t){
return WA(t)===rg}
function KA(t,e,n,r,{
areStatesEqual:i,areOwnPropsEqual:s,areStatePropsEqual:o}
){
let l=!1,c,u,d,m,g;
function _(E,k){
return c=E,u=k,d=t(c,u),m=e(r,u),g=n(d,m,u),l=!0,g}
function w(){
return d=t(c,u),e.dependsOnOwnProps&&(m=e(r,u)),g=n(d,m,u),g}
function N(){
return t.dependsOnOwnProps&&(d=t(c,u)),e.dependsOnOwnProps&&(m=e(r,u)),g=n(d,m,u),g}
function O(){
const E=t(c,u),k=!o(E,d);
return d=E,k&&(g=n(d,m,u)),g}
function I(E,k){
const M=!s(k,u),G=!i(E,c,k,u);
return c=E,u=k,M&&G?w():M?N():G?O():g}
return function(k,M){
return l?I(k,M):_(k,M)}
}
function QA(t,{
initMapStateToProps:e,initMapDispatchToProps:n,initMergeProps:r,...i}
){
const s=e(t,i),o=n(t,i),l=r(t,i);
return KA(s,o,l,t,i)}
function YA(t,e){
const n={
}
;
for(const r in t){
const i=t[r];
typeof i=="function"&&(n[r]=(...s)=>e(i(...s)))}
return n}
function Rp(t){
return function(n){
const r=t(n);
function i(){
return r}
return i.dependsOnOwnProps=!1,i}
}
function By(t){
return t.dependsOnOwnProps?!!t.dependsOnOwnProps:t.length!==1}
function r1(t,e){
return function(r,{
displayName:i}
){
const s=function(l,c){
return s.dependsOnOwnProps?s.mapToProps(l,c):s.mapToProps(l,void 0)}
;
return s.dependsOnOwnProps=!0,s.mapToProps=function(l,c){
s.mapToProps=t,s.dependsOnOwnProps=By(t);
let u=s(l,c);
return typeof u=="function"&&(s.mapToProps=u,s.dependsOnOwnProps=By(u),u=s(l,c)),u}
,s}
}
function ig(t,e){
return(n,r)=>{
throw new Error(`Invalid value of type ${
typeof t}
 for ${
e}
 argument when connecting component ${
r.wrappedComponentName}
.`)}
}
function XA(t){
return t&&typeof t=="object"?Rp(e=>YA(t,e)):t?typeof t=="function"?r1(t):ig(t,"mapDispatchToProps"):Rp(e=>({
dispatch:e}
))}
function JA(t){
return t?typeof t=="function"?r1(t):ig(t,"mapStateToProps"):Rp(()=>({
}
))}
function ZA(t,e,n){
return{
...n,...t,...e}
}
function eC(t){
return function(n,{
displayName:r,areMergedPropsEqual:i}
){
let s=!1,o;
return function(c,u,d){
const m=t(c,u,d);
return s?i(m,o)||(o=m):(s=!0,o=m),o}
}
}
function tC(t){
return t?typeof t=="function"?eC(t):ig(t,"mergeProps"):()=>ZA}
function nC(t){
t()}
function rC(){
let t=null,e=null;
return{
clear(){
t=null,e=null}
,notify(){
nC(()=>{
let n=t;
for(;
n;
)n.callback(),n=n.next}
)}
,get(){
const n=[];
let r=t;
for(;
r;
)n.push(r),r=r.next;
return n}
,subscribe(n){
let r=!0;
const i=e={
callback:n,next:null,prev:e}
;
return i.prev?i.prev.next=i:t=i,function(){
!r||t===null||(r=!1,i.next?i.next.prev=i.prev:e=i.prev,i.prev?i.prev.next=i.next:t=i.next)}
}
}
}
var Uy={
notify(){
}
,get:()=>[]}
;
function i1(t,e){
let n,r=Uy,i=0,s=!1;
function o(N){
d();
const O=r.subscribe(N);
let I=!1;
return()=>{
I||(I=!0,O(),m())}
}
function l(){
r.notify()}
function c(){
w.onStateChange&&w.onStateChange()}
function u(){
return s}
function d(){
i++,n||(n=e?e.addNestedSub(c):t.subscribe(c),r=rC())}
function m(){
i--,n&&i===0&&(n(),n=void 0,r.clear(),r=Uy)}
function g(){
s||(s=!0,d())}
function _(){
s&&(s=!1,m())}
const w={
addNestedSub:o,notifyNestedSubs:l,handleChangeWrapper:c,isSubscribed:u,trySubscribe:g,tryUnsubscribe:_,getListeners:()=>r}
;
return w}
var iC=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",sC=iC(),oC=()=>typeof navigator<"u"&&navigator.product==="ReactNative",aC=oC(),lC=()=>sC||aC?B.useLayoutEffect:B.useEffect,od=lC();
function $y(t,e){
return t===e?t!==0||e!==0||1/t===1/e:t!==t&&e!==e}
function df(t,e){
if($y(t,e))return!0;
if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;
const n=Object.keys(t),r=Object.keys(e);
if(n.length!==r.length)return!1;
for(let i=0;
i<n.length;
i++)if(!Object.prototype.hasOwnProperty.call(e,n[i])||!$y(t[n[i]],e[n[i]]))return!1;
return!0}
var cC={
childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0}
,uC={
name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0}
,dC={
$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0}
,s1={
$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0}
,hC={
[qA]:dC,[GA]:s1}
;
function zy(t){
return HA(t)?s1:hC[t.$$typeof]||cC}
var fC=Object.defineProperty,pC=Object.getOwnPropertyNames,qy=Object.getOwnPropertySymbols,mC=Object.getOwnPropertyDescriptor,gC=Object.getPrototypeOf,Gy=Object.prototype;
function Np(t,e){
if(typeof e!="string"){
if(Gy){
const s=gC(e);
s&&s!==Gy&&Np(t,s)}
let n=pC(e);
qy&&(n=n.concat(qy(e)));
const r=zy(t),i=zy(e);
for(let s=0;
s<n.length;
++s){
const o=n[s];
if(!uC[o]&&!(i&&i[o])&&!(r&&r[o])){
const l=mC(e,o);
try{
fC(t,o,l)}
catch{
}
}
}
}
return t}
var hf=Symbol.for("react-redux-context"),ff=typeof globalThis<"u"?globalThis:{
}
;
function yC(){
if(!B.createContext)return{
}
;
const t=ff[hf]??(ff[hf]=new Map);
let e=t.get(B.createContext);
return e||(e=B.createContext(null),t.set(B.createContext,e)),e}
var o1=yC(),vC=[null,null];
function _C(t,e,n){
od(()=>t(...e),n)}
function wC(t,e,n,r,i,s){
t.current=r,n.current=!1,i.current&&(i.current=null,s())}
function xC(t,e,n,r,i,s,o,l,c,u,d){
if(!t)return()=>{
}
;
let m=!1,g=null;
const _=()=>{
if(m||!l.current)return;
const N=e.getState();
let O,I;
try{
O=r(N,i.current)}
catch(E){
I=E,g=E}
I||(g=null),O===s.current?o.current||u():(s.current=O,c.current=O,o.current=!0,d())}
;
return n.onStateChange=_,n.trySubscribe(),_(),()=>{
if(m=!0,n.tryUnsubscribe(),n.onStateChange=null,g)throw g}
}
function bC(t,e){
return t===e}
function EC(t,e,n,{
pure:r,areStatesEqual:i=bC,areOwnPropsEqual:s=df,areStatePropsEqual:o=df,areMergedPropsEqual:l=df,forwardRef:c=!1,context:u=o1}
={
}
){
const d=u,m=JA(t),g=XA(e),_=tC(n),w=!!t;
return O=>{
const I=O.displayName||O.name||"Component",E=`Connect(${
I}
)`,k={
shouldHandleStateChanges:w,displayName:E,wrappedComponentName:I,WrappedComponent:O,initMapStateToProps:m,initMapDispatchToProps:g,initMergeProps:_,areStatesEqual:i,areStatePropsEqual:o,areOwnPropsEqual:s,areMergedPropsEqual:l}
;
function M(S){
const[b,A,C]=B.useMemo(()=>{
const{
reactReduxForwardedRef:Fe,...Un}
=S;
return[S.context,Fe,Un]}
,[S]),V=B.useMemo(()=>{
let Fe=d;
return b!=null&&b.Consumer,Fe}
,[b,d]),L=B.useContext(V),R=!!S.store&&!!S.store.getState&&!!S.store.dispatch,We=!!L&&!!L.store,lt=R?S.store:L.store,nr=We?L.getServerState:lt.getState,Ft=B.useMemo(()=>QA(lt.dispatch,k),[lt]),[J,ae]=B.useMemo(()=>{
if(!w)return vC;
const Fe=i1(lt,R?void 0:L.subscription),Un=Fe.notifyNestedSubs.bind(Fe);
return[Fe,Un]}
,[lt,R,L]),ue=B.useMemo(()=>R?L:{
...L,subscription:J}
,[R,L,J]),Le=B.useRef(void 0),pe=B.useRef(C),Ee=B.useRef(void 0),kt=B.useRef(!1),Bt=B.useRef(!1),ht=B.useRef(void 0);
od(()=>(Bt.current=!0,()=>{
Bt.current=!1}
),[]);
const Ut=B.useMemo(()=>()=>Ee.current&&C===pe.current?Ee.current:Ft(lt.getState(),C),[lt,C]),xr=B.useMemo(()=>Un=>J?xC(w,lt,J,Ft,pe,Le,kt,Bt,Ee,ae,Un):()=>{
}
,[J]);
_C(wC,[pe,Le,kt,C,Ee,ae]);
let Zr;
try{
Zr=B.useSyncExternalStore(xr,Ut,nr?()=>Ft(nr(),C):Ut)}
catch(Fe){
throw ht.current&&(Fe.message+=`
The error may be correlated with this previous error:
${
ht.current.stack}


`),Fe}
od(()=>{
ht.current=void 0,Ee.current=void 0,Le.current=Zr}
);
const et=B.useMemo(()=>B.createElement(O,{
...Zr,ref:A}
),[A,O,Zr]);
return B.useMemo(()=>w?B.createElement(V.Provider,{
value:ue}
,et):et,[V,et,ue])}
const q=B.memo(M);
if(q.WrappedComponent=O,q.displayName=M.displayName=E,c){
const b=B.forwardRef(function(C,V){
return B.createElement(q,{
...C,reactReduxForwardedRef:V}
)}
);
return b.displayName=E,b.WrappedComponent=O,Np(b,O)}
return Np(q,O)}
}
var a1=EC;
function TC(t){
const{
children:e,context:n,serverState:r,store:i}
=t,s=B.useMemo(()=>{
const c=i1(i);
return{
store:i,subscription:c,getServerState:r?()=>r:void 0}
}
,[i,r]),o=B.useMemo(()=>i.getState(),[i]);
od(()=>{
const{
subscription:c}
=s;
return c.onStateChange=c.notifyNestedSubs,c.trySubscribe(),o!==i.getState()&&c.notifyNestedSubs(),()=>{
c.tryUnsubscribe(),c.onStateChange=void 0}
}
,[s,o]);
const l=n||o1;
return B.createElement(l.Provider,{
value:s}
,e)}
var IC=TC,SC=!0,pf="Invariant failed";
function AC(t,e){
if(!t){
if(SC)throw new Error(pf);
var n=typeof e=="function"?e():e,r=n?"".concat(pf,": ").concat(n):pf;
throw new Error(r)}
}
var Xn=function(e){
var n=e.top,r=e.right,i=e.bottom,s=e.left,o=r-s,l=i-n,c={
top:n,right:r,bottom:i,left:s,width:o,height:l,x:s,y:n,center:{
x:(r+s)/2,y:(i+n)/2}
}
;
return c}
,sg=function(e,n){
return{
top:e.top-n.top,left:e.left-n.left,bottom:e.bottom+n.bottom,right:e.right+n.right}
}
,Wy=function(e,n){
return{
top:e.top+n.top,left:e.left+n.left,bottom:e.bottom-n.bottom,right:e.right-n.right}
}
,CC=function(e,n){
return{
top:e.top+n.y,left:e.left+n.x,bottom:e.bottom+n.y,right:e.right+n.x}
}
,mf={
top:0,right:0,bottom:0,left:0}
,og=function(e){
var n=e.borderBox,r=e.margin,i=r===void 0?mf:r,s=e.border,o=s===void 0?mf:s,l=e.padding,c=l===void 0?mf:l,u=Xn(sg(n,i)),d=Xn(Wy(n,o)),m=Xn(Wy(d,c));
return{
marginBox:u,borderBox:Xn(n),paddingBox:d,contentBox:m,margin:i,border:o,padding:c}
}
,Pn=function(e){
var n=e.slice(0,-2),r=e.slice(-2);
if(r!=="px")return 0;
var i=Number(n);
return isNaN(i)&&AC(!1),i}
,kC=function(){
return{
x:window.pageXOffset,y:window.pageYOffset}
}
,ad=function(e,n){
var r=e.borderBox,i=e.border,s=e.margin,o=e.padding,l=CC(r,n);
return og({
borderBox:l,border:i,margin:s,padding:o}
)}
,ld=function(e,n){
return n===void 0&&(n=kC()),ad(e,n)}
,l1=function(e,n){
var r={
top:Pn(n.marginTop),right:Pn(n.marginRight),bottom:Pn(n.marginBottom),left:Pn(n.marginLeft)}
,i={
top:Pn(n.paddingTop),right:Pn(n.paddingRight),bottom:Pn(n.paddingBottom),left:Pn(n.paddingLeft)}
,s={
top:Pn(n.borderTopWidth),right:Pn(n.borderRightWidth),bottom:Pn(n.borderBottomWidth),left:Pn(n.borderLeftWidth)}
;
return og({
borderBox:e,margin:r,padding:i,border:s}
)}
,c1=function(e){
var n=e.getBoundingClientRect(),r=window.getComputedStyle(e);
return l1(n,r)}
,RC=function(e){
var n=[],r=null,i=function(){
for(var o=arguments.length,l=new Array(o),c=0;
c<o;
c++)l[c]=arguments[c];
n=l,!r&&(r=requestAnimationFrame(function(){
r=null,e.apply(void 0,n)}
))}
;
return i.cancel=function(){
r&&(cancelAnimationFrame(r),r=null)}
,i}
;
const bl=RC;
function cd(){
return cd=Object.assign?Object.assign.bind():function(t){
for(var e=1;
e<arguments.length;
e++){
var n=arguments[e];
for(var r in n)({
}
).hasOwnProperty.call(n,r)&&(t[r]=n[r])}
return t}
,cd.apply(null,arguments)}
function u1(t,e){
}
u1.bind(null,"warn");
u1.bind(null,"error");
function Pi(){
}
function NC(t,e){
return{
...t,...e}
}
function Mn(t,e,n){
const r=e.map(i=>{
const s=NC(n,i.options);
return t.addEventListener(i.eventName,i.fn,s),function(){
t.removeEventListener(i.eventName,i.fn,s)}
}
);
return function(){
r.forEach(s=>{
s()}
)}
}
const PC="Invariant failed";
class ud extends Error{
}
ud.prototype.toString=function(){
return this.message}
;
function X(t,e){
throw new ud(PC)}
class DC extends dt.Component{
constructor(...e){
super(...e),this.callbacks=null,this.unbind=Pi,this.onWindowError=n=>{
const r=this.getCallbacks();
r.isDragging()&&r.tryAbort(),n.error instanceof ud&&n.preventDefault()}
,this.getCallbacks=()=>{
if(!this.callbacks)throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
return this.callbacks}
,this.setCallbacks=n=>{
this.callbacks=n}
}
componentDidMount(){
this.unbind=Mn(window,[{
eventName:"error",fn:this.onWindowError}
])}
componentDidCatch(e){
if(e instanceof ud){
this.setState({
}
);
return}
throw e}
componentWillUnmount(){
this.unbind()}
render(){
return this.props.children(this.setCallbacks)}
}
const OC=`
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`,dd=t=>t+1,VC=t=>`
  You have lifted an item in position ${
dd(t.source.index)}

`,d1=(t,e)=>{
const n=t.droppableId===e.droppableId,r=dd(t.index),i=dd(e.index);
return n?`
      You have moved the item from position ${
r}

      to position ${
i}

    `:`
    You have moved the item from position ${
r}

    in list ${
t.droppableId}

    to list ${
e.droppableId}

    in position ${
i}

  `}
,h1=(t,e,n)=>e.droppableId===n.droppableId?`
      The item ${
t}

      has been combined with ${
n.draggableId}
`:`
      The item ${
t}

      in list ${
e.droppableId}

      has been combined with ${
n.draggableId}

      in list ${
n.droppableId}

    `,MC=t=>{
const e=t.destination;
if(e)return d1(t.source,e);
const n=t.combine;
return n?h1(t.draggableId,t.source,n):"You are over an area that cannot be dropped on"}
,Hy=t=>`
  The item has returned to its starting position
  of ${
dd(t.index)}

`,LC=t=>{
if(t.reason==="CANCEL")return`
      Movement cancelled.
      ${
Hy(t.source)}

    `;
const e=t.destination,n=t.combine;
return e?`
      You have dropped the item.
      ${
d1(t.source,e)}

    `:n?`
      You have dropped the item.
      ${
h1(t.draggableId,t.source,n)}

    `:`
    The item has been dropped while not over a drop area.
    ${
Hy(t.source)}

  `}
,Su={
dragHandleUsageInstructions:OC,onDragStart:VC,onDragUpdate:MC,onDragEnd:LC}
;
function jC(t,e){
return!!(t===e||Number.isNaN(t)&&Number.isNaN(e))}
function f1(t,e){
if(t.length!==e.length)return!1;
for(let n=0;
n<t.length;
n++)if(!jC(t[n],e[n]))return!1;
return!0}
function Ae(t,e){
const n=B.useState(()=>({
inputs:e,result:t()}
))[0],r=B.useRef(!0),i=B.useRef(n),o=r.current||!!(e&&i.current.inputs&&f1(e,i.current.inputs))?i.current:{
inputs:e,result:t()}
;
return B.useEffect(()=>{
r.current=!1,i.current=o}
,[o]),o.result}
function se(t,e){
return Ae(()=>t,e)}
const Ct={
x:0,y:0}
,Ot=(t,e)=>({
x:t.x+e.x,y:t.y+e.y}
),_n=(t,e)=>({
x:t.x-e.x,y:t.y-e.y}
),Di=(t,e)=>t.x===e.x&&t.y===e.y,Xo=t=>({
x:t.x!==0?-t.x:0,y:t.y!==0?-t.y:0}
),ks=(t,e,n=0)=>t==="x"?{
x:e,y:n}
:{
x:n,y:e}
,El=(t,e)=>Math.sqrt((e.x-t.x)**2+(e.y-t.y)**2),Ky=(t,e)=>Math.min(...e.map(n=>El(t,n))),p1=t=>e=>({
x:t(e.x),y:t(e.y)}
);
var FC=(t,e)=>{
const n=Xn({
top:Math.max(e.top,t.top),right:Math.min(e.right,t.right),bottom:Math.min(e.bottom,t.bottom),left:Math.max(e.left,t.left)}
);
return n.width<=0||n.height<=0?null:n}
;
const zl=(t,e)=>({
top:t.top+e.y,left:t.left+e.x,bottom:t.bottom+e.y,right:t.right+e.x}
),Qy=t=>[{
x:t.left,y:t.top}
,{
x:t.right,y:t.top}
,{
x:t.left,y:t.bottom}
,{
x:t.right,y:t.bottom}
],BC={
top:0,right:0,bottom:0,left:0}
,UC=(t,e)=>e?zl(t,e.scroll.diff.displacement):t,$C=(t,e,n)=>n&&n.increasedBy?{
...t,[e.end]:t[e.end]+n.increasedBy[e.line]}
:t,zC=(t,e)=>e&&e.shouldClipSubject?FC(e.pageMarginBox,t):Xn(t);
var Lo=({
page:t,withPlaceholder:e,axis:n,frame:r}
)=>{
const i=UC(t.marginBox,r),s=$C(i,n,e),o=zC(s,r);
return{
page:t,withPlaceholder:e,active:o}
}
,ag=(t,e)=>{
t.frame||X();
const n=t.frame,r=_n(e,n.scroll.initial),i=Xo(r),s={
...n,scroll:{
initial:n.scroll.initial,current:e,diff:{
value:r,displacement:i}
,max:n.scroll.max}
}
,o=Lo({
page:t.subject.page,withPlaceholder:t.subject.withPlaceholder,axis:t.axis,frame:s}
);
return{
...t,frame:s,subject:o}
}
;
function At(t,e=f1){
let n=null;
function r(...i){
if(n&&n.lastThis===this&&e(i,n.lastArgs))return n.lastResult;
const s=t.apply(this,i);
return n={
lastResult:s,lastArgs:i,lastThis:this}
,s}
return r.clear=function(){
n=null}
,r}
const m1=At(t=>t.reduce((e,n)=>(e[n.descriptor.id]=n,e),{
}
)),g1=At(t=>t.reduce((e,n)=>(e[n.descriptor.id]=n,e),{
}
)),Kd=At(t=>Object.values(t)),qC=At(t=>Object.values(t));
var Jo=At((t,e)=>qC(e).filter(r=>t===r.descriptor.droppableId).sort((r,i)=>r.descriptor.index-i.descriptor.index));
function lg(t){
return t.at&&t.at.type==="REORDER"?t.at.destination:null}
function Qd(t){
return t.at&&t.at.type==="COMBINE"?t.at.combine:null}
var Yd=At((t,e)=>e.filter(n=>n.descriptor.id!==t.descriptor.id)),GC=({
isMovingForward:t,draggable:e,destination:n,insideDestination:r,previousImpact:i}
)=>{
if(!n.isCombineEnabled||!lg(i))return null;
function o(_){
const w={
type:"COMBINE",combine:{
draggableId:_,droppableId:n.descriptor.id}
}
;
return{
...i,at:w}
}
const l=i.displaced.all,c=l.length?l[0]:null;
if(t)return c?o(c):null;
const u=Yd(e,r);
if(!c){
if(!u.length)return null;
const _=u[u.length-1];
return o(_.descriptor.id)}
const d=u.findIndex(_=>_.descriptor.id===c);
d===-1&&X();
const m=d-1;
if(m<0)return null;
const g=u[m];
return o(g.descriptor.id)}
,Zo=(t,e)=>t.descriptor.droppableId===e.descriptor.id;
const y1={
point:Ct,value:0}
,Tl={
invisible:{
}
,visible:{
}
,all:[]}
,WC={
displaced:Tl,displacedBy:y1,at:null}
;
var jn=(t,e)=>n=>t<=n&&n<=e,v1=t=>{
const e=jn(t.top,t.bottom),n=jn(t.left,t.right);
return r=>{
if(e(r.top)&&e(r.bottom)&&n(r.left)&&n(r.right))return!0;
const s=e(r.top)||e(r.bottom),o=n(r.left)||n(r.right);
if(s&&o)return!0;
const c=r.top<t.top&&r.bottom>t.bottom,u=r.left<t.left&&r.right>t.right;
return c&&u?!0:c&&o||u&&s}
}
,HC=t=>{
const e=jn(t.top,t.bottom),n=jn(t.left,t.right);
return r=>e(r.top)&&e(r.bottom)&&n(r.left)&&n(r.right)}
;
const cg={
direction:"vertical",line:"y",crossAxisLine:"x",start:"top",end:"bottom",size:"height",crossAxisStart:"left",crossAxisEnd:"right",crossAxisSize:"width"}
,_1={
direction:"horizontal",line:"x",crossAxisLine:"y",start:"left",end:"right",size:"width",crossAxisStart:"top",crossAxisEnd:"bottom",crossAxisSize:"height"}
;
var KC=t=>e=>{
const n=jn(e.top,e.bottom),r=jn(e.left,e.right);
return i=>t===cg?n(i.top)&&n(i.bottom):r(i.left)&&r(i.right)}
;
const QC=(t,e)=>{
const n=e.frame?e.frame.scroll.diff.displacement:Ct;
return zl(t,n)}
,YC=(t,e,n)=>e.subject.active?n(e.subject.active)(t):!1,XC=(t,e,n)=>n(e)(t),ug=({
target:t,destination:e,viewport:n,withDroppableDisplacement:r,isVisibleThroughFrameFn:i}
)=>{
const s=r?QC(t,e):t;
return YC(s,e,i)&&XC(s,n,i)}
,JC=t=>ug({
...t,isVisibleThroughFrameFn:v1}
),w1=t=>ug({
...t,isVisibleThroughFrameFn:HC}
),ZC=t=>ug({
...t,isVisibleThroughFrameFn:KC(t.destination.axis)}
),e2=(t,e,n)=>{
if(typeof n=="boolean")return n;
if(!e)return!0;
const{
invisible:r,visible:i}
=e;
if(r[t])return!1;
const s=i[t];
return s?s.shouldAnimate:!0}
;
function t2(t,e){
const n=t.page.marginBox,r={
top:e.point.y,right:0,bottom:0,left:e.point.x}
;
return Xn(sg(n,r))}
function Il({
afterDragging:t,destination:e,displacedBy:n,viewport:r,forceShouldAnimate:i,last:s}
){
return t.reduce(function(l,c){
const u=t2(c,n),d=c.descriptor.id;
if(l.all.push(d),!JC({
target:u,destination:e,viewport:r,withDroppableDisplacement:!0}
))return l.invisible[c.descriptor.id]=!0,l;
const g=e2(d,s,i),_={
draggableId:d,shouldAnimate:g}
;
return l.visible[d]=_,l}
,{
all:[],visible:{
}
,invisible:{
}
}
)}
function n2(t,e){
if(!t.length)return 0;
const n=t[t.length-1].descriptor.index;
return e.inHomeList?n:n+1}
function Yy({
insideDestination:t,inHomeList:e,displacedBy:n,destination:r}
){
const i=n2(t,{
inHomeList:e}
);
return{
displaced:Tl,displacedBy:n,at:{
type:"REORDER",destination:{
droppableId:r.descriptor.id,index:i}
}
}
}
function hd({
draggable:t,insideDestination:e,destination:n,viewport:r,displacedBy:i,last:s,index:o,forceShouldAnimate:l}
){
const c=Zo(t,n);
if(o==null)return Yy({
insideDestination:e,inHomeList:c,displacedBy:i,destination:n}
);
const u=e.find(w=>w.descriptor.index===o);
if(!u)return Yy({
insideDestination:e,inHomeList:c,displacedBy:i,destination:n}
);
const d=Yd(t,e),m=e.indexOf(u),g=d.slice(m);
return{
displaced:Il({
afterDragging:g,destination:n,displacedBy:i,last:s,viewport:r.frame,forceShouldAnimate:l}
),displacedBy:i,at:{
type:"REORDER",destination:{
droppableId:n.descriptor.id,index:o}
}
}
}
function $i(t,e){
return!!e.effected[t]}
var r2=({
isMovingForward:t,destination:e,draggables:n,combine:r,afterCritical:i}
)=>{
if(!e.isCombineEnabled)return null;
const s=r.draggableId,l=n[s].descriptor.index;
return $i(s,i)?t?l:l-1:t?l+1:l}
,i2=({
isMovingForward:t,isInHomeList:e,insideDestination:n,location:r}
)=>{
if(!n.length)return null;
const i=r.index,s=t?i+1:i-1,o=n[0].descriptor.index,l=n[n.length-1].descriptor.index,c=e?l:l+1;
return s<o||s>c?null:s}
,s2=({
isMovingForward:t,isInHomeList:e,draggable:n,draggables:r,destination:i,insideDestination:s,previousImpact:o,viewport:l,afterCritical:c}
)=>{
const u=o.at;
if(u||X(),u.type==="REORDER"){
const m=i2({
isMovingForward:t,isInHomeList:e,location:u.destination,insideDestination:s}
);
return m==null?null:hd({
draggable:n,insideDestination:s,destination:i,viewport:l,last:o.displaced,displacedBy:o.displacedBy,index:m}
)}
const d=r2({
isMovingForward:t,destination:i,displaced:o.displaced,draggables:r,combine:u.combine,afterCritical:c}
);
return d==null?null:hd({
draggable:n,insideDestination:s,destination:i,viewport:l,last:o.displaced,displacedBy:o.displacedBy,index:d}
)}
,o2=({
displaced:t,afterCritical:e,combineWith:n,displacedBy:r}
)=>{
const i=!!(t.visible[n]||t.invisible[n]);
return $i(n,e)?i?Ct:Xo(r.point):i?r.point:Ct}
,a2=({
afterCritical:t,impact:e,draggables:n}
)=>{
const r=Qd(e);
r||X();
const i=r.draggableId,s=n[i].page.borderBox.center,o=o2({
displaced:e.displaced,afterCritical:t,combineWith:i,displacedBy:e.displacedBy}
);
return Ot(s,o)}
;
const x1=(t,e)=>e.margin[t.start]+e.borderBox[t.size]/2,l2=(t,e)=>e.margin[t.end]+e.borderBox[t.size]/2,dg=(t,e,n)=>e[t.crossAxisStart]+n.margin[t.crossAxisStart]+n.borderBox[t.crossAxisSize]/2,Xy=({
axis:t,moveRelativeTo:e,isMoving:n}
)=>ks(t.line,e.marginBox[t.end]+x1(t,n),dg(t,e.marginBox,n)),Jy=({
axis:t,moveRelativeTo:e,isMoving:n}
)=>ks(t.line,e.marginBox[t.start]-l2(t,n),dg(t,e.marginBox,n)),c2=({
axis:t,moveInto:e,isMoving:n}
)=>ks(t.line,e.contentBox[t.start]+x1(t,n),dg(t,e.contentBox,n));
var u2=({
impact:t,draggable:e,draggables:n,droppable:r,afterCritical:i}
)=>{
const s=Jo(r.descriptor.id,n),o=e.page,l=r.axis;
if(!s.length)return c2({
axis:l,moveInto:r.page,isMoving:o}
);
const{
displaced:c,displacedBy:u}
=t,d=c.all[0];
if(d){
const g=n[d];
if($i(d,i))return Jy({
axis:l,moveRelativeTo:g.page,isMoving:o}
);
const _=ad(g.page,u.point);
return Jy({
axis:l,moveRelativeTo:_,isMoving:o}
)}
const m=s[s.length-1];
if(m.descriptor.id===e.descriptor.id)return o.borderBox.center;
if($i(m.descriptor.id,i)){
const g=ad(m.page,Xo(i.displacedBy.point));
return Xy({
axis:l,moveRelativeTo:g,isMoving:o}
)}
return Xy({
axis:l,moveRelativeTo:m.page,isMoving:o}
)}
,Pp=(t,e)=>{
const n=t.frame;
return n?Ot(e,n.scroll.diff.displacement):e}
;
const d2=({
impact:t,draggable:e,droppable:n,draggables:r,afterCritical:i}
)=>{
const s=e.page.borderBox.center,o=t.at;
return!n||!o?s:o.type==="REORDER"?u2({
impact:t,draggable:e,draggables:r,droppable:n,afterCritical:i}
):a2({
impact:t,draggables:r,afterCritical:i}
)}
;
var Xd=t=>{
const e=d2(t),n=t.droppable;
return n?Pp(n,e):e}
,b1=(t,e)=>{
const n=_n(e,t.scroll.initial),r=Xo(n);
return{
frame:Xn({
top:e.y,bottom:e.y+t.frame.height,left:e.x,right:e.x+t.frame.width}
),scroll:{
initial:t.scroll.initial,max:t.scroll.max,current:e,diff:{
value:n,displacement:r}
}
}
}
;
function Zy(t,e){
return t.map(n=>e[n])}
function h2(t,e){
for(let n=0;
n<e.length;
n++){
const r=e[n].visible[t];
if(r)return r}
return null}
var f2=({
impact:t,viewport:e,destination:n,draggables:r,maxScrollChange:i}
)=>{
const s=b1(e,Ot(e.scroll.current,i)),o=n.frame?ag(n,Ot(n.frame.scroll.current,i)):n,l=t.displaced,c=Il({
afterDragging:Zy(l.all,r),destination:n,displacedBy:t.displacedBy,viewport:s.frame,last:l,forceShouldAnimate:!1}
),u=Il({
afterDragging:Zy(l.all,r),destination:o,displacedBy:t.displacedBy,viewport:e.frame,last:l,forceShouldAnimate:!1}
),d={
}
,m={
}
,g=[l,c,u];
return l.all.forEach(w=>{
const N=h2(w,g);
if(N){
m[w]=N;
return}
d[w]=!0}
),{
...t,displaced:{
all:l.all,invisible:d,visible:m}
}
}
,p2=(t,e)=>Ot(t.scroll.diff.displacement,e),hg=({
pageBorderBoxCenter:t,draggable:e,viewport:n}
)=>{
const r=p2(n,t),i=_n(r,e.page.borderBox.center);
return Ot(e.client.borderBox.center,i)}
,E1=({
draggable:t,destination:e,newPageBorderBoxCenter:n,viewport:r,withDroppableDisplacement:i,onlyOnMainAxis:s=!1}
)=>{
const o=_n(n,t.page.borderBox.center),c={
target:zl(t.page.borderBox,o),destination:e,withDroppableDisplacement:i,viewport:r}
;
return s?ZC(c):w1(c)}
,m2=({
isMovingForward:t,draggable:e,destination:n,draggables:r,previousImpact:i,viewport:s,previousPageBorderBoxCenter:o,previousClientSelection:l,afterCritical:c}
)=>{
if(!n.isEnabled)return null;
const u=Jo(n.descriptor.id,r),d=Zo(e,n),m=GC({
isMovingForward:t,draggable:e,destination:n,insideDestination:u,previousImpact:i}
)||s2({
isMovingForward:t,isInHomeList:d,draggable:e,draggables:r,destination:n,insideDestination:u,previousImpact:i,viewport:s,afterCritical:c}
);
if(!m)return null;
const g=Xd({
impact:m,draggable:e,droppable:n,draggables:r,afterCritical:c}
);
if(E1({
draggable:e,destination:n,newPageBorderBoxCenter:g,viewport:s.frame,withDroppableDisplacement:!1,onlyOnMainAxis:!0}
))return{
clientSelection:hg({
pageBorderBoxCenter:g,draggable:e,viewport:s}
),impact:m,scrollJumpRequest:null}
;
const w=_n(g,o),N=f2({
impact:m,viewport:s,destination:n,draggables:r,maxScrollChange:w}
);
return{
clientSelection:l,impact:N,scrollJumpRequest:w}
}
;
const Zt=t=>{
const e=t.subject.active;
return e||X(),e}
;
var g2=({
isMovingForward:t,pageBorderBoxCenter:e,source:n,droppables:r,viewport:i}
)=>{
const s=n.subject.active;
if(!s)return null;
const o=n.axis,l=jn(s[o.start],s[o.end]),c=Kd(r).filter(d=>d!==n).filter(d=>d.isEnabled).filter(d=>!!d.subject.active).filter(d=>v1(i.frame)(Zt(d))).filter(d=>{
const m=Zt(d);
return t?s[o.crossAxisEnd]<m[o.crossAxisEnd]:m[o.crossAxisStart]<s[o.crossAxisStart]}
).filter(d=>{
const m=Zt(d),g=jn(m[o.start],m[o.end]);
return l(m[o.start])||l(m[o.end])||g(s[o.start])||g(s[o.end])}
).sort((d,m)=>{
const g=Zt(d)[o.crossAxisStart],_=Zt(m)[o.crossAxisStart];
return t?g-_:_-g}
).filter((d,m,g)=>Zt(d)[o.crossAxisStart]===Zt(g[0])[o.crossAxisStart]);
if(!c.length)return null;
if(c.length===1)return c[0];
const u=c.filter(d=>jn(Zt(d)[o.start],Zt(d)[o.end])(e[o.line]));
return u.length===1?u[0]:u.length>1?u.sort((d,m)=>Zt(d)[o.start]-Zt(m)[o.start])[0]:c.sort((d,m)=>{
const g=Ky(e,Qy(Zt(d))),_=Ky(e,Qy(Zt(m)));
return g!==_?g-_:Zt(d)[o.start]-Zt(m)[o.start]}
)[0]}
;
const ev=(t,e)=>{
const n=t.page.borderBox.center;
return $i(t.descriptor.id,e)?_n(n,e.displacedBy.point):n}
,y2=(t,e)=>{
const n=t.page.borderBox;
return $i(t.descriptor.id,e)?zl(n,Xo(e.displacedBy.point)):n}
;
var v2=({
pageBorderBoxCenter:t,viewport:e,destination:n,insideDestination:r,afterCritical:i}
)=>r.filter(o=>w1({
target:y2(o,i),destination:n,viewport:e.frame,withDroppableDisplacement:!0}
)).sort((o,l)=>{
const c=El(t,Pp(n,ev(o,i))),u=El(t,Pp(n,ev(l,i)));
return c<u?-1:u<c?1:o.descriptor.index-l.descriptor.index}
)[0]||null,ql=At(function(e,n){
const r=n[e.line];
return{
value:r,point:ks(e.line,r)}
}
);
const _2=(t,e,n)=>{
const r=t.axis;
if(t.descriptor.mode==="virtual")return ks(r.line,e[r.line]);
const i=t.subject.page.contentBox[r.size],c=Jo(t.descriptor.id,n).reduce((u,d)=>u+d.client.marginBox[r.size],0)+e[r.line]-i;
return c<=0?null:ks(r.line,c)}
,T1=(t,e)=>({
...t,scroll:{
...t.scroll,max:e}
}
),I1=(t,e,n)=>{
const r=t.frame;
Zo(e,t)&&X(),t.subject.withPlaceholder&&X();
const i=ql(t.axis,e.displaceBy).point,s=_2(t,i,n),o={
placeholderSize:i,increasedBy:s,oldFrameMaxScroll:t.frame?t.frame.scroll.max:null}
;
if(!r){
const d=Lo({
page:t.subject.page,withPlaceholder:o,axis:t.axis,frame:t.frame}
);
return{
...t,subject:d}
}
const l=s?Ot(r.scroll.max,s):r.scroll.max,c=T1(r,l),u=Lo({
page:t.subject.page,withPlaceholder:o,axis:t.axis,frame:c}
);
return{
...t,subject:u,frame:c}
}
,w2=t=>{
const e=t.subject.withPlaceholder;
e||X();
const n=t.frame;
if(!n){
const o=Lo({
page:t.subject.page,axis:t.axis,frame:null,withPlaceholder:null}
);
return{
...t,subject:o}
}
const r=e.oldFrameMaxScroll;
r||X();
const i=T1(n,r),s=Lo({
page:t.subject.page,axis:t.axis,frame:i,withPlaceholder:null}
);
return{
...t,subject:s,frame:i}
}
;
var x2=({
previousPageBorderBoxCenter:t,moveRelativeTo:e,insideDestination:n,draggable:r,draggables:i,destination:s,viewport:o,afterCritical:l}
)=>{
if(!e){
if(n.length)return null;
const m={
displaced:Tl,displacedBy:y1,at:{
type:"REORDER",destination:{
droppableId:s.descriptor.id,index:0}
}
}
,g=Xd({
impact:m,draggable:r,droppable:s,draggables:i,afterCritical:l}
),_=Zo(r,s)?s:I1(s,r,i);
return E1({
draggable:r,destination:_,newPageBorderBoxCenter:g,viewport:o.frame,withDroppableDisplacement:!1,onlyOnMainAxis:!0}
)?m:null}
const c=t[s.axis.line]<=e.page.borderBox.center[s.axis.line],u=(()=>{
const m=e.descriptor.index;
return e.descriptor.id===r.descriptor.id||c?m:m+1}
)(),d=ql(s.axis,r.displaceBy);
return hd({
draggable:r,insideDestination:n,destination:s,viewport:o,displacedBy:d,last:Tl,index:u}
)}
,b2=({
isMovingForward:t,previousPageBorderBoxCenter:e,draggable:n,isOver:r,draggables:i,droppables:s,viewport:o,afterCritical:l}
)=>{
const c=g2({
isMovingForward:t,pageBorderBoxCenter:e,source:r,droppables:s,viewport:o}
);
if(!c)return null;
const u=Jo(c.descriptor.id,i),d=v2({
pageBorderBoxCenter:e,viewport:o,destination:c,insideDestination:u,afterCritical:l}
),m=x2({
previousPageBorderBoxCenter:e,destination:c,draggable:n,draggables:i,moveRelativeTo:d,insideDestination:u,viewport:o,afterCritical:l}
);
if(!m)return null;
const g=Xd({
impact:m,draggable:n,droppable:c,draggables:i,afterCritical:l}
);
return{
clientSelection:hg({
pageBorderBoxCenter:g,draggable:n,viewport:o}
),impact:m,scrollJumpRequest:null}
}
,bn=t=>{
const e=t.at;
return e?e.type==="REORDER"?e.destination.droppableId:e.combine.droppableId:null}
;
const E2=(t,e)=>{
const n=bn(t);
return n?e[n]:null}
;
var T2=({
state:t,type:e}
)=>{
const n=E2(t.impact,t.dimensions.droppables),r=!!n,i=t.dimensions.droppables[t.critical.droppable.id],s=n||i,o=s.axis.direction,l=o==="vertical"&&(e==="MOVE_UP"||e==="MOVE_DOWN")||o==="horizontal"&&(e==="MOVE_LEFT"||e==="MOVE_RIGHT");
if(l&&!r)return null;
const c=e==="MOVE_DOWN"||e==="MOVE_RIGHT",u=t.dimensions.draggables[t.critical.draggable.id],d=t.current.page.borderBoxCenter,{
draggables:m,droppables:g}
=t.dimensions;
return l?m2({
isMovingForward:c,previousPageBorderBoxCenter:d,draggable:u,destination:s,draggables:m,viewport:t.viewport,previousClientSelection:t.current.client.selection,previousImpact:t.impact,afterCritical:t.afterCritical}
):b2({
isMovingForward:c,previousPageBorderBoxCenter:d,draggable:u,isOver:s,draggables:m,droppables:g,viewport:t.viewport,afterCritical:t.afterCritical}
)}
;
function ms(t){
return t.phase==="DRAGGING"||t.phase==="COLLECTING"}
function S1(t){
const e=jn(t.top,t.bottom),n=jn(t.left,t.right);
return function(i){
return e(i.y)&&n(i.x)}
}
function I2(t,e){
return t.left<e.right&&t.right>e.left&&t.top<e.bottom&&t.bottom>e.top}
function S2({
pageBorderBox:t,draggable:e,candidates:n}
){
const r=e.page.borderBox.center,i=n.map(s=>{
const o=s.axis,l=ks(s.axis.line,t.center[o.line],s.page.borderBox.center[o.crossAxisLine]);
return{
id:s.descriptor.id,distance:El(r,l)}
}
).sort((s,o)=>o.distance-s.distance);
return i[0]?i[0].id:null}
function A2({
pageBorderBox:t,draggable:e,droppables:n}
){
const r=Kd(n).filter(i=>{
if(!i.isEnabled)return!1;
const s=i.subject.active;
if(!s||!I2(t,s))return!1;
if(S1(s)(t.center))return!0;
const o=i.axis,l=s.center[o.crossAxisLine],c=t[o.crossAxisStart],u=t[o.crossAxisEnd],d=jn(s[o.crossAxisStart],s[o.crossAxisEnd]),m=d(c),g=d(u);
return!m&&!g?!0:m?c<l:u>l}
);
return r.length?r.length===1?r[0].descriptor.id:S2({
pageBorderBox:t,draggable:e,candidates:r}
):null}
const A1=(t,e)=>Xn(zl(t,e));
var C2=(t,e)=>{
const n=t.frame;
return n?A1(e,n.scroll.diff.value):e}
;
function C1({
displaced:t,id:e}
){
return!!(t.visible[e]||t.invisible[e])}
function k2({
draggable:t,closest:e,inHomeList:n}
){
return e?n&&e.descriptor.index>t.descriptor.index?e.descriptor.index-1:e.descriptor.index:null}
var R2=({
pageBorderBoxWithDroppableScroll:t,draggable:e,destination:n,insideDestination:r,last:i,viewport:s,afterCritical:o}
)=>{
const l=n.axis,c=ql(n.axis,e.displaceBy),u=c.value,d=t[l.start],m=t[l.end],_=Yd(e,r).find(N=>{
const O=N.descriptor.id,I=N.page.borderBox.center[l.line],E=$i(O,o),k=C1({
displaced:i,id:O}
);
return E?k?m<=I:d<I-u:k?m<=I+u:d<I}
)||null,w=k2({
draggable:e,closest:_,inHomeList:Zo(e,n)}
);
return hd({
draggable:e,insideDestination:r,destination:n,viewport:s,last:i,displacedBy:c,index:w}
)}
;
const N2=4;
var P2=({
draggable:t,pageBorderBoxWithDroppableScroll:e,previousImpact:n,destination:r,insideDestination:i,afterCritical:s}
)=>{
if(!r.isCombineEnabled)return null;
const o=r.axis,l=ql(r.axis,t.displaceBy),c=l.value,u=e[o.start],d=e[o.end],g=Yd(t,i).find(w=>{
const N=w.descriptor.id,O=w.page.borderBox,E=O[o.size]/N2,k=$i(N,s),M=C1({
displaced:n.displaced,id:N}
);
return k?M?d>O[o.start]+E&&d<O[o.end]-E:u>O[o.start]-c+E&&u<O[o.end]-c-E:M?d>O[o.start]+c+E&&d<O[o.end]+c-E:u>O[o.start]+E&&u<O[o.end]-E}
);
return g?{
displacedBy:l,displaced:n.displaced,at:{
type:"COMBINE",combine:{
draggableId:g.descriptor.id,droppableId:r.descriptor.id}
}
}
:null}
,k1=({
pageOffset:t,draggable:e,draggables:n,droppables:r,previousImpact:i,viewport:s,afterCritical:o}
)=>{
const l=A1(e.page.borderBox,t),c=A2({
pageBorderBox:l,draggable:e,droppables:r}
);
if(!c)return WC;
const u=r[c],d=Jo(u.descriptor.id,n),m=C2(u,l);
return P2({
pageBorderBoxWithDroppableScroll:m,draggable:e,previousImpact:i,destination:u,insideDestination:d,afterCritical:o}
)||R2({
pageBorderBoxWithDroppableScroll:m,draggable:e,destination:u,insideDestination:d,last:i.displaced,viewport:s,afterCritical:o}
)}
,fg=(t,e)=>({
...t,[e.descriptor.id]:e}
);
const D2=({
previousImpact:t,impact:e,droppables:n}
)=>{
const r=bn(t),i=bn(e);
if(!r||r===i)return n;
const s=n[r];
if(!s.subject.withPlaceholder)return n;
const o=w2(s);
return fg(n,o)}
;
var O2=({
draggable:t,draggables:e,droppables:n,previousImpact:r,impact:i}
)=>{
const s=D2({
previousImpact:r,impact:i,droppables:n}
),o=bn(i);
if(!o)return s;
const l=n[o];
if(Zo(t,l)||l.subject.withPlaceholder)return s;
const c=I1(l,t,e);
return fg(s,c)}
,Ja=({
state:t,clientSelection:e,dimensions:n,viewport:r,impact:i,scrollJumpRequest:s}
)=>{
const o=r||t.viewport,l=n||t.dimensions,c=e||t.current.client.selection,u=_n(c,t.initial.client.selection),d={
offset:u,selection:c,borderBoxCenter:Ot(t.initial.client.borderBoxCenter,u)}
,m={
selection:Ot(d.selection,o.scroll.current),borderBoxCenter:Ot(d.borderBoxCenter,o.scroll.current),offset:Ot(d.offset,o.scroll.diff.value)}
,g={
client:d,page:m}
;
if(t.phase==="COLLECTING")return{
...t,dimensions:l,viewport:o,current:g}
;
const _=l.draggables[t.critical.draggable.id],w=i||k1({
pageOffset:m.offset,draggable:_,draggables:l.draggables,droppables:l.droppables,previousImpact:t.impact,viewport:o,afterCritical:t.afterCritical}
),N=O2({
draggable:_,impact:w,previousImpact:t.impact,draggables:l.draggables,droppables:l.droppables}
);
return{
...t,current:g,dimensions:{
draggables:l.draggables,droppables:N}
,impact:w,viewport:o,scrollJumpRequest:s||null,forceShouldAnimate:s?!1:null}
}
;
function V2(t,e){
return t.map(n=>e[n])}
var R1=({
impact:t,viewport:e,draggables:n,destination:r,forceShouldAnimate:i}
)=>{
const s=t.displaced,o=V2(s.all,n),l=Il({
afterDragging:o,destination:r,displacedBy:t.displacedBy,viewport:e.frame,forceShouldAnimate:i,last:s}
);
return{
...t,displaced:l}
}
,N1=({
impact:t,draggable:e,droppable:n,draggables:r,viewport:i,afterCritical:s}
)=>{
const o=Xd({
impact:t,draggable:e,draggables:r,droppable:n,afterCritical:s}
);
return hg({
pageBorderBoxCenter:o,draggable:e,viewport:i}
)}
,P1=({
state:t,dimensions:e,viewport:n}
)=>{
t.movementMode!=="SNAP"&&X();
const r=t.impact,i=n||t.viewport,s=e||t.dimensions,{
draggables:o,droppables:l}
=s,c=o[t.critical.draggable.id],u=bn(r);
u||X();
const d=l[u],m=R1({
impact:r,viewport:i,destination:d,draggables:o}
),g=N1({
impact:m,draggable:c,droppable:d,draggables:o,viewport:i,afterCritical:t.afterCritical}
);
return Ja({
impact:m,clientSelection:g,state:t,dimensions:s,viewport:i}
)}
,M2=t=>({
index:t.index,droppableId:t.droppableId}
),D1=({
draggable:t,home:e,draggables:n,viewport:r}
)=>{
const i=ql(e.axis,t.displaceBy),s=Jo(e.descriptor.id,n),o=s.indexOf(t);
o===-1&&X();
const l=s.slice(o+1),c=l.reduce((g,_)=>(g[_.descriptor.id]=!0,g),{
}
),u={
inVirtualList:e.descriptor.mode==="virtual",displacedBy:i,effected:c}
;
return{
impact:{
displaced:Il({
afterDragging:l,destination:e,displacedBy:i,last:null,viewport:r.frame,forceShouldAnimate:!1}
),displacedBy:i,at:{
type:"REORDER",destination:M2(t.descriptor)}
}
,afterCritical:u}
}
,L2=(t,e)=>({
draggables:t.draggables,droppables:fg(t.droppables,e)}
),j2=({
draggable:t,offset:e,initialWindowScroll:n}
)=>{
const r=ad(t.client,e),i=ld(r,n);
return{
...t,placeholder:{
...t.placeholder,client:r}
,client:r,page:i}
}
,F2=t=>{
const e=t.frame;
return e||X(),e}
,B2=({
additions:t,updatedDroppables:e,viewport:n}
)=>{
const r=n.scroll.diff.value;
return t.map(i=>{
const s=i.descriptor.droppableId,o=e[s],c=F2(o).scroll.diff.value,u=Ot(r,c);
return j2({
draggable:i,offset:u,initialWindowScroll:n.scroll.initial}
)}
)}
,U2=({
state:t,published:e}
)=>{
const n=e.modified.map(I=>{
const E=t.dimensions.droppables[I.droppableId];
return ag(E,I.scroll)}
),r={
...t.dimensions.droppables,...m1(n)}
,i=g1(B2({
additions:e.additions,updatedDroppables:r,viewport:t.viewport}
)),s={
...t.dimensions.draggables,...i}
;
e.removals.forEach(I=>{
delete s[I]}
);
const o={
droppables:r,draggables:s}
,l=bn(t.impact),c=l?o.droppables[l]:null,u=o.draggables[t.critical.draggable.id],d=o.droppables[t.critical.droppable.id],{
impact:m,afterCritical:g}
=D1({
draggable:u,home:d,draggables:s,viewport:t.viewport}
),_=c&&c.isCombineEnabled?t.impact:m,w=k1({
pageOffset:t.current.page.offset,draggable:o.draggables[t.critical.draggable.id],draggables:o.draggables,droppables:o.droppables,previousImpact:_,viewport:t.viewport,afterCritical:g}
),N={
...t,phase:"DRAGGING",impact:w,onLiftImpact:m,dimensions:o,afterCritical:g,forceShouldAnimate:!1}
;
return t.phase==="COLLECTING"?N:{
...N,phase:"DROP_PENDING",reason:t.reason,isWaiting:!1}
}
;
const Dp=t=>t.movementMode==="SNAP",gf=(t,e,n)=>{
const r=L2(t.dimensions,e);
return!Dp(t)||n?Ja({
state:t,dimensions:r}
):P1({
state:t,dimensions:r}
)}
;
function yf(t){
return t.isDragging&&t.movementMode==="SNAP"?{
...t,scrollJumpRequest:null}
:t}
const tv={
phase:"IDLE",completed:null,shouldFlush:!1}
;
var $2=(t=tv,e)=>{
if(e.type==="FLUSH")return{
...tv,shouldFlush:!0}
;
if(e.type==="INITIAL_PUBLISH"){
t.phase!=="IDLE"&&X();
const{
critical:n,clientSelection:r,viewport:i,dimensions:s,movementMode:o}
=e.payload,l=s.draggables[n.draggable.id],c=s.droppables[n.droppable.id],u={
selection:r,borderBoxCenter:l.client.borderBox.center,offset:Ct}
,d={
client:u,page:{
selection:Ot(u.selection,i.scroll.initial),borderBoxCenter:Ot(u.selection,i.scroll.initial),offset:Ot(u.selection,i.scroll.diff.value)}
}
,m=Kd(s.droppables).every(N=>!N.isFixedOnPage),{
impact:g,afterCritical:_}
=D1({
draggable:l,home:c,draggables:s.draggables,viewport:i}
);
return{
phase:"DRAGGING",isDragging:!0,critical:n,movementMode:o,dimensions:s,initial:d,current:d,isWindowScrollAllowed:m,impact:g,afterCritical:_,onLiftImpact:g,viewport:i,scrollJumpRequest:null,forceShouldAnimate:null}
}
if(e.type==="COLLECTION_STARTING")return t.phase==="COLLECTING"||t.phase==="DROP_PENDING"?t:(t.phase!=="DRAGGING"&&X(),{
...t,phase:"COLLECTING"}
);
if(e.type==="PUBLISH_WHILE_DRAGGING")return t.phase==="COLLECTING"||t.phase==="DROP_PENDING"||X(),U2({
state:t,published:e.payload}
);
if(e.type==="MOVE"){
if(t.phase==="DROP_PENDING")return t;
ms(t)||X();
const{
client:n}
=e.payload;
return Di(n,t.current.client.selection)?t:Ja({
state:t,clientSelection:n,impact:Dp(t)?t.impact:null}
)}
if(e.type==="UPDATE_DROPPABLE_SCROLL"){
if(t.phase==="DROP_PENDING"||t.phase==="COLLECTING")return yf(t);
ms(t)||X();
const{
id:n,newScroll:r}
=e.payload,i=t.dimensions.droppables[n];
if(!i)return t;
const s=ag(i,r);
return gf(t,s,!1)}
if(e.type==="UPDATE_DROPPABLE_IS_ENABLED"){
if(t.phase==="DROP_PENDING")return t;
ms(t)||X();
const{
id:n,isEnabled:r}
=e.payload,i=t.dimensions.droppables[n];
i||X(),i.isEnabled===r&&X();
const s={
...i,isEnabled:r}
;
return gf(t,s,!0)}
if(e.type==="UPDATE_DROPPABLE_IS_COMBINE_ENABLED"){
if(t.phase==="DROP_PENDING")return t;
ms(t)||X();
const{
id:n,isCombineEnabled:r}
=e.payload,i=t.dimensions.droppables[n];
i||X(),i.isCombineEnabled===r&&X();
const s={
...i,isCombineEnabled:r}
;
return gf(t,s,!0)}
if(e.type==="MOVE_BY_WINDOW_SCROLL"){
if(t.phase==="DROP_PENDING"||t.phase==="DROP_ANIMATING")return t;
ms(t)||X(),t.isWindowScrollAllowed||X();
const n=e.payload.newScroll;
if(Di(t.viewport.scroll.current,n))return yf(t);
const r=b1(t.viewport,n);
return Dp(t)?P1({
state:t,viewport:r}
):Ja({
state:t,viewport:r}
)}
if(e.type==="UPDATE_VIEWPORT_MAX_SCROLL"){
if(!ms(t))return t;
const n=e.payload.maxScroll;
if(Di(n,t.viewport.scroll.max))return t;
const r={
...t.viewport,scroll:{
...t.viewport.scroll,max:n}
}
;
return{
...t,viewport:r}
}
if(e.type==="MOVE_UP"||e.type==="MOVE_DOWN"||e.type==="MOVE_LEFT"||e.type==="MOVE_RIGHT"){
if(t.phase==="COLLECTING"||t.phase==="DROP_PENDING")return t;
t.phase!=="DRAGGING"&&X();
const n=T2({
state:t,type:e.type}
);
return n?Ja({
state:t,impact:n.impact,clientSelection:n.clientSelection,scrollJumpRequest:n.scrollJumpRequest}
):t}
if(e.type==="DROP_PENDING"){
const n=e.payload.reason;
return t.phase!=="COLLECTING"&&X(),{
...t,phase:"DROP_PENDING",isWaiting:!0,reason:n}
}
if(e.type==="DROP_ANIMATE"){
const{
completed:n,dropDuration:r,newHomeClientOffset:i}
=e.payload;
return t.phase==="DRAGGING"||t.phase==="DROP_PENDING"||X(),{
phase:"DROP_ANIMATING",completed:n,dropDuration:r,newHomeClientOffset:i,dimensions:t.dimensions}
}
if(e.type==="DROP_COMPLETE"){
const{
completed:n}
=e.payload;
return{
phase:"IDLE",completed:n,shouldFlush:!1}
}
return t}
;
function je(t,e){
return t instanceof Object&&"type"in t&&t.type===e}
const z2=t=>({
type:"BEFORE_INITIAL_CAPTURE",payload:t}
),q2=t=>({
type:"LIFT",payload:t}
),G2=t=>({
type:"INITIAL_PUBLISH",payload:t}
),W2=t=>({
type:"PUBLISH_WHILE_DRAGGING",payload:t}
),H2=()=>({
type:"COLLECTION_STARTING",payload:null}
),K2=t=>({
type:"UPDATE_DROPPABLE_SCROLL",payload:t}
),Q2=t=>({
type:"UPDATE_DROPPABLE_IS_ENABLED",payload:t}
),Y2=t=>({
type:"UPDATE_DROPPABLE_IS_COMBINE_ENABLED",payload:t}
),O1=t=>({
type:"MOVE",payload:t}
),X2=t=>({
type:"MOVE_BY_WINDOW_SCROLL",payload:t}
),J2=t=>({
type:"UPDATE_VIEWPORT_MAX_SCROLL",payload:t}
),Z2=()=>({
type:"MOVE_UP",payload:null}
),ek=()=>({
type:"MOVE_DOWN",payload:null}
),tk=()=>({
type:"MOVE_RIGHT",payload:null}
),nk=()=>({
type:"MOVE_LEFT",payload:null}
),pg=()=>({
type:"FLUSH",payload:null}
),rk=t=>({
type:"DROP_ANIMATE",payload:t}
),mg=t=>({
type:"DROP_COMPLETE",payload:t}
),V1=t=>({
type:"DROP",payload:t}
),ik=t=>({
type:"DROP_PENDING",payload:t}
),M1=()=>({
type:"DROP_ANIMATION_FINISHED",payload:null}
);
var sk=t=>({
getState:e,dispatch:n}
)=>r=>i=>{
if(!je(i,"LIFT")){
r(i);
return}
const{
id:s,clientSelection:o,movementMode:l}
=i.payload,c=e();
c.phase==="DROP_ANIMATING"&&n(mg({
completed:c.completed}
)),e().phase!=="IDLE"&&X(),n(pg()),n(z2({
draggableId:s,movementMode:l}
));
const d={
draggableId:s,scrollOptions:{
shouldPublishImmediately:l==="SNAP"}
}
,{
critical:m,dimensions:g,viewport:_}
=t.startPublishing(d);
n(G2({
critical:m,dimensions:g,clientSelection:o,movementMode:l,viewport:_}
))}
,ok=t=>()=>e=>n=>{
je(n,"INITIAL_PUBLISH")&&t.dragging(),je(n,"DROP_ANIMATE")&&t.dropping(n.payload.completed.result.reason),(je(n,"FLUSH")||je(n,"DROP_COMPLETE"))&&t.resting(),e(n)}
;
const gg={
outOfTheWay:"cubic-bezier(0.2, 0, 0, 1)",drop:"cubic-bezier(.2,1,.1,1)"}
,Sl={
opacity:{
drop:0,combining:.7}
,scale:{
drop:.75}
}
,L1={
outOfTheWay:.2,minDropTime:.33,maxDropTime:.55}
,hs=`${
L1.outOfTheWay}
s ${
gg.outOfTheWay}
`,Za={
fluid:`opacity ${
hs}
`,snap:`transform ${
hs}
, opacity ${
hs}
`,drop:t=>{
const e=`${
t}
s ${
gg.drop}
`;
return`transform ${
e}
, opacity ${
e}
`}
,outOfTheWay:`transform ${
hs}
`,placeholder:`height ${
hs}
, width ${
hs}
, margin ${
hs}
`}
,nv=t=>Di(t,Ct)?void 0:`translate(${
t.x}
px, ${
t.y}
px)`,Op={
moveTo:nv,drop:(t,e)=>{
const n=nv(t);
if(n)return e?`${
n}
 scale(${
Sl.scale.drop}
)`:n}
}
,{
minDropTime:Vp,maxDropTime:j1}
=L1,ak=j1-Vp,rv=1500,lk=.6;
var ck=({
current:t,destination:e,reason:n}
)=>{
const r=El(t,e);
if(r<=0)return Vp;
if(r>=rv)return j1;
const i=r/rv,s=Vp+ak*i,o=n==="CANCEL"?s*lk:s;
return Number(o.toFixed(2))}
,uk=({
impact:t,draggable:e,dimensions:n,viewport:r,afterCritical:i}
)=>{
const{
draggables:s,droppables:o}
=n,l=bn(t),c=l?o[l]:null,u=o[e.descriptor.droppableId],d=N1({
impact:t,draggable:e,draggables:s,afterCritical:i,droppable:c||u,viewport:r}
);
return _n(d,e.client.borderBox.center)}
,dk=({
draggables:t,reason:e,lastImpact:n,home:r,viewport:i,onLiftImpact:s}
)=>!n.at||e!=="DROP"?{
impact:R1({
draggables:t,impact:s,destination:r,viewport:i,forceShouldAnimate:!0}
),didDropInsideDroppable:!1}
:n.at.type==="REORDER"?{
impact:n,didDropInsideDroppable:!0}
:{
impact:{
...n,displaced:Tl}
,didDropInsideDroppable:!0}
;
const hk=({
getState:t,dispatch:e}
)=>n=>r=>{
if(!je(r,"DROP")){
n(r);
return}
const i=t(),s=r.payload.reason;
if(i.phase==="COLLECTING"){
e(ik({
reason:s}
));
return}
if(i.phase==="IDLE")return;
i.phase==="DROP_PENDING"&&i.isWaiting&&X(),i.phase==="DRAGGING"||i.phase==="DROP_PENDING"||X();
const l=i.critical,c=i.dimensions,u=c.draggables[i.critical.draggable.id],{
impact:d,didDropInsideDroppable:m}
=dk({
reason:s,lastImpact:i.impact,afterCritical:i.afterCritical,onLiftImpact:i.onLiftImpact,home:i.dimensions.droppables[i.critical.droppable.id],viewport:i.viewport,draggables:i.dimensions.draggables}
),g=m?lg(d):null,_=m?Qd(d):null,w={
index:l.draggable.index,droppableId:l.droppable.id}
,N={
draggableId:u.descriptor.id,type:u.descriptor.type,source:w,reason:s,mode:i.movementMode,destination:g,combine:_}
,O=uk({
impact:d,draggable:u,dimensions:c,viewport:i.viewport,afterCritical:i.afterCritical}
),I={
critical:i.critical,afterCritical:i.afterCritical,result:N,impact:d}
;
if(!(!Di(i.current.client.offset,O)||!!N.combine)){
e(mg({
completed:I}
));
return}
const k=ck({
current:i.current.client.offset,destination:O,reason:s}
);
e(rk({
newHomeClientOffset:O,dropDuration:k,completed:I}
))}
;
var F1=()=>({
x:window.pageXOffset,y:window.pageYOffset}
);
function fk(t){
return{
eventName:"scroll",options:{
passive:!0,capture:!1}
,fn:e=>{
e.target!==window&&e.target!==window.document||t()}
}
}
function pk({
onWindowScroll:t}
){
function e(){
t(F1())}
const n=bl(e),r=fk(n);
let i=Pi;
function s(){
return i!==Pi}
function o(){
s()&&X(),i=Mn(window,[r])}
function l(){
s()||X(),n.cancel(),i(),i=Pi}
return{
start:o,stop:l,isActive:s}
}
const mk=t=>je(t,"DROP_COMPLETE")||je(t,"DROP_ANIMATE")||je(t,"FLUSH"),gk=t=>{
const e=pk({
onWindowScroll:n=>{
t.dispatch(X2({
newScroll:n}
))}
}
);
return n=>r=>{
!e.isActive()&&je(r,"INITIAL_PUBLISH")&&e.start(),e.isActive()&&mk(r)&&e.stop(),n(r)}
}
;
var yk=t=>{
let e=!1,n=!1;
const r=setTimeout(()=>{
n=!0}
),i=s=>{
e||n||(e=!0,t(s),clearTimeout(r))}
;
return i.wasCalled=()=>e,i}
,vk=()=>{
const t=[],e=i=>{
const s=t.findIndex(l=>l.timerId===i);
s===-1&&X();
const[o]=t.splice(s,1);
o.callback()}
;
return{
add:i=>{
const s=setTimeout(()=>e(s)),o={
timerId:s,callback:i}
;
t.push(o)}
,flush:()=>{
if(!t.length)return;
const i=[...t];
t.length=0,i.forEach(s=>{
clearTimeout(s.timerId),s.callback()}
)}
}
}
;
const _k=(t,e)=>t==null&&e==null?!0:t==null||e==null?!1:t.droppableId===e.droppableId&&t.index===e.index,wk=(t,e)=>t==null&&e==null?!0:t==null||e==null?!1:t.draggableId===e.draggableId&&t.droppableId===e.droppableId,xk=(t,e)=>{
if(t===e)return!0;
const n=t.draggable.id===e.draggable.id&&t.draggable.droppableId===e.draggable.droppableId&&t.draggable.type===e.draggable.type&&t.draggable.index===e.draggable.index,r=t.droppable.id===e.droppable.id&&t.droppable.type===e.droppable.type;
return n&&r}
,Na=(t,e)=>{
e()}
,iu=(t,e)=>({
draggableId:t.draggable.id,type:t.droppable.type,source:{
droppableId:t.droppable.id,index:t.draggable.index}
,mode:e}
);
function vf(t,e,n,r){
if(!t){
n(r(e));
return}
const i=yk(n);
t(e,{
announce:i}
),i.wasCalled()||n(r(e))}
var bk=(t,e)=>{
const n=vk();
let r=null;
const i=(m,g)=>{
r&&X(),Na("onBeforeCapture",()=>{
const _=t().onBeforeCapture;
_&&_({
draggableId:m,mode:g}
)}
)}
,s=(m,g)=>{
r&&X(),Na("onBeforeDragStart",()=>{
const _=t().onBeforeDragStart;
_&&_(iu(m,g))}
)}
,o=(m,g)=>{
r&&X();
const _=iu(m,g);
r={
mode:g,lastCritical:m,lastLocation:_.source,lastCombine:null}
,n.add(()=>{
Na("onDragStart",()=>vf(t().onDragStart,_,e,Su.onDragStart))}
)}
,l=(m,g)=>{
const _=lg(g),w=Qd(g);
r||X();
const N=!xk(m,r.lastCritical);
N&&(r.lastCritical=m);
const O=!_k(r.lastLocation,_);
O&&(r.lastLocation=_);
const I=!wk(r.lastCombine,w);
if(I&&(r.lastCombine=w),!N&&!O&&!I)return;
const E={
...iu(m,r.mode),combine:w,destination:_}
;
n.add(()=>{
Na("onDragUpdate",()=>vf(t().onDragUpdate,E,e,Su.onDragUpdate))}
)}
,c=()=>{
r||X(),n.flush()}
,u=m=>{
r||X(),r=null,Na("onDragEnd",()=>vf(t().onDragEnd,m,e,Su.onDragEnd))}
;
return{
beforeCapture:i,beforeStart:s,start:o,update:l,flush:c,drop:u,abort:()=>{
if(!r)return;
const m={
...iu(r.lastCritical,r.mode),combine:null,destination:null,reason:"CANCEL"}
;
u(m)}
}
}
,Ek=(t,e)=>{
const n=bk(t,e);
return r=>i=>s=>{
if(je(s,"BEFORE_INITIAL_CAPTURE")){
n.beforeCapture(s.payload.draggableId,s.payload.movementMode);
return}
if(je(s,"INITIAL_PUBLISH")){
const l=s.payload.critical;
n.beforeStart(l,s.payload.movementMode),i(s),n.start(l,s.payload.movementMode);
return}
if(je(s,"DROP_COMPLETE")){
const l=s.payload.completed.result;
n.flush(),i(s),n.drop(l);
return}
if(i(s),je(s,"FLUSH")){
n.abort();
return}
const o=r.getState();
o.phase==="DRAGGING"&&n.update(o.critical,o.impact)}
}
;
const Tk=t=>e=>n=>{
if(!je(n,"DROP_ANIMATION_FINISHED")){
e(n);
return}
const r=t.getState();
r.phase!=="DROP_ANIMATING"&&X(),t.dispatch(mg({
completed:r.completed}
))}
,Ik=t=>{
let e=null,n=null;
function r(){
n&&(cancelAnimationFrame(n),n=null),e&&(e(),e=null)}
return i=>s=>{
if((je(s,"FLUSH")||je(s,"DROP_COMPLETE")||je(s,"DROP_ANIMATION_FINISHED"))&&r(),i(s),!je(s,"DROP_ANIMATE"))return;
const o={
eventName:"scroll",options:{
capture:!0,passive:!1,once:!0}
,fn:function(){
t.getState().phase==="DROP_ANIMATING"&&t.dispatch(M1())}
}
;
n=requestAnimationFrame(()=>{
n=null,e=Mn(window,[o])}
)}
}
;
var Sk=t=>()=>e=>n=>{
(je(n,"DROP_COMPLETE")||je(n,"FLUSH")||je(n,"DROP_ANIMATE"))&&t.stopPublishing(),e(n)}
,Ak=t=>{
let e=!1;
return()=>n=>r=>{
if(je(r,"INITIAL_PUBLISH")){
e=!0,t.tryRecordFocus(r.payload.critical.draggable.id),n(r),t.tryRestoreFocusRecorded();
return}
if(n(r),!!e){
if(je(r,"FLUSH")){
e=!1,t.tryRestoreFocusRecorded();
return}
if(je(r,"DROP_COMPLETE")){
e=!1;
const i=r.payload.completed.result;
i.combine&&t.tryShiftRecord(i.draggableId,i.combine.draggableId),t.tryRestoreFocusRecorded()}
}
}
}
;
const Ck=t=>je(t,"DROP_COMPLETE")||je(t,"DROP_ANIMATE")||je(t,"FLUSH");
var kk=t=>e=>n=>r=>{
if(Ck(r)){
t.stop(),n(r);
return}
if(je(r,"INITIAL_PUBLISH")){
n(r);
const i=e.getState();
i.phase!=="DRAGGING"&&X(),t.start(i);
return}
n(r),t.scroll(e.getState())}
;
const Rk=t=>e=>n=>{
if(e(n),!je(n,"PUBLISH_WHILE_DRAGGING"))return;
const r=t.getState();
r.phase==="DROP_PENDING"&&(r.isWaiting||t.dispatch(V1({
reason:r.reason}
)))}
,Nk=t1;
var Pk=({
dimensionMarshal:t,focusMarshal:e,styleMarshal:n,getResponders:r,announce:i,autoScroller:s}
)=>e1($2,Nk(TA(ok(n),Sk(t),sk(t),hk,Tk,Ik,Rk,kk(s),gk,Ak(e),Ek(r,i))));
const _f=()=>({
additions:{
}
,removals:{
}
,modified:{
}
}
);
function Dk({
registry:t,callbacks:e}
){
let n=_f(),r=null;
const i=()=>{
r||(e.collectionStarting(),r=requestAnimationFrame(()=>{
r=null;
const{
additions:c,removals:u,modified:d}
=n,m=Object.keys(c).map(w=>t.draggable.getById(w).getDimension(Ct)).sort((w,N)=>w.descriptor.index-N.descriptor.index),g=Object.keys(d).map(w=>{
const O=t.droppable.getById(w).callbacks.getScrollWhileDragging();
return{
droppableId:w,scroll:O}
}
),_={
additions:m,removals:Object.keys(u),modified:g}
;
n=_f(),e.publish(_)}
))}
;
return{
add:c=>{
const u=c.descriptor.id;
n.additions[u]=c,n.modified[c.descriptor.droppableId]=!0,n.removals[u]&&delete n.removals[u],i()}
,remove:c=>{
const u=c.descriptor;
n.removals[u.id]=!0,n.modified[u.droppableId]=!0,n.additions[u.id]&&delete n.additions[u.id],i()}
,stop:()=>{
r&&(cancelAnimationFrame(r),r=null,n=_f())}
}
}
var B1=({
scrollHeight:t,scrollWidth:e,height:n,width:r}
)=>{
const i=_n({
x:e,y:t}
,{
x:r,y:n}
);
return{
x:Math.max(0,i.x),y:Math.max(0,i.y)}
}
,U1=()=>{
const t=document.documentElement;
return t||X(),t}
,$1=()=>{
const t=U1();
return B1({
scrollHeight:t.scrollHeight,scrollWidth:t.scrollWidth,width:t.clientWidth,height:t.clientHeight}
)}
,Ok=()=>{
const t=F1(),e=$1(),n=t.y,r=t.x,i=U1(),s=i.clientWidth,o=i.clientHeight,l=r+s,c=n+o;
return{
frame:Xn({
top:n,left:r,right:l,bottom:c}
),scroll:{
initial:t,current:t,max:e,diff:{
value:Ct,displacement:Ct}
}
}
}
,Vk=({
critical:t,scrollOptions:e,registry:n}
)=>{
const r=Ok(),i=r.scroll.current,s=t.droppable,o=n.droppable.getAllByType(s.type).map(d=>d.callbacks.getDimensionAndWatchScroll(i,e)),l=n.draggable.getAllByType(t.draggable.type).map(d=>d.getDimension(i));
return{
dimensions:{
draggables:g1(l),droppables:m1(o)}
,critical:t,viewport:r}
}
;
function iv(t,e,n){
return!(n.descriptor.id===e.id||n.descriptor.type!==e.type||t.droppable.getById(n.descriptor.droppableId).descriptor.mode!=="virtual")}
var Mk=(t,e)=>{
let n=null;
const r=Dk({
callbacks:{
publish:e.publishWhileDragging,collectionStarting:e.collectionStarting}
,registry:t}
),i=(g,_)=>{
t.droppable.exists(g)||X(),n&&e.updateDroppableIsEnabled({
id:g,isEnabled:_}
)}
,s=(g,_)=>{
n&&(t.droppable.exists(g)||X(),e.updateDroppableIsCombineEnabled({
id:g,isCombineEnabled:_}
))}
,o=(g,_)=>{
n&&(t.droppable.exists(g)||X(),e.updateDroppableScroll({
id:g,newScroll:_}
))}
,l=(g,_)=>{
n&&t.droppable.getById(g).callbacks.scroll(_)}
,c=()=>{
if(!n)return;
r.stop();
const g=n.critical.droppable;
t.droppable.getAllByType(g.type).forEach(_=>_.callbacks.dragStopped()),n.unsubscribe(),n=null}
,u=g=>{
n||X();
const _=n.critical.draggable;
g.type==="ADDITION"&&iv(t,_,g.value)&&r.add(g.value),g.type==="REMOVAL"&&iv(t,_,g.value)&&r.remove(g.value)}
;
return{
updateDroppableIsEnabled:i,updateDroppableIsCombineEnabled:s,scrollDroppable:l,updateDroppableScroll:o,startPublishing:g=>{
n&&X();
const _=t.draggable.getById(g.draggableId),w=t.droppable.getById(_.descriptor.droppableId),N={
draggable:_.descriptor,droppable:w.descriptor}
,O=t.subscribe(u);
return n={
critical:N,unsubscribe:O}
,Vk({
critical:N,registry:t,scrollOptions:g.scrollOptions}
)}
,stopPublishing:c}
}
,z1=(t,e)=>t.phase==="IDLE"?!0:t.phase!=="DROP_ANIMATING"||t.completed.result.draggableId===e?!1:t.completed.result.reason==="DROP",Lk=t=>{
window.scrollBy(t.x,t.y)}
;
const jk=At(t=>Kd(t).filter(e=>!(!e.isEnabled||!e.frame))),Fk=(t,e)=>jk(e).find(r=>(r.frame||X(),S1(r.frame.pageMarginBox)(t)))||null;
var Bk=({
center:t,destination:e,droppables:n}
)=>{
if(e){
const i=n[e];
return i.frame?i:null}
return Fk(t,n)}
;
const Al={
startFromPercentage:.25,maxScrollAtPercentage:.05,maxPixelScroll:28,ease:t=>t**2,durationDampening:{
stopDampeningAt:1200,accelerateAt:360}
,disabled:!1}
;
var Uk=(t,e,n=()=>Al)=>{
const r=n(),i=t[e.size]*r.startFromPercentage,s=t[e.size]*r.maxScrollAtPercentage;
return{
startScrollingFrom:i,maxScrollValueAt:s}
}
,q1=({
startOfRange:t,endOfRange:e,current:n}
)=>{
const r=e-t;
return r===0?0:(n-t)/r}
,yg=1,$k=(t,e,n=()=>Al)=>{
const r=n();
if(t>e.startScrollingFrom)return 0;
if(t<=e.maxScrollValueAt)return r.maxPixelScroll;
if(t===e.startScrollingFrom)return yg;
const s=1-q1({
startOfRange:e.maxScrollValueAt,endOfRange:e.startScrollingFrom,current:t}
),o=r.maxPixelScroll*r.ease(s);
return Math.ceil(o)}
,zk=(t,e,n)=>{
const r=n(),i=r.durationDampening.accelerateAt,s=r.durationDampening.stopDampeningAt,o=e,l=s,u=Date.now()-o;
if(u>=s)return t;
if(u<i)return yg;
const d=q1({
startOfRange:i,endOfRange:l,current:u}
),m=t*r.ease(d);
return Math.ceil(m)}
,sv=({
distanceToEdge:t,thresholds:e,dragStartTime:n,shouldUseTimeDampening:r,getAutoScrollerOptions:i}
)=>{
const s=$k(t,e,i);
return s===0?0:r?Math.max(zk(s,n,i),yg):s}
,ov=({
container:t,distanceToEdges:e,dragStartTime:n,axis:r,shouldUseTimeDampening:i,getAutoScrollerOptions:s}
)=>{
const o=Uk(t,r,s);
return e[r.end]<e[r.start]?sv({
distanceToEdge:e[r.end],thresholds:o,dragStartTime:n,shouldUseTimeDampening:i,getAutoScrollerOptions:s}
):-1*sv({
distanceToEdge:e[r.start],thresholds:o,dragStartTime:n,shouldUseTimeDampening:i,getAutoScrollerOptions:s}
)}
,qk=({
container:t,subject:e,proposedScroll:n}
)=>{
const r=e.height>t.height,i=e.width>t.width;
return!i&&!r?n:i&&r?null:{
x:i?0:n.x,y:r?0:n.y}
}
;
const Gk=p1(t=>t===0?0:t);
var G1=({
dragStartTime:t,container:e,subject:n,center:r,shouldUseTimeDampening:i,getAutoScrollerOptions:s}
)=>{
const o={
top:r.y-e.top,right:e.right-r.x,bottom:e.bottom-r.y,left:r.x-e.left}
,l=ov({
container:e,distanceToEdges:o,dragStartTime:t,axis:cg,shouldUseTimeDampening:i,getAutoScrollerOptions:s}
),c=ov({
container:e,distanceToEdges:o,dragStartTime:t,axis:_1,shouldUseTimeDampening:i,getAutoScrollerOptions:s}
),u=Gk({
x:c,y:l}
);
if(Di(u,Ct))return null;
const d=qk({
container:e,subject:n,proposedScroll:u}
);
return d?Di(d,Ct)?null:d:null}
;
const Wk=p1(t=>t===0?0:t>0?1:-1),vg=(()=>{
const t=(e,n)=>e<0?e:e>n?e-n:0;
return({
current:e,max:n,change:r}
)=>{
const i=Ot(e,r),s={
x:t(i.x,n.x),y:t(i.y,n.y)}
;
return Di(s,Ct)?null:s}
}
)(),W1=({
max:t,current:e,change:n}
)=>{
const r={
x:Math.max(e.x,t.x),y:Math.max(e.y,t.y)}
,i=Wk(n),s=vg({
max:r,current:e,change:i}
);
return!s||i.x!==0&&s.x===0||i.y!==0&&s.y===0}
,_g=(t,e)=>W1({
current:t.scroll.current,max:t.scroll.max,change:e}
),Hk=(t,e)=>{
if(!_g(t,e))return null;
const n=t.scroll.max,r=t.scroll.current;
return vg({
current:r,max:n,change:e}
)}
,wg=(t,e)=>{
const n=t.frame;
return n?W1({
current:n.scroll.current,max:n.scroll.max,change:e}
):!1}
,Kk=(t,e)=>{
const n=t.frame;
return!n||!wg(t,e)?null:vg({
current:n.scroll.current,max:n.scroll.max,change:e}
)}
;
var Qk=({
viewport:t,subject:e,center:n,dragStartTime:r,shouldUseTimeDampening:i,getAutoScrollerOptions:s}
)=>{
const o=G1({
dragStartTime:r,container:t.frame,subject:e,center:n,shouldUseTimeDampening:i,getAutoScrollerOptions:s}
);
return o&&_g(t,o)?o:null}
,Yk=({
droppable:t,subject:e,center:n,dragStartTime:r,shouldUseTimeDampening:i,getAutoScrollerOptions:s}
)=>{
const o=t.frame;
if(!o)return null;
const l=G1({
dragStartTime:r,container:o.pageMarginBox,subject:e,center:n,shouldUseTimeDampening:i,getAutoScrollerOptions:s}
);
return l&&wg(t,l)?l:null}
,av=({
state:t,dragStartTime:e,shouldUseTimeDampening:n,scrollWindow:r,scrollDroppable:i,getAutoScrollerOptions:s}
)=>{
const o=t.current.page.borderBoxCenter,c=t.dimensions.draggables[t.critical.draggable.id].page.marginBox;
if(t.isWindowScrollAllowed){
const m=t.viewport,g=Qk({
dragStartTime:e,viewport:m,subject:c,center:o,shouldUseTimeDampening:n,getAutoScrollerOptions:s}
);
if(g){
r(g);
return}
}
const u=Bk({
center:o,destination:bn(t.impact),droppables:t.dimensions.droppables}
);
if(!u)return;
const d=Yk({
dragStartTime:e,droppable:u,subject:c,center:o,shouldUseTimeDampening:n,getAutoScrollerOptions:s}
);
d&&i(u.descriptor.id,d)}
,Xk=({
scrollWindow:t,scrollDroppable:e,getAutoScrollerOptions:n=()=>Al}
)=>{
const r=bl(t),i=bl(e);
let s=null;
const o=u=>{
s||X();
const{
shouldUseTimeDampening:d,dragStartTime:m}
=s;
av({
state:u,scrollWindow:r,scrollDroppable:i,dragStartTime:m,shouldUseTimeDampening:d,getAutoScrollerOptions:n}
)}
;
return{
start:u=>{
s&&X();
const d=Date.now();
let m=!1;
const g=()=>{
m=!0}
;
av({
state:u,dragStartTime:0,shouldUseTimeDampening:!1,scrollWindow:g,scrollDroppable:g,getAutoScrollerOptions:n}
),s={
dragStartTime:d,shouldUseTimeDampening:m}
,m&&o(u)}
,stop:()=>{
s&&(r.cancel(),i.cancel(),s=null)}
,scroll:o}
}
,Jk=({
move:t,scrollDroppable:e,scrollWindow:n}
)=>{
const r=(l,c)=>{
const u=Ot(l.current.client.selection,c);
t({
client:u}
)}
,i=(l,c)=>{
if(!wg(l,c))return c;
const u=Kk(l,c);
if(!u)return e(l.descriptor.id,c),null;
const d=_n(c,u);
return e(l.descriptor.id,d),_n(c,d)}
,s=(l,c,u)=>{
if(!l||!_g(c,u))return u;
const d=Hk(c,u);
if(!d)return n(u),null;
const m=_n(u,d);
return n(m),_n(u,m)}
;
return l=>{
const c=l.scrollJumpRequest;
if(!c)return;
const u=bn(l.impact);
u||X();
const d=i(l.dimensions.droppables[u],c);
if(!d)return;
const m=l.viewport,g=s(l.isWindowScrollAllowed,m,d);
g&&r(l,g)}
}
,Zk=({
scrollDroppable:t,scrollWindow:e,move:n,getAutoScrollerOptions:r}
)=>{
const i=Xk({
scrollWindow:e,scrollDroppable:t,getAutoScrollerOptions:r}
),s=Jk({
move:n,scrollWindow:e,scrollDroppable:t}
);
return{
scroll:c=>{
if(!(r().disabled||c.phase!=="DRAGGING")){
if(c.movementMode==="FLUID"){
i.scroll(c);
return}
c.scrollJumpRequest&&s(c)}
}
,start:i.start,stop:i.stop}
}
;
const jo="data-rfd",Fo=(()=>{
const t=`${
jo}
-drag-handle`;
return{
base:t,draggableId:`${
t}
-draggable-id`,contextId:`${
t}
-context-id`}
}
)(),Mp=(()=>{
const t=`${
jo}
-draggable`;
return{
base:t,contextId:`${
t}
-context-id`,id:`${
t}
-id`}
}
)(),eR=(()=>{
const t=`${
jo}
-droppable`;
return{
base:t,contextId:`${
t}
-context-id`,id:`${
t}
-id`}
}
)(),lv={
contextId:`${
jo}
-scroll-container-context-id`}
,tR=t=>e=>`[${
e}
="${
t}
"]`,Pa=(t,e)=>t.map(n=>{
const r=n.styles[e];
return r?`${
n.selector}
 {
 ${
r}
 }
`:""}
).join(" "),nR="pointer-events: none;
";
var rR=t=>{
const e=tR(t),n=(()=>{
const l=`
      cursor: -webkit-grab;

      cursor: grab;

    `;
return{
selector:e(Fo.contextId),styles:{
always:`
          -webkit-touch-callout: none;

          -webkit-tap-highlight-color: rgba(0,0,0,0);

          touch-action: manipulation;

        `,resting:l,dragging:nR,dropAnimating:l}
}
}
)(),r=(()=>{
const l=`
      transition: ${
Za.outOfTheWay}
;

    `;
return{
selector:e(Mp.contextId),styles:{
dragging:l,dropAnimating:l,userCancel:l}
}
}
)(),i={
selector:e(eR.contextId),styles:{
always:"overflow-anchor: none;
"}
}
,o=[r,n,i,{
selector:"body",styles:{
dragging:`
        cursor: grabbing;

        cursor: -webkit-grabbing;

        user-select: none;

        -webkit-user-select: none;

        -moz-user-select: none;

        -ms-user-select: none;

        overflow-anchor: none;

      `}
}
];
return{
always:Pa(o,"always"),resting:Pa(o,"resting"),dragging:Pa(o,"dragging"),dropAnimating:Pa(o,"dropAnimating"),userCancel:Pa(o,"userCancel")}
}
;
const En=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?B.useLayoutEffect:B.useEffect,wf=()=>{
const t=document.querySelector("head");
return t||X(),t}
,cv=t=>{
const e=document.createElement("style");
return t&&e.setAttribute("nonce",t),e.type="text/css",e}
;
function iR(t,e){
const n=Ae(()=>rR(t),[t]),r=B.useRef(null),i=B.useRef(null),s=se(At(m=>{
const g=i.current;
g||X(),g.textContent=m}
),[]),o=se(m=>{
const g=r.current;
g||X(),g.textContent=m}
,[]);
En(()=>{
!r.current&&!i.current||X();
const m=cv(e),g=cv(e);
return r.current=m,i.current=g,m.setAttribute(`${
jo}
-always`,t),g.setAttribute(`${
jo}
-dynamic`,t),wf().appendChild(m),wf().appendChild(g),o(n.always),s(n.resting),()=>{
const _=w=>{
const N=w.current;
N||X(),wf().removeChild(N),w.current=null}
;
_(r),_(i)}
}
,[e,o,s,n.always,n.resting,t]);
const l=se(()=>s(n.dragging),[s,n.dragging]),c=se(m=>{
if(m==="DROP"){
s(n.dropAnimating);
return}
s(n.userCancel)}
,[s,n.dropAnimating,n.userCancel]),u=se(()=>{
i.current&&s(n.resting)}
,[s,n.resting]);
return Ae(()=>({
dragging:l,dropping:c,resting:u}
),[l,c,u])}
function H1(t,e){
return Array.from(t.querySelectorAll(e))}
var K1=t=>t&&t.ownerDocument&&t.ownerDocument.defaultView?t.ownerDocument.defaultView:window;
function Jd(t){
return t instanceof K1(t).HTMLElement}
function sR(t,e){
const n=`[${
Fo.contextId}
="${
t}
"]`,r=H1(document,n);
if(!r.length)return null;
const i=r.find(s=>s.getAttribute(Fo.draggableId)===e);
return!i||!Jd(i)?null:i}
function oR(t){
const e=B.useRef({
}
),n=B.useRef(null),r=B.useRef(null),i=B.useRef(!1),s=se(function(g,_){
const w={
id:g,focus:_}
;
return e.current[g]=w,function(){
const O=e.current;
O[g]!==w&&delete O[g]}
}
,[]),o=se(function(g){
const _=sR(t,g);
_&&_!==document.activeElement&&_.focus()}
,[t]),l=se(function(g,_){
n.current===g&&(n.current=_)}
,[]),c=se(function(){
r.current||i.current&&(r.current=requestAnimationFrame(()=>{
r.current=null;
const g=n.current;
g&&o(g)}
))}
,[o]),u=se(function(g){
n.current=null;
const _=document.activeElement;
_&&_.getAttribute(Fo.draggableId)===g&&(n.current=g)}
,[]);
return En(()=>(i.current=!0,function(){
i.current=!1;
const g=r.current;
g&&cancelAnimationFrame(g)}
),[]),Ae(()=>({
register:s,tryRecordFocus:u,tryRestoreFocusRecorded:c,tryShiftRecord:l}
),[s,u,c,l])}
function aR(){
const t={
draggables:{
}
,droppables:{
}
}
,e=[];
function n(m){
return e.push(m),function(){
const _=e.indexOf(m);
_!==-1&&e.splice(_,1)}
}
function r(m){
e.length&&e.forEach(g=>g(m))}
function i(m){
return t.draggables[m]||null}
function s(m){
const g=i(m);
return g||X(),g}
const o={
register:m=>{
t.draggables[m.descriptor.id]=m,r({
type:"ADDITION",value:m}
)}
,update:(m,g)=>{
const _=t.draggables[g.descriptor.id];
_&&_.uniqueId===m.uniqueId&&(delete t.draggables[g.descriptor.id],t.draggables[m.descriptor.id]=m)}
,unregister:m=>{
const g=m.descriptor.id,_=i(g);
_&&m.uniqueId===_.uniqueId&&(delete t.draggables[g],t.droppables[m.descriptor.droppableId]&&r({
type:"REMOVAL",value:m}
))}
,getById:s,findById:i,exists:m=>!!i(m),getAllByType:m=>Object.values(t.draggables).filter(g=>g.descriptor.type===m)}
;
function l(m){
return t.droppables[m]||null}
function c(m){
const g=l(m);
return g||X(),g}
const u={
register:m=>{
t.droppables[m.descriptor.id]=m}
,unregister:m=>{
const g=l(m.descriptor.id);
g&&m.uniqueId===g.uniqueId&&delete t.droppables[m.descriptor.id]}
,getById:c,findById:l,exists:m=>!!l(m),getAllByType:m=>Object.values(t.droppables).filter(g=>g.descriptor.type===m)}
;
function d(){
t.draggables={
}
,t.droppables={
}
,e.length=0}
return{
draggable:o,droppable:u,subscribe:n,clean:d}
}
function lR(){
const t=Ae(aR,[]);
return B.useEffect(()=>function(){
t.clean()}
,[t]),t}
var xg=dt.createContext(null),fd=()=>{
const t=document.body;
return t||X(),t}
;
const cR={
position:"absolute",width:"1px",height:"1px",margin:"-1px",border:"0",padding:"0",overflow:"hidden",clip:"rect(0 0 0 0)","clip-path":"inset(100%)"}
,uR=t=>`rfd-announcement-${
t}
`;
function dR(t){
const e=Ae(()=>uR(t),[t]),n=B.useRef(null);
return B.useEffect(function(){
const s=document.createElement("div");
return n.current=s,s.id=e,s.setAttribute("aria-live","assertive"),s.setAttribute("aria-atomic","true"),cd(s.style,cR),fd().appendChild(s),function(){
setTimeout(function(){
const c=fd();
c.contains(s)&&c.removeChild(s),s===n.current&&(n.current=null)}
)}
}
,[e]),se(i=>{
const s=n.current;
if(s){
s.textContent=i;
return}
}
,[])}
const hR={
separator:"::"}
;
function bg(t,e=hR){
const n=dt.useId();
return Ae(()=>`${
t}
${
e.separator}
${
n}
`,[e.separator,t,n])}
function fR({
contextId:t,uniqueId:e}
){
return`rfd-hidden-text-${
t}
-${
e}
`}
function pR({
contextId:t,text:e}
){
const n=bg("hidden-text",{
separator:"-"}
),r=Ae(()=>fR({
contextId:t,uniqueId:n}
),[n,t]);
return B.useEffect(function(){
const s=document.createElement("div");
return s.id=r,s.textContent=e,s.style.display="none",fd().appendChild(s),function(){
const l=fd();
l.contains(s)&&l.removeChild(s)}
}
,[r,e]),r}
var Zd=dt.createContext(null);
function Q1(t){
const e=B.useRef(t);
return B.useEffect(()=>{
e.current=t}
),e}
function mR(){
let t=null;
function e(){
return!!t}
function n(o){
return o===t}
function r(o){
t&&X();
const l={
abandon:o}
;
return t=l,l}
function i(){
t||X(),t=null}
function s(){
t&&(t.abandon(),i())}
return{
isClaimed:e,isActive:n,claim:r,release:i,tryAbandon:s}
}
function Cl(t){
return t.phase==="IDLE"||t.phase==="DROP_ANIMATING"?!1:t.isDragging}
const gR=9,yR=13,Eg=27,Y1=32,vR=33,_R=34,wR=35,xR=36,bR=37,ER=38,TR=39,IR=40,SR={
[yR]:!0,[gR]:!0}
;
var X1=t=>{
SR[t.keyCode]&&t.preventDefault()}
;
const eh=(()=>{
const t="visibilitychange";
return typeof document>"u"?t:[t,`ms${
t}
`,`webkit${
t}
`,`moz${
t}
`,`o${
t}
`].find(r=>`on${
r}
`in document)||t}
)(),J1=0,uv=5;
function AR(t,e){
return Math.abs(e.x-t.x)>=uv||Math.abs(e.y-t.y)>=uv}
const dv={
type:"IDLE"}
;
function CR({
cancel:t,completed:e,getPhase:n,setPhase:r}
){
return[{
eventName:"mousemove",fn:i=>{
const{
button:s,clientX:o,clientY:l}
=i;
if(s!==J1)return;
const c={
x:o,y:l}
,u=n();
if(u.type==="DRAGGING"){
i.preventDefault(),u.actions.move(c);
return}
u.type!=="PENDING"&&X();
const d=u.point;
if(!AR(d,c))return;
i.preventDefault();
const m=u.actions.fluidLift(c);
r({
type:"DRAGGING",actions:m}
)}
}
,{
eventName:"mouseup",fn:i=>{
const s=n();
if(s.type!=="DRAGGING"){
t();
return}
i.preventDefault(),s.actions.drop({
shouldBlockNextClick:!0}
),e()}
}
,{
eventName:"mousedown",fn:i=>{
n().type==="DRAGGING"&&i.preventDefault(),t()}
}
,{
eventName:"keydown",fn:i=>{
if(n().type==="PENDING"){
t();
return}
if(i.keyCode===Eg){
i.preventDefault(),t();
return}
X1(i)}
}
,{
eventName:"resize",fn:t}
,{
eventName:"scroll",options:{
passive:!0,capture:!1}
,fn:()=>{
n().type==="PENDING"&&t()}
}
,{
eventName:"webkitmouseforcedown",fn:i=>{
const s=n();
if(s.type==="IDLE"&&X(),s.actions.shouldRespectForcePress()){
t();
return}
i.preventDefault()}
}
,{
eventName:eh,fn:t}
]}
function kR(t){
const e=B.useRef(dv),n=B.useRef(Pi),r=Ae(()=>({
eventName:"mousedown",fn:function(m){
if(m.defaultPrevented||m.button!==J1||m.ctrlKey||m.metaKey||m.shiftKey||m.altKey)return;
const g=t.findClosestDraggableId(m);
if(!g)return;
const _=t.tryGetLock(g,o,{
sourceEvent:m}
);
if(!_)return;
m.preventDefault();
const w={
x:m.clientX,y:m.clientY}
;
n.current(),u(_,w)}
}
),[t]),i=Ae(()=>({
eventName:"webkitmouseforcewillbegin",fn:d=>{
if(d.defaultPrevented)return;
const m=t.findClosestDraggableId(d);
if(!m)return;
const g=t.findOptionsForDraggable(m);
g&&(g.shouldRespectForcePress||t.canGetLock(m)&&d.preventDefault())}
}
),[t]),s=se(function(){
const m={
passive:!1,capture:!0}
;
n.current=Mn(window,[i,r],m)}
,[i,r]),o=se(()=>{
e.current.type!=="IDLE"&&(e.current=dv,n.current(),s())}
,[s]),l=se(()=>{
const d=e.current;
o(),d.type==="DRAGGING"&&d.actions.cancel({
shouldBlockNextClick:!0}
),d.type==="PENDING"&&d.actions.abort()}
,[o]),c=se(function(){
const m={
capture:!0,passive:!1}
,g=CR({
cancel:l,completed:o,getPhase:()=>e.current,setPhase:_=>{
e.current=_}
}
);
n.current=Mn(window,g,m)}
,[l,o]),u=se(function(m,g){
e.current.type!=="IDLE"&&X(),e.current={
type:"PENDING",point:g,actions:m}
,c()}
,[c]);
En(function(){
return s(),function(){
n.current()}
}
,[s])}
function RR(){
}
const NR={
[_R]:!0,[vR]:!0,[xR]:!0,[wR]:!0}
;
function PR(t,e){
function n(){
e(),t.cancel()}
function r(){
e(),t.drop()}
return[{
eventName:"keydown",fn:i=>{
if(i.keyCode===Eg){
i.preventDefault(),n();
return}
if(i.keyCode===Y1){
i.preventDefault(),r();
return}
if(i.keyCode===IR){
i.preventDefault(),t.moveDown();
return}
if(i.keyCode===ER){
i.preventDefault(),t.moveUp();
return}
if(i.keyCode===TR){
i.preventDefault(),t.moveRight();
return}
if(i.keyCode===bR){
i.preventDefault(),t.moveLeft();
return}
if(NR[i.keyCode]){
i.preventDefault();
return}
X1(i)}
}
,{
eventName:"mousedown",fn:n}
,{
eventName:"mouseup",fn:n}
,{
eventName:"click",fn:n}
,{
eventName:"touchstart",fn:n}
,{
eventName:"resize",fn:n}
,{
eventName:"wheel",fn:n,options:{
passive:!0}
}
,{
eventName:eh,fn:n}
]}
function DR(t){
const e=B.useRef(RR),n=Ae(()=>({
eventName:"keydown",fn:function(s){
if(s.defaultPrevented||s.keyCode!==Y1)return;
const o=t.findClosestDraggableId(s);
if(!o)return;
const l=t.tryGetLock(o,d,{
sourceEvent:s}
);
if(!l)return;
s.preventDefault();
let c=!0;
const u=l.snapLift();
e.current();
function d(){
c||X(),c=!1,e.current(),r()}
e.current=Mn(window,PR(u,d),{
capture:!0,passive:!1}
)}
}
),[t]),r=se(function(){
const s={
passive:!1,capture:!0}
;
e.current=Mn(window,[n],s)}
,[n]);
En(function(){
return r(),function(){
e.current()}
}
,[r])}
const xf={
type:"IDLE"}
,OR=120,VR=.15;
function MR({
cancel:t,getPhase:e}
){
return[{
eventName:"orientationchange",fn:t}
,{
eventName:"resize",fn:t}
,{
eventName:"contextmenu",fn:n=>{
n.preventDefault()}
}
,{
eventName:"keydown",fn:n=>{
if(e().type!=="DRAGGING"){
t();
return}
n.keyCode===Eg&&n.preventDefault(),t()}
}
,{
eventName:eh,fn:t}
]}
function LR({
cancel:t,completed:e,getPhase:n}
){
return[{
eventName:"touchmove",options:{
capture:!1}
,fn:r=>{
const i=n();
if(i.type!=="DRAGGING"){
t();
return}
i.hasMoved=!0;
const{
clientX:s,clientY:o}
=r.touches[0],l={
x:s,y:o}
;
r.preventDefault(),i.actions.move(l)}
}
,{
eventName:"touchend",fn:r=>{
const i=n();
if(i.type!=="DRAGGING"){
t();
return}
r.preventDefault(),i.actions.drop({
shouldBlockNextClick:!0}
),e()}
}
,{
eventName:"touchcancel",fn:r=>{
if(n().type!=="DRAGGING"){
t();
return}
r.preventDefault(),t()}
}
,{
eventName:"touchforcechange",fn:r=>{
const i=n();
i.type==="IDLE"&&X();
const s=r.touches[0];
if(!s||!(s.force>=VR))return;
const l=i.actions.shouldRespectForcePress();
if(i.type==="PENDING"){
l&&t();
return}
if(l){
if(i.hasMoved){
r.preventDefault();
return}
t();
return}
r.preventDefault()}
}
,{
eventName:eh,fn:t}
]}
function jR(t){
const e=B.useRef(xf),n=B.useRef(Pi),r=se(function(){
return e.current}
,[]),i=se(function(_){
e.current=_}
,[]),s=Ae(()=>({
eventName:"touchstart",fn:function(_){
if(_.defaultPrevented)return;
const w=t.findClosestDraggableId(_);
if(!w)return;
const N=t.tryGetLock(w,l,{
sourceEvent:_}
);
if(!N)return;
const O=_.touches[0],{
clientX:I,clientY:E}
=O,k={
x:I,y:E}
;
n.current(),m(N,k)}
}
),[t]),o=se(function(){
const _={
capture:!0,passive:!1}
;
n.current=Mn(window,[s],_)}
,[s]),l=se(()=>{
const g=e.current;
g.type!=="IDLE"&&(g.type==="PENDING"&&clearTimeout(g.longPressTimerId),i(xf),n.current(),o())}
,[o,i]),c=se(()=>{
const g=e.current;
l(),g.type==="DRAGGING"&&g.actions.cancel({
shouldBlockNextClick:!0}
),g.type==="PENDING"&&g.actions.abort()}
,[l]),u=se(function(){
const _={
capture:!0,passive:!1}
,w={
cancel:c,completed:l,getPhase:r}
,N=Mn(window,LR(w),_),O=Mn(window,MR(w),_);
n.current=function(){
N(),O()}
}
,[c,r,l]),d=se(function(){
const _=r();
_.type!=="PENDING"&&X();
const w=_.actions.fluidLift(_.point);
i({
type:"DRAGGING",actions:w,hasMoved:!1}
)}
,[r,i]),m=se(function(_,w){
r().type!=="IDLE"&&X();
const N=setTimeout(d,OR);
i({
type:"PENDING",point:w,actions:_,longPressTimerId:N}
),u()}
,[u,r,i,d]);
En(function(){
return o(),function(){
n.current();
const w=r();
w.type==="PENDING"&&(clearTimeout(w.longPressTimerId),i(xf))}
}
,[r,o,i]),En(function(){
return Mn(window,[{
eventName:"touchmove",fn:()=>{
}
,options:{
capture:!1,passive:!1}
}
])}
,[])}
const FR=["input","button","textarea","select","option","optgroup","video","audio"];
function Z1(t,e){
if(e==null)return!1;
if(FR.includes(e.tagName.toLowerCase()))return!0;
const r=e.getAttribute("contenteditable");
return r==="true"||r===""?!0:e===t?!1:Z1(t,e.parentElement)}
function BR(t,e){
const n=e.target;
return Jd(n)?Z1(t,n):!1}
var UR=t=>Xn(t.getBoundingClientRect()).center;
function $R(t){
return t instanceof K1(t).Element}
const zR=(()=>{
const t="matches";
return typeof document>"u"?t:[t,"msMatchesSelector","webkitMatchesSelector"].find(r=>r in Element.prototype)||t}
)();
function eb(t,e){
return t==null?null:t[zR](e)?t:eb(t.parentElement,e)}
function qR(t,e){
return t.closest?t.closest(e):eb(t,e)}
function GR(t){
return`[${
Fo.contextId}
="${
t}
"]`}
function WR(t,e){
const n=e.target;
if(!$R(n))return null;
const r=GR(t),i=qR(n,r);
return!i||!Jd(i)?null:i}
function HR(t,e){
const n=WR(t,e);
return n?n.getAttribute(Fo.draggableId):null}
function KR(t,e){
const n=`[${
Mp.contextId}
="${
t}
"]`,i=H1(document,n).find(s=>s.getAttribute(Mp.id)===e);
return!i||!Jd(i)?null:i}
function QR(t){
t.preventDefault()}
function su({
expected:t,phase:e,isLockActive:n,shouldWarn:r}
){
return!(!n()||t!==e)}
function tb({
lockAPI:t,store:e,registry:n,draggableId:r}
){
if(t.isClaimed())return!1;
const i=n.draggable.findById(r);
return!(!i||!i.options.isEnabled||!z1(e.getState(),r))}
function YR({
lockAPI:t,contextId:e,store:n,registry:r,draggableId:i,forceSensorStop:s,sourceEvent:o}
){
if(!tb({
lockAPI:t,store:n,registry:r,draggableId:i}
))return null;
const c=r.draggable.getById(i),u=KR(e,c.descriptor.id);
if(!u||o&&!c.options.canDragInteractiveElements&&BR(u,o))return null;
const d=t.claim(s||Pi);
let m="PRE_DRAG";
function g(){
return c.options.shouldRespectForcePress}
function _(){
return t.isActive(d)}
function w(G,q){
su({
expected:G,phase:m,isLockActive:_,shouldWarn:!0}
)&&n.dispatch(q())}
const N=w.bind(null,"DRAGGING");
function O(G){
function q(){
t.release(),m="COMPLETED"}
m!=="PRE_DRAG"&&(q(),X()),n.dispatch(q2(G.liftActionArgs)),m="DRAGGING";
function S(b,A={
shouldBlockNextClick:!1}
){
if(G.cleanup(),A.shouldBlockNextClick){
const C=Mn(window,[{
eventName:"click",fn:QR,options:{
once:!0,passive:!1,capture:!0}
}
]);
setTimeout(C)}
q(),n.dispatch(V1({
reason:b}
))}
return{
isActive:()=>su({
expected:"DRAGGING",phase:m,isLockActive:_,shouldWarn:!1}
),shouldRespectForcePress:g,drop:b=>S("DROP",b),cancel:b=>S("CANCEL",b),...G.actions}
}
function I(G){
const q=bl(b=>{
N(()=>O1({
client:b}
))}
);
return{
...O({
liftActionArgs:{
id:i,clientSelection:G,movementMode:"FLUID"}
,cleanup:()=>q.cancel(),actions:{
move:q}
}
),move:q}
}
function E(){
const G={
moveUp:()=>N(Z2),moveRight:()=>N(tk),moveDown:()=>N(ek),moveLeft:()=>N(nk)}
;
return O({
liftActionArgs:{
id:i,clientSelection:UR(u),movementMode:"SNAP"}
,cleanup:Pi,actions:G}
)}
function k(){
su({
expected:"PRE_DRAG",phase:m,isLockActive:_,shouldWarn:!0}
)&&t.release()}
return{
isActive:()=>su({
expected:"PRE_DRAG",phase:m,isLockActive:_,shouldWarn:!1}
),shouldRespectForcePress:g,fluidLift:I,snapLift:E,abort:k}
}
const XR=[kR,DR,jR];
function JR({
contextId:t,store:e,registry:n,customSensors:r,enableDefaultSensors:i}
){
const s=[...i?XR:[],...r||[]],o=B.useState(()=>mR())[0],l=se(function(O,I){
Cl(O)&&!Cl(I)&&o.tryAbandon()}
,[o]);
En(function(){
let O=e.getState();
return e.subscribe(()=>{
const E=e.getState();
l(O,E),O=E}
)}
,[o,e,l]),En(()=>o.tryAbandon,[o.tryAbandon]);
const c=se(N=>tb({
lockAPI:o,registry:n,store:e,draggableId:N}
),[o,n,e]),u=se((N,O,I)=>YR({
lockAPI:o,registry:n,contextId:t,store:e,draggableId:N,forceSensorStop:O||null,sourceEvent:I&&I.sourceEvent?I.sourceEvent:null}
),[t,o,n,e]),d=se(N=>HR(t,N),[t]),m=se(N=>{
const O=n.draggable.findById(N);
return O?O.options:null}
,[n.draggable]),g=se(function(){
o.isClaimed()&&(o.tryAbandon(),e.getState().phase!=="IDLE"&&e.dispatch(pg()))}
,[o,e]),_=se(()=>o.isClaimed(),[o]),w=Ae(()=>({
canGetLock:c,tryGetLock:u,findClosestDraggableId:d,findOptionsForDraggable:m,tryReleaseLock:g,isLockClaimed:_}
),[c,u,d,m,g,_]);
for(let N=0;
N<s.length;
N++)s[N](w)}
const ZR=t=>({
onBeforeCapture:e=>{
const n=()=>{
t.onBeforeCapture&&t.onBeforeCapture(e)}
;
Mo.flushSync(n)}
,onBeforeDragStart:t.onBeforeDragStart,onDragStart:t.onDragStart,onDragEnd:t.onDragEnd,onDragUpdate:t.onDragUpdate}
),eN=t=>({
...Al,...t.autoScrollerOptions,durationDampening:{
...Al.durationDampening,...t.autoScrollerOptions}
}
);
function Da(t){
return t.current||X(),t.current}
function tN(t){
const{
contextId:e,setCallbacks:n,sensors:r,nonce:i,dragHandleUsageInstructions:s}
=t,o=B.useRef(null),l=Q1(t),c=se(()=>ZR(l.current),[l]),u=se(()=>eN(l.current),[l]),d=dR(e),m=pR({
contextId:e,text:s}
),g=iR(e,i),_=se(C=>{
Da(o).dispatch(C)}
,[]),w=Ae(()=>Fy({
publishWhileDragging:W2,updateDroppableScroll:K2,updateDroppableIsEnabled:Q2,updateDroppableIsCombineEnabled:Y2,collectionStarting:H2}
,_),[_]),N=lR(),O=Ae(()=>Mk(N,w),[N,w]),I=Ae(()=>Zk({
scrollWindow:Lk,scrollDroppable:O.scrollDroppable,getAutoScrollerOptions:u,...Fy({
move:O1}
,_)}
),[O.scrollDroppable,_,u]),E=oR(e),k=Ae(()=>Pk({
announce:d,autoScroller:I,dimensionMarshal:O,focusMarshal:E,getResponders:c,styleMarshal:g}
),[d,I,O,E,c,g]);
o.current=k;
const M=se(()=>{
const C=Da(o);
C.getState().phase!=="IDLE"&&C.dispatch(pg())}
,[]),G=se(()=>{
const C=Da(o).getState();
return C.phase==="DROP_ANIMATING"?!0:C.phase==="IDLE"?!1:C.isDragging}
,[]),q=Ae(()=>({
isDragging:G,tryAbort:M}
),[G,M]);
n(q);
const S=se(C=>z1(Da(o).getState(),C),[]),b=se(()=>ms(Da(o).getState()),[]),A=Ae(()=>({
marshal:O,focus:E,contextId:e,canLift:S,isMovementAllowed:b,dragHandleUsageInstructionsId:m,registry:N}
),[e,O,m,E,S,b,N]);
return JR({
contextId:e,store:k,registry:N,customSensors:r||null,enableDefaultSensors:t.enableDefaultSensors!==!1}
),B.useEffect(()=>M,[M]),dt.createElement(Zd.Provider,{
value:A}
,dt.createElement(IC,{
context:xg,store:k}
,t.children))}
function nN(){
return dt.useId()}
function hv(t){
const e=nN(),n=t.dragHandleUsageInstructions||Su.dragHandleUsageInstructions;
return dt.createElement(DC,null,r=>dt.createElement(tN,{
nonce:t.nonce,contextId:e,setCallbacks:r,dragHandleUsageInstructions:n,enableDefaultSensors:t.enableDefaultSensors,sensors:t.sensors,onBeforeCapture:t.onBeforeCapture,onBeforeDragStart:t.onBeforeDragStart,onDragStart:t.onDragStart,onDragUpdate:t.onDragUpdate,onDragEnd:t.onDragEnd,autoScrollerOptions:t.autoScrollerOptions}
,t.children))}
const fv={
dragging:5e3,dropAnimating:4500}
,rN=(t,e)=>e?Za.drop(e.duration):t?Za.snap:Za.fluid,iN=(t,e)=>{
if(t)return e?Sl.opacity.drop:Sl.opacity.combining}
,sN=t=>t.forceShouldAnimate!=null?t.forceShouldAnimate:t.mode==="SNAP";
function oN(t){
const n=t.dimension.client,{
offset:r,combineWith:i,dropping:s}
=t,o=!!i,l=sN(t),c=!!s,u=c?Op.drop(r,o):Op.moveTo(r);
return{
position:"fixed",top:n.marginBox.top,left:n.marginBox.left,boxSizing:"border-box",width:n.borderBox.width,height:n.borderBox.height,transition:rN(l,s),transform:u,opacity:iN(o,c),zIndex:c?fv.dropAnimating:fv.dragging,pointerEvents:"none"}
}
function aN(t){
return{
transform:Op.moveTo(t.offset),transition:t.shouldAnimateDisplacement?void 0:"none"}
}
function lN(t){
return t.type==="DRAGGING"?oN(t):aN(t)}
function cN(t,e,n=Ct){
const r=window.getComputedStyle(e),i=e.getBoundingClientRect(),s=l1(i,r),o=ld(s,n),l={
client:s,tagName:e.tagName.toLowerCase(),display:r.display}
,c={
x:s.marginBox.width,y:s.marginBox.height}
;
return{
descriptor:t,placeholder:l,displaceBy:c,client:s,page:o}
}
function uN(t){
const e=bg("draggable"),{
descriptor:n,registry:r,getDraggableRef:i,canDragInteractiveElements:s,shouldRespectForcePress:o,isEnabled:l}
=t,c=Ae(()=>({
canDragInteractiveElements:s,shouldRespectForcePress:o,isEnabled:l}
),[s,l,o]),u=se(_=>{
const w=i();
return w||X(),cN(n,w,_)}
,[n,i]),d=Ae(()=>({
uniqueId:e,descriptor:n,options:c,getDimension:u}
),[n,u,c,e]),m=B.useRef(d),g=B.useRef(!0);
En(()=>(r.draggable.register(m.current),()=>r.draggable.unregister(m.current)),[r.draggable]),En(()=>{
if(g.current){
g.current=!1;
return}
const _=m.current;
m.current=d,r.draggable.update(d,_)}
,[d,r.draggable])}
var Tg=dt.createContext(null);
function pd(t){
const e=B.useContext(t);
return e||X(),e}
function dN(t){
t.preventDefault()}
const hN=t=>{
const e=B.useRef(null),n=se((q=null)=>{
e.current=q}
,[]),r=se(()=>e.current,[]),{
contextId:i,dragHandleUsageInstructionsId:s,registry:o}
=pd(Zd),{
type:l,droppableId:c}
=pd(Tg),u=Ae(()=>({
id:t.draggableId,index:t.index,type:l,droppableId:c}
),[t.draggableId,t.index,l,c]),{
children:d,draggableId:m,isEnabled:g,shouldRespectForcePress:_,canDragInteractiveElements:w,isClone:N,mapped:O,dropAnimationFinished:I}
=t;
if(!N){
const q=Ae(()=>({
descriptor:u,registry:o,getDraggableRef:r,canDragInteractiveElements:w,shouldRespectForcePress:_,isEnabled:g}
),[u,o,r,w,_,g]);
uN(q)}
const E=Ae(()=>g?{
tabIndex:0,role:"button","aria-describedby":s,"data-rfd-drag-handle-draggable-id":m,"data-rfd-drag-handle-context-id":i,draggable:!1,onDragStart:dN}
:null,[i,s,m,g]),k=se(q=>{
O.type==="DRAGGING"&&O.dropping&&q.propertyName==="transform"&&Mo.flushSync(I)}
,[I,O]),M=Ae(()=>{
const q=lN(O),S=O.type==="DRAGGING"&&O.dropping?k:void 0;
return{
innerRef:n,draggableProps:{
"data-rfd-draggable-context-id":i,"data-rfd-draggable-id":m,style:q,onTransitionEnd:S}
,dragHandleProps:E}
}
,[i,E,m,O,k,n]),G=Ae(()=>({
draggableId:u.id,type:u.type,source:{
index:u.index,droppableId:u.droppableId}
}
),[u.droppableId,u.id,u.index,u.type]);
return dt.createElement(dt.Fragment,null,d(M,O.snapshot,G))}
;
var nb=(t,e)=>t===e,rb=t=>{
const{
combine:e,destination:n}
=t;
return n?n.droppableId:e?e.droppableId:null}
;
const fN=t=>t.combine?t.combine.draggableId:null,pN=t=>t.at&&t.at.type==="COMBINE"?t.at.combine.draggableId:null;
function mN(){
const t=At((i,s)=>({
x:i,y:s}
)),e=At((i,s,o=null,l=null,c=null)=>({
isDragging:!0,isClone:s,isDropAnimating:!!c,dropAnimation:c,mode:i,draggingOver:o,combineWith:l,combineTargetFor:null}
)),n=At((i,s,o,l,c=null,u=null,d=null)=>({
mapped:{
type:"DRAGGING",dropping:null,draggingOver:c,combineWith:u,mode:s,offset:i,dimension:o,forceShouldAnimate:d,snapshot:e(s,l,c,u,null)}
}
));
return(i,s)=>{
if(Cl(i)){
if(i.critical.draggable.id!==s.draggableId)return null;
const o=i.current.client.offset,l=i.dimensions.draggables[s.draggableId],c=bn(i.impact),u=pN(i.impact),d=i.forceShouldAnimate;
return n(t(o.x,o.y),i.movementMode,l,s.isClone,c,u,d)}
if(i.phase==="DROP_ANIMATING"){
const o=i.completed;
if(o.result.draggableId!==s.draggableId)return null;
const l=s.isClone,c=i.dimensions.draggables[s.draggableId],u=o.result,d=u.mode,m=rb(u),g=fN(u),w={
duration:i.dropDuration,curve:gg.drop,moveTo:i.newHomeClientOffset,opacity:g?Sl.opacity.drop:null,scale:g?Sl.scale.drop:null}
;
return{
mapped:{
type:"DRAGGING",offset:i.newHomeClientOffset,dimension:c,dropping:w,draggingOver:m,combineWith:g,mode:d,forceShouldAnimate:null,snapshot:e(d,l,m,g,w)}
}
}
return null}
}
function ib(t=null){
return{
isDragging:!1,isDropAnimating:!1,isClone:!1,dropAnimation:null,mode:null,draggingOver:null,combineTargetFor:t,combineWith:null}
}
const gN={
mapped:{
type:"SECONDARY",offset:Ct,combineTargetFor:null,shouldAnimateDisplacement:!0,snapshot:ib(null)}
}
;
function yN(){
const t=At((o,l)=>({
x:o,y:l}
)),e=At(ib),n=At((o,l=null,c)=>({
mapped:{
type:"SECONDARY",offset:o,combineTargetFor:l,shouldAnimateDisplacement:c,snapshot:e(l)}
}
)),r=o=>o?n(Ct,o,!0):null,i=(o,l,c,u)=>{
const d=c.displaced.visible[o],m=!!(u.inVirtualList&&u.effected[o]),g=Qd(c),_=g&&g.draggableId===o?l:null;
if(!d){
if(!m)return r(_);
if(c.displaced.invisible[o])return null;
const O=Xo(u.displacedBy.point),I=t(O.x,O.y);
return n(I,_,!0)}
if(m)return r(_);
const w=c.displacedBy.point,N=t(w.x,w.y);
return n(N,_,d.shouldAnimate)}
;
return(o,l)=>{
if(Cl(o))return o.critical.draggable.id===l.draggableId?null:i(l.draggableId,o.critical.draggable.id,o.impact,o.afterCritical);
if(o.phase==="DROP_ANIMATING"){
const c=o.completed;
return c.result.draggableId===l.draggableId?null:i(l.draggableId,c.result.draggableId,c.impact,c.afterCritical)}
return null}
}
const vN=()=>{
const t=mN(),e=yN();
return(r,i)=>t(r,i)||e(r,i)||gN}
,_N={
dropAnimationFinished:M1}
,wN=a1(vN,_N,null,{
context:xg,areStatePropsEqual:nb}
)(hN);
function sb(t){
return pd(Tg).isUsingCloneFor===t.draggableId&&!t.isClone?null:dt.createElement(wN,t)}
function pv(t){
const e=typeof t.isDragDisabled=="boolean"?!t.isDragDisabled:!0,n=!!t.disableInteractiveElementBlocking,r=!!t.shouldRespectForcePress;
return dt.createElement(sb,cd({
}
,t,{
isClone:!1,isEnabled:e,canDragInteractiveElements:n,shouldRespectForcePress:r}
))}
const ob=t=>e=>t===e,xN=ob("scroll"),bN=ob("auto"),mv=(t,e)=>e(t.overflowX)||e(t.overflowY),EN=t=>{
const e=window.getComputedStyle(t),n={
overflowX:e.overflowX,overflowY:e.overflowY}
;
return mv(n,xN)||mv(n,bN)}
,TN=()=>!1,ab=t=>t==null?null:t===document.body?TN()?t:null:t===document.documentElement?null:EN(t)?t:ab(t.parentElement);
var Lp=t=>({
x:t.scrollLeft,y:t.scrollTop}
);
const lb=t=>t?window.getComputedStyle(t).position==="fixed"?!0:lb(t.parentElement):!1;
var IN=t=>{
const e=ab(t),n=lb(t);
return{
closestScrollable:e,isFixedOnPage:n}
}
,SN=({
descriptor:t,isEnabled:e,isCombineEnabled:n,isFixedOnPage:r,direction:i,client:s,page:o,closest:l}
)=>{
const c=(()=>{
if(!l)return null;
const{
scrollSize:g,client:_}
=l,w=B1({
scrollHeight:g.scrollHeight,scrollWidth:g.scrollWidth,height:_.paddingBox.height,width:_.paddingBox.width}
);
return{
pageMarginBox:l.page.marginBox,frameClient:_,scrollSize:g,shouldClipSubject:l.shouldClipSubject,scroll:{
initial:l.scroll,current:l.scroll,max:w,diff:{
value:Ct,displacement:Ct}
}
}
}
)(),u=i==="vertical"?cg:_1,d=Lo({
page:o,withPlaceholder:null,axis:u,frame:c}
);
return{
descriptor:t,isCombineEnabled:n,isFixedOnPage:r,axis:u,isEnabled:e,client:s,page:o,frame:c,subject:d}
}
;
const AN=(t,e)=>{
const n=c1(t);
if(!e||t!==e)return n;
const r=n.paddingBox.top-e.scrollTop,i=n.paddingBox.left-e.scrollLeft,s=r+e.scrollHeight,o=i+e.scrollWidth,c=sg({
top:r,right:o,bottom:s,left:i}
,n.border);
return og({
borderBox:c,margin:n.margin,border:n.border,padding:n.padding}
)}
;
var CN=({
ref:t,descriptor:e,env:n,windowScroll:r,direction:i,isDropDisabled:s,isCombineEnabled:o,shouldClipSubject:l}
)=>{
const c=n.closestScrollable,u=AN(t,c),d=ld(u,r),m=(()=>{
if(!c)return null;
const _=c1(c),w={
scrollHeight:c.scrollHeight,scrollWidth:c.scrollWidth}
;
return{
client:_,page:ld(_,r),scroll:Lp(c),scrollSize:w,shouldClipSubject:l}
}
)();
return SN({
descriptor:e,isEnabled:!s,isCombineEnabled:o,isFixedOnPage:n.isFixedOnPage,direction:i,client:u,page:d,closest:m}
)}
;
const kN={
passive:!1}
,RN={
passive:!0}
;
var gv=t=>t.shouldPublishImmediately?kN:RN;
const ou=t=>t&&t.env.closestScrollable||null;
function NN(t){
const e=B.useRef(null),n=pd(Zd),r=bg("droppable"),{
registry:i,marshal:s}
=n,o=Q1(t),l=Ae(()=>({
id:t.droppableId,type:t.type,mode:t.mode}
),[t.droppableId,t.mode,t.type]),c=B.useRef(l),u=Ae(()=>At((M,G)=>{
e.current||X();
const q={
x:M,y:G}
;
s.updateDroppableScroll(l.id,q)}
),[l.id,s]),d=se(()=>{
const M=e.current;
return!M||!M.env.closestScrollable?Ct:Lp(M.env.closestScrollable)}
,[]),m=se(()=>{
const M=d();
u(M.x,M.y)}
,[d,u]),g=Ae(()=>bl(m),[m]),_=se(()=>{
const M=e.current,G=ou(M);
if(M&&G||X(),M.scrollOptions.shouldPublishImmediately){
m();
return}
g()}
,[g,m]),w=se((M,G)=>{
e.current&&X();
const q=o.current,S=q.getDroppableRef();
S||X();
const b=IN(S),A={
ref:S,descriptor:l,env:b,scrollOptions:G}
;
e.current=A;
const C=CN({
ref:S,descriptor:l,env:b,windowScroll:M,direction:q.direction,isDropDisabled:q.isDropDisabled,isCombineEnabled:q.isCombineEnabled,shouldClipSubject:!q.ignoreContainerClipping}
),V=b.closestScrollable;
return V&&(V.setAttribute(lv.contextId,n.contextId),V.addEventListener("scroll",_,gv(A.scrollOptions))),C}
,[n.contextId,l,_,o]),N=se(()=>{
const M=e.current,G=ou(M);
return M&&G||X(),Lp(G)}
,[]),O=se(()=>{
const M=e.current;
M||X();
const G=ou(M);
e.current=null,G&&(g.cancel(),G.removeAttribute(lv.contextId),G.removeEventListener("scroll",_,gv(M.scrollOptions)))}
,[_,g]),I=se(M=>{
const G=e.current;
G||X();
const q=ou(G);
q||X(),q.scrollTop+=M.y,q.scrollLeft+=M.x}
,[]),E=Ae(()=>({
getDimensionAndWatchScroll:w,getScrollWhileDragging:N,dragStopped:O,scroll:I}
),[O,w,N,I]),k=Ae(()=>({
uniqueId:r,descriptor:l,callbacks:E}
),[E,l,r]);
En(()=>(c.current=k.descriptor,i.droppable.register(k),()=>{
e.current&&O(),i.droppable.unregister(k)}
),[E,l,O,k,s,i.droppable]),En(()=>{
e.current&&s.updateDroppableIsEnabled(c.current.id,!t.isDropDisabled)}
,[t.isDropDisabled,s]),En(()=>{
e.current&&s.updateDroppableIsCombineEnabled(c.current.id,t.isCombineEnabled)}
,[t.isCombineEnabled,s])}
function bf(){
}
const yv={
width:0,height:0,margin:BC}
,PN=({
isAnimatingOpenOnMount:t,placeholder:e,animate:n}
)=>t||n==="close"?yv:{
height:e.client.borderBox.height,width:e.client.borderBox.width,margin:e.client.margin}
,DN=({
isAnimatingOpenOnMount:t,placeholder:e,animate:n}
)=>{
const r=PN({
isAnimatingOpenOnMount:t,placeholder:e,animate:n}
);
return{
display:e.display,boxSizing:"border-box",width:r.width,height:r.height,marginTop:r.margin.top,marginRight:r.margin.right,marginBottom:r.margin.bottom,marginLeft:r.margin.left,flexShrink:"0",flexGrow:"0",pointerEvents:"none",transition:n!=="none"?Za.placeholder:null}
}
,ON=t=>{
const e=B.useRef(null),n=se(()=>{
e.current&&(clearTimeout(e.current),e.current=null)}
,[]),{
animate:r,onTransitionEnd:i,onClose:s,contextId:o}
=t,[l,c]=B.useState(t.animate==="open");
B.useEffect(()=>l?r!=="open"?(n(),c(!1),bf):e.current?bf:(e.current=setTimeout(()=>{
e.current=null,c(!1)}
),n):bf,[r,l,n]);
const u=se(m=>{
m.propertyName==="height"&&(i(),r==="close"&&s())}
,[r,s,i]),d=DN({
isAnimatingOpenOnMount:l,animate:t.animate,placeholder:t.placeholder}
);
return dt.createElement(t.placeholder.tagName,{
style:d,"data-rfd-placeholder-context-id":o,onTransitionEnd:u,ref:t.innerRef}
)}
;
var VN=dt.memo(ON);
class MN extends dt.PureComponent{
constructor(...e){
super(...e),this.state={
isVisible:!!this.props.on,data:this.props.on,animate:this.props.shouldAnimate&&this.props.on?"open":"none"}
,this.onClose=()=>{
this.state.animate==="close"&&this.setState({
isVisible:!1}
)}
}
static getDerivedStateFromProps(e,n){
return e.shouldAnimate?e.on?{
isVisible:!0,data:e.on,animate:"open"}
:n.isVisible?{
isVisible:!0,data:n.data,animate:"close"}
:{
isVisible:!1,animate:"close",data:null}
:{
isVisible:!!e.on,data:e.on,animate:"none"}
}
render(){
if(!this.state.isVisible)return null;
const e={
onClose:this.onClose,data:this.state.data,animate:this.state.animate}
;
return this.props.children(e)}
}
const LN=t=>{
const e=B.useContext(Zd);
e||X();
const{
contextId:n,isMovementAllowed:r}
=e,i=B.useRef(null),s=B.useRef(null),{
children:o,droppableId:l,type:c,mode:u,direction:d,ignoreContainerClipping:m,isDropDisabled:g,isCombineEnabled:_,snapshot:w,useClone:N,updateViewportMaxScroll:O,getContainerForClone:I}
=t,E=se(()=>i.current,[]),k=se((V=null)=>{
i.current=V}
,[]);
se(()=>s.current,[]);
const M=se((V=null)=>{
s.current=V}
,[]),G=se(()=>{
r()&&O({
maxScroll:$1()}
)}
,[r,O]);
NN({
droppableId:l,type:c,mode:u,direction:d,isDropDisabled:g,isCombineEnabled:_,ignoreContainerClipping:m,getDroppableRef:E}
);
const q=Ae(()=>dt.createElement(MN,{
on:t.placeholder,shouldAnimate:t.shouldAnimatePlaceholder}
,({
onClose:V,data:L,animate:R}
)=>dt.createElement(VN,{
placeholder:L,onClose:V,innerRef:M,animate:R,contextId:n,onTransitionEnd:G}
)),[n,G,t.placeholder,t.shouldAnimatePlaceholder,M]),S=Ae(()=>({
innerRef:k,placeholder:q,droppableProps:{
"data-rfd-droppable-id":l,"data-rfd-droppable-context-id":n}
}
),[n,l,q,k]),b=N?N.dragging.draggableId:null,A=Ae(()=>({
droppableId:l,type:c,isUsingCloneFor:b}
),[l,b,c]);
function C(){
if(!N)return null;
const{
dragging:V,render:L}
=N,R=dt.createElement(sb,{
draggableId:V.draggableId,index:V.source.index,isClone:!0,isEnabled:!0,shouldRespectForcePress:!1,canDragInteractiveElements:!0}
,(We,lt)=>L(We,lt,V));
return eA.createPortal(R,I())}
return dt.createElement(Tg.Provider,{
value:A}
,o(S,w),C())}
;
function jN(){
return document.body||X(),document.body}
const vv={
mode:"standard",type:"DEFAULT",direction:"vertical",isDropDisabled:!1,isCombineEnabled:!1,ignoreContainerClipping:!1,renderClone:null,getContainerForClone:jN}
,cb=t=>{
let e={
...t}
,n;
for(n in vv)t[n]===void 0&&(e={
...e,[n]:vv[n]}
);
return e}
,Ef=(t,e)=>t===e.droppable.type,_v=(t,e)=>e.draggables[t.draggable.id],FN=()=>{
const t={
placeholder:null,shouldAnimatePlaceholder:!0,snapshot:{
isDraggingOver:!1,draggingOverWith:null,draggingFromThisWith:null,isUsingPlaceholder:!1}
,useClone:null}
,e={
...t,shouldAnimatePlaceholder:!1}
,n=At(s=>({
draggableId:s.id,type:s.type,source:{
index:s.index,droppableId:s.droppableId}
}
)),r=At((s,o,l,c,u,d)=>{
const m=u.descriptor.id;
if(u.descriptor.droppableId===s){
const w=d?{
render:d,dragging:n(u.descriptor)}
:null,N={
isDraggingOver:l,draggingOverWith:l?m:null,draggingFromThisWith:m,isUsingPlaceholder:!0}
;
return{
placeholder:u.placeholder,shouldAnimatePlaceholder:!1,snapshot:N,useClone:w}
}
if(!o)return e;
if(!c)return t;
const _={
isDraggingOver:l,draggingOverWith:m,draggingFromThisWith:null,isUsingPlaceholder:!0}
;
return{
placeholder:u.placeholder,shouldAnimatePlaceholder:!0,snapshot:_,useClone:null}
}
);
return(s,o)=>{
const l=cb(o),c=l.droppableId,u=l.type,d=!l.isDropDisabled,m=l.renderClone;
if(Cl(s)){
const g=s.critical;
if(!Ef(u,g))return e;
const _=_v(g,s.dimensions),w=bn(s.impact)===c;
return r(c,d,w,w,_,m)}
if(s.phase==="DROP_ANIMATING"){
const g=s.completed;
if(!Ef(u,g.critical))return e;
const _=_v(g.critical,s.dimensions);
return r(c,d,rb(g.result)===c,bn(g.impact)===c,_,m)}
if(s.phase==="IDLE"&&s.completed&&!s.shouldFlush){
const g=s.completed;
if(!Ef(u,g.critical))return e;
const _=bn(g.impact)===c,w=!!(g.impact.at&&g.impact.at.type==="COMBINE"),N=g.critical.droppable.id===c;
return _?w?t:e:N?t:e}
return e}
}
,BN={
updateViewportMaxScroll:J2}
,wv=a1(FN,BN,(t,e,n)=>({
...cb(n),...t,...e}
),{
context:xg,areStatePropsEqual:nb}
)(LN);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ub=function(t){
const e=[];
let n=0;
for(let r=0;
r<t.length;
r++){
let i=t.charCodeAt(r);
i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}
return e}
,UN=function(t){
const e=[];
let n=0,r=0;
for(;
n<t.length;
){
const i=t[n++];
if(i<128)e[r++]=String.fromCharCode(i);
else if(i>191&&i<224){
const s=t[n++];
e[r++]=String.fromCharCode((i&31)<<6|s&63)}
else if(i>239&&i<365){
const s=t[n++],o=t[n++],l=t[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;
e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}
else{
const s=t[n++],o=t[n++];
e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}
}
return e.join("")}
,db={
byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){
return this.ENCODED_VALS_BASE+"+/="}
,get ENCODED_VALS_WEBSAFE(){
return this.ENCODED_VALS_BASE+"-_."}
,HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){
if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");
this.init_();
const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];
for(let i=0;
i<t.length;
i+=3){
const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,d=s>>2,m=(s&3)<<4|l>>4;
let g=(l&15)<<2|u>>6,_=u&63;
c||(_=64,o||(g=64)),r.push(n[d],n[m],n[g],n[_])}
return r.join("")}
,encodeString(t,e){
return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ub(t),e)}
,decodeString(t,e){
return this.HAS_NATIVE_SUPPORT&&!e?atob(t):UN(this.decodeStringToByteArray(t,e))}
,decodeStringToByteArray(t,e){
this.init_();
const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];
for(let i=0;
i<t.length;
){
const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;
++i;
const u=i<t.length?n[t.charAt(i)]:64;
++i;
const m=i<t.length?n[t.charAt(i)]:64;
if(++i,s==null||l==null||u==null||m==null)throw new $N;
const g=s<<2|l>>4;
if(r.push(g),u!==64){
const _=l<<4&240|u>>2;
if(r.push(_),m!==64){
const w=u<<6&192|m;
r.push(w)}
}
}
return r}
,init_(){
if(!this.byteToCharMap_){
this.byteToCharMap_={
}
,this.charToByteMap_={
}
,this.byteToCharMapWebSafe_={
}
,this.charToByteMapWebSafe_={
}
;
for(let t=0;
t<this.ENCODED_VALS.length;
t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}
}
}
;
class $N extends Error{
constructor(){
super(...arguments),this.name="DecodeBase64StringError"}
}
const zN=function(t){
const e=ub(t);
return db.encodeByteArray(e,!0)}
,md=function(t){
return zN(t).replace(/\./g,"")}
,hb=function(t){
try{
return db.decodeString(t,!0)}
catch(e){
console.error("base64Decode failed: ",e)}
return null}
;
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qN(){
if(typeof self<"u")return self;
if(typeof window<"u")return window;
if(typeof global<"u")return global;
throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GN=()=>qN().__FIREBASE_DEFAULTS__,WN=()=>{
if(typeof process>"u"||typeof process.env>"u")return;
const t={
}
.__FIREBASE_DEFAULTS__;
if(t)return JSON.parse(t)}
,HN=()=>{
if(typeof document>"u")return;
let t;
try{
t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;
]+)/)}
catch{
return}
const e=t&&hb(t[1]);
return e&&JSON.parse(e)}
,th=()=>{
try{
return GN()||WN()||HN()}
catch(t){
console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${
t}
`);
return}
}
,fb=t=>{
var e,n;
return(n=(e=th())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]}
,KN=t=>{
const e=fb(t);
if(!e)return;
const n=e.lastIndexOf(":");
if(n<=0||n+1===e.length)throw new Error(`Invalid host ${
e}
 with no separate hostname and port!`);
const r=parseInt(e.substring(n+1),10);
return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]}
,pb=()=>{
var t;
return(t=th())===null||t===void 0?void 0:t.config}
,mb=t=>{
var e;
return(e=th())===null||e===void 0?void 0:e[`_${
t}
`]}
;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QN{
constructor(){
this.reject=()=>{
}
,this.resolve=()=>{
}
,this.promise=new Promise((e,n)=>{
this.resolve=e,this.reject=n}
)}
wrapCallback(e){
return(n,r)=>{
n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{
}
),e.length===1?e(n):e(n,r))}
}
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YN(t,e){
if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');
const n={
alg:"none",type:"JWT"}
,r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;
if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
const o=Object.assign({
iss:`https://securetoken.google.com/${
r}
`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{
sign_in_provider:"custom",identities:{
}
}
}
,t),l="";
return[md(JSON.stringify(n)),md(JSON.stringify(o)),l].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(){
return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}
function XN(){
return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Jt())}
function JN(){
var t;
const e=(t=th())===null||t===void 0?void 0:t.forceEnvironment;
if(e==="node")return!0;
if(e==="browser")return!1;
try{
return Object.prototype.toString.call(global.process)==="[object process]"}
catch{
return!1}
}
function ZN(){
return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}
function eP(){
const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;
return typeof t=="object"&&t.id!==void 0}
function tP(){
return typeof navigator=="object"&&navigator.product==="ReactNative"}
function nP(){
const t=Jt();
return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}
function rP(){
return!JN()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}
function iP(){
try{
return typeof indexedDB=="object"}
catch{
return!1}
}
function sP(){
return new Promise((t,e)=>{
try{
let n=!0;
const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);
i.onsuccess=()=>{
i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)}
,i.onupgradeneeded=()=>{
n=!1}
,i.onerror=()=>{
var s;
e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}
}
catch(n){
e(n)}
}
)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oP="FirebaseError";
class Jr extends Error{
constructor(e,n,r){
super(n),this.code=e,this.customData=r,this.name=oP,Object.setPrototypeOf(this,Jr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Gl.prototype.create)}
}
class Gl{
constructor(e,n,r){
this.service=e,this.serviceName=n,this.errors=r}
create(e,...n){
const r=n[0]||{
}
,i=`${
this.service}
/${
e}
`,s=this.errors[e],o=s?aP(s,r):"Error",l=`${
this.serviceName}
: ${
o}
 (${
i}
).`;
return new Jr(i,l,r)}
}
function aP(t,e){
return t.replace(lP,(n,r)=>{
const i=e[r];
return i!=null?String(i):`<${
r}
?>`}
)}
const lP=/\{
\$([^}
]+)}
/g;
function cP(t){
for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;
return!0}
function gd(t,e){
if(t===e)return!0;
const n=Object.keys(t),r=Object.keys(e);
for(const i of n){
if(!r.includes(i))return!1;
const s=t[i],o=e[i];
if(xv(s)&&xv(o)){
if(!gd(s,o))return!1}
else if(s!==o)return!1}
for(const i of r)if(!n.includes(i))return!1;
return!0}
function xv(t){
return t!==null&&typeof t=="object"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wl(t){
const e=[];
for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{
e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}
):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));
return e.length?"&"+e.join("&"):""}
function uP(t,e){
const n=new dP(t,e);
return n.subscribe.bind(n)}
class dP{
constructor(e,n){
this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{
e(this)}
).catch(r=>{
this.error(r)}
)}
next(e){
this.forEachObserver(n=>{
n.next(e)}
)}
error(e){
this.forEachObserver(n=>{
n.error(e)}
),this.close(e)}
complete(){
this.forEachObserver(e=>{
e.complete()}
),this.close()}
subscribe(e,n,r){
let i;
if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");
hP(e,["next","error","complete"])?i=e:i={
next:e,error:n,complete:r}
,i.next===void 0&&(i.next=Tf),i.error===void 0&&(i.error=Tf),i.complete===void 0&&(i.complete=Tf);
const s=this.unsubscribeOne.bind(this,this.observers.length);
return this.finalized&&this.task.then(()=>{
try{
this.finalError?i.error(this.finalError):i.complete()}
catch{
}
}
),this.observers.push(i),s}
unsubscribeOne(e){
this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}
forEachObserver(e){
if(!this.finalized)for(let n=0;
n<this.observers.length;
n++)this.sendOne(n,e)}
sendOne(e,n){
this.task.then(()=>{
if(this.observers!==void 0&&this.observers[e]!==void 0)try{
n(this.observers[e])}
catch(r){
typeof console<"u"&&console.error&&console.error(r)}
}
)}
close(e){
this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{
this.observers=void 0,this.onNoObservers=void 0}
))}
}
function hP(t,e){
if(typeof t!="object"||t===null)return!1;
for(const n of e)if(n in t&&typeof t[n]=="function")return!0;
return!1}
function Tf(){
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(t){
return t&&t._delegate?t._delegate:t}
class Rs{
constructor(e,n,r){
this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={
}
,this.instantiationMode="LAZY",this.onInstanceCreated=null}
setInstantiationMode(e){
return this.instantiationMode=e,this}
setMultipleInstances(e){
return this.multipleInstances=e,this}
setServiceProps(e){
return this.serviceProps=e,this}
setInstanceCreatedCallback(e){
return this.onInstanceCreated=e,this}
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gs="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fP{
constructor(e,n){
this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}
get(e){
const n=this.normalizeInstanceIdentifier(e);
if(!this.instancesDeferred.has(n)){
const r=new QN;
if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{
const i=this.getOrInitializeService({
instanceIdentifier:n}
);
i&&r.resolve(i)}
catch{
}
}
return this.instancesDeferred.get(n).promise}
getImmediate(e){
var n;
const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;
if(this.isInitialized(r)||this.shouldAutoInitialize())try{
return this.getOrInitializeService({
instanceIdentifier:r}
)}
catch(s){
if(i)return null;
throw s}
else{
if(i)return null;
throw Error(`Service ${
this.name}
 is not available`)}
}
getComponent(){
return this.component}
setComponent(e){
if(e.name!==this.name)throw Error(`Mismatching Component ${
e.name}
 for Provider ${
this.name}
.`);
if(this.component)throw Error(`Component for ${
this.name}
 has already been provided`);
if(this.component=e,!!this.shouldAutoInitialize()){
if(mP(e))try{
this.getOrInitializeService({
instanceIdentifier:gs}
)}
catch{
}
for(const[n,r]of this.instancesDeferred.entries()){
const i=this.normalizeInstanceIdentifier(n);
try{
const s=this.getOrInitializeService({
instanceIdentifier:i}
);
r.resolve(s)}
catch{
}
}
}
}
clearInstance(e=gs){
this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}
async delete(){
const e=Array.from(this.instances.values());
await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}
isComponentSet(){
return this.component!=null}
isInitialized(e=gs){
return this.instances.has(e)}
getOptions(e=gs){
return this.instancesOptions.get(e)||{
}
}
initialize(e={
}
){
const{
options:n={
}
}
=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);
if(this.isInitialized(r))throw Error(`${
this.name}
(${
r}
) has already been initialized`);
if(!this.isComponentSet())throw Error(`Component ${
this.name}
 has not been registered yet`);
const i=this.getOrInitializeService({
instanceIdentifier:r,options:n}
);
for(const[s,o]of this.instancesDeferred.entries()){
const l=this.normalizeInstanceIdentifier(s);
r===l&&o.resolve(i)}
return i}
onInit(e,n){
var r;
const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;
s.add(e),this.onInitCallbacks.set(i,s);
const o=this.instances.get(i);
return o&&e(o,i),()=>{
s.delete(e)}
}
invokeOnInitCallbacks(e,n){
const r=this.onInitCallbacks.get(n);
if(r)for(const i of r)try{
i(e,n)}
catch{
}
}
getOrInitializeService({
instanceIdentifier:e,options:n={
}
}
){
let r=this.instances.get(e);
if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{
instanceIdentifier:pP(e),options:n}
),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{
this.component.onInstanceCreated(this.container,e,r)}
catch{
}
return r||null}
normalizeInstanceIdentifier(e=gs){
return this.component?this.component.multipleInstances?e:gs:e}
shouldAutoInitialize(){
return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}
}
function pP(t){
return t===gs?void 0:t}
function mP(t){
return t.instantiationMode==="EAGER"}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gP{
constructor(e){
this.name=e,this.providers=new Map}
addComponent(e){
const n=this.getProvider(e.name);
if(n.isComponentSet())throw new Error(`Component ${
e.name}
 has already been registered with ${
this.name}
`);
n.setComponent(e)}
addOrOverwriteComponent(e){
this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}
getProvider(e){
if(this.providers.has(e))return this.providers.get(e);
const n=new fP(e,this);
return this.providers.set(e,n),n}
getProviders(){
return Array.from(this.providers.values())}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ie;
(function(t){
t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}
)(Ie||(Ie={
}
));
const yP={
debug:Ie.DEBUG,verbose:Ie.VERBOSE,info:Ie.INFO,warn:Ie.WARN,error:Ie.ERROR,silent:Ie.SILENT}
,vP=Ie.INFO,_P={
[Ie.DEBUG]:"log",[Ie.VERBOSE]:"log",[Ie.INFO]:"info",[Ie.WARN]:"warn",[Ie.ERROR]:"error"}
,wP=(t,e,...n)=>{
if(e<t.logLevel)return;
const r=new Date().toISOString(),i=_P[e];
if(i)console[i](`[${
r}
]  ${
t.name}
:`,...n);
else throw new Error(`Attempted to log a message with an invalid logType (value: ${
e}
)`)}
;
class Ig{
constructor(e){
this.name=e,this._logLevel=vP,this._logHandler=wP,this._userLogHandler=null}
get logLevel(){
return this._logLevel}
set logLevel(e){
if(!(e in Ie))throw new TypeError(`Invalid value "${
e}
" assigned to \`logLevel\``);
this._logLevel=e}
setLogLevel(e){
this._logLevel=typeof e=="string"?yP[e]:e}
get logHandler(){
return this._logHandler}
set logHandler(e){
if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");
this._logHandler=e}
get userLogHandler(){
return this._userLogHandler}
set userLogHandler(e){
this._userLogHandler=e}
debug(...e){
this._userLogHandler&&this._userLogHandler(this,Ie.DEBUG,...e),this._logHandler(this,Ie.DEBUG,...e)}
log(...e){
this._userLogHandler&&this._userLogHandler(this,Ie.VERBOSE,...e),this._logHandler(this,Ie.VERBOSE,...e)}
info(...e){
this._userLogHandler&&this._userLogHandler(this,Ie.INFO,...e),this._logHandler(this,Ie.INFO,...e)}
warn(...e){
this._userLogHandler&&this._userLogHandler(this,Ie.WARN,...e),this._logHandler(this,Ie.WARN,...e)}
error(...e){
this._userLogHandler&&this._userLogHandler(this,Ie.ERROR,...e),this._logHandler(this,Ie.ERROR,...e)}
}
const xP=(t,e)=>e.some(n=>t instanceof n);
let bv,Ev;
function bP(){
return bv||(bv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}
function EP(){
return Ev||(Ev=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}
const gb=new WeakMap,jp=new WeakMap,yb=new WeakMap,If=new WeakMap,Sg=new WeakMap;
function TP(t){
const e=new Promise((n,r)=>{
const i=()=>{
t.removeEventListener("success",s),t.removeEventListener("error",o)}
,s=()=>{
n(Oi(t.result)),i()}
,o=()=>{
r(t.error),i()}
;
t.addEventListener("success",s),t.addEventListener("error",o)}
);
return e.then(n=>{
n instanceof IDBCursor&&gb.set(n,t)}
).catch(()=>{
}
),Sg.set(e,t),e}
function IP(t){
if(jp.has(t))return;
const e=new Promise((n,r)=>{
const i=()=>{
t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)}
,s=()=>{
n(),i()}
,o=()=>{
r(t.error||new DOMException("AbortError","AbortError")),i()}
;
t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)}
);
jp.set(t,e)}
let Fp={
get(t,e,n){
if(t instanceof IDBTransaction){
if(e==="done")return jp.get(t);
if(e==="objectStoreNames")return t.objectStoreNames||yb.get(t);
if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}
return Oi(t[e])}
,set(t,e,n){
return t[e]=n,!0}
,has(t,e){
return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}
}
;
function SP(t){
Fp=t(Fp)}
function AP(t){
return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){
const r=t.call(Sf(this),e,...n);
return yb.set(r,e.sort?e.sort():[e]),Oi(r)}
:EP().includes(t)?function(...e){
return t.apply(Sf(this),e),Oi(gb.get(this))}
:function(...e){
return Oi(t.apply(Sf(this),e))}
}
function CP(t){
return typeof t=="function"?AP(t):(t instanceof IDBTransaction&&IP(t),xP(t,bP())?new Proxy(t,Fp):t)}
function Oi(t){
if(t instanceof IDBRequest)return TP(t);
if(If.has(t))return If.get(t);
const e=CP(t);
return e!==t&&(If.set(t,e),Sg.set(e,t)),e}
const Sf=t=>Sg.get(t);
function kP(t,e,{
blocked:n,upgrade:r,blocking:i,terminated:s}
={
}
){
const o=indexedDB.open(t,e),l=Oi(o);
return r&&o.addEventListener("upgradeneeded",c=>{
r(Oi(o.result),c.oldVersion,c.newVersion,Oi(o.transaction),c)}
),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{
s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}
).catch(()=>{
}
),l}
const RP=["get","getKey","getAll","getAllKeys","count"],NP=["put","add","delete","clear"],Af=new Map;
function Tv(t,e){
if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;
if(Af.get(e))return Af.get(e);
const n=e.replace(/FromIndex$/,""),r=e!==n,i=NP.includes(n);
if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||RP.includes(n)))return;
const s=async function(o,...l){
const c=this.transaction(o,i?"readwrite":"readonly");
let u=c.store;
return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&c.done]))[0]}
;
return Af.set(e,s),s}
SP(t=>({
...t,get:(e,n,r)=>Tv(e,n)||t.get(e,n,r),has:(e,n)=>!!Tv(e,n)||t.has(e,n)}
));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PP{
constructor(e){
this.container=e}
getPlatformInfoString(){
return this.container.getProviders().map(n=>{
if(DP(n)){
const r=n.getImmediate();
return`${
r.library}
/${
r.version}
`}
else return null}
).filter(n=>n).join(" ")}
}
function DP(t){
const e=t.getComponent();
return(e==null?void 0:e.type)==="VERSION"}
const Bp="@firebase/app",Iv="0.10.13";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr=new Ig("@firebase/app"),OP="@firebase/app-compat",VP="@firebase/analytics-compat",MP="@firebase/analytics",LP="@firebase/app-check-compat",jP="@firebase/app-check",FP="@firebase/auth",BP="@firebase/auth-compat",UP="@firebase/database",$P="@firebase/data-connect",zP="@firebase/database-compat",qP="@firebase/functions",GP="@firebase/functions-compat",WP="@firebase/installations",HP="@firebase/installations-compat",KP="@firebase/messaging",QP="@firebase/messaging-compat",YP="@firebase/performance",XP="@firebase/performance-compat",JP="@firebase/remote-config",ZP="@firebase/remote-config-compat",eD="@firebase/storage",tD="@firebase/storage-compat",nD="@firebase/firestore",rD="@firebase/vertexai-preview",iD="@firebase/firestore-compat",sD="firebase",oD="10.14.1";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Up="[DEFAULT]",aD={
[Bp]:"fire-core",[OP]:"fire-core-compat",[MP]:"fire-analytics",[VP]:"fire-analytics-compat",[jP]:"fire-app-check",[LP]:"fire-app-check-compat",[FP]:"fire-auth",[BP]:"fire-auth-compat",[UP]:"fire-rtdb",[$P]:"fire-data-connect",[zP]:"fire-rtdb-compat",[qP]:"fire-fn",[GP]:"fire-fn-compat",[WP]:"fire-iid",[HP]:"fire-iid-compat",[KP]:"fire-fcm",[QP]:"fire-fcm-compat",[YP]:"fire-perf",[XP]:"fire-perf-compat",[JP]:"fire-rc",[ZP]:"fire-rc-compat",[eD]:"fire-gcs",[tD]:"fire-gcs-compat",[nD]:"fire-fst",[iD]:"fire-fst-compat",[rD]:"fire-vertex","fire-js":"fire-js",[sD]:"fire-js-all"}
;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yd=new Map,lD=new Map,$p=new Map;
function Sv(t,e){
try{
t.container.addComponent(e)}
catch(n){
Gr.debug(`Component ${
e.name}
 failed to register with FirebaseApp ${
t.name}
`,n)}
}
function Bo(t){
const e=t.name;
if($p.has(e))return Gr.debug(`There were multiple attempts to register component ${
e}
.`),!1;
$p.set(e,t);
for(const n of yd.values())Sv(n,t);
for(const n of lD.values())Sv(n,t);
return!0}
function Ag(t,e){
const n=t.container.getProvider("heartbeat").getImmediate({
optional:!0}
);
return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
function Mr(t){
return t.settings!==void 0}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cD={
"no-app":"No Firebase App '{
$appName}
' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{
$appName}
'","duplicate-app":"Firebase App named '{
$appName}
' already exists with different options or config","app-deleted":"Firebase App named '{
$appName}
' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{
$appName}
() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {
$originalErrorMessage}
.","idb-get":"Error thrown when reading from IndexedDB. Original error: {
$originalErrorMessage}
.","idb-set":"Error thrown when writing to IndexedDB. Original error: {
$originalErrorMessage}
.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {
$originalErrorMessage}
.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."}
,Vi=new Gl("app","Firebase",cD);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uD{
constructor(e,n,r){
this._isDeleted=!1,this._options=Object.assign({
}
,e),this._config=Object.assign({
}
,n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Rs("app",()=>this,"PUBLIC"))}
get automaticDataCollectionEnabled(){
return this.checkDestroyed(),this._automaticDataCollectionEnabled}
set automaticDataCollectionEnabled(e){
this.checkDestroyed(),this._automaticDataCollectionEnabled=e}
get name(){
return this.checkDestroyed(),this._name}
get options(){
return this.checkDestroyed(),this._options}
get config(){
return this.checkDestroyed(),this._config}
get container(){
return this._container}
get isDeleted(){
return this._isDeleted}
set isDeleted(e){
this._isDeleted=e}
checkDestroyed(){
if(this.isDeleted)throw Vi.create("app-deleted",{
appName:this._name}
)}
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ea=oD;
function vb(t,e={
}
){
let n=t;
typeof e!="object"&&(e={
name:e}
);
const r=Object.assign({
name:Up,automaticDataCollectionEnabled:!1}
,e),i=r.name;
if(typeof i!="string"||!i)throw Vi.create("bad-app-name",{
appName:String(i)}
);
if(n||(n=pb()),!n)throw Vi.create("no-options");
const s=yd.get(i);
if(s){
if(gd(n,s.options)&&gd(r,s.config))return s;
throw Vi.create("duplicate-app",{
appName:i}
)}
const o=new gP(i);
for(const c of $p.values())o.addComponent(c);
const l=new uD(n,r,o);
return yd.set(i,l),l}
function _b(t=Up){
const e=yd.get(t);
if(!e&&t===Up&&pb())return vb();
if(!e)throw Vi.create("no-app",{
appName:t}
);
return e}
function Mi(t,e,n){
var r;
let i=(r=aD[t])!==null&&r!==void 0?r:t;
n&&(i+=`-${
n}
`);
const s=i.match(/\s|\//),o=e.match(/\s|\//);
if(s||o){
const l=[`Unable to register library "${
i}
" with version "${
e}
":`];
s&&l.push(`library name "${
i}
" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${
e}
" contains illegal characters (whitespace or "/")`),Gr.warn(l.join(" "));
return}
Bo(new Rs(`${
i}
-version`,()=>({
library:i,version:e}
),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dD="firebase-heartbeat-database",hD=1,kl="firebase-heartbeat-store";
let Cf=null;
function wb(){
return Cf||(Cf=kP(dD,hD,{
upgrade:(t,e)=>{
switch(e){
case 0:try{
t.createObjectStore(kl)}
catch(n){
console.warn(n)}
}
}
}
).catch(t=>{
throw Vi.create("idb-open",{
originalErrorMessage:t.message}
)}
)),Cf}
async function fD(t){
try{
const n=(await wb()).transaction(kl),r=await n.objectStore(kl).get(xb(t));
return await n.done,r}
catch(e){
if(e instanceof Jr)Gr.warn(e.message);
else{
const n=Vi.create("idb-get",{
originalErrorMessage:e==null?void 0:e.message}
);
Gr.warn(n.message)}
}
}
async function Av(t,e){
try{
const r=(await wb()).transaction(kl,"readwrite");
await r.objectStore(kl).put(e,xb(t)),await r.done}
catch(n){
if(n instanceof Jr)Gr.warn(n.message);
else{
const r=Vi.create("idb-set",{
originalErrorMessage:n==null?void 0:n.message}
);
Gr.warn(r.message)}
}
}
function xb(t){
return`${
t.name}
!${
t.options.appId}
`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pD=1024,mD=30*24*60*60*1e3;
class gD{
constructor(e){
this.container=e,this._heartbeatsCache=null;
const n=this.container.getProvider("app").getImmediate();
this._storage=new vD(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}
async triggerHeartbeat(){
var e,n;
try{
const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Cv();
return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({
date:s,agent:i}
),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{
const l=new Date(o.date).valueOf();
return Date.now()-l<=mD}
),this._storage.overwrite(this._heartbeatsCache))}
catch(r){
Gr.warn(r)}
}
async getHeartbeatsHeader(){
var e;
try{
if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";
const n=Cv(),{
heartbeatsToSend:r,unsentEntries:i}
=yD(this._heartbeatsCache.heartbeats),s=md(JSON.stringify({
version:2,heartbeats:r}
));
return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}
catch(n){
return Gr.warn(n),""}
}
}
function Cv(){
return new Date().toISOString().substring(0,10)}
function yD(t,e=pD){
const n=[];
let r=t.slice();
for(const i of t){
const s=n.find(o=>o.agent===i.agent);
if(s){
if(s.dates.push(i.date),kv(n)>e){
s.dates.pop();
break}
}
else if(n.push({
agent:i.agent,dates:[i.date]}
),kv(n)>e){
n.pop();
break}
r=r.slice(1)}
return{
heartbeatsToSend:n,unsentEntries:r}
}
class vD{
constructor(e){
this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}
async runIndexedDBEnvironmentCheck(){
return iP()?sP().then(()=>!0).catch(()=>!1):!1}
async read(){
if(await this._canUseIndexedDBPromise){
const n=await fD(this.app);
return n!=null&&n.heartbeats?n:{
heartbeats:[]}
}
else return{
heartbeats:[]}
}
async overwrite(e){
var n;
if(await this._canUseIndexedDBPromise){
const i=await this.read();
return Av(this.app,{
lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats}
)}
else return}
async add(e){
var n;
if(await this._canUseIndexedDBPromise){
const i=await this.read();
return Av(this.app,{
lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]}
)}
else return}
}
function kv(t){
return md(JSON.stringify({
version:2,heartbeats:t}
)).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _D(t){
Bo(new Rs("platform-logger",e=>new PP(e),"PRIVATE")),Bo(new Rs("heartbeat",e=>new gD(e),"PRIVATE")),Mi(Bp,Iv,t),Mi(Bp,Iv,"esm2017"),Mi("fire-js","")}
_D("");
var wD="firebase",xD="10.14.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mi(wD,xD,"app");
function Cg(t,e){
var n={
}
;
for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);
if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);
i<r.length;
i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);
return n}
function bb(){
return{
"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}
}
const bD=bb,Eb=new Gl("auth","Firebase",bb());
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vd=new Ig("@firebase/auth");
function ED(t,...e){
vd.logLevel<=Ie.WARN&&vd.warn(`Auth (${
ea}
): ${
t}
`,...e)}
function Au(t,...e){
vd.logLevel<=Ie.ERROR&&vd.error(`Auth (${
ea}
): ${
t}
`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wr(t,...e){
throw kg(t,...e)}
function gr(t,...e){
return kg(t,...e)}
function Tb(t,e,n){
const r=Object.assign(Object.assign({
}
,bD()),{
[e]:n}
);
return new Gl("auth","Firebase",r).create(e,{
appName:t.name}
)}
function Li(t){
return Tb(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}
function kg(t,...e){
if(typeof t!="string"){
const n=e[0],r=[...e.slice(1)];
return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}
return Eb.create(t,...e)}
function ge(t,e,...n){
if(!t)throw kg(e,...n)}
function Lr(t){
const e="INTERNAL ASSERTION FAILED: "+t;
throw Au(e),new Error(e)}
function Hr(t,e){
t||Lr(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zp(){
var t;
return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}
function TD(){
return Rv()==="http:"||Rv()==="https:"}
function Rv(){
var t;
return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ID(){
return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(TD()||eP()||"connection"in navigator)?navigator.onLine:!0}
function SD(){
if(typeof navigator>"u")return null;
const t=navigator;
return t.languages&&t.languages[0]||t.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{
constructor(e,n){
this.shortDelay=e,this.longDelay=n,Hr(n>e,"Short delay should be less than long delay!"),this.isMobile=XN()||tP()}
get(){
return ID()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rg(t,e){
Hr(t.emulator,"Emulator should always be set here");
const{
url:n}
=t.emulator;
return e?`${
n}
${
e.startsWith("/")?e.slice(1):e}
`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ib{
static initialize(e,n,r){
this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}
static fetch(){
if(this.fetchImpl)return this.fetchImpl;
if(typeof self<"u"&&"fetch"in self)return self.fetch;
if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;
if(typeof fetch<"u")return fetch;
Lr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}
static headers(){
if(this.headersImpl)return this.headersImpl;
if(typeof self<"u"&&"Headers"in self)return self.Headers;
if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;
if(typeof Headers<"u")return Headers;
Lr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}
static response(){
if(this.responseImpl)return this.responseImpl;
if(typeof self<"u"&&"Response"in self)return self.Response;
if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;
if(typeof Response<"u")return Response;
Lr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AD={
CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"}
;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CD=new Hl(3e4,6e4);
function nh(t,e){
return t.tenantId&&!e.tenantId?Object.assign(Object.assign({
}
,e),{
tenantId:t.tenantId}
):e}
async function ta(t,e,n,r,i={
}
){
return Sb(t,i,async()=>{
let s={
}
,o={
}
;
r&&(e==="GET"?o=r:s={
body:JSON.stringify(r)}
);
const l=Wl(Object.assign({
key:t.config.apiKey}
,o)).slice(1),c=await t._getAdditionalHeaders();
c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);
const u=Object.assign({
method:e,headers:c}
,s);
return ZN()||(u.referrerPolicy="no-referrer"),Ib.fetch()(Cb(t,t.config.apiHost,n,l),u)}
)}
async function Sb(t,e,n){
t._canInitEmulator=!1;
const r=Object.assign(Object.assign({
}
,AD),e);
try{
const i=new kD(t),s=await Promise.race([n(),i.promise]);
i.clearNetworkTimeout();
const o=await s.json();
if("needConfirmation"in o)throw au(t,"account-exists-with-different-credential",o);
if(s.ok&&!("errorMessage"in o))return o;
{
const l=s.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");
if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw au(t,"credential-already-in-use",o);
if(c==="EMAIL_EXISTS")throw au(t,"email-already-in-use",o);
if(c==="USER_DISABLED")throw au(t,"user-disabled",o);
const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");
if(u)throw Tb(t,d,u);
Wr(t,d)}
}
catch(i){
if(i instanceof Jr)throw i;
Wr(t,"network-request-failed",{
message:String(i)}
)}
}
async function Ab(t,e,n,r,i={
}
){
const s=await ta(t,e,n,r,i);
return"mfaPendingCredential"in s&&Wr(t,"multi-factor-auth-required",{
_serverResponse:s}
),s}
function Cb(t,e,n,r){
const i=`${
e}
${
n}
?${
r}
`;
return t.config.emulator?Rg(t.config,i):`${
t.config.apiScheme}
://${
i}
`}
class kD{
constructor(e){
this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{
this.timer=setTimeout(()=>r(gr(this.auth,"network-request-failed")),CD.get())}
)}
clearNetworkTimeout(){
clearTimeout(this.timer)}
}
function au(t,e,n){
const r={
appName:t.name}
;
n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);
const i=gr(t,e,r);
return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RD(t,e){
return ta(t,"POST","/v1/accounts:delete",e)}
async function kb(t,e){
return ta(t,"POST","/v1/accounts:lookup",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function el(t){
if(t)try{
const e=new Date(Number(t));
if(!isNaN(e.getTime()))return e.toUTCString()}
catch{
}
}
async function ND(t,e=!1){
const n=xt(t),r=await n.getIdToken(e),i=Ng(r);
ge(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");
const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;
return{
claims:i,token:r,authTime:el(kf(i.auth_time)),issuedAtTime:el(kf(i.iat)),expirationTime:el(kf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}
}
function kf(t){
return Number(t)*1e3}
function Ng(t){
const[e,n,r]=t.split(".");
if(e===void 0||n===void 0||r===void 0)return Au("JWT malformed, contained fewer than 3 sections"),null;
try{
const i=hb(n);
return i?JSON.parse(i):(Au("Failed to decode base64 JWT payload"),null)}
catch(i){
return Au("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}
}
function Nv(t){
const e=Ng(t);
return ge(e,"internal-error"),ge(typeof e.exp<"u","internal-error"),ge(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rl(t,e,n=!1){
if(n)return e;
try{
return await e}
catch(r){
throw r instanceof Jr&&PD(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}
}
function PD({
code:t}
){
return t==="auth/user-disabled"||t==="auth/user-token-expired"}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DD{
constructor(e){
this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}
_start(){
this.isRunning||(this.isRunning=!0,this.schedule())}
_stop(){
this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}
getInterval(e){
var n;
if(e){
const r=this.errorBackoff;
return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}
else{
this.errorBackoff=3e4;
const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;
return Math.max(0,i)}
}
schedule(e=!1){
if(!this.isRunning)return;
const n=this.getInterval(e);
this.timerId=setTimeout(async()=>{
await this.iteration()}
,n)}
async iteration(){
try{
await this.user.getIdToken(!0)}
catch(e){
(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);
return}
this.schedule()}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{
constructor(e,n){
this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}
_initializeTime(){
this.lastSignInTime=el(this.lastLoginAt),this.creationTime=el(this.createdAt)}
_copy(e){
this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}
toJSON(){
return{
createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}
}
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _d(t){
var e;
const n=t.auth,r=await t.getIdToken(),i=await Rl(t,kb(n,{
idToken:r}
));
ge(i==null?void 0:i.users.length,n,"internal-error");
const s=i.users[0];
t._notifyReloadListener(s);
const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Rb(s.providerUserInfo):[],l=VD(t.providerData,o),c=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),d=c?u:!1,m={
uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new qp(s.createdAt,s.lastLoginAt),isAnonymous:d}
;
Object.assign(t,m)}
async function OD(t){
const e=xt(t);
await _d(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}
function VD(t,e){
return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}
function Rb(t){
return t.map(e=>{
var{
providerId:n}
=e,r=Cg(e,["providerId"]);
return{
providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}
}
)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MD(t,e){
const n=await Sb(t,{
}
,async()=>{
const r=Wl({
grant_type:"refresh_token",refresh_token:e}
).slice(1),{
tokenApiHost:i,apiKey:s}
=t.config,o=Cb(t,i,"/v1/token",`key=${
s}
`),l=await t._getAdditionalHeaders();
return l["Content-Type"]="application/x-www-form-urlencoded",Ib.fetch()(o,{
method:"POST",headers:l,body:r}
)}
);
return{
accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}
}
async function LD(t,e){
return ta(t,"POST","/v2/accounts:revokeToken",nh(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{
constructor(){
this.refreshToken=null,this.accessToken=null,this.expirationTime=null}
get isExpired(){
return!this.expirationTime||Date.now()>this.expirationTime-3e4}
updateFromServerResponse(e){
ge(e.idToken,"internal-error"),ge(typeof e.idToken<"u","internal-error"),ge(typeof e.refreshToken<"u","internal-error");
const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Nv(e.idToken);
this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}
updateFromIdToken(e){
ge(e.length!==0,"internal-error");
const n=Nv(e);
this.updateTokensAndExpiration(e,null,n)}
async getToken(e,n=!1){
return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ge(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}
clearRefreshToken(){
this.refreshToken=null}
async refresh(e,n){
const{
accessToken:r,refreshToken:i,expiresIn:s}
=await MD(e,n);
this.updateTokensAndExpiration(r,i,Number(s))}
updateTokensAndExpiration(e,n,r){
this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}
static fromJSON(e,n){
const{
refreshToken:r,accessToken:i,expirationTime:s}
=n,o=new Io;
return r&&(ge(typeof r=="string","internal-error",{
appName:e}
),o.refreshToken=r),i&&(ge(typeof i=="string","internal-error",{
appName:e}
),o.accessToken=i),s&&(ge(typeof s=="number","internal-error",{
appName:e}
),o.expirationTime=s),o}
toJSON(){
return{
refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}
}
_assign(e){
this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}
_clone(){
return Object.assign(new Io,this.toJSON())}
_performRefresh(){
return Lr("not implemented")}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hi(t,e){
ge(typeof t=="string"||typeof t>"u","internal-error",{
appName:e}
)}
class jr{
constructor(e){
var{
uid:n,auth:r,stsTokenManager:i}
=e,s=Cg(e,["uid","auth","stsTokenManager"]);
this.providerId="firebase",this.proactiveRefresh=new DD(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new qp(s.createdAt||void 0,s.lastLoginAt||void 0)}
async getIdToken(e){
const n=await Rl(this,this.stsTokenManager.getToken(this.auth,e));
return ge(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}
getIdTokenResult(e){
return ND(this,e)}
reload(){
return OD(this)}
_assign(e){
this!==e&&(ge(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({
}
,n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}
_clone(e){
const n=new jr(Object.assign(Object.assign({
}
,this),{
auth:e,stsTokenManager:this.stsTokenManager._clone()}
));
return n.metadata._copy(this.metadata),n}
_onReload(e){
ge(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}
_notifyReloadListener(e){
this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}
_startProactiveRefresh(){
this.proactiveRefresh._start()}
_stopProactiveRefresh(){
this.proactiveRefresh._stop()}
async _updateTokensIfNecessary(e,n=!1){
let r=!1;
e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await _d(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}
async delete(){
if(Mr(this.auth.app))return Promise.reject(Li(this.auth));
const e=await this.getIdToken();
return await Rl(this,RD(this.auth,{
idToken:e}
)),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}
toJSON(){
return Object.assign(Object.assign({
uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({
}
,e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId}
,this.metadata.toJSON()),{
apiKey:this.auth.config.apiKey,appName:this.auth.name}
)}
get refreshToken(){
return this.stsTokenManager.refreshToken||""}
static _fromJSON(e,n){
var r,i,s,o,l,c,u,d;
const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,_=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,N=(l=n.tenantId)!==null&&l!==void 0?l:void 0,O=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,I=(u=n.createdAt)!==null&&u!==void 0?u:void 0,E=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{
uid:k,emailVerified:M,isAnonymous:G,providerData:q,stsTokenManager:S}
=n;
ge(k&&S,e,"internal-error");
const b=Io.fromJSON(this.name,S);
ge(typeof k=="string",e,"internal-error"),hi(m,e.name),hi(g,e.name),ge(typeof M=="boolean",e,"internal-error"),ge(typeof G=="boolean",e,"internal-error"),hi(_,e.name),hi(w,e.name),hi(N,e.name),hi(O,e.name),hi(I,e.name),hi(E,e.name);
const A=new jr({
uid:k,auth:e,email:g,emailVerified:M,displayName:m,isAnonymous:G,photoURL:w,phoneNumber:_,tenantId:N,stsTokenManager:b,createdAt:I,lastLoginAt:E}
);
return q&&Array.isArray(q)&&(A.providerData=q.map(C=>Object.assign({
}
,C))),O&&(A._redirectEventId=O),A}
static async _fromIdTokenResponse(e,n,r=!1){
const i=new Io;
i.updateFromServerResponse(n);
const s=new jr({
uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r}
);
return await _d(s),s}
static async _fromGetAccountInfoResponse(e,n,r){
const i=n.users[0];
ge(i.localId!==void 0,"internal-error");
const s=i.providerUserInfo!==void 0?Rb(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Io;
l.updateFromIdToken(r);
const c=new jr({
uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}
),u={
uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new qp(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)}
;
return Object.assign(c,u),c}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pv=new Map;
function Fr(t){
Hr(t instanceof Function,"Expected a class definition");
let e=Pv.get(t);
return e?(Hr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Pv.set(t,e),e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{
constructor(){
this.type="NONE",this.storage={
}
}
async _isAvailable(){
return!0}
async _set(e,n){
this.storage[e]=n}
async _get(e){
const n=this.storage[e];
return n===void 0?null:n}
async _remove(e){
delete this.storage[e]}
_addListener(e,n){
}
_removeListener(e,n){
}
}
Nb.type="NONE";
const Dv=Nb;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cu(t,e,n){
return`firebase:${
t}
:${
e}
:${
n}
`}
class So{
constructor(e,n,r){
this.persistence=e,this.auth=n,this.userKey=r;
const{
config:i,name:s}
=this.auth;
this.fullUserKey=Cu(this.userKey,i.apiKey,s),this.fullPersistenceKey=Cu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}
setCurrentUser(e){
return this.persistence._set(this.fullUserKey,e.toJSON())}
async getCurrentUser(){
const e=await this.persistence._get(this.fullUserKey);
return e?jr._fromJSON(this.auth,e):null}
removeCurrentUser(){
return this.persistence._remove(this.fullUserKey)}
savePersistenceForRedirect(){
return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}
async setPersistence(e){
if(this.persistence===e)return;
const n=await this.getCurrentUser();
if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}
delete(){
this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}
static async create(e,n,r="authUser"){
if(!n.length)return new So(Fr(Dv),e,r);
const i=(await Promise.all(n.map(async u=>{
if(await u._isAvailable())return u}
))).filter(u=>u);
let s=i[0]||Fr(Dv);
const o=Cu(r,e.config.apiKey,e.name);
let l=null;
for(const u of n)try{
const d=await u._get(o);
if(d){
const m=jr._fromJSON(e,d);
u!==s&&(l=m),s=u;
break}
}
catch{
}
const c=i.filter(u=>u._shouldAllowMigration);
return!s._shouldAllowMigration||!c.length?new So(s,e,r):(s=c[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{
if(u!==s)try{
await u._remove(o)}
catch{
}
}
)),new So(s,e,r))}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ov(t){
const e=t.toLowerCase();
if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";
if(Vb(e))return"IEMobile";
if(e.includes("msie")||e.includes("trident/"))return"IE";
if(e.includes("edge/"))return"Edge";
if(Pb(e))return"Firefox";
if(e.includes("silk/"))return"Silk";
if(Lb(e))return"Blackberry";
if(jb(e))return"Webos";
if(Db(e))return"Safari";
if((e.includes("chrome/")||Ob(e))&&!e.includes("edge/"))return"Chrome";
if(Mb(e))return"Android";
{
const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);
if((r==null?void 0:r.length)===2)return r[1]}
return"Other"}
function Pb(t=Jt()){
return/firefox\//i.test(t)}
function Db(t=Jt()){
const e=t.toLowerCase();
return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}
function Ob(t=Jt()){
return/crios\//i.test(t)}
function Vb(t=Jt()){
return/iemobile/i.test(t)}
function Mb(t=Jt()){
return/android/i.test(t)}
function Lb(t=Jt()){
return/blackberry/i.test(t)}
function jb(t=Jt()){
return/webos/i.test(t)}
function Pg(t=Jt()){
return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}
function jD(t=Jt()){
var e;
return Pg(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}
function FD(){
return nP()&&document.documentMode===10}
function Fb(t=Jt()){
return Pg(t)||Mb(t)||jb(t)||Lb(t)||/windows phone/i.test(t)||Vb(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bb(t,e=[]){
let n;
switch(t){
case"Browser":n=Ov(Jt());
break;
case"Worker":n=`${
Ov(Jt())}
-${
t}
`;
break;
default:n=t}
const r=e.length?e.join(","):"FirebaseCore-web";
return`${
n}
/JsCore/${
ea}
/${
r}
`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BD{
constructor(e){
this.auth=e,this.queue=[]}
pushCallback(e,n){
const r=s=>new Promise((o,l)=>{
try{
const c=e(s);
o(c)}
catch(c){
l(c)}
}
);
r.onAbort=n,this.queue.push(r);
const i=this.queue.length-1;
return()=>{
this.queue[i]=()=>Promise.resolve()}
}
async runMiddleware(e){
if(this.auth.currentUser===e)return;
const n=[];
try{
for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}
catch(r){
n.reverse();
for(const i of n)try{
i()}
catch{
}
throw this.auth._errorFactory.create("login-blocked",{
originalMessage:r==null?void 0:r.message}
)}
}
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UD(t,e={
}
){
return ta(t,"GET","/v2/passwordPolicy",nh(t,e))}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $D=6;
class zD{
constructor(e){
var n,r,i,s;
const o=e.customStrengthOptions;
this.customStrengthOptions={
}
,this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:$D,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}
validatePassword(e){
var n,r,i,s,o,l;
const c={
isValid:!0,passwordPolicy:this}
;
return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}
validatePasswordLengthOptions(e,n){
const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;
r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}
validatePasswordCharacterOptions(e,n){
this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);
let r;
for(let i=0;
i<e.length;
i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}
updatePasswordCharacterOptionsStatuses(e,n,r,i,s){
this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qD{
constructor(e,n,r,i){
this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Vv(this),this.idTokenSubscription=new Vv(this),this.beforeStateQueue=new BD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Eb,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={
}
,this._projectPasswordPolicy=null,this._tenantPasswordPolicies={
}
,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={
appVerificationDisabledForTesting:!1}
,this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}
_initializeWithPersistence(e,n){
return n&&(this._popupRedirectResolver=Fr(n)),this._initializationPromise=this.queue(async()=>{
var r,i;
if(!this._deleted&&(this.persistenceManager=await So.create(this,e),!this._deleted)){
if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{
await this._popupRedirectResolver._initialize(this)}
catch{
}
await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}
}
),this._initializationPromise}
async _onStorageEvent(){
if(this._deleted)return;
const e=await this.assertedPersistence.getCurrentUser();
if(!(!this.currentUser&&!e)){
if(this.currentUser&&e&&this.currentUser.uid===e.uid){
this._currentUser._assign(e),await this.currentUser.getIdToken();
return}
await this._updateCurrentUser(e,!0)}
}
async initializeCurrentUserFromIdToken(e){
try{
const n=await kb(this,{
idToken:e}
),r=await jr._fromGetAccountInfoResponse(this,n,e);
await this.directlySetCurrentUser(r)}
catch(n){
console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}
}
async initializeCurrentUser(e){
var n;
if(Mr(this.app)){
const o=this.app.settings.authIdToken;
return o?new Promise(l=>{
setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}
):this.directlySetCurrentUser(null)}
const r=await this.assertedPersistence.getCurrentUser();
let i=r,s=!1;
if(e&&this.config.authDomain){
await this.getOrInitRedirectPersistenceManager();
const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);
(!o||o===l)&&(c!=null&&c.user)&&(i=c.user,s=!0)}
if(!i)return this.directlySetCurrentUser(null);
if(!i._redirectEventId){
if(s)try{
await this.beforeStateQueue.runMiddleware(i)}
catch(o){
i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}
return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}
return ge(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}
async tryRedirectSignIn(e){
let n=null;
try{
n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}
catch{
await this._setRedirectUser(null)}
return n}
async reloadAndSetCurrentUserOrClear(e){
try{
await _d(e)}
catch(n){
if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}
return this.directlySetCurrentUser(e)}
useDeviceLanguage(){
this.languageCode=SD()}
async _delete(){
this._deleted=!0}
async updateCurrentUser(e){
if(Mr(this.app))return Promise.reject(Li(this));
const n=e?xt(e):null;
return n&&ge(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}
async _updateCurrentUser(e,n=!1){
if(!this._deleted)return e&&ge(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{
await this.directlySetCurrentUser(e),this.notifyAuthListeners()}
)}
async signOut(){
return Mr(this.app)?Promise.reject(Li(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}
setPersistence(e){
return Mr(this.app)?Promise.reject(Li(this)):this.queue(async()=>{
await this.assertedPersistence.setPersistence(Fr(e))}
)}
_getRecaptchaConfig(){
return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}
async validatePassword(e){
this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();
const n=this._getPasswordPolicyInternal();
return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{
}
)):n.validatePassword(e)}
_getPasswordPolicyInternal(){
return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}
async _updatePasswordPolicy(){
const e=await UD(this),n=new zD(e);
this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}
_getPersistence(){
return this.assertedPersistence.persistence.type}
_updateErrorMap(e){
this._errorFactory=new Gl("auth","Firebase",e())}
onAuthStateChanged(e,n,r){
return this.registerStateListener(this.authStateSubscription,e,n,r)}
beforeAuthStateChanged(e,n){
return this.beforeStateQueue.pushCallback(e,n)}
onIdTokenChanged(e,n,r){
return this.registerStateListener(this.idTokenSubscription,e,n,r)}
authStateReady(){
return new Promise((e,n)=>{
if(this.currentUser)e();
else{
const r=this.onAuthStateChanged(()=>{
r(),e()}
,n)}
}
)}
async revokeAccessToken(e){
if(this.currentUser){
const n=await this.currentUser.getIdToken(),r={
providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n}
;
this.tenantId!=null&&(r.tenantId=this.tenantId),await LD(this,r)}
}
toJSON(){
var e;
return{
apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}
}
async _setRedirectUser(e,n){
const r=await this.getOrInitRedirectPersistenceManager(n);
return e===null?r.removeCurrentUser():r.setCurrentUser(e)}
async getOrInitRedirectPersistenceManager(e){
if(!this.redirectPersistenceManager){
const n=e&&Fr(e)||this._popupRedirectResolver;
ge(n,this,"argument-error"),this.redirectPersistenceManager=await So.create(this,[Fr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}
return this.redirectPersistenceManager}
async _redirectUserForId(e){
var n,r;
return this._isInitialized&&await this.queue(async()=>{
}
),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}
async _persistUserIfCurrent(e){
if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}
_notifyListenersIfCurrent(e){
e===this.currentUser&&this.notifyAuthListeners()}
_key(){
return`${
this.config.authDomain}
:${
this.config.apiKey}
:${
this.name}
`}
_startProactiveRefresh(){
this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}
_stopProactiveRefresh(){
this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}
get _currentUser(){
return this.currentUser}
notifyAuthListeners(){
var e,n;
if(!this._isInitialized)return;
this.idTokenSubscription.next(this.currentUser);
const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;
this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}
registerStateListener(e,n,r,i){
if(this._deleted)return()=>{
}
;
const s=typeof n=="function"?n:n.next.bind(n);
let o=!1;
const l=this._isInitialized?Promise.resolve():this._initializationPromise;
if(ge(l,this,"internal-error"),l.then(()=>{
o||s(this.currentUser)}
),typeof n=="function"){
const c=e.addObserver(n,r,i);
return()=>{
o=!0,c()}
}
else{
const c=e.addObserver(n);
return()=>{
o=!0,c()}
}
}
async directlySetCurrentUser(e){
this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}
queue(e){
return this.operations=this.operations.then(e,e),this.operations}
get assertedPersistence(){
return ge(this.persistenceManager,this,"internal-error"),this.persistenceManager}
_logFramework(e){
!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Bb(this.config.clientPlatform,this._getFrameworks()))}
_getFrameworks(){
return this.frameworks}
async _getAdditionalHeaders(){
var e;
const n={
"X-Client-Version":this.clientVersion}
;
this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);
const r=await((e=this.heartbeatServiceProvider.getImmediate({
optional:!0}
))===null||e===void 0?void 0:e.getHeartbeatsHeader());
r&&(n["X-Firebase-Client"]=r);
const i=await this._getAppCheckToken();
return i&&(n["X-Firebase-AppCheck"]=i),n}
async _getAppCheckToken(){
var e;
const n=await((e=this.appCheckServiceProvider.getImmediate({
optional:!0}
))===null||e===void 0?void 0:e.getToken());
return n!=null&&n.error&&ED(`Error while retrieving App Check token: ${
n.error}
`),n==null?void 0:n.token}
}
function rh(t){
return xt(t)}
class Vv{
constructor(e){
this.auth=e,this.observer=null,this.addObserver=uP(n=>this.observer=n)}
get next(){
return ge(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dg={
async loadJS(){
throw new Error("Unable to load external scripts")}
,recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""}
;
function GD(t){
Dg=t}
function WD(t){
return Dg.loadJS(t)}
function HD(){
return Dg.gapiScript}
function KD(t){
return`__${
t}
${
Math.floor(Math.random()*1e6)}
`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QD(t,e){
const n=Ag(t,"auth");
if(n.isInitialized()){
const i=n.getImmediate(),s=n.getOptions();
if(gd(s,e??{
}
))return i;
Wr(i,"already-initialized")}
return n.initialize({
options:e}
)}
function YD(t,e){
const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Fr);
e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}
function XD(t,e,n){
const r=rh(t);
ge(r._canInitEmulator,r,"emulator-config-failed"),ge(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");
const i=!!(n!=null&&n.disableWarnings),s=Ub(e),{
host:o,port:l}
=JD(e),c=l===null?"":`:${
l}
`;
r.config.emulator={
url:`${
s}
//${
o}
${
c}
/`}
,r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({
host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({
disableWarnings:i}
)}
),i||ZD()}
function Ub(t){
const e=t.indexOf(":");
return e<0?"":t.substr(0,e+1)}
function JD(t){
const e=Ub(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));
if(!n)return{
host:"",port:null}
;
const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);
if(i){
const s=i[1];
return{
host:s,port:Mv(r.substr(s.length+1))}
}
else{
const[s,o]=r.split(":");
return{
host:s,port:Mv(o)}
}
}
function Mv(t){
if(!t)return null;
const e=Number(t);
return isNaN(e)?null:e}
function ZD(){
function t(){
const e=document.createElement("p"),n=e.style;
e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}
typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{
constructor(e,n){
this.providerId=e,this.signInMethod=n}
toJSON(){
return Lr("not implemented")}
_getIdTokenResponse(e){
return Lr("not implemented")}
_linkToIdToken(e,n){
return Lr("not implemented")}
_getReauthenticationResolver(e){
return Lr("not implemented")}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ao(t,e){
return Ab(t,"POST","/v1/accounts:signInWithIdp",nh(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eO="http://localhost";
class Ns extends $b{
constructor(){
super(...arguments),this.pendingToken=null}
static _fromParams(e){
const n=new Ns(e.providerId,e.signInMethod);
return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Wr("argument-error"),n}
toJSON(){
return{
idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}
}
static fromJSON(e){
const n=typeof e=="string"?JSON.parse(e):e,{
providerId:r,signInMethod:i}
=n,s=Cg(n,["providerId","signInMethod"]);
if(!r||!i)return null;
const o=new Ns(r,i);
return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}
_getIdTokenResponse(e){
const n=this.buildRequest();
return Ao(e,n)}
_linkToIdToken(e,n){
const r=this.buildRequest();
return r.idToken=n,Ao(e,r)}
_getReauthenticationResolver(e){
const n=this.buildRequest();
return n.autoCreate=!1,Ao(e,n)}
buildRequest(){
const e={
requestUri:eO,returnSecureToken:!0}
;
if(this.pendingToken)e.pendingToken=this.pendingToken;
else{
const n={
}
;
this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Wl(n)}
return e}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zb{
constructor(e){
this.providerId=e,this.defaultLanguageCode=null,this.customParameters={
}
}
setDefaultLanguage(e){
this.defaultLanguageCode=e}
setCustomParameters(e){
return this.customParameters=e,this}
getCustomParameters(){
return this.customParameters}
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl extends zb{
constructor(){
super(...arguments),this.scopes=[]}
addScope(e){
return this.scopes.includes(e)||this.scopes.push(e),this}
getScopes(){
return[...this.scopes]}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi extends Kl{
constructor(){
super("facebook.com")}
static credential(e){
return Ns._fromParams({
providerId:yi.PROVIDER_ID,signInMethod:yi.FACEBOOK_SIGN_IN_METHOD,accessToken:e}
)}
static credentialFromResult(e){
return yi.credentialFromTaggedObject(e)}
static credentialFromError(e){
return yi.credentialFromTaggedObject(e.customData||{
}
)}
static credentialFromTaggedObject({
_tokenResponse:e}
){
if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;
try{
return yi.credential(e.oauthAccessToken)}
catch{
return null}
}
}
yi.FACEBOOK_SIGN_IN_METHOD="facebook.com";
yi.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi extends Kl{
constructor(){
super("google.com"),this.addScope("profile")}
static credential(e,n){
return Ns._fromParams({
providerId:vi.PROVIDER_ID,signInMethod:vi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n}
)}
static credentialFromResult(e){
return vi.credentialFromTaggedObject(e)}
static credentialFromError(e){
return vi.credentialFromTaggedObject(e.customData||{
}
)}
static credentialFromTaggedObject({
_tokenResponse:e}
){
if(!e)return null;
const{
oauthIdToken:n,oauthAccessToken:r}
=e;
if(!n&&!r)return null;
try{
return vi.credential(n,r)}
catch{
return null}
}
}
vi.GOOGLE_SIGN_IN_METHOD="google.com";
vi.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i extends Kl{
constructor(){
super("github.com")}
static credential(e){
return Ns._fromParams({
providerId:_i.PROVIDER_ID,signInMethod:_i.GITHUB_SIGN_IN_METHOD,accessToken:e}
)}
static credentialFromResult(e){
return _i.credentialFromTaggedObject(e)}
static credentialFromError(e){
return _i.credentialFromTaggedObject(e.customData||{
}
)}
static credentialFromTaggedObject({
_tokenResponse:e}
){
if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;
try{
return _i.credential(e.oauthAccessToken)}
catch{
return null}
}
}
_i.GITHUB_SIGN_IN_METHOD="github.com";
_i.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi extends Kl{
constructor(){
super("twitter.com")}
static credential(e,n){
return Ns._fromParams({
providerId:wi.PROVIDER_ID,signInMethod:wi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n}
)}
static credentialFromResult(e){
return wi.credentialFromTaggedObject(e)}
static credentialFromError(e){
return wi.credentialFromTaggedObject(e.customData||{
}
)}
static credentialFromTaggedObject({
_tokenResponse:e}
){
if(!e)return null;
const{
oauthAccessToken:n,oauthTokenSecret:r}
=e;
if(!n||!r)return null;
try{
return wi.credential(n,r)}
catch{
return null}
}
}
wi.TWITTER_SIGN_IN_METHOD="twitter.com";
wi.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tO(t,e){
return Ab(t,"POST","/v1/accounts:signUp",nh(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{
constructor(e){
this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}
static async _fromIdTokenResponse(e,n,r,i=!1){
const s=await jr._fromIdTokenResponse(e,r,i),o=Lv(r);
return new zi({
user:s,providerId:o,_tokenResponse:r,operationType:n}
)}
static async _forOperation(e,n,r){
await e._updateTokensIfNecessary(r,!0);
const i=Lv(r);
return new zi({
user:e,providerId:i,_tokenResponse:r,operationType:n}
)}
}
function Lv(t){
return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nO(t){
var e;
if(Mr(t.app))return Promise.reject(Li(t));
const n=rh(t);
if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new zi({
user:n.currentUser,providerId:null,operationType:"signIn"}
);
const r=await tO(n,{
returnSecureToken:!0}
),i=await zi._fromIdTokenResponse(n,"signIn",r,!0);
return await n._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd extends Jr{
constructor(e,n,r,i){
var s;
super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,wd.prototype),this.customData={
appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}
}
static _fromErrorAndOperation(e,n,r,i){
return new wd(e,n,r,i)}
}
function qb(t,e,n,r){
return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{
throw s.code==="auth/multi-factor-auth-required"?wd._fromErrorAndOperation(t,s,e,r):s}
)}
async function rO(t,e,n=!1){
const r=await Rl(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);
return zi._forOperation(t,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iO(t,e,n=!1){
const{
auth:r}
=t;
if(Mr(r.app))return Promise.reject(Li(r));
const i="reauthenticate";
try{
const s=await Rl(t,qb(r,i,e,t),n);
ge(s.idToken,r,"internal-error");
const o=Ng(s.idToken);
ge(o,r,"internal-error");
const{
sub:l}
=o;
return ge(t.uid===l,r,"user-mismatch"),zi._forOperation(t,i,s)}
catch(s){
throw(s==null?void 0:s.code)==="auth/user-not-found"&&Wr(r,"user-mismatch"),s}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sO(t,e,n=!1){
if(Mr(t.app))return Promise.reject(Li(t));
const r="signIn",i=await qb(t,r,e),s=await zi._fromIdTokenResponse(t,r,i);
return n||await t._updateCurrentUser(s.user),s}
function oO(t,e,n,r){
return xt(t).onIdTokenChanged(e,n,r)}
function aO(t,e,n){
return xt(t).beforeAuthStateChanged(e,n)}
function lO(t,e,n,r){
return xt(t).onAuthStateChanged(e,n,r)}
const xd="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gb{
constructor(e,n){
this.storageRetriever=e,this.type=n}
_isAvailable(){
try{
return this.storage?(this.storage.setItem(xd,"1"),this.storage.removeItem(xd),Promise.resolve(!0)):Promise.resolve(!1)}
catch{
return Promise.resolve(!1)}
}
_set(e,n){
return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}
_get(e){
const n=this.storage.getItem(e);
return Promise.resolve(n?JSON.parse(n):null)}
_remove(e){
return this.storage.removeItem(e),Promise.resolve()}
get storage(){
return this.storageRetriever()}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cO=1e3,uO=10;
class Wb extends Gb{
constructor(){
super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={
}
,this.localCache={
}
,this.pollTimer=null,this.fallbackToPolling=Fb(),this._shouldAllowMigration=!0}
forAllChangedKeys(e){
for(const n of Object.keys(this.listeners)){
const r=this.storage.getItem(n),i=this.localCache[n];
r!==i&&e(n,i,r)}
}
onStorageEvent(e,n=!1){
if(!e.key){
this.forAllChangedKeys((o,l,c)=>{
this.notifyListeners(o,c)}
);
return}
const r=e.key;
n?this.detachListener():this.stopPolling();
const i=()=>{
const o=this.storage.getItem(r);
!n&&this.localCache[r]===o||this.notifyListeners(r,o)}
,s=this.storage.getItem(r);
FD()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,uO):i()}
notifyListeners(e,n){
this.localCache[e]=n;
const r=this.listeners[e];
if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}
startPolling(){
this.stopPolling(),this.pollTimer=setInterval(()=>{
this.forAllChangedKeys((e,n,r)=>{
this.onStorageEvent(new StorageEvent("storage",{
key:e,oldValue:n,newValue:r}
),!0)}
)}
,cO)}
stopPolling(){
this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}
attachListener(){
window.addEventListener("storage",this.boundEventHandler)}
detachListener(){
window.removeEventListener("storage",this.boundEventHandler)}
_addListener(e,n){
Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}
_removeListener(e,n){
this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}
async _set(e,n){
await super._set(e,n),this.localCache[e]=JSON.stringify(n)}
async _get(e){
const n=await super._get(e);
return this.localCache[e]=JSON.stringify(n),n}
async _remove(e){
await super._remove(e),delete this.localCache[e]}
}
Wb.type="LOCAL";
const dO=Wb;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hb extends Gb{
constructor(){
super(()=>window.sessionStorage,"SESSION")}
_addListener(e,n){
}
_removeListener(e,n){
}
}
Hb.type="SESSION";
const Kb=Hb;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hO(t){
return Promise.all(t.map(async e=>{
try{
return{
fulfilled:!0,value:await e}
}
catch(n){
return{
fulfilled:!1,reason:n}
}
}
))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{
constructor(e){
this.eventTarget=e,this.handlersMap={
}
,this.boundEventHandler=this.handleEvent.bind(this)}
static _getInstance(e){
const n=this.receivers.find(i=>i.isListeningto(e));
if(n)return n;
const r=new ih(e);
return this.receivers.push(r),r}
isListeningto(e){
return this.eventTarget===e}
async handleEvent(e){
const n=e,{
eventId:r,eventType:i,data:s}
=n.data,o=this.handlersMap[i];
if(!(o!=null&&o.size))return;
n.ports[0].postMessage({
status:"ack",eventId:r,eventType:i}
);
const l=Array.from(o).map(async u=>u(n.origin,s)),c=await hO(l);
n.ports[0].postMessage({
status:"done",eventId:r,eventType:i,response:c}
)}
_subscribe(e,n){
Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}
_unsubscribe(e,n){
this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}
}
ih.receivers=[];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Og(t="",e=10){
let n="";
for(let r=0;
r<e;
r++)n+=Math.floor(Math.random()*10);
return t+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fO{
constructor(e){
this.target=e,this.handlers=new Set}
removeMessageHandler(e){
e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}
async _send(e,n,r=50){
const i=typeof MessageChannel<"u"?new MessageChannel:null;
if(!i)throw new Error("connection_unavailable");
let s,o;
return new Promise((l,c)=>{
const u=Og("",20);
i.port1.start();
const d=setTimeout(()=>{
c(new Error("unsupported_event"))}
,r);
o={
messageChannel:i,onMessage(m){
const g=m;
if(g.data.eventId===u)switch(g.data.status){
case"ack":clearTimeout(d),s=setTimeout(()=>{
c(new Error("timeout"))}
,3e3);
break;
case"done":clearTimeout(s),l(g.data.response);
break;
default:clearTimeout(d),clearTimeout(s),c(new Error("invalid_response"));
break}
}
}
,this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({
eventType:e,eventId:u,data:n}
,[i.port2])}
).finally(()=>{
o&&this.removeMessageHandler(o)}
)}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yr(){
return window}
function pO(t){
yr().location.href=t}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qb(){
return typeof yr().WorkerGlobalScope<"u"&&typeof yr().importScripts=="function"}
async function mO(){
if(!(navigator!=null&&navigator.serviceWorker))return null;
try{
return(await navigator.serviceWorker.ready).active}
catch{
return null}
}
function gO(){
var t;
return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}
function yO(){
return Qb()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yb="firebaseLocalStorageDb",vO=1,bd="firebaseLocalStorage",Xb="fbase_key";
class Ql{
constructor(e){
this.request=e}
toPromise(){
return new Promise((e,n)=>{
this.request.addEventListener("success",()=>{
e(this.request.result)}
),this.request.addEventListener("error",()=>{
n(this.request.error)}
)}
)}
}
function sh(t,e){
return t.transaction([bd],e?"readwrite":"readonly").objectStore(bd)}
function _O(){
const t=indexedDB.deleteDatabase(Yb);
return new Ql(t).toPromise()}
function Gp(){
const t=indexedDB.open(Yb,vO);
return new Promise((e,n)=>{
t.addEventListener("error",()=>{
n(t.error)}
),t.addEventListener("upgradeneeded",()=>{
const r=t.result;
try{
r.createObjectStore(bd,{
keyPath:Xb}
)}
catch(i){
n(i)}
}
),t.addEventListener("success",async()=>{
const r=t.result;
r.objectStoreNames.contains(bd)?e(r):(r.close(),await _O(),e(await Gp()))}
)}
)}
async function jv(t,e,n){
const r=sh(t,!0).put({
[Xb]:e,value:n}
);
return new Ql(r).toPromise()}
async function wO(t,e){
const n=sh(t,!1).get(e),r=await new Ql(n).toPromise();
return r===void 0?null:r.value}
function Fv(t,e){
const n=sh(t,!0).delete(e);
return new Ql(n).toPromise()}
const xO=800,bO=3;
class Jb{
constructor(){
this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={
}
,this.localCache={
}
,this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{
}
,()=>{
}
)}
async _openDb(){
return this.db?this.db:(this.db=await Gp(),this.db)}
async _withRetries(e){
let n=0;
for(;
;
)try{
const r=await this._openDb();
return await e(r)}
catch(r){
if(n++>bO)throw r;
this.db&&(this.db.close(),this.db=void 0)}
}
async initializeServiceWorkerMessaging(){
return Qb()?this.initializeReceiver():this.initializeSender()}
async initializeReceiver(){
this.receiver=ih._getInstance(yO()),this.receiver._subscribe("keyChanged",async(e,n)=>({
keyProcessed:(await this._poll()).includes(n.key)}
)),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}
async initializeSender(){
var e,n;
if(this.activeServiceWorker=await mO(),!this.activeServiceWorker)return;
this.sender=new fO(this.activeServiceWorker);
const r=await this.sender._send("ping",{
}
,800);
r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}
async notifyServiceWorker(e){
if(!(!this.sender||!this.activeServiceWorker||gO()!==this.activeServiceWorker))try{
await this.sender._send("keyChanged",{
key:e}
,this.serviceWorkerReceiverAvailable?800:50)}
catch{
}
}
async _isAvailable(){
try{
if(!indexedDB)return!1;
const e=await Gp();
return await jv(e,xd,"1"),await Fv(e,xd),!0}
catch{
}
return!1}
async _withPendingWrite(e){
this.pendingWrites++;
try{
await e()}
finally{
this.pendingWrites--}
}
async _set(e,n){
return this._withPendingWrite(async()=>(await this._withRetries(r=>jv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}
async _get(e){
const n=await this._withRetries(r=>wO(r,e));
return this.localCache[e]=n,n}
async _remove(e){
return this._withPendingWrite(async()=>(await this._withRetries(n=>Fv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}
async _poll(){
const e=await this._withRetries(i=>{
const s=sh(i,!1).getAll();
return new Ql(s).toPromise()}
);
if(!e)return[];
if(this.pendingWrites!==0)return[];
const n=[],r=new Set;
if(e.length!==0)for(const{
fbase_key:i,value:s}
of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));
for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));
return n}
notifyListeners(e,n){
this.localCache[e]=n;
const r=this.listeners[e];
if(r)for(const i of Array.from(r))i(n)}
startPolling(){
this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),xO)}
stopPolling(){
this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}
_addListener(e,n){
Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}
_removeListener(e,n){
this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}
}
Jb.type="LOCAL";
const EO=Jb;
new Hl(3e4,6e4);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TO(t,e){
return e?Fr(e):(ge(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg extends $b{
constructor(e){
super("custom","custom"),this.params=e}
_getIdTokenResponse(e){
return Ao(e,this._buildIdpRequest())}
_linkToIdToken(e,n){
return Ao(e,this._buildIdpRequest(n))}
_getReauthenticationResolver(e){
return Ao(e,this._buildIdpRequest())}
_buildIdpRequest(e){
const n={
requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0}
;
return e&&(n.idToken=e),n}
}
function IO(t){
return sO(t.auth,new Vg(t),t.bypassAuthState)}
function SO(t){
const{
auth:e,user:n}
=t;
return ge(n,e,"internal-error"),iO(n,new Vg(t),t.bypassAuthState)}
async function AO(t){
const{
auth:e,user:n}
=t;
return ge(n,e,"internal-error"),rO(n,new Vg(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zb{
constructor(e,n,r,i,s=!1){
this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}
execute(){
return new Promise(async(e,n)=>{
this.pendingPromise={
resolve:e,reject:n}
;
try{
this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}
catch(r){
this.reject(r)}
}
)}
async onAuthEvent(e){
const{
urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}
=e;
if(o){
this.reject(o);
return}
const c={
auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState}
;
try{
this.resolve(await this.getIdpTask(l)(c))}
catch(u){
this.reject(u)}
}
onError(e){
this.reject(e)}
getIdpTask(e){
switch(e){
case"signInViaPopup":case"signInViaRedirect":return IO;
case"linkViaPopup":case"linkViaRedirect":return AO;
case"reauthViaPopup":case"reauthViaRedirect":return SO;
default:Wr(this.auth,"internal-error")}
}
resolve(e){
Hr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}
reject(e){
Hr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}
unregisterAndCleanUp(){
this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CO=new Hl(2e3,1e4);
class vo extends Zb{
constructor(e,n,r,i,s){
super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,vo.currentPopupAction&&vo.currentPopupAction.cancel(),vo.currentPopupAction=this}
async executeNotNull(){
const e=await this.execute();
return ge(e,this.auth,"internal-error"),e}
async onExecution(){
Hr(this.filter.length===1,"Popup operations only handle one event");
const e=Og();
this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{
this.reject(n)}
),this.resolver._isIframeWebStorageSupported(this.auth,n=>{
n||this.reject(gr(this.auth,"web-storage-unsupported"))}
),this.pollUserCancellation()}
get eventId(){
var e;
return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}
cancel(){
this.reject(gr(this.auth,"cancelled-popup-request"))}
cleanUp(){
this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,vo.currentPopupAction=null}
pollUserCancellation(){
const e=()=>{
var n,r;
if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){
this.pollId=window.setTimeout(()=>{
this.pollId=null,this.reject(gr(this.auth,"popup-closed-by-user"))}
,8e3);
return}
this.pollId=window.setTimeout(e,CO.get())}
;
e()}
}
vo.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kO="pendingRedirect",ku=new Map;
class RO extends Zb{
constructor(e,n,r=!1){
super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}
async execute(){
let e=ku.get(this.auth._key());
if(!e){
try{
const r=await NO(this.resolver,this.auth)?await super.execute():null;
e=()=>Promise.resolve(r)}
catch(n){
e=()=>Promise.reject(n)}
ku.set(this.auth._key(),e)}
return this.bypassAuthState||ku.set(this.auth._key(),()=>Promise.resolve(null)),e()}
async onAuthEvent(e){
if(e.type==="signInViaRedirect")return super.onAuthEvent(e);
if(e.type==="unknown"){
this.resolve(null);
return}
if(e.eventId){
const n=await this.auth._redirectUserForId(e.eventId);
if(n)return this.user=n,super.onAuthEvent(e);
this.resolve(null)}
}
async onExecution(){
}
cleanUp(){
}
}
async function NO(t,e){
const n=OO(e),r=DO(t);
if(!await r._isAvailable())return!1;
const i=await r._get(n)==="true";
return await r._remove(n),i}
function PO(t,e){
ku.set(t._key(),e)}
function DO(t){
return Fr(t._redirectPersistence)}
function OO(t){
return Cu(kO,t.config.apiKey,t.name)}
async function VO(t,e,n=!1){
if(Mr(t.app))return Promise.reject(Li(t));
const r=rh(t),i=TO(r,e),o=await new RO(r,i,n).execute();
return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MO=10*60*1e3;
class LO{
constructor(e){
this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}
registerConsumer(e){
this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}
unregisterConsumer(e){
this.consumers.delete(e)}
onEvent(e){
if(this.hasEventBeenHandled(e))return!1;
let n=!1;
return this.consumers.forEach(r=>{
this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}
),this.hasHandledPotentialRedirect||!jO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}
sendToConsumer(e,n){
var r;
if(e.error&&!eE(e)){
const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";
n.onError(gr(this.auth,i))}
else n.onAuthEvent(e)}
isEventForConsumer(e,n){
const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;
return n.filter.includes(e.type)&&r}
hasEventBeenHandled(e){
return Date.now()-this.lastProcessedEventTime>=MO&&this.cachedEventUids.clear(),this.cachedEventUids.has(Bv(e))}
saveEventToCache(e){
this.cachedEventUids.add(Bv(e)),this.lastProcessedEventTime=Date.now()}
}
function Bv(t){
return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}
function eE({
type:t,error:e}
){
return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}
function jO(t){
switch(t.type){
case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;
case"unknown":return eE(t);
default:return!1}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FO(t,e={
}
){
return ta(t,"GET","/v1/projects",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BO=/^\d{
1,3}
\.\d{
1,3}
\.\d{
1,3}
\.\d{
1,3}
$/,UO=/^https?/;
async function $O(t){
if(t.config.emulator)return;
const{
authorizedDomains:e}
=await FO(t);
for(const n of e)try{
if(zO(n))return}
catch{
}
Wr(t,"unauthorized-domain")}
function zO(t){
const e=zp(),{
protocol:n,hostname:r}
=new URL(e);
if(t.startsWith("chrome-extension://")){
const o=new URL(t);
return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}
if(!UO.test(n))return!1;
if(BO.test(t))return r===t;
const i=t.replace(/\./g,"\\.");
return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qO=new Hl(3e4,6e4);
function Uv(){
const t=yr().___jsl;
if(t!=null&&t.H){
for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;
n<t.CP.length;
n++)t.CP[n]=null}
}
function GO(t){
return new Promise((e,n)=>{
var r,i,s;
function o(){
Uv(),gapi.load("gapi.iframes",{
callback:()=>{
e(gapi.iframes.getContext())}
,ontimeout:()=>{
Uv(),n(gr(t,"network-request-failed"))}
,timeout:qO.get()}
)}
if(!((i=(r=yr().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());
else if(!((s=yr().gapi)===null||s===void 0)&&s.load)o();
else{
const l=KD("iframefcb");
return yr()[l]=()=>{
gapi.load?o():n(gr(t,"network-request-failed"))}
,WD(`${
HD()}
?onload=${
l}
`).catch(c=>n(c))}
}
).catch(e=>{
throw Ru=null,e}
)}
let Ru=null;
function WO(t){
return Ru=Ru||GO(t),Ru}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HO=new Hl(5e3,15e3),KO="__/auth/iframe",QO="emulator/auth/iframe",YO={
style:{
position:"absolute",top:"-100px",width:"1px",height:"1px"}
,"aria-hidden":"true",tabindex:"-1"}
,XO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);
function JO(t){
const e=t.config;
ge(e.authDomain,t,"auth-domain-config-required");
const n=e.emulator?Rg(e,QO):`https://${
t.config.authDomain}
/${
KO}
`,r={
apiKey:e.apiKey,appName:t.name,v:ea}
,i=XO.get(t.config.apiHost);
i&&(r.eid=i);
const s=t._getFrameworks();
return s.length&&(r.fw=s.join(",")),`${
n}
?${
Wl(r).slice(1)}
`}
async function ZO(t){
const e=await WO(t),n=yr().gapi;
return ge(n,t,"internal-error"),e.open({
where:document.body,url:JO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:YO,dontclear:!0}
,r=>new Promise(async(i,s)=>{
await r.restyle({
setHideOnLeave:!1}
);
const o=gr(t,"network-request-failed"),l=yr().setTimeout(()=>{
s(o)}
,HO.get());
function c(){
yr().clearTimeout(l),i(r)}
r.ping(c).then(c,()=>{
s(o)}
)}
))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eV={
location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"}
,tV=500,nV=600,rV="_blank",iV="http://localhost";
class $v{
constructor(e){
this.window=e,this.associatedEvent=null}
close(){
if(this.window)try{
this.window.close()}
catch{
}
}
}
function sV(t,e,n,r=tV,i=nV){
const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();
let l="";
const c=Object.assign(Object.assign({
}
,eV),{
width:r.toString(),height:i.toString(),top:s,left:o}
),u=Jt().toLowerCase();
n&&(l=Ob(u)?rV:n),Pb(u)&&(e=e||iV,c.scrollbars="yes");
const d=Object.entries(c).reduce((g,[_,w])=>`${
g}
${
_}
=${
w}
,`,"");
if(jD(u)&&l!=="_self")return oV(e||"",l),new $v(null);
const m=window.open(e||"",l,d);
ge(m,t,"popup-blocked");
try{
m.focus()}
catch{
}
return new $v(m)}
function oV(t,e){
const n=document.createElement("a");
n.href=t,n.target=e;
const r=document.createEvent("MouseEvent");
r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aV="__/auth/handler",lV="emulator/auth/handler",cV=encodeURIComponent("fac");
async function zv(t,e,n,r,i,s){
ge(t.config.authDomain,t,"auth-domain-config-required"),ge(t.config.apiKey,t,"invalid-api-key");
const o={
apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ea,eventId:i}
;
if(e instanceof zb){
e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",cP(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));
for(const[d,m]of Object.entries(s||{
}
))o[d]=m}
if(e instanceof Kl){
const d=e.getScopes().filter(m=>m!=="");
d.length>0&&(o.scopes=d.join(","))}
t.tenantId&&(o.tid=t.tenantId);
const l=o;
for(const d of Object.keys(l))l[d]===void 0&&delete l[d];
const c=await t._getAppCheckToken(),u=c?`#${
cV}
=${
encodeURIComponent(c)}
`:"";
return`${
uV(t)}
?${
Wl(l).slice(1)}
${
u}
`}
function uV({
config:t}
){
return t.emulator?Rg(t,lV):`https://${
t.authDomain}
/${
aV}
`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rf="webStorageSupport";
class dV{
constructor(){
this.eventManagers={
}
,this.iframes={
}
,this.originValidationPromises={
}
,this._redirectPersistence=Kb,this._completeRedirectFn=VO,this._overrideRedirectResult=PO}
async _openPopup(e,n,r,i){
var s;
Hr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");
const o=await zv(e,n,r,zp(),i);
return sV(e,o,Og())}
async _openRedirect(e,n,r,i){
await this._originValidation(e);
const s=await zv(e,n,r,zp(),i);
return pO(s),new Promise(()=>{
}
)}
_initialize(e){
const n=e._key();
if(this.eventManagers[n]){
const{
manager:i,promise:s}
=this.eventManagers[n];
return i?Promise.resolve(i):(Hr(s,"If manager is not set, promise should be"),s)}
const r=this.initAndGetManager(e);
return this.eventManagers[n]={
promise:r}
,r.catch(()=>{
delete this.eventManagers[n]}
),r}
async initAndGetManager(e){
const n=await ZO(e),r=new LO(e);
return n.register("authEvent",i=>(ge(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{
status:r.onEvent(i.authEvent)?"ACK":"ERROR"}
),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={
manager:r}
,this.iframes[e._key()]=n,r}
_isIframeWebStorageSupported(e,n){
this.iframes[e._key()].send(Rf,{
type:Rf}
,i=>{
var s;
const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Rf];
o!==void 0&&n(!!o),Wr(e,"internal-error")}
,gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}
_originValidation(e){
const n=e._key();
return this.originValidationPromises[n]||(this.originValidationPromises[n]=$O(e)),this.originValidationPromises[n]}
get _shouldInitProactively(){
return Fb()||Db()||Pg()}
}
const hV=dV;
var qv="@firebase/auth",Gv="1.7.9";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fV{
constructor(e){
this.auth=e,this.internalListeners=new Map}
getUid(){
var e;
return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}
async getToken(e){
return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{
accessToken:await this.auth.currentUser.getIdToken(e)}
:null}
addAuthTokenListener(e){
if(this.assertAuthConfigured(),this.internalListeners.has(e))return;
const n=this.auth.onIdTokenChanged(r=>{
e((r==null?void 0:r.stsTokenManager.accessToken)||null)}
);
this.internalListeners.set(e,n),this.updateProactiveRefresh()}
removeAuthTokenListener(e){
this.assertAuthConfigured();
const n=this.internalListeners.get(e);
n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}
assertAuthConfigured(){
ge(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}
updateProactiveRefresh(){
this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pV(t){
switch(t){
case"Node":return"node";
case"ReactNative":return"rn";
case"Worker":return"webworker";
case"Cordova":return"cordova";
case"WebExtension":return"web-extension";
default:return}
}
function mV(t){
Bo(new Rs("auth",(e,{
options:n}
)=>{
const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{
apiKey:o,authDomain:l}
=r.options;
ge(o&&!o.includes(":"),"invalid-api-key",{
appName:r.name}
);
const c={
apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Bb(t)}
,u=new qD(r,i,s,c);
return YD(u,n),u}
,"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{
e.getProvider("auth-internal").initialize()}
)),Bo(new Rs("auth-internal",e=>{
const n=rh(e.getProvider("auth").getImmediate());
return(r=>new fV(r))(n)}
,"PRIVATE").setInstantiationMode("EXPLICIT")),Mi(qv,Gv,pV(t)),Mi(qv,Gv,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gV=5*60,yV=mb("authIdTokenMaxAge")||gV;
let Wv=null;
const vV=t=>async e=>{
const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;
if(r&&r>yV)return;
const i=n==null?void 0:n.token;
Wv!==i&&(Wv=i,await fetch(t,{
method:i?"POST":"DELETE",headers:i?{
Authorization:`Bearer ${
i}
`}
:{
}
}
))}
;
function _V(t=_b()){
const e=Ag(t,"auth");
if(e.isInitialized())return e.getImmediate();
const n=QD(t,{
popupRedirectResolver:hV,persistence:[EO,dO,Kb]}
),r=mb("authTokenSyncURL");
if(r&&typeof isSecureContext=="boolean"&&isSecureContext){
const s=new URL(r,location.origin);
if(location.origin===s.origin){
const o=vV(s.toString());
aO(n,o,()=>o(n.currentUser)),oO(n,l=>o(l))}
}
const i=fb("auth");
return i&&XD(n,`http://${
i}
`),n}
function wV(){
var t,e;
return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}
GD({
loadJS(t){
return new Promise((e,n)=>{
const r=document.createElement("script");
r.setAttribute("src",t),r.onload=e,r.onerror=i=>{
const s=gr("internal-error");
s.customData=i,n(s)}
,r.type="text/javascript",r.charset="UTF-8",wV().appendChild(r)}
)}
,gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="}
);
mV("Browser");
var Hv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{
}
;
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Es,tE;
(function(){
var t;
/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(S,b){
function A(){
}
A.prototype=b.prototype,S.D=b.prototype,S.prototype=new A,S.prototype.constructor=S,S.C=function(C,V,L){
for(var R=Array(arguments.length-2),We=2;
We<arguments.length;
We++)R[We-2]=arguments[We];
return b.prototype[V].apply(C,R)}
}
function n(){
this.blockSize=-1}
function r(){
this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}
e(r,n),r.prototype.s=function(){
this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0}
;
function i(S,b,A){
A||(A=0);
var C=Array(16);
if(typeof b=="string")for(var V=0;
16>V;
++V)C[V]=b.charCodeAt(A++)|b.charCodeAt(A++)<<8|b.charCodeAt(A++)<<16|b.charCodeAt(A++)<<24;
else for(V=0;
16>V;
++V)C[V]=b[A++]|b[A++]<<8|b[A++]<<16|b[A++]<<24;
b=S.g[0],A=S.g[1],V=S.g[2];
var L=S.g[3],R=b+(L^A&(V^L))+C[0]+3614090360&4294967295;
b=A+(R<<7&4294967295|R>>>25),R=L+(V^b&(A^V))+C[1]+3905402710&4294967295,L=b+(R<<12&4294967295|R>>>20),R=V+(A^L&(b^A))+C[2]+606105819&4294967295,V=L+(R<<17&4294967295|R>>>15),R=A+(b^V&(L^b))+C[3]+3250441966&4294967295,A=V+(R<<22&4294967295|R>>>10),R=b+(L^A&(V^L))+C[4]+4118548399&4294967295,b=A+(R<<7&4294967295|R>>>25),R=L+(V^b&(A^V))+C[5]+1200080426&4294967295,L=b+(R<<12&4294967295|R>>>20),R=V+(A^L&(b^A))+C[6]+2821735955&4294967295,V=L+(R<<17&4294967295|R>>>15),R=A+(b^V&(L^b))+C[7]+4249261313&4294967295,A=V+(R<<22&4294967295|R>>>10),R=b+(L^A&(V^L))+C[8]+1770035416&4294967295,b=A+(R<<7&4294967295|R>>>25),R=L+(V^b&(A^V))+C[9]+2336552879&4294967295,L=b+(R<<12&4294967295|R>>>20),R=V+(A^L&(b^A))+C[10]+4294925233&4294967295,V=L+(R<<17&4294967295|R>>>15),R=A+(b^V&(L^b))+C[11]+2304563134&4294967295,A=V+(R<<22&4294967295|R>>>10),R=b+(L^A&(V^L))+C[12]+1804603682&4294967295,b=A+(R<<7&4294967295|R>>>25),R=L+(V^b&(A^V))+C[13]+4254626195&4294967295,L=b+(R<<12&4294967295|R>>>20),R=V+(A^L&(b^A))+C[14]+2792965006&4294967295,V=L+(R<<17&4294967295|R>>>15),R=A+(b^V&(L^b))+C[15]+1236535329&4294967295,A=V+(R<<22&4294967295|R>>>10),R=b+(V^L&(A^V))+C[1]+4129170786&4294967295,b=A+(R<<5&4294967295|R>>>27),R=L+(A^V&(b^A))+C[6]+3225465664&4294967295,L=b+(R<<9&4294967295|R>>>23),R=V+(b^A&(L^b))+C[11]+643717713&4294967295,V=L+(R<<14&4294967295|R>>>18),R=A+(L^b&(V^L))+C[0]+3921069994&4294967295,A=V+(R<<20&4294967295|R>>>12),R=b+(V^L&(A^V))+C[5]+3593408605&4294967295,b=A+(R<<5&4294967295|R>>>27),R=L+(A^V&(b^A))+C[10]+38016083&4294967295,L=b+(R<<9&4294967295|R>>>23),R=V+(b^A&(L^b))+C[15]+3634488961&4294967295,V=L+(R<<14&4294967295|R>>>18),R=A+(L^b&(V^L))+C[4]+3889429448&4294967295,A=V+(R<<20&4294967295|R>>>12),R=b+(V^L&(A^V))+C[9]+568446438&4294967295,b=A+(R<<5&4294967295|R>>>27),R=L+(A^V&(b^A))+C[14]+3275163606&4294967295,L=b+(R<<9&4294967295|R>>>23),R=V+(b^A&(L^b))+C[3]+4107603335&4294967295,V=L+(R<<14&4294967295|R>>>18),R=A+(L^b&(V^L))+C[8]+1163531501&4294967295,A=V+(R<<20&4294967295|R>>>12),R=b+(V^L&(A^V))+C[13]+2850285829&4294967295,b=A+(R<<5&4294967295|R>>>27),R=L+(A^V&(b^A))+C[2]+4243563512&4294967295,L=b+(R<<9&4294967295|R>>>23),R=V+(b^A&(L^b))+C[7]+1735328473&4294967295,V=L+(R<<14&4294967295|R>>>18),R=A+(L^b&(V^L))+C[12]+2368359562&4294967295,A=V+(R<<20&4294967295|R>>>12),R=b+(A^V^L)+C[5]+4294588738&4294967295,b=A+(R<<4&4294967295|R>>>28),R=L+(b^A^V)+C[8]+2272392833&4294967295,L=b+(R<<11&4294967295|R>>>21),R=V+(L^b^A)+C[11]+1839030562&4294967295,V=L+(R<<16&4294967295|R>>>16),R=A+(V^L^b)+C[14]+4259657740&4294967295,A=V+(R<<23&4294967295|R>>>9),R=b+(A^V^L)+C[1]+2763975236&4294967295,b=A+(R<<4&4294967295|R>>>28),R=L+(b^A^V)+C[4]+1272893353&4294967295,L=b+(R<<11&4294967295|R>>>21),R=V+(L^b^A)+C[7]+4139469664&4294967295,V=L+(R<<16&4294967295|R>>>16),R=A+(V^L^b)+C[10]+3200236656&4294967295,A=V+(R<<23&4294967295|R>>>9),R=b+(A^V^L)+C[13]+681279174&4294967295,b=A+(R<<4&4294967295|R>>>28),R=L+(b^A^V)+C[0]+3936430074&4294967295,L=b+(R<<11&4294967295|R>>>21),R=V+(L^b^A)+C[3]+3572445317&4294967295,V=L+(R<<16&4294967295|R>>>16),R=A+(V^L^b)+C[6]+76029189&4294967295,A=V+(R<<23&4294967295|R>>>9),R=b+(A^V^L)+C[9]+3654602809&4294967295,b=A+(R<<4&4294967295|R>>>28),R=L+(b^A^V)+C[12]+3873151461&4294967295,L=b+(R<<11&4294967295|R>>>21),R=V+(L^b^A)+C[15]+530742520&4294967295,V=L+(R<<16&4294967295|R>>>16),R=A+(V^L^b)+C[2]+3299628645&4294967295,A=V+(R<<23&4294967295|R>>>9),R=b+(V^(A|~L))+C[0]+4096336452&4294967295,b=A+(R<<6&4294967295|R>>>26),R=L+(A^(b|~V))+C[7]+1126891415&4294967295,L=b+(R<<10&4294967295|R>>>22),R=V+(b^(L|~A))+C[14]+2878612391&4294967295,V=L+(R<<15&4294967295|R>>>17),R=A+(L^(V|~b))+C[5]+4237533241&4294967295,A=V+(R<<21&4294967295|R>>>11),R=b+(V^(A|~L))+C[12]+1700485571&4294967295,b=A+(R<<6&4294967295|R>>>26),R=L+(A^(b|~V))+C[3]+2399980690&4294967295,L=b+(R<<10&4294967295|R>>>22),R=V+(b^(L|~A))+C[10]+4293915773&4294967295,V=L+(R<<15&4294967295|R>>>17),R=A+(L^(V|~b))+C[1]+2240044497&4294967295,A=V+(R<<21&4294967295|R>>>11),R=b+(V^(A|~L))+C[8]+1873313359&4294967295,b=A+(R<<6&4294967295|R>>>26),R=L+(A^(b|~V))+C[15]+4264355552&4294967295,L=b+(R<<10&4294967295|R>>>22),R=V+(b^(L|~A))+C[6]+2734768916&4294967295,V=L+(R<<15&4294967295|R>>>17),R=A+(L^(V|~b))+C[13]+1309151649&4294967295,A=V+(R<<21&4294967295|R>>>11),R=b+(V^(A|~L))+C[4]+4149444226&4294967295,b=A+(R<<6&4294967295|R>>>26),R=L+(A^(b|~V))+C[11]+3174756917&4294967295,L=b+(R<<10&4294967295|R>>>22),R=V+(b^(L|~A))+C[2]+718787259&4294967295,V=L+(R<<15&4294967295|R>>>17),R=A+(L^(V|~b))+C[9]+3951481745&4294967295,S.g[0]=S.g[0]+b&4294967295,S.g[1]=S.g[1]+(V+(R<<21&4294967295|R>>>11))&4294967295,S.g[2]=S.g[2]+V&4294967295,S.g[3]=S.g[3]+L&4294967295}
r.prototype.u=function(S,b){
b===void 0&&(b=S.length);
for(var A=b-this.blockSize,C=this.B,V=this.h,L=0;
L<b;
){
if(V==0)for(;
L<=A;
)i(this,S,L),L+=this.blockSize;
if(typeof S=="string"){
for(;
L<b;
)if(C[V++]=S.charCodeAt(L++),V==this.blockSize){
i(this,C),V=0;
break}
}
else for(;
L<b;
)if(C[V++]=S[L++],V==this.blockSize){
i(this,C),V=0;
break}
}
this.h=V,this.o+=b}
,r.prototype.v=function(){
var S=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);
S[0]=128;
for(var b=1;
b<S.length-8;
++b)S[b]=0;
var A=8*this.o;
for(b=S.length-8;
b<S.length;
++b)S[b]=A&255,A/=256;
for(this.u(S),S=Array(16),b=A=0;
4>b;
++b)for(var C=0;
32>C;
C+=8)S[A++]=this.g[b]>>>C&255;
return S}
;
function s(S,b){
var A=l;
return Object.prototype.hasOwnProperty.call(A,S)?A[S]:A[S]=b(S)}
function o(S,b){
this.h=b;
for(var A=[],C=!0,V=S.length-1;
0<=V;
V--){
var L=S[V]|0;
C&&L==b||(A[V]=L,C=!1)}
this.g=A}
var l={
}
;
function c(S){
return-128<=S&&128>S?s(S,function(b){
return new o([b|0],0>b?-1:0)}
):new o([S|0],0>S?-1:0)}
function u(S){
if(isNaN(S)||!isFinite(S))return m;
if(0>S)return O(u(-S));
for(var b=[],A=1,C=0;
S>=A;
C++)b[C]=S/A|0,A*=4294967296;
return new o(b,0)}
function d(S,b){
if(S.length==0)throw Error("number format error: empty string");
if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);
if(S.charAt(0)=="-")return O(d(S.substring(1),b));
if(0<=S.indexOf("-"))throw Error('number format error: interior "-" character');
for(var A=u(Math.pow(b,8)),C=m,V=0;
V<S.length;
V+=8){
var L=Math.min(8,S.length-V),R=parseInt(S.substring(V,V+L),b);
8>L?(L=u(Math.pow(b,L)),C=C.j(L).add(u(R))):(C=C.j(A),C=C.add(u(R)))}
return C}
var m=c(0),g=c(1),_=c(16777216);
t=o.prototype,t.m=function(){
if(N(this))return-O(this).m();
for(var S=0,b=1,A=0;
A<this.g.length;
A++){
var C=this.i(A);
S+=(0<=C?C:4294967296+C)*b,b*=4294967296}
return S}
,t.toString=function(S){
if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);
if(w(this))return"0";
if(N(this))return"-"+O(this).toString(S);
for(var b=u(Math.pow(S,6)),A=this,C="";
;
){
var V=M(A,b).g;
A=I(A,V.j(b));
var L=((0<A.g.length?A.g[0]:A.h)>>>0).toString(S);
if(A=V,w(A))return L+C;
for(;
6>L.length;
)L="0"+L;
C=L+C}
}
,t.i=function(S){
return 0>S?0:S<this.g.length?this.g[S]:this.h}
;
function w(S){
if(S.h!=0)return!1;
for(var b=0;
b<S.g.length;
b++)if(S.g[b]!=0)return!1;
return!0}
function N(S){
return S.h==-1}
t.l=function(S){
return S=I(this,S),N(S)?-1:w(S)?0:1}
;
function O(S){
for(var b=S.g.length,A=[],C=0;
C<b;
C++)A[C]=~S.g[C];
return new o(A,~S.h).add(g)}
t.abs=function(){
return N(this)?O(this):this}
,t.add=function(S){
for(var b=Math.max(this.g.length,S.g.length),A=[],C=0,V=0;
V<=b;
V++){
var L=C+(this.i(V)&65535)+(S.i(V)&65535),R=(L>>>16)+(this.i(V)>>>16)+(S.i(V)>>>16);
C=R>>>16,L&=65535,R&=65535,A[V]=R<<16|L}
return new o(A,A[A.length-1]&-2147483648?-1:0)}
;
function I(S,b){
return S.add(O(b))}
t.j=function(S){
if(w(this)||w(S))return m;
if(N(this))return N(S)?O(this).j(O(S)):O(O(this).j(S));
if(N(S))return O(this.j(O(S)));
if(0>this.l(_)&&0>S.l(_))return u(this.m()*S.m());
for(var b=this.g.length+S.g.length,A=[],C=0;
C<2*b;
C++)A[C]=0;
for(C=0;
C<this.g.length;
C++)for(var V=0;
V<S.g.length;
V++){
var L=this.i(C)>>>16,R=this.i(C)&65535,We=S.i(V)>>>16,lt=S.i(V)&65535;
A[2*C+2*V]+=R*lt,E(A,2*C+2*V),A[2*C+2*V+1]+=L*lt,E(A,2*C+2*V+1),A[2*C+2*V+1]+=R*We,E(A,2*C+2*V+1),A[2*C+2*V+2]+=L*We,E(A,2*C+2*V+2)}
for(C=0;
C<b;
C++)A[C]=A[2*C+1]<<16|A[2*C];
for(C=b;
C<2*b;
C++)A[C]=0;
return new o(A,0)}
;
function E(S,b){
for(;
(S[b]&65535)!=S[b];
)S[b+1]+=S[b]>>>16,S[b]&=65535,b++}
function k(S,b){
this.g=S,this.h=b}
function M(S,b){
if(w(b))throw Error("division by zero");
if(w(S))return new k(m,m);
if(N(S))return b=M(O(S),b),new k(O(b.g),O(b.h));
if(N(b))return b=M(S,O(b)),new k(O(b.g),b.h);
if(30<S.g.length){
if(N(S)||N(b))throw Error("slowDivide_ only works with positive integers.");
for(var A=g,C=b;
0>=C.l(S);
)A=G(A),C=G(C);
var V=q(A,1),L=q(C,1);
for(C=q(C,2),A=q(A,2);
!w(C);
){
var R=L.add(C);
0>=R.l(S)&&(V=V.add(A),L=R),C=q(C,1),A=q(A,1)}
return b=I(S,V.j(b)),new k(V,b)}
for(V=m;
0<=S.l(b);
){
for(A=Math.max(1,Math.floor(S.m()/b.m())),C=Math.ceil(Math.log(A)/Math.LN2),C=48>=C?1:Math.pow(2,C-48),L=u(A),R=L.j(b);
N(R)||0<R.l(S);
)A-=C,L=u(A),R=L.j(b);
w(L)&&(L=g),V=V.add(L),S=I(S,R)}
return new k(V,S)}
t.A=function(S){
return M(this,S).h}
,t.and=function(S){
for(var b=Math.max(this.g.length,S.g.length),A=[],C=0;
C<b;
C++)A[C]=this.i(C)&S.i(C);
return new o(A,this.h&S.h)}
,t.or=function(S){
for(var b=Math.max(this.g.length,S.g.length),A=[],C=0;
C<b;
C++)A[C]=this.i(C)|S.i(C);
return new o(A,this.h|S.h)}
,t.xor=function(S){
for(var b=Math.max(this.g.length,S.g.length),A=[],C=0;
C<b;
C++)A[C]=this.i(C)^S.i(C);
return new o(A,this.h^S.h)}
;
function G(S){
for(var b=S.g.length+1,A=[],C=0;
C<b;
C++)A[C]=S.i(C)<<1|S.i(C-1)>>>31;
return new o(A,S.h)}
function q(S,b){
var A=b>>5;
b%=32;
for(var C=S.g.length-A,V=[],L=0;
L<C;
L++)V[L]=0<b?S.i(L+A)>>>b|S.i(L+A+1)<<32-b:S.i(L+A);
return new o(V,S.h)}
r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,tE=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,Es=o}
).apply(typeof Hv<"u"?Hv:typeof self<"u"?self:typeof window<"u"?window:{
}
);
var lu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{
}
;
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var nE,Fa,rE,Nu,Wp,iE,sE,oE;
(function(){
var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,f,v){
return a==Array.prototype||a==Object.prototype||(a[f]=v.value),a}
;
function n(a){
a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof lu=="object"&&lu];
for(var f=0;
f<a.length;
++f){
var v=a[f];
if(v&&v.Math==Math)return v}
throw Error("Cannot find global object")}
var r=n(this);
function i(a,f){
if(f)e:{
var v=r;
a=a.split(".");
for(var x=0;
x<a.length-1;
x++){
var F=a[x];
if(!(F in v))break e;
v=v[F]}
a=a[a.length-1],x=v[a],f=f(x),f!=x&&f!=null&&e(v,a,{
configurable:!0,writable:!0,value:f}
)}
}
function s(a,f){
a instanceof String&&(a+="");
var v=0,x=!1,F={
next:function(){
if(!x&&v<a.length){
var $=v++;
return{
value:f($,a[$]),done:!1}
}
return x=!0,{
done:!0,value:void 0}
}
}
;
return F[Symbol.iterator]=function(){
return F}
,F}
i("Array.prototype.values",function(a){
return a||function(){
return s(this,function(f,v){
return v}
)}
}
);
/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{
}
,l=this||self;
function c(a){
var f=typeof a;
return f=f!="object"?f:a?Array.isArray(a)?"array":f:"null",f=="array"||f=="object"&&typeof a.length=="number"}
function u(a){
var f=typeof a;
return f=="object"&&a!=null||f=="function"}
function d(a,f,v){
return a.call.apply(a.bind,arguments)}
function m(a,f,v){
if(!a)throw Error();
if(2<arguments.length){
var x=Array.prototype.slice.call(arguments,2);
return function(){
var F=Array.prototype.slice.call(arguments);
return Array.prototype.unshift.apply(F,x),a.apply(f,F)}
}
return function(){
return a.apply(f,arguments)}
}
function g(a,f,v){
return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:m,g.apply(null,arguments)}
function _(a,f){
var v=Array.prototype.slice.call(arguments,1);
return function(){
var x=v.slice();
return x.push.apply(x,arguments),a.apply(this,x)}
}
function w(a,f){
function v(){
}
v.prototype=f.prototype,a.aa=f.prototype,a.prototype=new v,a.prototype.constructor=a,a.Qb=function(x,F,$){
for(var Z=Array(arguments.length-2),Ge=2;
Ge<arguments.length;
Ge++)Z[Ge-2]=arguments[Ge];
return f.prototype[F].apply(x,Z)}
}
function N(a){
const f=a.length;
if(0<f){
const v=Array(f);
for(let x=0;
x<f;
x++)v[x]=a[x];
return v}
return[]}
function O(a,f){
for(let v=1;
v<arguments.length;
v++){
const x=arguments[v];
if(c(x)){
const F=a.length||0,$=x.length||0;
a.length=F+$;
for(let Z=0;
Z<$;
Z++)a[F+Z]=x[Z]}
else a.push(x)}
}
class I{
constructor(f,v){
this.i=f,this.j=v,this.h=0,this.g=null}
get(){
let f;
return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}
}
function E(a){
return/^[\s\xa0]*$/.test(a)}
function k(){
var a=l.navigator;
return a&&(a=a.userAgent)?a:""}
function M(a){
return M[" "](a),a}
M[" "]=function(){
}
;
var G=k().indexOf("Gecko")!=-1&&!(k().toLowerCase().indexOf("webkit")!=-1&&k().indexOf("Edge")==-1)&&!(k().indexOf("Trident")!=-1||k().indexOf("MSIE")!=-1)&&k().indexOf("Edge")==-1;
function q(a,f,v){
for(const x in a)f.call(v,a[x],x,a)}
function S(a,f){
for(const v in a)f.call(void 0,a[v],v,a)}
function b(a){
const f={
}
;
for(const v in a)f[v]=a[v];
return f}
const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function C(a,f){
let v,x;
for(let F=1;
F<arguments.length;
F++){
x=arguments[F];
for(v in x)a[v]=x[v];
for(let $=0;
$<A.length;
$++)v=A[$],Object.prototype.hasOwnProperty.call(x,v)&&(a[v]=x[v])}
}
function V(a){
var f=1;
a=a.split(":");
const v=[];
for(;
0<f&&a.length;
)v.push(a.shift()),f--;
return a.length&&v.push(a.join(":")),v}
function L(a){
l.setTimeout(()=>{
throw a}
,0)}
function R(){
var a=ae;
let f=null;
return a.g&&(f=a.g,a.g=a.g.next,a.g||(a.h=null),f.next=null),f}
class We{
constructor(){
this.h=this.g=null}
add(f,v){
const x=lt.get();
x.set(f,v),this.h?this.h.next=x:this.g=x,this.h=x}
}
var lt=new I(()=>new nr,a=>a.reset());
class nr{
constructor(){
this.next=this.g=this.h=null}
set(f,v){
this.h=f,this.g=v,this.next=null}
reset(){
this.next=this.g=this.h=null}
}
let Ft,J=!1,ae=new We,ue=()=>{
const a=l.Promise.resolve(void 0);
Ft=()=>{
a.then(Le)}
}
;
var Le=()=>{
for(var a;
a=R();
){
try{
a.h.call(a.g)}
catch(v){
L(v)}
var f=lt;
f.j(a),100>f.h&&(f.h++,a.next=f.g,f.g=a)}
J=!1}
;
function pe(){
this.s=this.s,this.C=this.C}
pe.prototype.s=!1,pe.prototype.ma=function(){
this.s||(this.s=!0,this.N())}
,pe.prototype.N=function(){
if(this.C)for(;
this.C.length;
)this.C.shift()()}
;
function Ee(a,f){
this.type=a,this.g=this.target=f,this.defaultPrevented=!1}
Ee.prototype.h=function(){
this.defaultPrevented=!0}
;
var kt=function(){
if(!l.addEventListener||!Object.defineProperty)return!1;
var a=!1,f=Object.defineProperty({
}
,"passive",{
get:function(){
a=!0}
}
);
try{
const v=()=>{
}
;
l.addEventListener("test",v,f),l.removeEventListener("test",v,f)}
catch{
}
return a}
();
function Bt(a,f){
if(Ee.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){
var v=this.type=a.type,x=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;
if(this.target=a.target||a.srcElement,this.g=f,f=a.relatedTarget){
if(G){
e:{
try{
M(f.nodeName);
var F=!0;
break e}
catch{
}
F=!1}
F||(f=null)}
}
else v=="mouseover"?f=a.fromElement:v=="mouseout"&&(f=a.toElement);
this.relatedTarget=f,x?(this.clientX=x.clientX!==void 0?x.clientX:x.pageX,this.clientY=x.clientY!==void 0?x.clientY:x.pageY,this.screenX=x.screenX||0,this.screenY=x.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:ht[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Bt.aa.h.call(this)}
}
w(Bt,Ee);
var ht={
2:"touch",3:"pen",4:"mouse"}
;
Bt.prototype.h=function(){
Bt.aa.h.call(this);
var a=this.i;
a.preventDefault?a.preventDefault():a.returnValue=!1}
;
var Ut="closure_listenable_"+(1e6*Math.random()|0),xr=0;
function Zr(a,f,v,x,F){
this.listener=a,this.proxy=null,this.src=f,this.type=v,this.capture=!!x,this.ha=F,this.key=++xr,this.da=this.fa=!1}
function et(a){
a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}
function ei(a){
this.src=a,this.g={
}
,this.h=0}
ei.prototype.add=function(a,f,v,x,F){
var $=a.toString();
a=this.g[$],a||(a=this.g[$]=[],this.h++);
var Z=Un(a,f,x,F);
return-1<Z?(f=a[Z],v||(f.fa=!1)):(f=new Zr(f,this.src,$,!!x,F),f.fa=v,a.push(f)),f}
;
function Fe(a,f){
var v=f.type;
if(v in a.g){
var x=a.g[v],F=Array.prototype.indexOf.call(x,f,void 0),$;
($=0<=F)&&Array.prototype.splice.call(x,F,1),$&&(et(f),a.g[v].length==0&&(delete a.g[v],a.h--))}
}
function Un(a,f,v,x){
for(var F=0;
F<a.length;
++F){
var $=a[F];
if(!$.da&&$.listener==f&&$.capture==!!v&&$.ha==x)return F}
return-1}
var rr="closure_lm_"+(1e6*Math.random()|0),Bs={
}
;
function Ce(a,f,v,x,F){
if(x&&x.once)return lc(a,f,v,x,F);
if(Array.isArray(f)){
for(var $=0;
$<f.length;
$++)Ce(a,f[$],v,x,F);
return null}
return v=aa(v),a&&a[Ut]?a.K(f,v,u(x)?!!x.capture:!!x,F):ac(a,f,v,!1,x,F)}
function ac(a,f,v,x,F,$){
if(!f)throw Error("Invalid event type");
var Z=u(F)?!!F.capture:!!F,Ge=ti(a);
if(Ge||(a[rr]=Ge=new ei(a)),v=Ge.add(f,v,x,Z,$),v.proxy)return v;
if(x=$n(),v.proxy=x,x.src=a,x.listener=v,a.addEventListener)kt||(F=Z),F===void 0&&(F=!1),a.addEventListener(f.toString(),x,F);
else if(a.attachEvent)a.attachEvent(oa(f.toString()),x);
else if(a.addListener&&a.removeListener)a.addListener(x);
else throw Error("addEventListener and attachEvent are unavailable.");
return v}
function $n(){
function a(v){
return f.call(a.src,a.listener,v)}
const f=wh;
return a}
function lc(a,f,v,x,F){
if(Array.isArray(f)){
for(var $=0;
$<f.length;
$++)lc(a,f[$],v,x,F);
return null}
return v=aa(v),a&&a[Ut]?a.L(f,v,u(x)?!!x.capture:!!x,F):ac(a,f,v,!0,x,F)}
function Xi(a,f,v,x,F){
if(Array.isArray(f))for(var $=0;
$<f.length;
$++)Xi(a,f[$],v,x,F);
else x=u(x)?!!x.capture:!!x,v=aa(v),a&&a[Ut]?(a=a.i,f=String(f).toString(),f in a.g&&($=a.g[f],v=Un($,v,x,F),-1<v&&(et($[v]),Array.prototype.splice.call($,v,1),$.length==0&&(delete a.g[f],a.h--)))):a&&(a=ti(a))&&(f=a.g[f.toString()],a=-1,f&&(a=Un(f,v,x,F)),(v=-1<a?f[a]:null)&&sa(v))}
function sa(a){
if(typeof a!="number"&&a&&!a.da){
var f=a.src;
if(f&&f[Ut])Fe(f.i,a);
else{
var v=a.type,x=a.proxy;
f.removeEventListener?f.removeEventListener(v,x,a.capture):f.detachEvent?f.detachEvent(oa(v),x):f.addListener&&f.removeListener&&f.removeListener(x),(v=ti(f))?(Fe(v,a),v.h==0&&(v.src=null,f[rr]=null)):et(a)}
}
}
function oa(a){
return a in Bs?Bs[a]:Bs[a]="on"+a}
function wh(a,f){
if(a.da)a=!0;
else{
f=new Bt(f,this);
var v=a.listener,x=a.ha||a.src;
a.fa&&sa(a),a=v.call(x,f)}
return a}
function ti(a){
return a=a[rr],a instanceof ei?a:null}
var Ji="__closure_events_fn_"+(1e9*Math.random()>>>0);
function aa(a){
return typeof a=="function"?a:(a[Ji]||(a[Ji]=function(f){
return a.handleEvent(f)}
),a[Ji])}
function ft(){
pe.call(this),this.i=new ei(this),this.M=this,this.F=null}
w(ft,pe),ft.prototype[Ut]=!0,ft.prototype.removeEventListener=function(a,f,v,x){
Xi(this,a,f,v,x)}
;
function $e(a,f){
var v,x=a.F;
if(x)for(v=[];
x;
x=x.F)v.push(x);
if(a=a.M,x=f.type||f,typeof f=="string")f=new Ee(f,a);
else if(f instanceof Ee)f.target=f.target||a;
else{
var F=f;
f=new Ee(x,a),C(f,F)}
if(F=!0,v)for(var $=v.length-1;
0<=$;
$--){
var Z=f.g=v[$];
F=br(Z,x,!0,f)&&F}
if(Z=f.g=a,F=br(Z,x,!0,f)&&F,F=br(Z,x,!1,f)&&F,v)for($=0;
$<v.length;
$++)Z=f.g=v[$],F=br(Z,x,!1,f)&&F}
ft.prototype.N=function(){
if(ft.aa.N.call(this),this.i){
var a=this.i,f;
for(f in a.g){
for(var v=a.g[f],x=0;
x<v.length;
x++)et(v[x]);
delete a.g[f],a.h--}
}
this.F=null}
,ft.prototype.K=function(a,f,v,x){
return this.i.add(String(a),f,!1,v,x)}
,ft.prototype.L=function(a,f,v,x){
return this.i.add(String(a),f,!0,v,x)}
;
function br(a,f,v,x){
if(f=a.i.g[String(f)],!f)return!0;
f=f.concat();
for(var F=!0,$=0;
$<f.length;
++$){
var Z=f[$];
if(Z&&!Z.da&&Z.capture==v){
var Ge=Z.listener,Rt=Z.ha||Z.src;
Z.fa&&Fe(a.i,Z),F=Ge.call(Rt,x)!==!1&&F}
}
return F&&!x.defaultPrevented}
function cc(a,f,v){
if(typeof a=="function")v&&(a=g(a,v));
else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);
else throw Error("Invalid listener argument");
return 2147483647<Number(f)?-1:l.setTimeout(a,f||0)}
function la(a){
a.g=cc(()=>{
a.g=null,a.i&&(a.i=!1,la(a))}
,a.l);
const f=a.h;
a.h=null,a.m.apply(null,f)}
class ze extends pe{
constructor(f,v){
super(),this.m=f,this.l=v,this.h=null,this.i=!1,this.g=null}
j(f){
this.h=arguments,this.g?this.i=!0:la(this)}
N(){
super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}
}
function $t(a){
pe.call(this),this.h=a,this.g={
}
}
w($t,pe);
var Zi=[];
function uc(a){
q(a.g,function(f,v){
this.g.hasOwnProperty(v)&&sa(f)}
,a),a.g={
}
}
$t.prototype.N=function(){
$t.aa.N.call(this),uc(this)}
,$t.prototype.handleEvent=function(){
throw Error("EventHandler.handleEvent not implemented")}
;
var es=l.JSON.stringify,xh=l.JSON.parse,ir=class{
stringify(a){
return l.JSON.stringify(a,void 0)}
parse(a){
return l.JSON.parse(a,void 0)}
}
;
function ca(){
}
ca.prototype.h=null;
function dc(a){
return a.h||(a.h=a.i())}
function ni(){
}
var ri={
OPEN:"a",kb:"b",Ja:"c",wb:"d"}
;
function sr(){
Ee.call(this,"d")}
w(sr,Ee);
function ii(){
Ee.call(this,"c")}
w(ii,Ee);
var Cn={
}
,si=null;
function ts(){
return si=si||new ft}
Cn.La="serverreachability";
function kn(a){
Ee.call(this,Cn.La,a)}
w(kn,Ee);
function Er(a){
const f=ts();
$e(f,new kn(f))}
Cn.STAT_EVENT="statevent";
function Us(a,f){
Ee.call(this,Cn.STAT_EVENT,a),this.stat=f}
w(Us,Ee);
function bt(a){
const f=ts();
$e(f,new Us(f,a))}
Cn.Ma="timingevent";
function ua(a,f){
Ee.call(this,Cn.Ma,a),this.size=f}
w(ua,Ee);
function oi(a,f){
if(typeof a!="function")throw Error("Fn must not be null and must be a function");
return l.setTimeout(function(){
a()}
,f)}
function ai(){
this.g=!0}
ai.prototype.xa=function(){
this.g=!1}
;
function hc(a,f,v,x,F,$){
a.info(function(){
if(a.g)if($)for(var Z="",Ge=$.split("&"),Rt=0;
Rt<Ge.length;
Rt++){
var Ne=Ge[Rt].split("=");
if(1<Ne.length){
var zt=Ne[0];
Ne=Ne[1];
var qt=zt.split("_");
Z=2<=qt.length&&qt[1]=="type"?Z+(zt+"="+Ne+"&"):Z+(zt+"=redacted&")}
}
else Z=null;
else Z=$;
return"XMLHTTP REQ ("+x+") [attempt "+F+"]: "+f+`
`+v+`
`+Z}
)}
function pt(a,f,v,x,F,$,Z){
a.info(function(){
return"XMLHTTP RESP ("+x+") [ attempt "+F+"]: "+f+`
`+v+`
`+$+" "+Z}
)}
function or(a,f,v,x){
a.info(function(){
return"XMLHTTP TEXT ("+f+"): "+da(a,v)+(x?" "+x:"")}
)}
function De(a,f){
a.info(function(){
return"TIMEOUT: "+f}
)}
ai.prototype.info=function(){
}
;
function da(a,f){
if(!a.g)return f;
if(!f)return null;
try{
var v=JSON.parse(f);
if(v){
for(a=0;
a<v.length;
a++)if(Array.isArray(v[a])){
var x=v[a];
if(!(2>x.length)){
var F=x[1];
if(Array.isArray(F)&&!(1>F.length)){
var $=F[0];
if($!="noop"&&$!="stop"&&$!="close")for(var Z=1;
Z<F.length;
Z++)F[Z]=""}
}
}
}
return es(v)}
catch{
return f}
}
var Tr={
NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9}
,ha={
lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"}
,$s;
function Ir(){
}
w(Ir,ca),Ir.prototype.g=function(){
return new XMLHttpRequest}
,Ir.prototype.i=function(){
return{
}
}
,$s=new Ir;
function zn(a,f,v,x){
this.j=a,this.i=f,this.l=v,this.R=x||1,this.U=new $t(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new qn}
function qn(){
this.i=null,this.g="",this.h=!1}
var fc={
}
,me={
}
;
function fa(a,f,v){
a.L=1,a.v=Ws(Gn(f)),a.m=v,a.P=!0,pc(a,null)}
function pc(a,f){
a.F=Date.now(),zs(a),a.A=Gn(a.v);
var v=a.A,x=a.R;
Array.isArray(x)||(x=[String(x)]),Cc(v.i,"t",x),a.C=0,v=a.j.J,a.h=new qn,a.g=ui(a.j,v?f:null,!a.m),0<a.O&&(a.M=new ze(g(a.Y,a,a.g),a.O)),f=a.U,v=a.g,x=a.ca;
var F="readystatechange";
Array.isArray(F)||(F&&(Zi[0]=F.toString()),F=Zi);
for(var $=0;
$<F.length;
$++){
var Z=Ce(v,F[$],x||f.handleEvent,!1,f.h||f);
if(!Z)break;
f.g[Z.key]=Z}
f=a.H?b(a.H):{
}
,a.m?(a.u||(a.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,f)):(a.u="GET",a.g.ea(a.A,a.u,null,f)),Er(),hc(a.i,a.u,a.A,a.l,a.R,a.m)}
zn.prototype.ca=function(a){
a=a.target;
const f=this.M;
f&&z(a)==3?f.j():this.Y(a)}
,zn.prototype.Y=function(a){
try{
if(a==this.g)e:{
const qt=z(this.g);
var f=this.g.Ba();
const Xs=this.g.Z();
if(!(3>qt)&&(qt!=3||this.g&&(this.h.h||this.g.oa()||U(this.g)))){
this.J||qt!=4||f==7||(f==8||0>=Xs?Er(3):Er(2)),ma(this);
var v=this.g.Z();
this.X=v;
t:if(pa(this)){
var x=U(this.g);
a="";
var F=x.length,$=z(this.g)==4;
if(!this.h.i){
if(typeof TextDecoder>"u"){
Sr(this),ns(this);
var Z="";
break t}
this.h.i=new l.TextDecoder}
for(f=0;
f<F;
f++)this.h.h=!0,a+=this.h.i.decode(x[f],{
stream:!($&&f==F-1)}
);
x.length=0,this.h.g+=a,this.C=0,Z=this.h.g}
else Z=this.g.oa();
if(this.o=v==200,pt(this.i,this.u,this.A,this.l,this.R,qt,v),this.o){
if(this.T&&!this.K){
t:{
if(this.g){
var Ge,Rt=this.g;
if((Ge=Rt.g?Rt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(Ge)){
var Ne=Ge;
break t}
}
Ne=null}
if(v=Ne)or(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ga(this,v);
else{
this.o=!1,this.s=3,bt(12),Sr(this),ns(this);
break e}
}
if(this.P){
v=!0;
let Wn;
for(;
!this.J&&this.C<Z.length;
)if(Wn=mc(this,Z),Wn==me){
qt==4&&(this.s=4,bt(14),v=!1),or(this.i,this.l,null,"[Incomplete Response]");
break}
else if(Wn==fc){
this.s=4,bt(15),or(this.i,this.l,Z,"[Invalid Chunk]"),v=!1;
break}
else or(this.i,this.l,Wn,null),ga(this,Wn);
if(pa(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),qt!=4||Z.length!=0||this.h.h||(this.s=1,bt(16),v=!1),this.o=this.o&&v,!v)or(this.i,this.l,Z,"[Invalid Chunked Response]"),Sr(this),ns(this);
else if(0<Z.length&&!this.W){
this.W=!0;
var zt=this.j;
zt.g==this&&zt.ba&&!zt.M&&(zt.j.info("Great, no buffering proxy detected. Bytes received: "+Z.length),we(zt),zt.M=!0,bt(11))}
}
else or(this.i,this.l,Z,null),ga(this,Z);
qt==4&&Sr(this),this.o&&!this.J&&(qt==4?li(this.j,this):(this.o=!1,zs(this)))}
else H(this.g),v==400&&0<Z.indexOf("Unknown SID")?(this.s=3,bt(12)):(this.s=0,bt(13)),Sr(this),ns(this)}
}
}
catch{
}
finally{
}
}
;
function pa(a){
return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}
function mc(a,f){
var v=a.C,x=f.indexOf(`
`,v);
return x==-1?me:(v=Number(f.substring(v,x)),isNaN(v)?fc:(x+=1,x+v>f.length?me:(f=f.slice(x,x+v),a.C=x+v,f)))}
zn.prototype.cancel=function(){
this.J=!0,Sr(this)}
;
function zs(a){
a.S=Date.now()+a.I,gc(a,a.I)}
function gc(a,f){
if(a.B!=null)throw Error("WatchDog timer not null");
a.B=oi(g(a.ba,a),f)}
function ma(a){
a.B&&(l.clearTimeout(a.B),a.B=null)}
zn.prototype.ba=function(){
this.B=null;
const a=Date.now();
0<=a-this.S?(De(this.i,this.A),this.L!=2&&(Er(),bt(17)),Sr(this),this.s=2,ns(this)):gc(this,this.S-a)}
;
function ns(a){
a.j.G==0||a.J||li(a.j,a)}
function Sr(a){
ma(a);
var f=a.M;
f&&typeof f.ma=="function"&&f.ma(),a.M=null,uc(a.U),a.g&&(f=a.g,a.g=null,f.abort(),f.ma())}
function ga(a,f){
try{
var v=a.j;
if(v.G!=0&&(v.g==a||va(v.h,a))){
if(!a.K&&va(v.h,a)&&v.G==3){
try{
var x=v.Da.g.parse(f)}
catch{
x=null}
if(Array.isArray(x)&&x.length==3){
var F=x;
if(F[0]==0){
e:if(!v.u){
if(v.g)if(v.g.F+3e3<a.F)Rr(v),he(v);
else break e;
Q(v),bt(18)}
}
else v.za=F[1],0<v.za-v.T&&37500>F[2]&&v.F&&v.v==0&&!v.C&&(v.C=oi(g(v.Za,v),6e3));
if(1>=ya(v.h)&&v.ca){
try{
v.ca()}
catch{
}
v.ca=void 0}
}
else Je(v,11)}
else if((a.K||v.g==a)&&Rr(v),!E(f))for(F=v.Da.g.parse(f),f=0;
f<F.length;
f++){
let Ne=F[f];
if(v.T=Ne[0],Ne=Ne[1],v.G==2)if(Ne[0]=="c"){
v.K=Ne[1],v.ia=Ne[2];
const zt=Ne[3];
zt!=null&&(v.la=zt,v.j.info("VER="+v.la));
const qt=Ne[4];
qt!=null&&(v.Aa=qt,v.j.info("SVER="+v.Aa));
const Xs=Ne[5];
Xs!=null&&typeof Xs=="number"&&0<Xs&&(x=1.5*Xs,v.L=x,v.j.info("backChannelRequestTimeoutMs_="+x)),x=v;
const Wn=a.g;
if(Wn){
const Vc=Wn.g?Wn.g.getResponseHeader("X-Client-Wire-Protocol"):null;
if(Vc){
var $=x.h;
$.g||Vc.indexOf("spdy")==-1&&Vc.indexOf("quic")==-1&&Vc.indexOf("h2")==-1||($.j=$.l,$.g=new Set,$.h&&(_a($,$.h),$.h=null))}
if(x.D){
const Ph=Wn.g?Wn.g.getResponseHeader("X-HTTP-Session-Id"):null;
Ph&&(x.ya=Ph,qe(x.I,x.D,Ph))}
}
v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-a.F,v.j.info("Handshake RTT: "+v.R+"ms")),x=v;
var Z=a;
if(x.qa=Pc(x,x.J?x.ia:null,x.W),Z.K){
_c(x.h,Z);
var Ge=Z,Rt=x.L;
Rt&&(Ge.I=Rt),Ge.B&&(ma(Ge),zs(Ge)),x.g=Z}
else Ve(x);
0<v.i.length&&Oe(v)}
else Ne[0]!="stop"&&Ne[0]!="close"||Je(v,7);
else v.G==3&&(Ne[0]=="stop"||Ne[0]=="close"?Ne[0]=="stop"?Je(v,7):de(v):Ne[0]!="noop"&&v.l&&v.l.ta(Ne),v.v=0)}
}
Er(4)}
catch{
}
}
var bh=class{
constructor(a,f){
this.g=a,this.map=f}
}
;
function yc(a){
this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}
function vc(a){
return a.h?!0:a.g?a.g.size>=a.j:!1}
function ya(a){
return a.h?1:a.g?a.g.size:0}
function va(a,f){
return a.h?a.h==f:a.g?a.g.has(f):!1}
function _a(a,f){
a.g?a.g.add(f):a.h=f}
function _c(a,f){
a.h&&a.h==f?a.h=null:a.g&&a.g.has(f)&&a.g.delete(f)}
yc.prototype.cancel=function(){
if(this.i=wc(this),this.h)this.h.cancel(),this.h=null;
else if(this.g&&this.g.size!==0){
for(const a of this.g.values())a.cancel();
this.g.clear()}
}
;
function wc(a){
if(a.h!=null)return a.i.concat(a.h.D);
if(a.g!=null&&a.g.size!==0){
let f=a.i;
for(const v of a.g.values())f=f.concat(v.D);
return f}
return N(a.i)}
function xc(a){
if(a.V&&typeof a.V=="function")return a.V();
if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());
if(typeof a=="string")return a.split("");
if(c(a)){
for(var f=[],v=a.length,x=0;
x<v;
x++)f.push(a[x]);
return f}
f=[],v=0;
for(x in a)f[v++]=a[x];
return f}
function Eh(a){
if(a.na&&typeof a.na=="function")return a.na();
if(!a.V||typeof a.V!="function"){
if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());
if(!(typeof Set<"u"&&a instanceof Set)){
if(c(a)||typeof a=="string"){
var f=[];
a=a.length;
for(var v=0;
v<a;
v++)f.push(v);
return f}
f=[],v=0;
for(const x in a)f[v++]=x;
return f}
}
}
function wa(a,f){
if(a.forEach&&typeof a.forEach=="function")a.forEach(f,void 0);
else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,f,void 0);
else for(var v=Eh(a),x=xc(a),F=x.length,$=0;
$<F;
$++)f.call(void 0,x[$],v&&v[$],a)}
var bc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");
function Ec(a,f){
if(a){
a=a.split("&");
for(var v=0;
v<a.length;
v++){
var x=a[v].indexOf("="),F=null;
if(0<=x){
var $=a[v].substring(0,x);
F=a[v].substring(x+1)}
else $=a[v];
f($,F?decodeURIComponent(F.replace(/\+/g," ")):"")}
}
}
function Ar(a){
if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Ar){
this.h=a.h,qs(this,a.j),this.o=a.o,this.g=a.g,Gs(this,a.s),this.l=a.l;
var f=a.i,v=new ss;
v.i=f.i,f.g&&(v.g=new Map(f.g),v.h=f.h),Tc(this,v),this.m=a.m}
else a&&(f=String(a).match(bc))?(this.h=!1,qs(this,f[1]||"",!0),this.o=rs(f[2]||""),this.g=rs(f[3]||"",!0),Gs(this,f[4]),this.l=rs(f[5]||"",!0),Tc(this,f[6]||"",!0),this.m=rs(f[7]||"")):(this.h=!1,this.i=new ss(null,this.h))}
Ar.prototype.toString=function(){
var a=[],f=this.j;
f&&a.push(is(f,Sc,!0),":");
var v=this.g;
return(v||f=="file")&&(a.push("//"),(f=this.o)&&a.push(is(f,Sc,!0),"@"),a.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{
2}
)/g,"%$1")),v=this.s,v!=null&&a.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&a.push("/"),a.push(is(v,v.charAt(0)=="/"?Ih:Th,!0))),(v=this.i.toString())&&a.push("?",v),(v=this.m)&&a.push("#",is(v,Ah)),a.join("")}
;
function Gn(a){
return new Ar(a)}
function qs(a,f,v){
a.j=v?rs(f,!0):f,a.j&&(a.j=a.j.replace(/:$/,""))}
function Gs(a,f){
if(f){
if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);
a.s=f}
else a.s=null}
function Tc(a,f,v){
f instanceof ss?(a.i=f,Hs(a.i,a.h)):(v||(f=is(f,Sh)),a.i=new ss(f,a.h))}
function qe(a,f,v){
a.i.set(f,v)}
function Ws(a){
return qe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}
function rs(a,f){
return a?f?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}
function is(a,f,v){
return typeof a=="string"?(a=encodeURI(a).replace(f,Ic),v&&(a=a.replace(/%25([0-9a-fA-F]{
2}
)/g,"%$1")),a):null}
function Ic(a){
return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}
var Sc=/[#\/\?@]/g,Th=/[#\?:]/g,Ih=/[#\?]/g,Sh=/[#\?@]/g,Ah=/#/g;
function ss(a,f){
this.h=this.g=null,this.i=a||null,this.j=!!f}
function Rn(a){
a.g||(a.g=new Map,a.h=0,a.i&&Ec(a.i,function(f,v){
a.add(decodeURIComponent(f.replace(/\+/g," ")),v)}
))}
t=ss.prototype,t.add=function(a,f){
Rn(this),this.i=null,a=Cr(this,a);
var v=this.g.get(a);
return v||this.g.set(a,v=[]),v.push(f),this.h+=1,this}
;
function xa(a,f){
Rn(a),f=Cr(a,f),a.g.has(f)&&(a.i=null,a.h-=a.g.get(f).length,a.g.delete(f))}
function Ac(a,f){
return Rn(a),f=Cr(a,f),a.g.has(f)}
t.forEach=function(a,f){
Rn(this),this.g.forEach(function(v,x){
v.forEach(function(F){
a.call(f,F,x,this)}
,this)}
,this)}
,t.na=function(){
Rn(this);
const a=Array.from(this.g.values()),f=Array.from(this.g.keys()),v=[];
for(let x=0;
x<f.length;
x++){
const F=a[x];
for(let $=0;
$<F.length;
$++)v.push(f[x])}
return v}
,t.V=function(a){
Rn(this);
let f=[];
if(typeof a=="string")Ac(this,a)&&(f=f.concat(this.g.get(Cr(this,a))));
else{
a=Array.from(this.g.values());
for(let v=0;
v<a.length;
v++)f=f.concat(a[v])}
return f}
,t.set=function(a,f){
return Rn(this),this.i=null,a=Cr(this,a),Ac(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[f]),this.h+=1,this}
,t.get=function(a,f){
return a?(a=this.V(a),0<a.length?String(a[0]):f):f}
;
function Cc(a,f,v){
xa(a,f),0<v.length&&(a.i=null,a.g.set(Cr(a,f),N(v)),a.h+=v.length)}
t.toString=function(){
if(this.i)return this.i;
if(!this.g)return"";
const a=[],f=Array.from(this.g.keys());
for(var v=0;
v<f.length;
v++){
var x=f[v];
const $=encodeURIComponent(String(x)),Z=this.V(x);
for(x=0;
x<Z.length;
x++){
var F=$;
Z[x]!==""&&(F+="="+encodeURIComponent(String(Z[x]))),a.push(F)}
}
return this.i=a.join("&")}
;
function Cr(a,f){
return f=String(f),a.j&&(f=f.toLowerCase()),f}
function Hs(a,f){
f&&!a.j&&(Rn(a),a.i=null,a.g.forEach(function(v,x){
var F=x.toLowerCase();
x!=F&&(xa(this,x),Cc(this,F,v))}
,a)),a.j=f}
function Ch(a,f){
const v=new ai;
if(l.Image){
const x=new Image;
x.onload=_(ar,v,"TestLoadImage: loaded",!0,f,x),x.onerror=_(ar,v,"TestLoadImage: error",!1,f,x),x.onabort=_(ar,v,"TestLoadImage: abort",!1,f,x),x.ontimeout=_(ar,v,"TestLoadImage: timeout",!1,f,x),l.setTimeout(function(){
x.ontimeout&&x.ontimeout()}
,1e4),x.src=a}
else f(!1)}
function kh(a,f){
const v=new ai,x=new AbortController,F=setTimeout(()=>{
x.abort(),ar(v,"TestPingServer: timeout",!1,f)}
,1e4);
fetch(a,{
signal:x.signal}
).then($=>{
clearTimeout(F),$.ok?ar(v,"TestPingServer: ok",!0,f):ar(v,"TestPingServer: server error",!1,f)}
).catch(()=>{
clearTimeout(F),ar(v,"TestPingServer: error",!1,f)}
)}
function ar(a,f,v,x,F){
try{
F&&(F.onload=null,F.onerror=null,F.onabort=null,F.ontimeout=null),x(v)}
catch{
}
}
function Rh(){
this.g=new ir}
function Nh(a,f,v){
const x=v||"";
try{
wa(a,function(F,$){
let Z=F;
u(F)&&(Z=es(F)),f.push(x+$+"="+encodeURIComponent(Z))}
)}
catch(F){
throw f.push(x+"type="+encodeURIComponent("_badmap")),F}
}
function Nn(a){
this.l=a.Ub||null,this.j=a.eb||!1}
w(Nn,ca),Nn.prototype.g=function(){
return new Ks(this.l,this.j)}
,Nn.prototype.i=function(a){
return function(){
return a}
}
({
}
);
function Ks(a,f){
ft.call(this),this.D=a,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}
w(Ks,ft),t=Ks.prototype,t.open=function(a,f){
if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");
this.B=a,this.A=f,this.readyState=1,os(this)}
,t.send=function(a){
if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");
this.g=!0;
const f={
headers:this.u,method:this.B,credentials:this.m,cache:void 0}
;
a&&(f.body=a),(this.D||l).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))}
,t.abort=function(){
this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{
}
),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,lr(this)),this.readyState=0}
,t.Sa=function(a){
if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,os(this)),this.g&&(this.readyState=3,os(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));
else if(typeof l.ReadableStream<"u"&&"body"in a){
if(this.j=a.body.getReader(),this.o){
if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');
this.response=[]}
else this.response=this.responseText="",this.v=new TextDecoder;
kc(this)}
else a.text().then(this.Ra.bind(this),this.ga.bind(this))}
;
function kc(a){
a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}
t.Pa=function(a){
if(this.g){
if(this.o&&a.value)this.response.push(a.value);
else if(!this.o){
var f=a.value?a.value:new Uint8Array(0);
(f=this.v.decode(f,{
stream:!a.done}
))&&(this.response=this.responseText+=f)}
a.done?lr(this):os(this),this.readyState==3&&kc(this)}
}
,t.Ra=function(a){
this.g&&(this.response=this.responseText=a,lr(this))}
,t.Qa=function(a){
this.g&&(this.response=a,lr(this))}
,t.ga=function(){
this.g&&lr(this)}
;
function lr(a){
a.readyState=4,a.l=null,a.j=null,a.v=null,os(a)}
t.setRequestHeader=function(a,f){
this.u.append(a,f)}
,t.getResponseHeader=function(a){
return this.h&&this.h.get(a.toLowerCase())||""}
,t.getAllResponseHeaders=function(){
if(!this.h)return"";
const a=[],f=this.h.entries();
for(var v=f.next();
!v.done;
)v=v.value,a.push(v[0]+": "+v[1]),v=f.next();
return a.join(`\r
`)}
;
function os(a){
a.onreadystatechange&&a.onreadystatechange.call(a)}
Object.defineProperty(Ks.prototype,"withCredentials",{
get:function(){
return this.m==="include"}
,set:function(a){
this.m=a?"include":"same-origin"}
}
);
function Rc(a){
let f="";
return q(a,function(v,x){
f+=x,f+=":",f+=v,f+=`\r
`}
),f}
function Qs(a,f,v){
e:{
for(x in v){
var x=!1;
break e}
x=!0}
x||(v=Rc(v),typeof a=="string"?v!=null&&encodeURIComponent(String(v)):qe(a,f,v))}
function Ke(a){
ft.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}
w(Ke,ft);
var Nc=/^https?$/i,h=["POST","PUT"];
t=Ke.prototype,t.Ha=function(a){
this.J=a}
,t.ea=function(a,f,v,x){
if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+";
 newUri="+a);
f=f?f.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():$s.g(),this.v=this.o?dc(this.o):dc($s),this.g.onreadystatechange=g(this.Ea,this);
try{
this.B=!0,this.g.open(f,String(a),!0),this.B=!1}
catch($){
y(this,$);
return}
if(a=v||"",v=new Map(this.headers),x)if(Object.getPrototypeOf(x)===Object.prototype)for(var F in x)v.set(F,x[F]);
else if(typeof x.keys=="function"&&typeof x.get=="function")for(const $ of x.keys())v.set($,x.get($));
else throw Error("Unknown input type for opt_headers: "+String(x));
x=Array.from(v.keys()).find($=>$.toLowerCase()=="content-type"),F=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(h,f,void 0))||x||F||v.set("Content-Type","application/x-www-form-urlencoded;
charset=utf-8");
for(const[$,Z]of v)this.g.setRequestHeader($,Z);
this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);
try{
j(this),this.u=!0,this.g.send(a),this.u=!1}
catch($){
y(this,$)}
}
;
function y(a,f){
a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=f,a.m=5,T(a),D(a)}
function T(a){
a.A||(a.A=!0,$e(a,"complete"),$e(a,"error"))}
t.abort=function(a){
this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,$e(this,"complete"),$e(this,"abort"),D(this))}
,t.N=function(){
this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),D(this,!0)),Ke.aa.N.call(this)}
,t.Ea=function(){
this.s||(this.B||this.u||this.j?P(this):this.bb())}
,t.bb=function(){
P(this)}
;
function P(a){
if(a.h&&typeof o<"u"&&(!a.v[1]||z(a)!=4||a.Z()!=2)){
if(a.u&&z(a)==4)cc(a.Ea,0,a);
else if($e(a,"readystatechange"),z(a)==4){
a.h=!1;
try{
const Z=a.Z();
e:switch(Z){
case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;
break e;
default:f=!1}
var v;
if(!(v=f)){
var x;
if(x=Z===0){
var F=String(a.D).match(bc)[1]||null;
!F&&l.self&&l.self.location&&(F=l.self.location.protocol.slice(0,-1)),x=!Nc.test(F?F.toLowerCase():"")}
v=x}
if(v)$e(a,"complete"),$e(a,"success");
else{
a.m=6;
try{
var $=2<z(a)?a.g.statusText:""}
catch{
$=""}
a.l=$+" ["+a.Z()+"]",T(a)}
}
finally{
D(a)}
}
}
}
function D(a,f){
if(a.g){
j(a);
const v=a.g,x=a.v[0]?()=>{
}
:null;
a.g=null,a.v=null,f||$e(a,"ready");
try{
v.onreadystatechange=x}
catch{
}
}
}
function j(a){
a.I&&(l.clearTimeout(a.I),a.I=null)}
t.isActive=function(){
return!!this.g}
;
function z(a){
return a.g?a.g.readyState:0}
t.Z=function(){
try{
return 2<z(this)?this.g.status:-1}
catch{
return-1}
}
,t.oa=function(){
try{
return this.g?this.g.responseText:""}
catch{
return""}
}
,t.Oa=function(a){
if(this.g){
var f=this.g.responseText;
return a&&f.indexOf(a)==0&&(f=f.substring(a.length)),xh(f)}
}
;
function U(a){
try{
if(!a.g)return null;
if("response"in a.g)return a.g.response;
switch(a.H){
case"":case"text":return a.g.responseText;
case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}
return null}
catch{
return null}
}
function H(a){
const f={
}
;
a=(a.g&&2<=z(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);
for(let x=0;
x<a.length;
x++){
if(E(a[x]))continue;
var v=V(a[x]);
const F=v[0];
if(v=v[1],typeof v!="string")continue;
v=v.trim();
const $=f[F]||[];
f[F]=$,$.push(v)}
S(f,function(x){
return x.join(", ")}
)}
t.Ba=function(){
return this.m}
,t.Ka=function(){
return typeof this.l=="string"?this.l:String(this.l)}
;
function ee(a,f,v){
return v&&v.internalChannelParams&&v.internalChannelParams[a]||f}
function ie(a){
this.Aa=0,this.i=[],this.j=new ai,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ee("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ee("baseRetryDelayMs",5e3,a),this.cb=ee("retryDelaySeedMs",1e4,a),this.Wa=ee("forwardChannelMaxRetries",2,a),this.wa=ee("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new yc(a&&a.concurrentRequestLimit),this.Da=new Rh,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}
t=ie.prototype,t.la=8,t.G=1,t.connect=function(a,f,v,x){
bt(0),this.W=a,this.H=f||{
}
,v&&x!==void 0&&(this.H.OSID=v,this.H.OAID=x),this.F=this.X,this.I=Pc(this,null,this.W),Oe(this)}
;
function de(a){
if(oe(a),a.G==3){
var f=a.U++,v=Gn(a.I);
if(qe(v,"SID",a.K),qe(v,"RID",f),qe(v,"TYPE","terminate"),kr(a,v),f=new zn(a,a.j,f),f.L=2,f.v=Ws(Gn(v)),v=!1,l.navigator&&l.navigator.sendBeacon)try{
v=l.navigator.sendBeacon(f.v.toString(),"")}
catch{
}
!v&&l.Image&&(new Image().src=f.v,v=!0),v||(f.g=ui(f.j,null),f.g.ea(f.v)),f.F=Date.now(),zs(f)}
ci(a)}
function he(a){
a.g&&(we(a),a.g.cancel(),a.g=null)}
function oe(a){
he(a),a.u&&(l.clearTimeout(a.u),a.u=null),Rr(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}
function Oe(a){
if(!vc(a.h)&&!a.s){
a.s=!0;
var f=a.Ga;
Ft||ue(),J||(Ft(),J=!0),ae.add(f,a),a.B=0}
}
function as(a,f){
return ya(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=f.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=oi(g(a.Ga,a,f),ba(a,a.B)),a.B++,!0)}
t.Ga=function(a){
if(this.s)if(this.s=null,this.G==1){
if(!a){
this.U=Math.floor(1e5*Math.random()),a=this.U++;
const F=new zn(this,this.j,a);
let $=this.o;
if(this.S&&($?($=b($),C($,this.S)):$=this.S),this.m!==null||this.O||(F.H=$,$=null),this.P)e:{
for(var f=0,v=0;
v<this.i.length;
v++){
t:{
var x=this.i[v];
if("__data__"in x.map&&(x=x.map.__data__,typeof x=="string")){
x=x.length;
break t}
x=void 0}
if(x===void 0)break;
if(f+=x,4096<f){
f=v;
break e}
if(f===4096||v===this.i.length-1){
f=v+1;
break e}
}
f=1e3}
else f=1e3;
f=ke(this,F,f),v=Gn(this.I),qe(v,"RID",a),qe(v,"CVER",22),this.D&&qe(v,"X-HTTP-Session-Id",this.D),kr(this,v),$&&(this.O?f="headers="+encodeURIComponent(String(Rc($)))+"&"+f:this.m&&Qs(v,this.m,$)),_a(this.h,F),this.Ua&&qe(v,"TYPE","init"),this.P?(qe(v,"$req",f),qe(v,"SID","null"),F.T=!0,fa(F,v,null)):fa(F,v,f),this.G=2}
}
else this.G==3&&(a?ls(this,a):this.i.length==0||vc(this.h)||ls(this))}
;
function ls(a,f){
var v;
f?v=f.l:v=a.U++;
const x=Gn(a.I);
qe(x,"SID",a.K),qe(x,"RID",v),qe(x,"AID",a.T),kr(a,x),a.m&&a.o&&Qs(x,a.m,a.o),v=new zn(a,a.j,v,a.B+1),a.m===null&&(v.H=a.o),f&&(a.i=f.D.concat(a.i)),f=ke(a,v,1e3),v.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),_a(a.h,v),fa(v,x,f)}
function kr(a,f){
a.H&&q(a.H,function(v,x){
qe(f,x,v)}
),a.l&&wa({
}
,function(v,x){
qe(f,x,v)}
)}
function ke(a,f,v){
v=Math.min(a.i.length,v);
var x=a.l?g(a.l.Na,a.l,a):null;
e:{
var F=a.i;
let $=-1;
for(;
;
){
const Z=["count="+v];
$==-1?0<v?($=F[0].g,Z.push("ofs="+$)):$=0:Z.push("ofs="+$);
let Ge=!0;
for(let Rt=0;
Rt<v;
Rt++){
let Ne=F[Rt].g;
const zt=F[Rt].map;
if(Ne-=$,0>Ne)$=Math.max(0,F[Rt].g-100),Ge=!1;
else try{
Nh(zt,Z,"req"+Ne+"_")}
catch{
x&&x(zt)}
}
if(Ge){
x=Z.join("&");
break e}
}
}
return a=a.i.splice(0,v),f.D=a,x}
function Ve(a){
if(!a.g&&!a.u){
a.Y=1;
var f=a.Fa;
Ft||ue(),J||(Ft(),J=!0),ae.add(f,a),a.v=0}
}
function Q(a){
return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=oi(g(a.Fa,a),ba(a,a.v)),a.v++,!0)}
t.Fa=function(){
if(this.u=null,tt(this),this.ba&&!(this.M||this.g==null||0>=this.R)){
var a=2*this.R;
this.j.info("BP detection timer enabled: "+a),this.A=oi(g(this.ab,this),a)}
}
,t.ab=function(){
this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,bt(10),he(this),tt(this))}
;
function we(a){
a.A!=null&&(l.clearTimeout(a.A),a.A=null)}
function tt(a){
a.g=new zn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;
var f=Gn(a.qa);
qe(f,"RID","rpc"),qe(f,"SID",a.K),qe(f,"AID",a.T),qe(f,"CI",a.F?"0":"1"),!a.F&&a.ja&&qe(f,"TO",a.ja),qe(f,"TYPE","xmlhttp"),kr(a,f),a.m&&a.o&&Qs(f,a.m,a.o),a.L&&(a.g.I=a.L);
var v=a.g;
a=a.ia,v.L=1,v.v=Ws(Gn(f)),v.m=null,v.P=!0,pc(v,a)}
t.Za=function(){
this.C!=null&&(this.C=null,he(this),Q(this),bt(19))}
;
function Rr(a){
a.C!=null&&(l.clearTimeout(a.C),a.C=null)}
function li(a,f){
var v=null;
if(a.g==f){
Rr(a),we(a),a.g=null;
var x=2}
else if(va(a.h,f))v=f.D,_c(a.h,f),x=1;
else return;
if(a.G!=0){
if(f.o)if(x==1){
v=f.m?f.m.length:0,f=Date.now()-f.F;
var F=a.B;
x=ts(),$e(x,new ua(x,v)),Oe(a)}
else Ve(a);
else if(F=f.s,F==3||F==0&&0<f.X||!(x==1&&as(a,f)||x==2&&Q(a)))switch(v&&0<v.length&&(f=a.h,f.i=f.i.concat(v)),F){
case 1:Je(a,5);
break;
case 4:Je(a,10);
break;
case 3:Je(a,6);
break;
default:Je(a,2)}
}
}
function ba(a,f){
let v=a.Ta+Math.floor(Math.random()*a.cb);
return a.isActive()||(v*=2),v*f}
function Je(a,f){
if(a.j.info("Error code "+f),f==2){
var v=g(a.fb,a),x=a.Xa;
const F=!x;
x=new Ar(x||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||qs(x,"https"),Ws(x),F?Ch(x.toString(),v):kh(x.toString(),v)}
else bt(2);
a.G=0,a.l&&a.l.sa(f),ci(a),oe(a)}
t.fb=function(a){
a?(this.j.info("Successfully pinged google.com"),bt(2)):(this.j.info("Failed to ping google.com"),bt(1))}
;
function ci(a){
if(a.G=0,a.ka=[],a.l){
const f=wc(a.h);
(f.length!=0||a.i.length!=0)&&(O(a.ka,f),O(a.ka,a.i),a.h.i.length=0,N(a.i),a.i.length=0),a.l.ra()}
}
function Pc(a,f,v){
var x=v instanceof Ar?Gn(v):new Ar(v);
if(x.g!="")f&&(x.g=f+"."+x.g),Gs(x,x.s);
else{
var F=l.location;
x=F.protocol,f=f?f+"."+F.hostname:F.hostname,F=+F.port;
var $=new Ar(null);
x&&qs($,x),f&&($.g=f),F&&Gs($,F),v&&($.l=v),x=$}
return v=a.D,f=a.ya,v&&f&&qe(x,v,f),qe(x,"VER",a.la),kr(a,x),x}
function ui(a,f,v){
if(f&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");
return f=a.Ca&&!a.pa?new Ke(new Nn({
eb:v}
)):new Ke(a.pa),f.Ha(a.J),f}
t.isActive=function(){
return!!this.l&&this.l.isActive(this)}
;
function Dc(){
}
t=Dc.prototype,t.ua=function(){
}
,t.ta=function(){
}
,t.sa=function(){
}
,t.ra=function(){
}
,t.isActive=function(){
return!0}
,t.Na=function(){
}
;
function Oc(){
}
Oc.prototype.g=function(a,f){
return new mn(a,f)}
;
function mn(a,f){
ft.call(this),this.g=new ie(f),this.l=a,this.h=f&&f.messageUrlParams||null,a=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={
"X-Client-Protocol":"webchannel"}
),this.g.o=a,a=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(a?a["X-WebChannel-Content-Type"]=f.messageContentType:a={
"X-WebChannel-Content-Type":f.messageContentType}
),f&&f.va&&(a?a["X-WebChannel-Client-Profile"]=f.va:a={
"X-WebChannel-Client-Profile":f.va}
),this.g.S=a,(a=f&&f.Sb)&&!E(a)&&(this.g.m=a),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!E(f)&&(this.g.D=f,a=this.h,a!==null&&f in a&&(a=this.h,f in a&&delete a[f])),this.j=new Ys(this)}
w(mn,ft),mn.prototype.m=function(){
this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)}
,mn.prototype.close=function(){
de(this.g)}
,mn.prototype.o=function(a){
var f=this.g;
if(typeof a=="string"){
var v={
}
;
v.__data__=a,a=v}
else this.u&&(v={
}
,v.__data__=es(a),a=v);
f.i.push(new bh(f.Ya++,a)),f.G==3&&Oe(f)}
,mn.prototype.N=function(){
this.g.l=null,delete this.j,de(this.g),delete this.g,mn.aa.N.call(this)}
;
function y0(a){
sr.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);
var f=a.__sm__;
if(f){
e:{
for(const v in f){
a=v;
break e}
a=void 0}
(this.i=a)&&(a=this.i,f=f!==null&&a in f?f[a]:void 0),this.data=f}
else this.data=a}
w(y0,sr);
function v0(){
ii.call(this),this.status=1}
w(v0,ii);
function Ys(a){
this.g=a}
w(Ys,Dc),Ys.prototype.ua=function(){
$e(this.g,"a")}
,Ys.prototype.ta=function(a){
$e(this.g,new y0(a))}
,Ys.prototype.sa=function(a){
$e(this.g,new v0)}
,Ys.prototype.ra=function(){
$e(this.g,"b")}
,Oc.prototype.createWebChannel=Oc.prototype.g,mn.prototype.send=mn.prototype.o,mn.prototype.open=mn.prototype.m,mn.prototype.close=mn.prototype.close,oE=function(){
return new Oc}
,sE=function(){
return ts()}
,iE=Cn,Wp={
mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20}
,Tr.NO_ERROR=0,Tr.TIMEOUT=8,Tr.HTTP_ERROR=6,Nu=Tr,ha.COMPLETE="complete",rE=ha,ni.EventType=ri,ri.OPEN="a",ri.CLOSE="b",ri.ERROR="c",ri.MESSAGE="d",ft.prototype.listen=ft.prototype.K,Fa=ni,Ke.prototype.listenOnce=Ke.prototype.L,Ke.prototype.getLastError=Ke.prototype.Ka,Ke.prototype.getLastErrorCode=Ke.prototype.Ba,Ke.prototype.getStatus=Ke.prototype.Z,Ke.prototype.getResponseJson=Ke.prototype.Oa,Ke.prototype.getResponseText=Ke.prototype.oa,Ke.prototype.send=Ke.prototype.ea,Ke.prototype.setWithCredentials=Ke.prototype.Ha,nE=Ke}
).apply(typeof lu<"u"?lu:typeof self<"u"?self:typeof window<"u"?window:{
}
);
const Kv="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{
constructor(e){
this.uid=e}
isAuthenticated(){
return this.uid!=null}
toKey(){
return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}
isEqual(e){
return e.uid===this.uid}
}
Kt.UNAUTHENTICATED=new Kt(null),Kt.GOOGLE_CREDENTIALS=new Kt("google-credentials-uid"),Kt.FIRST_PARTY=new Kt("first-party-uid"),Kt.MOCK_USER=new Kt("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let na="10.14.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps=new Ig("@firebase/firestore");
function Oa(){
return Ps.logLevel}
function re(t,...e){
if(Ps.logLevel<=Ie.DEBUG){
const n=e.map(Mg);
Ps.debug(`Firestore (${
na}
): ${
t}
`,...n)}
}
function Kr(t,...e){
if(Ps.logLevel<=Ie.ERROR){
const n=e.map(Mg);
Ps.error(`Firestore (${
na}
): ${
t}
`,...n)}
}
function Uo(t,...e){
if(Ps.logLevel<=Ie.WARN){
const n=e.map(Mg);
Ps.warn(`Firestore (${
na}
): ${
t}
`,...n)}
}
function Mg(t){
if(typeof t=="string")return t;
try{
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");

* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){
return JSON.stringify(n)}
(t)}
catch{
return t}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(t="Unexpected state"){
const e=`FIRESTORE (${
na}
) INTERNAL ASSERTION FAILED: `+t;
throw Kr(e),new Error(e)}
function Ue(t,e){
t||ye()}
function _e(t,e){
return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W={
OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"}
;
class ne extends Jr{
constructor(e,n){
super(e,n),this.code=e,this.message=n,this.toString=()=>`${
this.name}
: [code=${
this.code}
]: ${
this.message}
`}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{
constructor(){
this.promise=new Promise((e,n)=>{
this.resolve=e,this.reject=n}
)}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{
constructor(e,n){
this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${
e}
`)}
}
class xV{
getToken(){
return Promise.resolve(null)}
invalidateToken(){
}
start(e,n){
e.enqueueRetryable(()=>n(Kt.UNAUTHENTICATED))}
shutdown(){
}
}
class bV{
constructor(e){
this.token=e,this.changeListener=null}
getToken(){
return Promise.resolve(this.token)}
invalidateToken(){
}
start(e,n){
this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}
shutdown(){
this.changeListener=null}
}
class EV{
constructor(e){
this.t=e,this.currentUser=Kt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}
start(e,n){
Ue(this.o===void 0);
let r=this.i;
const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();
let s=new ji;
this.o=()=>{
this.i++,this.currentUser=this.u(),s.resolve(),s=new ji,e.enqueueRetryable(()=>i(this.currentUser))}
;
const o=()=>{
const c=s;
e.enqueueRetryable(async()=>{
await c.promise,await i(this.currentUser)}
)}
,l=c=>{
re("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())}
;
this.t.onInit(c=>l(c)),setTimeout(()=>{
if(!this.auth){
const c=this.t.getImmediate({
optional:!0}
);
c?l(c):(re("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ji)}
}
,0),o()}
getToken(){
const e=this.i,n=this.forceRefresh;
return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(re("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ue(typeof r.accessToken=="string"),new aE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}
invalidateToken(){
this.forceRefresh=!0}
shutdown(){
this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}
u(){
const e=this.auth&&this.auth.getUid();
return Ue(e===null||typeof e=="string"),new Kt(e)}
}
class TV{
constructor(e,n,r){
this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Kt.FIRST_PARTY,this.I=new Map}
T(){
return this.P?this.P():null}
get headers(){
this.I.set("X-Goog-AuthUser",this.l);
const e=this.T();
return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}
}
class IV{
constructor(e,n,r){
this.l=e,this.h=n,this.P=r}
getToken(){
return Promise.resolve(new TV(this.l,this.h,this.P))}
start(e,n){
e.enqueueRetryable(()=>n(Kt.FIRST_PARTY))}
shutdown(){
}
invalidateToken(){
}
}
class SV{
constructor(e){
this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}
}
class AV{
constructor(e){
this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}
start(e,n){
Ue(this.o===void 0);
const r=s=>{
s.error!=null&&re("FirebaseAppCheckTokenProvider",`Error getting App Check token;
 using placeholder token instead. Error: ${
s.error.message}
`);
const o=s.token!==this.R;
return this.R=s.token,re("FirebaseAppCheckTokenProvider",`Received ${
o?"new":"existing"}
 token.`),o?n(s.token):Promise.resolve()}
;
this.o=s=>{
e.enqueueRetryable(()=>r(s))}
;
const i=s=>{
re("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)}
;
this.A.onInit(s=>i(s)),setTimeout(()=>{
if(!this.appCheck){
const s=this.A.getImmediate({
optional:!0}
);
s?i(s):re("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}
}
,0)}
getToken(){
const e=this.forceRefresh;
return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ue(typeof n.token=="string"),this.R=n.token,new SV(n.token)):null):Promise.resolve(null)}
invalidateToken(){
this.forceRefresh=!0}
shutdown(){
this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CV(t){
const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);
if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);
else for(let r=0;
r<t;
r++)n[r]=Math.floor(256*Math.random());
return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{
static newId(){
const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;
let r="";
for(;
r.length<20;
){
const i=CV(40);
for(let s=0;
s<i.length;
++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}
return r}
}
function Pe(t,e){
return t<e?-1:t>e?1:0}
function $o(t,e,n){
return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{
constructor(e,n){
if(this.seconds=e,this.nanoseconds=n,n<0)throw new ne(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);
if(n>=1e9)throw new ne(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);
if(e<-62135596800)throw new ne(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);
if(e>=253402300800)throw new ne(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}
static now(){
return wt.fromMillis(Date.now())}
static fromDate(e){
return wt.fromMillis(e.getTime())}
static fromMillis(e){
const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));
return new wt(n,r)}
toDate(){
return new Date(this.toMillis())}
toMillis(){
return 1e3*this.seconds+this.nanoseconds/1e6}
_compareTo(e){
return this.seconds===e.seconds?Pe(this.nanoseconds,e.nanoseconds):Pe(this.seconds,e.seconds)}
isEqual(e){
return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}
toString(){
return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}
toJSON(){
return{
seconds:this.seconds,nanoseconds:this.nanoseconds}
}
valueOf(){
const e=this.seconds- -62135596800;
return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{
constructor(e){
this.timestamp=e}
static fromTimestamp(e){
return new ve(e)}
static min(){
return new ve(new wt(0,0))}
static max(){
return new ve(new wt(253402300799,999999999))}
compareTo(e){
return this.timestamp._compareTo(e.timestamp)}
isEqual(e){
return this.timestamp.isEqual(e.timestamp)}
toMicroseconds(){
return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}
toString(){
return"SnapshotVersion("+this.timestamp.toString()+")"}
toTimestamp(){
return this.timestamp}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{
constructor(e,n,r){
n===void 0?n=0:n>e.length&&ye(),r===void 0?r=e.length-n:r>e.length-n&&ye(),this.segments=e,this.offset=n,this.len=r}
get length(){
return this.len}
isEqual(e){
return Nl.comparator(this,e)===0}
child(e){
const n=this.segments.slice(this.offset,this.limit());
return e instanceof Nl?e.forEach(r=>{
n.push(r)}
):n.push(e),this.construct(n)}
limit(){
return this.offset+this.length}
popFirst(e){
return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}
popLast(){
return this.construct(this.segments,this.offset,this.length-1)}
firstSegment(){
return this.segments[this.offset]}
lastSegment(){
return this.get(this.length-1)}
get(e){
return this.segments[this.offset+e]}
isEmpty(){
return this.length===0}
isPrefixOf(e){
if(e.length<this.length)return!1;
for(let n=0;
n<this.length;
n++)if(this.get(n)!==e.get(n))return!1;
return!0}
isImmediateParentOf(e){
if(this.length+1!==e.length)return!1;
for(let n=0;
n<this.length;
n++)if(this.get(n)!==e.get(n))return!1;
return!0}
forEach(e){
for(let n=this.offset,r=this.limit();
n<r;
n++)e(this.segments[n])}
toArray(){
return this.segments.slice(this.offset,this.limit())}
static comparator(e,n){
const r=Math.min(e.length,n.length);
for(let i=0;
i<r;
i++){
const s=e.get(i),o=n.get(i);
if(s<o)return-1;
if(s>o)return 1}
return e.length<n.length?-1:e.length>n.length?1:0}
}
class Ye extends Nl{
construct(e,n,r){
return new Ye(e,n,r)}
canonicalString(){
return this.toArray().join("/")}
toString(){
return this.canonicalString()}
toUriEncodedString(){
return this.toArray().map(encodeURIComponent).join("/")}
static fromString(...e){
const n=[];
for(const r of e){
if(r.indexOf("//")>=0)throw new ne(W.INVALID_ARGUMENT,`Invalid segment (${
r}
). Paths must not contain // in them.`);
n.push(...r.split("/").filter(i=>i.length>0))}
return new Ye(n)}
static emptyPath(){
return new Ye([])}
}
const kV=/^[_a-zA-Z][_a-zA-Z0-9]*$/;
class Dt extends Nl{
construct(e,n,r){
return new Dt(e,n,r)}
static isValidIdentifier(e){
return kV.test(e)}
canonicalString(){
return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Dt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}
toString(){
return this.canonicalString()}
isKeyField(){
return this.length===1&&this.get(0)==="__name__"}
static keyField(){
return new Dt(["__name__"])}
static fromServerFormat(e){
const n=[];
let r="",i=0;
const s=()=>{
if(r.length===0)throw new ne(W.INVALID_ARGUMENT,`Invalid field path (${
e}
). Paths must not be empty, begin with '.', end with '.', or contain '..'`);
n.push(r),r=""}
;
let o=!1;
for(;
i<e.length;
){
const l=e[i];
if(l==="\\"){
if(i+1===e.length)throw new ne(W.INVALID_ARGUMENT,"Path has trailing escape character: "+e);
const c=e[i+1];
if(c!=="\\"&&c!=="."&&c!=="`")throw new ne(W.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);
r+=c,i+=2}
else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}
if(s(),o)throw new ne(W.INVALID_ARGUMENT,"Unterminated ` in path: "+e);
return new Dt(n)}
static emptyPath(){
return new Dt([])}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{
constructor(e){
this.path=e}
static fromPath(e){
return new ce(Ye.fromString(e))}
static fromName(e){
return new ce(Ye.fromString(e).popFirst(5))}
static empty(){
return new ce(Ye.emptyPath())}
get collectionGroup(){
return this.path.popLast().lastSegment()}
hasCollectionId(e){
return this.path.length>=2&&this.path.get(this.path.length-2)===e}
getCollectionGroup(){
return this.path.get(this.path.length-2)}
getCollectionPath(){
return this.path.popLast()}
isEqual(e){
return e!==null&&Ye.comparator(this.path,e.path)===0}
toString(){
return this.path.toString()}
static comparator(e,n){
return Ye.comparator(e.path,n.path)}
static isDocumentKey(e){
return e.length%2==0}
static fromSegments(e){
return new ce(new Ye(e.slice()))}
}
function RV(t,e){
const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ve.fromTimestamp(r===1e9?new wt(n+1,0):new wt(n,r));
return new qi(i,ce.empty(),e)}
function NV(t){
return new qi(t.readTime,t.key,-1)}
class qi{
constructor(e,n,r){
this.readTime=e,this.documentKey=n,this.largestBatchId=r}
static min(){
return new qi(ve.min(),ce.empty(),-1)}
static max(){
return new qi(ve.max(),ce.empty(),-1)}
}
function PV(t,e){
let n=t.readTime.compareTo(e.readTime);
return n!==0?n:(n=ce.comparator(t.documentKey,e.documentKey),n!==0?n:Pe(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DV="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";
class OV{
constructor(){
this.onCommittedListeners=[]}
addOnCommittedListener(e){
this.onCommittedListeners.push(e)}
raiseOnCommittedEvent(){
this.onCommittedListeners.forEach(e=>e())}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yl(t){
if(t.code!==W.FAILED_PRECONDITION||t.message!==DV)throw t;
re("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{
constructor(e){
this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{
this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}
,n=>{
this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}
)}
catch(e){
return this.next(void 0,e)}
next(e,n){
return this.callbackAttached&&ye(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new K((r,i)=>{
this.nextCallback=s=>{
this.wrapSuccess(e,s).next(r,i)}
,this.catchCallback=s=>{
this.wrapFailure(n,s).next(r,i)}
}
)}
toPromise(){
return new Promise((e,n)=>{
this.next(e,n)}
)}
wrapUserFunction(e){
try{
const n=e();
return n instanceof K?n:K.resolve(n)}
catch(n){
return K.reject(n)}
}
wrapSuccess(e,n){
return e?this.wrapUserFunction(()=>e(n)):K.resolve(n)}
wrapFailure(e,n){
return e?this.wrapUserFunction(()=>e(n)):K.reject(n)}
static resolve(e){
return new K((n,r)=>{
n(e)}
)}
static reject(e){
return new K((n,r)=>{
r(e)}
)}
static waitFor(e){
return new K((n,r)=>{
let i=0,s=0,o=!1;
e.forEach(l=>{
++i,l.next(()=>{
++s,o&&s===i&&n()}
,c=>r(c))}
),o=!0,s===i&&n()}
)}
static or(e){
let n=K.resolve(!1);
for(const r of e)n=n.next(i=>i?K.resolve(i):r());
return n}
static forEach(e,n){
const r=[];
return e.forEach((i,s)=>{
r.push(n.call(this,i,s))}
),this.waitFor(r)}
static mapArray(e,n){
return new K((r,i)=>{
const s=e.length,o=new Array(s);
let l=0;
for(let c=0;
c<s;
c++){
const u=c;
n(e[u]).next(d=>{
o[u]=d,++l,l===s&&r(o)}
,d=>i(d))}
}
)}
static doWhile(e,n){
return new K((r,i)=>{
const s=()=>{
e()===!0?n().next(()=>{
s()}
,i):r()}
;
s()}
)}
}
function VV(t){
const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";
return Number(n)}
function Xl(t){
return t.name==="IndexedDbTransactionError"}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{
constructor(e,n){
this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}
ie(e){
return this.previousValue=Math.max(e,this.previousValue),this.previousValue}
next(){
const e=++this.previousValue;
return this.se&&this.se(e),e}
}
Lg.oe=-1;
function oh(t){
return t==null}
function Ed(t){
return t===0&&1/t==-1/0}
function MV(t){
return typeof t=="number"&&Number.isInteger(t)&&!Ed(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qv(t){
let e=0;
for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;
return e}
function Ls(t,e){
for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}
function cE(t){
for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;
return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{
constructor(e,n){
this.comparator=e,this.root=n||Pt.EMPTY}
insert(e,n){
return new ot(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Pt.BLACK,null,null))}
remove(e){
return new ot(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Pt.BLACK,null,null))}
get(e){
let n=this.root;
for(;
!n.isEmpty();
){
const r=this.comparator(e,n.key);
if(r===0)return n.value;
r<0?n=n.left:r>0&&(n=n.right)}
return null}
indexOf(e){
let n=0,r=this.root;
for(;
!r.isEmpty();
){
const i=this.comparator(e,r.key);
if(i===0)return n+r.left.size;
i<0?r=r.left:(n+=r.left.size+1,r=r.right)}
return-1}
isEmpty(){
return this.root.isEmpty()}
get size(){
return this.root.size}
minKey(){
return this.root.minKey()}
maxKey(){
return this.root.maxKey()}
inorderTraversal(e){
return this.root.inorderTraversal(e)}
forEach(e){
this.inorderTraversal((n,r)=>(e(n,r),!1))}
toString(){
const e=[];
return this.inorderTraversal((n,r)=>(e.push(`${
n}
:${
r}
`),!1)),`{
${
e.join(", ")}
}
`}
reverseTraversal(e){
return this.root.reverseTraversal(e)}
getIterator(){
return new cu(this.root,null,this.comparator,!1)}
getIteratorFrom(e){
return new cu(this.root,e,this.comparator,!1)}
getReverseIterator(){
return new cu(this.root,null,this.comparator,!0)}
getReverseIteratorFrom(e){
return new cu(this.root,e,this.comparator,!0)}
}
class cu{
constructor(e,n,r,i){
this.isReverse=i,this.nodeStack=[];
let s=1;
for(;
!e.isEmpty();
)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;
else{
if(s===0){
this.nodeStack.push(e);
break}
this.nodeStack.push(e),e=this.isReverse?e.right:e.left}
}
getNext(){
let e=this.nodeStack.pop();
const n={
key:e.key,value:e.value}
;
if(this.isReverse)for(e=e.left;
!e.isEmpty();
)this.nodeStack.push(e),e=e.right;
else for(e=e.right;
!e.isEmpty();
)this.nodeStack.push(e),e=e.left;
return n}
hasNext(){
return this.nodeStack.length>0}
peek(){
if(this.nodeStack.length===0)return null;
const e=this.nodeStack[this.nodeStack.length-1];
return{
key:e.key,value:e.value}
}
}
class Pt{
constructor(e,n,r,i,s){
this.key=e,this.value=n,this.color=r??Pt.RED,this.left=i??Pt.EMPTY,this.right=s??Pt.EMPTY,this.size=this.left.size+1+this.right.size}
copy(e,n,r,i,s){
return new Pt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}
isEmpty(){
return!1}
inorderTraversal(e){
return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}
reverseTraversal(e){
return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}
min(){
return this.left.isEmpty()?this:this.left.min()}
minKey(){
return this.min().key}
maxKey(){
return this.right.isEmpty()?this.key:this.right.maxKey()}
insert(e,n,r){
let i=this;
const s=r(e,i.key);
return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}
removeMin(){
if(this.left.isEmpty())return Pt.EMPTY;
let e=this;
return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}
remove(e,n){
let r,i=this;
if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);
else{
if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){
if(i.right.isEmpty())return Pt.EMPTY;
r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}
i=i.copy(null,null,null,null,i.right.remove(e,n))}
return i.fixUp()}
isRed(){
return this.color}
fixUp(){
let e=this;
return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}
moveRedLeft(){
let e=this.colorFlip();
return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}
moveRedRight(){
let e=this.colorFlip();
return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}
rotateLeft(){
const e=this.copy(null,null,Pt.RED,null,this.right.left);
return this.right.copy(null,null,this.color,e,null)}
rotateRight(){
const e=this.copy(null,null,Pt.RED,this.left.right,null);
return this.left.copy(null,null,this.color,null,e)}
colorFlip(){
const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);
return this.copy(null,null,!this.color,e,n)}
checkMaxDepth(){
const e=this.check();
return Math.pow(2,e)<=this.size+1}
check(){
if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ye();
const e=this.left.check();
if(e!==this.right.check())throw ye();
return e+(this.isRed()?0:1)}
}
Pt.EMPTY=null,Pt.RED=!0,Pt.BLACK=!1;
Pt.EMPTY=new class{
constructor(){
this.size=0}
get key(){
throw ye()}
get value(){
throw ye()}
get color(){
throw ye()}
get left(){
throw ye()}
get right(){
throw ye()}
copy(e,n,r,i,s){
return this}
insert(e,n,r){
return new Pt(e,n)}
remove(e,n){
return this}
isEmpty(){
return!0}
inorderTraversal(e){
return!1}
reverseTraversal(e){
return!1}
minKey(){
return null}
maxKey(){
return null}
isRed(){
return!1}
checkMaxDepth(){
return!0}
check(){
return 0}
}
;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{
constructor(e){
this.comparator=e,this.data=new ot(this.comparator)}
has(e){
return this.data.get(e)!==null}
first(){
return this.data.minKey()}
last(){
return this.data.maxKey()}
get size(){
return this.data.size}
indexOf(e){
return this.data.indexOf(e)}
forEach(e){
this.data.inorderTraversal((n,r)=>(e(n),!1))}
forEachInRange(e,n){
const r=this.data.getIteratorFrom(e[0]);
for(;
r.hasNext();
){
const i=r.getNext();
if(this.comparator(i.key,e[1])>=0)return;
n(i.key)}
}
forEachWhile(e,n){
let r;
for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();
r.hasNext();
)if(!e(r.getNext().key))return}
firstAfterOrEqual(e){
const n=this.data.getIteratorFrom(e);
return n.hasNext()?n.getNext().key:null}
getIterator(){
return new Yv(this.data.getIterator())}
getIteratorFrom(e){
return new Yv(this.data.getIteratorFrom(e))}
add(e){
return this.copy(this.data.remove(e).insert(e,!0))}
delete(e){
return this.has(e)?this.copy(this.data.remove(e)):this}
isEmpty(){
return this.data.isEmpty()}
unionWith(e){
let n=this;
return n.size<e.size&&(n=e,e=this),e.forEach(r=>{
n=n.add(r)}
),n}
isEqual(e){
if(!(e instanceof Mt)||this.size!==e.size)return!1;
const n=this.data.getIterator(),r=e.data.getIterator();
for(;
n.hasNext();
){
const i=n.getNext().key,s=r.getNext().key;
if(this.comparator(i,s)!==0)return!1}
return!0}
toArray(){
const e=[];
return this.forEach(n=>{
e.push(n)}
),e}
toString(){
const e=[];
return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}
copy(e){
const n=new Mt(this.comparator);
return n.data=e,n}
}
class Yv{
constructor(e){
this.iter=e}
getNext(){
return this.iter.getNext().key}
hasNext(){
return this.iter.hasNext()}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{
constructor(e){
this.fields=e,e.sort(Dt.comparator)}
static empty(){
return new wn([])}
unionWith(e){
let n=new Mt(Dt.comparator);
for(const r of this.fields)n=n.add(r);
for(const r of e)n=n.add(r);
return new wn(n.toArray())}
covers(e){
for(const n of this.fields)if(n.isPrefixOf(e))return!0;
return!1}
isEqual(e){
return $o(this.fields,e.fields,(n,r)=>n.isEqual(r))}
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE extends Error{
constructor(){
super(...arguments),this.name="Base64DecodeError"}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{
constructor(e){
this.binaryString=e}
static fromBase64String(e){
const n=function(i){
try{
return atob(i)}
catch(s){
throw typeof DOMException<"u"&&s instanceof DOMException?new uE("Invalid base64 string: "+s):s}
}
(e);
return new jt(n)}
static fromUint8Array(e){
const n=function(i){
let s="";
for(let o=0;
o<i.length;
++o)s+=String.fromCharCode(i[o]);
return s}
(e);
return new jt(n)}
[Symbol.iterator](){
let e=0;
return{
next:()=>e<this.binaryString.length?{
value:this.binaryString.charCodeAt(e++),done:!1}
:{
value:void 0,done:!0}
}
}
toBase64(){
return function(n){
return btoa(n)}
(this.binaryString)}
toUint8Array(){
return function(n){
const r=new Uint8Array(n.length);
for(let i=0;
i<n.length;
i++)r[i]=n.charCodeAt(i);
return r}
(this.binaryString)}
approximateByteSize(){
return 2*this.binaryString.length}
compareTo(e){
return Pe(this.binaryString,e.binaryString)}
isEqual(e){
return this.binaryString===e.binaryString}
}
jt.EMPTY_BYTE_STRING=new jt("");
const LV=new RegExp(/^\d{
4}
-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
function Gi(t){
if(Ue(!!t),typeof t=="string"){
let e=0;
const n=LV.exec(t);
if(Ue(!!n),n[1]){
let i=n[1];
i=(i+"000000000").substr(0,9),e=Number(i)}
const r=new Date(t);
return{
seconds:Math.floor(r.getTime()/1e3),nanos:e}
}
return{
seconds:ct(t.seconds),nanos:ct(t.nanos)}
}
function ct(t){
return typeof t=="number"?t:typeof t=="string"?Number(t):0}
function Ds(t){
return typeof t=="string"?jt.fromBase64String(t):jt.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jg(t){
var e,n;
return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{
}
).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}
function Fg(t){
const e=t.mapValue.fields.__previous_value__;
return jg(e)?Fg(e):e}
function Pl(t){
const e=Gi(t.mapValue.fields.__local_write_time__.timestampValue);
return new wt(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jV{
constructor(e,n,r,i,s,o,l,c,u){
this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u}
}
class Dl{
constructor(e,n){
this.projectId=e,this.database=n||"(default)"}
static empty(){
return new Dl("","")}
get isDefaultDatabase(){
return this.database==="(default)"}
isEqual(e){
return e instanceof Dl&&e.projectId===this.projectId&&e.database===this.database}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uu={
mapValue:{
fields:{
__type__:{
stringValue:"__max__"}
}
}
}
;
function Os(t){
return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?jg(t)?4:BV(t)?9007199254740991:FV(t)?10:11:ye()}
function wr(t,e){
if(t===e)return!0;
const n=Os(t);
if(n!==Os(e))return!1;
switch(n){
case 0:case 9007199254740991:return!0;
case 1:return t.booleanValue===e.booleanValue;
case 4:return Pl(t).isEqual(Pl(e));
case 3:return function(i,s){
if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;
const o=Gi(i.timestampValue),l=Gi(s.timestampValue);
return o.seconds===l.seconds&&o.nanos===l.nanos}
(t,e);
case 5:return t.stringValue===e.stringValue;
case 6:return function(i,s){
return Ds(i.bytesValue).isEqual(Ds(s.bytesValue))}
(t,e);
case 7:return t.referenceValue===e.referenceValue;
case 8:return function(i,s){
return ct(i.geoPointValue.latitude)===ct(s.geoPointValue.latitude)&&ct(i.geoPointValue.longitude)===ct(s.geoPointValue.longitude)}
(t,e);
case 2:return function(i,s){
if("integerValue"in i&&"integerValue"in s)return ct(i.integerValue)===ct(s.integerValue);
if("doubleValue"in i&&"doubleValue"in s){
const o=ct(i.doubleValue),l=ct(s.doubleValue);
return o===l?Ed(o)===Ed(l):isNaN(o)&&isNaN(l)}
return!1}
(t,e);
case 9:return $o(t.arrayValue.values||[],e.arrayValue.values||[],wr);
case 10:case 11:return function(i,s){
const o=i.mapValue.fields||{
}
,l=s.mapValue.fields||{
}
;
if(Qv(o)!==Qv(l))return!1;
for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!wr(o[c],l[c])))return!1;
return!0}
(t,e);
default:return ye()}
}
function Ol(t,e){
return(t.values||[]).find(n=>wr(n,e))!==void 0}
function zo(t,e){
if(t===e)return 0;
const n=Os(t),r=Os(e);
if(n!==r)return Pe(n,r);
switch(n){
case 0:case 9007199254740991:return 0;
case 1:return Pe(t.booleanValue,e.booleanValue);
case 2:return function(s,o){
const l=ct(s.integerValue||s.doubleValue),c=ct(o.integerValue||o.doubleValue);
return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}
(t,e);
case 3:return Xv(t.timestampValue,e.timestampValue);
case 4:return Xv(Pl(t),Pl(e));
case 5:return Pe(t.stringValue,e.stringValue);
case 6:return function(s,o){
const l=Ds(s),c=Ds(o);
return l.compareTo(c)}
(t.bytesValue,e.bytesValue);
case 7:return function(s,o){
const l=s.split("/"),c=o.split("/");
for(let u=0;
u<l.length&&u<c.length;
u++){
const d=Pe(l[u],c[u]);
if(d!==0)return d}
return Pe(l.length,c.length)}
(t.referenceValue,e.referenceValue);
case 8:return function(s,o){
const l=Pe(ct(s.latitude),ct(o.latitude));
return l!==0?l:Pe(ct(s.longitude),ct(o.longitude))}
(t.geoPointValue,e.geoPointValue);
case 9:return Jv(t.arrayValue,e.arrayValue);
case 10:return function(s,o){
var l,c,u,d;
const m=s.fields||{
}
,g=o.fields||{
}
,_=(l=m.value)===null||l===void 0?void 0:l.arrayValue,w=(c=g.value)===null||c===void 0?void 0:c.arrayValue,N=Pe(((u=_==null?void 0:_.values)===null||u===void 0?void 0:u.length)||0,((d=w==null?void 0:w.values)===null||d===void 0?void 0:d.length)||0);
return N!==0?N:Jv(_,w)}
(t.mapValue,e.mapValue);
case 11:return function(s,o){
if(s===uu.mapValue&&o===uu.mapValue)return 0;
if(s===uu.mapValue)return 1;
if(o===uu.mapValue)return-1;
const l=s.fields||{
}
,c=Object.keys(l),u=o.fields||{
}
,d=Object.keys(u);
c.sort(),d.sort();
for(let m=0;
m<c.length&&m<d.length;
++m){
const g=Pe(c[m],d[m]);
if(g!==0)return g;
const _=zo(l[c[m]],u[d[m]]);
if(_!==0)return _}
return Pe(c.length,d.length)}
(t.mapValue,e.mapValue);
default:throw ye()}
}
function Xv(t,e){
if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Pe(t,e);
const n=Gi(t),r=Gi(e),i=Pe(n.seconds,r.seconds);
return i!==0?i:Pe(n.nanos,r.nanos)}
function Jv(t,e){
const n=t.values||[],r=e.values||[];
for(let i=0;
i<n.length&&i<r.length;
++i){
const s=zo(n[i],r[i]);
if(s)return s}
return Pe(n.length,r.length)}
function qo(t){
return Hp(t)}
function Hp(t){
return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){
const r=Gi(n);
return`time(${
r.seconds}
,${
r.nanos}
)`}
(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){
return Ds(n).toBase64()}
(t.bytesValue):"referenceValue"in t?function(n){
return ce.fromName(n).toString()}
(t.referenceValue):"geoPointValue"in t?function(n){
return`geo(${
n.latitude}
,${
n.longitude}
)`}
(t.geoPointValue):"arrayValue"in t?function(n){
let r="[",i=!0;
for(const s of n.values||[])i?i=!1:r+=",",r+=Hp(s);
return r+"]"}
(t.arrayValue):"mapValue"in t?function(n){
const r=Object.keys(n.fields||{
}
).sort();
let i="{
",s=!0;
for(const o of r)s?s=!1:i+=",",i+=`${
o}
:${
Hp(n.fields[o])}
`;
return i+"}
"}
(t.mapValue):ye()}
function Zv(t,e){
return{
referenceValue:`projects/${
t.projectId}
/databases/${
t.database}
/documents/${
e.path.canonicalString()}
`}
}
function Kp(t){
return!!t&&"integerValue"in t}
function Bg(t){
return!!t&&"arrayValue"in t}
function e_(t){
return!!t&&"nullValue"in t}
function t_(t){
return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}
function Pu(t){
return!!t&&"mapValue"in t}
function FV(t){
var e,n;
return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{
}
).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}
function tl(t){
if(t.geoPointValue)return{
geoPointValue:Object.assign({
}
,t.geoPointValue)}
;
if(t.timestampValue&&typeof t.timestampValue=="object")return{
timestampValue:Object.assign({
}
,t.timestampValue)}
;
if(t.mapValue){
const e={
mapValue:{
fields:{
}
}
}
;
return Ls(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=tl(r)),e}
if(t.arrayValue){
const e={
arrayValue:{
values:[]}
}
;
for(let n=0;
n<(t.arrayValue.values||[]).length;
++n)e.arrayValue.values[n]=tl(t.arrayValue.values[n]);
return e}
return Object.assign({
}
,t)}
function BV(t){
return(((t.mapValue||{
}
).fields||{
}
).__type__||{
}
).stringValue==="__max__"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{
constructor(e){
this.value=e}
static empty(){
return new un({
mapValue:{
}
}
)}
field(e){
if(e.isEmpty())return this.value;
{
let n=this.value;
for(let r=0;
r<e.length-1;
++r)if(n=(n.mapValue.fields||{
}
)[e.get(r)],!Pu(n))return null;
return n=(n.mapValue.fields||{
}
)[e.lastSegment()],n||null}
}
set(e,n){
this.getFieldsMap(e.popLast())[e.lastSegment()]=tl(n)}
setAll(e){
let n=Dt.emptyPath(),r={
}
,i=[];
e.forEach((o,l)=>{
if(!n.isImmediateParentOf(l)){
const c=this.getFieldsMap(n);
this.applyChanges(c,r,i),r={
}
,i=[],n=l.popLast()}
o?r[l.lastSegment()]=tl(o):i.push(l.lastSegment())}
);
const s=this.getFieldsMap(n);
this.applyChanges(s,r,i)}
delete(e){
const n=this.field(e.popLast());
Pu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}
isEqual(e){
return wr(this.value,e.value)}
getFieldsMap(e){
let n=this.value;
n.mapValue.fields||(n.mapValue={
fields:{
}
}
);
for(let r=0;
r<e.length;
++r){
let i=n.mapValue.fields[e.get(r)];
Pu(i)&&i.mapValue.fields||(i={
mapValue:{
fields:{
}
}
}
,n.mapValue.fields[e.get(r)]=i),n=i}
return n.mapValue.fields}
applyChanges(e,n,r){
Ls(n,(i,s)=>e[i]=s);
for(const i of r)delete e[i]}
clone(){
return new un(tl(this.value))}
}
function dE(t){
const e=[];
return Ls(t.fields,(n,r)=>{
const i=new Dt([n]);
if(Pu(r)){
const s=dE(r.mapValue).fields;
if(s.length===0)e.push(i);
else for(const o of s)e.push(i.child(o))}
else e.push(i)}
),new wn(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{
constructor(e,n,r,i,s,o,l){
this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}
static newInvalidDocument(e){
return new Yt(e,0,ve.min(),ve.min(),ve.min(),un.empty(),0)}
static newFoundDocument(e,n,r,i){
return new Yt(e,1,n,ve.min(),r,i,0)}
static newNoDocument(e,n){
return new Yt(e,2,n,ve.min(),ve.min(),un.empty(),0)}
static newUnknownDocument(e,n){
return new Yt(e,3,n,ve.min(),ve.min(),un.empty(),2)}
convertToFoundDocument(e,n){
return!this.createTime.isEqual(ve.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}
convertToNoDocument(e){
return this.version=e,this.documentType=2,this.data=un.empty(),this.documentState=0,this}
convertToUnknownDocument(e){
return this.version=e,this.documentType=3,this.data=un.empty(),this.documentState=2,this}
setHasCommittedMutations(){
return this.documentState=2,this}
setHasLocalMutations(){
return this.documentState=1,this.version=ve.min(),this}
setReadTime(e){
return this.readTime=e,this}
get hasLocalMutations(){
return this.documentState===1}
get hasCommittedMutations(){
return this.documentState===2}
get hasPendingWrites(){
return this.hasLocalMutations||this.hasCommittedMutations}
isValidDocument(){
return this.documentType!==0}
isFoundDocument(){
return this.documentType===1}
isNoDocument(){
return this.documentType===2}
isUnknownDocument(){
return this.documentType===3}
isEqual(e){
return e instanceof Yt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}
mutableCopy(){
return new Yt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}
toString(){
return`Document(${
this.key}
, ${
this.version}
, ${
JSON.stringify(this.data.value)}
, {
createTime: ${
this.createTime}
}
), {
documentType: ${
this.documentType}
}
), {
documentState: ${
this.documentState}
}
)`}
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{
constructor(e,n){
this.position=e,this.inclusive=n}
}
function n_(t,e,n){
let r=0;
for(let i=0;
i<t.position.length;
i++){
const s=e[i],o=t.position[i];
if(s.field.isKeyField()?r=ce.comparator(ce.fromName(o.referenceValue),n.key):r=zo(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}
return r}
function r_(t,e){
if(t===null)return e===null;
if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;
for(let n=0;
n<t.position.length;
n++)if(!wr(t.position[n],e.position[n]))return!1;
return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{
constructor(e,n="asc"){
this.field=e,this.dir=n}
}
function UV(t,e){
return t.dir===e.dir&&t.field.isEqual(e.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE{
}
class yt extends hE{
constructor(e,n,r){
super(),this.field=e,this.op=n,this.value=r}
static create(e,n,r){
return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new zV(e,n,r):n==="array-contains"?new WV(e,r):n==="in"?new HV(e,r):n==="not-in"?new KV(e,r):n==="array-contains-any"?new QV(e,r):new yt(e,n,r)}
static createKeyFieldInFilter(e,n,r){
return n==="in"?new qV(e,r):new GV(e,r)}
matches(e){
const n=e.data.field(this.field);
return this.op==="!="?n!==null&&this.matchesComparison(zo(n,this.value)):n!==null&&Os(this.value)===Os(n)&&this.matchesComparison(zo(n,this.value))}
matchesComparison(e){
switch(this.op){
case"<":return e<0;
case"<=":return e<=0;
case"==":return e===0;
case"!=":return e!==0;
case">":return e>0;
case">=":return e>=0;
default:return ye()}
}
isInequality(){
return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}
getFlattenedFilters(){
return[this]}
getFilters(){
return[this]}
}
class tr extends hE{
constructor(e,n){
super(),this.filters=e,this.op=n,this.ae=null}
static create(e,n){
return new tr(e,n)}
matches(e){
return fE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}
getFlattenedFilters(){
return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}
getFilters(){
return Object.assign([],this.filters)}
}
function fE(t){
return t.op==="and"}
function pE(t){
return $V(t)&&fE(t)}
function $V(t){
for(const e of t.filters)if(e instanceof tr)return!1;
return!0}
function Qp(t){
if(t instanceof yt)return t.field.canonicalString()+t.op.toString()+qo(t.value);
if(pE(t))return t.filters.map(e=>Qp(e)).join(",");
{
const e=t.filters.map(n=>Qp(n)).join(",");
return`${
t.op}
(${
e}
)`}
}
function mE(t,e){
return t instanceof yt?function(r,i){
return i instanceof yt&&r.op===i.op&&r.field.isEqual(i.field)&&wr(r.value,i.value)}
(t,e):t instanceof tr?function(r,i){
return i instanceof tr&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&mE(o,i.filters[l]),!0):!1}
(t,e):void ye()}
function gE(t){
return t instanceof yt?function(n){
return`${
n.field.canonicalString()}
 ${
n.op}
 ${
qo(n.value)}
`}
(t):t instanceof tr?function(n){
return n.op.toString()+" {
"+n.getFilters().map(gE).join(" ,")+"}
"}
(t):"Filter"}
class zV extends yt{
constructor(e,n,r){
super(e,n,r),this.key=ce.fromName(r.referenceValue)}
matches(e){
const n=ce.comparator(e.key,this.key);
return this.matchesComparison(n)}
}
class qV extends yt{
constructor(e,n){
super(e,"in",n),this.keys=yE("in",n)}
matches(e){
return this.keys.some(n=>n.isEqual(e.key))}
}
class GV extends yt{
constructor(e,n){
super(e,"not-in",n),this.keys=yE("not-in",n)}
matches(e){
return!this.keys.some(n=>n.isEqual(e.key))}
}
function yE(t,e){
var n;
return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ce.fromName(r.referenceValue))}
class WV extends yt{
constructor(e,n){
super(e,"array-contains",n)}
matches(e){
const n=e.data.field(this.field);
return Bg(n)&&Ol(n.arrayValue,this.value)}
}
class HV extends yt{
constructor(e,n){
super(e,"in",n)}
matches(e){
const n=e.data.field(this.field);
return n!==null&&Ol(this.value.arrayValue,n)}
}
class KV extends yt{
constructor(e,n){
super(e,"not-in",n)}
matches(e){
if(Ol(this.value.arrayValue,{
nullValue:"NULL_VALUE"}
))return!1;
const n=e.data.field(this.field);
return n!==null&&!Ol(this.value.arrayValue,n)}
}
class QV extends yt{
constructor(e,n){
super(e,"array-contains-any",n)}
matches(e){
const n=e.data.field(this.field);
return!(!Bg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ol(this.value.arrayValue,r))}
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YV{
constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){
this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}
}
function i_(t,e=null,n=[],r=[],i=null,s=null,o=null){
return new YV(t,e,n,r,i,s,o)}
function Ug(t){
const e=_e(t);
if(e.ue===null){
let n=e.path.canonicalString();
e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Qp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){
return s.field.canonicalString()+s.dir}
(r)).join(","),oh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>qo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>qo(r)).join(",")),e.ue=n}
return e.ue}
function $g(t,e){
if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;
for(let n=0;
n<t.orderBy.length;
n++)if(!UV(t.orderBy[n],e.orderBy[n]))return!1;
if(t.filters.length!==e.filters.length)return!1;
for(let n=0;
n<t.filters.length;
n++)if(!mE(t.filters[n],e.filters[n]))return!1;
return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!r_(t.startAt,e.startAt)&&r_(t.endAt,e.endAt)}
function Yp(t){
return ce.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{
constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,c=null){
this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}
}
function XV(t,e,n,r,i,s,o,l){
return new Jl(t,e,n,r,i,s,o,l)}
function zg(t){
return new Jl(t)}
function s_(t){
return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}
function vE(t){
return t.collectionGroup!==null}
function nl(t){
const e=_e(t);
if(e.ce===null){
e.ce=[];
const n=new Set;
for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());
const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";
(function(o){
let l=new Mt(Dt.comparator);
return o.filters.forEach(c=>{
c.getFlattenedFilters().forEach(u=>{
u.isInequality()&&(l=l.add(u.field))}
)}
),l}
)(e).forEach(s=>{
n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Id(s,r))}
),n.has(Dt.keyField().canonicalString())||e.ce.push(new Id(Dt.keyField(),r))}
return e.ce}
function vr(t){
const e=_e(t);
return e.le||(e.le=JV(e,nl(t))),e.le}
function JV(t,e){
if(t.limitType==="F")return i_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);
{
e=e.map(i=>{
const s=i.dir==="desc"?"asc":"desc";
return new Id(i.field,s)}
);
const n=t.endAt?new Td(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Td(t.startAt.position,t.startAt.inclusive):null;
return i_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}
}
function Xp(t,e){
const n=t.filters.concat([e]);
return new Jl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}
function Jp(t,e,n){
return new Jl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}
function ah(t,e){
return $g(vr(t),vr(e))&&t.limitType===e.limitType}
function _E(t){
return`${
Ug(vr(t))}
|lt:${
t.limitType}
`}
function no(t){
return`Query(target=${
function(n){
let r=n.path.canonicalString();
return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${
n.filters.map(i=>gE(i)).join(", ")}
]`),oh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${
n.orderBy.map(i=>function(o){
return`${
o.field.canonicalString()}
 (${
o.dir}
)`}
(i)).join(", ")}
]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>qo(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>qo(i)).join(",")),`Target(${
r}
)`}
(vr(t))}
;
 limitType=${
t.limitType}
)`}
function lh(t,e){
return e.isFoundDocument()&&function(r,i){
const s=i.key.path;
return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):ce.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}
(t,e)&&function(r,i){
for(const s of nl(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;
return!0}
(t,e)&&function(r,i){
for(const s of r.filters)if(!s.matches(i))return!1;
return!0}
(t,e)&&function(r,i){
return!(r.startAt&&!function(o,l,c){
const u=n_(o,l,c);
return o.inclusive?u<=0:u<0}
(r.startAt,nl(r),i)||r.endAt&&!function(o,l,c){
const u=n_(o,l,c);
return o.inclusive?u>=0:u>0}
(r.endAt,nl(r),i))}
(t,e)}
function ZV(t){
return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}
function wE(t){
return(e,n)=>{
let r=!1;
for(const i of nl(t)){
const s=eM(i,e,n);
if(s!==0)return s;
r=r||i.field.isKeyField()}
return 0}
}
function eM(t,e,n){
const r=t.field.isKeyField()?ce.comparator(e.key,n.key):function(s,o,l){
const c=o.data.field(s),u=l.data.field(s);
return c!==null&&u!==null?zo(c,u):ye()}
(t.field,e,n);
switch(t.dir){
case"asc":return r;
case"desc":return-1*r;
default:return ye()}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{
constructor(e,n){
this.mapKeyFn=e,this.equalsFn=n,this.inner={
}
,this.innerSize=0}
get(e){
const n=this.mapKeyFn(e),r=this.inner[n];
if(r!==void 0){
for(const[i,s]of r)if(this.equalsFn(i,e))return s}
}
has(e){
return this.get(e)!==void 0}
set(e,n){
const r=this.mapKeyFn(e),i=this.inner[r];
if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;
for(let s=0;
s<i.length;
s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);
i.push([e,n]),this.innerSize++}
delete(e){
const n=this.mapKeyFn(e),r=this.inner[n];
if(r===void 0)return!1;
for(let i=0;
i<r.length;
i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;
return!1}
forEach(e){
Ls(this.inner,(n,r)=>{
for(const[i,s]of r)e(i,s)}
)}
isEmpty(){
return cE(this.inner)}
size(){
return this.innerSize}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tM=new ot(ce.comparator);
function Qr(){
return tM}
const xE=new ot(ce.comparator);
function Ba(...t){
let e=xE;
for(const n of t)e=e.insert(n.key,n);
return e}
function bE(t){
let e=xE;
return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}
function ws(){
return rl()}
function EE(){
return rl()}
function rl(){
return new ra(t=>t.toString(),(t,e)=>t.isEqual(e))}
const nM=new ot(ce.comparator),rM=new Mt(ce.comparator);
function Te(...t){
let e=rM;
for(const n of t)e=e.add(n);
return e}
const iM=new Mt(Pe);
function sM(){
return iM}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qg(t,e){
if(t.useProto3Json){
if(isNaN(e))return{
doubleValue:"NaN"}
;
if(e===1/0)return{
doubleValue:"Infinity"}
;
if(e===-1/0)return{
doubleValue:"-Infinity"}
}
return{
doubleValue:Ed(e)?"-0":e}
}
function TE(t){
return{
integerValue:""+t}
}
function oM(t,e){
return MV(e)?TE(e):qg(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{
constructor(){
this._=void 0}
}
function aM(t,e,n){
return t instanceof Sd?function(i,s){
const o={
fields:{
__type__:{
stringValue:"server_timestamp"}
,__local_write_time__:{
timestampValue:{
seconds:i.seconds,nanos:i.nanoseconds}
}
}
}
;
return s&&jg(s)&&(s=Fg(s)),s&&(o.fields.__previous_value__=s),{
mapValue:o}
}
(n,e):t instanceof Vl?SE(t,e):t instanceof Ml?AE(t,e):function(i,s){
const o=IE(i,s),l=o_(o)+o_(i.Pe);
return Kp(o)&&Kp(i.Pe)?TE(l):qg(i.serializer,l)}
(t,e)}
function lM(t,e,n){
return t instanceof Vl?SE(t,e):t instanceof Ml?AE(t,e):n}
function IE(t,e){
return t instanceof Ad?function(r){
return Kp(r)||function(s){
return!!s&&"doubleValue"in s}
(r)}
(e)?e:{
integerValue:0}
:null}
class Sd extends ch{
}
class Vl extends ch{
constructor(e){
super(),this.elements=e}
}
function SE(t,e){
const n=CE(e);
for(const r of t.elements)n.some(i=>wr(i,r))||n.push(r);
return{
arrayValue:{
values:n}
}
}
class Ml extends ch{
constructor(e){
super(),this.elements=e}
}
function AE(t,e){
let n=CE(e);
for(const r of t.elements)n=n.filter(i=>!wr(i,r));
return{
arrayValue:{
values:n}
}
}
class Ad extends ch{
constructor(e,n){
super(),this.serializer=e,this.Pe=n}
}
function o_(t){
return ct(t.integerValue||t.doubleValue)}
function CE(t){
return Bg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
function cM(t,e){
return t.field.isEqual(e.field)&&function(r,i){
return r instanceof Vl&&i instanceof Vl||r instanceof Ml&&i instanceof Ml?$o(r.elements,i.elements,wr):r instanceof Ad&&i instanceof Ad?wr(r.Pe,i.Pe):r instanceof Sd&&i instanceof Sd}
(t.transform,e.transform)}
class uM{
constructor(e,n){
this.version=e,this.transformResults=n}
}
class rn{
constructor(e,n){
this.updateTime=e,this.exists=n}
static none(){
return new rn}
static exists(e){
return new rn(void 0,e)}
static updateTime(e){
return new rn(e)}
get isNone(){
return this.updateTime===void 0&&this.exists===void 0}
isEqual(e){
return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}
}
function Du(t,e){
return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}
class uh{
}
function kE(t,e){
if(!t.hasLocalMutations||e&&e.fields.length===0)return null;
if(e===null)return t.isNoDocument()?new dh(t.key,rn.none()):new Zl(t.key,t.data,rn.none());
{
const n=t.data,r=un.empty();
let i=new Mt(Dt.comparator);
for(let s of e.fields)if(!i.has(s)){
let o=n.field(s);
o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}
return new Yi(t.key,r,new wn(i.toArray()),rn.none())}
}
function dM(t,e,n){
t instanceof Zl?function(i,s,o){
const l=i.value.clone(),c=l_(i.fieldTransforms,s,o.transformResults);
l.setAll(c),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}
(t,e,n):t instanceof Yi?function(i,s,o){
if(!Du(i.precondition,s))return void s.convertToUnknownDocument(o.version);
const l=l_(i.fieldTransforms,s,o.transformResults),c=s.data;
c.setAll(RE(i)),c.setAll(l),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}
(t,e,n):function(i,s,o){
s.convertToNoDocument(o.version).setHasCommittedMutations()}
(0,e,n)}
function il(t,e,n,r){
return t instanceof Zl?function(s,o,l,c){
if(!Du(s.precondition,o))return l;
const u=s.value.clone(),d=c_(s.fieldTransforms,c,o);
return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}
(t,e,n,r):t instanceof Yi?function(s,o,l,c){
if(!Du(s.precondition,o))return l;
const u=c_(s.fieldTransforms,c,o),d=o.data;
return d.setAll(RE(s)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}
(t,e,n,r):function(s,o,l){
return Du(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}
(t,e,n)}
function hM(t,e){
let n=null;
for(const r of t.fieldTransforms){
const i=e.data.field(r.field),s=IE(r.transform,i||null);
s!=null&&(n===null&&(n=un.empty()),n.set(r.field,s))}
return n||null}
function a_(t,e){
return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){
return r===void 0&&i===void 0||!(!r||!i)&&$o(r,i,(s,o)=>cM(s,o))}
(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}
class Zl extends uh{
constructor(e,n,r,i=[]){
super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}
getFieldMask(){
return null}
}
class Yi extends uh{
constructor(e,n,r,i,s=[]){
super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}
getFieldMask(){
return this.fieldMask}
}
function RE(t){
const e=new Map;
return t.fieldMask.fields.forEach(n=>{
if(!n.isEmpty()){
const r=t.data.field(n);
e.set(n,r)}
}
),e}
function l_(t,e,n){
const r=new Map;
Ue(t.length===n.length);
for(let i=0;
i<n.length;
i++){
const s=t[i],o=s.transform,l=e.data.field(s.field);
r.set(s.field,lM(o,l,n[i]))}
return r}
function c_(t,e,n){
const r=new Map;
for(const i of t){
const s=i.transform,o=n.data.field(i.field);
r.set(i.field,aM(s,o,e))}
return r}
class dh extends uh{
constructor(e,n){
super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}
getFieldMask(){
return null}
}
class fM extends uh{
constructor(e,n){
super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}
getFieldMask(){
return null}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pM{
constructor(e,n,r,i){
this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}
applyToRemoteDocument(e,n){
const r=n.mutationResults;
for(let i=0;
i<this.mutations.length;
i++){
const s=this.mutations[i];
s.key.isEqual(e.key)&&dM(s,e,r[i])}
}
applyToLocalView(e,n){
for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=il(r,e,n,this.localWriteTime));
for(const r of this.mutations)r.key.isEqual(e.key)&&(n=il(r,e,n,this.localWriteTime));
return n}
applyToLocalDocumentSet(e,n){
const r=EE();
return this.mutations.forEach(i=>{
const s=e.get(i.key),o=s.overlayedDocument;
let l=this.applyToLocalView(o,s.mutatedFields);
l=n.has(i.key)?null:l;
const c=kE(o,l);
c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(ve.min())}
),r}
keys(){
return this.mutations.reduce((e,n)=>e.add(n.key),Te())}
isEqual(e){
return this.batchId===e.batchId&&$o(this.mutations,e.mutations,(n,r)=>a_(n,r))&&$o(this.baseMutations,e.baseMutations,(n,r)=>a_(n,r))}
}
class Gg{
constructor(e,n,r,i){
this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}
static from(e,n,r){
Ue(e.mutations.length===r.length);
let i=function(){
return nM}
();
const s=e.mutations;
for(let o=0;
o<s.length;
o++)i=i.insert(s[o].key,r[o].version);
return new Gg(e,n,r,i)}
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mM{
constructor(e,n){
this.largestBatchId=e,this.mutation=n}
getKey(){
return this.mutation.key}
isEqual(e){
return e!==null&&this.mutation===e.mutation}
toString(){
return`Overlay{

      largestBatchId: ${
this.largestBatchId}
,
      mutation: ${
this.mutation.toString()}

    }
`}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gM{
constructor(e,n){
this.count=e,this.unchangedNames=n}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var mt,Se;
function yM(t){
switch(t){
default:return ye();
case W.CANCELLED:case W.UNKNOWN:case W.DEADLINE_EXCEEDED:case W.RESOURCE_EXHAUSTED:case W.INTERNAL:case W.UNAVAILABLE:case W.UNAUTHENTICATED:return!1;
case W.INVALID_ARGUMENT:case W.NOT_FOUND:case W.ALREADY_EXISTS:case W.PERMISSION_DENIED:case W.FAILED_PRECONDITION:case W.ABORTED:case W.OUT_OF_RANGE:case W.UNIMPLEMENTED:case W.DATA_LOSS:return!0}
}
function NE(t){
if(t===void 0)return Kr("GRPC error has no .code"),W.UNKNOWN;
switch(t){
case mt.OK:return W.OK;
case mt.CANCELLED:return W.CANCELLED;
case mt.UNKNOWN:return W.UNKNOWN;
case mt.DEADLINE_EXCEEDED:return W.DEADLINE_EXCEEDED;
case mt.RESOURCE_EXHAUSTED:return W.RESOURCE_EXHAUSTED;
case mt.INTERNAL:return W.INTERNAL;
case mt.UNAVAILABLE:return W.UNAVAILABLE;
case mt.UNAUTHENTICATED:return W.UNAUTHENTICATED;
case mt.INVALID_ARGUMENT:return W.INVALID_ARGUMENT;
case mt.NOT_FOUND:return W.NOT_FOUND;
case mt.ALREADY_EXISTS:return W.ALREADY_EXISTS;
case mt.PERMISSION_DENIED:return W.PERMISSION_DENIED;
case mt.FAILED_PRECONDITION:return W.FAILED_PRECONDITION;
case mt.ABORTED:return W.ABORTED;
case mt.OUT_OF_RANGE:return W.OUT_OF_RANGE;
case mt.UNIMPLEMENTED:return W.UNIMPLEMENTED;
case mt.DATA_LOSS:return W.DATA_LOSS;
default:return ye()}
}
(Se=mt||(mt={
}
))[Se.OK=0]="OK",Se[Se.CANCELLED=1]="CANCELLED",Se[Se.UNKNOWN=2]="UNKNOWN",Se[Se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Se[Se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Se[Se.NOT_FOUND=5]="NOT_FOUND",Se[Se.ALREADY_EXISTS=6]="ALREADY_EXISTS",Se[Se.PERMISSION_DENIED=7]="PERMISSION_DENIED",Se[Se.UNAUTHENTICATED=16]="UNAUTHENTICATED",Se[Se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Se[Se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Se[Se.ABORTED=10]="ABORTED",Se[Se.OUT_OF_RANGE=11]="OUT_OF_RANGE",Se[Se.UNIMPLEMENTED=12]="UNIMPLEMENTED",Se[Se.INTERNAL=13]="INTERNAL",Se[Se.UNAVAILABLE=14]="UNAVAILABLE",Se[Se.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vM(){
return new TextEncoder}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _M=new Es([4294967295,4294967295],0);
function u_(t){
const e=vM().encode(t),n=new tE;
return n.update(e),new Uint8Array(n.digest())}
function d_(t){
const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);
return[new Es([n,r],0),new Es([i,s],0)]}
class Wg{
constructor(e,n,r){
if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ua(`Invalid padding: ${
n}
`);
if(r<0)throw new Ua(`Invalid hash count: ${
r}
`);
if(e.length>0&&this.hashCount===0)throw new Ua(`Invalid hash count: ${
r}
`);
if(e.length===0&&n!==0)throw new Ua(`Invalid padding when bitmap length is 0: ${
n}
`);
this.Ie=8*e.length-n,this.Te=Es.fromNumber(this.Ie)}
Ee(e,n,r){
let i=e.add(n.multiply(Es.fromNumber(r)));
return i.compare(_M)===1&&(i=new Es([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}
de(e){
return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}
mightContain(e){
if(this.Ie===0)return!1;
const n=u_(e),[r,i]=d_(n);
for(let s=0;
s<this.hashCount;
s++){
const o=this.Ee(r,i,s);
if(!this.de(o))return!1}
return!0}
static create(e,n,r){
const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Wg(s,i,n);
return r.forEach(l=>o.insert(l)),o}
insert(e){
if(this.Ie===0)return;
const n=u_(e),[r,i]=d_(n);
for(let s=0;
s<this.hashCount;
s++){
const o=this.Ee(r,i,s);
this.Ae(o)}
}
Ae(e){
const n=Math.floor(e/8),r=e%8;
this.bitmap[n]|=1<<r}
}
class Ua extends Error{
constructor(){
super(...arguments),this.name="BloomFilterError"}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{
constructor(e,n,r,i,s){
this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}
static createSynthesizedRemoteEventForCurrentChange(e,n,r){
const i=new Map;
return i.set(e,ec.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new hh(ve.min(),i,new ot(Pe),Qr(),Te())}
}
class ec{
constructor(e,n,r,i,s){
this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}
static createSynthesizedTargetChangeForCurrentChange(e,n,r){
return new ec(r,n,Te(),Te(),Te())}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{
constructor(e,n,r,i){
this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}
}
class PE{
constructor(e,n){
this.targetId=e,this.me=n}
}
class DE{
constructor(e,n,r=jt.EMPTY_BYTE_STRING,i=null){
this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}
}
class h_{
constructor(){
this.fe=0,this.ge=p_(),this.pe=jt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}
get current(){
return this.ye}
get resumeToken(){
return this.pe}
get Se(){
return this.fe!==0}
get be(){
return this.we}
De(e){
e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}
ve(){
let e=Te(),n=Te(),r=Te();
return this.ge.forEach((i,s)=>{
switch(s){
case 0:e=e.add(i);
break;
case 2:n=n.add(i);
break;
case 1:r=r.add(i);
break;
default:ye()}
}
),new ec(this.pe,this.ye,e,n,r)}
Ce(){
this.we=!1,this.ge=p_()}
Fe(e,n){
this.we=!0,this.ge=this.ge.insert(e,n)}
Me(e){
this.we=!0,this.ge=this.ge.remove(e)}
xe(){
this.fe+=1}
Oe(){
this.fe-=1,Ue(this.fe>=0)}
Ne(){
this.we=!0,this.ye=!0}
}
class wM{
constructor(e){
this.Le=e,this.Be=new Map,this.ke=Qr(),this.qe=f_(),this.Qe=new ot(Pe)}
Ke(e){
for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);
for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}
We(e){
this.forEachTarget(e,n=>{
const r=this.Ge(n);
switch(e.state){
case 0:this.ze(n)&&r.De(e.resumeToken);
break;
case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);
break;
case 2:r.Oe(),r.Se||this.removeTarget(n);
break;
case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));
break;
case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));
break;
default:ye()}
}
)}
forEachTarget(e,n){
e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{
this.ze(i)&&n(i)}
)}
He(e){
const n=e.targetId,r=e.me.count,i=this.Je(n);
if(i){
const s=i.target;
if(Yp(s))if(r===0){
const o=new ce(s.path);
this.Ue(n,o,Yt.newNoDocument(o,ve.min()))}
else Ue(r===1);
else{
const o=this.Ye(n);
if(o!==r){
const l=this.Ze(e),c=l?this.Xe(l,e,o):1;
if(c!==0){
this.je(n);
const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";
this.Qe=this.Qe.insert(n,u)}
}
}
}
}
Ze(e){
const n=e.me.unchangedNames;
if(!n||!n.bits)return null;
const{
bits:{
bitmap:r="",padding:i=0}
,hashCount:s=0}
=n;
let o,l;
try{
o=Ds(r).toUint8Array()}
catch(c){
if(c instanceof uE)return Uo("Decoding the base64 bloom filter in existence filter failed ("+c.message+");
 ignoring the bloom filter and falling back to full re-query."),null;
throw c}
try{
l=new Wg(o,i,s)}
catch(c){
return Uo(c instanceof Ua?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}
return l.Ie===0?null:l}
Xe(e,n,r){
return n.me.count===r-this.nt(e,n.targetId)?0:2}
nt(e,n){
const r=this.Le.getRemoteKeysForTarget(n);
let i=0;
return r.forEach(s=>{
const o=this.Le.tt(),l=`projects/${
o.projectId}
/databases/${
o.database}
/documents/${
s.path.canonicalString()}
`;
e.mightContain(l)||(this.Ue(n,s,null),i++)}
),i}
rt(e){
const n=new Map;
this.Be.forEach((s,o)=>{
const l=this.Je(o);
if(l){
if(s.current&&Yp(l.target)){
const c=new ce(l.target.path);
this.ke.get(c)!==null||this.it(o,c)||this.Ue(o,c,Yt.newNoDocument(c,e))}
s.be&&(n.set(o,s.ve()),s.Ce())}
}
);
let r=Te();
this.qe.forEach((s,o)=>{
let l=!0;
o.forEachWhile(c=>{
const u=this.Je(c);
return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}
),l&&(r=r.add(s))}
),this.ke.forEach((s,o)=>o.setReadTime(e));
const i=new hh(e,n,this.Qe,this.ke,r);
return this.ke=Qr(),this.qe=f_(),this.Qe=new ot(Pe),i}
$e(e,n){
if(!this.ze(e))return;
const r=this.it(e,n.key)?2:0;
this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}
Ue(e,n,r){
if(!this.ze(e))return;
const i=this.Ge(e);
this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}
removeTarget(e){
this.Be.delete(e)}
Ye(e){
const n=this.Ge(e).ve();
return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}
xe(e){
this.Ge(e).xe()}
Ge(e){
let n=this.Be.get(e);
return n||(n=new h_,this.Be.set(e,n)),n}
st(e){
let n=this.qe.get(e);
return n||(n=new Mt(Pe),this.qe=this.qe.insert(e,n)),n}
ze(e){
const n=this.Je(e)!==null;
return n||re("WatchChangeAggregator","Detected inactive target",e),n}
Je(e){
const n=this.Be.get(e);
return n&&n.Se?null:this.Le.ot(e)}
je(e){
this.Be.set(e,new h_),this.Le.getRemoteKeysForTarget(e).forEach(n=>{
this.Ue(e,n,null)}
)}
it(e,n){
return this.Le.getRemoteKeysForTarget(e).has(n)}
}
function f_(){
return new ot(ce.comparator)}
function p_(){
return new ot(ce.comparator)}
const xM=(()=>({
asc:"ASCENDING",desc:"DESCENDING"}
))(),bM=(()=>({
"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}
))(),EM=(()=>({
and:"AND",or:"OR"}
))();
class TM{
constructor(e,n){
this.databaseId=e,this.useProto3Json=n}
}
function Zp(t,e){
return t.useProto3Json||oh(e)?e:{
value:e}
}
function Cd(t,e){
return t.useProto3Json?`${
new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}
.${
("000000000"+e.nanoseconds).slice(-9)}
Z`:{
seconds:""+e.seconds,nanos:e.nanoseconds}
}
function OE(t,e){
return t.useProto3Json?e.toBase64():e.toUint8Array()}
function IM(t,e){
return Cd(t,e.toTimestamp())}
function _r(t){
return Ue(!!t),ve.fromTimestamp(function(n){
const r=Gi(n);
return new wt(r.seconds,r.nanos)}
(t))}
function Hg(t,e){
return em(t,e).canonicalString()}
function em(t,e){
const n=function(i){
return new Ye(["projects",i.projectId,"databases",i.database])}
(t).child("documents");
return e===void 0?n:n.child(e)}
function VE(t){
const e=Ye.fromString(t);
return Ue(BE(e)),e}
function tm(t,e){
return Hg(t.databaseId,e.path)}
function Nf(t,e){
const n=VE(e);
if(n.get(1)!==t.databaseId.projectId)throw new ne(W.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);
if(n.get(3)!==t.databaseId.database)throw new ne(W.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);
return new ce(LE(n))}
function ME(t,e){
return Hg(t.databaseId,e)}
function SM(t){
const e=VE(t);
return e.length===4?Ye.emptyPath():LE(e)}
function nm(t){
return new Ye(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}
function LE(t){
return Ue(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}
function m_(t,e,n){
return{
name:tm(t,e),fields:n.value.mapValue.fields}
}
function AM(t,e){
let n;
if("targetChange"in e){
e.targetChange;
const r=function(u){
return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ye()}
(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,d){
return u.useProto3Json?(Ue(d===void 0||typeof d=="string"),jt.fromBase64String(d||"")):(Ue(d===void 0||d instanceof Buffer||d instanceof Uint8Array),jt.fromUint8Array(d||new Uint8Array))}
(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){
const d=u.code===void 0?W.UNKNOWN:NE(u.code);
return new ne(d,u.message||"")}
(o);
n=new DE(r,i,s,l||null)}
else if("documentChange"in e){
e.documentChange;
const r=e.documentChange;
r.document,r.document.name,r.document.updateTime;
const i=Nf(t,r.document.name),s=_r(r.document.updateTime),o=r.document.createTime?_r(r.document.createTime):ve.min(),l=new un({
mapValue:{
fields:r.document.fields}
}
),c=Yt.newFoundDocument(i,s,o,l),u=r.targetIds||[],d=r.removedTargetIds||[];
n=new Ou(u,d,c.key,c)}
else if("documentDelete"in e){
e.documentDelete;
const r=e.documentDelete;
r.document;
const i=Nf(t,r.document),s=r.readTime?_r(r.readTime):ve.min(),o=Yt.newNoDocument(i,s),l=r.removedTargetIds||[];
n=new Ou([],l,o.key,o)}
else if("documentRemove"in e){
e.documentRemove;
const r=e.documentRemove;
r.document;
const i=Nf(t,r.document),s=r.removedTargetIds||[];
n=new Ou([],s,i,null)}
else{
if(!("filter"in e))return ye();
{
e.filter;
const r=e.filter;
r.targetId;
const{
count:i=0,unchangedNames:s}
=r,o=new gM(i,s),l=r.targetId;
n=new PE(l,o)}
}
return n}
function CM(t,e){
let n;
if(e instanceof Zl)n={
update:m_(t,e.key,e.value)}
;
else if(e instanceof dh)n={
delete:tm(t,e.key)}
;
else if(e instanceof Yi)n={
update:m_(t,e.key,e.data),updateMask:LM(e.fieldMask)}
;
else{
if(!(e instanceof fM))return ye();
n={
verify:tm(t,e.key)}
}
return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){
const l=o.transform;
if(l instanceof Sd)return{
fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"}
;
if(l instanceof Vl)return{
fieldPath:o.field.canonicalString(),appendMissingElements:{
values:l.elements}
}
;
if(l instanceof Ml)return{
fieldPath:o.field.canonicalString(),removeAllFromArray:{
values:l.elements}
}
;
if(l instanceof Ad)return{
fieldPath:o.field.canonicalString(),increment:l.Pe}
;
throw ye()}
(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){
return s.updateTime!==void 0?{
updateTime:IM(i,s.updateTime)}
:s.exists!==void 0?{
exists:s.exists}
:ye()}
(t,e.precondition)),n}
function kM(t,e){
return t&&t.length>0?(Ue(e!==void 0),t.map(n=>function(i,s){
let o=i.updateTime?_r(i.updateTime):_r(s);
return o.isEqual(ve.min())&&(o=_r(s)),new uM(o,i.transformResults||[])}
(n,e))):[]}
function RM(t,e){
return{
documents:[ME(t,e.path)]}
}
function NM(t,e){
const n={
structuredQuery:{
}
}
,r=e.path;
let i;
e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{
collectionId:e.collectionGroup,allDescendants:!0}
]):(i=r.popLast(),n.structuredQuery.from=[{
collectionId:r.lastSegment()}
]),n.parent=ME(t,i);
const s=function(u){
if(u.length!==0)return FE(tr.create(u,"and"))}
(e.filters);
s&&(n.structuredQuery.where=s);
const o=function(u){
if(u.length!==0)return u.map(d=>function(g){
return{
field:ro(g.field),direction:OM(g.dir)}
}
(d))}
(e.orderBy);
o&&(n.structuredQuery.orderBy=o);
const l=Zp(t,e.limit);
return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(u){
return{
before:u.inclusive,values:u.position}
}
(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){
return{
before:!u.inclusive,values:u.position}
}
(e.endAt)),{
_t:n,parent:i}
}
function PM(t){
let e=SM(t.parent);
const n=t.structuredQuery,r=n.from?n.from.length:0;
let i=null;
if(r>0){
Ue(r===1);
const d=n.from[0];
d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}
let s=[];
n.where&&(s=function(m){
const g=jE(m);
return g instanceof tr&&pE(g)?g.getFilters():[g]}
(n.where));
let o=[];
n.orderBy&&(o=function(m){
return m.map(g=>function(w){
return new Id(io(w.field),function(O){
switch(O){
case"ASCENDING":return"asc";
case"DESCENDING":return"desc";
default:return}
}
(w.direction))}
(g))}
(n.orderBy));
let l=null;
n.limit&&(l=function(m){
let g;
return g=typeof m=="object"?m.value:m,oh(g)?null:g}
(n.limit));
let c=null;
n.startAt&&(c=function(m){
const g=!!m.before,_=m.values||[];
return new Td(_,g)}
(n.startAt));
let u=null;
return n.endAt&&(u=function(m){
const g=!m.before,_=m.values||[];
return new Td(_,g)}
(n.endAt)),XV(e,i,o,s,l,"F",c,u)}
function DM(t,e){
const n=function(i){
switch(i){
case"TargetPurposeListen":return null;
case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";
case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";
case"TargetPurposeLimboResolution":return"limbo-document";
default:return ye()}
}
(e.purpose);
return n==null?null:{
"goog-listen-tags":n}
}
function jE(t){
return t.unaryFilter!==void 0?function(n){
switch(n.unaryFilter.op){
case"IS_NAN":const r=io(n.unaryFilter.field);
return yt.create(r,"==",{
doubleValue:NaN}
);
case"IS_NULL":const i=io(n.unaryFilter.field);
return yt.create(i,"==",{
nullValue:"NULL_VALUE"}
);
case"IS_NOT_NAN":const s=io(n.unaryFilter.field);
return yt.create(s,"!=",{
doubleValue:NaN}
);
case"IS_NOT_NULL":const o=io(n.unaryFilter.field);
return yt.create(o,"!=",{
nullValue:"NULL_VALUE"}
);
default:return ye()}
}
(t):t.fieldFilter!==void 0?function(n){
return yt.create(io(n.fieldFilter.field),function(i){
switch(i){
case"EQUAL":return"==";
case"NOT_EQUAL":return"!=";
case"GREATER_THAN":return">";
case"GREATER_THAN_OR_EQUAL":return">=";
case"LESS_THAN":return"<";
case"LESS_THAN_OR_EQUAL":return"<=";
case"ARRAY_CONTAINS":return"array-contains";
case"IN":return"in";
case"NOT_IN":return"not-in";
case"ARRAY_CONTAINS_ANY":return"array-contains-any";
default:return ye()}
}
(n.fieldFilter.op),n.fieldFilter.value)}
(t):t.compositeFilter!==void 0?function(n){
return tr.create(n.compositeFilter.filters.map(r=>jE(r)),function(i){
switch(i){
case"AND":return"and";
case"OR":return"or";
default:return ye()}
}
(n.compositeFilter.op))}
(t):ye()}
function OM(t){
return xM[t]}
function VM(t){
return bM[t]}
function MM(t){
return EM[t]}
function ro(t){
return{
fieldPath:t.canonicalString()}
}
function io(t){
return Dt.fromServerFormat(t.fieldPath)}
function FE(t){
return t instanceof yt?function(n){
if(n.op==="=="){
if(t_(n.value))return{
unaryFilter:{
field:ro(n.field),op:"IS_NAN"}
}
;
if(e_(n.value))return{
unaryFilter:{
field:ro(n.field),op:"IS_NULL"}
}
}
else if(n.op==="!="){
if(t_(n.value))return{
unaryFilter:{
field:ro(n.field),op:"IS_NOT_NAN"}
}
;
if(e_(n.value))return{
unaryFilter:{
field:ro(n.field),op:"IS_NOT_NULL"}
}
}
return{
fieldFilter:{
field:ro(n.field),op:VM(n.op),value:n.value}
}
}
(t):t instanceof tr?function(n){
const r=n.getFilters().map(i=>FE(i));
return r.length===1?r[0]:{
compositeFilter:{
op:MM(n.op),filters:r}
}
}
(t):ye()}
function LM(t){
const e=[];
return t.fields.forEach(n=>e.push(n.canonicalString())),{
fieldPaths:e}
}
function BE(t){
return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{
constructor(e,n,r,i,s=ve.min(),o=ve.min(),l=jt.EMPTY_BYTE_STRING,c=null){
this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}
withSequenceNumber(e){
return new Ei(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}
withResumeToken(e,n){
return new Ei(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}
withExpectedCount(e){
return new Ei(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}
withLastLimboFreeSnapshotVersion(e){
return new Ei(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jM{
constructor(e){
this.ct=e}
}
function FM(t){
const e=PM({
parent:t.parent,structuredQuery:t.structuredQuery}
);
return t.limitType==="LAST"?Jp(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BM{
constructor(){
this.un=new UM}
addToCollectionParentIndex(e,n){
return this.un.add(n),K.resolve()}
getCollectionParents(e,n){
return K.resolve(this.un.getEntries(n))}
addFieldIndex(e,n){
return K.resolve()}
deleteFieldIndex(e,n){
return K.resolve()}
deleteAllFieldIndexes(e){
return K.resolve()}
createTargetIndexes(e,n){
return K.resolve()}
getDocumentsMatchingTarget(e,n){
return K.resolve(null)}
getIndexType(e,n){
return K.resolve(0)}
getFieldIndexes(e,n){
return K.resolve([])}
getNextCollectionGroupToUpdate(e){
return K.resolve(null)}
getMinOffset(e,n){
return K.resolve(qi.min())}
getMinOffsetFromCollectionGroup(e,n){
return K.resolve(qi.min())}
updateCollectionGroup(e,n,r){
return K.resolve()}
updateIndexEntries(e,n){
return K.resolve()}
}
class UM{
constructor(){
this.index={
}
}
add(e){
const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Mt(Ye.comparator),s=!i.has(r);
return this.index[n]=i.add(r),s}
has(e){
const n=e.lastSegment(),r=e.popLast(),i=this.index[n];
return i&&i.has(r)}
getEntries(e){
return(this.index[e]||new Mt(Ye.comparator)).toArray()}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{
constructor(e){
this.Ln=e}
next(){
return this.Ln+=2,this.Ln}
static Bn(){
return new Go(0)}
static kn(){
return new Go(-1)}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $M{
constructor(){
this.changes=new ra(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}
addEntry(e){
this.assertNotApplied(),this.changes.set(e.key,e)}
removeEntry(e,n){
this.assertNotApplied(),this.changes.set(e,Yt.newInvalidDocument(e).setReadTime(n))}
getEntry(e,n){
this.assertNotApplied();
const r=this.changes.get(n);
return r!==void 0?K.resolve(r):this.getFromCache(e,n)}
getEntries(e,n){
return this.getAllFromCache(e,n)}
apply(e){
return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}
assertNotApplied(){
}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zM{
constructor(e,n){
this.overlayedDocument=e,this.mutatedFields=n}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qM{
constructor(e,n,r,i){
this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}
getDocument(e,n){
let r=null;
return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&il(r.mutation,i,wn.empty(),wt.now()),i))}
getDocuments(e,n){
return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Te()).next(()=>r))}
getLocalViewOfDocuments(e,n,r=Te()){
const i=ws();
return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{
let o=Ba();
return s.forEach((l,c)=>{
o=o.insert(l,c.overlayedDocument)}
),o}
))}
getOverlayedDocuments(e,n){
const r=ws();
return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Te()))}
populateOverlays(e,n,r){
const i=[];
return r.forEach(s=>{
n.has(s)||i.push(s)}
),this.documentOverlayCache.getOverlays(e,i).next(s=>{
s.forEach((o,l)=>{
n.set(o,l)}
)}
)}
computeViews(e,n,r,i){
let s=Qr();
const o=rl(),l=function(){
return rl()}
();
return n.forEach((c,u)=>{
const d=r.get(u.key);
i.has(u.key)&&(d===void 0||d.mutation instanceof Yi)?s=s.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),il(d.mutation,u,d.mutation.getFieldMask(),wt.now())):o.set(u.key,wn.empty())}
),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((u,d)=>o.set(u,d)),n.forEach((u,d)=>{
var m;
return l.set(u,new zM(d,(m=o.get(u))!==null&&m!==void 0?m:null))}
),l))}
recalculateAndSaveOverlays(e,n){
const r=rl();
let i=new ot((o,l)=>o-l),s=Te();
return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{
for(const l of o)l.keys().forEach(c=>{
const u=n.get(c);
if(u===null)return;
let d=r.get(c)||wn.empty();
d=l.applyToLocalView(u,d),r.set(c,d);
const m=(i.get(l.batchId)||Te()).add(c);
i=i.insert(l.batchId,m)}
)}
).next(()=>{
const o=[],l=i.getReverseIterator();
for(;
l.hasNext();
){
const c=l.getNext(),u=c.key,d=c.value,m=EE();
d.forEach(g=>{
if(!s.has(g)){
const _=kE(n.get(g),r.get(g));
_!==null&&m.set(g,_),s=s.add(g)}
}
),o.push(this.documentOverlayCache.saveOverlays(e,u,m))}
return K.waitFor(o)}
).next(()=>r)}
recalculateAndSaveOverlaysForDocumentKeys(e,n){
return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}
getDocumentsMatchingQuery(e,n,r,i){
return function(o){
return ce.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}
(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):vE(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}
getNextDocuments(e,n,r,i){
return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{
const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):K.resolve(ws());
let l=-1,c=s;
return o.next(u=>K.forEach(u,(d,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(d)?K.resolve():this.remoteDocumentCache.getEntry(e,d).next(g=>{
c=c.insert(d,g)}
))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,c,u,Te())).next(d=>({
batchId:l,changes:bE(d)}
)))}
)}
getDocumentsMatchingDocumentQuery(e,n){
return this.getDocument(e,new ce(n)).next(r=>{
let i=Ba();
return r.isFoundDocument()&&(i=i.insert(r.key,r)),i}
)}
getDocumentsMatchingCollectionGroupQuery(e,n,r,i){
const s=n.collectionGroup;
let o=Ba();
return this.indexManager.getCollectionParents(e,s).next(l=>K.forEach(l,c=>{
const u=function(m,g){
return new Jl(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}
(n,c.child(s));
return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(d=>{
d.forEach((m,g)=>{
o=o.insert(m,g)}
)}
)}
).next(()=>o))}
getDocumentsMatchingCollectionQuery(e,n,r,i){
let s;
return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{
s.forEach((c,u)=>{
const d=u.getKey();
o.get(d)===null&&(o=o.insert(d,Yt.newInvalidDocument(d)))}
);
let l=Ba();
return o.forEach((c,u)=>{
const d=s.get(c);
d!==void 0&&il(d.mutation,u,wn.empty(),wt.now()),lh(n,u)&&(l=l.insert(c,u))}
),l}
)}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GM{
constructor(e){
this.serializer=e,this.hr=new Map,this.Pr=new Map}
getBundleMetadata(e,n){
return K.resolve(this.hr.get(n))}
saveBundleMetadata(e,n){
return this.hr.set(n.id,function(i){
return{
id:i.id,version:i.version,createTime:_r(i.createTime)}
}
(n)),K.resolve()}
getNamedQuery(e,n){
return K.resolve(this.Pr.get(n))}
saveNamedQuery(e,n){
return this.Pr.set(n.name,function(i){
return{
name:i.name,query:FM(i.bundledQuery),readTime:_r(i.readTime)}
}
(n)),K.resolve()}
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WM{
constructor(){
this.overlays=new ot(ce.comparator),this.Ir=new Map}
getOverlay(e,n){
return K.resolve(this.overlays.get(n))}
getOverlays(e,n){
const r=ws();
return K.forEach(n,i=>this.getOverlay(e,i).next(s=>{
s!==null&&r.set(i,s)}
)).next(()=>r)}
saveOverlays(e,n,r){
return r.forEach((i,s)=>{
this.ht(e,n,s)}
),K.resolve()}
removeOverlaysForBatchId(e,n,r){
const i=this.Ir.get(r);
return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),K.resolve()}
getOverlaysForCollection(e,n,r){
const i=ws(),s=n.length+1,o=new ce(n.child("")),l=this.overlays.getIteratorFrom(o);
for(;
l.hasNext();
){
const c=l.getNext().value,u=c.getKey();
if(!n.isPrefixOf(u.path))break;
u.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}
return K.resolve(i)}
getOverlaysForCollectionGroup(e,n,r,i){
let s=new ot((u,d)=>u-d);
const o=this.overlays.getIterator();
for(;
o.hasNext();
){
const u=o.getNext().value;
if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){
let d=s.get(u.largestBatchId);
d===null&&(d=ws(),s=s.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}
}
const l=ws(),c=s.getIterator();
for(;
c.hasNext()&&(c.getNext().value.forEach((u,d)=>l.set(u,d)),!(l.size()>=i));
);
return K.resolve(l)}
ht(e,n,r){
const i=this.overlays.get(r.key);
if(i!==null){
const o=this.Ir.get(i.largestBatchId).delete(r.key);
this.Ir.set(i.largestBatchId,o)}
this.overlays=this.overlays.insert(r.key,new mM(n,r));
let s=this.Ir.get(n);
s===void 0&&(s=Te(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HM{
constructor(){
this.sessionToken=jt.EMPTY_BYTE_STRING}
getSessionToken(e){
return K.resolve(this.sessionToken)}
setSessionToken(e,n){
return this.sessionToken=n,K.resolve()}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{
constructor(){
this.Tr=new Mt(Tt.Er),this.dr=new Mt(Tt.Ar)}
isEmpty(){
return this.Tr.isEmpty()}
addReference(e,n){
const r=new Tt(e,n);
this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}
Rr(e,n){
e.forEach(r=>this.addReference(r,n))}
removeReference(e,n){
this.Vr(new Tt(e,n))}
mr(e,n){
e.forEach(r=>this.removeReference(r,n))}
gr(e){
const n=new ce(new Ye([])),r=new Tt(n,e),i=new Tt(n,e+1),s=[];
return this.dr.forEachInRange([r,i],o=>{
this.Vr(o),s.push(o.key)}
),s}
pr(){
this.Tr.forEach(e=>this.Vr(e))}
Vr(e){
this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}
yr(e){
const n=new ce(new Ye([])),r=new Tt(n,e),i=new Tt(n,e+1);
let s=Te();
return this.dr.forEachInRange([r,i],o=>{
s=s.add(o.key)}
),s}
containsKey(e){
const n=new Tt(e,0),r=this.Tr.firstAfterOrEqual(n);
return r!==null&&e.isEqual(r.key)}
}
class Tt{
constructor(e,n){
this.key=e,this.wr=n}
static Er(e,n){
return ce.comparator(e.key,n.key)||Pe(e.wr,n.wr)}
static Ar(e,n){
return Pe(e.wr,n.wr)||ce.comparator(e.key,n.key)}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KM{
constructor(e,n){
this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Mt(Tt.Er)}
checkEmpty(e){
return K.resolve(this.mutationQueue.length===0)}
addMutationBatch(e,n,r,i){
const s=this.Sr;
this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];
const o=new pM(s,n,r,i);
this.mutationQueue.push(o);
for(const l of i)this.br=this.br.add(new Tt(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());
return K.resolve(o)}
lookupMutationBatch(e,n){
return K.resolve(this.Dr(n))}
getNextMutationBatchAfterBatchId(e,n){
const r=n+1,i=this.vr(r),s=i<0?0:i;
return K.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}
getHighestUnacknowledgedBatchId(){
return K.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}
getAllMutationBatches(e){
return K.resolve(this.mutationQueue.slice())}
getAllMutationBatchesAffectingDocumentKey(e,n){
const r=new Tt(n,0),i=new Tt(n,Number.POSITIVE_INFINITY),s=[];
return this.br.forEachInRange([r,i],o=>{
const l=this.Dr(o.wr);
s.push(l)}
),K.resolve(s)}
getAllMutationBatchesAffectingDocumentKeys(e,n){
let r=new Mt(Pe);
return n.forEach(i=>{
const s=new Tt(i,0),o=new Tt(i,Number.POSITIVE_INFINITY);
this.br.forEachInRange([s,o],l=>{
r=r.add(l.wr)}
)}
),K.resolve(this.Cr(r))}
getAllMutationBatchesAffectingQuery(e,n){
const r=n.path,i=r.length+1;
let s=r;
ce.isDocumentKey(s)||(s=s.child(""));
const o=new Tt(new ce(s),0);
let l=new Mt(Pe);
return this.br.forEachWhile(c=>{
const u=c.key.path;
return!!r.isPrefixOf(u)&&(u.length===i&&(l=l.add(c.wr)),!0)}
,o),K.resolve(this.Cr(l))}
Cr(e){
const n=[];
return e.forEach(r=>{
const i=this.Dr(r);
i!==null&&n.push(i)}
),n}
removeMutationBatch(e,n){
Ue(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();
let r=this.br;
return K.forEach(n.mutations,i=>{
const s=new Tt(i.key,n.batchId);
return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}
).next(()=>{
this.br=r}
)}
On(e){
}
containsKey(e,n){
const r=new Tt(n,0),i=this.br.firstAfterOrEqual(r);
return K.resolve(n.isEqual(i&&i.key))}
performConsistencyCheck(e){
return this.mutationQueue.length,K.resolve()}
Fr(e,n){
return this.vr(e)}
vr(e){
return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}
Dr(e){
const n=this.vr(e);
return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QM{
constructor(e){
this.Mr=e,this.docs=function(){
return new ot(ce.comparator)}
(),this.size=0}
setIndexManager(e){
this.indexManager=e}
addEntry(e,n){
const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);
return this.docs=this.docs.insert(r,{
document:n.mutableCopy(),size:o}
),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}
removeEntry(e){
const n=this.docs.get(e);
n&&(this.docs=this.docs.remove(e),this.size-=n.size)}
getEntry(e,n){
const r=this.docs.get(n);
return K.resolve(r?r.document.mutableCopy():Yt.newInvalidDocument(n))}
getEntries(e,n){
let r=Qr();
return n.forEach(i=>{
const s=this.docs.get(i);
r=r.insert(i,s?s.document.mutableCopy():Yt.newInvalidDocument(i))}
),K.resolve(r)}
getDocumentsMatchingQuery(e,n,r,i){
let s=Qr();
const o=n.path,l=new ce(o.child("")),c=this.docs.getIteratorFrom(l);
for(;
c.hasNext();
){
const{
key:u,value:{
document:d}
}
=c.getNext();
if(!o.isPrefixOf(u.path))break;
u.path.length>o.length+1||PV(NV(d),r)<=0||(i.has(d.key)||lh(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}
return K.resolve(s)}
getAllFromCollectionGroup(e,n,r,i){
ye()}
Or(e,n){
return K.forEach(this.docs,r=>n(r))}
newChangeBuffer(e){
return new YM(this)}
getSize(e){
return K.resolve(this.size)}
}
class YM extends $M{
constructor(e){
super(),this.cr=e}
applyChanges(e){
const n=[];
return this.changes.forEach((r,i)=>{
i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}
),K.waitFor(n)}
getFromCache(e,n){
return this.cr.getEntry(e,n)}
getAllFromCache(e,n){
return this.cr.getEntries(e,n)}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XM{
constructor(e){
this.persistence=e,this.Nr=new ra(n=>Ug(n),$g),this.lastRemoteSnapshotVersion=ve.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Kg,this.targetCount=0,this.kr=Go.Bn()}
forEachTarget(e,n){
return this.Nr.forEach((r,i)=>n(i)),K.resolve()}
getLastRemoteSnapshotVersion(e){
return K.resolve(this.lastRemoteSnapshotVersion)}
getHighestSequenceNumber(e){
return K.resolve(this.Lr)}
allocateTargetId(e){
return this.highestTargetId=this.kr.next(),K.resolve(this.highestTargetId)}
setTargetsMetadata(e,n,r){
return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),K.resolve()}
Kn(e){
this.Nr.set(e.target,e);
const n=e.targetId;
n>this.highestTargetId&&(this.kr=new Go(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}
addTargetData(e,n){
return this.Kn(n),this.targetCount+=1,K.resolve()}
updateTargetData(e,n){
return this.Kn(n),K.resolve()}
removeTargetData(e,n){
return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,K.resolve()}
removeTargets(e,n,r){
let i=0;
const s=[];
return this.Nr.forEach((o,l)=>{
l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}
),K.waitFor(s).next(()=>i)}
getTargetCount(e){
return K.resolve(this.targetCount)}
getTargetData(e,n){
const r=this.Nr.get(n)||null;
return K.resolve(r)}
addMatchingKeys(e,n,r){
return this.Br.Rr(n,r),K.resolve()}
removeMatchingKeys(e,n,r){
this.Br.mr(n,r);
const i=this.persistence.referenceDelegate,s=[];
return i&&n.forEach(o=>{
s.push(i.markPotentiallyOrphaned(e,o))}
),K.waitFor(s)}
removeMatchingKeysForTargetId(e,n){
return this.Br.gr(n),K.resolve()}
getMatchingKeysForTargetId(e,n){
const r=this.Br.yr(n);
return K.resolve(r)}
containsKey(e,n){
return K.resolve(this.Br.containsKey(n))}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JM{
constructor(e,n){
this.qr={
}
,this.overlays={
}
,this.Qr=new Lg(0),this.Kr=!1,this.Kr=!0,this.$r=new HM,this.referenceDelegate=e(this),this.Ur=new XM(this),this.indexManager=new BM,this.remoteDocumentCache=function(i){
return new QM(i)}
(r=>this.referenceDelegate.Wr(r)),this.serializer=new jM(n),this.Gr=new GM(this.serializer)}
start(){
return Promise.resolve()}
shutdown(){
return this.Kr=!1,Promise.resolve()}
get started(){
return this.Kr}
setDatabaseDeletedListener(){
}
setNetworkEnabled(){
}
getIndexManager(e){
return this.indexManager}
getDocumentOverlayCache(e){
let n=this.overlays[e.toKey()];
return n||(n=new WM,this.overlays[e.toKey()]=n),n}
getMutationQueue(e,n){
let r=this.qr[e.toKey()];
return r||(r=new KM(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}
getGlobalsCache(){
return this.$r}
getTargetCache(){
return this.Ur}
getRemoteDocumentCache(){
return this.remoteDocumentCache}
getBundleCache(){
return this.Gr}
runTransaction(e,n,r){
re("MemoryPersistence","Starting transaction:",e);
const i=new ZM(this.Qr.next());
return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}
Hr(e,n){
return K.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}
}
class ZM extends OV{
constructor(e){
super(),this.currentSequenceNumber=e}
}
class Qg{
constructor(e){
this.persistence=e,this.Jr=new Kg,this.Yr=null}
static Zr(e){
return new Qg(e)}
get Xr(){
if(this.Yr)return this.Yr;
throw ye()}
addReference(e,n,r){
return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),K.resolve()}
removeReference(e,n,r){
return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),K.resolve()}
markPotentiallyOrphaned(e,n){
return this.Xr.add(n.toString()),K.resolve()}
removeTarget(e,n){
this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));
const r=this.persistence.getTargetCache();
return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{
i.forEach(s=>this.Xr.add(s.toString()))}
).next(()=>r.removeTargetData(e,n))}
zr(){
this.Yr=new Set}
jr(e){
const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();
return K.forEach(this.Xr,r=>{
const i=ce.fromPath(r);
return this.ei(e,i).next(s=>{
s||n.removeEntry(i,ve.min())}
)}
).next(()=>(this.Yr=null,n.apply(e)))}
updateLimboDocument(e,n){
return this.ei(e,n).next(r=>{
r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())}
)}
Wr(e){
return 0}
ei(e,n){
return K.or([()=>K.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{
constructor(e,n,r,i){
this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}
static Wi(e,n){
let r=Te(),i=Te();
for(const s of n.docChanges)switch(s.type){
case 0:r=r.add(s.doc.key);
break;
case 1:i=i.add(s.doc.key)}
return new Yg(e,n.fromCache,r,i)}
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eL{
constructor(){
this._documentReadCount=0}
get documentReadCount(){
return this._documentReadCount}
incrementDocumentReadCount(e){
this._documentReadCount+=e}
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tL{
constructor(){
this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){
return rP()?8:VV(Jt())>0?6:4}
()}
initialize(e,n){
this.Ji=e,this.indexManager=n,this.Gi=!0}
getDocumentsMatchingQuery(e,n,r,i){
const s={
result:null}
;
return this.Yi(e,n).next(o=>{
s.result=o}
).next(()=>{
if(!s.result)return this.Zi(e,n,i,r).next(o=>{
s.result=o}
)}
).next(()=>{
if(s.result)return;
const o=new eL;
return this.Xi(e,n,o).next(l=>{
if(s.result=l,this.zi)return this.es(e,n,o,l.size)}
)}
).next(()=>s.result)}
es(e,n,r,i){
return r.documentReadCount<this.ji?(Oa()<=Ie.DEBUG&&re("QueryEngine","SDK will not create cache indexes for query:",no(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),K.resolve()):(Oa()<=Ie.DEBUG&&re("QueryEngine","Query:",no(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Oa()<=Ie.DEBUG&&re("QueryEngine","The SDK decides to create cache indexes for query:",no(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,vr(n))):K.resolve())}
Yi(e,n){
if(s_(n))return K.resolve(null);
let r=vr(n);
return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Jp(n,null,"F"),r=vr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{
const o=Te(...s);
return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{
const u=this.ts(n,l);
return this.ns(n,u,o,c.readTime)?this.Yi(e,Jp(n,null,"F")):this.rs(e,u,n,c)}
))}
)))}
Zi(e,n,r,i){
return s_(n)||i.isEqual(ve.min())?K.resolve(null):this.Ji.getDocuments(e,r).next(s=>{
const o=this.ts(n,s);
return this.ns(n,o,r,i)?K.resolve(null):(Oa()<=Ie.DEBUG&&re("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),no(n)),this.rs(e,o,n,RV(i,-1)).next(l=>l))}
)}
ts(e,n){
let r=new Mt(wE(e));
return n.forEach((i,s)=>{
lh(e,s)&&(r=r.add(s))}
),r}
ns(e,n,r,i){
if(e.limit===null)return!1;
if(r.size!==n.size)return!0;
const s=e.limitType==="F"?n.last():n.first();
return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}
Xi(e,n,r){
return Oa()<=Ie.DEBUG&&re("QueryEngine","Using full collection scan to execute query:",no(n)),this.Ji.getDocumentsMatchingQuery(e,n,qi.min(),r)}
rs(e,n,r,i){
return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{
s=s.insert(o.key,o)}
),s))}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nL{
constructor(e,n,r,i){
this.persistence=e,this.ss=n,this.serializer=i,this.os=new ot(Pe),this._s=new ra(s=>Ug(s),$g),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}
ls(e){
this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new qM(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}
collectGarbage(e){
return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}
}
function rL(t,e,n,r){
return new nL(t,e,n,r)}
async function UE(t,e){
const n=_e(t);
return await n.persistence.runTransaction("Handle user change","readonly",r=>{
let i;
return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{
const o=[],l=[];
let c=Te();
for(const u of i){
o.push(u.batchId);
for(const d of u.mutations)c=c.add(d.key)}
for(const u of s){
l.push(u.batchId);
for(const d of u.mutations)c=c.add(d.key)}
return n.localDocuments.getDocuments(r,c).next(u=>({
hs:u,removedBatchIds:o,addedBatchIds:l}
))}
)}
)}
function iL(t,e){
const n=_e(t);
return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{
const i=e.batch.keys(),s=n.cs.newChangeBuffer({
trackRemovals:!0}
);
return function(l,c,u,d){
const m=u.batch,g=m.keys();
let _=K.resolve();
return g.forEach(w=>{
_=_.next(()=>d.getEntry(c,w)).next(N=>{
const O=u.docVersions.get(w);
Ue(O!==null),N.version.compareTo(O)<0&&(m.applyToRemoteDocument(N,u),N.isValidDocument()&&(N.setReadTime(u.commitVersion),d.addEntry(N)))}
)}
),_.next(()=>l.mutationQueue.removeMutationBatch(c,m))}
(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){
let c=Te();
for(let u=0;
u<l.mutationResults.length;
++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));
return c}
(e))).next(()=>n.localDocuments.getDocuments(r,i))}
)}
function $E(t){
const e=_e(t);
return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}
function sL(t,e){
const n=_e(t),r=e.snapshotVersion;
let i=n.os;
return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{
const o=n.cs.newChangeBuffer({
trackRemovals:!0}
);
i=n.os;
const l=[];
e.targetChanges.forEach((d,m)=>{
const g=i.get(m);
if(!g)return;
l.push(n.Ur.removeMatchingKeys(s,d.removedDocuments,m).next(()=>n.Ur.addMatchingKeys(s,d.addedDocuments,m)));
let _=g.withSequenceNumber(s.currentSequenceNumber);
e.targetMismatches.get(m)!==null?_=_.withResumeToken(jt.EMPTY_BYTE_STRING,ve.min()).withLastLimboFreeSnapshotVersion(ve.min()):d.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(d.resumeToken,r)),i=i.insert(m,_),function(N,O,I){
return N.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}
(g,_,d)&&l.push(n.Ur.updateTargetData(s,_))}
);
let c=Qr(),u=Te();
if(e.documentUpdates.forEach(d=>{
e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}
),l.push(oL(s,o,e.documentUpdates).next(d=>{
c=d.Ps,u=d.Is}
)),!r.isEqual(ve.min())){
const d=n.Ur.getLastRemoteSnapshotVersion(s).next(m=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));
l.push(d)}
return K.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,c,u)).next(()=>c)}
).then(s=>(n.os=i,s))}
function oL(t,e,n){
let r=Te(),i=Te();
return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{
let o=Qr();
return n.forEach((l,c)=>{
const u=s.get(l);
c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(l)),c.isNoDocument()&&c.version.isEqual(ve.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):re("LocalStore","Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}
),{
Ps:o,Is:i}
}
)}
function aL(t,e){
const n=_e(t);
return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}
function lL(t,e){
const n=_e(t);
return n.persistence.runTransaction("Allocate target","readwrite",r=>{
let i;
return n.Ur.getTargetData(r,e).next(s=>s?(i=s,K.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new Ei(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}
).then(r=>{
const i=n.os.get(r.targetId);
return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r}
)}
async function rm(t,e,n){
const r=_e(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";
try{
n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}
catch(o){
if(!Xl(o))throw o;
re("LocalStore",`Failed to update sequence numbers for target ${
e}
: ${
o}
`)}
r.os=r.os.remove(e),r._s.delete(i.target)}
function g_(t,e,n){
const r=_e(t);
let i=ve.min(),s=Te();
return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,d){
const m=_e(c),g=m._s.get(d);
return g!==void 0?K.resolve(m.os.get(g)):m.Ur.getTargetData(u,d)}
(r,o,vr(e)).next(l=>{
if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(c=>{
s=c}
)}
).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:ve.min(),n?s:Te())).next(l=>(cL(r,ZV(e),l),{
documents:l,Ts:s}
)))}
function cL(t,e,n){
let r=t.us.get(e)||ve.min();
n.forEach((i,s)=>{
s.readTime.compareTo(r)>0&&(r=s.readTime)}
),t.us.set(e,r)}
class y_{
constructor(){
this.activeTargetIds=sM()}
fs(e){
this.activeTargetIds=this.activeTargetIds.add(e)}
gs(e){
this.activeTargetIds=this.activeTargetIds.delete(e)}
Vs(){
const e={
activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()}
;
return JSON.stringify(e)}
}
class uL{
constructor(){
this.so=new y_,this.oo={
}
,this.onlineStateHandler=null,this.sequenceNumberHandler=null}
addPendingMutation(e){
}
updateMutationState(e,n,r){
}
addLocalQueryTarget(e,n=!0){
return n&&this.so.fs(e),this.oo[e]||"not-current"}
updateQueryState(e,n,r){
this.oo[e]=n}
removeLocalQueryTarget(e){
this.so.gs(e)}
isLocalQueryTarget(e){
return this.so.activeTargetIds.has(e)}
clearQueryState(e){
delete this.oo[e]}
getAllActiveQueryTargets(){
return this.so.activeTargetIds}
isActiveQueryTarget(e){
return this.so.activeTargetIds.has(e)}
start(){
return this.so=new y_,Promise.resolve()}
handleUserChange(e,n,r){
}
setOnlineState(e){
}
shutdown(){
}
writeSequenceNumber(e){
}
notifyBundleLoaded(e){
}
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dL{
_o(e){
}
shutdown(){
}
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{
constructor(){
this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}
_o(e){
this.ho.push(e)}
shutdown(){
window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}
Po(){
window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}
uo(){
re("ConnectivityMonitor","Network connectivity changed: AVAILABLE");
for(const e of this.ho)e(0)}
lo(){
re("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");
for(const e of this.ho)e(1)}
static D(){
return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let du=null;
function Pf(){
return du===null?du=function(){
return 268435456+Math.round(2147483648*Math.random())}
():du++,"0x"+du.toString(16)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hL={
BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"}
;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fL{
constructor(e){
this.Io=e.Io,this.To=e.To}
Eo(e){
this.Ao=e}
Ro(e){
this.Vo=e}
mo(e){
this.fo=e}
onMessage(e){
this.po=e}
close(){
this.To()}
send(e){
this.Io(e)}
yo(){
this.Ao()}
wo(){
this.Vo()}
So(e){
this.fo(e)}
bo(e){
this.po(e)}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ht="WebChannelConnection";
class pL extends class{
constructor(n){
this.databaseInfo=n,this.databaseId=n.databaseId;
const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);
this.Do=r+"://"+n.host,this.vo=`projects/${
i}
/databases/${
s}
`,this.Co=this.databaseId.database==="(default)"?`project_id=${
i}
`:`project_id=${
i}
&database_id=${
s}
`}
get Fo(){
return!1}
Mo(n,r,i,s,o){
const l=Pf(),c=this.xo(n,r.toUriEncodedString());
re("RestConnection",`Sending RPC '${
n}
' ${
l}
:`,c,i);
const u={
"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co}
;
return this.Oo(u,s,o),this.No(n,c,u,i).then(d=>(re("RestConnection",`Received RPC '${
n}
' ${
l}
: `,d),d),d=>{
throw Uo("RestConnection",`RPC '${
n}
' ${
l}
 failed with error: `,d,"url: ",c,"request:",i),d}
)}
Lo(n,r,i,s,o,l){
return this.Mo(n,r,i,s,o)}
Oo(n,r,i){
n["X-Goog-Api-Client"]=function(){
return"gl-js/ fire/"+na}
(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}
xo(n,r){
const i=hL[n];
return`${
this.Do}
/v1/${
r}
:${
i}
`}
terminate(){
}
}
{
constructor(e){
super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}
No(e,n,r,i){
const s=Pf();
return new Promise((o,l)=>{
const c=new nE;
c.setWithCredentials(!0),c.listenOnce(rE.COMPLETE,()=>{
try{
switch(c.getLastErrorCode()){
case Nu.NO_ERROR:const d=c.getResponseJson();
re(Ht,`XHR for RPC '${
e}
' ${
s}
 received:`,JSON.stringify(d)),o(d);
break;
case Nu.TIMEOUT:re(Ht,`RPC '${
e}
' ${
s}
 timed out`),l(new ne(W.DEADLINE_EXCEEDED,"Request time out"));
break;
case Nu.HTTP_ERROR:const m=c.getStatus();
if(re(Ht,`RPC '${
e}
' ${
s}
 failed with status:`,m,"response text:",c.getResponseText()),m>0){
let g=c.getResponseJson();
Array.isArray(g)&&(g=g[0]);
const _=g==null?void 0:g.error;
if(_&&_.status&&_.message){
const w=function(O){
const I=O.toLowerCase().replace(/_/g,"-");
return Object.values(W).indexOf(I)>=0?I:W.UNKNOWN}
(_.status);
l(new ne(w,_.message))}
else l(new ne(W.UNKNOWN,"Server responded with status "+c.getStatus()))}
else l(new ne(W.UNAVAILABLE,"Connection failed."));
break;
default:ye()}
}
finally{
re(Ht,`RPC '${
e}
' ${
s}
 completed.`)}
}
);
const u=JSON.stringify(i);
re(Ht,`RPC '${
e}
' ${
s}
 sending request:`,i),c.send(n,"POST",u,r,15)}
)}
Bo(e,n,r){
const i=Pf(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=oE(),l=sE(),c={
httpSessionIdParam:"gsessionid",initMessageHeaders:{
}
,messageUrlParams:{
database:`projects/${
this.databaseId.projectId}
/databases/${
this.databaseId.database}
`}
,sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{
forwardChannelRequestTimeoutMs:6e5}
,forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling}
,u=this.longPollingOptions.timeoutSeconds;
u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;
const d=s.join("");
re(Ht,`Creating RPC '${
e}
' stream ${
i}
: ${
d}
`,c);
const m=o.createWebChannel(d,c);
let g=!1,_=!1;
const w=new fL({
Io:O=>{
_?re(Ht,`Not sending because RPC '${
e}
' stream ${
i}
 is closed:`,O):(g||(re(Ht,`Opening RPC '${
e}
' stream ${
i}
 transport.`),m.open(),g=!0),re(Ht,`RPC '${
e}
' stream ${
i}
 sending:`,O),m.send(O))}
,To:()=>m.close()}
),N=(O,I,E)=>{
O.listen(I,k=>{
try{
E(k)}
catch(M){
setTimeout(()=>{
throw M}
,0)}
}
)}
;
return N(m,Fa.EventType.OPEN,()=>{
_||(re(Ht,`RPC '${
e}
' stream ${
i}
 transport opened.`),w.yo())}
),N(m,Fa.EventType.CLOSE,()=>{
_||(_=!0,re(Ht,`RPC '${
e}
' stream ${
i}
 transport closed`),w.So())}
),N(m,Fa.EventType.ERROR,O=>{
_||(_=!0,Uo(Ht,`RPC '${
e}
' stream ${
i}
 transport errored:`,O),w.So(new ne(W.UNAVAILABLE,"The operation could not be completed")))}
),N(m,Fa.EventType.MESSAGE,O=>{
var I;
if(!_){
const E=O.data[0];
Ue(!!E);
const k=E,M=k.error||((I=k[0])===null||I===void 0?void 0:I.error);
if(M){
re(Ht,`RPC '${
e}
' stream ${
i}
 received error:`,M);
const G=M.status;
let q=function(A){
const C=mt[A];
if(C!==void 0)return NE(C)}
(G),S=M.message;
q===void 0&&(q=W.INTERNAL,S="Unknown error status: "+G+" with message "+M.message),_=!0,w.So(new ne(q,S)),m.close()}
else re(Ht,`RPC '${
e}
' stream ${
i}
 received:`,E),w.bo(E)}
}
),N(l,iE.STAT_EVENT,O=>{
O.stat===Wp.PROXY?re(Ht,`RPC '${
e}
' stream ${
i}
 detected buffering proxy`):O.stat===Wp.NOPROXY&&re(Ht,`RPC '${
e}
' stream ${
i}
 detected no buffering proxy`)}
),setTimeout(()=>{
w.wo()}
,0),w}
}
function Df(){
return typeof document<"u"?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fh(t){
return new TM(t,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zE{
constructor(e,n,r=1e3,i=1.5,s=6e4){
this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}
reset(){
this.Ko=0}
Wo(){
this.Ko=this.Qo}
Go(e){
this.cancel();
const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);
i>0&&re("ExponentialBackoff",`Backing off for ${
i}
 ms (base delay: ${
this.Ko}
 ms, delay with jitter: ${
n}
 ms, last attempt: ${
r}
 ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}
jo(){
this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}
cancel(){
this.$o!==null&&(this.$o.cancel(),this.$o=null)}
zo(){
return(Math.random()-.5)*this.Ko}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE{
constructor(e,n,r,i,s,o,l,c){
this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new zE(e,n)}
n_(){
return this.state===1||this.state===5||this.r_()}
r_(){
return this.state===2||this.state===3}
start(){
this.e_=0,this.state!==4?this.auth():this.i_()}
async stop(){
this.n_()&&await this.close(0)}
s_(){
this.state=0,this.t_.reset()}
o_(){
this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}
a_(e){
this.u_(),this.stream.send(e)}
async __(){
if(this.r_())return this.close(0)}
u_(){
this.Zo&&(this.Zo.cancel(),this.Zo=null)}
c_(){
this.Xo&&(this.Xo.cancel(),this.Xo=null)}
async close(e,n){
this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===W.RESOURCE_EXHAUSTED?(Kr(n.toString()),Kr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===W.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}
l_(){
}
auth(){
this.state=1;
const e=this.h_(this.Yo),n=this.Yo;
Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{
this.Yo===n&&this.P_(r,i)}
,r=>{
e(()=>{
const i=new ne(W.UNKNOWN,"Fetching auth token failed: "+r.message);
return this.I_(i)}
)}
)}
P_(e,n){
const r=this.h_(this.Yo);
this.stream=this.T_(e,n),this.stream.Eo(()=>{
r(()=>this.listener.Eo())}
),this.stream.Ro(()=>{
r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}
),this.stream.mo(i=>{
r(()=>this.I_(i))}
),this.stream.onMessage(i=>{
r(()=>++this.e_==1?this.E_(i):this.onNext(i))}
)}
i_(){
this.state=5,this.t_.Go(async()=>{
this.state=0,this.start()}
)}
I_(e){
return re("PersistentStream",`close with error: ${
e}
`),this.stream=null,this.close(4,e)}
h_(e){
return n=>{
this.ui.enqueueAndForget(()=>this.Yo===e?n():(re("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}
}
}
class mL extends qE{
constructor(e,n,r,i,s,o){
super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}
T_(e,n){
return this.connection.Bo("Listen",e,n)}
E_(e){
return this.onNext(e)}
onNext(e){
this.t_.reset();
const n=AM(this.serializer,e),r=function(s){
if(!("targetChange"in s))return ve.min();
const o=s.targetChange;
return o.targetIds&&o.targetIds.length?ve.min():o.readTime?_r(o.readTime):ve.min()}
(e);
return this.listener.d_(n,r)}
A_(e){
const n={
}
;
n.database=nm(this.serializer),n.addTarget=function(s,o){
let l;
const c=o.target;
if(l=Yp(c)?{
documents:RM(s,c)}
:{
query:NM(s,c)._t}
,l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){
l.resumeToken=OE(s,o.resumeToken);
const u=Zp(s,o.expectedCount);
u!==null&&(l.expectedCount=u)}
else if(o.snapshotVersion.compareTo(ve.min())>0){
l.readTime=Cd(s,o.snapshotVersion.toTimestamp());
const u=Zp(s,o.expectedCount);
u!==null&&(l.expectedCount=u)}
return l}
(this.serializer,e);
const r=DM(this.serializer,e);
r&&(n.labels=r),this.a_(n)}
R_(e){
const n={
}
;
n.database=nm(this.serializer),n.removeTarget=e,this.a_(n)}
}
class gL extends qE{
constructor(e,n,r,i,s,o){
super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}
get V_(){
return this.e_>0}
start(){
this.lastStreamToken=void 0,super.start()}
l_(){
this.V_&&this.m_([])}
T_(e,n){
return this.connection.Bo("Write",e,n)}
E_(e){
return Ue(!!e.streamToken),this.lastStreamToken=e.streamToken,Ue(!e.writeResults||e.writeResults.length===0),this.listener.f_()}
onNext(e){
Ue(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();
const n=kM(e.writeResults,e.commitTime),r=_r(e.commitTime);
return this.listener.g_(r,n)}
p_(){
const e={
}
;
e.database=nm(this.serializer),this.a_(e)}
m_(e){
const n={
streamToken:this.lastStreamToken,writes:e.map(r=>CM(this.serializer,r))}
;
this.a_(n)}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yL extends class{
}
{
constructor(e,n,r,i){
super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}
w_(){
if(this.y_)throw new ne(W.FAILED_PRECONDITION,"The client has already been terminated.")}
Mo(e,n,r,i){
return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,em(n,r),i,s,o)).catch(s=>{
throw s.name==="FirebaseError"?(s.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new ne(W.UNKNOWN,s.toString())}
)}
Lo(e,n,r,i,s){
return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,em(n,r),i,o,l,s)).catch(o=>{
throw o.name==="FirebaseError"?(o.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ne(W.UNKNOWN,o.toString())}
)}
terminate(){
this.y_=!0,this.connection.terminate()}
}
class vL{
constructor(e,n){
this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}
v_(){
this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}
M_(e){
this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${
e.toString()}
`),this.C_("Offline")))}
set(e){
this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}
C_(e){
e!==this.state&&(this.state=e,this.onlineStateHandler(e))}
F_(e){
const n=`Could not reach Cloud Firestore backend. ${
e}

This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;
this.D_?(Kr(n),this.D_=!1):re("OnlineStateTracker",n)}
x_(){
this.b_!==null&&(this.b_.cancel(),this.b_=null)}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _L{
constructor(e,n,r,i,s){
this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={
}
,this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{
r.enqueueAndForget(async()=>{
js(this)&&(re("RemoteStore","Restarting streams for network reachability change."),await async function(c){
const u=_e(c);
u.L_.add(4),await tc(u),u.q_.set("Unknown"),u.L_.delete(4),await ph(u)}
(this))}
)}
),this.q_=new vL(r,i)}
}
async function ph(t){
if(js(t))for(const e of t.B_)await e(!0)}
async function tc(t){
for(const e of t.B_)await e(!1)}
function GE(t,e){
const n=_e(t);
n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),e0(n)?Zg(n):ia(n).r_()&&Jg(n,e))}
function Xg(t,e){
const n=_e(t),r=ia(n);
n.N_.delete(e),r.r_()&&WE(n,e),n.N_.size===0&&(r.r_()?r.o_():js(n)&&n.q_.set("Unknown"))}
function Jg(t,e){
if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ve.min())>0){
const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;
e=e.withExpectedCount(n)}
ia(t).A_(e)}
function WE(t,e){
t.Q_.xe(e),ia(t).R_(e)}
function Zg(t){
t.Q_=new wM({
getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}
),ia(t).start(),t.q_.v_()}
function e0(t){
return js(t)&&!ia(t).n_()&&t.N_.size>0}
function js(t){
return _e(t).L_.size===0}
function HE(t){
t.Q_=void 0}
async function wL(t){
t.q_.set("Online")}
async function xL(t){
t.N_.forEach((e,n)=>{
Jg(t,e)}
)}
async function bL(t,e){
HE(t),e0(t)?(t.q_.M_(e),Zg(t)):t.q_.set("Unknown")}
async function EL(t,e,n){
if(t.q_.set("Online"),e instanceof DE&&e.state===2&&e.cause)try{
await async function(i,s){
const o=s.cause;
for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}
(t,e)}
catch(r){
re("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await kd(t,r)}
else if(e instanceof Ou?t.Q_.Ke(e):e instanceof PE?t.Q_.He(e):t.Q_.We(e),!n.isEqual(ve.min()))try{
const r=await $E(t.localStore);
n.compareTo(r)>=0&&await function(s,o){
const l=s.Q_.rt(o);
return l.targetChanges.forEach((c,u)=>{
if(c.resumeToken.approximateByteSize()>0){
const d=s.N_.get(u);
d&&s.N_.set(u,d.withResumeToken(c.resumeToken,o))}
}
),l.targetMismatches.forEach((c,u)=>{
const d=s.N_.get(c);
if(!d)return;
s.N_.set(c,d.withResumeToken(jt.EMPTY_BYTE_STRING,d.snapshotVersion)),WE(s,c);
const m=new Ei(d.target,c,u,d.sequenceNumber);
Jg(s,m)}
),s.remoteSyncer.applyRemoteEvent(l)}
(t,n)}
catch(r){
re("RemoteStore","Failed to raise snapshot:",r),await kd(t,r)}
}
async function kd(t,e,n){
if(!Xl(e))throw e;
t.L_.add(1),await tc(t),t.q_.set("Offline"),n||(n=()=>$E(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{
re("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await ph(t)}
)}
function KE(t,e){
return e().catch(n=>kd(t,n,e))}
async function mh(t){
const e=_e(t),n=Wi(e);
let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;
for(;
TL(e);
)try{
const i=await aL(e.localStore,r);
if(i===null){
e.O_.length===0&&n.o_();
break}
r=i.batchId,IL(e,i)}
catch(i){
await kd(e,i)}
QE(e)&&YE(e)}
function TL(t){
return js(t)&&t.O_.length<10}
function IL(t,e){
t.O_.push(e);
const n=Wi(t);
n.r_()&&n.V_&&n.m_(e.mutations)}
function QE(t){
return js(t)&&!Wi(t).n_()&&t.O_.length>0}
function YE(t){
Wi(t).start()}
async function SL(t){
Wi(t).p_()}
async function AL(t){
const e=Wi(t);
for(const n of t.O_)e.m_(n.mutations)}
async function CL(t,e,n){
const r=t.O_.shift(),i=Gg.from(r,e,n);
await KE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await mh(t)}
async function kL(t,e){
e&&Wi(t).V_&&await async function(r,i){
if(function(o){
return yM(o)&&o!==W.ABORTED}
(i.code)){
const s=r.O_.shift();
Wi(r).s_(),await KE(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await mh(r)}
}
(t,e),QE(t)&&YE(t)}
async function __(t,e){
const n=_e(t);
n.asyncQueue.verifyOperationInProgress(),re("RemoteStore","RemoteStore received new credentials");
const r=js(n);
n.L_.add(3),await tc(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await ph(n)}
async function RL(t,e){
const n=_e(t);
e?(n.L_.delete(2),await ph(n)):e||(n.L_.add(2),await tc(n),n.q_.set("Unknown"))}
function ia(t){
return t.K_||(t.K_=function(n,r,i){
const s=_e(n);
return s.w_(),new mL(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}
(t.datastore,t.asyncQueue,{
Eo:wL.bind(null,t),Ro:xL.bind(null,t),mo:bL.bind(null,t),d_:EL.bind(null,t)}
),t.B_.push(async e=>{
e?(t.K_.s_(),e0(t)?Zg(t):t.q_.set("Unknown")):(await t.K_.stop(),HE(t))}
)),t.K_}
function Wi(t){
return t.U_||(t.U_=function(n,r,i){
const s=_e(n);
return s.w_(),new gL(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}
(t.datastore,t.asyncQueue,{
Eo:()=>Promise.resolve(),Ro:SL.bind(null,t),mo:kL.bind(null,t),f_:AL.bind(null,t),g_:CL.bind(null,t)}
),t.B_.push(async e=>{
e?(t.U_.s_(),await mh(t)):(await t.U_.stop(),t.O_.length>0&&(re("RemoteStore",`Stopping write stream with ${
t.O_.length}
 pending writes`),t.O_=[]))}
)),t.U_}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0{
constructor(e,n,r,i,s){
this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ji,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{
}
)}
get promise(){
return this.deferred.promise}
static createAndSchedule(e,n,r,i,s){
const o=Date.now()+r,l=new t0(e,n,o,i,s);
return l.start(r),l}
start(e){
this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}
skipDelay(){
return this.handleDelayElapsed()}
cancel(e){
this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ne(W.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}
handleDelayElapsed(){
this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}
clearTimeout(){
this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}
}
function n0(t,e){
if(Kr("AsyncQueue",`${
e}
: ${
t}
`),Xl(t))return new ne(W.UNAVAILABLE,`${
e}
: ${
t}
`);
throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{
constructor(e){
this.comparator=e?(n,r)=>e(n,r)||ce.comparator(n.key,r.key):(n,r)=>ce.comparator(n.key,r.key),this.keyedMap=Ba(),this.sortedSet=new ot(this.comparator)}
static emptySet(e){
return new Co(e.comparator)}
has(e){
return this.keyedMap.get(e)!=null}
get(e){
return this.keyedMap.get(e)}
first(){
return this.sortedSet.minKey()}
last(){
return this.sortedSet.maxKey()}
isEmpty(){
return this.sortedSet.isEmpty()}
indexOf(e){
const n=this.keyedMap.get(e);
return n?this.sortedSet.indexOf(n):-1}
get size(){
return this.sortedSet.size}
forEach(e){
this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}
add(e){
const n=this.delete(e.key);
return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}
delete(e){
const n=this.get(e);
return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}
isEqual(e){
if(!(e instanceof Co)||this.size!==e.size)return!1;
const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();
for(;
n.hasNext();
){
const i=n.getNext().key,s=r.getNext().key;
if(!i.isEqual(s))return!1}
return!0}
toString(){
const e=[];
return this.forEach(n=>{
e.push(n.toString())}
),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}
copy(e,n){
const r=new Co;
return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{
constructor(){
this.W_=new ot(ce.comparator)}
track(e){
const n=e.doc.key,r=this.W_.get(n);
r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{
type:r.type,doc:e.doc}
):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{
type:2,doc:e.doc}
):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{
type:0,doc:e.doc}
):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{
type:1,doc:r.doc}
):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{
type:2,doc:e.doc}
):ye():this.W_=this.W_.insert(n,e)}
G_(){
const e=[];
return this.W_.inorderTraversal((n,r)=>{
e.push(r)}
),e}
}
class Wo{
constructor(e,n,r,i,s,o,l,c,u){
this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}
static fromInitialDocuments(e,n,r,i,s){
const o=[];
return n.forEach(l=>{
o.push({
type:0,doc:l}
)}
),new Wo(e,n,Co.emptySet(n),o,r,i,!0,!1,s)}
get hasPendingWrites(){
return!this.mutatedKeys.isEmpty()}
isEqual(e){
if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ah(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;
const n=this.docChanges,r=e.docChanges;
if(n.length!==r.length)return!1;
for(let i=0;
i<n.length;
i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;
return!0}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NL{
constructor(){
this.z_=void 0,this.j_=[]}
H_(){
return this.j_.some(e=>e.J_())}
}
class PL{
constructor(){
this.queries=x_(),this.onlineState="Unknown",this.Y_=new Set}
terminate(){
(function(n,r){
const i=_e(n),s=i.queries;
i.queries=x_(),s.forEach((o,l)=>{
for(const c of l.j_)c.onError(r)}
)}
)(this,new ne(W.ABORTED,"Firestore shutting down"))}
}
function x_(){
return new ra(t=>_E(t),ah)}
async function XE(t,e){
const n=_e(t);
let r=3;
const i=e.query;
let s=n.queries.get(i);
s?!s.H_()&&e.J_()&&(r=2):(s=new NL,r=e.J_()?0:1);
try{
switch(r){
case 0:s.z_=await n.onListen(i,!0);
break;
case 1:s.z_=await n.onListen(i,!1);
break;
case 2:await n.onFirstRemoteStoreListen(i)}
}
catch(o){
const l=n0(o,`Initialization of query '${
no(e.query)}
' failed`);
return void e.onError(l)}
n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&r0(n)}
async function JE(t,e){
const n=_e(t),r=e.query;
let i=3;
const s=n.queries.get(r);
if(s){
const o=s.j_.indexOf(e);
o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}
switch(i){
case 0:return n.queries.delete(r),n.onUnlisten(r,!0);
case 1:return n.queries.delete(r),n.onUnlisten(r,!1);
case 2:return n.onLastRemoteStoreUnlisten(r);
default:return}
}
function DL(t,e){
const n=_e(t);
let r=!1;
for(const i of e){
const s=i.query,o=n.queries.get(s);
if(o){
for(const l of o.j_)l.X_(i)&&(r=!0);
o.z_=i}
}
r&&r0(n)}
function OL(t,e,n){
const r=_e(t),i=r.queries.get(e);
if(i)for(const s of i.j_)s.onError(n);
r.queries.delete(e)}
function r0(t){
t.Y_.forEach(e=>{
e.next()}
)}
var im,b_;
(b_=im||(im={
}
)).ea="default",b_.Cache="cache";
class ZE{
constructor(e,n,r){
this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{
}
}
X_(e){
if(!this.options.includeMetadataChanges){
const r=[];
for(const i of e.docChanges)i.type!==3&&r.push(i);
e=new Wo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}
let n=!1;
return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}
onError(e){
this.ta.error(e)}
Z_(e){
this.onlineState=e;
let n=!1;
return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}
sa(e,n){
if(!e.fromCache||!this.J_())return!0;
const r=n!=="Offline";
return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}
ia(e){
if(e.docChanges.length>0)return!0;
const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;
return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}
oa(e){
e=Wo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}
J_(){
return this.options.source!==im.Cache}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT{
constructor(e){
this.key=e}
}
class tT{
constructor(e){
this.key=e}
}
class VL{
constructor(e,n){
this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Te(),this.mutatedKeys=Te(),this.Aa=wE(e),this.Ra=new Co(this.Aa)}
get Va(){
return this.Ta}
ma(e,n){
const r=n?n.fa:new w_,i=n?n.Ra:this.Ra;
let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;
const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;
if(e.inorderTraversal((d,m)=>{
const g=i.get(d),_=lh(this.query,m)?m:null,w=!!g&&this.mutatedKeys.has(g.key),N=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);
let O=!1;
g&&_?g.data.isEqual(_.data)?w!==N&&(r.track({
type:3,doc:_}
),O=!0):this.ga(g,_)||(r.track({
type:2,doc:_}
),O=!0,(c&&this.Aa(_,c)>0||u&&this.Aa(_,u)<0)&&(l=!0)):!g&&_?(r.track({
type:0,doc:_}
),O=!0):g&&!_&&(r.track({
type:1,doc:g}
),O=!0,(c||u)&&(l=!0)),O&&(_?(o=o.add(_),s=N?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}
),this.query.limit!==null)for(;
o.size>this.query.limit;
){
const d=this.query.limitType==="F"?o.last():o.first();
o=o.delete(d.key),s=s.delete(d.key),r.track({
type:1,doc:d}
)}
return{
Ra:o,fa:r,ns:l,mutatedKeys:s}
}
ga(e,n){
return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}
applyChanges(e,n,r,i){
const s=this.Ra;
this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;
const o=e.fa.G_();
o.sort((d,m)=>function(_,w){
const N=O=>{
switch(O){
case 0:return 1;
case 2:case 3:return 2;
case 1:return 0;
default:return ye()}
}
;
return N(_)-N(w)}
(d.type,m.type)||this.Aa(d.doc,m.doc)),this.pa(r),i=i!=null&&i;
const l=n&&!i?this.ya():[],c=this.da.size===0&&this.current&&!i?1:0,u=c!==this.Ea;
return this.Ea=c,o.length!==0||u?{
snapshot:new Wo(this.query,e.Ra,s,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}
:{
wa:l}
}
Z_(e){
return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({
Ra:this.Ra,fa:new w_,mutatedKeys:this.mutatedKeys,ns:!1}
,!1)):{
wa:[]}
}
Sa(e){
return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}
pa(e){
e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{
}
),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}
ya(){
if(!this.current)return[];
const e=this.da;
this.da=Te(),this.Ra.forEach(r=>{
this.Sa(r.key)&&(this.da=this.da.add(r.key))}
);
const n=[];
return e.forEach(r=>{
this.da.has(r)||n.push(new tT(r))}
),this.da.forEach(r=>{
e.has(r)||n.push(new eT(r))}
),n}
ba(e){
this.Ta=e.Ts,this.da=Te();
const n=this.ma(e.documents);
return this.applyChanges(n,!0)}
Da(){
return Wo.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}
}
class ML{
constructor(e,n,r){
this.query=e,this.targetId=n,this.view=r}
}
class LL{
constructor(e){
this.key=e,this.va=!1}
}
class jL{
constructor(e,n,r,i,s,o){
this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={
}
,this.Fa=new ra(l=>_E(l),ah),this.Ma=new Map,this.xa=new Set,this.Oa=new ot(ce.comparator),this.Na=new Map,this.La=new Kg,this.Ba={
}
,this.ka=new Map,this.qa=Go.kn(),this.onlineState="Unknown",this.Qa=void 0}
get isPrimaryClient(){
return this.Qa===!0}
}
async function FL(t,e,n=!0){
const r=aT(t);
let i;
const s=r.Fa.get(e);
return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await nT(r,e,n,!0),i}
async function BL(t,e){
const n=aT(t);
await nT(n,e,!0,!1)}
async function nT(t,e,n,r){
const i=await lL(t.localStore,vr(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);
let l;
return r&&(l=await UL(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&GE(t.remoteStore,i),l}
async function UL(t,e,n,r,i){
t.Ka=(m,g,_)=>async function(N,O,I,E){
let k=O.view.ma(I);
k.ns&&(k=await g_(N.localStore,O.query,!1).then(({
documents:S}
)=>O.view.ma(S,k)));
const M=E&&E.targetChanges.get(O.targetId),G=E&&E.targetMismatches.get(O.targetId)!=null,q=O.view.applyChanges(k,N.isPrimaryClient,M,G);
return T_(N,O.targetId,q.wa),q.snapshot}
(t,m,g,_);
const s=await g_(t.localStore,e,!0),o=new VL(e,s.Ts),l=o.ma(s.documents),c=ec.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(l,t.isPrimaryClient,c);
T_(t,n,u.wa);
const d=new ML(e,n,o);
return t.Fa.set(e,d),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),u.snapshot}
async function $L(t,e,n){
const r=_e(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);
if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!ah(o,e))),void r.Fa.delete(e);
r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await rm(r.localStore,i.targetId,!1).then(()=>{
r.sharedClientState.clearQueryState(i.targetId),n&&Xg(r.remoteStore,i.targetId),sm(r,i.targetId)}
).catch(Yl)):(sm(r,i.targetId),await rm(r.localStore,i.targetId,!0))}
async function zL(t,e){
const n=_e(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);
n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Xg(n.remoteStore,r.targetId))}
async function qL(t,e,n){
const r=XL(t);
try{
const i=await function(o,l){
const c=_e(o),u=wt.now(),d=l.reduce((_,w)=>_.add(w.key),Te());
let m,g;
return c.persistence.runTransaction("Locally write mutations","readwrite",_=>{
let w=Qr(),N=Te();
return c.cs.getEntries(_,d).next(O=>{
w=O,w.forEach((I,E)=>{
E.isValidDocument()||(N=N.add(I))}
)}
).next(()=>c.localDocuments.getOverlayedDocuments(_,w)).next(O=>{
m=O;
const I=[];
for(const E of l){
const k=hM(E,m.get(E.key).overlayedDocument);
k!=null&&I.push(new Yi(E.key,k,dE(k.value.mapValue),rn.exists(!0)))}
return c.mutationQueue.addMutationBatch(_,u,I,l)}
).next(O=>{
g=O;
const I=O.applyToLocalDocumentSet(m,N);
return c.documentOverlayCache.saveOverlays(_,O.batchId,I)}
)}
).then(()=>({
batchId:g.batchId,changes:bE(m)}
))}
(r.localStore,e);
r.sharedClientState.addPendingMutation(i.batchId),function(o,l,c){
let u=o.Ba[o.currentUser.toKey()];
u||(u=new ot(Pe)),u=u.insert(l,c),o.Ba[o.currentUser.toKey()]=u}
(r,i.batchId,n),await nc(r,i.changes),await mh(r.remoteStore)}
catch(i){
const s=n0(i,"Failed to persist write");
n.reject(s)}
}
async function rT(t,e){
const n=_e(t);
try{
const r=await sL(n.localStore,e);
e.targetChanges.forEach((i,s)=>{
const o=n.Na.get(s);
o&&(Ue(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?Ue(o.va):i.removedDocuments.size>0&&(Ue(o.va),o.va=!1))}
),await nc(n,r,e)}
catch(r){
await Yl(r)}
}
function E_(t,e,n){
const r=_e(t);
if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){
const i=[];
r.Fa.forEach((s,o)=>{
const l=o.view.Z_(e);
l.snapshot&&i.push(l.snapshot)}
),function(o,l){
const c=_e(o);
c.onlineState=l;
let u=!1;
c.queries.forEach((d,m)=>{
for(const g of m.j_)g.Z_(l)&&(u=!0)}
),u&&r0(c)}
(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}
}
async function GL(t,e,n){
const r=_e(t);
r.sharedClientState.updateQueryState(e,"rejected",n);
const i=r.Na.get(e),s=i&&i.key;
if(s){
let o=new ot(ce.comparator);
o=o.insert(s,Yt.newNoDocument(s,ve.min()));
const l=Te().add(s),c=new hh(ve.min(),new Map,new ot(Pe),o,l);
await rT(r,c),r.Oa=r.Oa.remove(s),r.Na.delete(e),i0(r)}
else await rm(r.localStore,e,!1).then(()=>sm(r,e,n)).catch(Yl)}
async function WL(t,e){
const n=_e(t),r=e.batch.batchId;
try{
const i=await iL(n.localStore,e);
sT(n,r,null),iT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await nc(n,i)}
catch(i){
await Yl(i)}
}
async function HL(t,e,n){
const r=_e(t);
try{
const i=await function(o,l){
const c=_e(o);
return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{
let d;
return c.mutationQueue.lookupMutationBatch(u,l).next(m=>(Ue(m!==null),d=m.keys(),c.mutationQueue.removeMutationBatch(u,m))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>c.localDocuments.getDocuments(u,d))}
)}
(r.localStore,e);
sT(r,e,n),iT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await nc(r,i)}
catch(i){
await Yl(i)}
}
function iT(t,e){
(t.ka.get(e)||[]).forEach(n=>{
n.resolve()}
),t.ka.delete(e)}
function sT(t,e,n){
const r=_e(t);
let i=r.Ba[r.currentUser.toKey()];
if(i){
const s=i.get(e);
s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}
}
function sm(t,e,n=null){
t.sharedClientState.removeLocalQueryTarget(e);
for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);
t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{
t.La.containsKey(r)||oT(t,r)}
)}
function oT(t,e){
t.xa.delete(e.path.canonicalString());
const n=t.Oa.get(e);
n!==null&&(Xg(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),i0(t))}
function T_(t,e,n){
for(const r of n)r instanceof eT?(t.La.addReference(r.key,e),KL(t,r)):r instanceof tT?(re("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||oT(t,r.key)):ye()}
function KL(t,e){
const n=e.key,r=n.path.canonicalString();
t.Oa.get(n)||t.xa.has(r)||(re("SyncEngine","New document in limbo: "+n),t.xa.add(r),i0(t))}
function i0(t){
for(;
t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;
){
const e=t.xa.values().next().value;
t.xa.delete(e);
const n=new ce(Ye.fromString(e)),r=t.qa.next();
t.Na.set(r,new LL(n)),t.Oa=t.Oa.insert(n,r),GE(t.remoteStore,new Ei(vr(zg(n.path)),r,"TargetPurposeLimboResolution",Lg.oe))}
}
async function nc(t,e,n){
const r=_e(t),i=[],s=[],o=[];
r.Fa.isEmpty()||(r.Fa.forEach((l,c)=>{
o.push(r.Ka(c,e,n).then(u=>{
var d;
if((u||n)&&r.isPrimaryClient){
const m=u?!u.fromCache:(d=n==null?void 0:n.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;
r.sharedClientState.updateQueryState(c.targetId,m?"current":"not-current")}
if(u){
i.push(u);
const m=Yg.Wi(c.targetId,u);
s.push(m)}
}
))}
),await Promise.all(o),r.Ca.d_(i),await async function(c,u){
const d=_e(c);
try{
await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>K.forEach(u,g=>K.forEach(g.$i,_=>d.persistence.referenceDelegate.addReference(m,g.targetId,_)).next(()=>K.forEach(g.Ui,_=>d.persistence.referenceDelegate.removeReference(m,g.targetId,_)))))}
catch(m){
if(!Xl(m))throw m;
re("LocalStore","Failed to update sequence numbers: "+m)}
for(const m of u){
const g=m.targetId;
if(!m.fromCache){
const _=d.os.get(g),w=_.snapshotVersion,N=_.withLastLimboFreeSnapshotVersion(w);
d.os=d.os.insert(g,N)}
}
}
(r.localStore,s))}
async function QL(t,e){
const n=_e(t);
if(!n.currentUser.isEqual(e)){
re("SyncEngine","User change. New user:",e.toKey());
const r=await UE(n.localStore,e);
n.currentUser=e,function(s,o){
s.ka.forEach(l=>{
l.forEach(c=>{
c.reject(new ne(W.CANCELLED,o))}
)}
),s.ka.clear()}
(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await nc(n,r.hs)}
}
function YL(t,e){
const n=_e(t),r=n.Na.get(e);
if(r&&r.va)return Te().add(r.key);
{
let i=Te();
const s=n.Ma.get(e);
if(!s)return i;
for(const o of s){
const l=n.Fa.get(o);
i=i.unionWith(l.view.Va)}
return i}
}
function aT(t){
const e=_e(t);
return e.remoteStore.remoteSyncer.applyRemoteEvent=rT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=YL.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=GL.bind(null,e),e.Ca.d_=DL.bind(null,e.eventManager),e.Ca.$a=OL.bind(null,e.eventManager),e}
function XL(t){
const e=_e(t);
return e.remoteStore.remoteSyncer.applySuccessfulWrite=WL.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=HL.bind(null,e),e}
class Rd{
constructor(){
this.kind="memory",this.synchronizeTabs=!1}
async initialize(e){
this.serializer=fh(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}
ja(e,n){
return null}
Ha(e,n){
return null}
za(e){
return rL(this.persistence,new tL,e.initialUser,this.serializer)}
Ga(e){
return new JM(Qg.Zr,this.serializer)}
Wa(e){
return new uL}
async terminate(){
var e,n;
(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}
}
Rd.provider={
build:()=>new Rd}
;
class om{
async initialize(e,n){
this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>E_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=QL.bind(null,this.syncEngine),await RL(this.remoteStore,this.syncEngine.isPrimaryClient))}
createEventManager(e){
return function(){
return new PL}
()}
createDatastore(e){
const n=fh(e.databaseInfo.databaseId),r=function(s){
return new pL(s)}
(e.databaseInfo);
return function(s,o,l,c){
return new yL(s,o,l,c)}
(e.authCredentials,e.appCheckCredentials,r,n)}
createRemoteStore(e){
return function(r,i,s,o,l){
return new _L(r,i,s,o,l)}
(this.localStore,this.datastore,e.asyncQueue,n=>E_(this.syncEngine,n,0),function(){
return v_.D()?new v_:new dL}
())}
createSyncEngine(e,n){
return function(i,s,o,l,c,u,d){
const m=new jL(i,s,o,l,c,u);
return d&&(m.Qa=!0),m}
(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}
async terminate(){
var e,n;
await async function(i){
const s=_e(i);
re("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await tc(s),s.k_.shutdown(),s.q_.set("Unknown")}
(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}
}
om.provider={
build:()=>new om}
;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lT{
constructor(e){
this.observer=e,this.muted=!1}
next(e){
this.muted||this.observer.next&&this.Ya(this.observer.next,e)}
error(e){
this.muted||(this.observer.error?this.Ya(this.observer.error,e):Kr("Uncaught Error in snapshot listener:",e.toString()))}
Za(){
this.muted=!0}
Ya(e,n){
setTimeout(()=>{
this.muted||e(n)}
,0)}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JL{
constructor(e,n,r,i,s){
this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Kt.UNAUTHENTICATED,this.clientId=lE.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{
re("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}
),this.appCheckCredentials.start(r,o=>(re("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}
get configuration(){
return{
asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}
}
setCredentialChangeListener(e){
this.authCredentialListener=e}
setAppCheckTokenChangeListener(e){
this.appCheckCredentialListener=e}
terminate(){
this.asyncQueue.enterRestrictedMode();
const e=new ji;
return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{
try{
this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}
catch(n){
const r=n0(n,"Failed to shutdown persistence");
e.reject(r)}
}
),e.promise}
}
async function Of(t,e){
t.asyncQueue.verifyOperationInProgress(),re("FirestoreClient","Initializing OfflineComponentProvider");
const n=t.configuration;
await e.initialize(n);
let r=n.initialUser;
t.setCredentialChangeListener(async i=>{
r.isEqual(i)||(await UE(e.localStore,i),r=i)}
),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}
async function I_(t,e){
t.asyncQueue.verifyOperationInProgress();
const n=await ZL(t);
re("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>__(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>__(e.remoteStore,i)),t._onlineComponents=e}
async function ZL(t){
if(!t._offlineComponents)if(t._uninitializedComponentsProvider){
re("FirestoreClient","Using user provided OfflineComponentProvider");
try{
await Of(t,t._uninitializedComponentsProvider._offline)}
catch(e){
const n=e;
if(!function(i){
return i.name==="FirebaseError"?i.code===W.FAILED_PRECONDITION||i.code===W.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}
(n))throw n;
Uo("Error using user provided cache. Falling back to memory cache: "+n),await Of(t,new Rd)}
}
else re("FirestoreClient","Using default OfflineComponentProvider"),await Of(t,new Rd);
return t._offlineComponents}
async function cT(t){
return t._onlineComponents||(t._uninitializedComponentsProvider?(re("FirestoreClient","Using user provided OnlineComponentProvider"),await I_(t,t._uninitializedComponentsProvider._online)):(re("FirestoreClient","Using default OnlineComponentProvider"),await I_(t,new om))),t._onlineComponents}
function e4(t){
return cT(t).then(e=>e.syncEngine)}
async function am(t){
const e=await cT(t),n=e.eventManager;
return n.onListen=FL.bind(null,e.syncEngine),n.onUnlisten=$L.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=BL.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=zL.bind(null,e.syncEngine),n}
function t4(t,e,n={
}
){
const r=new ji;
return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,c,u){
const d=new lT({
next:g=>{
d.Za(),o.enqueueAndForget(()=>JE(s,m)),g.fromCache&&c.source==="server"?u.reject(new ne(W.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(g)}
,error:g=>u.reject(g)}
),m=new ZE(l,d,{
includeMetadataChanges:!0,_a:!0}
);
return XE(s,m)}
(await am(t),t.asyncQueue,e,n,r)),r.promise}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uT(t){
const e={
}
;
return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dT(t,e,n){
if(!n)throw new ne(W.INVALID_ARGUMENT,`Function ${
t}
() cannot be called with an empty ${
e}
.`)}
function n4(t,e,n,r){
if(e===!0&&r===!0)throw new ne(W.INVALID_ARGUMENT,`${
t}
 and ${
n}
 cannot be used together.`)}
function A_(t){
if(!ce.isDocumentKey(t))throw new ne(W.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${
t}
 has ${
t.length}
.`)}
function C_(t){
if(ce.isDocumentKey(t))throw new ne(W.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${
t}
 has ${
t.length}
.`)}
function gh(t){
if(t===void 0)return"undefined";
if(t===null)return"null";
if(typeof t=="string")return t.length>20&&(t=`${
t.substring(0,20)}
...`),JSON.stringify(t);
if(typeof t=="number"||typeof t=="boolean")return""+t;
if(typeof t=="object"){
if(t instanceof Array)return"an array";
{
const e=function(r){
return r.constructor?r.constructor.name:null}
(t);
return e?`a custom ${
e}
 object`:"an object"}
}
return typeof t=="function"?"a function":ye()}
function Tn(t,e){
if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){
if(e.name===t.constructor.name)throw new ne(W.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");
{
const n=gh(t);
throw new ne(W.INVALID_ARGUMENT,`Expected type '${
e.name}
', but it was: ${
n}
`)}
}
return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{
constructor(e){
var n,r;
if(e.host===void 0){
if(e.ssl!==void 0)throw new ne(W.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");
this.host="firestore.googleapis.com",this.ssl=!0}
else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;
if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;
else{
if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ne(W.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");
this.cacheSizeBytes=e.cacheSizeBytes}
n4("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=uT((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{
}
),function(s){
if(s.timeoutSeconds!==void 0){
if(isNaN(s.timeoutSeconds))throw new ne(W.INVALID_ARGUMENT,`invalid long polling timeout: ${
s.timeoutSeconds}
 (must not be NaN)`);
if(s.timeoutSeconds<5)throw new ne(W.INVALID_ARGUMENT,`invalid long polling timeout: ${
s.timeoutSeconds}
 (minimum allowed value is 5)`);
if(s.timeoutSeconds>30)throw new ne(W.INVALID_ARGUMENT,`invalid long polling timeout: ${
s.timeoutSeconds}
 (maximum allowed value is 30)`)}
}
(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}
isEqual(e){
return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){
return r.timeoutSeconds===i.timeoutSeconds}
(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}
}
class yh{
constructor(e,n,r,i){
this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new k_({
}
),this._settingsFrozen=!1,this._terminateTask="notTerminated"}
get app(){
if(!this._app)throw new ne(W.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");
return this._app}
get _initialized(){
return this._settingsFrozen}
get _terminated(){
return this._terminateTask!=="notTerminated"}
_setSettings(e){
if(this._settingsFrozen)throw new ne(W.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");
this._settings=new k_(e),e.credentials!==void 0&&(this._authCredentials=function(r){
if(!r)return new xV;
switch(r.type){
case"firstParty":return new IV(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);
case"provider":return r.client;
default:throw new ne(W.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}
}
(e.credentials))}
_getSettings(){
return this._settings}
_freezeSettings(){
return this._settingsFrozen=!0,this._settings}
_delete(){
return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}
async _restart(){
this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}
toJSON(){
return{
app:this._app,databaseId:this._databaseId,settings:this._settings}
}
_terminate(){
return function(n){
const r=S_.get(n);
r&&(re("ComponentProvider","Removing Datastore"),S_.delete(n),r.terminate())}
(this),Promise.resolve()}
}
function r4(t,e,n,r={
}
){
var i;
const s=(t=Tn(t,yh))._getSettings(),o=`${
e}
:${
n}
`;
if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Uo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({
}
,s),{
host:o,ssl:!1}
)),r.mockUserToken){
let l,c;
if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=Kt.MOCK_USER;
else{
l=YN(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);
const u=r.mockUserToken.sub||r.mockUserToken.user_id;
if(!u)throw new ne(W.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");
c=new Kt(u)}
t._authCredentials=new bV(new aE(l,c))}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{
constructor(e,n,r){
this.converter=n,this._query=r,this.type="query",this.firestore=e}
withConverter(e){
return new Fs(this.firestore,e,this._query)}
}
class sn{
constructor(e,n,r){
this.converter=n,this._key=r,this.type="document",this.firestore=e}
get _path(){
return this._key.path}
get id(){
return this._key.path.lastSegment()}
get path(){
return this._key.path.canonicalString()}
get parent(){
return new Fi(this.firestore,this.converter,this._key.path.popLast())}
withConverter(e){
return new sn(this.firestore,e,this._key)}
}
class Fi extends Fs{
constructor(e,n,r){
super(e,n,zg(r)),this._path=r,this.type="collection"}
get id(){
return this._query.path.lastSegment()}
get path(){
return this._query.path.canonicalString()}
get parent(){
const e=this._path.popLast();
return e.isEmpty()?null:new sn(this.firestore,null,new ce(e))}
withConverter(e){
return new Fi(this.firestore,e,this._path)}
}
function nt(t,e,...n){
if(t=xt(t),dT("collection","path",e),t instanceof yh){
const r=Ye.fromString(e,...n);
return C_(r),new Fi(t,null,r)}
{
if(!(t instanceof sn||t instanceof Fi))throw new ne(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
const r=t._path.child(Ye.fromString(e,...n));
return C_(r),new Fi(t.firestore,null,r)}
}
function Me(t,e,...n){
if(t=xt(t),arguments.length===1&&(e=lE.newId()),dT("doc","path",e),t instanceof yh){
const r=Ye.fromString(e,...n);
return A_(r),new sn(t,null,new ce(r))}
{
if(!(t instanceof sn||t instanceof Fi))throw new ne(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
const r=t._path.child(Ye.fromString(e,...n));
return A_(r),new sn(t.firestore,t instanceof Fi?t.converter:null,new ce(r))}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{
constructor(e=Promise.resolve()){
this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new zE(this,"async_queue_retry"),this.Vu=()=>{
const r=Df();
r&&re("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()}
,this.mu=e;
const n=Df();
n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}
get isShuttingDown(){
return this.Iu}
enqueueAndForget(e){
this.enqueue(e)}
enqueueAndForgetEvenWhileRestricted(e){
this.fu(),this.gu(e)}
enterRestrictedMode(e){
if(!this.Iu){
this.Iu=!0,this.Au=e||!1;
const n=Df();
n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}
}
enqueue(e){
if(this.fu(),this.Iu)return new Promise(()=>{
}
);
const n=new ji;
return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}
enqueueRetryable(e){
this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}
async pu(){
if(this.Pu.length!==0){
try{
await this.Pu[0](),this.Pu.shift(),this.t_.reset()}
catch(e){
if(!Xl(e))throw e;
re("AsyncQueue","Operation failed with retryable error: "+e)}
this.Pu.length>0&&this.t_.Go(()=>this.pu())}
}
gu(e){
const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{
this.Eu=r,this.du=!1;
const i=function(o){
let l=o.message||"";
return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}
(r);
throw Kr("INTERNAL UNHANDLED ERROR: ",i),r}
).then(r=>(this.du=!1,r))));
return this.mu=n,n}
enqueueAfterDelay(e,n,r){
this.fu(),this.Ru.indexOf(e)>-1&&(n=0);
const i=t0.createAndSchedule(this,e,n,r,s=>this.yu(s));
return this.Tu.push(i),i}
fu(){
this.Eu&&ye()}
verifyOperationInProgress(){
}
async wu(){
let e;
do e=this.mu,await e;
while(e!==this.mu)}
Su(e){
for(const n of this.Tu)if(n.timerId===e)return!0;
return!1}
bu(e){
return this.wu().then(()=>{
this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);
for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;
return this.wu()}
)}
Du(e){
this.Ru.push(e)}
yu(e){
const n=this.Tu.indexOf(e);
this.Tu.splice(n,1)}
}
function N_(t){
return function(n,r){
if(typeof n!="object"||n===null)return!1;
const i=n;
for(const s of r)if(s in i&&typeof i[s]=="function")return!0;
return!1}
(t,["next","error","complete"])}
class Yr extends yh{
constructor(e,n,r,i){
super(e,n,r,i),this.type="firestore",this._queue=new R_,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}
async _terminate(){
if(this._firestoreClient){
const e=this._firestoreClient.terminate();
this._queue=new R_(e),this._firestoreClient=void 0,await e}
}
}
function i4(t,e){
const n=typeof t=="object"?t:_b(),r=typeof t=="string"?t:e||"(default)",i=Ag(n,"firestore").getImmediate({
identifier:r}
);
if(!i._initialized){
const s=KN("firestore");
s&&r4(i,...s)}
return i}
function vh(t){
if(t._terminated)throw new ne(W.FAILED_PRECONDITION,"The client has already been terminated.");
return t._firestoreClient||s4(t),t._firestoreClient}
function s4(t){
var e,n,r;
const i=t._freezeSettings(),s=function(l,c,u,d){
return new jV(l,c,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,uT(d.experimentalLongPollingOptions),d.useFetchStreams)}
(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);
t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={
_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}
),t._firestoreClient=new JL(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){
const c=l==null?void 0:l._online.build();
return{
_offline:l==null?void 0:l._offline.build(c),_online:c}
}
(t._componentsProvider))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{
constructor(e){
this._byteString=e}
static fromBase64String(e){
try{
return new Ho(jt.fromBase64String(e))}
catch(n){
throw new ne(W.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}
}
static fromUint8Array(e){
return new Ho(jt.fromUint8Array(e))}
toBase64(){
return this._byteString.toBase64()}
toUint8Array(){
return this._byteString.toUint8Array()}
toString(){
return"Bytes(base64: "+this.toBase64()+")"}
isEqual(e){
return this._byteString.isEqual(e._byteString)}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{
constructor(...e){
for(let n=0;
n<e.length;
++n)if(e[n].length===0)throw new ne(W.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");
this._internalPath=new Dt(e)}
isEqual(e){
return this._internalPath.isEqual(e._internalPath)}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{
constructor(e){
this._methodName=e}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o0{
constructor(e,n){
if(!isFinite(e)||e<-90||e>90)throw new ne(W.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);
if(!isFinite(n)||n<-180||n>180)throw new ne(W.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);
this._lat=e,this._long=n}
get latitude(){
return this._lat}
get longitude(){
return this._long}
isEqual(e){
return this._lat===e._lat&&this._long===e._long}
toJSON(){
return{
latitude:this._lat,longitude:this._long}
}
_compareTo(e){
return Pe(this._lat,e._lat)||Pe(this._long,e._long)}
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{
constructor(e){
this._values=(e||[]).map(n=>n)}
toArray(){
return this._values.map(e=>e)}
isEqual(e){
return function(r,i){
if(r.length!==i.length)return!1;
for(let s=0;
s<r.length;
++s)if(r[s]!==i[s])return!1;
return!0}
(this._values,e._values)}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o4=/^__.*__$/;
class a4{
constructor(e,n,r){
this.data=e,this.fieldMask=n,this.fieldTransforms=r}
toMutation(e,n){
return this.fieldMask!==null?new Yi(e,this.data,this.fieldMask,n,this.fieldTransforms):new Zl(e,this.data,n,this.fieldTransforms)}
}
class hT{
constructor(e,n,r){
this.data=e,this.fieldMask=n,this.fieldTransforms=r}
toMutation(e,n){
return new Yi(e,this.data,this.fieldMask,n,this.fieldTransforms)}
}
function fT(t){
switch(t){
case 0:case 2:case 1:return!0;
case 3:case 4:return!1;
default:throw ye()}
}
class l0{
constructor(e,n,r,i,s,o){
this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}
get path(){
return this.settings.path}
get Cu(){
return this.settings.Cu}
Fu(e){
return new l0(Object.assign(Object.assign({
}
,this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}
Mu(e){
var n;
const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({
path:r,xu:!1}
);
return i.Ou(e),i}
Nu(e){
var n;
const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({
path:r,xu:!1}
);
return i.vu(),i}
Lu(e){
return this.Fu({
path:void 0,xu:!0}
)}
Bu(e){
return Nd(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}
contains(e){
return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}
vu(){
if(this.path)for(let e=0;
e<this.path.length;
e++)this.Ou(this.path.get(e))}
Ou(e){
if(e.length===0)throw this.Bu("Document fields must not be empty");
if(fT(this.Cu)&&o4.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}
}
class l4{
constructor(e,n,r){
this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||fh(e)}
Qu(e,n,r,i=!1){
return new l0({
Cu:e,methodName:n,qu:r,path:Dt.emptyPath(),xu:!1,ku:i}
,this.databaseId,this.serializer,this.ignoreUndefinedProperties)}
}
function ic(t){
const e=t._freezeSettings(),n=fh(t._databaseId);
return new l4(t._databaseId,!!e.ignoreUndefinedProperties,n)}
function c0(t,e,n,r,i,s={
}
){
const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);
u0("Data must be an object, but it was:",o,r);
const l=gT(r,o);
let c,u;
if(s.merge)c=new wn(o.fieldMask),u=o.fieldTransforms;
else if(s.mergeFields){
const d=[];
for(const m of s.mergeFields){
const g=lm(e,m,n);
if(!o.contains(g))throw new ne(W.INVALID_ARGUMENT,`Field '${
g}
' is specified in your field mask but missing from your input data.`);
vT(d,g)||d.push(g)}
c=new wn(d),u=o.fieldTransforms.filter(m=>c.covers(m.field))}
else c=null,u=o.fieldTransforms;
return new a4(new un(l),c,u)}
class _h extends s0{
_toFieldTransform(e){
if(e.Cu!==2)throw e.Cu===1?e.Bu(`${
this._methodName}
() can only appear at the top level of your update data`):e.Bu(`${
this._methodName}
() cannot be used with set() unless you pass {
merge:true}
`);
return e.fieldMask.push(e.path),null}
isEqual(e){
return e instanceof _h}
}
function pT(t,e,n,r){
const i=t.Qu(1,e,n);
u0("Data must be an object, but it was:",i,r);
const s=[],o=un.empty();
Ls(r,(c,u)=>{
const d=d0(e,c,n);
u=xt(u);
const m=i.Nu(d);
if(u instanceof _h)s.push(d);
else{
const g=sc(u,m);
g!=null&&(s.push(d),o.set(d,g))}
}
);
const l=new wn(s);
return new hT(o,l,i.fieldTransforms)}
function mT(t,e,n,r,i,s){
const o=t.Qu(1,e,n),l=[lm(e,r,n)],c=[i];
if(s.length%2!=0)throw new ne(W.INVALID_ARGUMENT,`Function ${
e}
() needs to be called with an even number of arguments that alternate between field names and values.`);
for(let g=0;
g<s.length;
g+=2)l.push(lm(e,s[g])),c.push(s[g+1]);
const u=[],d=un.empty();
for(let g=l.length-1;
g>=0;
--g)if(!vT(u,l[g])){
const _=l[g];
let w=c[g];
w=xt(w);
const N=o.Nu(_);
if(w instanceof _h)u.push(_);
else{
const O=sc(w,N);
O!=null&&(u.push(_),d.set(_,O))}
}
const m=new wn(u);
return new hT(d,m,o.fieldTransforms)}
function c4(t,e,n,r=!1){
return sc(n,t.Qu(r?4:3,e))}
function sc(t,e){
if(yT(t=xt(t)))return u0("Unsupported field value:",e,t),gT(t,e);
if(t instanceof s0)return function(r,i){
if(!fT(i.Cu))throw i.Bu(`${
r._methodName}
() can only be used with update() and set()`);
if(!i.path)throw i.Bu(`${
r._methodName}
() is not currently supported inside arrays`);
const s=r._toFieldTransform(i);
s&&i.fieldTransforms.push(s)}
(t,e),null;
if(t===void 0&&e.ignoreUndefinedProperties)return null;
if(e.path&&e.fieldMask.push(e.path),t instanceof Array){
if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");
return function(r,i){
const s=[];
let o=0;
for(const l of r){
let c=sc(l,i.Lu(o));
c==null&&(c={
nullValue:"NULL_VALUE"}
),s.push(c),o++}
return{
arrayValue:{
values:s}
}
}
(t,e)}
return function(r,i){
if((r=xt(r))===null)return{
nullValue:"NULL_VALUE"}
;
if(typeof r=="number")return oM(i.serializer,r);
if(typeof r=="boolean")return{
booleanValue:r}
;
if(typeof r=="string")return{
stringValue:r}
;
if(r instanceof Date){
const s=wt.fromDate(r);
return{
timestampValue:Cd(i.serializer,s)}
}
if(r instanceof wt){
const s=new wt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));
return{
timestampValue:Cd(i.serializer,s)}
}
if(r instanceof o0)return{
geoPointValue:{
latitude:r.latitude,longitude:r.longitude}
}
;
if(r instanceof Ho)return{
bytesValue:OE(i.serializer,r._byteString)}
;
if(r instanceof sn){
const s=i.databaseId,o=r.firestore._databaseId;
if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${
o.projectId}
/${
o.database}
 but should be for database ${
s.projectId}
/${
s.database}
`);
return{
referenceValue:Hg(r.firestore._databaseId||i.databaseId,r._key.path)}
}
if(r instanceof a0)return function(o,l){
return{
mapValue:{
fields:{
__type__:{
stringValue:"__vector__"}
,value:{
arrayValue:{
values:o.toArray().map(c=>{
if(typeof c!="number")throw l.Bu("VectorValues must only contain numeric values.");
return qg(l.serializer,c)}
)}
}
}
}
}
}
(r,i);
throw i.Bu(`Unsupported field value: ${
gh(r)}
`)}
(t,e)}
function gT(t,e){
const n={
}
;
return cE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ls(t,(r,i)=>{
const s=sc(i,e.Mu(r));
s!=null&&(n[r]=s)}
),{
mapValue:{
fields:n}
}
}
function yT(t){
return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof wt||t instanceof o0||t instanceof Ho||t instanceof sn||t instanceof s0||t instanceof a0)}
function u0(t,e,n){
if(!yT(n)||!function(i){
return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}
(n)){
const r=gh(n);
throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}
}
function lm(t,e,n){
if((e=xt(e))instanceof rc)return e._internalPath;
if(typeof e=="string")return d0(t,e);
throw Nd("Field path arguments must be of type string or ",t,!1,void 0,n)}
const u4=new RegExp("[~\\*/\\[\\]]");
function d0(t,e,n){
if(e.search(u4)>=0)throw Nd(`Invalid field path (${
e}
). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);
try{
return new rc(...e.split("."))._internalPath}
catch{
throw Nd(`Invalid field path (${
e}
). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}
}
function Nd(t,e,n,r,i){
const s=r&&!r.isEmpty(),o=i!==void 0;
let l=`Function ${
e}
() called with invalid data`;
n&&(l+=" (via `toFirestore()`)"),l+=". ";
let c="";
return(s||o)&&(c+=" (found",s&&(c+=` in field ${
r}
`),o&&(c+=` in document ${
i}
`),c+=")"),new ne(W.INVALID_ARGUMENT,l+t+c)}
function vT(t,e){
return t.some(n=>n.isEqual(e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _T{
constructor(e,n,r,i,s){
this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}
get id(){
return this._key.path.lastSegment()}
get ref(){
return new sn(this._firestore,this._converter,this._key)}
exists(){
return this._document!==null}
data(){
if(this._document){
if(this._converter){
const e=new d4(this._firestore,this._userDataWriter,this._key,this._document,null);
return this._converter.fromFirestore(e)}
return this._userDataWriter.convertValue(this._document.data.value)}
}
get(e){
if(this._document){
const n=this._document.data.field(wT("DocumentSnapshot.get",e));
if(n!==null)return this._userDataWriter.convertValue(n)}
}
}
class d4 extends _T{
data(){
return super.data()}
}
function wT(t,e){
return typeof e=="string"?d0(t,e):e instanceof rc?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xT(t){
if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ne(W.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}
class h0{
}
class h4 extends h0{
}
function ur(t,e,...n){
let r=[];
e instanceof h0&&r.push(e),r=r.concat(n),function(s){
const o=s.filter(c=>c instanceof p0).length,l=s.filter(c=>c instanceof f0).length;
if(o>1||o>0&&l>0)throw new ne(W.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
(r);
for(const i of r)t=i._apply(t);
return t}
class f0 extends h4{
constructor(e,n,r){
super(),this._field=e,this._op=n,this._value=r,this.type="where"}
static _create(e,n,r){
return new f0(e,n,r)}
_apply(e){
const n=this._parse(e);
return bT(e._query,n),new Fs(e.firestore,e.converter,Xp(e._query,n))}
_parse(e){
const n=ic(e.firestore);
return function(s,o,l,c,u,d,m){
let g;
if(u.isKeyField()){
if(d==="array-contains"||d==="array-contains-any")throw new ne(W.INVALID_ARGUMENT,`Invalid Query. You can't perform '${
d}
' queries on documentId().`);
if(d==="in"||d==="not-in"){
D_(m,d);
const _=[];
for(const w of m)_.push(P_(c,s,w));
g={
arrayValue:{
values:_}
}
}
else g=P_(c,s,m)}
else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||D_(m,d),g=c4(l,o,m,d==="in"||d==="not-in");
return yt.create(u,d,g)}
(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}
}
class p0 extends h0{
constructor(e,n){
super(),this.type=e,this._queryConstraints=n}
static _create(e,n){
return new p0(e,n)}
_parse(e){
const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);
return n.length===1?n[0]:tr.create(n,this._getOperator())}
_apply(e){
const n=this._parse(e);
return n.getFilters().length===0?e:(function(i,s){
let o=i;
const l=s.getFlattenedFilters();
for(const c of l)bT(o,c),o=Xp(o,c)}
(e._query,n),new Fs(e.firestore,e.converter,Xp(e._query,n)))}
_getQueryConstraints(){
return this._queryConstraints}
_getOperator(){
return this.type==="and"?"and":"or"}
}
function P_(t,e,n){
if(typeof(n=xt(n))=="string"){
if(n==="")throw new ne(W.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");
if(!vE(e)&&n.indexOf("/")!==-1)throw new ne(W.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${
n}
' contains a '/' character.`);
const r=e.path.child(Ye.fromString(n));
if(!ce.isDocumentKey(r))throw new ne(W.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${
r}
' is not because it has an odd number of segments (${
r.length}
).`);
return Zv(t,new ce(r))}
if(n instanceof sn)return Zv(t,n._key);
throw new ne(W.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${
gh(n)}
.`)}
function D_(t,e){
if(!Array.isArray(t)||t.length===0)throw new ne(W.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${
e.toString()}
' filters.`)}
function bT(t,e){
const n=function(i,s){
for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;
return null}
(t.filters,function(i){
switch(i){
case"!=":return["!=","not-in"];
case"array-contains-any":case"in":return["not-in"];
case"not-in":return["array-contains-any","in","not-in","!="];
default:return[]}
}
(e.op));
if(n!==null)throw n===e.op?new ne(W.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${
e.op.toString()}
' filter.`):new ne(W.INVALID_ARGUMENT,`Invalid query. You cannot use '${
e.op.toString()}
' filters with '${
n.toString()}
' filters.`)}
class f4{
convertValue(e,n="none"){
switch(Os(e)){
case 0:return null;
case 1:return e.booleanValue;
case 2:return ct(e.integerValue||e.doubleValue);
case 3:return this.convertTimestamp(e.timestampValue);
case 4:return this.convertServerTimestamp(e,n);
case 5:return e.stringValue;
case 6:return this.convertBytes(Ds(e.bytesValue));
case 7:return this.convertReference(e.referenceValue);
case 8:return this.convertGeoPoint(e.geoPointValue);
case 9:return this.convertArray(e.arrayValue,n);
case 11:return this.convertObject(e.mapValue,n);
case 10:return this.convertVectorValue(e.mapValue);
default:throw ye()}
}
convertObject(e,n){
return this.convertObjectMap(e.fields,n)}
convertObjectMap(e,n="none"){
const r={
}
;
return Ls(e,(i,s)=>{
r[i]=this.convertValue(s,n)}
),r}
convertVectorValue(e){
var n,r,i;
const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>ct(o.doubleValue));
return new a0(s)}
convertGeoPoint(e){
return new o0(ct(e.latitude),ct(e.longitude))}
convertArray(e,n){
return(e.values||[]).map(r=>this.convertValue(r,n))}
convertServerTimestamp(e,n){
switch(n){
case"previous":const r=Fg(e);
return r==null?null:this.convertValue(r,n);
case"estimate":return this.convertTimestamp(Pl(e));
default:return null}
}
convertTimestamp(e){
const n=Gi(e);
return new wt(n.seconds,n.nanos)}
convertDocumentKey(e,n){
const r=Ye.fromString(e);
Ue(BE(r));
const i=new Dl(r.get(1),r.get(3)),s=new ce(r.popFirst(5));
return i.isEqual(n)||Kr(`Document ${
s}
 contains a document reference within a different database (${
i.projectId}
/${
i.database}
) which is not supported. It will be treated as a reference in the current database (${
n.projectId}
/${
n.database}
) instead.`),s}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m0(t,e,n){
let r;
return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{
constructor(e,n){
this.hasPendingWrites=e,this.fromCache=n}
isEqual(e){
return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}
}
class ET extends _T{
constructor(e,n,r,i,s,o){
super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}
exists(){
return super.exists()}
data(e={
}
){
if(this._document){
if(this._converter){
const n=new Vu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);
return this._converter.fromFirestore(n,e)}
return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}
}
get(e,n={
}
){
if(this._document){
const r=this._document.data.field(wT("DocumentSnapshot.get",e));
if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}
}
}
class Vu extends ET{
data(e={
}
){
return super.data(e)}
}
class TT{
constructor(e,n,r,i){
this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new $a(i.hasPendingWrites,i.fromCache),this.query=r}
get docs(){
const e=[];
return this.forEach(n=>e.push(n)),e}
get size(){
return this._snapshot.docs.size}
get empty(){
return this.size===0}
forEach(e,n){
this._snapshot.docs.forEach(r=>{
e.call(n,new Vu(this._firestore,this._userDataWriter,r.key,r,new $a(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}
)}
docChanges(e={
}
){
const n=!!e.includeMetadataChanges;
if(n&&this._snapshot.excludesMetadataChanges)throw new ne(W.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass {
 includeMetadataChanges:true }
 to onSnapshot().");
return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){
if(i._snapshot.oldDocs.isEmpty()){
let o=0;
return i._snapshot.docChanges.map(l=>{
const c=new Vu(i._firestore,i._userDataWriter,l.doc.key,l.doc,new $a(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);
return l.doc,{
type:"added",doc:c,oldIndex:-1,newIndex:o++}
}
)}
{
let o=i._snapshot.oldDocs;
return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{
const c=new Vu(i._firestore,i._userDataWriter,l.doc.key,l.doc,new $a(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);
let u=-1,d=-1;
return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{
type:p4(l.type),doc:c,oldIndex:u,newIndex:d}
}
)}
}
(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}
}
function p4(t){
switch(t){
case 0:return"added";
case 2:case 3:return"modified";
case 1:return"removed";
default:return ye()}
}
class g0 extends f4{
constructor(e){
super(),this.firestore=e}
convertBytes(e){
return new Ho(e)}
convertReference(e){
const n=this.convertDocumentKey(e,this.firestore._databaseId);
return new sn(this.firestore,null,n)}
}
function m4(t){
t=Tn(t,Fs);
const e=Tn(t.firestore,Yr),n=vh(e),r=new g0(e);
return xT(t._query),t4(n,t._query).then(i=>new TT(e,r,t,i))}
function Et(t,e,n){
t=Tn(t,sn);
const r=Tn(t.firestore,Yr),i=m0(t.converter,e,n);
return oc(r,[c0(ic(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,rn.none())])}
function eo(t,e,n,...r){
t=Tn(t,sn);
const i=Tn(t.firestore,Yr),s=ic(i);
let o;
return o=typeof(e=xt(e))=="string"||e instanceof rc?mT(s,"updateDoc",t._key,e,n,r):pT(s,"updateDoc",t._key,e),oc(i,[o.toMutation(t._key,rn.exists(!0))])}
function to(t){
return oc(Tn(t.firestore,Yr),[new dh(t._key,rn.none())])}
function gn(t,e){
const n=Tn(t.firestore,Yr),r=Me(t),i=m0(t.converter,e);
return oc(n,[c0(ic(t.firestore),"addDoc",r._key,i,t.converter!==null,{
}
).toMutation(r._key,rn.exists(!1))]).then(()=>r)}
function Nr(t,...e){
var n,r,i;
t=xt(t);
let s={
includeMetadataChanges:!1,source:"default"}
,o=0;
typeof e[o]!="object"||N_(e[o])||(s=e[o],o++);
const l={
includeMetadataChanges:s.includeMetadataChanges,source:s.source}
;
if(N_(e[o])){
const m=e[o];
e[o]=(n=m.next)===null||n===void 0?void 0:n.bind(m),e[o+1]=(r=m.error)===null||r===void 0?void 0:r.bind(m),e[o+2]=(i=m.complete)===null||i===void 0?void 0:i.bind(m)}
let c,u,d;
if(t instanceof sn)u=Tn(t.firestore,Yr),d=zg(t._key.path),c={
next:m=>{
e[o]&&e[o](g4(u,t,m))}
,error:e[o+1],complete:e[o+2]}
;
else{
const m=Tn(t,Fs);
u=Tn(m.firestore,Yr),d=m._query;
const g=new g0(u);
c={
next:_=>{
e[o]&&e[o](new TT(u,g,m,_))}
,error:e[o+1],complete:e[o+2]}
,xT(t._query)}
return function(g,_,w,N){
const O=new lT(N),I=new ZE(_,O,w);
return g.asyncQueue.enqueueAndForget(async()=>XE(await am(g),I)),()=>{
O.Za(),g.asyncQueue.enqueueAndForget(async()=>JE(await am(g),I))}
}
(vh(u),d,l,c)}
function oc(t,e){
return function(r,i){
const s=new ji;
return r.asyncQueue.enqueueAndForget(async()=>qL(await e4(r),i,s)),s.promise}
(vh(t),e)}
function g4(t,e,n){
const r=n.docs.get(e._key),i=new g0(t);
return new ET(t,i,e._key,r,new $a(n.hasPendingWrites,n.fromCache),e.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y4{
constructor(e,n){
this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=ic(e)}
set(e,n,r){
this._verifyNotCommitted();
const i=Vf(e,this._firestore),s=m0(i.converter,n,r),o=c0(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);
return this._mutations.push(o.toMutation(i._key,rn.none())),this}
update(e,n,r,...i){
this._verifyNotCommitted();
const s=Vf(e,this._firestore);
let o;
return o=typeof(n=xt(n))=="string"||n instanceof rc?mT(this._dataReader,"WriteBatch.update",s._key,n,r,i):pT(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,rn.exists(!0))),this}
delete(e){
this._verifyNotCommitted();
const n=Vf(e,this._firestore);
return this._mutations=this._mutations.concat(new dh(n._key,rn.none())),this}
commit(){
return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}
_verifyNotCommitted(){
if(this._committed)throw new ne(W.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}
}
function Vf(t,e){
if((t=xt(t)).firestore!==e)throw new ne(W.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");
return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v4(t){
return vh(t=Tn(t,Yr)),new y4(t,e=>oc(t,e))}
(function(e,n=!0){
(function(i){
na=i}
)(ea),Bo(new Rs("firestore",(r,{
instanceIdentifier:i,options:s}
)=>{
const o=r.getProvider("app").getImmediate(),l=new Yr(new EV(r.getProvider("auth-internal")),new AV(r.getProvider("app-check-internal")),function(u,d){
if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ne(W.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');
return new Dl(u.options.projectId,d)}
(o,i),o);
return s=Object.assign({
useFetchStreams:n}
,s),l._setSettings(s),l}
,"PUBLIC").setMultipleInstances(!0)),Mi(Kv,"4.7.3",e),Mi(Kv,"4.7.3","esm2017")}
)();
const _4={
apiKey:"AIzaSyAbv6a-69QnRa164Y-Yl36SooNO0hr8yJI",authDomain:"ranxpanx-team.firebaseapp.com",projectId:"ranxpanx-team",storageBucket:"ranxpanx-team.firebasestorage.app",messagingSenderId:"79021702639",appId:"1:79021702639:web:ff362c8e7eaa7bfa508a1a",measurementId:"G-91W8095CK6"}
,IT=vb(_4),O_=_V(IT),le=i4(IT),w4="ranxpanx-team-prod",fe=w4.replace(/\//g,"_"),V_={
timer:["El éxito es la suma de pequeños esfuerzos repetidos día tras día.","La disciplina es el puente entre tus metas y tus logros.","No cuentes los días, haz que los días cuenten.","Un viaje de mil millas comienza con un solo paso. Lao-Tse.","Lo que haces hoy puede mejorar todas tus mañanas.","La única forma de hacer un gran trabajo es amar lo que haces. Steve Jobs.","No busques el momento perfecto, solo busca el momento y hazlo perfecto.","El esfuerzo organizado es la llave que abre todas las puertas.","La constancia vence a lo que la dicha no alcanza.","La motivación nos impulsa a comenzar, el hábito nos permite continuar.","Pequeños actos de cuidado mantienen el hogar y el espíritu inquebrantables.","El progreso lento es infinitamente mejor que el estancamiento.","Incluso las tareas más tediosas brillan si el propósito es cuidar de los nuestros.","El mejor momento para plantar un árbol fue hace 20 años;
 el segundo mejor es ahora.","El trabajo que no se ve es el que sostiene las victorias que todo el mundo aplaude.","La verdadera libertad nace de dominar nuestros propios impulsos.","El coraje no siempre ruge. A veces es la voz tranquila que dice: 'mañana lo intentaré de nuevo'.","Convierte tus heridas en sabiduría y tus fracasos en gasolina.","Quien tiene por qué vivir puede soportar casi cualquier cómo.","Sé suave, no dejes que el mundo endurezca tu corazón amable.","Lo ordinario se vuelve extraordinario cuando se hace con amor incondicional.","La paciencia es amarga en la raíz, pero sus frutos son dulces.","Las cosas más valiosas de este mundo no son cosas, son momentos.","Todo aquello que vale la pena requiere tiempo, paciencia y fe recíproca.","Hazlo, y si te da miedo, hazlo con miedo. Pero no te detengas.","Si no dejas de intentarlo, tarde o temprano te despertarás habiendo ganado.","La sabiduría suprema radica en distinguir lo urgente de lo que es verdaderamente importante.","El éxito consiste en ir de fracaso en fracaso sin perder el entusiasmo."],calendar:["Un minuto de planificación ahorra diez de ejecución.","Si no sabes a qué puerto navegas, ningún viento es favorable.","La energía que pones en ordenar tu entorno se refleja ordenando tu mente.","No se trata de tener tiempo, se trata de hacer tiempo.","El orden es la primera ley del cielo y debería ser la primera del hogar.","Quien domina su agenda, domina su destino.","Dedica tiempo a afilar el hacha antes de ponerte a talar el bosque.","Tu tiempo es el recurso más valioso que tienes;
 regálalo solo a quien construya contigo.","Haz hoy algo de lo que tu 'yo' del mañana esté tremendamente orgulloso.","La clave no está en gastar el tiempo, sino en invertirlo."],groceries:["Cuida de los centavos y los euros se cuidarán solos.","El ahorrador no es aquel que guarda mucho, sino el que gasta con inteligencia.","Compra solamente lo necesario;
 lo superfluo, aunque cueste solo un céntimo, es caro.","La calidad recuerda su valor mucho tiempo después de haber olvidado su precio.","Ahorrar no es solo guardar dinero, es prevenir para construir un futuro mejor.","No ahorres lo que te sobra después de gastar;
 gasta lo que te sobra después de ahorrar.","Comprar con cabeza hoy es la tranquilidad de mañana.","La verdadera riqueza consiste en saber vivir bien con poco.","Elige calidad sobre cantidad, y durabilidad sobre inmediatez.","Un buen presupuesto es decirle a tu dinero a dónde ir en lugar de preguntarte a dónde fue."],rewards:["Celebra tus pequeñas victorias, te darán fuerza para las grandes batallas.","No hay atajo al éxito, pero todo logro merece ser festejado.","Disfrutar del camino es tan vital como alcanzar la meta.","Los logros más hermosos son aquellos que compartimos con los que amamos.","Date permiso para pausar y disfrutar del fruto de tu esfuerzo.","Un espíritu agradecido es el abono perfecto para la felicidad diaria.","Brilla tanto que deslumbres a los problemas y guíes a los que te rodean.","El mejor remedio contra el desánimo es el sonido de las risas compartidas en casa.","Reconocer el esfuerzo ajeno es el mayor premio que puedes otorgar.","A veces, el mayor logro del día es haber mantenido la sonrisa."],dashboard:["Cada pequeña tarea completada es una victoria para el equipo.","Trabajar en equipo divide la tarea y multiplica el éxito.","Hoy es un buen día para avanzar un paso más juntos.","La lealtad no se exige, se cultiva regándola con acciones diarias.","Un compañero de vida no es quien te mira, sino quien mira en tu misma dirección.","No existe desafío demasiado grande si los cimientos de la confianza son sólidos.","Ser fuerte no es nunca caer, es ayudarse mutuamente a levantarse una y otra vez.","Si la carga pesa demasiado, recuerda que somos dos para sostenerla.","Un hogar no son cuatro paredes, es el refugio que creamos cuando estamos juntos.","No se rinde quien sabe que detrás del esfuerzo está el bienestar de su tribu.","Un líder no es quien manda, es quien inspira a su equipo sirviendo primero.","Nadie se hizo grande mostrando cómo de pequeños son los demás.","Si quieres ir rápido, ve solo. Si quieres llegar lejos, ve acompañado.","El que hace el bien a los demás, a sí mismo se enriquece.","Una promesa rota es una herida en la confianza;
 una mantenida, es cemento armado.","Nuestras vidas son los ríos que van a dar a la familia, que es la mar.","Nada grande se ha conseguido jamás sin entusiasmo y sin equipo.","Tu mayor riqueza no está en la cuenta del banco, sino en quienes se sientan a tu mesa.","La empatía es tratar de sentir el frío del otro antes de exigirle que entre en calor.","Ser vulnerable con el otro es la mayor muestra de coraje cívico y amoroso.","Es en los momentos de fatiga extrema cuando se demuestra de qué estamos hechos.","Un equipo imbatible es aquel donde nadie teme decir: 'necesito ayuda'.","Cada minuto dedicado al equipo es una semilla que germinará en gratitud eterna.","Un pacto de lealtad absoluta es un muro irrompible contra la inclemencia de la vida.","Las cicatrices compartidas son los tatuajes de las victorias más difíciles de la dupla.","Sé el hombro en el que tu equipo confía cuando el mundo exterior aprieta demasiado."]}
,M_={
streak_global:["Un pequeño paso cada día construye el camino a la grandeza.","La constancia vence a la resistencia. Sigue ardiendo.","No es la fuerza, sino la perseverancia lo que hace al maestro.","El fuego más intenso comienza con una pequeña chispa cuidada a diario.","Tu dedicación incesante es el faro que ilumina tu hogar.","Cada día que mantienes la llama, forjas una voluntad de hierro.","La disciplina de hoy es la recompensa de mañana.","Roma no se construyó en un día, pero se ponían ladrillos cada hora.","La grandeza no es un acto, es un hábito inquebrantable.","Eres la prueba viva de que el esfuerzo continuado mueve montañas.","No midas el progreso por el tamaño del paso, sino por no detenerte.","Tu fuego inextinguible inspira a otros a encender su propia llama.","La motivación te hace empezar, el hábito te mantiene en marcha.","El río corta la roca no por su fuerza, sino por su persistencia.","Has convertido la rutina en una obra de arte deslumbrante.","Tus acciones diarias son los cimientos de una fortaleza inexpugnable.","La victoria pertenece al más perseverante.","Eres un huracán de energía que no conoce el reposo.","Las cadenas del hábito son demasiado ligeras hasta que son demasiado pesadas para romperlas.","Tu constancia global desafía los límites de lo posible."],streak_specific:["La maestría se encuentra en la repetición consciente.","Dominar una tarea es dominar una parte de ti mismo.","La especialización es el camino hacia la perfección impecable.","Cada vez que repites esta acción, te vuelves más fuerte e imparable.","La gota de agua horada la piedra por su caída constante.","Eres el artesano de tu propia disciplina. Puliendo los detalles.","La excelencia es hacer algo ordinario de manera extraordinariamente consistente.","La dedicación a un solo propósito es el secreto del éxito.","Has convertido una simple tarea en un ritual de poder.","Eres el guardián absoluto de este dominio.","La concentración en un único objetivo divide la resistencia.","La repetición constante es la madre del aprendizaje y la perfección.","Tu lealtad a esta tarea es digna de las más altas leyendas.","La brillantez no es un acto aislado, es la ejecución repetida de fundamentos.","No hay rival para quien domina un arte a través de la constancia.","La semilla regada cada día florece con el color más intenso.","Has domesticado el caos enfocado en una sola meta incansable.","El verdadero poder reside en dominar lo cotidiano.","Tú no haces esta tarea, tú ERES esta tarea.","Tu devoción específica ha moldeado el universo a tu favor."],streak_bounty:["Allí donde hay un desafío, tú ves una oportunidad brillante.","Los tesoros más grandes aguardan a los que tienen valor para buscarlos.","Tienes un ojo certero para cazar recompensas donde otros ven problemas.","Tu instinto de cazador de recompensas afila el progreso del equipo.","No hay botín que se escape a tu audacia incansable.","Eres el solucionador de problemas por excelencia. La élite del hogar.","Tu nombre es sinónimo de eficiencia y determinación implacable.","Las recompensas no se otorgan, se conquistan. Y tú eres el conquistador.","Donde otros dudan, tú atacas y te llevas la gloria y el botín.","El instinto de caza se ha despertado y no hay presa que se resista.","Los desafíos difíciles son solo el calentamiento para alguien de tu calibre.","Has vaciado la lista de Se Busca con una precisión letal.","Tu reputación como cazarrecompensas precede tus grandes logros.","La recompensa es grande, pero tu determinación es aún mayor.","Transformas las tareas olvidadas en relucientes trofeos de victoria.","No persigues el premio, devoras el esfuerzo hasta alcanzarlo.","Eres el lobo solitario que vuelve a la manada cargado de victorias.","Has dominado el arte de hacer que lo difícil parezca fácil y rentable.","Ninguna tarea permanece ignorada bajo tu vigilancia extrema.","El gremio de cazarrecompensas corea tu nombre como una leyenda."],streak_frenzy:["Cuando entras en la zona, el caos se ordena a tu voluntad.","Tu energía desbordante arrasa con la apatía y construye imperios.","Eres una tormenta de productividad imposible de detener.","El Modo Frenesí no es un estado, es tu firma personal en el campo de batalla.","Velocidad, precisión y determinación. Eres una máquina perfecta.","Has provocado una avalancha de resultados que deja a todos sin aliento.","El reloj no te controla, tú controlas el tiempo comprimiéndolo a tu favor.","La inercia de tus logros empuja al resto del equipo hacia adelante.","Eres la definición misma de fluir en un estado de concentración absoluta.","Tus picos de energía son dignos de estudio. Eres imparable.","Donde había tareas, ahora solo queda el eco de tu velocidad ultrasónica.","Activaste el turbo y el hogar entero respira tu aire revitalizado.","Eres como un rayo: rápido, deslumbrante y cargado de poder puro.","El frenesí es tu hábitat natural, donde devoras el tiempo.","Tu ráfaga de actividad limpia, ordena y purifica el ambiente.","Cuando aceleras, el mundo a tu alrededor parece ir a cámara lenta.","Has trascendido el límite de la velocidad humana ordinaria.","Eres un torbellino de eficiencia que no deja prisioneros.","El fuego del frenesí corre por tus venas alimentando esta avalancha.","Tu capacidad de trabajo intenso es el arma definitiva para cualquier desafío."],p2p_gifts:["La generosidad es la única inversión que nunca quiebra.","Tu corazón noble enriquece tanto a quien recibe como a quien da.","Compartir el éxito es la verdadera definición de alma caritativa.","Tus regalos no son solo números, son gestos profundos de aprecio.","La alegría que repartes se multiplica y vuelve a ti con mayor fuerza.","Eres el pilar emocional que sustenta la confianza del equipo.","Dar sin recordar, recibir sin olvidar. Ese es tu lema implícito.","Tus manos abiertas son el símbolo de una abundancia infinita.","Cada regalo es un puente de unión indestructible hacia los tuyos.","La solidaridad que muestras ilumina hasta los días más grises.","No hay mayor poder que el de elevar a los demás contigo.","Tu desapego material demuestra la enorme riqueza de tu espíritu.","Eres la chispa de bondad que enciende cadenas de favores infinitas.","El eco de tu generosidad resuena en las sonrisas de tu familia.","Dar es respirar para tu alma caritativa que no conoce el egoísmo.","El valor de tu regalo palidece ante el valor de tu intención pura.","Has instaurado la ley del amor y la entrega como norma inquebrantiable.","Las verdaderas riquezas se miden por lo mucho que damos a quienes nos rodean.","Tu caridad ha creado una red de seguridad emocional inestimable.","Eres la leyenda viviente de que existe esperanza brillante en el corazón humano."],total_hours:["El tiempo invertido en mejorar es tiempo robado a la mortalidad.","Tus horas son ladrillos dorados en la construcción de este templo familiar.","Las grandes obras requieren paciencia, tiempo y un esfuerzo como el tuyo.","Cada hora sumada es un testimonio irrefutable de tu legendario compromiso.","El sudor de tus horas ha cristalizado en una medalla de puro orgullo.","Una leyenda no nace de la suerte, se fabrica hora tras hora en la sombra.","Has sacrificado tu tiempo, el bien más preciado, por el bienestar común.","El valor de tus horas trasciende las agujas frías del simple reloj.","Eres un coloso sosteniendo el cielo del hogar con tus propios hombros.","Las horas pasan, pero el impacto de tu dedicación resonará para siempre.","Tu resistencia es digna de los relatos épicos más grandiosos de la historia.","Cada tic-tac te acerca más al trono de la maestría absoluta.","Diez mil horas hacen al maestro, y tú avanzas a pasos de gigante.","Tu esfuerzo silente y continuo habla con más fuerza que cualquier discurso.","Has entregado fragmentos invaluables de tu vida para embellecer la de los demás.","El respeto del equipo hacia ti se acumula con cada segundo que regalas.","Eres el ancla que da firmeza y seguridad al barco en medio de la tormenta.","Tu contribución es una obra de arte pintada con los hilos invisibles del tiempo.","La eternidad recordará la dedicación silenciosa de un héroe como tú.","Alcanzar el estatus de Leyenda no es el final, es tu consagración eterna."]}
,Mf=[{
icon:Zx,color:"text-blue-500",bg:"bg-blue-500/10"}
,{
icon:uA,color:"text-orange-500",bg:"bg-orange-500/10"}
,{
icon:iA,color:"text-purple-500",bg:"bg-purple-500/10"}
,{
icon:rA,color:"text-red-500",bg:"bg-red-500/10"}
,{
icon:oA,color:"text-emerald-500",bg:"bg-emerald-500/10"}
,{
icon:kp,color:"text-pink-500",bg:"bg-pink-500/10"}
],L_=t=>{
if(!t)return Mf[0];
let e=0;
for(let n=0;
n<t.length;
n++)e=t.charCodeAt(n)+((e<<5)-e);
return Mf[Math.abs(e)%Mf.length]}
,ln=[{
id:"indigo",css:"text-indigo-500",bg:"bg-indigo-500",ring:"ring-indigo-500"}
,{
id:"rose",css:"text-rose-500",bg:"bg-rose-500",ring:"ring-rose-500"}
,{
id:"emerald",css:"text-emerald-500",bg:"bg-emerald-500",ring:"ring-emerald-500"}
,{
id:"amber",css:"text-amber-500",bg:"bg-amber-500",ring:"ring-amber-500"}
,{
id:"cyan",css:"text-cyan-500",bg:"bg-cyan-500",ring:"ring-cyan-500"}
],hu=t=>{
const e=Math.floor(t/3600),n=Math.floor(t%3600/60);
return e>0?`${
e}
h ${
n}
m`:`${
n}
m`}
,fu=t=>{
const e=Math.floor(t/3600),n=Math.floor(t%3600/60),r=t%60;
return e>0?`${
e}
h ${
n}
m ${
r}
s`:`${
n}
m ${
r}
s`}
,ST=t=>{
const e=Math.floor(t/3600).toString().padStart(2,"0"),n=Math.floor(t%3600/60).toString().padStart(2,"0"),r=(t%60).toString().padStart(2,"0");
return`${
e}
:${
n}
:${
r}
`}
,dr=(t=new Date)=>{
const e=t.getTimezoneOffset()*6e4;
return new Date(t.getTime()-e).toISOString().split("T")[0]}
,x4=({
liveTask:t}
)=>{
const[e,n]=B.useState(Date.now());
B.useEffect(()=>{
if(t.isPaused)return;
const i=setInterval(()=>n(Date.now()),1e3);
return()=>clearInterval(i)}
,[t.isPaused]);
const r=t.accumulatedTime+Math.floor((e-t.startTime)/1e3);
return p.jsx(p.Fragment,{
children:ST(r)}
)}
;
function b4(){
var Qs,Ke,Nc;
const[t,e]=B.useState(null),[n,r]=B.useState([]),[i,s]=B.useState([]),[o,l]=B.useState([]),[c,u]=B.useState("timer"),[d,m]=B.useState(()=>localStorage.getItem("hometeam_dark")==="true"),[g,_]=B.useState(navigator.onLine),[w,N]=B.useState(()=>localStorage.getItem("hometeam_username")||""),[O,I]=B.useState(()=>localStorage.getItem("hometeam_usercolor")||"indigo"),[E,k]=B.useState(!localStorage.getItem("hometeam_username")),[M,G]=B.useState(()=>{
try{
const h=localStorage.getItem("hometeam_activetask");
return h?JSON.parse(h):null}
catch{
return null}
}
),[q,S]=B.useState(0),[b,A]=B.useState(()=>{
try{
const h=localStorage.getItem("hometeam_activetask");
return h&&JSON.parse(h).name||""}
catch{
return""}
}
),[C,V]=B.useState(!1);
B.useEffect(()=>{
M?localStorage.setItem("hometeam_activetask",JSON.stringify(M)):localStorage.removeItem("hometeam_activetask")}
,[M]),B.useEffect(()=>{
if(!C&&w&&Object.keys(Ce).length>0&&(V(!0),Ce[w])){
const h=Ce[w].activeTimer,y=localStorage.getItem("hometeam_activetask");
h&&(!y||y==="null")&&(G(h),A(h.name||""))}
}
,[w,Ce,C]);
const[L,R]=B.useState(""),[We,lt]=B.useState(""),[nr,Ft]=B.useState(!1),[J,ae]=B.useState(null),[ue,Le]=B.useState(null),[pe,Ee]=B.useState({
name:"",hours:0,minutes:0,date:dr()}
),[kt,Bt]=B.useState({
msg:"",visible:!1,type:"success"}
),[ht,Ut]=B.useState(null),[xr,Zr]=B.useState("day"),[et,ei]=B.useState(new Date),[Fe,Un]=B.useState(new Date),[rr,Bs]=B.useState(null),[Ce,ac]=B.useState({
}
),[$n,lc]=B.useState([]),[Xi,sa]=B.useState([]),[oa,wh]=B.useState([]),[ti,Ji]=B.useState("store"),[aa,ft]=B.useState(!1),[$e,br]=B.useState({
name:"",cost:10,icon:"🎁"}
),[cc,la]=B.useState(!1),[ze,$t]=B.useState(null),[Zi,uc]=B.useState([]),[es,xh]=B.useState([]),[ir,ca]=B.useState(null),[dc,ni]=B.useState(!1),[ri,sr]=B.useState(null),[ii,Cn]=B.useState(""),[si,ts]=B.useState(""),[kn,Er]=B.useState(null),[Us,bt]=B.useState(""),[ua,oi]=B.useState(""),[ai,hc]=B.useState(""),[pt,or]=B.useState(null);
B.useState("");
const[De,da]=B.useState(null);
B.useEffect(()=>{
const h=()=>_(!0),y=()=>_(!1);
return window.addEventListener("online",h),window.addEventListener("offline",y),()=>{
window.removeEventListener("online",h),window.removeEventListener("offline",y)}
}
,[]),B.useEffect(()=>{
(async()=>{
try{
await nO(O_)}
catch(T){
console.error("Auth error:",T)}
}
)();
const y=lO(O_,e);
return()=>y()}
,[]),B.useEffect(()=>{
if(!t)return;
const h=nt(le,"artifacts",fe,"public","data","chores"),y=Nr(ur(h),ke=>{
const Ve=ke.docs.map(Q=>({
id:Q.id,...Q.data()}
));
Ve.sort((Q,we)=>we.timestamp-Q.timestamp),r(Ve)}
,ke=>console.error("Firestore chores error:",ke)),T=nt(le,"artifacts",fe,"public","data","groceries"),P=Nr(ur(T),ke=>{
const Ve=ke.docs.map(Q=>({
id:Q.id,...Q.data()}
));
Ve.sort((Q,we)=>Q.order!==void 0&&we.order!==void 0?Q.order-we.order:Q.timestamp-we.timestamp),s(Ve)}
,ke=>console.error("Firestore groceries error:",ke)),D=nt(le,"artifacts",fe,"public","data","supermarkets"),j=Nr(ur(D),ke=>{
const Ve=ke.docs.map(Q=>({
id:Q.id,...Q.data()}
));
Ve.sort((Q,we)=>Q.order!==void 0&&we.order!==void 0?Q.order-we.order:Q.name.localeCompare(we.name)),l(Ve)}
,ke=>console.error("Firestore supermarkets error:",ke)),z=nt(le,"artifacts",fe,"public","data","users"),U=Nr(ur(z),ke=>{
const Ve={
}
;
ke.docs.forEach(Q=>{
Ve[Q.id]=Q.data()}
),ac(Ve)}
,ke=>console.error("Firestore users error:",ke)),H=nt(le,"artifacts",fe,"public","data","store_items"),ee=Nr(ur(H),ke=>{
const Ve=ke.docs.map(Q=>({
id:Q.id,...Q.data()}
));
Ve.sort((Q,we)=>(Q.costRPC||0)-(we.costRPC||0)||we.timestamp-Q.timestamp),lc(Ve)}
),ie=nt(le,"artifacts",fe,"public","data","coupons"),de=Nr(ur(ie),ke=>{
const Ve=ke.docs.map(Q=>({
id:Q.id,...Q.data()}
));
Ve.sort((Q,we)=>we.timestamp-Q.timestamp),sa(Ve)}
),he=nt(le,"artifacts",fe,"public","data","moments"),oe=Nr(ur(he),ke=>{
const Ve=ke.docs.map(Q=>({
id:Q.id,...Q.data()}
));
Ve.sort((Q,we)=>(we.timestamp||we.redeemedAt||0)-(Q.timestamp||Q.redeemedAt||0)),wh(Ve)}
),Oe=nt(le,"artifacts",fe,"public","data","p2p_notifications"),as=Nr(ur(Oe),ke=>{
const Ve=ke.docs.map(Q=>({
id:Q.id,...Q.data()}
));
xh(Ve)}
),ls=nt(le,"artifacts",fe,"public","data","wagers"),kr=Nr(ur(ls),ke=>{
const Ve=ke.docs.map(Q=>({
id:Q.id,...Q.data()}
));
Ve.sort((Q,we)=>we.created_at-Q.created_at),uc(Ve)}
);
return()=>{
y(),P(),j(),U(),ee(),de(),oe(),as(),kr()}
}
,[t]),B.useEffect(()=>{
if(w&&es.length>0){
const h=es.filter(y=>y.to===w&&!y.read&&y.type==="transfer");
console.log("p2pNotifications check",{
userName:w,unreadCount:h.length,activeGiftModal:kn}
),h.length>0&&!kn&&(console.log("Setting activeGiftModal to:",h[0]),Er(h[0]))}
}
,[w,es,kn]),B.useEffect(()=>{
localStorage.setItem("hometeam_dark",d),d?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}
,[d]),B.useEffect(()=>{
let h=null;
return M&&!M.isPaused?h=setInterval(()=>{
S(M.accumulatedTime+Math.floor((Date.now()-M.startTime)/1e3))}
,1e3):M&&M.isPaused?S(M.accumulatedTime):S(0),()=>clearInterval(h)}
,[M]);
const Tr=B.useMemo(()=>{
const y=n.filter(T=>!T.isGift).map(T=>T.taskName);
return[...new Set(y)].slice(0,6)}
,[n]);
B.useMemo(()=>{
const h=i.map(y=>y.name);
return[...new Set(h)].slice(0,6)}
,[i]);
const ha=B.useMemo(()=>{
if(!b||M)return[];
const h=b.toLowerCase().trim();
if(!h)return[];
const y=n.filter(D=>!D.isGift);
return[...new Set(y.map(D=>D.taskName))].filter(D=>D.toLowerCase().includes(h)&&D.toLowerCase()!==h).slice(0,5)}
,[b,M,n]),$s=B.useMemo(()=>{
const h=n.filter(T=>!T.isGift);
return[...new Set(h.map(T=>T.taskName))].map(T=>h.filter(D=>D.taskName===T).sort((D,j)=>j.timestamp-D.timestamp)[0]).filter(T=>T&&T.timestamp<Date.now()-6e4).map(T=>{
const P=(Date.now()-T.timestamp)/864e5;
return{
name:T.taskName,multiplier:Math.pow(1.1,P)}
}
).filter(T=>T.multiplier>=1.01).sort((T,P)=>P.multiplier-T.multiplier).slice(0,3)}
,[n]),Ir=B.useMemo(()=>{
const h=dr();
return n.filter(y=>y.userName===w&&y.dateString===h).reduce((y,T)=>y+T.durationSeconds,0)}
,[n,w]),zn=Math.min(Ir/3600*100,100),qn=Ir>=3600,fc=B.useMemo(()=>{
var Ve;
if(!w||!n.length)return[];
const h=((Ve=Ce[w])==null?void 0:Ve.achievements)||{
}
,T=[...n.filter(Q=>Q.userName===w&&!Q.isGift)].sort((Q,we)=>Q.timestamp-we.timestamp),P=Q=>{
let we=0,tt=new Date;
const Rr=`${
tt.getFullYear()}
-${
String(tt.getMonth()+1).padStart(2,"0")}
-${
String(tt.getDate()).padStart(2,"0")}
`;
tt.setDate(tt.getDate()-1);
const li=`${
tt.getFullYear()}
-${
String(tt.getMonth()+1).padStart(2,"0")}
-${
String(tt.getDate()).padStart(2,"0")}
`;
tt.setDate(tt.getDate()-1);
const ba=`${
tt.getFullYear()}
-${
String(tt.getMonth()+1).padStart(2,"0")}
-${
String(tt.getDate()).padStart(2,"0")}
`;
let Je=new Date,ci=!1;
if(!Q[Rr]&&!Q[li]&&(Je.setDate(Je.getDate()-1),!Q[li]))if(Q[ba])ci=!0,Je.setDate(Je.getDate()-1);
else return{
streak:0,isAlert:!1}
;
if(Q[Rr])ci=!1;
else if(Q[li])ci=!1,Je.setDate(Je.getDate()-1);
else if(Q[ba])ci=!0,Je.setDate(Je.getDate()-2);
else return{
streak:0,isAlert:!1}
;
for(;
;
){
const Pc=`${
Je.getFullYear()}
-${
String(Je.getMonth()+1).padStart(2,"0")}
-${
String(Je.getDate()).padStart(2,"0")}
`;
if(Q[Pc])we++,Je.setDate(Je.getDate()-1);
else{
let ui=new Date(Je);
ui.setDate(ui.getDate()-1);
const Dc=`${
ui.getFullYear()}
-${
String(ui.getMonth()+1).padStart(2,"0")}
-${
String(ui.getDate()).padStart(2,"0")}
`;
if(Q[Dc])Je.setDate(Je.getDate()-2);
else break}
}
return{
streak:we,isAlert:ci}
}
,D={
}
;
T.forEach(Q=>{
D[Q.dateString]=!0}
);
const j=P(D);
let z={
streak:0,isAlert:!1}
;
const U={
}
;
T.forEach(Q=>{
U[Q.taskName]||(U[Q.taskName]={
}
),U[Q.taskName][Q.dateString]=!0}
);
for(const Q in U){
const we=P(U[Q]);
we.streak>z.streak&&(z=we)}
const H={
}
;
T.forEach(Q=>{
const we=Q.durationSeconds>0?Q.rpcEarned/(Q.durationSeconds/900):0;
(we>=1.05&&we<=1.95||we>=2.05)&&(H[Q.dateString]=!0)}
);
const ee=P(H),ie={
}
;
T.forEach(Q=>{
ie[Q.dateString]=(ie[Q.dateString]||0)+Q.durationSeconds}
);
const de={
}
;
for(const Q in ie)ie[Q]>=3600&&(de[Q]=!0);
const he=P(de),oe=n.filter(Q=>Q.isGift&&Q.sender===w),Oe=new Set;
oe.forEach(Q=>{
const we=new Date(Q.timestamp),tt=new Date(Date.UTC(we.getFullYear(),we.getMonth(),we.getDate()));
tt.setUTCDate(tt.getUTCDate()+4-(tt.getUTCDay()||7));
const Rr=new Date(Date.UTC(tt.getUTCFullYear(),0,1)),li=Math.ceil(((tt-Rr)/864e5+1)/7);
Oe.add(`${
tt.getUTCFullYear()}
-W${
li}
`)}
);
const as=Oe.size,ls=T.reduce((Q,we)=>Q+we.durationSeconds,0)/3600,kr=Math.floor(ls/10),ke=Q=>Math.min(.1*Q,1);
return[{
id:"streak_global",title:"Fuego Inextinguible",icon:"Flame",desc:"Días consecutivos completando al menos 1 tarea.",color:"text-orange-500",shadow:"shadow-orange-500",bg:"bg-orange-100",darkBg:"dark:bg-orange-900/30",border:"border-orange-500",actual:j.streak,isAlert:j.isAlert,claimedAt:h.streak_global||0,reward:ke(j.streak)}
,{
id:"streak_specific",title:"Constancia",icon:"Target",desc:"Días consecutivos completando exactamente la misma tarea.",color:"text-emerald-500",shadow:"shadow-emerald-500",bg:"bg-emerald-100",darkBg:"dark:bg-emerald-900/30",border:"border-emerald-500",actual:z.streak,isAlert:z.isAlert,claimedAt:h.streak_specific||0,reward:ke(z.streak)}
,{
id:"streak_bounty",title:"Cazarrecompensas",icon:"Crosshair",desc:'Días consecutivos completando tareas que estaban "En busca y captura".',color:"text-rose-500",shadow:"shadow-rose-500",bg:"bg-rose-100",darkBg:"dark:bg-rose-900/30",border:"border-rose-500",actual:ee.streak,isAlert:ee.isAlert,claimedAt:h.streak_bounty||0,reward:ke(ee.streak)}
,{
id:"streak_frenzy",title:"Avalancha Doméstica",icon:"Zap",desc:'Días consecutivos activando el "Modo Frenesí" (+60 mins/día).',color:"text-yellow-500",shadow:"shadow-yellow-500",bg:"bg-yellow-100",darkBg:"dark:bg-yellow-900/30",border:"border-yellow-500",actual:he.streak,isAlert:he.isAlert,claimedAt:h.streak_frenzy||0,reward:ke(he.streak)}
,{
id:"p2p_gifts",title:"Alma Caritativa",icon:"HeartHandshake",desc:"Semanas distintas en las que has enviado al menos un regalo de RPC.",color:"text-pink-500",shadow:"shadow-pink-500",bg:"bg-pink-100",darkBg:"dark:bg-pink-900/30",border:"border-pink-500",actual:as,isAlert:!1,claimedAt:h.p2p_gifts||0,reward:2}
,{
id:"total_hours",title:"Leyenda del Hogar",icon:"Award",desc:"Cada 10 horas totales invertidas en hacer de tu hogar un lugar mejor.",color:"text-indigo-500",shadow:"shadow-indigo-500",bg:"bg-indigo-100",darkBg:"dark:bg-indigo-900/30",border:"border-indigo-500",actual:kr,rawTotalHours:ls,isAlert:!1,claimedAt:h.total_hours||0,reward:10}
]}
,[n,w,Ce]),me=(h,y="success")=>{
Bt({
msg:h,type:y,visible:!0}
),setTimeout(()=>Bt({
msg:"",type:"success",visible:!1}
),3e3)}
,fa=async()=>{
if(!w){
k(!0);
return}
let h=null;
M?M.isPaused?(h={
...M,startTime:Date.now(),isPaused:!1}
,G(h),mc()):(h={
...M,accumulatedTime:q,isPaused:!0}
,G(h),zs()):(h={
name:b,startTime:Date.now(),accumulatedTime:0,isPaused:!1}
,G(h),mc());
try{
h&&await Et(Me(le,"artifacts",fe,"public","data","users",w),{
activeTimer:h}
,{
merge:!0}
)}
catch(y){
console.error("Error sincronizando temporizador activo",y)}
}
,pc=async h=>{
if(h<60)return;
const y=(await Js(()=>import("./confetti.module-cdab46f6.js"),[])).default,T=h/60;
if(T>=600){
const D=Date.now()+15e3,j={
startVelocity:30,spread:360,ticks:60,zIndex:0}
,z=(H,ee)=>Math.random()*(ee-H)+H,U=setInterval(function(){
const H=D-Date.now();
if(H<=0)return clearInterval(U);
const ee=50*(H/15e3);
y(Object.assign({
}
,j,{
particleCount:ee,origin:{
x:z(.1,.3),y:Math.random()-.2}
}
)),y(Object.assign({
}
,j,{
particleCount:ee,origin:{
x:z(.7,.9),y:Math.random()-.2}
}
))}
,250)}
else T>60?y({
particleCount:Math.min(600,100+Math.floor(T*2)),spread:120,startVelocity:45,origin:{
y:.8}
,colors:["#fffc00","#ff008d","#00e5ff","#ff5100","#56ff00"]}
):T>10?y({
particleCount:150+Math.floor(T),spread:90,origin:{
y:.7}
,colors:["#6366f1","#10b981","#f59e0b","#ec4899","#3b82f6"]}
):y({
particleCount:50+Math.floor(T*5),spread:60,origin:{
y:.6}
}
)}
,pa=()=>{
try{
const h=new Audio("https://cdn.freesound.org/previews/332/332629_5065845-lq.mp3");
h.volume=.5,h.play().catch(y=>console.log("Audio play error:",y))}
catch{
}
}
,mc=()=>{
try{
if(localStorage.getItem("hometeam_mute_sounds")==="true")return;
const h=window.AudioContext||window.webkitAudioContext;
if(!h)return;
const y=new h,T=y.createOscillator(),P=y.createGain();
T.type="sine",T.frequency.setValueAtTime(440,y.currentTime),T.frequency.exponentialRampToValueAtTime(880,y.currentTime+.1),P.gain.setValueAtTime(0,y.currentTime),P.gain.linearRampToValueAtTime(.3,y.currentTime+.02),P.gain.exponentialRampToValueAtTime(.01,y.currentTime+.2),T.connect(P),P.connect(y.destination),T.start(),T.stop(y.currentTime+.2)}
catch{
}
}
,zs=()=>{
try{
if(localStorage.getItem("hometeam_mute_sounds")==="true")return;
const h=window.AudioContext||window.webkitAudioContext;
if(!h)return;
const y=new h,T=y.createOscillator(),P=y.createGain();
T.type="triangle",T.frequency.setValueAtTime(440,y.currentTime),T.frequency.exponentialRampToValueAtTime(110,y.currentTime+.15),P.gain.setValueAtTime(0,y.currentTime),P.gain.linearRampToValueAtTime(.2,y.currentTime+.02),P.gain.exponentialRampToValueAtTime(.01,y.currentTime+.15),T.connect(P),P.connect(y.destination),T.start(),T.stop(y.currentTime+.15)}
catch{
}
}
,gc=()=>{
try{
if(localStorage.getItem("hometeam_mute_sounds")==="true")return;
const h=window.AudioContext||window.webkitAudioContext;
if(!h)return;
const y=new h,T=(P,D,j,z)=>{
const U=y.createOscillator(),H=y.createGain();
U.type="sine",U.frequency.setValueAtTime(P,y.currentTime+D),H.gain.setValueAtTime(0,y.currentTime+D),H.gain.linearRampToValueAtTime(z,y.currentTime+D+.02),H.gain.exponentialRampToValueAtTime(.01,y.currentTime+D+j),U.connect(H),H.connect(y.destination),U.start(y.currentTime+D),U.stop(y.currentTime+D+j)}
;
T(523.25,0,.15,.15),T(659.25,.1,.15,.15),T(783.99,.2,.15,.15),T(1046.5,.3,.4,.25)}
catch{
}
}
,ma=()=>{
try{
if(localStorage.getItem("hometeam_mute_sounds")==="true")return;
const h=window.AudioContext||window.webkitAudioContext;
if(!h)return;
const y=new h;
y.state==="suspended"&&y.resume();
const T=y.currentTime,P=[1046.5,1174.66,1318.51,1567.98,1760,2093,2349.32];
for(let D=0;
D<3;
D++){
const j=y.createOscillator(),z=y.createGain(),U=P[Math.floor(Math.random()*P.length)];
j.type="sine",j.frequency.setValueAtTime(U,T+D*.03),z.gain.setValueAtTime(0,T+D*.03),z.gain.linearRampToValueAtTime(.15,T+D*.03+.01),z.gain.exponentialRampToValueAtTime(.001,T+D*.03+.2),j.connect(z),z.connect(y.destination),j.start(T+D*.03),j.stop(T+D*.03+.25)}
}
catch{
}
}
,ns=()=>{
try{
if(localStorage.getItem("hometeam_mute_sounds")==="true")return;
const h=window.AudioContext||window.webkitAudioContext;
if(!h)return;
const y=new h,T=y.sampleRate*.15,P=y.createBuffer(1,T,y.sampleRate),D=P.getChannelData(0);
for(let H=0;
H<T;
H++)D[H]=Math.random()*2-1;
const j=y.createBufferSource();
j.buffer=P;
const z=y.createBiquadFilter();
z.type="lowpass",z.frequency.setValueAtTime(800,y.currentTime),z.frequency.exponentialRampToValueAtTime(100,y.currentTime+.15);
const U=y.createGain();
U.gain.setValueAtTime(0,y.currentTime),U.gain.linearRampToValueAtTime(.2,y.currentTime+.01),U.gain.exponentialRampToValueAtTime(.01,y.currentTime+.15),j.connect(z),z.connect(U),U.connect(y.destination),j.start()}
catch{
}
}
,Sr=()=>{
try{
if(localStorage.getItem("hometeam_mute_sounds")==="true")return;
const h=window.AudioContext||window.webkitAudioContext;
if(!h)return;
const y=new h,T=1.5,P=y.createOscillator(),D=y.createGain();
P.type="sine",P.frequency.setValueAtTime(150,y.currentTime),P.frequency.exponentialRampToValueAtTime(600,y.currentTime+T-.2),D.gain.setValueAtTime(0,y.currentTime),D.gain.linearRampToValueAtTime(.4,y.currentTime+.5),D.gain.exponentialRampToValueAtTime(.01,y.currentTime+T),P.connect(D),D.connect(y.destination);
const j=y.createOscillator(),z=y.createGain();
j.type="triangle",j.frequency.setValueAtTime(800,y.currentTime+T-.3),j.frequency.linearRampToValueAtTime(1600,y.currentTime+T),z.gain.setValueAtTime(0,y.currentTime+T-.3),z.gain.linearRampToValueAtTime(.3,y.currentTime+T-.1),z.gain.exponentialRampToValueAtTime(.01,y.currentTime+T+.5);
const U=y.createDelay();
U.delayTime.value=.2;
const H=y.createGain();
H.gain.value=.3,U.connect(H),H.connect(U),j.connect(z),z.connect(y.destination),z.connect(U),U.connect(y.destination),P.start(),P.stop(y.currentTime+T),j.start(y.currentTime+T-.3),j.stop(y.currentTime+T+.5)}
catch{
}
}
,ga=()=>{
try{
if(localStorage.getItem("hometeam_mute_sounds")==="true")return;
const h=window.AudioContext||window.webkitAudioContext;
if(!h)return;
const y=new h,T=y.sampleRate*.2,P=y.createBuffer(1,T,y.sampleRate),D=P.getChannelData(0);
for(let he=0;
he<T;
he++)D[he]=Math.random()*2-1;
const j=y.createBufferSource();
j.buffer=P;
const z=y.createBiquadFilter();
z.type="highpass",z.frequency.setValueAtTime(500,y.currentTime),z.frequency.exponentialRampToValueAtTime(5e3,y.currentTime+.1);
const U=y.createGain();
U.gain.setValueAtTime(0,y.currentTime),U.gain.linearRampToValueAtTime(.5,y.currentTime+.05),U.gain.exponentialRampToValueAtTime(.01,y.currentTime+.2),j.connect(z),z.connect(U),U.connect(y.destination),j.start();
const H=y.createOscillator(),ee=y.createGain();
H.type="triangle",H.frequency.setValueAtTime(1200,y.currentTime+.05),H.frequency.exponentialRampToValueAtTime(2400,y.currentTime+.15),ee.gain.setValueAtTime(0,y.currentTime+.05),ee.gain.linearRampToValueAtTime(.3,y.currentTime+.08),ee.gain.exponentialRampToValueAtTime(.01,y.currentTime+.3);
const ie=y.createDelay();
ie.delayTime.value=.1;
const de=y.createGain();
de.gain.value=.25,ie.connect(de),de.connect(ie),H.connect(ee),ee.connect(y.destination),ee.connect(ie),ie.connect(y.destination),H.start(y.currentTime+.05),H.stop(y.currentTime+.4)}
catch{
}
}
,bh=()=>{
try{
if(localStorage.getItem("hometeam_mute_sounds")==="true")return;
const h=window.AudioContext||window.webkitAudioContext;
if(!h)return;
const y=new h,T=y.createDelay();
T.delayTime.value=.4;
const P=y.createGain();
P.gain.value=.3,T.connect(P),P.connect(T);
const D=y.createOscillator(),j=y.createGain();
D.type="sine",D.frequency.setValueAtTime(130.81*2,y.currentTime),j.gain.setValueAtTime(0,y.currentTime),j.gain.linearRampToValueAtTime(.3,y.currentTime+.4),j.gain.setValueAtTime(.3,y.currentTime+1),j.gain.exponentialRampToValueAtTime(.01,y.currentTime+2),D.connect(j),j.connect(y.destination);
const z=y.createOscillator(),U=y.createGain();
z.type="triangle",z.frequency.setValueAtTime(392*2,y.currentTime+.2),U.gain.setValueAtTime(0,y.currentTime+.2),U.gain.linearRampToValueAtTime(.1,y.currentTime+.4),U.gain.exponentialRampToValueAtTime(.01,y.currentTime+1.8),z.connect(U),U.connect(y.destination),U.connect(T),T.connect(y.destination),D.start(y.currentTime),D.stop(y.currentTime+2),D.start(y.currentTime),D.stop(y.currentTime+2),z.start(y.currentTime+.2),z.stop(y.currentTime+1.8)}
catch{
}
}
,yc=()=>{
try{
if(localStorage.getItem("hometeam_mute_sounds")==="true")return;
const h=window.AudioContext||window.webkitAudioContext;
if(!h)return;
const y=new h,T=y.createDelay();
T.delayTime.value=.15;
const P=y.createGain();
P.gain.value=.25,T.connect(P),P.connect(T);
const D=U=>{
const H=y.sampleRate*.05,ee=y.createBuffer(1,H,y.sampleRate),ie=ee.getChannelData(0);
for(let Oe=0;
Oe<H;
Oe++)ie[Oe]=Math.random()*2-1;
const de=y.createBufferSource();
de.buffer=ee;
const he=y.createBiquadFilter();
he.type="highpass",he.frequency.setValueAtTime(3e3,y.currentTime+U),he.frequency.exponentialRampToValueAtTime(8e3,y.currentTime+U+.05);
const oe=y.createGain();
oe.gain.setValueAtTime(0,y.currentTime+U),oe.gain.linearRampToValueAtTime(.5,y.currentTime+U+.005),oe.gain.exponentialRampToValueAtTime(.01,y.currentTime+U+.05),de.connect(he),he.connect(oe),oe.connect(y.destination),de.start(y.currentTime+U)}
;
D(0),D(.12);
const j=y.createOscillator(),z=y.createGain();
j.type="triangle",j.frequency.setValueAtTime(880,y.currentTime+.25),z.gain.setValueAtTime(0,y.currentTime+.25),z.gain.linearRampToValueAtTime(.4,y.currentTime+.26),z.gain.exponentialRampToValueAtTime(.01,y.currentTime+.8),j.connect(z),z.connect(y.destination),z.connect(T),T.connect(y.destination),j.start(y.currentTime+.25),j.stop(y.currentTime+.8)}
catch{
}
}
,vc=()=>{
try{
if(localStorage.getItem("hometeam_mute_sounds")==="true")return;
const h=window.AudioContext||window.webkitAudioContext;
if(!h)return;
const y=new h,T=y.createDelay();
T.delayTime.value=.2;
const P=y.createGain();
P.gain.value=.4,T.connect(P),P.connect(T);
const D=y.createOscillator(),j=y.createGain();
D.type="sawtooth",D.frequency.setValueAtTime(100,y.currentTime),D.frequency.exponentialRampToValueAtTime(3e3,y.currentTime+.2),j.gain.setValueAtTime(0,y.currentTime),j.gain.linearRampToValueAtTime(.3,y.currentTime+.1),j.gain.exponentialRampToValueAtTime(.01,y.currentTime+.25);
const z=y.createBiquadFilter();
z.type="lowpass",z.frequency.setValueAtTime(200,y.currentTime),z.frequency.exponentialRampToValueAtTime(5e3,y.currentTime+.2),D.connect(z),z.connect(j),j.connect(y.destination),D.start(),D.stop(y.currentTime+.25);
const U=y.sampleRate*.3,H=y.createBuffer(1,U,y.sampleRate),ee=H.getChannelData(0);
for(let oe=0;
oe<U;
oe++)ee[oe]=Math.random()*2-1;
const ie=y.createBufferSource();
ie.buffer=H;
const de=y.createBiquadFilter();
de.type="bandpass",de.Q.value=8,de.frequency.setValueAtTime(8e3,y.currentTime+.2),de.frequency.exponentialRampToValueAtTime(800,y.currentTime+.3);
const he=y.createGain();
he.gain.setValueAtTime(0,y.currentTime+.2),he.gain.linearRampToValueAtTime(.6,y.currentTime+.21),he.gain.exponentialRampToValueAtTime(.01,y.currentTime+.5),ie.connect(de),de.connect(he),he.connect(y.destination),he.connect(T),T.connect(y.destination),ie.start(y.currentTime+.2)}
catch{
}
}
,ya=()=>{
try{
if(localStorage.getItem("hometeam_mute_sounds")==="true")return;
const h=window.AudioContext||window.webkitAudioContext;
if(!h)return;
const y=new h,T=y.createDelay();
T.delayTime.value=.15;
const P=y.createGain();
P.gain.value=.4,T.connect(P),P.connect(T);
const D=[1046.5,880,783.99,659.25,523.25,440],j=.08;
D.forEach((z,U)=>{
const H=y.createOscillator(),ee=y.createGain();
H.type="triangle",H.frequency.setValueAtTime(z,y.currentTime+U*j);
const ie=y.currentTime+U*j;
ee.gain.setValueAtTime(0,ie),ee.gain.linearRampToValueAtTime(.2,ie+.01),ee.gain.exponentialRampToValueAtTime(.01,ie+.3),H.connect(ee),ee.connect(y.destination),ee.connect(T),T.connect(y.destination),H.start(ie),H.stop(ie+.35)}
)}
catch{
}
}
,va=()=>{
try{
if(localStorage.getItem("hometeam_mute_sounds")==="true")return;
const h=window.AudioContext||window.webkitAudioContext;
if(!h)return;
const y=new h,T=y.createDelay();
T.delayTime.value=.2;
const P=y.createGain();
P.gain.value=.5,T.connect(P),P.connect(T),T.connect(y.destination);
const D=[392,523.25,659.25,783.99],j=[0,.15,.3,.45];
D.forEach((z,U)=>{
const H=U===D.length-1,ee=H?1.5:.1,ie=y.createOscillator(),de=y.createOscillator();
ie.type="sawtooth",de.type="square",ie.frequency.setValueAtTime(z,y.currentTime+j[U]),de.frequency.setValueAtTime(z*1.002,y.currentTime+j[U]);
const he=y.createBiquadFilter();
he.type="lowpass",he.frequency.setValueAtTime(500,y.currentTime+j[U]),he.frequency.exponentialRampToValueAtTime(4e3,y.currentTime+j[U]+.05);
const oe=y.createGain();
oe.gain.setValueAtTime(0,y.currentTime+j[U]),oe.gain.linearRampToValueAtTime(.25,y.currentTime+j[U]+.02),H?(oe.gain.setValueAtTime(.25,y.currentTime+j[U]+.5),oe.gain.exponentialRampToValueAtTime(.01,y.currentTime+j[U]+1.2)):(oe.gain.setValueAtTime(.25,y.currentTime+j[U]+.05),oe.gain.exponentialRampToValueAtTime(.01,y.currentTime+j[U]+.1)),ie.connect(he),de.connect(he),he.connect(oe),oe.connect(y.destination),H&&oe.connect(T),ie.start(y.currentTime+j[U]),de.start(y.currentTime+j[U]),ie.stop(y.currentTime+j[U]+ee+.2),de.stop(y.currentTime+j[U]+ee+.2)}
)}
catch{
}
}
,_a=()=>{
try{
if(localStorage.getItem("hometeam_mute_sounds")==="true")return;
const h=window.AudioContext||window.webkitAudioContext;
if(!h)return;
const y=new h,T=y.createOscillator(),P=y.createGain();
T.type="sine",T.frequency.setValueAtTime(900,y.currentTime),T.frequency.exponentialRampToValueAtTime(400,y.currentTime+.045),P.gain.setValueAtTime(0,y.currentTime),P.gain.linearRampToValueAtTime(.12,y.currentTime+.005),P.gain.exponentialRampToValueAtTime(.001,y.currentTime+.05),T.connect(P),P.connect(y.destination),T.start(y.currentTime),T.stop(y.currentTime+.06)}
catch{
}
}
,_c=()=>{
try{
if(localStorage.getItem("hometeam_mute_sounds")==="true")return;
const h=window.AudioContext||window.webkitAudioContext;
if(!h)return;
const y=new h,T=y.currentTime,P=y.sampleRate*.25,D=y.createBuffer(1,P,y.sampleRate),j=D.getChannelData(0);
for(let de=0;
de<P;
de++)j[de]=Math.random()*2-1;
const z=y.createBufferSource();
z.buffer=D;
const U=y.createBiquadFilter();
U.type="bandpass",U.Q.value=2,U.frequency.setValueAtTime(300,T),U.frequency.exponentialRampToValueAtTime(5e3,T+.22);
const H=y.createGain();
H.gain.setValueAtTime(0,T),H.gain.linearRampToValueAtTime(.3,T+.05),H.gain.exponentialRampToValueAtTime(.001,T+.25),z.connect(U),U.connect(H),H.connect(y.destination),z.start(T);
const ee=T+.22;
[1760,2637].forEach((de,he)=>{
const oe=y.createOscillator(),Oe=y.createGain();
oe.type="sine",oe.frequency.setValueAtTime(de,ee+he*.02),Oe.gain.setValueAtTime(0,ee+he*.02),Oe.gain.linearRampToValueAtTime(.2,ee+he*.02+.01),Oe.gain.exponentialRampToValueAtTime(.001,ee+he*.02+.15),oe.connect(Oe),Oe.connect(y.destination),oe.start(ee+he*.02),oe.stop(ee+he*.02+.2)}
)}
catch{
}
}
,wc=()=>{
try{
if(localStorage.getItem("hometeam_mute_sounds")==="true")return;
const h=window.AudioContext||window.webkitAudioContext;
if(!h)return;
const y=new h,T=y.currentTime,P=y.createOscillator(),D=y.createGain();
P.type="sine",P.frequency.setValueAtTime(120,T),P.frequency.exponentialRampToValueAtTime(40,T+.1),D.gain.setValueAtTime(0,T),D.gain.linearRampToValueAtTime(1,T+.01),D.gain.exponentialRampToValueAtTime(.001,T+.12),P.connect(D),D.connect(y.destination),P.start(T),P.stop(T+.13);
const j=y.sampleRate*.3,z=y.createBuffer(1,j,y.sampleRate),U=z.getChannelData(0);
for(let de=0;
de<j;
de++)U[de]=Math.random()*2-1;
const H=y.createBufferSource();
H.buffer=z;
const ee=y.createBiquadFilter();
ee.type="highpass",ee.frequency.setValueAtTime(1e3,T+.05);
const ie=y.createGain();
ie.gain.setValueAtTime(0,T+.05),ie.gain.linearRampToValueAtTime(.3,T+.1),ie.gain.exponentialRampToValueAtTime(.001,T+.35),H.connect(ee),ee.connect(ie),ie.connect(y.destination),H.start(T+.05),[523.25,659.25,1046.5].forEach((de,he)=>{
const oe=y.createOscillator(),Oe=y.createGain();
oe.type="sine",oe.frequency.setValueAtTime(de,T+.08),Oe.gain.setValueAtTime(0,T+.08),Oe.gain.linearRampToValueAtTime(.15,T+.1+he*.02),Oe.gain.exponentialRampToValueAtTime(.001,T+.5),oe.connect(Oe),Oe.connect(y.destination),oe.start(T+.08),oe.stop(T+.55)}
)}
catch{
}
}
,xc=async(h,y,T=!1,P=w)=>{
if(!P||y<60)return 0;
let D=y/900;
const j=n.filter(oe=>oe.taskName===h&&oe.timestamp<Date.now()-6e4);
let z=j.length>0?j.sort((oe,Oe)=>Oe.timestamp-oe.timestamp)[0]:null;
if(z){
const oe=(Date.now()-z.timestamp)/864e5;
D=D*Math.pow(1.1,oe)}
const U=dr(),ee=n.filter(oe=>oe.userName===P&&oe.dateString===U).reduce((oe,Oe)=>oe+Oe.durationSeconds,0);
let ie=!1,de=!1;
ee>=3600?(D*=2,ie=!0):ee+y>=3600&&(D*=2,ie=!0,de=!0,P===w&&(me("🔥 ¡MODO FRENESÍ x2 DESATADO HASTA MAÑANA!","success"),Sr(),Js(()=>import("./confetti.module-cdab46f6.js"),[]).then(oe=>{
oe.default({
particleCount:300,spread:160,origin:{
y:.5}
,colors:["#ff0000","#ff5a00","#ff9a00","#ffce00","#ffe808"]}
)}
))),D=Math.round(D*100)/100;
const he=Ce[P]||{
rpcBalance:0}
;
try{
await Et(Me(le,"artifacts",fe,"public","data","users",P),{
rpcBalance:(he.rpcBalance||0)+D}
,{
merge:!0}
),P===w?(pa(),!de&&D>=.1&&me(`+${
D.toFixed(2)}
 RPC Añadidos ${
ie?"🔥 x2":""}
`,"success")):me(`+${
D.toFixed(2)}
 RPC para ${
P}
`,"success")}
catch(oe){
console.error("Error updating RPC",oe)}
return D}
,Eh=async()=>{
if(!M)return;
const h=q;
if(h>5)try{
const y=await xc(M.name||"Tarea sin nombre",h);
await gn(nt(le,"artifacts",fe,"public","data","chores"),{
taskName:M.name||"Tarea sin nombre",durationSeconds:h,timestamp:Date.now(),dateString:dr(),userName:w,userColor:O,userId:(t==null?void 0:t.uid)||"anonymous",rpcEarned:y||0}
),me("¡Tarea guardada con éxito!","success"),gc(),pc(h)}
catch(y){
console.error("Error saving chore:",y),me("Error al guardar.","error")}
G(null),A("");
try{
await Et(Me(le,"artifacts",fe,"public","data","users",w),{
activeTimer:null}
,{
merge:!0}
)}
catch(y){
console.error("Error limpiando temporizador activo",y)}
}
,wa=async h=>{
if(h.trim()){
if(!w){
k(!0);
return}
try{
const y=Math.max(-1,...i.filter(T=>!T.completed).map(T=>T.order||0));
await gn(nt(le,"artifacts",fe,"public","data","groceries"),{
name:h.trim(),completed:!1,timestamp:Date.now(),userName:w,userColor:O,supermarket:We,order:y+1}
),R("")}
catch(y){
console.error("Error adding grocery:",y),me("Error al añadir producto","error")}
}
}
,bc=async h=>{
if(!h.destination)return;
const y=i.filter(j=>!j.completed),T=Array.from(y),[P]=T.splice(h.source.index,1);
T.splice(h.destination.index,0,P);
const D=i.map(j=>{
if(j.completed)return j;
const z=T.findIndex(U=>U.id===j.id);
return{
...j,order:z}
}
).sort((j,z)=>j.order!==void 0&&z.order!==void 0?j.order-z.order:j.timestamp-z.timestamp);
s(D);
try{
T.forEach(async(j,z)=>{
j.order!==z&&await eo(Me(le,"artifacts",fe,"public","data","groceries",j.id),{
order:z}
)}
)}
catch(j){
console.error("Error updating sort order:",j)}
}
,Ec=async(h,y)=>{
try{
y?ns():(ma(),Js(()=>import("./confetti.module-cdab46f6.js"),[]).then(T=>{
T.default({
particleCount:30,spread:40,origin:{
y:.8}
,colors:["#10b981","#ffffff"]}
)}
)),await eo(Me(le,"artifacts",fe,"public","data","groceries",h),{
completed:!y}
)}
catch(T){
console.error("Error toggling grocery:",T)}
}
,Ar=async h=>{
try{
await to(Me(le,"artifacts",fe,"public","data","groceries",h))}
catch(y){
console.error("Error deleting grocery:",y)}
}
,Gn=async()=>{
const h=window.prompt("Nombre del nuevo supermercado o tienda:");
if(!(!h||!h.trim()))try{
const y=Math.max(-1,...o.map(T=>T.order||0));
await gn(nt(le,"artifacts",fe,"public","data","supermarkets"),{
name:h.trim(),order:y+1,color:"slate"}
)}
catch(y){
console.error("Error adding supermarket:",y),me("Error al crear tienda","error")}
}
,qs=async h=>{
if(!h.destination)return;
const y=Array.from(o),[T]=y.splice(h.source.index,1);
y.splice(h.destination.index,0,T);
const P=y.map((D,j)=>({
...D,order:j}
));
l(P);
try{
P.forEach(async(D,j)=>{
var z;
D.order!==((z=o.find(U=>U.id===D.id))==null?void 0:z.order)&&await eo(Me(le,"artifacts",fe,"public","data","supermarkets",D.id),{
order:j}
)}
)}
catch(D){
console.error("Error updating sorted supermarkets:",D)}
}
,Gs=async(h,y)=>{
try{
await eo(Me(le,"artifacts",fe,"public","data","supermarkets",h),{
color:y}
),l(T=>T.map(P=>P.id===h?{
...P,color:y}
:P))}
catch(T){
console.error("Error updating supermarket color:",T)}
}
,Tc=async(h,y)=>{
if(h.stopPropagation(),window.confirm("¿Seguro que quieres borrar esta etiqueta de supermercado? (No borrará los productos que ya la tengan)"))try{
await to(Me(le,"artifacts",fe,"public","data","supermarkets",y)),We===y&&lt("")}
catch(T){
console.error("Error deleting supermarket:",T)}
}
,qe=async h=>{
const y=Ce[w];
if(!y||y.rpcBalance<h.costRPC){
me("No tienes suficientes RPC copiados de energía","error");
return}
if(window.confirm(`¿Comprar ${
h.name}
 por ${
h.costRPC}
 RPC?`))try{
await Et(Me(le,"artifacts",fe,"public","data","users",w),{
rpcBalance:y.rpcBalance-h.costRPC}
,{
merge:!0}
),await gn(nt(le,"artifacts",fe,"public","data","coupons"),{
itemName:h.name,icon:h.icon,owner:w,timestamp:Date.now()}
),me("¡Compra realizada con éxito!","success"),Ji("inventory")}
catch(T){
console.error(T),me("Error en la compra","error")}
}
,Ws=async h=>{
if(window.confirm(`¿Seguro que quieres canjear y gastar: ${
h.itemName}
?`))try{
await to(Me(le,"artifacts",fe,"public","data","coupons",h.id)),await gn(nt(le,"artifacts",fe,"public","data","moments"),{
itemName:h.itemName,icon:h.icon,owner:h.owner,redeemedAt:Date.now(),timestamp:Date.now()}
);
const y=(await Js(()=>import("./confetti.module-cdab46f6.js"),[])).default;
y({
particleCount:200,spread:100,origin:{
y:.6}
,colors:["#fffc00","#ff008d","#00e5ff","#ff5100","#56ff00"]}
),wc(),me("¡Premio canjeado! Disfruta tu momento.","success"),Ji("history")}
catch(y){
console.error(y)}
}
,rs=async()=>{
if(!(!$e.name||$e.cost<=0))try{
await gn(nt(le,"artifacts",fe,"public","data","store_items"),{
name:$e.name,costRPC:parseFloat($e.cost),icon:$e.icon||"🎁",createdBy:w,timestamp:Date.now()}
),ft(!1),br({
name:"",cost:10,icon:"🎁"}
),me("Premio añadido a la tienda","success")}
catch(h){
console.error(h)}
}
,is=async h=>{
window.confirm("¿Seguro que quieres borrar este premio para TODOS?")&&(await to(Me(le,"artifacts",fe,"public","data","store_items",h)),me("Premio eliminado de la tienda.","success"))}
,Ic=async()=>{
if(!(!ze||!ze.name.trim()||ze.cost<1))try{
await eo(Me(le,"artifacts",fe,"public","data","store_items",ze.id),{
name:ze.name.trim(),costRPC:Number(ze.cost),icon:ze.icon||"🎁"}
),$t(null),me("Premio actualizado","success")}
catch(h){
console.error("Error updating store item:",h),me("Error al actualizar","error")}
}
,Sc=async()=>{
const h=window.prompt("Nombre del nuevo integrante o funcionario:");
if(!h)return;
const y=window.prompt(`¿Con cuántos RPC iniciales empezará ${
h}
?`,"0");
if(y===null)return;
const T=parseFloat(y);
if(isNaN(T)){
me("Cantidad inicial inválida.","error");
return}
try{
await Et(Me(le,"artifacts",fe,"public","data","users",h),{
rpcBalance:T}
,{
merge:!0}
),me(`Cuenta ${
h}
 actualizada.`,"success")}
catch(P){
console.error(P),me("Error de BD","error")}
}
,Th=async h=>{
window.confirm("¿Revocar (borrar) este cupón del inventario de ese usuario?")&&(await to(Me(le,"artifacts",fe,"public","data","coupons",h)),me("Cupón revocado.","success"))}
,Ih=async h=>{
const y=window.prompt(`¿Cuántos RPC quieres empezar a añadir/quitar a ${
h}
? (Usa negativo para restar, ej: -15, 50)`);
if(!y)return;
const T=parseFloat(y);
if(isNaN(T)){
me("Cantidad inválida.","error");
return}
const P=Ce[h]||{
rpcBalance:0}
,D=Math.max(0,P.rpcBalance+T);
window.confirm(`¿Añadir/Quitar ${
T>0?"+"+T:T}
 RPC a ${
h}
? (Nuevo balance: ${
D.toFixed(2)}
)`)&&(await Et(Me(le,"artifacts",fe,"public","data","users",h),{
rpcBalance:D}
,{
merge:!0}
),me("Balance actualizado.","success"),ni(!0))}
,Sh=async h=>{
var P;
if(!w||!h||h.actual<=h.claimedAt)return;
const y=h.claimedAt+1;
let T=h.reward;
h.id==="total_hours"&&(T=10),h.id==="p2p_gifts"&&(T=2);
try{
const D=((P=Ce[w])==null?void 0:P.rpcBalance)||0;
await Et(Me(le,"artifacts",fe,"public","data","users",w),{
rpcBalance:D+T,achievements:{
[`${
h.id}
`]:y}
}
,{
merge:!0}
);
const j=M_[h.id]||M_.streak_global,z=j[Math.floor(Math.random()*j.length)];
await gn(nt(le,"artifacts",fe,"public","data","moments"),{
icon:"🏆",itemName:`¡${
h.title}
 Nivel ${
y}
! (+${
T.toFixed(1)}
 RPC)`,owner:w,redeemedAt:Date.now(),timestamp:Date.now(),badgeProps:{
color:h.color,bg:h.bg,darkBg:h.darkBg,border:h.border,shadow:h.shadow,icon:h.icon,tier:y,quote:z}
}
),da(null),h.id==="streak_global"?ga():h.id==="streak_specific"?bh():h.id==="streak_bounty"?yc():h.id==="streak_frenzy"?vc():h.id==="p2p_gifts"?ya():h.id==="total_hours"?va():pa(),me(`¡Logro reclamado! +${
T.toFixed(1)}
 RPC`,"success"),Js(()=>import("./confetti.module-cdab46f6.js"),[]).then(U=>{
U.default({
particleCount:400,spread:180,origin:{
y:.5}
,colors:["#f59e0b","#fbbf24","#fcd34d","#ffffff"],zIndex:1200}
)}
)}
catch(D){
console.error("Error claiming achievement:",D),me("Error al reclamar el logro","error")}
}
,Ah=async h=>{
var P,D;
h.preventDefault();
const y=parseFloat(ii);
if(!y||y<=0){
me("Cantidad inválida","error");
return}
const T=((P=Ce[w])==null?void 0:P.rpcBalance)||0;
if(y>T){
me("Fondos insuficientes","error");
return}
try{
await Et(Me(le,"artifacts",fe,"public","data","users",w),{
rpcBalance:T-y}
,{
merge:!0}
);
const j=((D=Ce[ir])==null?void 0:D.rpcBalance)||0;
await Et(Me(le,"artifacts",fe,"public","data","users",ir),{
rpcBalance:j+y}
,{
merge:!0}
),await gn(nt(le,"artifacts",fe,"public","data","p2p_notifications"),{
type:"transfer",from:w,to:ir,amount:y,message:si.trim()||null,read:!1,timestamp:Date.now()}
),await gn(nt(le,"artifacts",fe,"public","data","chores"),{
taskName:`🎁 Regalo: ${
si.trim()||"RPC"}
`,durationSeconds:1,timestamp:Date.now(),dateString:dr(),userName:ir,userColor:ln[0].id,userId:(t==null?void 0:t.uid)||"anonymous",rpcEarned:y,isGift:!0,sender:w}
),await gn(nt(le,"artifacts",fe,"public","data","moments"),{
icon:"🎁",itemName:`${
y}
 RPC de ${
w}
${
si.trim()?` - "${
si.trim()}
"`:""}
`,owner:ir,redeemedAt:Date.now()}
),_c(),me(`¡Has enviado ${
y}
 RPC a ${
ir}
!`,"success"),ni(!1),Cn(""),ts("")}
catch(j){
console.error(j),me("Error en la transferencia","error")}
}
,ss=async h=>{
var P;
if(h.preventDefault(),!Us.trim()){
me("Escribe una descripción","error");
return}
const y=parseFloat(ii)||0,T=((P=Ce[w])==null?void 0:P.rpcBalance)||0;
if(y>T){
me("No tienes esos fondos para apostar","error");
return}
try{
await gn(nt(le,"artifacts",fe,"public","data","wagers"),{
proposer:w,receiver:ir,description:Us.trim(),amountRPC:y,storeItemId:ua||null,deadline:ai||null,status:"pending",created_at:Date.now()}
),me("Propuesta enviada. Esperando a la otra parte.","success"),ni(!1),bt(""),Cn(""),oi(""),hc("")}
catch(D){
console.error(D),me("Error al proponer la apuesta","error")}
}
,Rn=async(h,y)=>{
var T,P,D;
try{
if(y!=="Empate"){
const j=y===h.proposer?h.receiver:h.proposer;
if(h.amountRPC>0){
const z=((T=Ce[y])==null?void 0:T.rpcBalance)||0,U=((P=Ce[j])==null?void 0:P.rpcBalance)||0;
await Et(Me(le,"artifacts",fe,"public","data","users",j),{
rpcBalance:Math.max(0,U-h.amountRPC)}
,{
merge:!0}
),await Et(Me(le,"artifacts",fe,"public","data","users",y),{
rpcBalance:z+h.amountRPC}
,{
merge:!0}
)}
if(h.storeItemId){
const z=$n.find(U=>U.id===h.storeItemId);
if(z){
const U=((D=Ce[j])==null?void 0:D.rpcBalance)||0;
await Et(Me(le,"artifacts",fe,"public","data","users",j),{
rpcBalance:Math.max(0,U-z.costRPC)}
,{
merge:!0}
),await gn(nt(le,"artifacts",fe,"public","data","coupons"),{
itemId:z.id,itemName:z.name,icon:z.icon,owner:y,timestamp:Date.now()}
)}
}
}
await Et(Me(le,"artifacts",fe,"public","data","wagers",h.id),{
status:"completed",winner:y,winner_timestamp:Date.now()}
,{
merge:!0}
),me("Apuesta finalizada. ¡El resultado es definitivo!","success"),or(null)}
catch(j){
console.error(j),me("Error al resolver la apuesta","error")}
}
,xa=async(h,y)=>{
try{
y?(await Et(Me(le,"artifacts",fe,"public","data","wagers",h),{
status:"accepted"}
,{
merge:!0}
),me("¡Apuesta aceptada! Que comience el juego.","success")):(await Et(Me(le,"artifacts",fe,"public","data","wagers",h),{
status:"declined"}
,{
merge:!0}
),me("Apuesta rechazada.","success"))}
catch(T){
console.error(T),me("Error de conexión","error")}
}
,Ac=async()=>{
if(!pe.name||pe.hours===0&&pe.minutes===0)return;
const h=parseInt(pe.hours||0)*3600+parseInt(pe.minutes||0)*60,y=pe.author||w,P=(Object.values(ln).find(j=>{
var z;
return j.id===((z=Ce[y])==null?void 0:z.color)}
)||ln[0]).id,D={
taskName:pe.name,durationSeconds:h,dateString:pe.date,timestamp:new Date(pe.date).getTime(),userName:y,userColor:P,userId:(t==null?void 0:t.uid)||"anonymous"}
;
try{
if(J==="edit"&&ue){
if(await eo(Me(le,"artifacts",fe,"public","data","chores",ue.id),D),ue.taskName!==D.taskName&&window.confirm(`Has cambiado el nombre a "${
D.taskName}
". ¿Deseas actualizar el nombre en TODOS los registros de "${
ue.taskName}
"?`)){
const j=ur(nt(le,"artifacts",fe,"public","data","chores"));
me("Actualizando historial...","info");
const z=await m4(j),U=v4(le);
let H=0;
z.forEach(ee=>{
ee.data().taskName===ue.taskName&&ee.id!==ue.id&&(U.update(ee.ref,{
taskName:D.taskName}
),H++)}
),H>0&&(await U.commit(),me(`Renombrados ${
H}
 registros históricos.`,"success"))}
}
else{
const j=await xc(D.taskName,D.durationSeconds,!0,y);
D.rpcEarned=j||0,await gn(nt(le,"artifacts",fe,"public","data","chores"),D)}
ae(null),Le(null),me("¡Registro guardado!","success")}
catch(j){
console.error("Error saving manual database entry:",j),me("Error de conexión.","error")}
}
,Cc=async h=>{
var y,T;
if(window.confirm("¿Eliminar este registro?")){
const P=n.find(D=>D.id===h);
if(P){
let D=0;
if(P.rpcEarned!==void 0?D=P.rpcEarned:D=Math.round(P.durationSeconds/900*100)/100,D>0){
const j=((y=Ce[P.userName])==null?void 0:y.rpcBalance)||0;
if(await Et(Me(le,"artifacts",fe,"public","data","users",P.userName),{
rpcBalance:Math.max(0,j-D)}
,{
merge:!0}
),P.isGift&&P.sender){
const z=((T=Ce[P.sender])==null?void 0:T.rpcBalance)||0;
await Et(Me(le,"artifacts",fe,"public","data","users",P.sender),{
rpcBalance:z+D}
,{
merge:!0}
),w===P.userName?me(`-${
D.toFixed(2)}
 RPC devueltos a ${
P.sender}
`,"info"):me(`-${
D.toFixed(2)}
 RPC deducidos de ${
P.userName}
 y devueltos a ${
P.sender}
`,"info")}
else me(`-${
D.toFixed(2)}
 RPC deducidos de ${
P.userName}
`,"info")}
}
await to(Me(le,"artifacts",fe,"public","data","chores",h)),ae(null)}
}
,Cr=h=>{
Le(h),Ee({
name:h.taskName,hours:Math.floor(h.durationSeconds/3600),minutes:Math.floor(h.durationSeconds%3600/60),date:h.dateString,author:h.userName}
),ae("edit")}
,Hs=h=>{
const y=dr(h);
return n.filter(T=>T.dateString===y)}
,Ch=B.useMemo(()=>{
const h=Hs(Fe),y={
}
,T={
}
;
return h.forEach(P=>{
y[P.userName]=(y[P.userName]||0)+P.durationSeconds,T[P.userName]||(T[P.userName]={
}
),T[P.userName][P.taskName]=(T[P.userName][P.taskName]||0)+P.durationSeconds}
),{
users:y,usersTasks:T,total:h.reduce((P,D)=>P+D.durationSeconds,0)}
}
,[n,Fe]),kh=B.useMemo(()=>{
const h=new Date(Fe);
h.setHours(0,0,0,0);
const y=h.getDay(),T=h.getDate()-y+(y===0?-6:1),P=new Date(h.setDate(T));
P.setHours(0,0,0,0);
const D=new Date(P);
D.setDate(P.getDate()+6),D.setHours(23,59,59,999);
const j=n.filter(H=>H.timestamp>=P.getTime()&&H.timestamp<=D.getTime()),z={
}
,U={
}
;
return j.forEach(H=>{
z[H.userName]=(z[H.userName]||0)+H.durationSeconds,U[H.userName]||(U[H.userName]={
}
),U[H.userName][H.taskName]=(U[H.userName][H.taskName]||0)+H.durationSeconds}
),{
users:z,usersTasks:U,total:j.reduce((H,ee)=>H+ee.durationSeconds,0)}
}
,[n,Fe]),ar=B.useMemo(()=>{
const h=`${
Fe.getFullYear()}
-${
String(Fe.getMonth()+1).padStart(2,"0")}
`,y=n.filter(D=>D.dateString.startsWith(h)),T={
}
,P={
}
;
return y.forEach(D=>{
T[D.userName]=(T[D.userName]||0)+D.durationSeconds,P[D.userName]||(P[D.userName]={
}
),P[D.userName][D.taskName]=(P[D.userName][D.taskName]||0)+D.durationSeconds}
),{
users:T,usersTasks:P,total:y.reduce((D,j)=>D+j.durationSeconds,0)}
}
,[n,Fe]),Rh=B.useMemo(()=>{
const h=`${
Fe.getFullYear()}
`,y=n.filter(D=>D.dateString.startsWith(h)),T={
}
,P={
}
;
return y.forEach(D=>{
T[D.userName]=(T[D.userName]||0)+D.durationSeconds,P[D.userName]||(P[D.userName]={
}
),P[D.userName][D.taskName]=(P[D.userName][D.taskName]||0)+D.durationSeconds}
),{
users:T,usersTasks:P,total:y.reduce((D,j)=>D+j.durationSeconds,0)}
}
,[n,Fe]),Nh=B.useMemo(()=>{
const h={
}
,y={
}
;
return n.forEach(T=>{
h[T.userName]=(h[T.userName]||0)+T.durationSeconds,y[T.userName]||(y[T.userName]={
}
),y[T.userName][T.taskName]=(y[T.userName][T.taskName]||0)+T.durationSeconds}
),{
users:h,usersTasks:y,total:n.reduce((T,P)=>T+P.durationSeconds,0)}
}
,[n]),Nn=xr==="day"?Ch:xr==="week"?kh:xr==="month"?ar:xr==="year"?Rh:Nh,Ks=h=>{
const y=V_[h]||V_.timer,T=dr();
let P=0;
for(let j=0;
j<T.length;
j++)P=(P<<5)-P+T.charCodeAt(j),P|=0;
const D=Math.abs(P)%y.length;
return y[D]}
,kc=B.useMemo(()=>Ks(c),[dr(),c]),lr=B.useMemo(()=>{
const h=`${
et.getFullYear()}
-${
String(et.getMonth()+1).padStart(2,"0")}
`,y=n.filter(U=>U.dateString.startsWith(h)),T=y.reduce((U,H)=>U+H.durationSeconds,0),P={
}
;
y.forEach(U=>{
P[U.userName]||(P[U.userName]={
total:0,tasks:{
}
}
),P[U.userName].total+=U.durationSeconds,P[U.userName].tasks[U.taskName]=(P[U.userName].tasks[U.taskName]||0)+U.durationSeconds}
);
const D=Object.entries(P).map(([U,H])=>({
name:U,seconds:H.total,percentage:T?Math.round(H.total/T*100):0,tasks:Object.entries(H.tasks).map(([ee,ie])=>({
name:ee,seconds:ie}
)).sort((ee,ie)=>ie.seconds-ee.seconds)}
)).sort((U,H)=>H.seconds-U.seconds),j={
}
;
y.forEach(U=>{
j[U.taskName]=(j[U.taskName]||0)+U.durationSeconds}
);
const z=Object.entries(j).map(([U,H])=>({
name:U,seconds:H,percentage:T?Math.round(H/T*100):0}
)).sort((U,H)=>H.seconds-U.seconds).slice(0,8);
return{
total:T,personData:D,taskDistribution:z}
}
,[n,et]),os=(new Date(et.getFullYear(),et.getMonth(),1).getDay()+6)%7,Rc=new Date(et.getFullYear(),et.getMonth()+1,0).getDate();
return p.jsxs("div",{
className:`${
d?"dark bg-slate-950 text-slate-100":"bg-slate-50 text-slate-800"}
 min-h-screen font-sans pb-24 transition-colors duration-300 antialiased`,children:[p.jsx("style",{
children:`
        @keyframes soft-glow {

          0%, 100% {
 opacity: 1;
 transform: scale(1.15);
 box-shadow: 0 0 15px rgba(251, 146, 60, 0.4);
 }

          50% {
 opacity: 0.9;
 transform: scale(1.12);
 box-shadow: 0 0 5px rgba(251, 146, 60, 0.1);
 }

        }

        .animate-soft-glow {

          animation: soft-glow 3s ease-in-out infinite;

        }

      `}
),!g&&p.jsxs("div",{
className:"bg-red-500 text-white text-[10px] font-bold py-1 text-center sticky top-0 z-50 animate-pulse flex items-center justify-center gap-2",children:[p.jsx(Vy,{
size:12}
)," MODO SIN CONEXIÓN"]}
),p.jsxs("header",{
className:`${
d?"bg-slate-900 border-slate-800":"bg-white border-slate-100"}
 px-6 pt-6 pb-4 shadow-sm sticky top-0 z-20 flex justify-between items-center border-b safe-top`,children:[p.jsxs("div",{
className:"flex items-center gap-3",children:[p.jsx("div",{
className:"bg-indigo-600 p-2 rounded-xl shadow-lg shadow-indigo-500/20",children:p.jsx(Ry,{
className:"text-white",size:20}
)}
),p.jsx("h1",{
className:"text-xl font-bold tracking-tight",children:"RanxPanx Team"}
)]}
),p.jsxs("div",{
className:"flex items-center gap-2",children:[p.jsx("button",{
onClick:()=>m(!d),className:`p-2 rounded-full ${
d?"bg-slate-800 text-yellow-400":"bg-slate-100 text-slate-600"}
`,children:d?p.jsx(_A,{
size:18}
):p.jsx(hA,{
size:18}
)}
),p.jsx("button",{
onClick:()=>k(!0),className:`text-xs font-bold px-3 py-1.5 rounded-full border ${
d?"border-slate-700 bg-slate-800":"border-slate-200 bg-slate-50"}
`,children:w||"Identifícate"}
)]}
)]}
),p.jsxs("main",{
className:"max-w-md mx-auto p-4",children:[p.jsx("div",{
className:"px-4 py-2 text-center animate-in slide-in-from-top-2 fade-in duration-500 delay-100 mb-2",children:p.jsxs("p",{
className:"text-sm italic font-medium text-slate-500 dark:text-slate-400",children:['"',kc,'"']}
)}
),c==="timer"&&p.jsxs("div",{
className:"flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4",children:[p.jsxs("div",{
className:`${
d?"bg-slate-900 border-slate-800":"bg-white border-slate-100"}
 p-8 rounded-[3rem] shadow-2xl border relative overflow-hidden transition-all duration-500`,children:[p.jsxs("div",{
className:"flex justify-between items-center mb-6",children:[p.jsx("span",{
className:"text-[10px] font-bold uppercase tracking-widest text-slate-500",children:"Timer Pro"}
),p.jsxs("button",{
onClick:()=>{
ae("manual"),Ee({
name:"",hours:0,minutes:0,date:dr()}
)}
,className:"text-indigo-500 text-[10px] uppercase font-bold flex items-center gap-1 hover:bg-slate-100 dark:hover:bg-slate-800 px-3 py-1.5 rounded-full transition-colors",children:[p.jsx(us,{
size:12,strokeWidth:3}
)," Registro manual"]}
)]}
),p.jsxs("div",{
className:"relative mb-6 z-30",children:[p.jsx("input",{
type:"text",placeholder:"¿Qué vas a hacer ahora, genio?",value:b,onChange:h=>A(h.target.value),disabled:!!M,className:`w-full text-lg font-medium p-5 rounded-2xl border transition-all shadow-inner ${
d?"bg-slate-950 border-slate-800 focus:border-indigo-500":"bg-slate-50 border-slate-200 focus:border-indigo-400 focus:bg-white"}
 focus:outline-none focus:ring-4 focus:ring-indigo-500/10`}
),ha.length>0&&!M&&p.jsx("div",{
className:`absolute top-full left-0 right-0 mt-2 p-2 rounded-2xl border shadow-2xl animate-in slide-in-from-top-2 fade-in duration-200 overflow-hidden ${
d?"bg-slate-800 border-slate-700":"bg-white border-slate-200"}
`,children:ha.map((h,y)=>p.jsxs("button",{
onClick:()=>A(h),className:`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all flex items-center justify-between group ${
d?"hover:bg-slate-700 text-slate-300 hover:text-white":"hover:bg-slate-50 text-slate-600 hover:text-indigo-600"}
`,children:[h,p.jsx(us,{
size:14,className:"opacity-0 group-hover:opacity-100 transition-opacity"}
)]}
,h))}
)]}
),!M&&$s.length>0&&p.jsxs("div",{
className:"mb-6 delay-100 animate-in fade-in",children:[p.jsxs("p",{
className:"text-[10px] font-bold text-slate-500 uppercase mb-3 ml-2 flex items-center gap-1.5",children:[p.jsx(Zx,{
size:12,className:"text-emerald-500 animate-pulse"}
)," En busca y captura"]}
),p.jsx("div",{
className:"flex overflow-x-auto gap-3 pb-3 -mx-4 px-4 no-scrollbar snap-x",children:$s.map(h=>p.jsxs("button",{
onClick:()=>A(h.name),className:`relative overflow-hidden shrink-0 snap-start text-xs px-4 py-2.5 rounded-2xl border font-bold flex flex-col items-start justify-center gap-1 transition-all hover:scale-105 active:scale-95 shadow-sm ${
d?"bg-gradient-to-br from-emerald-950/40 to-teal-900/40 border-emerald-800/50 text-emerald-300 shadow-emerald-900/20":"bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200 text-emerald-800 shadow-emerald-500/10"}
`,children:[p.jsx("div",{
className:"absolute inset-0 -translate-x-full animate-[shimmer_3s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"}
),p.jsx("span",{
className:"relative z-10",children:h.name}
),p.jsxs("span",{
className:`relative flex items-center gap-1 z-10 text-[10px] px-1.5 py-0.5 rounded-md font-black tracking-tight ${
qn?"bg-amber-500 text-white shadow-md drop-shadow-[0_0_8px_rgba(245,158,11,0.6)] animate-pulse":d?"bg-emerald-800 text-emerald-100 shadow-inner":"bg-emerald-200 text-emerald-900 shadow-sm"}
`,children:["x",(h.multiplier*(qn?2:1)).toFixed(2)," RPC ",qn&&p.jsx(cs,{
size:10,strokeWidth:3}
)]}
)]}
,h.name))}
)]}
),!M&&Tr.length>0&&p.jsxs("div",{
className:"mb-8 delay-200 animate-in fade-in",children:[p.jsx("p",{
className:"text-[10px] font-bold text-slate-500 uppercase mb-3 ml-2",children:"Asignaciones Frecuentes"}
),p.jsx("div",{
className:"flex overflow-x-auto gap-2 pb-2 -mx-4 px-4 no-scrollbar",children:Tr.map(h=>p.jsx("button",{
onClick:()=>A(h),className:`shrink-0 text-[11px] font-bold px-4 py-2 rounded-xl border transition-all ${
d?"bg-slate-800 border-slate-700 hover:bg-slate-700 text-slate-300":"bg-white border-slate-200 hover:bg-slate-50 shadow-sm text-slate-600"}
`,children:h}
,h))}
)]}
),p.jsxs("div",{
className:"flex flex-col items-center mt-2 group",children:[p.jsx("div",{
className:`text-6xl sm:text-7xl font-mono font-black tracking-tighter tabular-nums mb-6 transition-colors duration-500 ${
M?M.isPaused?"text-indigo-400 animate-pulse":"text-indigo-600 dark:text-indigo-400 drop-shadow-md":"text-slate-300 dark:text-slate-700"}
`,children:ST(q)}
),p.jsxs("div",{
className:"relative flex justify-center items-center h-[140px] w-[140px]",children:[(()=>{
const P=104*Math.PI,D=P-zn/100*P;
return p.jsxs("svg",{
height:64*2,width:64*2,className:"absolute inset-0 m-auto rotate-[-90deg] drop-shadow-lg pointer-events-none",children:[p.jsx("circle",{
stroke:d?"#1e293b":"#f1f5f9",fill:"transparent",strokeWidth:6,r:52,cx:64,cy:64}
),p.jsx("circle",{
stroke:qn?"#f59e0b":"#fb923c",fill:"transparent",strokeWidth:6+1,strokeDasharray:P+" "+P,style:{
strokeDashoffset:D,transition:"stroke-dashoffset 1s ease-in-out"}
,strokeLinecap:"round",r:52,cx:64,cy:64,className:qn?"animate-pulse drop-shadow-[0_0_12px_rgba(245,158,11,0.8)]":""}
)]}
)}
)(),p.jsxs("div",{
className:"absolute top-[-20px] bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm flex items-center gap-1.5 z-20",children:[p.jsx(ru,{
size:10,className:qn?"text-amber-500 animate-bounce":"text-slate-400"}
),p.jsxs("span",{
className:`text-[9px] font-black tracking-widest uppercase ${
qn?"text-amber-500":"text-slate-500"}
`,children:[Math.floor(Ir/60)," / 60 m"]}
)]}
),p.jsx("button",{
onClick:fa,className:`w-[96px] h-[96px] rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 relative z-10 ${
M&&!M.isPaused?"bg-amber-500 text-white shadow-[0_0_30px_rgba(245,158,11,0.4)]":"bg-indigo-600 text-white shadow-[0_0_30px_rgba(79,70,229,0.4)]"}
`,children:M&&!M.isPaused?p.jsx(fA,{
size:40,fill:"currentColor"}
):p.jsx(pA,{
size:44,fill:"currentColor",className:"ml-2"}
)}
)]}
),M&&p.jsx("div",{
className:"w-full mt-8 flex justify-center animate-in slide-in-from-top-4 fade-in",children:p.jsxs("button",{
onClick:Eh,className:"w-full max-w-[240px] h-14 rounded-2xl flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 to-rose-500 hover:from-red-600 hover:to-rose-600 text-white text-sm font-bold shadow-xl shadow-red-500/30 transition-all transform active:scale-95 border-2 border-red-400/20",children:[p.jsx(yA,{
size:16,fill:"currentColor"}
)," FINALIZAR TAREA"]}
)}
)]}
)]}
),p.jsxs("div",{
className:"mt-2",children:[Object.keys(Ce).filter(h=>{
var y;
return h!==w&&((y=Ce[h])==null?void 0:y.activeTimer)&&!Ce[h].activeTimer.isPaused}
).map(h=>{
const y=Ce[h].activeTimer,T=ln.find(P=>{
var D;
return P.id===((D=Ce[h])==null?void 0:D.color)}
)||ln[0];
return p.jsxs("div",{
className:"mb-4 animate-in fade-in slide-in-from-bottom-2",children:[p.jsxs("h3",{
className:"text-xs font-bold text-red-500 uppercase tracking-widest mb-2 px-2 flex items-center gap-1.5 animate-pulse",children:[p.jsx(cs,{
size:12,strokeWidth:3}
)," En directo"]}
),p.jsxs("div",{
className:`relative overflow-hidden p-4 rounded-2xl border flex items-center justify-between ${
d?"bg-slate-900 border-red-500/20":"bg-red-50/50 border-red-100"}
 shadow-sm`,children:[p.jsx("div",{
className:"absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent pointer-events-none"}
),p.jsxs("div",{
className:"flex items-center gap-3 relative z-10 w-full overflow-hidden",children:[p.jsx("div",{
className:`w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-xs shrink-0 drop-shadow-md ${
T.bg}
 ring-2 ring-red-500/30 ring-offset-2 ${
d?"ring-offset-slate-900":"ring-offset-white"}
`,children:h.substring(0,2).toUpperCase()}
),p.jsxs("div",{
className:"flex-1 min-w-0",children:[p.jsxs("p",{
className:`font-bold text-sm tracking-tight truncate flex justify-between items-center pr-2 ${
d?"text-slate-200":"text-slate-800"}
`,children:[p.jsx("span",{
children:y.name||"Tarea sin nombre"}
),p.jsx("span",{
className:"text-red-500 font-mono text-xs tabular-nums drop-shadow-sm ml-2",children:p.jsx(x4,{
liveTask:y}
)}
)]}
),p.jsxs("p",{
className:"text-[10px] uppercase font-bold text-slate-500 flex items-center gap-1 opacity-80 mt-0.5",children:[h," ",p.jsx("span",{
className:"w-1.5 h-1.5 rounded-full bg-red-500 animate-ping ml-1"}
)]}
)]}
)]}
)]}
)]}
,`live-${
h}
`)}
),p.jsx("h3",{
className:"text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 px-2",children:"Actividad de hoy"}
),p.jsx("div",{
className:"space-y-3",children:n.filter(h=>h.dateString===dr()).slice(0,5).map(h=>{
var P;
L_(h.taskName).icon;
const T=((P=ln.find(D=>D.id===h.userColor))==null?void 0:P.css)||"text-slate-500";
return p.jsxs("div",{
className:`${
d?"bg-slate-900 border-slate-800":"bg-white border-slate-100"}
 p-4 rounded-2xl border flex items-center justify-between group relative overflow-hidden`,children:[p.jsx("div",{
className:"flex items-center gap-3",children:p.jsxs("div",{
children:[p.jsx("p",{
className:"font-bold text-sm tracking-tight",children:h.taskName}
),p.jsxs("p",{
className:"text-[10px] text-slate-500 uppercase tracking-wider flex items-center gap-1",children:[p.jsx("span",{
className:"text-slate-500 font-bold",children:new Date(h.timestamp||Date.now()).toLocaleTimeString("es-ES",{
hour:"2-digit",minute:"2-digit"}
)}
),"• ",p.jsx("span",{
className:`font-bold ${
T}
`,children:h.userName}
)," • ",fu(h.durationSeconds),h.rpcEarned>0&&p.jsxs(p.Fragment,{
children:[" • ",p.jsxs("span",{
className:"font-bold text-slate-600 dark:text-slate-400",children:[p.jsx("span",{
className:"text-orange-500/80 dark:text-orange-400/80",children:"+"}
),h.rpcEarned.toFixed(2)," RPC"]}
)]}
)]}
)]}
)}
),p.jsx("div",{
className:"flex gap-1 opacity-50 hover:opacity-100 transition-opacity",children:p.jsx("button",{
onClick:()=>Cr(h),className:"p-2 text-slate-400 hover:text-indigo-500 active:text-indigo-500",children:p.jsx(eu,{
size:16}
)}
)}
)]}
,h.id)}
)}
)]}
)]}
),c==="calendar"&&p.jsxs("div",{
className:"flex flex-col gap-6 animate-in fade-in",children:[p.jsxs("div",{
className:`${
d?"bg-slate-900 border-slate-800":"bg-white border-slate-100"}
 p-5 rounded-3xl border shadow-sm`,children:[p.jsxs("div",{
className:"flex justify-between items-center mb-6",children:[p.jsx("button",{
onClick:()=>ei(new Date(et.getFullYear(),et.getMonth()-1,1)),className:"p-2",children:" ← "}
),p.jsx("h2",{
className:"font-bold capitalize",children:et.toLocaleDateString("es-ES",{
month:"long",year:"numeric"}
)}
),p.jsx("button",{
onClick:()=>ei(new Date(et.getFullYear(),et.getMonth()+1,1)),className:"p-2",children:" → "}
)]}
),p.jsx("div",{
className:"grid grid-cols-7 gap-1 text-center mb-2",children:["L","M","X","J","V","S","D"].map(h=>p.jsx("div",{
className:"text-[10px] font-bold text-slate-500",children:h}
,h))}
),p.jsxs("div",{
className:"grid grid-cols-7 gap-1",children:[Array.from({
length:os}
).map((h,y)=>p.jsx("div",{
className:"aspect-square"}
,`empty-${
y}
`)),Array.from({
length:Rc}
).map((h,y)=>{
const T=y+1,P=new Date(et.getFullYear(),et.getMonth(),T),D=Fe.toDateString()===P.toDateString(),z=Hs(P).length>0;
return p.jsxs("button",{
onClick:()=>Un(P),className:`aspect-square flex flex-col items-center justify-center rounded-xl text-sm transition-all ${
D?"bg-indigo-600 text-white font-bold":z?d?"bg-slate-800 text-indigo-400":"bg-indigo-50 text-indigo-600":"hover:bg-slate-100"}
`,children:[T,z&&!D&&p.jsx("div",{
className:"w-1 h-1 bg-indigo-500 rounded-full mt-1"}
)]}
,`day-${
T}
`)}
)]}
),Object.keys(Nn.users).length>0&&p.jsxs("div",{
className:"flex flex-wrap gap-2 mt-6 pt-4 border-t border-slate-100 dark:border-slate-800",children:[p.jsx("button",{
onClick:()=>Bs(null),className:`text-[10px] font-bold px-3 py-1.5 rounded-lg border transition-all ${
rr===null?"bg-slate-800 text-white border-slate-800 dark:bg-slate-200 dark:text-slate-900":"bg-transparent border-slate-200 text-slate-500 hover:bg-slate-50 dark:border-slate-700"}
`,children:"Todos"}
),Object.keys(Nn.users).map(h=>p.jsx("button",{
onClick:()=>Bs(h),className:`text-[10px] font-bold px-3 py-1.5 rounded-lg border transition-all ${
rr===h?"bg-indigo-500 text-white border-indigo-500":"bg-transparent border-slate-200 text-slate-500 hover:bg-slate-50 dark:border-slate-700"}
`,children:h}
,h))]}
)]}
),p.jsxs("div",{
className:`${
d?"bg-slate-900 border-slate-800":"bg-white border-slate-100"}
 p-5 rounded-3xl border shadow-sm`,children:[p.jsxs("div",{
className:"flex justify-between items-center mb-4",children:[p.jsxs("h3",{
className:"text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2",children:[p.jsx(Oy,{
size:14}
)," Radiografía"]}
),p.jsx("div",{
className:`flex flex-wrap rounded-lg p-1 ${
d?"bg-slate-800":"bg-slate-100"}
`,children:["day","week","month","year","total"].map(h=>p.jsx("button",{
onClick:()=>Zr(h),className:`text-[10px] font-bold px-2.5 py-1.5 rounded-md transition-all ${
xr===h?d?"bg-slate-700 text-indigo-400":"bg-white text-indigo-600 shadow-sm":"text-slate-500"}
`,children:h==="day"?"Día":h==="week"?"Semana":h==="month"?"Mes":h==="year"?"Año":"Total"}
,h))}
)]}
),Nn.total===0?p.jsx("p",{
className:"text-center text-xs text-slate-400 italic py-3",children:"Sin registros."}
):p.jsx("div",{
className:"space-y-4",children:Object.entries(Nn.users).map(([h,y])=>{
var T;
return p.jsxs("div",{
className:"group",children:[p.jsxs("div",{
className:"cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 p-1 -mx-1 rounded transition-colors",onClick:()=>Ut(ht===h?null:h),children:[p.jsxs("div",{
className:"flex justify-between text-xs mb-1 font-bold",children:[p.jsxs("span",{
className:"flex items-center gap-1",children:[h,p.jsx("span",{
className:"text-[10px] text-slate-400 font-normal transition-transform duration-200",style:{
transform:ht===h?"rotate(180deg)":"rotate(0deg)"}
,children:"▼"}
)]}
),p.jsx("span",{
children:fu(y)}
)]}
),p.jsx("div",{
className:"h-2.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden",children:p.jsx("div",{
className:"h-full bg-indigo-500 transition-all duration-700",style:{
width:`${
y/Nn.total*100}
%`}
}
)}
)]}
),ht===h&&((T=Nn.usersTasks)==null?void 0:T[h])&&p.jsx("div",{
className:"mt-3 space-y-2 pl-2 border-l-2 border-slate-100 dark:border-slate-800 animate-in slide-in-from-top-2 fade-in duration-200",children:Object.entries(Nn.usersTasks[h]).sort(([,P],[,D])=>D-P).map(([P,D])=>p.jsxs("div",{
className:"flex justify-between items-center text-[10px]",children:[p.jsx("div",{
className:"flex items-center gap-1.5 min-w-0 pr-2",children:p.jsx("span",{
className:"text-slate-600 dark:text-slate-400 font-medium truncate",children:P}
)}
),p.jsx("span",{
className:"font-bold text-slate-700 dark:text-slate-300 whitespace-nowrap",children:fu(D)}
)]}
,P))}
)]}
,h)}
)}
)]}
),p.jsx("div",{
className:"space-y-3",children:Hs(Fe).filter(h=>!rr||h.userName===rr).length>0?Hs(Fe).filter(h=>!rr||h.userName===rr).map(h=>{
var P;
L_(h.taskName).icon;
const T=((P=ln.find(D=>D.id===h.userColor))==null?void 0:P.css)||"text-slate-500";
return p.jsxs("div",{
className:`${
d?"bg-slate-900 border-slate-800":"bg-white border-slate-100"}
 p-4 rounded-2xl border flex items-center justify-between relative overflow-hidden`,children:[p.jsx("div",{
className:"flex items-center gap-3",children:p.jsxs("div",{
children:[p.jsx("p",{
className:"font-bold text-sm",children:h.taskName}
),p.jsxs("p",{
className:"text-[10px] text-slate-500 font-bold uppercase tracking-wider flex items-center gap-1",children:[p.jsx("span",{
className:"text-slate-500",children:new Date(h.timestamp||Date.now()).toLocaleTimeString("es-ES",{
hour:"2-digit",minute:"2-digit"}
)}
),"• ",p.jsx("span",{
className:`font-bold ${
T}
`,children:h.userName}
)," • ",p.jsx("span",{
className:"text-slate-500 font-medium",children:fu(h.durationSeconds)}
),h.rpcEarned>0&&p.jsxs(p.Fragment,{
children:[" • ",p.jsxs("span",{
className:"font-bold text-slate-600 dark:text-slate-400",children:[p.jsx("span",{
className:"text-orange-500/80 dark:text-orange-400/80",children:"+"}
),h.rpcEarned.toFixed(2)," RPC"]}
)]}
)]}
)]}
)}
),p.jsx("div",{
className:"flex gap-1 opacity-50 hover:opacity-100 transition-opacity",children:p.jsx("button",{
onClick:()=>Cr(h),className:"p-2 text-slate-400 hover:text-indigo-500",children:p.jsx(eu,{
size:16}
)}
)}
)]}
,h.id)}
):p.jsx("p",{
className:"text-center text-xs text-slate-400 italic py-3",children:"Sin tareas registradas este día."}
)}
)]}
),c==="groceries"&&p.jsxs("div",{
className:"flex flex-col gap-6 animate-in fade-in",children:[p.jsx("div",{
className:`${
d?"bg-slate-900 border-slate-800":"bg-white border-slate-100"}
 p-6 rounded-[2.5rem] shadow-xl border relative overflow-hidden`,children:p.jsxs("div",{
className:"flex gap-2 mb-4",children:[p.jsx("input",{
type:"text",placeholder:"Añadir a la lista...",value:L,onChange:h=>R(h.target.value),onKeyDown:h=>{
h.key==="Enter"&&wa(L)}
,className:`flex-1 min-w-0 text-lg font-medium p-4 rounded-2xl border transition-all ${
d?"bg-slate-800 border-slate-700 focus:border-indigo-500":"bg-slate-50 border-slate-200 focus:border-indigo-400"}
 focus:outline-none focus:ring-4 focus:ring-indigo-500/10`}
),p.jsx("button",{
onClick:()=>wa(L),className:"w-16 shrink-0 flex items-center justify-center bg-indigo-600 text-white rounded-2xl hover:bg-indigo-700 transition shadow-lg shadow-indigo-500/30",children:p.jsx(us,{
size:24}
)}
)]}
)}
),p.jsxs("div",{
className:"flex items-center gap-2 overflow-x-auto pb-1 hide-scrollbar -mt-2 mb-2",children:[p.jsx(cf,{
size:14,className:"text-slate-400 shrink-0 ml-1"}
),o.length===0&&p.jsx("span",{
className:"text-[10px] text-slate-400 italic",children:"Pulsa Ajustes para empezar"}
),o.map(h=>{
const y=ln.find(D=>D.id===h.color),T=y?d?`bg-${
y.id}
-500/20 text-${
y.id}
-400 border-${
y.id}
-500/30`:`bg-${
y.id}
-50 text-${
y.id}
-600 border-${
y.id}
-200`:d?"bg-slate-800 border-slate-700 text-slate-400":"bg-white border-slate-200 text-slate-500",P=We===h.name;
return p.jsx("button",{
onClick:()=>lt(P?"":h.name),className:`py-1.5 px-3 flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-widest rounded-xl border whitespace-nowrap transition-all ${
P?"ring-2 ring-offset-1 "+(d?"ring-offset-slate-950 ring-indigo-500 scale-105":"ring-offset-slate-50 ring-indigo-400 scale-105"):"hover:scale-105"}
 ${
T}
`,children:h.name}
,h.id)}
),p.jsx("button",{
onClick:()=>la(!0),className:`p-2 flex items-center justify-center rounded-xl border transition-all ${
d?"bg-slate-800/50 border-slate-700/50 text-slate-400 hover:text-slate-200":"bg-slate-50 border-slate-200/50 text-slate-500 hover:text-slate-700"}
`,children:p.jsx(mA,{
size:14}
)}
)]}
),p.jsxs("div",{
className:"space-y-6",children:[p.jsxs("div",{
children:[p.jsx("h3",{
className:"text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 px-2",children:"Pendientes"}
),p.jsx(hv,{
onDragEnd:bc,children:p.jsx(wv,{
droppableId:"groceries-list",children:h=>{
const y=i.filter(T=>!T.completed&&(!We||T.supermarket===We));
return p.jsxs("div",{
className:"space-y-2",...h.droppableProps,ref:h.innerRef,children:[y.length===0?p.jsx("p",{
className:"text-center text-xs text-slate-400 italic py-6",children:"Lista de la compra vacía."}
):y.map((T,P)=>p.jsx(pv,{
draggableId:T.id,index:P,children:D=>p.jsxs("div",{
ref:D.innerRef,...D.draggableProps,style:D.draggableProps.style,className:`${
d?"bg-slate-900 border-slate-800":"bg-white border-slate-100"}
 p-4 rounded-2xl border flex items-center justify-between group transition-colors`,children:[p.jsxs("div",{
className:"flex items-center gap-4 flex-1 cursor-pointer",onClick:()=>Ec(T.id,T.completed),children:[p.jsx("button",{
className:`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
d?"border-slate-700":"border-slate-300"}
`,children:p.jsx("div",{
className:"w-0 h-0 transition-all"}
)}
),p.jsxs("div",{
className:"flex-1 flex flex-col justify-center",children:[p.jsx("p",{
className:"font-bold text-base leading-tight",children:T.name}
),T.supermarket&&(()=>{
const j=o.find(H=>H.name===T.supermarket),z=j&&j.color?ln.find(H=>H.id===j.color):null,U=z?d?`bg-${
z.id}
-900/40 text-${
z.id}
-300 border border-${
z.id}
-800/50`:`bg-${
z.id}
-100 text-${
z.id}
-700`:d?"bg-slate-800 text-slate-400":"bg-slate-100 text-slate-500";
return p.jsx("span",{
className:`text-[9px] font-bold mt-1 max-w-max uppercase tracking-widest px-1.5 py-0.5 rounded ${
U}
`,children:T.supermarket}
)}
)()]}
)]}
),p.jsx("div",{
...D.dragHandleProps,className:"p-2 text-slate-300 hover:text-slate-500 touch-none",children:p.jsx(Ny,{
size:16}
)}
)]}
)}
,T.id)),h.placeholder]}
)}
}
)}
)]}
),i.filter(h=>h.completed&&(!We||h.supermarket===We)).length>0&&p.jsxs("div",{
children:[p.jsx("h3",{
className:"text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 px-2",children:"En el Carrito"}
),p.jsx("div",{
className:"space-y-2 opacity-60",children:i.filter(h=>h.completed&&(!We||h.supermarket===We)).map(h=>p.jsxs("div",{
className:`${
d?"bg-slate-900/50 border-slate-800/50":"bg-slate-50 border-slate-200"}
 p-4 rounded-2xl border flex items-center justify-between group`,children:[p.jsxs("div",{
className:"flex items-center gap-4 flex-1 cursor-pointer",onClick:()=>Ec(h.id,h.completed),children:[p.jsx("button",{
className:"w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center transition-all",children:p.jsx(aA,{
size:16,strokeWidth:3}
)}
),p.jsx("p",{
className:"font-bold text-base flex-1 line-through text-slate-400",children:h.name}
)]}
),p.jsx("button",{
onClick:()=>Ar(h.id),className:"p-2 text-slate-400 hover:text-red-500 transition-colors ml-2",children:p.jsx(nu,{
size:16}
)}
)]}
,h.id))}
)]}
)]}
)]}
),c==="rewards"&&p.jsxs("div",{
className:"flex flex-col gap-6 animate-in fade-in",children:[p.jsxs("div",{
className:"bg-gradient-to-br from-amber-400 to-orange-600 p-8 rounded-[2.5rem] text-white shadow-xl shadow-orange-500/20 relative overflow-hidden",children:[p.jsx(af,{
className:"absolute -top-4 -right-4 text-white/10",size:120}
),p.jsx("div",{
className:"flex justify-between items-start relative z-10 mb-4",children:p.jsxs("div",{
children:[p.jsx("p",{
className:"text-orange-100 text-xs font-bold uppercase tracking-widest mb-1",children:"Tu Balance RPC"}
),p.jsxs("h2",{
className:"text-5xl font-black tracking-tighter flex items-center gap-2",children:[((Ke=(Qs=Ce[w])==null?void 0:Qs.rpcBalance)==null?void 0:Ke.toFixed(2))||"0.00"," ",p.jsx("span",{
className:"text-2xl text-orange-200",children:"RPC"}
)]}
)]}
)}
),Object.keys(Ce).length>1&&p.jsxs("div",{
className:"relative z-10 mt-6 pt-6 border-t border-white/20",children:[p.jsxs("p",{
className:"text-[10px] text-white/80 uppercase tracking-widest font-bold mb-3 flex items-center gap-1.5",children:[p.jsx(Oy,{
size:12}
)," Cuentas Familiares"]}
),p.jsx("div",{
className:"flex overflow-x-auto gap-3 pb-2 -mx-2 px-2 no-scrollbar snap-x",children:Object.entries(Ce).sort(([,h],[,y])=>(y.rpcBalance||0)-(h.rpcBalance||0)).map(([h,y])=>{
var D,j;
const T=n.find(z=>z.userName===h),P=T?(D=ln.find(z=>z.id===T.userColor))==null?void 0:D.bg:"bg-slate-400";
return p.jsxs("div",{
onClick:()=>{
h!==w&&(ca(h),sr(null),ni(!0))}
,className:`shrink-0 snap-start bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-3 flex items-center gap-3 min-w-[140px] shadow-sm ${
h!==w?"cursor-pointer hover:bg-white/20 transition-colors":""}
`,children:[p.jsx("div",{
className:`w-8 h-8 rounded-full ${
P}
 flex items-center justify-center text-white font-bold shadow-inner`,children:h.charAt(0).toUpperCase()}
),p.jsxs("div",{
children:[p.jsx("p",{
className:"text-xs font-bold truncate max-w-[80px] text-white",children:h}
),p.jsxs("p",{
className:"text-[10px] font-black text-orange-200",children:[((j=y.rpcBalance)==null?void 0:j.toFixed(2))||0," RPC"]}
)]}
)]}
,h)}
)}
)]}
),qn?p.jsxs("div",{
className:"mt-4 bg-white/20 backdrop-blur-md rounded-2xl p-4 flex items-center gap-3 animate-pulse border border-white/30 shadow-lg shadow-yellow-500/20",children:[p.jsx(cs,{
className:"text-yellow-300 animate-bounce",size:24}
),p.jsxs("div",{
children:[p.jsx("p",{
className:"text-sm font-bold leading-tight",children:"¡MODO FRENESÍ ACTIVADO!"}
),p.jsx("p",{
className:"text-[10px] text-orange-100 uppercase tracking-widest font-bold",children:"x2.0 RPC en cada tarea hasta mañana"}
)]}
)]}
):p.jsxs("div",{
className:"mt-6 w-full max-w-xs",children:[p.jsxs("div",{
className:"flex justify-between items-end mb-1",children:[p.jsx("span",{
className:"text-[10px] font-bold uppercase tracking-widest text-orange-100/80",children:"Progreso Frenesí (x2)"}
),p.jsxs("span",{
className:"text-[10px] font-bold text-white",children:[Math.floor(Ir/60)," / 60 min"]}
)]}
),p.jsx("div",{
className:"h-1.5 bg-black/20 rounded-full overflow-hidden flex shadow-inner backdrop-blur-sm",children:p.jsx("div",{
className:"h-full bg-gradient-to-r from-yellow-400 to-amber-300 transition-all duration-1000 relative",style:{
width:`${
zn}
%`}
,children:p.jsx("div",{
className:"absolute inset-0 bg-white/20 animate-pulse"}
)}
)}
)]}
)]}
),p.jsxs("div",{
className:"mt-2",children:[p.jsxs("h3",{
className:"text-xs font-bold text-slate-500 uppercase tracking-widest pl-2 mb-3 flex items-center gap-2",children:[p.jsx(tu,{
size:14}
)," Mis Logros"]}
),p.jsx("div",{
className:"flex overflow-x-auto gap-4 pb-4 pt-4 -mx-2 px-2 no-scrollbar snap-x",children:fc.map(h=>{
const y=h.actual>h.claimedAt,T=h.claimedAt;
let P=T+1;
h.id==="total_hours"&&h.actual===0&&h.claimedAt===0&&(P=1);
let D=0;
h.id==="total_hours"?y?D=100:D=h.rawTotalHours%10/10*100:(h.id==="streak_global"||h.id==="streak_specific"||h.id==="streak_bounty"||h.id==="streak_frenzy"||h.id==="p2p_gifts")&&(D=h.actual/P*100),D>100&&(D=100);
let j=Zc;
h.icon==="Flame"&&(j=cs),h.icon==="Target"&&(j=tu),h.icon==="Crosshair"&&(j=of),h.icon==="Zap"&&(j=ru),h.icon==="HeartHandshake"&&(j=lf);
const z=`${
D}
, 100`;
return p.jsxs("div",{
onClick:()=>da(h),className:"shrink-0 snap-start flex flex-col items-center gap-2 cursor-pointer group",children:[p.jsxs("div",{
className:`relative w-[72px] h-[72px] rounded-full flex items-center justify-center bg-white dark:bg-slate-900 shadow-sm border ${
h.isAlert&&!y?"ring-2 ring-red-500/80 shadow-red-500/20":""}
 ${
h.border}
 transition-all duration-300 ${
y?`scale-[1.15] ${
h.shadow}
 shadow-lg ring-4 ring-offset-2 ring-orange-400/50 dark:ring-offset-slate-950 animate-soft-glow`:"hover:scale-105"}
`,children:[p.jsxs("svg",{
viewBox:"0 0 36 36",className:"absolute inset-0 w-full h-full -rotate-90",children:[p.jsx("circle",{
strokeDasharray:"100, 100",className:"text-slate-100 dark:text-slate-800 stroke-current",strokeWidth:"2.5",fill:"none",r:"16",cx:"18",cy:"18"}
),p.jsx("circle",{
strokeDasharray:z,className:`${
h.color}
 stroke-current transition-all duration-1000 ease-out`,strokeWidth:"2.5",strokeLinecap:"round",fill:"none",r:"16",cx:"18",cy:"18"}
)]}
),p.jsx("div",{
className:`w-11 h-11 rounded-full flex items-center justify-center relative z-10 ${
y?h.bg:"bg-slate-100 dark:bg-slate-800"}
 ${
y?h.darkBg:""}
`,children:p.jsx(j,{
size:20,className:`${
y?h.color:"text-slate-400"}
 ${
y?"animate-soft-glow":""}
`}
)}
),h.isAlert&&!y&&p.jsx("div",{
className:"absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white dark:border-slate-950 animate-pulse z-20 shadow-sm shadow-red-500/50"}
)]}
),p.jsxs("div",{
className:"text-center w-24",children:[p.jsx("p",{
className:`text-[9px] font-bold uppercase truncate ${
y?h.color:"text-slate-500"}
`,children:h.title}
),p.jsxs("p",{
className:"text-[10px] font-black text-slate-400",children:["Nvl. ",T]}
)]}
)]}
,h.id)}
)}
)]}
),p.jsx("div",{
className:`flex rounded-xl p-1.5 ${
d?"bg-slate-900 border border-slate-800":"bg-white shadow-sm border border-slate-100"}
`,children:[{
id:"store",label:"Tienda",icon:cf}
,{
id:"inventory",label:"Mis Cupones",icon:wA}
,{
id:"history",label:"Momentos",icon:dA}
].map(h=>{
const y=h.icon;
return p.jsxs("button",{
onClick:()=>Ji(h.id),className:`flex-1 flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-wider py-2.5 rounded-lg transition-all ${
ti===h.id?"bg-orange-500 text-white shadow-md":"text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800"}
`,children:[p.jsx(y,{
size:14}
)," ",h.label]}
,h.id)}
)}
),ti==="store"&&p.jsxs("div",{
className:"space-y-4",children:[Zi.filter(h=>h.status==="pending"&&h.receiver===w).length>0&&p.jsxs("div",{
className:"bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-3xl p-4 shadow-sm mb-4",children:[p.jsxs("h3",{
className:"text-xs font-bold text-indigo-800 dark:text-indigo-300 uppercase tracking-widest mb-3 flex items-center gap-2",children:[p.jsx(cs,{
size:14}
)," Retos Pendientes"]}
),p.jsx("div",{
className:"space-y-3",children:Zi.filter(h=>h.status==="pending"&&h.receiver===w).map(h=>p.jsxs("div",{
className:"bg-white dark:bg-slate-800 rounded-2xl p-4 flex flex-col gap-3 shadow-sm border border-indigo-100 dark:border-indigo-900",children:[p.jsxs("p",{
className:"font-bold text-sm",children:["¡",h.proposer," te ha retado!"]}
),p.jsx("p",{
className:"text-xs italic text-slate-500",children:h.description}
),h.deadline&&p.jsxs("p",{
className:"text-[10px] text-red-500 font-bold uppercase tracking-wider",children:["⏳ Límite: ",new Date(h.deadline).toLocaleDateString()," ",new Date(h.deadline).toLocaleTimeString([],{
hour:"2-digit",minute:"2-digit"}
)]}
),p.jsxs("div",{
className:"flex gap-2 font-bold text-xs mt-1",children:[h.amountRPC>0&&p.jsxs("span",{
className:"bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-2 py-1 rounded-md",children:[h.amountRPC," RPC"]}
),h.storeItemId&&p.jsx("span",{
className:"bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 px-2 py-1 rounded-md",children:"Premio de Tienda"}
)]}
),p.jsxs("div",{
className:"flex gap-2 mt-2",children:[p.jsxs("button",{
onClick:()=>xa(h.id,!0),className:"flex-1 bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-xl text-xs flex justify-center items-center gap-1 transition-colors",children:[p.jsx(kp,{
size:14}
)," Aceptar"]}
),p.jsx("button",{
onClick:()=>xa(h.id,!1),className:"flex-1 bg-slate-100 hover:bg-red-100 text-slate-500 hover:text-red-500 dark:bg-slate-700 py-2 rounded-xl text-xs transition-colors",children:"Rechazar"}
)]}
)]}
,h.id))}
)]}
),Zi.filter(h=>h.status==="accepted"&&(h.proposer===w||h.receiver===w)).length>0&&p.jsxs("div",{
className:"mb-6 mb-4",children:[p.jsxs("h3",{
className:"text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 px-1 flex items-center gap-2",children:[p.jsx(Dy,{
size:14}
)," Apuestas Activas"]}
),p.jsx("div",{
className:"flex overflow-x-auto gap-4 pb-2 -mx-2 px-2 no-scrollbar snap-x",children:Zi.filter(h=>h.status==="accepted"&&(h.proposer===w||h.receiver===w)).map(h=>p.jsxs("div",{
onClick:()=>or(h),className:"shrink-0 snap-start bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-5 w-64 shadow-lg cursor-pointer transform hover:scale-[1.02] active:scale-95 transition-all relative overflow-hidden group",children:[p.jsx("div",{
className:"absolute -right-4 -bottom-4 text-white/10 text-8xl rotate-12 group-hover:rotate-0 transition-transform",children:p.jsx(Dy,{
}
)}
),p.jsxs("div",{
className:"relative z-10 text-white",children:[p.jsxs("div",{
className:"flex justify-between items-start mb-2",children:[p.jsx("span",{
className:"bg-white/20 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest backdrop-blur-sm",children:"En Juego"}
),h.amountRPC>0&&p.jsxs("span",{
className:"font-black text-orange-300",children:[h.amountRPC," RPC"]}
)]}
),p.jsx("p",{
className:"font-bold text-sm leading-tight mb-3 line-clamp-2",children:h.description}
),h.deadline&&p.jsxs("p",{
className:"text-[10px] text-red-200 font-bold uppercase tracking-wider mb-2",children:["⏳ Límite: ",new Date(h.deadline).toLocaleDateString()," ",new Date(h.deadline).toLocaleTimeString([],{
hour:"2-digit",minute:"2-digit"}
)]}
),p.jsxs("div",{
className:"flex items-center gap-2 text-xs font-medium text-white/80",children:[p.jsx("span",{
className:"truncate max-w-[80px] text-emerald-300 font-bold",children:h.proposer}
)," vs ",p.jsx("span",{
className:"truncate max-w-[80px] text-blue-300 font-bold",children:h.receiver}
)]}
)]}
)]}
,h.id))}
)]}
),p.jsxs("div",{
className:"flex justify-between items-center px-1 mt-6",children:[p.jsx("h3",{
className:"text-xs font-bold text-slate-500 uppercase tracking-widest",children:"Catálogo de Premios"}
),p.jsxs("div",{
className:"flex gap-2",children:[p.jsxs("button",{
onClick:()=>{
const h=window.prompt("Introduce contraseña de Admin:");
h==="123456"?Ft(!0):h!==null&&me("Contraseña incorrecta","error")}
,className:`text-xs font-bold px-2 py-1 rounded border flex items-center gap-1 transition-all ${
d?"bg-slate-800 border-slate-700 text-slate-400 hover:text-white":"bg-white border-slate-200 text-slate-500 hover:text-slate-800"}
`,children:[p.jsx(Py,{
size:12}
)," Admin"]}
),p.jsxs("button",{
onClick:()=>ft(!0),className:"text-orange-500 text-xs font-bold flex items-center gap-1 hover:underline",children:[p.jsx(us,{
size:14}
)," Crear Artículo"]}
)]}
)]}
),p.jsxs("div",{
className:"grid grid-cols-2 gap-4",children:[$n.map(h=>p.jsxs("div",{
className:`${
d?"bg-slate-900 border-slate-800":"bg-white border-slate-100"}
 p-5 rounded-3xl border flex flex-col items-center text-center relative overflow-hidden group`,children:[p.jsx("div",{
className:"text-5xl mb-3 transform group-hover:scale-110 transition-transform",children:h.icon}
),p.jsx("h4",{
className:"font-bold text-sm leading-tight mb-3",children:h.name}
),p.jsxs("button",{
onClick:()=>qe(h),className:"w-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold py-2 rounded-xl text-xs flex items-center justify-center gap-1 hover:bg-orange-500 hover:text-white transition-colors",children:[h.costRPC," RPC"]}
)]}
,h.id)),$n.length===0&&p.jsx("div",{
className:"col-span-2 text-center py-8 text-slate-400 text-xs italic",children:"La tienda está vacía. ¡Añade premios!"}
)]}
)]}
),ti==="inventory"&&p.jsxs("div",{
className:"space-y-3",children:[Xi.filter(h=>h.owner===w).map(h=>p.jsxs("div",{
className:`${
d?"bg-slate-900 border-slate-800":"bg-white border-slate-100"}
 p-5 rounded-3xl border flex items-center justify-between shadow-sm relative overflow-hidden`,children:[p.jsx("div",{
className:"absolute -left-4 -top-4 text-8xl opacity-5",children:h.icon}
),p.jsxs("div",{
className:"flex items-center gap-4 relative z-10 w-full",children:[p.jsx("div",{
className:"text-4xl",children:h.icon}
),p.jsxs("div",{
className:"flex-1",children:[p.jsx("h4",{
className:"font-bold text-base leading-tight mb-1",children:h.itemName}
),p.jsxs("p",{
className:"text-[10px] text-slate-400 font-bold uppercase tracking-wider",children:["Comprado el ",new Date(h.timestamp).toLocaleDateString()]}
)]}
),p.jsxs("button",{
onClick:()=>Ws(h),className:"bg-emerald-500 text-white font-bold py-2 px-4 rounded-xl text-xs shadow-lg shadow-emerald-500/30 hover:bg-emerald-600 transition-colors transform active:scale-95 flex items-center gap-1",children:[p.jsx(vA,{
size:14}
)," Canjear"]}
)]}
)]}
,h.id)),Xi.filter(h=>h.owner===w).length===0&&p.jsx("div",{
className:"text-center py-8 text-slate-400 text-xs italic",children:"No tienes cupones. ¡Compra algo en la tienda!"}
)]}
),ti==="history"&&p.jsxs("div",{
className:"space-y-4",children:[oa.map(h=>{
var T,P,D,j,z,U;
let y=Zc;
return((T=h.badgeProps)==null?void 0:T.icon)==="Flame"&&(y=cs),((P=h.badgeProps)==null?void 0:P.icon)==="Target"&&(y=tu),((D=h.badgeProps)==null?void 0:D.icon)==="Crosshair"&&(y=of),((j=h.badgeProps)==null?void 0:j.icon)==="Zap"&&(y=ru),((z=h.badgeProps)==null?void 0:z.icon)==="HeartHandshake"&&(y=lf),p.jsxs("div",{
className:"bg-white dark:bg-slate-900 border-[8px] border-white dark:border-slate-800 shadow-xl rounded-sm transition-transform hover:-translate-y-1 hover:shadow-2xl max-w-[280px] mx-auto",children:[p.jsx("div",{
className:`aspect-square flex items-center justify-center text-8xl border border-slate-200 dark:border-slate-700 relative overflow-hidden ${
h.badgeProps?h.badgeProps.bg+" "+(h.badgeProps.darkBg||""):"bg-slate-100 dark:bg-slate-800"}
`,children:h.badgeProps?(()=>{
const H=h.badgeProps.tier||1,ee=H>=5,ie=H>=10,de=H>=20,he=H>=50,oe=he?"w-48 h-48":de?"w-44 h-44":ie?"w-40 h-40":ee?"w-36 h-36":"w-32 h-32",Oe=he?72:de?64:ie?56:ee?48:40,as=he?"w-32 h-32":de?"w-28 h-28":ie?"w-24 h-24":"w-20 h-20";
return p.jsxs("div",{
className:`relative ${
oe}
 flex items-center justify-center transition-all duration-500 hover:scale-105`,children:[de&&p.jsx("div",{
className:`absolute inset-0 rounded-full ${
h.badgeProps.bg}
 animate-pulse blur-2xl opacity-60 z-0`}
),he&&p.jsx("div",{
className:`absolute -inset-4 rounded-full ${
h.badgeProps.bg}
 animate-ping opacity-30 blur-xl z-0`}
),ee&&p.jsx("svg",{
viewBox:"0 0 50 50",className:`absolute inset-0 w-full h-full -rotate-90 opacity-50 z-10 ${
de?"animate-[spin_4s_linear_infinite]":ie?"animate-[spin_8s_linear_infinite]":""}
`,children:p.jsx("circle",{
strokeDasharray:de?"5, 5":"15, 10",className:`${
h.badgeProps.color}
 stroke-current`,strokeWidth:de?"3":"1",fill:"none",r:"23",cx:"25",cy:"25"}
)}
),ie&&p.jsx("svg",{
viewBox:"0 0 50 50",className:`absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] -rotate-90 opacity-60 z-10 ${
he?"animate-[spin_3s_linear_infinite_reverse]":"animate-[spin_6s_linear_infinite_reverse]"}
`,children:p.jsx("circle",{
strokeDasharray:"2, 8",className:`${
h.badgeProps.color}
 stroke-current`,strokeWidth:he?"4":"2",fill:"none",r:"23",cx:"25",cy:"25"}
)}
),p.jsx("svg",{
viewBox:"0 0 36 36",className:`absolute inset-4 w-[calc(100%-32px)] h-[calc(100%-32px)] -rotate-90 z-10 ${
ie?"opacity-40":"opacity-20"}
`,children:p.jsx("circle",{
strokeDasharray:"100, 100",className:`${
h.badgeProps.color}
 stroke-current`,strokeWidth:"4",fill:"none",r:"16",cx:"18",cy:"18"}
)}
),p.jsx("svg",{
viewBox:"0 0 36 36",className:"absolute inset-4 w-[calc(100%-32px)] h-[calc(100%-32px)] -rotate-90 z-10",children:p.jsx("circle",{
strokeDasharray:"100, 100",className:`${
h.badgeProps.color}
 stroke-current`,strokeWidth:"1",fill:"none",r:"16",cx:"18",cy:"18"}
)}
),p.jsx("div",{
className:`${
as}
 rounded-full flex items-center justify-center relative z-20 bg-white/60 dark:bg-black/60 backdrop-blur-md border-[3px] ${
h.badgeProps.border}
 ${
de?"shadow-[0_0_40px_rgba(255,255,255,0.5)] dark:shadow-[0_0_40px_rgba(0,0,0,0.8)]":ie?"shadow-[0_0_20px_rgba(0,0,0,0.2)] dark:shadow-[0_0_20px_rgba(0,0,0,0.5)]":"shadow-xl"}
 transition-all duration-500`,children:p.jsx(y,{
size:Oe,className:`${
h.badgeProps.color}
 ${
he?"drop-shadow-[0_0_15px_currentColor] animate-soft-glow":""}
`}
)}
)]}
)}
)():h.icon}
),p.jsxs("div",{
className:"p-4 text-center mt-2",children:[p.jsx("h4",{
className:"font-bold font-serif text-sm text-slate-800 dark:text-slate-100 mb-1 leading-tight",children:h.itemName}
),p.jsxs("p",{
className:"text-[10px] text-slate-400 font-medium font-serif italic mb-3",children:["Por ",h.owner," • ",new Date(h.timestamp||h.redeemedAt).toLocaleDateString()]}
),((U=h.badgeProps)==null?void 0:U.quote)&&p.jsx("div",{
className:"pt-3 border-t border-slate-100 dark:border-slate-800/60 transition-all",children:p.jsxs("p",{
className:"text-xs italic text-slate-500 dark:text-slate-400 font-serif leading-relaxed px-2",children:['"',h.badgeProps.quote,'"']}
)}
)]}
)]}
,h.id)}
),oa.length===0&&p.jsx("div",{
className:"text-center py-8 text-slate-400 text-xs italic",children:"Aún no hay grandes momentos registrados."}
)]}
)]}
),c==="dashboard"&&p.jsxs("div",{
className:"space-y-6 animate-in fade-in",children:[p.jsxs("div",{
className:"bg-gradient-to-br from-indigo-600 to-slate-900 p-8 rounded-[2.5rem] text-white shadow-xl shadow-indigo-500/20 relative overflow-hidden",children:[p.jsx(Zc,{
className:"absolute -top-4 -right-4 text-white/10",size:120}
),p.jsx("p",{
className:"text-indigo-100 text-xs font-bold uppercase tracking-widest mb-2",children:"Esfuerzo del Mes (Equipo)"}
),p.jsx("h2",{
className:"text-4xl font-bold mb-6",children:hu(lr.total)}
),p.jsx("div",{
className:"space-y-5 relative z-10",children:lr.personData.map(h=>p.jsxs("div",{
className:"cursor-pointer",onClick:()=>Ut(ht===h.name?null:h.name),children:[p.jsxs("div",{
className:"flex justify-between text-xs mb-2 font-bold uppercase tracking-tight",children:[p.jsxs("span",{
className:"flex items-center gap-1",children:[h.name," ",ht===h.name?p.jsx(lA,{
size:14}
):p.jsx(cA,{
size:14}
)]}
),p.jsxs("span",{
children:[hu(h.seconds)," (",h.percentage,"%)"]}
)]}
),p.jsx("div",{
className:"h-2.5 bg-white/20 rounded-full overflow-hidden mb-1",children:p.jsx("div",{
className:"h-full bg-white transition-all duration-1000 shadow-sm",style:{
width:`${
h.percentage}
%`}
}
)}
),ht===h.name&&p.jsx("div",{
className:"mt-4 bg-black/20 rounded-2xl p-4 space-y-3 animate-in slide-in-from-top-2",children:h.tasks.map(y=>p.jsxs("div",{
className:"flex justify-between text-[10px] items-center uppercase font-bold tracking-tight",children:[p.jsx("span",{
className:"text-white/80 truncate w-32",children:y.name}
),p.jsx("span",{
className:"font-mono",children:hu(y.seconds)}
)]}
,y.name))}
)]}
,h.name))}
)]}
),p.jsxs("div",{
className:`${
d?"bg-slate-900 border-slate-800":"bg-white border-slate-100"}
 p-6 rounded-3xl border shadow-sm`,children:[p.jsxs("h3",{
className:"text-sm font-bold mb-6 flex items-center gap-2 uppercase tracking-widest",children:[p.jsx(ky,{
size:18,className:"text-indigo-500"}
)," Distribución Global"]}
),p.jsx("div",{
className:"space-y-6",children:lr.taskDistribution.length===0?p.jsx("p",{
className:"text-center text-xs text-slate-500 italic py-4",children:"Sin datos."}
):lr.taskDistribution.map(h=>p.jsxs("div",{
className:"flex items-center gap-4",children:[p.jsxs("div",{
className:"w-24 shrink-0",children:[p.jsx("p",{
className:"text-xs font-bold truncate leading-none mb-1",children:h.name}
),p.jsx("p",{
className:"text-[10px] text-slate-500",children:hu(h.seconds)}
)]}
),p.jsx("div",{
className:"flex-1 h-4 bg-slate-100 dark:bg-slate-800 rounded-md overflow-hidden flex",children:p.jsx("div",{
className:"h-full bg-indigo-500/80 transition-all duration-1000",style:{
width:`${
h.percentage}
%`}
}
)}
),p.jsxs("span",{
className:"w-8 text-right text-[10px] font-bold text-slate-400",children:[h.percentage,"%"]}
)]}
,h.name))}
)]}
)]}
)]}
),p.jsx("nav",{
className:`${
d?"bg-slate-900/90 border-slate-800":"bg-white/90 border-slate-200"}
 backdrop-blur-lg fixed bottom-0 w-full border-t flex justify-around p-3 pb-safe z-30`,children:[{
id:"timer",icon:Ry,label:"Registro"}
,{
id:"calendar",icon:sA,label:"Agenda"}
,{
id:"groceries",icon:gA,label:"Compra"}
,{
id:"rewards",icon:af,label:"Premios"}
,{
id:"dashboard",icon:ky,label:"Equipo"}
].map(h=>{
const y=h.icon;
return p.jsxs("button",{
onClick:()=>{
_a(),u(h.id)}
,className:`flex flex-col items-center gap-1 transition-all ${
c===h.id?"text-indigo-500 scale-110":"text-slate-500"}
`,children:[p.jsx(y,{
size:22,className:c===h.id?"fill-indigo-50/10":""}
),p.jsx("span",{
className:"text-[10px] font-bold uppercase tracking-tight",children:h.label}
)]}
,h.id)}
)}
),J&&p.jsx("div",{
className:"fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200",children:p.jsxs("div",{
className:`${
d?"bg-slate-900 border-slate-800":"bg-white border-slate-100"}
 w-full max-w-sm rounded-[2rem] p-6 shadow-2xl border animate-in slide-in-from-bottom-8 max-h-[90vh] overflow-y-auto pb-safe`,children:[p.jsxs("div",{
className:"flex justify-between items-center mb-6",children:[p.jsx("h2",{
className:"font-bold text-xl",children:J==="edit"?"Editar Registro":"Entrada Manual"}
),p.jsx("button",{
onClick:()=>ae(null),className:"p-2 text-slate-400",children:p.jsx(ds,{
size:20}
)}
)]}
),p.jsxs("div",{
className:"space-y-4",children:[p.jsxs("div",{
children:[p.jsx("label",{
className:"text-[10px] font-bold text-slate-500 uppercase ml-1",children:"Tarea"}
),p.jsx("input",{
type:"text",className:`w-full p-3 rounded-xl border mt-1 ${
d?"bg-slate-800 border-slate-700":"bg-slate-50 border-slate-200"}
 focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all`,value:pe.name,onChange:h=>Ee({
...pe,name:h.target.value}
)}
),Tr.length>0&&p.jsxs("div",{
className:"mt-3",children:[p.jsx("p",{
className:"text-[10px] font-bold text-slate-500 uppercase mb-2 ml-1",children:"Frecuentes"}
),p.jsx("div",{
className:"flex flex-wrap gap-2",children:Tr.map(h=>p.jsx("button",{
onClick:()=>Ee({
...pe,name:h}
),className:`text-[11px] px-2.5 py-1.5 rounded-lg border transition-all ${
d?"bg-slate-800 border-slate-700 hover:bg-slate-700":"bg-white border-slate-200 hover:bg-slate-100"}
`,children:h}
,h))}
)]}
)]}
),p.jsxs("div",{
className:"grid grid-cols-2 gap-4",children:[p.jsxs("div",{
children:[p.jsx("label",{
className:"text-[10px] font-bold text-slate-500 uppercase ml-1",children:"Horas"}
),p.jsx("input",{
type:"number",className:`w-full p-3 rounded-xl border mt-1 ${
d?"bg-slate-800 border-slate-700":"bg-slate-50 border-slate-200"}
`,value:pe.hours,onChange:h=>Ee({
...pe,hours:h.target.value}
)}
)]}
),p.jsxs("div",{
children:[p.jsx("label",{
className:"text-[10px] font-bold text-slate-500 uppercase ml-1",children:"Minutos"}
),p.jsx("input",{
type:"number",className:`w-full p-3 rounded-xl border mt-1 ${
d?"bg-slate-800 border-slate-700":"bg-slate-50 border-slate-200"}
`,value:pe.minutes,onChange:h=>Ee({
...pe,minutes:h.target.value}
)}
)]}
)]}
),p.jsxs("div",{
className:"grid grid-cols-2 gap-4",children:[p.jsxs("div",{
children:[p.jsx("label",{
className:"text-[10px] font-bold text-slate-500 uppercase ml-1",children:"Realizado por:"}
),p.jsx("select",{
className:`w-full p-3 rounded-xl border mt-1 ${
d?"bg-slate-800 border-slate-700":"bg-slate-50 border-slate-200"}
 focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all`,value:pe.author||w,onChange:h=>Ee({
...pe,author:h.target.value}
),children:Object.keys(Ce).map(h=>p.jsx("option",{
value:h,children:h}
,h))}
)]}
),p.jsxs("div",{
children:[p.jsx("label",{
className:"text-[10px] font-bold text-slate-500 uppercase ml-1",children:"Fecha"}
),p.jsx("input",{
type:"date",className:`w-full p-3 rounded-xl border mt-1 ${
d?"bg-slate-800 border-slate-700":"bg-slate-50 border-slate-200"}
`,value:pe.date,onChange:h=>Ee({
...pe,date:h.target.value}
)}
)]}
)]}
),p.jsxs("div",{
className:"flex gap-2 w-full mt-4",children:[J==="edit"&&ue&&p.jsx("button",{
onClick:()=>Cc(ue.id),className:"w-16 bg-red-100 text-red-600 rounded-2xl flex justify-center items-center hover:bg-red-200 active:scale-95 transition-all shrink-0",children:p.jsx(nu,{
size:20}
)}
),p.jsx("button",{
onClick:Ac,className:"flex-1 bg-indigo-600 text-white font-bold py-4 rounded-2xl hover:bg-indigo-700 active:scale-95 transition-all",children:"Guardar"}
)]}
)]}
)]}
)}
),nr&&p.jsx("div",{
className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200",children:p.jsxs("div",{
className:`${
d?"bg-slate-900 border-slate-800":"bg-white border-slate-100"}
 w-full max-w-md rounded-[2rem] p-6 shadow-2xl border animate-in slide-in-from-bottom-8 max-h-[90vh] overflow-y-auto no-scrollbar`,children:[p.jsxs("div",{
className:"flex justify-between items-center mb-6 sticky top-0 bg-inherit py-2 z-10",children:[p.jsxs("h2",{
className:"font-black text-xl flex items-center gap-2",children:[p.jsx(Py,{
size:22,className:"text-indigo-500"}
)," Configuración Admin"]}
),p.jsx("button",{
onClick:()=>Ft(!1),className:"p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors",children:p.jsx(ds,{
size:20}
)}
)]}
),p.jsxs("div",{
className:"space-y-6",children:[p.jsxs("section",{
children:[p.jsxs("div",{
className:"flex items-center justify-between mb-3 border-b border-slate-100 dark:border-slate-800 pb-2",children:[p.jsx("h3",{
className:"text-xs font-bold text-slate-500 uppercase tracking-widest",children:"Carteras Locales"}
),p.jsxs("button",{
onClick:Sc,className:"text-[10px] font-bold uppercase text-indigo-500 hover:text-indigo-700 dark:hover:text-indigo-400 flex items-center gap-1 transition-colors",children:[p.jsx(us,{
size:10,strokeWidth:3}
)," Añadir Cuenta"]}
)]}
),p.jsx("div",{
className:"space-y-2",children:Object.keys(Ce).map(h=>{
var y;
return p.jsxs("div",{
className:`p-3 rounded-xl border flex items-center justify-between ${
d?"bg-slate-800 border-slate-700":"bg-slate-50 border-slate-200"}
`,children:[p.jsxs("div",{
children:[p.jsx("p",{
className:"font-bold text-sm tracking-tight",children:h}
),p.jsxs("p",{
className:"text-[10px] text-orange-500 font-bold",children:[((y=Ce[h].rpcBalance)==null?void 0:y.toFixed(2))||0," RPC"]}
)]}
),p.jsx("div",{
className:"flex gap-1",children:p.jsxs("button",{
onClick:()=>Ih(h),className:"px-3 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 font-bold text-xs flex items-center justify-center transition-colors hover:bg-indigo-200 dark:hover:bg-indigo-900/50",children:[p.jsx(eu,{
size:12,className:"mr-1"}
)," Editar RPC"]}
)}
)]}
,h)}
)}
)]}
),p.jsxs("section",{
children:[p.jsx("h3",{
className:"text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 border-b border-slate-100 dark:border-slate-800 pb-2",children:"Tienda de Premios"}
),p.jsxs("div",{
className:"space-y-2",children:[$n.map(h=>p.jsx("div",{
className:`p-3 rounded-xl border ${
d?"bg-slate-800 border-slate-700":"bg-slate-50 border-slate-200"}
`,children:(ze==null?void 0:ze.id)===h.id?p.jsxs("div",{
className:"space-y-3 animate-in fade-in zoom-in-95 duration-200",children:[p.jsxs("div",{
className:"flex gap-2",children:[p.jsx("input",{
type:"text",maxLength:"2",className:`w-12 text-center rounded-lg border ${
d?"bg-slate-900 border-slate-600":"bg-white border-slate-300"}
 px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-indigo-500`,value:ze.icon,onChange:y=>$t({
...ze,icon:y.target.value}
)}
),p.jsx("input",{
type:"text",className:`flex-1 min-w-0 rounded-lg border ${
d?"bg-slate-900 border-slate-600":"bg-white border-slate-300"}
 px-3 py-1.5 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500`,value:ze.name,onChange:y=>$t({
...ze,name:y.target.value}
)}
)]}
),p.jsxs("div",{
className:"flex items-center gap-2",children:[p.jsx("input",{
type:"number",min:"1",className:`w-20 rounded-lg border ${
d?"bg-slate-900 border-slate-600 text-orange-400":"bg-white border-slate-300 text-orange-600"}
 px-2 py-1.5 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500`,value:ze.cost,onChange:y=>$t({
...ze,cost:y.target.value}
)}
),p.jsx("span",{
className:"text-[10px] uppercase font-bold text-slate-400 mr-auto",children:"RPC"}
),p.jsx("button",{
onClick:()=>$t(null),className:"px-3 py-1.5 rounded-lg text-xs font-bold text-slate-500 hover:text-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 transition",children:"Cancelar"}
),p.jsx("button",{
onClick:Ic,className:"px-4 py-1.5 rounded-lg text-xs font-bold text-white bg-indigo-500 hover:bg-indigo-600 transition shadow-sm",children:"Guardar"}
)]}
)]}
):p.jsx("div",{
className:"flex items-center justify-between",children:(ze==null?void 0:ze.id)===h.id?p.jsxs("div",{
className:"flex-1 space-y-3 animate-in fade-in zoom-in-95 duration-200",children:[p.jsxs("div",{
className:"flex gap-2",children:[p.jsx("input",{
type:"text",maxLength:"2",className:`w-12 text-center rounded-lg border ${
d?"bg-slate-900 border-slate-600":"bg-white border-slate-300"}
 px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-indigo-500`,value:ze.icon,onChange:y=>$t({
...ze,icon:y.target.value}
)}
),p.jsx("input",{
type:"text",className:`flex-1 min-w-0 rounded-lg border ${
d?"bg-slate-900 border-slate-600":"bg-white border-slate-300"}
 px-3 py-1.5 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500`,value:ze.name,onChange:y=>$t({
...ze,name:y.target.value}
)}
)]}
),p.jsxs("div",{
className:"flex items-center gap-2",children:[p.jsx("input",{
type:"number",min:"1",className:`w-20 rounded-lg border ${
d?"bg-slate-900 border-slate-600 text-orange-400":"bg-white border-slate-300 text-orange-600"}
 px-2 py-1.5 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500`,value:ze.cost,onChange:y=>$t({
...ze,cost:y.target.value}
)}
),p.jsx("span",{
className:"text-[10px] uppercase font-bold text-slate-400 mr-auto",children:"RPC"}
),p.jsx("button",{
onClick:()=>$t(null),className:"px-3 py-1.5 rounded-lg text-xs font-bold text-slate-500 hover:text-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 transition",children:"Cancelar"}
),p.jsx("button",{
onClick:Ic,className:"px-4 py-1.5 rounded-lg text-xs font-bold text-white bg-indigo-500 hover:bg-indigo-600 transition shadow-sm",children:"Guardar"}
)]}
)]}
):p.jsxs(p.Fragment,{
children:[p.jsxs("div",{
className:"flex items-center gap-3",children:[p.jsx("span",{
className:"text-2xl",children:h.icon}
),p.jsxs("div",{
children:[p.jsx("p",{
className:"font-bold text-sm leading-tight",children:h.name}
),p.jsxs("p",{
className:"text-[10px] font-medium text-slate-500",children:[h.costRPC," RPC"]}
)]}
)]}
),p.jsxs("div",{
className:"flex gap-1",children:[p.jsx("button",{
onClick:()=>$t({
id:h.id,name:h.name,cost:h.costRPC,icon:h.icon}
),className:"p-2 text-indigo-400 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-lg transition-colors",children:p.jsx(eu,{
size:16}
)}
),p.jsx("button",{
onClick:()=>is(h.id),className:"p-2 text-red-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors",children:p.jsx(nu,{
size:16}
)}
)]}
)]}
)}
)}
,h.id)),$n.length===0&&p.jsx("p",{
className:"text-xs text-slate-500 italic",children:"No hay premios creados."}
)]}
)]}
),p.jsxs("section",{
children:[p.jsx("h3",{
className:"text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 border-b border-slate-100 dark:border-slate-800 pb-2",children:"Cupones Activos (Toda la familia)"}
),p.jsxs("div",{
className:"space-y-2",children:[Xi.map(h=>p.jsxs("div",{
className:`p-3 rounded-xl border flex items-center justify-between ${
d?"bg-slate-800 border-slate-700":"bg-slate-50 border-slate-200"}
`,children:[p.jsxs("div",{
className:"flex items-center gap-3 w-3/4",children:[p.jsx("span",{
className:"text-xl",children:h.icon}
),p.jsxs("div",{
className:"truncate",children:[p.jsx("p",{
className:"font-bold text-sm tracking-tight truncate",children:h.itemName}
),p.jsxs("p",{
className:"text-[10px] font-bold text-slate-500",children:["Pertenece a ",h.owner]}
)]}
)]}
),p.jsx("button",{
onClick:()=>Th(h.id),className:"text-[10px] font-bold uppercase text-red-500 px-2 py-1 rounded bg-red-50 dark:bg-red-900/20 hover:bg-red-100 transition-colors",children:"Revocar"}
)]}
,h.id)),Xi.length===0&&p.jsx("p",{
className:"text-xs text-slate-500 italic",children:"Nadie tiene cupones activos."}
)]}
)]}
)]}
)]}
)}
),aa&&p.jsx("div",{
className:"fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200",children:p.jsxs("div",{
className:`${
d?"bg-slate-900 border-slate-800":"bg-white border-slate-100"}
 w-full max-w-sm rounded-[2rem] p-6 shadow-2xl border animate-in slide-in-from-bottom-8`,children:[p.jsxs("div",{
className:"flex justify-between items-center mb-6",children:[p.jsxs("h2",{
className:"font-bold text-xl flex items-center gap-2",children:[p.jsx(us,{
size:20,className:"text-orange-500"}
)," Añadir a la Tienda"]}
),p.jsx("button",{
onClick:()=>ft(!1),className:"p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors",children:p.jsx(ds,{
size:20}
)}
)]}
),p.jsxs("div",{
className:"space-y-4",children:[p.jsxs("div",{
children:[p.jsx("label",{
className:"text-[10px] font-bold text-slate-500 uppercase ml-1",children:"Nombre del Favor / Premio"}
),p.jsx("input",{
type:"text",placeholder:"Ej: Especial Desayuno",className:`w-full p-4 rounded-2xl border mt-1 text-base font-medium ${
d?"bg-slate-800 border-slate-700 focus:border-orange-500":"bg-slate-50 border-slate-200 focus:border-orange-400"}
 focus:outline-none focus:ring-4 focus:ring-orange-500/10 transition-all`,value:$e.name,onChange:h=>br({
...$e,name:h.target.value}
)}
)]}
),p.jsxs("div",{
className:"grid grid-cols-2 gap-4",children:[p.jsxs("div",{
children:[p.jsx("label",{
className:"text-[10px] font-bold text-slate-500 uppercase ml-1",children:"Coste (RPC)"}
),p.jsx("input",{
type:"number",min:"1",className:`w-full p-4 rounded-2xl border mt-1 text-base font-bold text-orange-500 ${
d?"bg-slate-800 border-slate-700 focus:border-orange-500":"bg-slate-50 border-slate-200 focus:border-orange-400"}
 focus:outline-none focus:ring-4 focus:ring-orange-500/10 transition-all`,value:$e.cost,onChange:h=>br({
...$e,cost:h.target.value}
)}
)]}
),p.jsxs("div",{
children:[p.jsx("label",{
className:"text-[10px] font-bold text-slate-500 uppercase ml-1",children:"Emoji / Icono"}
),p.jsx("input",{
type:"text",maxLength:"2",placeholder:"🎁",className:`w-full p-4 rounded-2xl border mt-1 text-center text-2xl ${
d?"bg-slate-800 border-slate-700 focus:border-orange-500":"bg-slate-50 border-slate-200 focus:border-orange-400"}
 focus:outline-none focus:ring-4 focus:ring-orange-500/10 transition-all`,value:$e.icon,onChange:h=>br({
...$e,icon:h.target.value}
)}
)]}
)]}
),p.jsx("button",{
onClick:rs,className:"w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold py-4 rounded-2xl mt-6 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-[1.02] active:scale-95 transition-all",children:"Publicar en Tienda"}
)]}
)]}
)}
),cc&&p.jsx("div",{
className:"fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200",children:p.jsxs("div",{
className:`${
d?"bg-slate-900 border-slate-800":"bg-white border-slate-100"}
 w-full max-w-sm rounded-[2rem] p-6 shadow-2xl border animate-in slide-in-from-bottom-8 overflow-y-auto max-h-[80vh] no-scrollbar`,children:[p.jsxs("div",{
className:"flex justify-between items-center mb-6 sticky top-0 bg-inherit z-20 pb-2 border-b border-slate-100 dark:border-slate-800",children:[p.jsxs("h2",{
className:"font-bold text-xl flex items-center gap-2",children:[p.jsx(cf,{
size:20,className:"text-indigo-500"}
)," Supermercados"]}
),p.jsx("button",{
onClick:()=>la(!1),className:"p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors",children:p.jsx(ds,{
size:20}
)}
)]}
),p.jsxs("button",{
onClick:Gn,className:"w-full mb-6 border-2 border-dashed border-indigo-200 dark:border-indigo-900/50 bg-indigo-50/50 dark:bg-indigo-950/20 text-indigo-500 font-bold py-3 rounded-2xl hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-colors flex items-center justify-center gap-2",children:[p.jsx(us,{
size:16,strokeWidth:3}
)," Añadir Nueva Tienda"]}
),p.jsx(hv,{
onDragEnd:qs,children:p.jsx(wv,{
droppableId:"supermarkets-list",children:h=>p.jsxs("div",{
className:"space-y-3",...h.droppableProps,ref:h.innerRef,children:[o.length===0&&p.jsx("p",{
className:"text-center text-xs text-slate-400 italic py-4",children:"No hay tiendas."}
),o.map((y,T)=>p.jsx(pv,{
draggableId:y.id,index:T,children:P=>{
const D=y.color||"slate";
return p.jsxs("div",{
ref:P.innerRef,...P.draggableProps,className:`${
d?"bg-slate-800 border-slate-700":"bg-slate-50 border-slate-200"}
 p-3 rounded-2xl border flex flex-col gap-3 group relative`,children:[p.jsxs("div",{
className:"flex items-center justify-between",children:[p.jsxs("div",{
className:"flex items-center gap-3",children:[p.jsx("div",{
...P.dragHandleProps,className:"text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 active:cursor-grabbing cursor-grab touch-none p-1",children:p.jsx(Ny,{
size:16}
)}
),p.jsx("span",{
className:"font-bold text-sm truncate uppercase tracking-widest",children:y.name}
)]}
),p.jsx("button",{
onClick:j=>Tc(j,y.id),className:"p-1.5 text-red-300 hover:text-red-500 transition-colors",children:p.jsx(nu,{
size:14}
)}
)]}
),p.jsxs("div",{
className:"flex items-center justify-between pl-8 pr-1",children:[p.jsx("p",{
className:"text-[10px] font-bold text-slate-400 uppercase",children:"Color:"}
),p.jsx("div",{
className:"flex gap-2",children:["slate",...ln.map(j=>j.id)].map(j=>{
var U;
const z=j==="slate"?d?"bg-slate-600":"bg-slate-400":(U=ln.find(H=>H.id===j))==null?void 0:U.bg;
return p.jsx("button",{
onClick:()=>Gs(y.id,j),className:`w-5 h-5 rounded-full ${
z}
 transition-transform ${
D===j?"scale-125 ring-2 ring-offset-1 "+(d?"ring-offset-slate-800 ring-white":"ring-offset-slate-50 ring-slate-400"):"opacity-50 hover:opacity-100 hover:scale-110"}
`}
,j)}
)}
)]}
)]}
)}
}
,y.id)),h.placeholder]}
)}
)}
)]}
)}
),dc&&p.jsx("div",{
className:"fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200",children:p.jsxs("div",{
className:`${
d?"bg-slate-900 border-slate-800":"bg-white border-slate-100"}
 w-full max-w-sm rounded-[2rem] p-6 shadow-2xl border animate-in slide-in-from-bottom-8`,children:[p.jsxs("div",{
className:"flex justify-between items-center mb-6",children:[p.jsxs("h2",{
className:"font-bold text-xl flex items-center gap-2",children:["Interactuar con ",ir]}
),p.jsx("button",{
onClick:()=>{
ni(!1),sr(null)}
,className:"p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors",children:p.jsx(ds,{
size:20}
)}
)]}
),ri?ri==="send"?p.jsxs("form",{
onSubmit:Ah,className:"space-y-4",children:[p.jsxs("div",{
children:[p.jsx("label",{
className:"text-[10px] font-bold text-slate-500 uppercase ml-1",children:"Cantidad de RPC a enviar"}
),p.jsx("input",{
type:"number",min:"0.5",step:"0.5",autoFocus:!0,className:`w-full p-4 rounded-2xl border mt-1 text-2xl text-center font-black text-orange-500 ${
d?"bg-slate-800 border-slate-700 focus:border-orange-500":"bg-slate-50 border-slate-200 focus:border-orange-400"}
 focus:outline-none focus:ring-4 focus:ring-orange-500/10 transition-all`,value:ii,onChange:h=>Cn(h.target.value)}
)]}
),p.jsxs("div",{
children:[p.jsx("label",{
className:"text-[10px] font-bold text-slate-500 uppercase ml-1",children:"Mensaje (Opcional)"}
),p.jsx("input",{
type:"text",placeholder:"Ej: Por ayudarme hoy...",className:`w-full p-3 rounded-2xl border mt-1 font-medium ${
d?"bg-slate-800 border-slate-700 focus:border-orange-500":"bg-slate-50 border-slate-200 focus:border-orange-400"}
 focus:outline-none focus:ring-4 focus:ring-orange-500/10 transition-all`,value:si,onChange:h=>ts(h.target.value)}
)]}
),p.jsx("button",{
type:"submit",className:"w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold py-4 rounded-2xl shadow-lg shadow-orange-500/30 hover:scale-[1.02] active:scale-95 transition-all text-lg mt-2",children:"Enviar RPC"}
),p.jsx("button",{
type:"button",onClick:()=>sr(null),className:"w-full py-2 text-xs text-slate-400 font-bold uppercase tracking-widest hover:text-slate-600",children:"Volver"}
)]}
):p.jsxs("form",{
onSubmit:ss,className:"space-y-4",children:[p.jsxs("div",{
children:[p.jsx("label",{
className:"text-[10px] font-bold text-slate-500 uppercase ml-1",children:"Condición de la apuesta"}
),p.jsx("input",{
type:"text",placeholder:"Ej: Quién saca la basura un mes...",className:`w-full p-4 rounded-2xl border mt-1 text-base font-medium ${
d?"bg-slate-800 border-slate-700 focus:border-indigo-500":"bg-slate-50 border-slate-200 focus:border-indigo-400"}
 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 transition-all`,value:Us,onChange:h=>bt(h.target.value)}
)]}
),p.jsxs("div",{
className:"grid grid-cols-2 gap-4",children:[p.jsxs("div",{
children:[p.jsx("label",{
className:"text-[10px] font-bold text-slate-500 uppercase ml-1",children:"RPC en juego"}
),p.jsx("input",{
type:"number",min:"0",placeholder:"0",className:`w-full p-3 rounded-2xl border mt-1 text-lg font-bold text-center ${
d?"bg-slate-800 border-slate-700 focus:border-indigo-500":"bg-slate-50 border-slate-200 focus:border-indigo-400"}
`,value:ii,onChange:h=>Cn(h.target.value)}
)]}
),p.jsxs("div",{
children:[p.jsx("label",{
className:"text-[10px] font-bold text-slate-500 uppercase ml-1",children:"O Artículo de Tienda"}
),p.jsxs("select",{
className:`w-full p-3 rounded-2xl border mt-1 text-xs font-medium ${
d?"bg-slate-800 border-slate-700 text-white":"bg-slate-50 border-slate-200 text-slate-800"}
`,value:ua,onChange:h=>oi(h.target.value),children:[p.jsx("option",{
value:"",children:"Ninguno"}
),$n.map(h=>p.jsxs("option",{
value:h.id,children:[h.icon," ",h.name]}
,h.id))]}
)]}
)]}
),p.jsxs("div",{
children:[p.jsx("label",{
className:"text-[10px] font-bold text-slate-500 uppercase ml-1",children:"Fecha Límite (Opcional)"}
),p.jsx("input",{
type:"datetime-local",className:`w-full p-3 rounded-2xl border mt-1 text-sm font-medium ${
d?"bg-slate-800 border-slate-700 focus:border-indigo-500":"bg-slate-50 border-slate-200 focus:border-indigo-400"}
 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 transition-all`,value:ai,onChange:h=>hc(h.target.value)}
)]}
),p.jsx("button",{
type:"submit",className:"w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold py-4 rounded-2xl shadow-lg shadow-indigo-500/30 hover:scale-[1.02] active:scale-95 transition-all text-lg mt-2",children:"Lanzar Apuesta"}
),p.jsx("button",{
type:"button",onClick:()=>sr(null),className:"w-full py-2 text-xs text-slate-400 font-bold uppercase tracking-widest hover:text-slate-600",children:"Volver"}
)]}
):p.jsxs("div",{
className:"space-y-4",children:[p.jsx("button",{
onClick:()=>sr("send"),className:"w-full p-4 rounded-2xl border-2 border-orange-500/30 bg-orange-500/10 hover:bg-orange-500/20 text-orange-600 dark:text-orange-400 font-bold transition-colors flex items-center justify-center gap-2 text-lg",children:"💸 Enviar RPC"}
),p.jsx("button",{
onClick:()=>sr("wager"),className:"w-full p-4 rounded-2xl border-2 border-indigo-500/30 bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 font-bold transition-colors flex items-center justify-center gap-2 text-lg",children:"🤝 Proponer Apuesta"}
)]}
)]}
)}
),pt&&p.jsx("div",{
className:"fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200",children:p.jsxs("div",{
className:`${
d?"bg-slate-900 border-slate-800":"bg-white border-slate-100"}
 w-full max-w-sm rounded-[2rem] p-6 shadow-2xl border animate-in slide-in-from-bottom-8`,children:[p.jsxs("div",{
className:"flex justify-between items-center mb-6",children:[p.jsx("h2",{
className:"font-bold text-xl flex items-center gap-2",children:"Resolver Apuesta"}
),p.jsx("button",{
onClick:()=>or(null),className:"p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors",children:p.jsx(ds,{
size:20}
)}
)]}
),p.jsxs("div",{
className:"text-center mb-6",children:[p.jsx("p",{
className:"text-2xl font-black mb-2",children:pt.description}
),pt.amountRPC>0&&p.jsxs("p",{
className:"text-orange-500 font-bold",children:[pt.amountRPC," RPC en juego"]}
),pt.storeItemId&&$n.find(h=>h.id===pt.storeItemId)&&p.jsxs("p",{
className:"text-indigo-500 font-bold",children:["Premio: ",$n.find(h=>h.id===pt.storeItemId).icon," ",$n.find(h=>h.id===pt.storeItemId).name]}
),pt.deadline&&p.jsxs("p",{
className:"text-red-500 font-bold mt-2 text-sm uppercase tracking-widest",children:["⏳ Límite: ",new Date(pt.deadline).toLocaleDateString()," ",new Date(pt.deadline).toLocaleTimeString([],{
hour:"2-digit",minute:"2-digit"}
)]}
)]}
),p.jsxs("div",{
children:[p.jsx("p",{
className:"text-xs font-bold text-slate-500 uppercase text-center mb-4",children:"¿Quién ha ganado?"}
),p.jsxs("div",{
className:"space-y-3",children:[p.jsxs("button",{
onClick:()=>Rn(pt,pt.proposer),className:"w-full py-4 rounded-2xl border-2 border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold hover:bg-emerald-500/20 transition-all text-lg",children:["🏆 ",pt.proposer]}
),p.jsxs("button",{
onClick:()=>Rn(pt,pt.receiver),className:"w-full py-4 rounded-2xl border-2 border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold hover:bg-blue-500/20 transition-all text-lg",children:["🏆 ",pt.receiver]}
),p.jsx("button",{
onClick:()=>Rn(pt,"Empate"),className:"w-full py-3 rounded-2xl border-2 border-slate-500/30 bg-slate-500/10 text-slate-600 dark:text-slate-400 font-bold hover:bg-slate-500/20 transition-all",children:"🤝 Empate / Cancelar"}
)]}
)]}
)]}
)}
),E&&p.jsx("div",{
className:"fixed inset-0 bg-slate-950/80 backdrop-blur-xl z-[60] flex items-center justify-center p-6",children:p.jsxs("div",{
className:`${
d?"bg-slate-900":"bg-white"}
 rounded-[2.5rem] p-8 w-full max-w-sm shadow-2xl`,children:[p.jsx("h2",{
className:"text-2xl font-black mb-4 uppercase tracking-tighter",children:"Bienvenid@s"}
),p.jsx("p",{
className:`text-sm mb-8 ${
d?"text-slate-400":"text-slate-500"}
`,children:"Sincroniza el RanxPanx Team con tu maravillosa esposa. ¿Quién eres?"}
),p.jsxs("div",{
className:"space-y-4",children:[p.jsx("input",{
type:"text",placeholder:"Tu nombre...",className:`w-full text-xl font-bold p-4 rounded-2xl border ${
d?"bg-slate-800 border-slate-700":"bg-slate-50 border-slate-200"}
`,value:w,onChange:h=>N(h.target.value),onKeyDown:h=>{
h.key==="Enter"&&w&&(localStorage.setItem("hometeam_username",w),localStorage.setItem("hometeam_usercolor",O),k(!1))}
}
),p.jsxs("div",{
children:[p.jsx("p",{
className:"text-[10px] font-bold text-slate-500 uppercase mb-2 ml-1",children:"Elige un color visual"}
),p.jsx("div",{
className:"flex justify-between px-2",children:ln.map(h=>p.jsx("button",{
onClick:()=>I(h.id),className:`w-10 h-10 rounded-full ${
h.bg}
 transition-all ${
O===h.id?`ring-4 ring-offset-2 ${
h.ring}
 ${
d?"ring-offset-slate-900":"ring-offset-white"}
 scale-110`:"opacity-40 hover:opacity-100 scale-90"}
`}
,h.id))}
)]}
),p.jsx("button",{
onClick:()=>{
w&&(localStorage.setItem("hometeam_username",w),localStorage.setItem("hometeam_usercolor",O),k(!1))}
,className:`w-full text-white font-bold py-4 rounded-2xl mt-4 transition-all ${
w?((Nc=ln.find(h=>h.id===O))==null?void 0:Nc.bg)+" hover:opacity-90 active:scale-95":"bg-slate-300 dark:bg-slate-800 cursor-not-allowed text-slate-400"}
`,children:"Entrar al Equipo"}
)]}
)]}
)}
),kn&&document.body&&Mo.createPortal(p.jsx("div",{
className:"fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-300 pointer-events-auto",style:{
position:"fixed",top:0,left:0,right:0,bottom:0}
,children:p.jsxs("div",{
className:`${
d?"bg-slate-900 border-slate-800":"bg-white border-slate-100"}
 w-full max-w-sm rounded-[2rem] p-8 shadow-2xl border animate-in zoom-in-95 duration-300 relative overflow-hidden text-center mx-auto`,children:[p.jsx("div",{
className:"absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-amber-500/20 to-transparent pointer-events-none"}
),p.jsxs("div",{
className:"relative z-10",children:[p.jsx("div",{
className:"w-20 h-20 mx-auto bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg shadow-orange-500/40 mb-6 animate-bounce",children:p.jsx(af,{
size:40,className:"text-white"}
)}
),p.jsx("h2",{
className:"text-2xl font-black mb-2",children:"¡Un Regalo!"}
),p.jsxs("p",{
className:`text-sm mb-6 ${
d?"text-slate-400":"text-slate-500"}
`,children:[p.jsx("span",{
className:"font-bold text-amber-500",children:kn.from}
)," te ha enviado algo especial."]}
),p.jsxs("div",{
className:`p-6 rounded-2xl mb-6 ${
d?"bg-slate-800 border-slate-700":"bg-orange-50 border-orange-100"}
 border`,children:[p.jsxs("div",{
className:"text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500 mb-2",children:[kn.amount," ",p.jsx("span",{
className:"text-2xl tracking-tighter",children:"RPC"}
)]}
),kn.message&&p.jsx("div",{
className:"mt-4 pt-4 border-t border-orange-200/20",children:p.jsxs("p",{
className:`text-sm italic font-medium ${
d?"text-slate-300":"text-orange-900"}
`,children:['"',kn.message,'"']}
)}
)]}
),p.jsx("button",{
onClick:async()=>{
try{
await Et(Me(le,"artifacts",fe,"public","data","p2p_notifications",kn.id),{
read:!0}
,{
merge:!0}
),Er(null),ya(),Js(()=>import("./confetti.module-cdab46f6.js"),[]).then(h=>{
h.default({
particleCount:200,spread:120,origin:{
y:.6}
,colors:["#fbbf24","#f59e0b","#d97706"],zIndex:1e3}
)}
)}
catch(h){
console.error("Error accepting gift:",h),Er(null)}
}
,className:"w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold py-4 rounded-2xl shadow-lg shadow-orange-500/30 hover:scale-[1.02] active:scale-95 transition-all text-xl uppercase tracking-widest pointer-events-auto",children:"Aceptar Regalo"}
)]}
)]}
)}
),document.body),De&&document.body&&Mo.createPortal(p.jsx("div",{
className:"fixed inset-0 z-[110] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-300 pointer-events-auto",style:{
position:"fixed",top:0,left:0,right:0,bottom:0}
,children:p.jsxs("div",{
className:`${
d?"bg-slate-900 border-slate-800":"bg-white border-slate-100"}
 w-full max-w-sm rounded-[2rem] p-8 shadow-2xl border animate-in zoom-in-95 duration-300 relative overflow-hidden text-center mx-auto`,children:[p.jsx("button",{
onClick:()=>da(null),className:"absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-500 rounded-full hover:bg-slate-200 transition-colors z-20",children:p.jsx(ds,{
size:16,strokeWidth:3}
)}
),p.jsx("div",{
className:`absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-white/10 to-transparent pointer-events-none ${
De.bg}
`}
),p.jsx("div",{
className:"relative z-10",children:(()=>{
const h=De.actual>De.claimedAt,y=De.claimedAt;
let T=y+1;
De.id==="total_hours"&&De.actual===0&&y===0&&(T=1);
let P=De.actual/T*100;
P>100&&(P=100);
let D=Zc;
return De.icon==="Flame"&&(D=cs),De.icon==="Target"&&(D=tu),De.icon==="Crosshair"&&(D=of),De.icon==="Zap"&&(D=ru),De.icon==="HeartHandshake"&&(D=lf),p.jsxs(p.Fragment,{
children:[p.jsxs("div",{
className:"w-24 h-24 mx-auto mb-6 relative",children:[p.jsxs("svg",{
viewBox:"0 0 36 36",className:"absolute inset-0 w-full h-full -rotate-90",children:[p.jsx("circle",{
strokeDasharray:"100, 100",className:"text-slate-100 dark:text-slate-800 stroke-current",strokeWidth:"2.5",fill:"none",r:"16",cx:"18",cy:"18"}
),p.jsx("circle",{
strokeDasharray:`${
P}
, 100`,className:`${
De.color}
 stroke-current`,strokeWidth:"2.5",strokeLinecap:"round",fill:"none",r:"16",cx:"18",cy:"18"}
)]}
),p.jsx("div",{
className:`absolute inset-2 rounded-full flex items-center justify-center ${
De.bg}
 ${
De.darkBg}
`,children:p.jsx(D,{
size:32,className:`${
De.color}
 ${
h?"animate-bounce":""}
`}
)}
)]}
),p.jsx("h2",{
className:`text-2xl font-black mb-1 uppercase tracking-tight ${
De.color}
`,children:De.title}
),p.jsxs("p",{
className:"text-xs font-bold text-slate-400 mb-4 uppercase tracking-widest",children:["Nivel ",y," ",h?"→ "+T:""]}
),p.jsxs("p",{
className:`text-sm mb-6 pb-6 border-b font-medium italic ${
d?"text-slate-300 border-slate-800":"text-slate-600 border-slate-100"}
`,children:['"',De.desc,'"']}
),p.jsxs("div",{
className:"space-y-2 mb-6 text-left bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl",children:[p.jsxs("div",{
className:"flex justify-between text-xs font-bold uppercase tracking-wider mb-1",children:[p.jsx("span",{
className:"text-slate-500",children:"Progreso actual"}
),p.jsxs("span",{
className:De.color,children:[Math.floor(De.actual)," / ",T]}
)]}
),p.jsx("div",{
className:"h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden shadow-inner",children:p.jsx("div",{
className:`h-full ${
De.color.replace("text-","bg-")}
 transition-all duration-1000`,style:{
width:`${
P}
%`}
}
)}
)]}
),h?p.jsxs("button",{
onClick:()=>Sh(De),className:`w-full text-white font-black py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-95 transition-all text-lg uppercase tracking-widest ${
De.color.replace("text-","bg-")}
 ${
De.shadow}
`,children:["Reclamar +",De.id==="total_hours"?"10.0":De.id==="p2p_gifts"?"2.0":De.reward.toFixed(1)," RPC"]}
):p.jsx("button",{
disabled:!0,className:"w-full bg-slate-100 dark:bg-slate-800 text-slate-400 font-bold py-4 rounded-2xl text-sm uppercase tracking-widest cursor-not-allowed border dark:border-slate-700",children:"Sigue esforzándote"}
)]}
)}
)()}
)]}
)}
),document.body),kt.visible&&p.jsx("div",{
className:"fixed top-20 left-1/2 transform -translate-x-1/2 z-[100] animate-in fade-in slide-in-from-top-4 duration-300",children:p.jsxs("div",{
className:`px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-2 font-bold text-sm ${
kt.type==="error"?"bg-red-500 text-white":"bg-green-500 text-white"}
`,children:[kt.type==="success"?p.jsx(kp,{
size:18}
):p.jsx(Vy,{
size:18}
),kt.msg]}
)}
),p.jsx("style",{
children:`
        .safe-top {
 padding-top: env(safe-area-inset-top);
 }

        .pb-safe {
 padding-bottom: env(safe-area-inset-bottom);
 }

        input, button {
 -webkit-tap-highlight-color: transparent;
 }

        .no-scrollbar::-webkit-scrollbar {
 display: none;
 }

        .no-scrollbar {
 -ms-overflow-style: none;
 scrollbar-width: none;
 }

      `}
)]}
)}
const j_=document.getElementById("root");
j_&&Jx(j_).render(p.jsx(b4,{
}
));

