// joyy_dev - Contact Page Interactivity & Feedback
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  const copyEmailBtn = document.getElementById('copyEmailBtn');

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', async () => {
      const email = copyEmailBtn.getAttribute('data-email') || 'joyceava874@gmail.com';
      try {
        await navigator.clipboard.writeText(email);
        const originalText = copyEmailBtn.innerText;
        copyEmailBtn.innerText = 'Copied to clipboard!';
        setTimeout(() => {
          copyEmailBtn.innerText = originalText;
        }, 2500);
      } catch (err) {
        console.error('Failed to copy', err);
      }
    });
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (formStatus) {
        formStatus.textContent = 'Thank you for your message! I will get back to you shortly.';
        formStatus.style.display = 'block';
        formStatus.style.color = 'var(--c-accent)';
      }
      contactForm.reset();
    });
  }
});
