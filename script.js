const btnMusic = document.querySelector('.music-btn');

btnMusic.addEventListener('click', (e) => {
    console.log('dsd');
    const audio = new Audio();
    audio.src = './click.mp3'; 
    audio.autoplay = true;
})