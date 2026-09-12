const boton = document.getElementById('btnSoundtrack');

boton.addEventListener('click', () => {
  const etiquetaAudio = document.createElement('audio');
  etiquetaAudio.setAttribute('src', 'thousand-march.mp3');
  
  document.body.appendChild(etiquetaAudio); 
  
  etiquetaAudio.play().catch(error => {
    console.error("Playback failed:", error);
  });
});