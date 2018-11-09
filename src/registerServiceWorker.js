export default function register() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        registerServiceWorker('/coconut_service_worker.js');
      }
    );
  }
}

function registerServiceWorker(url) {
  navigator.serviceWorker
    .register(url)
    .then(registration => {
      console.log(`Service worker installed with scope: ${registration.scope}`);
    }, error => {
      console.warn(`Could not install service worker: ${error}`);
    });
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}
