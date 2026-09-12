const boton = document.getElementById('btnSoundtrack');

const etiquetaAudio = document.createElement('audio');
etiquetaAudio.setAttribute('src', 'thousand-march.mp3');
document.body.appendChild(etiquetaAudio); 

boton.addEventListener('click', () => {
  etiquetaAudio.currentTime = 0; 
  
  etiquetaAudio.play().catch(error => {
    console.error("Playback failed:", error);
  });
});