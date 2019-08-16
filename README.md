![A-Frame Jukebox](https://cdn.glitch.com/b88fe5ca-4161-4b19-865e-cfabdd398fa7%2Fa-jukebox.gif?v=1565990879454)

# A-Frame Jukebox
____

## Add the component in the HTML head:
```
<script src="bundle.js" defer></script>

```

## Add a jukebox to your scene:
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
