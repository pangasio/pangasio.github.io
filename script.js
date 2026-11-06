'use strict';
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('share').addEventListener('click', async () => {
  const status = document.getElementById('share-status');
  const url = window.location.href.split('#')[0];
  const text = 'Movimento Pangasio Italia — L’unico Pesce Etico. Una parodia che nuota controcorrente.';
  try {
    if (navigator.share) {
      await navigator.share({ title: document.title, text, url });
      status.textContent = 'Il pangasio ha preso il largo. Grazie per la condivisione!';
    } else if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(`${text}\n${url}`);
      status.textContent = 'Link copiato! Ora puoi condividerlo con il tuo banco.';
    } else {
      status.textContent = `Condividi questo indirizzo: ${url}`;
    }
  } catch (error) {
    status.textContent = error.name === 'AbortError' ? 'Nessuna fretta. Il pangasio sa aspettare.' : `Puoi copiare l’indirizzo dalla barra del browser: ${url}`;
  }
});
