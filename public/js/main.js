const RESOURCE_URI = 'http://localhost:9000/'
const ajaxButtons = document.querySelectorAll('.js-ajax')
const request = options => {
    fetch(RESOURCE_URI, options)
        .then(res => res.text())
        .then(text => console.log(text))
}

ajaxButtons.forEach(ajaxButton => {
    const method = ajaxButton.dataset.method
    const credentials = ajaxButton.dataset.credentials

    ajaxButton.addEventListener('click', () => {
        const options = {}
        options.method = method
        if (credentials !== undefined) options.credentials = credentials
        request(options)
    })
})
