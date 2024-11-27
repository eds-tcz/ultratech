export default function decorateAccordion(block) {
  const cardCounts = [3, 10, 6, 9];  // Number of cards for each accordion item

  // Define a global array of unique PDF names and URLs for all the cards
  const pdfTitles = [
    "Notice of AGM 2024", 
    "Annual Report 2023", 
    "Financial Summary 2023", 
    "ESOS Annexure 2024", 
    "Credit Rating 2023", 
    "Corporate Governance 2024", 
    "Investor Presentation 2024", 
    "Sustainability Report 2024", 
    "Shareholder Guide 2024", 
    "Subsidiary Report 2023", 
    "Market Analysis 2024", 
    "ESG Impact 2024", 
    "Audit Report 2024", 
    "Q1 Financial Results 2024", 
    "Annual General Meeting 2023", 
    "Corporate Social Responsibility 2024", 
    "Dividend Distribution 2024",
    // Add more unique titles as needed
  ];

  const pdfUrls = [
    "https://drive.google.com/file/d/1TvSoW6IIXIL9ZNJkvkz7LsLNbAmxu0V9/view?usp=drive_link", 
    "https://example.com/pdfs/AnnualReport2023.pdf", 
    "https://example.com/pdfs/FinancialSummary2023.pdf", 
    "https://example.com/pdfs/ESOSAnnexure2024.pdf", 
    "https://example.com/pdfs/CreditRating2023.pdf", 
    "https://example.com/pdfs/CorporateGovernance2024.pdf", 
    "https://example.com/pdfs/InvestorPresentation2024.pdf", 
    "https://example.com/pdfs/SustainabilityReport2024.pdf", 
    "https://example.com/pdfs/ShareholderGuide2024.pdf", 
    "https://example.com/pdfs/SubsidiaryReport2023.pdf", 
    "https://example.com/pdfs/MarketAnalysis2024.pdf", 
    "https://example.com/pdfs/ESGImpact2024.pdf", 
    "https://example.com/pdfs/AuditReport2024.pdf", 
    "https://example.com/pdfs/Q1FinancialResults2024.pdf", 
    "https://example.com/pdfs/AGM2023.pdf", 
    "https://example.com/pdfs/CSR2024.pdf", 
    "https://example.com/pdfs/DividendDistribution2024.pdf",
    // Add more URLs corresponding to each title as needed
  ];

  let pdfIndex = 0;  // This will keep track of the current index in the pdfTitles and pdfUrls arrays

  [...block.children].forEach((row, index) => {
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
    for (let i = 0; i < cardCount; i++) {
      // Create a new div for each card
      const card = document.createElement('div');
      card.className = 'cards-inner';  // Assign a common class name for the card container

      // Create the first inner div (image-1 + p1)
      const cardSubInner1 = document.createElement('div');
      cardSubInner1.className = `cards-sub-inner-1`;

      const img1 = document.createElement('img');
      img1.src = `https://www.ultratechcement.com/content/dam/ultratechcement/ultratech-images/pdf-icon.jpg`;  // Example image source
      img1.alt = `Image ${pdfIndex + 1}A`;
      img1.className = 'image-1';
      cardSubInner1.appendChild(img1);

      // Set a unique PDF title for each card
      const p1 = document.createElement('p');
      p1.textContent = pdfTitles[pdfIndex];  // Use the title from the pdfTitles array
      cardSubInner1.appendChild(p1);

      // Create the second inner div (image-2 + p2)
      const cardSubInner2 = document.createElement('div');
      cardSubInner2.className = `cards-sub-inner-2`;

      const img2 = document.createElement('img');
      img2.src = `https://www.ultratechcement.com/content/dam/ultratechcement/icons/Download.png`;  // Example image source
      img2.alt = `Image ${pdfIndex + 1}B`;
      img2.className = 'image-2';
      cardSubInner2.appendChild(img2);

      const p2 = document.createElement('p');
      p2.textContent = `Download`;  // You can modify this text as needed
      cardSubInner2.appendChild(p2);

      // Create the link that opens the PDF when clicked
      const link = document.createElement('a');
      link.href = pdfUrls[pdfIndex];  // Use the unique PDF URL from the pdfUrls array
      link.target = '_blank';  // Open in a new tab

      // Append the link around both the image and text content (making both clickable)
      link.appendChild(cardSubInner2);

      // Append the card elements (sub-inner divs)
      card.appendChild(cardSubInner1);
      card.appendChild(link);  // Wrap the second sub-inner div with the link

      // Append the card to the wrapper
      cardWrapper.appendChild(card);

      // Move to the next unique PDF title and URL for the next card
      pdfIndex++;
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
