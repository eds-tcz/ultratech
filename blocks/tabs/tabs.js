import { toClassName } from '../../scripts/aem.js';

export default async function decorate(block) {
  const tablist = document.createElement('div');
  tablist.className = 'tabs-list';
  tablist.setAttribute('role', 'tablist');

  // Extract tabs from the block (assuming they're the first child of each block)
  const tabs = [...block.children].map((child) => child.firstElementChild);
  tabs.forEach((tab, i) => {
    const id = toClassName(tab.textContent);  // Convert tab text to a valid ID

    // Get the tab panel for this tab
    const tabpanel = block.children[i];
    tabpanel.className = 'tabs-panel';
    tabpanel.id = `tabpanel-${id}`;
    tabpanel.setAttribute('aria-hidden', !!i);  // Hide all but the first panel
    tabpanel.setAttribute('aria-labelledby', `tab-${id}`);
    tabpanel.setAttribute('role', 'tabpanel');

    const tabpanelDivs = tabpanel.querySelectorAll('div');
    tabpanelDivs.forEach(div => {
      div.classList.add('accordion-item');
    });

    applyAccordionToSubItems(tabpanel);

    // Create the button for this tab
    const button = document.createElement('button');
    button.className = 'tabs-tab';
    button.id = `tab-${id}`;
    button.innerHTML = tab.innerHTML;
    button.setAttribute('aria-controls', `tabpanel-${id}`);
    button.setAttribute('aria-selected', !i);  // Set first tab as selected
    button.setAttribute('role', 'tab');
    button.setAttribute('type', 'button');

    // Click event for handling tab switch
    button.addEventListener('click', () => {
      // Hide all tab panels
      block.querySelectorAll('[role=tabpanel]').forEach((panel) => {
        panel.setAttribute('aria-hidden', true);
      });

      // Remove 'active-tab' class from all tabs
      tablist.querySelectorAll('button').forEach((btn) => {
        btn.setAttribute('aria-selected', false);
        btn.classList.remove('active-tab');  // Remove active class
      });

      // Show the selected tab's panel
      tabpanel.setAttribute('aria-hidden', false);

      // Add 'active-tab' class to the clicked button
      button.setAttribute('aria-selected', true);
      button.classList.add('active-tab');  // Add active class to the clicked tab
    });

    tablist.append(button);
    tab.remove();  // Remove original tab element
  });

  // Prepend the tab list to the block
  block.prepend(tablist);
}

function applyAccordionToSubItems(tabpanel) {
  const subItems = tabpanel.querySelectorAll('.accordion-item');

  // Skip the first item (if needed) and transform the rest into accordion items
  const itemsToTransform = Array.from(subItems).slice(1);

  itemsToTransform.forEach((subItem) => {
    const details = document.createElement('details');
    details.classList.add('accordion-item');

    const summary = document.createElement('summary');
    summary.classList.add('accordion-item-label');
    summary.innerHTML = subItem.innerHTML;
    details.appendChild(summary);

    const body = document.createElement('div');
    body.classList.add('accordion-item-body');

    // Move all child elements of subItem into the accordion body
    while (subItem.firstChild) {
      body.appendChild(subItem.firstChild);
    }

    details.appendChild(body);
    subItem.replaceWith(details);
  });
}
