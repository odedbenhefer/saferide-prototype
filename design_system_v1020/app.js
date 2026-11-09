/* SafeRide (design_system_v1020) — mobile prototype, demo data only. */
(function(){
'use strict';
/* ================= icons (line, 24 grid, round caps) ================= */
var ICONS={
 check:'<path d="M5 12.5l4.5 4.5L19 7.5"/>',
 clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
 minus:'<path d="M5 12h14"/>',
 x:'<path d="M6 6l12 12M18 6L6 18"/>',
 shield:'<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
 out:'<path d="M19 12H5M11 6l-6 6 6 6"/>',
 back:'<path d="M5 12h14M13 6l6 6-6 6"/>',
 plus:'<path d="M12 5v14M5 12h14"/>',
 home:'<path d="M4 11l8-7 8 7"/><path d="M6 10v9h12v-9"/><path d="M10 19v-5h4v5"/>',
 car:'<path d="M3 16v-3l2-3.5a2 2 0 0 1 1.7-1h5.6a2 2 0 0 1 1.5.7L16 11.5l3.5.8a1.5 1.5 0 0 1 1.5 1.5V16"/><path d="M3 16h2.5M10.5 16h3M18.5 16H21"/><circle cx="8" cy="16" r="2.5"/><circle cx="16" cy="16" r="2.5"/>',
 user:'<circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-6 8-6s8 2 8 6"/>',
 users:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c0-3.5 3-5.5 6.5-5.5s6.5 2 6.5 5.5"/><circle cx="17" cy="9" r="2.5"/><path d="M17 14c3 0 4.5 2 4.5 4.5"/>',
 sparkle:'<path d="M11 3l1.9 5.1L18 10l-5.1 1.9L11 17l-1.9-5.1L4 10l5.1-1.9z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/>',
 bell:'<path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15z"/><path d="M10 21h4"/>',
 ball:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3v18"/><path d="M5.5 5.5c4 3 4 10 0 13M18.5 5.5c-4 3-4 10 0 13"/>',
 judo:'<circle cx="12" cy="5" r="2.5"/><path d="M8 21l2.5-7M16 21l-2.5-7M5.5 10.5l6.5 2.5 6.5-2.5M9 14h6"/>',
 palette:'<path d="M12 3a9 9 0 1 0 0 18c1.5 0 2-1 1.5-2-.7-1.5.3-3 2-3H18a3 3 0 0 0 3-3c0-5-4-10-9-10z"/><circle cx="8" cy="11" r="1"/><circle cx="12" cy="7.5" r="1"/><circle cx="16" cy="11" r="1"/>',
 music:'<path d="M9 18V6l10-2v12"/><circle cx="7" cy="18" r="2.5"/><circle cx="17" cy="16" r="2.5"/>',
 chevron:'<path d="M15 5l-7 7 7 7"/>',
 fwd:'<path d="M9 5l7 7-7 7"/>',
 up:'<path d="M5 15l7-7 7 7"/>',down:'<path d="M5 9l7 7 7-7"/>',
 info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
 alert:'<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18h.01"/>',
 search:'<circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/>',
 cal:'<rect x="4" y="5" width="16" height="15" rx="3"/><path d="M8 3v4M16 3v4M4 10h16"/>',
 send:'<path d="M21 3L10 14M21 3l-7 18-4-7-7-4z"/>',
 edit:'<path d="M4 20h4L19 9l-4-4L4 16z"/>',
 trash:'<path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/>',
 pin:'<path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',
 phone:'<path d="M6 3h4l2 5-2.5 1.5a11 11 0 0 0 5 5L16 12l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 4 5a2 2 0 0 1 2-2z"/>',
 mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
 flag:'<path d="M5 21V4M5 4h11l-2 4 2 4H5"/>',
 mega:'<path d="M3 10v4l12 5V5z"/><path d="M7 15l1 5h3l-1-4"/><path d="M18 9c1.5 1 1.5 5 0 6"/>',
 sliders:'<path d="M4 7h9M17 7h3M4 17h3M11 17h9"/><circle cx="15" cy="7" r="2"/><circle cx="9" cy="17" r="2"/>',
 grid:'<rect x="4" y="4" width="7" height="7" rx="2"/><rect x="13" y="4" width="7" height="7" rx="2"/><rect x="4" y="13" width="7" height="7" rx="2"/><rect x="13" y="13" width="7" height="7" rx="2"/>'
};
function ic(n,s,w){return '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="'+(w||2)+'" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"'+(s?' style="width:'+s+'px;height:'+s+'px"':'')+'>'+(ICONS[n]||'')+'</svg>'}

/* ================= static data ================= */
var DAYS=['ראשון','שני','שלישי','רביעי','חמישי','שישי','שבת'];
var AREAS=['רמת אביב','רמת גן','תל אביב מרכז','פלורנטין','נווה צדק'];
var CLOCKS=[
 {k:'a',label:'8.11 · לפני ההסעות',iso:'2026-11-08T10:00'},
 {k:'b',label:'9.11 · 17:12, אחרי ההלוך',iso:'2026-11-09T17:12'},
 {k:'c',label:'9.11 · 18:45, אחרי החזור',iso:'2026-11-09T18:45'},
 {k:'d',label:'10.11 · למחרת',iso:'2026-11-10T09:00'},
 {k:'e',label:"11.11 · 18:30, אחרי ג'ודו",iso:'2026-11-11T18:30'}
];
var ROLES=[
 {k:'michal',name:'מיכל לוי',sub:'הורה · הילד: נועם',tint:'aqua'},
 {k:'sharon',name:'שרון ברק',sub:'הורה מסיע · הילד: גל',tint:'sky'},
 {k:'dana',name:'דנה כהן',sub:'הורה מסיע',tint:'sky'},
 {k:'yael',name:'יעל מור',sub:'הורה מסיע',tint:'sky'},
 {k:'noam',name:'נועם לוי',sub:'ילד',tint:'blush'},
 {k:'admin',name:'מנהל החוג',sub:'ניהול הורים, ילדים וחוגים',tint:'lilac'}
];
function seed(){
 return {
  acts:{
   bb:{id:'bb',name:'כדורסל',full:'חוג כדורסל',place:'אולם הספורט, רמת אביב',days:['שני'],start:'17:00',end:'18:30',icon:'ball'},
   judo:{id:'judo',name:"ג'ודו",full:"חוג ג'ודו",place:'מתנ״ס רמת אביב',days:['רביעי'],start:'16:30',end:'17:45',icon:'judo'},
   art:{id:'art',name:'אומנות',full:'חוג אומנות',place:'בית האמנות, רמת אביב',days:['חמישי'],start:'16:00',end:'17:15',icon:'palette'}
  },
  parents:{
   michal:{id:'michal',name:'מיכל לוי',phone:'050-0000001',email:'',addr:'רחוב הדוגמה 1',area:'רמת אביב',drive:false,lic:0,ins:0,bg:0,ver:null,child:'noam'},
   sharon:{id:'sharon',name:'שרון ברק',phone:'050-0000002',email:'',addr:'רחוב הדוגמה 2',area:'רמת אביב',drive:true,lic:1,ins:1,bg:0,ver:'1.11.2026',child:'gal'},
   dana:{id:'dana',name:'דנה כהן',phone:'050-0000003',email:'',addr:'רחוב הדוגמה 3',area:'רמת אביב',drive:true,lic:1,ins:1,bg:0,ver:'1.11.2026',child:null},
   yael:{id:'yael',name:'יעל מור',phone:'050-0000004',email:'',addr:'רחוב הדוגמה 4',area:'רמת גן',drive:true,lic:1,ins:1,bg:0,ver:'2.11.2026',child:null},
   or:{id:'or',name:'אור דגן',phone:'050-0000005',email:'',addr:'רחוב הדוגמה 5',area:'רמת אביב',drive:false,lic:0,ins:0,bg:0,ver:null,child:'yuval'},
   avi:{id:'avi',name:'אבי מזרחי',phone:'050-0000006',email:'',addr:'רחוב הדוגמה 6',area:'פלורנטין',drive:false,lic:1,ins:0,bg:0,ver:null,child:null},
   merav:{id:'merav',name:'מירב כהן',phone:'050-0000007',email:'',addr:'רחוב הדוגמה 7',area:'נווה צדק',drive:false,lic:0,ins:0,bg:0,ver:null,child:null}
  },
  kids:{
   noam:{id:'noam',name:'נועם לוי',acts:['bb','judo','art'],area:'רמת אביב',parent:'michal',addr:'רחוב הדוגמה 1',notes:'',active:true},
   gal:{id:'gal',name:'גל ברק',acts:['bb'],area:'רמת אביב',parent:'sharon',addr:'רחוב הדוגמה 2',notes:'',active:true},
   yuval:{id:'yuval',name:'יובל דגן',acts:['bb'],area:'רמת אביב',parent:'or',addr:'רחוב הדוגמה 5',notes:'',active:true}
  },
  rides:[
   {id:'r1',dir:'to',act:'bb',date:'2026-11-09',time:'17:00',driver:'sharon',area:'רמת אביב',total:3,free:1,dchild:'gal',status:'open',arr:{}},
   {id:'r2',dir:'from',act:'bb',date:'2026-11-09',time:'18:30',driver:'dana',area:'רמת אביב',total:3,free:2,dchild:null,status:'open',arr:{}},
   {id:'r3',dir:'to',act:'judo',date:'2026-11-11',time:'16:30',driver:'yael',area:'רמת אביב',total:3,free:3,dchild:null,status:'open',arr:{}},
   {id:'r4',dir:'from',act:'judo',date:'2026-11-11',time:'17:45',driver:'yael',area:'רמת אביב',total:3,free:2,dchild:null,status:'open',arr:{}}
  ],
  reqs:[
   {id:'q1',parent:'or',child:'yuval',act:'bb',out:'r1',back:'r2',so:'approved',sb:'approved',end:null},
   {id:'q2',parent:'michal',child:'noam',act:'judo',out:'r3',back:'r4',so:'pending',sb:'approved',end:null}
  ],
  ann:[{id:'n1',title:'שינוי בשעת ההסעה',body:'ההסעה של חוג כדורסל תצא 10 דקות מוקדם יותר.',aud:'bb',status:'sent',when:'8.11'}],
  seq:10
 };
}
/* ================= state + persistence ================= */
var KEY='saferide-v1020';
function load(){try{var j=JSON.parse(localStorage.getItem(KEY));if(j&&j.D&&j.D.rides)return j}catch(e){}return null}
var saved=load();
var D=saved?saved.D:seed();
var S={role:saved?saved.role:null,clock:saved?saved.clock:'a',theme:saved?saved.theme:'auto',motion:saved&&saved.motion||'auto',
 tab:'home',homeTab:'week',rideTab:'up',view:null,modal:null,open:null,form:null,errs:{},q:{},annTab:'new',admTab:'dash',sig:'',focus:null,joinAct:''};
S.chat={msgs:[],draft:''};
var root=document.getElementById('root');
function save(){try{localStorage.setItem(KEY,JSON.stringify({D:D,role:S.role,clock:S.clock,theme:S.theme,motion:S.motion}))}catch(e){}}
function applyTheme(){
 var dark=S.theme==='dark'||(S.theme==='auto'&&window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches);
 document.documentElement.setAttribute('data-theme',dark?'dark':'light');
 document.documentElement.setAttribute('data-motion',S.motion==='on'?'on':'auto');
}
/* ================= helpers ================= */
function esc(t){return String(t==null?'':t).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
function now(){return new Date(CLOCKS.filter(function(x){return x.k===S.clock})[0].iso)}
function dstr(d){return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0')}
function rdt(r){return new Date(r.date+'T'+r.time)}
function fd(date){var p=date.split('-');return (+p[2])+'.'+(+p[1])}
function dayOf(date){return DAYS[new Date(date+'T12:00').getDay()]}
function wd(date){return 'יום '+dayOf(date)+', '+fd(date)}
function hhmm(d){return String(d.getHours()).padStart(2,'0')+':'+String(d.getMinutes()).padStart(2,'0')}
function ride(id){return D.rides.filter(function(r){return r.id===id})[0]}
function me(){return D.parents[S.role]||null}
function isKid(){return S.role==='noam'}
function isAdmin(){return S.role==='admin'}
function kind(){return isAdmin()?'admin':isKid()?'kid':'parent'}
function kidOf(u){return u&&u.child?D.kids[u.child]:null}
function first(n){return String(n).split(' ')[0]}
function act(k){return D.acts[k]}
function ini(n){var p=String(n).trim().split(/\s+/);return (p[0]?p[0][0]:'')+(p[1]?p[1][0]:'')}
var DIR={to:{k:'out',n:'הלוך',long:'אל החוג',ic:'out'},from:{k:'back',n:'חזור',long:'הביתה',ic:'back'}};
function dirName(d){return DIR[d].n}
function toast(t){
 var el=document.getElementById('toast');
 if(!el){el=document.createElement('div');el.id='toast';el.className='toast';el.setAttribute('role','status');document.body.appendChild(el)}
 el.textContent=t;el.style.display='';
 clearTimeout(toast.t);toast.t=setTimeout(function(){el.style.display='none'},3200);
}
function go(v){S.view=v;S.modal=null;S.errs={};render()}

/* ================= SafeRide components ================= */
function Ridi(size,look){
 var dx=look==='left'?-2:look==='right'?2:0;
 return '<svg width="'+size+'" height="'+size+'" viewBox="4 9 56 56" aria-hidden="true">'+
  '<path d="M10 40c0-12 9-24 22-24s22 12 22 24v6a4 4 0 0 1-4 4H14a4 4 0 0 1-4-4z" fill="var(--ridi)"/>'+
  '<circle cx="32" cy="34" r="10" fill="#fff"/><circle cx="'+(33+dx)+'" cy="35" r="5.5" fill="#1E2340"/><circle cx="'+(35+dx)+'" cy="33" r="1.8" fill="#fff"/>'+
  '<circle cx="19" cy="50" r="5" fill="#1E2340"/><circle cx="45" cy="50" r="5" fill="#1E2340"/><circle cx="19" cy="50" r="2" fill="#E3E7F2"/><circle cx="45" cy="50" r="2" fill="#E3E7F2"/></svg>';
}
function chip(kindName,icon,text,lg){return '<span class="chip '+kindName+(lg?' lg':'')+'">'+(icon?ic(icon):'')+esc(text)+'</span>'}
var ST={approved:['ok','check','מאושר'],placed:['ok','check','משובץ'],pending:['wait','clock','ממתינה'],missing:['none','minus','חסר'],unplaced:['none','minus','לא משובץ'],rejected:['no','x','נדחתה'],verified:['verified','shield','מאומת על ידי החוג']};
function StatusChip(s,text,lg){var x=ST[s];return chip(x[0],x[1],text||x[2],lg)}
function DirChip(d,long){var x=DIR[d];return '<span class="chip '+x.k+'">'+ic(x.ic)+x.n+(long?' · '+x.long:'')+'</span>'}
function Avatar(name,tint,size,label){
 size=size||40;
 return '<span class="av '+tint+'" style="width:'+size+'px;height:'+size+'px;font-size:'+Math.round(size*.38)+'px"'+(label?' role="img" aria-label="'+esc(label)+'"':' aria-hidden="true"')+'>'+esc(ini(name))+'</span>';
}
function SeatMeter(occ,total){
 var b='',free=total-occ;for(var i=0;i<total;i++)b+='<i class="'+(i<occ?'on':'')+'"></i>';
 var t=free<1?'מלאה':occ+' מתוך '+total+' תפוסים · '+(free===1?'מקום פנוי אחד':free+' פנויים');
 return '<div class="meter"><span class="bars" aria-hidden="true">'+b+'</span><span class="cap mut">'+t+'</span></div>';
}
function da(a,d){var s=' data-a="'+a+'"';if(d)for(var k in d)s+=' data-'+k+'="'+esc(d[k])+'"';return s}
function Btn(label,o){
 o=o||{};
 var c='btn '+(o.v||'primary')+(o.sm?' sm':'')+(o.inline?'':' block');
 return '<button type="button" class="'+c+'"'+(o.a?da(o.a,o.d):'')+(o.dis?' disabled':'')+(o.aria?' aria-label="'+esc(o.aria)+'"':'')+'>'+(o.icon?ic(o.icon):'')+label+'</button>';
}
function Why(text){return '<p class="why">'+ic('sparkle',18)+'<span>'+text+'</span></p>'}
function Note(t,k,icon){return '<div class="nt '+(k||'info')+'">'+ic(icon||(k==='ok'?'check':k==='no'?'x':'sparkle'),18)+'<span>'+t+'</span></div>'}
function metaOf(r){return r.time+' · '+(r.free<1?'מלאה':r.free===1?'מקום פנוי אחד':r.free+' מקומות פנויים')}
function RideRow(r,o){
 o=o||{};var dir=o.dir||(r&&r.dir),x=DIR[dir];
 if(!r) return '<div class="rrow empty"><span class="av empty" style="width:40px;height:40px" aria-hidden="true">'+ic('minus',18)+'</span><div class="grow"><div class="bsm mut">אין עדיין הסעת '+x.n+' · אפשר לבקש רק כשיש את שני הכיוונים</div></div>'+DirChip(dir,o.long)+'</div>';
 var d=D.parents[r.driver],tag=o.btn?'button':'div',lg=!!o.long;
 return '<'+tag+(o.btn?' type="button" class="rrow '+x.k+(o.sel?' sel':'')+'"'+o.btn:' class="rrow '+x.k+'"')+'>'+Avatar(d.name,dir==='to'?'sky':'peach',40,d.name)+
  '<div class="meta grow"><span class="bs">'+esc(d.name)+'</span><span class="cap mut">'+(o.noSeats?r.time:metaOf(r))+'</span>'+((lg||o.sub)?'<div class="sub">'+(lg?DirChip(dir,true):'')+(o.sub||'')+'</div>':'')+'</div>'+(lg?'':DirChip(dir))+'</'+tag+'>';
}
function ActivityCard(o){
 var a=act(o.act);
 return '<article class="card act"><div class="act-hd"><div class="actic">'+ic(a.icon||'ball',26)+'</div><div class="grow"><h3 class="t3">'+esc(a.full)+'</h3><div class="bsm mut">'+wd(o.date)+'</div></div>'+(o.chip||'')+'</div>'+
  (o.why?Why(o.why):'')+'<div class="rows">'+o.rows.join('')+'</div>'+(o.extra||'')+(o.btn||'')+'</article>';
}
function Tabs(items,cur,key){
 return '<div class="tabs" role="tablist">'+items.map(function(t){return '<button type="button" role="tab" '+(t[0]===cur?'aria-current="page"':'')+da(key,{v:t[0]})+'>'+t[1]+(t[2]?'<span class="cnt">'+t[2]+'</span>':'')+'</button>'}).join('')+'</div>';
}
function Empty(icon,title,text,btn){
 return '<div class="card"><div class="empty-s"><div class="bigic">'+ic(icon)+'</div><h3 class="t4">'+title+'</h3>'+(text?'<p class="bsm mut">'+text+'</p>':'')+(btn||'')+'</div></div>';
}
var TINT={driver:'--tint-sky',parent:'--tint-aqua',child:'--tint-blush',admin:'--tint-lilac'};
var HINT=(function(){try{return localStorage.getItem('saferide-v1020-hint')!=='1'}catch(e){return true}})();
function RidiBtn(size,look){
 var d=size>72?84:68;
 return '<button type="button" class="ridi'+(HINT?' hint':'')+'" data-a="chat" aria-label="שיחה עם רידי" style="width:'+d+'px;height:'+d+'px">'+Ridi(d-24,look||'center')+'</button>';
}
function Screen(o){
 var size=o.mascot===undefined?72:o.mascot;
 if(!o.bubble)o.bubble='צריכים עזרה? אפשר לשאול אותי.';
 o.bubble=o.bubble+(HINT?'<span class="hintline">לחצו עליי ונדבר</span>':'');
 var h='<div class="screen" data-role="'+o.role+'"><header class="hd '+o.role+' m'+size+'">'+
  '<div class="hd-top">'+(o.back?'<button type="button" class="circ" data-a="back" aria-label="חזרה">'+ic('fwd',24)+'</button>':'<span class="sp"></span>')+
  '<button type="button" class="demo" data-a="demo">'+ic('sliders',16)+'מצב הדגמה</button>'+
  '<span class="acts">'+(o.actions||'<span class="sp"></span>')+'</span></div>'+
  (o.kicker?'<div class="kick">'+o.kicker+'</div>':'')+'<h1 class="t1">'+o.title+'</h1>'+
  (o.bubble?'<div class="bubble">'+o.bubble+'</div>':'')+
  RidiBtn(size,o.look)+'</header>'+
  '<main class="sheet'+(o.nav?' hasnav':'')+'"><div class="stack">'+o.body+'</div></main>';
 if(o.nav) h+=BottomNav(o.nav);
 return h+'</div>';
}
function BottomNav(cur){
 var items=[['home','בית','home'],['rides','ההסעה שלי','car'],['profile','פרופיל','user']];
 return '<nav class="nav" aria-label="ניווט ראשי"><div class="in">'+items.map(function(t){return '<button type="button" class="nav-i" '+(cur===t[0]?'aria-current="page"':'')+da('tab',{v:t[0]})+'>'+ic(t[2])+t[1]+'</button>'}).join('')+'</div>'+
  '<button type="button" class="fab" data-a="newRide" aria-label="פתיחת הסעה חדשה">'+ic('plus')+'</button></nav>';
}
function bell(){var n=notifsFor(me()).length;return '<button type="button" class="circ" data-a="notifs" aria-label="התראות'+(n?', '+n+' חדשות':'')+'">'+ic('bell',22)+(n?'<span class="badge">'+n+'</span>':'')+'</button>'}

/* ================= domain logic ================= */
function approvedKids(r){
 var out=[];if(r.dchild)out.push(r.dchild);
 D.reqs.forEach(function(q){
  if(q.out===r.id&&q.so==='approved'&&q.parent!==r.driver&&out.indexOf(q.child)<0)out.push(q.child);
  if(q.back===r.id&&q.sb==='approved'&&q.parent!==r.driver&&out.indexOf(q.child)<0)out.push(q.child);
 });
 return out;
}
function reqState(q){
 if(q.so==='rejected'||q.sb==='rejected')return 'rejected';
 if(q.so==='approved'&&q.sb==='approved')return 'settled';
 return 'pending';
}
function activeReq(kid,a){return D.reqs.filter(function(q){return q.child===kid&&q.act===a&&reqState(q)!=='rejected'})[0]||null}
function lastReq(kid,a){var l=D.reqs.filter(function(q){return q.child===kid&&q.act===a});return l[l.length-1]||null}
function windowState(r){
 var n=now(),start=rdt(r),end=new Date(r.date+'T00:00');end.setDate(end.getDate()+1);
 if(n<start)return 'early';if(n>=end)return 'late';return 'open';
}
function rstat(r){
 if(r.status==='cancelled')return 'cancelled';if(r.status==='completed')return 'completed';
 var w=windowState(r);if(w==='open')return 'progress';if(w==='late')return 'stale';
 return r.free<1?'full':'open';
}
function rideChip(r,lg){
 var m={cancelled:['no','x','בוטלה'],completed:['ok','check','ההסעה הסתיימה'],progress:['ok','check','בדרך'],stale:['wait','clock','ממתינה לדיווח סיום'],full:['none','minus','מלאה'],open:['ok','check','פתוחה']}[rstat(r)];
 return chip(m[0],m[1],m[2],lg);
}
function arrInfo(r,kid){
 var a=r.arr[kid];if(!a||(!a.child_at&&!a.guardian_at))return null;
 var ts=[];if(a.child_at)ts.push(['child',a.child_at]);if(a.guardian_at)ts.push(['guardian',a.guardian_at]);
 ts.sort(function(x,y){return x[1]<y[1]?-1:1});
 return {who:ts[0][0],at:new Date(ts[0][1])};
}
function arrChip(r,kid){
 var a=arrInfo(r,kid);
 if(!a)return chip('wait','clock','הגעה טרם אושרה');
 return chip('ok','check',a.who==='child'?'הגעה אושרה על ידי הילד':'הגעה אושרה על ידי ההורה');
}
function claim(r){if(r.status!=='open'||r.free<1)return false;r.free--;if(r.free===0)r.status='full';return true}
function release(r){if(r.status==='cancelled'||r.status==='completed')return;r.free=Math.min(r.total,r.free+1);if(r.status==='full'&&r.free>0)r.status='open'}
function closePair(q,why){
 [['out','so'],['back','sb']].forEach(function(p){
  var r=ride(q[p[0]]);
  if(q[p[1]]==='approved'&&q.parent!==r.driver)release(r);
  q[p[1]]='rejected';
 });
 q.end=why;
}
function decide(qid,dir,ok){
 var q=D.reqs.filter(function(x){return x.id===qid})[0],r=ride(dir==='out'?q.out:q.back),key=dir==='out'?'so':'sb';
 if(q[key]!=='pending'||reqState(q)==='rejected'){toast('הבקשה כבר לא פתוחה.');return}
 if(!ok){closePair(q,(dir==='out'?'out':'back')+'_rejected');toast('הבקשה נדחתה. האישור בכיוון השני בוטל והמקום שוחרר.');return}
 if(!claim(r)){toast('המקום האחרון כבר נתפס. הבקשה לא אושרה.');return}
 q[key]='approved';
 toast(reqState(q)==='settled'?'אושר. '+first(D.kids[q.child].name)+' מסודר בשני הכיוונים.':'אושר זמנית. הילד מסודר רק כששני הכיוונים מאושרים.');
}
function cancelRide(r){
 r.status='cancelled';
 D.reqs.forEach(function(q){
  if(reqState(q)==='rejected')return;
  if(q.out===r.id||q.back===r.id){
   var d=q.out===r.id?'out':'back',other=ride(d==='out'?q.back:q.out),ok=d==='out'?'sb':'so';
   if(q[ok]==='approved'&&q.parent!==other.driver)release(other);
   q.so='rejected';q.sb='rejected';q.end=d+'_cancelled';
  }
 });
}
function endText(q){
 var m={out_rejected:'מסיע ההלוך דחה את הכיוון שלו',back_rejected:'מסיע החזור דחה את הכיוון שלו',out_cancelled:'הסעת ההלוך בוטלה',back_cancelled:'הסעת החזור בוטלה'};
 return (m[q.end]||'הבקשה נדחתה')+'. האישור הזמני בכיוון השני בוטל והמקום שוחרר.';
}
function pendingFor(uid){
 var l=[];
 D.reqs.forEach(function(q){
  if(reqState(q)==='rejected')return;
  var o=ride(q.out),b=ride(q.back);
  if(q.so==='pending'&&o.driver===uid&&o.status==='open')l.push({q:q,dir:'out',r:o});
  if(q.sb==='pending'&&b.driver===uid&&b.status==='open')l.push({q:q,dir:'back',r:b});
 });
 return l;
}
function eligible(r,u){return r.status==='open'&&r.free>0&&rdt(r)>=now()&&r.driver!==u.id}
function annFor(u){var k=kidOf(u);return D.ann.filter(function(a){return a.status==='sent'&&(a.aud==='all'||(k&&k.acts.indexOf(a.aud)>=0))})}
function kidRides(kid){return D.rides.filter(function(r){return r.status!=='cancelled'&&approvedKids(r).indexOf(kid)>=0}).sort(function(a,b){return rdt(a)-rdt(b)})}
function notifsFor(u){
 var out=[];if(!u||isAdmin()||isKid())return out;
 annFor(u).forEach(function(a){out.push({t:'ann',a:a})});
 var k=kidOf(u);
 if(k)kidRides(k.id).forEach(function(r){if(r.status==='completed')out.push({t:'done',r:r})});
 return out;
}
function syncChild(pid){var p=D.parents[pid];if(!p)return;var ks=Object.keys(D.kids).filter(function(k){return D.kids[k].parent===pid});p.child=ks[0]||null}
/* the plan of a kid: one slot per activity+date, each with an out and a back side */
function plan(kid){
 var m={};
 function slot(a,d){var k=a+'|'+d;return m[k]||(m[k]={act:a,date:d,to:null,from:null,q:null})}
 D.reqs.forEach(function(q){
  if(q.child!==kid.id||reqState(q)==='rejected')return;
  var o=ride(q.out),b=ride(q.back),s=slot(q.act,o.date);
  s.q=q;s.to={r:o,state:q.so==='approved'?'ok':'wait'};s.from={r:b,state:q.sb==='approved'?'ok':'wait'};
 });
 D.rides.forEach(function(r){
  if(r.dchild===kid.id&&r.status!=='cancelled'){var s=slot(r.act,r.date);if(!s[r.dir])s[r.dir]={r:r,state:'ok'}}
 });
 return Object.keys(m).map(function(k){return m[k]}).sort(function(a,b){return a.date<b.date?-1:a.date>b.date?1:0});
}
function dirOpts(u,kid,actId,date,dir){
 var c=D.rides.filter(function(x){return x.act===actId&&x.date===date&&x.dir===dir&&x.status==='open'&&rdt(x)>=now()});
 var cands=c.filter(function(x){return x.free>0&&x.driver!==u.id}).sort(function(a,b){return (a.area===kid.area?0:1)-(b.area===kid.area?0:1)||(a.time<b.time?-1:1)});
 return {locked:c.filter(function(x){return x.driver===u.id&&x.dchild===kid.id})[0]||null,cands:cands};
}
function matches(u,kid){
 var seen={},out=[];
 if(!kid)return out;
 D.rides.forEach(function(r){
  if(r.status!=='open'||rdt(r)<now()||kid.acts.indexOf(r.act)<0||activeReq(kid.id,r.act))return;
  var k=r.act+'|'+r.date;if(seen[k])return;seen[k]=1;
  var o=dirOpts(u,kid,r.act,r.date,'to'),b=dirOpts(u,kid,r.act,r.date,'from');
  if(o.locked&&b.locked)return;
  if(!o.locked&&!o.cands.length&&!b.locked&&!b.cands.length)return;
  out.push({act:r.act,date:r.date,to:o,from:b});
 });
 return out.sort(function(a,b){return a.date<b.date?-1:a.date>b.date?1:0});
}
function sideRide(s){return s.locked||s.cands[0]||null}
function areaIn(a){return 'ב'+a}
function whyMatch(m){
 var o=sideRide(m.to),b=sideRide(m.from);
 if(o&&b){
  if(o.driver===b.driver)return 'אותו חוג ואותו יום, ואותו מסיע לוקח ומחזיר.';
  if(o.area===b.area)return 'אותו חוג ואותו יום, ושני המסיעים אוספים '+areaIn(o.area)+'.';
  return 'אותו חוג ואותו יום. ההלוך '+areaIn(o.area)+' והחזור '+areaIn(b.area)+'.';
 }
 if(o)return 'יש הסעת הלוך, אבל עדיין אין הסעת חזור.';
 return 'יש הסעת חזור, אבל עדיין אין הסעת הלוך.';
}
/* ================= fake AI (rule based) ================= */
function parseText(t){
 var o={act:null,dir:null,date:null,time:null,area:null,seats:null};
 Object.keys(D.acts).forEach(function(k){if(t.indexOf(D.acts[k].name)>=0)o.act=k});
 if(/מהחוג|חזרה|הביתה|חזור|מחזיר/.test(t))o.dir='from';else if(/אל החוג|לחוג|הלוך|אל /.test(t))o.dir='to';
 var tm=t.match(/(\d{1,2}):(\d{2})/);if(tm)o.time=String(tm[1]).padStart(2,'0')+':'+tm[2];
 var base=now(),d=new Date(base);d.setHours(12,0,0,0);
 var dm=t.match(/(?:יום\s|ב)(ראשון|שני|שלישי|רביעי|חמישי|שישי|שבת)(?!\s*(?:מקומות|מושבים))/);
 if(dm){var idx=DAYS.indexOf(dm[1]);while(d.getDay()!==idx)d.setDate(d.getDate()+1);o.date=dstr(d)}
 else if(/מחר/.test(t)){d.setDate(d.getDate()+1);o.date=dstr(d)}
 AREAS.forEach(function(a){if(t.indexOf(a)>=0)o.area=a});
 var words={'אחד':1,'שניים':2,'שני':2,'שלושה':3,'שלוש':3,'ארבעה':4,'ארבע':4,'חמישה':5,'חמש':5,'שישה':6,'שבעה':7,'שמונה':8};
 var sm=t.match(/(\d+)\s*(?:מקומות|מושבים|מושב|מקום)/);
 if(sm)o.seats=+sm[1];
 else{var wm=t.match(/(אחד|שניים|שני|שלושה|שלוש|ארבעה|ארבע|חמישה|חמש|שישה|שבעה|שמונה)\s*(?:מקומות|מושבים)/);if(wm)o.seats=words[wm[1]];else if(/מקום אחד|מושב אחד/.test(t))o.seats=1}
 return o;
}
/* ================= welcome ================= */
function viewWelcome(){
 return '<div class="screen"><div class="welcome"><div>'+Ridi(96,'center')+'</div><div class="word">Safe<span>Ride</span></div>'+
  '<p class="bsm mut" style="text-align:center">הסעות משותפות לחוגים, בין הורים שמכירים.</p>'+
  '<div class="who">'+ROLES.map(function(r){return '<button type="button" class="role-card"'+da('login',{k:r.k})+'>'+Avatar(r.name,r.tint,48,r.name)+'<div class="grow"><div class="bs">'+r.name+'</div><div class="cap mut">'+r.sub+'</div></div>'+ic('chevron')+'</button>'}).join('')+'</div>'+
  '<p class="cap mut" style="text-align:center">גרסת הדגמה. כל הנתונים הם דמה ונשמרים רק במכשיר הזה.</p></div></div>';
}
/* ================= shared cards ================= */
function annCard(a){
 return '<div class="card note"><div class="act-hd"><div class="actic" style="background:var(--wait-bg);color:var(--wait-fg)">'+ic('mega',24)+'</div><div class="grow"><h3 class="t4">'+esc(a.title)+'</h3><div class="cap mut">הודעה מהחוג · '+esc(a.when)+'</div></div></div><p class="bsm">'+esc(a.body)+'</p></div>';
}
function sideSub(x){
 var s=x.state==='ok'?StatusChip('approved'):StatusChip('pending'),st=rstat(x.r);
 if(st==='completed'||st==='cancelled'||st==='progress'||st==='stale')s+=rideChip(x.r);
 return s;
}
function planRows(s){
 return ['to','from'].map(function(dir){return s[dir]?RideRow(s[dir].r,{sub:sideSub(s[dir])}):RideRow(null,{dir:dir})});
}
function guardCard(r,kid){
 var a=arrInfo(r,kid.id),n=esc(first(kid.name));
 if(a)return '<div class="card verified"><div class="act-hd"><div class="actic" style="background:var(--ok-bg);color:var(--ok-fg)">'+ic('shield',24)+'</div><div class="grow"><h3 class="t4">'+n+' הגיע בבטחה</h3><div class="cap mut">'+DIR[r.dir].n+' · '+esc(act(r.act).full)+' · אושר '+(a.who==='child'?'על ידי הילד':'על ידי ההורה')+' ב-'+hhmm(a.at)+'</div></div></div></div>';
 return '<div class="card"><div class="act-hd"><div class="actic">'+ic('flag',24)+'</div><div class="grow"><h3 class="t4">האם '+n+' הגיע ליעד?</h3><div class="cap mut">'+DIR[r.dir].n+' · '+esc(act(r.act).full)+' · '+r.time+'</div></div></div>'+Btn('הגענו בבטחה',{v:'success',icon:'shield',a:'guardArrive',d:{id:r.id}})+'</div>';
}
/* ================= parent: home ================= */
function viewHome(){
 var u=me(),k=kidOf(u),pl=k?plan(k):[],mt=k?matches(u,k):[],reqs=[];
 if(k)k.acts.forEach(function(a){var q=lastReq(k.id,a);if(q&&q.parent===u.id)reqs.push(q)});
 var pend=reqs.filter(function(q){return reqState(q)==='pending'}).length,t=S.homeTab,body='';
 var bub=pend?'יש בקשה שממתינה לאישור המסיעים.':mt.length&&k?'מצאתי הסעות שמתאימות ל'+esc(first(k.name))+'.':pl.length&&k?'ההסעות של '+esc(first(k.name))+' מסודרות.':'אין עדיין הסעות. כשתיפתח הסעה שמתאימה, היא תופיע כאן.';
 body+=Tabs([['week','השבוע'],['match','להצטרף לנסיעה',mt.length||''],['reqs','הבקשות שלי',pend||'']],t,'homeTab');
 if(!k)body+=Note('אין ילד משויך לחשבון. מנהל החוג משייך ילדים להורים.','info','info');
 else if(t==='week')body+=weekBody(u,k,pl);
 else if(t==='match')body+=matchBody(u,k,mt);
 else body+=reqsBody(u,k,reqs);
 return Screen({role:'parent',kicker:k?'הורה של '+esc(first(k.name)):'הורה',title:'שלום, '+esc(first(u.name)),bubble:bub,mascot:72,look:'right',actions:bell(),nav:'home',body:body});
}
function weekBody(u,k,pl){
 var h='';
 kidRides(k.id).forEach(function(r){if(windowState(r)==='open'&&r.status!=='cancelled')h+=guardCard(r,k)});
 var an=annFor(u)[0];if(an)h+=annCard(an);
 pl.forEach(function(s){
  var ex='';
  if(s.q)ex=reqState(s.q)==='settled'?Note(esc(first(k.name))+' מסודר בשני הכיוונים.','ok'):Note('אישור בכיוון אחד הוא זמני. הילד מסודר רק כששני הכיוונים מאושרים.','info');
  h+=ActivityCard({act:s.act,date:s.date,rows:planRows(s),extra:ex});
 });
 if(!pl.length)h+=Empty('cal','אין עדיין הסעות השבוע','חפשו הסעה בלשונית "להצטרף לנסיעה".',Btn('להצטרף לנסיעה',{v:'secondary',a:'homeTab',d:{v:'match'},inline:true}));
 return h;
}
function matchBody(u,k,mt){
 if(!mt.length)return Empty('search','אין כרגע הסעות שמתאימות','כשתיפתח הסעה לחוג של '+esc(first(k.name))+', היא תופיע כאן.');
 return mt.map(function(m){
  var o=sideRide(m.to),b=sideRide(m.from),both=!!(o&&b),ex='';
  var lk=function(s){return s.locked?chip('ok','check','הילד כבר בהסעה שלך'):''};
  var more=function(s,dir){return s.cands.length>(s.locked?0:1)?'<p class="cap mut">יש עוד '+(s.cands.length-(s.locked?0:1))+' אפשרויות ב'+DIR[dir].n+'. הבחירה במסך הבא.</p>':''};
  ex=more(m.to,'to')+more(m.from,'from');
  var btn=both?Btn('בקשת הצטרפות · הלוך + חזור',{a:'openJoin',d:{act:m.act,date:m.date}}):Btn(!o?'ממתינים להסעת הלוך':'ממתינים להסעת חזור',{dis:true});
  return ActivityCard({act:m.act,date:m.date,why:whyMatch(m),rows:[RideRow(o,{dir:'to',sub:lk(m.to)}),RideRow(b,{dir:'from',sub:lk(m.from)})],extra:ex,btn:btn});
 }).join('');
}
function reqsBody(u,k,reqs){
 if(!reqs.length)return Empty('send','עדיין לא שלחתם בקשות','בקשה נשלחת מלשונית "להצטרף לנסיעה".',Btn('להצטרף לנסיעה',{v:'secondary',a:'homeTab',d:{v:'match'},inline:true}));
 return reqs.map(function(q){
  var st=reqState(q),o=ride(q.out),b=ride(q.back),sc=function(v){return StatusChip(v==='approved'?'approved':v==='rejected'?'rejected':'pending')};
  var ex=st==='settled'?Note(esc(first(k.name))+' מסודר בשני הכיוונים.','ok'):st==='pending'?Note('אישור בכיוון אחד הוא זמני. הילד מסודר רק כששני הכיוונים מאושרים.','info'):Note(endText(q),'no');
  return ActivityCard({act:q.act,date:o.date,chip:StatusChip(st==='settled'?'approved':st,null,true),rows:[RideRow(o,{sub:sc(q.so)}),RideRow(b,{sub:sc(q.sb)})],extra:ex,btn:st==='rejected'?Btn('שליחת בקשה חדשה',{v:'secondary',a:'newReq',d:{act:q.act,date:o.date}}):''});
 }).join('');
}
function viewNotifs(){
 var u=me(),l=notifsFor(u),h='';
 if(!l.length)h=Empty('bell','אין התראות חדשות');
 l.forEach(function(n){
  if(n.t==='ann')h+=annCard(n.a);
  else{var r=n.r,k=kidOf(u);h+='<div class="card"><div class="act-hd"><div class="actic" style="background:var(--ok-bg);color:var(--ok-fg)">'+ic('flag',24)+'</div><div class="grow"><h3 class="t4">ההסעה הסתיימה</h3><div class="cap mut">'+esc(act(r.act).full)+' · '+DIR[r.dir].n+(r.doneAt?' · '+hhmm(new Date(r.doneAt)):'')+'</div></div></div>'+arrChip(r,k.id)+'</div>'}
 });
 return Screen({role:'parent',kicker:'הודעות מהחוג ומההסעות',title:'התראות',back:true,body:h});
}
/* ================= parent: join request ================= */
function startJoin(actId,date){
 var kid=kidOf(me());
 if(!kid){toast('אין ילד משויך לחשבון.');return}
 S.view={name:'join',j:{act:actId,date:date,kid:kid.id,out:null,back:null}};S.errs={};render();
}
function viewJoin(){
 var j=S.view.j,u=me(),kid=D.kids[j.kid],a=act(j.act),ready=true,h='';
 h+='<div class="card"><div class="act-hd"><div class="actic">'+ic(a.icon,26)+'</div><div class="grow"><h3 class="t3">'+esc(a.full)+'</h3><div class="bsm mut">'+wd(j.date)+'</div></div></div><div class="row g2">'+Avatar(kid.name,'blush',36,kid.name)+'<span class="bs">'+esc(kid.name)+'</span></div></div>';
 ['to','from'].forEach(function(dir){
  var key=dir==='to'?'out':'back',st=dirOpts(u,kid,j.act,j.date,dir);
  h+='<div class="sec-t"><h2 class="t4">'+DirChip(dir,true)+'</h2></div>';
  if(st.locked){j[key]=st.locked.id;h+=RideRow(st.locked,{sub:chip('ok','check','הילד כבר בהסעה שלך')});return}
  if(!st.cands.length){ready=false;h+=RideRow(null,{dir:dir});return}
  if(!j[key]||!st.cands.some(function(x){return x.id===j[key]}))j[key]=st.cands.length===1?st.cands[0].id:null;
  if(!j[key])ready=false;
  st.cands.forEach(function(x){
   var sel=j[key]===x.id;
   h+=RideRow(x,{btn:da('pick',{k:key,id:x.id})+' aria-pressed="'+sel+'"',sel:sel,sub:StatusChip('verified')+'<span class="cap mut">'+(dir==='to'?'איסוף':'הורדה')+' '+areaIn(x.area)+'</span>'+(sel?chip('ok','check','נבחרה'):'')});
  });
 });
 h+=Note('אישור בכיוון אחד הוא זמני. הילד מסודר רק כששני הכיוונים מאושרים, וכל מסיע מאשר את הכיוון שלו.','info','info');
 h+=ready?Btn('שליחת בקשה · הלוך + חזור',{icon:'send',a:'sendJoin'}):Btn('בחרו הסעת הלוך והסעת חזור',{dis:true});
 return Screen({role:'parent',kicker:'בקשת הצטרפות',title:esc(a.full),bubble:wd(j.date)+' · '+esc(first(kid.name)),back:true,body:h});
}
function sendJoin(){
 var j=S.view.j,u=me(),o=ride(j.out),b=ride(j.back);
 if(!o||!b){toast('בחרו הסעה בכל כיוון.');return}
 if(activeReq(j.kid,j.act)){toast('כבר קיימת בקשה פעילה לילד בחוג הזה.');return}
 var po=o.driver===u.id&&o.dchild===j.kid,pb=b.driver===u.id&&b.dchild===j.kid;
 if(!po&&o.driver===u.id||!pb&&b.driver===u.id){toast('מסיע לא יכול לבקש הצטרפות להסעה שלו.');return}
 D.seq++;
 D.reqs.push({id:'q'+D.seq,parent:u.id,child:j.kid,act:j.act,out:j.out,back:j.back,so:po?'approved':'pending',sb:pb?'approved':'pending',end:null});
 S.view=null;S.tab='home';S.homeTab='reqs';render();toast('הבקשה נשלחה. רידי לא שומר בלי אישור המסיעים.');
}
/* ================= driver: open a ride (FAB) ================= */
function initOpen(){var k=kidOf(me());return {act:k&&k.acts[0]||Object.keys(D.acts)[0],dir:'to',date:'',time:'',area:k?k.area:AREAS[0],seats:4,text:'',found:[],said:''}}
function openErrs(o){
 var k=kidOf(me()),kin=k&&k.acts.indexOf(o.act)>=0?k:null,e=[];
 if(!o.act)e.push('חסר: חוג');if(!o.dir)e.push('חסר: כיוון');if(!o.date)e.push('חסר: תאריך');if(!o.time)e.push('חסר: שעה');if(!o.area)e.push('חסר: אזור');
 if(kin&&o.seats<2)e.push('נדרשים לפחות שני מקומות ברכב כשהילד שלך נוסע.');
 if(o.date&&o.time&&new Date(o.date+'T'+o.time)<=now())e.push('מועד ההסעה כבר עבר.');
 return e;
}
var FOUND={act:'חוג',dir:'כיוון',date:'תאריך',time:'שעה',area:'אזור',seats:'מקומות'};
function foundVal(o,f){
 return f==='act'?act(o.act).full:f==='dir'?DirChip(o.dir,true):f==='date'?wd(o.date):f==='time'?o.time:f==='area'?o.area:o.seats;
}
function viewNewRide(){
 var o=S.open,u=me(),k=kidOf(u),kin=k&&k.acts.indexOf(o.act)>=0?k:null,e=openErrs(o),h='';
 if(!u.drive){
  h=Note('פתיחת הסעה זמינה להורים שמנהל החוג אישר להסיע. המנהל מאמת רישיון וביטוח לפני האישור.','no','shield')+Btn('חזרה',{v:'secondary',a:'back'});
  return Screen({role:'driver',kicker:'פתיחת הסעה',title:'עוד לא מורשים להסיע',back:true,body:h});
 }
 h+='<div class="card"><div class="field"><label for="ft">'+ic('sparkle')+'ספרו לרידי על ההסעה</label><textarea id="ft" class="in" data-ot="1" placeholder="למשל: ביום שני ב-16:30 אל החוג בכדורסל, 3 מקומות">'+esc(o.text)+'</textarea></div>'+Btn('פענוח הטקסט',{v:'secondary',icon:'sparkle',a:'decode'})+'</div>';
 if(o.found.length)h+='<div class="card"><h3 class="t4">מה רידי הבין</h3><div>'+o.found.map(function(f){return '<div class="kv"><span>'+FOUND[f]+'</span><span>'+foundVal(o,f)+'</span></div>'}).join('')+'</div></div>';
 h+='<div class="card">'+
  '<div class="field"><label for="o1">'+ic('ball')+'חוג <span class="req">*</span></label><select id="o1" class="in" data-o="act">'+Object.keys(D.acts).map(function(a){return '<option value="'+a+'" '+(o.act===a?'selected':'')+'>'+esc(act(a).full)+'</option>'}).join('')+'</select></div>'+
  '<div class="two"><div class="field"><label for="o2">'+ic('cal')+'תאריך <span class="req">*</span></label><input id="o2" type="date" class="in" data-o="date" value="'+esc(o.date)+'"></div><div class="field"><label for="o3">'+ic('clock')+'שעה <span class="req">*</span></label><input id="o3" type="time" class="in" data-o="time" value="'+esc(o.time)+'"></div></div>'+
  '<div class="field"><span class="lbl2">'+ic('car')+'כיוון <span class="req">*</span></span><div class="seg"><button type="button" aria-pressed="'+(o.dir==='to')+'" data-a="oDir" data-v="to">'+ic('out')+'הלוך · אל החוג</button><button type="button" class="o" aria-pressed="'+(o.dir==='from')+'" data-a="oDir" data-v="from">'+ic('back')+'חזור · הביתה</button></div></div>'+
  '<div class="field"><label for="o4">'+ic('pin')+(o.dir==='from'?'אזור הורדה':'אזור איסוף')+' <span class="req">*</span></label><select id="o4" class="in" data-o="area">'+AREAS.map(function(a){return '<option '+(o.area===a?'selected':'')+'>'+a+'</option>'}).join('')+'</select></div>'+
  '<div class="field"><span class="lbl2">'+ic('users')+'מקומות ברכב, כולל הילד שלי <span class="req">*</span></span><div class="stepper"><button type="button" data-a="seat" data-d="-1" aria-label="פחות מקומות">'+ic('minus')+'</button><b>'+o.seats+'</b><button type="button" data-a="seat" data-d="1" aria-label="יותר מקומות">'+ic('plus')+'</button></div></div></div>';
 if(kin)h+=Note(esc(first(kin.name))+' נוסע בהסעה הזו ונספר כתפוס. נשארים '+Math.max(0,o.seats-1)+' מקומות פנויים.','ok','user');
 h+=Note('רידי לא שומר בלי אישור שלך.','info');
 if(e.length)h+='<p class="why-dis">כדי להמשיך: '+e.map(function(x){return esc(x.replace('חסר: ','חסר '))}).join(' · ')+'</p>';
 h+=Btn('אישור ופתיחת ההסעה',{icon:'car',a:'saveRide',dis:!!e.length});
 return Screen({role:'driver',kicker:'פתיחת הסעה',title:'ספרו לרידי',bubble:esc(o.said||'כתבו בחופשיות או מלאו את הפרטים למטה.'),mascot:72,look:'right',back:true,body:h});
}
function createRide(f){
 var u=me(),kid=kidOf(u),kin=kid&&kid.acts.indexOf(f.act)>=0?kid:null;
 D.seq++;
 var r={id:'r'+D.seq,dir:f.dir,act:f.act,date:f.date,time:f.time,driver:u.id,area:f.area,total:f.seats,free:f.seats-(kin?1:0),dchild:kin?kin.id:null,status:(f.seats-(kin?1:0))>0?'open':'full',arr:{}};
 D.rides.push(r);return r;
}
/* ================= driver: my rides, requests, ride detail ================= */
function etaOf(r){var t=r.time.split(':'),d=new Date(2000,0,1,+t[0],+t[1]-(r.dir==='to'?15:0));return hhmm(d)}
function rideListCard(r){
 var a=act(r.act);
 return '<button type="button" class="card"'+da('rideDetail',{id:r.id})+'><div class="act-hd"><div class="actic">'+ic(a.icon,26)+'</div><div class="grow"><h3 class="t3">'+esc(a.full)+'</h3><div class="bsm mut">'+wd(r.date)+' · '+r.time+'</div></div>'+DirChip(r.dir)+'</div>'+SeatMeter(r.total-r.free,r.total)+'<div>'+rideChip(r)+'</div></button>';
}
function reqCard(p){
 var q=p.q,kid=D.kids[q.child],par=D.parents[q.parent],other=p.dir==='out'?'sb':'so',ov=q[other],a=act(q.act);
 return '<div class="card"><div class="act-hd">'+Avatar(kid.name,'blush',48,kid.name)+'<div class="grow"><h3 class="t4">'+esc(kid.name)+'</h3><div class="cap mut">הורה: '+esc(par.name)+' · '+areaIn(kid.area)+'</div></div>'+DirChip(p.r.dir)+'</div>'+
  '<div class="bsm mut">'+esc(a.full)+' · '+wd(p.r.date)+' · איסוף משוער '+etaOf(p.r)+'</div>'+
  '<div class="row g2 wrap"><span class="cap mut">הכיוון השני:</span>'+StatusChip(ov==='approved'?'approved':'pending')+'</div>'+
  '<div class="btns">'+Btn('דחייה',{v:'danger',sm:true,icon:'x',a:'decide',d:{q:q.id,d:p.dir,ok:'0'}})+Btn('אישור',{sm:true,icon:'check',a:'decide',d:{q:q.id,d:p.dir,ok:'1'}})+'</div></div>';
}
function viewRides(){
 var u=me(),h='',role=u.drive?'driver':'parent';
 if(!u.drive){
  h=Empty('car','אין הסעות שאתם מסיעים','פתיחת הסעה זמינה להורים שמנהל החוג אישר להסיע.',Btn('חיפוש הסעה לחוג',{v:'secondary',a:'homeTab',d:{v:'match'},inline:true}));
  return Screen({role:role,kicker:'הורה',title:'ההסעה שלי',bubble:'כאן יופיעו הסעות שאתם מסיעים.',nav:'rides',actions:bell(),body:h});
 }
 var mine=D.rides.filter(function(r){return r.driver===u.id}),pend=pendingFor(u.id),t=S.rideTab;
 var up=mine.filter(function(r){return r.status!=='cancelled'&&r.status!=='completed'}).sort(function(a,b){return rdt(a)-rdt(b)});
 var hist=mine.filter(function(r){return r.status==='cancelled'||r.status==='completed'}).sort(function(a,b){return rdt(b)-rdt(a)});
 h+=Tabs([['up','קרובות'],['reqs','בקשות',pend.length||''],['hist','היסטוריה']],t,'rideTab');
 if(t==='up'){
  h+=up.length?up.map(rideListCard).join(''):Empty('car','אין הסעות קרובות','אפשר לפתוח הסעה חדשה בכפתור הפלוס.');
 }else if(t==='reqs'){
  h+=pend.length?pend.map(reqCard).join(''):Empty('users','אין בקשות ממתינות','כשהורה יבקש להצטרף להסעה שלכם, הבקשה תופיע כאן.');
 }else{
  h+=hist.length?hist.map(rideListCard).join(''):Empty('clock','אין עדיין הסעות שהושלמו או בוטלו');
 }
 return Screen({role:role,kicker:'הורה מסיע',title:'ההסעה שלי',bubble:pend.length?'יש '+pend.length+(pend.length===1?' בקשה שממתינה':' בקשות שממתינות')+' לאישור שלך.':up.length?'יש לך '+up.length+(up.length===1?' הסעה קרובה.':' הסעות קרובות.'):'אין הסעות קרובות.',nav:'rides',actions:bell(),body:h});
}
function viewDetail(){
 var r=ride(S.view.id),u=me(),kids=approvedKids(r),a=act(r.act),w=windowState(r),pend=pendingFor(u.id).filter(function(p){return p.r.id===r.id}).length,h='';
 h+='<div class="card"><div class="row wrap g2">'+rideChip(r,true)+DirChip(r.dir,true)+'</div>'+SeatMeter(r.total-r.free,r.total)+'<div class="bsm mut">'+ic('pin',16)+' '+(r.dir==='to'?'אזור איסוף':'אזור הורדה')+': '+esc(r.area)+'</div></div>';
 if(r.status==='completed')h+='<div class="card verified"><div class="act-hd"><div class="actic" style="background:var(--ok-bg);color:var(--ok-fg)">'+ic('flag',24)+'</div><div class="grow"><h3 class="t4">ההסעה הסתיימה</h3><div class="cap mut">דיווח הסיום נשמר ב-'+hhmm(new Date(r.doneAt))+'</div></div></div></div>';
 else if(r.status!=='cancelled'){
  var early=w==='early';
  h+='<div class="card"><h3 class="t4">סיימת את מסלול ההסעה?</h3>'+Btn(early?'אפשר לדווח סיום משעת ההסעה':'סיימתי את ההסעה',{icon:'flag',a:'askFinish',d:{id:r.id},dis:early})+'<p class="cap mut">הדיווח לא מאשר הגעה של ילדים. כל ילד מאושר בנפרד.</p></div>';
 }
 h+='<div class="card"><div class="sec-t"><h3 class="t4">אישורי הגעה ('+kids.length+')</h3>'+(kids.length&&kids.every(function(k){return arrInfo(r,k)})?chip('ok','check','כל האישורים התקבלו'):'')+'</div>';
 if(!kids.length)h+='<p class="bsm mut">עדיין אין ילדים מאושרים בהסעה.</p>';
 kids.forEach(function(id){var k=D.kids[id];h+='<div class="rrow" style="background:var(--sheet)">'+Avatar(k.name,'blush',40,k.name)+'<div class="meta grow"><span class="bs">'+esc(k.name)+(r.dchild===id?' · הילד שלי':'')+'</span><div class="sub">'+arrChip(r,id)+'</div></div></div>'});
 h+='</div>';
 if(pend)h+=Btn('בקשות ממתינות להסעה ('+pend+')',{v:'secondary',a:'reqsTab'});
 h+='<div class="card">'+[['חוג',a.full],['מסיע/ה',D.parents[r.driver].name],['מועד',wd(r.date)+' · '+r.time]].map(function(x){return '<div class="kv"><span>'+x[0]+'</span><span>'+esc(x[1])+'</span></div>'}).join('')+'<div class="row wrap g2" style="padding-top:8px">'+StatusChip('verified','רישיון מאומת')+StatusChip('verified','ביטוח מאומת')+'</div></div>';
 if(r.status==='open'||r.status==='full')h+=Btn('ביטול ההסעה',{v:'danger',sm:true,icon:'trash',a:'askCancel',d:{id:r.id}});
 return Screen({role:'driver',kicker:wd(r.date)+' · '+r.time,title:esc(a.full),bubble:DIR[r.dir].n+', '+DIR[r.dir].long,back:true,body:h});
}
/* ================= parent: profile ================= */
function viewProfile(){
 var u=me(),k=kidOf(u),h='';
 h+='<div class="card"><div class="act-hd">'+Avatar(u.name,'aqua',56,u.name)+'<div class="grow"><h3 class="t3">'+esc(u.name)+'</h3><div class="bsm mut">'+esc(u.phone)+' · '+esc(u.area)+'</div></div></div><div class="row wrap g2">'+
  (u.drive?StatusChip('verified','מורשה להסיע'):StatusChip('missing','לא מורשה להסיע'))+(u.lic?StatusChip('verified','רישיון מאומת'):StatusChip('missing','רישיון לא מאומת'))+(u.ins?StatusChip('verified','ביטוח מאומת'):StatusChip('missing','ביטוח לא מאומת'))+'</div>'+
  (u.drive?'':'<p class="cap mut">רק הורה שמנהל החוג אישר יכול לפתוח הסעה.</p>')+'</div>';
 if(k){
  h+='<div class="card"><h3 class="t4">הילד שלי</h3><div class="row">'+Avatar(k.name,'blush',48,k.name)+'<div class="grow"><div class="bs">'+esc(k.name)+'</div><div class="cap mut">'+areaIn(k.area)+'</div></div></div></div>';
  h+='<h2 class="t4">החוגים של '+esc(first(k.name))+'</h2>';
  k.acts.forEach(function(id){var a=act(id);h+='<div class="card"><div class="act-hd"><div class="actic">'+ic(a.icon,26)+'</div><div class="grow"><h3 class="t4">'+esc(a.full)+'</h3><div class="cap mut">'+a.days.map(function(d){return 'יום '+d}).join(', ')+' · '+a.start+'–'+a.end+'</div><div class="cap mut">'+esc(a.place)+'</div></div></div></div>'});
 }
 h+=Btn('החלפת משתמש',{v:'secondary',a:'logout'});
 return Screen({role:'parent',kicker:'הפרופיל שלי',title:esc(first(u.name)),nav:'profile',actions:bell(),body:h});
}
/* ================= child ================= */
function viewChild(){
 var kid=D.kids.noam,pl=plan(kid),h='',today=dstr(now());
 var nr=kidRides(kid.id).filter(function(r){return r.status!=='completed'&&r.date>=today})[0];
 var bub=nr?'ההסעה הבאה שלך ביום '+dayOf(nr.date)+' ב-'+nr.time+', עם '+esc(first(D.parents[nr.driver].name))+'.':'עוד אין לך הסעה מסודרת. ההורה שלך שולח בקשה.';
 h+='<h2 class="t2">השיבוץ שלי</h2>';
 pl.forEach(function(s){
  var placed=s.to&&s.to.state==='ok'&&s.from&&s.from.state==='ok',rows=[];
  ['to','from'].forEach(function(dir){
   var x=s[dir];
   if(!x){rows.push(RideRow(null,{dir:dir,long:true}));return}
   rows.push(RideRow(x.r,{long:true,noSeats:true,sub:sideSub(x)}));
   if(x.state!=='ok')return;
   var ai=arrInfo(x.r,kid.id),w=windowState(x.r);
   if(ai)rows.push(Note('הגעתי בבטחה · אושר '+(ai.who==='child'?'על ידי':'על ידי ההורה')+(ai.who==='child'?' הילד':'')+' ב-'+hhmm(ai.at),'ok','shield'));
   else if(w==='open'&&x.r.status!=='cancelled')rows.push(Btn('הגעתי בבטחה',{v:'success',icon:'shield',a:'kidArrive',d:{id:x.r.id}}));
  });
  h+=ActivityCard({act:s.act,date:s.date,chip:StatusChip(placed?'placed':'unplaced',null,true),rows:rows});
 });
 var planned={};pl.forEach(function(s){planned[s.act]=1});
 kid.acts.filter(function(a){return !planned[a]}).forEach(function(id){
  var a=act(id);
  h+='<article class="card act"><div class="act-hd"><div class="actic">'+ic(a.icon,26)+'</div><div class="grow"><h3 class="t3">'+esc(a.full)+'</h3><div class="bsm mut">'+a.days.map(function(d){return 'יום '+d}).join(', ')+' · '+a.start+'</div></div>'+StatusChip('unplaced',null,true)+'</div>'+Why('ההורה שלך עדיין לא שלח בקשה להסעה לחוג הזה.')+'</article>';
 });
 h+=Btn('החלפת משתמש',{v:'ghost',a:'logout'});
 return Screen({role:'child',kicker:'הסעות לחוגים',title:'שלום, '+esc(first(kid.name)),bubble:bub,mascot:96,look:'right',body:h});
}
/* ================= admin ================= */
function admStats(){
 var up=D.rides.filter(function(r){return (r.status==='open'||r.status==='full')&&r.date>=dstr(now())}).length;
 var wait=Object.keys(D.parents).filter(function(k){return admState(D.parents[k])==='wait'}).length;
 return {kids:Object.keys(D.kids).length,parents:Object.keys(D.parents).length,acts:Object.keys(D.acts).length,up:up,wait:wait,sched:D.ann.filter(function(a){return a.status==='sched'}).length};
}
function admState(p){return p.drive?'ok':p.ver?'no':'wait'}
function searchBox(key,ph){return '<div class="search">'+ic('search',20)+'<input class="in" data-search="'+key+'" placeholder="'+ph+'" value="'+esc(S.q[key]||'')+'" aria-label="'+ph+'"></div>'}
function parentsList(){
 var q=(S.q.parents||'').trim(),l=Object.keys(D.parents).map(function(k){return D.parents[k]}).filter(function(p){return !q||(p.name+p.phone+p.area).indexOf(q)>=0});
 var h='<div class="cap mut">נמצאו '+l.length+' הורים</div><div class="cols">';
 l.forEach(function(p){
  var s=admState(p),kn=Object.keys(D.kids).filter(function(k){return D.kids[k].parent===p.id}).length;
  h+='<button type="button" class="card"'+da('admOpen',{v:'parentForm',id:p.id})+'><div class="lrow">'+Avatar(p.name,p.drive?'sky':'aqua',48,p.name)+'<div class="grow"><div class="bs">'+esc(p.name)+'</div><div class="cap mut">'+esc(p.phone)+' · '+esc(p.area)+' · '+kn+' ילדים</div></div>'+(s==='ok'?StatusChip('verified'):s==='wait'?StatusChip('pending','ממתין לאימות'):StatusChip('rejected','לא מאושר'))+'</div></button>';
 });
 return h+'</div>';
}
function kidsList(){
 var q=(S.q.kids||'').trim(),l=Object.keys(D.kids).map(function(k){return D.kids[k]}).filter(function(k){var p=D.parents[k.parent];return !q||(k.name+(p?p.name:'')+k.acts.map(function(a){return act(a).name}).join(' ')+k.area).indexOf(q)>=0});
 var h='<div class="cap mut">נמצאו '+l.length+' ילדים</div><div class="cols">';
 l.forEach(function(k){
  var p=D.parents[k.parent];
  h+='<button type="button" class="card"'+da('admOpen',{v:'kidForm',id:k.id})+'><div class="lrow">'+Avatar(k.name,'blush',48,k.name)+'<div class="grow"><div class="bs">'+esc(k.name)+'</div><div class="cap mut">הורה: '+esc(p?p.name:'לא משויך')+' · '+k.acts.map(function(x){return esc(act(x).name)}).join(', ')+'</div></div>'+(k.active?StatusChip('approved','פעיל'):StatusChip('missing','לא פעיל'))+'</div></button>';
 });
 return h+'</div>';
}
function actsList(){
 var q=(S.q.acts||'').trim(),l=Object.keys(D.acts).map(function(k){return D.acts[k]}).filter(function(a){return !q||(a.name+a.place).indexOf(q)>=0});
 var h='<div class="cap mut">נמצאו '+l.length+' חוגים</div><div class="cols">';
 l.forEach(function(a){
  var n=Object.keys(D.kids).filter(function(k){return D.kids[k].acts.indexOf(a.id)>=0}).length;
  h+='<button type="button" class="card"'+da('admOpen',{v:'actForm',id:a.id})+'><div class="lrow"><div class="actic">'+ic(a.icon||'ball',26)+'</div><div class="grow"><div class="bs">'+esc(a.full)+'</div><div class="cap mut">'+a.days.map(function(d){return 'יום '+d}).join(', ')+' · '+a.start+'–'+a.end+' · '+n+' משתתפים</div><div class="cap mut">'+esc(a.place)+'</div></div></div></button>';
 });
 return h+'</div>';
}
function viewAdmin(){
 var t=S.admTab,s=admStats(),h='';
 h+=Tabs([['dash','סקירה'],['parents','הורים'],['kids','ילדים'],['acts','חוגים']],t,'admTab');
 if(t==='dash'){
  h+='<div class="stats">'+
   '<button type="button" class="stat"'+da('admTab',{v:'kids'})+'>'+ic('user')+'<b>'+s.kids+'</b><span class="cap mut">ילדים</span></button>'+
   '<button type="button" class="stat"'+da('admTab',{v:'parents'})+'>'+ic('users')+'<b>'+s.parents+'</b><span class="cap mut">הורים</span></button>'+
   '<button type="button" class="stat"'+da('admTab',{v:'acts'})+'>'+ic('ball')+'<b>'+s.acts+'</b><span class="cap mut">חוגים</span></button>'+
   '<div class="stat">'+ic('car')+'<b>'+s.up+'</b><span class="cap mut">הסעות קרובות</span></div>'+
   '<button type="button" class="stat"'+da('admTab',{v:'parents'})+'>'+ic('clock')+'<b>'+s.wait+'</b><span class="cap mut">ממתינים לאימות</span></button>'+
   '<button type="button" class="stat"'+da('annOpen')+'>'+ic('mega')+'<b>'+s.sched+'</b><span class="cap mut">הודעות מתוזמנות</span></button></div>';
  h+='<h2 class="t4">הסעות קרובות</h2>';
  var l=D.rides.filter(function(r){return (r.status==='open'||r.status==='full')&&r.date>=dstr(now())}).sort(function(a,b){return rdt(a)-rdt(b)}).slice(0,6);
  if(!l.length)h+=Empty('car','אין הסעות קרובות');
  else h+='<div class="card">'+l.map(function(r){var d=D.parents[r.driver];return '<div class="kv" style="align-items:center"><span class="row g2">'+Avatar(d.name,r.dir==='to'?'sky':'peach',36,d.name)+'<span class="bs" style="color:var(--ink)">'+esc(act(r.act).name)+' · '+fd(r.date)+' · '+r.time+'</span></span>'+DirChip(r.dir)+'</div>'}).join('')+'</div>';
 }else{
  var cfg={parents:['חיפוש לפי שם, טלפון או שכונה','הוספת הורה','parentForm',parentsList],kids:['חיפוש לפי שם, הורה, חוג או שכונה','הוספת ילד','kidForm',kidsList],acts:['חיפוש לפי שם חוג או מקום','הוספת חוג','actForm',actsList]}[t];
  h+=searchBox(t,cfg[0])+'<div id="listbox" class="stack">'+cfg[3]()+'</div>'+Btn(cfg[1],{icon:'plus',a:'admOpen',d:{v:cfg[2],id:''}});
 }
 var bub=s.wait?s.wait+(s.wait===1?' הורה ממתין':' הורים ממתינים')+' לאימות שלך.':'כל ההורים מאומתים.';
 return Screen({role:'admin',kicker:'מנהל החוג',title:{dash:'סקירה',parents:'הורים',kids:'ילדים',acts:'חוגים'}[t],bubble:bub,
  actions:'<button type="button" class="circ" data-a="annOpen" aria-label="הודעות לחוג">'+ic('mega',22)+'</button><button type="button" class="circ" data-a="logout" aria-label="החלפת משתמש">'+ic('user',22)+'</button>',body:h});
}
function fld(label,icon,name,o){
 o=o||{};var v=S.form[name]==null?'':S.form[name],e=S.errs[name],id='f_'+name,req=o.req?' <span class="req">*</span>':'',inp;
 if(o.sel)inp='<select id="'+id+'" class="in'+(e?' bad':'')+'" data-f="'+name+'">'+(o.ph?'<option value="">'+o.ph+'</option>':'')+o.sel.map(function(x){var val=Array.isArray(x)?x[0]:x,lb=Array.isArray(x)?x[1]:x;return '<option value="'+esc(val)+'" '+(String(v)===String(val)?'selected':'')+'>'+esc(lb)+'</option>'}).join('')+'</select>';
 else if(o.area)inp='<textarea id="'+id+'" class="in'+(e?' bad':'')+'" rows="3" data-f="'+name+'">'+esc(v)+'</textarea>';
 else inp='<input id="'+id+'" class="in'+(e?' bad':'')+'" type="'+(o.type||'text')+'" data-f="'+name+'" value="'+esc(v)+'" '+(o.ph?'placeholder="'+esc(o.ph)+'"':'')+'>';
 return '<div class="field"><label for="'+id+'">'+ic(icon)+label+req+'</label>'+inp+(e?'<div class="err" role="alert">'+ic('alert',14)+e+'</div>':'')+'</div>';
}
function formFoot(delId){
 return '<div class="btns">'+Btn('ביטול',{v:'secondary',a:'back'})+Btn('שמירה',{icon:'check',a:'formSave'})+'</div>'+(delId?Btn('מחיקה',{v:'danger',sm:true,icon:'trash',a:'formDel'}):'');
}
function viewParentForm(){
 var id=S.view.id,ks=id?Object.keys(D.kids).filter(function(k){return D.kids[k].parent===id}):[],h='';
 h+=fld('שם מלא','user','name',{req:1})+fld('מספר טלפון','phone','phone',{req:1,type:'tel'})+fld('אימייל','mail','email',{type:'email'})+fld('כתובת','home','addr',{req:1})+fld('שכונה','pin','area',{req:1,sel:AREAS});
 if(id)h+='<div class="card"><h3 class="t4">ילדים משויכים</h3><div class="row wrap g2">'+(ks.length?ks.map(function(k){return chip('blush','',D.kids[k].name)}).join(''):'<span class="bsm mut">אין ילדים משויכים</span>')+'</div><p class="cap mut">שיוך ילד נעשה במסך הילד.</p></div>';
 h+='<div class="card"><h3 class="t4">אימות והרשאות</h3>'+fld('מורשה להסיע','car','drive',{sel:[['1','כן'],['0','לא']]})+fld('רישיון','shield','lic',{sel:[['1','מאומת'],['0','לא מאומת']]})+fld('ביטוח','shield','ins',{sel:[['1','מאומת'],['0','לא מאומת']]})+fld('בדיקת רקע','shield','bg',{sel:[['1','מאומת'],['0','לא מאומת']]})+'</div>';
 return Screen({role:'admin',kicker:'ניהול הורים',title:id?'עריכת הורה':'הוספת הורה',back:true,body:h+formFoot(id)});
}
function viewKidForm(){
 var id=S.view.id,f=S.form,h='';
 h+=fld('שם הילד/ה','user','name',{req:1})+fld('הורה משויך','user','parent',{req:1,ph:'בחרו הורה',sel:Object.keys(D.parents).map(function(k){return [k,D.parents[k].name]})});
 h+='<div class="field"><span class="lbl2">'+ic('ball')+'חוגים <span class="req">*</span></span><div class="seg">'+Object.keys(D.acts).map(function(a){var on=f.acts.indexOf(a)>=0;return '<button type="button" aria-pressed="'+on+'"'+da('toggle',{f:'acts',v:a})+'>'+(on?ic('check',16):'')+esc(act(a).name)+'</button>'}).join('')+'</div>'+(S.errs.acts?'<div class="err" role="alert">'+ic('alert',14)+S.errs.acts+'</div>':'')+'</div>';
 h+=fld('כתובת','home','addr',{req:1})+fld('שכונה','pin','area',{req:1,sel:AREAS})+fld('הערות להסעה','edit','notes',{area:1});
 h+='<div class="field"><span class="lbl2">סטטוס</span><div class="seg"><button type="button" aria-pressed="'+!!f.active+'"'+da('setF',{f:'active',v:'1'})+'>פעיל</button><button type="button" aria-pressed="'+!f.active+'"'+da('setF',{f:'active',v:'0'})+'>לא פעיל</button></div></div>';
 return Screen({role:'admin',kicker:'ניהול ילדים',title:id?'עריכת ילד':'הוספת ילד',back:true,body:h+formFoot(id)});
}
function viewActForm(){
 var id=S.view.id,f=S.form,h='';
 h+=fld('שם החוג','ball','name',{req:1})+fld('מקום / אולם','pin','place',{req:1});
 h+='<div class="field"><span class="lbl2">'+ic('cal')+'ימים בשבוע <span class="req">*</span></span><div class="seg">'+DAYS.slice(0,6).map(function(d){var on=f.days.indexOf(d)>=0;return '<button type="button" aria-pressed="'+on+'"'+da('toggle',{f:'days',v:d})+'>'+d+'</button>'}).join('')+'</div>'+(S.errs.days?'<div class="err" role="alert">'+ic('alert',14)+S.errs.days+'</div>':'')+'</div>';
 h+='<div class="two">'+fld('שעת התחלה','clock','start',{req:1,type:'time'})+fld('שעת סיום','clock','end',{req:1,type:'time'})+'</div>';
 h+=fld('אייקון','sparkle','icon',{sel:[['ball','כדור'],['judo','אומנויות לחימה'],['palette','אומנות'],['music','מוזיקה']]});
 return Screen({role:'admin',kicker:'ניהול חוגים',title:id?'עריכת חוג':'הוספת חוג',back:true,body:h+formFoot(id)});
}
function annInit(){return {title:'',aud:'all',body:'',date:'',time:''}}
function audCount(aud){
 if(aud==='all')return Object.keys(D.parents).length;
 var s={};Object.keys(D.kids).forEach(function(k){if(D.kids[k].acts.indexOf(aud)>=0)s[D.kids[k].parent]=1});return Object.keys(s).length;
}
function viewAnn(){
 var f=S.form||(S.form=annInit()),h=Tabs([['new','הודעה חדשה'],['sent','נשלחו']],S.annTab,'annTabSet');
 if(S.annTab==='new'){
  h+=fld('כותרת ההודעה','mega','title',{req:1})+fld('קהל יעד','users','aud',{req:1,sel:[['all','כל ההורים']].concat(Object.keys(D.acts).map(function(a){return [a,'הורים לחוג '+act(a).name]}))})+fld('תוכן ההודעה','edit','body',{req:1,area:1});
  h+='<div class="two">'+fld('תאריך שליחה','cal','date',{type:'date'})+fld('שעה','clock','time',{type:'time'})+'</div>';
  h+='<div class="btns">'+Btn('תזמון לשליחה',{v:'secondary',icon:'clock',a:'annAsk',d:{v:'sched'}})+Btn('שליחה עכשיו',{icon:'send',a:'annAsk',d:{v:'now'}})+'</div>';
 }else{
  if(!D.ann.length)h+=Empty('mega','אין הודעות');
  D.ann.slice().reverse().forEach(function(a){h+='<div class="card"><div class="sec-t"><h3 class="t4">'+esc(a.title)+'</h3>'+(a.status==='sent'?StatusChip('approved','נשלחה'):StatusChip('pending','מתוזמנת'))+'</div><div class="cap mut">'+(a.aud==='all'?'כל ההורים':esc(act(a.aud).full))+' · '+esc(a.when)+'</div><p class="bsm">'+esc(a.body)+'</p></div>'});
 }
 return Screen({role:'admin',kicker:'ניהול החוג',title:'הודעות',back:true,body:h});
}
/* ================= forms: open / save / delete ================= */
function openForm(name,id){
 S.errs={};
 if(name==='parentForm'){var p=id?D.parents[id]:null;S.form=p?{name:p.name,phone:p.phone,email:p.email,addr:p.addr,area:p.area,drive:p.drive?'1':'0',lic:String(p.lic),ins:String(p.ins),bg:String(p.bg)}:{name:'',phone:'',email:'',addr:'',area:AREAS[0],drive:'0',lic:'0',ins:'0',bg:'0'}}
 if(name==='kidForm'){var k=id?D.kids[id]:null;S.form=k?{name:k.name,parent:k.parent||'',acts:k.acts.slice(),addr:k.addr,area:k.area,notes:k.notes,active:k.active}:{name:'',parent:'',acts:[],addr:'',area:AREAS[0],notes:'',active:true}}
 if(name==='actForm'){var a=id?D.acts[id]:null;S.form=a?{name:a.name,place:a.place,days:a.days.slice(),start:a.start,end:a.end,icon:a.icon}:{name:'',place:'',days:[],start:'17:00',end:'18:30',icon:'ball'}}
 S.view={name:name,id:id||null};render();
}
function saveForm(){
 var v=S.view,f=S.form,e={};
 if(v.name==='parentForm'){
  if(!f.name.trim())e.name='חסר: שם מלא';
  if(!/^0\d{1,2}-?\d{7}$/.test(f.phone.trim()))e.phone='חסר: מספר טלפון תקין';
  if(f.email&&!/^\S+@\S+\.\S+$/.test(f.email))e.email='כתובת אימייל לא תקינה';
  if(!f.addr.trim())e.addr='חסר: כתובת';
  if(Object.keys(e).length){S.errs=e;render();return}
  var p=v.id?D.parents[v.id]:null;
  if(!p){D.seq++;p=D.parents['p'+D.seq]={id:'p'+D.seq,child:null,ver:null}}
  p.name=f.name.trim();p.phone=f.phone.trim();p.email=f.email.trim();p.addr=f.addr.trim();p.area=f.area;p.drive=f.drive==='1';p.lic=+f.lic;p.ins=+f.ins;p.bg=+f.bg;p.ver='4.11.2026';
  toast('נשמר. '+p.name+' מופיע/ה כ'+({ok:'מאומת',no:'לא מאושר',wait:'ממתין לאימות'})[admState(p)]+'.');
 }
 if(v.name==='kidForm'){
  if(!f.name.trim())e.name='חסר: שם הילד/ה';
  if(!f.parent)e.parent='חסר: הורה משויך';
  if(!f.acts.length)e.acts='חסר: לפחות חוג אחד';
  if(!f.addr.trim())e.addr='חסר: כתובת';
  if(Object.keys(e).length){S.errs=e;render();return}
  var k=v.id?D.kids[v.id]:null,oldP=k?k.parent:null;
  if(!k){D.seq++;k=D.kids['k'+D.seq]={id:'k'+D.seq}}
  k.name=f.name.trim();k.parent=f.parent;k.acts=f.acts.slice();k.addr=f.addr.trim();k.area=f.area;k.notes=f.notes;k.active=!!f.active;
  syncChild(k.parent);if(oldP&&oldP!==k.parent)syncChild(oldP);
  toast('נשמר: '+k.name+'.');
 }
 if(v.name==='actForm'){
  if(!f.name.trim())e.name='חסר: שם החוג';
  if(!f.place.trim())e.place='חסר: מקום';
  if(!f.days.length)e.days='חסר: לפחות יום אחד';
  if(!f.start)e.start='חסר: שעת התחלה';
  if(!f.end)e.end='חסר: שעת סיום';
  else if(f.start&&f.end<=f.start)e.end='שעת הסיום חייבת להיות אחרי ההתחלה';
  if(Object.keys(e).length){S.errs=e;render();return}
  var a=v.id?D.acts[v.id]:null;
  if(!a){D.seq++;a=D.acts['a'+D.seq]={id:'a'+D.seq}}
  a.name=f.name.trim();a.full='חוג '+a.name;a.place=f.place.trim();a.days=f.days.slice();a.start=f.start;a.end=f.end;a.icon=f.icon;
  toast('נשמר: '+a.full+'.');
 }
 S.view=null;S.form=null;S.errs={};render();
}
function delForm(){
 var v=S.view;
 if(v.name==='parentForm'){delete D.parents[v.id];Object.keys(D.kids).forEach(function(k){if(D.kids[k].parent===v.id)D.kids[k].parent=null})}
 if(v.name==='kidForm'){var p=D.kids[v.id].parent;delete D.kids[v.id];syncChild(p)}
 if(v.name==='actForm'){delete D.acts[v.id];Object.keys(D.kids).forEach(function(k){D.kids[k].acts=D.kids[k].acts.filter(function(a){return a!==v.id})})}
 S.view=null;S.form=null;toast('נמחק.');
}
/* ================= Ridi chat (rule based, demo) ================= */
function reducedMotion(){try{return !!(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches)}catch(e){return false}}
function newChat(){return {msgs:[],draft:''}}
function botSay(text,items){S.chat.msgs.push({from:'bot',text:text,items:items||[]})}
function chatChips(){
 var k=kind(),u=me();
 if(k==='kid')return ['מי לוקח אותי היום?','מי מחזיר אותי?'];
 if(k==='admin')return ['כמה ילדים רשומים?','הכן הודעה להורי החוג','הוסף חוג שחייה ביום רביעי'];
 var c=[];
 if(!S.view&&S.tab==='home'&&S.homeTab==='match')c.push('למה ההסעה מתאימה?');
 c.push('מצא לי הסעה','מי מחזיר את הילד?');
 if(u&&u.drive)c.push('פתח הסעה ביום שני ב-16:30 אל החוג');
 return c;
}
function myRidesAnswer(kid,t){
 if(!kid){botSay('אין ילד משויך לחשבון.');return}
 var dir=/מחזיר|חזור|חזרה/.test(t)?'from':/מביא|הלוך/.test(t)?'to':null,self=kind()==='kid';
 var l=kidRides(kid.id).filter(function(r){return r.date>=dstr(now())&&(!dir||r.dir===dir)&&r.status!=='completed'});
 if(!l.length){botSay('אין כרגע הסעת '+(dir?dirName(dir)+' ':'')+'מאושרת '+(self?'עבורך':'ל'+first(kid.name))+'.'+(kind()==='parent'?' אפשר לבקש בלשונית "להצטרף לנסיעה".':''));return}
 botSay(self?'אלה ההסעות המאושרות שלך:':'אלה ההסעות המאושרות של '+first(kid.name)+':',l.slice(0,3).map(function(r){return {t:'ride',id:r.id}}));
}
function chatAsk(t){
 t=t.trim();if(!t)return;
 S.chat.msgs.push({from:'me',text:t});
 var k=kind(),u=me(),kid=kidOf(u),p=parseText(t);
 if(k==='kid'){
  if(/פתח|בקש|תזמין/.test(t)){botSay('הורה פותח הסעות ושולח בקשות. אני יכול להגיד לך מי לוקח אותך ומי מחזיר אותך.');return}
  if(/מי (לוקח|מסיע|מחזיר|מביא)|היום|מתי|הסעה/.test(t))return myRidesAnswer(D.kids.noam,t);
  botSay('אני יכול לענות רק על ההסעות שלך, למשל "מי לוקח אותי היום?".');return;
 }
 if(k==='admin'){
  if(/כמה/.test(t)&&/ילדים/.test(t)){var n=Object.keys(D.kids).filter(function(x){return !p.act||D.kids[x].acts.indexOf(p.act)>=0}).length;botSay('רשומים '+n+' ילדים'+(p.act?' ל'+act(p.act).full:'')+'.');return}
  if(/כמה/.test(t)&&/הורים/.test(t)){botSay('רשומים '+Object.keys(D.parents).length+' הורים.');return}
  if(/הוסף חוג|חוג חדש/.test(t)){
   var nm=(t.match(/חוג\s+([^\s,]+)/)||[])[1],dm=t.match(/(?:יום\s|ב)(ראשון|שני|שלישי|רביעי|חמישי|שישי)/);
   if(!nm||nm==='חדש'){botSay('איך קוראים לחוג, ובאיזה יום הוא מתקיים?');return}
   botSay('פתחתי טיוטה. שום דבר לא נשמר לפני שתאשרו במסך החוג.',[{t:'link',a:'chatAct',l:'לטיוטת החוג "'+nm+'"',d:{name:nm,day:dm?dm[1]:'שני'}}]);return;
  }
  if(/הודעה/.test(t)){botSay('פתחתי טיוטה. שום דבר לא נשלח לפני אישור שלכם.',[{t:'link',a:'chatAnn',l:'לטיוטת ההודעה',d:{aud:p.act||'all'}}]);return}
  botSay('אפשר לשאול למשל "כמה ילדים רשומים לכדורסל?" או לבקש "הוסף חוג שחייה ביום רביעי".');return;
 }
 var other=Object.keys(D.kids).filter(function(x){return (!kid||x!==kid.id)&&t.indexOf(first(D.kids[x].name))>=0})[0];
 if(other){botSay('אין לי הרשאה להציג מידע על ילדים אחרים. אפשר לשאול על הילד שלכם.');return}
 if(/מי (מחזיר|לוקח|מסיע|מביא)/.test(t))return myRidesAnswer(kid,t);
 if(/למה/.test(t)){
  var m0=kid?matches(u,kid)[0]:null;
  botSay(m0?whyMatch(m0)+' אני רק מציע. הבקשה נשלחת רק כשאתם לוחצים.':'אין כרגע הסעה להסביר. כשתיפתח הסעה שמתאימה, אסביר למה.');return;
 }
 if(/מצא|חפש|חיפוש|להצטרף/.test(t)&&/הסעה|נסיעה|הסעות/.test(t)){
  if(!kid){botSay('אין ילד משויך לחשבון.');return}
  var ms=matches(u,kid);
  if(!ms.length){botSay('לא מצאתי הסעה פנויה שמתאימה. כשתיפתח הסעה חדשה היא תופיע בלשונית "להצטרף לנסיעה".');return}
  botSay('מצאתי '+ms.length+(ms.length===1?' אפשרות':' אפשרויות')+'. הבחירה שולחת רק בקשה, והמסיע הוא שמאשר.',ms.slice(0,3).map(function(m){var both=!!(sideRide(m.to)&&sideRide(m.from));return {t:'join',act:m.act,date:m.date,ok:both,why:!sideRide(m.to)?'ממתינים להסעת הלוך':'ממתינים להסעת חזור'}}));return;
 }
 if(/פתח|פותח|אני מסיע|נוסע/.test(t)){
  if(!u.drive){botSay('רק הורה שמנהל החוג אישר להסיע יכול לפתוח הסעה.');return}
  S.open=initOpen();S.open.text=t;
  ['act','dir','date','time','area','seats'].forEach(function(f){if(p[f]){S.open[f]=p[f];S.open.found.push(f)}});
  var e=openErrs(S.open);
  S.open.said=S.open.found.length?(e.length?'הבנתי חלק מהפרטים. '+(/^חסר: /.test(e[0])?'חסר לי '+e[0].replace('חסר: ','')+'.':e[0]):'הבנתי. בדקו את הפרטים ואשרו.'):'';
  botSay(e.length?'הכנתי חלק מהפרטים. אפשר להשלים את השאר במסך פתיחת ההסעה. שום דבר לא נשמר עד שתאשרו.':'הכנתי טיוטה. בדקו ואשרו במסך פתיחת ההסעה. שום דבר לא נשמר עד שתאשרו.',[{t:'link',a:'chatNewRide',l:'למסך פתיחת הסעה'}]);return;
 }
 botSay('אני יכול לעזור לחפש הסעה, להסביר למה היא מתאימה, לענות "מי מחזיר את הילד?" ולהכין טיוטה של הסעה חדשה.');
}
function chatItem(it){
 if(it.t==='ride'){var r=ride(it.id);return RideRow(r,{noSeats:true,sub:rideChip(r)})}
 if(it.t==='join'){var a=act(it.act);return '<div class="card"><div class="act-hd"><div class="actic">'+ic(a.icon,26)+'</div><div class="grow"><h3 class="t4">'+esc(a.full)+'</h3><div class="cap mut">'+wd(it.date)+'</div></div></div>'+(it.ok?Btn('להצטרף לנסיעה',{sm:true,a:'chatJoin',d:{act:it.act,date:it.date}}):Btn(it.why,{sm:true,dis:true}))+'</div>'}
 if(it.t==='link')return Btn(it.l,{v:'secondary',sm:true,a:it.a,d:it.d});
 return '';
}
function chatModal(){
 var h='<div class="chat-hd"><span class="rd">'+Ridi(40,'center')+'</span><div class="grow"><h2 class="t3">רידי</h2><div class="cap mut">מציע ומסביר. לא שומר בלי אישור שלך.</div></div><button type="button" class="circ" data-a="closeModal" aria-label="סגירה" style="background:var(--none-bg)">'+ic('x',22)+'</button></div>';
 h+='<div class="msgs" id="msgs" aria-live="polite"><div class="msg bot">'+ic('sparkle',18)+'<span>היי, אני רידי. אפשר לשאול אותי על הסעות, או לבקש שאכין טיוטה. שום דבר לא נשמר בלי אישור שלך.</span></div>';
 S.chat.msgs.forEach(function(m){
  if(m.from==='me')h+='<div class="msg me">'+esc(m.text)+'</div>';
  else{h+='<div class="msg bot">'+ic('sparkle',18)+'<span>'+esc(m.text)+'</span></div>';if(m.items.length)h+='<div class="items">'+m.items.map(chatItem).join('')+'</div>'}
 });
 h+='</div><div class="sugg">'+chatChips().map(function(c){return '<button type="button"'+da('chatPrompt',{t:c})+'>'+esc(c)+'</button>'}).join('')+'</div>';
 h+='<form class="composer" data-submit="chat"><input id="chatIn" class="in" autocomplete="off" placeholder="כתבו לרידי" aria-label="הודעה לרידי" value="'+esc(S.chat.draft)+'"><button type="submit" class="send" aria-label="שליחה">'+ic('send',22)+'</button></form>';
 return '<div class="modal" data-a="closeModal" data-bg="1"><div class="dialog chat" role="dialog" aria-modal="true" aria-label="שיחה עם רידי">'+h+'</div></div>';
}
/* ================= dialogs ================= */
function modalHtml(){
 var m=S.modal;if(!m)return '';
 if(m.t==='chat')return chatModal();
 var wrap=function(i){return '<div class="modal" data-a="closeModal" data-bg="1"><div class="dialog" role="dialog" aria-modal="true">'+i+'</div></div>'};
 if(m.t==='cancel')return wrap('<div class="icbig no">'+ic('x',28)+'</div><h2 class="t2">לבטל את ההסעה?</h2><p class="bsm mut">הביטול ישחרר את המקומות ויבטל גם את האישור הזמני של הילדים בכיוון השני.</p><div class="btns">'+Btn('חזרה',{v:'secondary',a:'closeModal'})+Btn('ביטול ההסעה',{v:'danger',a:'doCancel',d:{id:m.id}})+'</div>');
 if(m.t==='finish')return wrap('<div class="icbig out">'+ic('flag',28)+'</div><h2 class="t2">לסיים את ההסעה?</h2><p class="bsm mut">דיווח הסיום יישמר והורים רלוונטיים יקבלו הודעה. הוא לא מאשר הגעה של ילדים, ואי אפשר לדווח שוב.</p><div class="btns">'+Btn('חזרה',{v:'secondary',a:'closeModal'})+Btn('סיימתי',{a:'doFinish',d:{id:m.id}})+'</div>');
 if(m.t==='ann'){var n=audCount(S.form.aud);return wrap('<div class="icbig out">'+ic('mega',28)+'</div><h2 class="t2">'+(m.mode==='now'?'לשלוח את ההודעה עכשיו?':'לתזמן את ההודעה?')+'</h2><p class="bsm mut">"'+esc(S.form.title)+'" תישלח ל-'+n+' הורים'+(m.mode==='sched'?' ב-'+esc(fd(S.form.date))+' ב-'+esc(S.form.time):'')+'.</p><div class="btns">'+Btn('חזרה',{v:'secondary',a:'closeModal'})+Btn(m.mode==='now'?'שליחה':'תזמון',{a:'annDo',d:{v:m.mode}})+'</div>')}
 if(m.t==='demo'){
  var th=[['auto','אוטומטי'],['light','בהיר'],['dark','כהה']];
  return wrap('<h2 class="t2">מצב הדגמה</h2><p class="bsm mut">כאן מחליפים משתמש ושעון כדי לנסות את כל המסכים.</p>'+
   '<div class="field"><label for="selRole">'+ic('user')+'משתמש</label><select id="selRole" class="in"><option value="">מסך פתיחה</option>'+ROLES.map(function(r){return '<option value="'+r.k+'" '+(S.role===r.k?'selected':'')+'>'+r.name+' · '+r.sub+'</option>'}).join('')+'</select></div>'+
   '<div class="field"><label for="selClock">'+ic('clock')+'שעון ההדגמה</label><select id="selClock" class="in">'+CLOCKS.map(function(c){return '<option value="'+c.k+'" '+(S.clock===c.k?'selected':'')+'>'+c.label+'</option>'}).join('')+'</select></div>'+
   '<div class="field"><span class="lbl2">מראה</span><div class="seg">'+th.map(function(t){return '<button type="button" aria-pressed="'+(S.theme===t[0])+'"'+da('theme',{v:t[0]})+'>'+t[1]+'</button>'}).join('')+'</div></div>'+
   '<div class="field"><span class="lbl2">'+ic('sparkle')+'תנועה של רידי</span><div class="seg"><button type="button" aria-pressed="'+(S.motion==='auto')+'"'+da('motion',{v:'auto'})+'>לפי המכשיר</button><button type="button" aria-pressed="'+(S.motion==='on')+'"'+da('motion',{v:'on'})+'>תמיד</button></div><p class="cap mut">'+(reducedMotion()?'המכשיר שלך מבקש להפחית תנועה, ולכן ב"לפי המכשיר" רידי לא זז. בחר "תמיד" כדי לראות אותו מתנדנד.':'המכשיר לא מבקש להפחית תנועה, אז רידי אמור לזוז כל 2 שניות.')+'</p></div>'+
   Btn('איפוס נתוני הדמה',{v:'danger',sm:true,a:'resetDemo'})+Btn('סגירה',{a:'closeModal'})+'<p class="cap mut" style="text-align:center">גרסה 1020.10 · רידי: תנועה לפי המכשיר או תמיד</p>');
 }
 return '';
}
/* ================= render ================= */
function viewRouter(){
 var v=S.view;
 switch(v.name){
  case 'join':return viewJoin();case 'detail':return viewDetail();case 'new':return viewNewRide();case 'notifs':return viewNotifs();
  case 'ann':return viewAnn();case 'parentForm':return viewParentForm();case 'kidForm':return viewKidForm();case 'actForm':return viewActForm();
 }
 return '';
}
function tabRouter(){
 if(isAdmin())return viewAdmin();
 if(isKid())return viewChild();
 if(S.tab==='rides')return viewRides();
 if(S.tab==='profile')return viewProfile();
 return viewHome();
}
function render(){
 applyTheme();
 var inner=!S.role?viewWelcome():S.view?viewRouter():tabRouter(),wide=S.role&&isAdmin();
 var sig=S.role+'|'+(S.view?S.view.name+(S.view.id||''):S.tab+(isAdmin()?S.admTab:''));
 root.innerHTML='<div class="app'+(wide?' wide':'')+'">'+inner+'</div>'+modalHtml();
 var scr=root.querySelector('.screen'),meta=document.getElementById('themeColor');
 if(meta){var rl=scr?scr.getAttribute('data-role'):null,v=rl?getComputedStyle(document.documentElement).getPropertyValue(TINT[rl]).trim():getComputedStyle(document.documentElement).getPropertyValue('--ground').trim();if(v)meta.setAttribute('content',v)}
 if(sig!==S.sig){S.sig=sig;window.scrollTo(0,0)}
 if(S.modal&&S.modal.t==='chat'){var mb=document.getElementById('msgs');if(mb)mb.scrollTop=mb.scrollHeight;if(S.focusChat){var ci=document.getElementById('chatIn');if(ci)ci.focus();S.focusChat=false}}
 save();
}
function refreshList(key){
 var box=document.getElementById('listbox');if(!box)return;
 box.innerHTML=key==='parents'?parentsList():key==='kids'?kidsList():actsList();
}
/* ================= events ================= */
var H={
 login:function(d){S.chat=newChat();S.role=d.k;S.tab='home';S.homeTab='week';S.rideTab='up';S.admTab='dash';S.view=null;S.form=null;S.open=null;S.modal=null;render()},
 logout:function(){S.chat=newChat();S.role=null;S.view=null;S.form=null;S.modal=null;render()},
 demo:function(){S.modal={t:'demo'};render()},
 chat:function(){S.modal={t:'chat'};HINT=false;try{localStorage.setItem('saferide-v1020-hint','1')}catch(e){}render()},
 chatPrompt:function(d){chatAsk(d.t);render()},
 chatJoin:function(d){S.modal=null;startJoin(d.act,d.date)},
 chatNewRide:function(){S.modal=null;go({name:'new'})},
 chatAnn:function(d){S.modal=null;S.form=annInit();S.form.aud=d.aud;S.annTab='new';go({name:'ann'})},
 chatAct:function(d){S.modal=null;openForm('actForm',null);S.form.name=d.name;S.form.days=[d.day];render()},
 theme:function(d){S.theme=d.v;render()},
 motion:function(d){S.motion=d.v;render()},
 resetDemo:function(){S.chat=newChat();D=seed();S.clock='a';S.view=null;S.form=null;S.open=null;S.modal=null;S.tab='home';S.homeTab='week';S.rideTab='up';S.admTab='dash';render();toast('נתוני הדמה אופסו.')},
 tab:function(d){S.tab=d.v;S.view=null;S.form=null;render()},
 back:function(){var wasAnn=S.view&&S.view.name==='ann';S.view=null;S.form=null;S.errs={};S.modal=null;render()},
 homeTab:function(d){S.tab='home';S.homeTab=d.v;S.view=null;render()},
 rideTab:function(d){S.rideTab=d.v;render()},
 reqsTab:function(){S.tab='rides';S.rideTab='reqs';S.view=null;render()},
 notifs:function(){go({name:'notifs'})},
 openJoin:function(d){startJoin(d.act,d.date)},
 newReq:function(d){startJoin(d.act,d.date)},
 pick:function(d){S.view.j[d.k]=d.id;render()},
 sendJoin:function(){sendJoin()},
 newRide:function(){S.open=initOpen();go({name:'new'})},
 oDir:function(d){S.open.dir=d.v;render()},
 seat:function(d){S.open.seats=Math.max(1,Math.min(8,S.open.seats+(+d.d)));render()},
 decode:function(){
  var o=S.open,p=parseText(o.text||'');o.found=[];
  ['act','dir','date','time','area','seats'].forEach(function(k){if(p[k]){o[k]=p[k];o.found.push(k)}});
  if(!o.found.length)o.said='לא זיהיתי פרטים בטקסט. נסו לכתוב חוג, יום, שעה וכיוון.';
  else{var e=openErrs(o);o.said=e.length?'הבנתי חלק מהפרטים. '+(/^חסר: /.test(e[0])?'חסר לי '+e[0].replace('חסר: ','')+'.':e[0]):'הבנתי. בדקו את הפרטים ואשרו.'}
  render();
 },
 saveRide:function(){var o=S.open;if(openErrs(o).length)return;var r=createRide(o);S.view={name:'detail',id:r.id};S.open=null;S.tab='rides';toast('ההסעה נפתחה ומופיעה בחיפוש של הורים אחרים.');render()},
 rideDetail:function(d){go({name:'detail',id:d.id})},
 decide:function(d){decide(d.q,d.d,d.ok==='1');render()},
 askFinish:function(d){S.modal={t:'finish',id:d.id};render()},
 doFinish:function(d){var r=ride(d.id);if(r.status!=='completed'){r.status='completed';r.doneAt=now().toISOString();toast('דיווח הסיום נשמר. ההורים עודכנו.')}S.modal=null;render()},
 askCancel:function(d){S.modal={t:'cancel',id:d.id};render()},
 doCancel:function(d){cancelRide(ride(d.id));S.modal=null;S.view=null;S.tab='rides';S.rideTab='hist';toast('ההסעה בוטלה והמקומות שוחררו.');render()},
 closeModal:function(d,el,ev){if(el.dataset.bg&&ev.target!==el)return;S.modal=null;render()},
 guardArrive:function(d){var r=ride(d.id),k=kidOf(me());if(!k||approvedKids(r).indexOf(k.id)<0)return;if(windowState(r)!=='open'){toast('אפשר לאשר משעת ההסעה ועד סוף היום.');return}r.arr[k.id]=r.arr[k.id]||{};if(!r.arr[k.id].guardian_at)r.arr[k.id].guardian_at=now().toISOString();toast('אישור ההגעה נשמר.');render()},
 kidArrive:function(d){var r=ride(d.id);if(approvedKids(r).indexOf('noam')<0)return;if(windowState(r)!=='open'){toast('אפשר לאשר משעת ההסעה ועד סוף היום.');return}r.arr.noam=r.arr.noam||{};if(!r.arr.noam.child_at)r.arr.noam.child_at=now().toISOString();toast('אישור ההגעה נשמר.');render()},
 admTab:function(d){S.admTab=d.v;S.view=null;render()},
 annOpen:function(){S.form=annInit();go({name:'ann'})},
 admOpen:function(d){openForm(d.v,d.id||null)},
 toggle:function(d){var l=S.form[d.f],i=l.indexOf(d.v);if(i>=0)l.splice(i,1);else l.push(d.v);delete S.errs[d.f];render()},
 setF:function(d){S.form[d.f]=d.v==='1';render()},
 formSave:function(){saveForm()},
 formDel:function(){delForm();render()},
 annTabSet:function(d){S.annTab=d.v;render()},
 annAsk:function(d){
  var f=S.form,e={};
  if(!f.title.trim())e.title='חסר: כותרת';if(!f.body.trim())e.body='חסר: תוכן ההודעה';
  if(d.v==='sched'){if(!f.date)e.date='חסר: תאריך';if(!f.time)e.time='חסר: שעה';if(f.date&&f.time&&new Date(f.date+'T'+f.time)<=now())e.date='מועד התזמון כבר עבר'}
  if(Object.keys(e).length){S.errs=e;render();return}
  S.errs={};S.modal={t:'ann',mode:d.v};render();
 },
 annDo:function(d){
  var f=S.form,n=now();D.seq++;
  D.ann.push({id:'n'+D.seq,title:f.title.trim(),body:f.body.trim(),aud:f.aud,status:d.v==='now'?'sent':'sched',when:d.v==='now'?fd(dstr(n)):fd(f.date)+' '+f.time});
  S.modal=null;S.form=annInit();S.annTab='sent';toast(d.v==='now'?'ההודעה נשלחה.':'ההודעה תוזמנה.');render();
 }
};
document.addEventListener('click',function(e){
 var el=e.target.closest('[data-a]');if(!el||el.disabled)return;
 var f=H[el.dataset.a];if(f)f(el.dataset,el,e);
});
document.addEventListener('submit',function(e){
 var f=e.target;
 if(f.dataset&&f.dataset.submit==='chat'){e.preventDefault();var i=document.getElementById('chatIn');var t=i?i.value:'';S.chat.draft='';chatAsk(t);S.focusChat=true;render()}
});
document.addEventListener('input',function(e){
 var t=e.target;
 if(t.id==='chatIn'){S.chat.draft=t.value;return}
 if(t.dataset.search){S.q[t.dataset.search]=t.value;refreshList(t.dataset.search);return}
 if(t.dataset.ot&&S.open){S.open.text=t.value;return}
 if(t.dataset.f&&S.form){S.form[t.dataset.f]=t.value;if(S.errs[t.dataset.f])delete S.errs[t.dataset.f]}
});
document.addEventListener('change',function(e){
 var t=e.target;
 if(t.id==='selRole'){S.chat=newChat();S.modal=null;if(!t.value){S.role=null}else{S.role=t.value;S.tab='home';S.homeTab='week';S.rideTab='up';S.admTab='dash'}S.view=null;S.form=null;S.open=null;render();return}
 if(t.id==='selClock'){S.clock=t.value;render();return}
 if(t.dataset.o&&S.open){S.open[t.dataset.o]=t.value;render();return}
 if(t.dataset.f&&S.form){S.form[t.dataset.f]=t.value}
});
if(window.matchMedia){try{window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change',function(){if(S.theme==='auto')render()})}catch(e){}}
render();
})();
