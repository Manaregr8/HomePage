const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.querySelectorAll(".glitch-link").forEach(link => {
  link.addEventListener("mouseenter", event => {
    let iterations = 0;
    const target = event.target;
    const original = target.dataset.value;

    const interval = setInterval(() => {
      target.innerText = original
        .split("")
        .map((letter, index) => {
          if (index < iterations) return original[index];
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iterations >= original.length) clearInterval(interval);
      iterations += 1 / 2; // Faster to reduce overall CPU load
    }, 40); // Slightly increased interval
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

document.querySelectorAll('.youtube-placeholder').forEach(el => {
    el.addEventListener('click', () => {
      const videoId = el.dataset.id;
      const iframe = document.createElement('iframe');
      iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
      iframe.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
      iframe.allowFullscreen = true;
      iframe.className = 'youtube-iframe';
      el.replaceWith(iframe);
    });
  });
