function activateAPIModal() {
    keyEntry = document.getElementById('apiKeyEntry');
    keyEntry.value = apiKey;
    apiModal = document.getElementById('apiModalOverlay');
    apiModal.style.display = 'block';
}

var apiKey = ''

function checkApiKey() {
    apiKey = localStorage.getItem('apiKey');
    if (! apiKey) {
	apiModal = document.getElementById('apiModalOverlay');
	apiModal.style.display = 'block';
    }
}

function collectApiKey() {
    apiKey = document.getElementById('apiKeyEntry').value;
    localStorage.setItem('apiKey', apiKey);
    apiModal = document.getElementById('apiModalOverlay');
    apiModal.style.display = 'none';
}
