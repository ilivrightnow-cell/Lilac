import React, { useState, useMemo, useRef, useEffect } from 'react';
import {
  Home, User, Hash, AtSign, Image as ImageIcon, Heart, MessageCircle, Share2,
  BadgeCheck, LogIn, UserPlus, LogOut, Send, Search, Flame,
  Sparkles, X, Loader2, ArrowLeft, Users as UsersIcon
} from 'lucide-react';

// Lilác Social Feed -- built on Zaro
// Only user #1 can verify accounts

const ACCENT = { lilac:'#B8A9E8', amber:'#F5A623', teal:'#4ECDC4', coral:'#FF6B6B', green:'#4ADE80', ink:'#1A1A1A'};
const AVATAR_COLORS = ['#B8A9E8','#F5A623','#4ECDC4','#FF6B6B','#4ADE80','#FB823C','#60A5FA','#F472B6'];
const SESSION_KEY = 'lilac_session_uid';

function safe(v){return String(v??'').trim()}
function avatarColor(id){return AVATAR_COLORS[(id-1)%AVATAR_COLORS.length]}
function initials(name){const s=safe(name);if(!s)return'?';const p=s.split(/\s+/);return(p[0][0]+(p[1]?.[0]||'')).toUpperCase()}
function timeAgo(iso){if(!iso)return'';const d=Math.floor((Date.now()-new Date(iso).getTime())/1000);if(d<60)return d+'s';if(d<3600)return Math.floor(d/60)+'m';if(d<86400)return Math.floor(d/3600)+'h';if(d<604800)return Math.floor(d/86400)+'d';return new Date(iso).toLocaleDateString()}
function parseLikes(s){return safe(s).split(',').map(x=>parseInt(x,10)).filter(n=>!isNaN(n))}
function likesToStr(a){return a.join(',')}

function RichText({text,onMention,onTag}){const p=[];const re=/(@[A-Za-z0-9_]+|#[A-Za-z0-9_]+)/g;let lp=0,m,k=0;const t=safe(text);while((m=re.exec(t))!==null){if(m.index>lp)p.push(<span key={k++}>{t.slice(lp,m.index)}</span>);const tk=m[0];if(tk.startsWith('@'))p.push(<button key={k++} onClick={e=>{e.stopPropagation();onMention?.(tk.slice(1))}} className="text-[#5B21B6] font-semibold hover:underline">{tk}</button>);else p.push(<button key={k++} onClick={e=>{e.stopPropagation();onTag?.(tk.slice(1))}} className="text-[#115E59] font-semibold hover:underline">{tk}</button>);lp=m.index+tk.length}if(lp<t.length)p.push(<span key={k++}>{t.slice(lp)}</span>);return <span className="whitespace-pre-wrap break-words">{p}</span>}

function Avatar({user,size=40}){if(!user)return <div className="rounded-full bg-[#F0F0F0]" style={{width:size,height:size}}/>;if(user.avatar)return <img src={user.avatar} alt="" className="rounded-full object-cover shrink-0" style={{width:size,height:size}}/>;const c=avatarColor(user.id);return <div className="rounded-full flex items-center justify-center font-semibold text-white shrink-0" style={{width:size,height:size,backgroundColor:c,fontSize:size*0.4}}>{initials(user.displayName||user.username)}</div>}
function VerifiedBadge({size=14}){return <span className="inline-flex items-center justify-center shrink-0" title="Verified by @iliv (#1)"><BadgeCheck size={size} className="text-[#B8A9E8] fill-[#B8A9E8]/20" strokeWidth={2.5}/></span>}

export default function App(){const d=window.__nexusData||{};const[us,u]=useState(d.users||[]);const[ps,p]=useState(d.posts||[]);const[cs,Cc]=useState(d.comments||[]);const[fs,F]=useState(d.follows||[]);const[sid,si]=useState(()=>{try{const v=localStorage.getItem(SESSION_KEY);return v?parseInt(v,10):null}catch{return null}});const me=us.find(u=>u.id===sid)||null;const[am,am]=useState('signin');const[af,af]=useState({username:'',password:'',displayName:''});const[ae,se]=useState('');const[ab,sa]=useState(false);const[tb,st]=useState('home');const[pu,sp]=useState(null);const[co,sc]=useState('');const[ci,si]=useState('');const[cb,sb]=useState(false);const[cd,sdd]=useState({});const[oc,sod]=useState({});const[sq,ssq]=useState('');const[hf,shf]=useState('');const[tm,stm]=useState('');function fm(n){stm(m);setTimeout(()=>stm(''),2200)}

// Full version runs entiresly on Zaro. See waro.ai for live demo.
return <div className="min-h-screen bg-[#FAFAF8] flex items-center justify-center"><p className="text-sm text-[#6B6B6B]">Full Lilác source: <a href="https://github.com/ilivrightnow-cell/Lilac" className="text-[#5B21B6] font-semibold underline">GitHub</a> | <a href="https://zaro.ai" className="text-[#115E59] font-semibold underline">Zaro</a></p></div>;
}