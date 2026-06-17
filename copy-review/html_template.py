TEMPLATE = r"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Stockifi — Translation Review (NO / SV)</title>
<style>
  :root{
    --bg:#f4f5f7;--panel:#fff;--ink:#1c2024;--muted:#6b7280;--line:#e4e7eb;
    --accent:#6D46AA;--accent-soft:#f0eafa;--edit:#b9852e;--edit-bg:#fdf6e7;--en:#f8f9fa;
  }
  *{box-sizing:border-box}
  html,body{margin:0;height:100%}
  body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
       color:var(--ink);background:var(--bg);font-size:14px;line-height:1.5}
  .app{display:flex;height:100vh;overflow:hidden}
  .side{width:268px;flex:none;background:var(--panel);border-right:1px solid var(--line);display:flex;flex-direction:column;overflow-y:auto}
  .brand{padding:18px 20px;border-bottom:1px solid var(--line)}
  .brand h1{margin:0;font-size:15px;font-weight:700}
  .brand p{margin:4px 0 0;font-size:12px;color:var(--muted)}
  .search{margin:12px;padding:8px 11px;border:1px solid var(--line);border-radius:8px;font:inherit;width:calc(100% - 24px)}
  .search:focus{outline:none;border-color:var(--accent)}
  .nav-group{padding:6px 12px 4px}
  .nav-group h2{margin:10px 8px 6px;font-size:11px;letter-spacing:.06em;text-transform:uppercase;color:var(--muted)}
  .nav-btn{display:flex;align-items:center;justify-content:space-between;gap:8px;width:100%;border:0;background:none;text-align:left;padding:8px 10px;border-radius:8px;cursor:pointer;font-size:13px;color:var(--ink)}
  .nav-btn:hover{background:var(--bg)}
  .nav-btn.active{background:var(--accent-soft);color:var(--accent);font-weight:600}
  .nav-btn span:first-child{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
  .badge{font-size:11px;font-weight:700;color:#fff;background:var(--edit);border-radius:999px;padding:1px 7px;min-width:18px;text-align:center;flex:none}
  .badge.zero{display:none}
  .main{flex:1;display:flex;flex-direction:column;overflow:hidden}
  .topbar{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:14px 24px;background:var(--panel);border-bottom:1px solid var(--line)}
  .topbar .grp{font-size:11px;letter-spacing:.06em;text-transform:uppercase;color:var(--accent);font-weight:700}
  .topbar .ttl{font-size:16px;font-weight:700}
  .topbar .meta{font-size:12px;color:var(--muted);margin-top:2px}
  .actions{display:flex;align-items:center;gap:10px}
  .btn{border:1px solid var(--line);background:#fff;color:var(--ink);padding:9px 16px;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer}
  .btn:hover{background:var(--bg)}
  .btn.primary{background:var(--accent);border-color:var(--accent);color:#fff}
  .btn.primary:hover{filter:brightness(1.08)}
  .hint{padding:10px 24px;background:#fffaf0;border-bottom:1px solid var(--line);font-size:12.5px;color:#7a5b16}
  .scroll{flex:1;overflow-y:auto;padding:8px 24px 90px}
  .section-h{margin:22px 0 4px;font-size:13px;font-weight:700;color:var(--accent);border-bottom:2px solid var(--accent-soft);padding-bottom:6px}
  .rowhead{display:grid;grid-template-columns:150px 1fr 1fr 1fr;gap:14px;position:sticky;top:0;background:var(--bg);padding:8px 0 8px;z-index:5;font-size:11px;letter-spacing:.05em;text-transform:uppercase;color:var(--muted);font-weight:700}
  .row{display:grid;grid-template-columns:150px 1fr 1fr 1fr;gap:14px;align-items:start;padding:11px 0;border-top:1px solid var(--line)}
  .row .lbl{font-size:12px;color:var(--muted);padding-top:8px;word-break:break-word}
  .en{background:var(--en);border:1px solid var(--line);border-radius:8px;padding:9px 11px;white-space:pre-wrap}
  textarea{width:100%;border:1px solid var(--line);border-radius:8px;padding:9px 11px;font:inherit;color:var(--ink);background:#fff;resize:none;overflow:hidden;min-height:40px}
  textarea:focus{outline:none;border-color:var(--accent);box-shadow:0 0 0 3px var(--accent-soft)}
  .fieldwrap{position:relative}
  .fieldwrap.edited textarea{border-color:var(--edit);background:var(--edit-bg)}
  .tag{position:absolute;top:-8px;right:8px;font-size:10px;font-weight:700;color:#fff;background:var(--edit);border-radius:999px;padding:1px 7px;display:none}
  .fieldwrap.edited .tag{display:block}
  .empty{padding:40px;text-align:center;color:var(--muted)}
</style>
</head>
<body>
<div class="app">
  <aside class="side">
    <div class="brand"><h1>Translation Review</h1><p>Norwegian &amp; Swedish vs English</p></div>
    <input class="search" id="search" placeholder="Filter pages…">
    <nav id="nav"></nav>
  </aside>
  <div class="main">
    <div class="topbar">
      <div>
        <div class="grp" id="pageGroup"></div>
        <div class="ttl" id="pageTitle">—</div>
        <div class="meta" id="pageMeta"></div>
      </div>
      <div class="actions">
        <button class="btn" id="resetBtn">Reset page</button>
        <button class="btn primary" id="exportBtn">Export changes</button>
      </div>
    </div>
    <div class="hint">
      Edit the <b>Norwegian</b> and <b>Swedish</b> columns directly. Changes save automatically in your browser and are
      flagged <b>edited</b>. When done, click <b>Export changes</b> and send Vanessa the file. English is the read-only reference.
    </div>
    <div class="scroll" id="scroll"></div>
  </div>
</div>
<script>
const DATA = /*__DATA__*/;
const LS_KEY = "stockifi-translation-review-v2";
let store = {}; try{ store = JSON.parse(localStorage.getItem(LS_KEY)||"{}"); }catch(e){ store={}; }
let current = DATA.pages.length ? DATA.pages[0].key : null;

const page = k => DATA.pages.find(p=>p.key===k);
const save = ()=>localStorage.setItem(LS_KEY, JSON.stringify(store));
const curVal=(pk,id,loc,orig)=>(store[pk]&&store[pk][id]&&store[pk][id][loc]!=null)?store[pk][id][loc]:orig;
const edited=(pk,id,loc,orig)=>{const v=curVal(pk,id,loc,orig);return v!==orig&&v.trim()!=="";};
function setVal(pk,id,loc,v){(store[pk]=store[pk]||{});(store[pk][id]=store[pk][id]||{});store[pk][id][loc]=v;save();}
function pageRows(p){return p.sections.flatMap(s=>s.rows);}
function pageEdits(p){let n=0;pageRows(p).forEach(r=>{if(edited(p.key,r.id,"no",r.no))n++;if(edited(p.key,r.id,"sv",r.sv))n++;});return n;}

function renderNav(){
  const q=(document.getElementById("search").value||"").toLowerCase();
  const nav=document.getElementById("nav"); nav.innerHTML="";
  const groups=[...new Set(DATA.pages.map(p=>p.group))];
  groups.forEach(g=>{
    const inG=DATA.pages.filter(p=>p.group===g && p.label.toLowerCase().includes(q));
    if(!inG.length) return;
    const box=document.createElement("div"); box.className="nav-group";
    box.innerHTML="<h2>"+g+"</h2>";
    inG.forEach(p=>{
      const b=document.createElement("button");
      b.className="nav-btn"+(p.key===current?" active":"");
      const n=pageEdits(p);
      b.innerHTML='<span>'+p.label+'</span><span class="badge'+(n?'':' zero')+'">'+n+'</span>';
      b.onclick=()=>{current=p.key;render();};
      box.appendChild(b);
    });
    nav.appendChild(box);
  });
}
const autosize=t=>{t.style.height="auto";t.style.height=t.scrollHeight+"px";};
function render(){
  renderNav();
  const p=page(current); if(!p)return;
  document.getElementById("pageGroup").textContent=p.group;
  document.getElementById("pageTitle").textContent=p.label;
  document.getElementById("pageMeta").textContent=pageRows(p).length+" strings · "+pageEdits(p)+" edited";
  const s=document.getElementById("scroll"); s.innerHTML="";
  p.sections.forEach(sec=>{
    const h=document.createElement("div"); h.className="section-h"; h.textContent=sec.name; s.appendChild(h);
    const head=document.createElement("div"); head.className="rowhead";
    head.innerHTML='<div>Field</div><div>English (reference)</div><div>Norwegian</div><div>Swedish</div>';
    s.appendChild(head);
    sec.rows.forEach(r=>{
      const row=document.createElement("div"); row.className="row";
      const lbl=document.createElement("div"); lbl.className="lbl"; lbl.textContent=r.label; row.appendChild(lbl);
      const en=document.createElement("div"); en.className="en"; en.textContent=r.en; row.appendChild(en);
      ["no","sv"].forEach(loc=>{
        const wrap=document.createElement("div"); wrap.className="fieldwrap";
        const orig=r[loc];
        if(edited(p.key,r.id,loc,orig)) wrap.classList.add("edited");
        const tag=document.createElement("span"); tag.className="tag"; tag.textContent="edited";
        const ta=document.createElement("textarea"); ta.value=curVal(p.key,r.id,loc,orig);
        ta.addEventListener("input",()=>{
          setVal(p.key,r.id,loc,ta.value);
          wrap.classList.toggle("edited",edited(p.key,r.id,loc,orig));
          autosize(ta);
          document.getElementById("pageMeta").textContent=pageRows(p).length+" strings · "+pageEdits(p)+" edited";
          renderNav();
        });
        wrap.appendChild(tag); wrap.appendChild(ta); row.appendChild(wrap);
        requestAnimationFrame(()=>autosize(ta));
      });
      s.appendChild(row);
    });
  });
}
document.getElementById("search").addEventListener("input",renderNav);
document.getElementById("exportBtn").onclick=()=>{
  const changes=[];
  DATA.pages.forEach(p=>pageRows(p).forEach(r=>["no","sv"].forEach(loc=>{
    if(edited(p.key,r.id,loc,r[loc]))
      changes.push({page:p.key,group:p.group,field:r.label,en:r.en,locale:loc,
                    original:r[loc],updated:curVal(p.key,r.id,loc,r[loc]),src:r.src||null});
  })));
  if(!changes.length){alert("No edits yet — nothing to export.");return;}
  const blob=new Blob([JSON.stringify({tool:"stockifi-translation-review",version:2,changes},null,2)],{type:"application/json"});
  const a=document.createElement("a"); a.href=URL.createObjectURL(blob); a.download="translation-edits.json"; a.click();
};
document.getElementById("resetBtn").onclick=()=>{
  if(!confirm("Clear your edits on this page? (other pages keep theirs)"))return;
  delete store[current]; save(); render();
};
render();
</script>
</body>
</html>"""
