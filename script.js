const questions = document.querySelectorAll('.faqquestion');

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

// Function to simulate the typing effect with looping and backspacing
function typeWriterLoop(elementId, text, speed, waitTime) {
    let i = 0;
    let isDeleting = false;
    const element = document.getElementById(elementId);

    function type() {
        // If not deleting, type the next character
        if (!isDeleting) {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else {
                // If the text is completely typed, start deleting after waitTime
                isDeleting = true;
                setTimeout(type, waitTime);
            }
        } else {
            // If deleting, remove the last character
            if (i > 0) {
                element.innerHTML = text.substring(0, i - 1);
                i--;
                setTimeout(type, speed);
            } else {
                // When deletion is complete, start typing again
                isDeleting = false;
                setTimeout(type, waitTime);
            }
        }
    }

    // Start the typing effect
    type();
}

// Example usage
const textToType = "Di Website Official Veynar SMP";
typeWriterLoop("typing", textToType, 100, 100); // Speed is 100ms, waitTime is 1000ms before starting to delete