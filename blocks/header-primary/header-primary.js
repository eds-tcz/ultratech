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

  // Remove any existing <p> tag
  const pTag = div.querySelector('p');
  if (pTag) {
    pTag.remove();
  }

  // Create the search bar container
  const searchBarContainer = document.createElement('div');
  searchBarContainer.classList.add('search-bar-container');

  // Create the search bar
  const searchBar = document.createElement('div');
  searchBar.classList.add('search-bar');

  // Create the search icon (magnifying glass)
  const searchIcon = document.createElement('span');
  searchIcon.classList.add('search-icon');
  const searchImage = document.createElement('img');
  searchImage.src = '../../images/svgviewer-png-output(2).png';  // Image for the search icon
  searchImage.width = 24;
  searchImage.height = 24;
  searchIcon.appendChild(searchImage);
  
  // Create the search voice icon (microphone)
  const voiceIcon = document.createElement('span');
  voiceIcon.classList.add('voice-icon');
  const voiceImage = document.createElement('img');
  voiceImage.src = '../../images/svgviewer-png-output(1).png';  // Image for the microphone icon
  voiceImage.width = 24;
  voiceImage.height = 24;
  voiceIcon.appendChild(voiceImage);
  
  // Add the icons to the search bar
  searchBar.appendChild(searchIcon);
  searchBar.appendChild(voiceIcon);  // Append voice icon after the search icon

  // Append the search bar to the container
  searchBarContainer.appendChild(searchBar);

  // Add the search bar container to the main div
  div.appendChild(searchBarContainer);

  // Add event listener to the voice search icon (you can add functionality later)
  voiceIcon.addEventListener('click', () => {
    alert('Voice search clicked!');  // Placeholder for voice search functionality
    // Implement voice search functionality here
  });
}

        if (d === 3) {
          div.classList.add('login-button');
        }
      });
    }
  });
}
