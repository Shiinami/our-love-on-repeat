import { QueueManager } from './QueueManager.js';
import {tracks,trackById} from '../data/content.js';
export class AudioManager extends EventTarget {
 constructor(){super();this.audio=new Audio();this.audio.preload='metadata';this.queue=new QueueManager(tracks.map(t=>t.id));this.volume=.75;this.audio.volume=this.volume;this.error='';this.trackId=null;
  for(const event of ['play','pause','timeupdate','durationchange','volumechange','loadedmetadata','waiting'])this.audio.addEventListener(event,()=>this.notify());
  this.audio.addEventListener('ended',()=>{if(this.queue.repeat==='one'){this.audio.currentTime=0;this.play();}else this.skipNext(true);});
  this.audio.addEventListener('error',()=>{this.error='Audio tidak tersedia. Pastikan file dan formatnya benar.';this.notify();});
 }
 notify(){this.dispatchEvent(new Event('change'));}
 get current(){return trackById(this.trackId);}
 get playing(){return !this.audio.paused && !this.audio.ended;}
 select(id,queueIds){const t=trackById(id);if(!t)return;if(queueIds)this.queue.setQueue(queueIds,id);else if(this.queue.ids.includes(id))this.queue.index=this.queue.ids.indexOf(id);else this.queue.setQueue([id],id);this.trackId=id;this.error='';this.audio.src=t.src;this.audio.load();this.notify();return this.play();}
 async play(){if(!this.trackId){return this.select(tracks[0].id);}try{await this.audio.play();this.error='';}catch(e){this.error='Audio tidak dapat diputar. Coba tekan Play atau periksa file audio.';}this.notify();}
 toggle(){return this.playing?(this.audio.pause(),this.notify()):this.play();}
 skipNext(auto=false){const next=this.queue.next();if(next)return this.select(next);if(auto){this.audio.pause();this.audio.currentTime=0;}this.notify();}
 skipPrevious(){if(this.audio.currentTime>3){this.audio.currentTime=0;return;}const prev=this.queue.previous();if(prev)this.select(prev);}
 seek(fraction){if(Number.isFinite(this.audio.duration))this.audio.currentTime=Math.max(0,Math.min(1,fraction))*this.audio.duration;}
 setVolume(value){this.audio.volume=Math.max(0,Math.min(1,Number(value)));this.volume=this.audio.volume;this.notify();}
 toggleMute(){this.audio.muted=!this.audio.muted;this.notify();}
 toggleShuffle(){this.queue.toggleShuffle();this.notify();}
 cycleRepeat(){this.queue.cycleRepeat();this.notify();}
}
