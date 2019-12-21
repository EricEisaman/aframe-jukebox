import htmlembed from './htmlembed.js';
   
import layout from './layout.js'; 

const AFRAME = window.AFRAME;

if(!window.CS1)window.CS1={};
  
export default (function () {

AFRAME.registerComponent('jukebox', {
  schema: {
	  names: { type:'array' , default: ['Don\'t You Worry Bout a Thing</br>by</br>Jacob Collier' , 
                                          'Fireflies</br>by</br>Owl City' ,
                                         'One Life</br>by</br>Patrick Patrikios' ,
                                         'Save Me</br>by</br>the Underground All Stars' ,
                                         'Riders on the Storm</br>by</br>the Doors']},
    src: { type:'array' , default: [159735657 , 5988210 , 'https://cdn.glitch.com/a4339379-3ed9-4b49-bced-16d8a59ee858%2FOne_Life.mp3?v=1576924357900' , 9645925 , 219569230]},
    logo: {default: 'https://cdn.glitch.com/b88fe5ca-4161-4b19-865e-cfabdd398fa7%2Faj_logo.png?v=1565976468386'},
    color: {default: '#FFF'},
    border: {default: '#D3FFE7'},
    highlight: {default: '#32BA6F'},
    current: {default: '#58E7F4'},
    heading: {default: '#FFF'},
    scaletext: {default: 1},
    playthrough: {default: true},
    initialdelay: {default: 0},
    autoplay:{default:false},
    volume:{default:1.0}
  },
   
  init: function(){
    
    
 const bgm = {
   "songs": this.data.src,   // add your tracks in this array.
   "songNames": this.data.names,
   "volume": this.data.volume,
   "playThrough": this.data.playthrough,  // true means loop through all tracks in array
   "initialDelay": this.data.initialdelay
  } 

  let tracks = bgm.songs;
  let audio = document.createElement('audio');
  let bgmUrlStart = 'https://api.soundcloud.com/tracks/';
  let bgmUrlEnd = '/stream?client_id=b9d11449cd4c64d461b8b5c30650cd06';
  audio.loop = !bgm.playThrough;
  audio.volume = this.data.volume;
  
  let nextSongBtn = document.createElement('button');
  nextSongBtn.innerHTML = "PLAY NEXT SONG";
  nextSongBtn.zIndex = 100;
  nextSongBtn.style.display = "none";
  nextSongBtn.addEventListener('click',e=>{
    window.CS1.jukebox.playNext();
  });
  let ui = document.createElement('div');
  ui.style.margin = '0 auto';
  ui.style.width = '800px';
  setTimeout(()=>{
   document.body.appendChild(ui);
   ui.appendChild(nextSongBtn);
  },5000);
  
  if(bgm.playThrough){
     audio.addEventListener('ended',e=>{
      console.log('bgm song ended');
      window.CS1.jukebox.playNext();
     });
  }
    
window.CS1.jukebox = {
    audio: audio,
    tracks: tracks,
    songNames: bgm.songNames
  }//end of CS1.jukebox definition

 
let currentSongIndex = 0;
    
    
window.CS1.jukebox.play = function(e){
  const index = (typeof e == 'number')?e:this.index;  
  bgmUI.components.sound__clickclick.playSound();
  if(currentSongIndex==index && heading.innerText=='Now Playing'){
    window.CS1.jukebox.pause(true);
    return;
  }else{
    if(typeof e != 'number'){
      //console.log('jukeboxplay event');
      const jukeboxplayEvent = new CustomEvent('jukeboxplay', { 
        detail: {
          index: index
        } 
      });
      audio.dispatchEvent(jukeboxplayEvent);
    }  
    heading.innerText = 'Now Playing';
    nowPlaying.innerHTML = window.CS1.jukebox.songNames[index];  
  } 
  currentSongIndex = index; 
  if(typeof tracks[index] ==='Number')
    audio.src = bgmUrlStart + tracks[index] + bgmUrlEnd;
  else
    audio.src = tracks[index];
  audio.crossorigin = 'anonymous';
  audio.autoplay = true;
  audio.load();
  audio.loop = !bgm.playThrough;
  audio.volume = bgm.volume; 
}    
    
    
    
window.CS1.jukebox.pause = function (local){
  audio.pause();
  heading.innerText = 'Choose a Track';
  nowPlaying.innerText = '';
  if(local){
    //console.log('jukeboxpause event');
    const jukeboxpauseEvent = new Event('jukeboxpause');
    audio.dispatchEvent(jukeboxpauseEvent);  
  }  
}  
    
    
window.CS1.jukebox.playNext = function(){
  currentSongIndex++;
  if(currentSongIndex == tracks.length) currentSongIndex = 0;
  if(typeof tracks[currentSongIndex] ==='Number')
    audio.src = bgmUrlStart + tracks[currentSongIndex] + bgmUrlEnd;
  else
    audio.src = tracks[currentSongIndex];
  audio.crossorigin = 'anonymous';
  audio.load();
  audio.loop = !bgm.playThrough;
  audio.play(currentSongIndex);
  nowPlaying.innerHTML = bgm.songNames[currentSongIndex];
}
    
  
const autoplay = e=>{
  setTimeout(_=>{window.CS1.jukebox.play(0);},bgm.initialDelay);
  document.body.removeEventListener(e.type,autoplay);
  console.log(`Playing Jukebox on ${e.type} event.`);
}    
 
if(this.data.autoplay  && CS1.jukebox.tracks.length){
  let type = CS1.game?'gameStart':'click';
  document.body.addEventListener(type,autoplay);
} 



// Jukebox UI
const bgmUI = layout.ui;
bgmUI.setAttribute('sound__hoverclick','src:url(https://cdn.glitch.com/36918312-2de3-4283-951d-240b263949f7%2Fclick.mp3?v=1561929149589);volume:0.2;poolSize:10');
bgmUI.setAttribute('sound__clickclick','src:url(https://cdn.glitch.com/98086d61-d948-4a3b-9b36-c3aed0e4a121%2Fclick.mp3?v=1565959171546);volume:0.8;poolSize:10');

const bgmPlayer = layout.player;
layout.player.style.borderColor = this.data.border;
layout.logo.src = this.data.logo;
layout.logo.style.width = '25%';
layout.logo.style.margin = '10px auto 0px';
layout.logo.style.marginTop = '-30px';


const nowPlaying = layout.current;
nowPlaying.style.color = this.data.current;
nowPlaying.style.fontSize = `${this.data.scaletext*12}px`;
const heading = layout.heading;
heading.style.color = this.data.heading;
heading.style.fontSize = `${this.data.scaletext*14}px`;
heading.innerText = 'Choose a Track';
nowPlaying.innerText = '';

const playlist = document.createElement('div');
playlist.setAttribute('style','text-align:center;margin-left:0.0em;margin-top:1.0em');
bgm.songs.forEach(  (song,index)=>{
  const songItem = document.createElement('div');
  songItem.innerHTML = bgm.songNames[index];
  songItem.setAttribute('style',`color:${this.data.color};font-size:${this.data.scaletext*12}px`);
  songItem.addEventListener('click',window.CS1.jukebox.play.bind({index:index}));
  songItem.addEventListener('mouseenter',e=>{
    bgmUI.components.sound__hoverclick.playSound();
    songItem.setAttribute('style',`color:${this.data.color};background-color:${this.data.highlight};font-size:${this.data.scaletext*14}px`);
  });
  songItem.addEventListener('mouseleave',e=>{
    songItem.setAttribute('style',`color:${this.data.color};font-size:${this.data.scaletext*12}px`);
  });
  playlist.appendChild(songItem);
});

bgmPlayer.appendChild(playlist);

this.el.appendChild(bgmUI);
    
   
    
}
  
  
});
  
  
  
  
AFRAME.registerPrimitive('a-jukebox', {
  defaultComponents: {
    jukebox:{},
    position:{}
  },
  mappings: {
    names: 'jukebox.names',
    src: 'jukebox.src',
    logo: 'jukebox.logo',
    color: 'jukebox.color',
    highlight:'jukebox.highlight',
    current: 'jukebox.current',
    heading: 'jukebox.heading',
    border: 'jukebox.border',
    scaletext: 'jukebox.scaletext',
    playthrough: 'jukebox.playthrough',
    initialdelay: 'jukebox.initialdelay',
    autoplay: 'jukebox.autoplay',
    volume: 'jukebox.volume'
  }
});  
  
  
})()  
  




