export default function decorateAccordion(block) {
  // Define the number of cards for each accordion-item-body
  const cardCounts = [3, 12, 6, 8];  // Example: first accordion needs 6 cards, second needs 12, etc.

  [...block.children].forEach((row, index) => {
    // Get the label and body of the accordion item
    const label = row.children[0];
    const summary = document.createElement('summary');
    summary.className = 'accordion-item-label';
    summary.append(...label.childNodes);

    const body = row.children[1];
    body.className = 'accordion-item-body';

    // Determine the number of cards for the current accordion-item based on its index
    const cardCount = cardCounts[index] || 6;  // Default to 6 cards if the index exceeds the cardCounts array

    // Create a wrapper for the cards
    const cardWrapper = document.createElement('div');
    cardWrapper.className = 'cards-wrapper'; // This is the container for all the cards.

    // Loop to create the cards dynamically
    for (let i = 1; i <= cardCount; i++) {
      // Create a new div for each card
      const card = document.createElement('div');
      card.className = 'cards-inner';  // Assign a common class name for the card container

      // Create the first inner div (image-1 + p1)
      const cardSubInner1 = document.createElement('div');
      cardSubInner1.className = `cards-sub-inner-1`;

      const img1 = document.createElement('img');
      img1.src = `https://www.ultratechcement.com/content/dam/ultratechcement/ultratech-images/pdf-icon.jpg`;  // Example image source
      img1.alt = `Image ${i}A`;
      img1.className = 'image-1';
      cardSubInner1.appendChild(img1);

      const p1 = document.createElement('p');
      p1.textContent = `Notice of AGM 2024`;
      cardSubInner1.appendChild(p1);

      // Create the second inner div (image-2 + p2)
      const cardSubInner2 = document.createElement('div');
      cardSubInner2.className = `cards-sub-inner-2`;

      const img2 = document.createElement('img');
      img2.src = `https://www.ultratechcement.com/content/dam/ultratechcement/icons/Download.png`;  // Example image source
      img2.alt = `Image ${i}B`;
      img2.className = 'image-2';
      cardSubInner2.appendChild(img2);

      const p2 = document.createElement('p');
      p2.textContent = `Download`;
      cardSubInner2.appendChild(p2);

      // Append both sub-inner divs to the card
      card.appendChild(cardSubInner1);
      card.appendChild(cardSubInner2);

      // Append the card to the wrapper
      cardWrapper.appendChild(card);
    }

    // Now, apply the layout structure with the wrapper to the accordion item body
    body.appendChild(cardWrapper);

    // Create the details element and append the summary and body
    const details = document.createElement('details');
    details.className = 'accordion-item';
    details.append(summary, body);

    // Replace the original row with the new details element
    row.replaceWith(details);
  });
}
