const getUsers = async () => {
    const fetchResult = await fetch('https://jsonplaceholder.typicode.com/users')
    return await fetchResult.json()
}

// Vsuvka: terminologie parametry vs argumenty
//
// Parametry - pri definici funkce:
// f = (a, b, c) => { a... }
//
// Argumenty - pri volani:
// f(1, 2, 3)

const renderUsers = (list, users, search) => {
    list.innerHTML = ''
    for (const user of users) {
        // Napoveda:
        // text1.includes(text2) - text1 obsahuje text2 (napr. 'foobar' obsahuje 'oob')
        // user.name             - uzivatelske jmeno
        // search                - vyhledavany text
        // text.toLowerCase()    - prevest vse na mala pismena (napr. 'FooBar' -> 'foobar')
        //
        // !  - not (negace)
        // || - or  (nebo)

        // Level 1:
        //if (user.name == search) {

        // Level 2:
        //if (user.name.includes(search)) {

        // Level 3:
        if (!search || user.name.toLowerCase().includes(search.toLowerCase())) {
            const imageUrl = `https://robohash.org/${user.id}?set=set2`

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

        // Alternativni zapis:

        /*
        if (!...) {
            continue
        }

        const imageUrl = `https://robohash.org/${user.id}?set=set2`

        list.innerHTML += `
            <div>
                <img src="${imageUrl}" alt="User Photo">
                <h2>${user.name}</h2>
                <a href="mailto:${user.email}">
                    ${user.email}
                </a>
            </div>
        `
        */
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    const list = document.querySelector('#list')

    const users = await getUsers()

    // Sem?
    renderUsers(list, users)

    const searchInput = document.querySelector('#search')
    searchInput.addEventListener('input', () => {
        renderUsers(list, users, searchInput.value)
    })
})