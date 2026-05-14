const respawn = document.getElementById("respawn");
const respawnDefuse = document.getElementById("respawn-gm2");
const observer = new MutationObserver(() => {
  if (getComputedStyle(respawn).display === 'block') {
    defly.spectate();
  }
});
const observerDefuse = new MutationObserver(() => {
  if (getComputedStyle(respawnDefuse).display === 'block') {
    defly.spectate();
  }
});
observer.observe(respawn, { attributes: true, attributeFilter: ['style'] });
observerDefuse.observe(respawnDefuse, { attributes: true, attributeFilter: ['style'] });
