(function () {
    const nameInput = document.getElementById('name');
    const priceInput = document.getElementById('price');
    const timeInput = document.getElementById('time');
    const descriptionInput = document.getElementById('description');

    nameInput.value = localStorage.getItem('name') || '';
    priceInput.value = localStorage.getItem('price') || '';
    timeInput.value = localStorage.getItem('time') || '';
    descriptionInput.value = localStorage.getItem('description') || '';

    const form = document.getElementById('new-service-form')
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        localStorage.setItem('name', nameInput.value);
        localStorage.setItem('price', priceInput.value);
        localStorage.setItem('time', timeInput.value);
        localStorage.setItem('description', descriptionInput.value);

        const serviceListItem = document.createElement('li');

        const serviceName = document.createElement('h4');
        serviceName.textContent = nameInput.value + ' - ' + priceInput.value + 'р - ' + timeInput.value + 'мин.';
        serviceName.classList.add('services-list__service-name')
        serviceListItem.appendChild(serviceName)

        const serviceDescription = document.createElement('p')
        serviceDescription.textContent = descriptionInput.value
        serviceListItem.appendChild(serviceDescription)

        const serviceList = document.getElementById('added-services');
        serviceList.appendChild(serviceListItem)

        nameInput.value = '';
        timeInput.value = '';
        descriptionInput.value = '';
        priceInput.value = '';
    })
})();
