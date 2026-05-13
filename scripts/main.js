const respawn = document.getElementById("respawn");
const respawnButton = document.getElementById("respawn-button");
const observer = new MutationObserver(() => {
  if (respawn.style.display === 'block') {
    defly.spectate();
    observer.disconnect();
  }
});
respawnButton.addEventListener('click', () => {
  observer.observe(respawn, { attributes: true, attributeFilter: ['style'] });
});

observer.observe(respawn, { attributes: true, attributeFilter: ['style'] });