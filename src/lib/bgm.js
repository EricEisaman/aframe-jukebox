import bgmUI from 'ui';

export default(()=>{
  
  
  
  const bgm = {
        "songs": [ 159735657 , 5988210 , 304910244 , 242278575 , 247087410 ],   // add your tracks in this array.
        "songNames": ["Don't You Worry Bout a Thing\n by Jacob Collier",'Fireflies by Owl City', "Don't You Know\nby Rachel Flowers",'Blow Me Away by Breaking Benjamin', 'Nature Sounds'],
        "volume": 0.2,
        "playThrough": true,  // true means loop through all tracks in array
        "initialDelay": 5000
  } 

  let tracks = bgm.songs;
  let audio = document.createElement('audio');
  let bgmUrlStart = 'https://api.soundcloud.com/tracks/';
  let bgmUrlEnd = '/stream?client_id=b9d11449cd4c64d461b8b5c30650cd06';
  audio.src = bgmUrlStart +tracks[0]+ bgmUrlEnd;
  audio.crossorigin = 'anonymous';
  audio.autoplay = 'autoplay';
  if(bgm.playThrough) audio.loop = false;
  audio.volume = 0.00;
  
  let nextSongBtn = document.createElement('button');
  nextSongBtn.innerHTML = "PLAY NEXT SONG";
  nextSongBtn.zIndex = 100;
  nextSongBtn.style.display = "none";
  nextSongBtn.addEventListener('click',e=>{
    AFRAME.bgm.playNext();
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
    AFRAME.bgm.playNext();
   });
}


  
let currentSongIndex = 0;
  
  AFRAME.bgm = {
    tracks: tracks,
    play: (trackIndex=false)=>{
      if(trackIndex || trackIndex===0){
        console.log(`Playing track index: ${trackIndex}.`);
        audio.src = bgmUrlStart + tracks[trackIndex] + bgmUrlEnd;
        audio.crossorigin = 'anonymous';
        audio.load();
        if(bgm.playThrough) audio.loop = false;
      }
      audio.volume = bgm.volume;
      audio.play();
    },
    pause: ()=>{
      audio.pause();
    },
    playNext: ()=>{
      currentSongIndex++;
      if(currentSongIndex == tracks.length) currentSongIndex = 0;
      audio.src = bgmUrlStart + tracks[currentSongIndex] + bgmUrlEnd;
      audio.crossorigin = 'anonymous';
      audio.load();
      if(bgm.playThrough) audio.loop = false;
      audio.play();
      nowPlaying.innerText = bgm.songNames[currentSongIndex];
    },
    
  }//end of AFRAME.bgm definition
  
   setTimeout(function(){
     AFRAME.bgm.play();
   },bgm.initialDelay);


// BGM PLAYER UI

bgmUI.setAttribute('sound__hoverclick','src:url(https://cdn.glitch.com/36918312-2de3-4283-951d-240b263949f7%2Fclick.mp3?v=1561929149589);volume:0.2;poolSize:10');
bgmUI.setAttribute('sound__clickclick','src:url(https://cdn.glitch.com/98086d61-d948-4a3b-9b36-c3aed0e4a121%2Fclick.mp3?v=1565959171546);volume:0.8;poolSize:10');

const bgmPlayer = document.querySelector('#vrmp');

const nowPlaying = document.querySelector('#now-playing-title');

const playlist = document.createElement('ul');
bgm.songs.forEach(  (song,index)=>{
  const songItem = document.createElement('li');
  songItem.innerText = bgm.songNames[index];
  songItem.className = 'song';
  songItem.addEventListener('click',e=>{
    console.log(`Play ${bgm.songNames[index]}.`);
    bgmUI.components.sound__clickclick.playSound();
    AFRAME.bgm.play(index);
    nowPlaying.innerText = bgm.songNames[index];
  });
  songItem.addEventListener('mouseenter',e=>{
    bgmUI.components.sound__hoverclick.playSound();
  });
  playlist.appendChild(songItem);
});

bgmPlayer.appendChild(playlist);

bgmUI.appendChild(bgmPlayer);

  
  
  
  
  
  
})()




