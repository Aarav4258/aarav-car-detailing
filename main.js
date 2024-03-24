document.addEventListener('DOMContentLoaded', function() {
  var openButtons = document.querySelectorAll('#openButton');
  var popups = document.querySelectorAll('.popup');
  var closeButtons = document.querySelectorAll('.close');

  openButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      popups.forEach(function(popup) {
        popup.style.display = 'block';
      });
      document.body.style.overflow = 'hidden'; // Disable scrolling
    });
  });

  closeButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      popups.forEach(function(popup) {
        popup.style.display = 'none';
      });
      document.body.style.overflow = 'auto'; // Enable scrolling
    });
  });
});