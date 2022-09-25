"use strict";(self.webpackChunktelegram_t=self.webpackChunktelegram_t||[]).push([[7941],{67941:(t,i,s)=>{s.r(i),s.d(i,{default:()=>k});var e=s(77361),n=s(26926);function h(t,i,s){return i in t?Object.defineProperty(t,i,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[i]=s,t}class r{constructor(t){this.worker=t,h(this,"requestStates",new Map),h(this,"requestStatesByCallback",new Map),this.subscribe()}request(t){const{worker:i,requestStates:s,requestStatesByCallback:e}=this,h=(0,n.Z)(s),r={type:"callMethod",messageId:h,...t},a={messageId:h},o=new Promise(((t,i)=>{Object.assign(a,{resolve:t,reject:i})}));if("function"==typeof r.args[r.args.length-1]){r.withCallback=!0;const t=r.args.pop();a.callback=t,e.set(t,a)}return s.set(h,a),o.catch((()=>{})).finally((()=>{s.delete(h),a.callback&&e.delete(a.callback)})),i.postMessage(r),o}cancelCallback(t){t.isCanceled=!0;const{messageId:i}=this.requestStatesByCallback.get(t)||{};i&&this.worker.postMessage({type:"cancelProgress",messageId:i})}subscribe(){const{worker:t,requestStates:i}=this;t.addEventListener("message",(t=>{let{data:s}=t;if("methodResponse"===s.type){const t=i.get(s.messageId);t&&(s.error?t.reject(s.error):t.resolve(s.response))}else if("methodCallback"===s.type){var e;const t=i.get(s.messageId);null==t||null===(e=t.callback)||void 0===e||e.call(t,...s.callbackArgs)}else if("unhandledError"===s.type){var n;throw new Error(null===(n=s.error)||void 0===n?void 0:n.message)}}))}}var a=s(9933),o=s(3570);function d(t,i,s){return i in t?Object.defineProperty(t,i,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[i]=s,t}const c=e.wB?.75:1,u=e.wZ?.5:.75,l=e.s$?2:4,m={},g=new Array(4).fill(void 0).map((()=>new r(new Worker(new URL(s.p+s.u(2993),s.b)))));let p=-1;const k=class{constructor(t,i,s={},e,h,r){this.container=t,this.tgsUrl=i,this.params=s,this.onLoad=e,this.customColor=h,this.onEnded=r,d(this,"imgSize",void 0),d(this,"key",(0,n.Z)(m)),d(this,"msPerFrame",1e3/60),d(this,"reduceFactor",1),d(this,"cacheModulo",void 0),d(this,"chunkSize",void 0),d(this,"workerIndex",void 0),d(this,"chunks",[]),d(this,"framesCount",void 0),d(this,"chunksCount",void 0),d(this,"canvas",document.createElement("canvas")),d(this,"ctx",this.canvas.getContext("2d")),d(this,"isAnimating",!1),d(this,"isWaiting",!0),d(this,"isEnded",!1),d(this,"isOnLoadFired",!1),d(this,"isDestroyed",!1),d(this,"approxFrameIndex",0),d(this,"prevFrameIndex",-1),d(this,"stopFrameIndex",0),d(this,"speed",1),d(this,"direction",1),d(this,"lastRenderAt",void 0),this.initContainer(),this.initConfig(),this.initRenderer()}isPlaying(){return this.isAnimating||this.isWaiting}play(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.isEnded&&t&&(this.approxFrameIndex=Math.floor(0)),this.stopFrameIndex=void 0,this.direction=1,this.doPlay()}pause(){this.isWaiting?this.stopFrameIndex=this.approxFrameIndex:this.isAnimating=!1;const t=this.getChunkIndex(this.approxFrameIndex);this.chunks=this.chunks.map(((i,s)=>s===t?i:void 0))}playSegment(t){let[i,s]=t;this.approxFrameIndex=Math.floor(i/this.reduceFactor),this.stopFrameIndex=Math.floor(s/this.reduceFactor),this.direction=i<s?1:-1,this.doPlay()}setSpeed(t){this.speed=t}destroy(){this.isDestroyed=!0,this.pause(),this.destroyRenderer(),this.destroyContainer()}initContainer(){if(!(this.container.parentNode instanceof HTMLElement))throw new Error("[RLottie] Container is not mounted");let{size:t}=this.params;if(!t&&(t=this.container.offsetWidth||parseInt(this.container.style.width,10)||this.container.parentNode.offsetWidth,!t))throw new Error("[RLottie] Failed to detect width from container");this.canvas.style.width=`${t}px`,this.canvas.style.height=`${t}px`;const{isLowPriority:i,quality:s=(i?u:c)}=this.params,n=Math.round(t*Math.max(e.cL*s,1));this.canvas.width=n,this.canvas.height=n,this.container.appendChild(this.canvas),this.imgSize=n}initConfig(){const{isLowPriority:t}=this.params;this.cacheModulo=t?0:l,this.chunkSize=1}destroyContainer(){this.canvas.remove()}setColor(t){if(this.customColor=t,this.customColor){const t=this.ctx.getImageData(0,0,this.imgSize,this.imgSize),i=t.data;for(let t=0;t<i.length;t+=4)i[t]=this.customColor[0],i[t+1]=this.customColor[1],i[t+2]=this.customColor[2];this.ctx.putImageData(t,0,0)}}initRenderer(){this.workerIndex=(0,o.Z)(4,++p),g[this.workerIndex].request({name:"init",args:[this.key,this.tgsUrl,this.imgSize,this.params.isLowPriority,this.onRendererInit.bind(this)]})}destroyRenderer(){g[this.workerIndex].request({name:"destroy",args:[this.key]})}onRendererInit(t,i,s){this.reduceFactor=t,this.msPerFrame=i,this.framesCount=s,this.chunksCount=Math.ceil(s/this.chunkSize),this.isWaiting&&this.doPlay()}changeData(t){this.pause(),this.tgsUrl=t,this.initConfig(),g[this.workerIndex].request({name:"changeData",args:[this.key,this.tgsUrl,this.params.isLowPriority,this.onChangeData.bind(this)]})}onChangeData(t,i,s){this.reduceFactor=t,this.msPerFrame=i,this.framesCount=s,this.chunksCount=Math.ceil(s/this.chunkSize),this.isWaiting=!1,this.isAnimating=!1,this.doPlay()}doPlay(){this.framesCount&&(this.isDestroyed||this.isAnimating||(this.isWaiting||(this.lastRenderAt=void 0),this.isEnded=!1,this.isAnimating=!0,this.isWaiting=!1,(0,a.jt)((()=>{if(this.isDestroyed)return!1;if(!this.isAnimating&&this.isOnLoadFired)return!1;const t=Math.round(this.approxFrameIndex),i=this.getChunkIndex(t),s=this.chunks[i];if(!s||0===s.length)return this.requestChunk(i),this.isAnimating=!1,this.isWaiting=!0,!1;if(this.cacheModulo&&i%this.cacheModulo==0&&this.cleanupPrevChunk(i),t!==this.prevFrameIndex){const i=this.getFrame(t);if(!i)return this.isAnimating=!1,this.isWaiting=!0,!1;const s=new Uint8ClampedArray(i);if(this.customColor)for(let t=0;t<s.length;t+=4)s[t]=this.customColor[0],s[t+1]=this.customColor[1],s[t+2]=this.customColor[2];const e=new ImageData(s,this.imgSize,this.imgSize);this.ctx.putImageData(e,0,0),this.onLoad&&!this.isOnLoadFired&&(this.isOnLoadFired=!0,this.onLoad()),this.prevFrameIndex=t}const e=Date.now(),n=this.lastRenderAt?this.msPerFrame/(e-this.lastRenderAt):1,h=Math.min(1,this.direction*this.speed/n),r=Math.round(this.approxFrameIndex+h);if(this.lastRenderAt=e,h>0&&(t===this.framesCount-1||r>this.framesCount-1)){var a;if(this.params.noLoop)return this.isAnimating=!1,this.isEnded=!0,null===(a=this.onEnded)||void 0===a||a.call(this),!1;this.approxFrameIndex=0}else if(h<0&&(0===t||r<0)){var o;if(this.params.noLoop)return this.isAnimating=!1,this.isEnded=!0,null===(o=this.onEnded)||void 0===o||o.call(this),!1;this.approxFrameIndex=this.framesCount-1}else{if(void 0!==this.stopFrameIndex&&(t===this.stopFrameIndex||h>0&&r>this.stopFrameIndex||h<0&&r<this.stopFrameIndex))return this.stopFrameIndex=void 0,this.isAnimating=!1,!1;this.approxFrameIndex+=h}const d=Math.round(this.approxFrameIndex);return!!this.getFrame(d)||(this.requestChunk(this.getChunkIndex(d)),this.isWaiting=!0,this.isAnimating=!1,!1)}))))}getFrame(t){const i=this.getChunkIndex(t),s=this.getFrameIndexInChunk(t),e=this.chunks[i];if(e)return e[s]}getFrameIndexInChunk(t){return t-this.getChunkIndex(t)*this.chunkSize}getChunkIndex(t){return Math.floor(t/this.chunkSize)}requestChunk(t){var i;if(this.chunks[t]&&0!==(null===(i=this.chunks[t])||void 0===i?void 0:i.length))return;this.chunks[t]=[];const s=t*this.chunkSize,e=Math.min(s+this.chunkSize-1,this.framesCount-1);g[this.workerIndex].request({name:"renderFrames",args:[this.key,s,e,this.onFrameLoad.bind(this)]})}cleanupPrevChunk(t){if(this.chunksCount<3)return;const i=(0,o.Z)(this.chunksCount,t-1);this.chunks[i]=void 0}requestNextChunk(t){if(1===this.chunksCount)return;const i=(0,o.Z)(this.chunksCount,t+1);this.chunks[i]||this.requestChunk(i)}onFrameLoad(t,i){const s=this.getChunkIndex(t),e=this.chunks[s];e&&(e[this.getFrameIndexInChunk(t)]=i,this.isWaiting&&this.doPlay())}}},3570:(t,i,s)=>{function e(t,i){return i-Math.floor(i/t)*t}s.d(i,{Z:()=>e})}}]);
//# sourceMappingURL=7941.7394fb0b394c9ee95fb1.js.map