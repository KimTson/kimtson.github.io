var anzhiyu_musicPlaying=false;var anzhiyu_musicFirst=false;var navMusicEl=document.getElementById("nav-music");var anzhiyu={musicToggle:function(changePaly=true){if(!anzhiyu_musicFirst){musicBindEvent();anzhiyu_musicFirst=true}let msgPlay='<i class="fa-solid fa-play"></i><span>播放音乐</span>';let msgPause='<i class="fa-solid fa-pause"></i><span>暂停音乐</span>';if(anzhiyu_musicPlaying){navMusicEl.classList.remove("playing");document.getElementById("nav-music-hoverTips").innerHTML="音乐已暂停";anzhiyu_musicPlaying=false;navMusicEl.classList.remove("stretch")}else{navMusicEl.classList.add("playing");anzhiyu_musicPlaying=true;navMusicEl.classList.add("stretch")}if(changePaly)document.querySelector("#nav-music meting-js").aplayer.toggle()},musicTelescopic:function(){if(navMusicEl.classList.contains("stretch")){navMusicEl.classList.remove("stretch")}else{navMusicEl.classList.add("stretch")}},musicSkipBack:function(){document.querySelector("#nav-music meting-js").aplayer.skipBack()},musicSkipForward:function(){document.querySelector("#nav-music meting-js").aplayer.skipForward()},musicGetName:function(){var x=$(".aplayer-title");var arr=[];for(var i=x.length-1;i>=0;i--){arr[i]=x[i].innerText}return arr[0]},};function musicBindEvent(){document.querySelector("#nav-music .aplayer-music").addEventListener("click",function(){anzhiyu.musicTelescopic()});document.querySelector("#nav-music .aplayer-button").addEventListener("click",function(){anzhiyu.musicToggle(false)})}