
var Module = (function() {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  return (
function(Module) {
  Module = Module || {};

var a;a||(a=typeof Module !== 'undefined' ? Module : {});var d={},g;for(g in a)a.hasOwnProperty(g)&&(d[g]=a[g]);var h=!1,l=!1,m=!1,aa=!1,n=!1;h="object"===typeof window;l="function"===typeof importScripts;m=(aa="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node)&&!h&&!l;n=!h&&!m&&!l;var p="",q,v;
if(m){p=__dirname+"/";var w,x;q=function(b,c){w||(w=require("fs"));x||(x=require("path"));b=x.normalize(b);b=w.readFileSync(b);return c?b:b.toString()};v=function(b){b=q(b,!0);b.buffer||(b=new Uint8Array(b));b.buffer||y("Assertion failed: undefined");return b};1<process.argv.length&&process.argv[1].replace(/\\/g,"/");process.argv.slice(2);process.on("uncaughtException",function(b){throw b;});process.on("unhandledRejection",y);a.inspect=function(){return"[Emscripten Module object]"}}else if(n)"undefined"!=
typeof read&&(q=function(b){return read(b)}),v=function(b){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(b));b=read(b,"binary");"object"===typeof b||y("Assertion failed: undefined");return b},"undefined"!==typeof print&&("undefined"===typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(h||l)l?p=self.location.href:document.currentScript&&(p=document.currentScript.src),_scriptDir&&(p=_scriptDir),0!==p.indexOf("blob:")?
p=p.substr(0,p.lastIndexOf("/")+1):p="",q=function(b){var c=new XMLHttpRequest;c.open("GET",b,!1);c.send(null);return c.responseText},l&&(v=function(b){var c=new XMLHttpRequest;c.open("GET",b,!1);c.responseType="arraybuffer";c.send(null);return new Uint8Array(c.response)});var z=a.print||console.log.bind(console),A=a.printErr||console.warn.bind(console);for(g in d)d.hasOwnProperty(g)&&(a[g]=d[g]);d=null;var ba={"f64-rem":function(b,c){return b%c},"debugger":function(){}},B;a.wasmBinary&&(B=a.wasmBinary);
"object"!==typeof WebAssembly&&A("no native wasm support detected");var D,ca=new WebAssembly.Table({initial:24,maximum:24,element:"anyfunc"}),E=!1,F="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");var buffer,G,J,K,L=a.TOTAL_MEMORY||16777216;a.wasmMemory?D=a.wasmMemory:D=new WebAssembly.Memory({initial:L/65536,maximum:L/65536});D&&(buffer=D.buffer);L=buffer.byteLength;var M=buffer;buffer=M;a.HEAP8=G=new Int8Array(M);
a.HEAP16=new Int16Array(M);a.HEAP32=K=new Int32Array(M);a.HEAPU8=J=new Uint8Array(M);a.HEAPU16=new Uint16Array(M);a.HEAPU32=new Uint32Array(M);a.HEAPF32=new Float32Array(M);a.HEAPF64=new Float64Array(M);K[2044]=5251248;function N(b){for(;0<b.length;){var c=b.shift();if("function"==typeof c)c();else{var e=c.v;"number"===typeof e?void 0===c.s?a.dynCall_v(e):a.dynCall_vi(e,c.s):e(void 0===c.s?null:c.s)}}}var O=[],da=[],ka=[],la=[];function ma(){var b=a.preRun.shift();O.unshift(b)}var T=0,U=null,V=null;
a.preloadedImages={};a.preloadedAudios={};function y(b){if(a.onAbort)a.onAbort(b);z(b);A(b);E=!0;throw"abort("+b+"). Build with -s ASSERTIONS=1 for more info.";}function na(){var b=W;return String.prototype.startsWith?b.startsWith("data:application/octet-stream;base64,"):0===b.indexOf("data:application/octet-stream;base64,")}var W="sloth.wasm";if(!na()){var oa=W;W=a.locateFile?a.locateFile(oa,p):p+oa}
function pa(){try{if(B)return new Uint8Array(B);if(v)return v(W);throw"both async and sync fetching of the wasm failed";}catch(b){y(b)}}function qa(){return B||!h&&!l||"function"!==typeof fetch?new Promise(function(b){b(pa())}):fetch(W,{credentials:"same-origin"}).then(function(b){if(!b.ok)throw"failed to load wasm binary file at '"+W+"'";return b.arrayBuffer()}).catch(function(){return pa()})}
a.asm=function(){function b(b){a.asm=b.exports;T--;a.monitorRunDependencies&&a.monitorRunDependencies(T);0==T&&(null!==U&&(clearInterval(U),U=null),V&&(b=V,V=null,b()))}function c(c){b(c.instance)}function e(b){return qa().then(function(b){return WebAssembly.instantiate(b,C)}).then(b,function(b){A("failed to asynchronously prepare wasm: "+b);y(b)})}var C={env:X,wasi_unstable:X,global:{NaN:NaN,Infinity:Infinity},"global.Math":Math,asm2wasm:ba};T++;a.monitorRunDependencies&&a.monitorRunDependencies(T);
if(a.instantiateWasm)try{return a.instantiateWasm(C,b)}catch(H){return A("Module.instantiateWasm callback failed with error: "+H),!1}(function(){if(B||"function"!==typeof WebAssembly.instantiateStreaming||na()||"function"!==typeof fetch)return e(c);fetch(W,{credentials:"same-origin"}).then(function(b){return WebAssembly.instantiateStreaming(b,C).then(c,function(b){A("wasm streaming compile failed: "+b);A("falling back to ArrayBuffer instantiation");e(c)})})})();return{}};var ra=[null,[],[]];
function sa(){return 0}function ta(){return 0}
function ua(b,c,e,C){try{for(var H=0,I=0;I<e;I++){for(var wa=K[c+8*I>>2],ea=K[c+(8*I+4)>>2],P=0;P<ea;P++){var Q=J[wa+P],R=ra[b];if(0===Q||10===Q){var xa=1===b?z:A;for(var r=R,k=0,t=k+void 0,u=k;r[u]&&!(u>=t);)++u;if(16<u-k&&r.subarray&&F)var fa=F.decode(r.subarray(k,u));else{for(t="";k<u;){var f=r[k++];if(f&128){var S=r[k++]&63;if(192==(f&224))t+=String.fromCharCode((f&31)<<6|S);else{var ha=r[k++]&63;f=224==(f&240)?(f&15)<<12|S<<6|ha:(f&7)<<18|S<<12|ha<<6|r[k++]&63;if(65536>f)t+=String.fromCharCode(f);
else{var ia=f-65536;t+=String.fromCharCode(55296|ia>>10,56320|ia&1023)}}}else t+=String.fromCharCode(f)}fa=t}xa(fa);R.length=0}else R.push(Q)}H+=ea}K[C>>2]=H;return 0}catch(ja){return y(ja),ja.u}}
var X={h:function(){return sa.apply(null,arguments)},c:function(){return ta.apply(null,arguments)},g:function(){return ua.apply(null,arguments)},__memory_base:1024,__table_base:0,b:function(){y()},f:function(){return G.length},e:function(b,c,e){J.set(J.subarray(c,c+e),b)},d:function(){y("OOM")},a:y,memory:D,table:ca},va=a.asm({},X,buffer);a.asm=va;a._free=function(){return a.asm.i.apply(null,arguments)};a._malloc=function(){return a.asm.j.apply(null,arguments)};
a._sloth=function(){return a.asm.k.apply(null,arguments)};a._sloth_verification=function(){return a.asm.l.apply(null,arguments)};a._subspace_create_prime=function(){return a.asm.m.apply(null,arguments)};a._subspace_decode=function(){return a.asm.n.apply(null,arguments)};a._subspace_destroy_prime=function(){return a.asm.o.apply(null,arguments)};a._subspace_encode=function(){return a.asm.p.apply(null,arguments)};a.dynCall_vi=function(){return a.asm.q.apply(null,arguments)};a.asm=va;var Y;
a.then=function(b){if(Y)b(a);else{var c=a.onRuntimeInitialized;a.onRuntimeInitialized=function(){c&&c();b(a)}}return a};V=function ya(){Y||Z();Y||(V=ya)};
function Z(){function b(){if(!Y&&(Y=!0,!E)){N(da);N(ka);if(a.onRuntimeInitialized)a.onRuntimeInitialized();if(a.postRun)for("function"==typeof a.postRun&&(a.postRun=[a.postRun]);a.postRun.length;){var b=a.postRun.shift();la.unshift(b)}N(la)}}if(!(0<T)){if(a.preRun)for("function"==typeof a.preRun&&(a.preRun=[a.preRun]);a.preRun.length;)ma();N(O);0<T||(a.setStatus?(a.setStatus("Running..."),setTimeout(function(){setTimeout(function(){a.setStatus("")},1);b()},1)):b())}}a.run=Z;
if(a.preInit)for("function"==typeof a.preInit&&(a.preInit=[a.preInit]);0<a.preInit.length;)a.preInit.pop()();Z();


  return Module
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
      module.exports = Module;
    else if (typeof define === 'function' && define['amd'])
      define([], function() { return Module; });
    else if (typeof exports === 'object')
      exports["Module"] = Module;
    