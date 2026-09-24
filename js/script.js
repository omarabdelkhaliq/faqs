let quitions = document.querySelectorAll('.quition');

quitions.forEach(function(q) {
   let answer = q.nextElementSibling;
   let plusIcon = q.querySelector('.more');
   let minusIcon = q.querySelector('.less');
   
   plusIcon.addEventListener('click', function() {
      answer.classList.add('open');
      plusIcon.style.display = 'none';
      minusIcon.style.display = 'block';
   });
   
   minusIcon.addEventListener('click', function() {
      answer.classList.remove('open');
      minusIcon.style.display = 'none';
      plusIcon.style.display = 'block';
   });
});