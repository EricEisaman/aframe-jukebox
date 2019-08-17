![A-Frame Jukebox](https://cdn.glitch.com/b88fe5ca-4161-4b19-865e-cfabdd398fa7%2Fa-jukebox.gif?v=1565990879454)

# A-Frame Jukebox
____

**API**

|Property|Type|Description|Default Value| 
|---|---|---|---|
|songs|array|names of songs|" 'Don\'t You Worry Bout a Thing\nby Jacob Collier' , 'Fireflies by Owl City' , 'In the Name of Love\nby Martin Garrix' , 'Save Me\n by the Underground All Stars' , 'Riders on the Storm\nby the Doors' "|
|tracks|array|track numbers of songs|'159735657 , 5988210 , 319594726 , 9645925 , 219569230'|
|logo|string|logo|'https://cdn.glitch.com/b88fe5ca-4161-4b19-865e-cfabdd398fa7%2Faj_logo.png?v=1565976468386'|
|color|string|closed rotation (for rotate type)|'#D3FFE7'|
|playthrough|boolean|play through all tracks|true|
|initialdelay|number|milliseconds before start|5000|
|autoplay|boolean|autoplay setting|false|

___

**Important Notes**

**Note:**
```diff
- The custom color theme property has not yet been implemented.
```

## Add the A-Frame Jukebox script in the HTML head:
```
<script src="https://cdn.jsdelivr.net/gh/EricEisaman/aframe-jukebox@0.1.1/dist/aframe-jukebox.min.js" ></script>

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
songs=" 'Love Theme from\nthe Godfather' , 'Cannon in D\nby Bach'   "
tracks='14837098 , 4595620'
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
