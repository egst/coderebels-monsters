/*
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
*/

// syntax sugar
// async a await
// async - asynchronous "asynchronní"

const getUsers = async () => {
    const fetchResult = await fetch('https://jsonplaceholder.typicode.com/users')
    return await fetchResult.json()
}

document.addEventListener('DOMContentLoaded', async () => {
    const list = document.querySelector('#list')

    const users = await getUsers()

    for (const user of users) {

        // TODO: vlozit odkaz na obrazek
        // user.id
        // 'https://robohash.org/15?set=set2'

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