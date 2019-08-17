const layout = { };

const np = document.createElement('div');
np.setAttribute('style','margin-top: -30px;font-size:10px;text-align:center;color:#58E7F4;');
const heading = document.createElement('h2');
heading.innerText = 'Now Playing';
heading.setAttribute('style','margin-bottom:-10px;margin-top:30px;text-align:center;color:#fff;');
np.appendChild(heading);
const title = document.createElement('p');
title.setAttribute('style','margin-top: 10px;font-size:12px;text-align:center;color:#58E7F4;');
np.appendChild(title);

const logo = new Image();
logo.style.display = 'block';


const p = document.createElement('div');
p.setAttribute('style','height:350px;width:240px;border-style:solid;border-width:5px;border-radius:10px;border-color:#D3FFE7;margin-top:2.0em');
p.appendChild(logo);
p.appendChild(np);

const ui = document.createElement('a-entity');
ui.setAttribute('htmlembed','');
ui.className = 'jukebox';
ui.appendChild(p); 

  
layout.ui = ui;
layout.player = p;
layout.logo = logo;
layout.heading = heading;
layout.current = title;

export default layout;


