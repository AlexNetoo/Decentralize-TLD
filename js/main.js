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
    domainSearchInput.addEventListener('keyup', () => {
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
 * Listens to `click` event of domain search button.
 *
 * When clicked, button will redirect to porkbun's website with search value in the query params.
 */
function listenToSearchButtonClick() {
    domainSearchBtn.addEventListener('click', () => {
        window.open(`${porkbunBaseUrl}${searchValue}`);
    });
}

listenToSearchInputValue();
listenToSearchButtonClick();
