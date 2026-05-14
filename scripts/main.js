const respawn = document.getElementById("respawn");
const respawnButton = document.getElementById("respawn-button");
const respawnDefuse = document.getElementById("respawn-gm2");
const observer = new MutationObserver(() => {
  if (getComputedStyle(respawn).display === 'block') {
    defly.spectate();
    observer.disconnect();
  }
});
const observerDefuse = new MutationObserver(() => {
  if (getComputedStyle(respawnDefuse).display === 'block') {
    defly.spectate();
  }
});

respawnButton.addEventListener("click", () => {
  observer.observe(respawn, { attributes: true, attributeFilter: ['style'] });
});

observer.observe(respawn, { attributes: true, attributeFilter: ['style'] });
observerDefuse.observe(respawnDefuse, { attributes: true, attributeFilter: ['style'] });
