const domainSearchInput = document.querySelector('#domainSearchInput');
const domainSearchBtn = document.querySelector('#domainSearchBtn');
const tldDropdownContainer = document.querySelector('#tldDropdownContainer');
const tldDropdown = document.querySelector('#tldDropdown');
const porkbunBaseUrl = 'https://porkbun.com/checkout/search?q=';
let searchValue = null;
const tldDropdownOptions = [
    '.aca',
    '.blogging',
    '.fl3x',
    '.giveaways',
    '.reach',
    '.researcher',
    '.samples',
];

/**
 * Listens to `keyup` event of domain search input.
 *
 * Validates if search value is valid and if search button should be enabled/disabled.
 */
function listenToSearchInputValue() {
    domainSearchInput.addEventListener('keyup', (event) => {
        searchValue = `${domainSearchInput.value}`.trim().toLowerCase();
        const searchHasWhitespaces = searchValue.indexOf(' ') > -1;
        let isSearchValid = true;

        if (!searchValue || searchHasWhitespaces) {
            isSearchValid = false;
        }

        // Disable button if search value is not valid, otherwise enable it
        domainSearchBtn.disabled = !isSearchValid;
    });
}

/**
 * Redirects to porkbun's website with formatted domain name in the query params.
 *
 * @param {string} tldName
 */
function redirectToPorkbun(tldName) {
    if (!searchValue || !tldName) {
        return;
    }

    const formattedDomain = `${searchValue}${tldName}`;

    window.open(`${porkbunBaseUrl}${formattedDomain}`);
}

/**
 * Checks if cursor is over the domain button or dropdown to handle the latter's visibility logic.
 */
function handleTLDDropdownVisibility() {
    // Shows dropdown when hovering over domain button
    domainSearchBtn.addEventListener('mouseover', () => {
        tldDropdownContainer.classList.remove('hidden');
    });

    // Hides dropdown when mouse leaves domain button
    domainSearchBtn.addEventListener('mouseleave', () => {
        tldDropdownContainer.classList.add('hidden');
    });

    // Shows dropdown when hovering over TLD dropdown
    tldDropdownContainer.addEventListener('mouseover', () => {
        tldDropdownContainer.classList.remove('hidden');
    });

    // Hides dropdown when mouse leaves TLD dropdown
    tldDropdownContainer.addEventListener('mouseleave', () => {
        tldDropdownContainer.classList.add('hidden');
    });
}

/**
 * Adds options to TLD dropdown.
 */
function createTLDDropdownOptions() {
    tldDropdownOptions.forEach((option) => {
        const dropdownElement = document.createElement('div');

        dropdownElement.classList.add('dropdown-option');
        dropdownElement.appendChild(document.createTextNode(option));

        dropdownElement.addEventListener('click', () => {
            redirectToPorkbun(option);
        });

        tldDropdown.appendChild(dropdownElement);
    });
}

listenToSearchInputValue();
createTLDDropdownOptions();
handleTLDDropdownVisibility();
