const getUsers = () =>
    new Promise((resolve) => {
        const fetchPromise = fetch('https://jsonplaceholder.typicode.com/users')

        fetchPromise.then(fetchResult => {
            const jsonPromise = fetchResult.json()
            jsonPromise.then(jsonResult => {
                resolve(jsonResult) // "return jsonResult"
            })
        })
    })

document.addEventListener('DOMContentLoaded', () => {
    const list = document.querySelector('#list')

    getUsers().then(users => {
        for (const user of users) {
            list.innerHTML += `
                <div>
                    <img src="${null}" alt="User Photo">
                    <h2>${user.name}</h2>
                    <a href="mailto:${user.email}">
                        ${user.email}
                    </a>
                </div>
            `
        }
    })
})