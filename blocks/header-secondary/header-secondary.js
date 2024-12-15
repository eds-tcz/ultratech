export default function decorate(block) {
  [...block.children].forEach((row, r) => {
    row.classList.add('header-secondary-'.concat(r + 1));
    if (r === 0) {
      [...row.children].forEach((div, d) => {
        if (d === 0) {
          div.classList.add('secondary-1');
        }
        if (d === 1) {
          div.classList.add('secondary-2');
        }
        if (d === 2) {
          div.classList.add('secondary-3');
          const tdElements = div.querySelectorAll('td');
          tdElements.forEach((td) => {
            if (td.textContent.trim() === 'Get in Touch') {
              td.classList.add('touch');

              // Add event listener for toggling the touch-form visibility
              td.addEventListener('click', () => {
                const touchForm = document.querySelector('.touch-form-wrapper');
                if (touchForm) {
                  touchForm.style.display = 'block'; // Show the form
                }
              });
            }
          });
        }
        if (d === 3) {
          div.classList.add('login-button');
        }
      });
    }
  });
}
