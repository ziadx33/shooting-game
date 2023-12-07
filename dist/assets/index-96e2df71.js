var w=Object.defineProperty;var M=(t,i,s)=>i in t?w(t,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[i]=s;var c=(t,i,s)=>(M(t,typeof i!="symbol"?i+"":i,s),s);(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))h(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&h(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function h(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const o=document.getElementById("game"),u=o.getContext("2d"),p=document.querySelector(".score-container");let n=0,x=0;const m=localStorage.getItem("high-score");m?(x=Number(m),p.innerHTML=`score: ${n} <br /> high score: ${x}`):localStorage.setItem("high-score","0");o.width=innerWidth;o.height=innerHeight;class v{constructor(i,s,h,e,r){c(this,"x");c(this,"y");c(this,"radius");c(this,"color");c(this,"ctx");this.x=i,this.y=s,this.radius=h,this.color=e,this.ctx=r}render(){this.ctx.beginPath(),this.ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,!1),this.ctx.fillStyle=this.color,this.ctx.fill()}}class b{constructor(i,s,h,e,r,a){c(this,"x");c(this,"y");c(this,"radius");c(this,"color");c(this,"velocity");c(this,"ctx");this.x=i,this.y=s,this.radius=h,this.color=e,this.velocity=r,this.ctx=a}render(){this.ctx.beginPath(),this.ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,!1),this.ctx.fillStyle=this.color,this.ctx.fill()}update(){this.render(),this.x=this.x+this.velocity.x,this.y=this.y+this.velocity.y}}let f;const d=new v(o.width/2,o.height/2,25,"white",u);d.render();let l=[],y=[];window.addEventListener("click",t=>{const i=Math.atan2(t.clientY-o.height/2,t.clientX-o.width/2),s={x:Math.cos(i)*10,y:Math.sin(i)*10};l.push(new b(o.width/2,o.height/2,7,"white",s,u))});class P{constructor(i,s,h,e,r,a){c(this,"x");c(this,"y");c(this,"radius");c(this,"color");c(this,"velocity");c(this,"ctx");this.x=i,this.y=s,this.radius=h,this.color=e,this.velocity=r,this.ctx=a}render(){this.ctx.beginPath(),this.ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,!1),this.ctx.fillStyle=this.color,this.ctx.fill()}update(){this.render(),this.x=this.x+this.velocity.x,this.y=this.y+this.velocity.y}}function S(){setInterval(()=>{const t=Math.random()*20+10;let i,s;Math.random()>.5?(i=Math.random()<.5?0-t:o.width+t,s=Math.random()*o.height):(i=Math.random()*o.width,s=Math.random()<.5?0-t:o.height-t);const h=Math.atan2(o.height/2-s,o.width/2-i),e=`hsl(${Math.random()*360}, 50%, 50%)`,r={x:Math.cos(h)*10,y:Math.sin(h)*10};y.push(new P(i,s,t,e,r,u))},1e3)}S();function g(){f=requestAnimationFrame(g),u.fillStyle="rgb(0, 0, 0, 0.1)",u.fillRect(0,0,o.width,o.height),d.render(),l.forEach((t,i)=>{t.update(),(t.x+t.radius<0||t.x-t.radius>o.width||t.y+t.radius<0||t.y-t.radius>o.height)&&l.splice(i,1)}),y.forEach((t,i)=>{t.update(),Math.hypot(d.x-t.x,d.y-t.y)-t.radius-d.radius<1&&(cancelAnimationFrame(typeof f!="boolean"?f:0),t.radius-10<10&&(t.radius-=10),f=!1,n>=Number(localStorage.getItem("high-score"))&&localStorage.setItem("high-score",`${n}`),confirm("would you like to play again?")?(l=[],y=[],n=0,g()):window.close()),l.forEach((h,e)=>{Math.hypot(h.x-t.x,h.y-t.y)-t.radius-h.radius<1&&(y.splice(i,1),l.splice(e,1),n++,p.innerHTML=`score: ${n} <br /> high score: ${x}`)})})}g();