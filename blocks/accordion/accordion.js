export default function decorateAccordionTabs(block) {
  // Define configurations for each tab
  const tabConfigurations = [
    {
      cardCounts: [3, 10, 6, 9, 5],  // 5 accordions for Tab 1
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
      ],
      pdfUrls: [
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
      ]
    },
    {
      cardCounts: [4, 5, 3, 6],  // 4 accordions for Tab 2
      pdfTitles: [
        "Strategic Plan 2024",
        "Market Expansion Report",
        "Product Innovation Overview",
        "Customer Satisfaction Survey",
        "Operational Efficiency Analysis",
        "Technology Integration Report",
        "Global Market Trends",
        "Research & Development Insights"
      ],
      pdfUrls: [
        "https://example.com/pdfs/StrategicPlan2024.pdf",
        "https://example.com/pdfs/MarketExpansionReport.pdf",
        "https://example.com/pdfs/ProductInnovation.pdf",
        "https://example.com/pdfs/CustomerSatisfaction.pdf",
        "https://example.com/pdfs/OperationalEfficiency.pdf",
        "https://example.com/pdfs/TechIntegration.pdf",
        "https://example.com/pdfs/GlobalMarketTrends.pdf",
        "https://example.com/pdfs/RnDInsights.pdf"
      ]
    },
    {
      cardCounts: [8, 7, 6, 5, 4, 3],  // 6 accordions for Tab 3
      pdfTitles: [
        "Environmental Sustainability 2024",
        "Carbon Footprint Reduction",
        "Green Technology Initiatives",
        "Community Development Programs",
        "Renewable Energy Investments",
        "Waste Management Strategy",
        "Biodiversity Conservation",
        "Climate Change Mitigation",
        "Sustainable Supply Chain",
        "Water Conservation Report",
        "Social Impact Assessment",
        "Circular Economy Approach",
        "Employee Wellness Program",
        "Ethical Sourcing Guidelines",
        "Diversity and Inclusion Report"
      ],
      pdfUrls: [
        "https://example.com/pdfs/Sustainability2024.pdf",
        "https://example.com/pdfs/CarbonFootprint.pdf",
        "https://example.com/pdfs/GreenTech.pdf",
        "https://example.com/pdfs/CommunityDev.pdf",
        "https://example.com/pdfs/RenewableEnergy.pdf",
        "https://example.com/pdfs/WasteManagement.pdf",
        "https://example.com/pdfs/Biodiversity.pdf",
        "https://example.com/pdfs/ClimateChange.pdf",
        "https://example.com/pdfs/SustainableSupplyChain.pdf",
        "https://example.com/pdfs/WaterConservation.pdf",
        "https://example.com/pdfs/SocialImpact.pdf",
        "https://example.com/pdfs/CircularEconomy.pdf",
        "https://example.com/pdfs/EmployeeWellness.pdf",
        "https://example.com/pdfs/EthicalSourcing.pdf",
        "https://example.com/pdfs/DiversityInclusion.pdf"
      ]
    }
  ];

  // Create tab container
  const tabContainer = document.createElement('div');
  tabContainer.className = 'tabs-container';

  // Create tab navigation
  const tabNav = document.createElement('div');
  tabNav.className = 'tab-navigation';

  // Create tab content container
  const tabContentContainer = document.createElement('div');
  tabContentContainer.className = 'tab-content-container';

  // Create tabs and tab content for each configuration
  tabConfigurations.forEach((tabConfig, tabIndex) => {
    // Create tab button
    const tabButton = document.createElement('button');
    tabButton.className = `tab-button ${tabIndex === 0 ? 'active' : ''}`;
    tabButton.textContent = `Tab ${tabIndex + 1}`;
    tabButton.setAttribute('data-tab', tabIndex);
    tabNav.appendChild(tabButton);

    // Create tab content
    const tabContent = document.createElement('div');
    tabContent.className = `tab-content ${tabIndex === 0 ? 'active' : ''}`;
    tabContent.setAttribute('data-tab', tabIndex);

    // Distribute the accordions across tabs
    let pdfIndex = 0;
    const totalAccordions = tabConfig.cardCounts.length;

    for (let accordionIndex = 0; accordionIndex < totalAccordions; accordionIndex++) {
      const cardCount = tabConfig.cardCounts[accordionIndex];

      const details = document.createElement('details');
      details.className = 'accordion-item';

      // Create summary for each accordion
      const summary = document.createElement('summary');
      summary.textContent = `Accordion ${accordionIndex + 1}`;
      details.appendChild(summary);

      // Create card wrapper for this accordion
      const cardWrapper = document.createElement('div');
      cardWrapper.className = 'cards-wrapper';

      // Create cards for this accordion
      for (let i = 0; i < cardCount; i++) {
        const card = document.createElement('div');
        card.className = 'cards-inner';

        // First card sub-inner div
        const cardSubInner1 = document.createElement('div');
        cardSubInner1.className = 'cards-sub-inner-1';

        const img1 = document.createElement('img');
        img1.src = 'https://www.ultratechcement.com/content/dam/ultratechcement/ultratech-images/pdf-icon.jpg';
        img1.alt = `Image ${pdfIndex + 1}A`;
        img1.className = 'image-1';
        cardSubInner1.appendChild(img1);

        const p1 = document.createElement('p');
        p1.textContent = tabConfig.pdfTitles[pdfIndex];
        cardSubInner1.appendChild(p1);

        // Second card sub-inner div with download link
        const cardSubInner2 = document.createElement('div');
        cardSubInner2.className = 'cards-sub-inner-2';

        const img2 = document.createElement('img');
        img2.src = 'https://www.ultratechcement.com/content/dam/ultratechcement/icons/Download.png';
        img2.alt = `Image ${pdfIndex + 1}B`;
        img2.className = 'image-2';
        cardSubInner2.appendChild(img2);

        const p2 = document.createElement('p');
        p2.textContent = 'Download';
        cardSubInner2.appendChild(p2);

        // Create download link
        const link = document.createElement('a');
        link.href = tabConfig.pdfUrls[pdfIndex];
        link.target = '_blank';
        link.appendChild(cardSubInner2);

        // Assemble card
        card.appendChild(cardSubInner1);
        card.appendChild(link);
        cardWrapper.appendChild(card);

        pdfIndex++;  // Increment for next card
      }

      // Append card wrapper to accordion item
      details.appendChild(cardWrapper);
      tabContent.appendChild(details);
    }

    // Add tab content to container
    tabContentContainer.appendChild(tabContent);
  });

  // Add navigation and content to tab container
  tabContainer.appendChild(tabNav);
  tabContainer.appendChild(tabContentContainer);

  // Replace original block with tabbed interface
  block.innerHTML = '';
  block.appendChild(tabContainer);

  // Add tab switching functionality
  tabContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('tab-button')) {
      const tabId = e.target.getAttribute('data-tab');

      // Remove active class from all buttons and content
      tabContainer.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
      tabContainer.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

      // Add active class to clicked tab and corresponding content
      e.target.classList.add('active');
      tabContainer.querySelector(`.tab-content[data-tab="${tabId}"]`).classList.add('active');
    }
  });
}
