export class QueueManager {
 constructor(ids=[]){this.ids=[...ids];this.index=0;this.shuffle=false;this.repeat='off';this.history=[];}
 setQueue(ids,startId){this.ids=[...ids];this.index=Math.max(0,this.ids.indexOf(startId));this.history=[];}
 current(){return this.ids[this.index]??null;}
 next(){if(!this.ids.length)return null;if(this.shuffle&&this.ids.length>1){const choices=this.ids.map((_,i)=>i).filter(i=>i!==this.index);this.history.push(this.index);this.index=choices[Math.floor(Math.random()*choices.length)];return this.current();}if(this.index<this.ids.length-1){this.index++;return this.current();}if(this.repeat==='all'){this.index=0;return this.current();}return null;}
 previous(){if(this.history.length){this.index=this.history.pop();return this.current();}this.index=Math.max(0,this.index-1);return this.current();}
 toggleShuffle(){this.shuffle=!this.shuffle;return this.shuffle;}
 cycleRepeat(){this.repeat=this.repeat==='off'?'all':this.repeat==='all'?'one':'off';return this.repeat;}
}
