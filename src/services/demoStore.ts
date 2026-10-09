export type EventRecord={id:string;type:string;resourceId:string;message:string;timestamp:string;actor:string;metadata?:Record<string,unknown>};
const EVENT_KEY='skylink-events';
const AUDIT_KEY='skylink-audit-events';
function read<T>(key:string,fallback:T):T{try{return JSON.parse(localStorage.getItem(key)||JSON.stringify(fallback))}catch{return fallback}}
export function recordEvent(type:string,resourceId:string,message:string,actor='Brett Roberts',metadata?:Record<string,unknown>):EventRecord{
 const e={id:'evt-'+Date.now()+'-'+Math.random().toString(36).slice(2,7),type,resourceId,message,timestamp:new Date().toISOString(),actor,metadata};
 const current=read<EventRecord[]>(EVENT_KEY,[]); localStorage.setItem(EVENT_KEY,JSON.stringify([e,...current].slice(0,500)));
 const audit=read<EventRecord[]>(AUDIT_KEY,[]); localStorage.setItem(AUDIT_KEY,JSON.stringify([e,...audit].slice(0,500)));
 window.dispatchEvent(new CustomEvent('skylink:event',{detail:e})); return e;
}
export function readEvents():EventRecord[]{return read<EventRecord[]>(EVENT_KEY,[])}
export function clearDemoEvents(){localStorage.removeItem(EVENT_KEY);localStorage.removeItem(AUDIT_KEY)}
