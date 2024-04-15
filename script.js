const getData = () =>
    new Promise((resolve) => {
        const fetchPromise = fetch('https://jsonplaceholder.typicode.com/users')

        fetchPromise.then(fetchResult => {
            const jsonPromise = fetchResult.json()
            jsonPromise.then(jsonResult => {
                console.log(jsonResult)
                resolve(jsonResult) // "return jsonResult"
            })
        })
    })

getData().then(data => {
    console.log(data)
})

document.addEventListener('DOMContentLoaded', () => {
    const list = document.querySelector('#list')
    console.log(list)
    
    const name = 'Otakar Pupka'
    const img  = 'john-doe.png'
    const mail = 'pupka@example.com'
    list.innerHTML = `
        <div>
            <img src="${img}" alt="User Photo">
            <h2>${name}</h2>
            <a href="mailto:${mail}">
                ${mail}
            </a>
        </div>
    `
})