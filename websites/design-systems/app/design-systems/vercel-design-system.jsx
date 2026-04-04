"use client";
import { useState } from "react";

const NAV=[
  {id:"recipes",t:"Paste Recipes",i:"📋",g:"BUILD"},
  {id:"infra",t:"Infrastructure",i:"⚙"},{id:"parts",t:"Component Files",i:"◆"},
  {id:"migrate",t:"Migration Map",i:"🔄",g:"MIGRATE"},{id:"grep",t:"CSS Diff / Grep",i:"⌕"},
  {id:"scaffold",t:"Page Scaffolds",i:"📐",g:"PLAN"},{id:"decide",t:"Component Picker",i:"🧭"},
  {id:"spacing",t:"Spacing Rules",i:"↔"},{id:"compose",t:"Compositions",i:"🧩"},
  {id:"rbreak",t:"Responsive Rules",i:"📱"},{id:"darkmode",t:"Dark Mode",i:"🌙"},
  {id:"states",t:"Data States",i:"⟳"},{id:"anti",t:"Anti-Patterns",i:"⚠"},
  {id:"hard",t:"Hard Problems",i:"🔧"},
  {id:"blocks",t:"Design Blocks",i:"▦",g:"LOOK UP"},{id:"interact",t:"Interactive",i:"⚡"},
  {id:"colors",t:"Colors+Contrast",i:"◐"},{id:"export",t:"Export Tokens",i:"↓"},
  {id:"next",t:"Next.js Setup",i:"▲"},
];

function CB({code,title}){const[c,sc]=useState(false);return<div style={{background:"#0A0A0A",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"6px",overflow:"hidden"}}><div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"4px 10px",borderBottom:"1px solid rgba(255,255,255,0.06)",background:"rgba(255,255,255,0.02)"}}><span style={{fontSize:"9px",color:"#737373",fontFamily:"monospace"}}>{title}</span><button onClick={()=>{navigator.clipboard.writeText(code);sc(true);setTimeout(()=>sc(false),1500)}} style={{background:"none",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"3px",color:"#737373",fontSize:"8px",padding:"2px 6px",cursor:"pointer"}}>{c?"✓":"Copy"}</button></div><pre style={{margin:0,padding:"10px 12px",fontSize:"10px",lineHeight:1.5,color:"#E5E5E5",fontFamily:"Consolas,monospace",overflowX:"auto",whiteSpace:"pre"}}>{code}</pre></div>}

function BW({title,desc,children,d}){const b=d?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.06)";return<div style={{border:`1px solid ${b}`,borderRadius:"8px",overflow:"hidden",marginBottom:"12px"}}><div style={{padding:"7px 12px",borderBottom:`1px solid ${b}`}}><div style={{fontSize:"11px",fontWeight:700}}>{title}</div>{desc&&<div style={{fontSize:"8.5px",color:"#737373",marginTop:"1px"}}>{desc}</div>}</div><div>{children}</div></div>}

function wcag(h1,h2){const lum=h=>{const c=[parseInt(h.slice(1,3),16)/255,parseInt(h.slice(3,5),16)/255,parseInt(h.slice(5,7),16)/255].map(v=>v<=0.03928?v/12.92:Math.pow((v+0.055)/1.055,2.4));return .2126*c[0]+.7152*c[1]+.0722*c[2]};const l1=lum(h1),l2=lum(h2);return((Math.max(l1,l2)+.05)/(Math.min(l1,l2)+.05)).toFixed(2)}

const ICONS={arrow:"M12 5l0 14M5 12l7-7 7 7",chevron:"M9 18l6-6-6-6",check:"M5 12l5 5L20 7",cross:"M18 6L6 18M6 6l12 12",plus:"M12 5v14M5 12h14",search:"M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35",copy:"M16 4H8a2 2 0 00-2 2v12M10 20h8a2 2 0 002-2V8l-4-4h-6a2 2 0 00-2 2v10a2 2 0 002 2z",trash:"M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6",download:"M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3",lock:"M19 11H5a2 2 0 00-2 2v7a2 2 0 002 2h14a2 2 0 002-2v-7a2 2 0 00-2-2zM7 11V7a5 5 0 0110 0v4",globe:"M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM2 12h20",code:"M16 18l6-6-6-6M8 6l-6 6 6 6",terminal:"M4 17l6-6-6-6M12 19h8",settings:"M12 15a3 3 0 100-6 3 3 0 000 6z",user:"M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z",mail:"M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zM22 6l-10 7L2 6",zap:"M13 2L3 14h9l-1 8 10-12h-9l1-8",star:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",cloud:"M18 10a6 6 0 00-11.18-3A4.5 4.5 0 007.5 16H18a4 4 0 000-8z",bell:"M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9",shield:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",grid:"M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z",layers:"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",eye:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z",heart:"M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z",play:"M5 3l14 9-14 9V3z",minus:"M5 12h14",link:"M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"};
function Icon({name,size=18,color="#EDEDED"}){const p=ICONS[name];if(!p)return null;return<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d={p}/></svg>}

const CS={Core:[{n:"bg-1",l:"#FFFFFF",dk:"#000000"},{n:"fg",l:"#000000",dk:"#FFFFFF"},{n:"bg-2",l:"#FAFAFA",dk:"#0A0A0A"}],Gray:[{n:"1",l:"#FAFAFA",dk:"#1A1A1A"},{n:"2",l:"#F5F5F5",dk:"#1F1F1F"},{n:"3",l:"#EBEBEB",dk:"#292929"},{n:"4",l:"#E0E0E0",dk:"#3D3D3D"},{n:"5",l:"#D4D4D4",dk:"#525252"},{n:"6",l:"#C7C7C7",dk:"#5E5E5E"},{n:"7",l:"#525252",dk:"#A3A3A3"},{n:"8",l:"#404040",dk:"#B5B5B5"},{n:"9",l:"#737373",dk:"#8F8F8F"},{n:"10",l:"#171717",dk:"#EDEDED"}],Semantic:[{n:"blue",l:"#0070F3",dk:"#0070F3"},{n:"red",l:"#EE0000",dk:"#FF4444"},{n:"amber",l:"#F5A623",dk:"#F5A623"},{n:"green",l:"#17C964",dk:"#17C964"},{n:"teal",l:"#06B6D4",dk:"#06B6D4"},{n:"purple",l:"#7928CA",dk:"#A855F7"},{n:"pink",l:"#FF0080",dk:"#F472B6"}]};

export default function App(){
const[a,sa]=useState("recipes");const[th,sth]=useState("dark");const d=th==="dark";
const b=d?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.06)";const sub="#737373";
const fg=d?"#EDEDED":"#171717";const bg=d?"#000":"#fff";const bg2=d?"#0A0A0A":"#FAFAFA";
const bdr=d?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.08)";const bdrH=d?"rgba(255,255,255,0.15)":"rgba(0,0,0,0.15)";const skBg=d?"#1A1A1A":"#F0F0F0";
const H2=({children})=><h2 style={{fontSize:"20px",fontWeight:800,letterSpacing:"-0.04em",margin:"0 0 3px"}}>{children}</h2>;
const P=({children})=><p style={{fontSize:"11px",color:sub,margin:"0 0 16px",lineHeight:1.5}}>{children}</p>;
const H3=({children})=><h3 style={{fontSize:"9px",fontWeight:700,margin:"14px 0 6px",color:d?"#A3A3A3":"#525252",textTransform:"uppercase",letterSpacing:"0.06em"}}>{children}</h3>;
const Row=({items})=><div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4px",marginBottom:"8px"}}>{items.map(([t,dd],i)=><div key={i} style={{padding:"5px 8px",border:`1px solid ${b}`,borderRadius:"4px"}}><div style={{fontSize:"10px",fontWeight:700}}>{t}</div><div style={{fontSize:"8px",color:sub,marginTop:"1px"}}>{dd}</div></div>)}</div>;

return<div style={{background:bg,color:fg,minHeight:"100vh",fontFamily:"'Urbanist',sans-serif",letterSpacing:"-0.01em"}}>
<link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@300;400;500;600;700;800&display=swap" rel="stylesheet"/>
<style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}@keyframes spin{to{transform:rotate(360deg)}}@keyframes dotBounce{0%,80%,100%{transform:scale(0);opacity:0}40%{transform:scale(1);opacity:1}}.vbtn{transition:all .15s;cursor:pointer;outline:none;font-family:inherit}.vbtn:hover{opacity:.85;transform:translateY(-1px)}.vbtn:active{transform:scale(.97)}.vbtn:focus-visible{box-shadow:0 0 0 2px ${bg},0 0 0 4px rgba(0,112,243,.5)}.vbtn:disabled{opacity:.4;pointer-events:none}.vinput{transition:border-color .15s,box-shadow .15s}.vinput:hover{border-color:${bdrH}}.vinput:focus{border-color:#0070F3;box-shadow:0 0 0 2px rgba(0,112,243,.15);outline:none}.vtab{transition:all .15s;cursor:pointer;border:none;background:none;font-family:inherit;padding:7px 12px;font-size:12px;color:${sub};border-bottom:2px solid transparent}.vtab:hover{color:${fg}}.vtab.active{color:${fg};border-bottom-color:#0070F3;font-weight:600}`}</style>

<header style={{borderBottom:`1px solid ${b}`,padding:"8px 16px",display:"flex",alignItems:"center",justifyContent:"space-between",position:"sticky",top:0,background:d?"rgba(0,0,0,.88)":"rgba(255,255,255,.88)",backdropFilter:"blur(12px)",zIndex:50}}>
<div style={{display:"flex",alignItems:"center",gap:"8px"}}><span style={{fontSize:"15px"}}>▲</span><div><h1 style={{margin:0,fontSize:"11px",fontWeight:700}}>Vercel Design System</h1><span style={{fontSize:"7.5px",color:sub,fontFamily:"monospace"}}>Build + Migrate Toolkit · 55 components · 20 sections</span></div></div>
<button onClick={()=>sth(d?"light":"dark")} className="vbtn" style={{background:d?"rgba(255,255,255,.06)":"rgba(0,0,0,.04)",border:`1px solid ${d?"rgba(255,255,255,.1)":"rgba(0,0,0,.1)"}`,borderRadius:"5px",color:d?"#A3A3A3":"#525252",fontSize:"9px",padding:"3px 7px"}}>{d?"☀":"●"}</button>
</header>
<div style={{display:"flex",maxWidth:"1200px",margin:"0 auto"}}>
<nav style={{width:"155px",borderRight:`1px solid ${b}`,padding:"4px 0",flexShrink:0,position:"sticky",top:"41px",height:"calc(100vh - 41px)",overflowY:"auto"}}>
{NAV.map(s=><div key={s.id}>{s.g&&<div style={{fontSize:"7px",fontWeight:700,color:sub,padding:"8px 10px 2px",letterSpacing:"0.08em"}}>{s.g}</div>}<button onClick={()=>sa(s.id)} style={{display:"flex",alignItems:"center",gap:"4px",width:"100%",padding:"3px 8px",border:"none",background:a===s.id?(d?"rgba(255,255,255,.06)":"rgba(0,0,0,.04)"):"transparent",color:a===s.id?(d?"#fff":"#000"):sub,fontSize:"9.5px",cursor:"pointer",textAlign:"left",fontWeight:a===s.id?600:400,borderLeft:a===s.id?"2px solid #0070F3":"2px solid transparent"}}><span style={{fontFamily:"monospace",fontSize:"8px",opacity:.5,width:"12px"}}>{s.i}</span>{s.t}</button></div>)}
</nav>
<main style={{flex:1,padding:"16px 22px",minWidth:0}}>

{/* ═══ RECIPES ═══ */}
{a==="recipes"&&<div><H2>Copy-Paste Recipes</H2><P>14 production patterns. Complete — paste directly into Next.js + Tailwind.</P>
<H3>Layout</H3>
<CB title="1. Dashboard Shell" code={`export default function Layout({ children }) {
  return (<div className="flex h-screen">
    <aside className="w-60 border-r flex flex-col">
      <div className="h-16 px-4 flex items-center gap-3 border-b">
        <div className="w-7 h-7 rounded-md bg-gradient-to-br from-blue-500 to-purple-600" />
        <span className="text-sm font-semibold">Acme Inc</span>
      </div>
      <nav className="flex-1 p-3 space-y-0.5">{/* NavLinks */}</nav>
      <div className="p-4 border-t text-xs text-gray-500">user@acme.com</div>
    </aside>
    <div className="flex-1 flex flex-col overflow-hidden">
      <header className="h-16 px-6 flex items-center justify-between border-b shrink-0">
        <h1 className="text-sm font-semibold">Overview</h1>
      </header>
      <main className="flex-1 overflow-y-auto p-6">{children}</main>
    </div>
  </div>);
}`}/>
<CB title="2. Marketing Section" code={`<section className="py-24 px-6"><div className="max-w-[1200px] mx-auto">
  <div className="text-center max-w-2xl mx-auto mb-16">
    <h2 className="text-5xl font-bold tracking-[-0.04em]">Ship faster</h2>
    <p className="text-lg text-gray-500 mt-4">Subheadline here.</p>
  </div>
  <div className="grid grid-cols-3 gap-px bg-[var(--border)] rounded-lg overflow-hidden">
    {features.map(f => <div key={f.t} className="bg-background p-10">
      <h3 className="text-lg font-semibold mt-4">{f.t}</h3>
      <p className="text-sm text-gray-500 mt-2">{f.d}</p>
    </div>)}
  </div>
</div></section>`}/>
<H3>Cards</H3>
<CB title="3. Settings Card" code={`<div className="rounded-lg border overflow-hidden">
  <div className="p-6">
    <h3 className="text-sm font-semibold">Project Name</h3>
    <p className="text-sm text-gray-500 mt-1">Used to identify your project.</p>
    <input className="mt-4 h-10 w-full max-w-sm px-3 rounded-md border bg-transparent text-sm
      focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none" />
  </div>
  <div className="px-6 py-3 border-t bg-[var(--bg-2)] flex justify-between items-center">
    <p className="text-xs text-gray-500">Max 48 chars</p>
    <button className="h-8 px-4 text-xs bg-foreground text-background rounded-md">Save</button>
  </div>
</div>`}/>
<CB title="4. Status Card" code={`<div className="rounded-md border p-5">
  <div className="flex items-center justify-between mb-4">
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600" />
      <div><p className="text-sm font-medium">my-app</p>
        <p className="text-xs text-gray-500">Production · 2m ago</p></div>
    </div>
    <span className="flex items-center gap-1.5 text-xs text-green-500">
      <span className="w-1.5 h-1.5 rounded-full bg-green-500" /> Ready</span>
  </div>
  <div className="bg-[var(--bg-2)] rounded px-3 py-2 font-mono text-xs text-gray-500">$ vercel --prod</div>
</div>`}/>
<H3>Forms</H3>
<CB title="5. Field + Error" code={`<div className="space-y-1.5">
  <label className="text-sm font-medium">Email</label>
  <input className="h-10 w-full px-3 rounded-md border bg-transparent text-sm
    focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none
    aria-[invalid=true]:border-red-500" aria-invalid={!!error} />
  {error && <p className="text-xs text-red-500">{error}</p>}
</div>`}/>
<CB title="6. Auth Card" code={`<div className="w-[380px] mx-auto py-20">
  <div className="text-center mb-8"><span className="text-3xl">▲</span>
    <h1 className="text-xl font-bold mt-4">Log in to Vercel</h1></div>
  <button className="h-10 w-full flex items-center justify-center gap-2 text-sm border rounded-md">
    Continue with GitHub</button>
  <div className="flex items-center gap-3 my-6">
    <div className="flex-1 h-px bg-[var(--border)]"/><span className="text-xs text-gray-500">or</span>
    <div className="flex-1 h-px bg-[var(--border)]"/></div>
  <input className="h-10 w-full px-3 rounded-md border text-sm bg-transparent mb-3" placeholder="Email"/>
  <button className="h-10 w-full bg-foreground text-background rounded-md text-sm font-medium">Continue</button>
</div>`}/>
<H3>Feedback</H3>
<CB title="7. Note" code={`<div className={\`flex items-start gap-3 p-4 rounded-lg border \${
  type==='error'?'border-red-500/30 bg-red-500/5':
  type==='success'?'border-green-500/30 bg-green-500/5':
  'border-[var(--border)] bg-[var(--bg-2)]'}\`}>
  <p className="text-sm font-medium">{title}</p>
  <p className="text-sm text-gray-500 mt-0.5">{message}</p>
</div>`}/>
<CB title="8. Empty State" code={`<div className="flex flex-col items-center py-16 text-center">
  <div className="w-14 h-14 rounded-xl bg-[var(--bg-2)] border flex items-center justify-center text-2xl mb-4">📁</div>
  <h3 className="text-lg font-semibold">No Projects Yet</h3>
  <p className="text-sm text-gray-500 mt-1 max-w-xs">Deploy your first project.</p>
  <button className="mt-6 h-9 px-5 text-sm bg-foreground text-background rounded-md">New Project</button>
</div>`}/>
<CB title="9. Modal" code={`<div className="fixed inset-0 z-50 flex items-center justify-center">
  <div className="absolute inset-0 bg-black/60" onClick={onClose}/>
  <div className="relative w-full max-w-md bg-background rounded-xl border shadow-[0_8px_40px_rgba(0,0,0,0.2)]">
    <div className="p-6 border-b"><h2 className="text-base font-semibold">{title}</h2></div>
    <div className="p-6">{children}</div>
    <div className="px-6 py-4 border-t bg-[var(--bg-2)] flex justify-end gap-2 rounded-b-xl">
      <button className="h-9 px-4 text-sm border rounded-md" onClick={onClose}>Cancel</button>
      <button className="h-9 px-4 text-sm bg-red-500 text-white rounded-md">{action}</button>
    </div>
  </div>
</div>`}/>
<CB title="10. Skeleton" code={`<div className="rounded-md border p-5 space-y-4">
  <div className="flex items-center gap-3">
    <div className="w-10 h-10 rounded-full bg-[var(--bg-2)] animate-pulse"/>
    <div className="space-y-2"><div className="w-32 h-3 rounded bg-[var(--bg-2)] animate-pulse"/>
      <div className="w-20 h-3 rounded bg-[var(--bg-2)] animate-pulse"/></div>
  </div>
  <div className="w-full h-24 rounded bg-[var(--bg-2)] animate-pulse"/>
</div>`}/>
<CB title="11. Table" code={`<div className="rounded-lg border overflow-hidden">
  <table className="w-full text-sm">
    <thead><tr className="border-b bg-[var(--bg-2)]">
      {cols.map(c=><th key={c} className="px-4 py-2.5 text-left text-xs text-gray-500 uppercase">{c}</th>)}
    </tr></thead>
    <tbody className="divide-y">{rows.map(r=><tr key={r.id} className="hover:bg-[var(--bg-2)]">
      {cols.map(c=><td key={c} className="px-4 py-3">{r[c]}</td>)}
    </tr>)}</tbody>
  </table>
</div>`}/>
<CB title="12. KPI" code={`<div className="p-5 rounded-lg border">
  <p className="text-xs text-gray-500">{label}</p>
  <p className="text-2xl font-bold tracking-tight tabular-nums mt-1">{value}</p>
  <p className={\`text-xs mt-1 \${up?'text-green-500':'text-amber-500'}\`}>{up?'↑':'↓'} {change}</p>
</div>`}/>
<CB title="13. NavLink" code={`<Link href={href} className={\`flex items-center gap-2.5 px-3 py-1.5 rounded-md text-sm
  \${active?'bg-[var(--bg-2)] text-foreground font-medium':'text-gray-500 hover:text-foreground'}\`}>
  <Icon className="w-4 h-4"/> {label}
</Link>`}/>
<CB title="14. Breadcrumbs" code={`<nav className="flex items-center gap-1.5 text-sm">
  {segs.map((s,i)=>(<Fragment key={s.href}>{i>0&&<span className="text-gray-400">/</span>}
    {i<segs.length-1?<Link href={s.href} className="text-gray-500 hover:text-foreground">{s.label}</Link>
    :<span className="font-medium">{s.label}</span>}
  </Fragment>))}
</nav>`}/>
<H3>More Patterns</H3>
<CB title="15. Dropdown Menu" code={`// Using a simple disclosure pattern (or use @radix-ui/react-dropdown-menu)
<div className="relative">
  <button onClick={() => setOpen(!open)} className="h-8 px-3 text-xs border rounded-md flex items-center gap-1.5">
    Actions <ChevronDownIcon className="w-3 h-3" />
  </button>
  {open && (
    <>
      <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
      <div className="absolute right-0 mt-1 w-48 z-50 rounded-xl border border-[var(--border)]
        bg-background shadow-[var(--shadow-menu)] p-1.5">
        <button className="w-full px-3 py-1.5 text-sm text-left rounded-md hover:bg-[var(--bg-2)]">
          Edit
        </button>
        <button className="w-full px-3 py-1.5 text-sm text-left rounded-md hover:bg-[var(--bg-2)]">
          Duplicate
        </button>
        <div className="h-px bg-[var(--border)] my-1" />
        <button className="w-full px-3 py-1.5 text-sm text-left rounded-md hover:bg-[var(--bg-2)] text-red-500">
          Delete
        </button>
      </div>
    </>
  )}
</div>`}/>
<CB title="16. Search Bar with ⌘K" code={`<div className="relative">
  <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
  <input
    className="h-10 w-full pl-10 pr-16 rounded-md border border-[var(--border)] bg-transparent text-sm
      placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15 outline-none"
    placeholder="Search..."
    onFocus={() => openCommandMenu()} // opens ⌘K menu instead
    readOnly
  />
  <kbd className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-gray-400
    border border-[var(--border)] rounded px-1.5 py-0.5 font-mono">
    ⌘K
  </kbd>
</div>`}/>
<CB title="17. Toggle / Switch" code={`<button
  role="switch" aria-checked={enabled}
  onClick={() => setEnabled(!enabled)}
  className={\`relative inline-flex h-5 w-9 items-center rounded-full transition-colors
    \${enabled ? 'bg-foreground' : 'bg-[var(--bg-2)] border border-[var(--border)]'}\`}>
  <span className={\`inline-block h-3.5 w-3.5 rounded-full bg-background transition-transform
    shadow-sm \${enabled ? 'translate-x-[18px]' : 'translate-x-[3px]'}\`} />
</button>`}/>
<CB title="18. File Upload Area" code={`<div
  onDragOver={e => { e.preventDefault(); setDragging(true); }}
  onDragLeave={() => setDragging(false)}
  onDrop={handleDrop}
  className={\`border-2 border-dashed rounded-lg p-8 text-center transition-colors
    \${dragging ? 'border-blue-500 bg-blue-500/5' : 'border-[var(--border)] hover:border-[var(--border-hover)]'}\`}>
  <UploadIcon className="w-8 h-8 text-gray-400 mx-auto mb-3" />
  <p className="text-sm font-medium">Drop files here or <button className="text-blue-500">browse</button></p>
  <p className="text-xs text-gray-500 mt-1">PNG, JPG up to 10MB</p>
  <input type="file" className="hidden" ref={fileInputRef} onChange={handleFileSelect} />
</div>`}/>
<CB title="19. Toast Usage Patterns" code={`import { toast } from 'sonner';

// Simple
toast('Settings saved');

// Success with description
toast.success('Deployed', { description: 'Production · 3.2s build time' });

// Error with action
toast.error('Deploy failed', {
  description: 'Build error in app/page.tsx',
  action: { label: 'View Logs', onClick: () => router.push('/logs') },
});

// Promise (loading → success/error)
toast.promise(deployProject(), {
  loading: 'Deploying to production...',
  success: (data) => \`Deployed \${data.url}\`,
  error: 'Deploy failed. Check your build logs.',
});

// Undo pattern
toast('Project deleted', {
  action: { label: 'Undo', onClick: () => restoreProject(id) },
  duration: 5000,
});`}/>
<CB title="20. Pagination" code={`<div className="flex items-center justify-between px-5 py-3 border-t border-[var(--border)] bg-[var(--bg-2)]">
  <span className="text-xs text-gray-500">
    {(page - 1) * perPage + 1}-{Math.min(page * perPage, total)} of {total}
  </span>
  <div className="flex gap-1">
    <button disabled={page === 1} onClick={() => setPage(p => p - 1)}
      className="h-8 px-3 text-xs border rounded-md disabled:opacity-40">Previous</button>
    {[...Array(totalPages)].map((_, i) => (
      <button key={i} onClick={() => setPage(i + 1)}
        className={\`h-8 w-8 text-xs rounded-md \${page === i + 1
          ? 'bg-foreground text-background' : 'border hover:bg-[var(--bg-2)]'}\`}>
        {i + 1}
      </button>
    ))}
    <button disabled={page === totalPages} onClick={() => setPage(p => p + 1)}
      className="h-8 px-3 text-xs border rounded-md disabled:opacity-40">Next</button>
  </div>
</div>`}/>
<CB title="21. Keyboard Shortcut Display (KBD)" code={`// Inline keyboard hint
<span className="inline-flex items-center gap-1 text-xs text-gray-500">
  Press <kbd className="px-1.5 py-0.5 text-[10px] font-mono border border-[var(--border)] rounded bg-[var(--bg-2)]">⌘</kbd>
  <kbd className="px-1.5 py-0.5 text-[10px] font-mono border border-[var(--border)] rounded bg-[var(--bg-2)]">K</kbd>
  to search
</span>

// In menu item
<div className="flex items-center justify-between px-3 py-1.5 text-sm rounded-md hover:bg-[var(--bg-2)]">
  <span>New Project</span>
  <span className="text-xs text-gray-400 font-mono">⌘N</span>
</div>`}/>
</div>}


{/* ═══ INFRASTRUCTURE ═══ */}
{a==="infra"&&<div><H2>Infrastructure Files</H2><P>Drop-in files for the foundational layer. These go in before any components.</P>
<CB title="app/globals.css — Complete with reset" code={`/* ═══ RESET ═══ */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { -webkit-text-size-adjust: 100%; tab-size: 4; scroll-behavior: smooth; }
body { line-height: 1.5; -webkit-font-smoothing: antialiased; }
img, picture, video, canvas, svg { display: block; max-width: 100%; }
input, button, textarea, select { font: inherit; color: inherit; }
p, h1, h2, h3, h4, h5, h6 { overflow-wrap: break-word; }
a { color: inherit; text-decoration: none; }
button { cursor: pointer; }

/* ═══ TOKENS ═══ */
:root {
  color-scheme: light;
  --background: #ffffff; --foreground: #000000; --bg-2: #fafafa;
  /* Geist semantic 1-10 scale: 1-3 bg, 4-6 border, 7-8 high-contrast bg, 9-10 text */
  --gray-1: #fafafa; --gray-2: #f5f5f5; --gray-3: #ebebeb;
  --gray-4: #e0e0e0; --gray-5: #d4d4d4; --gray-6: #c7c7c7;
  --gray-7: #525252; --gray-8: #404040;
  --gray-9: #737373; --gray-10: #171717;
  --blue: #0070f3; --red: #ee0000; --amber: #f5a623;
  --green: #17c964; --teal: #06b6d4; --purple: #7928ca; --pink: #ff0080;
  --border: rgba(0, 0, 0, 0.08);
  --border-hover: rgba(0, 0, 0, 0.12);
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.04);
  --shadow-md: 0 2px 8px rgba(0,0,0,0.06);
  --shadow-menu: 0 4px 24px rgba(0,0,0,0.15);
  --shadow-modal: 0 8px 40px rgba(0,0,0,0.2);
  --ease: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-spring: cubic-bezier(0.22, 1, 0.36, 1);
}
.dark {
  color-scheme: dark;
  --background: #000000; --foreground: #ffffff; --bg-2: #0a0a0a;
  --border: rgba(255, 255, 255, 0.08);
  --border-hover: rgba(255, 255, 255, 0.12);
}
body {
  background: var(--background); color: var(--foreground);
  font-family: var(--font-geist-sans, 'Geist', -apple-system, system-ui, sans-serif);
}

/* ═══ SCROLLBAR ═══ */
::-webkit-scrollbar { width: 6px; height: 6px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: var(--gray-5); border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: var(--gray-7); }

/* ═══ SELECTION ═══ */
::selection { background: rgba(0, 112, 243, 0.2); }

/* ═══ FOCUS ═══ */
:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px var(--background), 0 0 0 4px rgba(0, 112, 243, 0.5);
}
input:focus-visible, textarea:focus-visible {
  box-shadow: none;
  border-color: var(--blue);
  box-shadow: 0 0 0 2px rgba(0, 112, 243, 0.15);
}

/* ═══ AUTOFILL FIX ═══ */
input:-webkit-autofill {
  -webkit-box-shadow: 0 0 0 100px var(--background) inset !important;
  -webkit-text-fill-color: var(--foreground) !important;
}

/* ═══ ANIMATIONS ═══ */
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
@keyframes fadeOut { from { opacity: 1; } to { opacity: 0; } }
@keyframes slideUp { from { transform: translateY(8px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
@keyframes slideDown { from { transform: translateY(-8px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
@keyframes scaleIn { from { transform: scale(0.95); opacity: 0; } to { transform: scale(1); opacity: 1; } }
@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }

/* ═══ UTILITIES ═══ */
.tabular-nums { font-variant-numeric: tabular-nums; }
.sr-only { position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0; }`}/>
<CB title="lib/theme-provider.tsx — next-themes setup" code={`// npm install next-themes
'use client';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"       // adds .dark to <html>
      defaultTheme="system"   // respect OS preference
      enableSystem             // watch prefers-color-scheme
      disableTransitionOnChange // prevent flash during switch
      storageKey="theme"       // cookie key for SSR
    >
      {children}
    </NextThemesProvider>
  );
}

// In layout.tsx:
// <html suppressHydrationWarning>
//   <body><ThemeProvider>{children}</ThemeProvider></body>
// </html>

// Usage in any component:
// import { useTheme } from 'next-themes';
// const { theme, setTheme } = useTheme();
// <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>Toggle</button>`}/>
<CB title="lib/toast.tsx — Toast system" code={`// npm install sonner
// Sonner is the toast lib Vercel uses internally.

// In layout.tsx:
import { Toaster } from 'sonner';

export default function Layout({ children }) {
  return (
    <>
      {children}
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: 'var(--background)',
            color: 'var(--foreground)',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            fontSize: '14px',
            boxShadow: 'var(--shadow-menu)',
          },
        }}
      />
    </>
  );
}

// Usage anywhere:
import { toast } from 'sonner';

toast('Deployed successfully');
toast.success('Build complete', { description: '3.2s build time' });
toast.error('Deploy failed', {
  description: 'Check your build logs',
  action: { label: 'View Logs', onClick: () => router.push('/logs') },
});
toast.promise(deployProject(), {
  loading: 'Deploying...',
  success: 'Deployed!',
  error: 'Deploy failed',
});`}/>
<CB title="lib/focus-trap.ts — Focus trap for modals" code={`export function trapFocus(element: HTMLElement) {
  const focusable = element.querySelectorAll<HTMLElement>(
    'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), ' +
    'select:not([disabled]), [tabindex]:not([tabindex="-1"])'
  );
  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  function handler(e: KeyboardEvent) {
    if (e.key !== 'Tab') return;
    if (e.shiftKey) {
      if (document.activeElement === first) { e.preventDefault(); last.focus(); }
    } else {
      if (document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  }
  element.addEventListener('keydown', handler);
  first?.focus();
  return () => element.removeEventListener('keydown', handler);
}

// Usage in Modal:
// useEffect(() => {
//   if (!open || !ref.current) return;
//   const cleanup = trapFocus(ref.current);
//   document.body.style.overflow = 'hidden'; // scroll lock
//   return () => { cleanup(); document.body.style.overflow = ''; };
// }, [open]);`}/>
<CB title="lib/cn.ts — Class merge utility" code={`// npm install clsx tailwind-merge
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Usage: cn('px-4 py-2', active && 'bg-blue-500', className)`}/>
</div>}

{/* ═══ COMPONENT FILES ═══ */}
{a==="parts"&&<div><H2>Component Files</H2><P>Complete implementations. Paste into components/ui/.</P>
<CB title="components/ui/button.tsx" code={`import { forwardRef } from 'react';
import { cn } from '@/lib/cn';

// Geist Button: 5 types × 3 sizes + shapes + shadow
const variants = {
  primary:   'bg-foreground text-background hover:opacity-90',
  secondary: 'border border-[var(--border)] hover:border-[var(--border-hover)] hover:bg-[var(--bg-2)]',
  tertiary:  'bg-[var(--bg-2)] hover:bg-[var(--border)]',
  error:     'bg-[var(--red)] text-white hover:opacity-90',
  warning:   'bg-[var(--amber)] text-white hover:opacity-90',
  ghost:     'hover:bg-[var(--bg-2)]',
  link:      'text-[var(--blue)] hover:underline underline-offset-4 h-auto px-0',
};
const sizes = {
  sm: 'h-8 px-3 text-xs gap-1.5',
  md: 'h-10 px-4 text-sm gap-2',
  lg: 'h-12 px-8 text-sm gap-2',
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  shape?: 'default' | 'rounded' | 'svgOnly'; // Geist shapes
  shadow?: boolean;   // Marketing pill buttons: shape="rounded" + shadow
  loading?: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', shape = 'default', shadow, loading, disabled, prefix, suffix, children, ...props }, ref) => (
    <button
      ref={ref}
      disabled={disabled || loading}
      className={cn(
        'inline-flex items-center justify-center font-medium transition-all',
        'focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:ring-offset-2',
        'disabled:opacity-40 disabled:pointer-events-none',
        'active:scale-[0.97]',
        shape === 'rounded' ? 'rounded-full' : shape === 'svgOnly' ? 'rounded-md aspect-square p-0' : 'rounded-md',
        shadow && 'shadow-lg',
        variants[variant], sizes[size], className
      )}
      aria-label={shape === 'svgOnly' ? (props['aria-label'] || 'Action') : undefined}
      {...props}
    >
      {loading ? (
        <div className="flex gap-1">
          {[0,1,2].map(i => (
            <div key={i} className="w-1 h-1 rounded-full bg-current animate-bounce"
              style={{ animationDelay: \`\${i * 0.15}s\` }} />
          ))}
        </div>
      ) : (
        <>{prefix}{children}{suffix}</>
      )}
    </button>
  )
);
Button.displayName = 'Button';

// ButtonLink — same styling as Button but renders an <a> tag
export const ButtonLink = forwardRef<HTMLAnchorElement, React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: keyof typeof variants; size?: keyof typeof sizes; shape?: 'default' | 'rounded';
}>(({ className, variant = 'primary', size = 'md', shape = 'default', ...props }, ref) => (
  <a ref={ref} className={cn(
    'inline-flex items-center justify-center font-medium transition-all no-underline',
    shape === 'rounded' ? 'rounded-full' : 'rounded-md',
    variants[variant], sizes[size], className
  )} {...props} />
));
ButtonLink.displayName = 'ButtonLink';`}/>
<CB title="components/ui/input.tsx" code={`import { forwardRef } from 'react';
import { cn } from '@/lib/cn';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, hint, prefix, suffix, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s/g, '-');
    return (
      <div className="space-y-1.5">
        {label && <label htmlFor={inputId} className="text-sm font-medium">{label}</label>}
        <div className="relative">
          {prefix && <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">{prefix}</div>}
          <input
            ref={ref} id={inputId}
            aria-invalid={!!error}
            aria-describedby={error ? \`\${inputId}-error\` : hint ? \`\${inputId}-hint\` : undefined}
            className={cn(
              'h-10 w-full rounded-md border bg-transparent px-3 text-sm',
              'placeholder:text-gray-400 transition-colors',
              'focus:border-[var(--blue)] focus:ring-2 focus:ring-blue-500/15 outline-none',
              'disabled:opacity-50 disabled:cursor-not-allowed',
              error ? 'border-[var(--red)]' : 'border-[var(--border)] hover:border-[var(--border-hover)]',
              prefix && 'pl-10', suffix && 'pr-10', className
            )}
            {...props}
          />
          {suffix && <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">{suffix}</div>}
        </div>
        {error && <p id={\`\${inputId}-error\`} className="text-xs text-[var(--red)]">{error}</p>}
        {hint && !error && <p id={\`\${inputId}-hint\`} className="text-xs text-gray-500">{hint}</p>}
      </div>
    );
  }
);
Input.displayName = 'Input';`}/>
<CB title="components/ui/modal.tsx" code={`'use client';
import { useEffect, useRef, useCallback } from 'react';
import { cn } from '@/lib/cn';
import { trapFocus } from '@/lib/focus-trap';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: React.ReactNode;
  actions?: React.ReactNode;
  className?: string;
}

export function Modal({ open, onClose, title, description, children, actions, className }: ModalProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prevFocus = useRef<HTMLElement | null>(null);

  // Focus trap + scroll lock
  useEffect(() => {
    if (!open) return;
    prevFocus.current = document.activeElement as HTMLElement;
    document.body.style.overflow = 'hidden';
    const timer = setTimeout(() => {
      if (ref.current) trapFocus(ref.current);
    }, 50);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
      prevFocus.current?.focus();
    };
  }, [open]);

  // Esc to close
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60 animate-[fadeIn_150ms]" onClick={onClose} />
      <div ref={ref} role="dialog" aria-modal="true" aria-labelledby="modal-title"
        className={cn('relative w-full max-w-md bg-[var(--background)] rounded-xl',
          'border border-[var(--border)] shadow-[var(--shadow-modal)]',
          'animate-[scaleIn_200ms_var(--ease-spring)]', className)}>
        <div className="p-6 border-b border-[var(--border)]">
          <h2 id="modal-title" className="text-base font-semibold">{title}</h2>
          {description && <p className="text-sm text-gray-500 mt-1">{description}</p>}
        </div>
        <div className="p-6">{children}</div>
        {actions && (
          <div className="px-6 py-4 border-t border-[var(--border)] bg-[var(--bg-2)]
            flex justify-end gap-2 rounded-b-xl">{actions}</div>
        )}
      </div>
    </div>
  );
}`}/>
<CB title="components/ui/status-dot.tsx" code={`import { cn } from '@/lib/cn';

const states = {
  queued: { color: 'bg-gray-400', label: 'Queued' },
  building: { color: 'bg-amber-500 animate-pulse', label: 'Building' },
  ready: { color: 'bg-green-500', label: 'Ready' },
  error: { color: 'bg-red-500', label: 'Error' },
  canceled: { color: 'bg-gray-400', label: 'Canceled' },
};

export function StatusDot({ state, showLabel = true }: { state: keyof typeof states; showLabel?: boolean }) {
  const s = states[state];
  return (
    <span className={cn('inline-flex items-center gap-1.5 text-xs',
      state === 'ready' && 'text-green-500',
      state === 'error' && 'text-red-500',
      state === 'building' && 'text-amber-500',
      (state === 'queued' || state === 'canceled') && 'text-gray-500'
    )}>
      <span className={cn('w-1.5 h-1.5 rounded-full', s.color)} />
      {showLabel && s.label}
    </span>
  );
}`}/>
<CB title="components/ui/badge.tsx" code={`import { cn } from '@/lib/cn';

// Geist badge: 8 colors × solid+subtle + inverted = 17 variants
// Naming: gray, gray-subtle, blue, blue-subtle, etc.
const colors = {
  gray:   { solid: 'bg-gray-500 text-white',        subtle: 'bg-gray-500/10 text-gray-500 border-gray-500/20' },
  blue:   { solid: 'bg-blue-500 text-white',         subtle: 'bg-blue-500/10 text-blue-500 border-blue-500/20' },
  green:  { solid: 'bg-green-500 text-white',        subtle: 'bg-green-500/10 text-green-500 border-green-500/20' },
  red:    { solid: 'bg-red-500 text-white',           subtle: 'bg-red-500/10 text-red-500 border-red-500/20' },
  amber:  { solid: 'bg-amber-500 text-white',        subtle: 'bg-amber-500/10 text-amber-500 border-amber-500/20' },
  purple: { solid: 'bg-purple-500 text-white',       subtle: 'bg-purple-500/10 text-purple-500 border-purple-500/20' },
  pink:   { solid: 'bg-pink-500 text-white',          subtle: 'bg-pink-500/10 text-pink-500 border-pink-500/20' },
  teal:   { solid: 'bg-teal-500 text-white',          subtle: 'bg-teal-500/10 text-teal-500 border-teal-500/20' },
  inverted: { solid: 'bg-foreground text-background', subtle: 'bg-foreground text-background' },
};
const sizes = { sm: 'text-[10px] px-1.5 py-px', md: 'text-xs px-2 py-0.5', lg: 'text-xs px-2.5 py-1' };

interface BadgeProps {
  color?: keyof typeof colors;
  variant?: 'solid' | 'subtle';
  size?: keyof typeof sizes;
  children: React.ReactNode;
  className?: string;
}

export function Badge({ color = 'gray', variant = 'subtle', size = 'md', children, className }: BadgeProps) {
  return (
    <span className={cn(
      'inline-flex items-center gap-1 rounded-full font-medium',
      variant === 'subtle' && 'border',
      colors[color][variant], sizes[size], className
    )}>
      {children}
    </span>
  );
}`}/>
<CB title="components/ui/note.tsx" code={`import { cn } from '@/lib/cn';

// Geist has 12 note types, each with outline and fill variants.
// Types: default, secondary, tertiary, success, warning, error, alert, lite, ghost, violet, cyan
const types = {
  default:   { border: 'border-[var(--border)]',    bg: '',                text: 'text-foreground' },
  secondary: { border: 'border-gray-500/20',        bg: '',                text: 'text-gray-600 dark:text-gray-400' },
  tertiary:  { border: 'border-gray-500/15',        bg: '',                text: 'text-gray-500' },
  success:   { border: 'border-green-500/30',       bg: '',                text: 'text-green-600 dark:text-green-400' },
  warning:   { border: 'border-amber-500/30',       bg: '',                text: 'text-amber-600 dark:text-amber-400' },
  error:     { border: 'border-red-500/30',         bg: '',                text: 'text-red-600 dark:text-red-400' },
  alert:     { border: 'border-amber-500/30',       bg: '',                text: 'text-amber-600 dark:text-amber-400' },
  lite:      { border: 'border-transparent',         bg: '',                text: 'text-gray-500' },
  ghost:     { border: 'border-transparent',         bg: '',                text: 'text-gray-400' },
  violet:    { border: 'border-purple-500/30',      bg: '',                text: 'text-purple-600 dark:text-purple-400' },
  cyan:      { border: 'border-cyan-500/30',        bg: '',                text: 'text-cyan-600 dark:text-cyan-400' },
};

const fillBg = {
  default: 'bg-[var(--bg-2)]', secondary: 'bg-gray-500/5', tertiary: 'bg-gray-500/5',
  success: 'bg-green-500/5', warning: 'bg-amber-500/5', error: 'bg-red-500/5',
  alert: 'bg-amber-500/5', lite: 'bg-transparent', ghost: 'bg-transparent',
  violet: 'bg-purple-500/5', cyan: 'bg-cyan-500/5',
};

interface NoteProps {
  type?: keyof typeof types;
  fill?: boolean;       // Geist fill variant — adds background color
  size?: 'small' | 'default' | 'large';
  label?: string | boolean; // true = auto label, string = custom, false/undefined = no label
  action?: { label: string; onClick: () => void };
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function Note({ type = 'default', fill = false, size = 'default', label, action, disabled, children, className }: NoteProps) {
  const t = types[type];
  const sizeClasses = { small: 'py-2 px-3 text-xs', default: 'p-4 text-sm', large: 'p-5 text-sm' };
  return (
    <div className={cn('flex items-start gap-3 rounded-lg border',
      t.border, fill ? fillBg[type] : '', sizeClasses[size],
      disabled && 'opacity-50 pointer-events-none', className)}>
      {label && <span className={cn('font-semibold shrink-0', t.text)}>
        {label === true ? type.charAt(0).toUpperCase() + type.slice(1) : label}:
      </span>}
      <div className="flex-1">{children}</div>
      {action && (
        <button onClick={action.onClick}
          className="text-blue-500 hover:underline underline-offset-4 shrink-0">
          {action.label}
        </button>
      )}
    </div>
  );
}`}/>
<CB title="components/ui/empty-state.tsx" code={`interface EmptyStateProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
  action?: React.ReactNode;
  secondaryAction?: React.ReactNode;
}

export function EmptyState({ icon, title, description, action, secondaryAction }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center py-20 text-center">
      <div className="w-14 h-14 rounded-xl bg-[var(--bg-2)] border border-[var(--border)]
        flex items-center justify-center text-2xl mb-4">
        {icon}
      </div>
      <h3 className="text-base font-semibold">{title}</h3>
      {description && (
        <p className="text-sm text-gray-500 mt-1 max-w-xs">{description}</p>
      )}
      {(action || secondaryAction) && (
        <div className="flex items-center gap-2 mt-6">
          {action}
          {secondaryAction}
        </div>
      )}
    </div>
  );
}`}/>
<CB title="components/ui/tabs.tsx" code={`'use client';
import { createContext, useContext, useState } from 'react';
import { cn } from '@/lib/cn';

const TabsContext = createContext<{ value: string; onChange: (v: string) => void }>({
  value: '', onChange: () => {},
});

export function Tabs({ value, onChange, children, className }: {
  value: string; onChange: (v: string) => void;
  children: React.ReactNode; className?: string;
}) {
  return (
    <TabsContext.Provider value={{ value, onChange }}>
      <div role="tablist" className={cn('flex border-b border-[var(--border)]', className)}>
        {children}
      </div>
    </TabsContext.Provider>
  );
}

export function Tab({ value, children, disabled, badge }: {
  value: string; children: React.ReactNode; disabled?: boolean; badge?: React.ReactNode;
}) {
  const ctx = useContext(TabsContext);
  const active = ctx.value === value;
  return (
    <button role="tab" aria-selected={active} disabled={disabled}
      onClick={() => !disabled && ctx.onChange(value)}
      className={cn(
        'px-4 py-2.5 text-sm transition-colors relative',
        'border-b-2 -mb-px',
        active ? 'border-foreground text-foreground font-medium' : 'border-transparent text-gray-500 hover:text-foreground',
        disabled && 'opacity-40 cursor-not-allowed'
      )}>
      <span className="flex items-center gap-2">{children}{badge}</span>
    </button>
  );
}

export function TabPanel({ value, activeValue, children }: {
  value: string; activeValue: string; children: React.ReactNode;
}) {
  if (value !== activeValue) return null;
  return <div role="tabpanel">{children}</div>;
}`}/>
<CB title="components/ui/skeleton.tsx" code={`import { cn } from '@/lib/cn';

interface SkeletonProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  rounded?: 'sm' | 'md' | 'lg' | 'full';
  animate?: boolean;
}

export function Skeleton({
  className, width, height = 16, rounded = 'md', animate = true,
}: SkeletonProps) {
  const radiusMap = { sm: '4px', md: '6px', lg: '8px', full: '9999px' };
  return (
    <div
      className={cn(animate && 'animate-pulse', className)}
      style={{
        width: typeof width === 'number' ? \`\${width}px\` : width,
        height: typeof height === 'number' ? \`\${height}px\` : height,
        borderRadius: radiusMap[rounded],
        backgroundColor: 'var(--bg-2)',
      }}
    />
  );
}

// Usage:
// <Skeleton width={120} height={8} />               — text line
// <Skeleton width={32} height={32} rounded="full" /> — avatar
// <Skeleton height={200} />                          — image/card body
// <Skeleton width="60%" height={10} />               — percentage width`}/>
<CB title="components/ui/sheet.tsx" code={`'use client';
import { useEffect, useRef } from 'react';
import { cn } from '@/lib/cn';

interface SheetProps {
  open: boolean;
  onClose: () => void;
  side?: 'right' | 'left' | 'top' | 'bottom'; // Geist Sheet supports all 4 edges
  width?: string;  // for left/right
  height?: string; // for top/bottom
  title?: string;
  children: React.ReactNode;
}

export function Sheet({ open, onClose, side = 'right', width = '400px', height = '50vh', title, children }: SheetProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Lock body scroll + Esc to close
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[500]" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Panel */}
      <div
        ref={ref}
        className={cn(
          'absolute bg-background border-[var(--border)] shadow-[var(--shadow-modal)]',
          'flex flex-col animate-[slideIn_200ms_cubic-bezier(0.22,1,0.36,1)]',
          side === 'right' && 'top-0 right-0 bottom-0 border-l',
          side === 'left' && 'top-0 left-0 bottom-0 border-r',
          side === 'top' && 'top-0 left-0 right-0 border-b',
          side === 'bottom' && 'bottom-0 left-0 right-0 border-t',
        )}
        style={
          side === 'left' || side === 'right' ? { width } : { height }
        }
      >
        {/* Header */}
        {title && (
          <div className="px-6 py-4 border-b border-[var(--border)] flex items-center justify-between">
            <h2 className="text-sm font-semibold">{title}</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-foreground text-lg">&times;</button>
          </div>
        )}
        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {children}
        </div>
      </div>
    </div>
  );
}`}/>
<CB title="components/ui/tooltip.tsx" code={`'use client';
import { useState, useRef, useCallback } from 'react';
import { cn } from '@/lib/cn';

interface TooltipProps {
  content: string;
  side?: 'top' | 'bottom';
  delayMs?: number;
  children: React.ReactElement;
}

export function Tooltip({ content, side = 'top', delayMs = 200, children }: TooltipProps) {
  const [show, setShow] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>();

  const handleEnter = useCallback(() => {
    timer.current = setTimeout(() => setShow(true), delayMs);
  }, [delayMs]);

  const handleLeave = useCallback(() => {
    clearTimeout(timer.current);
    setShow(false);
  }, []);

  return (
    <div className="relative inline-block" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      {children}
      {show && (
        <div
          role="tooltip"
          className={cn(
            'absolute left-1/2 -translate-x-1/2 z-[800]',
            'px-2.5 py-1 rounded-md bg-foreground text-background text-xs font-medium',
            'whitespace-nowrap pointer-events-none',
            side === 'top' ? 'bottom-full mb-1.5' : 'top-full mt-1.5'
          )}
        >
          {content}
          {/* Arrow */}
          <div className={cn(
            'absolute left-1/2 -translate-x-1/2 w-0 h-0',
            'border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent',
            side === 'top'
              ? 'top-full border-t-[4px] border-t-foreground'
              : 'bottom-full border-b-[4px] border-b-foreground'
          )} />
        </div>
      )}
    </div>
  );
}`}/>
<CB title="components/ui/spinner.tsx" code={`import { cn } from '@/lib/cn';

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizes = { sm: 'w-3.5 h-3.5 border-[1.5px]', md: 'w-5 h-5 border-2', lg: 'w-8 h-8 border-2' };

export function Spinner({ size = 'md', className }: SpinnerProps) {
  return (
    <div
      role="status"
      aria-label="Loading"
      className={cn(
        'rounded-full border-[var(--border)] border-t-foreground animate-spin',
        sizes[size], className
      )}
    />
  );
}

// Usage:
// <Spinner />                     — default 20px
// <Spinner size="sm" />           — 14px, inside buttons
// <button disabled><Spinner size="sm" /> Saving...</button>`}/>
</div>}


{/* ═══ MIGRATION MAP ═══ */}
{a==="migrate"&&<div><H2>Migration Map</H2><P>Framework → Geist mappings for 4 systems + audit checklist + priority order.</P>
<H3>Migration Priority Order</H3>
<CB title="do-this-first" code={`STEP 1: Install geist + setup layout.tsx + globals.css (30 min)
STEP 2: Global find-replace borders and backgrounds (see CSS Diff tab) (1 hr)
STEP 3: Typography — switch font, add tracking to headings (30 min)
STEP 4: Buttons — standardize to 3 sizes, fix radii (1 hr per page)
STEP 5: Inputs — standardize to h-10, add focus ring (1 hr per page)
STEP 6: Cards — remove box-shadow, add 1px border (30 min per page)
STEP 7: Modals/drawers — add backdrop, fix radius/shadow (1 hr)
STEP 8: Tables — remove stripes, add hover (30 min per table)
STEP 9: Dark mode — test every page in both themes (2 hrs)
STEP 10: Polish — empty states, loading skeletons, focus rings (ongoing)

Total estimate: 1-2 days for a 10-page app, 1-2 weeks for a large dashboard`}/>
<H3>Tailwind Default → Geist</H3>
<CB title="tailwind-overrides" code={`COLORS (put in tailwind.config.ts extend.colors)
  gray.50  → remove (use --bg-2 instead)
  gray.100 → "#f7f7f7"     gray.200 → "#e5e5e5"     gray.300 → "#d4d4d4"
  gray.400 → "#a3a3a3"     gray.500 → "#737373"  ★ THE secondary text color
  gray.600 → "#525252"     gray.700 → "#404040"     gray.800 → "#262626"
  gray.900 → "#171717"     gray.950 → "#0a0a0a"
  blue.500 → blue: "#0070f3"  (Geist primary — links, focus, accents)
  red.500  → error: "#ee0000" (NOT red — use semantic name)
  green.500 → success: "#17c964"
  yellow.500 → warning: "#f5a623" (amber, not yellow)

BORDERS
  border-gray-200    → border-[var(--border)]     or border-[rgba(0,0,0,0.08)]
  border-gray-700    → border-[var(--border)]     (same var, inverts in dark)
  divide-gray-200    → divide-[var(--border)]

SHADOWS (cards lose shadows, only floating elements keep them)
  shadow-sm  → border border-[var(--border)]     (on cards)
  shadow-md  → border border-[var(--border)]     (on cards)
  shadow-lg  → shadow-[var(--shadow-menu)]       (on menus/tooltips ONLY)
  shadow-xl  → shadow-[var(--shadow-modal)]      (on modals ONLY)

TYPOGRAPHY
  text-2xl and above → ADD tracking-[-0.04em]
  font-bold on headings → font-extrabold (800) for marketing/display, font-semibold (600) for dashboard UI
  All text: already fine (text-xs=12, text-sm=14, text-base=16)
  Geist variable weight range: 100-900 (Thin to Black)

RADII  rounded-sm(4px)✓  rounded-md(6px)✓  rounded-lg(8px)✓  rounded-xl(12px)✓`}/>
<H3>Bootstrap 5 → Geist</H3>
<Row items={[
  ["btn btn-primary","h-10 px-4 bg-foreground text-background rounded-md text-sm font-medium"],
  ["btn btn-secondary","h-10 px-4 border border-[var(--border)] rounded-md text-sm"],
  ["btn btn-danger","h-10 px-4 bg-[#EE0000] text-white rounded-md text-sm"],
  ["btn btn-sm / btn-lg","h-8 px-3 text-xs / h-12 px-8 text-sm"],
  ["card + card-body","rounded-lg border border-[var(--border)] overflow-hidden + p-6"],
  ["card-footer","px-6 py-3 border-t bg-[var(--bg-2)]"],
  ["form-control","h-10 w-full px-3 rounded-md border bg-transparent text-sm focus:ring-blue"],
  ["form-label","text-sm font-medium (+ add space-y-1.5 wrapper)"],
  ["alert alert-danger","p-4 rounded-lg border border-red-500/30 bg-red-500/5 text-sm"],
  ["alert alert-success","p-4 rounded-lg border border-green-500/30 bg-green-500/5 text-sm"],
  ["modal-dialog","fixed inset-0 z-50 flex items-center justify-center"],
  ["modal-content","max-w-md bg-background rounded-xl border shadow-[var(--shadow-modal)]"],
  ["navbar","sticky top-0 z-50 h-16 px-6 border-b backdrop-blur-xl bg-background/80"],
  ["badge","text-xs px-2 py-0.5 rounded-full border"],
  ["spinner-border","w-5 h-5 border-2 border-[var(--border)] border-t-foreground rounded-full animate-spin"],
  ["dropdown-menu","rounded-xl border shadow-[var(--shadow-menu)] p-1.5"],
  ["table","w-full text-sm (see Table recipe) + hover rows not striped"],
  ["breadcrumb","flex items-center gap-1.5 text-sm + slash separators"],
]}/>
<H3>Material UI (MUI) → Geist</H3>
<Row items={[
  ["<Button variant='contained'>","bg-foreground text-background rounded-md (NOT blue bg)"],
  ["<Button variant='outlined'>","border border-[var(--border)] rounded-md"],
  ["<TextField>","h-10 px-3 border rounded-md bg-transparent + label above"],
  ["<Card> + elevation","rounded-lg border (NO elevation. NO box-shadow on cards.)"],
  ["<Dialog>","rounded-xl border shadow-[var(--shadow-modal)] + backdrop"],
  ["<CircularProgress>","w-5 h-5 border-2 border-t-foreground rounded-full animate-spin"],
  ["<LinearProgress>","h-1 rounded-full bg-[var(--bg-2)] + inner bar"],
  ["<Skeleton>","rounded bg-[var(--bg-2)] animate-pulse"],
  ["<Alert severity='error'>","p-4 rounded-lg border-red-500/30 bg-red-500/5"],
  ["<Chip>","text-xs px-2 py-0.5 rounded-full border"],
  ["<Tabs>","border-b + button per tab + active underline (NOT contained)"],
  ["<Tooltip>","rounded-md shadow-[var(--shadow-tooltip)] + 200ms delay"],
  ["sx={{ p: 2 }}","className='p-4' (MUI unit=8px, TW unit=4px, so MUI 2=TW 4)"],
  ["elevation={N}","REMOVE entirely. Use border + specific shadow token if floating."],
]}/>
<H3>Chakra UI → Geist</H3>
<Row items={[
  ["<Button colorScheme='blue'>","bg-foreground text-background rounded-md (NOT colored)"],
  ["<Input>","h-10 px-3 border rounded-md bg-transparent text-sm"],
  ["<Box shadow='md'>","border border-[var(--border)] (remove shadow from non-floating)"],
  ["<Modal>","rounded-xl border shadow-modal + backdrop-blur"],
  ["<useToast()>","import { toast } from 'sonner' (switch to sonner lib)"],
  ["<Skeleton>","rounded bg-[var(--bg-2)] animate-pulse (same concept)"],
  ["<Badge colorScheme>","text-xs px-2 py-0.5 rounded-full + Geist semantic color"],
  ["<Divider>","h-px bg-[var(--border)] or border-t border-[var(--border)]"],
  ["<Stack spacing={4}>","flex flex-col gap-4 (direct Tailwind flex/grid)"],
  ["theme.colors.gray","Replace entire palette with Geist 10-step gray"],
]}/>
<H3>Migration Audit Checklist</H3>
<CB title="checklist" code={`PRE-MIGRATION SETUP
  □ npm install geist
  □ app/layout.tsx: import GeistSans + GeistMono, add className to <html>
  □ app/globals.css: paste complete token set (see Export tab)
  □ tailwind.config.ts: paste extend block (see Export tab)
  □ <meta name="theme-color" content="#000000"> in <head>
  □ Test: site loads with Geist font active

GLOBAL REPLACEMENTS (use CSS Diff tab grep patterns)
  □ All border colors → var(--border)
  □ All gray hex values → Geist gray scale tokens
  □ Primary color → #0070F3
  □ Error color → #EE0000
  □ Background colors → var(--background) / var(--bg-2)
  □ Remove all card box-shadows → replace with 1px border

PER-PAGE COMPONENT AUDIT
  □ Buttons: standardize heights (32/40/48), radii (rounded-md), remove shadows
  □ Inputs: h-10, single border, add focus:border-blue focus:ring-blue/15
  □ Cards: 1px border only, p-6 body, px-6 py-3 footer with bg-2
  □ Modals: rounded-xl, shadow-modal, backdrop-blur, focus trap
  □ Tables: remove striped rows, add hover:bg-[var(--bg-2)], proper header styling
  □ Navigation: h-16 topbar with backdrop-blur, or h-12 compact

TYPOGRAPHY
  □ Font → Geist Sans everywhere, Geist Mono for code (Geist Pixel for display/decorative)
  □ Marketing headings: font-weight 800, letter-spacing -0.04em for ≥24px
  □ Dashboard headings: font-weight 600, letter-spacing -0.02em
  □ Line-heights snap to 8px grid (check with devtools)

DARK MODE (do last)
  □ All theme colors use CSS custom properties (not Tailwind dark: prefix)
  □ Test every page in both themes
  □ Verify borders visible in dark
  □ Verify text contrast passes AA (especially gray-500 on black)
  □ Fix autofill input styling

QA
  □ Lighthouse accessibility audit → no contrast failures
  □ Tab through every page → focus-visible rings appear on all interactive elements
  □ Screen reader test → all ARIA roles correct
  □ Mobile test → responsive breakpoints work`}/>
</div>}

{/* ═══ CSS DIFF / GREP ═══ */}
{a==="grep"&&<div><H2>CSS Property Diff + Grep Patterns</H2><P>Literal find → replace for your codebase. Regex patterns to find everything that needs changing.</P>
<H3>Property-Level Replacements</H3>
<CB title="css-diff" code={`BORDERS (the #1 migration task)
  border: 1px solid #e5e5e5      →  border: 1px solid var(--border)
  border: 1px solid #333          →  border: 1px solid var(--border)
  border-color: #eaeaea           →  border-color: var(--border)
  border-bottom: 1px solid #eee   →  border-bottom: 1px solid var(--border)

SHADOWS → BORDERS (cards lose shadows, get borders)
  box-shadow: 0 1px 3px rgba(0,0,0,0.1)   →  border: 1px solid var(--border)
  box-shadow: 0 2px 4px rgba(0,0,0,0.05)  →  border: 1px solid var(--border)
  box-shadow: 0 4px 6px ...               →  border: 1px solid var(--border)
  // KEEP shadows only on: menus, modals, tooltips

BACKGROUNDS
  background: #f5f5f5    →  background: var(--bg-2)
  background: #fafafa    →  background: var(--bg-2)
  background: #111       →  background: var(--background)   /* dark bg is pure #000 */
  background: #1a1a1a    →  background: var(--bg-2)
  background: #f9fafb    →  background: var(--bg-2)

TEXT COLORS
  color: #666            →  color: var(--gray-9)   /* secondary text #737373 */
  color: #999            →  color: var(--gray-9)
  color: #333            →  color: var(--foreground)
  color: #111            →  color: var(--foreground)
  color: #aaa            →  color: var(--gray-9)   /* or text-gray-500 in Tailwind */

FONT
  font-family: Inter, ...       →  font-family: var(--font-geist-sans)
  font-family: 'SF Pro', ...    →  font-family: var(--font-geist-sans)
  font-family: 'Fira Code', ... →  font-family: var(--font-geist-mono)

RADII
  border-radius: 3px   →  border-radius: 4px   /* snap to Geist scale */
  border-radius: 5px   →  border-radius: 6px
  border-radius: 10px  →  border-radius: 8px   /* or 12px */
  border-radius: 20px  →  border-radius: 9999px  /* make it a pill */

TRANSITIONS
  transition: all 0.2s  →  transition: color 0.15s, background 0.15s, border-color 0.15s
  transition: 0.3s      →  transition-duration: 200ms; transition-timing-function: var(--ease)`}/>
<H3>Grep Your Codebase (regex patterns)</H3>
<CB title="grep-patterns.sh" code={`# Find hardcoded grays (should be CSS vars)
grep -rn '#[0-9a-f]\{6\}' --include='*.tsx' --include='*.css' | grep -iE '#(e[0-9a-f]{5}|d[0-9a-f]{5}|c[0-9a-f]{5}|f[0-9a-f]{5}|[0-3][0-9a-f]{5})'

# Find box-shadow on non-floating elements
grep -rn 'box-shadow\|shadow-' --include='*.tsx' --include='*.css'

# Find transition: all (anti-pattern)
grep -rn 'transition:\s*all\|transition-property:\s*all' --include='*.tsx' --include='*.css'

# Find hardcoded font-family (should use Geist)
grep -rn "font-family" --include='*.tsx' --include='*.css' | grep -v 'var(--font'

# Find non-Geist border-radius values
grep -rn 'border-radius:\s*[0-9]*px' --include='*.css' | grep -vE '(4|6|8|12|16|9999)px'

# Find hardcoded z-index (should use scale)
grep -rn 'z-index:\s*[0-9]' --include='*.tsx' --include='*.css' | grep -vE '(100|400|500|700|800|999)'

# Find color-only status indicators
grep -rn 'bg-red-\|bg-green-\|bg-yellow-' --include='*.tsx' | grep -v 'text-\|label\|aria-'

# Tailwind: find non-Geist gray values
grep -rn 'gray-[0-9]*' --include='*.tsx' | grep -vE 'gray-(100|200|300|400|500|600|700|800|900|950)'

# Find missing labels on inputs
grep -rn '<input' --include='*.tsx' | grep -v 'aria-label\|<label\|id='`}/>
<H3>VS Code Search & Replace</H3>
<CB title="vscode-replacements" code={`Find:     border-gray-200
Replace:  border-[var(--border)]

Find:     shadow-(sm|md|lg|xl)
Replace:  border border-[var(--border)]
(then manually add shadow back to menus/modals/tooltips only)

Find:     bg-gray-50
Replace:  bg-[var(--bg-2)]

Find:     text-gray-600
Replace:  text-gray-500

Find:     font-bold (on headings)
Replace:  font-extrabold tracking-[-0.04em]

Find:     rounded-lg (on buttons)
Replace:  rounded-md`}/>
</div>}

{/* ═══ RESPONSIVE RULES ═══ */}
{a==="rbreak"&&<div><H2>Responsive Behavior Rules</H2><P>Not just "grid collapses" — when each layout element changes form.</P>
<CB title="breakpoint-behavior" code={`BREAKPOINTS (Tailwind defaults, Geist-compatible)
  sm: 640px    md: 768px    lg: 1024px    xl: 1280px    2xl: 1536px

SIDEBAR (w-60 / 240px)
  ≥1024px: Visible, fixed position, pushes content right
  <1024px: Hidden. Becomes a DRAWER (Sheet component, slides from left)
  Trigger: hamburger icon in topbar (3 lines, 20x20)
  Transition: slide + backdrop, 300ms ease-spring

TOPBAR
  ≥768px: Full nav links visible, search bar, avatar, feedback button
  <768px: Logo + hamburger only. Nav moves into sidebar drawer.
  Search: becomes full-screen overlay on mobile (like ⌘K)

FEATURE GRID
  ≥1024px: 3 columns
  ≥640px: 2 columns
  <640px: 1 column (stack)
  Code: grid-cols-1 sm:grid-cols-2 lg:grid-cols-3

STATS ROW
  ≥1024px: 4 columns
  ≥640px: 2 columns (2x2 grid)
  <640px: 1 column (stack)
  Code: grid-cols-1 sm:grid-cols-2 lg:grid-cols-4

PRICING CARDS
  ≥1024px: 3 columns side by side
  ≥640px: 3 columns but tighter padding
  <640px: 1 column (stack, each card full-width)
  Highlighted card: stays highlighted in all layouts

TABLE
  ≥768px: Normal table layout
  <768px: Horizontal scroll (overflow-x-auto wrapper)
  Alternative: Card layout on mobile (each row becomes a card)
  Code: <div className="overflow-x-auto"><table>...</table></div>

MODAL
  ≥640px: Centered, max-w-md, rounded-xl
  <640px: Full-width, bottom-aligned (like a bottom sheet)
  Code: sm:rounded-xl sm:max-w-md max-sm:rounded-t-xl max-sm:fixed max-sm:bottom-0 max-sm:w-full

HERO TEXT
  ≥1024px: text-7xl (72px)
  ≥768px: text-5xl (48px)
  <768px: text-3xl (30px)
  Code: text-3xl md:text-5xl lg:text-7xl font-extrabold tracking-[-0.04em]

SECTION PADDING
  ≥768px: py-24 (96px) to py-32 (128px)
  <768px: py-16 (64px)
  Code: py-16 md:py-24

BUTTON (marketing CTA)
  ≥640px: Side by side (flex-row)
  <640px: Stack (flex-col, full-width)
  Code: flex flex-col sm:flex-row gap-3

"use client" COMPONENTS (need JS)
  Sidebar drawer, Modal, Toast, Tabs, Command Menu, Combobox,
  Theme Switcher, Feedback widget, any component with useState/useEffect

SERVER COMPONENTS (no JS needed)
  Navbar (static), Footer, Cards, Stats, Feature Grid, Table,
  Note/Alert, Empty State, Badge, StatusDot, Breadcrumbs, Avatar`}/>
</div>}

{/* ═══ HARD PROBLEMS ═══ */}
{a==="hard"&&<div><H2>Hard Problems</H2><P>The components that take the most time. Annotated implementations.</P>
<CB title="⌘K Command Menu (simplified)" code={`'use client';
// For production: use 'cmdk' package (npm install cmdk)
// This is the pattern — cmdk handles the hard parts

import { Command } from 'cmdk';

export function CommandMenu() {
  const [open, setOpen] = useState(false);

  // ⌘K listener
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(prev => !prev);
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999]">
      <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
      <div className="relative max-w-lg mx-auto mt-[20vh]">
        <Command className="rounded-xl border bg-background shadow-[0_16px_64px_rgba(0,0,0,0.25)] overflow-hidden">
          <Command.Input
            placeholder="Type a command or search..."
            className="h-12 w-full px-4 border-b bg-transparent text-sm outline-none"
          />
          <Command.List className="max-h-80 overflow-y-auto p-2">
            <Command.Empty className="py-6 text-center text-sm text-gray-500">
              No results found.
            </Command.Empty>
            <Command.Group heading="Projects" className="text-xs text-gray-500 px-2 py-1.5">
              <Command.Item className="flex items-center gap-2 px-3 py-2 rounded-md text-sm
                cursor-pointer data-[selected=true]:bg-[var(--bg-2)]">
                Search Projects...
              </Command.Item>
            </Command.Group>
            <Command.Group heading="Actions">
              <Command.Item>New Project</Command.Item>
              <Command.Item>Import Repository</Command.Item>
              <Command.Item>Toggle Theme</Command.Item>
            </Command.Group>
          </Command.List>
        </Command>
      </div>
    </div>
  );
}`}/>
<CB title="Animated page transitions (App Router)" code={`// app/template.tsx — wraps each page with enter animation
'use client';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="animate-[slideUp_300ms_cubic-bezier(0.22,1,0.36,1)]">
      {children}
    </div>
  );
}

// For exit animations, use View Transitions API (experimental):
// import { useRouter } from 'next/navigation';
// router.push(href) triggers document.startViewTransition() automatically
// in next.config.js: experimental: { viewTransition: true }`}/>
<CB title="Animated list (enter/exit items)" code={`// npm install framer-motion
import { AnimatePresence, motion } from 'framer-motion';

function AnimatedList({ items }) {
  return (
    <AnimatePresence mode="popLayout">
      {items.map(item => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}  // Geist spring
          layout  // smooth reorder
          className="p-4 border rounded-md mb-2"
        >
          {item.content}
        </motion.div>
      ))}
    </AnimatePresence>
  );
}`}/>
<CB title="react-hook-form + zod + Geist inputs" code={`import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const schema = z.object({
  name: z.string().min(1, 'Required').max(48, 'Max 48 characters'),
  email: z.string().email('Invalid email'),
});

export function ProjectForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input label="Project Name" error={errors.name?.message} {...register('name')} />
      <Input label="Email" type="email" error={errors.email?.message} {...register('email')} />
      <Button type="submit" loading={isSubmitting}>Create Project</Button>
    </form>
  );
}
// Key: Input component handles aria-invalid, error display, focus ring automatically`}/>
<CB title="Styling third-party elements to match Geist" code={`/* Stripe Elements */
.StripeElement {
  height: 40px; padding: 10px 12px;
  border: 1px solid var(--border); border-radius: 6px;
  background: transparent; transition: border-color 0.15s;
}
.StripeElement--focus { border-color: var(--blue); box-shadow: 0 0 0 2px rgba(0,112,243,0.15); }
.StripeElement--invalid { border-color: var(--red); }

/* Auth provider buttons (Google, GitHub) */
.auth-btn {
  height: 40px; width: 100%; display: flex; align-items: center; justify-content: center;
  gap: 8px; font-size: 14px; border: 1px solid var(--border); border-radius: 6px;
  background: transparent; transition: background 0.15s, border-color 0.15s;
}
.auth-btn:hover { background: var(--bg-2); border-color: var(--border-hover); }

/* CMS embeds (wrap in this class) */
.prose-geist { font-family: var(--font-geist-sans); color: var(--foreground); }
.prose-geist h1,.prose-geist h2,.prose-geist h3 { font-weight: 800; letter-spacing: -0.04em; }
.prose-geist a { color: var(--blue); text-decoration: underline; text-underline-offset: 4px; }
.prose-geist code { font-family: var(--font-geist-mono); background: var(--bg-2);
  padding: 2px 6px; border-radius: 4px; font-size: 0.875em; }
.prose-geist pre { background: #0a0a0a; border-radius: 8px; padding: 16px;
  overflow-x: auto; border: 1px solid rgba(255,255,255,0.08); }`}/>
<CB title="Optimistic Updates (instant UI + background sync)" code={`'use client';
import { useOptimistic, useTransition } from 'react';

function TodoList({ todos }) {
  const [optimisticTodos, addOptimistic] = useOptimistic(
    todos,
    (state, newTodo) => [...state, { ...newTodo, pending: true }]
  );
  const [isPending, startTransition] = useTransition();

  async function handleAdd(formData: FormData) {
    const title = formData.get('title') as string;
    const tempId = crypto.randomUUID();

    // Instantly update UI
    addOptimistic({ id: tempId, title, completed: false });

    // Sync with server in background
    startTransition(async () => {
      try {
        await createTodo(title);
        // Revalidation happens automatically via server action
      } catch {
        toast.error('Failed to create todo');
        // UI auto-reverts because optimistic state is temporary
      }
    });
  }

  return (
    <div>
      {optimisticTodos.map(todo => (
        <div key={todo.id} className={\`px-4 py-3 border-b flex items-center gap-3
          \${todo.pending ? 'opacity-60' : ''}\`}>
          <span>{todo.title}</span>
          {todo.pending && <LoadingDots />}
        </div>
      ))}
    </div>
  );
}`}/>
<CB title="Multi-Step Form Wizard" code={`'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const STEPS = ['Account', 'Team', 'Billing', 'Review'];

export function SetupWizard() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({ name: '', team: '', plan: '' });

  const canNext = step === 0 ? data.name : step === 1 ? data.team : step === 2 ? data.plan : true;

  return (
    <div className="max-w-lg mx-auto py-16">
      {/* Progress */}
      <div className="flex items-center gap-2 mb-8">
        {STEPS.map((s, i) => (
          <Fragment key={s}>
            {i > 0 && <div className={\`flex-1 h-px \${i <= step ? 'bg-foreground' : 'bg-[var(--border)]'}\`} />}
            <div className={\`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium
              \${i < step ? 'bg-foreground text-background' :
                i === step ? 'border-2 border-foreground' :
                'border border-[var(--border)] text-gray-400'}\`}>
              {i < step ? '✓' : i + 1}
            </div>
          </Fragment>
        ))}
      </div>

      <h2 className="text-xl font-bold tracking-[-0.02em] mb-6">{STEPS[step]}</h2>

      {/* Step content */}
      {step === 0 && <Input label="Your Name" value={data.name} onChange={e => setData({...data, name: e.target.value})} />}
      {step === 1 && <Input label="Team Name" value={data.team} onChange={e => setData({...data, team: e.target.value})} />}
      {step === 2 && /* Plan selection */ null}
      {step === 3 && /* Review summary */ null}

      {/* Navigation */}
      <div className="flex justify-between mt-8">
        <Button variant="ghost" onClick={() => setStep(s => s - 1)} disabled={step === 0}>Back</Button>
        {step < STEPS.length - 1
          ? <Button onClick={() => setStep(s => s + 1)} disabled={!canNext}>Continue</Button>
          : <Button onClick={handleSubmit} loading={submitting}>Create Project</Button>
        }
      </div>
    </div>
  );
}`}/>
<CB title="Debounced Search with Results" code={`'use client';
import { useState, useEffect, useRef } from 'react';

function useDebounce<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debounced;
}

export function SearchInput() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    if (!debouncedQuery) { setResults([]); return; }
    setLoading(true);
    searchAPI(debouncedQuery)
      .then(setResults)
      .finally(() => setLoading(false));
  }, [debouncedQuery]);

  return (
    <div className="relative">
      <input value={query} onChange={e => setQuery(e.target.value)}
        className="h-10 w-full pl-10 pr-3 rounded-md border text-sm bg-transparent
          focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15 outline-none"
        placeholder="Search projects..." />

      {(results.length > 0 || loading) && (
        <div className="absolute top-full left-0 right-0 mt-1 rounded-xl border
          bg-background shadow-[var(--shadow-menu)] p-1.5 z-50">
          {loading ? (
            <div className="px-3 py-6 text-center">
              <div className="w-4 h-4 border-2 border-[var(--border)] border-t-foreground
                rounded-full animate-spin mx-auto" />
            </div>
          ) : results.map(r => (
            <button key={r.id} className="w-full px-3 py-2 text-sm text-left rounded-md
              hover:bg-[var(--bg-2)] flex items-center gap-3">
              <span className="font-medium">{r.name}</span>
              <span className="text-xs text-gray-500 ml-auto">{r.type}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}`}/>
<CB title="Infinite Scroll List" code={`'use client';
import { useEffect, useRef, useCallback } from 'react';

function useInfiniteScroll(loadMore: () => void, hasMore: boolean) {
  const observer = useRef<IntersectionObserver>();
  const sentinelRef = useCallback((node: HTMLDivElement | null) => {
    if (observer.current) observer.current.disconnect();
    if (!node || !hasMore) return;
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) loadMore();
    }, { rootMargin: '200px' }); // trigger 200px before reaching bottom
    observer.current.observe(node);
  }, [loadMore, hasMore]);

  return sentinelRef;
}

export function InfiniteList() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery(...);
  const sentinelRef = useInfiniteScroll(fetchNextPage, hasNextPage);

  return (
    <div className="divide-y divide-[var(--border)]">
      {data.pages.flat().map(item => (
        <div key={item.id} className="px-5 py-3 hover:bg-[var(--bg-2)]">
          {item.name}
        </div>
      ))}
      <div ref={sentinelRef} className="py-4 text-center">
        {isFetchingNextPage && (
          <div className="flex gap-1 justify-center">
            {[0,1,2].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce"
              style={{ animationDelay: i * 0.15 + 's' }} />)}
          </div>
        )}
      </div>
    </div>
  );
}`}/>
</div>}


{/* ═══ SCAFFOLDS ═══ */}
{a==="scaffold"&&<div><H2>Page Scaffolds</H2><P>Complete page files + file structure.</P>
<CB title="app/(marketing)/page.tsx" code={`export default function Landing() {
  return (<>
    <section className="py-32 px-6 text-center">
      <h1 className="text-7xl font-extrabold tracking-[-0.04em] max-w-3xl mx-auto">Headline</h1>
      <p className="text-xl text-gray-500 mt-6 max-w-xl mx-auto">Subheadline.</p>
      <div className="flex gap-3 justify-center mt-10">
        <Link href="/signup" className="h-12 px-8 inline-flex items-center rounded-full bg-foreground text-background shadow-lg">Start</Link>
        <Link href="/demo" className="h-12 px-8 inline-flex items-center rounded-full border">Demo</Link>
      </div>
    </section>
    <section className="py-24 px-6 max-w-[1200px] mx-auto">
      <div className="grid grid-cols-3 gap-px bg-[var(--border)] rounded-lg overflow-hidden">
        {features.map(f=><div key={f.t} className="bg-background p-10">
          <h3 className="text-lg font-semibold mt-4">{f.t}</h3>
          <p className="text-sm text-gray-500 mt-2">{f.d}</p>
        </div>)}
      </div>
    </section>
  </>);
}`}/>
<CB title="app/dashboard/page.tsx" code={`export default async function Dashboard() {
  const [stats, projects] = await Promise.all([getStats(), getProjects()]);
  return (<div className="space-y-6">
    <div className="grid grid-cols-4 gap-4">{stats.map(s=><div key={s.label} className="p-5 rounded-lg border">
      <p className="text-xs text-gray-500">{s.label}</p>
      <p className="text-2xl font-bold tracking-tight tabular-nums mt-1">{s.value}</p>
    </div>)}</div>
    <div className="rounded-lg border overflow-hidden">
      <div className="px-5 py-3 border-b flex justify-between"><h2 className="text-sm font-semibold">Projects</h2>
        <button className="h-8 px-3 text-xs bg-foreground text-background rounded-md">New</button></div>
      <table className="w-full text-sm"><tbody className="divide-y">
        {projects.map(p=><tr key={p.id} className="hover:bg-[var(--bg-2)]">
          <td className="px-5 py-3 font-medium">{p.name}</td>
          <td className="px-5 py-3"><StatusDot state={p.status}/></td>
        </tr>)}</tbody></table>
    </div>
  </div>);
}`}/>
<CB title="app/not-found.tsx" code={`export default function NotFound() {
  return (<div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
    <h1 className="text-8xl font-extrabold tracking-[-0.04em] text-gray-200 dark:text-gray-800">404</h1>
    <h2 className="text-xl font-semibold mt-4">Page Not Found</h2>
    <p className="text-sm text-gray-500 mt-2 max-w-sm">This page doesn't exist or has been moved.</p>
    <Link href="/" className="mt-8 h-10 px-6 inline-flex items-center rounded-md bg-foreground text-background text-sm">Go Home</Link>
  </div>);
}`}/>
<CB title="app/(dashboard)/settings/page.tsx" code={`'use client';
import { useState } from 'react';
import { Tabs, Tab } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function SettingsPage() {
  const [tab, setTab] = useState('general');

  return (
    <div className="max-w-2xl">
      <h1 className="text-xl font-bold tracking-[-0.02em]">Settings</h1>
      <p className="text-sm text-gray-500 mt-1 mb-6">Manage your project configuration.</p>

      <Tabs value={tab} onChange={setTab}>
        <Tab value="general">General</Tab>
        <Tab value="env">Environment Variables</Tab>
        <Tab value="domains">Domains</Tab>
        <Tab value="advanced">Advanced</Tab>
      </Tabs>

      <div className="mt-6 space-y-8">
        {tab === 'general' && <>
          {/* Project Name */}
          <div className="rounded-lg border border-[var(--border)] overflow-hidden">
            <div className="p-6">
              <h3 className="text-sm font-semibold">Project Name</h3>
              <p className="text-sm text-gray-500 mt-1">Used to identify your project on the dashboard.</p>
              <Input className="mt-4 max-w-sm" defaultValue="my-project" />
            </div>
            <div className="px-6 py-3 border-t border-[var(--border)] bg-[var(--bg-2)] flex justify-between items-center">
              <p className="text-xs text-gray-500">Max 48 characters</p>
              <Button size="sm">Save</Button>
            </div>
          </div>

          {/* Build Command */}
          <div className="rounded-lg border border-[var(--border)] overflow-hidden">
            <div className="p-6">
              <h3 className="text-sm font-semibold">Build Command</h3>
              <p className="text-sm text-gray-500 mt-1">Override the default build command.</p>
              <Input className="mt-4 max-w-sm" defaultValue="next build" prefix="$" />
            </div>
            <div className="px-6 py-3 border-t border-[var(--border)] bg-[var(--bg-2)] flex justify-end">
              <Button size="sm">Save</Button>
            </div>
          </div>
        </>}

        {tab === 'advanced' && (
          <div className="rounded-lg border border-red-500/30 overflow-hidden">
            <div className="p-6">
              <h3 className="text-sm font-semibold text-red-500">Delete Project</h3>
              <p className="text-sm text-gray-500 mt-1">
                Permanently delete this project and all deployments. This action cannot be undone.
              </p>
            </div>
            <div className="px-6 py-3 border-t border-red-500/15 bg-red-500/5 flex justify-end">
              <Button variant="error" size="sm">Delete Project</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}`}/>
<CB title="app/(marketing)/pricing/page.tsx" code={`const plans = [
  { name: 'Hobby', price: 'Free', desc: 'For personal projects', features: [
    '100GB Bandwidth', 'Automatic HTTPS', 'Community Support', '1 Team Member',
  ]},
  { name: 'Pro', price: '$20', desc: 'For teams and production', highlight: true, features: [
    '1TB Bandwidth', 'Password Protection', 'Email Support', 'Unlimited Team Members',
    'Preview Deployments', 'Analytics',
  ]},
  { name: 'Enterprise', price: 'Custom', desc: 'For large-scale applications', features: [
    'Custom Bandwidth', 'SSO / SAML', 'Dedicated Support', 'SLA', 'Custom Contracts',
    'Advanced Security',
  ]},
];

export default function PricingPage() {
  return (
    <section className="py-24 px-6 max-w-[1200px] mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold tracking-[-0.04em]">Pricing</h1>
        <p className="text-lg text-gray-500 mt-4">Start free. Scale as you grow.</p>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {plans.map(plan => (
          <div key={plan.name} className={\`rounded-xl p-8 flex flex-col
            \${plan.highlight
              ? 'border-2 border-blue-500 relative'
              : 'border border-[var(--border)]'}\`}>
            {plan.highlight && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500
                text-white text-xs font-medium px-3 py-0.5 rounded-full">
                Most Popular
              </span>
            )}
            <h3 className="text-lg font-semibold">{plan.name}</h3>
            <div className="mt-2">
              <span className="text-4xl font-extrabold tracking-[-0.04em]">{plan.price}</span>
              {plan.price !== 'Free' && plan.price !== 'Custom' && (
                <span className="text-gray-500 text-sm">/month</span>
              )}
            </div>
            <p className="text-sm text-gray-500 mt-2">{plan.desc}</p>
            <ul className="mt-6 space-y-3 flex-1">
              {plan.features.map(f => (
                <li key={f} className="flex items-center gap-2 text-sm">
                  <span className="text-green-500">✓</span> {f}
                </li>
              ))}
            </ul>
            <button className={\`mt-8 h-10 w-full rounded-md text-sm font-medium
              \${plan.highlight
                ? 'bg-foreground text-background'
                : 'border border-[var(--border)] hover:bg-[var(--bg-2)]'}\`}>
              {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}`}/>
<CB title="app/(marketing)/blog/[slug]/page.tsx" code={`import { getPost } from '@/lib/blog';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const post = await getPost(params.slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPost({ params }) {
  const post = await getPost(params.slug);
  if (!post) notFound();

  return (
    <article className="py-16 px-6 max-w-2xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
          <time>{post.date}</time>
          <span>·</span>
          <span>{post.readTime} min read</span>
        </div>
        <h1 className="text-4xl font-extrabold tracking-[-0.04em] leading-tight">
          {post.title}
        </h1>
        <div className="flex items-center gap-3 mt-6">
          <img src={post.author.avatar} className="w-8 h-8 rounded-full" alt="" />
          <div>
            <p className="text-sm font-medium">{post.author.name}</p>
            <p className="text-xs text-gray-500">{post.author.role}</p>
          </div>
        </div>
      </div>

      {/* Prose container — style markdown/MDX content */}
      <div className="prose-geist space-y-6 text-base leading-relaxed text-gray-800 dark:text-gray-200">
        {post.content}
      </div>
    </article>
  );
}`}/>
<CB title="File Structure" code={`app/
├── (marketing)/layout.tsx     ← Topbar, max-w-[1200px]
│   ├── page.tsx  ├── pricing/page.tsx  └── blog/[slug]/page.tsx
├── (dashboard)/layout.tsx     ← Sidebar + topbar
│   ├── page.tsx  ├── projects/page.tsx  └── settings/page.tsx
├── (auth)/login/page.tsx  └── signup/page.tsx
├── layout.tsx  ← Root: fonts, ThemeProvider, Toaster
├── template.tsx ← Page transition animation
├── globals.css  ├── not-found.tsx  └── error.tsx
components/ui/   ← button, input, modal, status-dot (from Component Files tab)
components/nav/  ← sidebar, topbar, breadcrumbs
lib/             ← cn.ts, theme-provider.tsx, toast setup, focus-trap.ts`}/>
</div>}

{/* ═══ COMPONENT PICKER ═══ */}
{a==="decide"&&<div><H2>Component Picker</H2><P>"I need to..." → use this component. Search or scroll. Geist has 55 components — this covers the most-used ones.</P>
{(()=>{const[q,sq]=useState("");const items=[
["Show a deployment/build status","StatusDot","5 states: queued(gray) · building(amber+pulse) · ready(green) · error(red) · canceled(gray). Always pair with text label."],
["Show loading placeholder while fetching","Skeleton","Must mirror final layout shape exactly. Use animate-pulse. Variants: fixed-size, wrapping children, pill, rounded, squared, no-animation."],
["Confirm a destructive/irreversible action","Modal","Centered dialog with backdrop blur. Focus trap + Esc close + scroll lock. Type-to-confirm for deletes. Use error variant on confirm button."],
["Show a detail/filter panel from the side","Sheet / Drawer","Sheet: side panel from any edge (top/right/bottom/left via side prop), any viewport. Drawer: mobile-only bottom sheet with drag handle + custom height. Use Sheet for desktop detail panels, Drawer for mobile modals."],
["Label, categorize, or tag something","Badge / Pill","Badge: 8 colors (gray/blue/purple/amber/red/pink/green/teal) × solid+subtle + inverted. 3 sizes. Pill: link component based on Badge styling — rounded-full, for clickable tags."],
["Collect qualitative user feedback","Feedback","5 emoji emotion selector + optional textarea. Desktop = popover anchored to trigger. Mobile = inline below trigger."],
["Show a transient notification","Toast","Auto-dismisses after ~5s. 4 types: default, success, warning, error. Optional action button ('Undo', 'View'). Use sonner library. Position: bottom-right."],
["Show a persistent inline message","Note","12 types (default/secondary/tertiary/success/warning/error/alert/lite/ghost/violet/cyan) × outlined+filled. Action button. Label. 3 sizes."],
["Show an empty/zero-data state","Empty State","Centered: icon + title + description + CTA button. 4 patterns: blank-slate, informational, educational, guide."],
["Collect a single line of text","Input","h-10, 1px border, blue focus ring. Slots: prefix icon, suffix icon/button. Variants: default, search, error."],
["Collect multiple lines of text","Textarea","Same border/focus as Input. ⌘+Enter submits (in forms). Auto-resize optional. Character count optional."],
["Pick one option from a list","Select / Combobox","Select: static dropdown, good for <10 items. Combobox: searchable/filterable, good for 10+ items. Both use menu material shadow."],
["Pick multiple options","Multi Select","Chip-based display. Search to filter. Click chip × to remove. Use for: tags, categories, permissions."],
["Toggle a boolean on/off","Switch","role=switch, aria-checked. Space to toggle. Use for instant-apply settings (not inside forms that have a Save button)."],
["Choose from a few exclusive options","Radio / Choicebox","Radio: 2-5 text options, vertical stack. Choicebox: rich cards with title+description, good for plan selection."],
["Check/uncheck an option","Checkbox","Square check. Can be standalone or in a group. Use inside forms (not for instant-apply — use Switch for that)."],
["Navigate between sibling views","Tabs","Underline indicator with transition. Arrow key navigation. Keep all tab panels mounted. Badge counts optional."],
["Show expandable content sections","Collapse","Animated height transition. Single-open or multi-open mode. Use for: FAQ, settings groups, advanced options."],
["Pick a date or date range","Calendar","Month grid popup. Single date or range selection. Min/max constraints. Disabled dates. Full keyboard navigation."],
["Copy a code snippet to clipboard","Snippet","Dark terminal-style background. Copy button in header. Multi-line support. Optional: no prompt, custom width, filename."],
["Show a right-click or dropdown menu","Context Menu / Menu","material-menu shadow. Grouped items with separators. Keyboard shortcuts right-aligned. Destructive items in red."],
["Show help text on hover","Tooltip","200ms show delay. 6px radius. Max width 200px. Has stem/arrow. role=tooltip + aria-describedby. Esc to dismiss."],
["Show a progress bar","Progress","Horizontal bar. Variants: default, dynamic colors (changes at thresholds), themed, with stops (markers)."],
["Show a score or quota gauge","Gauge","Arc (semicircle) or linear. Color thresholds. Label inside. Use for: storage quota, build score, performance."],
["Display rows of structured data","Table","1px border container. Sticky header. Hover bg on rows. Sort indicators. Pair with Pagination in card footer."],
["Quick-search everything (power user)","Command Menu","⌘K trigger. Full-screen search + categorized results + keyboard shortcuts. Use cmdk library. Nested pages."],
["Show an indeterminate loading state","Spinner","border-2 border-t-foreground rounded-full animate-spin. Use inside buttons during async actions. 16-20px size."],
["Show loading in inline text","Loading Dots","3 dots with staggered bounce animation. Use in: button loading, chat typing indicator, inline status text."],
["Show a user's identity","Avatar","Image with fallback to initials. Group variant: stacked circles with +N overflow. Sizes: sm(24)/md(32)/lg(40)."],
["Navigate back up a page hierarchy","Breadcrumbs","Slash-separated links. Last segment is plain text (current page). Use in dashboard topbar, never in marketing."],
["Display formatted code with highlighting","Code Block","Syntax-highlighted. Copy button. Line numbers optional. Filename header. Dark bg always."],
["Show a keyboard shortcut hint","Keyboard Input","Small bordered inline element. Use for: ⌘K, ⌘S, Esc. Pairs with menu items and tooltips."],
["Page through a large list","Pagination","Previous/Next buttons + page numbers. Show '1-10 of 47'. Place in card footer below table."],
["Show a project or entity card","Entity","Avatar + name + description + metadata row. Clickable. Use in lists of projects, teams, members."],
["Switch between light/dark/system theme","Theme Switcher","3-segment toggle or dropdown. Persists preference. Uses next-themes under the hood."],
["Show a preview of a web page","Browser","Chrome-like frame with URL bar + dots. Use to showcase websites, demos, screenshots inside a realistic frame."],
["Select a value from a range","Slider","Horizontal track + thumb. Supports min/max/step. Use for: opacity, volume, price range filters."],
["Offer a primary action with dropdown","Split Button","Primary button + dropdown chevron for secondary actions. Use for: Deploy (+ Rollback, Promote, etc)."],
["Toggle between grouped options","Toggle","Segmented control (button group). Use for: view mode (grid/list), time range (day/week/month). NOT a Switch."],
["Show a horizontally scrollable area","Scroller","Overflow container with fade edges + optional scroll arrows. Use for: tab overflow, card carousels."],
["Reveal more content in a list","Show More","'Show N more' button that reveals hidden items. Use for: long comment threads, truncated lists."],
["Display a label + value pair","Description","Key-value display. Horizontal or stacked. Use in: settings panels, detail views, metadata sections."],
["Show a phone number input","Phone","Country code dropdown + number input. Validates international formats. Flag icons for country selector."],
["Show a hoverable info card on an entity","Context Card","Popover card that appears on hover. Shows preview of linked entity. Use for: user cards, project previews."],
["Show a relative timestamp","Relative Time Card","'2 minutes ago' with hover to show full date. Auto-updates. Use in: activity feeds, deployment lists."],
["Show a project deployment banner","Project Banner","Horizontal banner at top of project page. Shows deploy status, branch, commit message. Dismissible."],
];
const f=items.filter(([n,c,dd])=>{const s=q.toLowerCase();return n.toLowerCase().includes(s)||c.toLowerCase().includes(s)||dd.toLowerCase().includes(s)});
return<div><input className="vinput" value={q} onChange={e=>sq(e.target.value)} placeholder='Search: "loading", "feedback", "table", "delete"...' style={{width:"100%",height:"32px",padding:"0 10px",border:`1px solid ${bdr}`,borderRadius:"6px",background:"transparent",color:fg,fontSize:"11px",marginBottom:"10px"}}/><div style={{display:"flex",flexDirection:"column",gap:"2px"}}>{f.map(([n,c,dd],i)=><div key={i} style={{display:"grid",gridTemplateColumns:"220px 110px 1fr",gap:"6px",padding:"5px 8px",border:`1px solid ${b}`,borderRadius:"4px",alignItems:"start"}}><div style={{fontSize:"9.5px"}}>{n}</div><div style={{fontSize:"9.5px",fontWeight:700,color:"#0070F3"}}>{c}</div><div style={{fontSize:"8px",color:sub,lineHeight:1.4}}>{dd}</div></div>)}</div><div style={{fontSize:"9px",color:sub,marginTop:"8px"}}>{f.length} of {items.length} components shown</div></div>})()}
</div>}

{/* ═══ SPACING ═══ */}
{a==="spacing"&&<div><H2>Spacing Rules</H2><P>Exact values for every context. Organized by where you are in the UI.</P>
<H3>Visual Reference (8px base grid)</H3>
<div style={{display:"flex",gap:"4px",flexWrap:"wrap",marginBottom:"12px"}}>{[[1,4],[2,8],[3,12],[4,16],[5,20],[6,24],[8,32],[10,40],[12,48],[16,64],[20,80],[24,96],[32,128]].map(([tw,px])=><div key={tw} style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"2px"}}><div style={{width:`${Math.min(px,64)}px`,height:"20px",background:"#0070F3",borderRadius:"2px",opacity:0.7}}/><span style={{fontSize:"7px",color:sub,fontFamily:"monospace"}}>{tw}={px}px</span></div>)}</div>
<H3>Page-Level</H3>
<CB title="page-spacing" code={`Marketing hero padding:     py-24 (96px) to py-32 (128px)
Marketing section padding:  py-16 (64px) to py-24 (96px)
Dashboard page padding:     p-6 (24px)
Auth page layout:           w-[380px] mx-auto py-20 (80px top/bottom)
Max content width:          max-w-[1200px] for marketing
                            Full-width (no max) for dashboard content area
Constrained text:           max-w-2xl (672px) for centered marketing copy
                            max-w-sm (384px) for form inputs in settings`}/>
<H3>Cards & Containers</H3>
<CB title="card-spacing" code={`Card body:            p-6 (24px)  — consistent in all cards
Card footer:          px-6 py-3 (24px horizontal, 12px vertical)
Card border-radius:   rounded-lg (8px) dashboard, rounded-xl (12px) marketing
Card-to-card gap:     gap-4 (16px) dense layout, gap-6 (24px) normal
Settings cards stack: space-y-8 (32px) between setting sections
Card with table:      No body padding — table fills to edges`}/>
<H3>Forms</H3>
<CB title="form-spacing" code={`Label → input:        space-y-1.5 (6px) on wrapper div
Input height:         h-10 (40px) standard, h-8 (32px) compact/inline
Input padding:        px-3 (12px) horizontal
Input border-radius:  rounded-md (6px)
Field → field gap:    space-y-4 (16px) between complete field groups
Input → error msg:    mt-1 (4px)
Input → hint text:    mt-1 (4px)
Form section title:   mb-6 (24px) from heading to first field
Submit button area:   mt-6 (24px) from last field to button`}/>
<H3>Buttons</H3>
<CB title="button-spacing" code={`            sm          md (default)    lg
Height:     h-8 (32px)  h-10 (40px)    h-12 (48px)
Padding:    px-3 (12px) px-4 (16px)    px-8 (32px)
Font:       text-xs     text-sm        text-sm
Icon gap:   gap-1.5     gap-2          gap-2
Radius:     rounded-md (6px) everywhere EXCEPT:
            rounded-full (9999px) on marketing CTA buttons

Button groups:  gap-2 (8px)  for same-level actions (Cancel + Save)
                gap-3 (12px) for primary + secondary (Deploy + Demo)`}/>
<H3>Navigation</H3>
<CB title="nav-spacing" code={`Navbar height:        h-16 (64px) marketing, h-12 (48px) dashboard
Sidebar width:        w-60 (240px)
Nav link padding:     px-3 py-1.5 (12px × 6px)
Nav link spacing:     space-y-0.5 (2px) — near-touching, let bg highlight separate
Nav section label:    mb-2 (8px) below section heading
Breadcrumb gap:       gap-1.5 (6px) between items and separators`}/>
<H3>Text & Typography</H3>
<CB title="text-spacing" code={`Heading → paragraph:  mt-4 (16px)      after h1-h6 before body text
Heading → subhead:    mt-1 (4px)       for subtitle/description under heading
Paragraph → para:    space-y-4 (16px)  between paragraphs
Section title → body: mb-8 (32px)      to mb-16 (64px) for marketing sections
Stat value → label:   mt-1 (4px)       small gap, they're one unit`}/>
<H3>Tables, Modals, Badges</H3>
<CB title="other-spacing" code={`TABLE  cell-x: px-4 (16px)→px-5 (20px)  header-y: py-2.5  body-y: py-3  rows: divide-y
MODAL  width: max-w-md (448px)  body: p-6  footer: px-6 py-4  radius: rounded-xl (12px)
TOAST  padding: p-4  gap between stacked: gap-2  offset from edge: 24px
BADGE  padding: px-2 py-0.5  font: text-xs  radius: rounded-full
ICONS  in buttons: w-4 h-4  standalone: w-5 h-5  icon→text gap: gap-2 (8px)`}/>
</div>}

{/* ═══ COMPOSITIONS ═══ */}
{a==="compose"&&<div><H2>Compositions</H2><P>How components nest in real UI. 6 common patterns with code.</P>
<CB title="1. Table in Card (most common dashboard pattern)" code={`<div className="rounded-lg border overflow-hidden">
  <div className="px-5 py-3 border-b flex justify-between items-center">
    <h2 className="text-sm font-semibold">Projects</h2>
    <div className="flex gap-2">
      <input className="h-8 w-48 px-3 text-xs border rounded-md" placeholder="Search..." />
      <button className="h-8 px-3 text-xs bg-foreground text-background rounded-md">New</button>
    </div>
  </div>
  <table className="w-full text-sm">...</table>
  <div className="px-5 py-3 border-t bg-[var(--bg-2)] flex justify-between items-center">
    <span className="text-xs text-gray-500">1-10 of 47</span>
    <Pagination />
  </div>
</div>`}/>
<CB title="2. Form in Modal (create/edit flows)" code={`<Modal title="Create Project" description="Deploy from a Git repository.">
  <div className="space-y-4">
    <Input label="Project Name" placeholder="my-awesome-project" />
    <div className="space-y-1.5">
      <label className="text-sm font-medium">Framework</label>
      <Select options={['Next.js','Remix','Astro','Vite']} />
    </div>
    <Input label="Root Directory" defaultValue="./" hint="Leave ./ for monorepo root" />
  </div>
  <ModalActions>
    <Button variant="secondary" onClick={close}>Cancel</Button>
    <Button onClick={create} loading={creating}>Create</Button>
  </ModalActions>
</Modal>`}/>
<CB title="3. Loading → Empty → Error → Data (trifecta)" code={`function ProjectList() {
  const { data, isLoading, error } = useProjects();

  if (isLoading) return (
    <div className="space-y-3">{[1,2,3].map(i => <CardSkeleton key={i} />)}</div>
  );
  if (error) return (
    <Note type="error" action={{ label: 'Retry', onClick: refetch }}>
      Failed to load: {error.message}
    </Note>
  );
  if (data.length === 0) return (
    <EmptyState icon={<FolderIcon />} title="No Projects"
      description="Import a Git repo to get started."
      action={<Button onClick={openImport}>Import Project</Button>} />
  );
  return (
    <div className="grid grid-cols-3 gap-4">
      {data.map(p => <ProjectCard key={p.id} project={p} />)}
    </div>
  );
}`}/>
<CB title="4. Sidebar + TopBar + Breadcrumbs (full navigation)" code={`<div className="flex h-screen">
  <Sidebar team={team} activeProject={project} />
  <div className="flex-1 flex flex-col overflow-hidden">
    <header className="h-12 px-6 flex items-center gap-4 border-b shrink-0">
      <Breadcrumbs segments={[
        { label: team.name, href: '/dashboard' },
        { label: project.name, href: '/p/' + project.slug },
        { label: 'Settings' },
      ]} />
      <div className="ml-auto flex items-center gap-3">
        <button className="h-8 px-3 text-xs border rounded-md">Feedback</button>
        <Avatar src={user.avatar} size="sm" />
      </div>
    </header>
    <main className="flex-1 overflow-y-auto p-6">{children}</main>
  </div>
</div>`}/>
<CB title="5. Tabs + Content (settings sections)" code={`<div>
  <Tabs value={tab} onChange={setTab}>
    <Tab value="general">General</Tab>
    <Tab value="env">Environment Variables <Badge>12</Badge></Tab>
    <Tab value="domains">Domains</Tab>
    <Tab value="danger">Advanced</Tab>
  </Tabs>
  <div className="mt-6 space-y-8">
    {tab === 'general' && <>
      <SettingsCard title="Project Name" footer={<Button>Save</Button>}>
        <Input defaultValue={project.name} />
      </SettingsCard>
      <SettingsCard title="Build Command" footer={<Button>Save</Button>}>
        <Input defaultValue="next build" prefix={<TerminalIcon />} />
      </SettingsCard>
    </>}
    {tab === 'env' && <EnvVarEditor vars={envVars} />}
    {tab === 'domains' && <DomainList domains={domains} />}
    {tab === 'danger' && <DangerZone onDelete={deleteProject} />}
  </div>
</div>`}/>
<CB title="6. Search + Filter + Results (data exploration)" code={`<div className="space-y-4">
  <div className="flex gap-3">
    <div className="relative flex-1">
      <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
      <input className="h-10 w-full pl-10 pr-3 rounded-md border text-sm"
        placeholder="Search deployments..." value={query} onChange={e => setQuery(e.target.value)} />
    </div>
    <Select value={statusFilter} onChange={setStatusFilter}
      options={['All','Ready','Building','Error']} />
    <Select value={branchFilter} onChange={setBranchFilter}
      options={['All Branches','main','staging','dev']} />
  </div>
  {filteredResults.length === 0
    ? <EmptyState title="No matching deployments" description="Try adjusting your filters." />
    : <DeploymentTable data={filteredResults} />
  }
</div>`}/>
<CB title="7. Settings Card with Danger Zone" code={`<div className="space-y-6">
  {/* Regular setting */}
  <div className="rounded-lg border border-[var(--border)] overflow-hidden">
    <div className="p-6">
      <h3 className="text-sm font-semibold">Project Name</h3>
      <p className="text-sm text-gray-500 mt-1">Used to identify your project.</p>
      <Input className="mt-4 max-w-sm" defaultValue="my-app" />
    </div>
    <div className="px-6 py-3 border-t border-[var(--border)] bg-[var(--bg-2)] flex justify-between">
      <p className="text-xs text-gray-500 self-center">Max 48 characters.</p>
      <Button size="sm">Save</Button>
    </div>
  </div>

  {/* Danger zone — note the red border treatment */}
  <div className="rounded-lg border border-red-500/30 overflow-hidden">
    <div className="p-6">
      <h3 className="text-sm font-semibold text-red-500">Delete Project</h3>
      <p className="text-sm text-gray-500 mt-1">
        This will permanently delete the project and all its deployments.
      </p>
    </div>
    <div className="px-6 py-3 border-t border-red-500/15 bg-red-500/5 flex justify-end">
      <Button variant="error" size="sm">Delete Project</Button>
    </div>
  </div>
</div>`}/>
<CB title="8. Header + Badge + Action Row" code={`// Common in dashboard page tops
<div className="flex items-center justify-between mb-6">
  <div className="flex items-center gap-3">
    <h1 className="text-xl font-bold tracking-[-0.02em]">Deployments</h1>
    <Badge color="blue" size="sm">{total} total</Badge>
  </div>
  <div className="flex items-center gap-2">
    <Button variant="secondary" size="sm" prefix={<FilterIcon />}>Filter</Button>
    <Button size="sm" prefix={<PlusIcon />}>New Deployment</Button>
  </div>
</div>`}/>
<CB title="9. Auth Card with Social + Divider + Form" code={`<div className="w-[380px] mx-auto py-20">
  <div className="text-center mb-8">
    <span className="text-2xl">▲</span>
    <h1 className="text-xl font-bold tracking-[-0.02em] mt-4">Sign In</h1>
    <p className="text-sm text-gray-500 mt-1">Welcome back.</p>
  </div>

  {/* Social login */}
  <div className="space-y-2 mb-6">
    <button className="w-full h-10 border border-[var(--border)] rounded-md text-sm
      flex items-center justify-center gap-2 hover:bg-[var(--bg-2)]">
      <GitHubIcon className="w-4 h-4" /> Continue with GitHub
    </button>
    <button className="w-full h-10 border border-[var(--border)] rounded-md text-sm
      flex items-center justify-center gap-2 hover:bg-[var(--bg-2)]">
      <GoogleIcon className="w-4 h-4" /> Continue with Google
    </button>
  </div>

  {/* Divider */}
  <div className="flex items-center gap-3 mb-6">
    <div className="flex-1 h-px bg-[var(--border)]" />
    <span className="text-xs text-gray-500">or</span>
    <div className="flex-1 h-px bg-[var(--border)]" />
  </div>

  {/* Email form */}
  <form className="space-y-4">
    <Input label="Email" type="email" placeholder="you@example.com" />
    <Input label="Password" type="password" />
    <Button className="w-full">Sign In</Button>
  </form>
  <p className="text-xs text-gray-500 text-center mt-6">
    Don't have an account? <a href="/signup" className="text-foreground underline underline-offset-4">Sign up</a>
  </p>
</div>`}/>
</div>}

{/* ═══ DARK MODE ═══ */}
{a==="darkmode"&&<div><H2>Dark Mode</H2><P>Step-by-step implementation with actual code for every fix.</P>
<H3>Setup (3 files)</H3>
<CB title="1. globals.css" code={`:root {
  color-scheme: light;
  --background: #ffffff; --foreground: #000000; --bg-2: #fafafa;
  --border: rgba(0, 0, 0, 0.08); --border-hover: rgba(0, 0, 0, 0.12);
}
.dark {
  color-scheme: dark;
  --background: #000000; --foreground: #ffffff; --bg-2: #0a0a0a;
  --border: rgba(255, 255, 255, 0.08); --border-hover: rgba(255, 255, 255, 0.12);
}`}/>
<CB title="2. layout.tsx" code={`// npm install next-themes
import { ThemeProvider } from 'next-themes';

<html lang="en" suppressHydrationWarning>
  <head><meta name="theme-color" content="#000000" /></head>
  <body>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem
      disableTransitionOnChange storageKey="theme">
      {children}
    </ThemeProvider>
  </body>
</html>`}/>
<CB title="3. Theme toggle component" code={`'use client';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="h-8 px-3 text-xs border rounded-md">
      {theme === 'dark' ? '☀ Light' : '● Dark'}
    </button>
  );
}`}/>
<H3>What Breaks + Exact Fix</H3>
<CB title="dark-mode-fixes" code={`PROBLEM: Hardcoded hex colors
  FIX: Replace all color values with CSS custom properties
  FIND: color: #333     →  REPLACE: color: var(--foreground)
  FIND: color: #666     →  REPLACE: color: var(--gray-9)
  FIND: bg: #f5f5f5     →  REPLACE: bg: var(--bg-2)

PROBLEM: PNG logos with white/transparent backgrounds
  FIX: Convert to SVG with fill="currentColor" or provide dark variant
  CODE: <img src={theme === 'dark' ? '/logo-white.svg' : '/logo-dark.svg'} />
  BETTER: <svg fill="currentColor">...</svg>  // auto-adapts

PROBLEM: Box shadows invisible on dark backgrounds
  FIX: Increase opacity or add border fallback
  LIGHT: box-shadow: 0 2px 4px rgba(0,0,0,0.08)
  DARK:  box-shadow: 0 2px 4px rgba(0,0,0,0.3)   // 4x opacity
  BEST:  border: 1px solid var(--border)           // works in both

PROBLEM: Gray text fails contrast on black
  FIX: Use --gray-500 (#737373) as minimum secondary text color
  FAILS AA: #666666 on #000000 = 3.4:1 (need 4.5:1)
  PASSES:   #737373 on #000000 = 4.9:1 ✓

PROBLEM: Browser autofill turns inputs yellow
  FIX: Override in globals.css
  CODE: input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 100px var(--background) inset !important;
    -webkit-text-fill-color: var(--foreground) !important;
    caret-color: var(--foreground);
  }

PROBLEM: Hover/active states too subtle in dark mode
  FIX: Increase opacity for dark hover states
  LIGHT hover: rgba(0, 0, 0, 0.04)   →  DARK hover: rgba(255, 255, 255, 0.06)
  LIGHT active: rgba(0, 0, 0, 0.08)  →  DARK active: rgba(255, 255, 255, 0.10)
  CODE: Handled automatically if using var(--bg-2) for hover backgrounds

PROBLEM: Code blocks become "double dark" (dark code on dark page)
  FIX: Verify syntax theme has a visible background
  CODE: .code-block { background: #0a0a0a; border: 1px solid var(--border); }`}/>
<H3>Testing Checklist</H3>
<CB title="dark-mode-test" code={`□ Toggle between themes on every page
□ Every border visible (not invisible-on-dark)
□ Every box-shadow visible (not invisible-on-dark)
□ Text contrast: run Lighthouse accessibility audit
□ Form inputs: type in every input, check autofill styling
□ Images and logos: verify they work on both backgrounds
□ Code blocks: no double-dark (dark syntax on dark bg)
□ Charts/graphs: verify colors readable on both themes
□ Third-party embeds: Stripe, auth buttons, CMS content
□ Mobile: test with actual iOS/Android dark mode enabled
□ Flash prevention: page load doesn't flash white→dark`}/>
</div>}

{/* ═══ DATA STATES ═══ */}
{a==="states"&&<div><H2>Data States</H2><P>Every data-fetching view needs 4 states designed. Here are templates for 3 common view types.</P>
<H3>Pattern: Card Grid View</H3>
<CB title="card-grid-states.tsx" code={`function ProjectGrid() {
  const { data, isLoading, error } = useProjects();

  // LOADING — 3 skeleton cards matching final card shape
  if (isLoading) return (
    <div className="grid grid-cols-3 gap-4">
      {[1, 2, 3].map(i => (
        <div key={i} className="rounded-lg border p-5 space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[var(--bg-2)] animate-pulse" />
            <div className="space-y-1.5 flex-1">
              <div className="w-24 h-3 rounded bg-[var(--bg-2)] animate-pulse" />
              <div className="w-16 h-2.5 rounded bg-[var(--bg-2)] animate-pulse" />
            </div>
          </div>
          <div className="w-full h-16 rounded bg-[var(--bg-2)] animate-pulse" />
        </div>
      ))}
    </div>
  );

  // ERROR — actionable, specific message
  if (error) return (
    <div className="p-6 rounded-lg border border-red-500/30 bg-red-500/5">
      <p className="text-sm font-medium">Failed to load projects</p>
      <p className="text-sm text-gray-500 mt-1">{error.message}</p>
      <button onClick={retry}
        className="mt-4 h-8 px-4 text-xs font-medium bg-foreground text-background rounded-md">
        Retry
      </button>
    </div>
  );

  // EMPTY — explain value + CTA
  if (data.length === 0) return (
    <div className="flex flex-col items-center py-20 text-center">
      <div className="w-14 h-14 rounded-xl bg-[var(--bg-2)] border
        flex items-center justify-center text-2xl mb-4">📁</div>
      <h3 className="text-base font-semibold">No projects yet</h3>
      <p className="text-sm text-gray-500 mt-1 max-w-xs">
        Import a Git repository or use a template to deploy your first project.
      </p>
      <div className="flex gap-2 mt-6">
        <button className="h-9 px-5 text-sm bg-foreground text-background rounded-md">
          Import Repository
        </button>
        <button className="h-9 px-5 text-sm text-blue-500">
          Browse Templates →
        </button>
      </div>
    </div>
  );

  // POPULATED
  return (
    <div className="grid grid-cols-3 gap-4">
      {data.map(p => <ProjectCard key={p.id} project={p} />)}
    </div>
  );
}`}/>
<H3>Pattern: Table View</H3>
<CB title="table-states.tsx" code={`function DeploymentTable() {
  const { data, isLoading, error } = useDeployments();

  if (isLoading) return (
    <div className="rounded-lg border overflow-hidden">
      <div className="px-5 py-3 border-b bg-[var(--bg-2)]">
        <div className="w-24 h-3 rounded bg-[var(--bg-2)] animate-pulse" />
      </div>
      {[1,2,3,4,5].map(i => (
        <div key={i} className="px-5 py-3 border-b flex items-center gap-4">
          <div className="w-6 h-6 rounded-full bg-[var(--bg-2)] animate-pulse" />
          <div className="w-32 h-3 rounded bg-[var(--bg-2)] animate-pulse" />
          <div className="w-16 h-3 rounded bg-[var(--bg-2)] animate-pulse ml-auto" />
        </div>
      ))}
    </div>
  );

  if (error) return <Note type="error" action={{ label: 'Retry', onClick: retry }}>{error.message}</Note>;

  if (data.length === 0) return (
    <EmptyState icon="🚀" title="No deployments" description="Push to Git to trigger your first deployment."
      action={<Button>Import Repository</Button>} />
  );

  return <Table data={data} columns={columns} />;
}`}/>
<H3>Pattern: Single Entity View</H3>
<CB title="entity-states.tsx" code={`function ProjectDetail({ id }) {
  const { data: project, isLoading, error } = useProject(id);

  if (isLoading) return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-lg bg-[var(--bg-2)] animate-pulse" />
        <div className="space-y-2">
          <div className="w-48 h-5 rounded bg-[var(--bg-2)] animate-pulse" />
          <div className="w-32 h-3 rounded bg-[var(--bg-2)] animate-pulse" />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {[1,2,3,4].map(i => <div key={i} className="h-24 rounded-lg bg-[var(--bg-2)] animate-pulse" />)}
      </div>
    </div>
  );

  // 404 — entity not found (different from error)
  if (error?.status === 404) return (
    <div className="text-center py-20">
      <h2 className="text-xl font-semibold">Project not found</h2>
      <p className="text-sm text-gray-500 mt-2">It may have been deleted or you don't have access.</p>
      <Link href="/dashboard" className="mt-6 h-9 px-5 inline-flex items-center text-sm bg-foreground text-background rounded-md">
        Go to Dashboard
      </Link>
    </div>
  );

  if (error) return <Note type="error">{error.message}</Note>;

  return <ProjectDashboard project={project} />;
}`}/>
<H3>Skeleton Design Rules</H3>
<CB title="skeleton-rules" code={`1. MIRROR SHAPE — skeleton matches populated layout exactly
   Avatar circle → rounded-full skeleton. Text → rounded rectangle same height.

2. ANIMATE — always animate-pulse (2s ease-in-out infinite)

3. VARY WIDTHS — don't make every skeleton the same width:
   Title:     w-48 h-4 (wider)
   Subtitle:  w-32 h-3 (narrower)
   Paragraph: w-full h-3, then w-3/4 h-3, then w-5/6 h-3

4. MATCH COUNT — show typical populated count:
   Table: 5 skeleton rows (not 1, not 20)
   Card grid: 3-4 cards
   List: 3-5 items

5. DON'T SKELETON CHROME — navbar, sidebar, tabs stay rendered.
   Only skeleton the content area that is actually loading.

6. OPTIONAL SHOW-DELAY — delay skeleton by 150ms to avoid flash on fast loads:
   const showSkeleton = useDelayed(isLoading, 150);
   if (isLoading && !showSkeleton) return null; // brief invisible state
   if (showSkeleton) return <Skeleton />;

7. SUSPENSE INTEGRATION — use React Suspense for automatic skeleton:
   <Suspense fallback={<ProjectGridSkeleton />}>
     <ProjectGrid />
   </Suspense>`}/>
</div>}

{/* ═══ ANTI-PATTERNS ═══ */}
{a==="anti"&&<div><H2>Anti-Patterns</H2><P>Fix these during migration. Each has the wrong version and the correct replacement.</P>
<div style={{display:"flex",flexDirection:"column",gap:"4px"}}>{[
["❌ Box shadows on cards → Use 1px border","Cards NEVER have box-shadow. Only menus, modals, tooltips get shadows. If your card has shadow-md, replace with border border-[var(--border)]."],
["❌ bg-blue-500 buttons → Use bg-foreground","Primary button is black (light) / white (dark). NOT blue. Blue is for links and focus rings only. <button className='bg-foreground text-background'>"],
["❌ rounded-lg on buttons → Use rounded-md (6px)","Buttons are always rounded-md (6px). Marketing hero CTAs use rounded-full (pill). Never rounded-lg or rounded-xl on buttons."],
["❌ Gray page backgrounds (#f5f5f5) → Use pure #000/#fff","Page background is var(--background) = pure black or pure white. Use var(--bg-2) = #fafafa/#0a0a0a ONLY for card footers and table headers."],
["❌ 2px+ borders → Always 1px","Every border in Geist is 1px. The only 2px element is the focus ring. Border color is always rgba (0.08 opacity), never a hex gray."],
["❌ transition: all → Specify properties","transition: all causes layout thrashing and animates things you don't want. Always: transition-colors, transition-opacity, transition-transform."],
["❌ Large border-radius on cards → 6-8px max","Marketing containers: 0-4px. Dashboard cards: 6-8px (rounded-lg). Only avatars and pills use rounded-full. Never 16px+ on cards."],
["❌ Icon-only buttons → Add text or aria-label","Every icon button needs either adjacent visible text or an aria-label. No ambiguous icon-only buttons. Tooltip on hover is not sufficient."],
["❌ Color-only status (red dot = error) → Add text","Never rely on color alone. Always pair color with a text label ('Error') or icon. Colorblind users cannot distinguish red/green dots."],
["❌ Dead-end empty states → Always include CTA","An empty state without a call-to-action is a dead end. Always tell the user what to do next: 'Import Repository', 'Create Project', etc."],
["❌ Placeholder text as label → Use <label>","Placeholder disappears when user types. Use a real <label> element above the input. Placeholder is only for format hints like 'you@example.com'."],
["❌ Missing Geist font → Install first","The entire visual system depends on Geist Sans. Without it, letter-spacing and weights look wrong. npm install geist is step 1."],
["❌ Arbitrary z-index (z-50, z-[999]) → Use scale","Use the 9-level scale: base(0) sticky(100) overlay(400) modal(500) toast(700) tooltip(800) max(999). Never make up z-index values."],
["❌ Disabled button without explanation → Tell user why","A grayed-out button with no context is frustrating. Add a tooltip or adjacent text explaining why it's disabled: 'Enter a project name to continue'."],
["❌ Inconsistent loading states → Skeleton everything together","If one card in a grid is loading, ALL cards show skeleton. Never mix loaded cards and skeleton cards in the same container."],
["❌ box-sizing not set → Add to reset","globals.css must have: *, *::before, *::after { box-sizing: border-box; } Without this, padding breaks every layout calculation."],
["❌ Animating width/height → Use transform","Never animate width, height, top, left, margin, or padding. Only animate transform and opacity. Everything else causes layout recalculation."],
["❌ Fixed pixel font sizes → Use Tailwind classes","Don't use font-size: 13px inline. Use text-xs (12px), text-sm (14px), text-base (16px). The type scale is carefully designed."],
["❌ Scroll jank on modals → Lock body scroll","When a modal is open, add overflow: hidden to body. Otherwise the page scrolls behind the modal. Restore on close."],
["❌ No focus-visible styles → Add ring","Every interactive element needs :focus-visible styling. Use: focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:ring-offset-2"],
].map(([bad,fix],i)=><div key={i} style={{padding:"6px 8px",border:`1px solid ${b}`,borderRadius:"4px"}}><div style={{fontSize:"9.5px",fontWeight:700}}>{bad}</div><div style={{fontSize:"8px",color:sub,marginTop:"2px",lineHeight:1.4}}>{fix}</div></div>)}</div>
<H3>Code Before / After</H3>
<CB title="Card — wrong vs right" code={`// ❌ WRONG — shadow, rounded-xl, gray bg, colored text
<div className="rounded-xl shadow-lg bg-gray-50 p-6">
  <h3 className="text-blue-600 font-bold text-lg">Project</h3>
  <p className="text-gray-600">Description</p>
  <button className="bg-blue-500 text-white rounded-lg px-4 py-2 mt-4">Deploy</button>
</div>

// ✅ RIGHT — border only, rounded-lg, white bg, foreground colors
<div className="rounded-lg border border-[var(--border)] overflow-hidden">
  <div className="p-6">
    <h3 className="text-sm font-semibold">Project</h3>
    <p className="text-sm text-gray-500 mt-1">Description</p>
  </div>
  <div className="px-6 py-3 border-t border-[var(--border)] bg-[var(--bg-2)] flex justify-end">
    <button className="h-8 px-3 text-xs bg-foreground text-background rounded-md">Deploy</button>
  </div>
</div>`}/>
<CB title="Form — wrong vs right" code={`// ❌ WRONG — no label, wrong focus, missing error, wrong radius
<input
  className="w-full p-3 rounded-xl border-2 border-gray-300
    focus:border-blue-500 focus:outline-none"
  placeholder="Project name"
/>

// ✅ RIGHT — proper label, 1px border, ring focus, error support, correct height
<div className="space-y-1.5">
  <label htmlFor="name" className="text-sm font-medium">Project Name</label>
  <input
    id="name"
    className="h-10 w-full px-3 rounded-md border border-[var(--border)]
      bg-transparent text-sm placeholder:text-gray-400
      focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15 outline-none"
    placeholder="my-project"
  />
  {error && <p className="text-xs text-red-500" role="alert">{error}</p>}
</div>`}/>
<CB title="Table — wrong vs right" code={`// ❌ WRONG — striped, colored header, loose spacing, shadow
<table className="shadow-md rounded-xl overflow-hidden">
  <thead className="bg-blue-500 text-white">
    <tr><th className="p-4 text-left">Name</th><th>Status</th></tr>
  </thead>
  <tbody>{items.map((item, i) =>
    <tr className={i % 2 ? 'bg-gray-50' : ''}><td className="p-4">{item.name}</td></tr>
  )}</tbody>
</table>

// ✅ RIGHT — border container, neutral header, hover rows, tight padding
<div className="rounded-lg border border-[var(--border)] overflow-hidden">
  <table className="w-full text-sm">
    <thead>
      <tr className="border-b border-[var(--border)] bg-[var(--bg-2)]">
        <th className="px-5 py-2.5 text-left text-xs font-medium text-gray-500">Name</th>
        <th className="px-5 py-2.5 text-left text-xs font-medium text-gray-500">Status</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-[var(--border)]">
      {items.map(item =>
        <tr key={item.id} className="hover:bg-[var(--bg-2)] transition-colors">
          <td className="px-5 py-3 font-medium">{item.name}</td>
          <td className="px-5 py-3"><StatusDot state={item.status} /></td>
        </tr>
      )}
    </tbody>
  </table>
</div>`}/>
<CB title="Modal — wrong vs right" code={`// ❌ WRONG — no focus trap, no escape handler, no scroll lock, no backdrop
<div className="fixed inset-0 z-50 flex items-center justify-center">
  <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md">
    <h2 className="text-xl font-bold">Confirm</h2>
    <button onClick={close}>Close</button>
  </div>
</div>

// ✅ RIGHT — backdrop blur, focus trap, Esc, scroll lock, ARIA, proper footer
<div className="fixed inset-0 z-[500] flex items-center justify-center"
  role="dialog" aria-modal="true" aria-labelledby="modal-title"
  onKeyDown={e => e.key === 'Escape' && onClose()}>
  <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
  <div ref={trapRef} className="relative bg-background rounded-xl border
    border-[var(--border)] shadow-[var(--shadow-modal)] w-full max-w-md">
    <div className="px-6 py-4 border-b border-[var(--border)]">
      <h2 id="modal-title" className="text-base font-semibold">Delete Project</h2>
    </div>
    <div className="px-6 py-4">
      <p className="text-sm text-gray-500">This action cannot be undone.</p>
    </div>
    <div className="px-6 py-3 border-t border-[var(--border)] bg-[var(--bg-2)]
      flex justify-end gap-2 rounded-b-xl">
      <button onClick={onClose} className="h-8 px-3 text-xs border rounded-md">Cancel</button>
      <button onClick={onConfirm} className="h-8 px-3 text-xs bg-[#EE0000]
        text-white rounded-md">Delete</button>
    </div>
  </div>
</div>`}/>
</div>}


{/* ═══ DESIGN BLOCKS ═══ */}
{a==="blocks"&&<div><H2>Design Blocks</H2><P>15 rendered blocks. All respond to dark/light toggle.</P>
<BW title="Navbar" desc="64px sticky blur backdrop" d={d}><div style={{background:bg,borderBottom:`1px solid ${bdr}`,padding:"0 20px",height:"56px",display:"flex",alignItems:"center",justifyContent:"space-between"}}><div style={{display:"flex",alignItems:"center",gap:"20px"}}><span style={{fontSize:"16px"}}>▲</span><div style={{display:"flex",gap:"14px",fontSize:"12px"}}><span style={{color:fg,fontWeight:600}}>Overview</span>{["Integrations","Activity","Domains"].map(l=><span key={l} style={{color:sub}}>{l}</span>)}</div></div><div style={{display:"flex",gap:"10px"}}><div style={{height:"28px",padding:"0 10px",fontSize:"11px",border:`1px solid ${bdr}`,borderRadius:"6px",display:"flex",alignItems:"center",color:sub}}>Feedback</div><div style={{width:"24px",height:"24px",borderRadius:"9999px",background:"#525252"}}/></div></div></BW>
<BW title="Hero" desc="-0.04em tracking, pill CTAs, badge+subtitle" d={d}><div style={{padding:"56px 28px",textAlign:"center"}}><div style={{display:"flex",justifyContent:"center",gap:"6px",marginBottom:"16px",alignItems:"center"}}><span style={{fontSize:"10px",padding:"2px 10px",borderRadius:"9999px",border:`1px solid ${bdr}`,color:sub}}>New</span><span style={{fontSize:"11px",color:sub}}>Fluid Compute</span></div><h1 style={{fontSize:"44px",fontWeight:800,letterSpacing:"-0.04em",lineHeight:1.05,maxWidth:"560px",margin:"0 auto"}}>Your complete platform for the web</h1><p style={{fontSize:"15px",color:sub,margin:"14px auto 0",maxWidth:"400px"}}>Build, scale, and secure a faster web.</p><div style={{display:"flex",gap:"10px",justifyContent:"center",marginTop:"28px"}}><button className="vbtn" style={{background:fg,color:bg,height:"42px",padding:"0 24px",fontSize:"13px",borderRadius:"9999px",border:"none",boxShadow:"0 4px 14px rgba(0,0,0,.25)"}}>Start Deploying</button><button className="vbtn" style={{background:"transparent",color:fg,height:"42px",padding:"0 24px",fontSize:"13px",borderRadius:"9999px",border:`1px solid ${bdrH}`}}>Get a Demo</button></div></div></BW>
<BW title="Stats Row" desc="4-col KPI with trend indicators" d={d}><div style={{padding:"14px",display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:"8px"}}>{[["12,847","Deploys","+12%",true],["8.2s","Build","−23%",true],["847GB","Bandwidth","+5%",false],["142","Projects","+3",true]].map(([v,l,t,u],i)=><div key={i} style={{padding:"14px",border:`1px solid ${bdr}`,borderRadius:"6px"}}><div style={{fontSize:"22px",fontWeight:800,letterSpacing:"-0.04em"}}>{v}</div><div style={{fontSize:"9px",color:sub,marginTop:"2px"}}>{l} <span style={{color:u?"#17C964":"#F5A623"}}>{t}</span></div></div>)}</div></BW>
<BW title="Feature Grid" desc="3-col, 1px gap, icon+title+desc" d={d}><div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"1px",background:bdr}}>{[["⚡","Edge Functions","Zero cold starts globally."],["🔒","Firewall","DDoS + rate limiting."],["📊","Analytics","Core Web Vitals."]].map(([ic,t,dd],i)=><div key={i} style={{background:bg,padding:"24px 18px"}}><span style={{fontSize:"16px"}}>{ic}</span><div style={{fontSize:"13px",fontWeight:600,marginTop:"6px"}}>{t}</div><div style={{fontSize:"10px",color:sub,marginTop:"2px"}}>{dd}</div></div>)}</div></BW>
<BW title="Pricing Cards" desc="3-col, highlighted center, checkmarks" d={d}><div style={{padding:"16px",display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"8px"}}>{[{t:"Hobby",p:"Free",f:["100GB BW","HTTPS","Community"],hi:false},{t:"Pro",p:"$20",f:["1TB BW","Password","Email Support"],hi:true},{t:"Enterprise",p:"Custom",f:["Custom BW","SSO","Dedicated"],hi:false}].map((p,i)=><div key={i} style={{border:p.hi?"2px solid #0070F3":`1px solid ${bdr}`,borderRadius:"8px",padding:"16px 12px",position:"relative"}}>{p.hi&&<div style={{position:"absolute",top:"-9px",left:"50%",transform:"translateX(-50%)",background:"#0070F3",color:"#fff",fontSize:"7px",fontWeight:600,padding:"1px 8px",borderRadius:"9999px"}}>Popular</div>}<div style={{fontSize:"11px",fontWeight:600}}>{p.t}</div><div style={{fontSize:"22px",fontWeight:800,letterSpacing:"-0.04em"}}>{p.p}</div><div style={{display:"flex",flexDirection:"column",gap:"4px",margin:"10px 0"}}>{p.f.map((f,j)=><div key={j} style={{fontSize:"10px",display:"flex",gap:"4px"}}><span style={{color:"#17C964"}}>✓</span>{f}</div>)}</div><button className="vbtn" style={{width:"100%",height:"28px",background:p.hi?"#0070F3":"transparent",color:p.hi?"#fff":fg,border:p.hi?"none":`1px solid ${bdr}`,borderRadius:"5px",fontSize:"10px"}}>Get Started</button></div>)}</div></BW>
<BW title="Deployment Card" desc="Status dot, snippet, action buttons" d={d}><div style={{padding:"16px"}}><div style={{border:`1px solid ${bdr}`,borderRadius:"6px",padding:"16px",maxWidth:"400px"}}><div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"12px"}}><div style={{display:"flex",alignItems:"center",gap:"10px"}}><div style={{width:"28px",height:"28px",borderRadius:"9999px",background:"linear-gradient(135deg,#0070F3,#7928CA)"}}/><div><div style={{fontSize:"12px",fontWeight:600}}>my-app</div><div style={{fontSize:"10px",color:sub}}>Production · 2m ago</div></div></div><span style={{display:"flex",alignItems:"center",gap:"4px",fontSize:"10px",color:"#17C964"}}><span style={{width:"6px",height:"6px",borderRadius:"9999px",background:"#17C964"}}/>Ready</span></div><div style={{background:bg2,borderRadius:"4px",padding:"8px 10px",fontFamily:"monospace",fontSize:"11px",color:sub}}>$ vercel --prod</div><div style={{display:"flex",gap:"6px",marginTop:"12px"}}><button className="vbtn" style={{height:"28px",padding:"0 12px",fontSize:"10px",background:fg,color:bg,border:"none",borderRadius:"5px"}}>Visit</button><button className="vbtn" style={{height:"28px",padding:"0 12px",fontSize:"10px",background:"transparent",color:fg,border:`1px solid ${bdr}`,borderRadius:"5px"}}>Inspect</button></div></div></div></BW>
<BW title="Login / Auth" desc="Centered card, social + email, divider" d={d}><div style={{padding:"32px",display:"flex",justifyContent:"center"}}><div style={{width:"280px"}}><div style={{textAlign:"center",marginBottom:"20px"}}><span style={{fontSize:"22px"}}>▲</span><h2 style={{fontSize:"16px",fontWeight:700,marginTop:"8px"}}>Log in to Vercel</h2></div>{[["⬛","GitHub"],["🟧","GitLab"]].map(([ic,l],i)=><button key={i} className="vbtn" style={{height:"34px",width:"100%",display:"flex",alignItems:"center",justifyContent:"center",gap:"6px",fontSize:"11px",border:`1px solid ${bdr}`,borderRadius:"5px",background:"transparent",color:fg,marginBottom:"6px"}}>{ic} Continue with {l}</button>)}<div style={{display:"flex",alignItems:"center",gap:"8px",margin:"12px 0"}}><div style={{flex:1,height:"1px",background:bdr}}/><span style={{fontSize:"10px",color:sub}}>or</span><div style={{flex:1,height:"1px",background:bdr}}/></div><input className="vinput" style={{width:"100%",height:"34px",padding:"0 8px",border:`1px solid ${bdr}`,borderRadius:"5px",background:"transparent",color:fg,fontSize:"11px",marginBottom:"8px"}} placeholder="you@example.com"/><button className="vbtn" style={{width:"100%",height:"34px",background:fg,color:bg,border:"none",borderRadius:"5px",fontSize:"11px",fontWeight:500}}>Continue</button></div></div></BW>
<BW title="Settings Card" desc="Label + input + save footer + danger zone" d={d}><div style={{padding:"14px",display:"flex",flexDirection:"column",gap:"10px"}}><div style={{border:`1px solid ${bdr}`,borderRadius:"6px",overflow:"hidden"}}><div style={{padding:"14px 16px"}}><div style={{fontSize:"12px",fontWeight:600}}>Project Name</div><div style={{fontSize:"10px",color:sub,marginTop:"2px"}}>Used in URLs and dashboard.</div><input className="vinput" defaultValue="my-project" style={{height:"32px",padding:"0 8px",border:`1px solid ${bdr}`,borderRadius:"5px",background:"transparent",color:fg,fontSize:"11px",marginTop:"8px",maxWidth:"240px",width:"100%"}}/></div><div style={{padding:"8px 16px",borderTop:`1px solid ${bdr}`,background:bg2,display:"flex",justifyContent:"flex-end"}}><button className="vbtn" style={{height:"26px",padding:"0 10px",fontSize:"10px",background:fg,color:bg,border:"none",borderRadius:"5px"}}>Save</button></div></div><div style={{border:"1px solid rgba(238,0,0,0.2)",borderRadius:"6px",padding:"14px 16px"}}><div style={{fontSize:"12px",fontWeight:600,color:"#EE0000"}}>Danger Zone</div><div style={{fontSize:"10px",color:sub,marginTop:"2px"}}>Permanently delete this project.</div></div></div></BW>
<BW title="Sidebar" desc="240px, team switcher, active state, user footer" d={d}><div style={{display:"flex"}}><div style={{width:"200px",borderRight:`1px solid ${bdr}`,display:"flex",flexDirection:"column",height:"260px"}}><div style={{padding:"10px 12px",borderBottom:`1px solid ${bdr}`,display:"flex",alignItems:"center",gap:"8px"}}><div style={{width:"22px",height:"22px",borderRadius:"5px",background:"linear-gradient(135deg,#0070F3,#7928CA)"}}/><div style={{fontSize:"11px",fontWeight:600,flex:1}}>Acme Inc</div><span style={{fontSize:"8px",color:sub}}>▼</span></div><div style={{flex:1,padding:"6px"}}>{[["◉","Overview",true],["⊞","Projects",false],["📊","Analytics",false],["⚙","Settings",false]].map(([ic,l,ac],i)=><div key={i} style={{padding:"5px 8px",borderRadius:"4px",fontSize:"11px",display:"flex",alignItems:"center",gap:"6px",background:ac?(d?"rgba(255,255,255,.06)":"rgba(0,0,0,.04)"):"transparent",color:ac?fg:sub,marginBottom:"1px"}}>{ic} {l}</div>)}</div><div style={{padding:"8px 12px",borderTop:`1px solid ${bdr}`,fontSize:"10px",color:sub}}>user@acme.com</div></div><div style={{flex:1,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"10px",color:sub}}>Content</div></div></BW>
<BW title="Modal" desc="Backdrop + confirm input + danger footer" d={d}><div style={{padding:"20px",display:"flex",justifyContent:"center"}}><div style={{width:"100%",maxWidth:"380px",position:"relative"}}><div style={{position:"absolute",inset:0,background:d?"rgba(0,0,0,.6)":"rgba(0,0,0,.3)",borderRadius:"10px"}}/><div style={{position:"relative",background:d?"#111":"#fff",borderRadius:"10px",border:`1px solid ${bdr}`,boxShadow:"0 8px 40px rgba(0,0,0,.2)",margin:"10px"}}><div style={{padding:"12px 16px",borderBottom:`1px solid ${bdr}`}}><div style={{fontSize:"13px",fontWeight:700}}>Delete Project</div><div style={{fontSize:"10px",color:sub,marginTop:"2px"}}>Cannot be undone.</div></div><div style={{padding:"12px 16px"}}><input className="vinput" style={{width:"100%",height:"32px",padding:"0 8px",border:`1px solid ${bdr}`,borderRadius:"5px",background:"transparent",color:fg,fontSize:"11px"}} placeholder="Type my-app"/></div><div style={{padding:"8px 16px",borderTop:`1px solid ${bdr}`,background:bg2,display:"flex",justifyContent:"flex-end",gap:"6px",borderRadius:"0 0 10px 10px"}}><button className="vbtn" style={{height:"28px",padding:"0 10px",fontSize:"10px",background:"transparent",color:fg,border:`1px solid ${bdr}`,borderRadius:"5px"}}>Cancel</button><button className="vbtn" style={{height:"28px",padding:"0 10px",fontSize:"10px",background:"#EE0000",color:"#fff",border:"none",borderRadius:"5px"}}>Delete</button></div></div></div></div></BW>
<BW title="Skeleton" desc="Pulse animation, mirrors card layout" d={d}><div style={{padding:"14px"}}><div style={{border:`1px solid ${bdr}`,borderRadius:"6px",padding:"12px",maxWidth:"320px"}}><div style={{display:"flex",gap:"8px",marginBottom:"10px"}}><div style={{width:"28px",height:"28px",borderRadius:"9999px",background:skBg,animation:"pulse 2s ease-in-out infinite"}}/><div style={{flex:1,display:"flex",flexDirection:"column",gap:"4px"}}><div style={{width:"55%",height:"8px",borderRadius:"3px",background:skBg,animation:"pulse 2s ease-in-out infinite"}}/><div style={{width:"35%",height:"6px",borderRadius:"3px",background:skBg,animation:"pulse 2s ease-in-out infinite"}}/></div></div><div style={{width:"100%",height:"48px",borderRadius:"5px",background:skBg,animation:"pulse 2s ease-in-out infinite"}}/></div></div></BW>
<BW title="Empty State" desc="Icon + title + CTA" d={d}><div style={{padding:"40px 20px",display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center"}}><div style={{width:"40px",height:"40px",borderRadius:"10px",background:bg2,border:`1px solid ${bdr}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"16px",marginBottom:"10px"}}>📁</div><div style={{fontSize:"14px",fontWeight:700}}>No Projects</div><div style={{fontSize:"11px",color:sub,marginTop:"3px"}}>Import a repo to get started.</div><button className="vbtn" style={{marginTop:"12px",height:"28px",padding:"0 14px",fontSize:"10px",background:fg,color:bg,border:"none",borderRadius:"5px"}}>New Project</button></div></BW>
<BW title="Notes (12 types × outline+fill)" d={d}><div style={{padding:"10px",display:"flex",flexDirection:"column",gap:"3px"}}>{[["default",sub,bg2,"Neutral info."],["secondary","#737373",d?"#1a1a1a":"#f5f5f5","Secondary context."],["tertiary","#a3a3a3",d?"#171717":"#fafafa","Tertiary hint."],["success","#17C964",d?"#052e16":"#f0fdf4","Build completed."],["warning","#F5A623",d?"#422006":"#fefce8","Approaching limit."],["error","#EE0000",d?"#450a0a":"#fef2f2","Deploy failed."],["alert","#F5A623",d?"#422006":"#fefce8","Action needed."],["violet","#7928CA",d?"#2e1065":"#f5f3ff","Pro feature."],["cyan","#06B6D4",d?"#083344":"#ecfeff","DNS updated."],["lite",sub,"transparent","Subtle note."],["ghost","#a3a3a3","transparent","Minimal."]].map(([t,c,bgc,m],i)=><div key={i} style={{padding:"4px 8px",borderRadius:"4px",border:`1px solid ${c}30`,background:bgc,display:"flex",alignItems:"center",gap:"6px"}}><span style={{fontSize:"8px",color:c,fontWeight:600,minWidth:"48px"}}>{t}</span><span style={{fontSize:"9px"}}>{m}</span></div>)}</div></BW>
<BW title="Loading Indicators" desc="Dots, spinner, progress" d={d}><div style={{padding:"14px",display:"flex",alignItems:"center",gap:"28px",justifyContent:"center"}}><div style={{textAlign:"center"}}><div style={{display:"flex",gap:"3px",justifyContent:"center"}}>{[0,1,2].map(i=><div key={i} style={{width:"4px",height:"4px",borderRadius:"9999px",background:fg,animation:`dotBounce 1.4s ease-in-out infinite`,animationDelay:`${i*160}ms`}}/>)}</div><div style={{fontSize:"8px",color:sub,marginTop:"3px"}}>Dots</div></div><div style={{textAlign:"center"}}><div style={{width:"14px",height:"14px",border:`2px solid ${bdr}`,borderTopColor:fg,borderRadius:"9999px",animation:"spin .8s linear infinite",margin:"0 auto"}}/><div style={{fontSize:"8px",color:sub,marginTop:"3px"}}>Spin</div></div><div style={{textAlign:"center",flex:1,maxWidth:"120px"}}><div style={{height:"3px",borderRadius:"9999px",background:bg2,overflow:"hidden"}}><div style={{width:"67%",height:"100%",borderRadius:"9999px",background:"#0070F3"}}/></div><div style={{fontSize:"8px",color:sub,marginTop:"3px"}}>67%</div></div></div></BW>
<BW title="Footer" desc="4-col links, copyright" d={d}><div style={{borderTop:`1px solid ${bdr}`,padding:"24px 20px 16px"}}><div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:"16px"}}>{[{t:"Product",l:["Previews","Edge","Analytics"]},{t:"Resources",l:["Docs","Guides","Blog"]},{t:"Company",l:["About","Careers","Press"]},{t:"Legal",l:["Privacy","Terms","SLA"]}].map((c,i)=><div key={i}><div style={{fontSize:"11px",fontWeight:600,marginBottom:"8px"}}>{c.t}</div>{c.l.map((l,j)=><div key={j} style={{fontSize:"10px",color:sub,marginBottom:"4px"}}>{l}</div>)}</div>)}</div><div style={{display:"flex",justifyContent:"space-between",marginTop:"20px",paddingTop:"12px",borderTop:`1px solid ${bdr}`}}><span style={{fontSize:"12px"}}>▲</span><span style={{fontSize:"9px",color:sub}}>© 2026 Vercel, Inc.</span></div></div></BW>
</div>}

{/* ═══ INTERACTIVE ═══ */}
{a==="interact"&&<div><H2>Interactive States</H2><P>Live hover/focus/active/disabled. Try hovering, clicking, and tabbing through everything.</P>
<H3>Button Types × Sizes (Geist shows 5 types × 3 sizes)</H3>
<div style={{display:"grid",gridTemplateColumns:"60px 1fr 1fr 1fr",gap:"4px",alignItems:"center",marginBottom:"14px"}}>
<div/>{["Small (32px)","Medium (40px)","Large (48px)"].map(s=><div key={s} style={{fontSize:"8px",color:sub,textAlign:"center"}}>{s}</div>)}
{[["Primary",{bg:fg,c:bg,brd:"none"}],["Secondary",{bg:"transparent",c:fg,brd:`1px solid ${bdr}`}],["Tertiary",{bg:bg2,c:fg,brd:"none"}],["Error",{bg:"#EE0000",c:"#fff",brd:"none"}],["Warning",{bg:"#F5A623",c:"#fff",brd:"none"}]].map(([n,s])=><>
<div style={{fontSize:"9px",fontWeight:600}}>{n}</div>
{[{h:"32px",px:"12px",fs:"10px"},{h:"40px",px:"16px",fs:"12px"},{h:"48px",px:"32px",fs:"13px"}].map((sz,i)=><div key={i} style={{display:"flex",justifyContent:"center"}}><button className="vbtn" style={{height:sz.h,padding:`0 ${sz.px}`,fontSize:sz.fs,fontWeight:500,background:s.bg,color:s.c,border:s.brd,borderRadius:"6px"}}>{n}</button></div>)}
</>)}
<div style={{fontSize:"9px",fontWeight:600}}>Disabled</div>
{[{h:"32px",px:"12px",fs:"10px"},{h:"40px",px:"16px",fs:"12px"},{h:"48px",px:"32px",fs:"13px"}].map((sz,i)=><div key={i} style={{display:"flex",justifyContent:"center"}}><button className="vbtn" disabled style={{height:sz.h,padding:`0 ${sz.px}`,fontSize:sz.fs,fontWeight:500,background:fg,color:bg,border:"none",borderRadius:"6px"}}>Disabled</button></div>)}
</div>
<H3>Inputs — all states (tab for focus ring)</H3>
<div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr",gap:"6px",marginBottom:"14px"}}>{[["Default","","Type here"],["Filled","my-project",""],["With prefix","","Search..."],["Error","","Required"],["Disabled","disabled","Can't edit"]].map(([l,v,ph],i)=><div key={i}><div style={{fontSize:"8px",fontWeight:600,marginBottom:"2px"}}>{l}</div><div style={{position:"relative"}}>{l==="With prefix"&&<span style={{position:"absolute",left:"8px",top:"50%",transform:"translateY(-50%)",fontSize:"12px",color:sub}}>🔍</span>}<input className="vinput" disabled={l==="Disabled"} defaultValue={v} placeholder={ph} style={{width:"100%",height:"32px",padding:l==="With prefix"?"0 8px 0 28px":"0 8px",border:`1px solid ${l==="Error"?"#EE0000":bdr}`,borderRadius:"5px",background:"transparent",color:l==="Disabled"?sub:fg,fontSize:"10px",opacity:l==="Disabled"?.5:1}}/></div>{l==="Error"&&<div style={{fontSize:"8px",color:"#EE0000",marginTop:"2px"}}>This field is required</div>}</div>)}</div>
<H3>Live Tabs (click to switch)</H3>
{(()=>{const[t,st]=useState(0);return<div><div style={{borderBottom:`1px solid ${bdr}`,display:"flex"}}>{["Overview","Deployments","Analytics","Settings"].map((l,i)=><button key={i} onClick={()=>st(i)} className={`vtab ${i===t?"active":""}`}>{l}</button>)}</div><div style={{padding:"10px",fontSize:"11px",color:sub}}>Content: <strong style={{color:fg}}>{["Overview — stats and recent activity","Deployments — build history and status","Analytics — visitors and performance","Settings — project configuration"][t]}</strong></div></div>})()}
<H3>Form Validation Flow (type an email)</H3>
{(()=>{const[v,sv]=useState("");const err=v.length>0&&!v.includes("@");const ok=v.includes("@")&&v.includes(".");return<div style={{maxWidth:"260px"}}><label style={{fontSize:"9px",fontWeight:600,marginBottom:"3px",display:"block"}}>Email Address</label><input className="vinput" value={v} onChange={e=>sv(e.target.value)} placeholder="you@example.com" style={{width:"100%",height:"32px",padding:"0 8px",border:`1px solid ${err?"#EE0000":ok?"#17C964":bdr}`,borderRadius:"5px",background:"transparent",color:fg,fontSize:"11px"}}/><div style={{fontSize:"9px",marginTop:"3px",color:err?"#EE0000":ok?"#17C964":sub}}>{v===""?"Required field":err?"Must be a valid email address":ok?"✓ Looks good!":"Keep typing..."}</div></div>})()}
<H3>Loading Button (click to simulate deploy)</H3>
{(()=>{const[ld,sld]=useState(false);return<div style={{display:"flex",gap:"8px",alignItems:"center"}}><button className="vbtn" onClick={()=>{sld(true);setTimeout(()=>sld(false),2000)}} style={{height:"34px",padding:"0 18px",fontSize:"11px",fontWeight:500,background:fg,color:bg,border:"none",borderRadius:"6px",minWidth:"110px",display:"flex",alignItems:"center",justifyContent:"center",gap:"5px"}}>{ld?<>{[0,1,2].map(i=><div key={i} style={{width:"4px",height:"4px",borderRadius:"9999px",background:bg,animation:`dotBounce 1.4s ease-in-out infinite`,animationDelay:`${i*160}ms`}}/>)}</>:"Deploy Now"}</button><span style={{fontSize:"9px",color:sub}}>{ld?"Deploying...":"Click to see loading state"}</span></div>})()}
<H3>Badge Colors (8 colors × solid + subtle, + inverted)</H3>
<div style={{display:"flex",gap:"4px",flexWrap:"wrap",marginBottom:"6px"}}>{[["gray","#737373"],["blue","#0070F3"],["purple","#7928CA"],["amber","#F5A623"],["red","#EE0000"],["pink","#FF0080"],["green","#17C964"],["teal","#06B6D4"],["inverted",fg]].map(([n,c])=><span key={n} style={{fontSize:"9px",padding:"2px 8px",borderRadius:"9999px",background:c,color:n==="inverted"?bg:"#fff",fontWeight:500}}>{n}</span>)}</div>
<div style={{display:"flex",gap:"4px",flexWrap:"wrap"}}>{[["gray-subtle","#737373"],["blue-subtle","#0070F3"],["purple-subtle","#7928CA"],["amber-subtle","#F5A623"],["red-subtle","#EE0000"],["pink-subtle","#FF0080"],["green-subtle","#17C964"],["teal-subtle","#06B6D4"]].map(([n,c])=>{const hex=c;return<span key={n} style={{fontSize:"9px",padding:"2px 8px",borderRadius:"9999px",background:hex+"18",color:hex,border:`1px solid ${hex}30`,fontWeight:500}}>{n}</span>})}</div>
<H3>Switch / Toggle (click to flip)</H3>
{(()=>{const[s1,ss1]=useState(false);const[s2,ss2]=useState(true);const[s3,ss3]=useState(false);return<div style={{display:"flex",gap:"24px",alignItems:"center"}}>{[[s1,ss1,"Analytics"],[s2,ss2,"Notifications"],[s3,ss3,"Disabled"]].map(([v,fn,l],i)=><div key={i} style={{display:"flex",alignItems:"center",gap:"8px"}}><button onClick={()=>i<2&&fn(!v)} role="switch" aria-checked={v} style={{position:"relative",width:"36px",height:"20px",borderRadius:"9999px",background:v?fg:bg2,border:v?"none":`1px solid ${bdr}`,cursor:i<2?"pointer":"not-allowed",opacity:i===2?.4:1,transition:"background .15s"}}><span style={{position:"absolute",top:"3px",left:v?"19px":"3px",width:"14px",height:"14px",borderRadius:"9999px",background:v?bg:fg,transition:"left .15s",boxShadow:"0 1px 2px rgba(0,0,0,.1)"}}/></button><span style={{fontSize:"10px",color:i===2?sub:fg}}>{l}</span></div>)}</div>})()}
<H3>Progress Bar (click to advance)</H3>
{(()=>{const[pct,sp]=useState(33);return<div><div style={{display:"flex",gap:"10px",marginBottom:"8px"}}>{[0,25,50,75,100].map(v=><button key={v} onClick={()=>sp(v)} className="vbtn" style={{height:"24px",padding:"0 8px",fontSize:"9px",border:`1px solid ${bdr}`,borderRadius:"4px",background:pct===v?fg:"transparent",color:pct===v?bg:fg}}>{v}%</button>)}</div><div style={{height:"4px",borderRadius:"9999px",background:bg2,overflow:"hidden"}}><div style={{width:`${pct}%`,height:"100%",borderRadius:"9999px",background:pct===100?"#17C964":"#0070F3",transition:"width .3s cubic-bezier(0.22,1,0.36,1)"}}/></div><div style={{fontSize:"9px",color:sub,marginTop:"4px"}}>{pct === 0 ? "Not started" : pct === 100 ? "✓ Complete" : `${pct}% — Building...`}</div></div>})()}
<H3>Skeleton ↔ Loaded (click to toggle)</H3>
{(()=>{const[loaded,sl]=useState(false);return<div><button onClick={()=>sl(!loaded)} className="vbtn" style={{height:"24px",padding:"0 10px",fontSize:"9px",border:`1px solid ${bdr}`,borderRadius:"4px",background:"transparent",color:fg,marginBottom:"8px"}}>{loaded?"Show Skeleton":"Show Loaded"}</button><div style={{border:`1px solid ${bdr}`,borderRadius:"6px",padding:"12px",maxWidth:"280px"}}>{loaded?<><div style={{display:"flex",gap:"8px",marginBottom:"10px"}}><div style={{width:"28px",height:"28px",borderRadius:"9999px",background:"#525252"}}/><div><div style={{fontSize:"11px",fontWeight:600}}>Evil Rabbit</div><div style={{fontSize:"9px",color:sub}}>Production · 2m ago</div></div></div><div style={{fontSize:"10px"}}>Build completed in 3.2s</div></>:<><div style={{display:"flex",gap:"8px",marginBottom:"10px"}}><div style={{width:"28px",height:"28px",borderRadius:"9999px",background:skBg,animation:"pulse 2s ease-in-out infinite"}}/><div style={{display:"flex",flexDirection:"column",gap:"4px"}}><div style={{width:"80px",height:"8px",borderRadius:"3px",background:skBg,animation:"pulse 2s ease-in-out infinite"}}/><div style={{width:"120px",height:"6px",borderRadius:"3px",background:skBg,animation:"pulse 2s ease-in-out infinite"}}/></div></div><div style={{width:"100%",height:"12px",borderRadius:"3px",background:skBg,animation:"pulse 2s ease-in-out infinite"}}/></>}</div></div>})()}
<H3>Tooltip Demo (hover over buttons)</H3>
<div style={{display:"flex",gap:"12px",marginTop:"4px"}}>{[["Edit","✏️"],["Delete","🗑️"],["Share","📤"]].map(([label,icon])=>{const[show,setShow]=useState(false);return<div key={label} style={{position:"relative"}}><button onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)} className="vbtn" style={{width:"32px",height:"32px",display:"flex",alignItems:"center",justifyContent:"center",border:`1px solid ${bdr}`,borderRadius:"6px",background:"transparent",fontSize:"14px"}}>{icon}</button>{show&&<div style={{position:"absolute",bottom:"100%",left:"50%",transform:"translateX(-50%)",marginBottom:"6px",padding:"4px 8px",borderRadius:"4px",background:fg,color:bg,fontSize:"9px",fontWeight:500,whiteSpace:"nowrap",pointerEvents:"none"}}>{label}<div style={{position:"absolute",top:"100%",left:"50%",transform:"translateX(-50%)",width:0,height:0,borderLeft:"4px solid transparent",borderRight:"4px solid transparent",borderTop:`4px solid ${fg}`}}/></div>}</div>})}</div>
</div>}

{/* ═══ COLORS + CONTRAST ═══ */}
{a==="colors"&&<div><H2>Colors + Contrast</H2><P>Click any swatch to copy hex. Side-by-side dark/light, chart palette, usage rules, and live WCAG checker.</P>
<H3>Dark / Light Side-by-Side</H3>
<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px",marginBottom:"12px"}}>{[["DARK","#000"],["LIGHT","#FFF"]].map(([l,bgc])=><div key={l} style={{background:bgc,borderRadius:"5px",padding:"8px",border:`1px solid ${bgc==="#000"?"rgba(255,255,255,.08)":"rgba(0,0,0,.08)"}`}}><div style={{fontSize:"7px",color:"#737373",marginBottom:"3px",fontWeight:600}}>{l}</div><div style={{display:"flex",flexWrap:"wrap",gap:"2px"}}>{CS.Gray.map(c=><div key={c.n} style={{width:"20px",height:"20px",borderRadius:"2px",background:l==="DARK"?c.dk:c.l}} title={`${c.n}: ${l==="DARK"?c.dk:c.l}`}/>)}</div></div>)}</div>
{Object.entries(CS).map(([g,colors])=><div key={g} style={{marginBottom:"8px"}}><H3>{g}</H3><div style={{display:"flex",flexWrap:"wrap",gap:"3px"}}>{colors.map(c=>{const hex=d?c.dk:c.l;const[cp,scp]=useState(false);return<button key={c.n} onClick={()=>{navigator.clipboard.writeText(hex);scp(true);setTimeout(()=>scp(false),1200)}} style={{background:hex,border:`1px solid ${bdr}`,borderRadius:"3px",padding:"6px 8px",cursor:"pointer",minWidth:"68px"}}><div style={{fontSize:"7px",fontFamily:"monospace",color:"#fff",mixBlendMode:"difference"}}>{cp?"✓":hex}</div><div style={{fontSize:"8px",fontWeight:600,color:"#fff",mixBlendMode:"difference"}}>{c.n}</div></button>})}</div></div>)}
<H3>Chart Palette (8 series colors)</H3>
<div style={{display:"flex",gap:"3px",marginBottom:"12px"}}>{["#0070F3","#7928CA","#FF0080","#F5A623","#17C964","#06B6D4","#EE0000","#525252"].map((c,i)=><div key={i} style={{flex:1,height:"28px",borderRadius:"4px",background:c,display:"flex",alignItems:"center",justifyContent:"center"}}><span style={{fontSize:"7px",color:"#fff",fontFamily:"monospace"}}>{c}</span></div>)}</div>
<H3>Color Usage Rules</H3>
<CB title="when-to-use-each-color" code={`BLACK (#000) / WHITE (#fff)
  → Page backgrounds (pure, not grayed)
  → Primary button fills (bg-foreground inverts with theme)
  → Heading text

GRAY-500 (#737373)
  → ALL secondary/descriptive text. THE most-used color after fg/bg.
  → Placeholder text, timestamps, metadata, helper text
  → Minimum contrast for text on both black and white backgrounds

BLUE (#0070F3)
  → Links (text-blue-500, underline-offset-4)
  → Focus rings (ring-blue-500/50)
  → Active/selected states (tab underline, nav active)
  → Primary accent (badges, charts primary series)
  → NEVER for primary button background (use foreground instead)

RED (#EE0000)
  → Error states (input border, error messages, error notes)
  → Destructive actions (Delete button, danger zone)
  → Error status dots

GREEN (#17C964)
  → Success states (success notes, checkmarks, ready status)
  → Positive trends (↑ 12.5%)
  → Ready/deployed status dots

AMBER (#F5A623)
  → Warning states (warning notes, approaching limits)
  → Building/pending status dots (with pulse animation)
  → Negative trends (↓ 5.1%)

PURPLE (#7928CA)
  → Feature highlights, pro/premium badges
  → Avatar gradients (paired with blue)
  → Chart secondary series

GRAY-100 to GRAY-950 (full ramp)
  → 100: hover backgrounds (light mode)
  → 200: borders (light mode fallback when not using rgba)
  → 400: disabled text, secondary icons
  → 600: paragraph text (light mode, when 500 is too light)
  → 900: near-black text (light mode headings alternative)
  → 950: near-black backgrounds (dark mode bg-2)

rgba BORDERS (not hex grays)
  → 0.08: default borders (THE Vercel border)
  → 0.12: hover borders
  → 0.15: strong/active borders, pressed states`}/>
<H3>Contrast Checker</H3>
{(()=>{const[f1,sf]=useState(d?"#EDEDED":"#171717");const[b1,sb]=useState(d?"#000000":"#FFFFFF");const r=wcag(f1,b1);const aa=parseFloat(r)>=4.5;return<div style={{display:"flex",gap:"10px"}}><div style={{display:"flex",flexDirection:"column",gap:"6px"}}>{[["FG",f1,sf],["BG",b1,sb]].map(([l,v,fn])=><div key={l} style={{display:"flex",gap:"3px",alignItems:"center"}}><span style={{fontSize:"7px",fontWeight:600,width:"16px"}}>{l}</span><input type="color" value={v} onChange={e=>fn(e.target.value)} style={{width:"24px",height:"24px",border:"none",padding:0,cursor:"pointer"}}/><input className="vinput" value={v} onChange={e=>fn(e.target.value)} style={{width:"68px",height:"24px",padding:"0 4px",border:`1px solid ${bdr}`,borderRadius:"3px",background:"transparent",color:fg,fontSize:"8px",fontFamily:"monospace"}}/></div>)}</div><div style={{padding:"10px",borderRadius:"5px",background:b1,flex:1,textAlign:"center"}}><div style={{fontSize:"20px",fontWeight:800,color:f1}}>{r}:1</div></div><div style={{display:"flex",flexDirection:"column",gap:"2px",justifyContent:"center"}}>{[["AA",4.5,aa],["AAA",7,parseFloat(r)>=7],["Lg",3,parseFloat(r)>=3]].map(([l,th,p])=><div key={l} style={{display:"flex",alignItems:"center",gap:"2px"}}><span style={{width:"14px",height:"14px",borderRadius:"3px",background:p?"#17C964":"#EE0000",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"7px",color:"#fff"}}>{p?"✓":"✕"}</span><span style={{fontSize:"8px"}}>{l}</span></div>)}</div></div>})()}
<H3>Gray Scale Contrast on Black (pre-calculated)</H3>
<div style={{display:"flex",gap:"3px",flexWrap:"wrap"}}>{[["100","#F7F7F7"],["200","#E5E5E5"],["300","#D4D4D4"],["400","#A3A3A3"],["500","#737373"],["600","#525252"],["700","#404040"],["800","#262626"],["900","#171717"]].map(([n,c])=>{const r=wcag(c,"#000000");const pass=parseFloat(r)>=4.5;return<div key={n} style={{padding:"5px 7px",borderRadius:"3px",background:c,minWidth:"56px",textAlign:"center"}}><div style={{fontSize:"7px",fontFamily:"monospace",color:pass?"#000":"#fff"}}>{n}</div><div style={{fontSize:"9px",fontWeight:700,color:pass?"#000":"#fff"}}>{r}:1</div><div style={{fontSize:"6px",color:pass?"#000":"#fff"}}>{pass?"AA ✓":"Fail"}</div></div>})}</div>
</div>}

{/* ═══ EXPORT ═══ */}
{a==="export"&&<div><H2>Export Tokens</H2><P>Full token sets in 4 formats. Copy the one you need.</P>
<H3>CSS Custom Properties (complete)</H3>
<CB title="globals.css — tokens" code={`:root {
  /* Core */
  --background: #ffffff; --foreground: #000000;
  --bg-1: #ffffff; --bg-2: #fafafa; /* Two background levels */

  /* Gray scale — Geist semantic 1-10 scale:
     1-3: component backgrounds (default/hover/active)
     4-6: borders (default/hover/active)
     7-8: high contrast backgrounds
     9-10: text and icons
     P3 colors used on supported browsers. */
  --gray-1: #fafafa; --gray-2: #f5f5f5; --gray-3: #ebebeb;
  --gray-4: #e0e0e0; --gray-5: #d4d4d4; --gray-6: #c7c7c7;
  --gray-7: #525252; --gray-8: #404040;
  --gray-9: #737373; --gray-10: #171717;

  /* 10 color scales: Gray, Gray Alpha, Blue, Red, Amber, Green, Teal, Purple, Pink */
  --blue: #0070f3; --red: #ee0000; --amber: #f5a623; --green: #17c964;
  --teal: #06b6d4; --purple: #7928ca; --pink: #ff0080;

  /* Typography — Geist v1.7.0 (3 families: Sans, Mono, Pixel) */
  --font-sans: 'Geist', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
  --font-mono: 'Geist Mono', 'SF Mono', 'Fira Code', monospace;
  /* Geist Pixel: 5 display variants (Square, Grid, Circle, Triangle, Line) */
  --tracking-tightest: -0.04em; --tracking-tight: -0.02em; --tracking-normal: 0;

  /* Spacing (8px grid, 13 steps) */
  --sp-1: 4px; --sp-2: 8px; --sp-3: 12px; --sp-4: 16px; --sp-5: 20px;
  --sp-6: 24px; --sp-8: 32px; --sp-10: 40px; --sp-12: 48px;
  --sp-16: 64px; --sp-20: 80px; --sp-24: 96px; --sp-32: 128px;

  /* Radii (7 steps) */
  --r-none: 0; --r-sm: 4px; --r-md: 6px; --r-lg: 8px;
  --r-xl: 12px; --r-2xl: 16px; --r-full: 9999px;

  /* Borders */
  --border: rgba(0, 0, 0, 0.08); --border-hover: rgba(0, 0, 0, 0.12);
  --border-strong: rgba(0, 0, 0, 0.15);

  /* Shadows (7 levels) */
  --shadow-none: none;
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.04);
  --shadow-md: 0 2px 8px rgba(0,0,0,0.06);
  --shadow-lg: 0 4px 16px rgba(0,0,0,0.08);
  --shadow-tooltip: 0 2px 6px rgba(0,0,0,0.12);
  --shadow-menu: 0 4px 24px rgba(0,0,0,0.15);
  --shadow-modal: 0 8px 40px rgba(0,0,0,0.2);
  --shadow-fullscreen: 0 16px 64px rgba(0,0,0,0.25);

  /* Motion */
  --dur-fast: 150ms; --dur-normal: 200ms; --dur-moderate: 300ms; --dur-slow: 500ms;
  --ease: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-spring: cubic-bezier(0.22, 1, 0.36, 1);

  /* Z-index (9 levels) */
  --z-base: 0; --z-docked: 10; --z-sticky: 100; --z-banner: 200;
  --z-overlay: 400; --z-modal: 500; --z-toast: 700; --z-tooltip: 800; --z-max: 999;

  /* Focus */
  --ring: 0 0 0 2px var(--background), 0 0 0 4px rgba(0, 112, 243, 0.5);
  --ring-input: 0 0 0 2px rgba(0, 112, 243, 0.15);
}
.dark {
  --background: #000000; --foreground: #ffffff; --bg-2: #0a0a0a;
  --border: rgba(255, 255, 255, 0.08); --border-hover: rgba(255, 255, 255, 0.12);
  --border-strong: rgba(255, 255, 255, 0.15);
}`}/>
<H3>Figma / Style Dictionary JSON</H3>
<CB title="tokens.json" code={`{
  "color": {
    "background": { "value": "{color.core.white}", "type": "color" },
    "foreground": { "value": "{color.core.black}", "type": "color" },
    "bg-1":       { "value": "#ffffff", "type": "color" },
    "bg-2":       { "value": "#fafafa", "type": "color" },
    "gray": {
      "1": { "value": "#fafafa", "desc": "component bg" },
      "2": { "value": "#f5f5f5", "desc": "hover bg" },
      "3": { "value": "#ebebeb", "desc": "active bg" },
      "4": { "value": "#e0e0e0", "desc": "border" },
      "5": { "value": "#d4d4d4", "desc": "hover border" },
      "6": { "value": "#c7c7c7", "desc": "active border" },
      "7": { "value": "#525252", "desc": "high contrast bg" },
      "8": { "value": "#404040", "desc": "hover hi-con bg" },
      "9": { "value": "#737373", "desc": "secondary text" },
      "10": { "value": "#171717", "desc": "primary text" }
    },
    "blue":   { "value": "#0070f3" }, "red":    { "value": "#ee0000" },
    "amber":  { "value": "#f5a623" }, "green":  { "value": "#17c964" },
    "teal":   { "value": "#06b6d4" }, "purple": { "value": "#7928ca" },
    "pink":   { "value": "#ff0080" }
  },
  "font": {
    "sans":  { "value": "'Geist', system-ui, sans-serif" },
    "mono":  { "value": "'Geist Mono', monospace" },
    "pixel": { "value": "'Geist Pixel Square', monospace", "desc": "5 variants: Square/Grid/Circle/Triangle/Line" }
  },
  "radius": { "sm": { "value": "4px" }, "md": { "value": "6px" }, "lg": { "value": "8px" }, "xl": { "value": "12px" } },
  "shadow": {
    "sm":    { "value": "0 1px 2px rgba(0,0,0,0.04)" },
    "menu":  { "value": "0 4px 24px rgba(0,0,0,0.15)" },
    "modal": { "value": "0 8px 40px rgba(0,0,0,0.2)" }
  },
  "motion": {
    "fast":   { "value": "150ms" }, "normal": { "value": "200ms" },
    "ease":   { "value": "cubic-bezier(0.4, 0, 0.2, 1)" },
    "spring": { "value": "cubic-bezier(0.22, 1, 0.36, 1)" }
  }
}`}/>
<H3>shadcn/ui Config</H3>
<CB title="components.json" code={`{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default", "rsc": true, "tsx": true,
  "tailwind": { "config": "tailwind.config.ts", "css": "app/globals.css",
    "baseColor": "zinc", "cssVariables": true },
  "aliases": { "components": "@/components", "utils": "@/lib/utils", "ui": "@/components/ui",
    "hooks": "@/hooks", "lib": "@/lib" }
}`}/>
<H3>Tailwind Config (extend block)</H3>
<CB title="tailwind.config.ts" code={`extend: {
  fontFamily: {
    sans: ['var(--font-geist-sans)'],
    mono: ['var(--font-geist-mono)'],
  },
  colors: {
    background: 'var(--background)',
    foreground: 'var(--foreground)',
    gray: {
      100: '#f7f7f7', 200: '#e5e5e5', 300: '#d4d4d4',
      400: '#a3a3a3', 500: '#737373', 600: '#525252',
      700: '#404040', 800: '#262626', 900: '#171717', 950: '#0a0a0a',
    },
    blue: '#0070f3', error: '#ee0000', warning: '#f5a623',
    success: '#17c964', teal: '#06b6d4', purple: '#7928ca', pink: '#ff0080',
  },
  letterSpacing: { tightest: '-0.04em', tighter: '-0.03em', tight: '-0.02em' },
  borderRadius: { sm: '4px', md: '6px', lg: '8px', xl: '12px', '2xl': '16px' },
  boxShadow: {
    sm: '0 1px 2px rgba(0,0,0,.04)', md: '0 2px 8px rgba(0,0,0,.06)',
    lg: '0 4px 16px rgba(0,0,0,.08)', menu: '0 4px 24px rgba(0,0,0,.15)',
    modal: '0 8px 40px rgba(0,0,0,.2)',
  },
  transitionTimingFunction: { spring: 'cubic-bezier(.22,1,.36,1)' },
  zIndex: { sticky: '100', overlay: '400', modal: '500', toast: '700', tooltip: '800' },
  animation: {
    'fade-in': 'fadeIn 200ms ease',
    'slide-up': 'slideUp 300ms cubic-bezier(.22,1,.36,1)',
    'scale-in': 'scaleIn 200ms cubic-bezier(.22,1,.36,1)',
  },
}`}/>
</div>}

{/* ═══ NEXT.JS ═══ */}
{a==="next"&&<div><H2>Next.js Setup</H2><P>Complete project setup: layout, error handling, loading, middleware, metadata.</P>
<CB title="1. Install dependencies" code={`npm install geist next-themes sonner cmdk clsx tailwind-merge
# geist v1.7.0 — includes Sans, Mono, and Pixel (5 display variants)
# Optional: npm install framer-motion @hookform/resolvers zod react-hook-form

# Alternative: use next/font/google (simpler, but no Pixel and fewer features)
# import { Geist, Geist_Mono } from 'next/font/google';
# Next.js 15+ uses Geist by default — check your layout.tsx`}/>
<CB title="2. app/layout.tsx — Root layout" code={`import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { ThemeProvider } from '@/lib/theme-provider';
import { Toaster } from 'sonner';
import './globals.css';

export const metadata = {
  title: { default: 'My App', template: '%s | My App' },
  description: 'Built with Next.js and Geist Design System',
  metadataBase: new URL('https://myapp.com'),
  openGraph: { images: ['/og.png'] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={\`\${GeistSans.variable} \${GeistMono.variable}\`} suppressHydrationWarning>
      <head><meta name="theme-color" content="#000000" /></head>
      <body className="bg-background text-foreground antialiased">
        <ThemeProvider>{children}</ThemeProvider>
        <Toaster position="bottom-right" toastOptions={{
          style: { background: 'var(--background)', color: 'var(--foreground)',
            border: '1px solid var(--border)', borderRadius: '8px', fontSize: '14px' }
        }} />
      </body>
    </html>
  );
}`}/>
<CB title="3. app/template.tsx — Page transition animation" code={`// Wraps each page with a subtle enter animation
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="animate-[slideUp_300ms_cubic-bezier(0.22,1,0.36,1)]">
      {children}
    </div>
  );
}`}/>
<CB title="4. app/error.tsx — Error boundary" code={`'use client';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
      <div className="w-14 h-14 rounded-xl bg-red-500/10 border border-red-500/30
        flex items-center justify-center text-2xl mb-4">⚠</div>
      <h2 className="text-xl font-semibold">Something went wrong</h2>
      <p className="text-sm text-gray-500 mt-2 max-w-sm">{error.message}</p>
      <button onClick={reset}
        className="mt-6 h-10 px-6 text-sm font-medium bg-foreground text-background rounded-md">
        Try Again
      </button>
    </div>
  );
}`}/>
<CB title="5. app/loading.tsx — Global loading state" code={`// Shows automatically when navigating between pages
export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="w-5 h-5 border-2 border-[var(--border)] border-t-foreground
        rounded-full animate-spin" />
    </div>
  );
}`}/>
<CB title="6. app/not-found.tsx — 404 page" code={`import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
      <h1 className="text-8xl font-extrabold tracking-[-0.04em] text-gray-200 dark:text-gray-800">
        404
      </h1>
      <h2 className="text-xl font-semibold mt-4">Page Not Found</h2>
      <p className="text-sm text-gray-500 mt-2 max-w-sm">
        This page doesn't exist or has been moved.
      </p>
      <Link href="/"
        className="mt-8 h-10 px-6 inline-flex items-center rounded-md bg-foreground text-background text-sm font-medium">
        Go Home
      </Link>
    </div>
  );
}`}/>
<CB title="7. middleware.ts — Auth redirect pattern" code={`import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('session')?.value;
  const isAuthPage = request.nextUrl.pathname.startsWith('/login');
  const isDashboard = request.nextUrl.pathname.startsWith('/dashboard');

  // Not logged in, trying to access dashboard → redirect to login
  if (!token && isDashboard) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Logged in, trying to access login → redirect to dashboard
  if (token && isAuthPage) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/login'],
};`}/>
<CB title="8. Complete package.json scripts" code={`{
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "type-check": "tsc --noEmit"
  }
}`}/>
</div>}


</main></div></div>}
