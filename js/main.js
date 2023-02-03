const domainSearchInput = document.querySelector('#domainSearchInput');
const domainSearchBtn = document.querySelector('#domainSearchBtn');
const porkbunBaseUrl = 'https://porkbun.com/tld/reach?q=';
let searchValue = null;

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

        handleKeyPressOnSearchInput(event.key, isSearchValid);
    });
}

/**
 * Checks if `Enter` key was pressed on input.
 *
 * If the search value is valid, it will redirect to porkbun.
 *
 * @param {string} eventKey
 * @param {boolean} isSearchValid
 */
function handleKeyPressOnSearchInput(eventKey, isSearchValid) {
    if (eventKey === 'Enter' && isSearchValid) {
        redirectToPorkbun();
    }
}

/**
 * Redirects to porkbun's website with search value in the query params.
 */
function redirectToPorkbun() {
    window.open(`${porkbunBaseUrl}${searchValue}`);
}

/**
 * Listens to `click` event of domain search button.
 *
 * When clicked, it will redirect to porkbun.
 */
function listenToSearchButtonClick() {
    domainSearchBtn.addEventListener('click', () => {
        redirectToPorkbun();
    });
}

listenToSearchInputValue();
listenToSearchButtonClick();
