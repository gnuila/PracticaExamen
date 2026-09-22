const app = new Framework7({
  el: '#app',
  name: 'miapp',
  id: 'com.delivery.miapp',
  theme: 'auto',
  routes: [
    { path: '/', url: './pages/home.html' },
  ],
});


$$(document).on('page:init', '.page[data-name="ejemplo"]', function () {
  const button = document.getElementById('demo-alert');
  if (button) button.addEventListener('click', () => app.dialog.alert('Framework7 está funcionando correctamente.', 'Página ejemplo'));
});
