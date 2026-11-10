console.log("js is working");
let song=document.getElementById("song");
let btn=document.querySelector(".pause");
let total=document.getElementById("total");
let current=document.getElementById("current");
let bar=document.querySelector(".songbar");
let first=document.querySelector(".first");
let equalizer=document.querySelector(".equalizer");

function play(){
    
if(song.paused){
    song.play();
    btn.textContent= "❚❚";
     
}
else{
    song.pause();
    btn.textContent="▶" ;
}


}

function showTotal(){
    let minutes=Math.floor(song.duration/60);
    let seconds=Math.floor(song.duration%60);

    total.textContent=minutes +":"+ String(seconds).padStart(2,"0");

}
song.addEventListener("loadedmetadata",showTotal);

if(song.readyState>=1){
    showTotal();
}

song.addEventListener("timeupdate",function(){
    current.textContent=Math.floor(song.currentTime/60)+":"+String(Math.floor(song.currentTime%60)).padStart(2,"0");
    console.log(song.duration);
});

song.addEventListener("timeupdate",function(){
    bar.value=(song.currentTime/song.duration)*100;
});
bar.addEventListener("input",function(){
    song.currentTime=(bar.value/100)*song.duration;
});

song.onplay=function(){
    
    
     first.classList.add("playing");
     console.log(first.className);
};

song.onpause= function(){
   
    first.classList.remove("playing");
    console.log(first.className);
};

