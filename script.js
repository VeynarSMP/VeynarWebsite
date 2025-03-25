const questions = document.querySelectorAll('.faqquestion');
const newsHeaders = document.querySelectorAll('.newsinfo');
const patchHeaders = document.querySelectorAll('.patchinfo');

newsHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    const arrow = header.querySelector('.arrow');

    content.style.display = content.style.display === 'block' ? 'none' : 'block';
    arrow.classList.toggle('up');
  });
});

patchHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    const arrow = header.querySelector('.arrow');

    content.style.display = content.style.display === 'block' ? 'none' : 'block';
    arrow.classList.toggle('up');
  });
});


questions.forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    const arrow = question.querySelector('.arrow');
    
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    arrow.classList.toggle('up');
  });
});

const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
