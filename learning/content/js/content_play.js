/*************************************video******************************************/
let contentcontainer = document.querySelector('.container .main-video');
contentcontainer.classList.toggle('show');

let listVideo = document.querySelectorAll('.contentlist .vid'); 
let mainVideo = document.querySelector('.main-video video');
mainVideo.controls = true;
/*************************************elements******************************************/
const buttonsArray = Array.from(document.querySelectorAll('.dropdown-item'));
const btnpretest = document.getElementById('btnpretest');
const btnposttest = document.getElementById('btnposttest');
const chatbutton = document.getElementById('chat');
const chatbot = document.getElementById('aibutton');
buttonsArray.push(btnpretest,btnposttest,chatbutton,chatbot);

let eleframe = document.querySelector('.container .eleframe');

let youtube = document.querySelector('.container .youtube');
let youtubesrc = "";
/*************************************youtube******************************************/
const videoContainer = document.getElementById('youtube');
let vplay = false;

// Declare `player` in a broader scope
let player;

function addyoutube() {
  if (!videoContainer.querySelector('iframe')) {
    const iframe = document.createElement('iframe');
    iframe.id = 'youtube-video';
    iframe.width = "800";
    iframe.height = "600";
    iframe.src = youtubesrc;
    iframe.frameBorder = '0';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    videoContainer.appendChild(iframe);
    loadYouTubeAPI();
  }
}

function loadYouTubeAPI() {
  if (!window.YT) {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  } else {
    onYouTubeIframeAPIReady();
  }
}

// `onYouTubeIframeAPIReady` must be accessible globally
window.onYouTubeIframeAPIReady = function () {
  player = new YT.Player('youtube-video');
};

/*************************************remove******************************************/
function hiddenele() {
  const iframe = videoContainer.querySelector('iframe');
  if (iframe && vplay == true) {
    iframe.remove();
    vplay = false;
  }
  if (eleframe.classList.contains('show')) 
    {
    eleframe.classList.toggle('hidden');
    eleframe.classList.remove('show');
    }
    if (youtube.classList.contains('show')) 
    {
        youtube.classList.toggle('hidden');
        youtube.classList.remove('show');
    }
    if (contentcontainer.classList.contains('show')) 
      {
        mainVideo.pause();
        contentcontainer.classList.toggle('close');
        contentcontainer.classList.remove('show');
      }

}
/*************************************events ele******************************************/
function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}

function loadForm(url, id) {
  document.getElementById('formFrame').src = url; // Load in iframe
  console.log(id);

  if (id === "act6" || id === "act3") {
    document.getElementById('formFrame').src = ""; // Load in iframe
    window.open(url, '_blank'); // Open in new tab
  }
}

function videorun() {
  contentcontainer.classList.remove('close');
  contentcontainer.classList.toggle('show');
};



buttonsArray.forEach((button) => {
  button.addEventListener(
    "click",
    debounce(() => {
    buttonsArray.forEach(btn => btn.classList.remove('playing'));
    listVideo.forEach(vid => vid.classList.remove('active'));
    button.classList.add('playing');
    hiddenele();
        if(button.id === "vid0"){mainVideo.src= "vid1/vid0.mp4"; mainVideo.controls=true; videorun();}
        if(button.id === "intro"){mainVideo.src= "vid1/intro.mp4"; mainVideo.controls=false; videorun();}
        if(button.id === "vid1"){mainVideo.src= "vid1/vid1.mp4"; mainVideo.controls=true; videorun();}
        if(button.id === "vid2"){mainVideo.src= "vid1/vid2.mp4"; mainVideo.controls=true; videorun();}
        if(button.id === "vid3"){mainVideo.src= "vid1/vid3.mp4"; mainVideo.controls=true; videorun();}
        if(button.id === "vid4"){mainVideo.src= "vid1/vid4.mp4"; mainVideo.controls=true; videorun();}

        if(button.id === "you1"){youtubesrc='https://www.youtube.com/embed/_W1WOa51pCg?si=KgFK6fI_TAaBCe-x'; addyoutube(); vplay = true; youtube.classList.toggle('show');}     
        if(button.id === "btnpretest"){loadForm('https://forms.gle/KhV7UaCgtP91ci7E6'); eleframe.classList.toggle('show');}
        if(button.id === "btnposttest"){loadForm('https://forms.gle/M7UENDj2XX6v29pX6'); eleframe.classList.toggle('show');}
        if(button.id === "aibutton"){loadForm('chatbot/index.html'); eleframe.classList.toggle('show');}
        if(button.id === "chat"){loadForm('chat/chat.html'); eleframe.classList.toggle('show');}
        if(button.id === "intro"){loadForm(' '); eleframe.classList.toggle('show');}

        if(button.id === "act1"){loadForm('https://forms.gle/9i7mbjRFCxUCyfV39'); eleframe.classList.toggle('show');}
        if(button.id === "act2"){loadForm('https://forms.gle/d735RA8xWoUhpPj76'); eleframe.classList.toggle('show');}
        if(button.id === "act3"){loadForm('https://forms.gle/x4qFdDaLDe3BZ93n7',"act3"); eleframe.classList.toggle('show');}
        if(button.id === "act4"){loadForm('https://forms.gle/yqMPBrsvYxWX8X137'); eleframe.classList.toggle('show');}
        if(button.id === "act5"){loadForm('https://forms.gle/ugpbQjRL51bQGRqd9'); eleframe.classList.toggle('show');}
        if(button.id === "act6"){loadForm('https://forms.gle/rotuYqykQjuQctrT6',"act6"); eleframe.classList.toggle('show');}
        if(button.id === "act7"){loadForm('https://forms.gle/CMDw1ALxX86NnKgV6'); eleframe.classList.toggle('show');}
        //**************************************************2*****************************************************************/   
        if(button.id === "2vid0"){mainVideo.src= "vid2/vid0.mp4"; mainVideo.controls=true; videorun();}
        if(button.id === "2intro"){mainVideo.src= "vid2/intro.mp4"; mainVideo.controls=false; videorun();}
        if(button.id === "2vid1"){mainVideo.src= "vid2/vid1.mp4"; mainVideo.controls=true; videorun();}
        if(button.id === "2vid2"){mainVideo.src= "vid2/vid2.mp4"; mainVideo.controls=true; videorun();}
        if(button.id === "2vid3"){mainVideo.src= "vid2/vid3.mp4"; mainVideo.controls=true; videorun();}
        if(button.id === "2vid4"){mainVideo.src= "vid2/vid4.mp4"; mainVideo.controls=true; videorun();}
        if(button.id === "2vid5"){mainVideo.src= "vid2/vid5.mp4"; mainVideo.controls=true; videorun();}
        if(button.id === "2vid6"){mainVideo.src= "vid2/vid6.mp4"; mainVideo.controls=true; videorun();}
        if(button.id === "2vid7"){mainVideo.src= "vid2/vid7.mp4"; mainVideo.controls=true; videorun();}
        if(button.id === "2vid8"){mainVideo.src= "vid2/vid8.mp4"; mainVideo.controls=true; videorun();}
        if(button.id === "2vid9"){mainVideo.src= "vid2/vid9.mp4"; mainVideo.controls=true; videorun();}

        if(button.id === "2act1"){loadForm('https://forms.gle/oed14C2dkHgBervn6'); eleframe.classList.toggle('show');}
        if(button.id === "2act2"){loadForm('https://forms.gle/PqGcJz2WtX7sBnTg8'); eleframe.classList.toggle('show');}
        if(button.id === "2act3"){loadForm('https://forms.gle/qk9xHELSrNgj1fL6A'); eleframe.classList.toggle('show');}
        if(button.id === "2act4"){loadForm('https://forms.gle/cp7QiQ7wEdR5esxj8'); eleframe.classList.toggle('show');}
        if(button.id === "2act5"){loadForm('https://forms.gle/YZiNi5RM4JRiXxiY8'); eleframe.classList.toggle('show');}
        if(button.id === "2act6"){loadForm('https://forms.gle/jzRkZLzzzdPCQXBLA'); eleframe.classList.toggle('show');}
        if(button.id === "2act7"){loadForm('https://forms.gle/GBMjgPzLpmx6bum19'); eleframe.classList.toggle('show');}
        if(button.id === "2act8"){loadForm('https://forms.gle/fAQXjdL6ujHjFzMg7'); eleframe.classList.toggle('show');}
        if(button.id === "2act9"){loadForm('https://forms.gle/zJUN4MD3NHPGrRUE6'); eleframe.classList.toggle('show');}
    
        if(button.id === "2you1"){youtubesrc='https://www.youtube.com/embed/k4m7mR1JTDE?si=v6VD5SVy5ylwjBGN'; addyoutube(); vplay = true; youtube.classList.toggle('show');}     

      }, 300) // 300ms delay to prevent excessive calls
    );
  });

