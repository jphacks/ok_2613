/** Visual-only smoking simulation. No measurements, notifications or saved data. */
export function createSmokingSimulation(target,{burnDurationMs=300000,compact=false,onHoldChange=null,onExtinguish=null}={}) {
  const container=typeof target==='string'?document.querySelector(target):target;
  if(!container?.appendChild)throw new TypeError('A mount element is required');
  if(!Number.isFinite(burnDurationMs)||burnDurationMs<=0)throw new RangeError('burnDurationMs must be positive');
  const host=document.createElement('div');container.appendChild(host);
  const root=host.attachShadow({mode:'open'});
  const stylesheet=document.createElement('link');stylesheet.rel='stylesheet';stylesheet.href=new URL('./smoking-simulation.css',import.meta.url).href;root.appendChild(stylesheet);
  const content=document.createElement('section');
  content.innerHTML=`<div class="simulation${compact?' compact':''}"><header>EMBER <small>SMOKING SIMULATION</small></header><h2>火と煙を、眺める。</h2><p class="intro">長押しすると、火種と煙が強まります。</p><div class="stage extinguished" aria-hidden="true"><div class="cigarette"><div class="smoke-source">${[0,1,2,3,4,5,6].map(i=>`<i class="smoke" style="--delay:-${i*.8}s;--drift:${(i%3-1)*15+10}px"></i>`).join('')}</div><div class="paper"></div><div class="filter"></div><i class="tip"></i></div></div><p class="status" data-status role="status" aria-live="polite">火をつけて、はじめましょう。</p><button type="button" data-light class="primary">火をつける</button><button type="button" data-hold class="hold" hidden disabled><span>◎</span><strong>長押しで火種を強くする</strong><small>離すと、ゆっくりとした煙に戻ります</small></button><button type="button" data-extinguish class="end" hidden>火を消す</button><p class="caption">燃焼・煙・短縮は視覚的な演出です。<br>実際の燃焼速度を再現するものではありません。</p></div>`;
  root.appendChild(content);
  const q=s=>root.querySelector(s),abort=new AbortController();
  let status='idle',litAt=0,frame=null,pointer=null,keyboard=false,destroyed=false,exhaleTimer=null;
  function notifyHold(holding,interrupted=false){try{onHoldChange?.({holding,interrupted});}catch(error){console.error(error);}}
  function release(interrupted=true){const wasHeld=pointer!==null||keyboard,captured=pointer;pointer=null;keyboard=false;q('.simulation').classList.remove('holding');if(captured!==null&&q('[data-hold]').hasPointerCapture?.(captured))try{q('[data-hold]').releasePointerCapture(captured);}catch{}if(wasHeld){const cancelled=interrupted!==false;if(!cancelled){q('.simulation').classList.add('exhaling');clearTimeout(exhaleTimer);exhaleTimer=setTimeout(()=>{q('.simulation').classList.remove('exhaling');exhaleTimer=null;},1500);}notifyHold(false,cancelled);}}
  function beginHold(){clearTimeout(exhaleTimer);exhaleTimer=null;q('.simulation').classList.remove('exhaling');q('.simulation').classList.add('holding');notifyHold(true);}

  function render(){const burning=status==='burning';q('.stage').classList.toggle('extinguished',!burning);q('[data-light]').hidden=burning;q('[data-hold]').hidden=!burning;q('[data-hold]').disabled=!burning;q('[data-extinguish]').hidden=!burning;q('[data-light]').textContent=status==='idle'?'火をつける':'新しいタバコに火をつける';q('[data-status]').textContent=status==='burned-out'?'火が消えました。':status==='extinguished'?'火を消しました。':burning?'ゆっくり煙が立ち上ります。':'火をつけて、はじめましょう。';}
  function stopFrame(){if(frame!==null){cancelAnimationFrame(frame);frame=null;}}
  function animate(){if(status!=='burning'||destroyed)return;const progress=Math.min(1,Math.max(0,(Date.now()-litAt)/burnDurationMs));q('.cigarette').style.setProperty('--burn',progress);if(progress>=1){status='burned-out';release();frame=null;render();return;}frame=requestAnimationFrame(animate);}
  function start(){if(destroyed)throw Error('Simulation has been destroyed');if(status==='burning')return;stopFrame();release();status='burning';litAt=Date.now();q('.cigarette').style.setProperty('--burn',0);render();animate();}
  function extinguish(){if(destroyed||status!=='burning')return;stopFrame();release();status='extinguished';render();try{onExtinguish?.();}catch(error){console.error(error);}}
  const button=q('[data-hold]');
  function listen(target,event,handler){target.addEventListener(event,handler,{signal:abort.signal});}
  listen(button,'contextmenu',e=>e.preventDefault());
  listen(button,'pointerdown',e=>{if(status!=='burning'||!e.isPrimary||(e.pointerType==='mouse'&&e.button!==0)||pointer!==null||keyboard)return;e.preventDefault();pointer=e.pointerId;try{button.setPointerCapture(pointer);}catch{}beginHold();});
  listen(button,'pointerup',e=>{if(e.pointerId===pointer){e.preventDefault();release(false);}});
  for(const event of ['pointercancel','lostpointercapture'])listen(button,event,e=>{if(e.pointerId===pointer)release();});
  listen(button,'keydown',e=>{if(['Space','Enter'].includes(e.code)){e.preventDefault();if(status==='burning'&&!e.repeat&&pointer===null&&!keyboard){keyboard=true;beginHold();}}});
  listen(button,'keyup',e=>{if(['Space','Enter'].includes(e.code)&&keyboard){e.preventDefault();release(false);}});
  listen(button,'blur',release);listen(window,'blur',release);listen(window,'pagehide',release);
  listen(document,'visibilitychange',()=>{if(document.hidden){release();stopFrame();}else if(status==='burning'){stopFrame();animate();}});
  listen(q('[data-light]'),'click',start);listen(q('[data-extinguish]'),'click',extinguish);
  return {start,extinguish,destroy(){if(destroyed)return;stopFrame();release();clearTimeout(exhaleTimer);abort.abort();destroyed=true;host.remove();}};
}
