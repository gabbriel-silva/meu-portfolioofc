document.querySelector('.btn').addEventListener('click', function() {
  
  window.location.href = 'https://github.com/gabbriel-silva';
});


document.querySelector('.btn2').addEventListener('click', function() {
  
  window.location.href = 'mailto:gabrielalmeidasilvaofc@gmail.com';
});


document.querySelector('.fa-github').parentElement.addEventListener('click', function() {
  window.open('https://github.com/gabbriel-silva', '_blank');
});

document.querySelector('.fa-linkedin-in').parentElement.addEventListener('click', function() {
  window.open('https://www.linkedin.com/in/gabrielsilva16012003/', '_blank');
});

document.querySelector('.fa-instagram').parentElement.addEventListener('click', function() {
  window.open('https://www.instagram.com/almeida.gb_', '_blank');
});
