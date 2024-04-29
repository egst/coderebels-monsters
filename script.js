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

// TODO: Search.
// GPT hint: https://chat.openai.com/share/f3ed1b48-f208-4b0c-8d08-45c7b5c9c9b5

document.addEventListener('DOMContentLoaded', async () => {
    const list = document.querySelector('#list')

    const users = await getUsers()

    for (const user of users) {
        const imageUrl = `https://robohash.org/${user.id}?set=set2`
        //const imageUrl = `/pictures/${user.id}.png`

        list.innerHTML += `
            <div>
                <img src="${imageUrl}" alt="User Photo">
                <h2>${user.name}</h2>
                <a href="mailto:${user.email}">
                    ${user.email}
                </a>
            </div>
        `
    }
})