window.addEventListener('load', loadOrders);

async function loadOrders() {
    await new Promise(resolve => setTimeout(resolve, 3000));
    try {
        fetch("https://zhelemish.free.beeceptor.com/todos")
            .then(checkResponse)
            .then(orders => addOrders(orders))
            .catch(error => console.error(error));
    }
    catch(err) {
        alert(`Loading error - ${err.toString()}`);
    }
}

function createOrderPanel(order) {
    const image = document.createElement("img")
    image.src = "images/person.svg"
    image.alt = "placeholder"

    const orderAccountImage = document.createElement("div")
    orderAccountImage.classList.add("order-account-image")
    orderAccountImage.appendChild(image)

    const orderAccountName = document.createElement("p")
    orderAccountName.classList.add("order-account-name")
    orderAccountName.textContent = order.name

    const orderServices = document.createElement("ul")
    orderServices.classList.add("order-services")
    for (let i = 0; i < order.services.length; i++) {
        const orderService = document.createElement("li")
        orderService.textContent = order.services[i]
        orderServices.appendChild(orderService)
    }

    const orderAccountData = document.createElement("div")
    orderAccountData.classList.add("order-account-data")
    orderAccountData.appendChild(orderAccountName)
    orderAccountData.appendChild(orderServices)

    const orderData = document.createElement("div")
    orderData.classList.add("order-data")
    orderData.appendChild(orderAccountImage)
    orderData.appendChild(orderAccountData)

    const acceptButton = document.createElement("button")
    acceptButton.classList.add("order-button")
    acceptButton.textContent = "Принять"

    const rejectButton = document.createElement("button")
    rejectButton.classList.add("order-button")
    rejectButton.textContent = "Отказать"

    const orderButtonsPanel = document.createElement("div")
    orderButtonsPanel.classList.add("order-buttons-panel")
    orderButtonsPanel.appendChild(acceptButton)
    orderButtonsPanel.appendChild(rejectButton)

    const orderPanel = document.createElement("div")
    orderPanel.classList.add("order-panel")
    orderPanel.appendChild(orderData)
    orderPanel.appendChild(orderButtonsPanel)

    return orderPanel
}

function addOrders(orders) {
    const ordersList = document.getElementById('orders-list');
    for (let i = 0; i < orders.length; i++) {
        ordersList.appendChild(createOrderPanel(orders[i]))
    }
    let preloader = document.getElementById('orders-preloader-container');
    preloader.style.display = "none";
}

async function checkResponse(response) {
    if (!response.ok) {
        throw new Error(`Error when getting url ${response.url}`);
    }
    return response.json();
}
