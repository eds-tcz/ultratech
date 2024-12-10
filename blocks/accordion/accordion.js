export default function decorateAccordionTabs(block) {
  // Define configurations for accordions
  const accordionConfigurations = [
    {
      accordionNames: [
        "Annual Reports",
        "Subsidiary Accounts",
        "Annual Return",
        "ESOS Annexure",
        "Credit Rating",
      ],
      cardCounts: [3, 10, 6, 9, 5],
      pdfTitles: [
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
        "Audit Report 2024",
        "Audit Report 2024",
        "Audit Report 2024",
        "Audit Report 2024",
        "Audit Report 2024",
        "Audit Report 2024",
        "Audit Report 2024",
        "Audit Report 2024",
        "Audit Report 2024",
        "Audit Report 2024",
        "Audit Report 2024",
        "Audit Report 2024",
        "Audit Report 2024",
        "Audit Report 2024",
        "Audit Report 2024",
        "Audit Report 2024",
        "Audit Report 2024",

      ],
      pdfUrls: [
        "https://drive.google.com/file/d/1TvSoW6IIXIL9ZNJkvkz7LsLNbAmxu0V9/view?usp=drive_link",
        "https://drive.google.com/file/d/1TvSoW6IIXIL9ZNJkvkz7LsLNbAmxu0V9/view?usp=drive_link",
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
        "https://drive.google.com/file/d/1TvSoW6IIXIL9ZNJkvkz7LsLNbAmxu0V9/view?usp=drive_link",
        "https://drive.google.com/file/d/1TvSoW6IIXIL9ZNJkvkz7LsLNbAmxu0V9/view?usp=drive_link",
        "https://drive.google.com/file/d/1TvSoW6IIXIL9ZNJkvkz7LsLNbAmxu0V9/view?usp=drive_link",
        "https://drive.google.com/file/d/1TvSoW6IIXIL9ZNJkvkz7LsLNbAmxu0V9/view?usp=drive_link",
        "https://drive.google.com/file/d/1TvSoW6IIXIL9ZNJkvkz7LsLNbAmxu0V9/view?usp=drive_link",
        "https://drive.google.com/file/d/1TvSoW6IIXIL9ZNJkvkz7LsLNbAmxu0V9/view?usp=drive_link",
        "https://drive.google.com/file/d/1TvSoW6IIXIL9ZNJkvkz7LsLNbAmxu0V9/view?usp=drive_link",
        "https://drive.google.com/file/d/1TvSoW6IIXIL9ZNJkvkz7LsLNbAmxu0V9/view?usp=drive_link",
        "https://drive.google.com/file/d/1TvSoW6IIXIL9ZNJkvkz7LsLNbAmxu0V9/view?usp=drive_link",
        "https://drive.google.com/file/d/1TvSoW6IIXIL9ZNJkvkz7LsLNbAmxu0V9/view?usp=drive_link",
        "https://drive.google.com/file/d/1TvSoW6IIXIL9ZNJkvkz7LsLNbAmxu0V9/view?usp=drive_link",
        "https://drive.google.com/file/d/1TvSoW6IIXIL9ZNJkvkz7LsLNbAmxu0V9/view?usp=drive_link",
        "https://drive.google.com/file/d/1TvSoW6IIXIL9ZNJkvkz7LsLNbAmxu0V9/view?usp=drive_link",
        "https://drive.google.com/file/d/1TvSoW6IIXIL9ZNJkvkz7LsLNbAmxu0V9/view?usp=drive_link",
        "https://drive.google.com/file/d/1TvSoW6IIXIL9ZNJkvkz7LsLNbAmxu0V9/view?usp=drive_link",
        "https://drive.google.com/file/d/1TvSoW6IIXIL9ZNJkvkz7LsLNbAmxu0V9/view?usp=drive_link",
        "https://drive.google.com/file/d/1TvSoW6IIXIL9ZNJkvkz7LsLNbAmxu0V9/view?usp=drive_link",
        "https://drive.google.com/file/d/1TvSoW6IIXIL9ZNJkvkz7LsLNbAmxu0V9/view?usp=drive_link",
        "https://drive.google.com/file/d/1TvSoW6IIXIL9ZNJkvkz7LsLNbAmxu0V9/view?usp=drive_link",
        "https://drive.google.com/file/d/1TvSoW6IIXIL9ZNJkvkz7LsLNbAmxu0V9/view?usp=drive_link",

      ],
    },
  ];

  // Create container for accordions
  const accordionContainer = document.createElement("div");
  accordionContainer.className = "accordion-container";

  // Create accordions for the configuration
  accordionConfigurations.forEach((accordionConfig) => {
    let pdfIndex = 0;
    const totalAccordions = accordionConfig.cardCounts.length;

    for (let accordionIndex = 0; accordionIndex < totalAccordions; accordionIndex++) {
      const cardCount = accordionConfig.cardCounts[accordionIndex];

      const details = document.createElement("details");
      details.className = "accordion-item";

      // Create summary for each accordion with custom name
      const summary = document.createElement("summary");
      summary.textContent = accordionConfig.accordionNames[accordionIndex] || `Accordion ${accordionIndex + 1}`;
      details.appendChild(summary);

      // Create card wrapper for this accordion
      const cardWrapper = document.createElement("div");
      cardWrapper.className = "cards-wrapper";

      // Create cards for this accordion
      for (let i = 0; i < cardCount; i++) {
        const card = document.createElement("div");
        card.className = "cards-inner";

        // First card sub-inner div
        const cardSubInner1 = document.createElement("div");
        cardSubInner1.className = "cards-sub-inner-1";

        const img1 = document.createElement("img");
        img1.src =
          "https://www.ultratechcement.com/content/dam/ultratechcement/ultratech-images/pdf-icon.jpg";
        img1.alt = `Image ${pdfIndex + 1}A`;
        img1.className = "image-1";
        cardSubInner1.appendChild(img1);

        const p1 = document.createElement("p");
        p1.textContent = accordionConfig.pdfTitles[pdfIndex];
        cardSubInner1.appendChild(p1);

        // Second card sub-inner div with download link
        const cardSubInner2 = document.createElement("div");
        cardSubInner2.className = "cards-sub-inner-2";

        const img2 = document.createElement("img");
        img2.src =
          "https://www.ultratechcement.com/content/dam/ultratechcement/icons/Download.png";
        img2.alt = `Image ${pdfIndex + 1}B`;
        img2.className = "image-2";
        cardSubInner2.appendChild(img2);

        const p2 = document.createElement("p");
        p2.textContent = "Download";
        cardSubInner2.appendChild(p2);

        // Create download link
        const link = document.createElement("a");
        link.href = accordionConfig.pdfUrls[pdfIndex];
        link.target = "_blank";
        link.appendChild(cardSubInner2);

        // Assemble card
        card.appendChild(cardSubInner1);
        card.appendChild(link);
        cardWrapper.appendChild(card);

        pdfIndex++; // Increment for next card
      }

      // Append card wrapper to accordion item
      details.appendChild(cardWrapper);
      accordionContainer.appendChild(details);
    }
  });

  // Replace original block with accordion container
  block.innerHTML = "";
  block.appendChild(accordionContainer);
}
