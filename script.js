// Função para tocar a faixa
function playTrack(audioFile, title) {
  const audioPlayer = document.getElementById("audioPlayer");
  const audioTitle = document.getElementById("audioTitle");

  // Atualizar o título da música
  audioTitle.innerText = title;

  // Alterar o arquivo de áudio
  audioPlayer.src = audioFile;

  // Reproduzir o áudio
  audioPlayer.play();
}

// Função para pausar o áudio (se quiser usar no futuro)
function pauseTrack() {
  const audioPlayer = document.getElementById("audioPlayer");
  audioPlayer.pause();
}
