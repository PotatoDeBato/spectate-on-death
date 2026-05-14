const respawn = document.getElementById("respawn");
const respawnDefuse = document.getElementById("respawn-gm2");
const respawnButton = document.getElementById("respawn-button");
const respawnButtonDefuse = document.querySelector("#respawn-buttons-gm2 button");
const observer = new MutationObserver(() => {
  if (getComputedStyle(respawn).display === 'block') {
    defly.spectate();
    observer.disconnect();
  }
});
const observerDefuse = new MutationObserver(() => {
  if (getComputedStyle(respawnDefuse).display === 'block') {
    defly.spectate();
    observerDefuse.disconnect();
  }
});
respawnButton.addEventListener('click', () => {
  observer.observe(respawn, { attributes: true, attributeFilter: ['style'] });
});

respawnButtonDefuse.addEventListener('click', () => {
  observerDefuse.observe(respawnDefuse, { attributes: true, attributeFilter: ['style'] });
});

observer.observe(respawn, { attributes: true, attributeFilter: ['style'] });
observerDefuse.observe(respawnDefuse, { attributes: true, attributeFilter: ['style'] });
