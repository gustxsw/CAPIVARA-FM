function playTrack(audioFile, title) {
  const audioPlayer = document.getElementById("audioPlayer");
  const audioSource = document.getElementById("audioSource");
  const audioTitle = document.getElementById("audioTitle");

  audioTitle.innerText = title;
  audioSource.src = audioFile;
  audioPlayer.load(); // Recarrega o áudio
  audioPlayer.play(); // Só vai funcionar se houver interação prévia no iOS
}
