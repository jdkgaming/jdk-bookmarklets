javascript:(function(){var d=document.createElement('div');var shadow=d.attachShadow({mode:'open'});shadow.innerHTML='<head><style>#bookmarkletForm{border-radius:8px;border-color:#FF0000;border-style:inset;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:white;padding:20px;box-shadow:0px 0px 10px rgba(0,0,0,0.5);z-index:10000;color:black;font-family:Arial,sans-serif;width:300px;}#closeButton{border-radius: 4px;position:absolute;top:5px;right:5px;background:none;border:gray;font-size:16px;cursor:pointer;color:black;}label,input[type="text"]{background-color:white;border-radius: 6px;display:block;width:100%;margin-bottom:10px;color:black;font-family:Arial,sans-serif;}input[type="submit"]{border-radius: 6px;display:block;width:100%;margin-bottom:10px;color:black;font-family:Arial,sans-serif;}input[type="submit"]{background:#E30000;color:black;border:none;padding:10px 15px;cursor:pointer;}input[type="submit"]:hover{background:#B30000;}#headtext{position:fixed;top:0px;left:20px;color:black;}</style></head><body><form id="bookmarkletForm"><button id="closeButton">x</button><p id="headtext">icon/name changer</p><br></br><label for="input1">Enter the link for the new page icon:</label><input type="text" id="input1" name="input1"><label for="input2">Enter a new page name:</label><input type="text" id="input2" name="input2"><input type="submit" value="Submit"></form></body>';document.body.appendChild(d);shadow.getElementById('closeButton').onclick=function(){document.body.removeChild(d);};shadow.getElementById('bookmarkletForm').onsubmit=function(){var input1=shadow.getElementById('input1').value;var input2=shadow.getElementById('input2').value;var links=document.querySelectorAll("link[rel*='icon'], link[rel='apple-touch-icon']");if(links.length===0){var newLink=document.createElement('link');newLink.type='image/x-icon';newLink.rel='shortcut icon';newLink.href=input1;document.getElementsByTagName('head')[0].appendChild(newLink);alert('There where no icons on this page, new icon added');}else{var changed = 0; while(changed < links.length) { links[changed].href = input1; changed++; } }document.title=input2;alert('The icon has changed to: '+input1+'\nThe page name has changed to: '+input2);document.body.removeChild(d);return false;};})();