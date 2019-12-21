![A-Frame Jukebox](https://cdn.glitch.com/b88fe5ca-4161-4b19-865e-cfabdd398fa7%2Fa-jukebox.gif?v=1565990879454)

# A-Frame Jukebox
v0.1.15
____
**Description**

A-Frame Jukebox provides a single declarative custom HTML tag approach creating a simple VR UI controlling a playlist of audio tracks. Clicking on the currently playing track stops the audio.
____

**HTML Element Attributes API**

|Property|Type|Description|Default Value| 
|---|---|---|---|
|names|array|names of songs|" Don\'t You Worry Bout a Thing</br>by</br>Jacob Collier , Fireflies</br>by</br>Owl City  , One Life</br>by</br>Patrik Patrikios , Save Me</br>by</br>the Underground All Stars , Riders on the Storm</br>by</br>the Doors "|
|src|array|track numbers or urls of songs|159735657 , 5988210 , 'https://cdn.glitch.com/a4339379-3ed9-4b49-bced-16d8a59ee858%2FOne_Life.mp3?v=1576924357900' , 9645925 , 219569230|
|logo|string|logo|'https://cdn.glitch.com/b88fe5ca-4161-4b19-865e-cfabdd398fa7%2Faj_logo.png?v=1565976468386'|
|color|string|playlist font color|'#D3FFE7'|
|highlight|string|playlist highlight color|'#D3FFE7'|
|border|string|border color|'#D3FFE7'|
|current|string|current song font color|'#58E7F4'|
|heading|string|heading font color|'#FFF'|
|scaletext|number|scale factor for text|'1.0'|
|playthrough|boolean|play through all tracks|true|
|initialdelay|number|milliseconds before start|5000|
|autoplay|boolean|autoplay setting|false|


____

**Events API**

Attach listeners to **CS1.jukebox.audio**.

|Event Name|event.detail| 
|----|----|
|jukeboxplay|{index:index}|
|jukeboxpause|undefined|

___


**CS1.jukebox Object API**

- CS1.jukebox.audio
```
//exposes the underlying audio element 

const jukeboxStream = AFRAME.bgm.audio.captureStream();

/*
jukeboxStream can then be run through an AnalyserNode, 
from where you can pull intensities for various frequency 
bands and use those values to animate colors, scales, and positions.
*/
```
- CS1.jukebox.pause()
- CS1.jukebox.play(trackIndex)
- CS1.jukebox.playNext()
- CS1.jukebox.songNames
  - an array of song names
- CS1.jukebox.tracks
  - an array of track numbers

___


## Add the A-Frame Jukebox script in the HTML head:
```
<script src="https://cdn.jsdelivr.net/gh/EricEisaman/aframe-jukebox@v0.1.15/dist/aframe-jukebox.min.js" ></script>

```

## Add a default jukebox to your scene:
```
<a-jukebox position="0 1.7 -1.5"></a-jukebox>        
        
<a-entity id="rig" position="0 0 0">
  <a-camera id="camera" look-controls="pointerLockEnabled: true;" >
    <a-cursor material="color:#3AC4D1" 
              fuse:true
              position="0 0 -0.6"
              raycaster="objects: .jukebox">
    </a-cursor>
  </a-camera>
</a-entity> 

```

## Add a custom jukebox to your scene:
```
<a-jukebox 
names=" [ 'Love Theme from\nthe Godfather' , 'Cannon in D\nby Bach'] "
src='14837098 , 4595620'
position="0 1.7 -1.5"></a-jukebox>        
        
<a-entity id="rig" position="0 0 0">
  <a-camera id="camera" look-controls="pointerLockEnabled: true;" >
    <a-cursor material="color:#3AC4D1" 
              fuse:true
              position="0 0 -0.6"
              raycaster="objects: .jukebox">
    </a-cursor>
  </a-camera>
</a-entity> 

```
