export default function decorate(block) {
  [...block.children].forEach((row, r) => {
    row.classList.add('header-primary-'.concat(r + 1));
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
          div.classList.add('main-search-bar');
          const pTag = div.querySelector('p');
          if (pTag) {
            pTag.remove();
          }
          const searchBarContainer = document.createElement('div');
          searchBarContainer.classList.add('search-bar-container');
          const searchBar = document.createElement('div');
          searchBar.classList.add('search-bar');
          const searchIcon = document.createElement('span');
          searchIcon.classList.add('search-icon');
          const searchImage = document.createElement('img');
          searchImage.src = '../../images/mlow-market-nav-1/search-icon.svg';
          searchImage.width = 24;
          searchImage.height = 24;
          searchIcon.appendChild(searchImage);
          searchBar.appendChild(searchIcon);
          searchBarContainer.appendChild(searchBar);
          div.appendChild(searchBarContainer);
        }
        if (d === 3) {
          div.classList.add('login-button');
        }
      });
    }
  });
}
