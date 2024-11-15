export default function decorate(block) {
  [...block.children].forEach((row, r) => {
    row.classList.add('header-secondary-'.concat(r + 1));
    if (r === 0) {
      [...row.children].forEach((div, d) => {
        if (d === 0) {
          div.classList.add('label-1');
        }
        if (d === 1) {
          div.classList.add('label-2');
        }
        if (d === 2) {
          div.classList.add('label-3');
        }
        if (d === 3) {
          
        }
        if (d === 3) {
          div.classList.add('login-button');
        }
      });
    }
  });
}
