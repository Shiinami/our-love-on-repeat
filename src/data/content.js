// Lagu-lagu ini adalah DEMO instrumen orisinal pendek; ganti dengan lagu yang Anda miliki hak pakainya.
export const tracks = [
 {id:'starlight',title:'Starlight, Softly',artist:'Our Love Studio · Demo',src:'/audio/starlight.wav',source:'local',art:'starlight',description:'A quiet beginning to a story still unfolding.',durationLabel:'00:18'},
 {id:'sunday',title:'Slow Sunday',artist:'Our Love Studio · Demo',src:'/audio/sunday.wav',source:'local',art:'sunday',description:'For the small moments that turn into favorite memories.',durationLabel:'00:18'},
 {id:'forever',title:'A Little Forever',artist:'Our Love Studio · Demo',src:'/audio/forever.wav',source:'local',art:'forever',description:'Some feelings always find their way back.',durationLabel:'00:18'},
 {id:'birthday',title:'A Wish for You',artist:'Our Love Studio · Demo',src:'/audio/birthday.wav',source:'local',art:'birthday',description:'A small original birthday melody, made to be replaced with yours.',durationLabel:'00:18'}
];
export const playlists = [
 {id:'ours',title:'This Is Us',subtitle:'The soundtrack of our little universe',art:'starlight',trackIds:['starlight','sunday','forever']},
 {id:'late',title:'Late Night Thoughts',subtitle:'For moments that deserve a slower song',art:'sunday',trackIds:['sunday','forever']},
 {id:'birthdaymix',title:'Your Birthday Mix',subtitle:'Handpicked with all my heart',art:'birthday',trackIds:['birthday','starlight','forever']}
];
export const memories = [
 {id:'first',title:'The Beginning',when:'CHAPTER 01',art:'starlight',caption:'GANTI_DENGAN_CERITA_PERTEMUAN_KALIAN',images:[]},
 {id:'adventures',title:'Little Adventures',when:'CHAPTER 02',art:'sunday',caption:'GANTI_DENGAN_CERITA_PETUALANGAN_KALIAN',images:[]},
 {id:'everyday',title:'Ordinary Magic',when:'CHAPTER 03',art:'forever',caption:'GANTI_DENGAN_KENANGAN_SEHARI_HARI',images:[]},
 {id:'future',title:'The Next Chapter',when:'CHAPTER 04',art:'birthday',caption:'GANTI_DENGAN_HARAPAN_UNTUK_MASA_DEPAN',images:[]}
];
export const trackById = id => tracks.find(x=>x.id===id);
export const playlistById = id => playlists.find(x=>x.id===id);
