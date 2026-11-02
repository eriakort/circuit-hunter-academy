/* ============ PHYSICS mini-games (subject 'phys') ============
   Three interactive scene types, matching the engine's game(sc, host, done)
   contract. Tap/click based (not HTML5 drag) so they work on touch and are
   deterministic to test.
     vectors  — build a resultant, or resolve a vector into components, on a grid
     torque   — balance a lever beam by placing a weight at the right distance
     fluids   — buoyancy (float / sink) and hydrostatic pressure with depth
   They are wired into renderScene()'s G map and the gated list in 4_engine.js. */

/* ---- small SVG helpers (local to the physics games) ---- */
function vArrow(x1,y1,x2,y2,c){
  const ang=Math.atan2(y2-y1,x2-x1), h=11, s=6;
  const hx=x2-h*Math.cos(ang), hy=y2-h*Math.sin(ang);
  const p1x=hx-s*Math.sin(ang), p1y=hy+s*Math.cos(ang);
  const p2x=hx+s*Math.sin(ang), p2y=hy-s*Math.cos(ang);
  return `<line x1="${x1}" y1="${y1}" x2="${hx}" y2="${hy}" stroke="${c}" stroke-width="3.5" stroke-linecap="round"/><polygon points="${x2},${y2} ${p1x},${p1y} ${p2x},${p2y}" fill="${c}"/>`;
}
function vGridLines(N,X,Y){
  let g='';
  for(let i=0;i<=N;i++){
    g+=`<line x1="${X(i)}" y1="${Y(0)}" x2="${X(i)}" y2="${Y(N)}" stroke="var(--line)" stroke-width="1"/>`;
    g+=`<line x1="${X(0)}" y1="${Y(i)}" x2="${X(N)}" y2="${Y(i)}" stroke="var(--line)" stroke-width="1"/>`;
  }
  g+=`<line x1="${X(0)}" y1="${Y(0)}" x2="${X(N)}" y2="${Y(0)}" stroke="var(--muted)" stroke-width="2.5"/>`;
  g+=`<line x1="${X(0)}" y1="${Y(0)}" x2="${X(0)}" y2="${Y(N)}" stroke="var(--muted)" stroke-width="2.5"/>`;
  return g;
}

/* ---- Vectors: resultant (tip-to-tail) or components (resolve onto axes) ---- */
function gameVectors(sc,host,done){
  const mode=sc.mode||'resultant';
  const rounds=sc.rounds.slice(); let r=0, score=0;
  const N=sc.grid||6, unit=40, pad=26;
  const W=N*unit+pad*2, H=N*unit+pad*2;
  const X=gx=>pad+gx*unit, Y=gy=>H-pad-gy*unit;      // y points up
  const draw=()=>{
    if(r>=rounds.length){
      host.innerHTML=`<div class="game"><div class="gtitle">${L(['Vectors mastered!','Vettori padroneggiati!'])}</div><p>${L(['Score','Punteggio'])}: <b>${score} / ${rounds.length}</b>.${xpNote(score*4)}</p><p class="muted">${L(['Press Continue when you\'re ready.','Premi Continua quando sei pronta.'])}</p></div>`;
      award(score*4); done(); return;
    }
    const rd=rounds[r]; let step=0, first=true, targets, prompt, art='';
    if(mode==='resultant'){
      const [ax,ay]=rd.a,[bx,by]=rd.b;
      targets=[[ax+bx,ay+by]];
      prompt=L(['Add the two vectors tip-to-tail, then click the grid point where the resultant ends.','Somma i due vettori punta-coda, poi clicca il punto dove finisce la risultante.']);
      art=vArrow(X(0),Y(0),X(ax),Y(ay),'#45d8ff')+vArrow(X(ax),Y(ay),X(ax+bx),Y(ay+by),'#ff8fc0');
    } else {
      const [vx,vy]=rd.v;
      targets=[[vx,0],[0,vy]];
      prompt=L(['Click the x-component on the horizontal axis, then the y-component on the vertical axis.','Clicca la componente x sull\'asse orizzontale, poi la componente y sull\'asse verticale.']);
      art=vArrow(X(0),Y(0),X(vx),Y(vy),'#ff6a3d');
    }
    let nodes='';
    for(let gx=0;gx<=N;gx++) for(let gy=0;gy<=N;gy++)
      nodes+=`<circle class="vnode" data-x="${gx}" data-y="${gy}" cx="${X(gx)}" cy="${Y(gy)}" r="10"/>`;
    host.innerHTML=`<div class="game"><div class="gtitle">${L(sc.title)}</div><div class="count">${r+1} / ${rounds.length} · ${L(['score','punti'])} ${score}</div>
      <p class="muted" style="max-width:52ch">${prompt}</p>
      <div class="vwrap"><svg viewBox="0 0 ${W} ${H}" class="vgrid" role="img">${vGridLines(N,X,Y)}${art}${nodes}</svg></div>
      <div class="fb" id="vF" aria-live="polite"></div></div>`;
    const fb=$('#vF',host);
    $$('.vnode',host).forEach(nd=>nd.onclick=()=>{
      const gx=+nd.dataset.x, gy=+nd.dataset.y, t=targets[step];
      if(gx===t[0]&&gy===t[1]){
        nd.classList.add('hit'); step++;
        if(step>=targets.length){
          if(first) score++;
          const extra = mode==='resultant'
            ? L(['Magnitude = √('+(rd.a[0]+rd.b[0])+'² + '+(rd.a[1]+rd.b[1])+'²) = '+Math.round(Math.hypot(rd.a[0]+rd.b[0],rd.a[1]+rd.b[1])*100)/100+' units.','Modulo = √('+(rd.a[0]+rd.b[0])+'² + '+(rd.a[1]+rd.b[1])+'²) = '+Math.round(Math.hypot(rd.a[0]+rd.b[0],rd.a[1]+rd.b[1])*100)/100+' unità.'])
            : L(['Components: x = '+rd.v[0]+', y = '+rd.v[1]+'.','Componenti: x = '+rd.v[0]+', y = '+rd.v[1]+'.']);
          fb.className='fb ok'; fb.innerHTML=`<b>${L(['Right!','Giusto!'])}</b> ${L(rd.why)} ${extra}<div style="margin-top:10px"><button class="btn cyan sm" id="vN">${r===rounds.length-1?L(['Finish','Fine']):L(['Next','Avanti'])}</button></div>`;
          $('#vN',host).onclick=()=>{r++;draw();}; $('#vN',host).focus({preventScroll:true});
        } else { fb.className='fb'; fb.textContent=L(['Good — now the other component.','Bene — ora l\'altra componente.']); }
      } else { first=false; bump(nd); fb.className='fb no'; fb.textContent=L(['Not there. Follow the arrows.','Non lì. Segui le frecce.']); }
    });
  };
  draw();
}

/* ---- Torque: balance a lever. left moment (wl·dl) = right moment (wr·dr) ---- */
function gameTorque(sc,host,done){
  const rounds=sc.rounds.slice(); let r=0, score=0;
  const span=sc.span||5;                         // positions 1..span each side of the pivot
  const W=520, H=190, cx=W/2, pivotY=120, step=(cx-40)/span;
  const px=d=>cx+d*step;                          // d<0 left, d>0 right
  const weightBox=(x,y,label,c)=>`<g><rect x="${x-16}" y="${y-30}" width="32" height="26" rx="4" fill="${c}" opacity="0.85"/><text x="${x}" y="${y-11}" text-anchor="middle" font-size="12" font-weight="700" fill="#0b1020">${label}</text></g>`;
  const draw=()=>{
    if(r>=rounds.length){
      host.innerHTML=`<div class="game"><div class="gtitle">${L(['Balanced!','In equilibrio!'])}</div><p>${L(['Score','Punteggio'])}: <b>${score} / ${rounds.length}</b>.${xpNote(score*4)}</p><p class="muted">${L(['Press Continue when you\'re ready.','Premi Continua quando sei pronta.'])}</p></div>`;
      award(score*4); done(); return;
    }
    const rd=rounds[r]; const dr=rd.wl*rd.dl/rd.wr; let first=true;
    let slots='';
    for(let d=1;d<=span;d++) slots+=`<circle class="rpos" data-d="${d}" cx="${px(d)}" cy="${pivotY-5}" r="12"/>`;
    const beam=`<svg viewBox="0 0 ${W} ${H}" class="beam" role="img">
      <polygon points="${cx-22},${pivotY+40} ${cx+22},${pivotY+40} ${cx},${pivotY+2}" fill="var(--muted)"/>
      <line x1="40" y1="${pivotY-5}" x2="${W-40}" y2="${pivotY-5}" stroke="var(--ember)" stroke-width="7" stroke-linecap="round"/>
      ${[...Array(span)].map((_,i)=>`<text x="${px(-(i+1))}" y="${pivotY+28}" text-anchor="middle" font-size="11" fill="var(--muted)">${i+1}</text><text x="${px(i+1)}" y="${pivotY+28}" text-anchor="middle" font-size="11" fill="var(--muted)">${i+1}</text>`).join('')}
      ${weightBox(px(-rd.dl),pivotY-5,rd.wl,'#45d8ff')}
      ${slots}
    </svg>`;
    host.innerHTML=`<div class="game"><div class="gtitle">${L(sc.title)}</div><div class="count">${r+1} / ${rounds.length} · ${L(['score','punti'])} ${score}</div>
      <p class="muted" style="max-width:54ch">${L(['A '+rd.wl+' N weight sits '+rd.dl+' units left of the pivot. Click the distance on the right to place the '+rd.wr+' N weight so the beam balances.','Un peso di '+rd.wl+' N è a '+rd.dl+' unità a sinistra del perno. Clicca la distanza a destra dove mettere il peso di '+rd.wr+' N per far stare in equilibrio la leva.'])}</p>
      <div class="beamwrap">${beam}</div>
      <div class="fb" id="tF" aria-live="polite"></div></div>`;
    const fb=$('#tF',host);
    $$('.rpos',host).forEach(b=>b.onclick=()=>{
      const d=+b.dataset.d;
      if(d===dr){
        if(first) score++;
        $$('.rpos',host).forEach(x=>x.style.pointerEvents='none');
        b.classList.add('on');
        fb.className='fb ok'; fb.innerHTML=`<b>${L(['Balanced!','In equilibrio!'])}</b> ${rd.wl}×${rd.dl} = ${rd.wr}×${dr} = ${rd.wl*rd.dl} N·${L(['units','unità'])}. ${L(rd.why)}<div style="margin-top:10px"><button class="btn cyan sm" id="tN">${r===rounds.length-1?L(['Finish','Fine']):L(['Next','Avanti'])}</button></div>`;
        $('#tN',host).onclick=()=>{r++;draw();}; $('#tN',host).focus({preventScroll:true});
      } else {
        first=false; bump(b); fb.className='fb no';
        const side = rd.wr*d < rd.wl*rd.dl ? L(['too little — the left side still wins.','troppo poco — vince ancora la sinistra.']) : L(['too much — now the right side wins.','troppo — ora vince la destra.']);
        fb.textContent=`${rd.wr}×${d} = ${rd.wr*d}: ${side}`;
      }
    });
  };
  draw();
}

/* ---- Fluids: buoyancy (float/sink) and hydrostatic pressure (deepest = highest) ---- */
function gameFluids(sc,host,done){
  const mode=sc.mode||'float';
  const rounds=sc.rounds.slice(); let r=0, score=0;
  const finish=()=>{
    host.innerHTML=`<div class="game"><div class="gtitle">${mode==='float'?L(['Buoyancy solved!','Galleggiamento risolto!']):L(['Pressure read!','Pressione letta!'])}</div><p>${L(['Score','Punteggio'])}: <b>${score} / ${rounds.length}</b>.${xpNote(score*4)}</p><p class="muted">${L(['Press Continue when you\'re ready.','Premi Continua quando sei pronta.'])}</p></div>`;
    award(score*4); done();
  };
  const draw=()=>{
    if(r>=rounds.length){ finish(); return; }
    const rd=rounds[r]; let first=true;
    if(mode==='float'){
      const dens=rd.m/rd.v, floats=dens<1;                       // water = 1 g/cm³
      const nmE=Array.isArray(rd.name)?rd.name[0]:rd.name, nmI=Array.isArray(rd.name)?rd.name[1]:rd.name;
      host.innerHTML=`<div class="game"><div class="gtitle">${L(sc.title)}</div><div class="count">${r+1} / ${rounds.length} · ${L(['score','punti'])} ${score}</div>
        <div class="tank"><svg viewBox="0 0 260 150" role="img"><rect x="10" y="10" width="240" height="130" rx="8" fill="none" stroke="var(--line)"/><rect x="12" y="46" width="236" height="92" rx="6" fill="#45d8ff" opacity="0.16"/><line x1="12" y1="46" x2="248" y2="46" stroke="#45d8ff" stroke-width="2" opacity="0.6"/><rect x="112" y="${floats?34:92}" width="36" height="30" rx="5" fill="var(--ember)" opacity="0.9"/></svg></div>
        <p class="muted" style="max-width:52ch">${L([nmE+': mass '+rd.m+' g, volume '+rd.v+' cm³. Water has density 1 g/cm³. Will it float or sink?',nmI+': massa '+rd.m+' g, volume '+rd.v+' cm³. L\'acqua ha densità 1 g/cm³. Galleggia o affonda?'])}</p>
        <div class="cats"><button class="btn ghost fchoice" data-f="1">${L(['Floats','Galleggia'])}</button><button class="btn ghost fchoice" data-f="0">${L(['Sinks','Affonda'])}</button></div>
        <div class="fb" id="flF" aria-live="polite"></div></div>`;
      const fb=$('#flF',host);
      $$('.fchoice',host).forEach(b=>b.onclick=()=>{
        const pick=b.dataset.f==='1';
        if(pick===floats){
          if(first) score++;
          $$('.fchoice',host).forEach(x=>x.disabled=true); b.classList.remove('ghost'); b.classList.add('right');
          const dstr=(Math.round(dens*100)/100);
          fb.className='fb ok'; fb.innerHTML=`<b>${L(['Right!','Giusto!'])}</b> ${L(['density = '+rd.m+' ÷ '+rd.v+' = '+dstr+' g/cm³, '+(floats?'less':'more')+' than water, so it '+(floats?'floats':'sinks')+'.','densità = '+rd.m+' ÷ '+rd.v+' = '+dstr+' g/cm³, '+(floats?'minore':'maggiore')+' dell\'acqua, quindi '+(floats?'galleggia':'affonda')+'.'])}<div style="margin-top:10px"><button class="btn cyan sm" id="flN">${r===rounds.length-1?L(['Finish','Fine']):L(['Next','Avanti'])}</button></div>`;
          $('#flN',host).onclick=()=>{r++;draw();}; $('#flN',host).focus({preventScroll:true});
        } else { first=false; bump(b); b.disabled=true; b.classList.remove('ghost'); b.classList.add('wrong'); fb.className='fb no'; fb.textContent=L(['Not quite — compare its density with water first.','Non proprio — prima confronta la sua densità con l\'acqua.']); }
      });
    } else {                                                     // pressure: click deepest point
      const maxd=Math.max(...rd.points.map(p=>p.depth));
      const dots=rd.points.map(p=>`<circle class="pdot" data-depth="${p.depth}" cx="${p.x}" cy="${30+p.depth*18}" r="13"/><text x="${p.x}" y="${30+p.depth*18+4}" text-anchor="middle" font-size="10" fill="var(--text)" pointer-events="none">${String.fromCharCode(65+rd.points.indexOf(p))}</text>`).join('');
      host.innerHTML=`<div class="game"><div class="gtitle">${L(sc.title)}</div><div class="count">${r+1} / ${rounds.length} · ${L(['score','punti'])} ${score}</div>
        <div class="tank"><svg viewBox="0 0 260 170" role="img"><rect x="10" y="10" width="240" height="150" rx="8" fill="#45d8ff" opacity="0.14" stroke="var(--line)"/>${dots}</svg></div>
        <p class="muted" style="max-width:52ch">${L(['In the same liquid, pressure grows with depth (Stevin\'s law). Click the point under the greatest pressure.','Nello stesso liquido la pressione cresce con la profondità (legge di Stevino). Clicca il punto dove la pressione è maggiore.'])}</p>
        <div class="fb" id="flF" aria-live="polite"></div></div>`;
      const fb=$('#flF',host);
      $$('.pdot',host).forEach(b=>b.onclick=()=>{
        if(+b.dataset.depth===maxd){
          if(first) score++;
          $$('.pdot',host).forEach(x=>x.style.pointerEvents='none'); b.classList.add('on');
          fb.className='fb ok'; fb.innerHTML=`<b>${L(['Right!','Giusto!'])}</b> ${L(rd.why||['The deepest point feels the most pressure.','Il punto più profondo subisce la pressione maggiore.'])}<div style="margin-top:10px"><button class="btn cyan sm" id="flN">${r===rounds.length-1?L(['Finish','Fine']):L(['Next','Avanti'])}</button></div>`;
          $('#flN',host).onclick=()=>{r++;draw();}; $('#flN',host).focus({preventScroll:true});
        } else { first=false; bump(b); fb.className='fb no'; fb.textContent=L(['Deeper than that — pressure increases downward.','Più in profondità — la pressione aumenta verso il basso.']); }
      });
    }
  };
  draw();
}
