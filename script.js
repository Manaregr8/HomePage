const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.querySelectorAll("a").forEach(link => {
  link.addEventListener("mouseover", event => {
    let interactions = 0;

    const interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if (index < interactions) {
            return event.target.dataset.value[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (interactions > event.target.dataset.value.length) {
        clearInterval(interval);
      }

      interactions += 1 / 5;
    }, 30);
  });
});

  const toggleBtn = document.getElementById('toggleCourses');
  const container = document.querySelector('.courseCardContainer');

  toggleBtn.addEventListener('click', () => {
    container.classList.toggle('expanded');
    toggleBtn.textContent = container.classList.contains('expanded') ? 'Show Less' : 'Show More';
  });
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.3 // 30% of the section must be visible
  });

  document.querySelectorAll('.slide-up-section').forEach(section => {
    observer.observe(section);
  });

    document.getElementById('formToggle').addEventListener('click', function(e) {
        e.preventDefault();
        const form = document.querySelector('.formContainer');
        form.style.display = 'flex';
    });
document.getElementById('closeForm').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.formContainer').style.display = 'none';
});
