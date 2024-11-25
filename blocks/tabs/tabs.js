import { toClassName } from '../../scripts/aem.js';

export default async function decorate(block) {

  const tablist = document.createElement('div');
  tablist.className = 'tabs-list';
  tablist.setAttribute('role', 'tablist');

  const tabs = [...block.children].map((child) => child.firstElementChild);
  tabs.forEach((tab, i) => {
    const id = toClassName(tab.textContent);

    const tabpanel = block.children[i];
    tabpanel.className = 'tabs-panel';
    tabpanel.id = `tabpanel-${id}`;
    tabpanel.setAttribute('aria-hidden', !!i);
    tabpanel.setAttribute('aria-labelledby', `tab-${id}`);
    tabpanel.setAttribute('role', 'tabpanel');

    const tabpanelDivs = tabpanel.querySelectorAll('div');
    tabpanelDivs.forEach(div => {
      div.classList.add('tabs-panel-sub'); 
    });

    applyAccordionToSubItems(tabpanel);

    const button = document.createElement('button');
    button.className = 'tabs-tab';
    button.id = `tab-${id}`;
    button.innerHTML = tab.innerHTML;
    button.setAttribute('aria-controls', `tabpanel-${id}`);
    button.setAttribute('aria-selected', !i);
    button.setAttribute('role', 'tab');
    button.setAttribute('type', 'button');
    button.addEventListener('click', () => {
      block.querySelectorAll('[role=tabpanel]').forEach((panel) => {
        panel.setAttribute('aria-hidden', true);
      });
      tablist.querySelectorAll('button').forEach((btn) => {
        btn.setAttribute('aria-selected', false);
      });
      tabpanel.setAttribute('aria-hidden', false);
      button.setAttribute('aria-selected', true);
    });
    tablist.append(button);
    tab.remove();
  });

  block.prepend(tablist);
}

function applyAccordionToSubItems(tabpanel) {
  const subItems = tabpanel.querySelectorAll('.tabs-panel-sub');

  // Transform all items except the first one (if you want to skip the first one, otherwise remove slice(1))
  const itemsToTransform = Array.from(subItems).slice(1); 

  itemsToTransform.forEach((subItem) => {
    // Create a new <details> element for each subItem
    const details = document.createElement('details');
    details.classList.add('accordion-item');

    // Create the <summary> element which will act as the header for the accordion
    const summary = document.createElement('summary');
    summary.classList.add('accordion-item-label');
    summary.innerHTML = subItem.innerHTML; // Use subItem's content directly for summary
    details.appendChild(summary); // Add summary to the details

    // Create the <div> for the accordion's body, containing the content
    const body = document.createElement('div');
    body.classList.add('accordion-item-body');

    // Move the actual content from the subItem into the body (don't duplicate)
    while (subItem.firstChild) {
      body.appendChild(subItem.firstChild); // Append all child elements to the body
    }

    details.appendChild(body); // Add the body to the details

    // Replace the original subItem with the details element
    subItem.replaceWith(details);
  });
}

