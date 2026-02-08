function escolherHusband(correto) {
  if (!correto) {
    alert('Hmm… tenta de novo 😏');
    return;
  }

  // Mostrar mensagem de acerto
  const feedback = document.getElementById('correct-message');
  feedback.style.display = 'block';

  // Música
  const music = document.getElementById('husbandMusic');
  music.volume = 0.2;
  music.currentTime = 0;
  music.play();

  // Após 2.5s, ir para a próxima parte
  setTimeout(() => {
    document.getElementById('husband-section').style.display = 'none';
    document.getElementById('proposal-section').style.display = 'flex';

    // parar música ao entrar na próxima parte
    music.pause();
  }, 2500);
}
