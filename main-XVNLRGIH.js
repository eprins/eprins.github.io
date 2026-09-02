import{$ as G,$a as z,A as Ge,Aa as rn,Ab as J,B as Jr,Ba as is,Bb as ee,C as Xt,Ca as rs,Cb as ps,D as pt,Da as os,Db as F,E as eo,Ea as as,Eb as qe,F as Ya,Fa as ss,Fb as p,G as qa,Ga as cs,Gb as L,H as Be,Ha as ls,Hb as De,I as ie,Ia as je,Ib as fs,J as we,Ja as on,Jb as sn,K as se,Ka as ds,Kb as gs,L as N,La as no,Lb as Oi,M as Pn,Ma as io,Mb as Oe,N as T,Na as Je,Nb as lo,O as U,Oa as _,Ob as vs,P as Xa,Pa as ft,Pb as uo,Q as b,Qa as ve,Qb as zn,R as E,Ra as et,Rb as ho,S as l,Sa as Bn,Sb as Ue,T as Dt,Ta as an,Tb as _s,U as Ka,Ua as jn,Ub as W,V as de,Va as We,Vb as Vn,W as ge,Wa as ro,Wb as ki,X as xe,Xa as oo,Y as Et,Ya as us,Z as xt,Za as ao,_ as to,_a as S,a as g,aa as w,ab as V,b as Y,ba as Kt,bb as Ye,ca as Za,cb as Z,d as ye,da as re,db as hs,e as Zr,ea as O,eb as so,f as qt,fa as Mt,fb as co,g as I,ga as Ni,gb as tt,h as Se,ha as Qa,hb as _e,i as Ie,ia as ue,ib as nt,j as Ae,ja as Fn,jb as it,k as y,ka as Ja,kb as R,l as Ei,la as Zt,lb as h,m as xi,ma as Qt,mb as m,n as Va,na as Jt,nb as q,o as B,oa as es,ob as Me,p as Ha,pa as en,pb as Te,q as mt,qa as Ri,qb as Rt,r as $a,ra as ts,rb as Ai,s as Mi,sa as tn,sb as Ti,t as Ga,ta as Ln,tb as Ce,u as Ct,ua as C,ub as ms,v as le,va as $,vb as Q,w as Qr,wa as Nt,wb as oe,x as On,xa as ns,xb as j,y as kn,ya as Ii,yb as It,z as Wa,za as nn,zb as Un}from"./chunk-Y7QMBYF6.js";var bs=null;function rt(){return bs}function mo(i){bs??=i}var Hn=class{},cn=(()=>{class i{historyGo(e){throw new Error("")}static \u0275fac=function(t){return new(t||i)};static \u0275prov=T({token:i,factory:()=>l(ys),providedIn:"platform"})}return i})();var ys=(()=>{class i extends cn{_location;_history;_doc=l(w);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return rt().getBaseHref(this._doc)}onPopState(e){let t=rt().getGlobalEventTarget(this._doc,"window");return t.addEventListener("popstate",e,!1),()=>t.removeEventListener("popstate",e)}onHashChange(e){let t=rt().getGlobalEventTarget(this._doc,"window");return t.addEventListener("hashchange",e,!1),()=>t.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,t,r){this._history.pushState(e,t,r)}replaceState(e,t,r){this._history.replaceState(e,t,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(t){return new(t||i)};static \u0275prov=T({token:i,factory:()=>new i,providedIn:"platform"})}return i})();function Cs(i,n){return i?n?i.endsWith("/")?n.startsWith("/")?i+n.slice(1):i+n:n.startsWith("/")?i+n:`${i}/${n}`:i:n}function Ss(i){let n=i.search(/#|\?|$/);return i[n-1]==="/"?i.slice(0,n-1)+i.slice(n):i}function gt(i){return i&&i[0]!=="?"?`?${i}`:i}var Pi=(()=>{class i{historyGo(e){throw new Error("")}static \u0275fac=function(t){return new(t||i)};static \u0275prov=T({token:i,factory:()=>l(rd),providedIn:"root"})}return i})(),id=new b(""),rd=(()=>{class i extends Pi{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,t){super(),this._platformLocation=e,this._baseHref=t??this._platformLocation.getBaseHrefFromDOM()??l(w).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return Cs(this._baseHref,e)}path(e=!1){let t=this._platformLocation.pathname+gt(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${t}${r}`:t}pushState(e,t,r,o){let a=this.prepareExternalUrl(r+gt(o));this._platformLocation.pushState(e,t,a)}replaceState(e,t,r,o){let a=this.prepareExternalUrl(r+gt(o));this._platformLocation.replaceState(e,t,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(t){return new(t||i)(E(cn),E(id,8))};static \u0275prov=T({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var vt=(()=>{class i{_subject=new I;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let t=this._locationStrategy.getBaseHref();this._basePath=sd(Ss(ws(t))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,t=""){return this.path()==this.normalize(e+gt(t))}normalize(e){return i.stripTrailingSlash(ad(this._basePath,ws(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,t="",r=null){this._locationStrategy.pushState(r,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+gt(t)),r)}replaceState(e,t="",r=null){this._locationStrategy.replaceState(r,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+gt(t)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(t=>{this._notifyUrlChangeListeners(t.url,t.state)}),()=>{let t=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(t,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",t){this._urlChangeListeners.forEach(r=>r(e,t))}subscribe(e,t,r){return this._subject.subscribe({next:e,error:t??void 0,complete:r??void 0})}static normalizeQueryParams=gt;static joinWithSlash=Cs;static stripTrailingSlash=Ss;static \u0275fac=function(t){return new(t||i)(E(Pi))};static \u0275prov=T({token:i,factory:()=>od(),providedIn:"root"})}return i})();function od(){return new vt(E(Pi))}function ad(i,n){if(!i||!n.startsWith(i))return n;let e=n.substring(i.length);return e===""||["/",";","?","#"].includes(e[0])?e:n}function ws(i){return i.replace(/\/index\.html$/,"")}function sd(i){if(new RegExp("^(https?:)?//").test(i)){let[,e]=i.split(/\/\/[^\/]+/);return e}return i}var Fi=class{$implicit;ngForOf;index;count;constructor(n,e,t,r){this.$implicit=n,this.ngForOf=e,this.index=t,this.count=r}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},ke=(()=>{class i{_viewContainer;_template;_differs;set ngForOf(e){this._ngForOf=e,this._ngForOfDirty=!0}set ngForTrackBy(e){this._trackByFn=e}get ngForTrackBy(){return this._trackByFn}_ngForOf=null;_ngForOfDirty=!0;_differ=null;_trackByFn;constructor(e,t,r){this._viewContainer=e,this._template=t,this._differs=r}set ngForTemplate(e){e&&(this._template=e)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let e=this._ngForOf;!this._differ&&e&&(this._differ=this._differs.find(e).create(this.ngForTrackBy))}if(this._differ){let e=this._differ.diff(this._ngForOf);e&&this._applyChanges(e)}}_applyChanges(e){let t=this._viewContainer;e.forEachOperation((r,o,a)=>{if(r.previousIndex==null)t.createEmbeddedView(this._template,new Fi(r.item,this._ngForOf,-1,-1),a===null?void 0:a);else if(a==null)t.remove(o===null?void 0:o);else if(o!==null){let c=t.get(o);t.move(c,a),Ds(c,r)}});for(let r=0,o=t.length;r<o;r++){let c=t.get(r).context;c.index=r,c.count=o,c.ngForOf=this._ngForOf}e.forEachIdentityChange(r=>{let o=t.get(r.currentIndex);Ds(o,r)})}static ngTemplateContextGuard(e,t){return!0}static \u0275fac=function(t){return new(t||i)(an(We),an(ft),an(ho))};static \u0275dir=V({type:i,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}})}return i})();function Ds(i,n){i.context.$implicit=n.item}var At=(()=>{class i{_viewContainer;_context=new Li;_thenTemplateRef=null;_elseTemplateRef=null;_thenViewRef=null;_elseViewRef=null;constructor(e,t){this._viewContainer=e,this._thenTemplateRef=t}set ngIf(e){this._context.$implicit=this._context.ngIf=e,this._updateView()}set ngIfThen(e){Es(e,!1),this._thenTemplateRef=e,this._thenViewRef=null,this._updateView()}set ngIfElse(e){Es(e,!1),this._elseTemplateRef=e,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngIfUseIfTypeGuard;static ngTemplateGuard_ngIf;static ngTemplateContextGuard(e,t){return!0}static \u0275fac=function(t){return new(t||i)(an(We),an(ft))};static \u0275dir=V({type:i,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}})}return i})(),Li=class{$implicit=null;ngIf=null};function Es(i,n){if(i&&!i.createEmbeddedView)throw new N(2020,!1)}var X=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=z({type:i});static \u0275inj=U({})}return i})();function $n(i,n){n=encodeURIComponent(n);for(let e of i.split(";")){let t=e.indexOf("="),[r,o]=t==-1?[e,""]:[e.slice(0,t),e.slice(t+1)];if(r.trim()!==n)continue;let a=o;try{a=decodeURIComponent(o)}catch{}return a.length>1&&a[0]==='"'&&a[a.length-1]==='"'&&(a=a.slice(1,-1)),a}return null}var po="browser";function xs(i){return i===po}var Wn=class{_doc;constructor(n){this._doc=n}manager},Bi=(()=>{class i extends Wn{constructor(e){super(e)}supports(e){return!0}addEventListener(e,t,r,o){return e.addEventListener(t,r,o),()=>this.removeEventListener(e,t,r,o)}removeEventListener(e,t,r,o){return e.removeEventListener(t,r,o)}static \u0275fac=function(t){return new(t||i)(E(w))};static \u0275prov=T({token:i,factory:i.\u0275fac})}return i})(),zi=new b(""),_o=(()=>{class i{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,t){this._zone=t,e.forEach(a=>{a.manager=this});let r=e.filter(a=>!(a instanceof Bi));this._plugins=r.slice().reverse();let o=e.find(a=>a instanceof Bi);o&&this._plugins.push(o)}addEventListener(e,t,r,o){return this._findPluginFor(t).addEventListener(e,t,r,o)}getZone(){return this._zone}_findPluginFor(e){let t=this._eventNameToPlugin.get(e);if(t)return t;if(t=this._plugins.find(o=>o.supports(e)),!t)throw new N(-5101,!1);return this._eventNameToPlugin.set(e,t),t}static \u0275fac=function(t){return new(t||i)(E(zi),E(O))};static \u0275prov=T({token:i,factory:i.\u0275fac})}return i})(),fo="ng-app-id";function Ms(i){for(let n of i)n.remove()}function Ns(i,n){let e=n.createElement("style");return e.textContent=i,e}function ld(i,n,e,t){let r=i.head?.querySelectorAll(`style[${fo}="${n}"],link[${fo}="${n}"]`);if(!r||r.length===0)return!1;for(let o of r)o.removeAttribute(fo),o instanceof HTMLLinkElement?t.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]});return!0}function vo(i,n){let e=n.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",i),e}var bo=(()=>{class i{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,t,r,o={}){this.doc=e,this.appId=t,this.nonce=r,ld(e,t,this.inline,this.external)&&this.hosts.add(e.head)}addStyles(e,t){for(let r of e)this.addUsage(r,this.inline,Ns);t?.forEach(r=>this.addUsage(r,this.external,vo))}removeStyles(e,t){for(let r of e)this.removeUsage(r,this.inline);t?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,t,r){let o=t.get(e);o?o.usage++:t.set(e,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,r(e,this.doc)))})}removeUsage(e,t){let r=t.get(e);r&&(r.usage--,r.usage<=0&&(Ms(r.elements),t.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])Ms(e);this.hosts.clear()}addHost(e){if(!this.hosts.has(e)){this.hosts.add(e);for(let[t,{elements:r}]of this.inline)r.push(this.addElement(e,Ns(t,this.doc)));for(let[t,{elements:r}]of this.external)r.push(this.addElement(e,vo(t,this.doc)))}}removeHost(e){this.hosts.delete(e);for(let t of[...this.inline.values(),...this.external.values()]){let r=[];for(let o of t.elements)o.parentNode===e?o.remove():r.push(o);t.elements=r}}addElement(e,t){return this.nonce&&t.setAttribute("nonce",this.nonce),e.appendChild(t)}static \u0275fac=function(t){return new(t||i)(E(w),E(Fn),E(Jt,8),E(Zt))};static \u0275prov=T({token:i,factory:i.\u0275fac})}return i})(),go={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},yo=/%COMP%/g;var Is="%COMP%",dd=`_nghost-${Is}`,ud=`_ngcontent-${Is}`,hd=!0,md=new b("",{factory:()=>hd}),pd=new b("");function fd(i){return ud.replace(yo,i)}function gd(i){return dd.replace(yo,i)}function As(i,n){return n.map(e=>e.replace(yo,i))}var Xn=(()=>{class i{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;cssVarNamespace;constructor(e,t,r,o,a,c,s=null,d=null,u=null){this.eventManager=e,this.sharedStylesHost=t,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=a,this.ngZone=c,this.nonce=s,this.tracingService=d,this.cssVarNamespace=u??"",this.defaultRenderer=new Yn(e,a,c,this.tracingService,this.cssVarNamespace)}createRenderer(e,t){if(!e||!t)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,t);return r instanceof Ui?r.applyToHost(e):r instanceof qn&&r.applyStyles(),r}getOrCreateRenderer(e,t){let r=this.rendererByCompId,o=r.get(t.id);if(!o){let a=this.doc,c=this.ngZone,s=this.eventManager,d=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,f=this.tracingService;switch(t.encapsulation){case Ii.Emulated:o=new Ui(s,d,t,this.appId,u,a,c,f,this.cssVarNamespace);break;case Ii.ShadowDom:return new ji(s,e,t,a,c,this.nonce,f,this.cssVarNamespace,d);case Ii.ExperimentalIsolatedShadowDom:return new ji(s,e,t,a,c,this.nonce,f,this.cssVarNamespace);default:o=new qn(s,d,t,u,a,c,f,this.cssVarNamespace);break}r.set(t.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(t){return new(t||i)(E(_o),E(Bn),E(Fn),E(md),E(w),E(O),E(Jt),E(no,8),E(pd,8))};static \u0275prov=T({token:i,factory:i.\u0275fac})}return i})(),Yn=class{eventManager;doc;ngZone;tracingService;cssVarNamespace;data=Object.create(null);throwOnSyntheticProps=!0;constructor(n,e,t,r,o=""){this.eventManager=n,this.doc=e,this.ngZone=t,this.tracingService=r,this.cssVarNamespace=o}destroy(){}destroyNode=null;createElement(n,e){return e?this.doc.createElementNS(go[e]||e,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,e){(Rs(n)?n.content:n).appendChild(e)}insertBefore(n,e,t){if(n){let r=Rs(n)?n.content:n;if(t!=null&&t.parentNode!==r)throw new N(-5106,!1);r.insertBefore(e,t)}}removeChild(n,e){e.remove()}selectRootElement(n,e){let t=typeof n=="string"?this.doc.querySelector(n):n;if(!t)throw new N(-5104,!1);return e||(t.textContent=""),t}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,e,t,r){if(r){e=r+":"+e;let o=go[r];o?n.setAttributeNS(o,e,t):n.setAttribute(e,t)}else n.setAttribute(e,t)}removeAttribute(n,e,t){if(t){let r=go[t];r?n.removeAttributeNS(r,e):n.removeAttribute(`${t}:${e}`)}else n.removeAttribute(e)}addClass(n,e){n.classList.add(e)}removeClass(n,e){n.classList.remove(e)}setStyle(n,e,t,r){let o=e.startsWith("--");o&&(e=e.replace("%NS%",this.cssVarNamespace)),o||r&(on.DashCase|on.Important)?n.style.setProperty(e,t,r&on.Important?"important":""):n.style[e]=t}removeStyle(n,e,t){let r=e.startsWith("--");r&&(e=e.replace("%NS%",this.cssVarNamespace)),r||t&on.DashCase?n.style.removeProperty(e):n.style[e]=""}setProperty(n,e,t){n!=null&&(n[e]=t)}setValue(n,e){n.nodeValue=e}listen(n,e,t,r){if(typeof n=="string"&&(n=rt().getGlobalEventTarget(this.doc,n),!n))throw new N(-5102,!1);let o=this.decoratePreventDefault(t);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(n,e,o)),this.eventManager.addEventListener(n,e,o,r)}decoratePreventDefault(n){return e=>{if(e==="__ngUnwrap__")return n;n(e)===!1&&e.preventDefault()}}};function Rs(i){return i.tagName==="TEMPLATE"&&i.content!==void 0}var ji=class extends Yn{hostEl;sharedStylesHost;shadowRoot;constructor(n,e,t,r,o,a,c,s,d){super(n,r,o,c,s),this.hostEl=e,this.sharedStylesHost=d,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let u=t.styles;u=As(t.id,u).map(v=>v.replace(/%NS%/g,s));for(let v of u){let D=document.createElement("style");a&&D.setAttribute("nonce",a),D.textContent=v,this.shadowRoot.appendChild(D)}let f=t.getExternalStyles?.();if(f)for(let v of f){let D=vo(v,r);a&&D.setAttribute("nonce",a),this.shadowRoot.appendChild(D)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,e){return super.appendChild(this.nodeOrShadowRoot(n),e)}insertBefore(n,e,t){return super.insertBefore(this.nodeOrShadowRoot(n),e,t)}removeChild(n,e){return super.removeChild(null,e)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},qn=class extends Yn{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(n,e,t,r,o,a,c,s,d){super(n,o,a,c,s),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let u=t.styles,f=d?As(d,u):u;this.styles=f.map(v=>v.replace(/%NS%/g,s)),this.styleUrls=t.getExternalStyles?.(d)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&ds.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Ui=class extends qn{contentAttr;hostAttr;constructor(n,e,t,r,o,a,c,s,d){let u=r+"-"+t.id;super(n,e,t,o,a,c,s,d,u),this.contentAttr=fd(u),this.hostAttr=gd(u)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,e){let t=super.createElement(n,e);return super.setAttribute(t,this.contentAttr,""),t}};var Vi=class i extends Hn{supportsDOMEvents=!0;static makeCurrent(){mo(new i)}onAndCancel(n,e,t,r){return n.addEventListener(e,t,r),()=>{n.removeEventListener(e,t,r)}}dispatchEvent(n,e){n.dispatchEvent(e)}remove(n){n.remove()}createElement(n,e){return e=e||this.getDefaultDocument(),e.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,e){return e==="window"?window:e==="document"?n:e==="body"?n.body:null}getBaseHref(n){let e=_d();return e==null?null:bd(e)}resetBaseElement(){Kn=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return $n(document.cookie,n)}},Kn=null;function _d(){return Kn=Kn||document.head.querySelector("base"),Kn?Kn.getAttribute("href"):null}function bd(i){return new URL(i,document.baseURI).pathname}var Ts=["alt","control","meta","shift"],yd={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Sd={alt:i=>i.altKey,control:i=>i.ctrlKey,meta:i=>i.metaKey,shift:i=>i.shiftKey},Os=(()=>{class i extends Wn{constructor(e){super(e)}supports(e){return i.parseEventName(e)!=null}addEventListener(e,t,r,o){let a=i.parseEventName(t),c=i.eventCallback(a.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>rt().onAndCancel(e,a.domEventName,c,o))}static parseEventName(e){let t=e.toLowerCase().split("."),r=t.shift();if(t.length===0||!(r==="keydown"||r==="keyup"))return null;let o=i._normalizeKey(t.pop()),a="",c=t.indexOf("code");if(c>-1&&(t.splice(c,1),a="code."),Ts.forEach(d=>{let u=t.indexOf(d);u>-1&&(t.splice(u,1),a+=d+".")}),a+=o,t.length!=0||o.length===0)return null;let s={};return s.domEventName=r,s.fullKey=a,s}static matchEventFullKeyCode(e,t){let r=yd[e.key]||e.key,o="";return t.indexOf("code.")>-1&&(r=e.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),Ts.forEach(a=>{if(a!==r){let c=Sd[a];c(e)&&(o+=a+".")}}),o+=r,o===t)}static eventCallback(e,t,r){return o=>{i.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>t(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(t){return new(t||i)(E(w))};static \u0275prov=T({token:i,factory:i.\u0275fac})}return i})();async function So(i,n,e){let t=g({rootComponent:i},wd(n,e));return _s(t)}function wd(i,n){return{platformRef:n?.platformRef,appProviders:[...Md,...i?.providers??[]],platformProviders:xd}}function Cd(){Vi.makeCurrent()}function Dd(){return new Mt}function Ed(){return ns(document),document}var xd=[{provide:Zt,useValue:po},{provide:Ja,useValue:Cd,multi:!0},{provide:w,useFactory:Ed}];var Md=[{provide:Ka,useValue:"root"},{provide:Mt,useFactory:Dd},{provide:zi,useClass:Bi,multi:!0},{provide:zi,useClass:Os,multi:!0},Xn,{provide:Bn,useClass:bo},{provide:bo,useExisting:Bn},_o,{provide:ve,useExisting:Xn},[]];var at=class i{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(n){n?typeof n=="string"?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(e=>{let t=e.indexOf(":");if(t>0){let r=e.slice(0,t),o=e.slice(t+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((e,t)=>{this.addHeaderEntry(t,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([e,t])=>{this.setHeaderEntries(e,t)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let e=this.headers.get(n.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,e){return this.clone({name:n,value:e,op:"a"})}set(n,e){return this.clone({name:n,value:e,op:"s"})}delete(n,e){return this.clone({name:n,value:e,op:"d"})}maybeSetNormalizedName(n,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,n)}init(){this.lazyInit&&(this.lazyInit instanceof i?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init();for(let[e,t]of n.headers.entries())this.headers.set(e,t),this.normalizedNames.set(e,n.normalizedNames.get(e))}clone(n){let e=new i;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof i?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([n]),e}applyUpdate(n){let e=n.name.toLowerCase();switch(n.op){case"a":case"s":let t=n.value;if(typeof t=="string"&&(t=[t]),t.length===0)return;this.maybeSetNormalizedName(n.name,e);let r=n.op==="a"?(this.headers.get(e)||[]).slice():[];r.push(...t),this.headers.set(e,r);break;case"d":let o=n.value;if(o===void 0)this.headers.delete(e),this.normalizedNames.delete(e);else{let a=Array.isArray(o)?o:[o],c=this.headers.get(e);if(!c)return;c=c.filter(s=>a.indexOf(s)===-1),c.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,c)}break}}addHeaderEntry(n,e){let t=n.toLowerCase();this.maybeSetNormalizedName(n,t),this.headers.has(t)?this.headers.get(t).push(e):this.headers.set(t,[e])}setHeaderEntries(n,e){let t=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=n.toLowerCase();this.headers.set(r,t),this.maybeSetNormalizedName(n,r)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>n(this.normalizedNames.get(e),this.headers.get(e)))}};var Do=class{map=new Map;set(n,e){return this.map.set(n,e),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}},Eo=class{encodeKey(n){return ks(n)}encodeValue(n){return ks(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function Nd(i,n){let e=new Map;return i.length>0&&i.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[a,c]=o==-1?[n.decodeKey(r),""]:[n.decodeKey(r.slice(0,o)),n.decodeValue(r.slice(o+1))],s=e.get(a)||[];s.push(c),e.set(a,s)}),e}var Rd=/%(\d[a-f0-9])/gi,Id={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function ks(i){return encodeURIComponent(i).replace(Rd,(n,e)=>Id[e]??n)}function Hi(i){return`${i}`}var ot=class i{map;encoder;updates=null;cloneFrom=null;constructor(n={}){if(this.encoder=n.encoder||new Eo,n.fromString){if(n.fromObject)throw new N(2805,!1);this.map=Nd(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(e=>{let t=n.fromObject[e],r=Array.isArray(t)?t.map(Hi):[Hi(t)];this.map.set(e,r)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let e=this.map.get(n);return e?e[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,e){return this.clone({param:n,value:e,op:"a"})}appendAll(n){let e=[];return Object.keys(n).forEach(t=>{let r=n[t];Array.isArray(r)?r.forEach(o=>{e.push({param:t,value:o,op:"a"})}):e.push({param:t,value:r,op:"a"})}),this.clone(e)}set(n,e){return this.clone({param:n,value:e,op:"s"})}delete(n,e){return this.clone({param:n,value:e,op:"d"})}toString(){return this.init(),this.keys().map(n=>{let e=this.encoder.encodeKey(n);return this.map.get(n).map(t=>e+"="+this.encoder.encodeValue(t)).join("&")}).filter(n=>n!=="").join("&")}clone(n){let e=new i({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(n),e}init(){if(this.map===null&&(this.map=new Map),this.cloneFrom!==null){this.cloneFrom.init();for(let[n,e]of this.cloneFrom.map.entries())this.map.set(n,e);this.updates.forEach(n=>{switch(n.op){case"a":case"s":let e=n.op==="a"?(this.map.get(n.param)||[]).slice():[];e.push(Hi(n.value)),this.map.set(n.param,e);break;case"d":if(n.value!==void 0){let t=(this.map.get(n.param)||[]).slice(),r=t.indexOf(Hi(n.value));r!==-1&&t.splice(r,1),t.length>0?this.map.set(n.param,t):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null}}};function Ad(i){switch(i){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Ps(i){return typeof ArrayBuffer<"u"&&i instanceof ArrayBuffer}function Fs(i){return typeof Blob<"u"&&i instanceof Blob}function Ls(i){return typeof FormData<"u"&&i instanceof FormData}function Td(i){return typeof URLSearchParams<"u"&&i instanceof URLSearchParams}var wo="Content-Type",Bs="Accept",zs="text/plain",Vs="application/json",Od=`${Vs}, ${zs}, */*`,ln=class i{url;body=null;headers;context;reportProgress=!1;reportUploadProgress=!1;reportDownloadProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(n,e,t,r){this.url=e,this.method=n.toUpperCase();let o;if(Ad(this.method)||r?(this.body=t!==void 0?t:null,o=r):o=t,o){if(this.reportProgress=!!o.reportProgress,this.reportUploadProgress=!!o.reportUploadProgress,this.reportDownloadProgress=!!o.reportDownloadProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new N(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer!==void 0&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new at,this.context??=new Do,!this.params)this.params=new ot,this.urlWithParams=e;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=e;else{let c=e,s="",d=e.indexOf("#");d!==-1&&(s=e.substring(d),c=e.substring(0,d));let u=c.indexOf("?"),f=u===-1?"?":u<c.length-1?"&":"";this.urlWithParams=c+f+a+s}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Ps(this.body)||Fs(this.body)||Ls(this.body)||Td(this.body)?this.body:this.body instanceof ot?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Ls(this.body)?null:Fs(this.body)?this.body.type||null:Ps(this.body)?null:typeof this.body=="string"?zs:this.body instanceof ot?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?Vs:null}clone(n={}){let e=n.method||this.method,t=n.url||this.url,r=n.responseType||this.responseType,o=n.keepalive??this.keepalive,a=n.priority||this.priority,c=n.cache||this.cache,s=n.mode||this.mode,d=n.redirect||this.redirect,u=n.credentials||this.credentials,f=n.referrer??this.referrer,v=n.integrity||this.integrity,D=n.referrerPolicy||this.referrerPolicy,A=n.transferCache??this.transferCache,k=n.timeout??this.timeout,H=n.body!==void 0?n.body:this.body,Le=n.withCredentials??this.withCredentials,pe=n.reportProgress??this.reportProgress,fe=n.reportUploadProgress??this.reportUploadProgress,In=n.reportDownloadProgress??this.reportDownloadProgress,ut=n.headers||this.headers,An=n.params||this.params,Tn=n.context??this.context;return n.setHeaders!==void 0&&(ut=Object.keys(n.setHeaders).reduce((Yt,ht)=>Yt.set(ht,n.setHeaders[ht]),ut)),n.setParams&&(An=Object.keys(n.setParams).reduce((Yt,ht)=>Yt.set(ht,n.setParams[ht]),An)),new i(e,t,H,{params:An,headers:ut,context:Tn,reportProgress:pe,reportUploadProgress:fe,reportDownloadProgress:In,responseType:r,withCredentials:Le,transferCache:A,keepalive:o,cache:c,priority:a,timeout:k,mode:s,redirect:d,credentials:u,referrer:f,integrity:v,referrerPolicy:D})}},Ot=(function(i){return i[i.Sent=0]="Sent",i[i.UploadProgress=1]="UploadProgress",i[i.ResponseHeader=2]="ResponseHeader",i[i.DownloadProgress=3]="DownloadProgress",i[i.Response=4]="Response",i[i.User=5]="User",i})(Ot||{}),Zn=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(n,e=200,t="OK"){this.headers=n.headers||new at,this.status=n.status!==void 0?n.status:e,this.statusText=n.statusText||t,this.url=n.url||null,this.redirected=n.redirected,this.responseType=n.responseType,this.ok=this.status>=200&&this.status<300}},xo=class i extends Zn{constructor(n={}){super(n)}type=Ot.ResponseHeader;clone(n={}){return new i({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},Qn=class i extends Zn{body;constructor(n={}){super(n),this.body=n.body!==void 0?n.body:null}type=Ot.Response;clone(n={}){return new i({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0,redirected:n.redirected??this.redirected,responseType:n.responseType??this.responseType})}},Tt=class extends Zn{name="HttpErrorResponse";message;error;ok=!1;constructor(n){super(n,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||"(unknown url)"}`:this.message=`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}},kd=200;var Pd=/^\)\]\}',?\n/,Zg=1024*1024,Fd=new b("",{factory:()=>null}),Ld=(()=>{class i{fetchImpl=l(Mo,{optional:!0})?.fetch??((...e)=>globalThis.fetch(...e));ngZone=l(O);destroyRef=l(Kt);maxResponseSize=l(Fd);handle(e){return new qt(t=>{let r=new AbortController,o=!1,a={next:s=>{s.type===Ot.Response&&(o=!0),t.next(s)},error:s=>{o=!0,t.error(s)},complete:()=>{o=!0,t.complete()}};this.doRequest(e,r.signal,a).then(No,s=>a.error(new Tt({error:s})));let c;return e.timeout&&(c=this.ngZone.runOutsideAngular(()=>setTimeout(()=>{r.signal.aborted||r.abort(new DOMException("signal timed out","TimeoutError"))},e.timeout))),()=>{c!==void 0&&clearTimeout(c),!o&&!r.signal.aborted&&r.abort()}})}async doRequest(e,t,r){let o=this.createRequestInit(e),a;try{let H=this.ngZone.runOutsideAngular(()=>this.fetchImpl(e.urlWithParams,g({signal:t},o)));Bd(H),r.next({type:Ot.Sent}),a=await H}catch(H){r.error(new Tt({error:H,status:H.status??0,statusText:H.statusText,url:e.urlWithParams,headers:H.headers}));return}let c=new at(a.headers),s=a.statusText,d=a.url||e.urlWithParams,u=a.status,f=null,v=e.reportProgress||e.reportDownloadProgress;if(v&&r.next(new xo({headers:c,status:u,statusText:s,url:d})),a.body){let H=a.headers.get(wo)??"",Le=a.headers.get("content-length"),pe=Le!==null?Number(Le):NaN;this.maxResponseSize!==null&&Number.isFinite(pe)&&pe>this.maxResponseSize&&(await a.body.cancel(),js(this.maxResponseSize));let fe=[],In=a.body.getReader(),ut=0,An,Tn,Yt=typeof Zone<"u"&&Zone.current,ht=!1;if(await this.ngZone.runOutsideAngular(async()=>{for(;;){if(this.destroyRef.destroyed){await In.cancel(),ht=!0;break}let{done:Xr,value:Kr}=await In.read();if(Xr)break;if(fe.push(Kr),ut+=Kr.length,this.maxResponseSize!==null&&ut>this.maxResponseSize&&(await In.cancel(),js(this.maxResponseSize)),v){Tn=e.responseType==="text"?(Tn??"")+(An??=Us(H)).decode(Kr,{stream:!0}):void 0;let za=()=>r.next({type:Ot.DownloadProgress,total:Number.isFinite(pe)?pe:void 0,loaded:ut,partialText:Tn});Yt?Yt.run(za):za()}}}),ht){r.complete();return}let nd=this.concatChunks(fe,ut);try{f=this.parseBody(e,nd,H,u)}catch(Xr){r.error(new Tt({error:Xr,headers:new at(a.headers),status:a.status,statusText:a.statusText,url:a.url||e.urlWithParams}));return}}u===0&&(u=f?kd:0);let D=u>=200&&u<300,A=a.redirected,k=a.type;D?(r.next(new Qn({body:f,headers:c,status:u,statusText:s,url:d,redirected:A,responseType:k})),r.complete()):r.error(new Tt({error:f,headers:c,status:u,statusText:s,url:d,redirected:A,responseType:k}))}parseBody(e,t,r,o){switch(e.responseType){case"json":let a=new TextDecoder().decode(t).replace(Pd,"");if(a==="")return null;try{return JSON.parse(a)}catch(c){if(o<200||o>=300)return a;throw c}case"text":return Us(r).decode(t);case"blob":return new Blob([t],{type:r});case"arraybuffer":return t.buffer}}createRequestInit(e){if(e.reportUploadProgress)throw new N(2824,!1);let t={},r;if(r=e.credentials,e.withCredentials&&(r="include"),e.headers.forEach((o,a)=>t[o]=a.join(",")),e.headers.has(Bs)||(t[Bs]=Od),!e.headers.has(wo)){let o=e.detectContentTypeHeader();o!==null&&(t[wo]=o)}return{body:e.serializeBody(),method:e.method,headers:t,credentials:r,keepalive:e.keepalive,cache:e.cache,priority:e.priority,mode:e.mode,redirect:e.redirect,referrer:e.referrer,integrity:e.integrity,referrerPolicy:e.referrerPolicy}}concatChunks(e,t){let r=new Uint8Array(t),o=0;for(let a of e)r.set(a,o),o+=a.length;return r}static \u0275fac=function(t){return new(t||i)};static \u0275prov=C({token:i,factory:i.\u0275fac})}return i})(),Mo=class{};function No(){}function Bd(i){i.then(No,No)}function js(i){throw new N(-2825,!1)}var jd=/charset=\s*["']?([^;"'\s]+)["']?/i;function Us(i){let n=i.match(jd);if(n!==null)try{return new TextDecoder(n[1])}catch{}return new TextDecoder}var Ud=new b("",{factory:()=>!0}),zd="XSRF-TOKEN",Vd=new b("",{factory:()=>zd}),Hd="X-XSRF-TOKEN",$d=new b("",{factory:()=>Hd}),Gd=(()=>{class i{cookieName=l(Vd);doc=l(w);lastCookieString="";lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=$n(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(t){return new(t||i)};static \u0275prov=C({token:i,factory:i.\u0275fac})}return i})(),Wd=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275prov=T({token:i,factory:function(t){let r=null;return t?r=new(t||i):r=E(Gd),r},providedIn:"root"})}return i})();function Yd(i,n){if(!l(Ud)||i.method==="GET"||i.method==="HEAD")return n(i);try{let r=l(cn).href,{origin:o}=new URL(r),{origin:a}=new URL(i.url,o);if(o!==a)return n(i)}catch{return n(i)}let e=l(Wd).getToken(),t=l($d);return e!=null&&!i.headers.has(t)&&(i=i.clone({headers:i.headers.set(t,e)})),n(i)}function qd(i,n){return n(i)}function Xd(i,n,e){return(t,r)=>ge(e,()=>n(t,o=>i(o,r)))}var Kd=new b("",{factory:()=>[Yd]}),Hs=new b(""),Zd=new b("",{factory:()=>!0});var Qd=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275prov=T({token:i,factory:function(t){let r=null;return t?r=new(t||i):r=E(Ld),r},providedIn:"root"})}return i})();var Jd=(()=>{class i{backend;injector;chain=null;pendingTasks=l(ts);contributeToStability=l(Zd);constructor(e,t){this.backend=e,this.injector=t}handle(e){if(this.chain===null){let r=this.injector.get($s,null,{skipSelf:!0}),o=r!==null&&this.backend===r,a=this.injector.get(Hs,[],o?{self:!0}:void 0),c=Array.from(new Set([...this.injector.get(Kd),...a]));this.chain=c.reduceRight((s,d)=>Xd(s,d,this.injector),qd)}let t=this.chain;if(this.contributeToStability){let r=this.pendingTasks.add();return Oe(()=>t(e,o=>this.backend.handle(o))).pipe(Xt(r))}else return Oe(()=>t(e,r=>this.backend.handle(r)))}static \u0275fac=function(t){return new(t||i)(E(Qd),E(de))};static \u0275prov=T({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),$s=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275prov=T({token:i,factory:function(t){let r=null;return t?r=new(t||i):r=E(Jd),r},providedIn:"root"})}return i})();function Co(i,n){return g({body:n},i)}var Ro=(()=>{class i{handler;constructor(e){this.handler=e}request(e,t,r={}){let o;if(e instanceof ln)o=e;else{let s;r.headers instanceof at?s=r.headers:s=new at(r.headers);let d;r.params&&(r.params instanceof ot?d=r.params:d=new ot({fromObject:r.params})),o=new ln(e,t,r.body!==void 0?r.body:null,{headers:s,context:r.context,params:d,reportProgress:r.reportProgress,reportUploadProgress:r.reportUploadProgress,reportDownloadProgress:r.reportDownloadProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let a=y(o).pipe(kn(s=>this.handler.handle(s)));if(e instanceof ln||r.observe==="events")return a;let c=a.pipe(le(s=>s instanceof Qn));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return c.pipe(B(s=>{if(s.body!==null&&!(s.body instanceof ArrayBuffer))throw new N(2806,!1);return s.body}));case"blob":return c.pipe(B(s=>{if(s.body!==null&&!(s.body instanceof Blob))throw new N(2807,!1);return s.body}));case"text":return c.pipe(B(s=>{if(s.body!==null&&typeof s.body!="string")throw new N(2808,!1);return s.body}));default:return c.pipe(B(s=>s.body))}case"response":return c;default:throw new N(2809,!1)}}delete(e,t={}){return this.request("DELETE",e,t)}get(e,t={}){return this.request("GET",e,t)}head(e,t={}){return this.request("HEAD",e,t)}jsonp(e,t){return this.request("JSONP",e,{params:new ot().append(t,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,t={}){return this.request("OPTIONS",e,t)}patch(e,t,r={}){return this.request("PATCH",e,Co(r,t))}post(e,t,r={}){return this.request("POST",e,Co(r,t))}put(e,t,r={}){return this.request("PUT",e,Co(r,t))}static \u0275fac=function(t){return new(t||i)(E($s))};static \u0275prov=T({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Gs=(()=>{class i{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(t){return new(t||i)(E(w))};static \u0275prov=T({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Io=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275prov=T({token:i,factory:function(t){let r=null;return t?r=new(t||i):r=E(nu),r},providedIn:"root"})}return i})(),nu=(()=>{class i extends Io{_doc=l(w);sanitize(e,t){if(t==null)return null;switch(e){case xe.NONE:return t;case xe.HTML:return rn(t,"HTML")?nn(t):ls(this._doc,String(t)).toString();case xe.STYLE:return rn(t,"Style")?nn(t):t;case xe.SCRIPT:if(rn(t,"Script"))return nn(t);throw new N(5200,!1);case xe.URL:return rn(t,"URL")?nn(t):cs(String(t));case xe.RESOURCE_URL:if(rn(t,"ResourceURL"))return nn(t);throw new N(-5201,!1);default:throw new N(5202,!1)}}bypassSecurityTrustHtml(e){return is(e)}bypassSecurityTrustStyle(e){return rs(e)}bypassSecurityTrustScript(e){return os(e)}bypassSecurityTrustUrl(e){return as(e)}bypassSecurityTrustResourceUrl(e){return ss(e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=C({token:i,factory:i.\u0275fac})}return i})();var M="primary",di=Symbol("RouteTitle"),Po=class{params;constructor(n){this.params=n||{}}has(n){return Object.hasOwn(this.params,n)}get(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e[0]:e}return null}getAll(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function mn(i){return new Po(i)}function Ao(i,n,e){for(let t=0;t<i.length;t++){let r=i[t],o=n[t];if(r[0]===":")e[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function ru(i,n,e){let t=e.path.split("/"),r=t.indexOf("**");if(r===-1){if(t.length>i.length||e.pathMatch==="full"&&(n.hasChildren()||t.length<i.length))return null;let s={},d=i.slice(0,t.length);return Ao(t,d,s)?{consumed:d,posParams:s}:null}if(r!==t.lastIndexOf("**"))return null;let o=t.slice(0,r),a=t.slice(r+1);if(o.length+a.length>i.length||e.pathMatch==="full"&&n.hasChildren()&&e.path!=="**")return null;let c={};return!Ao(o,i.slice(0,o.length),c)||!Ao(a,i.slice(i.length-a.length),c)?null:{consumed:i,posParams:c}}function Xi(i){return new Promise((n,e)=>{i.pipe(pt()).subscribe({next:t=>n(t),error:t=>e(t)})})}function ou(i,n){if(i.length!==n.length)return!1;for(let e=0;e<i.length;++e)if(!Xe(i[e],n[e]))return!1;return!0}function Xe(i,n){let e=i?Fo(i):void 0,t=n?Fo(n):void 0;if(!e||!t||e.length!=t.length)return!1;let r;for(let o=0;o<e.length;o++)if(r=e[o],!ec(i[r],n[r]))return!1;return!0}function Fo(i){return[...Object.keys(i),...Object.getOwnPropertySymbols(i)]}function ec(i,n){if(Array.isArray(i)&&Array.isArray(n)){if(i.length!==n.length)return!1;let e=[...i].sort(),t=[...n].sort();return e.every((r,o)=>t[o]===r)}else return i===n}function au(i){return i.length>0?i[i.length-1]:null}function Bt(i){return xi(i)?i:ro(i)?Ae(Promise.resolve(i)):y(i)}function tc(i){return xi(i)?Xi(i):Promise.resolve(i)}var su={exact:rc,subset:oc},nc={exact:cu,subset:lu,ignored:()=>!0},ic={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},Lo={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function Ys(i,n,e){return su[e.paths](i.root,n.root,e.matrixParams)&&nc[e.queryParams](i.queryParams,n.queryParams)&&!(e.fragment==="exact"&&i.fragment!==n.fragment)}function cu(i,n){return Xe(i,n)}function rc(i,n,e){if(!Pt(i.segments,n.segments)||!Wi(i.segments,n.segments,e)||i.numberOfChildren!==n.numberOfChildren)return!1;for(let t in n.children)if(!i.children[t]||!rc(i.children[t],n.children[t],e))return!1;return!0}function lu(i,n){return Object.keys(n).length<=Object.keys(i).length&&Object.keys(n).every(e=>ec(i[e],n[e]))}function oc(i,n,e){return ac(i,n,n.segments,e)}function ac(i,n,e,t){if(i.segments.length>e.length){let r=i.segments.slice(0,e.length);return!(!Pt(r,e)||n.hasChildren()||!Wi(r,e,t))}else if(i.segments.length===e.length){if(!Pt(i.segments,e)||!Wi(i.segments,e,t))return!1;for(let r in n.children)if(!i.children[r]||!oc(i.children[r],n.children[r],t))return!1;return!0}else{let r=e.slice(0,i.segments.length),o=e.slice(i.segments.length);return!Pt(i.segments,r)||!Wi(i.segments,r,t)||!i.children[M]?!1:ac(i.children[M],n,o,t)}}function Wi(i,n,e){return n.every((t,r)=>nc[e](i[r].parameters,t.parameters))}var He=class{root;queryParams;fragment;_queryParamMap;constructor(n=new P([],{}),e={},t=null){this.root=n,this.queryParams=e,this.fragment=t}get queryParamMap(){return this._queryParamMap??=mn(this.queryParams),this._queryParamMap}toString(){return hu.serialize(this)}},P=class{segments;children;parent=null;constructor(n,e){this.segments=n,this.children=e,Object.values(e).forEach(t=>t.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Yi(this)}},kt=class{path;parameters;_parameterMap;constructor(n,e){this.path=n,this.parameters=e}get parameterMap(){return this._parameterMap??=mn(this.parameters),this._parameterMap}toString(){return cc(this)}};function du(i,n){return Pt(i,n)&&i.every((e,t)=>Xe(e.parameters,n[t].parameters))}function Pt(i,n){return i.length!==n.length?!1:i.every((e,t)=>e.path===n[t].path)}function uu(i,n){let e=[];return Object.entries(i.children).forEach(([t,r])=>{t===M&&(e=e.concat(n(r,t)))}),Object.entries(i.children).forEach(([t,r])=>{t!==M&&(e=e.concat(n(r,t)))}),e}var or=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275prov=C({token:i,factory:()=>new Ft})}return i})(),Ft=class{parse(n){let e=new jo(n);return new He(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(n){let e=`/${Jn(n.root,!0)}`,t=fu(n.queryParams),r=typeof n.fragment=="string"?`#${mu(n.fragment)}`:"";return`${e}${t}${r}`}},hu=new Ft;function Yi(i){return i.segments.map(n=>cc(n)).join("/")}function Jn(i,n){if(!i.hasChildren())return Yi(i);if(n){let e=i.children[M]?Jn(i.children[M],!1):"",t=[];return Object.entries(i.children).forEach(([r,o])=>{r!==M&&t.push(`${r}:${Jn(o,!1)}`)}),t.length>0?`${e}(${t.join("//")})`:e}else{let e=uu(i,(t,r)=>r===M?[Jn(i.children[M],!1)]:[`${r}:${Jn(t,!1)}`]);return Object.keys(i.children).length===1&&i.children[M]!=null?`${Yi(i)}/${e[0]}`:`${Yi(i)}/(${e.join("//")})`}}function sc(i){return encodeURIComponent(i).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function $i(i){return sc(i).replace(/%3B/gi,";")}function mu(i){return encodeURI(i)}function Bo(i){return sc(i).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function qi(i){return decodeURIComponent(i)}function qs(i){return qi(i.replace(/\+/g,"%20"))}function cc(i){return`${Bo(i.path)}${pu(i.parameters)}`}function pu(i){return Object.entries(i).map(([n,e])=>`;${Bo(n)}=${Bo(e)}`).join("")}function fu(i){let n=Object.entries(i).map(([e,t])=>Array.isArray(t)?t.map(r=>`${$i(e)}=${$i(r)}`).join("&"):`${$i(e)}=${$i(t)}`).filter(e=>e);return n.length?`?${n.join("&")}`:""}var gu=/^[^\/()?;#]+/;function To(i){let n=i.match(gu);return n?n[0]:""}var vu=/^[^\/()?;=#]+/;function _u(i){let n=i.match(vu);return n?n[0]:""}var bu=/^[^=?&#]+/;function yu(i){let n=i.match(bu);return n?n[0]:""}var Su=/^[^&#]+/;function wu(i){let n=i.match(Su);return n?n[0]:""}var jo=class{url;remaining;constructor(n){this.url=n,this.remaining=n}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new P([],{}):new P([],this.parseChildren())}parseQueryParams(){let n={};if(this.consumeOptional("?"))do this.parseQueryParam(n);while(this.consumeOptional("&"));return n}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(n=0){if(n>50)throw new N(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0,n));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,n)),(e.length>0||Object.keys(t).length>0)&&(r[M]=new P(e,t)),r}parseSegment(){let n=To(this.remaining);if(n===""&&this.peekStartsWith(";"))throw new N(4009,!1);return this.capture(n),new kt(qi(n),this.parseMatrixParams())}parseMatrixParams(){let n={};for(;this.consumeOptional(";");)this.parseParam(n);return n}parseParam(n){let e=_u(this.remaining);if(!e)return;this.capture(e);let t="";if(this.consumeOptional("=")){let r=To(this.remaining);r&&(t=r,this.capture(t))}n[qi(e)]=qi(t)}parseQueryParam(n){let e=yu(this.remaining);if(!e)return;this.capture(e);let t="";if(this.consumeOptional("=")){let a=wu(this.remaining);a&&(t=a,this.capture(t))}let r=qs(e),o=qs(t);if(Object.hasOwn(n,r)){let a=n[r];Array.isArray(a)||(a=[a],n[r]=a),a.push(o)}else n[r]=o}parseParens(n,e){let t=Object.create(null);for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=To(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new N(4010,!1);let a;r.indexOf(":")>-1?(a=r.slice(0,r.indexOf(":")),this.capture(a),this.capture(":")):n&&(a=M);let c=this.parseChildren(e+1);t[a??M]=Object.keys(c).length===1&&c[M]?c[M]:new P([],c),this.consumeOptional("//")}return t}peekStartsWith(n){return this.remaining.startsWith(n)}consumeOptional(n){return this.peekStartsWith(n)?(this.remaining=this.remaining.substring(n.length),!0):!1}capture(n){if(!this.consumeOptional(n))throw new N(4011,!1)}};function lc(i){return i.segments.length>0?new P([],{[M]:i}):i}function dc(i){let n=Object.create(null);for(let[t,r]of Object.entries(i.children)){let o=dc(r);if(t===M&&o.segments.length===0&&o.hasChildren())for(let[a,c]of Object.entries(o.children))n[a]=c;else(o.segments.length>0||o.hasChildren())&&(n[t]=o)}let e=new P(i.segments,n);return Cu(e)}function Cu(i){if(i.numberOfChildren===1&&i.children[M]){let n=i.children[M];return new P(i.segments.concat(n.segments),n.children)}return i}function pn(i){return i instanceof He}function Du(i,n,e=null,t=null,r=new Ft){let o=uc(i);return hc(o,n,e,t,r)}function uc(i){let n;function e(o){let a={};for(let s of o.children){let d=e(s);a[s.outlet]=d}let c=new P(o.url,a);return o===i&&(n=c),c}let t=e(i.root),r=lc(t);return n??r}function hc(i,n,e,t,r){let o=i;for(;o.parent;)o=o.parent;if(n.length===0)return Oo(o,o,o,e,t,r);let a=Eu(n);if(a.toRoot())return Oo(o,o,new P([],{}),e,t,r);let c=xu(a,o,i),s=c.processChildren?ti(c.segmentGroup,c.index,a.commands):pc(c.segmentGroup,c.index,a.commands);return Oo(o,c.segmentGroup,s,e,t,r)}function Ki(i){return typeof i=="object"&&i!=null&&!i.outlets&&!i.segmentPath}function ri(i){return typeof i=="object"&&i!=null&&i.outlets}function Xs(i,n,e){i||="\u0275";let t=new He;return t.queryParams={[i]:n},e.parse(e.serialize(t)).queryParams[i]}function Oo(i,n,e,t,r,o){let a={};for(let[d,u]of Object.entries(t??{}))a[d]=Array.isArray(u)?u.map(f=>Xs(d,f,o)):Xs(d,u,o);let c;i===n?c=e:c=mc(i,n,e);let s=lc(dc(c));return new He(s,a,r)}function mc(i,n,e){let t=Object.create(null);return Object.entries(i.children).forEach(([r,o])=>{o===n?t[r]=e:t[r]=mc(o,n,e)}),new P(i.segments,t)}var Zi=class{isAbsolute;numberOfDoubleDots;commands;constructor(n,e,t){if(this.isAbsolute=n,this.numberOfDoubleDots=e,this.commands=t,n&&t.length>0&&Ki(t[0]))throw new N(4003,!1);let r=t.find(ri);if(r&&r!==au(t))throw new N(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function Eu(i){if(typeof i[0]=="string"&&i.length===1&&i[0]==="/")return new Zi(!0,0,i);let n=0,e=!1,t=i.reduce((r,o,a)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let c={};return Object.entries(o.outlets).forEach(([s,d])=>{c[s]=typeof d=="string"?d.split("/"):d}),[...r,{outlets:c}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:a===0?(o.split("/").forEach((c,s)=>{s==0&&c==="."||(s==0&&c===""?e=!0:c===".."?n++:c!=""&&r.push(c))}),r):[...r,o]},[]);return new Zi(e,n,t)}var un=class{segmentGroup;processChildren;index;constructor(n,e,t){this.segmentGroup=n,this.processChildren=e,this.index=t}};function xu(i,n,e){if(i.isAbsolute)return new un(n,!0,0);if(!e)return new un(n,!1,NaN);if(e.parent===null)return new un(e,!0,0);let t=Ki(i.commands[0])?0:1,r=e.segments.length-1+t;return Mu(e,r,i.numberOfDoubleDots)}function Mu(i,n,e){let t=i,r=n,o=e;for(;o>r;){if(o-=r,t=t.parent,!t)throw new N(4005,!1);r=t.segments.length}return new un(t,!1,r-o)}function Nu(i){return ri(i[0])?i[0].outlets:{[M]:i}}function pc(i,n,e){if(i??=new P([],{}),i.segments.length===0&&i.hasChildren())return ti(i,n,e);let t=Ru(i,n,e),r=e.slice(t.commandIndex);if(t.match&&t.pathIndex<i.segments.length){let o=new P(i.segments.slice(0,t.pathIndex),{});return o.children[M]=new P(i.segments.slice(t.pathIndex),i.children),ti(o,0,r)}else return t.match&&r.length===0?new P(i.segments,{}):t.match&&!i.hasChildren()?Uo(i,n,e):t.match?ti(i,0,r):Uo(i,n,e)}function ti(i,n,e){if(e.length===0)return new P(i.segments,{});{let t=Nu(e),r=Object.create(null);if(Object.keys(t).some(o=>o!==M)&&i.children[M]&&i.numberOfChildren===1&&i.children[M].segments.length===0){let o=ti(i.children[M],n,e);return new P(i.segments,o.children)}return Object.entries(t).forEach(([o,a])=>{typeof a=="string"&&(a=[a]),a!==null&&(r[o]=pc(i.children[o],n,a))}),Object.entries(i.children).forEach(([o,a])=>{t[o]===void 0&&(r[o]=a)}),new P(i.segments,r)}}function Ru(i,n,e){let t=0,r=n,o={match:!1,pathIndex:0,commandIndex:0};for(;r<i.segments.length;){if(t>=e.length)return o;let a=i.segments[r],c=e[t];if(ri(c))break;let s=`${c}`,d=t<e.length-1?e[t+1]:null;if(r>0&&s===void 0)break;if(s&&d&&typeof d=="object"&&d.outlets===void 0){if(!Zs(s,d,a))return o;t+=2}else{if(!Zs(s,{},a))return o;t++}r++}return{match:!0,pathIndex:r,commandIndex:t}}function Uo(i,n,e){let t=i.segments.slice(0,n),r=0;for(;r<e.length;){let o=e[r];if(ri(o)){let s=Iu(o.outlets);return new P(t,s)}if(r===0&&Ki(e[0])){let s=i.segments[n];t.push(new kt(s.path,Ks(e[0]))),r++;continue}let a=ri(o)?o.outlets[M]:`${o}`,c=r<e.length-1?e[r+1]:null;a&&c&&Ki(c)?(t.push(new kt(a,Ks(c))),r+=2):(t.push(new kt(a,{})),r++)}return new P(t,{})}function Iu(i){let n={};return Object.entries(i).forEach(([e,t])=>{typeof t=="string"&&(t=[t]),t!==null&&(n[e]=Uo(new P([],{}),0,t))}),n}function Ks(i){let n={};return Object.entries(i).forEach(([e,t])=>n[e]=`${t}`),n}function Zs(i,n,e){return i==e.path&&Xe(n,e.parameters)}var ni="imperative",ce=(function(i){return i[i.NavigationStart=0]="NavigationStart",i[i.NavigationEnd=1]="NavigationEnd",i[i.NavigationCancel=2]="NavigationCancel",i[i.NavigationError=3]="NavigationError",i[i.RoutesRecognized=4]="RoutesRecognized",i[i.ResolveStart=5]="ResolveStart",i[i.ResolveEnd=6]="ResolveEnd",i[i.GuardsCheckStart=7]="GuardsCheckStart",i[i.GuardsCheckEnd=8]="GuardsCheckEnd",i[i.RouteConfigLoadStart=9]="RouteConfigLoadStart",i[i.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",i[i.ChildActivationStart=11]="ChildActivationStart",i[i.ChildActivationEnd=12]="ChildActivationEnd",i[i.ActivationStart=13]="ActivationStart",i[i.ActivationEnd=14]="ActivationEnd",i[i.Scroll=15]="Scroll",i[i.NavigationSkipped=16]="NavigationSkipped",i})(ce||{}),Pe=class{id;url;constructor(n,e){this.id=n,this.url=e}},fn=class extends Pe{type=ce.NavigationStart;navigationTrigger;restoredState;constructor(n,e,t="imperative",r=null){super(n,e),this.navigationTrigger=t,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},_t=class extends Pe{urlAfterRedirects;type=ce.NavigationEnd;constructor(n,e,t){super(n,e),this.urlAfterRedirects=t}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},be=(function(i){return i[i.Redirect=0]="Redirect",i[i.SupersededByNewNavigation=1]="SupersededByNewNavigation",i[i.NoDataFromResolver=2]="NoDataFromResolver",i[i.GuardRejected=3]="GuardRejected",i[i.Aborted=4]="Aborted",i})(be||{}),Qi=(function(i){return i[i.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",i[i.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",i})(Qi||{}),ze=class extends Pe{reason;code;type=ce.NavigationCancel;constructor(n,e,t,r){super(n,e),this.reason=t,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function fc(i){return i instanceof ze&&(i.code===be.Redirect||i.code===be.SupersededByNewNavigation)}var bt=class extends Pe{reason;code;type=ce.NavigationSkipped;constructor(n,e,t,r){super(n,e),this.reason=t,this.code=r}},gn=class extends Pe{error;target;type=ce.NavigationError;constructor(n,e,t,r){super(n,e),this.error=t,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Ji=class extends Pe{urlAfterRedirects;state;type=ce.RoutesRecognized;constructor(n,e,t,r){super(n,e),this.urlAfterRedirects=t,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},zo=class extends Pe{urlAfterRedirects;state;type=ce.GuardsCheckStart;constructor(n,e,t,r){super(n,e),this.urlAfterRedirects=t,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Vo=class extends Pe{urlAfterRedirects;state;shouldActivate;type=ce.GuardsCheckEnd;constructor(n,e,t,r,o){super(n,e),this.urlAfterRedirects=t,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Ho=class extends Pe{urlAfterRedirects;state;type=ce.ResolveStart;constructor(n,e,t,r){super(n,e),this.urlAfterRedirects=t,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},$o=class extends Pe{urlAfterRedirects;state;type=ce.ResolveEnd;constructor(n,e,t,r){super(n,e),this.urlAfterRedirects=t,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Go=class{route;type=ce.RouteConfigLoadStart;constructor(n){this.route=n}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Wo=class{route;type=ce.RouteConfigLoadEnd;constructor(n){this.route=n}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Yo=class{snapshot;type=ce.ChildActivationStart;constructor(n){this.snapshot=n}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},qo=class{snapshot;type=ce.ChildActivationEnd;constructor(n){this.snapshot=n}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Xo=class{snapshot;type=ce.ActivationStart;constructor(n){this.snapshot=n}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Ko=class{snapshot;type=ce.ActivationEnd;constructor(n){this.snapshot=n}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var vn=class{},oi=class{},_n=class{url;navigationBehaviorOptions;constructor(n,e){this.url=n,this.navigationBehaviorOptions=e}};function Au(i){return!(i instanceof vn)&&!(i instanceof _n)&&!(i instanceof oi)}var Zo=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(n){this.rootInjector=n,this.children=new ui(this.rootInjector)}},ui=(()=>{class i{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,t){let r=this.getOrCreateContext(e);r.outlet=t,this.contexts.set(e,r)}onChildOutletDestroyed(e){let t=this.getContext(e);t&&(t.outlet=null,t.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let t=this.getContext(e);return t||(t=new Zo(this.rootInjector),this.contexts.set(e,t)),t}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(t){return new(t||i)(E(de))};static \u0275prov=T({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),er=class{_root;constructor(n){this._root=n}get root(){return this._root.value}parent(n){let e=this.pathFromRoot(n);return e.length>1?e[e.length-2]:null}children(n){let e=Qo(n,this._root);return e?e.children.map(t=>t.value):[]}firstChild(n){let e=Qo(n,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(n){let e=Jo(n,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==n)}pathFromRoot(n){return Jo(n,this._root).map(e=>e.value)}};function Qo(i,n){if(i===n.value)return n;for(let e of n.children){let t=Qo(i,e);if(t)return t}return null}function Jo(i,n){if(i===n.value)return[n];for(let e of n.children){let t=Jo(i,e);if(t.length)return t.unshift(n),t}return[]}var Ne=class{value;children;constructor(n,e){this.value=n,this.children=e}toString(){return`TreeNode(${this.value})`}};function dn(i){let n={};return i&&i.children.forEach(e=>n[e.value.outlet]=e),n}var tr=class extends er{snapshot;constructor(n,e){super(n),this.snapshot=e,da(this,n)}toString(){return this.snapshot.toString()}};function gc(i,n){let e=Tu(i,n),t=new Se([new kt("",{})]),r=new Se({}),o=new Se({}),a=new Se({}),c=new Se(""),s=new Lt(t,r,a,c,o,M,i,e.root);return s.snapshot=e.root,new tr(new Ne(s,[]),e)}function Tu(i,n){let e={},t={},r={},a=new ai([],e,r,"",t,M,i,null,{},n);return new nr("",new Ne(a,[]))}var Lt=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;resources;_localInjector;pending;paramsSignal;queryParamsSignal;paramMapSignal;queryParamMapSignal;fragmentSignal;dataSignal;constructor(n,e,t,r,o,a,c,s){this.urlSubject=n,this.paramsSubject=e,this.queryParamsSubject=t,this.fragmentSubject=r,this.dataSubject=o,this.outlet=a,this.component=c,this._futureSnapshot=s,this.title=this.dataSubject?.pipe(B(d=>d[di]))??y(void 0),this.url=n,this.params=e,this.queryParams=t,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(B(n=>mn(n))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(B(n=>mn(n))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}_setPending(n){this._futureSnapshot=n,this.pending?.set(!0)}},Ou="always";function la(i,n,e){let t,{routeConfig:r}=i;return n!==null&&(e==="always"||r?.path===""||!n.component&&!n.routeConfig?.loadComponent)?t={params:g(g({},n.params),i.params),data:g(g({},n.data),i.data),resolve:g(g(g(g({},i.data),n.data),r?.data),i._resolvedData)}:t={params:g({},i.params),data:g({},i.data),resolve:g(g({},i.data),i._resolvedData??{})},r&&_c(r)&&(t.resolve[di]=r.title),t}var ai=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;resources;get title(){return this.data?.[di]}constructor(n,e,t,r,o,a,c,s,d,u){this.url=n,this.params=e,this.queryParams=t,this.fragment=r,this.data=o,this.outlet=a,this.component=c,this.routeConfig=s,this._resolve=d,this._environmentInjector=u}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=mn(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=mn(this.queryParams),this._queryParamMap}toString(){let n=this.url.map(t=>t.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${n}', path:'${e}')`}},nr=class extends er{url;constructor(n,e){super(e),this.url=n,da(this,e)}toString(){return vc(this._root)}};function da(i,n){n.value._routerState=i,n.children.forEach(e=>da(i,e))}function vc(i){let n=i.children.length>0?` { ${i.children.map(vc).join(", ")} } `:"";return`${i.value}${n}`}function ko(i){if(i.snapshot){let n=i.snapshot,e=i._futureSnapshot;i.snapshot=e,Xe(n.queryParams,e.queryParams)||i.queryParamsSubject.next(e.queryParams),n.fragment!==e.fragment&&i.fragmentSubject.next(e.fragment),Xe(n.params,e.params)||i.paramsSubject.next(e.params),ou(n.url,e.url)||i.urlSubject.next(e.url),Xe(n.data,e.data)||i.dataSubject.next(e.data)}else i.snapshot=i._futureSnapshot,i.dataSubject.next(i._futureSnapshot.data)}function ea(i,n){let e=Xe(i.params,n.params)&&du(i.url,n.url),t=!i.parent!=!n.parent;return e&&!t&&(!i.parent||ea(i.parent,n.parent))}function _c(i){return typeof i.title=="string"||i.title===null}var ku=new b(""),bc=(()=>{class i{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=M;activateEvents=new re;deactivateEvents=new re;attachEvents=new re;detachEvents=new re;routerOutletData=zn();parentContexts=l(ui);location=l(We);changeDetector=l(Ue);inputBinder=l(ar,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:t,previousValue:r}=e.name;if(t)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new N(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new N(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new N(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,t){this.activated=e,this._activatedRoute=t,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this,this.location.injector),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,t){if(this.isActivated)throw new N(4013,!1);this._activatedRoute=e;let r=this.location,a=e.snapshot.component,c=this.parentContexts.getOrCreateContext(this.name).children,s=new ta(e,c,r.injector,this.routerOutletData);this.activated=r.createComponent(a,{index:r.length,injector:s,environmentInjector:t}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this,this.location.injector),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=V({type:i,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[tn]})}return i})(),ta=class{route;childContexts;parent;outletData;constructor(n,e,t,r){this.route=n,this.childContexts=e,this.parent=t,this.outletData=r}get(n,e){return n===Lt?this.route:n===ui?this.childContexts:n===ku?this.outletData:this.parent.get(n,e)}},ar=new b("");var yc=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(t,r){t&1&&q(0,"router-outlet")},dependencies:[bc],encapsulation:2,changeDetection:1})}return i})();function ua(i){let n=i.children&&i.children.map(ua),e=n?Y(g({},i),{children:n}):g({},i);return!e.component&&!e.loadComponent&&(n||e.loadChildren)&&e.outlet&&e.outlet!==M&&(e.component=yc),e}function Pu(i,n,e){let t=new Set,r=si(i,n._root,e?e._root:void 0,t);return{newlyCreatedRoutes:t,state:new tr(r,n)}}function si(i,n,e,t){if(e&&i.shouldReuseRoute(n.value,e.value.snapshot)){let r=e.value;r._setPending(n.value);let o=Fu(i,n,e,t);return new Ne(r,o)}else{if(i.shouldAttach(n.value)){let a=i.retrieve(n.value);if(a!==null){let c=a.route;return c.value._setPending(n.value),c.children=n.children.map(s=>si(i,s,void 0,t)),c}}let r=Lu(n.value);r._setPending(n.value),t.add(r);let o=n.children.map(a=>si(i,a,void 0,t));return new Ne(r,o)}}function Fu(i,n,e,t){return n.children.map(r=>{for(let o of e.children)if(i.shouldReuseRoute(r.value,o.value.snapshot))return si(i,r,o,t);return si(i,r,void 0,t)})}function Lu(i){return new Lt(new Se(i.url),new Se(i.params),new Se(i.queryParams),new Se(i.fragment),new Se(i.data),i.outlet,i.component,i)}var ci=class{redirectTo;navigationBehaviorOptions;constructor(n,e){this.redirectTo=n,this.navigationBehaviorOptions=e}},Sc="ngNavigationCancelingError";function ir(i,n){let{redirectTo:e,navigationBehaviorOptions:t}=pn(n)?{redirectTo:n,navigationBehaviorOptions:void 0}:n,r=wc(!1,be.Redirect);return r.url=e,r.navigationBehaviorOptions=t,r}function wc(i,n){let e=new Error(`NavigationCancelingError: ${i||""}`);return e[Sc]=!0,e.cancellationCode=n,e}function Bu(i){return Cc(i)&&pn(i.url)}function Cc(i){return!!i&&i[Sc]}var na=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(n,e,t,r,o){this.routeReuseStrategy=n,this.futureState=e,this.currState=t,this.forwardEvent=r,this.inputBindingEnabled=o}activate(n){let e=this.futureState._root,t=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,t,n),ko(this.futureState.root),this.activateChildRoutes(e,t,n)}deactivateChildRoutes(n,e,t){let r=dn(e);n.children.forEach(o=>{let a=o.value.outlet;this.deactivateRoutes(o,r[a],t),delete r[a]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,t)})}deactivateRoutes(n,e,t){let r=n.value,o=e?e.value:null;if(r===o)if(r.component){let a=t.getContext(r.outlet);a&&this.deactivateChildRoutes(n,e,a.children)}else this.deactivateChildRoutes(n,e,t);else o&&this.deactivateRouteAndItsChildren(e,t)}deactivateRouteAndItsChildren(n,e){n.value.component&&this.routeReuseStrategy.shouldDetach(n.value.snapshot)?this.detachAndStoreRouteSubtree(n,e):this.deactivateRouteAndOutlet(n,e)}detachAndStoreRouteSubtree(n,e){let t=e.getContext(n.value.outlet),r=t&&n.value.component?t.children:e,o=dn(n);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);if(t&&t.outlet){let a=t.outlet.detach(),c=t.children.onOutletDeactivated();this.routeReuseStrategy.store(n.value.snapshot,{componentRef:a,route:n,contexts:c})}}deactivateRouteAndOutlet(n,e){let t=e.getContext(n.value.outlet),r=t&&n.value.component?t.children:e,o=dn(n);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);t&&(t.outlet&&(t.outlet.deactivate(),t.children.onOutletDeactivated()),t.attachRef=null,t.route=null),n.value._localInjector?.destroy()}activateChildRoutes(n,e,t){let r=dn(e);n.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],t),this.forwardEvent(new Ko(o.value.snapshot))}),n.children.length&&this.forwardEvent(new qo(n.value.snapshot))}activateRoutes(n,e,t){let r=n.value,o=e?e.value:null;if(ko(r),r===o)if(r.component){let a=t.getOrCreateContext(r.outlet);this.activateChildRoutes(n,e,a.children)}else this.activateChildRoutes(n,e,t);else if(r.component){let a=t.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let c=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),a.children.onOutletReAttached(c.contexts),a.attachRef=c.componentRef,a.route=c.route.value,a.outlet&&a.outlet.attach(c.componentRef,c.route.value),ko(c.route.value),this.activateChildRoutes(n,null,a.children)}else a.attachRef=null,a.route=r,a.outlet&&a.outlet.activateWith(r,a.injector),this.activateChildRoutes(n,null,a.children)}else this.activateChildRoutes(n,null,t)}},rr=class{path;route;constructor(n){this.path=n,this.route=this.path[this.path.length-1]}},hn=class{component;route;constructor(n,e){this.component=n,this.route=e}};function ju(i,n,e){let t=i._root,r=n?n._root:null;return ei(t,r,e,[t.value])}function Uu(i){let n=i.routeConfig?i.routeConfig.canActivateChild:null;return!n||n.length===0?null:{node:i,guards:n}}function yn(i,n){let e=Symbol(),t=n.get(i,e);return t===e?typeof i=="function"&&!Xa(i)?i:n.get(i):t}function ei(i,n,e,t,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=dn(n);return i.children.forEach(a=>{zu(a,o[a.value.outlet],e,t.concat([a.value]),r),delete o[a.value.outlet]}),Object.entries(o).forEach(([a,c])=>ii(c,e.getContext(a),e,r)),r}function zu(i,n,e,t,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=i.value,a=n?n.value:null,c=e?e.getContext(i.value.outlet):null;if(a&&o.routeConfig===a.routeConfig){let s=Vu(a,o,o.routeConfig.runGuardsAndResolvers);s?r.canActivateChecks.push(new rr(t)):(o.data=a.data,o._resolvedData=a._resolvedData),o.component?ei(i,n,c?c.children:null,t,r):ei(i,n,e,t,r),s&&c&&c.outlet&&c.outlet.isActivated&&r.canDeactivateChecks.push(new hn(c.outlet.component,a))}else a&&ii(n,c,e,r),r.canActivateChecks.push(new rr(t)),o.component?ei(i,null,c?c.children:null,t,r):ei(i,null,e,t,r);return r}function Vu(i,n,e){if(typeof e=="function")return ge(n._environmentInjector,()=>e(i,n));switch(e){case"pathParamsChange":return!Pt(i.url,n.url);case"pathParamsOrQueryParamsChange":return!Pt(i.url,n.url)||!Xe(i.queryParams,n.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!ea(i,n)||!Xe(i.queryParams,n.queryParams);default:return!ea(i,n)}}function ii(i,n,e,t){let r=dn(i),o=i.value;Object.entries(r).forEach(([a,c])=>{o.component?n?ii(c,n.children.getContext(a),n.children,t):ii(c,null,null,t):ii(c,e?e.getContext(a):null,e,t)}),o.component?n&&n.outlet&&n.outlet.isActivated?t.canDeactivateChecks.push(new hn(n.outlet.component,o)):t.canDeactivateChecks.push(new hn(null,o)):t.canDeactivateChecks.push(new hn(null,o))}function hi(i){return typeof i=="function"}function Hu(i){return typeof i=="boolean"}function $u(i){return i&&hi(i.canLoad)}function Gu(i){return i&&hi(i.canActivate)}function Wu(i){return i&&hi(i.canActivateChild)}function Yu(i){return i&&hi(i.canDeactivate)}function qu(i){return i&&hi(i.canMatch)}function Dc(i){return i instanceof Va||i?.name==="EmptyError"}var Gi=Symbol("INITIAL_VALUE");function bn(){return ie(i=>Ha(i.map(n=>n.pipe(Ge(1),Be(Gi)))).pipe(B(n=>{for(let e of n)if(e!==!0){if(e===Gi)return Gi;if(e===!1||Xu(e))return e}return!0}),le(n=>n!==Gi),Ge(1)))}function Xu(i){return pn(i)||i instanceof ci}function Ec(i){return i.aborted?y(void 0).pipe(Ge(1)):new qt(n=>{let e=()=>{n.next(),n.complete()};return i.addEventListener("abort",e),()=>i.removeEventListener("abort",e)})}function xc(i){return we(Ec(i))}function Ku(i){return mt(n=>{let{targetSnapshot:e,currentSnapshot:t,guards:{canActivateChecks:r,canDeactivateChecks:o}}=n;return o.length===0&&r.length===0?y(Y(g({},n),{guardsResult:!0})):Zu(o,e,t).pipe(mt(a=>a&&Hu(a)?Qu(e,r,i):y(a)),B(a=>Y(g({},n),{guardsResult:a})))})}function Zu(i,n,e){return Ae(i).pipe(mt(t=>ih(t.component,t.route,e,n)),pt(t=>t!==!0,!0))}function Qu(i,n,e){return Ae(n).pipe(kn(t=>$a(eh(t.route.parent,e),Ju(t.route,e),nh(i,t.path),th(i,t.route))),pt(t=>t!==!0,!0))}function Ju(i,n){return i!==null&&n&&n(new Xo(i)),y(!0)}function eh(i,n){return i!==null&&n&&n(new Yo(i)),y(!0)}function th(i,n){let e=n.routeConfig?n.routeConfig.canActivate:null;if(!e||e.length===0)return y(!0);let t=e.map(r=>Mi(()=>{let o=n._environmentInjector,a=yn(r,o),c=Gu(a)?a.canActivate(n,i):ge(o,()=>a(n,i));return Bt(c).pipe(pt())}));return y(t).pipe(bn())}function nh(i,n){let e=n[n.length-1],r=n.slice(0,n.length-1).reverse().map(o=>Uu(o)).filter(o=>o!==null).map(o=>Mi(()=>{let a=o.guards.map(c=>{let s=o.node._environmentInjector,d=yn(c,s),u=Wu(d)?d.canActivateChild(e,i):ge(s,()=>d(e,i));return Bt(u).pipe(pt())});return y(a).pipe(bn())}));return y(r).pipe(bn())}function ih(i,n,e,t){let r=n&&n.routeConfig?n.routeConfig.canDeactivate:null;if(!r||r.length===0)return y(!0);let o=r.map(a=>{let c=n._environmentInjector,s=yn(a,c),d=Yu(s)?s.canDeactivate(i,n,e,t):ge(c,()=>s(i,n,e,t));return Bt(d).pipe(pt())});return y(o).pipe(bn())}function rh(i,n,e,t,r){let o=n.canLoad;if(o===void 0||o.length===0)return y(!0);let a=o.map(c=>{let s=yn(c,i),d=$u(s)?s.canLoad(n,e):ge(i,()=>s(n,e)),u=Bt(d);return r?u.pipe(xc(r)):u});return y(a).pipe(bn(),Mc(t))}function Mc(i){return Zr(se(n=>{if(typeof n!="boolean")throw ir(i,n)}),B(n=>n===!0))}function oh(i,n,e,t,r,o){let a=n.canMatch;if(!a||a.length===0)return y(!0);let c=a.map(s=>{let d=yn(s,i),u=qu(d)?d.canMatch(n,e,r):ge(i,()=>d(n,e,r));return Bt(u).pipe(xc(o))});return y(c).pipe(bn(),Mc(t))}var st=class i extends Error{segmentGroup;constructor(n){super(),this.segmentGroup=n||null,Object.setPrototypeOf(this,i.prototype)}},li=class i extends Error{urlTree;constructor(n){super(),this.urlTree=n,Object.setPrototypeOf(this,i.prototype)}};function ah(i){throw new N(4e3,!1)}function sh(i){throw wc(!1,be.GuardRejected)}var ia=class{urlSerializer;urlTree;constructor(n,e){this.urlSerializer=n,this.urlTree=e}async lineralizeSegments(n,e){let t=[],r=e.root;for(;;){if(t=t.concat(r.segments),r.numberOfChildren===0)return t;if(r.numberOfChildren>1||!r.children[M])throw ah(`${n.redirectTo}`);r=r.children[M]}}async applyRedirectCommands(n,e,t,r,o){let a=await ch(e,r,o);if(a instanceof He)throw new li(a);let c=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),n,t);if(a[0]==="/")throw new li(c);return c}applyRedirectCreateUrlTree(n,e,t,r){let o=this.createSegmentGroup(n,e.root,t,r);return new He(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(n,e){let t={};return Object.entries(n).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let c=o.substring(1);t[r]=e[c]}else t[r]=o}),t}createSegmentGroup(n,e,t,r){let o=this.createSegments(n,e.segments,t,r),a=Object.create(null);return Object.entries(e.children).forEach(([c,s])=>{a[c]=this.createSegmentGroup(n,s,t,r)}),new P(o,a)}createSegments(n,e,t,r){return e.map(o=>o.path[0]===":"?this.findPosParam(n,o,r):this.findOrReturn(o,t))}findPosParam(n,e,t){let r=t[e.path.substring(1)];if(!r)throw new N(4001,!1);return r}findOrReturn(n,e){let t=0;for(let r of e){if(r.path===n.path)return e.splice(t),r;t++}return n}};function ch(i,n,e){if(typeof i=="string")return Promise.resolve(i);let t=i;return Xi(Bt(ge(e,()=>t(n))))}function lh(i,n){return i.providers&&!i._injector&&(i._injector=ao(i.providers,n,`Route: ${i.path}`)),i._injector??n}function Ve(i){return i.outlet||M}function dh(i,n){let e=i.filter(t=>Ve(t)===n);return e.push(...i.filter(t=>Ve(t)!==n)),e}var ra={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function Nc(i){return{routeConfig:i.routeConfig,url:i.url,params:i.params,queryParams:i.queryParams,fragment:i.fragment,data:i.data,outlet:i.outlet,title:i.title,paramMap:i.paramMap,queryParamMap:i.queryParamMap}}function uh(i,n,e,t,r,o,a){let c=Rc(i,n,e);if(!c.matched)return y(c);let s=Nc(o(c));return t=lh(n,t),oh(t,n,e,r,s,a).pipe(B(d=>d===!0?c:g({},ra)))}function Rc(i,n,e){if(n.path==="")return n.pathMatch==="full"&&(i.hasChildren()||e.length>0)?g({},ra):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(n.matcher||ru)(e,i,n);if(!r)return g({},ra);let o={};Object.entries(r.posParams??{}).forEach(([c,s])=>{o[c]=s.path});let a=r.consumed.length>0?g(g({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:a,positionalParamSegments:r.posParams??{}}}function Qs(i,n,e,t,r){return e.length>0&&ph(i,e,t,r)?{segmentGroup:new P(n,mh(t,new P(e,i.children))),slicedSegments:[]}:e.length===0&&fh(i,e,t)?{segmentGroup:new P(i.segments,hh(i,e,t,i.children)),slicedSegments:e}:{segmentGroup:new P(i.segments,i.children),slicedSegments:e}}function hh(i,n,e,t){let r={};for(let o of e)if(sr(i,n,o)&&!t[Ve(o)]){let a=new P([],{});r[Ve(o)]=a}return g(g({},t),r)}function mh(i,n){let e={};e[M]=n;for(let t of i)if(t.path===""&&Ve(t)!==M){let r=new P([],{});e[Ve(t)]=r}return e}function ph(i,n,e,t){return e.some(r=>!sr(i,n,r)||!(Ve(r)!==M)?!1:!(t!==void 0&&Ve(r)===t))}function fh(i,n,e){return e.some(t=>sr(i,n,t))}function sr(i,n,e){return(i.hasChildren()||n.length>0)&&e.pathMatch==="full"?!1:e.path===""}function gh(i,n,e){return n.length===0&&!i.children[e]}var oa=class{};async function vh(i,n,e,t,r,o,a,c){return new aa(i,n,e,t,r,a,o,c).recognize()}var _h=31,aa=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(n,e,t,r,o,a,c,s){this.injector=n,this.configLoader=e,this.rootComponentType=t,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=a,this.urlSerializer=c,this.abortSignal=s,this.applyRedirects=new ia(this.urlSerializer,this.urlTree)}noMatchError(n){return new N(4002,`'${n.segmentGroup}'`)}async recognize(){let n=Qs(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:t}=await this.match(n),r=new Ne(t,e),o=new nr("",r),a=Du(t,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(a),{state:o,tree:a}}async match(n){let e=new ai([],Object.freeze({}),Object.freeze(g({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),M,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,n,M,e),rootSnapshot:e}}catch(t){if(t instanceof li)return this.urlTree=t.urlTree,this.match(t.urlTree.root);throw t instanceof st?this.noMatchError(t):t}}async processSegmentGroup(n,e,t,r,o){if(t.segments.length===0&&t.hasChildren())return this.processChildren(n,e,t,o);let a=await this.processSegment(n,e,t,t.segments,r,!0,o);return a instanceof Ne?[a]:[]}async processChildren(n,e,t,r){let o=[];for(let s of Object.keys(t.children))s==="primary"?o.unshift(s):o.push(s);let a=[];for(let s of o){let d=t.children[s],u=dh(e,s),f=await this.processSegmentGroup(n,u,d,s,r);a.push(...f)}let c=Ic(a);return bh(c),c}async processSegment(n,e,t,r,o,a,c){for(let s of e)try{return await this.processSegmentAgainstRoute(s._injector??n,e,s,t,r,o,a,c)}catch(d){if(d instanceof st||Dc(d))continue;throw d}if(gh(t,r,o))return new oa;throw new st(t)}async processSegmentAgainstRoute(n,e,t,r,o,a,c,s){if(Ve(t)!==a&&(a===M||!sr(r,o,t)))throw new st(r);if(t.redirectTo===void 0)return this.matchSegmentAgainstRoute(n,r,t,o,a,s);if(this.allowRedirects&&c)return this.expandSegmentAgainstRouteUsingRedirect(n,r,e,t,o,a,s);throw new st(r)}async expandSegmentAgainstRouteUsingRedirect(n,e,t,r,o,a,c){let{matched:s,parameters:d,consumedSegments:u,positionalParamSegments:f,remainingSegments:v}=Rc(e,r,o);if(!s)throw new st(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>_h&&(this.allowRedirects=!1));let D=this.createSnapshot(n,r,o,d,c);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let A=await this.applyRedirects.applyRedirectCommands(u,r.redirectTo,f,Nc(D),n),k=await this.applyRedirects.lineralizeSegments(r,A);return this.processSegment(n,t,e,k.concat(v),a,!1,c)}createSnapshot(n,e,t,r,o){let a=new ai(t,r,Object.freeze(g({},this.urlTree.queryParams)),this.urlTree.fragment,Sh(e),Ve(e),e.component??e._loadedComponent??null,e,wh(e),n),c=la(a,o,this.paramsInheritanceStrategy);return a.params=Object.freeze(c.params),a.data=Object.freeze(c.data),a}async matchSegmentAgainstRoute(n,e,t,r,o,a){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let c=fe=>this.createSnapshot(n,t,fe.consumedSegments,fe.parameters,a),s=await Xi(uh(e,t,r,n,this.urlSerializer,c,this.abortSignal));if(t.path==="**"&&(e.children={}),!s?.matched)throw new st(e);n=t._injector??n;let{routes:d}=await this.getChildConfig(n,t,r),u=t._loadedInjector??n,{parameters:f,consumedSegments:v,remainingSegments:D}=s,A=this.createSnapshot(n,t,v,f,a),{segmentGroup:k,slicedSegments:H}=Qs(e,v,D,d,o);if(H.length===0&&k.hasChildren()){let fe=await this.processChildren(u,d,k,A);return new Ne(A,fe)}if(d.length===0&&H.length===0)return new Ne(A,[]);let Le=Ve(t)===o,pe=await this.processSegment(u,d,k,H,Le?M:o,!0,A);return new Ne(A,pe instanceof Ne?[pe]:[])}async getChildConfig(n,e,t){if(e.children)return{routes:e.children,injector:n};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(n).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await Xi(rh(n,e,t,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(n,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw sh(e)}return{routes:[],injector:n}}};function bh(i){i.sort((n,e)=>n.value.outlet===M?-1:e.value.outlet===M?1:n.value.outlet.localeCompare(e.value.outlet))}function yh(i){let n=i.value.routeConfig;return n&&n.path===""}function Ic(i){let n=[],e=new Set;for(let t of i){if(!yh(t)){n.push(t);continue}let r=n.find(o=>t.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...t.children),e.add(r)):n.push(t)}for(let t of e){let r=Ic(t.children);n.push(new Ne(t.value,r))}return n.filter(t=>!e.has(t))}function Sh(i){return i.data||{}}function wh(i){return i.resolve||{}}function Ch(i,n,e,t,r,o,a){return mt(async c=>{let{state:s,tree:d}=await vh(i,n,e,t,c.extractedUrl,r,o,a);return Y(g({},c),{targetSnapshot:s,urlAfterRedirects:d})})}function Dh(i){return mt(n=>{let{targetSnapshot:e,guards:{canActivateChecks:t}}=n;if(!t.length)return y(n);let r=new Set(t.map(c=>c.route)),o=new Set;for(let c of r)if(!o.has(c))for(let s of Ac(c))o.add(s);let a=0;return Ae(o).pipe(kn(c=>r.has(c)?Eh(c,e,i):(c.data=la(c,c.parent,i).resolve,y(void 0))),se(()=>a++),eo(1),mt(c=>a===o.size?y(n):Ie))})}function Ac(i){let n=i.children.map(e=>Ac(e)).flat();return[i,...n]}function Eh(i,n,e){let t=i.routeConfig,r=i._resolve;return t?.title!==void 0&&!_c(t)&&(r[di]=t.title),Mi(()=>(i.data=la(i,i.parent,e).resolve,xh(r,i,n).pipe(B(o=>(i._resolvedData=o,i.data=g(g({},i.data),o),null)))))}function xh(i,n,e){let t=Fo(i);if(t.length===0)return y({});let r={};return Ae(t).pipe(mt(o=>Mh(i[o],n,e).pipe(pt(),se(a=>{if(a instanceof ci)throw ir(new Ft,a);r[o]=a}))),eo(1),B(()=>r),On(o=>Dc(o)?Ie:Ei(o)))}function Mh(i,n,e){let t=n._environmentInjector,r=yn(i,t),o=r.resolve?r.resolve(n,e):ge(t,()=>r(n,e));return Bt(o)}var Tc=new b("");function sa(i){return ie(n=>{let e=i(n);return e?Ae(e).pipe(B(()=>n)):y(n)})}var Oc=(()=>{class i{buildTitle(e){let t,r=e.root;for(;r!==void 0;)t=this.getResolvedTitleForRoute(r)??t,r=r.children.find(o=>o.outlet===M);return t}getResolvedTitleForRoute(e){return e.data[di]}static \u0275fac=function(t){return new(t||i)};static \u0275prov=C({token:i,factory:()=>l(Nh)})}return i})(),Nh=(()=>{class i extends Oc{title;constructor(e){super(),this.title=e}updateTitle(e){let t=this.buildTitle(e);t!==void 0&&this.title.setTitle(t)}static \u0275fac=function(t){return new(t||i)(E(Gs))};static \u0275prov=T({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),cr=new b("",{factory:()=>({})}),lr=new b(""),kc=(()=>{class i{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=l(gs);async loadComponent(e,t){if(this.componentLoaders.get(t))return this.componentLoaders.get(t);if(t._loadedComponent)return Promise.resolve(t._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(t);let r=(async()=>{try{let o=await tc(ge(e,()=>t.loadComponent())),a=await Pc(uo(o));return this.onLoadEndListener&&this.onLoadEndListener(t),t._loadedComponent=a,a}finally{this.componentLoaders.delete(t)}})();return this.componentLoaders.set(t,r),r}loadChildren(e,t){if(this.childrenLoaders.get(t))return this.childrenLoaders.get(t);if(t._loadedRoutes)return Promise.resolve({routes:t._loadedRoutes,injector:t._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(t);let r=(async()=>{try{let o=await Rh(t,this.compiler,e,this.onLoadEndListener);return t._loadedRoutes=o.routes,t._loadedInjector=o.injector,t._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(t)}})();return this.childrenLoaders.set(t,r),r}static \u0275fac=function(t){return new(t||i)};static \u0275prov=C({token:i,factory:i.\u0275fac})}return i})();async function Rh(i,n,e,t){let r=await tc(ge(e,()=>i.loadChildren())),o=await Pc(uo(r)),a;o instanceof us||Array.isArray(o)?a=o:a=await n.compileModuleAsync(o),t&&t(i);let c,s,d=!1,u;return Array.isArray(a)?(s=a,d=!0):(c=a.create(e).injector,u=a,s=c.get(lr,[],{optional:!0,self:!0}).flat()),{routes:s.map(ua),injector:c,factory:u}}async function Pc(i){return i}var ha=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275prov=C({token:i,factory:()=>l(Ih)})}return i})(),Ih=(()=>{class i{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,t){return e}static \u0275fac=function(t){return new(t||i)};static \u0275prov=C({token:i,factory:i.\u0275fac})}return i})(),Fc=new b("");var Ah=()=>{},Lc=new b(""),Bc=(()=>{class i{currentNavigation=ue(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=ue(null);events=new I;transitionAbortWithErrorSubject=new I;configLoader=l(kc);environmentInjector=l(de);destroyRef=l(Kt);urlSerializer=l(or);rootContexts=l(ui);location=l(vt);inputBindingEnabled=l(ar,{optional:!0})!==null;titleStrategy=l(Oc);options=l(cr,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||Ou;urlHandlingStrategy=l(ha);createViewTransition=l(Fc,{optional:!0});navigationErrorHandler=l(Lc,{optional:!0});routerResourcesFeature=l(Tc,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>y(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new Go(r)),t=r=>this.events.next(new Wo(r));this.configLoader.onLoadEndListener=t,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let t=++this.navigationId;Oe(()=>{this.transitions?.next(Y(g({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:t,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new Se(null),this.transitions.pipe(le(t=>t!==null),ie(t=>{let r=!0,o=!1,a=new AbortController,c=()=>!o&&this.currentTransition?.id===t.id;return y(t).pipe(ie(s=>{if(this.navigationId>t.id)return this.cancelNavigationTransition(t,"",be.SupersededByNewNavigation),Ie;this.currentTransition=t;let d=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:d?Y(g({},d),{previousNavigation:null}):null,abort:()=>a.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let u=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),f=s.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!u&&f!=="reload")return this.events.next(new bt(s.id,this.urlSerializer.serialize(s.rawUrl),"",Qi.IgnoredSameUrlNavigation)),s.resolve(!1),Ie;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return y(s).pipe(ie(v=>(this.events.next(new fn(v.id,this.urlSerializer.serialize(v.extractedUrl),v.source,v.restoredState)),v.id!==this.navigationId?Ie:Promise.resolve(v))),Ch(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,a.signal),se(v=>{t.targetSnapshot=v.targetSnapshot,t.urlAfterRedirects=v.urlAfterRedirects,this.currentNavigation.update(D=>(D.finalUrl=v.urlAfterRedirects,D)),this.events.next(new oi)}),ie(v=>Ae(t.routesRecognizeHandler.deferredHandle??y(void 0)).pipe(B(()=>v))),se(()=>{let v=new Ji(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(v)}));if(u&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:v,extractedUrl:D,source:A,restoredState:k,extras:H}=s,Le=new fn(v,this.urlSerializer.serialize(D),A,k);this.events.next(Le);let pe=gc(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=t=Y(g({},s),{targetSnapshot:pe,urlAfterRedirects:D,extras:Y(g({},H),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(fe=>(fe.finalUrl=D,fe)),y(t)}else return this.events.next(new bt(s.id,this.urlSerializer.serialize(s.extractedUrl),"",Qi.IgnoredByUrlHandlingStrategy)),s.resolve(!1),Ie}),B(s=>{let d=new zo(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(d),this.currentTransition=t=Y(g({},s),{guards:ju(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),t}),Ku(s=>this.events.next(s)),ie(s=>{if(t.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw ir(this.urlSerializer,s.guardsResult);let d=new Vo(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(d),!c())return Ie;if(!s.guardsResult)return this.cancelNavigationTransition(s,"",be.GuardRejected),Ie;if(s.guards.canActivateChecks.length===0)return y(s);let u=new Ho(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(u),!c())return Ie;let f=!1;return y(s).pipe(Dh(this.paramsInheritanceStrategy),se({next:()=>{f=!0;let v=new $o(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(v)},complete:()=>{f||this.cancelNavigationTransition(s,"",be.NoDataFromResolver)}}))}),sa(s=>{let d=f=>{let v=[];if(f.routeConfig?._loadedComponent)f.component=f.routeConfig?._loadedComponent;else if(f.routeConfig?.loadComponent){let D=f._environmentInjector;v.push(this.configLoader.loadComponent(D,f.routeConfig).then(A=>{f.component=A}))}for(let D of f.children)v.push(...d(D));return v},u=d(s.targetSnapshot.root);return u.length===0?y(s):Ae(Promise.all(u).then(()=>s))}),ie(s=>{let{newlyCreatedRoutes:d,state:u}=Pu(e.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);return this.currentTransition=t=s=Y(g({},s),{targetRouterState:u,newlyCreatedRoutes:d}),this.currentNavigation.update(f=>(f.targetRouterState=u,f)),y(s)}),this.routerResourcesFeature?.setupAndRunResources(a.signal)??(s=>s),sa(()=>this.afterPreactivation()),ie(()=>{let{currentSnapshot:s,targetSnapshot:d}=t,u=this.createViewTransition?.(this.environmentInjector,s.root,d.root);return u?Ae(u).pipe(B(()=>t)):y(t)}),Ge(1),ie(s=>{r=!1,this.events.next(new vn);let d=t.beforeActivateHandler.deferredHandle;return d?Ae(d.then(()=>s)):y(s)}),se(s=>{new na(e.routeReuseStrategy,t.targetRouterState,t.currentRouterState,d=>this.events.next(d),this.inputBindingEnabled).activate(this.rootContexts),s.newlyCreatedRoutes?.clear(),c()&&(jc(s.targetRouterState),o=!0,this.currentNavigation.update(d=>(d.abort=Ah,d)),this.lastSuccessfulNavigation.set(Oe(this.currentNavigation)),this.events.next(new _t(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),we(Ec(a.signal).pipe(le(()=>!o&&r),se(()=>{this.cancelNavigationTransition(t,a.signal.reason+"",be.Aborted)}))),se({complete:()=>{o=!0}}),we(this.transitionAbortWithErrorSubject.pipe(se(s=>{throw s}))),Xt(()=>{a.abort(),o||this.cancelNavigationTransition(t,"",be.SupersededByNewNavigation),this.currentTransition?.id===t.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),On(s=>{if(o=!0,Js(t),this.destroyed)return t.resolve(!1),Ie;if(Cc(s))this.events.next(new ze(t.id,this.urlSerializer.serialize(t.extractedUrl),s.message,s.cancellationCode)),Bu(s)?this.events.next(new _n(s.url,s.navigationBehaviorOptions)):t.resolve(!1);else{let d=new gn(t.id,this.urlSerializer.serialize(t.extractedUrl),s,t.targetSnapshot??void 0);try{let u=ge(this.environmentInjector,()=>this.navigationErrorHandler?.(d));if(u instanceof ci){let{message:f,cancellationCode:v}=ir(this.urlSerializer,u);this.events.next(new ze(t.id,this.urlSerializer.serialize(t.extractedUrl),f,v)),this.events.next(new _n(u.redirectTo,u.navigationBehaviorOptions))}else throw this.events.next(d),s}catch(u){this.options.resolveNavigationPromiseOnError?t.resolve(!1):t.reject(u)}}return Ie}))}))}cancelNavigationTransition(e,t,r){Js(e);let o=new ze(e.id,this.urlSerializer.serialize(e.extractedUrl),t,r);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),t=Oe(this.currentNavigation),r=t?.targetBrowserUrl??t?.extractedUrl;return e.toString()!==r?.toString()&&!t?.extras.skipLocationChange}static \u0275fac=function(t){return new(t||i)};static \u0275prov=C({token:i,factory:i.\u0275fac})}return i})();function Th(i){return i!==ni}function Js(i){for(let n of i.newlyCreatedRoutes??[])n._localInjector?.destroy(),n._localInjector=void 0;jc(i.targetRouterState)}function jc(i){if(!i)return;let n=e=>{e.value.pending?.set(!1),e.children.forEach(n)};n(i._root)}var Uc=new b("");var Oh=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275prov=C({token:i,factory:()=>l(kh)})}return i})(),ca=class{shouldDetach(n){return!1}store(n,e){}shouldAttach(n){return!1}retrieve(n){return null}shouldReuseRoute(n,e){return n.routeConfig===e.routeConfig}shouldDestroyInjector(n){return!0}},kh=(()=>{class i extends ca{static \u0275fac=function(t){return new(t||i)};static \u0275prov=C({token:i,factory:i.\u0275fac})}return i})(),ma=(()=>{class i{urlSerializer=l(or);options=l(cr,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=l(vt);urlHandlingStrategy=l(ha);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new He;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:t,targetBrowserUrl:r}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,t):t,a=r??o;return a instanceof He?this.urlSerializer.serialize(a):a}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{\u0275routerUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:t,initialUrl:r}){t&&e?(this.currentUrlTree=t,this.rawUrlTree=this.urlHandlingStrategy.merge(t,r),this.routerState=e):this.rawUrlTree=r}routerState=gc(null,l(de));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(t){return new(t||i)};static \u0275prov=C({token:i,factory:()=>l(Ph)})}return i})(),Ph=(()=>{class i extends ma{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(t=>{t.type==="popstate"&&setTimeout(()=>{e(t.url,t.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,t){e instanceof fn?this.updateStateMemento():e instanceof bt?this.commitTransition(t):e instanceof Ji?this.urlUpdateStrategy==="eager"&&(t.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(t),t)):e instanceof vn?(this.commitTransition(t),this.urlUpdateStrategy==="deferred"&&!t.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(t),t)):e instanceof ze&&!fc(e)?this.restoreHistory(t):e instanceof gn?this.restoreHistory(t,!0):e instanceof _t&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,t){let{extras:r,id:o}=t,{replaceUrl:a,state:c}=r;if(this.location.isCurrentPathEqualTo(e)||a){let s=this.browserPageId,d=g(g({},c),this.generateNgRouterState(o,s,t));this.location.replaceState(e,"",d)}else{let s=g(g({},c),this.generateNgRouterState(o,this.browserPageId+1,t));this.location.go(e,"",s)}}restoreHistory(e,t=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(t&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,t,r){return this.canceledNavigationResolution==="computed"?g({navigationId:e,\u0275routerPageId:t},this.routerUrlState(r)):g({navigationId:e},this.routerUrlState(r))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=C({token:i,factory:i.\u0275fac})}return i})();function zc(i,n){i.events.pipe(le(e=>e instanceof _t||e instanceof ze||e instanceof gn||e instanceof bt),B(e=>e instanceof _t||e instanceof bt?0:(e instanceof ze?e.code===be.Redirect||e.code===be.SupersededByNewNavigation:!1)?2:1),le(e=>e!==2),Ge(1)).subscribe(()=>{n()})}var pa=(()=>{class i{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=l(so);stateManager=l(ma);options=l(cr,{optional:!0})||{};pendingTasks=l(Za);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=l(Bc);urlSerializer=l(or);location=l(vt);urlHandlingStrategy=l(ha);injector=l(de);_events=new I;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=l(Oh);injectorCleanup=l(Uc,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=l(lr,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!l(ar,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new ye;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(t=>{try{let r=this.navigationTransitions.currentTransition,o=Oe(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(t,o),t instanceof ze&&t.code!==be.Redirect&&t.code!==be.SupersededByNewNavigation)this.navigated=!0;else if(t instanceof _t)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(t instanceof _n){let a=t.navigationBehaviorOptions,c=this.urlHandlingStrategy.merge(t.url,r.currentRawUrl),s=g({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||Th(r.source)},a);this.scheduleNavigation(c,ni,null,s,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}Au(t)&&this._events.next(t)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),ni,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,t,r,o)=>{this.navigateToSyncWithBrowser(e,r,t,o)})}navigateToSyncWithBrowser(e,t,r,o){let a=r?.navigationId?r:null,c=r?.\u0275routerUrl??e;if(r?.\u0275routerUrl&&(o=Y(g({},o),{browserUrl:e})),r){let d=g({},r);delete d.navigationId,delete d.\u0275routerPageId,delete d.\u0275routerUrl,Object.keys(d).length!==0&&(o.state=d)}let s=this.parseUrl(c);this.scheduleNavigation(s,t,a,o).catch(d=>{this.disposed||this.injector.get(Ni)(d)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return Oe(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(ua),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,t={}){let{relativeTo:r,queryParams:o,fragment:a,queryParamsHandling:c,preserveFragment:s}=t,d=s?this.currentUrlTree.fragment:a,u=null;switch(c??this.options.defaultQueryParamsHandling){case"merge":u=g(g({},this.currentUrlTree.queryParams),o);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=o||null}u!==null&&(u=this.removeEmptyProps(u));let f;try{let v=r?r.snapshot:this.routerState.snapshot.root;f=uc(v)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),f=this.currentUrlTree.root}return hc(f,e,u,d??null,this.urlSerializer)}navigateByUrl(e,t={skipLocationChange:!1}){let r=pn(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,ni,null,t)}navigate(e,t={skipLocationChange:!1}){return Fh(e),this.navigateByUrl(this.createUrlTree(e,t),t)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(Pn(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,t){let r;if(t===!0?r=g({},ic):t===!1?r=g({},Lo):r=g(g({},Lo),t),pn(e))return Ys(this.currentUrlTree,e,r);let o=this.parseUrl(e);return Ys(this.currentUrlTree,o,r)}removeEmptyProps(e){return Object.entries(e).reduce((t,[r,o])=>(o!=null&&(t[r]=o),t),{})}scheduleNavigation(e,t,r,o,a){if(this.disposed)return Promise.resolve(!1);let c,s,d;a?(c=a.resolve,s=a.reject,d=a.promise):d=new Promise((f,v)=>{c=f,s=v});let u=this.pendingTasks.add();return zc(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:t,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:c,reject:s,promise:d,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),d.catch(Promise.reject.bind(Promise))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=C({token:i,factory:i.\u0275fac})}return i})();function Fh(i){for(let n=0;n<i.length;n++)if(i[n]==null)throw new N(4008,!1)}var Lh=new b("");function fa(i,...n){return Dt([{provide:lr,multi:!0,useValue:i},{provide:Lt,useFactory:Bh},{provide:co,multi:!0,useFactory:jh},n.map(e=>e.\u0275providers)])}function Bh(){return l(pa).routerState.root}function jh(){let i=l(G);return n=>{let e=i.get(tt);if(n!==e.components[0])return;let t=i.get(pa),r=i.get(Uh);i.get(zh)===1&&t.initialNavigation(),i.get(Vh,null,{optional:!0})?.setUpPreloading(),i.get(Lh,null,{optional:!0})?.init(),t.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var Uh=new b("",{factory:()=>new I}),zh=new b("",{factory:()=>1});var Vh=new b("");var $h="@",Gh=(()=>{class i{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=l(G);loadingSchedulerFn=l(Wh,{optional:!0});_engine;constructor(e,t,r,o,a){this.doc=e,this.delegate=t,this.zone=r,this.animationType=o,this.moduleImpl=a}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-3T55QCSN.js").then(r=>r),t;return this.loadingSchedulerFn?t=this.loadingSchedulerFn(e):t=e(),t.catch(r=>{throw new N(5300,!1)}).then(({\u0275createEngine:r,\u0275AnimationRendererFactory:o})=>{this._engine=r(this.animationType,this.doc);let a=new o(this.delegate,this._engine,this.zone);return this.delegate=a,a})}createRenderer(e,t){let r=this.delegate.createRenderer(e,t);if(r.\u0275type===0)return r;typeof r.throwOnSyntheticProps=="boolean"&&(r.throwOnSyntheticProps=!1);let o=new ga(r);return t?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(a=>{let c=a.createRenderer(e,t);o.use(c),this.scheduler??=this.injector.get(es,null,{optional:!0}),this.scheduler?.notify(10)}).catch(a=>{o.use(r)}),o}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(e){this._engine?.flush(),this.delegate.componentReplaced?.(e)}static \u0275fac=function(t){jn()};static \u0275prov=T({token:i,factory:i.\u0275fac})}return i})(),ga=class{delegate;replay=[];\u0275type=1;constructor(n){this.delegate=n}use(n){if(this.delegate=n,this.replay!==null){for(let e of this.replay)e(n);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(n,e){return this.delegate.createElement(n,e)}createComment(n){return this.delegate.createComment(n)}createText(n){return this.delegate.createText(n)}get destroyNode(){return this.delegate.destroyNode}appendChild(n,e){this.delegate.appendChild(n,e)}insertBefore(n,e,t,r){this.delegate.insertBefore(n,e,t,r)}removeChild(n,e,t,r){this.delegate.removeChild(n,e,t,r)}selectRootElement(n,e){return this.delegate.selectRootElement(n,e)}parentNode(n){return this.delegate.parentNode(n)}nextSibling(n){return this.delegate.nextSibling(n)}setAttribute(n,e,t,r){this.delegate.setAttribute(n,e,t,r)}removeAttribute(n,e,t){this.delegate.removeAttribute(n,e,t)}addClass(n,e){this.delegate.addClass(n,e)}removeClass(n,e){this.delegate.removeClass(n,e)}setStyle(n,e,t,r){this.delegate.setStyle(n,e,t,r)}removeStyle(n,e,t){this.delegate.removeStyle(n,e,t)}setProperty(n,e,t){this.shouldReplay(e)&&this.replay.push(r=>r.setProperty(n,e,t)),this.delegate.setProperty(n,e,t)}setValue(n,e){this.delegate.setValue(n,e)}listen(n,e,t,r){return this.shouldReplay(e)&&this.replay.push(o=>o.listen(n,e,t,r)),this.delegate.listen(n,e,t,r)}shouldReplay(n){return this.replay!==null&&n.startsWith($h)}},Wh=new b("");function Vc(i="animations"){return io("NgAsyncAnimations"),Dt([{provide:ve,useFactory:()=>new Gh(l(w),l(Xn),l(O),i)},{provide:Qt,useValue:i==="noop"?"NoopAnimations":"BrowserAnimations"}])}var Hc=[];var $c={providers:[Qa(),fa(Hc),Vc()]};var va;try{va=typeof Intl<"u"&&Intl.v8BreakIterator}catch{va=!1}var te=(()=>{class i{_platformId=l(Zt);isBrowser=this._platformId?xs(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||va)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;static \u0275fac=function(t){return new(t||i)};static \u0275prov=C({token:i,factory:i.\u0275fac})}return i})();var jt;function Gc(){if(jt==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return jt=!1,jt;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)jt=!0;else{let i=Element.prototype.scrollTo;i?jt=!/\{\s*\[native code\]\s*\}/.test(i.toString()):jt=!1}}return jt}var _a;function Wc(){if(_a==null){let i=typeof document<"u"?document.head:null;_a=!!(i&&(i.createShadowRoot||i.attachShadow))}return _a}function ba(i){if(Wc()){let n=i.getRootNode?i.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function Ee(i){if(i.composedPath)try{return i.composedPath()[0]}catch{}return i.target}function ya(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var mi;function Yc(){if(mi==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>mi=!0}))}finally{mi=mi||!1}return mi}function Sn(i){return Yc()?i:!!i.capture}var Yh=new b("cdk-dir-doc",{providedIn:"root",factory:()=>l(w)}),qh=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function qc(i){let n=i?.toLowerCase()||"";return n==="auto"&&typeof navigator<"u"&&navigator?.language?qh.test(navigator.language)?"rtl":"ltr":n==="rtl"?"rtl":"ltr"}var Ut=(()=>{class i{get value(){return this.valueSignal()}valueSignal=ue("ltr");change=new re;constructor(){let e=l(Yh,{optional:!0});if(e){let t=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(qc(t||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(t){return new(t||i)};static \u0275prov=C({token:i,factory:i.\u0275fac})}return i})();var ne=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=z({type:i});static \u0275inj=U({})}return i})();var Xh=["*",[["mat-toolbar-row"]]],Kh=["*","mat-toolbar-row"],Zh=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=V({type:i,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return i})(),Xc=(()=>{class i{_elementRef=l($);_platform=l(te);_document=l(w);color;_toolbarRows;ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["mat-toolbar"]],contentQueries:function(t,r,o){if(t&1&&It(o,Zh,5),t&2){let a;J(a=ee())&&(r._toolbarRows=a)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(t,r){t&2&&(qe(r.color?"mat-"+r.color:""),F("mat-toolbar-multiple-rows",r._toolbarRows.length>0)("mat-toolbar-single-row",r._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:Kh,decls:2,vars:0,template:function(t,r){t&1&&(oe(Xh),j(0),j(1,1))},styles:[`.mat-toolbar {
  background: var(--%NS%mat-toolbar-container-background-color, var(--%NS%mat-sys-surface));
  color: var(--%NS%mat-toolbar-container-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--%NS%mat-toolbar-title-text-font, var(--%NS%mat-sys-title-large-font));
  font-size: var(--%NS%mat-toolbar-title-text-size, var(--%NS%mat-sys-title-large-size));
  line-height: var(--%NS%mat-toolbar-title-text-line-height, var(--%NS%mat-sys-title-large-line-height));
  font-weight: var(--%NS%mat-toolbar-title-text-weight, var(--%NS%mat-sys-title-large-weight));
  letter-spacing: var(--%NS%mat-toolbar-title-text-tracking, var(--%NS%mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --%NS%mat-button-text-label-text-color: var(--%NS%mat-toolbar-container-text-color, var(--%NS%mat-sys-on-surface));
  --%NS%mat-button-outlined-label-text-color: var(--%NS%mat-toolbar-container-text-color, var(--%NS%mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--%NS%mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--%NS%mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--%NS%mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--%NS%mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2})}return i})();var Kc=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=z({type:i});static \u0275inj=U({imports:[ne]})}return i})();function zt(i){return i.buttons===0||i.detail===0}function Vt(i){let n=i.touches&&i.touches[0]||i.changedTouches&&i.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}function Ke(i){return i instanceof $?i.nativeElement:i}var Zc=new b("cdk-input-modality-detector-options"),Qc={ignoreKeys:[18,17,224,91,16]},Jc=650,Sa={passive:!0,capture:!0},el=(()=>{class i{_platform=l(te);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Se(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(t=>t===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=Ee(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<Jc||(this._modality.next(zt(e)?"keyboard":"mouse"),this._mostRecentTarget=Ee(e))};_onTouchstart=e=>{if(Vt(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=Ee(e)};constructor(){let e=l(O),t=l(w),r=l(Zc,{optional:!0});if(this._options=g(g({},Qc),r),this.modalityDetected=this._modality.pipe(qa(1)),this.modalityChanged=this.modalityDetected.pipe(Jr()),this._platform.isBrowser){let o=l(ve).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(t,"keydown",this._onKeydown,Sa),o.listen(t,"mousedown",this._onMousedown,Sa),o.listen(t,"touchstart",this._onTouchstart,Sa)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(t){return new(t||i)};static \u0275prov=C({token:i,factory:i.\u0275fac})}return i})(),pi=(function(i){return i[i.IMMEDIATE=0]="IMMEDIATE",i[i.EVENTUAL=1]="EVENTUAL",i})(pi||{}),tl=new b("cdk-focus-monitor-default-options"),dr=Sn({passive:!0,capture:!0}),yt=(()=>{class i{_ngZone=l(O);_platform=l(te);_inputModalityDetector=l(el);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=l(w);_stopInputModalityDetector=new I;constructor(){let e=l(tl,{optional:!0});this._detectionMode=e?.detectionMode||pi.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let t=Ee(e);for(let r=t;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,t=!1){let r=Ke(e);if(!this._platform.isBrowser||r.nodeType!==1)return y();let o=ba(r)||this._document,a=this._elementInfo.get(r);if(a)return t&&(a.checkChildren=!0),a.subject;let c={checkChildren:t,subject:new I,rootNode:o};return this._elementInfo.set(r,c),this._registerGlobalListeners(c),c.subject}stopMonitoring(e){let t=Ke(e),r=this._elementInfo.get(t);r&&(r.subject.complete(),this._setClasses(t),this._elementInfo.delete(t),this._removeGlobalListeners(r))}focusVia(e,t,r){let o=Ke(e),a=this._document.activeElement;o===a?this._getClosestElementsInfo(o).forEach(([c,s])=>this._originChanged(c,t,s)):(this._setOrigin(t),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,t)=>this.stopMonitoring(t))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===pi.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,t){e.classList.toggle("cdk-focused",!!t),e.classList.toggle("cdk-touch-focused",t==="touch"),e.classList.toggle("cdk-keyboard-focused",t==="keyboard"),e.classList.toggle("cdk-mouse-focused",t==="mouse"),e.classList.toggle("cdk-program-focused",t==="program")}_setOrigin(e,t=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&t,this._detectionMode===pi.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?Jc:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,t){let r=this._elementInfo.get(t),o=Ee(e);!r||!r.checkChildren&&t!==o||this._originChanged(t,this._getFocusOrigin(o),r)}_onBlur(e,t){let r=this._elementInfo.get(t);!r||r.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),this._emitOrigin(r,null))}_emitOrigin(e,t){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(t))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let t=e.rootNode,r=this._rootNodeFocusListenerCount.get(t)||0;r||this._ngZone.runOutsideAngular(()=>{t.addEventListener("focus",this._rootNodeFocusAndBlurListener,dr),t.addEventListener("blur",this._rootNodeFocusAndBlurListener,dr)}),this._rootNodeFocusListenerCount.set(t,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(we(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let t=e.rootNode;if(this._rootNodeFocusListenerCount.has(t)){let r=this._rootNodeFocusListenerCount.get(t);r>1?this._rootNodeFocusListenerCount.set(t,r-1):(t.removeEventListener("focus",this._rootNodeFocusAndBlurListener,dr),t.removeEventListener("blur",this._rootNodeFocusAndBlurListener,dr),this._rootNodeFocusListenerCount.delete(t))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,t,r){this._setClasses(e,t),this._emitOrigin(r,t),this._lastFocusOrigin=t}_getClosestElementsInfo(e){let t=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&t.push([o,r])}),t}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:t,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!t||t===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(t))return!0}return!1}static \u0275fac=function(t){return new(t||i)};static \u0275prov=C({token:i,factory:i.\u0275fac})}return i})();var ur=new WeakMap,Re=(()=>{class i{_appRef;_injector=l(G);_environmentInjector=l(de);load(e){let t=this._appRef=this._appRef||this._injector.get(tt),r=ur.get(t);r||(r={loaders:new Set,refs:[]},ur.set(t,r),t.onDestroy(()=>{ur.get(t)?.refs.forEach(o=>o.destroy()),ur.delete(t)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(ki(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=C({token:i,factory:i.\u0275fac})}return i})();var nl=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(t,r){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2})}return i})(),hr;function Jh(){if(hr===void 0&&(hr=null,typeof window<"u")){let i=window;if(i.trustedTypes!==void 0)try{hr=i.trustedTypes.createPolicy("angular#components",{createHTML:n=>n})}catch(n){console.error(n)}}return hr}function wn(i){return Jh()?.createHTML(i)||i}function wa(i){return Array.isArray(i)?i:[i]}var il=new Set,Ht,Ca=(()=>{class i{_platform=l(te);_nonce=l(Jt,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):tm}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&em(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=C({token:i,factory:i.\u0275fac})}return i})();function em(i,n){if(!il.has(i))try{Ht||(Ht=document.createElement("style"),n&&Ht.setAttribute("nonce",n),Ht.setAttribute("type","text/css"),document.head.appendChild(Ht)),Ht.sheet&&(Ht.sheet.insertRule(`@media ${i.replace(/[{}]/g,"")} {body{ }}`,0),il.add(i))}catch(e){console.error(e)}}function tm(i){return{matches:i==="all"||i==="",media:i,addListener:()=>{},removeListener:()=>{}}}var nm=200,mr=class{_letterKeyStream=new I;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new I;selectedItem=this._selectedItem;constructor(n,e){let t=typeof e?.debounceInterval=="number"?e.debounceInterval:nm;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(n),this._setupKeyHandler(t)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(n){this._selectedItemIndex=n}setItems(n){this._items=n}handleKey(n){let e=n.keyCode;n.key&&n.key.length===1?this._letterKeyStream.next(n.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(n){this._letterKeyStream.pipe(se(e=>this._pressedLetters.push(e)),Wa(n),le(()=>this._pressedLetters.length>0),B(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let t=1;t<this._items.length+1;t++){let r=(this._selectedItemIndex+t)%this._items.length,o=this._items[r];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function pr(i,...n){return n.length?n.some(e=>i[e]):i.altKey||i.shiftKey||i.ctrlKey||i.metaKey}var fr=class{_items;_activeItemIndex=ue(-1);_activeItem=ue(null);_wrap=!1;_typeaheadSubscription=ye.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=n=>n.disabled;constructor(n,e){this._items=n,n instanceof Nt?this._itemChangesSubscription=n.changes.subscribe(t=>this._itemsChanged(t.toArray())):Ri(n)&&(this._effectRef=en(()=>this._itemsChanged(n()),{injector:e}))}tabOut=new I;change=new I;skipPredicate(n){return this._skipPredicateFn=n,this}withWrap(n=!0){return this._wrap=n,this}withVerticalOrientation(n=!0){return this._vertical=n,this}withHorizontalOrientation(n){return this._horizontal=n,this}withAllowedModifierKeys(n){return this._allowedModifierKeys=n,this}withTypeAhead(n=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new mr(e,{debounceInterval:typeof n=="number"?n:void 0,skipPredicate:t=>this._skipPredicateFn(t)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(t=>{this.setActiveItem(t)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(n=!0){return this._homeAndEnd=n,this}withPageUpDown(n=!0,e=10){return this._pageUpAndDown={enabled:n,delta:e},this}setActiveItem(n){let e=this._activeItem();this.updateActiveItem(n),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(n){let e=n.keyCode,r=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!n[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(o<a?o:a-1,-1);break}else return;default:(r||pr(n,"shiftKey"))&&this._typeahead?.handleKey(n);return}this._typeahead?.reset(),n.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(n){let e=this._getItemsArray(),t=typeof n=="number"?n:e.indexOf(n),r=e[t];this._activeItem.set(r??null),this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(n){this._wrap?this._setActiveInWrapMode(n):this._setActiveInDefaultMode(n)}_setActiveInWrapMode(n){let e=this._getItemsArray();for(let t=1;t<=e.length;t++){let r=(this._activeItemIndex()+n*t+e.length)%e.length,o=e[r];if(!this._skipPredicateFn(o)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(n){this._setActiveItemByIndex(this._activeItemIndex()+n,n)}_setActiveItemByIndex(n,e){let t=this._getItemsArray();if(t[n]){for(;this._skipPredicateFn(t[n]);)if(n+=e,!t[n])return;this.setActiveItem(n)}}_getItemsArray(){return Ri(this._items)?this._items():this._items instanceof Nt?this._items.toArray():this._items}_itemsChanged(n){this._typeahead?.setItems(n);let e=this._activeItem();if(e){let t=n.indexOf(e);t>-1&&t!==this._activeItemIndex()&&(this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t))}}};var $t=class extends fr{_origin="program";setFocusOrigin(n){return this._origin=n,this}setActiveItem(n){super.setActiveItem(n),this.activeItem&&this.activeItem.focus(this._origin)}};var al=new Map,ct=class i{_appId=l(Fn);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,e=!1){this._appId!=="ng"&&(n+=this._appId);let t=al.get(n);return t===void 0?t=0:t++,al.set(n,t),`${n}${e?i._infix+"-":""}${t}`}static \u0275fac=function(e){return new(e||i)};static \u0275prov=C({token:i,factory:i.\u0275fac})};var im=new b("MATERIAL_ANIMATIONS"),sl=null;function rm(){return l(im,{optional:!0})?.animationsDisabled||l(Qt,{optional:!0})==="NoopAnimations"?"di-disabled":(sl??=l(Ca).matchMedia("(prefers-reduced-motion)").matches,sl?"reduced-motion":"enabled")}function $e(){return rm()!=="enabled"}function K(i){return i==null?"":typeof i=="string"?i:`${i}px`}var Fe=(function(i){return i[i.FADING_IN=0]="FADING_IN",i[i.VISIBLE=1]="VISIBLE",i[i.FADING_OUT=2]="FADING_OUT",i[i.HIDDEN=3]="HIDDEN",i})(Fe||{}),xa=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=Fe.HIDDEN;constructor(n,e,t,r=!1){this._renderer=n,this.element=e,this.config=t,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},cl=Sn({passive:!0,capture:!0}),Ma=class{_events=new Map;addHandler(n,e,t,r){let o=this._events.get(e);if(o){let a=o.get(t);a?a.add(r):o.set(t,new Set([r]))}else this._events.set(e,new Map([[t,new Set([r])]])),n.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,cl)})}removeHandler(n,e,t){let r=this._events.get(n);if(!r)return;let o=r.get(e);o&&(o.delete(t),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,cl)))}_delegateEventHandler=n=>{let e=Ee(n);e&&this._events.get(n.type)?.forEach((t,r)=>{(r===e||r.contains(e))&&t.forEach(o=>o.handleEvent(n))})}},fi={enterDuration:225,exitDuration:150},am=800,ll=Sn({passive:!0,capture:!0}),dl=["mousedown","touchstart"],ul=["mouseup","mouseleave","touchend","touchcancel"],sm=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(t,r){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--%NS%mat-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2})}return i})(),gi=class i{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Ma;constructor(n,e,t,r,o){this._target=n,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=Ke(t)),o&&o.get(Re).load(sm)}fadeInRipple(n,e,t={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=g(g({},fi),t.animation);t.centered&&(n=r.left+r.width/2,e=r.top+r.height/2);let a=t.radius||cm(n,e,r),c=n-r.left,s=e-r.top,d=o.enterDuration,u=document.createElement("div");u.classList.add("mat-ripple-element"),u.style.left=`${c-a}px`,u.style.top=`${s-a}px`,u.style.height=`${a*2}px`,u.style.width=`${a*2}px`,t.color!=null&&(u.style.backgroundColor=t.color),u.style.transitionDuration=`${d}ms`,this._containerElement.appendChild(u);let f=window.getComputedStyle(u),v=f.transitionProperty,D=f.transitionDuration,A=v==="none"||D==="0s"||D==="0s, 0s"||r.width===0&&r.height===0,k=new xa(this,u,t,A);u.style.transform="scale3d(1, 1, 1)",k.state=Fe.FADING_IN,t.persistent||(this._mostRecentTransientRipple=k);let H=null;return!A&&(d||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let Le=()=>{H&&(H.fallbackTimer=null),clearTimeout(fe),this._finishRippleTransition(k)},pe=()=>this._destroyRipple(k),fe=setTimeout(pe,d+100);u.addEventListener("transitionend",Le),u.addEventListener("transitioncancel",pe),H={onTransitionEnd:Le,onTransitionCancel:pe,fallbackTimer:fe}}),this._activeRipples.set(k,H),(A||!d)&&this._finishRippleTransition(k),k}fadeOutRipple(n){if(n.state===Fe.FADING_OUT||n.state===Fe.HIDDEN)return;let e=n.element,t=g(g({},fi),n.config.animation);e.style.transitionDuration=`${t.exitDuration}ms`,e.style.opacity="0",n.state=Fe.FADING_OUT,(n._animationForciblyDisabledThroughCss||!t.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let e=Ke(n);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,dl.forEach(t=>{i._eventManager.addHandler(this._ngZone,t,e,this)}))}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{ul.forEach(e=>{this._triggerElement.addEventListener(e,this,ll)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===Fe.FADING_IN?this._startFadeOutTransition(n):n.state===Fe.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let e=n===this._mostRecentTransientRipple,{persistent:t}=n.config;n.state=Fe.VISIBLE,!t&&(!e||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let e=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=Fe.HIDDEN,e!==null&&(n.element.removeEventListener("transitionend",e.onTransitionEnd),n.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),n.element.remove()}_onMousedown(n){let e=zt(n),t=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+am;!this._target.rippleDisabled&&!e&&!t&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!Vt(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=n.changedTouches;if(e)for(let t=0;t<e.length;t++)this.fadeInRipple(e[t].clientX,e[t].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let e=n.state===Fe.VISIBLE||n.config.terminateOnPointerUp&&n.state===Fe.FADING_IN;!n.config.persistent&&e&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(dl.forEach(e=>i._eventManager.removeHandler(e,n,this)),this._pointerUpEventsRegistered&&(ul.forEach(e=>n.removeEventListener(e,this,ll)),this._pointerUpEventsRegistered=!1))}};function cm(i,n,e){let t=Math.max(Math.abs(i-e.left),Math.abs(i-e.right)),r=Math.max(Math.abs(n-e.top),Math.abs(n-e.bottom));return Math.sqrt(t*t+r*r)}var vi=new b("mat-ripple-global-options"),hl=(()=>{class i{_elementRef=l($);_animationsDisabled=$e();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=l(O),t=l(te),r=l(vi,{optional:!0}),o=l(G);this._globalOptions=r||{},this._rippleRenderer=new gi(this,e,this._elementRef,t,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:g(g(g({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,t=0,r){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,t,g(g({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,g(g({},this.rippleConfig),e))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=V({type:i,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(t,r){t&2&&F("mat-ripple-unbounded",r.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return i})();var lm={capture:!0},dm=["focus","mousedown","mouseenter","touchstart"],Na="mat-ripple-loader-uninitialized",Ra="mat-ripple-loader-class-name",ml="mat-ripple-loader-centered",gr="mat-ripple-loader-disabled",vr=(()=>{class i{_document=l(w);_animationsDisabled=$e();_globalRippleOptions=l(vi,{optional:!0});_platform=l(te);_ngZone=l(O);_injector=l(G);_eventCleanups;_hosts=new Map;constructor(){let e=l(ve).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>dm.map(t=>e.listen(this._document,t,this._onInteraction,lm)))}ngOnDestroy(){let e=this._hosts.keys();for(let t of e)this.destroyRipple(t);this._eventCleanups.forEach(t=>t())}configureRipple(e,t){e.setAttribute(Na,this._globalRippleOptions?.namespace??""),(t.className||!e.hasAttribute(Ra))&&e.setAttribute(Ra,t.className||""),t.centered&&e.setAttribute(ml,""),t.disabled&&e.setAttribute(gr,"")}setDisabled(e,t){let r=this._hosts.get(e);r?(r.target.rippleDisabled=t,!t&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):t?e.setAttribute(gr,""):e.removeAttribute(gr)}_onInteraction=e=>{let t=Ee(e);if(t instanceof HTMLElement){let r=t.closest(`[${Na}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let t=this._document.createElement("span");t.classList.add("mat-ripple",e.getAttribute(Ra)),e.append(t);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??fi.enterDuration,a=this._animationsDisabled?0:r?.animation?.exitDuration??fi.exitDuration,c={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(gr),rippleConfig:{centered:e.hasAttribute(ml),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},s=new gi(c,this._ngZone,t,this._platform,this._injector),d=!c.rippleDisabled;d&&s.setupTriggerEvents(e),this._hosts.set(e,{target:c,renderer:s,hasSetUpEvents:d}),e.removeAttribute(Na)}destroyRipple(e){let t=this._hosts.get(e);t&&(t.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=C({token:i,factory:i.\u0275fac})}return i})();var Gt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["structural-styles"]],decls:0,vars:0,template:function(t,r){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--%NS%mat-focus-indicator-display, none);
  border-width: var(--%NS%mat-focus-indicator-border-width, 3px);
  border-style: var(--%NS%mat-focus-indicator-border-style, solid);
  border-color: var(--%NS%mat-focus-indicator-border-color, transparent);
  border-radius: var(--%NS%mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --%NS%mat-focus-indicator-display: block;
    --%NS%mat-focus-indicator-fallback-border-style: none;
  }
}
`],encapsulation:2})}return i})();var um=["*",[["","progressIndicator",""]]],hm=["*","[progressIndicator]"];function mm(i,n){i&1&&(Me(0,"div",1),j(1,1),Te())}var pm=new b("MAT_BUTTON_CONFIG");function pl(i){return i==null?void 0:Vn(i)}var Ia=(()=>{class i{_elementRef=l($);_ngZone=l(O);_animationsDisabled=$e();_config=l(pm,{optional:!0});_focusMonitor=l(yt);_cleanupClick;_renderer=l(et);_rippleLoader=l(vr);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}showProgress=zn(!1,{transform:W});constructor(){l(Re).load(Gt);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",t){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,t):this._elementRef.nativeElement.focus(t)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=V({type:i,hostAttrs:[1,"mat-mdc-button-base"],hostVars:15,hostBindings:function(t,r){t&2&&(_e("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),qe(r.color?"mat-"+r.color:""),F("mat-mdc-button-progress-indicator-shown",r.showProgress())("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",W],disabled:[2,"disabled","disabled",W],ariaDisabled:[2,"aria-disabled","ariaDisabled",W],disabledInteractive:[2,"disabledInteractive","disabledInteractive",W],tabIndex:[2,"tabIndex","tabIndex",pl],_tabindex:[2,"tabindex","_tabindex",pl],showProgress:[1,"showProgress"]}})}return i})(),_i=(()=>{class i extends Ia{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[Ye],ngContentSelectors:hm,decls:5,vars:1,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-mdc-button-progress-indicator-container"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,r){t&1&&(oe(um),Rt(0,"span",0),j(1),nt(2,mm,2,0,"div",1),Rt(3,"span",2)(4,"span",3)),t&2&&(_(2),it(r.showProgress()?2:-1))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--%NS%mat-icon-button-container-shape, var(--%NS%mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--%NS%mat-icon-button-state-layer-size, 40px);
  height: var(--%NS%mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--%NS%mat-icon-button-state-layer-size, 40px) - var(--%NS%mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--%NS%mat-icon-button-icon-size, 24px);
  color: var(--%NS%mat-icon-button-icon-color, var(--%NS%mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--%NS%mat-icon-button-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface-variant) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-icon-button-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-icon-button-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-icon-button-touch-target-size, 48px);
  display: var(--%NS%mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--%NS%mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--%NS%mat-icon-button-icon-size, 24px);
  height: var(--%NS%mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__determinate-circle-graphic {
  width: inherit;
  height: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__indeterminate-circle-graphic {
  height: 100%;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--%NS%mat-icon-button-container-shape, var(--%NS%mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})}return i})();var Cn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=z({type:i});static \u0275inj=U({imports:[ne]})}return i})();var fm=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]],[["","progressIndicator",""]]],gm=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]","[progressIndicator]"];function vm(i,n){i&1&&(Me(0,"div",2),j(1,3),Te())}var fl=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),St=(()=>{class i extends Ia{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=_m(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let t=this._elementRef.nativeElement.classList,r=this._appearance?fl.get(this._appearance):null,o=fl.get(e);r&&t.remove(...r),t.add(...o),this._appearance=e}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[Ye],ngContentSelectors:gm,decls:8,vars:5,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-mdc-button-progress-indicator-container"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,r){t&1&&(oe(fm),Rt(0,"span",0),j(1),Me(2,"span",1),j(3,1),Te(),j(4,2),nt(5,vm,2,0,"div",2),Rt(6,"span",3)(7,"span",4)),t&2&&(F("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab),_(5),it(r.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--%NS%mat-button-text-horizontal-padding, 12px);
  height: var(--%NS%mat-button-text-container-height, 40px);
  font-family: var(--%NS%mat-button-text-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-text-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-text-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-text-label-text-transform);
  font-weight: var(--%NS%mat-button-text-label-text-weight, var(--%NS%mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-text-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--%NS%mat-button-text-label-text-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--%NS%mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-text-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-text-touch-target-size, 48px);
  display: var(--%NS%mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-filled-container-height, 40px);
  font-family: var(--%NS%mat-button-filled-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-filled-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-filled-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-filled-label-text-transform);
  font-weight: var(--%NS%mat-button-filled-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-filled-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-state-layer-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-filled-touch-target-size, 48px);
  display: var(--%NS%mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--%NS%mat-button-filled-label-text-color, var(--%NS%mat-sys-on-primary));
  background-color: var(--%NS%mat-button-filled-container-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-filled-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-unelevated-button .mat-mdc-button-progress-indicator-container {
  --%NS%mat-progress-spinner-active-indicator-color: var(--%NS%mat-button-filled-progress-active-indicator-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--%NS%mat-button-protected-container-elevation-shadow, var(--%NS%mat-sys-level1));
  height: var(--%NS%mat-button-protected-container-height, 40px);
  font-family: var(--%NS%mat-button-protected-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-protected-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-protected-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-protected-label-text-transform);
  font-weight: var(--%NS%mat-button-protected-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-protected-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-protected-touch-target-size, 48px);
  display: var(--%NS%mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--%NS%mat-button-protected-label-text-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-button-protected-container-color, var(--%NS%mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-protected-container-shape, var(--%NS%mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--%NS%mat-button-protected-hover-container-elevation-shadow, var(--%NS%mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--%NS%mat-button-protected-focus-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--%NS%mat-button-protected-pressed-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-protected-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--%NS%mat-button-protected-disabled-container-elevation-shadow, var(--%NS%mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-outlined-container-height, 40px);
  font-family: var(--%NS%mat-button-outlined-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-outlined-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-outlined-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-outlined-label-text-transform);
  font-weight: var(--%NS%mat-button-outlined-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  border-radius: var(--%NS%mat-button-outlined-container-shape, var(--%NS%mat-sys-corner-full));
  border-width: var(--%NS%mat-button-outlined-outline-width, 1px);
  padding: 0 var(--%NS%mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-outlined-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-outlined-touch-target-size, 48px);
  display: var(--%NS%mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--%NS%mat-button-outlined-label-text-color, var(--%NS%mat-sys-primary));
  border-color: var(--%NS%mat-button-outlined-outline-color, var(--%NS%mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: var(--%NS%mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-tonal-container-height, 40px);
  font-family: var(--%NS%mat-button-tonal-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-tonal-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-tonal-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-tonal-label-text-transform);
  font-weight: var(--%NS%mat-button-tonal-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--%NS%mat-button-tonal-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  background-color: var(--%NS%mat-button-tonal-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-tonal-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-tonal-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-secondary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-tonal-touch-target-size, 48px);
  display: var(--%NS%mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon,
.mat-mdc-button-progress-indicator-shown [matButtonIcon],
.mat-mdc-button-progress-indicator-shown .mdc-button__label {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})}return i})();function _m(i){return i.hasAttribute("mat-raised-button")?"elevated":i.hasAttribute("mat-stroked-button")?"outlined":i.hasAttribute("mat-flat-button")?"filled":i.hasAttribute("mat-button")?"text":null}var Ze=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=z({type:i});static \u0275inj=U({imports:[Cn,ne]})}return i})();function gl(i){return Error(`Unable to find icon with the name "${i}"`)}function bm(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function vl(i){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${i}".`)}function _l(i){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${i}".`)}var lt=class{url;svgText;options;svgElement=null;constructor(n,e,t){this.url=n,this.svgText=e,this.options=t}},yl=(()=>{class i{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,t,r,o){this._httpClient=e,this._sanitizer=t,this._errorHandler=o,this._document=r}addSvgIcon(e,t,r){return this.addSvgIconInNamespace("",e,t,r)}addSvgIconLiteral(e,t,r){return this.addSvgIconLiteralInNamespace("",e,t,r)}addSvgIconInNamespace(e,t,r,o){return this._addSvgIconConfig(e,t,new lt(r,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,t,r,o){let a=this._sanitizer.sanitize(xe.HTML,r);if(!a)throw _l(r);let c=wn(a);return this._addSvgIconConfig(e,t,new lt("",c,o))}addSvgIconSet(e,t){return this.addSvgIconSetInNamespace("",e,t)}addSvgIconSetLiteral(e,t){return this.addSvgIconSetLiteralInNamespace("",e,t)}addSvgIconSetInNamespace(e,t,r){return this._addSvgIconSetConfig(e,new lt(t,null,r))}addSvgIconSetLiteralInNamespace(e,t,r){let o=this._sanitizer.sanitize(xe.HTML,t);if(!o)throw _l(t);let a=wn(o);return this._addSvgIconSetConfig(e,new lt("",a,r))}registerFontClassAlias(e,t=e){return this._fontCssClassesByAlias.set(e,t),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let t=this._sanitizer.sanitize(xe.RESOURCE_URL,e);if(!t)throw vl(e);let r=this._cachedIconsByUrl.get(t);return r?y(_r(r)):this._loadSvgIconFromConfig(new lt(e,null)).pipe(se(o=>this._cachedIconsByUrl.set(t,o)),B(o=>_r(o)))}getNamedSvgIcon(e,t=""){let r=bl(t,e),o=this._svgIconConfigs.get(r);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(t,e),o)return this._svgIconConfigs.set(r,o),this._getSvgFromConfig(o);let a=this._iconSetConfigs.get(t);return a?this._getSvgFromIconSetConfigs(e,a):Ei(gl(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?y(_r(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(B(t=>_r(t)))}_getSvgFromIconSetConfigs(e,t){let r=this._extractIconWithNameFromAnySet(e,t);if(r)return y(r);let o=t.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(On(c=>{let d=`Loading icon set URL: ${this._sanitizer.sanitize(xe.RESOURCE_URL,a.url)} failed: ${c.message}`;return this._errorHandler.handleError(new Error(d)),y(null)})));return Ga(o).pipe(B(()=>{let a=this._extractIconWithNameFromAnySet(e,t);if(!a)throw gl(e);return a}))}_extractIconWithNameFromAnySet(e,t){for(let r=t.length-1;r>=0;r--){let o=t[r];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let a=this._svgElementFromConfig(o),c=this._extractSvgIconFromSet(a,e,o.options);if(c)return c}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(se(t=>e.svgText=t),B(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?y(null):this._fetchIcon(e).pipe(se(t=>e.svgText=t))}_extractSvgIconFromSet(e,t,r){let o=e.querySelector(`[id="${t}"]`);if(!o)return null;let a=o.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,r);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),r);let c=this._svgElementFromString(wn("<svg></svg>"));return c.appendChild(a),this._setSvgAttributes(c,r)}_svgElementFromString(e){let t=this._document.createElement("DIV");t.innerHTML=e;let r=t.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(e){let t=this._svgElementFromString(wn("<svg></svg>")),r=e.attributes;for(let o=0;o<r.length;o++){let{name:a,value:c}=r[o];a!=="id"&&t.setAttribute(a,c)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&t.appendChild(e.childNodes[o].cloneNode(!0));return t}_setSvgAttributes(e,t){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),t&&t.viewBox&&e.setAttribute("viewBox",t.viewBox),e}_fetchIcon(e){let{url:t,options:r}=e,o=r?.withCredentials??!1;if(!this._httpClient)throw bm();if(t==null)throw Error(`Cannot fetch icon from URL "${t}".`);let a=this._sanitizer.sanitize(xe.RESOURCE_URL,t);if(!a)throw vl(t);let c=this._inProgressUrlFetches.get(a);if(c)return c;let s=this._httpClient.get(a,{responseType:"text",withCredentials:o}).pipe(B(d=>wn(d)),Xt(()=>this._inProgressUrlFetches.delete(a)),Ya());return this._inProgressUrlFetches.set(a,s),s}_addSvgIconConfig(e,t,r){return this._svgIconConfigs.set(bl(e,t),r),this}_addSvgIconSetConfig(e,t){let r=this._iconSetConfigs.get(e);return r?r.push(t):this._iconSetConfigs.set(e,[t]),this}_svgElementFromConfig(e){if(!e.svgElement){let t=this._svgElementFromString(e.svgText);this._setSvgAttributes(t,e.options),e.svgElement=t}return e.svgElement}_getIconConfigFromResolvers(e,t){for(let r=0;r<this._resolvers.length;r++){let o=this._resolvers[r](t,e);if(o)return ym(o)?new lt(o.url,null,o.options):new lt(o,null)}}static \u0275fac=function(t){return new(t||i)(E(Ro,8),E(Io),E(w,8),E(Mt))};static \u0275prov=T({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function _r(i){return i.cloneNode(!0)}function bl(i,n){return i+":"+n}function ym(i){return!!(i.url&&i.options)}var Sm=["*"],wm=new b("MAT_ICON_DEFAULT_OPTIONS"),Cm=new b("mat-icon-location",{providedIn:"root",factory:()=>{let i=l(w),n=i?i.location:null;return{getPathname:()=>n?n.pathname+n.search:""}}}),Sl=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],Dm=Sl.map(i=>`[${i}]`).join(", "),Em=/^url\(['"]?#(.*?)['"]?\)$/,he=(()=>{class i{_elementRef=l($);_iconRegistry=l(yl);_location=l(Cm);_errorHandler=l(Mt);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let t=this._cleanupFontValue(e);t!==this._fontSet&&(this._fontSet=t,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let t=this._cleanupFontValue(e);t!==this._fontIcon&&(this._fontIcon=t,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=ye.EMPTY;constructor(){let e=l(new lo("aria-hidden"),{optional:!0}),t=l(wm,{optional:!0});t&&(t.color&&(this.color=this._defaultColor=t.color),t.fontSet&&(this.fontSet=t.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let t=e.split(":");switch(t.length){case 1:return["",t[0]];case 2:return t;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let t=this._location.getPathname();t!==this._previousPath&&(this._previousPath=t,this._prependPathToReferences(t))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let t=this._location.getPathname();this._previousPath=t,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(t),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,t=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();t--;){let r=e.childNodes[t];(r.nodeType!==1||r.nodeName.toLowerCase()==="svg")&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,t=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>e.classList.remove(r)),t.forEach(r=>e.classList.add(r)),this._previousFontSetClass=t,this.fontIcon!==this._previousFontIconClass&&!t.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let t=this._elementsWithExternalReferences;t&&t.forEach((r,o)=>{r.forEach(a=>{o.setAttribute(a.name,`url('${e}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(e){let t=e.querySelectorAll(Dm),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<t.length;o++)Sl.forEach(a=>{let c=t[o],s=c.getAttribute(a),d=s?s.match(Em):null;if(d){let u=r.get(c);u||(u=[],r.set(c,u)),u.push({name:a,value:d[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[t,r]=this._splitIconName(e);t&&(this._svgNamespace=t),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,t).pipe(Ge(1)).subscribe(o=>this._setSvgElement(o),o=>{let a=`Error retrieving icon ${t}:${r}! ${o.message}`;this._errorHandler.handleError(new Error(a))})}}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(t,r){t&2&&(_e("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),qe(r.color?"mat-"+r.color:""),F("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",W],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:Sm,decls:1,vars:0,template:function(t,r){t&1&&(oe(),j(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--%NS%mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2})}return i})(),me=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=z({type:i});static \u0275inj=U({imports:[ne]})}return i})();var yi=class{_attachedHost=null;attach(n){return this._attachedHost=n,n.attach(this)}detach(){let n=this._attachedHost;n!=null&&(this._attachedHost=null,n.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}},Aa=class extends yi{component;viewContainerRef;injector;projectableNodes;bindings;directives;constructor(n,e,t,r,o,a){super(),this.component=n,this.viewContainerRef=e,this.injector=t,this.projectableNodes=r,this.bindings=o||null,this.directives=a||null}},Dn=class extends yi{templateRef;viewContainerRef;context;injector;constructor(n,e,t,r){super(),this.templateRef=n,this.viewContainerRef=e,this.context=t,this.injector=r}get origin(){return this.templateRef.elementRef}attach(n,e=this.context){return this.context=e,super.attach(n)}detach(){return this.context=void 0,super.detach()}},Ta=class extends yi{element;constructor(n){super(),this.element=n instanceof $?n.nativeElement:n}},Oa=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(n){if(n instanceof Aa)return this._attachedPortal=n,this.attachComponentPortal(n);if(n instanceof Dn)return this._attachedPortal=n,this.attachTemplatePortal(n);if(this.attachDomPortal&&n instanceof Ta)return this._attachedPortal=n,this.attachDomPortal(n)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(n){this._disposeFn=n}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},Si=class extends Oa{outletElement;_appRef;_defaultInjector;constructor(n,e,t){super(),this.outletElement=n,this._appRef=e,this._defaultInjector=t}attachComponentPortal(n){let e;if(n.viewContainerRef){let t=n.injector||n.viewContainerRef.injector,r=t.get(oo,null,{optional:!0})||void 0;e=n.viewContainerRef.createComponent(n.component,{index:n.viewContainerRef.length,injector:t,ngModuleRef:r,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0,directives:n.directives||void 0}),this.setDisposeFn(()=>e.destroy())}else{let t=this._appRef,r=n.injector||this._defaultInjector||G.NULL,o=r.get(de,t.injector);e=ki(n.component,{elementInjector:r,environmentInjector:o,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0,directives:n.directives||void 0}),t.attachView(e.hostView),this.setDisposeFn(()=>{t.viewCount>0&&t.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=n,e}attachTemplatePortal(n){let e=n.viewContainerRef,t=e.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return t.rootNodes.forEach(r=>this.outletElement.appendChild(r)),t.detectChanges(),this.setDisposeFn(()=>{let r=e.indexOf(t);r!==-1&&e.remove(r)}),this._attachedPortal=n,t}attachDomPortal=n=>{let e=n.element;e.parentNode;let t=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(t,e),this.outletElement.appendChild(e),this._attachedPortal=n,super.setDisposeFn(()=>{t.parentNode&&t.parentNode.replaceChild(e,t)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(n){return n.hostView.rootNodes[0]}};var wl=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=z({type:i});static \u0275inj=U({})}return i})();var Mm=20,yr=(()=>{class i{_ngZone=l(O);_platform=l(te);_renderer=l(ve).createRenderer(null,null);_cleanupGlobalListener;_scrolled=new I;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=Mm){return this._platform.isBrowser?new qt(t=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe(Qr(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):y()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){let r=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(le(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((r,o)=>{this._targetContainsElement(o,e)&&t.push(o)}),t}_targetContainsElement(e,t){let r=Ke(t),o=e.getElementRef().nativeElement;do if(r==o)return!0;while(r=r.parentElement);return!1}static \u0275fac=function(t){return new(t||i)};static \u0275prov=C({token:i,factory:i.\u0275fac})}return i})();var Nm=20,En=(()=>{class i{_platform=l(te);_listeners;_viewportSize=null;_change=new I;_document=l(w);constructor(){let e=l(O),t=l(ve).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=o=>this._change.next(o);this._listeners=[t.listen("window","resize",r),t.listen("window","orientationchange",r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+t,height:r,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,t=this._getWindow(),r=e.documentElement,o=r.getBoundingClientRect(),a=-o.top||e.body?.scrollTop||t.scrollY||r.scrollTop||0,c=-o.left||e.body?.scrollLeft||t.scrollX||r.scrollLeft||0;return{top:a,left:c}}change(e=Nm){return e>0?this._change.pipe(Qr(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(t){return new(t||i)};static \u0275prov=C({token:i,factory:i.\u0275fac})}return i})();var br=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=z({type:i});static \u0275inj=U({})}return i})(),ka=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=z({type:i});static \u0275inj=U({imports:[ne,br,ne,br]})}return i})();var Cl=Gc();function Il(i){return new Sr(i.get(En),i.get(w))}var Sr=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(n,e){this._viewportRuler=n,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let n=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=n.style.left||"",this._previousHTMLStyles.top=n.style.top||"",n.style.left=K(-this._previousScrollPosition.left),n.style.top=K(-this._previousScrollPosition.top),n.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let n=this._document.documentElement,e=this._document.body,t=n.style,r=e.style,o=t.scrollBehavior||"",a=r.scrollBehavior||"";this._isEnabled=!1,t.left=this._previousHTMLStyles.left,t.top=this._previousHTMLStyles.top,n.classList.remove("cdk-global-scrollblock"),Cl&&(t.scrollBehavior=r.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),Cl&&(t.scrollBehavior=o,r.scrollBehavior=a)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,t=this._viewportRuler.getViewportSize();return e.scrollHeight>t.height||e.scrollWidth>t.width}};function Al(i,n){return new wr(i.get(yr),i.get(O),i.get(En),n)}var wr=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(n,e,t,r){this._scrollDispatcher=n,this._ngZone=e,this._viewportRuler=t,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(this._scrollSubscription)return;let n=this._scrollDispatcher.scrolled(0).pipe(le(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=n.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=n.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var wi=class{enable(){}disable(){}attach(){}};function Pa(i,n){return n.some(e=>{let t=i.bottom<e.top,r=i.top>e.bottom,o=i.right<e.left,a=i.left>e.right;return t||r||o||a})}function Dl(i,n){return n.some(e=>{let t=i.top<e.top,r=i.bottom>e.bottom,o=i.left<e.left,a=i.right>e.right;return t||r||o||a})}function Nr(i,n){return new Cr(i.get(yr),i.get(En),i.get(O),n)}var Cr=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(n,e,t,r){this._scrollDispatcher=n,this._viewportRuler=e,this._ngZone=t,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(!this._scrollSubscription){let n=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(n).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:t,height:r}=this._viewportRuler.getViewportSize();Pa(e,[{width:t,height:r,bottom:r,right:t,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},Tl=(()=>{class i{_injector=l(G);noop=()=>new wi;close=e=>Al(this._injector,e);block=()=>Il(this._injector);reposition=e=>Nr(this._injector,e);static \u0275fac=function(t){return new(t||i)};static \u0275prov=C({token:i,factory:i.\u0275fac})}return i})(),xn=class{positionStrategy;scrollStrategy=new wi;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(n){if(n){let e=Object.keys(n);for(let t of e)n[t]!==void 0&&(this[t]=n[t])}}};var Dr=class{connectionPair;scrollableViewProperties;constructor(n,e){this.connectionPair=n,this.scrollableViewProperties=e}};var Ol=(()=>{class i{_attachedOverlays=[];_document=l(w);_isAttached=!1;ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let t=this._attachedOverlays.indexOf(e);t>-1&&this._attachedOverlays.splice(t,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,t,r){return r.observers.length<1?!1:e.eventPredicate?e.eventPredicate(t):!0}static \u0275fac=function(t){return new(t||i)};static \u0275prov=C({token:i,factory:i.\u0275fac})}return i})(),kl=(()=>{class i extends Ol{_ngZone=l(O);_renderer=l(ve).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let t=this._attachedOverlays;for(let r=t.length-1;r>-1;r--){let o=t[r];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static \u0275fac=function(t){return new(t||i)};static \u0275prov=C({token:i,factory:i.\u0275fac})}return i})(),Pl=(()=>{class i extends Ol{_platform=l(te);_ngZone=l(O);_renderer=l(ve).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let t=this._document.body,r={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(t,"pointerdown",this._pointerDownListener,r),o.listen(t,"click",this._clickListener,r),o.listen(t,"auxclick",this._clickListener,r),o.listen(t,"contextmenu",this._clickListener,r)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=t.style.cursor,t.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=Ee(e)};_clickListener=e=>{let t=Ee(e),r=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:t;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let a=o.length-1;a>-1;a--){let c=o[a],s=c._outsidePointerEvents;if(!(!c.hasAttached()||!this.canReceiveEvent(c,e,s))){if(El(c.overlayElement,t)||El(c.overlayElement,r))break;this._ngZone?this._ngZone.run(()=>s.next(e)):s.next(e)}}};static \u0275fac=function(t){return new(t||i)};static \u0275prov=C({token:i,factory:i.\u0275fac})}return i})();function El(i,n){let e=typeof ShadowRoot<"u"&&ShadowRoot,t=n;for(;t;){if(t===i)return!0;t=e&&t instanceof ShadowRoot?t.host:t.parentNode}return!1}var Fl=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(t,r){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2})}return i})(),Ll=(()=>{class i{_platform=l(te);_containerElement;_document=l(w);_styleLoader=l(Re);ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||ya()){let r=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<r.length;o++)r[o].remove()}let t=this._document.createElement("div");t.classList.add(e),ya()?t.setAttribute("platform","test"):this._platform.isBrowser||t.setAttribute("platform","server"),this._document.body.appendChild(t),this._containerElement=t}_loadStyles(){this._styleLoader.load(Fl)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=C({token:i,factory:i.\u0275fac})}return i})(),Fa=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(n,e,t,r){this._renderer=e,this._ngZone=t,this.element=n.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",r)}detach(){this._ngZone.runOutsideAngular(()=>{let n=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(n,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),n.style.pointerEvents="none",n.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function La(i){return i&&i.nodeType===1}var Er=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new I;_attachments=new I;_detachments=new I;_positionStrategy;_scrollStrategy;_locationChanges=ye.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new I;_outsidePointerEvents=new I;_afterNextRenderRef;constructor(n,e,t,r,o,a,c,s,d,u=!1,f,v){this._portalOutlet=n,this._host=e,this._pane=t,this._config=r,this._ngZone=o,this._keyboardDispatcher=a,this._document=c,this._location=s,this._outsideClickDispatcher=d,this._animationsDisabled=u,this._injector=f,this._renderer=v,r.scrollStrategy&&(this._scrollStrategy=r.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=r.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(n){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(n);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=Je(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let n=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),n}dispose(){if(this._disposed)return;let n=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,n&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(n){n!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=n,this.hasAttached()&&(n.attach(this),this.updatePosition()))}updateSize(n){this._config=g(g({},this._config),n),this._updateElementSize()}setDirection(n){this._config=Y(g({},this._config),{direction:n}),this._updateElementDirection()}addPanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!0)}removePanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!1)}getDirection(){let n=this._config.direction;return n?typeof n=="string"?n:n.value:"ltr"}updateScrollStrategy(n){n!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=n,this.hasAttached()&&(n.attach(this),n.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let n=this._pane.style;n.width=K(this._config.width),n.height=K(this._config.height),n.minWidth=K(this._config.minWidth),n.minHeight=K(this._config.minHeight),n.maxWidth=K(this._config.maxWidth),n.maxHeight=K(this._config.maxHeight)}_togglePointerEvents(n){this._pane.style.pointerEvents=n?"":"none"}_attachHost(){if(!this._host.parentElement){let n=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;La(n)?n.after(this._host):n?.type==="parent"?n.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let n="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new Fa(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(n))}):this._backdropRef.element.classList.add(n)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(n,e,t){let r=wa(e||[]).filter(o=>!!o);r.length&&(t?n.classList.add(...r):n.classList.remove(...r))}_detachContentWhenEmpty(){let n=!1;try{this._detachContentAfterRenderRef=Je(()=>{n=!0,this._detachContent()},{injector:this._injector})}catch(e){if(n)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let n=this._scrollStrategy;n?.disable(),n?.detach?.()}},xl="cdk-overlay-connected-position-bounding-box",Rm=/([A-Za-z%]+)$/;function Rr(i,n){return new xr(n,i.get(En),i.get(w),i.get(te),i.get(Ll))}var xr=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new I;_resizeSubscription=ye.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(n,e,t,r,o){this._viewportRuler=e,this._document=t,this._platform=r,this._overlayContainer=o,this.setOrigin(n)}attach(n){this._overlayRef&&this._overlayRef,this._validatePositions(),n.hostElement.classList.add(xl),this._overlayRef=n,this._boundingBox=n.hostElement,this._pane=n.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let n=this._originRect,e=this._overlayRect,t=this._viewportRect,r=this._containerRect,o=[],a;for(let c of this._preferredPositions){let s=this._getOriginPoint(n,r,c),d=this._getOverlayPoint(s,e,c),u=this._getOverlayFit(d,e,t,c);if(u.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(c,s);return}if(this._canFitWithFlexibleDimensions(u,d,t)){o.push({position:c,origin:s,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(s,c)});continue}(!a||a.overlayFit.visibleArea<u.visibleArea)&&(a={overlayFit:u,overlayPoint:d,originPoint:s,position:c,overlayRect:e})}if(o.length){let c=null,s=-1;for(let d of o){let u=d.boundingBoxRect.width*d.boundingBoxRect.height*(d.position.weight||1);u>s&&(s=u,c=d)}this._isPushed=!1,this._applyPosition(c.position,c.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(a.position,a.originPoint);return}this._applyPosition(a.position,a.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&Wt(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(xl),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let n=this._lastPosition;n?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(n,this._getOriginPoint(this._originRect,this._containerRect,n))):this.apply()}withScrollableContainers(n){return this._scrollables=n,this}withPositions(n){return this._preferredPositions=n,n.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(n){return this._viewportMargin=n,this}withFlexibleDimensions(n=!0){return this._hasFlexibleDimensions=n,this}withGrowAfterOpen(n=!0){return this._growAfterOpen=n,this}withPush(n=!0){return this._canPush=n,this}withLockedPosition(n=!0){return this._positionLocked=n,this}setOrigin(n){return this._origin=n,this}withDefaultOffsetX(n){return this._offsetX=n,this}withDefaultOffsetY(n){return this._offsetY=n,this}withTransformOriginOn(n){return this._transformOriginSelector=n,this}withPopoverLocation(n){return this._popoverLocation=n,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof $?this._origin.nativeElement:La(this._origin)?this._origin:null}_getOriginPoint(n,e,t){let r;if(t.originX=="center")r=n.left+n.width/2;else{let a=this._isRtl()?n.right:n.left,c=this._isRtl()?n.left:n.right;r=t.originX=="start"?a:c}e.left<0&&(r-=e.left);let o;return t.originY=="center"?o=n.top+n.height/2:o=t.originY=="top"?n.top:n.bottom,e.top<0&&(o-=e.top),{x:r,y:o}}_getOverlayPoint(n,e,t){let r;t.overlayX=="center"?r=-e.width/2:t.overlayX==="start"?r=this._isRtl()?-e.width:0:r=this._isRtl()?0:-e.width;let o;return t.overlayY=="center"?o=-e.height/2:o=t.overlayY=="top"?0:-e.height,{x:n.x+r,y:n.y+o}}_getOverlayFit(n,e,t,r){let o=Nl(e),{x:a,y:c}=n,s=this._getOffset(r,"x"),d=this._getOffset(r,"y");s&&(a+=s),d&&(c+=d);let u=0-a,f=a+o.width-t.width,v=0-c,D=c+o.height-t.height,A=this._subtractOverflows(o.width,u,f),k=this._subtractOverflows(o.height,v,D),H=A*k;return{visibleArea:H,isCompletelyWithinViewport:o.width*o.height===H,fitsInViewportVertically:k===o.height,fitsInViewportHorizontally:A==o.width}}_canFitWithFlexibleDimensions(n,e,t){if(this._hasFlexibleDimensions){let r=t.bottom-e.y,o=t.right-e.x,a=Ml(this._overlayRef.getConfig().minHeight),c=Ml(this._overlayRef.getConfig().minWidth),s=n.fitsInViewportVertically||a!=null&&a<=r,d=n.fitsInViewportHorizontally||c!=null&&c<=o;return s&&d}return!1}_pushOverlayOnScreen(n,e,t){if(this._previousPushAmount&&this._positionLocked)return{x:n.x+this._previousPushAmount.x,y:n.y+this._previousPushAmount.y};let r=Nl(e),o=this._viewportRect,a=Math.max(n.x+r.width-o.width,0),c=Math.max(n.y+r.height-o.height,0),s=Math.max(o.top-t.top-n.y,0),d=Math.max(o.left-t.left-n.x,0),u=0,f=0;return r.width<=o.width?u=d||-a:u=n.x<this._getViewportMarginStart()?o.left-t.left-n.x:0,r.height<=o.height?f=s||-c:f=n.y<this._getViewportMarginTop()?o.top-t.top-n.y:0,this._previousPushAmount={x:u,y:f},{x:n.x+u,y:n.y+f}}_applyPosition(n,e){if(this._setTransformOrigin(n),this._setOverlayElementStyles(e,n),this._setBoundingBoxStyles(e,n),n.panelClass&&this._addPanelClasses(n.panelClass),this._positionChanges.observers.length){let t=this._getScrollVisibility();if(n!==this._lastPosition||!this._lastScrollVisibility||!Im(this._lastScrollVisibility,t)){let r=new Dr(n,t);this._positionChanges.next(r)}this._lastScrollVisibility=t}this._lastPosition=n,this._isInitialRender=!1}_setTransformOrigin(n){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),t,r=n.overlayY;n.overlayX==="center"?t="center":this._isRtl()?t=n.overlayX==="start"?"right":"left":t=n.overlayX==="start"?"left":"right";for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${t} ${r}`}_calculateBoundingBoxRect(n,e){let t=this._viewportRect,r=this._isRtl(),o,a,c;if(e.overlayY==="top")a=n.y,o=t.height-a+this._getViewportMarginBottom();else if(e.overlayY==="bottom")c=t.height-n.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=t.height-c+this._getViewportMarginTop();else{let D=Math.min(t.bottom-n.y+t.top,n.y),A=this._lastBoundingBoxSize.height;o=D*2,a=n.y-D,o>A&&!this._isInitialRender&&!this._growAfterOpen&&(a=n.y-A/2)}let s=e.overlayX==="start"&&!r||e.overlayX==="end"&&r,d=e.overlayX==="end"&&!r||e.overlayX==="start"&&r,u,f,v;if(d)v=t.width-n.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),u=n.x-this._getViewportMarginStart();else if(s)f=n.x,u=t.right-n.x-this._getViewportMarginEnd();else{let D=Math.min(t.right-n.x+t.left,n.x),A=this._lastBoundingBoxSize.width;u=D*2,f=n.x-D,u>A&&!this._isInitialRender&&!this._growAfterOpen&&(f=n.x-A/2)}return{top:a,left:f,bottom:c,right:v,width:u,height:o}}_setBoundingBoxStyles(n,e){let t=this._calculateBoundingBoxRect(n,e);!this._isInitialRender&&!this._growAfterOpen&&(t.height=Math.min(t.height,this._lastBoundingBoxSize.height),t.width=Math.min(t.width,this._lastBoundingBoxSize.width));let r={};if(this._hasExactPosition())r.top=r.left="0",r.bottom=r.right="auto",r.maxHeight=r.maxWidth="",r.width=r.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,a=this._overlayRef.getConfig().maxWidth;r.width=K(t.width),r.height=K(t.height),r.top=K(t.top)||"auto",r.bottom=K(t.bottom)||"auto",r.left=K(t.left)||"auto",r.right=K(t.right)||"auto",e.overlayX==="center"?r.alignItems="center":r.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?r.justifyContent="center":r.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",o&&(r.maxHeight=K(o)),a&&(r.maxWidth=K(a))}this._lastBoundingBoxSize=t,Wt(this._boundingBox.style,r)}_resetBoundingBoxStyles(){Wt(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){Wt(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(n,e){let t={},r=this._hasExactPosition(),o=this._hasFlexibleDimensions,a=this._overlayRef.getConfig();if(r){let u=this._viewportRuler.getViewportScrollPosition();Wt(t,this._getExactOverlayY(e,n,u)),Wt(t,this._getExactOverlayX(e,n,u))}else t.position="static";let c="",s=this._getOffset(e,"x"),d=this._getOffset(e,"y");s&&(c+=`translateX(${s}px) `),d&&(c+=`translateY(${d}px)`),t.transform=c.trim(),a.maxHeight&&(r?t.maxHeight=K(a.maxHeight):o&&(t.maxHeight="")),a.maxWidth&&(r?t.maxWidth=K(a.maxWidth):o&&(t.maxWidth="")),Wt(this._pane.style,t)}_getExactOverlayY(n,e,t){let r={top:"",bottom:""},o=this._getOverlayPoint(e,this._overlayRect,n);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,t)),n.overlayY==="bottom"){let a=this._document.documentElement.clientHeight;r.bottom=`${a-(o.y+this._overlayRect.height)}px`}else r.top=K(o.y);return r}_getExactOverlayX(n,e,t){let r={left:"",right:""},o=this._getOverlayPoint(e,this._overlayRect,n);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,t));let a;if(this._isRtl()?a=n.overlayX==="end"?"left":"right":a=n.overlayX==="end"?"right":"left",a==="right"){let c=this._document.documentElement.clientWidth;r.right=`${c-(o.x+this._overlayRect.width)}px`}else r.left=K(o.x);return r}_getScrollVisibility(){let n=this._getOriginRect(),e=this._pane.getBoundingClientRect(),t=this._scrollables.map(r=>r.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:Dl(n,t),isOriginOutsideView:Pa(n,t),isOverlayClipped:Dl(e,t),isOverlayOutsideView:Pa(e,t)}}_subtractOverflows(n,...e){return e.reduce((t,r)=>t-Math.max(r,0),n)}_getNarrowedViewportRect(){let n=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,t=this._viewportRuler.getViewportScrollPosition();return{top:t.top+this._getViewportMarginTop(),left:t.left+this._getViewportMarginStart(),right:t.left+n-this._getViewportMarginEnd(),bottom:t.top+e-this._getViewportMarginBottom(),width:n-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(n,e){return e==="x"?n.offsetX==null?this._offsetX:n.offsetX:n.offsetY==null?this._offsetY:n.offsetY}_validatePositions(){}_addPanelClasses(n){this._pane&&wa(n).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(n=>{this._pane.classList.remove(n)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let n=this._origin;if(n instanceof $)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();let e=n.width||0,t=n.height||0;return{top:n.y,bottom:n.y+t,left:n.x,right:n.x+e,height:t,width:e}}_getContainerRect(){let n=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();n&&(e.style.display="block");let t=e.getBoundingClientRect();return n&&(e.style.display=""),t}};function Wt(i,n){for(let e in n)n.hasOwnProperty(e)&&(i[e]=n[e]);return i}function Ml(i){if(typeof i!="number"&&i!=null){let[n,e]=i.split(Rm);return!e||e==="px"?parseFloat(n):null}return i||null}function Nl(i){return{top:Math.floor(i.top),right:Math.floor(i.right),bottom:Math.floor(i.bottom),left:Math.floor(i.left),width:Math.floor(i.width),height:Math.floor(i.height)}}function Im(i,n){return i===n?!0:i.isOriginClipped===n.isOriginClipped&&i.isOriginOutsideView===n.isOriginOutsideView&&i.isOverlayClipped===n.isOverlayClipped&&i.isOverlayOutsideView===n.isOverlayOutsideView}var Rl="cdk-global-overlay-wrapper";function Bl(i){return new Mr}var Mr=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(n){let e=n.getConfig();this._overlayRef=n,this._width&&!e.width&&n.updateSize({width:this._width}),this._height&&!e.height&&n.updateSize({height:this._height}),n.hostElement.classList.add(Rl),this._isDisposed=!1}top(n=""){return this._bottomOffset="",this._topOffset=n,this._alignItems="flex-start",this}left(n=""){return this._xOffset=n,this._xPosition="left",this}bottom(n=""){return this._topOffset="",this._bottomOffset=n,this._alignItems="flex-end",this}right(n=""){return this._xOffset=n,this._xPosition="right",this}start(n=""){return this._xOffset=n,this._xPosition="start",this}end(n=""){return this._xOffset=n,this._xPosition="end",this}width(n=""){return this._overlayRef?this._overlayRef.updateSize({width:n}):this._width=n,this}height(n=""){return this._overlayRef?this._overlayRef.updateSize({height:n}):this._height=n,this}centerHorizontally(n=""){return this.left(n),this._xPosition="center",this}centerVertically(n=""){return this.top(n),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,t=this._overlayRef.getConfig(),{width:r,height:o,maxWidth:a,maxHeight:c}=t,s=(r==="100%"||r==="100vw")&&(!a||a==="100%"||a==="100vw"),d=(o==="100%"||o==="100vh")&&(!c||c==="100%"||c==="100vh"),u=this._xPosition,f=this._xOffset,v=this._overlayRef.getConfig().direction==="rtl",D="",A="",k="";s?k="flex-start":u==="center"?(k="center",v?A=f:D=f):v?u==="left"||u==="end"?(k="flex-end",D=f):(u==="right"||u==="start")&&(k="flex-start",A=f):u==="left"||u==="start"?(k="flex-start",D=f):(u==="right"||u==="end")&&(k="flex-end",A=f),n.position=this._cssPosition,n.marginLeft=s?"0":D,n.marginTop=d?"0":this._topOffset,n.marginBottom=this._bottomOffset,n.marginRight=s?"0":A,e.justifyContent=k,e.alignItems=d?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,t=e.style;e.classList.remove(Rl),t.justifyContent=t.alignItems=n.marginTop=n.marginBottom=n.marginLeft=n.marginRight=n.position="",this._overlayRef=null,this._isDisposed=!0}},jl=(()=>{class i{_injector=l(G);global(){return Bl()}flexibleConnectedTo(e){return Rr(this._injector,e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=C({token:i,factory:i.\u0275fac})}return i})(),Ul=new b("OVERLAY_DEFAULT_CONFIG");function Ir(i,n){i.get(Re).load(Fl);let e=i.get(Ll),t=i.get(w),r=i.get(ct),o=i.get(tt),a=i.get(Ut),c=i.get(et,null,{optional:!0})||i.get(ve).createRenderer(null,null),s=new xn(n),d=i.get(Ul,null,{optional:!0})?.usePopover??!0;s.direction=s.direction||a.value,!t.body||!("showPopover"in t.body)?s.usePopover=!1:s.usePopover=n?.usePopover??d;let u=t.createElement("div"),f=t.createElement("div");u.id=r.getId("cdk-overlay-"),u.classList.add("cdk-overlay-pane"),f.appendChild(u),s.usePopover&&(f.setAttribute("popover","manual"),f.classList.add("cdk-overlay-popover"));let v=s.usePopover?s.positionStrategy?.getPopoverInsertionPoint?.():null;return La(v)?v.after(f):v?.type==="parent"?v.element.appendChild(f):e.getContainerElement().appendChild(f),new Er(new Si(u,o,i),f,u,s,i.get(O),i.get(kl),t,i.get(vt),i.get(Pl),n?.disableAnimations??i.get(Qt,null,{optional:!0})==="NoopAnimations",i.get(de),c)}var zl=(()=>{class i{scrollStrategies=l(Tl);_positionBuilder=l(jl);_injector=l(G);create(e){return Ir(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(t){return new(t||i)};static \u0275prov=C({token:i,factory:i.\u0275fac})}return i})();var Ba=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=z({type:i});static \u0275inj=U({providers:[zl],imports:[ne,wl,ka,ka]})}return i})();var Tm=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],Om=["mat-icon, [matMenuItemIcon]","*"];function km(i,n){i&1&&(to(),h(0,"svg",2),q(1,"polygon",3),m())}var Pm=["*"];function Fm(i,n){if(i&1){let e=Ai();Me(0,"div",0),ms("click",function(){Et(e);let r=Q();return xt(r.closed.emit("click"))})("animationstart",function(r){Et(e);let o=Q();return xt(o._onAnimationStart(r.animationName))})("animationend",function(r){Et(e);let o=Q();return xt(o._onAnimationDone(r.animationName))})("animationcancel",function(r){Et(e);let o=Q();return xt(o._onAnimationDone(r.animationName))}),Me(1,"div",1),j(2),Te()()}if(i&2){let e=Q();qe(e._classList),F("mat-menu-panel-animations-disabled",e._animationsDisabled)("mat-menu-panel-exit-animation",e._panelAnimationState==="void")("mat-menu-panel-animating",e._isAnimating()),Ti("id",e.panelId),_e("aria-label",e.ariaLabel||null)("aria-labelledby",e.ariaLabelledby||null)("aria-describedby",e.ariaDescribedby||null)}}var Ua=new b("MAT_MENU_PANEL"),Ci=(()=>{class i{_elementRef=l($);_document=l(w);_focusMonitor=l(yt);_parentMenu=l(Ua,{optional:!0});_changeDetectorRef=l(Ue);role="menuitem";disabled=!1;disableRipple=!1;_hovered=new I;_focused=new I;_highlighted=!1;_triggersSubmenu=!1;constructor(){l(Re).load(Gt),this._parentMenu?.addItem?.(this)}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll("mat-icon, .material-icons");for(let r=0;r<t.length;r++)t[r].remove();return e.textContent?.trim()||""}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-focus-indicator"],hostVars:8,hostBindings:function(t,r){t&1&&Ce("click",function(a){return r._checkDisabled(a)})("mouseenter",function(){return r._handleMouseEnter()}),t&2&&(_e("role",r.role)("tabindex",r._getTabIndex())("aria-disabled",r.disabled)("disabled",r.disabled||null),F("mat-mdc-menu-item-highlighted",r._highlighted)("mat-mdc-menu-item-submenu-trigger",r._triggersSubmenu))},inputs:{role:"role",disabled:[2,"disabled","disabled",W],disableRipple:[2,"disableRipple","disableRipple",W]},exportAs:["matMenuItem"],ngContentSelectors:Om,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(t,r){t&1&&(oe(Tm),j(0),h(1,"span",0),j(2,1),m(),q(3,"div",1),nt(4,km,2,0,":svg:svg",2)),t&2&&(_(3),R("matRippleDisabled",r.disableRipple||r.disabled)("matRippleTrigger",r._getHostElement()),_(),it(r._triggersSubmenu?4:-1))},dependencies:[hl],encapsulation:2})}return i})();var Lm=new b("MatMenuContent");var Bm=new b("mat-menu-default-options",{providedIn:"root",factory:()=>({overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"})}),ja="_mat-menu-enter",Ar="_mat-menu-exit",Nn=(()=>{class i{_elementRef=l($);_changeDetectorRef=l(Ue);_injector=l(G);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=$e();_allItems;_directDescendantItems=new Nt;_classList={};_panelAnimationState="void";_animationDone=new I;_isAnimating=ue(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;get panelClass(){return this._previousPanelClass}set panelClass(e){let t=this._previousPanelClass,r=g({},this._classList);t&&t.length&&t.split(" ").forEach(o=>{r[o]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(" ").forEach(o=>{r[o]=!0}),this._elementRef.nativeElement.className=""),this._classList=r}_previousPanelClass="";get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new re;close=this.closed;panelId=l(ct).getId("mat-menu-panel-");constructor(){let e=l(Bm);this.overlayPanelClass=e.overlayPanelClass||"",this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new $t(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(Be(this._directDescendantItems),ie(e=>Ct(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState==="enter"&&t.activeItem?._hasFocus()){let r=e.toArray(),o=Math.max(0,Math.min(r.length-1,t.activeItemIndex||0));r[o]&&!r[o].disabled?t.setActiveItem(o):t.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(Be(this._directDescendantItems),ie(t=>Ct(...t.map(r=>r._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,r=this._keyManager;switch(t){case 27:pr(e)||(e.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(t===38||t===40)&&r.setFocusOrigin("keyboard"),r.onKeydown(e);return}}focusFirstItem(e="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=Je(()=>{let t=this._resolvePanel();if(!t||!t.contains(document.activeElement)){let r=this._keyManager;r.setFocusOrigin(e).setFirstItemActive(),!r.activeItem&&t&&t.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=Y(g({},this._classList),{"mat-menu-before":e==="before","mat-menu-after":e==="after","mat-menu-above":t==="above","mat-menu-below":t==="below"}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let t=e===Ar;(t||e===ja)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?"void":"enter"),this._isAnimating.set(!1))}_onAnimationStart(e){(e===ja||e===Ar)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?"enter":"void",e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(Ar),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?ja:Ar)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(Be(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),e}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["mat-menu"]],contentQueries:function(t,r,o){if(t&1&&It(o,Lm,5)(o,Ci,5)(o,Ci,4),t&2){let a;J(a=ee())&&(r.lazyContent=a.first),J(a=ee())&&(r._allItems=a),J(a=ee())&&(r.items=a)}},viewQuery:function(t,r){if(t&1&&Un(ft,5),t&2){let o;J(o=ee())&&(r.templateRef=o.first)}},hostVars:3,hostBindings:function(t,r){t&2&&_e("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",W],hasBackdrop:[2,"hasBackdrop","hasBackdrop",e=>e==null?null:W(e)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[sn([{provide:Ua,useExisting:i}])],ngContentSelectors:Pm,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel",3,"click","animationstart","animationend","animationcancel","id"],[1,"mat-mdc-menu-content"]],template:function(t,r){t&1&&(oe(),hs(0,Fm,3,12,"ng-template"))},styles:[`mat-menu {
  display: none;
}

.mat-mdc-menu-content {
  margin: 0;
  padding: 8px 0;
  outline: 0;
}
.mat-mdc-menu-content,
.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  flex: 1;
  white-space: normal;
  font-family: var(--%NS%mat-menu-item-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-menu-item-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-menu-item-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-menu-item-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  font-weight: var(--%NS%mat-menu-item-label-text-weight, var(--%NS%mat-sys-label-large-weight));
}

@keyframes _mat-menu-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-menu-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-menu-panel {
  min-width: 112px;
  max-width: 280px;
  overflow: auto;
  box-sizing: border-box;
  outline: 0;
  animation: _mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);
  border-radius: var(--%NS%mat-menu-container-shape, var(--%NS%mat-sys-corner-extra-small));
  background-color: var(--%NS%mat-menu-container-color, var(--%NS%mat-sys-surface-container));
  box-shadow: var(--%NS%mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  will-change: transform, opacity;
}
.mat-mdc-menu-panel.mat-menu-panel-exit-animation {
  animation: _mat-menu-exit 100ms 25ms linear forwards;
}
.mat-mdc-menu-panel.mat-menu-panel-animations-disabled {
  animation: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating {
  pointer-events: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty) {
  display: none;
}
@media (forced-colors: active) {
  .mat-mdc-menu-panel {
    outline: solid 1px;
  }
}
.mat-mdc-menu-panel .mat-divider {
  border-top-color: var(--%NS%mat-menu-divider-color, var(--%NS%mat-sys-surface-variant));
  margin-bottom: var(--%NS%mat-menu-divider-bottom-spacing, 8px);
  margin-top: var(--%NS%mat-menu-divider-top-spacing, 8px);
}

.mat-mdc-menu-item {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  color: inherit;
  font-size: inherit;
  background: none;
  text-decoration: none;
  margin: 0;
  min-height: 48px;
  padding-left: var(--%NS%mat-menu-item-leading-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-trailing-spacing, 12px);
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-menu-item::-moz-focus-inner {
  border: 0;
}
[dir=rtl] .mat-mdc-menu-item {
  padding-left: var(--%NS%mat-menu-item-trailing-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-leading-spacing, 12px);
}
.mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--%NS%mat-menu-item-with-icon-leading-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-with-icon-trailing-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--%NS%mat-menu-item-with-icon-trailing-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-with-icon-leading-spacing, 12px);
}
.mat-mdc-menu-item, .mat-mdc-menu-item:visited, .mat-mdc-menu-item:link {
  color: var(--%NS%mat-menu-item-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-menu-item .mat-icon-no-color,
.mat-mdc-menu-item .mat-mdc-menu-submenu-icon {
  color: var(--%NS%mat-menu-item-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-menu-item[disabled] {
  cursor: default;
  opacity: 0.38;
}
.mat-mdc-menu-item[disabled]::after {
  display: block;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.mat-mdc-menu-item:focus {
  outline: 0;
}
.mat-mdc-menu-item .mat-icon {
  flex-shrink: 0;
  margin-right: var(--%NS%mat-menu-item-spacing, 12px);
  height: var(--%NS%mat-menu-item-icon-size, 24px);
  width: var(--%NS%mat-menu-item-icon-size, 24px);
}
[dir=rtl] .mat-mdc-menu-item {
  text-align: right;
}
[dir=rtl] .mat-mdc-menu-item .mat-icon {
  margin-right: 0;
  margin-left: var(--%NS%mat-menu-item-spacing, 12px);
}
.mat-mdc-menu-item:not([disabled]):hover {
  background-color: var(--%NS%mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-menu-item:not([disabled]).cdk-program-focused, .mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused, .mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted {
  background-color: var(--%NS%mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
@media (forced-colors: active) {
  .mat-mdc-menu-item {
    margin-top: 1px;
  }
}

.mat-mdc-menu-submenu-icon {
  width: var(--%NS%mat-menu-item-icon-size, 24px);
  height: 10px;
  fill: currentColor;
  padding-left: var(--%NS%mat-menu-item-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-submenu-icon {
  padding-right: var(--%NS%mat-menu-item-spacing, 12px);
  padding-left: 0;
}
[dir=rtl] .mat-mdc-menu-submenu-icon polygon {
  transform: scaleX(-1);
  transform-origin: center;
}
@media (forced-colors: active) {
  .mat-mdc-menu-submenu-icon {
    fill: CanvasText;
  }
}

.mat-mdc-menu-item .mat-mdc-menu-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
`],encapsulation:2})}return i})(),jm=new b("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let i=l(G);return()=>Nr(i)}});var Mn=new WeakMap,Um=(()=>{class i{_canHaveBackdrop;_element=l($);_viewContainerRef=l(We);_menuItemInstance=l(Ci,{optional:!0,self:!0});_dir=l(Ut,{optional:!0});_focusMonitor=l(yt);_ngZone=l(O);_injector=l(G);_scrollStrategy=l(jm);_changeDetectorRef=l(Ue);_animationsDisabled=$e();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=ye.EMPTY;_menuCloseSubscription=ye.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e?(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t==="click"||t==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t)})):this._destroyMenu(),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let t=l(Ua,{optional:!0});this._parentMaterialMenu=t instanceof Nn?t:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&Mn.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let t=this._menu;if(this._menuOpen||!t)return;this._pendingRemoval?.unsubscribe();let r=Mn.get(t);Mn.set(t,this),r&&r!==this&&r._closeMenu();let o=this._createOverlay(t),a=o.getConfig(),c=a.positionStrategy;this._setPosition(t,c),this._canHaveBackdrop?a.hasBackdrop=t.hasBackdrop==null?!this._triggersSubmenu():t.hasBackdrop:a.hasBackdrop=t.hasBackdrop??!1,o.hasAttached()||(o.attach(this._getPortal(t)),t.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),t.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,e&&t.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0),t instanceof Nn&&(t._setIsOpen(!0),t._directDescendantItems.changes.pipe(we(t.close)).subscribe(()=>{c.withLockedPosition(!1).reapplyLastPosition(),c.withLockedPosition(!0)}))}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}_destroyMenu(e){let t=this._overlayRef,r=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),r instanceof Nn&&this._ownsMenu(r)?(this._pendingRemoval=r._animationDone.pipe(Ge(1)).subscribe(()=>{t.detach(),Mn.has(r)||r.lazyContent?.detach()}),r._setIsOpen(!1)):(t.detach(),r?.lazyContent?.detach()),r&&this._ownsMenu(r)&&Mn.delete(r),this.restoreFocus&&(e==="keydown"||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=Ir(this._injector,t),this._overlayRef.keydownEvents().subscribe(r=>{this._menu instanceof Nn&&this._menu._handleKeydown(r)})}return this._overlayRef}_getOverlayConfig(e){return new xn({positionStrategy:Rr(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:e.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||"ltr",disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(r=>{this._ngZone.run(()=>{let o=r.connectionPair.overlayX==="start"?"after":"before",a=r.connectionPair.overlayY==="top"?"below":"above";e.setPositionClasses(o,a)})})}_setPosition(e,t){let[r,o]=e.xPosition==="before"?["end","start"]:["start","end"],[a,c]=e.yPosition==="above"?["bottom","top"]:["top","bottom"],[s,d]=[a,c],[u,f]=[r,o],v=0;if(this._triggersSubmenu()){if(f=r=e.xPosition==="before"?"start":"end",o=u=r==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let D=this._parentMaterialMenu.items.first;this._parentInnerPadding=D?D._getHostElement().offsetTop:0}v=a==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(s=a==="top"?"bottom":"top",d=c==="top"?"bottom":"top");t.withPositions([{originX:r,originY:s,overlayX:u,overlayY:a,offsetY:v},{originX:o,originY:s,overlayX:f,overlayY:a,offsetY:v},{originX:r,originY:d,overlayX:u,overlayY:c,offsetY:-v},{originX:o,originY:d,overlayX:f,overlayY:c,offsetY:-v}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),t=this._overlayRef.detachments(),r=this._parentMaterialMenu?this._parentMaterialMenu.closed:y(),o=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(le(a=>this._menuOpen&&a!==this._menuItemInstance)):y();return Ct(e,r,o,t)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new Dn(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return Mn.get(e)===this}_triggerIsAriaDisabled(){return W(this._element.nativeElement.getAttribute("aria-disabled"))}static \u0275fac=function(t){jn()};static \u0275dir=V({type:i})}return i})(),Hl=(()=>{class i extends Um{_cleanupTouchstart;_hoverSubscription=ye.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new re;onMenuOpen=this.menuOpened;menuClosed=new re;onMenuClose=this.menuClosed;constructor(){super(!0);let e=l(et);this._cleanupTouchstart=e.listen(this._element.nativeElement,"touchstart",t=>{Vt(t)||(this._openedBy="touch")},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){zt(e)||(this._openedBy=e.button===0?"mouse":void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(t===39&&this.dir==="ltr"||t===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!=="void"&&(this._openedBy="mouse",this._openMenu(!1))}))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=V({type:i,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(t,r){t&1&&Ce("click",function(a){return r._handleClick(a)})("mousedown",function(a){return r._handleMousedown(a)})("keydown",function(a){return r._handleKeydown(a)}),t&2&&_e("aria-haspopup",r.menu?"menu":null)("aria-expanded",r.menuOpen)("aria-controls",r.menuOpen?r.menu?.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],features:[Ye]})}return i})();var $l=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=z({type:i});static \u0275inj=U({imports:[Cn,Ba,ne,br]})}return i})();var Rn=class i{isDarkMode=ue(!1);constructor(){let n=localStorage.getItem("portfolio-theme");if(n)this.isDarkMode.set(n==="dark");else{let e=window.matchMedia("(prefers-color-scheme: dark)").matches;this.isDarkMode.set(e)}en(()=>{let e=this.isDarkMode(),t=document.documentElement,r=document.body;e?(t.classList.add("dark-theme"),r.style.colorScheme="dark",localStorage.setItem("portfolio-theme","dark")):(t.classList.remove("dark-theme"),r.style.colorScheme="light",localStorage.setItem("portfolio-theme","light"))})}toggleTheme(){this.isDarkMode.update(n=>!n)}static \u0275fac=function(e){return new(e||i)};static \u0275prov=T({token:i,factory:i.\u0275fac,providedIn:"root"})};var ae={name:"Edward Prins",title:"Senior Full Stack Engineer",tagline:"Crafting high-performance web applications and exceptional user interfaces.",bio:"Software Developer with 6+ years of experience leading incident response, modernizing legacy systems, and architecting cloud-native systems. I enjoy turning complex operational problems into reliable, well-tested software.",detailedBio:`I've spent the last six years building scalable, production-grade applications, drawing on a background in computer and mathematical sciences. For 3+ years, I've owned a mission-critical, real-time logistics dispatch platform end-to-end \u2014 used by ~220 dispatchers daily \u2014 transforming it from an untested, manually-deployed legacy stack into a fully automated, cloud-native system that ships changes safely and reliably from development through production.

  I lead the team's KTLO (Keep the Lights On) efforts, acting as first responder to production incidents and diagnosing issues across distributed, containerized systems. I also mentor incoming developers through a structured ramp-up, helping them build the skills and confidence to transition into specialized roles on the team.

  My design philosophy centers on writing clean, testable, and maintainable code, optimizing performance and observability, and continuously learning as a mentor who thrives in collaborative, forward-thinking teams.`,email:"egprinsiii@gmail.com",github:"https://github.com/eprins",linkedin:"https://linkedin.com/in/edwardprins",skills:[{name:"Angular",category:"Frontend"},{name:"TypeScript",category:"Frontend"},{name:"Bootstrap",category:"Frontend"},{name:"Tailwind CSS",category:"Frontend"},{name:"HTML",category:"Frontend"},{name:"Java",category:"Backend"},{name:"Spring Boot",category:"Backend"},{name:"Node.js",category:"Backend"},{name:"Express",category:"Backend"},{name:"PostgreSQL",category:"Backend"},{name:"Redis",category:"Backend"},{name:"REST APIs",category:"Backend"},{name:"Kafka",category:"Backend"},{name:"Python",category:"Backend"},{name:"C",category:"Backend"},{name:"Kubernetes",category:"DevOps/Tools"},{name:"Linux",category:"DevOps/Tools"},{name:"Playwright",category:"DevOps/Tools"},{name:"Datadog",category:"DevOps/Tools"},{name:"Git",category:"DevOps/Tools"},{name:"System Design",category:"Skills"},{name:"Incident Response",category:"Skills"},{name:"Mentorship",category:"Skills"},{name:"Legacy Modernization",category:"Skills"},{name:"Microservices",category:"Skills"},{name:"Data Visualization",category:"Skills"}],experience:[{role:"Senior Software Developer",company:"IMC Logistics",duration:"Apr. 2022 - Present",location:"Memphis, TN",description:["Led the KTLO (Keep the Lights On) team, acting as first responder to production incidents and mentoring incoming developers through a structured ramp-up before transitioning them to specialized teams.","Owned full-stack development of a mission-critical, real-time logistics dispatch platform (Postgres triggers, in-memory cache service, REST API, Angular UI) used by ~220 dispatchers daily, modernizing all four tiers over 3+ years from an untested, manually-deployed legacy stack into a fully CI/CD-automated, Kubernetes/GitOps-deployed system with gated dev/test/prod promotion.","Architected a configurable notifications system allowing users to subscribe to location- and event-based alerts across 16 trigger types, including arrivals, dispatches, deliveries, document milestones, and geofencing events."]},{role:"Software Developer",company:"IMC Logistics",duration:"Jul. 2021 - Apr. 2022",location:"Memphis, TN",description:["Acted as an early adopter and beta tester for GitLab CI/CD, Datadog APM/RUM, and Power BI reporting tools rolled out by other IT teams, while regularly collaborating with the Driver-facing IT team on shared initiatives.","Built automation services eliminating manual workflows - including automated appointment scheduling, a document generation service removing the need for drivers to manually upload paperwork to get paid, and an EIR parsing service that auto-populated order data."]},{role:"Contractor",company:"IMC Logistics",duration:"Jul. 2019 - Jul. 2021",location:"Memphis, TN",description:["Redesigned a legacy single-purpose feed parser into a generalized, config-driven equipment-pool ingestion platform, modernizing the codebase, adding multi-format support (delimited, XLSX, EDI) with ISO 6346 validation, and designing a diff-based sync engine - expanding partner coverage from 5 to 15 while improving data integrity and security posture."]},{role:"Contractor",company:"FedEx",duration:"Jul. 2018 - Jun. 2019",location:"Memphis, TN",description:["Contributed to migrating Air Operations' vacation bidding application from Java Swing to Angular for mechanics across the FedEx Memphis airport hub - building reusable components, writing unit tests, and resolving bugs to ensure a smooth transition from the legacy desktop tool."]},{role:"Software Developer",company:"Optimal Learning Lab",duration:"Jan. 2016 - Apr. 2016",location:"Memphis, TN",description:["Developed a Chart.js-based reporting module within a Meteor.js stack (MongoDB, jQuery, Underscore.js, Require.js), enabling instructors to visualize overall class and individual student performance over time, built and tested in a Vagrant-managed virtual environment emulating production conditions."]}],education:[{degree:"B.S., Computer and Mathematical Sciences",school:"The University of Memphis",duration:"May 2017",location:"Memphis, TN"}],projects:[{title:"Real-Time Dispatch Platform",description:"Owned a mission-critical, real-time logistics dispatch platform end-to-end for 3+ years \u2014 used by ~220 dispatchers daily \u2014 modernizing all four tiers (Postgres triggers, in-memory cache, REST API, Angular UI) from an untested, manually-deployed legacy stack into a fully automated, cloud-native system.",technologies:["Angular","Spring Boot","Kafka","Kubernetes","Server-Sent Events","Microservices","Playwright","Legacy Modernization"],company:"IMC Logistics",icon:"sync_alt"},{title:"Notifications System",description:"Architected a configurable notifications system allowing users to subscribe to location- and event-based alerts across 16 trigger types, including arrivals, dispatches, deliveries, document milestones, and geofencing events.",technologies:["Angular","Spring Boot","Kafka","Kubernetes","System Design"],company:"IMC Logistics",icon:"notifications_active"},{title:"Carrier & Terminal Automation Services",description:"Built automation services eliminating manual dispatch workflows \u2014 including automated appointment scheduling, a document generation service removing the need for drivers to manually upload paperwork to get paid, and an EIR parsing service that auto-populated order data.",technologies:["Spring Boot","Node.js","Kafka","Microservices","Kubernetes","System Design"],company:"IMC Logistics",icon:"local_shipping"},{title:"Equipment-Pool Ingestion Platform",description:"Redesigned a legacy single-purpose feed parser into a generalized, config-driven equipment-pool ingestion platform with multi-format support (delimited, XLSX, EDI), ISO 6346 validation, and a diff-based sync engine \u2014 expanding partner coverage from 5 to 15.",technologies:["Node.js","Linux","Legacy Modernization"],company:"IMC Logistics",icon:"inventory_2"},{title:"Air Operations Vacation Bidding Migration",description:"Contributed to migrating Air Operations' vacation bidding application from Java Swing to Angular for mechanics across the FedEx Memphis airport hub, building reusable components and unit tests.",technologies:["Angular","Java","Legacy Modernization"],company:"FedEx",icon:"flight_takeoff"},{title:"MoFaCTS Learning Analytics Reporting",description:"Developed a Chart.js-based reporting module for MoFaCTS, a research platform studying optimized learning practice schedules, enabling instructors to visualize overall class and individual student performance over time.",technologies:["Chart.js","Meteor.js","MongoDB","Node.js","Data Visualization","System Design"],company:"Optimal Learning Lab",icon:"insights"}],interests:[{title:"Researching",description:"I love diving deep into both technical and non-technical topics \u2014 whether it's exploring a new framework, dissecting a system design problem, or just chasing curiosity down a rabbit hole.",icon:"search"},{title:"Sports",description:"A dedicated fan of the Memphis Grizzlies, University of Memphis Tigers, Nashville Predators, and Seattle Seahawks \u2014 I love following the game and the community that comes with it.",icon:"sports_basketball"},{title:"Cooking",description:"I enjoy experimenting in the kitchen, trying new recipes and techniques \u2014 it's a hands-on way to unwind and create something tangible outside of code.",icon:"restaurant"},{title:"Swimming",description:"I swim regularly to stay active and clear my head \u2014 it's one of the few times I can fully disconnect and think through problems without distraction.",icon:"pool"}]};var Or=class i{themeService=l(Rn);portfolioName=ae.name;static \u0275fac=function(e){return new(e||i)};static \u0275cmp=S({type:i,selectors:[["app-header"]],decls:63,vars:6,consts:[["mobileMenu","matMenu"],[1,"header-toolbar"],[1,"header-container"],["href","#hero",1,"logo"],[1,"logo-accent"],[1,"desktop-nav"],["mat-button","","href","#about",1,"nav-link"],["mat-button","","href","#experience",1,"nav-link"],["mat-button","","href","#education",1,"nav-link"],["mat-button","","href","#projects",1,"nav-link"],["mat-button","","href","#interests",1,"nav-link"],["mat-button","","href","#contact",1,"nav-link","contact-btn"],["mat-icon-button","","aria-label","Toggle dark/light theme",3,"click"],[1,"mobile-nav"],["mat-icon-button","","aria-label","Toggle dark/light theme",1,"theme-toggle-mobile",3,"click"],["mat-icon-button","","aria-label","Open navigation menu",3,"matMenuTriggerFor"],["xPosition","before",1,"mobile-dropdown-menu"],["mat-menu-item","","href","#about"],["mat-menu-item","","href","#experience"],["mat-menu-item","","href","#education"],["mat-menu-item","","href","#projects"],["mat-menu-item","","href","#interests"],["mat-menu-item","","href","#contact"]],template:function(e,t){if(e&1&&(h(0,"mat-toolbar",1)(1,"div",2)(2,"a",3)(3,"span",4),p(4,"<"),m(),p(5),h(6,"span",4),p(7,"/>"),m()(),h(8,"nav",5)(9,"a",6),p(10,"About"),m(),h(11,"a",7),p(12,"Experience"),m(),h(13,"a",8),p(14,"Education"),m(),h(15,"a",9),p(16,"Projects"),m(),h(17,"a",10),p(18,"Interests"),m(),h(19,"a",11),p(20,"Contact"),m(),h(21,"button",12),Ce("click",function(){return t.themeService.toggleTheme()}),h(22,"mat-icon"),p(23),m()()(),h(24,"div",13)(25,"button",14),Ce("click",function(){return t.themeService.toggleTheme()}),h(26,"mat-icon"),p(27),m()(),h(28,"button",15)(29,"mat-icon"),p(30,"menu"),m()(),h(31,"mat-menu",16,0)(33,"a",17)(34,"mat-icon"),p(35,"person"),m(),h(36,"span"),p(37,"About"),m()(),h(38,"a",18)(39,"mat-icon"),p(40,"work"),m(),h(41,"span"),p(42,"Experience"),m()(),h(43,"a",19)(44,"mat-icon"),p(45,"school"),m(),h(46,"span"),p(47,"Education"),m()(),h(48,"a",20)(49,"mat-icon"),p(50,"code"),m(),h(51,"span"),p(52,"Projects"),m()(),h(53,"a",21)(54,"mat-icon"),p(55,"interests"),m(),h(56,"span"),p(57,"Interests"),m()(),h(58,"a",22)(59,"mat-icon"),p(60,"email"),m(),h(61,"span"),p(62,"Contact"),m()()()()()()),e&2){let r=ps(32);F("dark-header",t.themeService.isDarkMode()),_(5),De(" ",t.portfolioName," "),_(18),L(t.themeService.isDarkMode()?"light_mode":"dark_mode"),_(4),L(t.themeService.isDarkMode()?"light_mode":"dark_mode"),_(),R("matMenuTriggerFor",r)}},dependencies:[X,Kc,Xc,Ze,St,_i,me,he,$l,Nn,Ci,Hl],styles:[".header-toolbar[_ngcontent-%COMP%]{position:fixed;top:0;left:0;right:0;z-index:1000;background:rgba(var(--%NS%mat-sys-surface),.7);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border-bottom:1px solid rgba(128,128,128,.1);height:70px;padding:0;transition:background .3s ease,border-bottom .3s ease}.header-container[_ngcontent-%COMP%]{width:100%;max-width:1200px;margin:0 auto;padding:0 24px;display:flex;justify-content:space-between;align-items:center;box-sizing:border-box}.logo[_ngcontent-%COMP%]{font-size:1.35rem;font-weight:700;text-decoration:none;color:var(--%NS%mat-sys-on-surface);font-family:Roboto,sans-serif;letter-spacing:-.02rem;display:flex;align-items:center;gap:2px;transition:color .3s ease}.logo[_ngcontent-%COMP%]:hover{color:var(--%NS%mat-sys-primary)}.logo-accent[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-primary);font-weight:800}.desktop-nav[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}@media(max-width:768px){.desktop-nav[_ngcontent-%COMP%]{display:none}}.nav-link[_ngcontent-%COMP%]{font-weight:500;color:var(--%NS%mat-sys-on-surface-variant);transition:color .2s ease}.nav-link[_ngcontent-%COMP%]:hover{color:var(--%NS%mat-sys-primary)}.contact-btn[_ngcontent-%COMP%]{background:var(--%NS%mat-sys-primary-container);color:var(--%NS%mat-sys-on-primary-container);border-radius:20px;margin-left:8px;transition:opacity .2s ease}.contact-btn[_ngcontent-%COMP%]:hover{opacity:.9}.mobile-nav[_ngcontent-%COMP%]{display:none;align-items:center;gap:8px}@media(max-width:768px){.mobile-nav[_ngcontent-%COMP%]{display:flex}}.theme-toggle-mobile[_ngcontent-%COMP%]{margin-right:4px}"]})};var kr=class i{themeService=l(Rn);profile=ae;static \u0275fac=function(e){return new(e||i)};static \u0275cmp=S({type:i,selectors:[["app-hero"]],decls:83,vars:7,consts:[["id","hero",1,"hero-section"],[1,"blob","blob-primary"],[1,"blob","blob-secondary"],[1,"hero-container"],[1,"hero-text"],[1,"badge"],[1,"badge-dot"],[1,"greeting"],[1,"highlight-text"],[1,"role-title"],[1,"tagline"],[1,"summary"],[1,"cta-buttons"],["mat-flat-button","","color","primary","href","#projects",1,"hero-btn","primary-btn"],["mat-stroked-button","","href","#contact",1,"hero-btn","secondary-btn"],["mat-stroked-button","","href","/edward-prins-resume.pdf","download","",1,"hero-btn","secondary-btn"],[1,"hero-visual"],[1,"art-container"],[1,"cube-wrapper"],[1,"glowing-circle"],[1,"coding-card","glass-card"],[1,"card-header"],[1,"dot","red"],[1,"dot","yellow"],[1,"dot","green"],[1,"card-title"],[1,"card-body"],[1,"keyword"],[1,"string"],[1,"boolean"],[1,"decorative-badge"],[1,"badge-icon"],[1,"scroll-indicator"],["href","#about","aria-label","Scroll to About section"],[1,"mouse"],[1,"wheel"]],template:function(e,t){e&1&&(h(0,"section",0),q(1,"div",1)(2,"div",2),h(3,"div",3)(4,"div",4)(5,"div",5),q(6,"span",6),p(7," Available for New Opportunities "),m(),h(8,"h1",7),p(9,"Hi, I'm "),h(10,"span",8),p(11),m()(),h(12,"h2",9),p(13),m(),h(14,"p",10),p(15),m(),h(16,"p",11),p(17),m(),h(18,"div",12)(19,"a",13)(20,"span"),p(21,"View Projects"),m(),h(22,"mat-icon"),p(23,"arrow_forward"),m()(),h(24,"a",14)(25,"span"),p(26,"Get In Touch"),m(),h(27,"mat-icon"),p(28,"chat_bubble_outline"),m()(),h(29,"a",15)(30,"span"),p(31,"Download Resume"),m(),h(32,"mat-icon"),p(33,"download"),m()()()(),h(34,"div",16)(35,"div",17)(36,"div",18),q(37,"div",19),h(38,"div",20)(39,"div",21),q(40,"span",22)(41,"span",23)(42,"span",24),h(43,"span",25),p(44,"portfolio.ts"),m()(),h(45,"div",26)(46,"pre"),p(47,"                "),h(48,"code"),p(49,`
                  `),h(50,"span",27),p(51,"const"),m(),p(52,` developer = {
name: `),h(53,"span",28),p(54),m(),p(55,`,
skills: [
`),h(56,"span",28),p(57,"'Angular'"),m(),p(58,`,
`),h(59,"span",28),p(60,"'TypeScript'"),m(),p(61,`,
`),h(62,"span",28),p(63,"'Node.js'"),m(),p(64,`,
`),h(65,"span",28),p(66,"'Cloud'"),m(),p(67,`
],
passionate: `),h(68,"span",29),p(69,"true"),m(),p(70,`,
code: () => `),h(71,"span",28),p(72,"'\u2615 & \u{1F4BB}'"),m(),p(73,`
};`),m()()()(),h(74,"div",30)(75,"mat-icon",31),p(76,"auto_awesome"),m(),h(77,"span"),p(78,"6+ Yrs Exp"),m()()()()()(),h(79,"div",32)(80,"a",33)(81,"div",34),q(82,"div",35),m()()()()),e&2&&(F("dark",t.themeService.isDarkMode()),_(11),L(t.profile.name),_(2),L(t.profile.title),_(2),L(t.profile.tagline),_(2),L(t.profile.bio),_(37),De("'",t.profile.name,"'"))},dependencies:[X,Ze,St,me,he],styles:[".hero-section[_ngcontent-%COMP%]{min-height:100vh;display:flex;align-items:center;justify-content:center;padding:120px 24px 80px;position:relative;overflow:hidden;box-sizing:border-box}@media(max-width:960px){.hero-section[_ngcontent-%COMP%]{padding:100px 20px 60px;flex-direction:column}}.blob[_ngcontent-%COMP%]{position:absolute;border-radius:50%;filter:blur(80px);z-index:1;opacity:.15;transition:opacity .3s ease}.hero-section.dark[_ngcontent-%COMP%]   .blob[_ngcontent-%COMP%]{opacity:.25}.blob-primary[_ngcontent-%COMP%]{top:15%;right:15%;width:400px;height:400px;background:var(--%NS%mat-sys-primary)}@media(max-width:600px){.blob-primary[_ngcontent-%COMP%]{width:250px;height:250px}}.blob-secondary[_ngcontent-%COMP%]{bottom:10%;left:10%;width:350px;height:350px;background:var(--%NS%mat-sys-tertiary)}@media(max-width:600px){.blob-secondary[_ngcontent-%COMP%]{width:200px;height:200px}}.hero-container[_ngcontent-%COMP%]{width:100%;max-width:1200px;display:grid;grid-template-columns:1.2fr .8fr;gap:48px;align-items:center;z-index:2}@media(max-width:960px){.hero-container[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:40px;text-align:center}}.hero-text[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start}@media(max-width:960px){.hero-text[_ngcontent-%COMP%]{align-items:center}}.badge[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:8px;background:var(--%NS%mat-sys-primary-container);color:var(--%NS%mat-sys-on-primary-container);padding:6px 16px;border-radius:20px;font-size:.85rem;font-weight:500;margin-bottom:24px;letter-spacing:.02rem}.badge-dot[_ngcontent-%COMP%]{width:8px;height:8px;background-color:#2e7d32;border-radius:50%;animation:_ngcontent-%COMP%_pulse 1.8s infinite}@keyframes _ngcontent-%COMP%_pulse{0%{transform:scale(.95);box-shadow:0 0 #2e7d32b3}70%{transform:scale(1);box-shadow:0 0 0 6px #2e7d3200}to{transform:scale(.95);box-shadow:0 0 #2e7d3200}}.greeting[_ngcontent-%COMP%]{font-size:2rem;font-weight:500;margin:0 0 8px;color:var(--%NS%mat-sys-on-surface)}@media(max-width:600px){.greeting[_ngcontent-%COMP%]{font-size:1.5rem}}.highlight-text[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-primary);font-weight:800;position:relative}.role-title[_ngcontent-%COMP%]{font-size:3.5rem;font-weight:800;margin:0 0 16px;line-height:1.1;letter-spacing:-.1rem;color:var(--%NS%mat-sys-on-surface)}@media(max-width:600px){.role-title[_ngcontent-%COMP%]{font-size:2.2rem}}.tagline[_ngcontent-%COMP%]{font-size:1.35rem;font-weight:500;color:var(--%NS%mat-sys-primary);margin:0 0 20px;line-height:1.4}@media(max-width:600px){.tagline[_ngcontent-%COMP%]{font-size:1.1rem}}.summary[_ngcontent-%COMP%]{font-size:1.1rem;line-height:1.6;color:var(--%NS%mat-sys-on-surface-variant);margin:0 0 36px;max-width:600px}@media(max-width:600px){.summary[_ngcontent-%COMP%]{font-size:1rem;margin-bottom:24px}}.cta-buttons[_ngcontent-%COMP%]{display:flex;gap:16px}@media(max-width:600px){.cta-buttons[_ngcontent-%COMP%]{flex-direction:column;width:100%;gap:12px}}.hero-btn[_ngcontent-%COMP%]{height:48px;padding:0 28px;border-radius:24px;font-size:1rem;font-weight:500;display:inline-flex;align-items:center;gap:8px}@media(max-width:600px){.hero-btn[_ngcontent-%COMP%]{width:100%;justify-content:center}}.primary-btn[_ngcontent-%COMP%]{background:var(--%NS%mat-sys-primary);color:var(--%NS%mat-sys-on-primary);box-shadow:0 4px 14px rgba(var(--%NS%mat-sys-primary),.3);transition:transform .2s ease,box-shadow .2s ease}.primary-btn[_ngcontent-%COMP%]:hover{transform:translateY(-2px);box-shadow:0 6px 20px rgba(var(--%NS%mat-sys-primary),.4)}.secondary-btn[_ngcontent-%COMP%]{border-color:var(--%NS%mat-sys-outline);color:var(--%NS%mat-sys-on-surface);transition:background-color .2s ease,transform .2s ease}.secondary-btn[_ngcontent-%COMP%]:hover{background-color:rgba(var(--%NS%mat-sys-primary),.05);transform:translateY(-2px)}.hero-visual[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}@media(max-width:960px){.hero-visual[_ngcontent-%COMP%]{margin-top:20px}}.art-container[_ngcontent-%COMP%]{position:relative;width:100%;max-width:380px;aspect-ratio:1}.cube-wrapper[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;display:flex;justify-content:center;align-items:center}.glowing-circle[_ngcontent-%COMP%]{position:absolute;width:250px;height:250px;background:linear-gradient(135deg,var(--%NS%mat-sys-primary),var(--%NS%mat-sys-tertiary));border-radius:50%;filter:blur(40px);animation:_ngcontent-%COMP%_spin-slow 15s linear infinite;opacity:.6}@keyframes _ngcontent-%COMP%_spin-slow{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.coding-card[_ngcontent-%COMP%]{width:320px;padding:16px;position:relative;z-index:5;text-align:left;border:1px solid rgba(var(--%NS%mat-sys-outline),.2);box-shadow:0 20px 40px #00000026;font-family:monospace;font-size:.9rem;overflow:hidden}@media(max-width:600px){.coding-card[_ngcontent-%COMP%]{width:280px;font-size:.8rem}}.card-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px;border-bottom:1px solid rgba(var(--%NS%mat-sys-outline),.1);padding-bottom:12px;margin-bottom:12px}.dot[_ngcontent-%COMP%]{width:10px;height:10px;border-radius:50%}.red[_ngcontent-%COMP%]{background-color:#ff5f56}.yellow[_ngcontent-%COMP%]{background-color:#ffbd2e}.green[_ngcontent-%COMP%]{background-color:#27c93f}.card-title[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-on-surface-variant);margin-left:6px;font-size:.8rem}.card-body[_ngcontent-%COMP%]{line-height:1.5}pre[_ngcontent-%COMP%]{margin:0;white-space:pre-wrap}.keyword[_ngcontent-%COMP%]{color:#ff7b72;font-weight:700}.string[_ngcontent-%COMP%]{color:#a5d6ff}.boolean[_ngcontent-%COMP%]{color:#ff9b50}.dark[_ngcontent-%COMP%]   .string[_ngcontent-%COMP%]{color:#7ee787}.dark[_ngcontent-%COMP%]   .keyword[_ngcontent-%COMP%]{color:#ff7b72}.decorative-badge[_ngcontent-%COMP%]{position:absolute;bottom:15%;right:-10px;background:var(--%NS%mat-sys-surface-container-high);border:1px solid rgba(var(--%NS%mat-sys-outline),.15);border-radius:12px;padding:10px 16px;display:flex;align-items:center;gap:8px;box-shadow:0 10px 20px #0000001a;z-index:6;font-size:.85rem;font-weight:600;transform:rotate(5deg);transition:transform .3s ease}.decorative-badge[_ngcontent-%COMP%]:hover{transform:rotate(0) scale(1.05)}.badge-icon[_ngcontent-%COMP%]{color:gold;font-size:1.2rem;width:1.2rem;height:1.2rem}.scroll-indicator[_ngcontent-%COMP%]{position:absolute;bottom:24px;left:50%;transform:translate(-50%);z-index:10;opacity:.7;transition:opacity .3s ease}.scroll-indicator[_ngcontent-%COMP%]:hover{opacity:1}.mouse[_ngcontent-%COMP%]{width:26px;height:40px;border:2px solid var(--%NS%mat-sys-on-surface-variant);border-radius:13px;display:flex;justify-content:center;padding-top:6px;box-sizing:border-box}.wheel[_ngcontent-%COMP%]{width:4px;height:8px;background-color:var(--%NS%mat-sys-primary);border-radius:2px;animation:_ngcontent-%COMP%_scroll-wheel 1.5s infinite}@keyframes _ngcontent-%COMP%_scroll-wheel{0%{opacity:0;transform:translateY(0)}50%{opacity:1;transform:translateY(4px)}to{opacity:0;transform:translateY(8px)}}"]})};var Gl=(()=>{class i{isErrorState(e,t){return!!(e&&e.invalid&&(e.touched||t&&t.submitted))}isSignalErrorState(e){if(!e)return!1;let t=e().invalid(),r=e().touched();return t&&r}static \u0275fac=function(t){return new(t||i)};static \u0275prov=C({token:i,factory:i.\u0275fac})}return i})();var Vm=["*",[["mat-chip-avatar"],["","matChipAvatar",""]],[["mat-chip-trailing-icon"],["","matChipRemove",""],["","matChipTrailingIcon",""]]],Hm=["*","mat-chip-avatar, [matChipAvatar]","mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"];function $m(i,n){i&1&&(h(0,"span",3),j(1,1),m())}function Gm(i,n){i&1&&(h(0,"span",6),j(1,2),m())}var Wm=["*"];var Ym=new b("mat-chips-default-options",{providedIn:"root",factory:()=>({separatorKeyCodes:[13]})}),Wl=new b("MatChipAvatar"),Yl=new b("MatChipTrailingIcon"),ql=new b("MatChipEdit"),Xl=new b("MatChipRemove"),Kl=new b("MatChip"),Zl=(()=>{class i{_elementRef=l($);_parentChip=l(Kl);_isPrimary=!0;_isLeading=!1;get disabled(){return this._disabled||this._parentChip?.disabled||!1}set disabled(e){this._disabled=e}_disabled=!1;tabIndex=-1;_allowFocusWhenDisabled=!1;_getDisabledAttribute(){return this.disabled&&!this._allowFocusWhenDisabled?"":null}constructor(){l(Re).load(Gt),this._elementRef.nativeElement.nodeName==="BUTTON"&&this._elementRef.nativeElement.setAttribute("type","button")}focus(){this._elementRef.nativeElement.focus()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=V({type:i,selectors:[["","matChipContent",""]],hostAttrs:[1,"mat-mdc-chip-action","mdc-evolution-chip__action","mdc-evolution-chip__action--presentational"],hostVars:8,hostBindings:function(t,r){t&2&&(_e("disabled",r._getDisabledAttribute())("aria-disabled",r.disabled),F("mdc-evolution-chip__action--primary",r._isPrimary)("mdc-evolution-chip__action--secondary",!r._isPrimary)("mdc-evolution-chip__action--trailing",!r._isPrimary&&!r._isLeading))},inputs:{disabled:[2,"disabled","disabled",W],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?-1:Vn(e)],_allowFocusWhenDisabled:"_allowFocusWhenDisabled"}})}return i})(),qm=(()=>{class i extends Zl{_getTabindex(){return this.disabled&&!this._allowFocusWhenDisabled?null:this.tabIndex.toString()}_handleClick(e){!this.disabled&&this._isPrimary&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!this.disabled&&this._isPrimary&&!this._parentChip._isEditing&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ln(i)))(r||i)}})();static \u0275dir=V({type:i,selectors:[["","matChipAction",""]],hostVars:3,hostBindings:function(t,r){t&1&&Ce("click",function(a){return r._handleClick(a)})("keydown",function(a){return r._handleKeydown(a)}),t&2&&(_e("tabindex",r._getTabindex()),F("mdc-evolution-chip__action--presentational",!1))},features:[Ye]})}return i})();var Di=(()=>{class i{_changeDetectorRef=l(Ue);_elementRef=l($);_tagName=l(vs);_ngZone=l(O);_focusMonitor=l(yt);_globalRippleOptions=l(vi,{optional:!0});_document=l(w);_onFocus=new I;_onBlur=new I;_isBasicChip=!1;role=null;_hasFocusInternal=!1;_pendingFocus=!1;_actionChanges;_animationsDisabled=$e();_allLeadingIcons;_allTrailingIcons;_allEditIcons;_allRemoveIcons;_hasFocus(){return this._hasFocusInternal}id=l(ct).getId("mat-mdc-chip-");ariaLabel=null;ariaDescription=null;_chipListDisabled=!1;_hadFocusOnRemove=!1;_textElement;get value(){return this._value!==void 0?this._value:this._textElement.textContent.trim()}set value(e){this._value=e}_value;color;removable=!0;highlighted=!1;disableRipple=!1;get disabled(){return this._disabled||this._chipListDisabled}set disabled(e){this._disabled=e}_disabled=!1;removed=new re;destroyed=new re;basicChipAttrName="mat-basic-chip";leadingIcon;editIcon;trailingIcon;removeIcon;primaryAction;_rippleLoader=l(vr);_injector=l(G);constructor(){let e=l(Re);e.load(Gt),e.load(nl),this._monitorFocus(),this._rippleLoader?.configureRipple(this._elementRef.nativeElement,{className:"mat-mdc-chip-ripple",disabled:this._isRippleDisabled()})}ngOnInit(){this._isBasicChip=this._elementRef.nativeElement.hasAttribute(this.basicChipAttrName)||this._tagName.toLowerCase()===this.basicChipAttrName}ngAfterViewInit(){this._textElement=this._elementRef.nativeElement.querySelector(".mat-mdc-chip-action-label"),this._pendingFocus&&(this._pendingFocus=!1,this.focus())}ngAfterContentInit(){this._actionChanges=Ct(this._allLeadingIcons.changes,this._allTrailingIcons.changes,this._allEditIcons.changes,this._allRemoveIcons.changes).subscribe(()=>this._changeDetectorRef.markForCheck())}ngDoCheck(){this._rippleLoader.setDisabled(this._elementRef.nativeElement,this._isRippleDisabled())}ngOnDestroy(){this.destroyed.emit({chip:this}),this.destroyed.complete(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement),this._actionChanges?.unsubscribe()}remove(){this.removable&&(this._hadFocusOnRemove=this._hasFocus(),this.removed.emit({chip:this}))}_isRippleDisabled(){return this.disabled||this.disableRipple||this._animationsDisabled||this._isBasicChip||!this._hasInteractiveActions()||!!this._globalRippleOptions?.disabled}_hasTrailingIcon(){return!!(this.trailingIcon||this.removeIcon)}_handleKeydown(e){(e.keyCode===8&&!e.repeat||e.keyCode===46)&&(e.preventDefault(),this.remove())}focus(){this.disabled||(this.primaryAction?this.primaryAction.focus():this._pendingFocus=!0)}_getSourceAction(e){return this._getActions().find(t=>{let r=t._elementRef.nativeElement;return r===e||r.contains(e)})}_getActions(){let e=[];return this.editIcon&&e.push(this.editIcon),this.primaryAction&&e.push(this.primaryAction),this.removeIcon&&e.push(this.removeIcon),e}_handlePrimaryActionInteraction(){}_hasInteractiveActions(){return this._getActions().length>0}_edit(e){}_monitorFocus(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{let t=e!==null;t!==this._hasFocusInternal&&(this._hasFocusInternal=t,t?this._onFocus.next({chip:this}):(this._changeDetectorRef.markForCheck(),setTimeout(()=>this._ngZone.run(()=>this._onBlur.next({chip:this})))))})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["mat-basic-chip"],["","mat-basic-chip",""],["mat-chip"],["","mat-chip",""]],contentQueries:function(t,r,o){if(t&1&&It(o,Wl,5)(o,ql,5)(o,Yl,5)(o,Xl,5)(o,Wl,5)(o,Yl,5)(o,ql,5)(o,Xl,5),t&2){let a;J(a=ee())&&(r.leadingIcon=a.first),J(a=ee())&&(r.editIcon=a.first),J(a=ee())&&(r.trailingIcon=a.first),J(a=ee())&&(r.removeIcon=a.first),J(a=ee())&&(r._allLeadingIcons=a),J(a=ee())&&(r._allTrailingIcons=a),J(a=ee())&&(r._allEditIcons=a),J(a=ee())&&(r._allRemoveIcons=a)}},viewQuery:function(t,r){if(t&1&&Un(qm,5),t&2){let o;J(o=ee())&&(r.primaryAction=o.first)}},hostAttrs:[1,"mat-mdc-chip"],hostVars:31,hostBindings:function(t,r){t&1&&Ce("keydown",function(a){return r._handleKeydown(a)}),t&2&&(Ti("id",r.id),_e("role",r.role)("aria-label",r.ariaLabel),qe("mat-"+(r.color||"primary")),F("mdc-evolution-chip",!r._isBasicChip)("mdc-evolution-chip--disabled",r.disabled)("mdc-evolution-chip--with-trailing-action",r._hasTrailingIcon())("mdc-evolution-chip--with-primary-graphic",r.leadingIcon)("mdc-evolution-chip--with-primary-icon",r.leadingIcon)("mdc-evolution-chip--with-avatar",r.leadingIcon)("mat-mdc-chip-with-avatar",r.leadingIcon)("mat-mdc-chip-highlighted",r.highlighted)("mat-mdc-chip-disabled",r.disabled)("mat-mdc-basic-chip",r._isBasicChip)("mat-mdc-standard-chip",!r._isBasicChip)("mat-mdc-chip-with-trailing-icon",r._hasTrailingIcon())("_mat-animation-noopable",r._animationsDisabled))},inputs:{role:"role",id:"id",ariaLabel:[0,"aria-label","ariaLabel"],ariaDescription:[0,"aria-description","ariaDescription"],value:"value",color:"color",removable:[2,"removable","removable",W],highlighted:[2,"highlighted","highlighted",W],disableRipple:[2,"disableRipple","disableRipple",W],disabled:[2,"disabled","disabled",W]},outputs:{removed:"removed",destroyed:"destroyed"},exportAs:["matChip"],features:[sn([{provide:Kl,useExisting:i}])],ngContentSelectors:Hm,decls:8,vars:2,consts:[[1,"mat-mdc-chip-focus-overlay"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--primary"],["matChipContent",""],[1,"mdc-evolution-chip__graphic","mat-mdc-chip-graphic"],[1,"mdc-evolution-chip__text-label","mat-mdc-chip-action-label"],[1,"mat-mdc-chip-primary-focus-indicator","mat-focus-indicator"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--trailing"]],template:function(t,r){t&1&&(oe(Vm),q(0,"span",0),h(1,"span",1)(2,"span",2),nt(3,$m,2,0,"span",3),h(4,"span",4),j(5),q(6,"span",5),m()()(),nt(7,Gm,2,0,"span",6)),t&2&&(_(3),it(r.leadingIcon?3:-1),_(4),it(r._hasTrailingIcon()?7:-1))},dependencies:[Zl],styles:[`.mdc-evolution-chip,
.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  display: inline-flex;
  align-items: center;
}

.mdc-evolution-chip {
  position: relative;
  max-width: 100%;
}

.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  height: 100%;
}

.mdc-evolution-chip__cell--primary {
  flex-basis: 100%;
  overflow-x: hidden;
}

.mdc-evolution-chip__cell--trailing {
  flex: 1 0 auto;
}

.mdc-evolution-chip__action {
  align-items: center;
  background: none;
  border: none;
  box-sizing: content-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  outline: none;
  padding: 0;
  text-decoration: none;
  color: inherit;
}

.mdc-evolution-chip__action--presentational {
  cursor: auto;
}

.mdc-evolution-chip--disabled,
.mdc-evolution-chip__action:disabled {
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-evolution-chip--disabled,
  .mdc-evolution-chip__action:disabled {
    forced-color-adjust: none;
  }
}

.mdc-evolution-chip__action--primary {
  font: inherit;
  letter-spacing: inherit;
  white-space: inherit;
  overflow-x: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--%NS%primary::before {
  border-width: var(--%NS%mat-chip-outline-width, 1px);
  border-radius: var(--%NS%mat-chip-container-shape-radius, 8px);
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  pointer-events: none;
  top: 0;
  width: 100%;
  z-index: 1;
  border-style: solid;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--%NS%primary::before {
  border-color: var(--%NS%mat-chip-outline-color, var(--%NS%mat-sys-outline));
}
.mdc-evolution-chip__action--%NS%primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {
  border-color: var(--%NS%mat-chip-focus-outline-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--%NS%primary::before {
  border-color: var(--%NS%mat-chip-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--%NS%primary::before {
  border-width: var(--%NS%mat-chip-flat-selected-outline-width, 0);
}
.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {
  font: inherit;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}

.mdc-evolution-chip__action--secondary {
  position: relative;
  overflow: visible;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {
  color: var(--%NS%mat-chip-with-trailing-icon-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {
  color: var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, [dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}

.mdc-evolution-chip__text-label {
  -webkit-user-select: none;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__text-label {
  font-family: var(--%NS%mat-chip-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-chip-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-chip-label-text-size, var(--%NS%mat-sys-label-large-size));
  font-weight: var(--%NS%mat-chip-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  letter-spacing: var(--%NS%mat-chip-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--%NS%selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-selected-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mdc-evolution-chip__graphic {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
  position: relative;
  flex: 1 0 auto;
}
.mat-mdc-standard-chip .mdc-evolution-chip__graphic {
  width: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
  height: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
  font-size: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {
  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--%NS%selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {
  width: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {
  padding-left: 0;
}

.mdc-evolution-chip__checkmark {
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  height: 20px;
  width: 20px;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {
  color: var(--%NS%mat-chip-with-icon-selected-icon-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {
  color: var(--%NS%mat-chip-with-icon-disabled-icon-color, var(--%NS%mat-sys-on-surface));
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {
  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(-75%, -50%);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  transform: translate(-50%, -50%);
  opacity: 1;
}

.mdc-evolution-chip__checkmark-svg {
  display: block;
}

.mdc-evolution-chip__checkmark-path {
  stroke-width: 2px;
  stroke-dasharray: 29.7833385;
  stroke-dashoffset: 29.7833385;
  stroke: currentColor;
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {
  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {
  stroke-dashoffset: 0;
}
@media (forced-colors: active) {
  .mdc-evolution-chip__checkmark-path {
    stroke: CanvasText !important;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {
  height: 18px;
  width: 18px;
  font-size: 18px;
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {
  opacity: calc(var(--%NS%mat-chip-trailing-action-opacity, 1) * var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {
  opacity: calc(var(--%NS%mat-chip-trailing-action-focus-opacity, 1) * var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}

.mat-mdc-standard-chip {
  border-radius: var(--%NS%mat-chip-container-shape-radius, 8px);
  height: var(--%NS%mat-chip-container-height, 32px);
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {
  background-color: var(--%NS%mat-chip-elevated-container-color, transparent);
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  background-color: var(--%NS%mat-chip-elevated-disabled-container-color);
}
.mat-mdc-standard-chip.mdc-evolution-chip--%NS%selected:not(.mdc-evolution-chip--disabled) {
  background-color: var(--%NS%mat-chip-elevated-selected-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {
  background-color: var(--%NS%mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-standard-chip {
    outline: solid 1px;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {
  border-radius: var(--%NS%mat-chip-with-avatar-avatar-shape-radius, 24px);
  width: var(--%NS%mat-chip-with-icon-icon-size, 18px);
  height: var(--%NS%mat-chip-with-icon-icon-size, 18px);
  font-size: var(--%NS%mat-chip-with-icon-icon-size, 18px);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {
  opacity: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {
  color: var(--%NS%mat-chip-with-icon-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {
  color: var(--%NS%mat-chip-with-icon-disabled-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-chip-highlighted {
  --%NS%mat-chip-with-icon-icon-color: var(--%NS%mat-chip-with-icon-selected-icon-color, var(--%NS%mat-sys-on-secondary-container));
  --%NS%mat-chip-elevated-container-color: var(--%NS%mat-chip-elevated-selected-container-color, var(--%NS%mat-sys-secondary-container));
  --%NS%mat-chip-label-text-color: var(--%NS%mat-chip-selected-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  --%NS%mat-chip-outline-width: var(--%NS%mat-chip-flat-selected-outline-width, 0);
}

.mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-focus-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-focus-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-hover-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
  opacity: var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-hover-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
  opacity: var(--%NS%mat-chip-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-focus-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
  opacity: var(--%NS%mat-chip-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-focus-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
  opacity: var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}

.mdc-evolution-chip--%NS%disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {
  opacity: var(--%NS%mat-chip-with-avatar-disabled-avatar-opacity, 0.38);
}

.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  opacity: var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);
}

.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  opacity: var(--%NS%mat-chip-with-icon-disabled-icon-opacity, 0.38);
}

.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  opacity: var(--%NS%mat-chip-disabled-container-opacity, 1);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {
  color: var(--%NS%mat-chip-selected-trailing-icon-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  color: var(--%NS%mat-chip-selected-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-chip-edit, .mat-mdc-chip-remove {
  opacity: var(--%NS%mat-chip-trailing-action-opacity, 1);
}
.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {
  opacity: var(--%NS%mat-chip-trailing-action-focus-opacity, 1);
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  background-color: var(--%NS%mat-chip-trailing-action-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)));
}
.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)));
}

.mat-mdc-chip-selected .mat-mdc-chip-remove::after,
.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {
  background-color: var(--%NS%mat-chip-selected-trailing-action-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}

.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)));
}

.mat-mdc-standard-chip {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-standard-chip .mat-mdc-chip-graphic,
.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {
  box-sizing: content-box;
}
.mat-mdc-standard-chip._mat-animation-noopable,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {
  transition-duration: 1ms;
  animation-duration: 1ms;
}

.mat-mdc-chip-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  opacity: 0;
  border-radius: inherit;
  transition: opacity 150ms linear;
}
._mat-animation-noopable .mat-mdc-chip-focus-overlay {
  transition: none;
}
.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {
  display: none;
}

.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-chip-avatar {
  text-align: center;
  line-height: 1;
  color: var(--%NS%mat-chip-with-icon-icon-color, currentColor);
}

.mat-mdc-chip {
  position: relative;
  z-index: 0;
}

.mat-mdc-chip-action-label {
  text-align: left;
  z-index: 1;
}
[dir=rtl] .mat-mdc-chip-action-label {
  text-align: right;
}
.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {
  position: relative;
}
.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.mat-mdc-chip-action-label .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {
  margin: calc(var(--%NS%mat-focus-indicator-border-width, 3px) * -1);
  left: 8px;
  right: 8px;
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  content: "";
  display: block;
  opacity: 0;
  position: absolute;
  top: -3px;
  bottom: -3px;
  left: 5px;
  right: 5px;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 12px;
  margin: -12px;
  background-clip: content-box;
}
.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  width: 18px;
  height: 18px;
  font-size: 18px;
  box-sizing: content-box;
}

.mat-chip-edit-input {
  cursor: text;
  display: inline-block;
  color: inherit;
  outline: 0;
}

@media (forced-colors: active) {
  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {
    outline-width: 3px;
  }
}

.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {
  content: "";
}

.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  min-height: fit-content;
}

img.mdc-evolution-chip__icon {
  min-height: 0;
}
`],encapsulation:2})}return i})();var Pr=(()=>{class i{_elementRef=l($);_changeDetectorRef=l(Ue);_dir=l(Ut,{optional:!0});_lastDestroyedFocusedChipIndex=null;_keyManager;_destroyed=new I;_defaultRole="presentation";get chipFocusChanges(){return this._getChipStream(e=>e._onFocus)}get chipDestroyedChanges(){return this._getChipStream(e=>e.destroyed)}get chipRemovedChanges(){return this._getChipStream(e=>e.removed)}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._syncChipsState()}_disabled=!1;get empty(){return!this._chips||this._chips.length===0}get role(){return this._explicitRole?this._explicitRole:this.empty?null:this._defaultRole}tabIndex=0;set role(e){this._explicitRole=e}_explicitRole=null;get focused(){return this._hasFocusedChip()}_chips;_chipActions=new Nt;ngAfterViewInit(){this._setUpFocusManagement(),this._trackChipSetChanges(),this._trackDestroyedFocusedChip()}ngOnDestroy(){this._keyManager?.destroy(),this._chipActions.destroy(),this._destroyed.next(),this._destroyed.complete()}_hasFocusedChip(){return this._chips&&this._chips.some(e=>e._hasFocus())}_syncChipsState(){this._chips?.forEach(e=>{e._chipListDisabled=this._disabled,e._changeDetectorRef.markForCheck()})}focus(){}_handleKeydown(e){this._originatesFromChip(e)&&this._keyManager.onKeydown(e)}_isValidIndex(e){return e>=0&&e<this._chips.length}_allowFocusEscape(){let e=this._elementRef.nativeElement.tabIndex;e!==-1&&(this._elementRef.nativeElement.tabIndex=-1,setTimeout(()=>this._elementRef.nativeElement.tabIndex=e))}_getChipStream(e){return this._chips.changes.pipe(Be(null),ie(()=>Ct(...this._chips.map(e))))}_originatesFromChip(e){let t=e.target;for(;t&&t!==this._elementRef.nativeElement;){if(t.classList.contains("mat-mdc-chip"))return!0;t=t.parentElement}return!1}_setUpFocusManagement(){this._chips.changes.pipe(Be(this._chips)).subscribe(e=>{let t=[];e.forEach(r=>r._getActions().forEach(o=>t.push(o))),this._chipActions.reset(t),this._chipActions.notifyOnChanges()}),this._keyManager=new $t(this._chipActions).withVerticalOrientation().withHorizontalOrientation(this._dir?this._dir.value:"ltr").withHomeAndEnd().skipPredicate(e=>this._skipPredicate(e)),this.chipFocusChanges.pipe(we(this._destroyed)).subscribe(({chip:e})=>{let t=e._getSourceAction(document.activeElement);t&&this._keyManager.updateActiveItem(t)}),this._dir?.change.pipe(we(this._destroyed)).subscribe(e=>this._keyManager.withHorizontalOrientation(e))}_skipPredicate(e){return e.disabled}_trackChipSetChanges(){this._chips.changes.pipe(Be(null),we(this._destroyed)).subscribe(()=>{this.disabled&&Promise.resolve().then(()=>this._syncChipsState()),this._redirectDestroyedChipFocus()})}_trackDestroyedFocusedChip(){this.chipDestroyedChanges.pipe(we(this._destroyed)).subscribe(e=>{let r=this._chips.toArray().indexOf(e.chip),o=e.chip._hasFocus(),a=e.chip._hadFocusOnRemove&&this._keyManager.activeItem&&e.chip._getActions().includes(this._keyManager.activeItem),c=o||a;this._isValidIndex(r)&&c&&(this._lastDestroyedFocusedChipIndex=r)})}_redirectDestroyedChipFocus(){if(this._lastDestroyedFocusedChipIndex!=null){if(this._chips.length){let e=Math.min(this._lastDestroyedFocusedChipIndex,this._chips.length-1),t=this._chips.toArray()[e];t.disabled?this._chips.length===1?this.focus():this._keyManager.setPreviousItemActive():t.focus()}else this.focus();this._lastDestroyedFocusedChipIndex=null}}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["mat-chip-set"]],contentQueries:function(t,r,o){if(t&1&&It(o,Di,5),t&2){let a;J(a=ee())&&(r._chips=a)}},hostAttrs:[1,"mat-mdc-chip-set","mdc-evolution-chip-set"],hostVars:1,hostBindings:function(t,r){t&1&&Ce("keydown",function(a){return r._handleKeydown(a)}),t&2&&_e("role",r.role)},inputs:{disabled:[2,"disabled","disabled",W],role:"role",tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Vn(e)]},ngContentSelectors:Wm,decls:2,vars:0,consts:[["role","presentation",1,"mdc-evolution-chip-set__chips"]],template:function(t,r){t&1&&(oe(),Me(0,"div",0),j(1),Te())},styles:[`.mat-mdc-chip-set {
  display: flex;
}
.mat-mdc-chip-set:focus {
  outline: none;
}
.mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  min-width: 100%;
  margin-left: -8px;
  margin-right: 0;
}
.mat-mdc-chip-set .mdc-evolution-chip {
  margin: 4px 0 4px 8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  margin-left: 0;
  margin-right: -8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip {
  margin-left: 0;
  margin-right: 8px;
}

.mdc-evolution-chip-set__chips {
  display: flex;
  flex-flow: wrap;
  min-width: 0;
}

.mat-mdc-chip-set-stacked {
  flex-direction: column;
  align-items: flex-start;
}
.mat-mdc-chip-set-stacked .mat-mdc-chip {
  width: 100%;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic {
  flex-grow: 0;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary {
  flex-basis: 100%;
  justify-content: start;
}

input.mat-mdc-chip-input {
  flex: 1 0 150px;
  margin-left: 8px;
}
[dir=rtl] input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 8px;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder {
  opacity: 1;
}
.mat-mdc-chip-set + input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 0;
}
`],encapsulation:2})}return i})();var Fr=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=z({type:i});static \u0275inj=U({providers:[Gl,{provide:Ym,useValue:{separatorKeyCodes:[13]}}],imports:[Cn,ne]})}return i})();var Xm=["*"];var Km=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],Zm=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],Qm=new b("MAT_CARD_CONFIG"),Lr=(()=>{class i{appearance;constructor(){let e=l(Qm,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(t,r){t&2&&F("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:Xm,decls:1,vars:0,template:function(t,r){t&1&&(oe(),j(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--%NS%mat-card-elevated-container-color, var(--%NS%mat-sys-surface-container-low));
  border-color: var(--%NS%mat-card-elevated-container-color, var(--%NS%mat-sys-surface-container-low));
  border-radius: var(--%NS%mat-card-elevated-container-shape, var(--%NS%mat-sys-corner-medium));
  box-shadow: var(--%NS%mat-card-elevated-container-elevation, var(--%NS%mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--%NS%mat-card-elevated-container-shape, var(--%NS%mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--%NS%mat-card-outlined-container-color, var(--%NS%mat-sys-surface));
  border-radius: var(--%NS%mat-card-outlined-container-shape, var(--%NS%mat-sys-corner-medium));
  border-width: var(--%NS%mat-card-outlined-outline-width, 1px);
  border-color: var(--%NS%mat-card-outlined-outline-color, var(--%NS%mat-sys-outline-variant));
  box-shadow: var(--%NS%mat-card-outlined-container-elevation, var(--%NS%mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--%NS%mat-card-filled-container-color, var(--%NS%mat-sys-surface-container-highest));
  border-radius: var(--%NS%mat-card-filled-container-shape, var(--%NS%mat-sys-corner-medium));
  box-shadow: var(--%NS%mat-card-filled-container-elevation, var(--%NS%mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--%NS%mat-card-title-text-font, var(--%NS%mat-sys-title-large-font));
  line-height: var(--%NS%mat-card-title-text-line-height, var(--%NS%mat-sys-title-large-line-height));
  font-size: var(--%NS%mat-card-title-text-size, var(--%NS%mat-sys-title-large-size));
  letter-spacing: var(--%NS%mat-card-title-text-tracking, var(--%NS%mat-sys-title-large-tracking));
  font-weight: var(--%NS%mat-card-title-text-weight, var(--%NS%mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--%NS%mat-card-subtitle-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-card-subtitle-text-font, var(--%NS%mat-sys-title-medium-font));
  line-height: var(--%NS%mat-card-subtitle-text-line-height, var(--%NS%mat-sys-title-medium-line-height));
  font-size: var(--%NS%mat-card-subtitle-text-size, var(--%NS%mat-sys-title-medium-size));
  letter-spacing: var(--%NS%mat-card-subtitle-text-tracking, var(--%NS%mat-sys-title-medium-tracking));
  font-weight: var(--%NS%mat-card-subtitle-text-weight, var(--%NS%mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2})}return i})(),Br=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=V({type:i,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return i})();var jr=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=V({type:i,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return i})(),Jl=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=V({type:i,selectors:[["mat-card-subtitle"],["","mat-card-subtitle",""],["","matCardSubtitle",""]],hostAttrs:[1,"mat-mdc-card-subtitle"]})}return i})(),ed=(()=>{class i{align="start";static \u0275fac=function(t){return new(t||i)};static \u0275dir=V({type:i,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-mdc-card-actions","mdc-card__actions"],hostVars:2,hostBindings:function(t,r){t&2&&F("mat-mdc-card-actions-align-end",r.align==="end")},inputs:{align:"align"},exportAs:["matCardActions"]})}return i})(),Ur=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:Zm,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(t,r){t&1&&(oe(Km),j(0),Me(1,"div",0),j(2,1),Te(),j(3,2))},encapsulation:2})}return i})();var Qe=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=z({type:i});static \u0275inj=U({imports:[ne]})}return i})();function Jm(i,n){if(i&1&&(h(0,"p",13),p(1),m()),i&2){let e=n.$implicit;_(),L(e)}}function ep(i,n){if(i&1&&(h(0,"mat-chip",18),p(1),m()),i&2){let e=n.$implicit;_(),De(" ",e.name," ")}}function tp(i,n){if(i&1&&(h(0,"div",14)(1,"h4",15),p(2),m(),h(3,"mat-chip-set",16),Z(4,ep,2,1,"mat-chip",17),m()()),i&2){let e=n.$implicit,t=Q();_(2),L(e),_(2),R("ngForOf",t.getSkillsByCategory(e))}}var zr=class i{profile=ae;categories=["Frontend","Backend","DevOps/Tools","Skills"];get bioParagraphs(){return this.profile.detailedBio.split(`
`).map(n=>n.trim()).filter(n=>n.length>0)}getSkillsByCategory(n){return this.profile.skills.filter(e=>e.category===n)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=S({type:i,selectors:[["app-about"]],decls:30,vars:2,consts:[["id","about",1,"section"],[1,"section-title"],[1,"section-subtitle"],[1,"about-grid"],[1,"bio-container"],[1,"subsection-title"],["class","bio-paragraph",4,"ngFor","ngForOf"],[1,"facts-grid"],[1,"fact-card","glass-card"],[1,"fact-number"],[1,"fact-label"],[1,"skills-container"],["class","skills-category",4,"ngFor","ngForOf"],[1,"bio-paragraph"],[1,"skills-category"],[1,"category-name"],[1,"skills-chip-set"],["class","skill-chip",4,"ngFor","ngForOf"],[1,"skill-chip"]],template:function(e,t){e&1&&(h(0,"section",0)(1,"h2",1),p(2,"About Me"),m(),h(3,"p",2),p(4,"Get to know my story, my background, and my core technical skills."),m(),h(5,"div",3)(6,"div",4)(7,"h3",5),p(8,"My Journey"),m(),Z(9,Jm,2,1,"p",6),h(10,"div",7)(11,"div",8)(12,"span",9),p(13,"6+"),m(),h(14,"span",10),p(15,"Years of Experience"),m()(),h(16,"div",8)(17,"span",9),p(18,"20+"),m(),h(19,"span",10),p(20,"Projects Completed"),m()(),h(21,"div",8)(22,"span",9),p(23,"100%"),m(),h(24,"span",10),p(25,"Client Satisfaction"),m()()()(),h(26,"div",11)(27,"h3",5),p(28,"Technical Expertise"),m(),Z(29,tp,5,2,"div",12),m()()()),e&2&&(_(9),R("ngForOf",t.bioParagraphs),_(20),R("ngForOf",t.categories))},dependencies:[X,ke,Fr,Di,Pr,Qe],styles:['.about-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1.1fr .9fr;gap:48px;align-items:start}@media(max-width:960px){.about-grid[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:36px}}.subsection-title[_ngcontent-%COMP%]{font-size:1.6rem;font-weight:600;margin-top:0;margin-bottom:24px;color:var(--%NS%mat-sys-on-surface);position:relative;display:inline-block}.subsection-title[_ngcontent-%COMP%]:after{content:"";position:absolute;left:0;bottom:-6px;width:40px;height:3px;background-color:var(--%NS%mat-sys-primary);border-radius:2px}.bio-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px}.bio-paragraph[_ngcontent-%COMP%]{font-size:1.05rem;line-height:1.6;color:var(--%NS%mat-sys-on-surface-variant);margin:0}.facts-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:24px}@media(max-width:480px){.facts-grid[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:12px}}.fact-card[_ngcontent-%COMP%]{padding:16px;text-align:center;display:flex;flex-direction:column;gap:4px}.fact-card[_ngcontent-%COMP%]:hover{transform:translateY(-3px);box-shadow:0 8px 16px #00000014}.fact-number[_ngcontent-%COMP%]{font-size:1.8rem;font-weight:800;color:var(--%NS%mat-sys-primary)}.fact-label[_ngcontent-%COMP%]{font-size:.8rem;color:var(--%NS%mat-sys-on-surface-variant);font-weight:500}.skills-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px}.skills-category[_ngcontent-%COMP%]{background:rgba(var(--%NS%mat-sys-surface-container-low),.4);border-radius:12px;padding:12px 16px;border:1px solid rgba(128,128,128,.05)}.category-name[_ngcontent-%COMP%]{font-size:1rem;font-weight:600;margin:0 0 8px;color:var(--%NS%mat-sys-primary);text-transform:uppercase;letter-spacing:.05rem}.skills-chip-set[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:6px}.skill-chip[_ngcontent-%COMP%]{--%NS%mdc-chip-label-text-color: var(--%NS%mat-sys-on-surface-variant);--%NS%mdc-chip-container-color: var(--%NS%mat-sys-surface-container-high);font-size:.85rem;font-weight:500;border:none;border-radius:8px}']})};function np(i,n){if(i&1&&q(0,"img",22),i&2){let e=Q().$implicit;R("src",e.logo,je)("alt",e.company+" logo")}}function ip(i,n){i&1&&(h(0,"mat-icon",23),p(1,"work"),m())}function rp(i,n){if(i&1&&(h(0,"li",24)(1,"mat-icon",25),p(2,"chevron_right"),m(),h(3,"span",26),p(4),m()()),i&2){let e=n.$implicit;_(4),L(e)}}function op(i,n){if(i&1&&(h(0,"div",6)(1,"div",7),Z(2,np,1,2,"img",8)(3,ip,2,0,"mat-icon",9),m(),h(4,"div",10)(5,"mat-card",11)(6,"mat-card-header",12)(7,"div",13)(8,"mat-card-title",14),p(9),m(),h(10,"mat-card-subtitle",15),p(11),m()(),h(12,"div",16)(13,"div",17)(14,"mat-icon",18),p(15,"calendar_today"),m(),h(16,"span"),p(17),m()(),h(18,"div",17)(19,"mat-icon",18),p(20,"place"),m(),h(21,"span"),p(22),m()()()(),h(23,"mat-card-content",19)(24,"ul",20),Z(25,rp,5,1,"li",21),m()()()()()),i&2){let e=n.$implicit;F("timeline-item-right",e.side==="right"),_(2),R("ngIf",e.logo),_(),R("ngIf",!e.logo),_(6),L(e.role),_(2),L(e.company),_(6),L(e.duration),_(5),L(e.location),_(3),R("ngForOf",e.description)}}var ap={FedEx:"/logos/fedex.jpg","IMC Logistics":"/logos/imc-logistics.jpg","Optimal Learning Lab":"/logos/optimal-learning-lab.svg"},Vr=class i{experiences=(()=>{let n="left",e=null;return ae.experience.map(t=>(e!==null&&t.company!==e&&(n=n==="left"?"right":"left"),e=t.company,Y(g({},t),{side:n,logo:ap[t.company]})))})();static \u0275fac=function(e){return new(e||i)};static \u0275cmp=S({type:i,selectors:[["app-experience"]],decls:8,vars:1,consts:[["id","experience",1,"section"],[1,"section-title"],[1,"section-subtitle"],[1,"timeline"],[1,"timeline-line"],["class","timeline-item",3,"timeline-item-right",4,"ngFor","ngForOf"],[1,"timeline-item"],[1,"timeline-node"],["class","node-logo",3,"src","alt",4,"ngIf"],["class","node-icon",4,"ngIf"],[1,"timeline-content"],[1,"experience-card","glass-card"],[1,"experience-header"],[1,"header-main"],[1,"role-title"],[1,"company-name"],[1,"header-meta"],[1,"meta-item"],[1,"meta-icon"],[1,"experience-content"],[1,"duties-list"],["class","duty-item",4,"ngFor","ngForOf"],[1,"node-logo",3,"src","alt"],[1,"node-icon"],[1,"duty-item"],[1,"bullet-icon"],[1,"duty-text"]],template:function(e,t){e&1&&(h(0,"section",0)(1,"h2",1),p(2,"Work Experience"),m(),h(3,"p",2),p(4," A journey through my professional career, highlight achievements, and technologies used. "),m(),h(5,"div",3),q(6,"div",4),Z(7,op,26,9,"div",5),m()()),e&2&&(_(7),R("ngForOf",t.experiences))},dependencies:[X,ke,At,Qe,Lr,jr,Ur,Jl,Br,me,he],styles:[".timeline[_ngcontent-%COMP%]{position:relative;max-width:900px;margin:0 auto;padding:20px 0}.timeline-line[_ngcontent-%COMP%]{position:absolute;left:50%;top:0;bottom:0;width:2px;background:var(--%NS%mat-sys-outline-variant);transform:translate(-50%)}@media(max-width:768px){.timeline-line[_ngcontent-%COMP%]{left:20px;transform:none}}.timeline-item[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;width:50%;padding:0 40px 40px 0;position:relative;box-sizing:border-box}@media(max-width:768px){.timeline-item[_ngcontent-%COMP%]{width:100%;padding:0 0 32px 48px;justify-content:flex-start!important}}.timeline-item.timeline-item-right[_ngcontent-%COMP%]{margin-left:auto;justify-content:flex-start;padding:0 0 40px 40px}@media(max-width:768px){.timeline-item.timeline-item-right[_ngcontent-%COMP%]{margin-left:0}}.timeline-item.timeline-item-right[_ngcontent-%COMP%]   .timeline-node[_ngcontent-%COMP%]{left:-20px;right:auto}@media(max-width:768px){.timeline-item.timeline-item-right[_ngcontent-%COMP%]   .timeline-node[_ngcontent-%COMP%]{left:0}}.timeline-node[_ngcontent-%COMP%]{position:absolute;top:10px;right:-20px;width:40px;height:40px;background:var(--%NS%mat-sys-surface);color:var(--%NS%mat-sys-on-primary);border-radius:50%;display:flex;align-items:center;justify-content:center;overflow:hidden;box-shadow:0 0 0 4px var(--%NS%mat-sys-surface),0 4px 10px #00000026;z-index:5}@media(max-width:768px){.timeline-node[_ngcontent-%COMP%]{left:0;right:auto!important}}.node-icon[_ngcontent-%COMP%]{font-size:1.1rem;width:100%;height:100%;color:var(--%NS%mat-sys-on-primary);background:var(--%NS%mat-sys-primary);display:flex;align-items:center;justify-content:center}.node-logo[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:contain;border-radius:50%;padding:4px;background:#fff}.timeline-content[_ngcontent-%COMP%]{width:100%}.experience-card[_ngcontent-%COMP%]{border:1px solid rgba(128,128,128,.08)}.experience-card[_ngcontent-%COMP%]:hover{transform:translateY(-4px);box-shadow:0 12px 24px #0000001f;border-color:rgba(var(--%NS%mat-sys-primary),.2)}.experience-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-start;padding:20px 20px 12px;flex-wrap:wrap;gap:12px}.header-main[_ngcontent-%COMP%]{flex:1;min-width:200px}.role-title[_ngcontent-%COMP%]{font-size:1.25rem;font-weight:700;color:var(--%NS%mat-sys-on-surface);margin-bottom:4px}.company-name[_ngcontent-%COMP%]{font-size:.95rem;font-weight:600;color:var(--%NS%mat-sys-primary)}.header-meta[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px;align-items:flex-end}@media(max-width:768px){.header-meta[_ngcontent-%COMP%]{align-items:flex-start;flex-direction:row;gap:16px;width:100%;border-top:1px solid rgba(128,128,128,.1);padding-top:8px;margin-top:4px}}.meta-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px;font-size:.8rem;color:var(--%NS%mat-sys-on-surface-variant);font-weight:500}.meta-icon[_ngcontent-%COMP%]{font-size:.9rem;width:.9rem;height:.9rem}.experience-content[_ngcontent-%COMP%]{padding:0 20px 20px}.duties-list[_ngcontent-%COMP%]{list-style-type:none;padding:0;margin:0;display:flex;flex-direction:column;gap:12px}.duty-item[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:6px}.bullet-icon[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-primary);font-size:1.1rem;width:1.1rem;height:1.1rem;margin-top:2px;flex-shrink:0}.duty-text[_ngcontent-%COMP%]{font-size:.95rem;line-height:1.5;color:var(--%NS%mat-sys-on-surface-variant)}"]})};function sp(i,n){if(i&1&&q(0,"img",15),i&2){let e=Q().$implicit;R("src",e.logo,je)("alt",e.school+" logo")}}function cp(i,n){i&1&&(h(0,"mat-icon",16),p(1,"school"),m())}function lp(i,n){if(i&1&&(h(0,"div",5)(1,"div",6),Z(2,sp,1,2,"img",7)(3,cp,2,0,"mat-icon",8),m(),h(4,"div",9)(5,"h3",10),p(6),m(),h(7,"p",11),p(8),m(),h(9,"div",12)(10,"span",13)(11,"mat-icon",14),p(12,"calendar_today"),m(),p(13),m(),h(14,"span",13)(15,"mat-icon",14),p(16,"place"),m(),p(17),m()()()()),i&2){let e=n.$implicit;_(2),R("ngIf",e.logo),_(),R("ngIf",!e.logo),_(3),L(e.degree),_(2),L(e.school),_(5),De(" ",e.duration," "),_(4),De(" ",e.location," ")}}var dp={"The University of Memphis":"/logos/university-of-memphis.jpg"},Hr=class i{education=ae.education.map(n=>Y(g({},n),{logo:dp[n.school]}));static \u0275fac=function(e){return new(e||i)};static \u0275cmp=S({type:i,selectors:[["app-education"]],decls:7,vars:1,consts:[["id","education",1,"section"],[1,"section-title"],[1,"section-subtitle"],[1,"education-grid"],["class","education-card glass-card",4,"ngFor","ngForOf"],[1,"education-card","glass-card"],[1,"education-icon-box"],["class","education-logo",3,"src","alt",4,"ngIf"],["class","education-icon",4,"ngIf"],[1,"education-details"],[1,"education-degree"],[1,"education-school"],[1,"education-meta"],[1,"meta-item"],[1,"meta-icon"],[1,"education-logo",3,"src","alt"],[1,"education-icon"]],template:function(e,t){e&1&&(h(0,"section",0)(1,"h2",1),p(2,"Education"),m(),h(3,"p",2),p(4,"Academic background that laid the foundation for my engineering career."),m(),h(5,"div",3),Z(6,lp,18,6,"div",4),m()()),e&2&&(_(6),R("ngForOf",t.education))},dependencies:[X,ke,At,Qe,me,he],styles:[".education-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:24px;max-width:800px;margin:20px auto 0}.education-card[_ngcontent-%COMP%]{padding:28px;display:flex;align-items:flex-start;gap:20px;border:1px solid rgba(128,128,128,.08);border-radius:16px}.education-card[_ngcontent-%COMP%]:hover{transform:translateY(-4px);box-shadow:0 12px 24px #00000014;border-color:rgba(var(--%NS%mat-sys-primary),.2)}.education-card[_ngcontent-%COMP%]:hover   .education-icon-box[_ngcontent-%COMP%]{background:var(--%NS%mat-sys-primary);color:var(--%NS%mat-sys-on-primary)}.education-icon-box[_ngcontent-%COMP%]{width:56px;height:56px;flex-shrink:0;background:var(--%NS%mat-sys-primary-container);color:var(--%NS%mat-sys-on-primary-container);border-radius:50%;display:flex;align-items:center;justify-content:center;overflow:hidden;transition:background .3s ease,color .3s ease}.education-icon[_ngcontent-%COMP%]{font-size:1.5rem;width:1.5rem;height:1.5rem}.education-logo[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:contain;border-radius:50%;padding:6px;background:#fff}.education-degree[_ngcontent-%COMP%]{font-size:1.1rem;font-weight:700;color:var(--%NS%mat-sys-on-surface);margin:0 0 4px}.education-school[_ngcontent-%COMP%]{font-size:.95rem;font-weight:600;color:var(--%NS%mat-sys-primary);margin:0 0 12px}.education-meta[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:16px}.meta-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px;font-size:.8rem;color:var(--%NS%mat-sys-on-surface-variant);font-weight:500}.meta-icon[_ngcontent-%COMP%]{font-size:.9rem;width:.9rem;height:.9rem}"]})};function up(i,n){if(i&1){let e=Ai();h(0,"mat-chip",8),Ce("click",function(){let r=Et(e).$implicit,o=Q();return xt(o.setCategory(r))}),p(1),m()}if(i&2){let e=n.$implicit,t=Q();F("selected-filter",t.selectedCategory()===e),_(),De(" ",e," ")}}function hp(i,n){if(i&1&&(h(0,"span",21),p(1),m()),i&2){let e=Q().$implicit;_(),L(e.company)}}function mp(i,n){if(i&1&&(h(0,"span",22),p(1),m()),i&2){let e=n.$implicit;_(),De(" ",e," ")}}function pp(i,n){if(i&1&&(h(0,"a",26)(1,"mat-icon",27),p(2,"code"),m(),h(3,"span"),p(4,"Code"),m()()),i&2){let e=Q(2).$implicit;R("href",e.githubUrl,je)}}function fp(i,n){if(i&1&&(h(0,"a",28)(1,"mat-icon",27),p(2,"open_in_new"),m(),h(3,"span"),p(4,"Live Demo"),m()()),i&2){let e=Q(2).$implicit;R("href",e.liveUrl,je)}}function gp(i,n){if(i&1&&(h(0,"mat-card-actions",23),Z(1,pp,5,1,"a",24)(2,fp,5,1,"a",25),m()),i&2){let e=Q().$implicit;_(),R("ngIf",e.githubUrl),_(),R("ngIf",e.liveUrl)}}function vp(i,n){if(i&1&&(h(0,"mat-card",9)(1,"mat-card-header",10)(2,"div",11)(3,"mat-icon",12),p(4),m()(),h(5,"div",13)(6,"mat-card-title",14),p(7),m(),Z(8,hp,2,1,"span",15),m()(),h(9,"mat-card-content",16)(10,"p",17),p(11),m(),h(12,"div",18),Z(13,mp,2,1,"span",19),m()(),Z(14,gp,3,2,"mat-card-actions",20),m()),i&2){let e=n.$implicit;_(4),L(e.icon),_(3),L(e.title),_(),R("ngIf",e.company),_(3),L(e.description),_(2),R("ngForOf",e.technologies),_(),R("ngIf",e.githubUrl||e.liveUrl)}}var $r=class i{projects=ae.projects;categories=["All","Angular","Spring Boot","Node.js","Kubernetes","System Design","Legacy Modernization"];selectedCategory=ue("All");filteredProjects=Oi(()=>{let n=this.selectedCategory();return n==="All"?this.projects:this.projects.filter(e=>e.technologies.some(t=>t.toLowerCase().includes(n.toLowerCase())))});setCategory(n){this.selectedCategory.set(n)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=S({type:i,selectors:[["app-projects"]],decls:10,vars:2,consts:[["id","projects",1,"section"],[1,"section-title"],[1,"section-subtitle"],[1,"filter-container"],["aria-label","Filter projects by technology category"],["class","filter-chip",3,"selected-filter","click",4,"ngFor","ngForOf"],[1,"projects-grid"],["class","project-card glass-card",4,"ngFor","ngForOf"],[1,"filter-chip",3,"click"],[1,"project-card","glass-card"],[1,"project-header"],[1,"project-icon-box"],[1,"project-icon"],[1,"project-header-text"],[1,"project-title"],["class","project-company",4,"ngIf"],[1,"project-content"],[1,"project-description"],[1,"tech-stack-container"],["class","tech-tag",4,"ngFor","ngForOf"],["class","project-actions",4,"ngIf"],[1,"project-company"],[1,"tech-tag"],[1,"project-actions"],["mat-stroked-button","","target","_blank","class","action-btn",3,"href",4,"ngIf"],["mat-flat-button","","color","primary","target","_blank","class","action-btn",3,"href",4,"ngIf"],["mat-stroked-button","","target","_blank",1,"action-btn",3,"href"],[1,"btn-icon"],["mat-flat-button","","color","primary","target","_blank",1,"action-btn",3,"href"]],template:function(e,t){e&1&&(h(0,"section",0)(1,"h2",1),p(2,"Featured Projects"),m(),h(3,"p",2),p(4," A showcase of some of my most impactful full-stack and frontend development work. "),m(),h(5,"div",3)(6,"mat-chip-set",4),Z(7,up,2,3,"mat-chip",5),m()(),h(8,"div",6),Z(9,vp,15,6,"mat-card",7),m()()),e&2&&(_(7),R("ngForOf",t.categories),_(2),R("ngForOf",t.filteredProjects()))},dependencies:[X,ke,At,Qe,Lr,ed,jr,Ur,Br,Ze,St,me,he,Fr,Di,Pr],styles:[".filter-container[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-bottom:40px}.filter-chip[_ngcontent-%COMP%]{--%NS%mdc-chip-label-text-color: var(--%NS%mat-sys-on-surface-variant);--%NS%mdc-chip-container-color: var(--%NS%mat-sys-surface-container-high);cursor:pointer;font-weight:500;transition:background-color .2s ease,color .2s ease}.filter-chip.selected-filter[_ngcontent-%COMP%]{--%NS%mdc-chip-container-color: var(--%NS%mat-sys-primary);--%NS%mdc-chip-label-text-color: var(--%NS%mat-sys-on-primary);font-weight:600}.projects-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(340px,1fr));gap:30px}@media(max-width:480px){.projects-grid[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:20px}}.project-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;border:1px solid rgba(128,128,128,.08);border-radius:16px;overflow:hidden}.project-card[_ngcontent-%COMP%]:hover{transform:translateY(-6px);box-shadow:0 16px 32px #0000001f;border-color:rgba(var(--%NS%mat-sys-primary),.2)}.project-card[_ngcontent-%COMP%]:hover   .project-icon-box[_ngcontent-%COMP%]{background:var(--%NS%mat-sys-primary);color:var(--%NS%mat-sys-on-primary);transform:scale(1.05)}.project-header[_ngcontent-%COMP%]{padding:24px 24px 16px;display:flex;align-items:center;gap:16px}.project-header-text[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px;min-width:0}.project-company[_ngcontent-%COMP%]{font-size:.8rem;font-weight:600;color:var(--%NS%mat-sys-primary)}.project-icon-box[_ngcontent-%COMP%]{width:44px;height:44px;background:var(--%NS%mat-sys-primary-container);color:var(--%NS%mat-sys-on-primary-container);border-radius:12px;display:flex;align-items:center;justify-content:center;transition:background .3s ease,color .3s ease,transform .3s ease}.project-icon[_ngcontent-%COMP%]{font-size:1.35rem;width:1.35rem;height:1.35rem}.project-title[_ngcontent-%COMP%]{font-size:1.25rem;font-weight:700;color:var(--%NS%mat-sys-on-surface);margin:0;line-height:1.2}.project-content[_ngcontent-%COMP%]{padding:0 24px 24px;flex-grow:1;display:flex;flex-direction:column;justify-content:space-between}.project-description[_ngcontent-%COMP%]{font-size:.95rem;line-height:1.55;color:var(--%NS%mat-sys-on-surface-variant);margin:0 0 20px}.tech-stack-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:8px}.tech-tag[_ngcontent-%COMP%]{background:#8080800f;border:1px solid rgba(128,128,128,.1);color:var(--%NS%mat-sys-on-surface-variant);padding:4px 10px;border-radius:15px;font-size:.75rem;font-weight:600}.project-actions[_ngcontent-%COMP%]{padding:0 24px 24px;display:flex;gap:12px}.action-btn[_ngcontent-%COMP%]{flex:1;height:40px;border-radius:20px;font-size:.9rem;font-weight:500;display:inline-flex;align-items:center;justify-content:center;gap:6px}.btn-icon[_ngcontent-%COMP%]{font-size:1rem;width:1rem;height:1rem}"]})};function _p(i,n){if(i&1&&(h(0,"div",5)(1,"div",6)(2,"mat-icon",7),p(3),m()(),h(4,"h3",8),p(5),m(),h(6,"p",9),p(7),m()()),i&2){let e=n.$implicit;_(3),L(e.icon),_(2),L(e.title),_(2),L(e.description)}}var Gr=class i{interests=ae.interests;static \u0275fac=function(e){return new(e||i)};static \u0275cmp=S({type:i,selectors:[["app-interests"]],decls:7,vars:1,consts:[["id","interests",1,"section"],[1,"section-title"],[1,"section-subtitle"],[1,"interests-grid"],["class","interest-card glass-card",4,"ngFor","ngForOf"],[1,"interest-card","glass-card"],[1,"interest-icon-box"],[1,"interest-icon"],[1,"interest-title"],[1,"interest-description"]],template:function(e,t){e&1&&(h(0,"section",0)(1,"h2",1),p(2,"Interests & Hobbies"),m(),h(3,"p",2),p(4," What I enjoy doing when I am not writing code, building systems, or designing user interfaces. "),m(),h(5,"div",3),Z(6,_p,8,3,"div",4),m()()),e&2&&(_(6),R("ngForOf",t.interests))},dependencies:[X,ke,Qe,me,he],styles:[".interests-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:24px;margin-top:20px}.interest-card[_ngcontent-%COMP%]{padding:32px 24px;text-align:center;display:flex;flex-direction:column;align-items:center;border:1px solid rgba(128,128,128,.08);border-radius:16px}.interest-card[_ngcontent-%COMP%]:hover{transform:translateY(-5px);box-shadow:0 12px 24px #00000014;border-color:rgba(var(--%NS%mat-sys-primary),.2)}.interest-card[_ngcontent-%COMP%]:hover   .interest-icon-box[_ngcontent-%COMP%]{background:var(--%NS%mat-sys-primary);color:var(--%NS%mat-sys-on-primary);transform:rotate(10deg)}.interest-icon-box[_ngcontent-%COMP%]{width:60px;height:60px;background:var(--%NS%mat-sys-primary-container);color:var(--%NS%mat-sys-on-primary-container);border-radius:50%;display:flex;align-items:center;justify-content:center;margin-bottom:20px;transition:background .3s ease,color .3s ease,transform .3s ease}.interest-icon[_ngcontent-%COMP%]{font-size:1.75rem;width:1.75rem;height:1.75rem}.interest-title[_ngcontent-%COMP%]{font-size:1.15rem;font-weight:700;color:var(--%NS%mat-sys-on-surface);margin:0 0 12px}.interest-description[_ngcontent-%COMP%]{font-size:.9rem;line-height:1.5;color:var(--%NS%mat-sys-on-surface-variant);margin:0}"]})};var Wr=class i{profile=ae;static \u0275fac=function(e){return new(e||i)};static \u0275cmp=S({type:i,selectors:[["app-contact"]],decls:27,vars:3,consts:[["id","contact",1,"section"],[1,"section-title"],[1,"section-subtitle"],[1,"contact-cta"],[1,"contact-buttons-row"],["mat-flat-button","","color","primary",1,"contact-btn",3,"href"],["mat-stroked-button","","target","_blank",1,"contact-btn",3,"href"],["mat-stroked-button","","href","/edward-prins-resume.pdf","download","",1,"contact-btn"]],template:function(e,t){e&1&&(h(0,"section",0)(1,"h2",1),p(2,"Get In Touch"),m(),h(3,"p",2),p(4," Have a project in mind, a job opportunity, or just want to say hello? Reach out below. "),m(),h(5,"div",3)(6,"div",4)(7,"a",5)(8,"mat-icon"),p(9,"email"),m(),h(10,"span"),p(11,"Email Me"),m()(),h(12,"a",6)(13,"mat-icon"),p(14,"share"),m(),h(15,"span"),p(16,"LinkedIn"),m()(),h(17,"a",6)(18,"mat-icon"),p(19,"code"),m(),h(20,"span"),p(21,"GitHub"),m()(),h(22,"a",7)(23,"mat-icon"),p(24,"download"),m(),h(25,"span"),p(26,"Download Resume"),m()()()()()),e&2&&(_(7),R("href","mailto:"+t.profile.email,je),_(5),R("href",t.profile.linkedin,je),_(5),R("href",t.profile.github,je))},dependencies:[X,Ze,St,me,he],styles:[".contact-cta[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;margin-top:12px}.contact-buttons-row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center;gap:16px}@media(max-width:600px){.contact-buttons-row[_ngcontent-%COMP%]{flex-direction:column;width:100%;max-width:320px;gap:12px}}.contact-btn[_ngcontent-%COMP%]{height:48px;padding:0 28px;border-radius:24px;font-size:1rem;font-weight:500;display:inline-flex;align-items:center;gap:8px;transition:transform .2s ease,box-shadow .2s ease,background-color .2s ease}.contact-btn[_ngcontent-%COMP%]:hover{transform:translateY(-2px)}@media(max-width:600px){.contact-btn[_ngcontent-%COMP%]{width:100%;justify-content:center}}"]})};var Yr=class i{name=ae.name;currentYear=new Date().getFullYear();scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=S({type:i,selectors:[["app-footer"]],decls:15,vars:3,consts:[[1,"footer"],[1,"footer-container"],[1,"brand-box"],[1,"logo"],[1,"copyright"],[1,"built-info"],[1,"heart-icon"],["mat-icon-button","","aria-label","Scroll to top of page",1,"scroll-top-btn",3,"click"]],template:function(e,t){e&1&&(h(0,"footer",0)(1,"div",1)(2,"div",2)(3,"span",3),p(4),m(),h(5,"p",4),p(6),m()(),h(7,"p",5),p(8," Built with "),h(9,"mat-icon",6),p(10,"favorite"),m(),p(11," using Angular 22 & Angular Material 3 "),m(),h(12,"button",7),Ce("click",function(){return t.scrollToTop()}),h(13,"mat-icon"),p(14,"keyboard_arrow_up"),m()()()()),e&2&&(_(4),De("<",t.name,"/>"),_(2),fs("\xA9 ",t.currentYear," ",t.name,". All rights reserved."))},dependencies:[X,Ze,_i,me,he],styles:[".footer[_ngcontent-%COMP%]{background:var(--%NS%mat-sys-surface-container-low);border-top:1px solid rgba(128,128,128,.08);padding:40px 24px;margin-top:60px;transition:background .3s ease,border-top .3s ease}.footer-container[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:24px;position:relative}@media(max-width:768px){.footer-container[_ngcontent-%COMP%]{flex-direction:column;text-align:center}}.brand-box[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px}@media(max-width:768px){.brand-box[_ngcontent-%COMP%]{align-items:center}}.logo[_ngcontent-%COMP%]{font-size:1.1rem;font-weight:700;color:var(--%NS%mat-sys-primary);letter-spacing:-.01rem}.copyright[_ngcontent-%COMP%]{font-size:.85rem;color:var(--%NS%mat-sys-on-surface-variant);margin:0}.built-info[_ngcontent-%COMP%]{font-size:.85rem;color:var(--%NS%mat-sys-on-surface-variant);display:flex;align-items:center;gap:4px;margin:0}.heart-icon[_ngcontent-%COMP%]{color:#e53935;font-size:1.1rem;width:1.1rem;height:1.1rem}.scroll-top-btn[_ngcontent-%COMP%]{background:var(--%NS%mat-sys-surface-container-high);color:var(--%NS%mat-sys-on-surface);border:1px solid rgba(128,128,128,.1);transition:background .2s ease,transform .2s ease}.scroll-top-btn[_ngcontent-%COMP%]:hover{background:var(--%NS%mat-sys-primary);color:var(--%NS%mat-sys-on-primary);transform:translateY(-3px)}"]})};var qr=class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=S({type:i,selectors:[["app-root"]],decls:10,vars:0,consts:[[1,"main-content"]],template:function(e,t){e&1&&(q(0,"app-header"),h(1,"main",0),q(2,"app-hero")(3,"app-about")(4,"app-experience")(5,"app-education")(6,"app-projects")(7,"app-interests")(8,"app-contact"),m(),q(9,"app-footer"))},dependencies:[X,Or,kr,zr,Vr,Hr,$r,Gr,Wr,Yr],styles:[".main-content[_ngcontent-%COMP%]{display:block;overflow-x:hidden;width:100%}"]})};So(qr,$c).catch(i=>console.error(i));
