export const esc = s => String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export const fmt = seconds => {if(!Number.isFinite(seconds))return '0:00';const t=Math.floor(seconds);return `${Math.floor(t/60)}:${String(t%60).padStart(2,'0')}`;};
export function getSaved(key,fallback){try{return JSON.parse(localStorage.getItem('olr:'+key))??fallback;}catch{return fallback;}}
export function save(key,value){try{localStorage.setItem('olr:'+key,JSON.stringify(value));}catch{}}
