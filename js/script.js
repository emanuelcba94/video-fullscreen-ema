const video = document.getElementById('video');
const btnVideoControl = document.getElementById('btn-control');

btnVideoControl.addEventListener('click', () => {
    if(video.paused){
        video.play();
        btnVideoControl.innerHTML = `<i class="fa-solid fa-pause"></i>`
    }else{
        video.pause();
        btnVideoControl.innerHTML = `<i class="fa-solid fa-play"></i>`
    }
})

